# Deployment Guide

## Live Application

The Area Manager Training System is deployed and accessible at:

🔗 **Live URL**: [https://shinsungsuk-lab.github.io/CROWN_HDAM/](https://shinsungsuk-lab.github.io/CROWN_HDAM/)

🔗 **Local Test**: [https://8000-io4vq0xwxr97bynyai3eu-2b54fc91.sandbox.novita.ai](https://8000-io4vq0xwxr97bynyai3eu-2b54fc91.sandbox.novita.ai)

## Deployment Methods

### Option 1: GitHub Pages (Current Deployment)

The application is automatically deployed via GitHub Pages from the `gh-pages` branch.

**URL**: https://shinsungsuk-lab.github.io/CROWN_HDAM/

**Setup**:
1. Application is already deployed
2. GitHub Pages serves static files directly
3. No server required - runs entirely in browser
4. Automatic updates when pushing to `gh-pages` branch

### Option 2: Local File System

Simply open `index.html` in any modern web browser:

```bash
# Navigate to the project directory
cd /home/user/webapp

# Open in browser (various methods)
open index.html                    # macOS
start index.html                   # Windows
xdg-open index.html               # Linux
```

### Option 3: Local Web Server

For development or testing:

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with http-server)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Then access: `http://localhost:8000`

### Option 4: Static Hosting Services

Deploy to any static hosting service:

- **Netlify**: Drag and drop the project folder
- **Vercel**: Connect GitHub repo or drag and drop
- **AWS S3**: Upload files to S3 bucket with static hosting enabled
- **Cloudflare Pages**: Connect GitHub repo
- **Azure Static Web Apps**: Connect GitHub repo

## Features

### No Backend Required
- Pure frontend application
- All logic runs in browser
- No database needed
- No API calls required

### Offline Capable
- Once loaded, works offline
- Progress saved in localStorage
- No internet connection needed after initial load

### Cross-Platform
- Works on desktop, tablet, and mobile
- Responsive design adapts to screen size
- Compatible with all modern browsers

## Browser Requirements

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Data Storage

### localStorage
- User progress automatically saved
- Quiz scores and completion tracked
- Persists across browser sessions
- Cleared only when browser cache is cleared

### Privacy
- All data stored locally in user's browser
- No data sent to external servers
- No tracking or analytics
- No cookies required

## Usage Instructions

### For Learners

1. **Access the Application**
   - Visit: https://shinsungsuk-lab.github.io/CROWN_HDAM/
   - Or open `index.html` locally

2. **Start Learning**
   - Click "Learning Modules" to begin
   - Expand module content by clicking "View Content"
   - Progress is automatically saved

3. **Review Scenarios**
   - Navigate to "Critical Scenarios"
   - Read through each scenario
   - Study the resolution procedures

4. **Take Assessments**
   - Go to "Assessments" section
   - Choose a quiz type
   - Answer questions and check answers
   - Review explanations

5. **Use Quick Reference**
   - Search for specific procedures
   - Quick lookup during study
   - Printable for floor reference

### For Administrators

1. **Deployment**
   - Application is already deployed via GitHub Pages
   - Access at: https://shinsungsuk-lab.github.io/CROWN_HDAM/

2. **Updates**
   - Make changes to files
   - Commit and push to main branch
   - Merge to gh-pages branch for deployment

3. **Customization**
   - Edit `data.js` for content changes
   - Edit `quiz.js` for quiz questions
   - Edit `styles.css` for styling changes
   - No build process required

4. **Monitoring**
   - No analytics built-in (privacy-focused)
   - Add analytics if needed (Google Analytics, etc.)

## Technical Architecture

```
┌─────────────────────────────────────────┐
│         index.html (Main Page)          │
│  - Navigation structure                 │
│  - View containers                      │
│  - Progress tracking UI                 │
└──────────────┬──────────────────────────┘
               │
               ├─> styles.css (All styling)
               │
               ├─> data.js (Training content)
               │   - 6 Learning modules
               │   - 4 Critical scenarios
               │   - Core principles
               │
               ├─> quiz.js (Assessment data)
               │   - Module quiz (20 questions)
               │   - Scenario quiz (15 questions)
               │   - Final assessment (30 questions)
               │
               └─> app.js (Application logic)
                   - Navigation control
                   - Module rendering
                   - Quiz engine
                   - Progress tracking
                   - localStorage management
```

## File Sizes

- `index.html`: ~6 KB
- `styles.css`: ~12 KB
- `data.js`: ~40 KB
- `quiz.js`: ~34 KB
- `app.js`: ~20 KB
- **Total**: ~112 KB (very fast loading)

## Performance

- **Initial Load**: < 1 second on modern connection
- **No Server Requests**: After initial load
- **Instant Navigation**: Client-side only
- **Offline Support**: Full functionality offline

## Accessibility

- Semantic HTML structure
- Keyboard navigation supported
- Screen reader compatible
- High contrast color scheme
- Readable font sizes
- WCAG 2.1 Level AA compliant

## Security

- No user authentication required
- No personal data collected
- No external API calls
- No cookies used
- All data stored locally
- Safe for corporate networks

## Troubleshooting

### Progress Not Saving
- Check browser localStorage is enabled
- Not in private/incognito mode
- Browser has sufficient storage space

### Page Not Loading
- Clear browser cache
- Check JavaScript is enabled
- Try different browser
- Check file integrity

### Quiz Not Working
- Ensure all files are present
- Check browser console for errors
- Refresh the page
- Clear localStorage: `localStorage.clear()`

## Support

For issues or questions:
1. Check README.md for documentation
2. Review DEPLOYMENT.md for setup
3. Contact training department
4. Check browser console for errors

## Future Enhancements

Potential additions:
- Certificate generation upon completion
- Export progress reports
- Printable study guides
- Additional quiz questions
- Video content integration
- Interactive simulations
- Multi-language support

---

**Repository**: https://github.com/shinsungsuk-lab/CROWN_HDAM  
**Live Demo**: https://shinsungsuk-lab.github.io/CROWN_HDAM/  
**Version**: 1.0  
**Last Updated**: January 2026
