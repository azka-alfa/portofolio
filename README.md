# Portofolio Azka Alfa

Website portofolio pribadi, dibangun dengan [Astro](https://astro.build) dan di-deploy sebagai situs statis ke Cloudflare Pages.

## Mengganti isi

Semua isi ada di satu file: **`src/data/profile.ts`**

Nama, peran, tagline, tentang, layanan, keahlian, proyek, dan tautan sosial diubah di situ. Halaman langsung mengikuti, tidak perlu mengedit file lain.

Setelah punya domain final, ganti juga nilai `site` di `astro.config.mjs` dan baris Sitemap di `public/robots.txt`.

## Menjalankan lokal

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil build di folder dist/
npm run preview  # pratinjau hasil build
```

## Deploy ke Cloudflare Pages

1. Masuk ke Cloudflare Dashboard, pilih **Workers & Pages**, lalu **Create**, tab **Pages**, **Connect to Git**.
2. Pilih repo `azka-alfa/portofolio`.
3. Isi pengaturan build persis seperti ini:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Production branch:** `main`
4. Klik **Save and Deploy**. Deploy pertama biasanya selesai dalam 1 sampai 2 menit.
5. Setiap `git push` ke branch `main` setelah itu akan otomatis memicu deploy baru.

### Domain custom (opsional)

Di proyek Pages yang sama: **Custom domains**, **Set up a custom domain**, lalu ikuti instruksi DNS-nya. Setelah aktif, ganti `site` di `astro.config.mjs` ke domain tersebut lalu push sekali lagi.

## Struktur

```
src/
  data/profile.ts     Semua isi portofolio (satu-satunya file yang perlu diedit untuk isi)
  layouts/Layout.astro  Kerangka HTML, meta SEO, font, gaya global
  pages/index.astro   Halaman utama
public/
  favicon.svg
  robots.txt
```
