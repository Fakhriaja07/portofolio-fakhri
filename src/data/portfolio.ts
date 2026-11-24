// Semua isi di file ini diambil langsung dari CV Fakhri.
// Jangan tambah angka hasil, proyek, atau pengalaman yang tidak ada di CV.

export const contact = {
  name: 'Fakhri',
  role: 'Data Analyst',
  field: 'Information Technology',
  email: 'mfakhri338@gmail.com',
  // Kontak via Instagram atas permintaan user (Nov 2026); nomor
  // telepon tidak lagi ditampilkan di portofolio.
  instagramLabel: '@fakhri_074',
  instagramHandle: 'fakhri_074',
  instagramUrl: 'https://www.instagram.com/fakhri_074',
  // Link GitHub diubah atas permintaan user 2026-10-29 (di CV tertulis link lain).
  githubLabel: 'github.com/fakhriaja07',
  githubUrl: 'https://github.com/fakhriaja07',
  cvUrl: '/CV-Fakhri.pdf',
}

export const profileSummary =
  'Lulusan S1 Teknik Informatika yang memiliki ketertarikan dan kemampuan di bidang pengolahan dan analisis data. Berpengalaman mengolah data, menyajikannya dalam bentuk laporan dan visualisasi yang mudah dipahami, serta menjaga kualitas data agar dapat mendukung pengambilan keputusan. Memiliki pengalaman riset yang telah dipublikasikan, pengalaman proyek tim, dan pengalaman di lingkungan kerja instansi pemerintah. Teliti, bertanggung jawab, cepat belajar, dan terbiasa berkolaborasi dengan berbagai pihak untuk menyelesaikan masalah.'

// Fokus kerja di section Tentang (sesuai preview).
export const focusAreas = [
  {
    title: 'Pengolahan & kualitas data',
    description: 'Membersihkan dan menjaga konsistensinya sebelum dianalisis.',
  },
  {
    title: 'Laporan & dashboard',
    description: 'Tampilan ringkas untuk pengambil keputusan.',
  },
  {
    title: 'Riset & clustering',
    description: 'Perbandingan metrik jarak pada K-Means.',
  },
  {
    title: 'Dukungan IT operasional',
    description: 'Troubleshooting, instalasi OS, dan dokumentasi teknis.',
  },
]

export const brandisProject = {
  name: 'Brandis (Brand Ikasari)',
  label: 'Proyek Kolaborasi · Tim 4 Orang',
  year: '2024 — 2025',
  description: 'Kolaborasi universitas dengan SMKF Ikasari, Pekanbaru.',
  points: [
    'Mengelola dan mengolah data operasional sekolah untuk mendukung kebutuhan pelaporan dan analisis.',
    'Merancang struktur dan alur data serta menjaga kualitas dan konsistensinya pada sistem informasi.',
    'Menyajikannya sebagai dashboard untuk pengguna sekolah.',
  ],
  tags: ['Data Analyst', 'Dashboard', 'Kualitas Data', 'SMKF Ikasari'],
}

// Proyek di luar CV, ditambahkan atas permintaan user (Nov 2026).
export const dashboardProject = {
  name: 'Dashboard Harga Bahan Pokok & Inflasi Indonesia',
  label: 'Dashboard Data · Live',
  year: '2026',
  description:
    'Dashboard harga bahan pokok se-Indonesia dari data PIHPS Bank Indonesia dan BPS, dengan harga live 38 provinsi, navigasi tanggal, dan grafik tren per komoditas.',
  points: [
    'Menampilkan harga live 11 komoditas nasional dan harga 38 provinsi dari PIHPS, diperbarui otomatis setiap halaman dibuka.',
    'Menyajikan indikator inflasi BPS Oktober 2026, termasuk inflasi cabai rawit 104,35% (y-on-y).',
    'Menampilkan peringkat harga 38 provinsi, grafik tren 90 hari per komoditas, dan navigasi tanggal untuk melihat harga hari sebelumnya.',
  ],
  tags: ['PIHPS Nasional', 'BPS', '38 Provinsi', 'Visualisasi Data'],
  link: 'https://harga-bahan-pokok.fakhrigalaxy.my.id',
}

export const experiences = [
  {
    place: 'DPMPTSP Kota Pekanbaru',
    label: 'DPMPTSP Kota Pekanbaru',
    role: 'IT Support Intern',
    period: 'JAN 2025 — MAR 2025',
    points: [
      'Melakukan troubleshooting perangkat keras dan perangkat lunak (komputer, printer, dan jaringan) untuk mendukung kelancaran operasional harian unit kerja.',
      'Menginstal dan mengonfigurasi sistem operasi serta aplikasi sesuai kebutuhan pegawai.',
      'Memberikan bantuan teknis kepada pegawai serta membantu pengelolaan data, jaringan, dan dokumentasi IT.',
      'Menyelesaikan tugas dari pembimbing secara tepat waktu sesuai arahan dan prosedur instansi yang berlaku.',
      'Beradaptasi dengan cepat di lingkungan kerja pemerintahan dan berkoordinasi secara efektif dengan berbagai pihak terkait.',
    ],
  },
  {
    place: 'Dinas Lingkungan Hidup dan Kehutanan Kota Pekanbaru',
    label: 'DLHK Kota Pekanbaru',
    role: 'IT Support Intern',
    period: 'MAR 2021 — MEI 2021',
    points: [
      'Mengikuti aktivitas kerja di lingkungan instansi dan memahami alur kerja yang diterapkan.',
      'Menyelesaikan tugas yang diberikan pembimbing dengan mengikuti arahan dan prosedur kerja yang berlaku.',
      'Beradaptasi dengan lingkungan kerja serta berkoordinasi dengan pihak terkait selama kegiatan magang.',
    ],
  },
]

export const education = {
  degree: 'S1 Teknik Informatika',
  school: 'Universitas Islam Negeri Sultan Syarif Kasim Riau',
  location: 'Pekanbaru, Riau',
  period: 'Juli 2022 – Juli 2026',
  gpa: '3.46/4.00',
}

export const publication = {
  kind: 'Skripsi dan Publikasi Ilmiah',
  title:
    'Analisis Komparatif Jarak Euclidean, Manhattan, Canberra, Chebyshev, Cosine pada K-Means untuk Evaluasi Kepuasan Masyarakat',
  journal: 'Jurnal Terapan Informatika Nusantara',
  detail: 'Vol. 7, No. 1 — Juni 2026',
  accreditation: 'SINTA 4',
  doi: '10.47065/tin.v7i1.10086',
  doiUrl: 'https://doi.org/10.47065/tin.v7i1.10086',
}

export const trainings = [
  {
    title: 'Fundamental of Data Analyst',
    description: 'DQLab · Tingkat Nasional',
    certificateUrl:
      'https://drive.google.com/file/d/1tiJV8zrqISfhh67vb8vvRz3Jk_mRygtw/view',
  },
  {
    title: 'Practical Real Business Application for Data Analyst',
    description: 'DQLab · Tingkat Nasional',
    certificateUrl:
      'https://drive.google.com/file/d/1cw3FA_KDlP3zA5-dYLteAEU6CJdf5K8F/view',
  },
  {
    title: 'Data Scientist Supervisor',
    description: 'Tingkat Nasional',
    certificateUrl:
      'https://drive.google.com/file/d/1zsNNYZbLe6XpdUQZkEVw5KQgPs8Nvc57/view',
  },
  {
    title: 'Associate Data Scientist + Python',
    description: 'Tingkat Nasional',
    certificateUrl:
      'https://drive.google.com/file/d/18VhAY-TmpQsuvu9r5WhKzw6wPX04as--/view',
  },
  {
    title: 'Pengenalan Data Science dan Pemanfaatannya di Berbagai Sektor',
    description: null,
    certificateUrl:
      'https://drive.google.com/file/d/1sF0hnteLPMCFAdC_tJiCy3GIvKzG4LkK/view',
  },
  {
    title: 'Fundamental of Computer Operator Technician',
    description: 'Tingkat Nasional · Micro Skill',
    certificateUrl:
      'https://drive.google.com/file/d/19vnvyn7vdT43MDCGibp7vvTPTur3Ylbo/view',
  },
  {
    title: 'Intermediate Computer Operator Technician',
    description: 'Tingkat Nasional',
    certificateUrl:
      'https://drive.google.com/file/d/1x7d_cYCV1CETmlh1LOPvRSpf3I7l9qIT/view',
  },
]

// Keahlian: teknis persis CV; non-teknis mengikuti daftar Fakhri
// 24 Nov 2026 (tanpa "Pekerja Keras"; tambah "Berpikir Analitis"
// dan "Adaptabilitas") — berbeda dari CV.
export const skillGroups = [
  {
    title: 'Kemampuan Teknis',
    items: ['Microsoft Word', 'Microsoft Excel', 'Python', 'RapidMiner', 'SQL'],
  },
  {
    title: 'Kemampuan Non-Teknis',
    items: [
      'Disiplin',
      'Bertanggung Jawab',
      'Teliti',
      'Manajemen Waktu',
      'Komunikasi',
      'Kerja Sama Tim',
      'Cepat Belajar',
      'Berpikir Analitis',
      'Problem Solving',
      'Adaptabilitas',
    ],
  },
]

export const navLinks = [
  { label: 'Tentang', href: '#profil' },
  { label: 'Pendidikan', href: '#pendidikan' },
  { label: 'Pengalaman', href: '#pengalaman' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Pelatihan', href: '#pelatihan' },
  { label: 'Keahlian', href: '#keahlian' },
]

// Demo interaktif K-Means — nilai DBI & Silhouette dari Tabel 4 publikasi
// (Jurnal Terapan Informatika Nusantara Vol.7 No.1 Juni 2026, SINTA 4).
// DBI: semakin kecil semakin baik. Silhouette: semakin besar semakin baik.
export const kmeansDemo = {
  methods: [
    {
      name: 'Euclidean',
      formula: 'd = √(Σ(xᵢ − yᵢ)²)',
      values: [
        { k: 2, dbi: 0.8397, sil: 0.4837 },
        { k: 3, dbi: 0.9821, sil: 0.5088 },
        { k: 4, dbi: 1.034, sil: 0.3812 },
        { k: 5, dbi: 1.2863, sil: 0.3557 },
      ],
    },
    {
      name: 'Manhattan',
      formula: 'd = Σ|xᵢ − yᵢ|',
      values: [
        { k: 2, dbi: 0.8144, sil: 0.4798 },
        { k: 3, dbi: 0.9087, sil: 0.5072 },
        { k: 4, dbi: 1.0012, sil: 0.3841 },
        { k: 5, dbi: 1.0812, sil: 0.3446 },
      ],
    },
    {
      name: 'Canberra',
      formula: 'd = Σ |xᵢ − yᵢ| / (|xᵢ| + |yᵢ|)',
      values: [
        { k: 2, dbi: 0.8896, sil: 0.467 },
        { k: 3, dbi: 1.0803, sil: 0.4991 },
        { k: 4, dbi: 1.1226, sil: 0.3877 },
        { k: 5, dbi: 1.2547, sil: 0.3872 },
      ],
    },
    {
      name: 'Chebyshev',
      formula: 'd = maks|xᵢ − yᵢ|',
      values: [
        { k: 2, dbi: 1.2267, sil: 0.4493 },
        { k: 3, dbi: 1.5089, sil: 0.1853 },
        { k: 4, dbi: 1.3459, sil: 0.1948 },
        { k: 5, dbi: 1.3284, sil: 0.2578 },
      ],
    },
    {
      name: 'Cosine',
      formula: 'd = 1 − (Σ xᵢ·yᵢ) / (√Σxᵢ² · √Σyᵢ²)',
      values: [
        { k: 2, dbi: 0.8377, sil: 0.4839 },
        { k: 3, dbi: 1.7044, sil: 0.3589 },
        { k: 4, dbi: 1.5627, sil: 0.2634 },
        { k: 5, dbi: 1.5693, sil: 0.2795 },
      ],
    },
  ],
}
