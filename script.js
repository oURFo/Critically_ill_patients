// Data Definitions
const CRITICAL_INFO = {
    "生命徵象": [
        "急性意識不清 (GCS < 14 分)",
        "呼吸 > 29 或 < 10 次/分",
        "脈搏 > 150 或 < 50 次/分",
        "收縮壓 > 200 或 < 90 mmHg",
        "微血管充填時間 > 2 秒",
        "體溫 > 41℃ 或 < 32℃",
        "血氧濃度 SpO2 < 90%"
    ],
    "創傷部位": [
        "顏面、會陰或體表面積 > 25% 之二度或三度燒灼傷",
        "重大的電（雷）擊傷、化學性或吸入性灼燙傷",
        "頭頸軀幹及肘膝處以上肢體之穿刺傷",
        "大量皮下氣腫、連枷胸、內臟外露",
        "手腕或腳踝以上之截肢",
        "兩處以上大腿及上臂處長骨骨折",
        "骨盆腔骨折、頭骨開放或凹陷性骨折",
        "肢體脈搏摸不到、癱瘓、壓碎傷或嚴重撕裂傷"
    ],
    "創傷機轉": [
        "高處墜落 (> 6公尺 或 > 兩層樓高；小兒 > 3公尺 或 > 2倍身高)",
        "脫困時間 > 20 分鐘",
        "身體被車輛輾過 (除遠端肢體外)",
        "從車輛中被拋出",
        "同車有死亡者",
        "其他有高能量撞擊可能之創傷機轉"
    ],
    "特殊情況": [
        "血糖值 < 60mg/dl 或顯示 High",
        "疑似急性腦中風或缺血性胸痛發作",
        "持續抽搐或剛結束",
        "中毒可能危及生命",
        "小兒評估危急者",
        "急產、毒蛇咬傷、溺水"
    ]
};

// Generators for concrete examples
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max, decimals = 1) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
}

function generateCriticalCase() {
    const categories = ['vital', 'trauma', 'mechanism', 'special'];
    const category = categories[Math.floor(Math.random() * categories.length)];

    switch (category) {
        case 'vital':
            const vitalType = getRandomInt(1, 7);
            if (vitalType === 1) return { text: `GCS ${getRandomInt(3, 13)} 分`, reason: "急性意識不清 (GCS < 14 分)" };
            if (vitalType === 2) return { text: `呼吸每分鐘 ${Math.random() > 0.5 ? getRandomInt(30, 40) : getRandomInt(6, 9)} 次`, reason: "呼吸 > 29 或 < 10 次/分" };
            if (vitalType === 3) return { text: `脈搏每分鐘 ${Math.random() > 0.5 ? getRandomInt(151, 170) : getRandomInt(30, 49)} 下`, reason: "脈搏 > 150 或 < 50 次/分" };
            if (vitalType === 4) return { text: `收縮壓 ${Math.random() > 0.5 ? getRandomInt(201, 230) : getRandomInt(60, 89)} mmHg`, reason: "收縮壓 > 200 或 < 90 mmHg" };
            if (vitalType === 5) return { text: `微血管充填時間 ${getRandomFloat(2.1, 4.0)} 秒`, reason: "微血管充填時間 > 2 秒" };
            if (vitalType === 6) return { text: `體溫 ${Math.random() > 0.5 ? getRandomFloat(41.1, 42.0) : getRandomFloat(28.0, 31.9)}℃`, reason: "體溫 > 41℃ 或 < 32℃" };
            if (vitalType === 7) return { text: `血氧濃度 SpO2 ${getRandomInt(80, 89)}%`, reason: "血氧濃度 SpO2 < 90%" };
            break;
        case 'trauma':
            const traumaList = [
                { text: "臉部三度燒傷", reason: "顏面燒燙傷" },
                { text: "全身 30% 二度燒燙傷", reason: "體表面積 > 25% 燒燙傷" },
                { text: "高壓電擊傷", reason: "重大電擊傷" },
                { text: "吸入性嗆傷", reason: "吸入性灼燙傷" },
                { text: "胸部穿刺傷", reason: "軀幹穿刺傷" },
                { text: "腹部槍傷", reason: "軀幹穿刺傷" },
                { text: "連枷胸", reason: "連枷胸" },
                { text: "腹部臟器外露", reason: "內臟外露" },
                { text: "左小腿截肢", reason: "手腕或腳踝以上截肢" },
                { text: "右手腕截肢", reason: "手腕或腳踝以上截肢" },
                { text: "雙側大腿骨折", reason: "兩處以上長骨骨折" },
                { text: "骨盆骨折", reason: "骨盆腔骨折" },
                { text: "頭骨凹陷性骨折", reason: "頭骨開放或凹陷性骨折" },
                { text: "右腳無脈搏", reason: "肢體脈搏摸不到" },
                { text: "下半身癱瘓", reason: "癱瘓" },
                { text: "大腿嚴重壓碎傷", reason: "壓碎傷" },
                { text: "頸部穿刺傷 (噴血)", reason: "軀幹穿刺傷" },
                { text: "背部深刺傷", reason: "軀幹穿刺傷" },
                { text: "會陰部三度燒傷", reason: "會陰燒燙傷" },
                { text: "化學藥劑潑灑全身", reason: "化學性灼燙傷" },
                { text: "雙手前臂骨折變形", reason: "兩處以上長骨骨折" },
                { text: "左大腿開放性骨折", reason: "兩處以上長骨骨折" },
                { text: "頭部外傷腦漿外溢", reason: "頭骨開放性骨折" },
                { text: "雙腳掌截肢", reason: "手腕或腳踝以上截肢" },
                { text: "右上臂遭機器捲入壓碎", reason: "壓碎傷" },
                { text: "左手掌撕裂傷 (肌腱外露)", reason: "嚴重撕裂傷" },
                { text: "大面積皮膚撕脫傷", reason: "嚴重撕裂傷" },
                { text: "腹部遭鋼筋穿刺", reason: "軀幹穿刺傷" },
                { text: "胸部遭刀刺傷", reason: "軀幹穿刺傷" },
                { text: "顏面骨折變形", reason: "顏面燒燙傷/骨折" } // Note: Logic slightly adjusted for simplicity
            ];
            return traumaList[Math.floor(Math.random() * traumaList.length)];
        case 'mechanism':
            const mechList = [
                { text: "從 3 樓墜落", reason: "高處墜落 > 兩層樓" },
                { text: "從 8 公尺高處墜落", reason: "高處墜落 > 6公尺" },
                { text: "車禍受困 25 分鐘", reason: "脫困時間 > 20 分鐘" },
                { text: "胸部被卡車輾過", reason: "身體被車輛輾過" },
                { text: "車禍被拋出車外", reason: "從車輛中被拋出" },
                { text: "同車乘客已死亡", reason: "同車有死亡者" },
                { text: "機車騎士撞飛 10 公尺", reason: "高能量撞擊" },
                { text: "汽車翻覆變形嚴重", reason: "高能量撞擊" },
                { text: "行人遭砂石車撞擊", reason: "高能量撞擊" },
                { text: "從 10 公尺高鷹架墜落", reason: "高處墜落 > 6公尺" },
                { text: "車禍受困 40 分鐘", reason: "脫困時間 > 20 分鐘" },
                { text: "腹部被堆高機輾過", reason: "身體被車輛輾過" }
            ];
            return mechList[Math.floor(Math.random() * mechList.length)];
        case 'special':
            const specialList = [
                { text: "血糖值 45 mg/dl", reason: "血糖值 < 60mg/dl" },
                { text: "血糖值 High", reason: "血糖值顯示 High" },
                { text: "突發單側肢體無力", reason: "疑似急性腦中風" },
                { text: "胸痛冒冷汗", reason: "疑似缺血性胸痛" },
                { text: "癲癇持續發作中", reason: "持續抽搐" },
                { text: "喝農藥中毒", reason: "中毒可能危及生命" },
                { text: "孕婦急產 (胎頭外露)", reason: "急產" },
                { text: "被百步蛇咬傷", reason: "毒蛇咬傷" },
                { text: "溺水 (無呼吸)", reason: "溺水" },
                { text: "血糖值 30 mg/dl", reason: "血糖值 < 60mg/dl" },
                { text: "嘴角歪斜說話不清", reason: "疑似急性腦中風" },
                { text: "劇烈胸痛輻射至背部", reason: "疑似缺血性胸痛" },
                { text: "剛結束全身抽搐", reason: "剛結束抽搐" },
                { text: "吞食大量安眠藥昏迷", reason: "中毒可能危及生命" },
                { text: "被龜殼花咬傷", reason: "毒蛇咬傷" },
                { text: "溺水 (心跳停止)", reason: "溺水" },
                { text: "小兒發燒且意識不清", reason: "小兒評估危急" }
            ];
            return specialList[Math.floor(Math.random() * specialList.length)];
    }
    return { text: "GCS 8 分", reason: "急性意識不清" };
}

function generateNormalCase() {
    // Normal Values: Safe ranges
    const normalVitals = [
        { text: `GCS ${getRandomInt(14, 15)} 分`, reason: "非危急個案" },
        { text: `呼吸每分鐘 ${getRandomInt(12, 20)} 次`, reason: "非危急個案" },
        { text: `脈搏每分鐘 ${getRandomInt(60, 100)} 下`, reason: "非危急個案" },
        { text: `收縮壓 ${getRandomInt(100, 140)} mmHg`, reason: "非危急個案" },
        { text: `微血管充填時間 ${getRandomFloat(0.5, 1.5)} 秒`, reason: "非危急個案" },
        { text: `體溫 ${getRandomFloat(36.0, 37.5)}℃`, reason: "非危急個案" },
        { text: `血氧濃度 SpO2 ${getRandomInt(95, 99)}%`, reason: "非危急個案" }
    ];

    const normalInjuries = [
        { text: "手臂輕微擦傷", reason: "非危急個案" },
        { text: "手指割傷 (已止血)", reason: "非危急個案" },
        { text: "腳踝扭傷腫脹", reason: "非危急個案" },
        { text: "一度燒傷 (皮膚紅腫)", reason: "非危急個案" },
        { text: "從椅子上跌落", reason: "非危急個案" },
        { text: "車禍受困 5 分鐘", reason: "非危急個案" },
        { text: "血糖值 110 mg/dl", reason: "非危急個案" },
        { text: "慢性頭痛", reason: "非危急個案" },
        { text: "輕微腹痛", reason: "非危急個案" },
        { text: "喉嚨痛", reason: "非危急個案" },
        { text: "長時間便秘", reason: "非危急個案" },
        { text: "小腿瘀青", reason: "非危急個案" },
        { text: "手肘擦傷", reason: "非危急個案" },
        { text: "膝蓋破皮", reason: "非危急個案" },
        { text: "被紙割傷", reason: "非危急個案" },
        { text: "指甲斷裂", reason: "非危急個案" },
        { text: "輕微流鼻血 (已止血)", reason: "非危急個案" },
        { text: "蚊蟲叮咬紅腫", reason: "非危急個案" },
        { text: "走路跌倒", reason: "非危急個案" },
        { text: "頭暈 (生命徵象正常)", reason: "非危急個案" },
        { text: "噁心想吐", reason: "非危急個案" },
        { text: "失眠", reason: "非危急個案" },
        { text: "牙痛", reason: "非危急個案" },
        { text: "耳朵癢", reason: "非危急個案" },
        { text: "眼睛乾澀", reason: "非危急個案" },
        { text: "肩膀痠痛", reason: "非危急個案" },
        { text: "落枕", reason: "非危急個案" },
        { text: "腳底起水泡", reason: "非危急個案" },
        { text: "手指被門夾到 (無骨折)", reason: "非危急個案" },
        { text: "被貓抓傷 (輕微)", reason: "非危急個案" }
    ];

    const isVital = Math.random() > 0.5;
    if (isVital) {
        return normalVitals[Math.floor(Math.random() * normalVitals.length)];
    } else {
        return normalInjuries[Math.floor(Math.random() * normalInjuries.length)];
    }
}

// Game State
let state = {
    score: 0,
    correctCount: 0,
    wrongCount: 0,
    timeLeft: 60,
    isPlaying: false,
    timerInterval: null,
    cards: [],
    wrongAnswers: []
};

// DOM Elements Container
const screens = {
    home: null,
    info: null,
    quiz: null,
    result: null
};

const ui = {
    timer: null,
    cardContainer: null,
    criticalList: null,
    resultCorrect: null,
    resultWrong: null,
    resultPercent: null,
    progressRing: null,
    reviewContainer: null,
    reviewList: null
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    // Initialize DOM references
    screens.home = document.getElementById('home-screen');
    screens.info = document.getElementById('info-screen');
    screens.quiz = document.getElementById('quiz-screen');
    screens.result = document.getElementById('result-screen');

    ui.timer = document.getElementById('timer');
    ui.cardContainer = document.getElementById('card-container');
    ui.criticalList = document.getElementById('critical-list');
    ui.resultCorrect = document.getElementById('result-correct');
    ui.resultWrong = document.getElementById('result-wrong');
    ui.resultPercent = document.getElementById('result-percent');
    ui.progressRing = document.querySelector('.progress-ring__circle');
    ui.reviewContainer = document.getElementById('review-container');
    ui.reviewList = document.getElementById('review-list');

    // Verify critical elements exist
    if (!screens.quiz) console.error("Quiz screen not found!");
    if (!ui.cardContainer) console.error("Card container not found!");

    setupNavigation();
    populateInfo();
}

function setupNavigation() {
    const btnStart = document.getElementById('btn-start-quiz');
    if (btnStart) btnStart.addEventListener('click', startQuiz);

    const btnInfo = document.getElementById('btn-view-info');
    if (btnInfo) btnInfo.addEventListener('click', () => switchScreen('info'));

    const btnRetry = document.getElementById('btn-retry');
    if (btnRetry) btnRetry.addEventListener('click', startQuiz);

    document.querySelectorAll('[data-target]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.target.closest('[data-target]').dataset.target;
            switchScreen(target.replace('-screen', '')); // adjust for ID naming
        });
    });
}

function switchScreen(screenName) {
    Object.values(screens).forEach(s => {
        if (s) s.classList.remove('active');
    });
    if (screens[screenName]) {
        screens[screenName].classList.add('active');
    } else {
        console.error(`Screen ${screenName} not found`);
    }
}

function populateInfo() {
    if (ui.criticalList) {
        let html = '';
        for (const [category, items] of Object.entries(CRITICAL_INFO)) {
            html += `<li style="list-style: none; font-weight: bold; color: #fff; margin-top: 10px; margin-bottom: 5px;">【${category}】</li>`;
            items.forEach(item => {
                html += `<li>${item}</li>`;
            });
        }
        ui.criticalList.innerHTML = html;
    }
}

// Game Logic
function startQuiz() {
    // Reset State
    state = {
        score: 0,
        correctCount: 0,
        wrongCount: 0,
        timeLeft: 60,
        isPlaying: true,
        timerInterval: null,
        cards: generateCardDeck(),
        wrongAnswers: []
    };

    switchScreen('quiz');

    // Reset UI
    if (ui.timer) ui.timer.innerText = '60';
    if (ui.cardContainer) ui.cardContainer.innerHTML = '';
    if (ui.reviewContainer) ui.reviewContainer.style.display = 'none';

    // Start Game Loop
    renderNextCard();
    startTimer();
}

function generateCardDeck() {
    const deck = [];
    const usedTexts = new Set();
    const targetCount = 50;
    let attempts = 0;

    while (deck.length < targetCount && attempts < 1000) {
        attempts++;
        const isCritical = Math.random() > 0.5;
        const data = isCritical ? generateCriticalCase() : generateNormalCase();

        if (!usedTexts.has(data.text)) {
            usedTexts.add(data.text);
            deck.push({ text: data.text, reason: data.reason, isCritical });
        }
    }
    return deck;
}

function startTimer() {
    if (state.timerInterval) clearInterval(state.timerInterval);

    state.timerInterval = setInterval(() => {
        state.timeLeft--;
        if (ui.timer) {
            ui.timer.innerText = state.timeLeft;
            if (state.timeLeft <= 10) {
                ui.timer.style.color = '#ef4444'; // Red warning
            } else {
                ui.timer.style.color = '';
            }
        }

        if (state.timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(state.timerInterval);
    state.isPlaying = false;

    // Update Result UI
    if (ui.resultCorrect) ui.resultCorrect.innerText = state.correctCount;
    if (ui.resultWrong) ui.resultWrong.innerText = state.wrongCount;

    const total = state.correctCount + state.wrongCount;
    const percent = total === 0 ? 0 : Math.round((state.correctCount / total) * 100);
    if (ui.resultPercent) ui.resultPercent.innerText = `${percent}%`;

    // Update Ring
    if (ui.progressRing) {
        const circumference = 326.72;
        const offset = circumference - (percent / 100) * circumference;
        ui.progressRing.style.strokeDashoffset = offset;
    }

    // Populate Review List
    if (state.wrongAnswers.length > 0 && ui.reviewList) {
        ui.reviewContainer.style.display = 'block';
        ui.reviewList.innerHTML = state.wrongAnswers.map(item => `
            <li class="review-item">
                <span class="question">${item.text}</span>
                <span class="separator">|</span>
                <span class="reason">${item.reason}</span>
            </li>
        `).join('');
    } else if (ui.reviewContainer) {
        ui.reviewContainer.style.display = 'none';
    }

    switchScreen('result');
}

// Card Rendering & Interaction
function renderNextCard() {
    if (state.cards.length === 0) {
        // Generate more cards if ran out
        state.cards = generateCardDeck();
    }

    const cardData = state.cards.pop();
    const card = document.createElement('div');
    card.className = 'quiz-card';
    card.innerText = cardData.text;
    card.dataset.isCritical = cardData.isCritical;
    card.dataset.reason = cardData.reason; // Store reason

    // Add to DOM
    if (ui.cardContainer) {
        ui.cardContainer.appendChild(card);
        // Attach Drag Events
        setupDrag(card);
    }
}

function setupDrag(card) {
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    const threshold = 100; // px to trigger swipe

    const onStart = (e) => {
        if (!state.isPlaying) return;
        isDragging = true;
        startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
        card.style.transition = 'none';
    };

    const onMove = (e) => {
        if (!isDragging) return;
        const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
        currentX = clientX - startX;

        // Rotate and move
        const rotate = currentX * 0.1;
        card.style.transform = `translateX(${currentX}px) rotate(${rotate}deg)`;

        // Highlight zones
        if (currentX > 50) document.querySelector('.right-zone').classList.add('active');
        else if (currentX < -50) document.querySelector('.left-zone').classList.add('active');
        else {
            document.querySelector('.right-zone').classList.remove('active');
            document.querySelector('.left-zone').classList.remove('active');
        }
    };

    const onEnd = () => {
        if (!isDragging) return;
        isDragging = false;

        document.querySelector('.right-zone').classList.remove('active');
        document.querySelector('.left-zone').classList.remove('active');

        if (Math.abs(currentX) > threshold) {
            // Swiped
            const direction = currentX > 0 ? 'right' : 'left';
            handleSwipe(card, direction);
        } else {
            // Reset
            card.style.transition = 'transform 0.3s ease';
            card.style.transform = 'translateX(0) rotate(0)';
        }
    };

    card.addEventListener('mousedown', onStart);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);

    card.addEventListener('touchstart', onStart);
    document.addEventListener('touchmove', onMove);
    document.addEventListener('touchend', onEnd);
}

function handleSwipe(card, direction) {
    const isCritical = card.dataset.isCritical === 'true';
    const reason = card.dataset.reason;
    const swipedRight = direction === 'right'; // Right = Critical Zone

    let isCorrect = false;
    if (isCritical && swipedRight) isCorrect = true;
    if (!isCritical && !swipedRight) isCorrect = true;

    card.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease';

    if (isCorrect) {
        // Correct: Snap to target zone
        const targetX = swipedRight ? 250 : -250;
        const targetRotation = swipedRight ? 10 : -10;

        card.style.transform = `translateX(${targetX}px) rotate(${targetRotation}deg) scale(0.8)`;
        card.style.opacity = '0'; // Fade out as it "stacks"

        state.score += 10;
        state.correctCount++;
        showFeedback(true);
    } else {
        // Incorrect: Drop down
        const targetX = swipedRight ? 100 : -100;
        card.style.transform = `translate(${targetX}px, 500px) rotate(45deg)`;
        card.style.opacity = '0';

        state.wrongCount++;
        state.wrongAnswers.push({
            text: card.innerText,
            reason: reason,
            isCritical: isCritical
        });
        showFeedback(false);
    }

    // Remove and Next
    setTimeout(() => {
        card.remove();
        if (state.isPlaying) renderNextCard();
    }, 400); // Wait for animation
}

function showFeedback(isCorrect) {
    // Simple visual feedback could be added here
}

// Expose for debugging
window.startQuiz = startQuiz;
