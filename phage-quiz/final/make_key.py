#!/usr/bin/env python3
"""Generate final/answer-key.md from the assembled QUIZ data (quiz-data.js)."""
import io, json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
txt = io.open(os.path.join(HERE, "quiz-data.js"), encoding="utf-8").read()
quiz = json.loads(txt[txt.index("{"): txt.rindex("}") + 1])

L = []
L.append(f"# 🔑 {quiz['meta']['short']} — Quiz-Master Answer Key (PRIVATE)\n")
L.append(f"*{quiz['meta']['conference']}*\n")
S = quiz["settings"]
L.append(f"Timer: every MCQ auto-starts **{S['readSeconds']+S['answerSeconds']} s** = "
         f"{S['readSeconds']} s reading (options locked) + {S['answerSeconds']} s answering. "
         f"Rapid fire: one continuous **{S.get('rapidTeamSeconds',60)} s clock per team** across all its questions.\n")
qn = 0
rn = 0
for s in quiz["slides"]:
    if s["type"] == "divider":
        rn = s["round"]
        L.append(f"\n## Round {s['round']} — {s['title']}  (+{s['correct']} / {s['wrong']})\n")
    elif s["type"] == "q":
        qn += 1
        tag = " 👥AUDIENCE" if s.get("audience") else ""
        img = " 🖼 *(image question — see slide)*" if s.get("img") else ""
        L.append(f"**Q{qn}.**{tag} {s['qtext']}{img}")
        if s.get("options") and any(s["options"]):
            for j, o in enumerate(s["options"]):
                m = "ABCD"[j]
                if o:
                    L.append(f"- {'**' if m == s['answer'] else ' '}{m}. {o}{'**' if m == s['answer'] else ''}")
        L.append(f"- ✅ **ANSWER: {s['answer']}**\n")
    elif s["type"] == "rapid":
        L.append(f"**⚡ {s['team']}:** {s['qtext']}")
        L.append(f"- ✅ **ANSWER: {s['atext']}**\n")
L.append(f"\n---\n*{qn} MCQs + {sum(1 for s in quiz['slides'] if s['type']=='rapid')} rapid-fire questions. "
         f"Generated from `ICBRAR Quiz - AK.pdf`. Do not distribute.*\n")

out = os.path.join(HERE, "answer-key.md")
io.open(out, "w", encoding="utf-8").write("\n".join(L))
print("wrote", out, os.path.getsize(out), "bytes;", qn, "MCQs")
