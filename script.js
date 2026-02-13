const vocabData = {
    1: [
        { hanzi: "爱", pinyin: "ài", meaning: "Cinta/Sayang", options: ["Cinta", "Makan", "Minum", "Pergi"] },
        { hanzi: "八", pinyin: "bā", meaning: "Delapan", options: ["Enam", "Tujuh", "Delapan", "Sembilan"] },
        { hanzi: "爸爸", pinyin: "bàba", meaning: "Ayah", options: ["Ibu", "Ayah", "Kakak", "Adik"] },
        { hanzi: "杯子", pinyin: "bēizi", meaning: "Gelas", options: ["Piring", "Gelas", "Sendok", "Meja"] },
        { hanzi: "北京", pinyin: "Běijīng", meaning: "Beijing", options: ["Shanghai", "Beijing", "Tiongkok", "Jakarta"] },
        { hanzi: "本", pinyin: "běn", meaning: "Jilid (kata bantu buku)", options: ["Buah", "Ekor", "Jilid", "Lembar"] },
        { hanzi: "不", pinyin: "bù", meaning: "Tidak", options: ["Ya", "Tidak", "Bisa", "Mungkin"] },
        { hanzi: "不客气", pinyin: "bù kèqì", meaning: "Sama-sama", options: ["Terima kasih", "Maaf", "Sama-sama", "Halo"] },
        { hanzi: "菜", pinyin: "cài", meaning: "Sayur/Hidangan", options: ["Nasi", "Sayur", "Buah", "Air"] },
        { hanzi: "茶", pinyin: "chá", meaning: "Teh", options: ["Kopi", "Susu", "Teh", "Air"] },
        { hanzi: "吃", pinyin: "chī", meaning: "Makan", options: ["Makan", "Minum", "Tidur", "Lari"] },
        { hanzi: "出租车", pinyin: "chūzūchē", meaning: "Taksi", options: ["Bus", "Kereta", "Taksi", "Pesawat"] },
        { hanzi: "打电话", pinyin: "dǎ diànhuà", meaning: "Menelepon", options: ["Menulis", "Membaca", "Menelepon", "Melihat"] },
        { hanzi: "大", pinyin: "dà", meaning: "Besar", options: ["Kecil", "Besar", "Banyak", "Tinggi"] },
        { hanzi: "的", pinyin: "de", meaning: "Punya (kepunyaan)", options: ["Dan", "Punya", "Atau", "Sangat"] },
        { hanzi: "点", pinyin: "diǎn", meaning: "Jam/Sedikit", options: ["Menit", "Hari", "Jam", "Tahun"] },
        { hanzi: "电脑", pinyin: "diànnǎo", meaning: "Komputer", options: ["TV", "HP", "Komputer", "Radio"] },
        { hanzi: "电视", pinyin: "diànshì", meaning: "Televisi", options: ["Komputer", "TV", "Bioskop", "Telepon"] },
        { hanzi: "电影", pinyin: "diànyǐng", meaning: "Film", options: ["Buku", "Lagu", "Film", "Gambar"] },
        { hanzi: "东西", pinyin: "dōngxi", meaning: "Barang/Benda", options: ["Makanan", "Barang", "Tempat", "Orang"] },
        { hanzi: "都", pinyin: "dōu", meaning: "Semua", options: ["Beberapa", "Semua", "Hanya", "Juga"] },
        { hanzi: "读", pinyin: "dú", meaning: "Membaca", options: ["Menulis", "Melihat", "Membaca", "Mendengar"] },
        { hanzi: "对不起", pinyin: "duìbuqǐ", meaning: "Maaf", options: ["Terima kasih", "Maaf", "Halo", "Sampai jumpa"] },
        { hanzi: "多", pinyin: "duō", meaning: "Banyak", options: ["Sedikit", "Banyak", "Besar", "Kecil"] },
        { hanzi: "多少", pinyin: "duōshǎo", meaning: "Berapa (banyak)", options: ["Apa", "Mana", "Berapa", "Siapa"] },
        { hanzi: "儿子", pinyin: "érzi", meaning: "Anak laki-laki", options: ["Anak perempuan", "Ibu", "Ayah", "Anak laki-laki"] },
        { hanzi: "二", pinyin: "èr", meaning: "Dua", options: ["Satu", "Dua", "Tiga", "Sepuluh"] },
        { hanzi: "饭店", pinyin: "fàndiàn", meaning: "Restoran/Hotel", options: ["Sekolah", "Restoran", "Pasar", "Kantor"] },
        { hanzi: "飞机", pinyin: "fēijī", meaning: "Pesawat", options: ["Mobil", "Kereta", "Pesawat", "Kapal"] },
        { hanzi: "分钟", pinyin: "fēnzhōng", meaning: "Menit", options: ["Jam", "Menit", "Detik", "Hari"] },
        { hanzi: "高兴", pinyin: "gāoxìng", meaning: "Senang", options: ["Sedih", "Senang", "Marah", "Lelah"] },
        { hanzi: "个", pinyin: "gè", meaning: "Buah (kata bantu umum)", options: ["Ekor", "Buah", "Jilid", "Lembar"] },
        { hanzi: "工作", pinyin: "gōngzuò", meaning: "Bekerja", options: ["Belajar", "Bekerja", "Bermain", "Tidur"] },
        { hanzi: "狗", pinyin: "gǒu", meaning: "Anjing", options: ["Kucing", "Anjing", "Burung", "Ikan"] },
        { hanzi: "汉语", pinyin: "Hànyǔ", meaning: "Bahasa Mandarin", options: ["Bahasa Inggris", "Bahasa Mandarin", "Bahasa Arab", "Bahasa Jepang"] },
        { hanzi: "好", pinyin: "hǎo", meaning: "Baik/Bagus", options: ["Jelek", "Baik", "Besar", "Sakit"] },
        { hanzi: "号", pinyin: "hào", meaning: "Tanggal/Nomor", options: ["Bulan", "Tahun", "Tanggal", "Jam"] },
        { hanzi: "喝", pinyin: "hē", meaning: "Minum", options: ["Makan", "Minum", "Tidur", "Lari"] },
        { hanzi: "和", pinyin: "hé", meaning: "Dan", options: ["Atau", "Dan", "Tapi", "Sangat"] },
        { hanzi: "很", pinyin: "hěn", meaning: "Sangat", options: ["Hanya", "Sangat", "Tidak", "Mungkin"] },
        { hanzi: "后面", pinyin: "hòumiàn", meaning: "Belakang", options: ["Depan", "Atas", "Belakang", "Bawah"] },
        { hanzi: "回", pinyin: "huí", meaning: "Kembali/Pulang", options: ["Pergi", "Kembali", "Datang", "Tinggal"] },
        { hanzi: "会", pinyin: "huì", meaning: "Bisa/Akan", options: ["Bisa", "Tidak", "Sangat", "Sudah"] },
        { hanzi: "几", pinyin: "jǐ", meaning: "Berapa (sedikit)", options: ["Apa", "Mana", "Berapa", "Kapan"] },
        { hanzi: "家", pinyin: "jiā", meaning: "Rumah/Keluarga", options: ["Kantor", "Sekolah", "Rumah", "Toko"] },
        { hanzi: "叫", pinyin: "jiào", meaning: "Bernama/Memanggil", options: ["Makan", "Bernama", "Pergi", "Lihat"] },
        { hanzi: "今天", pinyin: "jīntiān", meaning: "Hari ini", options: ["Besok", "Kemarin", "Hari ini", "Lusa"] },
        { hanzi: "九", pinyin: "jiǔ", meaning: "Sembilan", options: ["Enam", "Tujuh", "Delapan", "Sembilan"] },
        { hanzi: "开", pinyin: "kāi", meaning: "Membuka/Menyetir", options: ["Menutup", "Membuka", "Berhenti", "Makan"] },
        { hanzi: "看", pinyin: "kàn", meaning: "Melihat/Membaca", options: ["Mendengar", "Bicara", "Melihat", "Tulis"] },
        { hanzi: "看见", pinyin: "kànjiàn", meaning: "Melihat (hasil)", options: ["Dengar", "Melihat", "Bicara", "Lupa"] },
        { hanzi: "块", pinyin: "kuài", meaning: "Yuan (mata uang)", options: ["Rupiah", "Dollar", "Yuan", "Euro"] },
        { hanzi: "来", pinyin: "lái", meaning: "Datang", options: ["Pergi", "Pulang", "Datang", "Keluar"] },
        { hanzi: "老师", pinyin: "lǎoshī", meaning: "Guru", options: ["Murid", "Guru", "Dokter", "Polisi"] },
        { hanzi: "了", pinyin: "le", meaning: "Sudah (partikel)", options: ["Belum", "Sedang", "Sudah", "Akan"] },
        { hanzi: "冷", pinyin: "lěng", meaning: "Dingin", options: ["Panas", "Dingin", "Hangat", "Sejuk"] },
        { hanzi: "里", pinyin: "lǐ", meaning: "Dalam", options: ["Luar", "Atas", "Dalam", "Bawah"] },
        { hanzi: "六", pinyin: "liù", meaning: "Enam", options: ["Empat", "Lima", "Enam", "Tujuh"] },
        { hanzi: "妈妈", pinyin: "māma", meaning: "Ibu", options: ["Ayah", "Ibu", "Nenek", "Tante"] },
        { hanzi: "吗", pinyin: "ma", meaning: "Apakah?", options: ["Sudah", "Apakah?", "Sangat", "Tidak"] },
        { hanzi: "买", pinyin: "mǎi", meaning: "Membeli", options: ["Menjual", "Melihat", "Membeli", "Mencari"] },
        { hanzi: "猫", pinyin: "māo", meaning: "Kucing", options: ["Anjing", "Kucing", "Kelinci", "Burung"] },
        { hanzi: "没关系", pinyin: "méi guānxi", meaning: "Tidak apa-apa", options: ["Maaf", "Terima kasih", "Tidak apa-apa", "Halo"] },
        { hanzi: "没有", pinyin: "méiyǒu", meaning: "Tidak ada/Tidak punya", options: ["Ada", "Punya", "Tidak ada", "Sangat"] },
        { hanzi: "米饭", pinyin: "mǐfàn", meaning: "Nasi", options: ["Mie", "Roti", "Nasi", "Daging"] },
        { hanzi: "名字", pinyin: "míngzi", meaning: "Nama", options: ["Umur", "Nama", "Tempat", "Buku"] },
        { hanzi: "明天", pinyin: "míngtiān", meaning: "Besok", options: ["Hari ini", "Kemarin", "Besok", "Lusa"] },
        { hanzi: "哪", pinyin: "nǎ", meaning: "Yang mana", options: ["Apa", "Mana", "Siapa", "Kapan"] },
        { hanzi: "哪儿", pinyin: "nǎr", meaning: "Di mana", options: ["Ke sana", "Di mana", "Sini", "Mana"] },
        { hanzi: "那", pinyin: "nà", meaning: "Itu", options: ["Ini", "Itu", "Mana", "Apa"] },
        { hanzi: "呢", pinyin: "ne", meaning: "Bagaimana dengan...?", options: ["Apakah", "Bagaimana", "Sudah", "Lah"] },
        { hanzi: "能", pinyin: "néng", meaning: "Bisa/Mampu", options: ["Tidak", "Bisa", "Akan", "Sangat"] },
        { hanzi: "你", pinyin: "nǐ", meaning: "Kamu", options: ["Saya", "Kamu", "Dia", "Kalian"] },
        { hanzi: "年", pinyin: "nián", meaning: "Tahun", options: ["Bulan", "Hari", "Tahun", "Minggu"] },
        { hanzi: "女儿", pinyin: "nǚ'ér", meaning: "Anak perempuan", options: ["Anak laki-laki", "Ibu", "Nenek", "Anak perempuan"] },
        { hanzi: "朋友", pinyin: "péngyou", meaning: "Teman", options: ["Guru", "Teman", "Musuh", "Keluarga"] },
        { hanzi: "漂亮", pinyin: "piàoliang", meaning: "Cantik", options: ["Jelek", "Cantik", "Besar", "Kecil"] },
        { hanzi: "苹果", pinyin: "píngguǒ", meaning: "Apel", options: ["Jeruk", "Pisang", "Apel", "Semangka"] },
        { hanzi: "七", pinyin: "qī", meaning: "Tujuh", options: ["Enam", "Tujuh", "Delapan", "Sembilan"] },
        { hanzi: "前面", pinyin: "qiánmiàn", meaning: "Depan", options: ["Belakang", "Atas", "Depan", "Bawah"] },
        { hanzi: "钱", pinyin: "qián", meaning: "Uang", options: ["Barang", "Uang", "Harga", "Pasar"] },
        { hanzi: "请", pinyin: "qǐng", meaning: "Silakan/Mohon", options: ["Pergi", "Tolong", "Silakan", "Duduk"] },
        { hanzi: "去", pinyin: "qù", meaning: "Pergi", options: ["Datang", "Pulang", "Pergi", "Duduk"] },
        { hanzi: "热", pinyin: "rè", meaning: "Panas", options: ["Dingin", "Sejuk", "Panas", "Hangat"] },
        { hanzi: "人", pinyin: "rén", meaning: "Orang", options: ["Hewan", "Orang", "Air", "Benda"] },
        { hanzi: "认识", pinyin: "rènshi", meaning: "Kenal", options: ["Lupa", "Tahu", "Kenal", "Lihat"] },
        { hanzi: "三", pinyin: "sān", meaning: "Tiga", options: ["Satu", "Dua", "Tiga", "Empat"] },
        { hanzi: "商店", pinyin: "shāngdiàn", meaning: "Toko", options: ["Sekolah", "Pasar", "Toko", "Rumah"] },
        { hanzi: "上", pinyin: "shàng", meaning: "Atas/Naik", options: ["Bawah", "Atas", "Dalam", "Luar"] },
        { hanzi: "上午", pinyin: "shàngwǔ", meaning: "Pagi/Sebelum siang", options: ["Sore", "Malam", "Pagi", "Siang"] },
        { hanzi: "少", pinyin: "shǎo", meaning: "Sedikit", options: ["Banyak", "Sedikit", "Besar", "Cukup"] },
        { hanzi: "谁", pinyin: "shéi", meaning: "Siapa", options: ["Apa", "Mana", "Siapa", "Kapan"] },
        { hanzi: "什么", pinyin: "shénme", meaning: "Apa", options: ["Kapan", "Apa", "Mana", "Siapa"] },
        { hanzi: "十", pinyin: "shí", meaning: "Sepuluh", options: ["Satu", "Sepuluh", "Seratus", "Nol"] },
        { hanzi: "时候", pinyin: "shíhou", meaning: "Waktu/Saat", options: ["Jam", "Menit", "Waktu", "Hari"] },
        { hanzi: "是", pinyin: "shì", meaning: "Adalah/Ya", options: ["Bukan", "Adalah", "Punya", "Sangat"] },
        { hanzi: "书", pinyin: "shū", meaning: "Buku", options: ["Pulpen", "Tas", "Buku", "Meja"] },
        { hanzi: "水", pinyin: "shuǐ", meaning: "Air", options: ["Api", "Air", "Tanah", "Angin"] },
        { hanzi: "水果", pinyin: "shuǐguǒ", meaning: "Buah-buahan", options: ["Sayuran", "Buah-buahan", "Daging", "Minuman"] },
        { hanzi: "睡觉", pinyin: "shuìjiào", meaning: "Tidur", options: ["Makan", "Tidur", "Bangun", "Lari"] },
        { hanzi: "说", pinyin: "shuō", meaning: "Berbicara", options: ["Dengar", "Melihat", "Berbicara", "Tulis"] },
        { hanzi: "四", pinyin: "sì", meaning: "Empat", options: ["Tiga", "Empat", "Lima", "Sepuluh"] },
        { hanzi: "岁", pinyin: "suì", meaning: "Umur/Tahun", options: ["Hari", "Bulan", "Umur", "Nama"] },
        { hanzi: "他", pinyin: "tā", meaning: "Dia (Laki-laki)", options: ["Dia (L)", "Dia (P)", "Saya", "Kamu"] },
        { hanzi: "她", pinyin: "tā", meaning: "Dia (Perempuan)", options: ["Dia (L)", "Dia (P)", "Kami", "Mereka"] },
        { hanzi: "太", pinyin: "tài", meaning: "Terlalu/Sangat", options: ["Tidak", "Terlalu", "Hanya", "Sudah"] },
        { hanzi: "天气", pinyin: "tiānqì", meaning: "Cuaca", options: ["Suhu", "Udara", "Cuaca", "Langit"] },
        { hanzi: "听", pinyin: "tīng", meaning: "Mendengar", options: ["Melihat", "Berbicara", "Mendengar", "Menulis"] },
        { hanzi: "同学", pinyin: "tóngxué", meaning: "Teman sekolah", options: ["Guru", "Teman sekolah", "Dokter", "Keluarga"] },
        { hanzi: "喂", pinyin: "wèi", meaning: "Halo (telepon)", options: ["Halo", "Maaf", "Terima kasih", "Sampai jumpa"] },
        { hanzi: "我", pinyin: "wǒ", meaning: "Saya", options: ["Kamu", "Dia", "Saya", "Kalian"] },
        { hanzi: "我们", pinyin: "wǒmen", meaning: "Kami/Kita", options: ["Mereka", "Kalian", "Kami", "Kamu"] },
        { hanzi: "五", pinyin: "wǔ", meaning: "Lima", options: ["Empat", "Lima", "Enam", "Tujuh"] },
        { hanzi: "喜欢", pinyin: "xǐhuan", meaning: "Suka", options: ["Benci", "Suka", "Marah", "Takut"] },
        { hanzi: "下", pinyin: "xià", meaning: "Bawah/Turun", options: ["Atas", "Bawah", "Luar", "Tengah"] },
        { hanzi: "下午", pinyin: "xiàwǔ", meaning: "Sore", options: ["Pagi", "Sore", "Malam", "Siang"] },
        { hanzi: "下雨", pinyin: "xiàyǔ", meaning: "Hujan", options: ["Berangin", "Cerah", "Hujan", "Bersalju"] },
        { hanzi: "先生", pinyin: "xiānsheng", meaning: "Tuan/Suami", options: ["Nyonya", "Tuan", "Nona", "Anak"] },
        { hanzi: "现在", pinyin: "xiànzài", meaning: "Sekarang", options: ["Dulu", "Nanti", "Sekarang", "Kemarin"] },
        { hanzi: "想", pinyin: "xiǎng", meaning: "Ingin/Berpikir", options: ["Makan", "Minum", "Ingin", "Pergi"] },
        { hanzi: "小", pinyin: "xiǎo", meaning: "Kecil", options: ["Besar", "Tinggi", "Kecil", "Banyak"] },
        { hanzi: "小姐", pinyin: "xiǎojiě", meaning: "Nona", options: ["Tuan", "Nona", "Ibu", "Guru"] },
        { hanzi: "些", pinyin: "xiē", meaning: "Beberapa", options: ["Satu", "Banyak", "Beberapa", "Semua"] },
        { hanzi: "写", pinyin: "xiě", meaning: "Menulis", options: ["Membaca", "Mendengar", "Menulis", "Melihat"] },
        { hanzi: "谢谢", pinyin: "xièxiè", meaning: "Terima kasih", options: ["Halo", "Maaf", "Terima kasih", "Sama-sama"] },
        { hanzi: "星期", pinyin: "xīngqī", meaning: "Minggu/Hari", options: ["Bulan", "Tahun", "Minggu", "Jam"] },
        { hanzi: "学生", pinyin: "xuésheng", meaning: "Murid", options: ["Guru", "Murid", "Sekolah", "Buku"] },
        { hanzi: "学习", pinyin: "xuéxí", meaning: "Belajar", options: ["Bermain", "Belajar", "Tidur", "Makan"] },
        { hanzi: "学校", pinyin: "xuéxiào", meaning: "Sekolah", options: ["Rumah", "Toko", "Sekolah", "Rumah Sakit"] },
        { hanzi: "一", pinyin: "yī", meaning: "Satu", options: ["Nol", "Satu", "Dua", "Tiga"] },
        { hanzi: "一点儿", pinyin: "yìdiǎnr", meaning: "Sedikit", options: ["Banyak", "Sedikit", "Cukup", "Lebih"] },
        { hanzi: "衣服", pinyin: "yīfu", meaning: "Pakaian", options: ["Sepatu", "Tas", "Pakaian", "Topi"] },
        { hanzi: "医生", pinyin: "yīshēng", meaning: "Dokter", options: ["Guru", "Dokter", "Polisi", "Supir"] },
        { hanzi: "医院", pinyin: "yīyuàn", meaning: "Rumah Sakit", options: ["Sekolah", "Toko", "Rumah Sakit", "Bandara"] },
        { hanzi: "椅子", pinyin: "yǐzi", meaning: "Kursi", options: ["Meja", "Kursi", "Tempat tidur", "Lemari"] },
        { hanzi: "有", pinyin: "yǒu", meaning: "Punya/Ada", options: ["Tidak punya", "Punya", "Sangat", "Ingin"] },
        { hanzi: "月", pinyin: "yuè", meaning: "Bulan", options: ["Hari", "Tahun", "Bulan", "Minggu"] },
        { hanzi: "再见", pinyin: "zàijiàn", meaning: "Sampai jumpa", options: ["Halo", "Maaf", "Sampai jumpa", "Terima kasih"] },
        { hanzi: "在", pinyin: "zài", meaning: "Di/Sedang", options: ["Ke", "Dari", "Di", "Sudah"] },
        { hanzi: "怎么", pinyin: "zěnme", meaning: "Bagaimana", options: ["Apa", "Mana", "Bagaimana", "Siapa"] },
        { hanzi: "怎么样", pinyin: "zěnmeyàng", meaning: "Bagaimana (keadaan)", options: ["Apa", "Bagaimana", "Kapan", "Mana"] },
        { hanzi: "这", pinyin: "zhè", meaning: "Ini", options: ["Itu", "Ini", "Mana", "Apa"] },
        { hanzi: "中国", pinyin: "Zhōngguó", meaning: "Tiongkok", options: ["Indonesia", "Tiongkok", "Jepang", "Amerika"] },
        { hanzi: "中午", pinyin: "zhōngwǔ", meaning: "Siang", options: ["Pagi", "Siang", "Malam", "Sore"] },
        { hanzi: "住", pinyin: "zhù", meaning: "Tinggal", options: ["Pergi", "Tinggal", "Makan", "Duduk"] },
        { hanzi: "桌子", pinyin: "zhuōzi", meaning: "Meja", options: ["Kursi", "Meja", "Pintu", "Jendela"] },
        { hanzi: "字", pinyin: "zì", meaning: "Karakter/Huruf", options: ["Buku", "Suara", "Huruf", "Bahasa"] },
        { hanzi: "昨天", pinyin: "zuótiān", meaning: "Kemarin", options: ["Besok", "Hari ini", "Kemarin", "Lusa"] },
        { hanzi: "坐", pinyin: "zuò", meaning: "Duduk", options: ["Duduk", "Berdiri", "Jalan", "Lari"] }
    ],
    2: [
        { hanzi: "吧", pinyin: "ba", meaning: "(Saran/Tanya)", options: ["Sangat", "Sudah", "(Saran/Tanya)", "Bisa"] },
        { hanzi: "白", pinyin: "bái", meaning: "Putih", options: ["Putih", "Hitam", "Merah", "Hijau"] },
        { hanzi: "百", pinyin: "bǎi", meaning: "Ratus", options: ["Sepuluh", "Ratus", "Ribu", "Juta"] },
        { hanzi: "帮助", pinyin: "bāngzhù", meaning: "Membantu", options: ["Membantu", "Bermain", "Bekerja", "Belajar"] },
        { hanzi: "报纸", pinyin: "bàozhǐ", meaning: "Koran", options: ["Buku", "Koran", "Majalah", "Kertas"] },
        { hanzi: "比", pinyin: "bǐ", meaning: "Dibandingkan", options: ["Dan", "Atau", "Dibandingkan", "Tetapi"] },
        { hanzi: "别", pinyin: "bié", meaning: "Jangan", options: ["Jangan", "Sudah", "Akan", "Bisa"] },
        { hanzi: "宾馆", pinyin: "bīnguǎn", meaning: "Hotel", options: ["Sekolah", "Hotel", "Toko", "Kantor"] },
        { hanzi: "长", pinyin: "cháng", meaning: "Panjang", options: ["Pendek", "Tinggi", "Panjang", "Jauh"] },
        { hanzi: "唱歌", pinyin: "chànggē", meaning: "Menyanyi", options: ["Menari", "Menyanyi", "Menulis", "Membaca"] },
        { hanzi: "出", pinyin: "chū", meaning: "Keluar", options: ["Masuk", "Keluar", "Naik", "Turun"] },
        { hanzi: "穿", pinyin: "chuān", meaning: "Memakai (baju)", options: ["Membeli", "Memakai", "Mencuci", "Menjual"] },
        { hanzi: "次", pinyin: "cì", meaning: "Kali", options: ["Hari", "Kali", "Jam", "Menit"] },
        { hanzi: "从", pinyin: "cóng", meaning: "Dari", options: ["Ke", "Dari", "Di", "Sampai"] },
        { hanzi: "错", pinyin: "cuò", meaning: "Salah", options: ["Benar", "Salah", "Bagus", "Jelek"] },
        { hanzi: "打篮球", pinyin: "dǎ lánqiú", meaning: "Main Basket", options: ["Main Bola", "Main Basket", "Berenang", "Lari"] },
        { hanzi: "大家", pinyin: "dàjiā", meaning: "Semua orang", options: ["Keluarga", "Teman", "Semua orang", "Guru"] },
        { hanzi: "到", pinyin: "dào", meaning: "Sampai/Tiba", options: ["Pergi", "Sampai", "Kembali", "Lewat"] },
        { hanzi: "等", pinyin: "děng", meaning: "Menunggu", options: ["Melihat", "Menunggu", "Membeli", "Bertanya"] },
        { hanzi: "弟弟", pinyin: "dìdi", meaning: "Adik Laki-laki", options: ["Kakak", "Adik Laki-laki", "Paman", "Ayah"] },
        { hanzi: "第一", pinyin: "dì-yī", meaning: "Pertama", options: ["Kedua", "Pertama", "Satu", "Terakhir"] },
        { hanzi: "懂", pinyin: "dǒng", meaning: "Mengerti", options: ["Mengerti", "Lupa", "Tahu", "Melihat"] },
        { hanzi: "对", pinyin: "duì", meaning: "Benar/Terhadap", options: ["Salah", "Benar", "Mungkin", "Sangat"] },
        { hanzi: "房间", pinyin: "fángjiān", meaning: "Kamar", options: ["Rumah", "Kamar", "Kantor", "Sekolah"] },
        { hanzi: "非常", pinyin: "fēicháng", meaning: "Sangat", options: ["Sangat", "Biasa", "Sedikit", "Sering"] },
        { hanzi: "服务员", pinyin: "fúwùyuán", meaning: "Pelayan", options: ["Dokter", "Pelayan", "Guru", "Supir"] },
        { hanzi: "告诉", pinyin: "gàosu", meaning: "Memberitahu", options: ["Mendengar", "Memberitahu", "Bertanya", "Berpikir"] },
        { hanzi: "哥哥", pinyin: "gēge", meaning: "Kakak Laki-laki", options: ["Ayah", "Kakak Laki-laki", "Adik", "Teman"] },
        { hanzi: "给", pinyin: "gěi", meaning: "Memberi", options: ["Membeli", "Memberi", "Meminjam", "Mencari"] },
        { hanzi: "公共汽车", pinyin: "gōnggòng qìchē", meaning: "Bus", options: ["Bus", "Kereta", "Pesawat", "Mobil"] },
        { hanzi: "公司", pinyin: "gōngsī", meaning: "Perusahaan", options: ["Kantor", "Sekolah", "Perusahaan", "Pasar"] },
        { hanzi: "贵", pinyin: "guì", meaning: "Mahal", options: ["Murah", "Mahal", "Bagus", "Besar"] },
        { hanzi: "还", pinyin: "hái", meaning: "Masih", options: ["Masih", "Sudah", "Sangat", "Hanya"] },
        { hanzi: "孩子", pinyin: "háizi", meaning: "Anak", options: ["Anak", "Orang tua", "Teman", "Guru"] },
        { hanzi: "好吃", pinyin: "hǎochī", meaning: "Enak", options: ["Enak", "Pahit", "Manis", "Pedas"] },
        { hanzi: "黑", pinyin: "hēi", meaning: "Hitam", options: ["Putih", "Hitam", "Merah", "Biru"] },
        { hanzi: "红", pinyin: "hóng", meaning: "Merah", options: ["Merah", "Kuning", "Hijau", "Putih"] },
        { hanzi: "火车站", pinyin: "huǒchēzhàn", meaning: "Stasiun Kereta", options: ["Bandara", "Stasiun", "Halte", "Pasar"] },
        { hanzi: "机场", pinyin: "jīchǎng", meaning: "Bandara", options: ["Stasiun", "Bandara", "Halte", "Pasar"] },
        { hanzi: "鸡蛋", pinyin: "jīdàn", meaning: "Telur", options: ["Daging", "Telur", "Susu", "Nasi"] },
        { hanzi: "件", pinyin: "jiàn", meaning: "Satuan (pakaian)", options: ["Buah", "Lembar", "Satuan", "Ekor"] },
        { hanzi: "教室", pinyin: "jiàoshì", meaning: "Ruang Kelas", options: ["Kamar", "Kelas", "Kantor", "Rumah"] },
        { hanzi: "姐姐", pinyin: "jiějiě", meaning: "Kakak Perempuan", options: ["Adik", "Kakak Perempuan", "Ibu", "Nenek"] },
        { hanzi: "介绍", pinyin: "jièshào", meaning: "Memperkenalkan", options: ["Membantu", "Memperkenalkan", "Membeli", "Mencuci"] },
        { hanzi: "进", pinyin: "jìn", meaning: "Masuk", options: ["Keluar", "Masuk", "Pergi", "Duduk"] },
        { hanzi: "近", pinyin: "jìn", meaning: "Dekat", options: ["Jauh", "Dekat", "Tinggi", "Luas"] },
        { hanzi: "就", pinyin: "jiù", meaning: "Maka/Segera", options: ["Lalu", "Segera", "Lama", "Belum"] },
        { hanzi: "觉得", pinyin: "juéde", meaning: "Merasa/Berpikir", options: ["Melihat", "Merasa", "Tidur", "Makan"] },
        { hanzi: "咖啡", pinyin: "kāfēi", meaning: "Kopi", options: ["Teh", "Susu", "Air", "Kopi"] },
        { hanzi: "开始", pinyin: "kāishǐ", meaning: "Mulai", options: ["Selesai", "Mulai", "Berhenti", "Makan"] },
        { hanzi: "考试", pinyin: "kǎoshì", meaning: "Ujian", options: ["Belajar", "Ujian", "Bekerja", "Membaca"] },
        { hanzi: "可能", pinyin: "kěnéng", meaning: "Mungkin", options: ["Mungkin", "Pasti", "Harus", "Biasa"] },
        { hanzi: "可以", pinyin: "kěyǐ", meaning: "Boleh", options: ["Boleh", "Tidak", "Harus", "Ingin"] },
        { hanzi: "课", pinyin: "kè", meaning: "Pelajaran", options: ["Buku", "Pelajaran", "Guru", "Sekolah"] },
        { hanzi: "快", pinyin: "kuài", meaning: "Cepat", options: ["Lambat", "Cepat", "Tinggi", "Pendek"] },
        { hanzi: "快乐", pinyin: "kuàilè", meaning: "Bahagia", options: ["Sedih", "Bahagia", "Marah", "Lelah"] },
        { hanzi: "累", pinyin: "lèi", meaning: "Lelah", options: ["Senang", "Lelah", "Lapar", "Sakit"] },
        { hanzi: "离", pinyin: "lí", meaning: "Berjarak dari", options: ["Ke", "Dari", "Berjarak dari", "Di"] },
        { hanzi: "两", pinyin: "liǎng", meaning: "Dua (jumlah)", options: ["Satu", "Dua", "Tiga", "Sepuluh"] },
        { hanzi: "零", pinyin: "líng", meaning: "Nol", options: ["Satu", "Nol", "Sepuluh", "Seratus"] },
        { hanzi: "路", pinyin: "lù", meaning: "Jalan", options: ["Jalan", "Gunung", "Laut", "Rumah"] },
        { hanzi: "旅游", pinyin: "lǚyóu", meaning: "Wisata", options: ["Bekerja", "Wisata", "Makan", "Tidur"] },
        { hanzi: "卖", pinyin: "mài", meaning: "Menjual", options: ["Membeli", "Menjual", "Melihat", "Membantu"] },
        { hanzi: "慢", pinyin: "màn", meaning: "Lambat", options: ["Cepat", "Lambat", "Kecil", "Banyak"] },
        { hanzi: "忙", pinyin: "máng", meaning: "Sibuk", options: ["Santai", "Sibuk", "Sakit", "Lelah"] },
        { hanzi: "每", pinyin: "měi", meaning: "Setiap", options: ["Setiap", "Hanya", "Sangat", "Satu"] },
        { hanzi: "妹妹", pinyin: "mèimei", meaning: "Adik Perempuan", options: ["Kakak", "Adik Perempuan", "Ibu", "Nenek"] },
        { hanzi: "门", pinyin: "mén", meaning: "Pintu", options: ["Jendela", "Meja", "Pintu", "Dinding"] },
        { hanzi: "面条", pinyin: "miàntiáo", meaning: "Mie", options: ["Nasi", "Mie", "Roti", "Daging"] },
        { hanzi: "男", pinyin: "nán", meaning: "Laki-laki", options: ["Perempuan", "Anak", "Laki-laki", "Tua"] },
        { hanzi: "您", pinyin: "nín", meaning: "Anda (hormat)", options: ["Kamu", "Anda", "Kalian", "Mereka"] },
        { hanzi: "牛奶", pinyin: "niúnǎi", meaning: "Susu", options: ["Air", "Kopi", "Susu", "Teh"] },
        { hanzi: "女", pinyin: "nǚ", meaning: "Perempuan", options: ["Laki-laki", "Perempuan", "Anak", "Ibu"] },
        { hanzi: "旁边", pinyin: "pángbiān", meaning: "Samping", options: ["Atas", "Bawah", "Samping", "Dalam"] },
        { hanzi: "跑步", pinyin: "pǎobù", meaning: "Lari", options: ["Duduk", "Lari", "Jalan", "Berenang"] },
        { hanzi: "便宜", pinyin: "piányi", meaning: "Murah", options: ["Mahal", "Murah", "Bagus", "Jelek"] },
        { hanzi: "票", pinyin: "piào", meaning: "Tiket", options: ["Uang", "Buku", "Tiket", "Paspor"] },
        { hanzi: "妻子", pinyin: "qīzi", meaning: "Istri", options: ["Suami", "Istri", "Ibu", "Anak"] },
        { hanzi: "起床", pinyin: "qǐchuáng", meaning: "Bangun Tidur", options: ["Tidur", "Bangun", "Mandi", "Makan"] },
        { hanzi: "千", pinyin: "qiān", meaning: "Ribu", options: ["Ratus", "Ribu", "Puluh", "Juta"] },
        { hanzi: "铅笔", pinyin: "qiānbǐ", meaning: "Pensil", options: ["Buku", "Pensil", "Pulpen", "Tas"] },
        { hanzi: "晴", pinyin: "qíng", meaning: "Cerah", options: ["Hujan", "Berawan", "Cerah", "Salju"] },
        { hanzi: "去年", pinyin: "qùnián", meaning: "Tahun Lalu", options: ["Tahun Depan", "Tahun Lalu", "Tahun Ini", "Kemarin"] },
        { hanzi: "让", pinyin: "ràng", meaning: "Membiarkan", options: ["Membantu", "Membiarkan", "Melihat", "Melarang"] },
        { hanzi: "日", pinyin: "rì", meaning: "Hari/Tanggal", options: ["Bulan", "Tahun", "Hari", "Minggu"] },
        { hanzi: "上班", pinyin: "shàngbān", meaning: "Bekerja", options: ["Sekolah", "Bekerja", "Pulang", "Libur"] },
        { hanzi: "身体", pinyin: "shēntǐ", meaning: "Tubuh", options: ["Kesehatan", "Tubuh", "Kaki", "Tangan"] },
        { hanzi: "生病", pinyin: "shēngbìng", meaning: "Sakit", options: ["Sakit", "Sehat", "Lahir", "Sembuh"] },
        { hanzi: "生日", pinyin: "shēngrì", meaning: "Ulang Tahun", options: ["Tahun Baru", "Ulang Tahun", "Hari Raya", "Libur"] },
        { hanzi: "时间", pinyin: "shíjiān", meaning: "Waktu", options: ["Jam", "Menit", "Waktu", "Detik"] },
        { hanzi: "事情", pinyin: "shìqing", meaning: "Hal/Urusan", options: ["Barang", "Hal", "Tempat", "Orang"] },
        { hanzi: "手表", pinyin: "shǒubiǎo", meaning: "Jam Tangan", options: ["Jam Tangan", "HP", "TV", "Tas"] },
        { hanzi: "手机", pinyin: "shǒujī", meaning: "HP", options: ["TV", "HP", "Komputer", "Radio"] },
        { hanzi: "说话", pinyin: "shuōhuà", meaning: "Berbicara", options: ["Mendengar", "Berbicara", "Melihat", "Menulis"] },
        { hanzi: "送", pinyin: "sòng", meaning: "Mengirim/Memberi", options: ["Menerima", "Membeli", "Mengirim", "Menjual"] },
        { hanzi: "虽然", pinyin: "suīrán", meaning: "Walaupun", options: ["Karena", "Tetapi", "Walaupun", "Jadi"] },
        { hanzi: "但是", pinyin: "dànshì", meaning: "Tetapi", options: ["Karena", "Tetapi", "Jadi", "Dan"] },
        { hanzi: "它", pinyin: "tā", meaning: "Ia (Benda/Hewan)", options: ["Saya", "Dia", "Ia", "Kalian"] },
        { hanzi: "踢足球", pinyin: "tī zúqiú", meaning: "Main Bola", options: ["Main Basket", "Main Bola", "Lari", "Berenang"] },
        { hanzi: "题", pinyin: "tí", meaning: "Soal/Pertanyaan", options: ["Jawaban", "Soal", "Buku", "Hasil"] },
        { hanzi: "跳舞", pinyin: "tiàowǔ", meaning: "Menari", options: ["Menyanyi", "Menari", "Lari", "Jalan"] },
        { hanzi: "外", pinyin: "wài", meaning: "Luar", options: ["Dalam", "Atas", "Luar", "Bawah"] },
        { hanzi: "完", pinyin: "wán", meaning: "Selesai", options: ["Mulai", "Selesai", "Berhenti", "Bisa"] },
        { hanzi: "玩", pinyin: "wán", meaning: "Bermain", options: ["Belajar", "Bekerja", "Bermain", "Tidur"] },
        { hanzi: "晚上", pinyin: "wǎnshang", meaning: "Malam", options: ["Pagi", "Siang", "Malam", "Sore"] },
        { hanzi: "往", pinyin: "wǎng", meaning: "Menuju ke", options: ["Dari", "Di", "Menuju", "Sampai"] },
        { hanzi: "为什么", pinyin: "wèishénme", meaning: "Mengapa", options: ["Apa", "Mana", "Mengapa", "Siapa"] },
        { hanzi: "问", pinyin: "wèn", meaning: "Bertanya", options: ["Menjawab", "Bertanya", "Melihat", "Dengar"] },
        { hanzi: "问题", pinyin: "wèntí", meaning: "Masalah", options: ["Jawaban", "Masalah", "Buku", "Hasil"] },
        { hanzi: "西瓜", pinyin: "xīguā", meaning: "Semangka", options: ["Apel", "Pisang", "Semangka", "Jeruk"] },
        { hanzi: "希望", pinyin: "xīwàng", meaning: "Harap", options: ["Takut", "Harap", "Lupa", "Tahu"] },
        { hanzi: "洗", pinyin: "xǐ", meaning: "Mencuci", options: ["Makan", "Mencuci", "Membeli", "Memakai"] },
        { hanzi: "小时", pinyin: "xiǎoshí", meaning: "Jam (durasi)", options: ["Menit", "Jam", "Hari", "Minggu"] },
        { hanzi: "笑", pinyin: "xiào", meaning: "Tertawa", options: ["Menangis", "Tertawa", "Marah", "Takut"] },
        { hanzi: "新", pinyin: "xīn", meaning: "Baru", options: ["Lama", "Besar", "Baru", "Bagus"] },
        { hanzi: "姓", pinyin: "xìng", meaning: "Marga", options: ["Nama", "Marga", "Umur", "Negara"] },
        { hanzi: "休息", pinyin: "xiūxi", meaning: "Istirahat", options: ["Bekerja", "Istirahat", "Belajar", "Tidur"] },
        { hanzi: "雪", pinyin: "xuě", meaning: "Salju", options: ["Hujan", "Angin", "Salju", "Awan"] },
        { hanzi: "颜色", pinyin: "yánsè", meaning: "Warna", options: ["Suara", "Bentuk", "Warna", "Rasa"] },
        { hanzi: "眼睛", pinyin: "yǎnjing", meaning: "Mata", options: ["Hidung", "Mata", "Mulut", "Telinga"] },
        { hanzi: "羊肉", pinyin: "yángròu", meaning: "Daging Kambing", options: ["Daging Sapi", "Daging Ayam", "Daging Kambing", "Ikan"] },
        { hanzi: "药", pinyin: "yào", meaning: "Obat", options: ["Racun", "Obat", "Vitamin", "Susu"] },
        { hanzi: "要", pinyin: "yào", meaning: "Ingin/Harus", options: ["Bisa", "Sudah", "Ingin", "Mungkin"] },
        { hanzi: "j也", pinyin: "yě", meaning: "Juga", options: ["Dan", "Juga", "Hanya", "Sangat"] },
        { hanzi: "一起", pinyin: "yìqǐ", meaning: "Bersama", options: ["Sendiri", "Bersama", "Lalu", "Tiba"] },
        { hanzi: "一下", pinyin: "yíxià", meaning: "Sebentar", options: ["Lama", "Cepat", "Sebentar", "Sekali"] },
        { hanzi: "已经", pinyin: "yǐjīng", meaning: "Sudah", options: ["Akan", "Sedang", "Sudah", "Belum"] },
        { hanzi: "意思", pinyin: "yìsi", meaning: "Arti/Maksud", options: ["Suara", "Arti", "Bentuk", "Gambar"] },
        { hanzi: "因为", pinyin: "yīnwèi", meaning: "Karena", options: ["Jadi", "Sebab", "Karena", "Namun"] },
        { hanzi: "所以", pinyin: "suǒyǐ", meaning: "Jadi", options: ["Jadi", "Namun", "Sebab", "Lalu"] },
        { hanzi: "阴", pinyin: "yīn", meaning: "Mendung", options: ["Cerah", "Hujan", "Mendung", "Salju"] },
        { hanzi: "游泳", pinyin: "yóuyǒng", meaning: "Berenang", options: ["Lari", "Jalan", "Berenang", "Lompat"] },
        { hanzi: "右边", pinyin: "yòubian", meaning: "Kanan", options: ["Kiri", "Atas", "Kanan", "Bawah"] },
        { hanzi: "鱼", pinyin: "yú", meaning: "Ikan", options: ["Burung", "Kucing", "Ikan", "Anjing"] },
        { hanzi: "远", pinyin: "yuǎn", meaning: "Jauh", options: ["Dekat", "Jauh", "Tinggi", "Lebih"] },
        { hanzi: "运动", pinyin: "yùndòng", meaning: "Olahraga", options: ["Tidur", "Belajar", "Olahraga", "Makan"] },
        { hanzi: "再", pinyin: "zài", meaning: "Lagi", options: ["Lagi", "Sudah", "Sedang", "Hanya"] },
        { hanzi: "早上", pinyin: "zǎoshang", meaning: "Pagi", options: ["Malam", "Sore", "Pagi", "Siang"] },
        { hanzi: "丈夫", pinyin: "zhàngfu", meaning: "Suami", options: ["Istri", "Ayah", "Suami", "Anak"] },
        { hanzi: "找", pinyin: "zhǎo", meaning: "Mencari", options: ["Membeli", "Menjual", "Mencari", "Melihat"] },
        { hanzi: "着", pinyin: "zhe", meaning: "(Sedang berlangsung)", options: ["Sudah", "Akan", "Sedang", "Hanya"] },
        { hanzi: "真", pinyin: "zhēn", meaning: "Sungguh", options: ["Tidak", "Sungguh", "Pasti", "Mungkin"] },
        { hanzi: "正在", pinyin: "zhèngzài", meaning: "Sedang (aksi)", options: ["Sudah", "Akan", "Sedang", "Baru"] },
        { hanzi: "知道", pinyin: "zhīdào", meaning: "Tahu", options: ["Lupa", "Tahu", "Mengerti", "Bicara"] },
        { hanzi: "准备", pinyin: "zhǔnbèi", meaning: "Persiapan", options: ["Selesai", "Mulai", "Persiapan", "Pergi"] },
        { hanzi: "走", pinyin: "zǒu", meaning: "Jalan/Pergi", options: ["Duduk", "Jalan", "Tidur", "Makan"] },
        { hanzi: "最", pinyin: "zuì", meaning: "Paling", options: ["Hanya", "Juga", "Paling", "Sangat"] },
        { hanzi: "左", pinyin: "zuǒ", meaning: "Kiri", options: ["Kanan", "Kiri", "Atas", "Bawah"] }
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
