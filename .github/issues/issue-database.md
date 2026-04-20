# 🗄️ Migrasi Database — Perluasan Skema `invitations`

**Parent**: Template Undangan "Jawa Klasik"

## Deskripsi
Database saat ini menyimpan field minimal pada tabel `invitations` (`groom_name`, `bride_name`, `event_date`, `event_location`). Template Jawa Klasik membutuhkan data yang jauh lebih lengkap. Issue ini menangani perluasan skema database.

## Skema Saat Ini

```
invitations
├── id
├── user_id (FK → users)
├── title (nullable)
├── groom_name (nullable)
├── bride_name (nullable)
├── event_date (datetime, nullable)
├── event_location (text, nullable)
├── slug (unique, nullable)
└── timestamps
```

## Opsi Implementasi

### Opsi A: Kolom JSON (Direkomendasikan untuk MVP) ✅

Tambahkan kolom `template_data` (JSON) yang menyimpan seluruh data spesifik template:

```php
// Migration: add_template_data_to_invitations_table.php
Schema::table('invitations', function (Blueprint $table) {
    $table->string('template_code')->default('jawa-klasik')->after('slug');
    $table->json('template_data')->nullable()->after('template_code');
});
```

Struktur JSON `template_data`:
```json
{
  "groom": {
    "fullName": "Raden Mas Bambang Suryono, S.E.",
    "nickname": "Bambang",
    "photo": "https://...",
    "parentFather": "Bpk. Suryadi Wibowo",
    "parentMother": "Ibu Siti Rahayu",
    "childOrder": "Putra kedua dari",
    "instagram": "@bambang.s"
  },
  "bride": {
    "fullName": "Dyah Ayu Puspitasari, S.Pd.",
    "nickname": "Ayu",
    "photo": "https://...",
    "parentFather": "Bpk. Hadi Sumarno",
    "parentMother": "Ibu Endang Lestari",
    "childOrder": "Putri pertama dari",
    "instagram": "@ayu.p"
  },
  "events": [
    {
      "type": "akad",
      "title": "Akad Nikah",
      "date": "Minggu, 15 Juni 2026",
      "startTime": "08:00",
      "endTime": "10:00",
      "venue": "Masjid Al-Ikhlas",
      "address": "Jl. Malioboro No. 50, Yogyakarta",
      "mapsUrl": "https://maps.google.com/..."
    },
    {
      "type": "resepsi",
      "title": "Resepsi Pernikahan",
      "date": "Minggu, 15 Juni 2026",
      "startTime": "11:00",
      "endTime": "selesai",
      "venue": "Gedung Sasono Utomo",
      "address": "Jl. Jend. Sudirman No. 123, Yogyakarta",
      "mapsUrl": "https://maps.google.com/..."
    }
  ],
  "bankAccounts": [
    {
      "bankName": "Bank Central Asia (BCA)",
      "accountNumber": "1234567890",
      "accountHolder": "Bambang Suryono"
    }
  ],
  "gallery": ["url1.webp", "url2.webp"],
  "quote": {
    "text": "Dan di antara tanda-tanda kekuasaan-Nya ialah...",
    "source": "QS. Ar-Rum: 21"
  },
  "musicUrl": "https://.../gamelan.mp3"
}
```

### Opsi B: Tabel Relasional (Untuk scalability jangka panjang)

Buat tabel terpisah:
- `couple_profiles` — Data mempelai pria & wanita
- `invitation_events` — Detail acara (akad, resepsi)
- `bank_accounts` — Nomor rekening
- `invitation_galleries` — Foto galeri
- `invitation_wishes` — Ucapan & doa dari tamu

## Tabel Baru: `invitation_wishes`

Diperlukan untuk fitur RSVP + ucapan:

```php
Schema::create('invitation_wishes', function (Blueprint $table) {
    $table->id();
    $table->foreignId('invitation_id')->constrained()->onDelete('cascade');
    $table->string('guest_name');
    $table->enum('attendance', ['hadir', 'tidak_hadir'])->default('hadir');
    $table->integer('guest_count')->default(1);
    $table->text('message')->nullable();
    $table->timestamps();
});
```

## API Endpoint yang Diperlukan

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/invitation/{slug}` | Ambil data undangan lengkap (publik, tanpa auth) |
| POST | `/api/invitation/{slug}/rsvp` | Submit RSVP & ucapan |
| GET | `/api/invitation/{slug}/wishes` | Ambil daftar ucapan (paginated) |

## Checklist
- [ ] Buat migration: tambah kolom `template_code` & `template_data` ke `invitations`
- [ ] Buat migration: tabel `invitation_wishes`
- [ ] Update model `Invitation` — tambah cast JSON & relasi wishes
- [ ] Buat model `InvitationWish`
- [ ] Buat controller `PublicInvitationController`
- [ ] Implementasi endpoint GET `/api/invitation/{slug}`
- [ ] Implementasi endpoint POST `/api/invitation/{slug}/rsvp`
- [ ] Implementasi endpoint GET `/api/invitation/{slug}/wishes`
- [ ] Buat seeder dengan data contoh untuk testing
