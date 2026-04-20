# 🎨 Persiapan Aset Visual & Font (Slicing List)

**Parent**: Template Undangan "Jawa Klasik"

## Deskripsi
Menyiapkan dan mengorganisir semua aset visual yang diperlukan untuk template Jawa Klasik. Aset disimpan di `src/features/invitations/templates/jawa-klasik/assets/`.

## Konvensi Penamaan
Format: `[kategori]-[deskripsi]-[posisi/varian].ext`
Contoh: `ornament-floral-top-left.svg`, `bg-hero-pattern.webp`

## Struktur Folder

```
assets/
├── ornaments/          # Elemen dekoratif (SVG)
├── illustrations/      # Ilustrasi utama (SVG/WebP)
├── backgrounds/        # Latar belakang section (WebP)
├── icons/              # Ikon kecil untuk UI (SVG)
└── fonts/              # Font lokal jika dibutuhkan (WOFF2)
```

## Checklist Aset

### Ornamen Bunga (SVG)
- [ ] `ornament-floral-corner-top-left.svg` — Sudut kiri atas (mirror untuk kanan)
- [ ] `ornament-floral-corner-bottom-left.svg` — Sudut kiri bawah (mirror untuk kanan)
- [ ] `ornament-floral-divider.svg` — Pembatas antar section (horizontal)
- [ ] `ornament-floral-frame.svg` — Bingkai untuk foto mempelai
- [ ] `ornament-floral-small.svg` — Ornamen kecil untuk aksen teks

### Ilustrasi Jawa (SVG)
- [ ] `illustration-gunungan.svg` — Gunungan wayang (elemen hero utama)
- [ ] `illustration-wayang-couple.svg` — Pasangan wayang (opsional, dekoratif)
- [ ] `illustration-batik-pattern.svg` — Pattern batik untuk background subtle

### Background Textures (WebP, ≤150KB masing-masing)
- [ ] `bg-hero-texture.webp` — Tekstur kertas/kain batik untuk hero
- [ ] `bg-section-cream.webp` — Latar krem halus untuk section genap
- [ ] `bg-section-sage.webp` — Latar sage muted untuk section ganjil
- [ ] `bg-paper-texture.webp` — Tekstur kertas tua untuk nuansa vintage

### Ikon UI (SVG)
- [ ] `icon-calendar.svg` — Ikon kalender (detail acara)
- [ ] `icon-clock.svg` — Ikon jam (waktu acara)
- [ ] `icon-map-pin.svg` — Ikon lokasi
- [ ] `icon-copy.svg` — Ikon salin (nomor rekening)
- [ ] `icon-check.svg` — Ikon centang (notifikasi berhasil)
- [ ] `icon-gift.svg` — Ikon hadiah (wedding gift)
- [ ] `icon-envelope.svg` — Ikon amplop (cover)
- [ ] `icon-music-on.svg` — Toggle musik on
- [ ] `icon-music-off.svg` — Toggle musik off

### Audio
- [ ] `audio-bgm.mp3` — Background music gamelan/instrumen Jawa (≤2MB)

## Font (Google Fonts)

| Font | Penggunaan |
|------|------------|
| **Playfair Display** | Heading utama, nama mempelai |
| **Cormorant Garamond** | Body text, deskripsi |
| **Great Vibes** | Aksen script/kaligrafi ("Bismillah", "The Wedding Of") |

Import via `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet">
```

## Rekomendasi Format
- **SVG** → ornamen, ikon, ilustrasi vektor (scalable, kecil, CSS-styleable)
- **WebP** → foto & tekstur bitmap (25-35% lebih kecil dari JPEG)
- **WOFF2** → font lokal kustom (kompresi terbaik untuk web)
- **MP3** → audio background (kompatibilitas browser terluas)
