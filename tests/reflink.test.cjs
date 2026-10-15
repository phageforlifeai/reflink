const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

// The published product is a self-contained HTML file; exercise exactly the
// library shipped inside it, without a server or a network connection.
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const source = html.match(/<script id="reflink-lib">([\s\S]*?)<\/script>/);
assert.ok(source, 'inline library exists');
const context = { setTimeout, clearTimeout, setImmediate, clearImmediate,
  Promise, Uint8Array, ArrayBuffer, Blob, TextDecoder, TextEncoder };
vm.runInNewContext(source[1], context, { filename: 'reflink-lib.js' });
const lib = context.RefLinkLib;
const plain = value => JSON.parse(JSON.stringify(value));

const escape = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const run = (text, pr = '') => `<w:r>${pr}<w:t xml:space="preserve">${escape(text)}</w:t></w:r>`;
const para = (...parts) => `<w:p>${parts.join('')}</w:p>`;
const doc = (...paras) => `<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${paras.join('')}</w:body></w:document>`;
const sup = text => run(text, '<w:rPr><w:vertAlign w:val="superscript"/></w:rPr>');
const refs = (labels) => [para(run('References')), ...labels.map((n) => para(run(`[${n}] Author${n} A. Title ${n}. 2020.`)))];
const numbers = cites => cites.filter(c => c.kind === 'numbered');
const vals = c => Array.from(c.numbers || []);
const mapped = (cites, entries) => lib.autoMap(cites, [], entries);

function validateOffsets(xml, cites) {
  const body = lib.scanParagraphs(xml).paras.filter(p => p.body);
  for (const c of cites) for (const occ of c.occurrences)
    assert.equal(body[occ.para].text.slice(occ.start, occ.end), occ.text);
}

test('parses groups, ranges, mixed separators, deduplicates, and rejects reversed ranges', () => {
  assert.deepEqual(Array.from(lib.parseNumberList('3, 1–2; 2, 5—7')), [3, 1, 2, 5, 6, 7]);
  assert.deepEqual(Array.from(lib.parseNumberList('¹-³,⁵')), [1, 2, 3, 5]);
  assert.equal(lib.parseNumberList('5–2'), null);
  assert.equal(lib.parseNumberList('1, abc'), null);
});

test('detects bracketed, parenthesized, Unicode and Word superscript citations across runs', () => {
  const xml = doc(
    para(run('Prior work '), run('['), run('1–3; '), run('5]'), run(' compares (2, 4) and also ¹,³.')),
    para(run('Another study'), sup('3, 4–5'), run(' confirmed this; m² is a unit.')),
    para(run('Fig. (2) and Table 3 (4). Equation y = x (1). See [2020] or (2020) for a date.')),
    ...refs([1, 2, 3, 4, 5])
  );
  const cited = lib.extractCitations(xml).citations;
  const num = numbers(cited);
  assert.deepEqual(plain(num.map(c => c.display)), ['[1–3; 5]', '(2, 4)', '¹,³', '3, 4–5']);
  assert.deepEqual(plain(num.map(vals)), [[1, 2, 3, 5], [2, 4], [1, 3], [3, 4, 5]]);
  validateOffsets(xml, cited);
  const map = mapped(cited, lib.extractReferences(xml).entries);
  assert.deepEqual(Array.from(map[num[0].cid].refs), ['ref1', 'ref2', 'ref3', 'ref5']);
  assert.equal(map[num[0].cid].mode, 'numbered');
  assert.ok(num.every(c => map[c.cid].note === 'auto'));
});

test('maps typed reference numbers rather than assuming the entry position is its label', () => {
  const xml = doc(para(run('Cited [5, 1–2], again [5,1-2].')), ...refs([2, 5, 1]));
  const r = lib.extractReferences(xml);
  const c = numbers(lib.extractCitations(xml).citations);
  const map = mapped(c, r.entries);
  assert.equal(c.length, 1, 'equivalent punctuation is one mapping with two occurrences');
  assert.equal(c[0].occurrences.length, 2);
  assert.deepEqual(vals(c[0]), [5, 1, 2]);
  assert.deepEqual(Array.from(map[c[0].cid].refs), ['ref2', 'ref3', 'ref1']);
});

test('Word auto-numbered references have no text prefix and map by bibliography order', () => {
  const numPr = '<w:pPr><w:numPr><w:ilvl w:val="0"/><w:numId w:val="1"/></w:numPr></w:pPr>';
  const xml = doc(para(run('Cited [1-3].')), para(run('References')),
    ...['First F. A title. 2019.', 'Second S. Another title. 2020.', 'Third T. Last title. 2021.']
      .map(s => para(numPr, run(s))));
  const entries = lib.extractReferences(xml).entries;
  assert.deepEqual(plain(entries.map(e => e.number)), [null, null, null]);
  const c = numbers(lib.extractCitations(xml).citations)[0];
  assert.deepEqual(Array.from(mapped([c], entries)[c.cid].refs), ['ref1', 'ref2', 'ref3']);
});

test('missing, repeated, zero and malformed reference numbers require manual review', () => {
  const xml = doc(para(run('These are [0], [2], [3], and [4–2].')), ...refs([1, 2, 2]));
  const r = lib.extractReferences(xml), cites = numbers(lib.extractCitations(xml).citations);
  assert.match(r.warnings.join(' '), /Repeated reference numbers 2/);
  const map = mapped(cites, r.entries);
  assert.equal(cites.length, 4);
  assert.ok(cites.every(c => map[c.cid].refs.length === 0));
  assert.match(map[cites[0].cid].note, /not in bibliography/);
  assert.match(map[cites[1].cid].note, /repeated/);
  assert.match(map[cites[2].cid].note, /not in bibliography/);
  assert.match(map[cites[3].cid].note, /invalid numbered citation/);
});

test('pasted one-per-line and multi-line numbered references retain their labels and DOI', () => {
  const entries = lib.parseReferenceEntries(['[12] Smith A. First title. 2020. doi:10.1234/example',
    'more details about the journal', '3. Jones B. Second title. 2021.', '4) Lee C. Third title. 2022.']);
  assert.deepEqual(plain(entries.map(e => e.number)), [12, 3, 4]);
  assert.match(entries[0].text, /more details about the journal/);
  assert.equal(entries[0].doi, '10.1234/example');
  assert.match(entries[1].text, /^Jones/);
});

test('author-year citations still parse and match independently of numeric ones', () => {
  const xml = doc(para(run('Smith (2020) and (Jones, 2021) agree with [1].')),
    para(run('References')), para(run('[1] Smith A. (2020). First title.')),
    para(run('[2] Jones B. (2021). Second title.')));
  const cites = lib.extractCitations(xml).citations;
  assert.deepEqual(plain(cites.map(c => c.kind)), ['narrative', 'paren', 'numbered']);
  validateOffsets(xml, cites);
  const map = mapped(cites, lib.extractReferences(xml).entries);
  assert.deepEqual(plain(cites.map(c => Array.from(map[c.cid].refs))), [['ref1'], ['ref2'], ['ref1']]);
  assert.equal(map[cites[0].cid].mode, 'narrative');
  assert.equal(map[cites[1].cid].mode, 'parenthetical');
});

test('linking preserves original numeric markers, their CSL items and surrounding Word formatting', () => {
  const xml = doc(
    para(run('Evidence ', '<w:rPr><w:b/></w:rPr>'), run('['), run('1–2'), run(']'),
      run(' is persuasive; as discussed '), sup('2'), run('.')),
    ...refs([1, 2])
  );
  const entries = lib.extractReferences(xml).entries;
  const citations = lib.extractCitations(xml).citations;
  const map = mapped(citations, entries);
  const out = lib.linkXml(xml, [], null, citations, map);
  assert.equal(out.error, undefined);
  assert.equal(out.linkedCount, 2);
  assert.equal(out.biblCount, 2);
  assert.deepEqual(plain(out.warnings), []);
  assert.equal((out.xml.match(/ADDIN ZOTERO_ITEM CSL_CITATION/g) || []).length, 2);
  assert.match(out.xml, /formattedCitation":"\[1–2\]"/);
  assert.match(out.xml, /formattedCitation":"2"/);
  assert.match(out.xml, /<w:rPr><w:b\/><\/w:rPr><w:t xml:space="preserve">Evidence <\/w:t>/);
  assert.match(out.xml, /<w:rPr><w:vertAlign w:val="superscript"\/><\/w:rPr><w:t xml:space="preserve">2<\/w:t>/);
  assert.match(out.xml, /"date-parts":\[\[2020\]\]/);
  assert.match(out.xml, /_GoBack/);
  assert.ok(out.xml.endsWith('</w:document>'), 'first-paragraph bookmark did not truncate the document');
  assert.equal((out.xml.match(/<w:p>/g) || []).length, (out.xml.match(/<\/w:p>/g) || []).length);
});

test('complex markup is left intact rather than flattened into plain text', () => {
  const xml = doc(para(run('See '), '<w:hyperlink r:id="link1">', run('[1]'), '</w:hyperlink>', run(' and [2].')),
    ...refs([1, 2]));
  const citations = lib.extractCitations(xml).citations;
  const out = lib.linkXml(xml, [], null, citations,
    mapped(citations, lib.extractReferences(xml).entries));
  assert.equal(out.linkedCount, 1);
  assert.match(out.warnings.join(' '), /Skipped 1 citation/);
  assert.match(out.xml, /<w:hyperlink r:id="link1"><w:r><w:t xml:space="preserve">\[1\]<\/w:t><\/w:r><\/w:hyperlink>/);
  assert.match(out.xml, /ADDIN ZOTERO_ITEM CSL_CITATION/);
});

test('numeric XML entities are decoded before matching while offsets still fit decoded text', () => {
  const xml = doc(para('<w:r><w:t>Results [1&#x2013;2] and&#32;[2]</w:t></w:r>'), ...refs([1, 2]));
  const citations = lib.extractCitations(xml).citations;
  assert.deepEqual(plain(numbers(citations).map(vals)), [[1, 2], [2]]);
  validateOffsets(xml, citations);
  const out = lib.linkXml(xml, [], null, citations, mapped(citations, lib.extractReferences(xml).entries));
  assert.equal(out.linkedCount, 2);
});

test('offline Word fields give distinct IDs to different same-author, same-year references', () => {
  const xml = doc(para(run('Both studies [1, 2] agree.')), para(run('References')),
    para(run('[1] Smith A. First paper. 2020.')), para(run('[2] Smith B. Second paper. 2020.')));
  const citations = lib.extractCitations(xml).citations;
  const out = lib.linkXml(xml, [], null, citations, mapped(citations, lib.extractReferences(xml).entries));
  const instr = out.xml.match(/<w:instrText xml:space="preserve"> ADDIN ZOTERO_ITEM CSL_CITATION (.*?) <\/w:instrText>/);
  assert.ok(instr);
  const items = JSON.parse(instr[1]).citationItems;
  assert.equal(items.length, 2);
  assert.notEqual(items[0].id, items[1].id);
  assert.equal(typeof items[0].uri, 'string');
});

test('an actual .docx zip can be parsed, linked and opened again', async () => {
  const zipSource = html.match(/<script id="jszip-inline">([\s\S]*?)<\/script>/);
  assert.ok(zipSource);
  vm.runInNewContext(zipSource[1], context, { filename: 'jszip-inline.js' });
  const zip = new context.JSZip();
  const xml = doc(para(run('See [1–2].')), ...refs([1, 2]));
  zip.file('word/document.xml', xml);
  const original = await zip.generateAsync({ type: 'uint8array' });
  const read = await lib.readXml(original);
  assert.equal(read, xml);
  const citations = lib.extractCitations(read).citations;
  const out = lib.linkXml(read, [], null, citations, mapped(citations, lib.extractReferences(read).entries));
  const downloaded = await lib.buildDocx(original, out.xml);
  const reopened = await lib.readXml(new Uint8Array(await downloaded.arrayBuffer()));
  assert.equal(out.linkedCount, 1);
  assert.match(reopened, /ADDIN ZOTERO_ITEM CSL_CITATION/);
  assert.match(reopened, /ADDIN ZOTERO_BIBL/);
});
