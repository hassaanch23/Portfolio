@echo off
echo ========================================
echo STARTING REACT APP - NO WARNINGS
echo ========================================
echo.
echo Setting environment variables...
set GENERATE_SOURCEMAP=false
set REACT_APP_DISABLE_ESLINT_PLUGIN=true
set SKIP_PREFLIGHT_CHECK=true
set CHOKIDAR_USEPOLLING=true
set NODE_ENV=development
echo.
echo Starting development server...
call npm start --silent
