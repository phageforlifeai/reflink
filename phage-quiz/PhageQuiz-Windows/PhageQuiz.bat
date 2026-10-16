@echo off
rem ============================================================
rem  Phage Quiz launcher - offline, app-style window.
rem  Opens the bundled quiz in Edge/Chrome "app mode"
rem  (no tabs, no address bar). Falls back to default browser.
rem ============================================================
set "HTML=%~dp0app\index.html"
set "URL=file:///%HTML:\=/%"
if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" (
  start "" "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" --app="%URL%" & goto :eof)
if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" (
  start "" "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" --app="%URL%" & goto :eof)
if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
  start "" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" --app="%URL%" & goto :eof)
if exist "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" (
  start "" "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" --app="%URL%" & goto :eof)
if exist "%LocalAppData%\Google\Chrome\Application\chrome.exe" (
  start "" "%LocalAppData%\Google\Chrome\Application\chrome.exe" --app="%URL%" & goto :eof)
rem No Edge/Chrome found: open in the default browser
start "" "%HTML%"
