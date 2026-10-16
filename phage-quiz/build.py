#!/usr/bin/env python3
"""Build helper for the Phage Quiz.

Usage:  python3 build.py
  1. writes answer-key.md   — printable master copy (questions + correct answers)
  2. writes phage-quiz-standalone.html — single self-contained file (quiz data inlined)
"""
import json, re, pathlib

HERE = pathlib.Path(__file__).parent
src = (HERE / "quiz-data.js").read_text(encoding="utf-8")
data = json.loads(re.search(r"/\*QUIZ_JSON_START\*/(.*)/\*QUIZ_JSON_END\*/", src, re.S).group(1))

L = []
L.append(f"# {data['meta']['title']} — Master Copy & Answer Key")
L.append("")
L.append(f"*{data['meta']['subtitle']}*  ")
L.append(f"*{data['meta']['tagline']}*")
L.append("")
L.append("## Rounds & markings")
L.append("")
for r in data["rounds"]:
    if r["type"] == "break":
        L.append(f"- ☕ **Break** — {r['minutes']} min")
        continue
    sc = r["scoring"]
    extra = f", passed +{sc['pass']}" if sc.get("pass") else ""
    n = len(r["questions"]) if r["type"] != "rapid" else sum(len(t["questions"]) for t in r["teams"])
    badge = f"  🆕 *{r['badge']}*" if r.get("badge") else ""
    num = r["num"]; title = r["title"]
    L.append(f"- **Round {num} — {title}**: {n} questions, +{sc['correct']} / {sc['wrong']}, {sc['time']} s{extra}{badge}")
L.append("")
L.append("Teams: " + " · ".join(f"**{t['name']}** ({', '.join(t['members'])})" for t in data["teams"]))
L.append("")
L.append("---")
L.append("")

for r in data["rounds"]:
    if r["type"] == "break":
        L.append(f"## ☕ BREAK — {r['minutes']} minutes")
        L.append("")
        continue
    num = r["num"]; title = r["title"]
    L.append(f"## Round {num} — {title}" + (f"  ({r['badge']})" if r.get("badge") else ""))
    sc = r["scoring"]
    L.append(f"*+{sc['correct']} correct / {sc['wrong']} wrong · {sc['time']} s*")
    L.append("")
    if r["type"] == "rapid":
        for t in r["teams"]:
            tname = data["teams"][t["team"]]["name"]
            L.append(f"### {tname}")
            L.append("")
            for i, q in enumerate(t["questions"], 1):
                L.append(f"{i}. {q['q']}  →  **{q['a']}**")
            L.append("")
        continue
    for i, q in enumerate(r["questions"], 1):
        aud = " *(AUDIENCE)*" if q.get("audience") else ""
        fig = " *(see figure on slide)*" if q.get("figure") else ""
        L.append(f"**{i}.** {q['q']}{aud}{fig}")
        L.append("")
        for j, opt in enumerate(q["options"]):
            mark = " ✅" if j == q["answer"] else ""
            L.append(f"    - {'ABCD'[j]}. {opt}{mark}")
        L.append("")
    L.append("---")
    L.append("")

(HERE / "answer-key.md").write_text("\n".join(L), encoding="utf-8")
print("wrote answer-key.md", len("\n".join(L)), "chars")

html = (HERE / "index.html").read_text(encoding="utf-8")
inline = "<script>\n" + src + "\n</script>"
out = html.replace('<script src="quiz-data.js"></script>', inline)
assert out != html
(HERE / "phage-quiz-standalone.html").write_text(out, encoding="utf-8")
print("wrote phage-quiz-standalone.html", len(out), "chars")
