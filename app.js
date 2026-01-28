// Main Application Logic
let currentView = 'home';
let userProgress = {
    modulesCompleted: [],
    scenariosViewed: [],
    quizzesCompleted: [],
    quizScores: {}
};

// Current quiz state
let currentQuiz = null;
let currentQuizType = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let quizStartTime = null;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    setupNavigation();
    renderModules();
    renderScenarios();
    renderReference();
    updateProgress();
});

// Navigation
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.dataset.view;
            navigateTo(view);
        });
    });
}

function navigateTo(view) {
    // Hide all views
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    
    // Show selected view
    document.getElementById(`${view}-view`).classList.add('active');
    
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.view === view) {
            btn.classList.add('active');
        }
    });
    
    currentView = view;
}

// Render Modules
function renderModules() {
    const container = document.getElementById('modules-container');
    container.innerHTML = '';
    
    trainingData.modules.forEach(module => {
        const moduleCard = createModuleCard(module);
        container.appendChild(moduleCard);
    });
}

function createModuleCard(module) {
    const card = document.createElement('div');
    card.className = 'module-card';
    
    const isCompleted = userProgress.modulesCompleted.includes(module.id);
    const status = isCompleted ? 'completed' : 'not-started';
    const statusText = isCompleted ? 'Completed ✓' : 'Not Started';
    
    card.innerHTML = `
        <div class="module-header">
            <h3 class="module-title">${module.title}</h3>
            <span class="module-status status-${status}">${statusText}</span>
        </div>
        <p class="module-description">${module.description}</p>
        <button class="btn btn-primary" onclick="toggleModuleContent(${module.id})">
            View Content
        </button>
        <div class="module-content" id="module-content-${module.id}">
            ${renderModuleSections(module.sections)}
        </div>
    `;
    
    return card;
}

function renderModuleSections(sections) {
    return sections.map(section => `
        <div class="module-section">
            <h4>${section.title}</h4>
            ${section.content.map(item => {
                let html = '';
                if (item.subtitle) {
                    html += `<h5>${item.subtitle}</h5>`;
                }
                if (item.points) {
                    html += `<ul>${item.points.map(p => `<li>${p}</li>`).join('')}</ul>`;
                }
                if (item.procedure) {
                    html += `<div class="procedure-box"><strong>Procedure:</strong><ol>${item.procedure.map(p => `<li>${p}</li>`).join('')}</ol></div>`;
                }
                return html;
            }).join('')}
        </div>
    `).join('');
}

function toggleModuleContent(moduleId) {
    const content = document.getElementById(`module-content-${moduleId}`);
    content.classList.toggle('active');
    
    if (content.classList.contains('active')) {
        // Mark as viewed
        if (!userProgress.modulesCompleted.includes(moduleId)) {
            userProgress.modulesCompleted.push(moduleId);
            saveProgress();
            updateProgress();
            renderModules();
        }
    }
}

// Render Scenarios
function renderScenarios() {
    const container = document.getElementById('scenarios-container');
    container.innerHTML = '';
    
    trainingData.scenarios.forEach(scenario => {
        const scenarioCard = createScenarioCard(scenario);
        container.appendChild(scenarioCard);
    });
}

function createScenarioCard(scenario) {
    const card = document.createElement('div');
    card.className = 'scenario-card';
    
    card.innerHTML = `
        <div class="scenario-header">
            <div class="scenario-number">Scenario ${scenario.id}</div>
            <h3 class="scenario-title">${scenario.title}</h3>
            <p style="opacity: 0.9; margin-top: 0.5rem;">${scenario.subtitle}</p>
        </div>
        
        <div class="scenario-section">
            <h4>Setting the Scene</h4>
            <p>${scenario.setting}</p>
        </div>
        
        <div class="scenario-section">
            <h4>The Incident & Escalation</h4>
            <p>${scenario.incident}</p>
        </div>
        
        <div class="scenario-section">
            <h4>${scenario.resolution.title}</h4>
            <p><em>${scenario.resolution.intro}</em></p>
            <div class="scenario-steps">
                <ol>
                    ${scenario.resolution.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
        </div>
        
        ${scenario.directorNote ? `
            <div class="director-note">
                ${scenario.directorNote}
            </div>
        ` : ''}
        
        <div class="key-principles">
            <h5>Key Principles Reinforced:</h5>
            <ul>
                ${scenario.keyPrinciples.map(principle => `<li>${principle}</li>`).join('')}
            </ul>
        </div>
    `;
    
    // Mark as viewed
    if (!userProgress.scenariosViewed.includes(scenario.id)) {
        userProgress.scenariosViewed.push(scenario.id);
        saveProgress();
        updateProgress();
    }
    
    return card;
}

// Quiz System
function startQuiz(quizType) {
    currentQuizType = quizType;
    
    // Select appropriate questions
    switch(quizType) {
        case 'module':
            currentQuiz = shuffleArray([...quizData.moduleQuiz]).slice(0, 20);
            break;
        case 'scenario':
            currentQuiz = shuffleArray([...quizData.scenarioQuiz]);
            break;
        case 'final':
            currentQuiz = shuffleArray([...quizData.finalAssessment]).slice(0, 30);
            break;
    }
    
    currentQuestionIndex = 0;
    userAnswers = [];
    quizStartTime = Date.now();
    
    // Hide selection, show quiz
    document.getElementById('quiz-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    renderQuestion();
}

function renderQuestion() {
    const container = document.getElementById('quiz-container');
    const question = currentQuiz[currentQuestionIndex];
    
    container.innerHTML = `
        <div class="quiz-question">
            <div class="question-header">
                <span class="question-number">Question ${currentQuestionIndex + 1} of ${currentQuiz.length}</span>
            </div>
            
            <div class="question-text">${question.question}</div>
            
            <div class="quiz-options">
                ${question.options.map((option, index) => `
                    <div class="quiz-option" onclick="selectAnswer(${index})">
                        <span class="option-label">${String.fromCharCode(65 + index)}.</span>
                        <span>${option}</span>
                    </div>
                `).join('')}
            </div>
            
            <div class="feedback" id="feedback"></div>
            
            <div class="quiz-controls">
                <button class="btn btn-secondary" onclick="previousQuestion()" ${currentQuestionIndex === 0 ? 'disabled' : ''}>
                    ← Previous
                </button>
                <button class="btn btn-primary" id="check-answer-btn" onclick="checkAnswer()" disabled>
                    Check Answer
                </button>
                <button class="btn btn-primary" id="next-btn" onclick="nextQuestion()" style="display: none;">
                    ${currentQuestionIndex === currentQuiz.length - 1 ? 'Finish Quiz' : 'Next →'}
                </button>
            </div>
        </div>
    `;
}

function selectAnswer(optionIndex) {
    // Remove previous selection
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selection to clicked option
    document.querySelectorAll('.quiz-option')[optionIndex].classList.add('selected');
    
    // Store answer
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Enable check button
    document.getElementById('check-answer-btn').disabled = false;
}

function checkAnswer() {
    const question = currentQuiz[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    const isCorrect = userAnswer === question.correct;
    
    // Show feedback
    const feedback = document.getElementById('feedback');
    feedback.className = `feedback show ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.innerHTML = `
        <strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong><br>
        ${question.explanation}
    `;
    
    // Highlight correct/incorrect
    document.querySelectorAll('.quiz-option').forEach((opt, index) => {
        if (index === question.correct) {
            opt.classList.add('correct');
        } else if (index === userAnswer && !isCorrect) {
            opt.classList.add('incorrect');
        }
        opt.style.pointerEvents = 'none';
    });
    
    // Show next button, hide check button
    document.getElementById('check-answer-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuiz.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
        
        // If already answered, show the answer
        if (userAnswers[currentQuestionIndex] !== undefined) {
            selectAnswer(userAnswers[currentQuestionIndex]);
            checkAnswer();
        }
    } else {
        finishQuiz();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
        
        // Show previous answer if it exists
        if (userAnswers[currentQuestionIndex] !== undefined) {
            selectAnswer(userAnswers[currentQuestionIndex]);
            checkAnswer();
        }
    }
}

function finishQuiz() {
    const correctCount = currentQuiz.reduce((count, question, index) => {
        return count + (userAnswers[index] === question.correct ? 1 : 0);
    }, 0);
    
    const score = Math.round((correctCount / currentQuiz.length) * 100);
    const timeTaken = Math.round((Date.now() - quizStartTime) / 1000 / 60);
    const passed = score >= 70;
    
    // Save results
    userProgress.quizScores[currentQuizType] = {
        score: score,
        correct: correctCount,
        total: currentQuiz.length,
        date: new Date().toISOString(),
        timeTaken: timeTaken
    };
    
    if (!userProgress.quizzesCompleted.includes(currentQuizType)) {
        userProgress.quizzesCompleted.push(currentQuizType);
    }
    
    saveProgress();
    updateProgress();
    
    // Show results
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <div class="quiz-results">
            <h2>Quiz Complete!</h2>
            <div class="results-score ${passed ? 'pass' : 'fail'}">${score}%</div>
            <div class="results-message ${passed ? 'pass' : 'fail'}">
                ${passed ? 'Passed ✓' : 'Not Passed - Review material and try again'}
            </div>
            
            <div class="results-breakdown">
                <div class="result-stat">
                    <div class="stat-value">${correctCount}/${currentQuiz.length}</div>
                    <div class="stat-label">Correct Answers</div>
                </div>
                <div class="result-stat">
                    <div class="stat-value">${timeTaken}</div>
                    <div class="stat-label">Minutes</div>
                </div>
                <div class="result-stat">
                    <div class="stat-value">${passed ? 'Pass' : 'Fail'}</div>
                    <div class="stat-label">Status (70% required)</div>
                </div>
            </div>
            
            <div style="margin-top: 2rem;">
                <button class="btn btn-primary" onclick="reviewQuiz()">Review Answers</button>
                <button class="btn btn-secondary" onclick="returnToQuizSelection()">Return to Assessments</button>
            </div>
        </div>
    `;
}

function reviewQuiz() {
    currentQuestionIndex = 0;
    renderQuestion();
    selectAnswer(userAnswers[currentQuestionIndex]);
    checkAnswer();
}

function returnToQuizSelection() {
    document.getElementById('quiz-selection').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('quiz-container').innerHTML = '';
    currentQuiz = null;
    currentQuizType = null;
}

// Reference System
function renderReference() {
    const container = document.getElementById('reference-container');
    
    const referenceData = [
        {
            category: "Wager Management",
            items: [
                { title: "Over-Limit Before Deal", content: "Instruct players to reduce/retract wagers to the limit." },
                { title: "Over-Limit After Deal", content: "Pay or collect to maximum only. Return excess. [BJ Rule 7.2.5]" },
                { title: "First Entitlement (BJ)", content: "Controlling player (nearest dealer) has first right to maximum. Remove excess from back-bettors first. [BJ Rule 6.6.1(d)]" },
                { title: "Side Wager Priority (Bacc)", content: "Players with main wagers have first entitlement. Remove from non-main wagers first (LIFO). [Bacc Rule 6.6.5-6.6.7]" }
            ]
        },
        {
            category: "Blackjack Irregularities",
            items: [
                { title: "Burn Card Error", content: "Results stand, play continues. [BJ Rule 17.1]" },
                { title: "Excess Undisclosed Card", content: "Use as next card from shoe. [BJ Rule 17.3]" },
                { title: "Excess Disclosed to Dealer", content: "Discard the card. [BJ Rule 17.3.1]" },
                { title: "Deal to Empty Box (Initial)", content: "Round is Void. Burn excess cards. [BJ Rule 17.4]" },
                { title: "Card Placement Error", content: "May reconstruct. MUST offer players option to retract first. [BJ Rule 17.5]" },
                { title: "Insufficient Cards", content: "Shuffle discard rack and complete round. [BJ Rule 17.11]" },
                { title: "Incorrect Deck", content: "Past results stand. Current round void. Rest of shoe void. [BJ Rule 17.13]" }
            ]
        },
        {
            category: "Baccarat Irregularities",
            items: [
                { title: "Failure to Burn", content: "Results stand, play continues. [Bacc Rule 11.1]" },
                { title: "Excess Undisclosed Card", content: "Becomes first card of next coup (not last coup of shoe). [Bacc Rule 11.2]" },
                { title: "Wrong Hand (Swapped)", content: "Move to correct hand. Draw extra cards if Table of Play requires. [Bacc Rule 11.3]" },
                { title: "Extra Card to Standing Hand", content: "Settle hand. Extra card becomes first card of next coup (Dummy). [Bacc Rule 11.6]" },
                { title: "Physical Cards vs Screen", content: "ACTUAL CARDS ALWAYS TAKE PRECEDENCE. [Bacc Rule 11.15]" },
                { title: "Dummy Coup", content: "Procedural coup without wagers to maintain shoe integrity. [Bacc Rule 11.4, 11.6]" }
            ]
        },
        {
            category: "Roulette Irregularities",
            items: [
                { title: "No Spin Conditions", content: "Ball out of wheel, <3 revolutions, caught in rotor, foreign object, wheel stops, interference. [Roulette Rule 8.1]" },
                { title: "SATG Wrong Result", content: "Select 'Roll Back', swipe card, enter correct number. [WPI 54.2]" }
            ]
        },
        {
            category: "Poker Minors Irregularities",
            items: [
                { title: "Exposed Cards (Initial)", content: "Misdeal (Round Void). Exception: 1 card to dealer in Caribbean Stud = face-up card. [Poker Minor Rule 13.1]" },
                { title: "Incorrect Count (After Looking)", content: "Void incorrect-count hands. Offer correct-hand players option to retract. [Poker Minor Rule 13.2]" },
                { title: "Jackpot on Misdeal", content: "Jackpot wagers remain valid for next round. Refund if player leaves. [Poker Minor Rule 13.9]" }
            ]
        },
        {
            category: "AM Checklist",
            items: [
                { title: "1. Stop the Action", content: "Verify physical evidence before proceeding." },
                { title: "2. Verify Cards", content: "Physical cards overrule electronic displays." },
                { title: "3. Check Point of No Return", content: "If next round started, previous results generally stand." },
                { title: "4. Reporting", content: "Log errors >$1,000 in iTrak. Notify Surveillance for disputes/failures/>$5,000 payouts." },
                { title: "5. Disputes", content: "Your decision is final. Inform unsatisfied guests of NICC Inspector contact right." }
            ]
        }
    ];
    
    container.innerHTML = referenceData.map(category => `
        <div class="reference-category">
            <h3>${category.category}</h3>
            ${category.items.map(item => `
                <div class="reference-item">
                    <h4>${item.title}</h4>
                    <p>${item.content}</p>
                </div>
            `).join('')}
        </div>
    `).join('');
    
    // Setup search
    document.getElementById('search-input').addEventListener('input', function(e) {
        filterReference(e.target.value);
    });
}

function filterReference(searchTerm) {
    const items = document.querySelectorAll('.reference-item');
    const term = searchTerm.toLowerCase();
    
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(term)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Progress Management
function updateProgress() {
    const totalModules = trainingData.modules.length;
    const totalScenarios = trainingData.scenarios.length;
    const totalItems = totalModules + totalScenarios + 3; // 3 quizzes
    
    const completedItems = userProgress.modulesCompleted.length + 
                          userProgress.scenariosViewed.length + 
                          userProgress.quizzesCompleted.length;
    
    const progressPercent = Math.round((completedItems / totalItems) * 100);
    
    document.getElementById('progress-fill').style.width = progressPercent + '%';
    document.getElementById('progress-percent').textContent = progressPercent;
}

function saveProgress() {
    localStorage.setItem('areaManagerProgress', JSON.stringify(userProgress));
}

function loadProgress() {
    const saved = localStorage.getItem('areaManagerProgress');
    if (saved) {
        userProgress = JSON.parse(saved);
    }
}

// Utility Functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Export for console debugging
window.debugProgress = function() {
    console.log('User Progress:', userProgress);
    console.log('Modules:', `${userProgress.modulesCompleted.length}/${trainingData.modules.length}`);
    console.log('Scenarios:', `${userProgress.scenariosViewed.length}/${trainingData.scenarios.length}`);
    console.log('Quizzes:', userProgress.quizzesCompleted);
    console.log('Quiz Scores:', userProgress.quizScores);
};

window.resetProgress = function() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        localStorage.removeItem('areaManagerProgress');
        location.reload();
    }
};
