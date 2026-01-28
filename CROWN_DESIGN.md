# Crown Sydney Luxury Design - Area Manager Training System

## 🌟 Overview

Crown Sydney 스타일의 럭셔리한 디자인이 적용된 Area Manager Training System입니다.

## 🎨 Design Features

### Visual Style
- **Color Scheme**: 
  - Gold accent: `#FFD700` (Crown signature gold)
  - Secondary: `#FFA500` (Orange gold)
  - Background: Black (`#000`)
  - Text: White with various opacity levels
  
- **Typography**: 
  - Font: Montserrat (Google Fonts)
  - Weights: 300, 400, 500, 600, 700, 800

- **Effects**:
  - Glassmorphism navigation
  - Fade-in animations
  - Smooth transitions
  - Hover effects with gold highlights

### Key Components

#### 1. **Navigation Bar**
- Fixed position with glassmorphism effect
- Crown logo (SVG custom design)
- Desktop menu with hover effects
- Mobile hamburger menu
- Real-time progress indicator

#### 2. **Hero Section**
- Full-screen welcome area
- Large gold headline: "HERE'S WHERE THINGS GET INTERESTING"
- Subtitle: "WELCOME TO AREA MANAGER TRAINING"
- Background image overlay
- Call-to-action button

#### 3. **Notice Banner**
- Dismissible top banner
- Beige background with dark text
- Sign-up call-to-action

#### 4. **Feature Cards**
- Glass-effect cards
- Hover scale animation
- Icon + Title + Description + CTA
- Three cards: Modules, Scenarios, Assessments

#### 5. **Content Sections**
- Learning Modules with glass cards
- Critical Scenarios with gold headers
- Quiz interface with modern styling
- Reference guide (coming soon placeholder)

## 📁 Files

### Main Files
- `index-crown.html` - Crown-styled HTML structure
- `app-crown.js` - JavaScript logic for Crown design
- `data.js` - Training content data (shared)
- `quiz.js` - Quiz data (shared)

### Shared Assets
- Tailwind CSS (via CDN)
- Google Fonts: Montserrat

## 🚀 Usage

### Local Testing
```bash
# Start local server (if not already running)
cd /home/user/webapp
python3 -m http.server 8080
```

Then access:
- Crown Design: http://localhost:8080/index-crown.html
- Original Design: http://localhost:8080/index.html

### Live URLs
- **Test Server**: https://8080-io4vq0xwxr97bynyai3eu-2b54fc91.sandbox.novita.ai/index-crown.html
- **GitHub Pages** (coming soon): https://shinsungsuk-lab.github.io/CROWN_HDAM/index-crown.html

## 🎯 Features Implemented

### ✅ Completed
- [x] Crown Sydney design aesthetic
- [x] Responsive layout (mobile, tablet, desktop)
- [x] Navigation with progress tracking
- [x] Hero section with parallax effect
- [x] Learning modules rendering
- [x] Critical scenarios display
- [x] Quiz functionality
- [x] Mobile menu
- [x] Scroll effects
- [x] Glassmorphism effects
- [x] Gold color scheme
- [x] Custom Crown logo SVG

### 📝 Content Preserved
- All 6 Learning Modules
- All 4 Critical Scenarios
- All Quiz Questions
- Progress tracking
- Local storage persistence

## 🛠️ Technical Details

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- Tailwind CSS via CDN (fast initial load)
- Minimal JavaScript
- No external dependencies except Tailwind
- LocalStorage for progress tracking

## 🔧 Customization

### Colors
To change the gold accent color, update:
```css
.gold-text { color: #FFD700; }
.btn-gold { background: #FFD700; }
.progress-gold { background: linear-gradient(90deg, #FFD700, #FFA500); }
```

### Logo
The Crown logo is an inline SVG in `index-crown.html`. To customize:
1. Find the `<svg>` element in the navigation
2. Modify the paths and shapes
3. Or replace with an `<img>` tag pointing to your logo file

### Background Images
Current hero background uses Unsplash. To change:
```html
<div class="absolute inset-0 bg-cover bg-center" 
     style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('YOUR_IMAGE_URL');">
</div>
```

## 📱 Mobile Optimization

### Features
- Hamburger menu for navigation
- Touch-friendly buttons
- Optimized card layouts
- Reduced font sizes
- Stacked layouts for small screens

### Testing
Test on multiple devices:
```
Desktop: Chrome DevTools (F12) → Device Toolbar
Real devices: Use the live URL
Responsive: Resize browser window
```

## 🎓 Content Structure

### Modules (6 total)
1. Wager Management & Limit Violations
2. Blackjack Irregularities
3. Baccarat Irregularities
4. Roulette Irregularities
5. Poker Minors Irregularities
6. Area Manager Checklist

### Scenarios (4 total)
1. The High-Stakes Blackjack Overbet
2. The Baccarat Third-Card Error
3. The System vs. Reality Discrepancy
4. The Poker Misdeal & Jackpot Complication

### Assessments (3 types)
1. Module Knowledge Quiz (20 questions)
2. Scenario Response Quiz (15 questions)
3. Comprehensive Final Assessment (30 questions)

## 🐛 Known Issues

1. **Reference Section**: Currently showing "coming soon" message as `trainingData.reference` is not defined in `data.js`
2. **Favicon 404**: Favicon.ico not included (cosmetic issue only)
3. **Tailwind CDN Warning**: For production, should use PostCSS build (current setup is for rapid development)

## 🔄 Updates & Deployment

### Making Changes
```bash
# Edit files
nano index-crown.html  # or app-crown.js

# Commit changes
git add .
git commit -m "Update Crown design: description"
git push origin main

# Update GitHub Pages
git checkout gh-pages
git merge main
git push origin gh-pages
git checkout main
```

### Deploy to GitHub Pages
The Crown design is included in the gh-pages branch. To make it the default:
1. Rename `index-crown.html` to `index.html`
2. Or update GitHub Pages settings to point to `index-crown.html`

## 📞 Support

For questions or issues:
- Check `README.md` for general information
- Review `DEPLOYMENT.md` for deployment steps
- See `UPDATE_GUIDE.md` for update procedures

## 🎉 Credits

- Design inspired by: Crown Sydney website (crownsydney.com.au)
- Framework: Tailwind CSS
- Fonts: Google Fonts - Montserrat
- Icons: Unicode emojis
- Content: Area Manager Training materials

---

**Version**: 1.0  
**Last Updated**: January 2026  
**Maintained by**: Casino Operations Training Department
