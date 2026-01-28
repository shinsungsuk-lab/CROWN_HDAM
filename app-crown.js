// Main Application Logic - Crown Sydney Style
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
    renderModules();
    renderScenarios();
    renderReference();
    updateProgress();
});

// Navigation
function navigateTo(view) {
    // Hide all views
    document.querySelectorAll('.view').forEach(v => {
        v.classList.remove('active');
        v.classList.add('hidden');
    });
    
    // Show selected view
    const targetView = document.getElementById(`${view}-view`);
    targetView.classList.remove('hidden');
    targetView.classList.add('active');
    
    // Update nav active state
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('text-yellow-400');
    });
    
    currentView = view;
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render Modules
function renderModules() {
    const container = document.getElementById('modules-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    trainingData.modules.forEach((module, index) => {
        const moduleCard = createModuleCard(module, index);
        container.appendChild(moduleCard);
    });
}

function createModuleCard(module, index) {
    const card = document.createElement('div');
    card.className = 'glass-card rounded-lg p-8 mb-8 fade-in';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const isCompleted = userProgress.modulesCompleted.includes(module.id);
    const statusBadge = isCompleted 
        ? '<span class="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Completed ✓</span>'
        : '<span class="bg-gray-700 text-gray-300 px-4 py-1 rounded-full text-sm font-semibold">Not Started</span>';
    
    card.innerHTML = `
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h3 class="text-3xl font-bold gold-text mb-4 md:mb-0">${module.title}</h3>
            ${statusBadge}
        </div>
        <p class="text-gray-400 mb-6 text-lg leading-relaxed">${module.description}</p>
        <button onclick="toggleModuleContent(${module.id})" class="btn-gold px-8 py-3 rounded-full">
            View Content
        </button>
        <div class="module-content hidden mt-8 pt-8 border-t border-gray-700" id="module-content-${module.id}">
            ${renderModuleSections(module.sections)}
        </div>
    `;
    
    return card;
}

function renderModuleSections(sections) {
    return sections.map(section => `
        <div class="mb-8">
            <h4 class="text-2xl font-bold text-yellow-400 mb-4">${section.title}</h4>
            ${section.content.map(item => {
                let html = '';
                if (item.subtitle) {
                    html += `<h5 class="text-xl font-semibold text-white mb-3 mt-6">${item.subtitle}</h5>`;
                }
                if (item.text) {
                    html += `<p class="text-gray-400 mb-4 leading-relaxed">${item.text}</p>`;
                }
                if (item.list) {
                    html += `<ul class="list-disc list-inside space-y-2 text-gray-400 ml-4 mb-4">
                        ${item.list.map(li => `<li>${li}</li>`).join('')}
                    </ul>`;
                }
                if (item.procedure) {
                    html += `<div class="glass-card border-l-4 border-yellow-400 p-6 my-4">
                        ${item.procedure.map(step => `<p class="text-gray-300 mb-2">${step}</p>`).join('')}
                    </div>`;
                }
                if (item.formula) {
                    html += `<div class="bg-gray-900 p-6 rounded-lg my-4 font-mono text-yellow-400">
                        ${item.formula}
                    </div>`;
                }
                if (item.note) {
                    html += `<div class="bg-yellow-900 bg-opacity-20 border-l-4 border-yellow-400 p-4 my-4">
                        <p class="text-yellow-300"><strong>Note:</strong> ${item.note}</p>
                    </div>`;
                }
                return html;
            }).join('')}
        </div>
    `).join('');
}

function toggleModuleContent(moduleId) {
    const content = document.getElementById(`module-content-${moduleId}`);
    const isHidden = content.classList.contains('hidden');
    
    if (isHidden) {
        content.classList.remove('hidden');
        if (!userProgress.modulesCompleted.includes(moduleId)) {
            userProgress.modulesCompleted.push(moduleId);
            saveProgress();
            updateProgress();
        }
    } else {
        content.classList.add('hidden');
    }
}

// Render Scenarios
function renderScenarios() {
    const container = document.getElementById('scenarios-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    trainingData.scenarios.forEach((scenario, index) => {
        const scenarioCard = createScenarioCard(scenario, index);
        container.appendChild(scenarioCard);
    });
}

function createScenarioCard(scenario, index) {
    const card = document.createElement('div');
    card.className = 'glass-card rounded-lg overflow-hidden mb-8 fade-in';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const isViewed = userProgress.scenariosViewed.includes(scenario.id);
    
    card.innerHTML = `
        <div class="gold-gradient p-6">
            <p class="text-black text-sm font-semibold mb-2">SCENARIO ${scenario.number}</p>
            <h3 class="text-3xl font-bold text-black">${scenario.title}</h3>
        </div>
        
        <div class="p-8">
            <div class="mb-8">
                <h4 class="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
                    <span class="mr-3">▶</span> Setting
                </h4>
                <p class="text-gray-400 leading-relaxed">${scenario.setting}</p>
            </div>
            
            <div class="mb-8">
                <h4 class="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
                    <span class="mr-3">▶</span> Incident & Escalation
                </h4>
                <p class="text-gray-400 leading-relaxed">${scenario.incident}</p>
            </div>
            
            <div class="mb-8">
                <h4 class="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
                    <span class="mr-3">▶</span> ${scenario.resolution.title || 'Resolution'}
                </h4>
                ${scenario.resolution.intro ? `
                    <p class="text-gray-400 mb-4 leading-relaxed italic">${scenario.resolution.intro}</p>
                ` : ''}
                <div class="glass-card p-6 space-y-4">
                    ${scenario.resolution.steps.map((step, i) => `
                        <div class="flex items-start">
                            <span class="gold-text font-bold mr-4 text-lg">${i + 1}.</span>
                            <p class="text-gray-300">${step}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            ${scenario.directorNote ? `
                <div class="bg-yellow-900 bg-opacity-20 border-l-4 border-yellow-400 p-6 mb-8">
                    <p class="text-yellow-300"><strong class="text-yellow-400">💡 Director's Note:</strong> ${scenario.directorNote}</p>
                </div>
            ` : ''}
            
            <div class="glass-card p-6">
                <h5 class="text-xl font-bold text-yellow-400 mb-4">Key Principles</h5>
                <ul class="space-y-2">
                    ${scenario.keyPrinciples.map(principle => `
                        <li class="text-gray-300 flex items-start">
                            <span class="gold-text mr-2">•</span>
                            ${principle}
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
    
    if (!isViewed) {
        card.addEventListener('click', function() {
            if (!userProgress.scenariosViewed.includes(scenario.id)) {
                userProgress.scenariosViewed.push(scenario.id);
                saveProgress();
                updateProgress();
            }
        }, { once: true });
    }
    
    return card;
}

// Render Reference
function renderReference() {
    const container = document.getElementById('reference-container');
    if (!container) return;
    
    const searchInput = document.getElementById('search-input');
    
    function displayReference(filterText = '') {
        container.innerHTML = '';
        
        trainingData.reference.forEach((category, index) => {
            const items = category.items.filter(item => {
                if (!filterText) return true;
                const searchLower = filterText.toLowerCase();
                return item.title.toLowerCase().includes(searchLower) ||
                       item.procedure.toLowerCase().includes(searchLower);
            });
            
            if (items.length > 0) {
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'mb-12 fade-in';
                categoryDiv.style.animationDelay = `${index * 0.05}s`;
                
                categoryDiv.innerHTML = `
                    <h3 class="text-3xl font-bold gold-text mb-6 pb-3 border-b border-gray-700">${category.category}</h3>
                    <div class="space-y-4">
                        ${items.map(item => `
                            <div class="glass-card p-6 hover:border-yellow-400 transition-all duration-300">
                                <h4 class="text-xl font-bold text-yellow-400 mb-3">${item.title}</h4>
                                <p class="text-gray-400 leading-relaxed">${item.procedure}</p>
                            </div>
                        `).join('')}
                    </div>
                `;
                
                container.appendChild(categoryDiv);
            }
        });
        
        if (container.children.length === 0) {
            container.innerHTML = `
                <div class="text-center py-20">
                    <p class="text-2xl text-gray-500">No procedures found matching "${filterText}"</p>
                </div>
            `;
        }
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            displayReference(this.value);
        });
    }
    
    displayReference();
}

// Quiz Functions
function startQuiz(quizType) {
    currentQuizType = quizType;
    
    if (quizType === 'module') {
        currentQuiz = quizData.moduleQuiz;
    } else if (quizType === 'scenario') {
        currentQuiz = quizData.scenarioQuiz;
    } else if (quizType === 'final') {
        currentQuiz = quizData.finalAssessment;
    }
    
    currentQuestionIndex = 0;
    userAnswers = [];
    quizStartTime = Date.now();
    
    document.getElementById('quiz-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    renderQuestion();
}

function renderQuestion() {
    const container = document.getElementById('quiz-container');
    const question = currentQuiz[currentQuestionIndex];
    
    container.innerHTML = `
        <div class="glass-card rounded-lg p-8 max-w-4xl mx-auto">
            <div class="flex justify-between items-center mb-8 pb-4 border-b border-gray-700">
                <span class="text-xl font-bold gold-text">Question ${currentQuestionIndex + 1} of ${currentQuiz.length}</span>
                <span class="text-sm text-gray-400">Type: ${question.type}</span>
            </div>
            
            <p class="text-2xl text-white mb-8 leading-relaxed">${question.question}</p>
            
            <div class="space-y-4">
                ${question.options.map((option, index) => `
                    <button onclick="selectAnswer(${index})" 
                            class="quiz-option w-full text-left p-6 rounded-lg bg-gray-900 border-2 border-gray-700 hover:border-yellow-400 transition-all duration-300">
                        <span class="font-bold gold-text mr-4">${String.fromCharCode(65 + index)}.</span>
                        <span class="text-gray-300">${option}</span>
                    </button>
                `).join('')}
            </div>
            
            <div id="feedback" class="hidden mt-8"></div>
            
            <div class="flex justify-between items-center mt-8 pt-6 border-t border-gray-700">
                ${currentQuestionIndex > 0 ? 
                    `<button onclick="previousQuestion()" class="px-6 py-3 rounded-full border-2 border-gray-600 text-gray-300 hover:border-yellow-400 hover:text-yellow-400 transition">
                        ← Previous
                    </button>` : '<div></div>'}
                
                ${currentQuestionIndex < currentQuiz.length - 1 ? 
                    `<button onclick="nextQuestion()" class="btn-gold px-8 py-3 rounded-full">
                        Next →
                    </button>` : 
                    `<button onclick="finishQuiz()" class="btn-gold px-8 py-3 rounded-full">
                        Finish Quiz
                    </button>`}
            </div>
        </div>
    `;
}

function selectAnswer(optionIndex) {
    const question = currentQuiz[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Update visual selection
    document.querySelectorAll('.quiz-option').forEach((btn, index) => {
        btn.classList.remove('border-yellow-400', 'bg-gray-800');
        if (index === optionIndex) {
            btn.classList.add('border-yellow-400', 'bg-gray-800');
        }
    });
    
    // Show feedback
    const feedback = document.getElementById('feedback');
    const isCorrect = optionIndex === question.correct;
    
    feedback.className = `p-6 rounded-lg border-l-4 ${isCorrect ? 'bg-green-900 bg-opacity-20 border-green-400' : 'bg-red-900 bg-opacity-20 border-red-400'}`;
    feedback.innerHTML = `
        <p class="font-bold text-xl mb-2 ${isCorrect ? 'text-green-400' : 'text-red-400'}">
            ${isCorrect ? '✓ Correct!' : '✗ Incorrect'}
        </p>
        <p class="text-gray-300">${question.explanation}</p>
    `;
    feedback.classList.remove('hidden');
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuiz.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
        
        // Re-select answer if already answered
        if (userAnswers[currentQuestionIndex] !== undefined) {
            selectAnswer(userAnswers[currentQuestionIndex]);
        }
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
        
        // Re-select answer if already answered
        if (userAnswers[currentQuestionIndex] !== undefined) {
            selectAnswer(userAnswers[currentQuestionIndex]);
        }
    }
}

function finishQuiz() {
    const score = calculateScore();
    const percentage = Math.round((score / currentQuiz.length) * 100);
    const passed = percentage >= 70;
    const timeTaken = Math.round((Date.now() - quizStartTime) / 60000); // minutes
    
    // Save quiz result
    userProgress.quizzesCompleted.push(currentQuizType);
    userProgress.quizScores[currentQuizType] = percentage;
    saveProgress();
    updateProgress();
    
    // Display results
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <div class="glass-card rounded-lg p-12 text-center max-w-3xl mx-auto">
            <h2 class="text-4xl font-bold gold-text mb-8">Quiz Complete!</h2>
            
            <div class="text-8xl font-bold mb-8 ${passed ? 'text-green-400' : 'text-red-400'}">
                ${percentage}%
            </div>
            
            <p class="text-3xl mb-12 ${passed ? 'text-green-400' : 'text-red-400'}">
                ${passed ? '✓ PASSED' : '✗ FAILED'}
            </p>
            
            <div class="grid grid-cols-3 gap-6 mb-12">
                <div class="glass-card p-6">
                    <div class="text-4xl font-bold gold-text mb-2">${score}</div>
                    <div class="text-gray-400">Correct</div>
                </div>
                <div class="glass-card p-6">
                    <div class="text-4xl font-bold text-red-400 mb-2">${currentQuiz.length - score}</div>
                    <div class="text-gray-400">Incorrect</div>
                </div>
                <div class="glass-card p-6">
                    <div class="text-4xl font-bold text-blue-400 mb-2">${timeTaken}</div>
                    <div class="text-gray-400">Minutes</div>
                </div>
            </div>
            
            <div class="space-x-4">
                <button onclick="retakeQuiz()" class="px-8 py-3 rounded-full border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
                    Retake Quiz
                </button>
                <button onclick="returnToQuizSelection()" class="btn-gold px-8 py-3 rounded-full">
                    Back to Assessments
                </button>
            </div>
        </div>
    `;
}

function calculateScore() {
    let correct = 0;
    currentQuiz.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correct++;
        }
    });
    return correct;
}

function retakeQuiz() {
    startQuiz(currentQuizType);
}

function returnToQuizSelection() {
    document.getElementById('quiz-selection').style.display = 'grid';
    document.getElementById('quiz-container').style.display = 'none';
    currentQuiz = null;
    currentQuizType = null;
}

// Progress Management
function updateProgress() {
    const totalModules = trainingData.modules.length;
    const totalScenarios = trainingData.scenarios.length;
    const totalQuizzes = 3; // module, scenario, final
    
    const completedModules = userProgress.modulesCompleted.length;
    const viewedScenarios = userProgress.scenariosViewed.length;
    const completedQuizzes = userProgress.quizzesCompleted.length;
    
    const totalItems = totalModules + totalScenarios + totalQuizzes;
    const completedItems = completedModules + viewedScenarios + completedQuizzes;
    
    const percentage = Math.round((completedItems / totalItems) * 100);
    
    // Update navigation progress bar
    const navProgress = document.getElementById('nav-progress');
    const navProgressText = document.getElementById('nav-progress-text');
    
    if (navProgress) {
        navProgress.style.width = `${percentage}%`;
    }
    if (navProgressText) {
        navProgressText.textContent = `${percentage}%`;
    }
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

// Global reset function for testing
window.resetProgress = function() {
    userProgress = {
        modulesCompleted: [],
        scenariosViewed: [],
        quizzesCompleted: [],
        quizScores: {}
    };
    saveProgress();
    updateProgress();
    alert('Progress has been reset!');
    location.reload();
};
