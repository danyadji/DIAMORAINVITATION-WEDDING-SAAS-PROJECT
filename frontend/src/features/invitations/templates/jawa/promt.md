Act as a Pixel-Perfect Senior UI Engineer (React, Tailwind, Framer Motion).

Tolong buatkan komponen `CoupleSection.jsx` untuk tema 'Jawa Klasik'. Bagian ini harus memiliki struktur 'Wadah Tetap' (Fixed Container) agar desainnya rapi dan tidak berantakan di berbagai ukuran layar HP.

## Instruksi Perakitan (Fixed Mobile Frame):

### 1. Struktur Wrapper Utama (Dekstop):
- Buat div paling luar untuk section ini. Class Tailwind: `w-full min-h-screen flex items-center justify-center bg-[#f9f9f9]`. (Gunakan warna krem solid desain di sini untuk area di luar frame).

### 2. Wadah Profil Kedua Mempelai (The Fixed Frame):
- Di dalam wrapper utama, buat satu kontainer utama untuk profil (Fifi & Danu).
- **UKURAN TETAP:** Terapkan class Tailwind `w-full max-w-[480px] h-[750px] relative overflow-hidden shadow-2xl`. (Angka 480px adalah perkiraan lebar frame vertikal pada desainmu).
- **Background Ornamen:** Terapkan aset `bg-ornamen-2` sebagai background kontainer ini menggunakan inline style atau arbitrary value Tailwind. Class: `bg-[url('/path/to/bg-ornamen-2.jpg')] bg-cover bg-center bg-no-repeat`.
- Masukkan seluruh konten profil ke DALAM kontainer utama ini.

### 3. Konten Fluid (Mempela & Teks):
- JANGAN gunakan ukuran pixel tetap untuk elemen di dalam frame ini. Gunakan ukuran relatif (%) agar mereka "aman" di dalam frame.
- **Ornamen Atas & Bawah:** Letakkan aset ornamen bunga/sobekan kertas menggunakan `absolute` di pojok-pojok frame.
- **Profil Pria (Danu):** Gunakan class flexbox `flex flex-col items-center`. Pastikan foto oval menggunakan class `w-[40%] md:w-[45%] h-auto rounded-full`.
- **Profil Wanita (Fifi):** Gunakan struktur yang sama dengan profil pria. Gunakan elemen `span` dengan class `w-full text-center` untuk teks "&" atau ornamen pemisah.

### 4. Sinkronisasi Aset & Tipografi:
- **Teks Nama:** Gunakan variabel CSS `--font-nama` (script), ukuran responsif (text-4xl hingga 5xl), text-[#6b492b].
- **Teks Detail:** Gunakan font `--font-isi`, text-center, warna cokelat.

### 5. Animasi (Framer Motion):
- Terapkan animasi fade-in up soft pada kontainer utama (`max-w-[480px]`) saat muncul di layar.
- Berikan efek staggering children agar konten di dalam frame muncul satu per satu.

Berikan kode React fungsional yang bersih dengan penerapan prinsip "Fluid Mobile Design" di dalam wadah tetap di atas.