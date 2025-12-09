# Ziywe.studio Shop Template

Project website toko template sederhana, elegan, dan responsive. Dibuat oleh **Ziywe.studio (Ziyad Web Studio)**.

## Fitur Utama
- **Static Site**: Tidak butuh database/backend.
- **Dynamic Product Rendering**: Edit produk cukup lewat file JavaScript.
- **Dark Mode UI**: Tampilan modern dan nyaman di mata.
- **Responsive**: Cocok untuk desktop dan mobile.
- **Integrasi**: Link pembelian (Lynk) dan Chat WhatsApp otomatis.

## Struktur File
```
shop-template/
├─ index.html           # Halaman utama
├─ style.css            # Styling (Dark Theme)
├─ script.js            # Data produk & Logic
├─ README.md            # Dokumentasi ini
└─ demo/                # Halaman demo template
   ├─ template-cleanshop.html
   ├─ template-portfoliopro.html
   └─ template-bizlanding.html
```

## Cara Menjalankan (VS Code)

1. Pastikan Anda sudah menginstal **Visual Studio Code**.
2. Install extension **Live Server** di VS Code.
3. Buka folder `shop-template` di VS Code.
4. Buka file `index.html`.
5. Klik kanan pada area editor dan pilih **"Open with Live Server"**.
6. Website akan terbuka di browser Anda secara otomatis.

## Cara Mengedit Konten

### 1. Mengubah/Menambah Produk
Buka file `script.js`. Cari variabel `products`. Format datanya adalah array of objects:

```javascript
{
    id: "unik-id",
    slug: "nama-file-demo", // tanpa .html
    title: "Judul Produk",
    desc: "Deskripsi singkat...",
    price: 100000,          // Harga asli (number)
    discountPercent: 20,    // Diskon dalam persen
    lynk: "https://...",    // Link checkout
    wa: "628123...",        // Nomor WA
    preview: "https://..."  // URL gambar
}
```

### 2. Mengubah Nomor WhatsApp
Di dalam object produk di `script.js`, ubah property `wa`.
**PENTING**: Gunakan format internasional tanpa tanda plus (+). Contoh: `6281234567890`.

### 3. Mengganti Gambar Preview
Ubah property `preview` di object produk. Anda bisa menggunakan URL gambar online atau path relative (misal: `./assets/gambar1.jpg`).

### 4. Membuat Halaman Demo Baru
Jika Anda menambah produk baru dengan slug `template-baru`, buat file baru di folder `demo/` dengan nama `template-baru.html`. Anda bisa copy-paste dari file demo yang sudah ada.

## Cara Deploy ke GitHub Pages

1. Buat repository baru di GitHub.
2. Push semua file dalam folder `shop-template` ke repository tersebut.
3. Buka tab **Settings** di repository GitHub Anda.
4. Pilih menu **Pages** di sidebar kiri.
5. Pada bagian **Branch**, pilih `main` (atau `master`) dan folder `/ (root)`.
6. Klik **Save**. Tunggu beberapa menit, link website Anda akan muncul.

## Catatan
- Website ini murni HTML/CSS/JS (Static).
- Bagian FAQ dan Panduan ada di file `index.html` dan bisa diedit langsung di sana.

---
© 2023 Ziywe.studio
