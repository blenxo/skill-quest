// Game State
let playerState = {
    level: 1,
    xp: 0,
    rank: "Novice Code Slinger",
    completedQuests: [],
    completedSubtasks: [] // IDs of completed subtasks
};

function saveState() {
    localStorage.setItem("cyberQuestState", JSON.stringify(playerState));
}

function loadState() {
    const saved = localStorage.getItem("cyberQuestState");
    if (saved) {
        try {
            playerState = JSON.parse(saved);
        } catch(e) {
            console.error("Could not parse saved state.");
        }
    }
}

// Level mapping
const rankTitles = [
    "Novice Code Slinger",
    "Data Apprentice",
    "Logic Weaver",
    "Algorithm Architect",
    "Machine Whisperer",
    "AI Specialist",
    "Neural Overlord"
];

const getXpMaxForLevel = (level) => {
    return level * 1000;
};


let currentActiveQuestId = null;

// Initialization
document.addEventListener("DOMContentLoaded", () => {
    loadState();
    updateHUD();
    renderSkillTree();
    createStars();
});

function createStars() {
    const container = document.getElementById("particle-container");
    if (!container) return;

    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
        let star = document.createElement("div");
        star.className = "star";

        let size = Math.random() * 3 + 1;
        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";

        let duration = Math.random() * 20 + 10;
        star.style.animationDuration = duration + "s";
        star.style.animationDelay = (Math.random() * 5) + "s";

        container.appendChild(star);
    }
}

function updateHUD() {
    document.getElementById("level-display").innerText = playerState.level;
    document.getElementById("xp-current").innerText = playerState.xp;

    let xpMax = getXpMaxForLevel(playerState.level);
    document.getElementById("xp-max").innerText = xpMax;

    let xpPercentage = Math.min((playerState.xp / xpMax) * 100, 100);
    document.getElementById("xp-bar").style.width = xpPercentage + "%";

    let rankIndex = Math.min(playerState.level - 1, rankTitles.length - 1);
    playerState.rank = rankTitles[rankIndex];
    document.getElementById("rank-title").innerText = playerState.rank;
}

function renderSkillTree() {
    const container = document.getElementById("quest-nodes");
    container.innerHTML = "";

    quests.forEach((q, index) => {
        let isCompleted = playerState.completedQuests.includes(q.id);

        let statusIcon = isCompleted ? "✅" : "";

        const nodeWrapper = document.createElement("div");
        nodeWrapper.className = "node-wrapper";

        const card = document.createElement("div");
        card.className = `node-card ${isCompleted ? 'completed' : ''}`;

        card.onclick = () => openQuestModal(q.id, 'main');

        card.innerHTML = `
            <div class="node-status">${statusIcon}</div>
            <h3 class="node-title">Level ${index + 1}: ${q.title}</h3>
            <p class="node-desc">${q.desc}</p>
            <p class="node-reward" style="color: var(--neon-magenta); font-size: 0.85rem; margin-top: 10px; font-weight: bold; letter-spacing: 1px;">+${q.reward} XP</p>
        `;

        nodeWrapper.appendChild(card);
        container.appendChild(nodeWrapper);
    });

    const sideContainer = document.getElementById("side-quests-container");
    if (sideContainer) {
        sideContainer.innerHTML = "";
        
        Object.values(sideQuests).forEach(sq => {
            let isCompleted = playerState.completedQuests.includes(sq.id);
            
            const card = document.createElement("div");
            card.className = `side-quest-card ${isCompleted ? 'completed' : ''}`;
            card.onclick = () => openQuestModal(sq.id, 'side');
            
            card.innerHTML = `
                <div class="node-status" style="position: absolute; top: 10px; right: 10px; font-size: 1.2rem;">${isCompleted ? '✅' : ''}</div>
                <h3>${sq.title}</h3>
                <p>${sq.desc}</p>
                <p class="node-reward" style="color: var(--neon-magenta); font-size: 0.9rem; margin-top: 15px; font-weight: bold; letter-spacing: 1px;">+${sq.reward} XP</p>
            `;
            
            sideContainer.appendChild(card);
        });
    }
}

function openQuestModal(questId, type = 'side') {
    let quest;
    if (type === 'main') {
        quest = quests.find(q => q.id === questId);
    } else {
        quest = sideQuests[questId];
    }

    if (!quest) return;

    currentActiveQuestId = quest.id;

    document.getElementById("modal-title").innerText = quest.title;
    document.getElementById("modal-xp-reward").innerText = quest.reward;

    const body = document.getElementById("modal-body");
    body.innerHTML = "";

    let isQuestCompleted = playerState.completedQuests.includes(quest.id);

    quest.sections.forEach(section => {
        const sectionHeader = document.createElement("h3");
        sectionHeader.innerText = section.title;
        sectionHeader.style.color = "var(--neon-cyan)";
        sectionHeader.style.marginTop = "15px";
        sectionHeader.style.marginBottom = "10px";
        sectionHeader.style.fontFamily = "var(--font-ui)";
        sectionHeader.style.fontSize = "1rem";
        body.appendChild(sectionHeader);

        section.subtasks.forEach(task => {
            let isTaskCompleted = playerState.completedSubtasks.includes(task.id) || isQuestCompleted;

            const wrapper = document.createElement("div");
            wrapper.className = "subtopic-wrapper";

            const btn = document.createElement("button");
            btn.className = `subtopic-btn ${isTaskCompleted ? 'completed' : ''}`;
            btn.id = task.id;
            btn.innerHTML = `<span class="icon">${isTaskCompleted ? '✅' : '⬛'}</span> <span class="text">${task.text}</span>`;

            if (isQuestCompleted) {
                btn.disabled = true;
            } else {
                btn.onclick = () => toggleSubtopic(task.id, btn);
            }

            const learnBtn = document.createElement("button");
            learnBtn.className = "learn-btn";
            learnBtn.innerText = "LEARN";

            const learnMenu = document.createElement("div");
            learnMenu.className = "learn-menu";
            learnMenu.style.display = "none";

            const topic = `${task.text} ${quest.title}`;

            const fastLearnPrompt = `
Teach me "${topic}" like a beginner.
 Explain with simple definition, 
 real-life example, 
 step-by-step logic, 
 important points, 
 common mistakes, 
 memory tricks, 
 practice questions, 
 and a short revision summary.
 Then test me with 5 questions and correct my answers.
 Make it consize.Also give me a tocken for anki if only its is a important topic of the chapter. 
`;

            const options = [
                {
                    name: "Google",
                    url: `https://www.google.com/search?q=${encodeURIComponent(topic + " beginner tutorial")}`
                },
                {
                    name: "ChatGPT",
                    url: `https://chatgpt.com/?q=${encodeURIComponent(fastLearnPrompt)}`
                },
                {
                    name: "Claude",
                    url: `https://claude.ai/new?q=${encodeURIComponent(fastLearnPrompt)}`
                },
                {
                    name: "Perplexity",
                    url: `https://www.perplexity.ai/search?q=${encodeURIComponent(fastLearnPrompt)}`
                }
            ];

            options.forEach(option => {
                const optionBtn = document.createElement("button");
                optionBtn.className = "learn-option";
                optionBtn.innerText = option.name;

                optionBtn.onclick = () => {
                    window.open(option.url, "_blank");
                    learnMenu.style.display = "none";
                };

                learnMenu.appendChild(optionBtn);
            });

            learnBtn.onclick = () => {
                learnMenu.style.display =
                    learnMenu.style.display === "none" ? "block" : "none";
            };

            wrapper.appendChild(btn);
            wrapper.appendChild(learnBtn);
            wrapper.appendChild(learnMenu);
            body.appendChild(wrapper);
        });
    });

    const claimBtn = document.getElementById("claim-btn");

    if (isQuestCompleted) {
        claimBtn.innerText = "COMPLETED";
        claimBtn.disabled = true;
    } else {
        claimBtn.innerText = "CLAIM REWARD";
        checkModalProgress(); // Init button state based on checkboxes
    }

    document.getElementById("quest-modal").classList.add("active");
}

function closeModal() {
    document.getElementById("quest-modal").classList.remove("active");
    currentActiveQuestId = null;
}

function checkModalProgress() {
    const buttons = document.querySelectorAll("#modal-body .subtopic-btn");
    let allChecked = true;
    buttons.forEach(btn => {
        if (!btn.classList.contains("completed")) allChecked = false;
    });

    const claimBtn = document.getElementById("claim-btn");
    if (buttons.length > 0) {
        claimBtn.disabled = !allChecked;
    }
}

function toggleSubtopic(taskId, btnElement) {
    if (btnElement.classList.contains("completed")) {
        btnElement.classList.remove("completed");
        btnElement.innerHTML = `<span class="icon">⬛</span> <span class="text">${btnElement.querySelector('.text').innerText}</span>`;
        playerState.completedSubtasks = playerState.completedSubtasks.filter(id => id !== taskId);
    } else {
        btnElement.classList.add("completed");
        btnElement.innerHTML = `<span class="icon">✅</span> <span class="text">${btnElement.querySelector('.text').innerText}</span>`;
        if (!playerState.completedSubtasks.includes(taskId)) {
            playerState.completedSubtasks.push(taskId);
        }
    }
    checkModalProgress();
    saveState();
}

function claimQuest() {
    if (!currentActiveQuestId) return;

    let quest = quests.find(q => q.id === currentActiveQuestId) ||
        Object.values(sideQuests).find(q => q.id === currentActiveQuestId);

    if (!quest) return;

    // Mark all subtasks as complete
    quest.sections.forEach(section => {
        section.subtasks.forEach(task => {
            if (!playerState.completedSubtasks.includes(task.id)) {
                playerState.completedSubtasks.push(task.id);
            }
        });
    });

    // Mark quest as complete
    playerState.completedQuests.push(quest.id);

    // Add XP
    addXP(quest.reward);

    // Close modal & re-render
    closeModal();
    renderSkillTree();
    saveState();
}

function addXP(amount) {
    playerState.xp += amount;

    let xpMax = getXpMaxForLevel(playerState.level);

    if (playerState.xp >= xpMax) {
        // Level up
        playerState.xp -= xpMax;
        playerState.level++;

        let rankIndex = Math.min(playerState.level - 1, rankTitles.length - 1);
        playerState.rank = rankTitles[rankIndex];

        triggerLevelUp();
    }

    updateHUD();
    saveState();
}

function triggerLevelUp() {
    const noti = document.getElementById("level-up-noti");
    document.getElementById("new-level-text").innerText = playerState.level;
    document.getElementById("new-rank-text").innerText = playerState.rank;

    noti.classList.add("active");

    setTimeout(() => {
        noti.classList.remove("active");
    }, 4000);
}
