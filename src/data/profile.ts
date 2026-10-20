/**
 * SEMUA ISI PORTOFOLIO ADA DI FILE INI.
 * Edit nama, peran, proyek, dan tautan di sini, seluruh halaman ikut berubah.
 * Tidak perlu menyentuh file lain untuk mengganti isi.
 */
export const profile = {
  name: 'Azka Alfa',
  initials: 'AA',
  // Ganti peran ini dengan bidang aslimu, contoh: "Frontend Developer", "UI Designer", "SEO Specialist"
  role: 'Web Developer',
  tagline: 'Saya membangun website yang cepat, rapi, dan mudah dirawat.',
  intro:
    'Halo, saya Azka. Saya fokus membuat website modern dengan perhatian pada kecepatan, tampilan yang bersih, dan pengalaman pengguna yang jelas. Halaman ini adalah titik awal portofolio saya: proyek akan bertambah di sini seiring karya yang selesai.',
  location: 'Indonesia',
  availability: 'Terbuka untuk proyek dan kolaborasi',

  about: [
    'Saya bekerja dengan pendekatan sederhana: pahami dulu kebutuhan halamannya, baru pilih teknologi yang paling ringan untuk tujuan itu. Hasilnya website yang cepat dibuka, mudah dikembangkan, dan tidak bergantung pada tumpukan alat yang tidak perlu.',
    'Di luar proyek, saya terus belajar lewat eksperimen kecil, membaca dokumentasi, dan membangun ulang hal yang sudah jadi supaya lebih bersih dari sebelumnya.',
  ],

  // Layanan / hal yang bisa dikerjakan
  services: [
    {
      title: 'Website portofolio & company profile',
      description:
        'Situs statis yang cepat dan murah dirawat, cocok untuk personal branding dan profil usaha. Deploy ke Cloudflare Pages dengan domain custom.',
    },
    {
      title: 'Landing page',
      description:
        'Satu halaman yang fokus pada satu tujuan: memperkenalkan produk, mengumpulkan leads, atau mengarahkan pengunjung ke WhatsApp dan formulir kontak.',
    },
    {
      title: 'Antarmuka web app',
      description:
        'Frontend yang responsif dan aksesibel, dibangun dengan komponen yang konsisten supaya mudah dikembangkan saat fitur bertambah.',
    },
    {
      title: 'Perawatan & optimasi situs',
      description:
        'Perbaikan kecepatan, struktur SEO dasar, dan kerapian kode pada website yang sudah berjalan.',
    },
  ],

  skills: [
    'HTML & CSS',
    'JavaScript',
    'TypeScript',
    'Astro',
    'React',
    'Node.js',
    'Git & GitHub',
    'Cloudflare Pages',
    'Responsive Design',
    'SEO Dasar',
  ],

  // Status jujur tiap proyek: "Live", "Konsep", atau "Eksperimen".
  // Ganti proyek konsep/eksperimen ini dengan karya aslimu begitu siap.
  projects: [
    {
      title: 'Portofolio Pribadi',
      status: 'Live',
      year: '2026',
      description:
        'Situs yang sedang kamu buka ini. Dibangun dengan Astro, ditulis dengan isi terpusat di satu file data, dan di-deploy sebagai situs statis ke Cloudflare Pages.',
      stack: ['Astro', 'TypeScript', 'Cloudflare Pages'],
      url: 'https://github.com/azka-alfa/portofolio',
      urlLabel: 'Lihat kode di GitHub',
    },
    {
      title: 'Blog & Catatan Pribadi',
      status: 'Konsep',
      year: '2026',
      description:
        'Rancangan blog statis untuk menulis catatan belajar dan dokumentasi proyek, dengan daftar isi otomatis dan waktu baca. Menunggu tulisan pertama untuk diterbitkan.',
      stack: ['Astro', 'Markdown'],
      url: 'https://github.com/azka-alfa',
      urlLabel: 'Profil GitHub',
    },
    {
      title: 'Eksperimen UI',
      status: 'Eksperimen',
      year: '2026',
      description:
        'Kumpulan percobaan komponen antarmuka: navigasi mobile, formulir dengan validasi, dan layout editorial. Dipakai sebagai tempat menguji ide sebelum masuk proyek nyata.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      url: 'https://github.com/azka-alfa',
      urlLabel: 'Profil GitHub',
    },
  ],

  socials: {
    github: 'https://github.com/azka-alfa',
    // Isi setelah punya alamatnya, kosongkan string-nya bila belum ada (tautan tidak akan tampil).
    email: '',
    linkedin: '',
    instagram: '',
  },
};
