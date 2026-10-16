#!/usr/bin/env python3
"""Package the interactive quiz as an offline Windows "app" folder:

    PhageQuiz-Windows/
      ├── PhageQuiz.bat      double-click -> app-style window (Edge/Chrome --app)
      ├── README.txt         instructions + presenter key cheatsheet
      └── app/index.html     the fully self-contained interactive deck

Also writes PhageQuiz-Windows.zip next to it for one-click download.
No internet, no install, no PowerPoint needed on the target PC.
"""
import pathlib, shutil, zipfile

HERE = pathlib.Path(__file__).parent
KIT = HERE / "PhageQuiz-Windows"
APP = KIT / "app"
APP.mkdir(parents=True, exist_ok=True)

shutil.copyfile(HERE / "phage-quiz-standalone.html", APP / "index.html")

BAT = """@echo off
rem ============================================================
rem  Phage Quiz launcher - offline, app-style window.
rem  Opens the bundled quiz in Edge/Chrome "app mode"
rem  (no tabs, no address bar). Falls back to default browser.
rem ============================================================
set "HTML=%~dp0app\\index.html"
set "URL=file:///%HTML:\\=/%"
if exist "%ProgramFiles(x86)%\\Microsoft\\Edge\\Application\\msedge.exe" (
  start "" "%ProgramFiles(x86)%\\Microsoft\\Edge\\Application\\msedge.exe" --app="%URL%" & goto :eof)
if exist "%ProgramFiles%\\Microsoft\\Edge\\Application\\msedge.exe" (
  start "" "%ProgramFiles%\\Microsoft\\Edge\\Application\\msedge.exe" --app="%URL%" & goto :eof)
if exist "%ProgramFiles%\\Google\\Chrome\\Application\\chrome.exe" (
  start "" "%ProgramFiles%\\Google\\Chrome\\Application\\chrome.exe" --app="%URL%" & goto :eof)
if exist "%ProgramFiles(x86)%\\Google\\Chrome\\Application\\chrome.exe" (
  start "" "%ProgramFiles(x86)%\\Google\\Chrome\\Application\\chrome.exe" --app="%URL%" & goto :eof)
if exist "%LocalAppData%\\Google\\Chrome\\Application\\chrome.exe" (
  start "" "%LocalAppData%\\Google\\Chrome\\Application\\chrome.exe" --app="%URL%" & goto :eof)
rem No Edge/Chrome found: open in the default browser
start "" "%HTML%"
"""
(KIT / "PhageQuiz.bat").write_bytes(BAT.replace("\n", "\r\n").encode("ascii"))

README = """PHAGE QUIZ - OFFLINE PRESENTER APP (Windows)
============================================

WHAT IS THIS?
The complete conference quiz (14 rounds, 158 questions) as a self-contained
presenter app: timer with buzz, reveal-on-click answers, per-team scoring
pad, live scoreboard, audience ribbons, jump menu - everything the online
version has. No internet, no installation, no PowerPoint required.

RUN IT (3 ways)
1. DOUBLE-CLICK  PhageQuiz.bat
   Opens the quiz in an app-style window (Edge or Chrome "app mode":
   no tabs, no address bar). This is the recommended way.
2. Or double-click  app\\index.html  -> opens in your default browser.
3. Install-like experience (optional, Edge or Chrome):
   open app\\index.html, then in the browser menu choose
   Edge:  ... > Apps > Install this site as an app
   Chrome: ... > Cast, save and share > Create shortcut... > Open as window
   This puts an icon on your Desktop / Start menu that launches the quiz
   in its own window, like an installed program.

COPYING TO ANOTHER PC
Copy the whole "PhageQuiz-Windows" folder (USB / email / OneDrive).
That is all - the folder IS the app. Keep the folder name free of
spaces if possible (the launcher builds a file:// URL from its path).

PRESENTER KEYS
  Space / Enter / ->   reveal answer, then next slide
  <-                   previous slide
  T                    start / pause the round timer (buzzes at 0)
  S                    scoreboard overlay (scores are saved in the browser)
  J                    jump to any round / slide
  F                    fullscreen on/off   (or click START PRESENTATION)
  H                    help overlay        Esc closes overlays
  Bottom bar           per-team  check/cross  buttons award the marks
                       shown on screen (+10/0, +10/-5, +5, +20/-10, pass +5)

BEFORE THE EVENT
- Click the team names / member names on the Teams slide to edit them
  (saved in the browser on that PC).
- Reset scores any time from the scoreboard (S) > "Reset scores".

TROUBLESHOOTING
- Bat window flashes and closes: just open app\\index.html directly.
- Scores/teams not remembered: the browser blocked storage for local
  files - everything still works, just re-enter team names per session.
- Want a printed backup? The same quiz ships as PDF/PPTX in the repo
  (phage-quiz-slides.pdf / phage-quiz.pptx).
"""
(KIT / "README.txt").write_bytes(README.replace("\n", "\r\n").encode("ascii"))

zpath = HERE / "PhageQuiz-Windows.zip"
with zipfile.ZipFile(zpath, "w", zipfile.ZIP_DEFLATED) as z:
    for f in sorted(KIT.rglob("*")):
        if f.is_file():
            z.write(f, f.relative_to(HERE))
print("kit:", KIT, "| zip:", zpath, zpath.stat().st_size, "bytes")

# convenience bundle of every conference deliverable
kpath = HERE / "phage-quiz-kit.zip"
with zipfile.ZipFile(kpath, "w", zipfile.ZIP_DEFLATED) as z:
    for f in ["phage-quiz.pptx", "phage-quiz-slides.pdf", "answer-key.md",
              "phage-quiz-standalone.html", "README.md"]:
        z.write(HERE / f, f"phage-quiz/{f}")
print("bundle:", kpath, kpath.stat().st_size, "bytes")
