document.addEventListener('DOMContentLoaded', () => {
  // =========================================
  // 1. MOBILE NAVIGATION TOGGLE
  // =========================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // =========================================
  // 2. KATALOG & FILOSOFI DROPDOWN MENU
  // =========================================
  const dropdown = document.getElementById('katalogDropdown');
  const dropdownToggle = document.getElementById('katalogDropdownBtn');

  if (dropdown && dropdownToggle) {
    dropdownToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle('open');
      dropdownToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // =========================================
  // 3. HERO FOCAL IMAGE CAROUSEL
  // =========================================
  const heroSlides = [
    {
      src: 'assets/icons/FotoTimmain.jpg',
      caption: 'Tim Abmas AKSARA ITS bersama Mitra Batik Zakia, Desa Jugo, Kab. Blitar'
    },
    {
      src: 'assets/icons/fotoProdukDenganModelMain.JPG',
      caption: 'Eksplorasi Produk & Wastra Kreasi Batik Zakia oleh Tim AKSARA ITS'
    },
    {
      src: 'assets/images/kegiatan/maineventEdukasi.JPG',
      caption: 'Pelatihan Kreasi Kain Shibori, Pemasaran Digital & Produk Fungsional Inklusif'
    }
  ];

  const heroImage = document.getElementById('heroMainImage');
  const heroCaption = document.getElementById('heroCaption');
  const dots = document.querySelectorAll('.hero-dots .dot');
  let currentSlide = 0;

  function setHeroSlide(index) {
    if (!heroImage || !heroCaption || !heroSlides[index]) return;
    currentSlide = index;
    heroImage.src = heroSlides[index].src;
    heroCaption.textContent = heroSlides[index].caption;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = Number(dot.dataset.slide);
      setHeroSlide(idx);
    });
  });

  if (heroImage && dots.length > 0) {
    setInterval(() => {
      const next = (currentSlide + 1) % heroSlides.length;
      setHeroSlide(next);
    }, 5500);
  }

  // =========================================
  // 4. KATALOG & FILOSOFI BATIK ZAKIA + MODAL WHATSAPP
  // =========================================
  const catalogTrack = document.getElementById('catalogTrack');
  const filterPills = document.querySelectorAll('#catalogFilters .filter-pill');
  const dropdownLinks = document.querySelectorAll('#katalogDropdownMenu a[data-filter]');

  const modal = document.getElementById('batikModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImage = document.getElementById('modalImage');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategoryIntro = document.getElementById('modalCategoryIntro');
  const modalPhilosophy = document.getElementById('modalPhilosophy');
  const modalWaBtn = document.getElementById('modalWaBtn');

  function openBatikModal(item) {
    if (!modal) return;
    modalImage.src = item.image;
    modalImage.alt = item.name;
    modalCategory.textContent = item.categoryLabel;
    modalTitle.textContent = item.name;
    modalCategoryIntro.textContent = item.categoryIntro;
    modalPhilosophy.textContent = item.philosophy;

    const waNumber = typeof BATIK_ZAKIA_WA !== 'undefined' ? BATIK_ZAKIA_WA : '6281234567890';
    const message = encodeURIComponent(
      `Halo Batik Zakia, saya tertarik memesan motif *${item.name}* (${item.categoryLabel}) yang saya lihat melalui website Program AKSARA ITS Desa Jugo. Mohon informasi ketersediaan dan harga. Terima kasih.`
    );
    modalWaBtn.href = `https://wa.me/${waNumber}?text=${message}`;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeBatikModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeBatikModal);
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeBatikModal();
    });
  }

  function renderCatalog(filterCategory = 'all') {
    if (!catalogTrack || typeof BATIK_DATA === 'undefined') return;

    const filtered =
      filterCategory === 'all'
        ? BATIK_DATA
        : BATIK_DATA.filter((item) => item.category === filterCategory);

    catalogTrack.innerHTML = '';
    catalogTrack.scrollLeft = 0;

    filtered.forEach((item) => {
      const card = document.createElement('article');
      card.className = 'batik-card';
      card.innerHTML = `
        <div class="batik-card-thumb">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="batik-card-cat">${item.categoryLabel}</div>
        <h3 class="batik-card-title">${item.name}</h3>
        <p class="batik-card-desc">${item.shortDesc}</p>
        <button type="button" class="btn-card-detail">Detail</button>
      `;

      card.querySelector('.btn-card-detail').addEventListener('click', () => {
        openBatikModal(item);
      });

      catalogTrack.appendChild(card);
    });

    filterPills.forEach((pill) => {
      pill.classList.toggle('active', pill.dataset.filter === filterCategory);
    });
  }

  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      renderCatalog(pill.dataset.filter);
    });
  });

  dropdownLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const chosen = link.dataset.filter;
      renderCatalog(chosen);
      if (dropdown) dropdown.classList.remove('open');
    });
  });

  renderCatalog('all');

  // =========================================
  // 5. SIAPA KAMI — LOGBOOK KEGIATAN ABMAS AKSARA 2026
  // =========================================
  const AKSARA_ACTIVITIES = [
    {
      tag: 'KEGIATAN 01 • 30 OKTOBER 2026',
      title: 'Rapat Perdana & Pemetaan Program ABMAS AKSARA 2026',
      image: 'assets/images/kegiatan/kedatanganTeamphotodiZaskia.JPG',
      meta: '30 Oktober 2026 | 13.00 – 17.00 WIB • Ruang 216, Departemen Studi Pembangunan ITS',
      shortDesc:
        'Pertemuan awal tim mahasiswa bersama dosen pembimbing Ibu Tika untuk memetakan tujuan pengabdian, draf susunan acara di Blitar, serta survei lapangan ke Desa Jugo.',
      description:
        'Rapat perdana ABMAS AKSARA 2026 dihadiri oleh dosen pembimbing (Ibu Tika) dan seluruh anggota tim untuk memaparkan gambaran umum tujuan pengabdian, draf awal rundown kegiatan di Kabupaten Blitar, serta tindak lanjut survei lapangan langsung guna mengoordinasikan keterlibatan perangkat desa dan Karang Taruna setempat.',
      results: [
        'Seluruh anggota tim memahami visi, tujuan, dan rangkaian pengabdian ABMAS AKSARA 2026 di Blitar.',
        'Tersusunnya draf awal rundown sebagai acuan koordinasi pelaksanaan lapangan.',
        'Pelaksanaan survei lokasi langsung oleh dosen pendamping dan perwakilan mahasiswa.'
      ]
    },
    {
      tag: 'KEGIATAN 02 & 03 • 1 & 3 NOVEMBER 2026',
      title: 'Pemotretan Produk Batik Zakia & Uji Materi Edukasi',
      image: 'assets/images/kegiatan/EdukasiDigital.JPG',
      meta: '1 & 3 November 2026 • Daring (Zoom) & AADK Keputih, Surabaya',
      shortDesc:
        'Standarisasi dokumentasi foto produk Batik Zakia untuk kebutuhan platform digital serta evaluasi penyampaian materi edukasi agar mudah dipahami masyarakat.',
      description:
        'Tim menyelenggarakan koordinasi standar dokumentasi foto produk untuk platform website serta melaksanakan sesi pemotretan produk Batik Zakia. Selain itu, diadakan simulasi penyampaian materi (Mini Challenge) untuk menyederhanakan istilah teknis menjadi bahasa komunikatif yang ramah bagi perajin.',
      results: [
        'Terkumpulnya katalog foto produk Batik Zakia untuk kebutuhan publikasi dan website.',
        'Penyempurnaan materi presentasi menjadi lebih ringkas, interaktif, dan mudah dipahami masyarakat awam.'
      ]
    },
    {
      tag: 'KEGIATAN 04 – 06 • 6 – 12 NOVEMBER 2026',
      title: 'Konsolidasi Tim, Koordinasi Media & Pemotretan Model',
      image: 'assets/icons/fotoProdukDenganModelMain.JPG',
      meta: '6, 11 & 12 November 2026 • AADK Mulyosari & Plasa Dr. Angka ITS',
      shortDesc:
        'Pemantapan kesiapan keberangkatan tim ke Blitar, finalisasi liputan media serta platform digital, dan pemotretan produk bersama model di Plasa Dr. Angka ITS.',
      description:
        'Rangkaian konsolidasi akhir sebelum keberangkatan ke Kabupaten Blitar meliputi pembagian peran operasional setiap anggota tim, penyelarasan liputan media dan publikasi digital, serta sesi pemotretan busana dan produk Batik Zakia bersama model di Plasa Dr. Angka ITS.',
      results: [
        'Terverifikasinya seluruh kesiapan logistik, jadwal lapangan, dan pembagian tugas tim.',
        'Terselesaikannya dokumentasi foto produk bersama model di Plasa Dr. Angka ITS.'
      ]
    },
    {
      tag: 'HARI KE-1 LAPANGAN • 13 NOVEMBER 2026',
      title: 'Kedatangan di Desa Jugo, Wawancara Mitra & Pengenalan Media Sosial',
      image: 'assets/images/kegiatan/maineventEdukasi.JPG',
      meta: '13 November 2026 | 07.00 – 20.00 WIB • Rumah Batik Zakia, Desa Jugo, Kec. Kesamben, Blitar',
      shortDesc:
        'Wawancara mendalam sejarah usaha bersama Ibu Zakia serta sesi edukasi dasar pemanfaatan media sosial bagi warga dan perajin Desa Jugo bersama Ibu Hizbia.',
      description:
        'Setibanya di Desa Jugo, Kecamatan Kesamben, tim melakukan wawancara mendalam bersama Ibu Zakia selaku pemilik Batik Zakia untuk menggali sejarah dan filosofi motif lokal. Kegiatan dilanjutkan dengan pemaparan materi "Mengenal Media Sosial" oleh Ibu Hizbia sebagai fondasi komunikasi dan promosi digital warga.',
      results: [
        'Terdokumentasinya sejarah, manajemen usaha, dan filosofi motif asli Batik Zakia.',
        'Warga dan perajin memahami fungsi dasar media sosial untuk pengembangan usaha lokal.'
      ]
    },
    {
      tag: 'HARI KE-2 (SESI PAGI) • 14 NOVEMBER 2026',
      title: 'Praktik Kreasi Kain Shibori & Eksplorasi Teknik Membatik',
      image: 'assets/images/kegiatan/kegiatanmembatik.JPG',
      meta: '14 November 2026 | 09.00 – 13.00 WIB • Desa Jugo, Kec. Kesamben, Kab. Blitar',
      shortDesc:
        'Pelatihan langsung kreasi kain shibori dan eksplorasi teknik pewarnaan tekstil inklusif bersama para perajin lokal Batik Zakia.',
      description:
        'Tim mahasiswa ITS mendampingi perajin lokal Desa Jugo dalam praktik langsung pembuatan kain shibori dan pengembangan kreasi wastra berbasis desain inklusif, mulai dari teknik lipat, ikat, hingga proses pewarnaan kain untuk memperkaya variasi produk bernilai jual tinggi.',
      results: [
        'Perajin lokal menguasai teknik dasar hingga praktik langsung pembuatan kain shibori.',
        'Terciptanya berbagai sampel kain kreasi baru hasil kolaborasi mahasiswa dan perajin Desa Jugo.'
      ]
    },
    {
      tag: 'HARI KE-2 (SESI SIANG) • 14 NOVEMBER 2026',
      title: 'Pelatihan Stabilitas Bisnis & Pemasaran Digital untuk UMKM',
      image: 'assets/images/kegiatan/edukasiDigitalScreen.JPG',
      meta: '14 November 2026 | 13.00 – 17.00 WIB • Desa Jugo, Kec. Kesamben, Kab. Blitar',
      shortDesc:
        'Pendampingan strategi menjaga stabilitas usaha bersama Ibu Hizbia serta praktik langsung pemasaran produk batik melalui kanal digital.',
      description:
        'Sesi pelatihan keberlanjutan usaha membekali perajin dengan cara menjaga stabilitas operasional produksi, dilanjutkan dengan praktik langsung pemanfaatan media sosial dan katalog digital untuk menjangkau pasar yang lebih luas di luar Kabupaten Blitar.',
      results: [
        'Meningkatnya pemahaman perajin mengenai manajemen keberlanjutan dan stabilitas bisnis.',
        'Perajin mempraktikkan langsung pembuatan konten promosi digital untuk produk batik.'
      ]
    },
    {
      tag: 'HARI KE-3 (SESI PAGI) • 15 NOVEMBER 2026',
      title: 'Workshop Menjahit Produk Fungsional Berbasis Desain Inklusif',
      image: 'assets/images/kegiatan/KegiatanMenjahit.JPG',
      meta: '15 November 2026 | 08.00 – 12.00 WIB • Desa Jugo, Kec. Kesamben, Kab. Blitar',
      shortDesc:
        'Pelatihan keterampilan menjahit untuk mengolah lembaran kain batik dan shibori menjadi produk fungsional siap pakai.',
      description:
        'Pada hari ketiga pengabdian, masyarakat dan perajin mengikuti pelatihan menjahit intensif guna meningkatkan kapasitas produksi hilir—mengubah kain batik maupun shibori menjadi produk fungsional bernilai tambah tinggi.',
      results: [
        'Meningkatnya keterampilan teknis peserta dalam menjahit dan merakit produk fungsional.',
        'Terlaksananya serah terima dukungan mesin jahit bagi pengembangan produksi komunitas.'
      ]
    },
    {
      tag: 'HARI KE-3 (PENUTUPAN) • 15 NOVEMBER 2026',
      title: 'Penyerahan Plakat Apresiasi kepada Mitra Batik Zakia & Desa Jugo',
      image: 'assets/images/kegiatan/tandatangankontrakzakia.JPG',
      meta: '15 November 2026 | 12.00 – 15.00 WIB • Desa Jugo, Kec. Kesamben, Kab. Blitar',
      shortDesc:
        'Simbolisasi kerja sama berkelanjutan dan penyerahan plakat penghargaan kepada Ibu Zakia serta perwakilan Pemerintah Desa Jugo.',
      description:
        'Rangkaian pengabdian masyarakat ABMAS AKSARA 2026 ditutup dengan penyerahan plakat apresiasi kepada Ibu Zakia (pemilik Batik Zakia) dan perwakilan Pemerintah Desa Jugo atas sinergi dan dukungan penuh selama seluruh tahapan program berlangsung.',
      results: [
        'Terjalinnya kemitraan resmi dan berkelanjutan antara tim AKSARA ITS, Batik Zakia, dan Desa Jugo.',
        'Seluruh target luaran pengabdian masyarakat di Desa Jugo terlaksana dengan baik.'
      ]
    }
  ];

  const activityTrack = document.getElementById('activityTrack');
  const actModal = document.getElementById('activityModal');
  const actModalCloseBtn = document.getElementById('actModalCloseBtn');
  const actModalImage = document.getElementById('actModalImage');
  const actModalTag = document.getElementById('actModalTag');
  const actModalTitle = document.getElementById('actModalTitle');
  const actModalMeta = document.getElementById('actModalMeta');
  const actModalDesc = document.getElementById('actModalDesc');
  const actModalResults = document.getElementById('actModalResults');

  function openActivityModal(act) {
    if (!actModal) return;
    actModalImage.src = act.image;
    actModalImage.alt = act.title;
    actModalTag.textContent = act.tag;
    actModalTitle.textContent = act.title;
    actModalMeta.textContent = act.meta;
    actModalDesc.textContent = act.description;

    actModalResults.innerHTML = '';
    act.results.forEach((res) => {
      const li = document.createElement('li');
      li.textContent = res;
      actModalResults.appendChild(li);
    });

    actModal.classList.add('open');
    actModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeActivityModal() {
    if (!actModal) return;
    actModal.classList.remove('open');
    actModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (actModalCloseBtn) {
    actModalCloseBtn.addEventListener('click', closeActivityModal);
  }
  if (actModal) {
    actModal.addEventListener('click', (e) => {
      if (e.target === actModal) closeActivityModal();
    });
  }

  if (activityTrack) {
    AKSARA_ACTIVITIES.forEach((act) => {
      const card = document.createElement('article');
      card.className = 'activity-card';
      card.innerHTML = `
        <div class="activity-card-thumb">
          <img src="${act.image}" alt="${act.title}" loading="lazy" />
        </div>
        <div class="activity-card-tag">${act.tag}</div>
        <h3 class="activity-card-title">${act.title}</h3>
        <p class="activity-card-desc">${act.shortDesc}</p>
        <button type="button" class="btn-activity-detail">Detail</button>
      `;

      card.querySelector('.btn-activity-detail').addEventListener('click', () => {
        openActivityModal(act);
      });

      activityTrack.appendChild(card);
    });
  }

  // =========================================
  // 6. GLOBAL ESCAPE KEY HANDLER FOR MODALS
  // =========================================
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBatikModal();
      closeActivityModal();
    }
  });
});