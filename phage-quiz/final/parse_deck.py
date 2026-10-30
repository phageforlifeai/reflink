#!/usr/bin/env python3
"""Parse the FINAL quiz deck (ICBRAR Quiz - AK.pdf) into /tmp/final_quiz_raw.json.

Robust option-text extraction: letters (A-D, magenta #bd0dff) are clustered into
rows/columns; every remaining text span is assigned to the nearest letter-cell
(row = last row whose y0 <= span.y0 + 45; col = last col whose x0 <= span.x0 + 60),
so multi-line / wrapped option text is captured COMPLETELY (fixes truncated
options such as Q11-B "A change in bacterial phenotype caused by prophage gene"
and all Round 11 quotes).

Also extracts: answers (gradient-box drawing that appears only on the pair's
second slide), audience flags, question slide JPEGs (base64) + letter bboxes for
reveal overlays, rapid-fire Q/A pairs, round dividers and the break slide.

Run:  .venv/bin/python phage-quiz/final/parse_deck.py [pdf_path]
"""
import base64
import json
import os
import re
import sys
from collections import Counter

import pymupdf

PDF = sys.argv[1] if len(sys.argv) > 1 else "/tmp/arena-coding-uploads/ICBRAR Quiz - AK.pdf"
OUT = "/tmp/final_quiz_raw.json"
IMGDIR = "/tmp/final_imgs"
ART = re.compile(r"^(ROUND\s*\d+|AUDIENCE|Tuberculosis|Mutation Generation Events|\d+\s*Points|\?)$", re.I)


def lines(p):
    return [l.strip() for l in p.get_text().split("\n") if l.strip()]


def spans(p):
    out = []
    for b in p.get_text("dict")["blocks"]:
        if b["type"] != 0:
            continue
        for l in b["lines"]:
            for s in l["spans"]:
                if s["text"].strip():
                    out.append({"t": s["text"], "c": s["color"], "sup": bool(s["flags"] & 1),
                                "x0": s["bbox"][0], "y0": s["bbox"][1],
                                "x1": s["bbox"][2], "y1": s["bbox"][3]})
    return out


SUP = {"0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷",
       "8": "⁸", "9": "⁹", "+": "⁺", "-": "⁻", "n": "ⁿ"}


def join_spans(slist):
    """join spans, marking superscripts as ^{..}"""
    out = []
    for s in sorted(slist, key=lambda s: (round(s["y0"] / 6), s["x0"])):
        out.append(("^{%s}" % s["t"].strip()) if s["sup"] else s["t"])
    return " ".join(out)


def clean(txt):
    txt = re.sub(r"\s*\^\{([^}]*)\}", lambda m: "".join(SUP.get(c, c) for c in m.group(1)), txt)
    txt = re.sub(r"(?<=\S)-\s+(?=\S)", "-", txt)    # wrap-broken hyphen compounds
    txt = re.sub(r"(?<=\S)–\s+(?=\S)", "–", txt)    # wrap-broken en-dash compounds
    txt = re.sub(r"\s+([,.;:])", r"\1", txt)        # space before punctuation
    return " ".join(txt.split())


def dkeys(p):
    return [(tuple(round(v, 1) for v in (d["rect"].x0, d["rect"].y0, d["rect"].x1, d["rect"].y1)),
             d["type"], d.get("fill") is not None, d.get("color") is not None)
            for d in p.get_drawings()]


def cluster(vals, tol):
    """cluster sorted values; return ascending list of cluster minima"""
    vals = sorted(vals)
    out = []
    for v in vals:
        if out and v - out[-1][-1] <= tol:
            out[-1].append(v)
        else:
            out.append([v])
    return [min(c) for c in out]


def pair_kind(a, b):
    la, lb = lines(a), lines(b)
    ca, cb = Counter(la), Counter(lb)
    if ca == cb:
        return "same"
    only_a, only_b = ca - cb, cb - ca
    if "?" in la and set(only_a) <= {"?"} and only_b:
        return ("rapid", [l for l in lb if ca[l] < cb[l]])
    return None


def parse_mcq(a, b, pageno):
    ka, kb = dkeys(a), dkeys(b)
    extra = [r for (r, *x) in kb if (r, *x) not in ka] or [r for (r, *x) in ka if (r, *x) not in kb]
    sp = spans(a)
    letters = [s for s in sp if s["t"].strip() in list("ABCD") and s["c"] == 0xbd0dff]
    if not letters:
        letters = [s for s in sp if len(s["t"].strip()) == 1 and s["t"].strip() in list("ABCD")]
    if len(letters) != 4:
        return None
    # rows / cols from letter positions
    rows = cluster([L["y0"] for L in letters], 40)
    cols = cluster([L["x0"] for L in letters], 120)

    def row_of(y):
        r = 0
        for i, ry in enumerate(rows):
            if ry <= y + 45:
                r = i
        return r

    def col_of(x):
        c = 0
        for i, cx in enumerate(cols):
            if cx <= x + 60:
                c = i
        return c

    for L in letters:
        L["cell"] = (row_of(L["y0"]), col_of(L["x0"]))
    letters.sort(key=lambda L: L["cell"])
    if [L["t"].strip() for L in letters] != list("ABCD"):     # fall back to alphabetical
        letters.sort(key=lambda L: L["t"].strip())
    top = min(L["y0"] for L in letters)

    qspans, cand, unassigned = [], [], []
    for s in sp:
        t = s["t"].strip()
        if s in letters or ART.match(t):
            continue
        if s["y1"] < top - 6:
            qspans.append(s)
        else:
            cand.append(s)
    q = clean(join_spans(qspans))

    cells = {L["t"].strip(): [] for L in letters}
    cellmap = {L["cell"]: L["t"].strip() for L in letters}
    for s in cand:
        cell = (row_of(s["y0"]), col_of(s["x0"]))
        if cell in cellmap:
            cells[cellmap[cell]].append(s)
        else:
            unassigned.append(s)
    options = [clean(join_spans(cells[Lt])) for Lt in "ABCD"]

    ans = None
    for r in extra:
        for L in letters:
            if r[0] - 40 <= L["x0"] <= r[2] + 450 and r[1] - 15 <= L["y0"] and L["y1"] <= r[3] + 15:
                ans = L["t"].strip()
                break
        if ans:
            break

    item = {"q": q, "options": options, "answer": ans, "slide": pageno,
            "audience": any(ART.match(x["t"].strip()) and x["t"].strip().upper() == "AUDIENCE" for x in sp),
            "letters": {L["t"].strip(): [round(L["x0"], 1), round(L["y0"], 1), round(L["x1"], 1), round(L["y1"], 1)] for L in letters},
            "unassigned": [u["t"].strip() for u in unassigned]}
    if a.get_images(full=True):
        os.makedirs(IMGDIR, exist_ok=True)
        pix = a.get_pixmap(dpi=100)
        fn = os.path.join(IMGDIR, f"s{pageno}.jpg")
        pix.save(fn, jpg_quality=82)
        item["img"] = base64.b64encode(open(fn, "rb").read()).decode()
    return item


def main():
    doc = pymupdf.open(PDF)
    n = doc.page_count
    i = 0
    mcqs, rapids, dividers, breaks = [], [], [], 0
    while i < n:
        p = doc[i]
        t = p.get_text().strip()
        if re.search(r"Break Time!", t):
            breaks += 1
            i += 1
            continue
        if re.search(r"Correct Answer", t) and len(t) < 130:
            L = [x.strip() for x in t.split("\n") if x.strip()]
            dividers.append({"title": L[0], "lines": L, "slide": i + 1})
            i += 1
            continue
        if i + 1 < n:
            pk = pair_kind(p, doc[i + 1])
            if pk == "same":
                m = parse_mcq(p, doc[i + 1], i + 1)
                if m:
                    mcqs.append(m)
                    i += 2
                    continue
            elif isinstance(pk, tuple):
                diff = pk[1]
                la = lines(p)
                qtxt = [l for l in la if not ART.match(l) and not l.startswith("Team") and not l.startswith("ROUND")]
                team = [l for l in la if l.startswith("Team")]
                if qtxt:
                    q = clean(" ".join(qtxt))
                    a = clean(" ".join(diff))
                else:
                    q = clean(diff[0])
                    a = clean(" ".join(diff[1:]))
                rapids.append({"team": team[0].replace("Team ", "").strip() if team else "", "q": q, "a": a, "slide": i + 1})
                i += 2
                continue
        i += 1

    json.dump({"mcqs": mcqs, "rapids": rapids, "dividers": dividers, "breaks": breaks}, open(OUT, "w"))

    # ---------------- validation report ----------------
    print(f"mcq={len(mcqs)} rapid={len(rapids)} dividers={len(dividers)} breaks={breaks}")
    no_ans = [m["slide"] for m in mcqs if m["answer"] not in list("ABCD")]
    empty_opt = [m["slide"] for m in mcqs if not m.get("img") and not all(o.strip() for o in m["options"])]
    unass = [(m["slide"], m["unassigned"]) for m in mcqs if m["unassigned"]]
    print("missing answers:", no_ans or "none")
    print("empty options (non-image slides):", empty_opt or "none")
    print("unassigned spans:", unass or "none")
    print("audience qs:", [m["slide"] for m in mcqs if m["audience"]])
    # spot checks reported by the user
    for m in mcqs:
        if "lysogenic conversion" in m["q"].lower():
            print("Q-lysogenic:", m["slide"], "B =", repr(m["options"][1]))
    laughs = [m for m in mcqs if m["slide"] >= 191]
    for m in laughs[:2]:
        print("laugh", m["slide"], [o[:44] for o in m["options"]])
    print("total option chars:", sum(sum(len(o) for o in m["options"]) for m in mcqs))
    print("wrote", OUT)


if __name__ == "__main__":
    main()
