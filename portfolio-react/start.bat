@echo off
echo Cleaning previous installation...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
echo.
echo Installing dependencies (suppressing warnings)...
call npm install --silent --no-audit --no-fund
echo.
echo Starting development server (suppressing warnings)...
set GENERATE_SOURCEMAP=false
set REACT_APP_DISABLE_ESLINT_PLUGIN=true
set SKIP_PREFLIGHT_CHECK=true
call npm start
