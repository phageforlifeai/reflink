#!/usr/bin/env python3
"""Render the phage quiz to a presentation PDF that mirrors the ICBRAR 2025
slide format: dark 960x540 slides, hexagon option cards, and a duplicate
'answer' slide per question where the correct card is highlighted.

Usage: python3 make_pdf.py   ->  phage-quiz-slides.pdf
"""
import json, re, pathlib
import pymupdf

HERE = pathlib.Path(__file__).parent
data = json.loads(re.search(r"/\*QUIZ_JSON_START\*/(.*)/\*QUIZ_JSON_END\*/",
                            (HERE / "quiz-data.js").read_text(encoding="utf-8"), re.S).group(1))

W, H = 960, 540
BG = (0.020, 0.027, 0.051)
WHITE = (1, 1, 1)
MUT = (0.62, 0.68, 0.78)
ACC = (0.741, 0.055, 1.0)          # bd0dff
CARD = (0.047, 0.059, 0.086)
LINE = (0.227, 0.263, 0.337)
G1 = (0.039, 0.400, 1.0)           # 0a66ff
G2 = (0.541, 0.169, 0.961)         # 8a2bf5
MID = (0.30, 0.28, 0.98)

doc = pymupdf.open()

def page():
    p = doc.new_page(width=W, height=H)
    p.draw_rect(pymupdf.Rect(0, 0, W, H), fill=BG, color=None)
    return p

def text(p, s, x, y, size=15, color=WHITE, bold=True, align="left", font="hebo"):
    p.insert_text((x, y), s, fontname=font if bold else "helv", fontsize=size, color=color)

def textw(s, size, bold=True):
    return pymupdf.get_text_length(s, fontname="hebo" if bold else "helv", fontsize=size)

def ctext(p, s, cx, y, size=15, color=WHITE, bold=True):
    w = textw(s, size, bold)
    text(p, s, cx - w / 2, y, size, color, bold)

def wrap(s, size, maxw, bold=True):
    words, lines, cur = s.split(), [], ""
    for w in words:
        t = (cur + " " + w).strip()
        if textw(t, size, bold) <= maxw:
            cur = t
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines

def hexpts(r, inset=0.04):
    dx = r.width * inset
    return [(r.x0 + dx, r.y0), (r.x1 - dx, r.y0), (r.x1, (r.y0 + r.y1) / 2),
            (r.x1 - dx, r.y1), (r.x0 + dx, r.y1), (r.x0, (r.y0 + r.y1) / 2)]

def card(p, r, fill=CARD, stroke=LINE, grad=False):
    pts = hexpts(r)
    if grad:
        # solid brand highlight (blue-violet) with a bright rim
        p.draw_polyline(pts, fill=MID, color=(0.62, 0.55, 1.0), width=1.4, closePath=True)
    else:
        p.draw_polyline(pts, fill=fill, color=stroke, width=1.0, closePath=True)

OPTION_RECTS = [pymupdf.Rect(122, 291, 454, 351), pymupdf.Rect(506, 291, 838, 351),
                pymupdf.Rect(122, 384, 454, 444), pymupdf.Rect(506, 384, 838, 444)]

def qslide(p, r, q, show_answer):
    text(p, f"ROUND {r['num']}", 84, 62, 14, WHITE)
    if q.get("audience"):
        rr = pymupdf.Rect(W - 230, 40, W - 90, 66)
        p.draw_rect(rr, fill=(0.9, 0.1, 0.5), color=None, radius=0.5)
        ctext(p, "AUDIENCE", (rr.x0 + rr.x1) / 2, 58, 13, WHITE)
    if r.get("badge"):
        rr = pymupdf.Rect(170, 42, 300, 64)
        p.draw_rect(rr, fill=MID, color=None, radius=0.5)
        ctext(p, r["badge"], (rr.x0 + rr.x1) / 2, 58, 11, WHITE)
    lines = wrap(q.get("alt", q["q"]), 22, 720)
    y = 150 if len(lines) <= 2 else 132
    for ln in lines:
        ctext(p, ln, W / 2, y, 22)
        y += 29
    for i, opt in enumerate(q.get("options_alt", q["options"])):
        rect = OPTION_RECTS[i]
        win = show_answer and i == q["answer"]
        card(p, rect, grad=win)
        text(p, "ABCD"[i], rect.x0 + 34, rect.y0 + 39, 24, (1.0, 0.30, 0.94) if win else ACC)
        ol = wrap(opt, 14, rect.width - 110)
        oy = rect.y0 + rect.height / 2 - (len(ol) - 1) * 8 + 5
        for ln in ol[:3]:
            text(p, ln, rect.x0 + 66, oy, 14, WHITE)
            oy += 16

def divider(p, r):
    num = r.get("num")
    box = pymupdf.Rect(W / 2 - 52, 120, W / 2 + 52, 224)
    p.draw_rect(box, fill=MID, color=None, radius=0.22)
    ctext(p, str(num), W / 2, 192, 52, WHITE)
    ctext(p, r["title"], W / 2, 288, 34, WHITE)
    sc = r.get("scoring", {})
    chips = [f"Correct +{sc.get('correct', 0)}", f"Wrong {sc.get('wrong', 0)}", f"{sc.get('time', 30)} sec"]
    if sc.get("pass"):
        chips.append(f"passed +{sc['pass']}")
    x = W / 2 - sum(textw(c, 14) + 46 for c in chips) / 2
    for c in chips:
        w = textw(c, 14) + 32
        p.draw_rect(pymupdf.Rect(x, 330, x + w, 362), fill=CARD, color=LINE, radius=0.4)
        text(p, c, x + 16, 351, 14, (0.8, 0.9, 1.0))
        x += w + 14

# ---------- front matter ----------
p = page()
ctext(p, "START", W / 2, 200, 60, ACC)
for i, ln in enumerate(wrap(data["meta"]["subtitle"], 30, 800)):
    ctext(p, ln, W / 2, 260 + i * 38, 30)
ctext(p, data["meta"]["tagline"], W / 2, 350, 17, MUT)

p = page()
ctext(p, "Teams", W / 2, 90, 34)
for i, t in enumerate(data["teams"]):
    x = 60 + i * 215
    p.draw_rect(pymupdf.Rect(x, 130, x + 195, 330), fill=CARD, color=LINE, radius=0.08)
    for j, ln in enumerate(wrap(t["name"], 17, 175)):
        ctext(p, ln, x + 97, 170 + j * 20, 17, (0.49, 0.83, 0.98))
    for j, m in enumerate(t["members"]):
        ctext(p, m, x + 97, 210 + j * 24, 13, MUT)

p = page()
ctext(p, "Rounds", W / 2, 80, 34)
for idx, r in enumerate(data["rounds"]):
    if r["type"] == "break":
        label = f"BREAK ({r['minutes']} min)"
    else:
        label = f"{r['num']}.  {r['title']}"
    col, row = divmod(idx, 7)
    x = 110 + col * 430
    y = 128 + row * 46
    text(p, label, x, y, 17, WHITE)
    if r.get("badge"):
        text(p, "  NEW", x + textw(label, 17) + 8, y, 12, ACC)

p = page()
ctext(p, "Markings", W / 2, 90, 34)
rows = [("Rounds 1-5", "+10 / 0", "30 sec"), ("Rounds 6-10", "+10 / -5", "30 sec"),
        ("Rapid Fire", "+5 / 0, no passing", "60 sec / team"),
        ("Tie-Breaker", "+20 / -10, passed +5", "60 sec"),
        ("Emoji Rebus & Lytic Laughs", "+10 / 0", "30 sec")]
y = 150
for a, b, c in rows:
    text(p, a, 220, y, 19, (0.49, 0.83, 0.98))
    text(p, b, 470, y, 19, WHITE)
    text(p, c, 720, y, 19, MUT)
    y += 44
ctext(p, "Each MCQ round: 8 team questions + 2 audience questions", W / 2, y + 20, 15, MUT)

# ---------- rounds ----------
for r in data["rounds"]:
    if r["type"] == "break":
        p = page()
        ctext(p, "Break Time!", W / 2, 250, 48)
        ctext(p, f"{r['minutes']} MIN", W / 2, 320, 30, ACC)
        continue
    p = page()
    divider(p, r)
    if r["type"] == "rapid":
        for tset in r["teams"]:
            tname = data["teams"][tset["team"]]["name"]
            for qi, qq in enumerate(tset["questions"]):
                for show in (False, True):
                    p = page()
                    text(p, f"ROUND {r['num']} - RAPID FIRE", 84, 62, 14)
                    ctext(p, f"{tname}  -  question {qi + 1} of {len(tset['questions'])}", W / 2, 120, 15, MUT)
                    for i, ln in enumerate(wrap(qq["q"], 24, 760)):
                        ctext(p, ln, W / 2, 210 + i * 32, 24)
                    rect = pymupdf.Rect(W / 2 - 260, 330, W / 2 + 260, 396)
                    if show:
                        card(p, rect, grad=True)
                        for i, ln in enumerate(wrap(qq["a"], 20, 440)):
                            ctext(p, ln, W / 2, 368 + i * 24, 20)
                    else:
                        card(p, rect)
        continue
    for q in r["questions"]:
        for show in (False, True):
            p = page()
            qslide(p, r, q, show)

p = page()
ctext(p, "Thank you for your answers!", W / 2, 260, 40)
ctext(p, "See the scoreboard for final standings", W / 2, 310, 17, MUT)

out = HERE / "phage-quiz-slides.pdf"
doc.save(str(out), garbage=4, deflate=True)
print("wrote", out, doc.page_count, "pages")
