# 🎁 Implementasi Gallery, Wedding Gift, RSVP & Footer

**Parent**: Template Undangan "Jawa Klasik"

## Deskripsi
Implementasi section bawah undangan: Gallery foto, Wedding Gift (nomor rekening), RSVP form + daftar ucapan, dan Footer penutup.

## Komponen yang Diimplementasi

### 1. `GallerySection.jsx`
**Fungsi**: Grid foto prewedding (2-6 foto).
- Layout: Grid 2 kolom di mobile, 3 kolom di desktop
- Klik foto → lightbox overlay (gambar fullscreen + tombol close)
- Lazy loading gambar (`loading="lazy"`)
- Transisi hover: scale-up + shadow

**Props**:
```typescript
{
  photos: string[]; // Array of photo URLs
}
```

**State**:
```typescript
{
  selectedPhoto: number | null; // Index foto yang di-klik untuk lightbox
}
```

---

### 2. `WeddingGift.jsx`
**Fungsi**: Menampilkan nomor rekening bank untuk transfer hadiah.
- Setiap item menampilkan:
  - Nama bank
  - Nomor rekening (monospace font)
  - Nama pemilik rekening
  - Tombol "Salin" (menggunakan `CopyButton`)
- Desain kartu dengan border gold subtle
- Icon gift sebagai header section

**Props**:
```typescript
{
  bankAccounts: Array<{
    bankName: string;
    accountNumber: string;
    accountHolder: string;
    bankLogo?: string;
  }>
}
```

**State**: Tidak ada (delegasi ke `CopyButton` untuk clipboard state)

---

### 3. `RSVPSection.jsx`
**Fungsi**: Form RSVP interaktif + daftar ucapan dari tamu lain.

#### Form RSVP
- **Field**:
  - Nama tamu (pre-filled dari query param `?to=`, editable)
  - Kehadiran: radio button **Hadir** / **Tidak Hadir**
  - Jumlah tamu: number input (1-5, muncul hanya jika "Hadir")
  - Ucapan & Doa: textarea
- **Submit**: POST ke `/api/invitation/{slug}/rsvp`
- **Feedback**: Tampilkan pesan sukses setelah submit

#### Daftar Ucapan
- Fetch dari GET `/api/invitation/{slug}/wishes`
- Tampilkan sebagai list: nama, ucapan, badge hadir/tidak hadir
- Scroll area dengan max-height

**Props**:
```typescript
{
  invitationId: number;
  guestName: string;
}
```

**State**:
```typescript
{
  formData: {
    guestName: string;
    attendance: 'hadir' | 'tidak_hadir';
    guestCount: number;
    message: string;
  };
  isSubmitting: boolean;
  isSubmitted: boolean;
  wishes: WishesEntry[];
  errors: Record<string, string>;
}
```

**Validasi**:
- `guestName`: required, min 2 karakter
- `attendance`: required
- `guestCount`: required jika hadir, 1-5
- `message`: optional, max 500 karakter

---

### 4. `FooterSection.jsx`
**Fungsi**: Penutup undangan.
- Menampilkan:
  - Ucapan terima kasih dari mempelai
  - Nama kedua mempelai
  - Tanggal pernikahan (recap)
  - "Powered by Diamora Invitation" + link
- Ornamen bunga sebagai dekorasi akhir

**Props**:
```typescript
{
  groomNickname: string;
  brideNickname: string;
  eventDate: string;
}
```

## Checklist
- [ ] Implementasi `GallerySection.jsx` (grid + lightbox)
- [ ] Implementasi `WeddingGift.jsx` (kartu rekening + CopyButton)
- [ ] Implementasi `RSVPSection.jsx` — form RSVP dengan validasi
- [ ] Implementasi `RSVPSection.jsx` — fetch & tampil daftar ucapan
- [ ] Implementasi `FooterSection.jsx`
- [ ] Integrasi API: POST RSVP, GET wishes
- [ ] Testing flow: isi form → submit → lihat ucapan muncul
- [ ] Testing `CopyButton` clipboard functionality
- [ ] Integrasi `ScrollReveal` pada setiap section
- [ ] End-to-end testing keseluruhan template (cover → footer)
