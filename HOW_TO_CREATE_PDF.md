# How to Create Your PDF Report

## Step 1: Take Screenshots

Before creating the PDF, you need to take 5 screenshots. Follow these steps:

1. **Run the application:**
   ```bash
   cd cricket-game
   npm start
   ```

2. **Prepare sticky note:**
   - Write your Name, Roll Number, and Section on a physical sticky note
   - Place it on your screen, OR
   - Use a digital sticky note app

3. **Take these 5 screenshots:**
   - Screenshot 1: Aggressive batting with power bar visible
   - Screenshot 2: Defensive batting with power bar visible
   - Screenshot 3: Close-up of power bar with slider
   - Screenshot 4: Game in progress showing scoreboard updates
   - Screenshot 5: Game over screen with final score

4. **Save screenshots** as: `screenshot1.png`, `screenshot2.png`, etc.

---

## Step 2: Create PDF from Markdown

You have **THREE OPTIONS**:

---

### Option 1: Use Microsoft Word (Easiest)

1. Open `PDF_REPORT_TEMPLATE.md` in any text editor
2. Copy all the content
3. Open Microsoft Word
4. Paste the content
5. Replace `[Your Full Name]`, `[Your Roll Number]`, etc. with your actual details
6. Insert your 5 screenshots where it says `[INSERT SCREENSHOT HERE]`
7. Format the document:
   - Make headings bold and larger
   - Add page breaks between sections
   - Adjust spacing
8. Go to File → Save As → PDF
9. Name it: `XXi-XXXX-Section.pdf` (your roll number format)

---

### Option 2: Use Google Docs

1. Open Google Docs
2. Copy content from `PDF_REPORT_TEMPLATE.md`
3. Paste into Google Docs
4. Replace placeholder text with your details
5. Insert screenshots (Insert → Image → Upload from computer)
6. Format the document
7. Go to File → Download → PDF Document (.pdf)
8. Name it: `XXi-XXXX-Section.pdf`

---

### Option 3: Convert Markdown to PDF Directly (Linux)

1. **Install pandoc:**
   ```bash
   sudo apt install pandoc texlive-latex-base texlive-fonts-recommended
   ```

2. **Edit the template:**
   - Open `PDF_REPORT_TEMPLATE.md`
   - Replace all `[Your Name]`, `[Your Roll Number]`, etc.
   - Add image paths where it says `[INSERT SCREENSHOT HERE]`:
     ```markdown
     ![Screenshot 1](./screenshots/screenshot1.png)
     ```

3. **Create screenshots folder:**
   ```bash
   mkdir screenshots
   # Move your screenshots to this folder
   ```

4. **Convert to PDF:**
   ```bash
   pandoc PDF_REPORT_TEMPLATE.md -o XXi-XXXX-Section.pdf --pdf-engine=pdflatex
   ```

---

### Option 4: Use Online Markdown to PDF Converter

1. Go to: https://www.markdowntopdf.com/ or https://md2pdf.netlify.app/
2. Copy content from `PDF_REPORT_TEMPLATE.md`
3. Paste into the converter
4. Replace placeholder text
5. Note: You'll need to download as PDF, then add screenshots manually in a PDF editor

---

## Step 3: Verify Your PDF

Make sure your PDF includes:

- ✅ Cover page with your name, roll number, section
- ✅ All 5 screenshots with sticky note visible
- ✅ Captions/descriptions for each screenshot
- ✅ Game Logic explanation
- ✅ Probability mapping explanation
- ✅ Animation implementation explanation
- ✅ GitHub repository link
- ✅ Proper formatting and readability

---

## Step 4: Create ZIP Folder

1. **Go to parent directory:**
   ```bash
   cd /home/salman-ahmed/Work/Web_A2
   ```

2. **Create ZIP (excluding node_modules and PDF):**
   ```bash
   cd cricket-game
   zip -r ../XXi-XXXX-Section.zip . -x "node_modules/*" "*.pdf" ".git/*" "build/*"
   ```

3. **Verify ZIP contents:**
   ```bash
   unzip -l ../XXi-XXXX-Section.zip
   ```

---

## Step 5: Final Submission Checklist

You need to submit THREE items:

1. **GitHub Repository Link**
   - https://github.com/SalmanAh/Cricket-Web.git
   - ✅ Already done!

2. **ZIP Folder**
   - Name: `XXi-XXXX-Section.zip`
   - Contains: All source code (no node_modules, no PDF)
   - ⏳ Create using commands above

3. **PDF Report**
   - Name: `XXi-XXXX-Section.pdf`
   - Contains: Screenshots + Explanations + GitHub link
   - ⏳ Create using one of the methods above

---

## Quick Tips

### For Better Screenshots:
- Use full-screen browser (F11)
- Make sure sticky note is clearly visible
- Capture at the right moment (when power bar is visible, etc.)
- Use high resolution

### For Better PDF:
- Use clear headings and formatting
- Make sure screenshots are large enough to see details
- Add captions under each screenshot
- Check that all text is readable
- Proofread for typos

### Screenshot Tools:
- **Linux:** Flameshot, GNOME Screenshot, Spectacle
- **Command:** `gnome-screenshot` or `flameshot gui`

---

## Need Help?

If you have issues:
1. Check `SCREENSHOT_GUIDE.md` for detailed screenshot instructions
2. Check `SUBMISSION_CHECKLIST.md` for submission requirements
3. All explanations are already written in `PDF_REPORT_TEMPLATE.md`

---

**Your report template is ready in `PDF_REPORT_TEMPLATE.md`!**

Just add your details, insert screenshots, and convert to PDF. Good luck! 🏏
