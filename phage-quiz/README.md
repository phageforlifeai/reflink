# 🧫 Phage Quiz — Conference Edition

## ⭐ FINAL quiz app (`final/`) — ICBRAR 2026, built from `ICBRAR Quiz - AK.pdf`

The **real event deck** — your own final questions, parsed slide-by-slide from the AK PDF
(11 rounds · 63 MCQs incl. the photo & emoji rounds rendered exactly as in your deck ·
32 rapid-fire · tie-breaker · Lytic Laughs), rebuilt as a cinematic presenter app:

- **Auto 45 s timer per question** — starts the instant the question appears:
  **15 s READING** (options blurred & locked 🔒) → chime + unlock → **30 s ANSWER**.
  Ring turns green for answering, pulses red and ticks in the last 5 s, buzzes at zero
  with a TIME UP stamp. `T` pause/resume · `U` unlock now. **Rapid fire uses one continuous
  60 s clock per team** — it starts at the team's first question, keeps counting across question
  changes and reveals (never resets per question), buzzes once at zero; reset from the Rapid
  Fire divider slide.
- **Immersive show** — animated drifting-virion background, WebAudio sound FX (`M` mute),
  confetti bursts on reveal, cinematic shimmer opening with a pulsing **START** button
  and a 3‑2‑1‑GO countdown into the teams slide.
- **Quiz-master tools carried over** — 🎛 Master Console `C` (private popup showing the
  answer *before* reveal + remote controls; opens on the primary/laptop screen),
  👁 peek `A`, 🔑 printable answer key `K`, scoreboard `S`, jump `J`, per-team ✓/✗ scoring,
  ⇄ **Pass mode** `G` (✓ = +5, ✗ = 0 for passed questions). The projected control bar
  **auto-hides** after 4 s (`P` pins it) so the audience only sees the show.
- **✏️ Editable teams** — on the Teams slide, click any team or member name (Dr./Ms./Mr. slots)
  to type the real names, ＋ add / ✕ remove slots, ↺ reset; saved on that PC and used
  everywhere (score chips, rapid-fire, scoreboard, console).

Files: `final/PhageQuiz-Final.html` (**THE single file** — runs alone on any PC),
`final/index.html` + `final/quiz-data.js` (split dev pair), `final/answer-key.md`,
`final/build_data.py` / `build_standalone.py` / `make_key.py` / `smoke.py` (rebuild + 23-check smoke test).
Windows folder-kit: run `python make_windows_kit.py` → `PhageQuiz-Final-Windows.zip`
(double-click `PhageQuiz-Final.bat`).

Everything below documents the earlier **legacy practice deck** (158 generated questions).

---

An interactive quiz deck for bacteriophage conferences, built in the format of the
**ICBRAR 2025 quiz** (6th International Conference on Bacteriophage Research and
Antimicrobial Resistance): team-based MCQ rounds with audience questions, a visual
round, acronyms, per-team rapid fire, a tie-breaker and a comedy round — plus
**three new topic rounds** (Phage Therapy & Clinical Frontiers, Phage Ecology &
One Health, Bacterial Defenses & Phage Counter-Defense).

**158 questions · 14 rounds · 4 teams**

Rounds 1–6 & 8 are written at **PhD-scholar difficulty** (Poisson MOI maths, spanins,
Weigle reactivation, MIMAG/CheckV/PhageTerm, terminal-redundancy coverage signatures,
ΦKZ RNAP, portal stoichiometry …), while audience questions stay accessible.
Round 13 is a **FUN ROUND** (emoji rebus + phage personal ads) before the Lytic Laughs finale.

## Files

| File | Purpose |
|---|---|
| **`PhageQuiz-Windows.zip`** | **Offline Windows presenter app** — unzip anywhere, double-click `PhageQuiz.bat`: app-style window with timer, scoring pad & scoreboard (no install, no internet) |
| **`phage-quiz.pptx`** | Standalone PowerPoint deck (336 slides) — backup format; answers in speaker notes |
| `index.html` | The interactive presenter deck (loads `quiz-data.js`) |
| `quiz-data.js` | All questions, options, answers, teams, rounds & scoring (plain JSON inside a JS wrapper) |
| `phage-quiz-standalone.html` | Single self-contained browser file — backup presenter copy for a laptop/USB |
| `phage-quiz-slides.pdf` | Printable/projectable 336-slide master deck in the original ICBRAR visual style (question slide + answer-highlight slide per question) |
| `answer-key.md` | Printable master copy & answer key for quiz masters |
| `build.py` | Regenerates `answer-key.md` + `phage-quiz-standalone.html` from `quiz-data.js` |
| `make_pdf.py` | Regenerates `phage-quiz-slides.pdf` (needs `pymupdf`) |
| `build_pptx.py` | Regenerates `phage-quiz.pptx` (needs `python-pptx`, `pymupdf`; writes figure PNGs to `figs/`) |
| `make_windows_kit.py` | Regenerates the `PhageQuiz-Windows/` app folder + `PhageQuiz-Windows.zip` |

## Presenting live

1. Open `index.html` (or `phage-quiz-standalone.html`) in any modern browser — no server, no internet needed.
2. Press **F** for fullscreen. Edit team names/members directly on the *Teams* slide (click the text); edits are remembered in the browser.
3. Keys:
   - **Space / → / Enter** — reveal the answer, then advance
   - **←** — previous slide
   - **T** — start/pause the round timer (auto-buzz at 0)
   - **S** — scoreboard overlay (scores persist in the browser)
   - **J** — jump to any round/slide
   - **C** — **Quiz-Master Console**: a private second window that shows every
     correct answer *before* the public reveal (plus remote reveal/next/timer/score
     buttons). Put it on your own screen: Windows **Win+P → Extend**, drag the
     console to the laptop display while the deck runs fullscreen on the projector.
   - **A** — peek the answer in the bottom bar (only while the audience isn't looking)
   - **K** — opens a printable full answer key (quiz-master's paper backup)
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
python3 build_pptx.py   # refresh the PowerPoint deck (pip install python-pptx pymupdf)
```

The **PPTX is the recommended conference file**: it needs no internet and no server —
just open and present (click = next slide; each question is followed by its
answer-highlight slide, and the answer is also in the speaker notes).

Round types: `mcq` (options + answer index + optional `audience: true`),
`visual` (like mcq plus a `figure` key drawn as inline SVG),
`rapid` (per-team short-answer sets), `break`, and `laughs` (mcq-style jokes).

## Format inherited from ICBRAR 2025

- 4 teams, each MCQ round = 8 team questions + 2 audience questions
- 30 s per question (60 s tie-breaker), 5-minute break mid-event
- Negative marking in the visual/acronym rounds, passed-question bonus in the tie-breaker
- Dark stage, hexagon answer cards, magenta option letters, blue→violet highlight on reveal
