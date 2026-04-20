# 🏛️ Blueprint: Template Undangan "Jawa Klasik"

## Overview
Implementasi template undangan pernikahan digital bertema **Jawa Klasik** sebagai template pertama pada platform SaaS Wedding Builder (Diamora Invitation). Template ini berkonsep single-page panjang, dioptimalkan untuk perangkat mobile, dan dibangun menggunakan React, Vite, dan Tailwind CSS.

## Konsep Desain
- **Nuansa Warna**: Earth tone — hijau sage, krem/ivory, emas, cokelat warm
- **Ornamen**: Bunga, ilustrasi gunungan wayang, pattern batik
- **Tipografi**: Serif elegan (Playfair Display, Cormorant Garamond) + script kaligrafi (Great Vibes)
- **Fitur Utama**: Cover Amplop → Hero → Profil Mempelai → Detail Acara → Countdown → Gallery → Wedding Gift → RSVP → Footer

## Arsitektur Komponen

```
JawaKlasikTemplate (Root)
├── CoverSection          → Layar pembuka amplop digital
├── MusicToggle           → Toggle BGM (fixed position)
├── HeroSection           → Nama mempelai + gunungan + ornamen
├── QuoteSection          → Ayat / kutipan pernikahan
├── CoupleProfile         → Profil mempelai pria & wanita
├── EventDetails          → Akad Nikah & Resepsi
├── CountdownTimer        → Hitung mundur ke hari-H
├── GallerySection        → Foto prewedding
├── WeddingGift           → Nomor rekening bank
├── RSVPSection           → Form RSVP + daftar ucapan
└── FooterSection         → Penutup & kredit
```

## Sub-Issues (Urutan Implementasi)

- [ ] #3 — [ASSET] Persiapan Aset Visual & Font (Slicing List)
- [ ] #4 — [DESIGN-SYSTEM] Konfigurasi Tailwind Theme — Palet Jawa Klasik
- [ ] #5 — [BACKEND] Migrasi Database — Perluasan Skema Invitations
- [ ] #6 — [FRONTEND] Setup Folder Structure & Routing
- [ ] #7 — [FRONTEND] Implementasi Cover, Hero & Shared Components
- [ ] #8 — [FRONTEND] Implementasi Couple Profile, Event Details & Countdown
- [ ] #9 — [FRONTEND] Implementasi Gallery, Wedding Gift, RSVP & Footer

## Tech Stack
- **Frontend**: React 19 + Vite 7 + Tailwind CSS 3.4
- **Backend**: Laravel (REST API)
- **Data Flow**: API → `JawaKlasikTemplate` (root) → props ke child components
- **State**: `useState` untuk countdown, form RSVP, music toggle, clipboard
