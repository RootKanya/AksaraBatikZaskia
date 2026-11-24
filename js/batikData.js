// Helper: generates a clean dark-themed SVG placeholder with motif name
function makePlaceholder(label, sublabel) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="400" viewBox="0 0 640 400">
    <defs>
      <radialGradient id="g" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stop-color="#27272a"/>
        <stop offset="100%" stop-color="#111111"/>
      </radialGradient>
    </defs>
    <rect width="640" height="400" fill="url(#g)"/>
    <circle cx="320" cy="200" r="110" fill="none" stroke="#e62b1e" stroke-width="2" stroke-dasharray="8 6" opacity="0.55"/>
    <text x="320" y="192" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="700" text-anchor="middle">${label}</text>
    <text x="320" y="222" fill="#e62b1e" font-family="sans-serif" font-size="13" font-weight="600" text-anchor="middle">${sublabel}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Ganti nomor WhatsApp Batik Zakia di sini (format internasional tanpa +)
const BATIK_ZAKIA_WA = '6281234567890';

const BATIK_DATA = [
  // ================= 1. DEWANDARU =================
  {
    id: 'dewandaru-batik-alas',
    category: 'dewandaru',
    categoryLabel: 'MOTIF DEWANDARU',
    name: 'Batik Alas (Dewandaru)',
    image: makePlaceholder('Batik Alas', 'Placeholder Foto Motif • Desa Jugo'),
    shortDesc: 'Batik yang dibuat dengan ide utama yang terinspirasi oleh alam sekitar dan lingkungan Desa Jugo serta filosofi pohon sakral Dewandaru.',
    categoryIntro: 'Secara istilah, Dewandaru terdiri dari 2 kata, yakni Dewa (sosok yang lebih tinggi dari manusia) dan Ndaru/Daru (keberkahan atau keberuntungan). Dewandaru merupakan pohon Ceremai (Eugenia uniflora) yang dipercaya sebagai pohon sakral pembawa rezeki, jimat keberuntungan, penolak bala, dan penjaga.',
    philosophy: 'Motif Batik Alas memadukan ranting, daun lonjong meruncing, bunga, dan buah bulat kecil Dewandaru yang saling terhubung—melambangkan pertumbuhan dan kehidupan berkelanjutan—dengan inspirasi kekayaan alam serta lingkungan asri Desa Jugo, Kecamatan Kesamben.'
  },
  {
    id: 'dewandaru-daun-lumbu',
    category: 'dewandaru',
    categoryLabel: 'MOTIF DEWANDARU',
    name: 'Dewandaru Daun Lumbu (Daun Talas)',
    image: makePlaceholder('Dewandaru Daun Lumbu', 'Placeholder Foto Motif'),
    shortDesc: 'Perpaduan ranting pohon sakral Dewandaru dan Daun Lumbu (Talas) yang memiliki mitos selaras sebagai simbol penolak bala.',
    categoryIntro: 'Dewandaru (Eugenia uniflora) berarti keberkahan atau keberuntungan dari dewa, digambarkan melalui ranting yang saling terhubung sebagai simbol kehidupan yang berkelanjutan.',
    philosophy: 'Menggabungkan motif ranting, daun, bunga, dan buah Dewandaru dengan Daun Lumbu (Daun Talas). Kedua tanaman tersebut memiliki mitos yang selaras dalam tradisi lokal, yakni dipercaya sebagai penolak bala dan penjaga keselamatan.'
  },
  {
    id: 'dewandaru-mawar-melati',
    category: 'dewandaru',
    categoryLabel: 'MOTIF DEWANDARU',
    name: 'Dewandaru Mawar Melati',
    image: makePlaceholder('Dewandaru Mawar Melati', 'Placeholder Foto Motif'),
    shortDesc: 'Mengandung harapan untuk masa depan yang penuh berkah serta berlandaskan pada keberanian (mawar) dan kesucian (melati).',
    categoryIntro: 'Dewandaru (Eugenia uniflora) berarti keberkahan dari dewa dan melambangkan pertumbuhan kehidupan yang berkelanjutan.',
    philosophy: 'Memadukan kesakralan pohon Dewandaru dengan bunga mawar dan melati. Mawar memiliki simbolisme keberanian, sedangkan melati melambangkan kesucian—sehingga batik ini mengandung doa dan harapan untuk masa depan penuh berkah yang berlandaskan keberanian dan kesucian.'
  },

  // ================= 2. CAKRA PALAH =================
  {
    id: 'cakrapalah-truntum',
    category: 'cakrapalah',
    categoryLabel: 'MOTIF CAKRA PALAH',
    name: 'Truntum dan Cakra Palah',
    image: makePlaceholder('Truntum & Cakra Palah', 'Placeholder Foto Motif'),
    shortDesc: 'Perpaduan senjata Cakra dan Candi Penataran dengan motif Truntum yang melambangkan cinta kasih tulus, abadi, dan tuntunan kebaikan.',
    categoryIntro: 'Cakra Palah berasal dari kata Cakra (senjata roda pipih Dewa Krisna) dan Palah (nama asli Candi Penataran). Keduanya menyimbolkan manusia sebagai makhluk Tuhan yang tidak sempurna sehingga harus terus berusaha mencari kesempurnaan hidup sejati.',
    philosophy: 'Menampilkan titik-titik, daun setengah lingkaran, tombak delapan penjuru mata angin, dan ornamen candi yang berpadu dengan motif Truntum—melambangkan cinta kasih yang tulus, abadi, dan tumbuh kembali, serta tuntunan dan doa kebaikan.'
  },
  {
    id: 'cakrapalah-tembako',
    category: 'cakrapalah',
    categoryLabel: 'MOTIF CAKRA PALAH',
    name: 'Tembako Cakra Palah',
    image: makePlaceholder('Tembako Cakra Palah', 'Placeholder Foto Motif • Batik Komisi'),
    shortDesc: 'Batik komisi yang mengangkat tembakau sebagai komoditas utama Kecamatan Selopuro dalam bingkai ornamen Cakra Palah.',
    categoryIntro: 'Cakra Palah memadukan ornamen tombak delapan penjuru mata angin dan siluet Candi Penataran sebagai pengingat usaha manusia mencari kesempurnaan hidup sejati.',
    philosophy: 'Salah satu karya batik komisi istimewa dari Kecamatan Selopuro. Kata "Tembako" merujuk pada tanaman tembakau yang menjadi komoditas unggulan serta kebanggaan masyarakat Kecamatan Selopuro selaku pemesan batik ini.'
  },
  {
    id: 'cakrapalah-koi',
    category: 'cakrapalah',
    categoryLabel: 'MOTIF CAKRA PALAH',
    name: 'Koi Cakra Palah',
    image: makePlaceholder('Koi Cakra Palah', 'Placeholder Foto Motif'),
    shortDesc: 'Menyatukan filosofi Cakra Palah dengan figur ikan Koi sebagai simbol ketekunan, keberanian, transformasi diri, dan keharmonisan hidup.',
    categoryIntro: 'Cakra Palah merujuk pada senjata Cakra Dewa Krisna dan nama asli Candi Penataran, menggambarkan perjalanan spiritual manusia menuju kesempurnaan hidup.',
    philosophy: 'Kehadiran motif ikan Koi di antara elemen tombak delapan penjuru dan ornamen Candi Penataran melambangkan ketekunan dalam menghadapi rintangan, keberanian, transformasi diri ke arah lebih baik, serta keharmonisan hidup.'
  },
  {
    id: 'cakrapalah-remukan',
    category: 'cakrapalah',
    categoryLabel: 'MOTIF CAKRA PALAH',
    name: 'Cakra Palah Remukan',
    image: makePlaceholder('Cakra Palah Remukan', 'Placeholder Foto Motif'),
    shortDesc: 'Varian Cakra Palah dengan teknik pewarnaan remukan malam yang menghasilkan tekstur retakan artistik nan khas.',
    categoryIntro: 'Cakra Palah memadukan titik-titik, bentuk setengah lingkaran menyerupai daun, elemen tombak delapan penjuru mata angin, serta ornamen candi di bagian luarnya.',
    philosophy: 'Mengusung makna filosofis perjalanan manusia menyempurnakan diri di hadapan Tuhan, yang diperkaya dengan teknik pewarnaan Remukan—menghasilkan efek tekstur retakan warna alami sehingga setiap lembar kain memiliki karakter unik.'
  },
  {
    id: 'cakrapalah-klasik',
    category: 'cakrapalah',
    categoryLabel: 'MOTIF CAKRA PALAH',
    name: 'Cakra Palah (Pewarnaan Klasik)',
    image: makePlaceholder('Cakra Palah Klasik', 'Placeholder Foto Motif'),
    shortDesc: 'Motif murni Cakra Palah tanpa teknik remukan yang menonjolkan ketegasan garis tombak delapan penjuru dan ornamen Candi Penataran.',
    categoryIntro: 'Cakra Palah terdiri dari kata Cakra (senjata roda Dewa Krisna) dan Palah (nama asli Candi Penataran).',
    philosophy: 'Memiliki struktur motif yang sama dengan Cakra Palah Remukan—berisi titik-titik, daun setengah lingkaran, tombak delapan penjuru mata angin, dan ornamen candi—namun diproses tanpa teknik remukan sehingga detail garis motif tampil bersih dan tegas.'
  },
  {
    id: 'cakrapalah-labalaba',
    category: 'cakrapalah',
    categoryLabel: 'MOTIF CAKRA PALAH',
    name: 'Laba-Laba Cakra Palah',
    image: makePlaceholder('Laba-Laba Cakra Palah', 'Placeholder Foto Motif'),
    shortDesc: 'Mengombinasikan ornamen Cakra Palah dengan motif laba-laba yang dalam tradisi masyarakat dipercaya sebagai pertanda baik.',
    categoryIntro: 'Cakra Palah menyimbolkan usaha terus-menerus manusia sebagai makhluk Tuhan dalam meraih kesempurnaan hidup sejati.',
    philosophy: 'Motif laba-laba yang disematkan pada struktur Cakra Palah membawa makna optimisme dan harapan, karena laba-laba secara turun-temurun dihubungkan dengan datangnya pertanda baik dan rezeki.'
  },

  // ================= 3. VARIASI MOTIF KHAS JUGO =================
  {
    id: 'variasi-sajugo',
    category: 'variasi',
    categoryLabel: 'VARIASI MOTIF KHAS JUGO',
    name: 'Batik Sajugo',
    image: makePlaceholder('Batik Sajugo', 'Placeholder Foto Motif • Kearifan Lokal'),
    shortDesc: 'Sketsa wajah di bagian pusat yang dikelilingi daun Andong Furing, bermakna fokus pada Tuhan dan nilai pengampunan.',
    categoryIntro: 'Variasi motif khas Batik Zakia yang menggali nilai spiritualitas dan kearifan lokal masyarakat Desa Jugo.',
    philosophy: 'Batik Sajugo menampilkan bentuk sketsa wajah yang dikelilingi oleh daun Andong Furing. Sketsa wajah yang menjadi titik pusat memiliki makna untuk senantiasa fokus kepada Tuhan, sedangkan daun Andong Furing melambangkan pengampunan.'
  },
  {
    id: 'variasi-sinabdo',
    category: 'variasi',
    categoryLabel: 'VARIASI MOTIF KHAS JUGO',
    name: 'Batik Sinabdo',
    image: makePlaceholder('Batik Sinabdo', 'Placeholder Foto Motif • Sejarah Eyang Jugo'),
    shortDesc: 'Mengangkat kisah sejarah Eyang Jugo (Eyang Zakaria II), prajurit Pangeran Diponegoro, dengan motif tapak kaki, buah sawo, dan tanaman toga.',
    categoryIntro: 'Terinspirasi dari sejarah Padepokan Eyang Jugo di Desa Jugo, Kecamatan Kesamben.',
    philosophy: 'Mengisahkan Eyang Jugo (identitas asli Eyang Zakaria ke-II), salah satu prajurit Pangeran Diponegoro yang menyamar untuk menyebarkan agama Islam di Desa Jugo hingga akhir hayatnya dan dimakamkan di Gunung Kawi bersandingan dengan sahabat karibnya, Imam Sujono. Jejak perjuangan tersebut ditandai dengan motif tapak kaki, buah sawo (penanda prajurit Pangeran Diponegoro), serta aneka tanaman obat keluarga (toga).'
  },
  {
    id: 'variasi-kuda-lumping',
    category: 'variasi',
    categoryLabel: 'VARIASI MOTIF KHAS JUGO',
    name: 'Batik Kuda Lumping',
    image: makePlaceholder('Batik Kuda Lumping', 'Placeholder Foto Motif • Seni Jaranan'),
    shortDesc: 'Terinspirasi dari instrumen tarian Jaranan asal Ponorogo yang menyimbolkan kekuatan, keberanian, dan kegigihan manusia.',
    categoryIntro: 'Mengangkat kekayaan seni pertunjukan rakyat Jawa Timur ke dalam medium batik tulis dan cap.',
    philosophy: 'Kuda-kudaan pada motif ini merujuk pada instrumen utama tarian Jaranan yang berasal dari Ponorogo. Motif ini menjadi simbolisme kekuatan, keberanian, dan kegigihan yang sangat penting dalam menjalani kehidupan manusia.'
  },

  // ================= 4. BATIK KOMISI (CUSTOM) =================
  {
    id: 'komisi-khusus',
    category: 'komisi',
    categoryLabel: 'BATIK KOMISI (CUSTOM)',
    name: 'Batik Komisi (IPHI & Burung Enggang)',
    image: makePlaceholder('Batik Komisi Custom', 'Placeholder Foto Motif • IPHI & Enggang'),
    shortDesc: 'Layanan pembuatan motif khusus sesuai permintaan instansi atau pelanggan, seperti batik komisi IPHI dan motif burung Enggang Kalimantan.',
    categoryIntro: 'Batik Komisi memungkinkan pelanggan atau instansi memesan motif eksklusif sesuai identitas masing-masing (contoh: motif Ikatan Persaudaraan Haji Indonesia / IPHI serta motif burung Enggang khas Kalimantan).',
    philosophy: 'Terdapat dua skema pemesanan Batik Komisi di Batik Zakia: (1) Menggunakan desain dari pelanggan sendiri—biaya lebih terjangkau karena hanya mencakup proses produksi batik; atau (2) Mengajukan pembuatan desain baru oleh tim Batik Zakia—biaya mencakup jasa perancangan desain motif sekaligus proses produksi.'
  }
];