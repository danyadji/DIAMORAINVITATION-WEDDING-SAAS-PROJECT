# 👫 Implementasi Couple Profile, Event Details & Countdown

**Parent**: Template Undangan "Jawa Klasik"

## Deskripsi
Implementasi section tengah undangan: Quote pembuka, profil mempelai, detail acara (Akad & Resepsi), dan countdown timer.

## Komponen yang Diimplementasi

### 1. `QuoteSection.jsx`
**Fungsi**: Menampilkan ayat Al-Quran atau kutipan poitis tentang pernikahan.
- Desain minimalis dengan tipografi serif elegan
- Ornamen kecil di atas/bawah kutipan
- `ScrollReveal` wrapper

**Props**:
```typescript
{
  quote: {
    text: string;    // "Dan di antara tanda-tanda kekuasaan-Nya..."
    source: string;  // "QS. Ar-Rum: 21"
  }
}
```

---

### 2. `CoupleProfile.jsx`
**Fungsi**: Profil masing-masing mempelai pria & wanita.
- Menampilkan per mempelai:
  - Foto dalam `OrnamentFrame` (bingkai ornamen bunga)
  - Nama lengkap (font heading)
  - "Putra/Putri ke-X dari" (font body)
  - Nama orang tua (Bapak & Ibu)
  - Link Instagram (opsional)
- Layout: **Side-by-side** di desktop, **stacked** (pria atas, wanita bawah) di mobile
- "&" atau ornamen kecil sebagai pemisah

**Props**:
```typescript
{
  groom: {
    fullName: string;
    nickname: string;
    photo: string;
    parentFather: string;
    parentMother: string;
    childOrder: string;
    instagram?: string;
  };
  bride: {
    fullName: string;
    nickname: string;
    photo: string;
    parentFather: string;
    parentMother: string;
    childOrder: string;
    instagram?: string;
  };
}
```

---

### 3. `EventDetails.jsx`
**Fungsi**: Menampilkan dua kartu acara — Akad Nikah & Resepsi.
- Setiap kartu memuat:
  - Judul acara (Akad Nikah / Resepsi Pernikahan)
  - 📅 Tanggal (format: Minggu, 15 Juni 2026)
  - 🕐 Waktu (format: 08:00 - 10:00 WIB)
  - 📍 Nama venue & alamat
  - Tombol "Lihat Lokasi" → buka Google Maps
- Layout: Kartu stacked vertikal di mobile, side-by-side di tablet+
- Menggunakan ikon SVG dari `assets/icons/`

**Props**:
```typescript
{
  events: Array<{
    type: 'akad' | 'resepsi';
    title: string;
    date: string;
    startTime: string;
    endTime: string;
    venue: string;
    address: string;
    mapsUrl: string;
  }>
}
```

---

### 4. `CountdownTimer.jsx`
**Fungsi**: Hitung mundur real-time ke tanggal acara.
- Menampilkan 4 unit: **Hari**, **Jam**, **Menit**, **Detik**
- Desain flip-card / kotak dengan background gold/sage
- Update tiap detik via `setInterval`
- Menampilkan "Hari Bahagia Telah Tiba! 🎉" jika waktu sudah habis
- Cleanup interval di `useEffect` return

**Props**:
```typescript
{
  targetDate: string; // ISO 8601: "2026-06-15T08:00:00+07:00"
}
```

**State**:
```typescript
{
  timeLeft: { days: number, hours: number, minutes: number, seconds: number };
  isExpired: boolean;
}
```

**Logic**:
```javascript
useEffect(() => {
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const diff = target - now;

    if (diff <= 0) {
      setIsExpired(true);
      clearInterval(timer);
      return;
    }

    setTimeLeft({
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    });
  }, 1000);

  return () => clearInterval(timer);
}, [targetDate]);
```

## Checklist
- [ ] Implementasi `QuoteSection.jsx`
- [ ] Implementasi `CoupleProfile.jsx` (responsive layout)
- [ ] Implementasi `EventDetails.jsx` (2 kartu: Akad + Resepsi)
- [ ] Implementasi `CountdownTimer.jsx` (real-time + expired state)
- [ ] Testing responsivitas di mobile (375px) dan tablet (768px)
- [ ] Integrasi `ScrollReveal` pada setiap section
- [ ] Integrasi `SectionDivider` di antara sections
