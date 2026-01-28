# Area Manager Training System

A comprehensive, interactive web-based training application for casino Area Managers to learn table games irregularities, critical incident management, and operational procedures.

## 🚀 Live Demo

**Access the training system here:** [https://shinsungsuk-lab.github.io/CROWN_HDAM/](https://shinsungsuk-lab.github.io/CROWN_HDAM/)

No installation required - runs directly in your browser!

## Features

### 📚 **6 Learning Modules**
- Module 1: Wager Management & Limit Violations
- Module 2: Blackjack Irregularities
- Module 3: Baccarat Irregularities
- Module 4: Roulette Irregularities
- Module 5: Poker Minors Irregularities
- Module 6: Area Manager Checklist

Each module includes:
- Detailed procedures and rules
- Rule references (BJ Rules, Bacc Rules, WPI, etc.)
- Expandable content sections
- Progress tracking

### 🎯 **4 Critical Incident Scenarios**
Real-world scenarios with step-by-step resolutions:
1. The High-Stakes Blackjack Overbet
2. The Baccarat Third-Card Error
3. The System vs. Reality Discrepancy
4. The Poker Misdeal & Jackpot Complication

Each scenario includes:
- Setting and incident description
- Detailed resolution procedures
- Director's notes
- Key principles reinforced

### ✅ **Comprehensive Assessment System**
Three types of quizzes:
- **Module Knowledge Quiz**: 20 questions covering all modules
- **Scenario Response Quiz**: 15 scenario-based questions
- **Comprehensive Final Assessment**: 30 mixed-format questions

Quiz features:
- Multiple choice format
- Immediate feedback with explanations
- Review functionality
- Score tracking and progress saving
- 70% passing threshold

### 📖 **Quick Reference Guide**
- Searchable procedure database
- Organized by game type
- Quick lookup for on-floor reference
- All major rules and procedures

### 🎓 **Progress Tracking**
- Automatic progress saving (localStorage)
- Completion tracking for modules, scenarios, and quizzes
- Visual progress bar
- Quiz score history

## Usage

### Getting Started
1. Open `index.html` in a web browser
2. Start with the recommended learning path:
   - Study Modules 1-6
   - Review Critical Scenarios
   - Complete Assessments
   - Use Quick Reference as needed

### Navigation
- **Home**: Overview and learning path
- **Learning Modules**: Detailed content for each module
- **Critical Scenarios**: Real-world incident walkthroughs
- **Assessments**: Test your knowledge with quizzes
- **Quick Reference**: Searchable procedure guide

### Taking Assessments
1. Navigate to the Assessments section
2. Choose a quiz type
3. Answer questions and check your answers
4. Review explanations for each question
5. View your final score and pass/fail status
6. Review answers or retake as needed

### Tips for Success
- Complete modules in order (1-6)
- Read all scenarios thoroughly
- Use the Quick Reference during study
- Take notes on key procedures
- Review incorrect quiz answers carefully
- Aim for 100% on all assessments

## Technical Details

### Files Structure
```
/home/user/webapp/
├── index.html          # Main application page
├── styles.css          # Comprehensive styling
├── data.js             # Training content (modules & scenarios)
├── quiz.js             # Quiz questions database
├── app.js              # Application logic
└── README.md           # This file
```

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser
- Uses localStorage for progress tracking

### Data Persistence
- Progress is automatically saved to browser localStorage
- Data persists across sessions
- Clear browser data or use `window.resetProgress()` in console to reset

## Console Commands

For debugging and management, open browser console and use:

```javascript
// View current progress
window.debugProgress();

// Reset all progress (requires confirmation)
window.resetProgress();
```

## Content Coverage

### Rules Referenced
- **Blackjack Rules (BJ)**: 6.6.1, 7.2.5, 17.1-17.13
- **Baccarat Rules (Bacc)**: 6.6.5-6.6.7, 7.2.5, 11.1-11.16
- **Roulette Rules**: 5.2.5, 8.1
- **Poker Minor Rules**: 13.1-13.9
- **Work Practice Instructions (WPI)**: 1.6-1.7, 6.2, 27.6, 35.2, 39.4, 54.2

### Key Concepts Covered
- First Entitlement principles
- Discovery time (before vs. after deal)
- Physical evidence supremacy
- Dummy Coup procedures
- Misdeal protocols
- System error handling
- Reporting requirements
- Player rights and dispute resolution

## Core Principles

The training emphasizes five core principles of incident management:

1. **Control the Environment**: Stop action and verify evidence
2. **Evidence Overrules Technology**: Physical cards are supreme
3. **Point of No Return**: Previous results stand once next round begins
4. **Maintain Formal Record**: Log errors and notify surveillance
5. **Uphold Player Rights**: Inform guests of NICC Inspector contact rights

## Educational Objectives

Upon completion of this training, Area Managers will be able to:
- Apply correct procedures for wager limit violations
- Resolve card handling and dealing errors across all table games
- Manage system discrepancies and technology failures
- Handle misdeal situations with proper ancillary wager treatment
- Make confident, rule-based decisions under pressure
- Communicate procedures clearly to staff and guests
- Maintain game integrity and regulatory compliance

## Support

For questions about content or procedures, refer to:
- Your casino's official procedure manual
- Gaming regulatory authority guidelines
- Floor supervisors and training department

## License

This training material is proprietary and for authorized casino operations training use only.

---

**Version**: 1.0  
**Last Updated**: January 2026  
**Maintained by**: Casino Operations Training Department
