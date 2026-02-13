const vocabData = {
    1: [
        { hanzi: "你好", pinyin: "nǐ hǎo", meaning: "Halo", options: ["Halo", "Makan", "Guru", "Saya"] },
        { hanzi: "谢谢", pinyin: "xièxiè", meaning: "Terima kasih", options: ["Maaf", "Halo", "Terima kasih", "Iya"] },
        { hanzi: "老师", pinyin: "lǎoshī", meaning: "Guru", options: ["Murid", "Guru", "Dokter", "Polisi"] }
    ],
    2: [
        { hanzi: "准备", pinyin: "zhǔnbèi", meaning: "Persiapan", options: ["Selesai", "Persiapan", "Mulai", "Pergi"] },
        { hanzi: "考试", pinyin: "kǎoshì", meaning: "Ujian", options: ["Belajar", "Ujian", "Bekerja", "Membaca"] },
        { hanzi: "旅游", pinyin: "lǚyóu", meaning: "Wisata", options: ["Wisata", "Makan", "Tidur", "Lari"] }
    ]
};

let currentLevel = 1;
let currentIndex = 0;
let score = 0;

function switchLevel(level) {
    currentLevel = level;
    currentIndex = 0;
    
    // Update Button
    document.getElementById('btn-hsk1').className = (level === 1 ? 'level-btn active' : 'level-btn');
    document.getElementById('btn-hsk2').className = (level === 2 ? 'level-btn active' : 'level-btn');
    document.getElementById('quiz-title').innerText = "Kuis HSK " + level;

    updateFlashcard();
    loadQuiz();
    displayVocabList();
}

function flipCard() {
    document.getElementById('main-card').classList.toggle('flipped');
}

function updateFlashcard() {
    const item = vocabData[currentLevel][currentIndex];
    document.getElementById('hanzi').innerText = item.hanzi;
    document.getElementById('pinyin').innerText = item.pinyin;
    document.getElementById('meaning').innerText = item.meaning;
}

function nextCard() {
    currentIndex = (currentIndex + 1) % vocabData[currentLevel].length;
    document.getElementById('main-card').classList.remove('flipped');
    setTimeout(updateFlashcard, 200);
}

function loadQuiz() {
    const list = vocabData[currentLevel];
    const item = list[Math.floor(Math.random() * list.length)];
    
    document.getElementById('question').innerText = `Apa arti dari "${item.hanzi}"?`;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    item.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = 'option-btn';
        btn.onclick = () => {
            if(opt === item.meaning) {
                score += 10;
                alert("Benar! 🎉");
            } else {
                alert("Salah! Jawaban: " + item.meaning);
            }
            document.getElementById('current-score').innerText = score;
            loadQuiz();
        };
        optionsDiv.appendChild(btn);
    });
}

function displayVocabList() {
    const div = document.getElementById('vocab-list');
    div.innerHTML = '';
    vocabData[currentLevel].forEach(item => {
        const span = document.createElement('div');
        span.className = 'vocab-item';
        span.innerHTML = `<b>${item.hanzi}</b><br><small>${item.pinyin}</small><br>${item.meaning}`;
        div.appendChild(span);
    });
}

// Inisialisasi Pertama
window.onload = () => {
    switchLevel(1);
};
