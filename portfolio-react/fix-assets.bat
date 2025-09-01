@echo off
echo ========================================
echo FIXING ASSETS AND DEPENDENCIES
echo ========================================
echo.

echo Checking if assets exist...
if not exist "public\assets\img\hero-bg.jpg" (
    echo ERROR: hero-bg.jpg not found!
    echo Please ensure all assets are copied to public/assets/img/
    pause
    exit /b 1
)

echo Assets found! Cleaning and reinstalling...
echo.

echo Removing node_modules and package-lock.json...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json

echo.
echo Installing dependencies...
call npm install --silent --no-audit --no-fund --legacy-peer-deps

echo.
echo Setting environment variables...
set GENERATE_SOURCEMAP=false
set REACT_APP_DISABLE_ESLINT_PLUGIN=true
set SKIP_PREFLIGHT_CHECK=true

echo.
echo Starting development server...
call npm start
