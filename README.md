# RefLink 🔗

> **Re-link plain-text manuscript citations back to live, editable Zotero field codes in Microsoft Word.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Platform: Browser](https://img.shields.io/badge/Platform-Web%20%2F%20Offline-success.svg)](#)
[![Works With: Zotero](https://img.shields.io/badge/Works%20With-Zotero%206%20%2F%207%20%2F%2010+-red.svg)](#)
[![Zero-Server: 100% Client-Side](https://img.shields.io/badge/Privacy-100%25%20Client--Side-green.svg)](#)

**RefLink** is a lightweight, zero-dependency, single-file browser utility that restores the connection between plain-text (orphaned or unlinked) citations in Word manuscripts (`.docx`) and your Zotero library.

---

## 🌟 Key Features

- **No Server / 100% Private:** Your manuscript is never uploaded anywhere. All document unzipping, XML parsing, and field splicing happen entirely within your local browser.
- **Two Seamless Workflows:**
  - **Offline / `.bib` Import (Recommended):** Download the `.bib` bibliography file, import it directly into Zotero (`File → Import`), and generate the linked `.docx` without any API keys or network pairing.
  - **Direct Zotero Sync:** Connect to your local Zotero app (Zotero 10+) or Zotero Web API with an API key.
- **Automated Public Metadata Lookups:** Matches reference strings against **Crossref**, **OpenAlex**, **Semantic Scholar**, and **DataCite** to retrieve structured CSL JSON (DOIs, authors, years, journal titles).
- **Intelligent In-Text Citation Mapping:** Automatically detects and maps:
  - Parenthetical citations: `(Vaswani et al., 2017)`
  - Grouped citations: `(Vaswani et al., 2017; He et al., 2016)`
  - Narrative citations: `Vaswani et al. (2017)`
  - Numbered citations: `[1]`, `[1-3]`, `[1, 4]`
- **Native Word Field Generation:** Produces valid `ADDIN ZOTERO_ITEM CSL_CITATION` and `ADDIN ZOTERO_BIBL` Word fields with embedded CSL `itemData` that Microsoft Word and Zotero understand natively.
- **Fallback Metadata Handling:** Unmatched or custom references receive structured fallback metadata so that 100% of your citations are preserved and editable.

---

## 🚀 Quick Start (How to Use)

### Step 1: Open RefLink
- Open `index.html` (or host it free on GitHub Pages).
- Drag and drop your `.docx` manuscript into **Step 1** (or paste your bibliography).

### Step 2: Resolve References & Download `.bib`
1. Click **"Resolve all references"** in **Step 2**.
2. Click **"⬇ Download .bib"** to save your structured references file.

### Step 3: Import into Zotero Desktop
1. Open your **Zotero** desktop application.
2. Go to **File → Import…** and select the `.bib` file downloaded in Step 2.
3. Your references are now saved in your Zotero library!

### Step 4: Generate Linked Document
1. In RefLink, review the auto-mapped citation table in **Step 4**. (You can adjust any citation mapping with the multi-select dropdowns).
2. Click **"Generate linked .docx"**.
3. A new file named `[your-file]_zotero-linked.docx` will be downloaded.

### Step 5: Refresh in Microsoft Word
1. Open `[your-file]_zotero-linked.docx` in **Microsoft Word**.
2. Click the **Zotero** tab in the Word ribbon.
3. Click **Refresh** (choose your citation style, e.g., APA 7th, IEEE, Nature, Vancouver).
4. All citations and the bibliography are now live and fully linked!
5. Use Zotero's **Add/Edit Citation** button in Word to manually adjust or add any remaining citations.

---

## 🌐 Hosting Free on GitHub Pages

You can host this utility on GitHub Pages so you and your colleagues can access it from any browser:

1. Create a new repository on GitHub (e.g., `reflink`).
2. Upload the files from this repository (`index.html`, `README.md`, `LICENSE`).
3. In your GitHub repository, go to **Settings → Pages**.
4. Under **Branch**, select `main` (or `master`) and folder `/ (root)`, then click **Save**.
5. After 1–2 minutes, your live utility will be available at:
   ```
   https://<your-username>.github.io/reflink/
   ```

---

## 🆕 What's New in v1.1

- **Detects duplicated headings.** Some manuscripts mangle the reference heading into a doubled string (e.g. `ReferencesReferences`). The heading detector now un-doubles text before matching, so those documents parse normally.
- **Smarter year detection.** Years written with a letter suffix (`2019a`, `2017b`) are recognised in reference strings, not just bare four-digit years.
- **Better in-text citation capture.** Longer parenthetical groups are now matched (up to 160 characters), and disambiguation suffixes such as `(Vaswani et al., 2017a, 2017b)` are carried into the citation key instead of being dropped.
- **Rewritten citation → reference auto-mapping.** Mapping now scores every reference instead of taking the first fuzzy hit:
  - matches on the **first token of the reference's author block** (exact → high score, present anywhere → good score), falling back to structured author surnames after Crossref/Zotero resolution;
  - uses the **last** year in a citation, so corporate authors that contain a year (`GBD 2021 Diseases … 2024`) resolve correctly;
  - ignores filler words (`and`, `et`, `al`, `the`) when reading author names;
  - supports `a,b`-style suffixes by mapping to the top *n* matching references;
  - rewards year agreement and ranks candidates before choosing, which removes most wrong "first match" mappings.
- **Cleaner CSL payloads written into Word.** The `itemData` embedded in each field is normalised so the date is always emitted as `issued["date-parts"]`, which is what Zotero expects when it reads the field back.

---

## 📁 Repository Structure

```
├── index.html            # Main single-file web application (ready for GitHub Pages)
├── RefLink_utility.html  # Standalone copy for offline desktop use
├── README.md             # Documentation and usage guide
├── LICENSE               # MIT Open-Source License
├── package.json          # Optional Node.js scripts for local development
└── .gitignore            # Git ignore rules
```

---

## 💻 Local Development / Testing

Because RefLink is a self-contained single-page application with all dependencies (including JSZip) inlined, you can run it directly:

- **Option 1 (Direct):** Double-click `index.html` to open it in any web browser.
- **Option 2 (Local Server):**
  ```bash
  # Using Python:
  python3 -m http.server 8080

  # Or using Node.js npx:
  npx serve
  ```
  Then open `http://localhost:8080` in your browser.

---

## 🔒 Privacy & Security

- **Client-Side Only:** No document text or metadata is sent to any private server.
- **Public Metadata Lookups:** Reference lookups are sent directly from your browser to public APIs (Crossref, OpenAlex, Semantic Scholar, DataCite).
- **Zotero Credentials:** If you use the optional direct API key sync, your key is stored strictly in your browser's `localStorage` and sent only to `api.zotero.org`.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it.
