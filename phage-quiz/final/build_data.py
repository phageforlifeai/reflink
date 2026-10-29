#!/usr/bin/env python3
"""Assemble phage-quiz/final/quiz-data.js from the parsed ICBRAR 2026 (AK) deck.

Input : /tmp/final_quiz_raw.json   (produced by the deck parser - mcqs/rapids/dividers)
Output: phage-quiz/final/quiz-data.js  (window.QUIZ = {...})
"""
import json, re

RAW = "/tmp/final_quiz_raw.json"
OUT = "phage-quiz/final/quiz-data.js"

raw = json.load(open(RAW))
mcqs = raw["mcqs"]
rapids = raw["rapids"]
dividers = raw["dividers"]

# ---- round windows ---------------------------------------------------------
bounds = []
for idx, d in enumerate(dividers):
    start = d["slide"]
    end = dividers[idx + 1]["slide"] if idx + 1 < len(dividers) else 10**6
    bounds.append((start, end))

def scoring(lines):
    c = w = 0
    t = ""
    for L in lines:
        m = re.match(r"Correct Answer:\s*\+?(-?\d+)", L)
        if m: c = int(m.group(1))
        m = re.match(r"Wrong Answer:\s*(-?\d+)", L)
        if m: w = int(m.group(1))
        m = re.match(r"Answer in\s*(.+)", L, re.I)
        if m: t = m.group(1).strip()
    return c, w, t

def nice_title(t):
    return t.strip().rstrip("?").title().replace("Round 8", "Round 8") if t.lower() == "rapid fire" else t.strip()

slides = []

slides.append({"type": "title"})
slides.append({"type": "teams", "teams": ["Lytic Legends", "Biofilm Breakers", "Phage Pharmers", "Virion Architects"]})
slides.append({"type": "rounds", "title": "Rounds", "items": [
    "Round 1: General Questions", "Round 2: History of Bacteriophages", "Round 3: Phage Related Protocols",
    "Round 4: Phage Informatics", "Round 5: Phage Research 2026", "5 min Break",
    "Round 6: Identify the Photos", "Round 7: Phage Acronyms", "Round 8: Rapid Fire",
    "Round 9: Tie-Breaker Round", "Round 10: Emoji Rebus", "Round 11: Lytic Laughs",
], "note": "Each round: 4 questions for Teams · 2 questions for Audience"})
slides.append({"type": "markings", "title": "Markings", "groups": [
    {"h": "Round 1 to Round 5", "rows": [["Correct Answer", "+10"], ["Wrong Answer", "0"]], "time": "30 sec"},
    {"h": "Round 6 to Round 7", "rows": [["Correct Answer", "+10"], ["Wrong Answer", "−5"]], "time": "30 sec"},
    {"h": "Rapid Fire Round", "rows": [["Correct Answer", "+5"], ["Wrong Answer", "0"]], "time": ""},
    {"h": "Tie-Breaker Round", "rows": [["Correct Answer", "+20"], ["Wrong Answer", "−10"]], "time": "1 min"},
    {"h": "Passed Question to Next Team", "rows": [["Correct Answer", "+5"], ["Wrong Answer", "0"]], "time": ""},
], "note": "No passing of questions"})

break_inserted = False
for rnum, (d, (start, end)) in enumerate(zip(dividers, bounds), start=1):
    c, w, t = scoring(d["lines"])
    title = d["title"]
    title = "Rapid Fire" if title.lower() == "rapid fire" else title.title().replace("Of", "of").replace("And", "and")
    if rnum == 6 and not break_inserted:
        slides.append({"type": "break", "title": "Break Time!", "mins": 5})
        break_inserted = True
    slides.append({"type": "divider", "round": rnum, "title": title, "correct": c, "wrong": w, "deckTime": t})
    for m in mcqs:
        if start < m["slide"] < end:
            q = {"type": "q", "round": rnum, "roundTitle": title, "qtext": m["q"], "options": m["options"],
                 "answer": m["answer"], "audience": bool(m.get("audience")), "correct": c, "wrong": w}
            if m.get("img"):
                q["img"] = m["img"]
                q["letters"] = m.get("letters") or {}
            slides.append(q)
    for r in rapids:
        if start < r["slide"] < end:
            slides.append({"type": "rapid", "round": rnum, "roundTitle": title, "team": r["team"],
                           "qtext": r["q"], "atext": r["a"], "correct": c, "wrong": w})

slides.append({"type": "end"})

quiz = {
    "meta": {
        "title": "START",
        "conference": "7th International Conference on Bacteriophage Research and Antimicrobial Resistance",
        "short": "ICBRAR 2026 · Quiz Finals",
        "tagline": "Lytic Legends · Biofilm Breakers · Phage Pharmers · Virion Architects",
    },
    "settings": {"readSeconds": 15, "answerSeconds": 30, "rapidAnswerSeconds": 30},
    "teams": ["Lytic Legends", "Biofilm Breakers", "Phage Pharmers", "Virion Architects"],
    "slides": slides,
}

# ---- sanity ----------------------------------------------------------------
nq = sum(1 for s in slides if s["type"] == "q")
nr = sum(1 for s in slides if s["type"] == "rapid")
nimg = sum(1 for s in slides if s["type"] == "q" and s.get("img"))
nans = sum(1 for s in slides if s["type"] == "q" and s.get("answer") in "ABCD" and s.get("options"))
assert nq == 63 and nr == 32 and nimg == 14, (nq, nr, nimg)
for s in slides:
    if s["type"] == "q":
        assert s["answer"] in "ABCD", s
        if not s.get("img"):
            assert all(o.strip() for o in s["options"]), s["qtext"][:50]
            assert len(s["options"]) == 4, s["qtext"][:50]
    if s["type"] == "rapid":
        assert s["qtext"] and s["atext"], s

with open(OUT, "w", encoding="utf-8") as f:
    f.write("window.QUIZ = ")
    json.dump(quiz, f, ensure_ascii=False, indent=1)
    f.write(";\n")

print(f"OK slides={len(slides)} mcq={nq} (img={nimg}, answered={nans}) rapid={nr}")
import os
print("quiz-data.js bytes:", os.path.getsize(OUT))
