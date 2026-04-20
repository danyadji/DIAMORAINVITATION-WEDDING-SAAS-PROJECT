# 🎨 Konfigurasi Tailwind Theme — Palet "Jawa Klasik"

**Parent**: Template Undangan "Jawa Klasik"

## Deskripsi
Menambahkan konfigurasi tema khusus template Jawa Klasik ke `tailwind.config.js`. Konfigurasi ini ditambahkan sebagai **extend** agar tidak mengganggu konfigurasi dashboard yang sudah ada.

## Perubahan pada `tailwind.config.js`

### 1. Palet Warna Baru (`colors.jawa.*`)

```javascript
jawa: {
  sage: {
    50:  '#f6f7f4',
    100: '#e8ebe3',
    200: '#d1d8c7',
    300: '#b3bfa3',
    400: '#94a67e',
    500: '#7a8f65',   // Sage green utama
    600: '#5f7249',
    700: '#4b5a3a',
    800: '#3d4930',
    900: '#333d29',
    950: '#1a2014',
  },
  cream: {
    50:  '#fefdfb',
    100: '#fdf8f0',
    200: '#faf0de',   // Background utama
    300: '#f5e4c6',
    400: '#edd3a5',
    500: '#e3be82',
    600: '#d4a05a',
    700: '#b8834a',
    800: '#956a40',
    900: '#795737',
    950: '#412c1b',
  },
  gold: {
    50:  '#fdfaf3',
    100: '#f9f0d9',
    200: '#f2deb0',
    300: '#e9c77e',
    400: '#dfab4e',
    500: '#d4932f',   // Emas aksen
    600: '#be7624',
    700: '#9e5920',
    800: '#814721',
    900: '#6b3b1f',
    950: '#3d1d0e',
  },
  brown: {
    50:  '#faf6f2',
    100: '#f2ebe1',
    200: '#e4d4c2',
    300: '#d3b99c',
    400: '#c09a74',
    500: '#b38358',   // Cokelat warm
    600: '#a5714c',
    700: '#8a5b40',
    800: '#704b39',
    900: '#5c3f30',
    950: '#312019',
  },
  charcoal: {
    50:  '#f6f5f4',
    100: '#e6e4e1',
    200: '#cdc9c3',
    300: '#afa9a0',
    400: '#948c81',
    500: '#7f7567',
    600: '#6b6255',
    700: '#584f46',
    800: '#4a433c',
    900: '#3e3935',   // Teks utama
    950: '#2a2623',
  },
}
```

### 2. Font Families

```javascript
fontFamily: {
  sans:    ['Inter', 'system-ui', 'sans-serif'],         // Existing
  heading: ['Playfair Display', 'Georgia', 'serif'],     // Heading undangan
  body:    ['Cormorant Garamond', 'Georgia', 'serif'],   // Body undangan
  script:  ['Great Vibes', 'cursive'],                   // Aksen kaligrafi
}
```

### 3. Animasi Kustom

```javascript
animation: {
  // Existing
  'fade-in':    'fadeIn 0.2s ease-in-out',
  'slide-in':   'slideIn 0.3s ease-out',
  // New
  'fade-up':    'fadeUp 0.8s ease-out forwards',
  'fade-down':  'fadeDown 0.6s ease-out forwards',
  'scale-in':   'scaleIn 0.6s ease-out forwards',
  'float':      'float 6s ease-in-out infinite',
  'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
  'count-up':   'countUp 0.5s ease-out',
  'envelope-open': 'envelopeOpen 1.2s ease-out forwards',
}
```

### 4. Shadow & Gradient Utilities

```javascript
boxShadow: {
  'gold-glow':  '0 0 25px rgba(212, 147, 47, 0.2)',
  'card-jawa':  '0 4px 20px rgba(65, 44, 27, 0.08)',
},
backgroundImage: {
  'gradient-jawa': 'linear-gradient(180deg, #faf0de 0%, #f6f7f4 50%, #faf0de 100%)',
  'gradient-gold': 'linear-gradient(135deg, #d4932f 0%, #e9c77e 50%, #d4932f 100%)',
  'gradient-sage': 'linear-gradient(180deg, #e8ebe3 0%, #fdf8f0 100%)',
}
```

## Checklist
- [ ] Tambahkan palet warna `jawa.*` ke `tailwind.config.js` (extend)
- [ ] Tambahkan font families (`heading`, `body`, `script`)
- [ ] Tambahkan animasi & keyframes baru
- [ ] Tambahkan shadow & gradient utilities
- [ ] Import Google Fonts di `index.html`
- [ ] Verifikasi tidak ada konflik dengan konfigurasi dashboard existing
