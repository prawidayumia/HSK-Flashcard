const vocabData = {
    1: [
        { hanzi: "你好", pinyin: "nǐ hǎo", meaning: "Halo", options: ["Halo", "Terima kasih", "Saya", "Makan"] },
        { hanzi: "谢谢", pinyin: "xièxiè", meaning: "Terima kasih", options: ["Maaf", "Terima kasih", "Bagus", "Iya"] },
        { hanzi: "老师", pinyin: "lǎoshī", meaning: "Guru", options: ["Murid", "Guru", "Dokter", "Ayah"] },
        { hanzi: "喝水", pinyin: "hē shuǐ", meaning: "Minum air", options: ["Makan nasi", "Minum air", "Pergi sekolah", "Membaca"] }
    ],
    2: [
        { hanzi: "准备", pinyin: "zhǔnbèi", meaning: "Persiapan", options: ["Selesai", "Persiapan", "Mulai", "Pergi"] },
        { hanzi: "考试", pinyin: "kǎoshì", meaning: "Ujian", options: ["Belajar", "Ujian", "Bekerja", "Membaca"] },
        { hanzi: "虽然", pinyin: "suīrán", meaning: "Walaupun", options: ["Karena", "Tetapi", "Walaupun", "Jadi"] },
        { hanzi: "旅游", pinyin: "lǚyóu", meaning: "Wisata", options: ["Wisata", "Bekerja", "Tidur", "Lari"] }
    ]
};

let currentLevel = 1;
let currentIndex = 0;
let score = 0;

function switchLevel(level) {
    currentLevel = level;
    currentIndex = 0;
    document.getElementById('btn-hsk1').classList.toggle('active', level === 1);
    document.getElementById('btn-hsk2').classList.toggle('active', level === 2);
    document.getElementById('quiz-level-text').innerText = `HSK ${level}`;
    updateFlashcard();
    loadQuiz();
    displayVocabList();
}

function flipCard() {
    document.querySelector('.card').classList.toggle('flipped');
}

function updateFlashcard() {
    const data = vocabData[currentLevel][currentIndex];
    document.getElementById('hanzi').innerText = data.hanzi;
    document.getElementById('pinyin').innerText = data.pinyin;
    document.getElementById('meaning').innerText = data.meaning;
}

function nextCard() {
    currentIndex = (currentIndex + 1) % vocabData[currentLevel].length;
    document.querySelector('.card').classList.remove('flipped');
    setTimeout(updateFlashcard, 200);
}

function loadQuiz() {
    const levelData = vocabData[currentLevel];
    const questionData = levelData[Math.floor(Math.random() * levelData.length)];
    document.getElementById('question').innerText = `Apa arti dari "${questionData.hanzi}"?`;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    const shuffledOptions = [...questionData.options].sort(() => Math.random() - 0.5);
    
    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = 'option-btn';
        btn.onclick = () => {
            if(opt === questionData.meaning) {
                score += 10;
                alert("Benar! 🎉");
            } else {
                alert("Salah! Jawaban: " + questionData.meaning);
            }
            document.getElementById('current-score').innerText = score;
            loadQuiz();
        };
        optionsDiv.appendChild(btn);
    });
}

function displayVocabList() {
    const listDiv = document.getElementById('vocab-list');
    listDiv.innerHTML = '';
    vocabData[currentLevel].forEach(item => {
        const div = document.createElement('div');
        div.className = 'vocab-item';
        div.innerHTML = `<span class="v-hanzi">${item.hanzi}</span>
                         <span class="v-pinyin">${item.pinyin}</span>
                         <span class="v-meaning">${item.meaning}</span>`;
        listDiv.appendChild(div);
    });
}

window.onload = () => { switchLevel(1); };
