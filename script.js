// Database Kosakata HSK 1 (50 Kata Pertama)
const hsk1Data = [
    { hanzi: "我", pinyin: "wǒ", meaning: "Saya", options: ["Saya", "Kamu", "Dia", "Kami"] },
    { hanzi: "你", pinyin: "nǐ", meaning: "Kamu", options: ["Saya", "Kamu", "Dia", "Mereka"] },
    { hanzi: "他", pinyin: "tā", meaning: "Dia (Laki-laki)", options: ["Dia", "Kami", "Kalian", "Kamu"] },
    { hanzi: "她", pinyin: "tā", meaning: "Dia (Perempuan)", options: ["Saya", "Dia", "Ibu", "Guru"] },
    { hanzi: "我们", pinyin: "wǒmen", meaning: "Kami/Kita", options: ["Mereka", "Kami", "Kalian", "Teman"] },
    { hanzi: "好", pinyin: "hǎo", meaning: "Baik/Bagus", options: ["Jelek", "Baik", "Besar", "Kecil"] },
    { hanzi: "谢谢", pinyin: "xièxiè", meaning: "Terima kasih", options: ["Maaf", "Terima kasih", "Halo", "Sampai jumpa"] },
    { hanzi: "不客气", pinyin: "bù kèqì", meaning: "Sama-sama", options: ["Sama-sama", "Permisi", "Apa kabar", "Bisa"] },
    { hanzi: "再见", pinyin: "zàijiàn", meaning: "Sampai jumpa", options: ["Halo", "Sampai jumpa", "Silakan", "Maaf"] },
    { hanzi: "老师", pinyin: "lǎoshī", meaning: "Guru", options: ["Murid", "Dokter", "Guru", "Teman"] },
    { hanzi: "学生", pinyin: "xuésheng", meaning: "Murid", options: ["Guru", "Murid", "Sekolah", "Anak"] },
    { hanzi: "医生", pinyin: "yīshēng", meaning: "Dokter", options: ["Polisi", "Suster", "Dokter", "Ayah"] },
    { hanzi: "人", pinyin: "rén", meaning: "Orang", options: ["Makan", "Orang", "Air", "Besar"] },
    { hanzi: "家", pinyin: "jiā", meaning: "Rumah/Keluarga", options: ["Kantor", "Sekolah", "Rumah", "Toko"] },
    { hanzi: "学校", pinyin: "xuéxiào", meaning: "Sekolah", options: ["Rumah", "Rumah Sakit", "Sekolah", "Taman"] },
    { hanzi: "医院", pinyin: "yīyuàn", meaning: "Rumah Sakit", options: ["Sekolah", "Kantor", "Pasar", "Rumah Sakit"] },
    { hanzi: "中国", pinyin: "zhōngguó", meaning: "Tiongkok", options: ["Amerika", "Tiongkok", "Jepang", "Indonesia"] },
    { hanzi: "爸爸", pinyin: "bàba", meaning: "Ayah", options: ["Kakek", "Ayah", "Paman", "Kakak"] },
    { hanzi: "妈妈", pinyin: "māma", meaning: "Ibu", options: ["Nenek", "Tante", "Ibu", "Adik"] },
    { hanzi: "喝", pinyin: "hē", meaning: "Minum", options: ["Makan", "Minum", "Tidur", "Lari"] },
    { hanzi: "吃", pinyin: "chī", meaning: "Makan", options: ["Makan", "Minum", "Bicara", "Lihat"] },
    { hanzi: "水", pinyin: "shuǐ", meaning: "Air", options: ["Teh", "Kopi", "Nasi", "Air"] },
    { hanzi: "茶", pinyin: "chá", meaning: "Teh", options: ["Susu", "Teh", "Air", "Jus"] },
    { hanzi: "米饭", pinyin: "mǐfàn", meaning: "Nasi", options: ["Roti", "Mie", "Nasi", "Daging"] },
    { hanzi: "看", pinyin: "kàn", meaning: "Melihat/Membaca", options: ["Melihat", "Mendengar", "Bicara", "Pergi"] },
    { hanzi: "听", pinyin: "tīng", meaning: "Mendengar", options: ["Lihat", "Mendengar", "Baca", "Tulis"] },
    { hanzi: "说", pinyin: "shuō", meaning: "Berbicara", options: ["Diam", "Berbicara", "Tidur", "Jalan"] },
    { hanzi: "读", pinyin: "dú", meaning: "Membaca", options: ["Menulis", "Membaca", "Makan", "Beli"] },
    { hanzi: "写", pinyin: "xiě", meaning: "Menulis", options: ["Membaca", "Menulis", "Menggambar", "Cari"] },
    { hanzi: "大", pinyin: "dà", meaning: "Besar", options: ["Kecil", "Besar", "Banyak", "Sedikit"] },
    { hanzi: "小", pinyin: "xiǎo", meaning: "Kecil", options: ["Kecil", "Besar", "Tinggi", "Pendek"] },
    { hanzi: "多", pinyin: "duō", meaning: "Banyak", options: ["Sedikit", "Banyak", "Mahal", "Murah"] },
    { hanzi: "少", pinyin: "shǎo", meaning: "Sedikit", options: ["Banyak", "Cukup", "Sedikit", "Kosong"] },
    { hanzi: "去", pinyin: "qù", meaning: "Pergi", options: ["Datang", "Pergi", "Kembali", "Masuk"] },
    { hanzi: "来", pinyin: "lái", meaning: "Datang", options: ["Datang", "Pergi", "Keluar", "Turun"] },
    { hanzi: "坐", pinyin: "zuò", meaning: "Duduk", options: ["Berdiri", "Duduk", "Berjalan", "Lari"] },
    { hanzi: "钱", pinyin: "qián", meaning: "Uang", options: ["Harga", "Barang", "Uang", "Dompet"] },
    { hanzi: "买", pinyin: "mǎi", meaning: "Membeli", options: ["Menjual", "Membeli", "Memberi", "Pinjam"] },
    { hanzi: "东西", pinyin: "dōngxi", meaning: "Barang", options: ["Barang", "Makanan", "Arah", "Tempat"] },
    { hanzi: "一", pinyin: "yī", meaning: "Satu", options: ["Satu", "Dua", "Tiga", "Empat"] },
    { hanzi: "二", pinyin: "èr", meaning: "Dua", options: ["Satu", "Dua", "Tiga", "Lima"] },
    { hanzi: "三", pinyin: "sān", meaning: "Tiga", options: ["Dua", "Tiga", "Sepuluh", "Enam"] },
    { hanzi: "十", pinyin: "shí", meaning: "Sepuluh", options: ["Seratus", "Satu", "Sepuluh", "Tujuh"] },
    { hanzi: "现在", pinyin: "xiànzài", meaning: "Sekarang", options: ["Besok", "Sekarang", "Kemarin", "Nanti"] },
    { hanzi: "点", pinyin: "diǎn", meaning: "Jam", options: ["Hari", "Menit", "Tahun", "Jam"] },
    { hanzi: "月", pinyin: "yuè", meaning: "Bulan", options: ["Bulan", "Minggu", "Tahun", "Hari"] },
    { hanzi: "号", pinyin: "hào", meaning: "Tanggal/Nomor", options: ["Tanggal", "Nama", "Bulan", "Waktu"] },
    { hanzi: "星期", pinyin: "xīngqī", meaning: "Minggu", options: ["Hari", "Tahun", "Bulan", "Minggu"] },
    { hanzi: "天气", pinyin: "tiānqì", meaning: "Cuaca", options: ["Suhu", "Udara", "Cuaca", "Langit"] },
    { hanzi: "猫", pinyin: "māo", meaning: "Kucing", options: ["Anjing", "Burung", "Ikan", "Kucing"] }
];

let currentIndex = 0;
let score = 0;

// Fungsi Membalik Kartu
function flipCard() {
    document.querySelector('.card').classList.toggle('flipped');
}

// Fungsi Pindah ke Kartu Berikutnya
function nextCard() {
    currentIndex = (currentIndex + 1) % hsk1Data.length;
    document.querySelector('.card').classList.remove('flipped');
    
    // Beri jeda sedikit agar animasi balik selesai dulu baru ganti teks
    setTimeout(() => {
        document.getElementById('hanzi').innerText = hsk1Data[currentIndex].hanzi;
        document.getElementById('pinyin').innerText = hsk1Data[currentIndex].pinyin;
        document.getElementById('meaning').innerText = hsk1Data[currentIndex].meaning;
    }, 200);
}

// Fungsi Memuat Soal Kuis (Acak)
function loadQuiz() {
    const questionData = hsk1Data[Math.floor(Math.random() * hsk1Data.length)];
    document.getElementById('question').innerText = `Apa arti dari "${questionData.hanzi}" (${questionData.pinyin})?`;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    // Acak urutan pilihan jawaban
    const shuffledOptions = [...questionData.options].sort(() => Math.random() - 0.5);
    
    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = 'option-btn';
        btn.onclick = () => checkAnswer(opt, questionData.meaning);
        optionsDiv.appendChild(btn);
    });
}

// Fungsi Cek Jawaban
function checkAnswer(selected, correct) {
    if (selected === correct) {
        score += 10;
        alert("Benar! 🎉 +10 Poin");
    } else {
        alert("Ups! Salah. Jawaban yang benar adalah: " + correct);
    }
    document.getElementById('current-score').innerText = score;
    loadQuiz(); // Muat pertanyaan baru setelah menjawab
}

// Fungsi Menampilkan Daftar Kosakata ke Grid
function displayVocabList() {
    const vocabListDiv = document.getElementById('vocab-list');
    vocabListDiv.innerHTML = ''; // Bersihkan list sebelum isi ulang
    
    hsk1Data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'vocab-item';
        card.innerHTML = `
            <span class="v-hanzi">${item.hanzi}</span>
            <span class="v-pinyin">${item.pinyin}</span>
            <span class="v-meaning">${item.meaning}</span>
        `;
        vocabListDiv.appendChild(card);
    });
}

// Jalankan fungsi saat halaman selesai dimuat
window.onload = () => {
    loadQuiz();
    displayVocabList();
};
