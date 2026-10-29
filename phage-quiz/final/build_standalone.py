#!/usr/bin/env python3
"""Build the single-file PhageQuiz-Final.html (engine + data inlined)."""
import io, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ENG = os.path.join(HERE, "index.html")
DAT = os.path.join(HERE, "quiz-data.js")
OUT = os.path.join(HERE, "PhageQuiz-Final.html")

eng = io.open(ENG, encoding="utf-8").read()
data = io.open(DAT, encoding="utf-8").read()

# inline: replace the external script tag with an inline block placed BEFORE the main script
tag = '<script src="quiz-data.js"></script>'
assert tag in eng, "data script tag not found"
eng2 = eng.replace(tag, "<script>\n" + data + "\n</script>")
# ensure data block is the first script executed (it already is by position)
assert eng2.index("window.QUIZ") < eng2.index('if(!window.QUIZ)'), "QUIZ must be defined before the guard"

io.open(OUT, "w", encoding="utf-8").write(eng2)
print("wrote", OUT, os.path.getsize(OUT), "bytes")
print("engine", len(eng), "-> standalone", len(eng2))
