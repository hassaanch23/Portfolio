@echo off
echo ========================================
echo CLEAN INSTALL - PORTFOLIO REACT
echo ========================================
echo.
echo Removing old files...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
if exist yarn.lock del yarn.lock
echo.
echo Installing dependencies (quiet mode)...
call npm install --silent --no-audit --no-fund --legacy-peer-deps
echo.
echo Setting environment variables to suppress warnings...
set GENERATE_SOURCEMAP=false
set REACT_APP_DISABLE_ESLINT_PLUGIN=true
set SKIP_PREFLIGHT_CHECK=true
echo.
echo Installation complete!
echo.
echo To start the development server, run:
echo npm start
echo.
pause
