# How to Run the React Portfolio

## Option 1: Using Command Prompt (Recommended)

1. **Open Command Prompt** (not PowerShell)
2. **Navigate to the project folder:**
   ```
   cd "C:\Users\Ikram\Downloads\iPortfolio-1.0.0\iPortfolio-1.0.0\portfolio-react"
   ```
3. **Install dependencies:**
   ```
   npm install
   ```
4. **Start the development server:**
   ```
   npm start
   ```

## Option 2: Using the Batch File

1. **Double-click** the `start.bat` file in the portfolio-react folder
2. This will automatically install dependencies and start the server

## Option 3: Clean Install (Recommended for First Time)

1. **Double-click** the `clean-install.bat` file in the portfolio-react folder
2. This will completely clean and reinstall everything without warnings
3. After installation completes, run `npm start` to start the server

## Option 4: Start Without Warnings

1. **Double-click** the `start-no-warnings.bat` file in the portfolio-react folder
2. This will start the development server with all warnings suppressed

## Option 5: Fix Assets and Start (If you get image errors)

1. **Double-click** the `fix-assets.bat` file in the portfolio-react folder
2. This will check assets and fix any missing file issues

## Option 6: Using Git Bash

1. **Open Git Bash**
2. **Navigate to the project folder:**
   ```bash
   cd "/c/Users/Ikram/Downloads/iPortfolio-1.0.0/iPortfolio-1.0.0/portfolio-react"
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm start
   ```

## Troubleshooting

### If you get PowerShell execution policy errors:
- Use Command Prompt instead of PowerShell
- Or use Git Bash

### If you get module not found errors:
- Delete the `node_modules` folder
- Delete `package-lock.json`
- Run `npm install` again

### If the page doesn't load properly:
- Check that all assets are in the `public/assets` folder
- Make sure the development server is running on `http://localhost:3000`

### If you get npm start warnings:
- Use the `start-no-warnings.bat` file instead
- Or set environment variables: `set GENERATE_SOURCEMAP=false`
- Check that all image files exist in the `public/assets` folder

### If you get module not found errors:
- Run the `clean-install.bat` file to completely reinstall
- Make sure you're in the correct directory
- Check that Node.js is properly installed

## What to Expect

After running `npm start`:
1. The browser should automatically open to `http://localhost:3000`
2. You should see the portfolio website with all sections
3. The navigation should work smoothly
4. All animations should be working

## Customization

Once it's running, you can customize:
- Your name in `Header.js` and `Hero.js`
- Your information in `About.js`
- Your skills in `Skills.js`
- Your projects in `Portfolio.js`
- Your contact info in `Contact.js`
