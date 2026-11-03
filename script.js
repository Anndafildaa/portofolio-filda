document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  } else {
    console.error('Lucide gagal dimuat. Periksa koneksi internet atau URL library.');
  }
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.innerHTML = open ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
    if (window.lucide) lucide.createIcons();
  });
  navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.innerHTML = '<i data-lucide="menu"></i>';
    if (window.lucide) lucide.createIcons();
  }));

  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  filterButtons.forEach(button => button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    projectCards.forEach(card => {
      const categories = (card.dataset.category || '').split(' ');
      card.classList.toggle('hidden', filter !== 'all' && !categories.includes(filter));
    });
  }));

  document.getElementById('year').textContent = new Date().getFullYear();
  const backToTop = document.getElementById('backToTop');
  const updateScroll = () => backToTop?.classList.toggle('visible', window.scrollY > 500);
  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();
  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const revealTargets = document.querySelectorAll('.section-heading, .about-copy, .fact-card, .skill-card, .project-card, .timeline-item, .education-card, .cert-row, .contact-panel');
  revealTargets.forEach(element => element.classList.add('reveal'));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(element => observer.observe(element));
  } else {
    revealTargets.forEach(element => element.classList.add('in-view'));
  }
});



/* =========================================
   PROJECT DETAILS MODAL - FIXED
========================================= */

function initProjectDetailsModal() {
    const projectModal = document.getElementById("projectModal");

    // Pastikan elemen modal tersedia
    if (!projectModal) {
        console.error(
            "Modal tidak ditemukan. Pastikan HTML memiliki id='projectModal'."
        );
        return;
    }

    
    const title = document.getElementById("modalProjectTitle");
    const category = document.getElementById("modalProjectCategory");
    const overview = document.getElementById("modalProjectOverview");
    const tools = document.getElementById("modalProjectTools");
    const projectLink = document.getElementById("modalProjectLink");
    const closeButton = document.getElementById("closeProjectModal");

    const insights = document.getElementById("modalProjectInsights");
    const recommendations = document.getElementById("modalProjectRecommendations");

    // Judul section yang dapat berubah sesuai proyek
    const toolsTitle = document.getElementById(
        "modalProjectToolsTitle"
    );

    const processTitle = document.getElementById(
        "modalProjectProcessTitle"
    );

    const insightsTitle = document.getElementById(
        "modalProjectInsightsTitle"
    );

    const recommendationsTitle = document.getElementById(
        "modalProjectRecommendationsTitle"
    );

    // Kontainer kartu Analysis Process
    const processFlow = document.getElementById(
        "modalProjectProcessFlow"
    );

    // Simpan tampilan proses bawaan untuk proyek lainnya
    const defaultProcessFlowHTML = processFlow
        ? processFlow.innerHTML
        : "";
    
    if (
        !title ||
        !category ||
        !overview ||
        !tools ||
        !projectLink ||
        !closeButton ||
        !insights ||
        !recommendations ||
        !toolsTitle ||
        !processTitle ||
        !insightsTitle ||
        !recommendationsTitle ||
        !processFlow
    ) {
        console.error(
            "Elemen modal belum lengkap. Periksa ID pada HTML modal."
        );
        return;
    }


    
    const projectDetailsData = {
        olist: {
            category: "BUSINESS INTELLIGENCE & DATA ANALYTICS",
            title: "Brazilian E-commerce Analysis",

            overview:
                "Menganalisis lebih dari 90.000 pesanan e-commerce Olist di Brasil untuk mengevaluasi performa penjualan, perilaku pelanggan, dan kinerja penjual guna mengidentifikasi tren transaksi serta peluang peningkatan bisnis.",

            overviewPoints: [
                "Analisis Tren Penjualan dan Pendapatan berdasarkan Waktu",
                "Analisis Kategori Produk, Nilai Pesanan, dan Metode Pembayaran",
                "Analisis Persebaran Pelanggan dan Tingkat Pembelian Berulang",
                "Analisis Performa Penjual dan Distribusi Volume Pesanan"
            ],

            tools: ["Python", "Looker Studio"],

            contributions: [
                "Mengeksplorasi dan menganalisis data transaksi e-commerce Olist.",
                "Mengidentifikasi tren penjualan, perilaku pelanggan, dan performa penjual.",
                "Menyusun dashboard interaktif untuk menyajikan insight bisnis berbasis data."
            ],

            process: [
                "Memahami struktur dan karakteristik dataset transaksi e-commerce.",
                "Melakukan persiapan, pembersihan, dan eksplorasi data menggunakan Python.",
                "Menganalisis tren penjualan, perilaku pelanggan, dan distribusi performa penjual.",
                "Membangun visualisasi interaktif menggunakan Looker Studio.",
                "Merumuskan insight dan rekomendasi berdasarkan hasil analisis."
            ],

            insights: [
                "Pendapatan bulanan mencapai puncak sekitar November 2017.",
                "Kategori health_beauty mencatat pendapatan tertinggi, sedangkan computers memiliki rata-rata nilai pesanan tertinggi.",
                "São Paulo menjadi kontributor pendapatan terbesar dengan sekitar 5,2 juta.",
                "Kartu kredit mendominasi metode pembayaran dengan proporsi 78,5%, diikuti boleto sebesar 18%.",
                "Tingkat pembelian berulang hanya 3,04%, menunjukkan peluang peningkatan retensi pelanggan.",
                "Skor ulasan 5 mendominasi dengan 57.223 ulasan.",
                "Sebanyak 1.858 penjual memiliki 1–10 pesanan, menunjukkan dominasi penjual dengan volume transaksi relatif rendah."
            ],

            recommendations: [
                "Prioritaskan promosi pada kategori health_beauty dan evaluasi potensi kategori computers untuk meningkatkan nilai transaksi.",
                "Pertahankan performa pasar São Paulo dan identifikasi negara bagian potensial untuk memperluas jangkauan penjualan.",
                "Kembangkan program loyalitas dan penawaran pascapembelian untuk mendorong pembelian berulang.",
                "Evaluasi ulasan bernilai rendah berdasarkan kategori produk dan pengalaman pengiriman untuk menentukan prioritas perbaikan.",
                "Identifikasi perbedaan karakteristik penjual berpendapatan tinggi dan penjual dengan volume pesanan rendah sebagai dasar strategi peningkatan performa."
            ],

            url: "https://datastudio.google.com/reporting/8dcad03e-bd97-479b-abd5-1d8642f02eaf"
        },

        fashion: {
            category: "DATA VISUALIZATION",
            title: "Vestiaire Fashion Data Analysis",

            overview:
                "Menganalisis lebih dari 900.000 data produk fashion mewah bekas dari Vestiaire Collective untuk mengidentifikasi performa merek, tren material, serta hubungan kondisi produk dengan harga dan penjualan.",

            overviewPoints: [
                "Analisis Performa Penjualan dan Nilai Penjualan Merek",
                "Analisis Tren Material dan Harga Produk",
                "Analisis Kondisi Produk dan Volume Penjualan",
                "Analisis Hubungan Harga dan Penjualan"
            ],

            tools: ["Python", "Tableau"],

            contributions: [
                "Mengolah dan menyiapkan dataset dengan lebih dari 900.000 baris data dan 36 atribut.",
                "Menganalisis performa merek berdasarkan jumlah produk terjual dan rata-rata harga.",
                "Mengevaluasi hubungan material dan kondisi produk dengan harga serta penjualan.",
                "Menyajikan hasil analisis melalui dashboard interaktif Tableau."
            ],

            process: [
                "Data Collection: Mengumpulkan dataset fashion Vestiaire dari Kaggle.",
                "Data Cleaning: Menangani nilai kosong dan memeriksa kualitas data.",
                "Exploratory Data Analysis: Mengeksplorasi karakteristik merek, material, harga, dan kondisi produk.",
                "Data Visualization: Menyusun visualisasi dan dashboard interaktif menggunakan Tableau."
            ],

            insights: [
                "Performa Merek: Gucci memiliki jumlah produk terjual tertinggi, sedangkan Chanel mencatat rata-rata harga tertinggi.",
                "Tren Material: Leather memiliki jumlah produk terjual terbanyak, sedangkan beberapa material premium memiliki rata-rata harga tinggi.",
                "Kondisi Produk: Very Good Condition mencatat jumlah produk terjual tertinggi, sedangkan Never Worn with Tag memiliki rata-rata harga tertinggi, sekitar US$646.",
                "Harga dan Penjualan: Produk dengan rata-rata harga lebih tinggi tidak selalu memiliki jumlah penjualan lebih tinggi."
            ],

            recommendations: [
                "Platform dapat memprioritaskan promosi Gucci untuk mempertahankan volume penjualan dan Chanel untuk mengoptimalkan potensi nilai penjualan.",
                "Seller dapat memprioritaskan Leather untuk menjangkau pasar yang lebih luas serta mempertimbangkan material premium untuk produk bernilai tinggi.",
                "Seller dapat mempertahankan fokus pada produk Very Good Condition dan memosisikan produk Never Worn with Tag dengan strategi harga premium."
            ],

            url: "https://public.tableau.com/views/Dashboard_FinalProject_FasilkomTech/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
        },

        
        netflix: {
            category: "DATA ANALYTICS & DATA VISUALIZATION",
            title: "Netflix Content Analysis",

            overview:
                "Analisis 8.807 judul Netflix untuk memahami distribusi konten berdasarkan jenis, negara, rating, genre, serta pola penambahan konten dari waktu ke waktu.",

            tools: ["Python", "Tableau"],

            contributions: [
                "Mengeksplorasi dataset Netflix dengan memahami atribut Type, Country, Rating, Listed In, Release Year, dan Date Added.",
                "Menganalisis distribusi konten berdasarkan jenis, negara, rating, genre, dan waktu.",
                "Menyajikan hasil analisis melalui dashboard Tableau untuk memudahkan pemahaman terhadap komposisi dan pola katalog Netflix."
            ],

            process: [
                "Memahami struktur dan karakteristik dataset Netflix.",
                "Memeriksa kelengkapan data dan atribut yang digunakan dalam analisis.",
                "Menganalisis distribusi konten berdasarkan jenis, negara, rating, genre, dan waktu.",
                "Menyajikan hasil analisis dalam dashboard interaktif menggunakan Tableau."
            ],

            insights: [
                "Content Type: Movie mendominasi katalog dengan 6.131 judul (69,62%), sedangkan TV Show berjumlah 2.676 judul (30,38%).",
                "Country Distribution: United States menjadi negara dengan jumlah judul terbanyak dalam katalog Netflix.",
                "Content Rating: TV-MA mendominasi dengan 3.211 judul, diikuti TV-14 sebanyak 2.160 judul.",
                "Top 10 Genres: Dramas, International Movies mencatat jumlah tertinggi sebanyak 362 judul, diikuti Documentaries sebanyak 359 judul dan Stand-Up Comedy sebanyak 334 judul.",
                "Content Added Over Time: Jumlah Movie yang ditambahkan mencapai puncak pada 2019, sedangkan TV Show mencapai puncak pada 2019–2020."
            ],

            recommendations: [
                "Mempertimbangkan pengembangan TV Show untuk memperkaya variasi katalog yang saat ini didominasi Movie, dengan tetap memperhatikan kebutuhan penonton.",
                "Memperluas keberagaman katalog melalui eksplorasi konten dari negara selain United States.",
                "Mempertahankan variasi konten berdasarkan klasifikasi usia agar katalog mencakup beragam rating.",
                "Menggunakan data penayangan untuk menentukan genre yang layak diprioritaskan dalam pengadaan atau produksi konten."
            ],

            url: "https://public.tableau.com/views/DashboardNetflix_17932080155830/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
        },


        superstore: {
            category: "DATA ANALYTICS & DATA VISUALIZATION",
            title: "Superstore Sales Performance Analysis",

            overview:
                "Analisis data penjualan Superstore untuk mengevaluasi performa bisnis berdasarkan tren penjualan dan keuntungan, kategori produk, segmen pelanggan, wilayah geografis, serta pengaruh pemberian diskon terhadap profitabilitas. Proyek ini bertujuan untuk mengidentifikasi produk dan wilayah dengan performa terbaik, memahami kontribusi setiap segmen pelanggan, serta menemukan peluang peningkatan penjualan dan keuntungan melalui visualisasi data.",

            overviewPoints: [
                "Analisis Tren Penjualan dan Keuntungan berdasarkan Tahun",
                "Analisis Performa Penjualan dan Profitabilitas Kategori Produk",
                "Analisis Kontribusi Segmen Pelanggan",
                "Analisis Performa Penjualan berdasarkan Wilayah Geografis",
                "Analisis Pengaruh Diskon terhadap Profitabilitas"
            ],

            tools: ["Python", "Looker Studio"],

            processSteps: [
                {
                    title: "Data Collection",
                    subtitle: "Superstore Dataset",
                    icon: "database"
                },
                {
                    title: "Data Cleaning & Data Preparation",
                    subtitle: "Python",
                    icon: "filter"
                },
                {
                    title: "Exploratory Data Analysis",
                    subtitle: "Python",
                    icon: "chart-no-axes-combined"
                },
                {
                    title: "Data Visualization",
                    subtitle: "Tableau",
                    icon: "chart-no-axes-column"
                },
                {
                    title: "Insight & Recommendation",
                    subtitle: "Business Impact",
                    icon: "lightbulb"
                }
            ],

            insights: [
                "Overall Performance: Total penjualan mencapai $2.297.201 dengan keuntungan $286.397 dan profit ratio sebesar 12,5% dari 5.009 pesanan.",

                "Sales Trend: Penjualan dan keuntungan menunjukkan tren peningkatan dari tahun 2014 hingga 2017, dengan pencapaian tertinggi pada tahun 2017.",

                "Product Category: Technology mencatat penjualan tertinggi sebesar $836,2K dan keuntungan $145,5K, sedangkan Furniture menghasilkan keuntungan terendah sebesar $18,5K.",

                "Customer Segment: Consumer mendominasi penjualan sebesar $1,2M, diikuti Corporate sebesar $706,1K dan Home Office sebesar $429,7K.",

                "Geographical Performance: West menjadi wilayah dengan penjualan tertinggi sebesar $725,5K, diikuti East sebesar $678,8K. South mencatat penjualan terendah sebesar $391,7K.",

                "Product Profitability: Analisis 10 produk dan subkategori teratas menunjukkan bahwa produk dengan penjualan tinggi belum tentu menghasilkan profitabilitas tertinggi.",

                "Shipping Performance: Standard Class mendominasi penjualan dengan nilai sekitar $1,36 juta, menjadikannya metode pengiriman dengan kontribusi penjualan terbesar.",

                "Discount Analysis: Diskon 0–10% menghasilkan keuntungan sekitar $330K, sedangkan diskon di atas 30% menghasilkan kerugian sekitar $125K."
            ],

            recommendations: [
                "Meningkatkan ketersediaan stok dan mengoptimalkan strategi pemasaran produk kategori Technology untuk mempertahankan permintaan pasar serta memaksimalkan keuntungan perusahaan.",

                "Melakukan evaluasi terhadap strategi penetapan harga, biaya operasional, dan pemasok pada kategori Furniture agar dapat meningkatkan margin keuntungan dan mengurangi potensi kerugian.",

                "Mengembangkan program pemasaran yang lebih terarah berdasarkan segmen pelanggan, seperti pemberian penawaran khusus bagi pelanggan Corporate dan Home Office untuk meningkatkan kontribusi penjualan.",

                "Memperluas jangkauan pemasaran di wilayah South dan Central melalui promosi lokal, penyesuaian penawaran produk, serta identifikasi kebutuhan pasar untuk meningkatkan penjualan.",

                "Menetapkan kebijakan pemberian diskon berdasarkan margin keuntungan produk dengan membatasi diskon yang terlalu tinggi agar strategi promosi tetap mampu meningkatkan penjualan tanpa mengorbankan profitabilitas perusahaan.",

                "Melakukan evaluasi portofolio produk secara berkala dengan mempertahankan produk yang memberikan keuntungan tinggi serta mempertimbangkan penyesuaian harga, pengurangan biaya, atau penghentian produk yang secara konsisten menghasilkan kerugian."
            ],

            url: "https://datastudio.google.com/reporting/52daa88b-8503-4a76-94ae-f63077d7437a"
        },
        


        excel: {
            category: "BUSINESS DATA ANALYSIS",
            title: "Aravella Qiyan Wedding Studio",

            overview:
                "Proyek analisis data pemesanan Wedding Organizer periode Mei–Juli 2025 menggunakan Microsoft Excel. Analisis berfokus pada pendapatan bulanan, performa paket layanan, kontribusi lokasi acara, jumlah tamu, serta sisa pembayaran pelanggan untuk memahami kinerja bisnis dan mendukung pengambilan keputusan.",

            overviewPoints: [
                "Analisis transaksi pemesanan Wedding Organizer",
                "Perhitungan biaya paket, layanan tambahan, DP, dan sisa pembayaran",
                "Analisis pendapatan bulanan dan kontribusi paket",
                "Analisis lokasi acara dan jumlah tamu"
            ],

            // Judul section khusus proyek Aravella
            toolsTitle: "Tools & Techniques",
            processTitle: "Analysis Process",
            insightsTitle: "Key Findings & Analysis",
            implicationsTitle: "Business Implications",

            // Tools dan teknik yang digunakan
            tools: [
                "Microsoft Excel",
                "Excel Formulas",
                "PivotTable",
                "Slicer",
                "Data Analysis"
            ],

            // Lima kartu Analysis Process
            processSteps: [
                {
                    title: "Data Checking & Completion",
                    subtitle: "Transaction Dataset",
                    icon: "database"
                },
                {
                    title: "Payment Calculation",
                    subtitle: "Excel Formulas",
                    icon: "calculator"
                },
                {
                    title: "Data Grouping",
                    subtitle: "PivotTable",
                    icon: "table"
                },
                {
                    title: "Comparative Analysis",
                    subtitle: "Revenue, Packages & Locations",
                    icon: "chart-no-axes-combined"
                },
                {
                    title: "Summary & Interpretation",
                    subtitle: "Business Performance",
                    icon: "lightbulb"
                }
            ],

            // Temuan dan aspek yang dianalisis
            insights: [
                "Mengidentifikasi bulan dengan pendapatan tertinggi dan terendah serta perubahan pendapatan selama Mei–Juli 2025.",

                "Membandingkan kontribusi pendapatan setiap paket dengan sisa pembayaran pelanggan untuk memahami potensi risiko arus kas.",

                "Menilai lokasi acara dan paket layanan yang memberikan kontribusi terbesar terhadap pendapatan serta mengevaluasi pola pendapatan dan piutang.",

                "Mengidentifikasi paket dengan jumlah tamu tertinggi untuk memahami karakteristik pemesanan pelanggan."
            ],

            // Implikasi bisnis, bukan rekomendasi
            businessImplications: [
                "Mengevaluasi performa pendapatan dari bulan ke bulan.",

                "Memantau sisa pembayaran pelanggan dan membantu menjaga kelancaran arus kas.",

                "Mengidentifikasi paket layanan dan lokasi acara yang berkontribusi besar terhadap pendapatan.",

                "Memahami karakteristik pemesanan berdasarkan jumlah tamu.",

                "Mendukung evaluasi strategi layanan dan perencanaan bisnis berdasarkan data transaksi."
            ],

            url: "files/excel-case WO.xlsx",
            downloadName: "excel-case WO.xlsx"
        },

        bankSampah: {
            category: "WEB DEVELOPMENT & DATABASE MANAGEMENT",
            title: "Bank Sampah Management System",

            // PROJECT OVERVIEW
            overview:
                "Pengembangan website Bank Sampah Management System untuk mendukung pengelolaan administrasi dan operasional bank sampah secara digital. Sistem ini menyediakan akses bagi admin dan nasabah dengan fitur pengelolaan data, pencatatan transaksi penyetoran dan penarikan saldo, serta monitoring aktivitas bank sampah melalui visualisasi grafik dan laporan data.",

            overviewPoints: [
                "Sistem menyediakan akses bagi admin dan nasabah.",
                "Pengelolaan data dan transaksi dilakukan melalui platform berbasis web.",
                "Informasi aktivitas bank sampah disajikan dalam bentuk tabel, grafik, dan laporan."
            ],

            toolsTitle: "Tools & Technologies",
            processTitle: "Development Process",
            insightsTitle: "Key Features",
            implicationsTitle: "Project Objectives",

            // TOOLS & TECHNOLOGIES
            tools: [
                "PHP",
                "MySQL",
                "JavaScript",
                "HTML",
                "CSS",
                "DataTables"
            ],

            // DEVELOPMENT PROCESS
            processSteps: [
                {
                    title: "Requirement Analysis",
                    subtitle: "System Requirements",
                    icon: "clipboard-list"
                },
                {
                    title: "Database Design",
                    subtitle: "MySQL",
                    icon: "database"
                },
                {
                    title: "Interface Development",
                    subtitle: "HTML, CSS & JavaScript",
                    icon: "layout-dashboard"
                },
                {
                    title: "Backend Development",
                    subtitle: "PHP",
                    icon: "code"
                },
                {
                    title: "Manual Testing & Validation",
                    subtitle: "Functional Checking",
                    icon: "clipboard-check"
                }
            ],

            // KEY FEATURES
            insights: [
                "Mengelola data admin dan nasabah, seperti nama, alamat, nomor telepon, dan informasi akun.",

                "Mengelola data sampah berdasarkan jenis, satuan, harga, gambar, dan deskripsi sampah.",

                "Mencatat transaksi penyetoran sampah berdasarkan tanggal, jenis sampah, berat, dan total harga.",

                "Mengelola transaksi penarikan saldo serta menampilkan riwayat penarikan yang dilakukan nasabah.",

                "Menampilkan grafik monitoring untuk melihat jumlah sampah yang disetorkan dan jumlah nasabah berdasarkan aktivitas harian.",

                "Menyediakan riwayat transaksi, pencarian data, serta fitur ekspor Excel dan cetak laporan."
            ],

            // PROJECT OBJECTIVES
            businessImplications: [
                "Mendigitalisasi proses administrasi dan operasional bank sampah.",

                "Mempermudah pengelolaan data nasabah, jenis sampah, dan transaksi dalam satu sistem terintegrasi.",

                "Meningkatkan keteraturan pencatatan transaksi penyetoran dan penarikan saldo.",

                "Memudahkan admin dalam memantau aktivitas dan perkembangan operasional bank sampah.",

                "Menyediakan informasi yang lebih terstruktur untuk mendukung proses pengelolaan dan pelaporan."
            ]
        }
    };


    let previousFocus = null;

    function openProjectDetails(key, trigger) {
        const project = projectDetailsData[key];

        if (!project) {
            console.error("Data proyek tidak ditemukan:", key);
            return;
        }

        previousFocus = trigger;

        
        title.textContent = project.title;
        category.textContent = project.category;
        overview.textContent = project.overview;

        
        const overviewList = document.getElementById("modalProjectOverviewList");

        if (overviewList) {
            overviewList.replaceChildren();

            (project.overviewPoints || []).forEach(function (point) {
                const li = document.createElement("li");
                li.textContent = point;
                overviewList.appendChild(li);
            });
        }


        function updateList(element, items) {
            if (!element) return;

            element.replaceChildren();

            (items || []).forEach(function (item) {
                const li = document.createElement("li");
                li.textContent = item;
                element.appendChild(li);
            });
        }

        
        // Judul section mengikuti proyek yang sedang dibuka.
        // Proyek lain tetap memakai judul bawaan.
        toolsTitle.textContent =
            project.toolsTitle || "Tools";

        processTitle.textContent =
            project.processTitle || "Analysis Process";

        insightsTitle.textContent =
            project.insightsTitle || "Key Insights";

        recommendationsTitle.textContent =
            project.implicationsTitle || "Recommendations";


        // Tampilkan Analysis Process khusus Aravella.
        // Jika proyek lain dibuka, pulihkan kartu bawaan.
        if (project.processSteps && project.processSteps.length) {
            processFlow.replaceChildren();

            project.processSteps.forEach(function (step, index) {
                const card = document.createElement("div");
                card.className = "architecture-step";

                const iconWrapper = document.createElement("div");
                iconWrapper.className = "architecture-icon";

                const icon = document.createElement("i");
                icon.setAttribute(
                    "data-lucide",
                    step.icon || "circle"
                );

                iconWrapper.appendChild(icon);

                const heading = document.createElement("h4");
                heading.textContent = step.title;

                const subtitle = document.createElement("p");
                subtitle.textContent = step.subtitle;

                card.appendChild(iconWrapper);
                card.appendChild(heading);
                card.appendChild(subtitle);

                // Panah hanya muncul di antara kartu.
                if (index < project.processSteps.length - 1) {
                    const arrow = document.createElement("span");
                    arrow.className = "architecture-arrow";
                    arrow.textContent = "→";
                    card.appendChild(arrow);
                }

                processFlow.appendChild(card);
            });
        } else {
            // Kembalikan tampilan default untuk Olist,
            // Vestiaire Fashion, Netflix, dan proyek lainnya.
            processFlow.innerHTML = defaultProcessFlowHTML;
        }


        // Tampilkan temuan sesuai data setiap proyek.
        updateList(insights, project.insights);

        // Aravella memakai Business Implications.
        // Proyek lain tetap menggunakan Recommendations.
        updateList(
            recommendations,
            project.businessImplications || project.recommendations
        );


        projectLink.href = project.url || "#";
        projectLink.style.display = project.url ? "" : "none";

        if (project.downloadName) {
            projectLink.setAttribute("download", project.downloadName);
        } else {
            projectLink.removeAttribute("download");
        }

     
        /* Membuat badge tools dengan logo asli */
        tools.replaceChildren();

        const toolLogos = {
            "Python": {
                src: "https://cdn.simpleicons.org/python/3776AB",
                icon: "code-2"
            },
            "PostgreSQL": {
                src: "https://cdn.simpleicons.org/postgresql/4169E1",
                icon: "database"
            },
            "GitHub": {
                src: "https://cdn.simpleicons.org/github/181717",
                icon: "github"
            },
            "Figma": {
                src: "https://cdn.simpleicons.org/figma/F24E1E",
                icon: "figma"
            },
            "Tableau": {
                src: "https://img.icons8.com/color/48/tableau-software.png",
                icon: "chart-no-axes-combined"
            },
            "Excel": {
                src: "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png",
                icon: "file-spreadsheet"
            },
            "Microsoft Excel": {
                src: "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png",
                icon: "file-spreadsheet"
            },
            "Power BI": {
                src: "https://cdn.simpleicons.org/powerbi/F2C811",
                icon: "chart-no-axes-column"
            },
            "Looker Studio": {
                src: "https://cdn.simpleicons.org/looker/4285F4",
                icon: "chart-no-axes-combined"
            },
            "Metabase": {
                src: "https://cdn.simpleicons.org/metabase/509EE3",
                icon: "chart-no-axes-column"
            },

            // Tambahan logo Bank Sampah Management System
            "PHP": {
                src: "https://cdn.simpleicons.org/php/777BB4",
                icon: "code"
            },
            "MySQL": {
                src: "https://cdn.simpleicons.org/mysql/4479A1",
                icon: "database"
            },
            "JavaScript": {
                src: "https://cdn.simpleicons.org/javascript/F7DF1E",
                icon: "code"
            },
            "HTML": {
                src: "https://cdn.simpleicons.org/html5/E34F26",
                icon: "code"
            },
            "CSS": {
                src: "https://cdn.simpleicons.org/css3/1572B6",
                icon: "palette"
            }
        };

        const toolIcons = {
            "SQL": "database",
            "EDA": "search",
            "Data Cleaning": "filter",
            "Data Validation": "shield-check",
            "XGBoost": "chart-no-axes-combined",
            "Machine Learning": "brain-circuit",
            "Model Evaluation": "chart-no-axes-combined",

            "Excel Formulas": "calculator",
            "PivotTable": "table",
            "Slicer": "sliders-horizontal",
            "Data Analysis": "chart-no-axes-combined",

            // Tambahan
            "DataTables": "table"
        };

        project.tools.forEach(function (toolName) {
            const badge = document.createElement("span");
            badge.className = "project-tool-badge";

            const logo = toolLogos[toolName];

            if (logo) {
                const img = document.createElement("img");
                img.className = "project-tool-logo";
                img.src = logo.src;
                img.alt = "";
                img.width = 22;
                img.height = 22;
                img.loading = "lazy";

                img.onerror = function () {
                    const icon = document.createElement("i");
                    icon.setAttribute(
                        "data-lucide",
                        toolIcons[toolName] || logo.icon
                    );
                    icon.className = "project-tool-fallback";
                    img.replaceWith(icon);

                    if (window.lucide) {
                        window.lucide.createIcons();
                    }
                };

                badge.appendChild(img);
            } else {
                const icon = document.createElement("i");
                icon.setAttribute(
                    "data-lucide",
                    toolIcons[toolName] || "wrench"
                );
                icon.className = "project-tool-fallback";
                badge.appendChild(icon);
            }

            const label = document.createElement("span");
            label.textContent = toolName;

            badge.appendChild(label);
            tools.appendChild(badge);
        });

        // Tampilkan modal
        projectModal.classList.add("is-open");
        projectModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";

        closeButton.focus();

        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    function closeProjectDetails() {
        projectModal.classList.remove("is-open");
        projectModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";

        if (previousFocus) {
            previousFocus.focus();
        }
    }

    // Gunakan event delegation untuk tombol View Details
    document.addEventListener("click", function (event) {

        const trigger = event.target.closest(
            ".project-details-link[data-project]"
        );

        if (trigger) {
            event.preventDefault();

            openProjectDetails(
                trigger.dataset.project,
                trigger
            );

            return;
        }

        if (event.target.closest("#closeProjectModal")) {
            closeProjectDetails();
            return;
        }

        if (event.target.closest("[data-close-modal]")) {
            closeProjectDetails();
        }

    });

    // Tutup menggunakan tombol Escape
    document.addEventListener("keydown", function (event) {
        if (
            event.key === "Escape" &&
            projectModal.classList.contains("is-open")
        ) {
            closeProjectDetails();
        }
    });

    console.log("Project Details Modal siap digunakan.");
}

// Pastikan HTML sudah tersedia sebelum inisialisasi
if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initProjectDetailsModal,
        { once: true }
    );
} else {
    initProjectDetailsModal();
}
 

/* =========================================
   BRAND LOGOS UNTUK SEMUA PROJECT CARDS
========================================= */

(function initProjectToolLogos() {
    const toolLogoMap = {
        "Python": {
            src: "https://cdn.simpleicons.org/python/3776AB",
            icon: "code-2"
        },
        "SQL": {
            icon: "database"
        },
        "PostgreSQL": {
            src: "https://cdn.simpleicons.org/postgresql/4169E1",
            icon: "database"
        },
        "Looker Studio": {
            src: "https://cdn.simpleicons.org/looker/4285F4",
            icon: "chart-no-axes-combined"
        },
        "Excel": {
            src: "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png",
            icon: "file-spreadsheet"
        },
        "Microsoft Excel": {
            src: "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png",
            icon: "file-spreadsheet"
        },
        "Tableau": {
            src: "https://img.icons8.com/color/48/tableau-software.png",
            icon: "chart-no-axes-combined"
        },
        "Power BI": {
            src: "https://cdn.simpleicons.org/powerbi/F2C811",
            icon: "chart-no-axes-column"
        },
        "Metabase": {
            src: "https://cdn.simpleicons.org/metabase/509EE3",
            icon: "chart-no-axes-column"
        },
        "GitHub": {
            src: "https://cdn.simpleicons.org/github/181717",
            icon: "github"
        },
        "Figma": {
            src: "https://cdn.simpleicons.org/figma/F24E1E",
            icon: "figma"
        },
        "XGBoost": {
            icon: "chart-no-axes-combined"
        },
        "Machine Learning": {
            icon: "brain-circuit"
        },
        "Evaluation": {
            icon: "chart-no-axes-combined"
        },
        "EDA": {
            icon: "search"
        },
        "Data Cleaning": {
            icon: "filter"
        },
        "Data Warehouse": {
            icon: "database"
        },
        "ETL": {
            icon: "workflow"
        },
        "Mondrian": {
            icon: "layers"
        },
        "JPivot": {
            icon: "table"
        }
    };

    function addLogoToProjectTools() {
        const badges = document.querySelectorAll(
            ".projects-grid .project-card .project-tools > span"
        );

        badges.forEach(function (badge) {
            // Jangan membuat logo dua kali
            if (badge.dataset.logoReady === "true") return;

            const toolName = badge.textContent.trim();
            const tool = toolLogoMap[toolName];

            if (!tool) return;

            badge.dataset.logoReady = "true";
            badge.classList.add("project-tool-chip");

            // Simpan nama tools
            badge.replaceChildren();

            // Buat logo merek atau ikon alternatif
            if (tool.src) {
                const img = document.createElement("img");
                img.src = tool.src;
                img.alt = "";
                img.width = 15;
                img.height = 15;
                img.className = "project-card-tool-logo";
                img.loading = "lazy";

                img.onerror = function () {
                    const icon = document.createElement("i");
                    icon.setAttribute("data-lucide", tool.icon);
                    icon.className = "project-card-tool-fallback";
                    img.replaceWith(icon);

                    if (window.lucide) {
                        window.lucide.createIcons();
                    }
                };

                badge.appendChild(img);
            } else {
                const icon = document.createElement("i");
                icon.setAttribute("data-lucide", tool.icon);
                icon.className = "project-card-tool-fallback";
                badge.appendChild(icon);
            }

            const label = document.createElement("span");
            label.className = "project-card-tool-label";
            label.textContent = toolName;
            badge.appendChild(label);
        });

        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            addLogoToProjectTools,
            { once: true }
        );
    } else {
        addLogoToProjectTools();
    }
})();



