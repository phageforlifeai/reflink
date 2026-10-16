# 🧫 Phage Quiz — Conference Edition

An interactive quiz deck for bacteriophage conferences, built in the format of the
**ICBRAR 2025 quiz** (6th International Conference on Bacteriophage Research and
Antimicrobial Resistance): team-based MCQ rounds with audience questions, a visual
round, acronyms, per-team rapid fire, a tie-breaker and a comedy round — plus
**three new topic rounds** (Phage Therapy & Clinical Frontiers, Phage Ecology &
One Health, Bacterial Defenses & Phage Counter-Defense).

**148 questions · 13 rounds · 4 teams**

## Files

| File | Purpose |
|---|---|
| `index.html` | The interactive presenter deck (loads `quiz-data.js`) |
| `quiz-data.js` | All questions, options, answers, teams, rounds & scoring (plain JSON inside a JS wrapper) |
| `phage-quiz-standalone.html` | **Single self-contained file** — copy this to a laptop/USB and present with no other files |
| `phage-quiz-slides.pdf` | Printable/projectable 315-slide master deck in the original ICBRAR visual style (question slide + answer-highlight slide per question) |
| `answer-key.md` | Printable master copy & answer key for quiz masters |
| `build.py` | Regenerates `answer-key.md` + `phage-quiz-standalone.html` from `quiz-data.js` |
| `make_pdf.py` | Regenerates `phage-quiz-slides.pdf` (needs `pymupdf`) |

## Presenting live

1. Open `index.html` (or `phage-quiz-standalone.html`) in any modern browser — no server, no internet needed.
2. Press **F** for fullscreen. Edit team names/members directly on the *Teams* slide (click the text); edits are remembered in the browser.
3. Keys:
   - **Space / → / Enter** — reveal the answer, then advance
   - **←** — previous slide
   - **T** — start/pause the round timer (auto-buzz at 0)
   - **S** — scoreboard overlay (scores persist in the browser)
   - **J** — jump to any round/slide
   - **H** — help, **F** — fullscreen, **Esc** — close overlays
4. After revealing, award marks with the per-team **✓ / ✗** buttons in the bottom bar
   (a **p+5** button appears in the tie-breaker for passed questions). Scoring follows
   the slide shown: R1–5 `+10/0`, R6–10 `+10/−5`, rapid fire `+5/0`, tie-breaker `+20/−10`.

## Editing questions

Everything lives in `quiz-data.js` (valid JSON between the `QUIZ_JSON_START/END`
markers). Add rounds or questions there, then run:

```bash
python3 build.py        # refresh answer key + standalone html
python3 make_pdf.py     # refresh the PDF master deck (pip install pymupdf)
```

Round types: `mcq` (options + answer index + optional `audience: true`),
`visual` (like mcq plus a `figure` key drawn as inline SVG),
`rapid` (per-team short-answer sets), `break`, and `laughs` (mcq-style jokes).

## Format inherited from ICBRAR 2025

- 4 teams, each MCQ round = 8 team questions + 2 audience questions
- 30 s per question (60 s tie-breaker), 5-minute break mid-event
- Negative marking in the visual/acronym rounds, passed-question bonus in the tie-breaker
- Dark stage, hexagon answer cards, magenta option letters, blue→violet highlight on reveal
