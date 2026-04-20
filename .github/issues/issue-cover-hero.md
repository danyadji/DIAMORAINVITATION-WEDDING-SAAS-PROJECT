# ✨ Implementasi Cover, Hero & Shared Components

**Parent**: Template Undangan "Jawa Klasik"

## Deskripsi
Implementasi komponen-komponen pembuka undangan: Cover (amplop digital), Hero section, serta shared/utility components yang dipakai di seluruh template.

## Komponen yang Diimplementasi

### 1. `CoverSection.jsx`
**Fungsi**: Layar pembuka full-screen berbentuk amplop digital.
- Menampilkan:
  - "Kepada Yth." + nama tamu (dari query param `?to=`)
  - Nama kedua mempelai (singkat)
  - Tombol "Buka Undangan"
- Behavior:
  - Full-screen overlay, scroll dikunci (`overflow: hidden` pada body)
  - Animasi buka amplop saat tombol diklik
  - Memanggil `onOpen()` callback → trigger parent state `isOpen = true`
  - Memulai autoplay BGM setelah user interaction (Chrome policy)

**Props**:
```typescript
{
  guestName: string;
  groomNickname: string;
  brideNickname: string;
  onOpen: () => void;
}
```

**State**: Tidak ada local state (dikontrol parent)

---

### 2. `HeroSection.jsx`
**Fungsi**: Section pertama setelah cover dibuka — visual impact utama.
- Menampilkan:
  - Background tekstur batik/kertas tua
  - Ilustrasi gunungan wayang (center, scaled)
  - "The Wedding Of" (font script)
  - Nama mempelai pria & wanita (font heading besar)
  - Tanggal pernikahan
  - Ornamen bunga melayang di sudut-sudut

**Props**:
```typescript
{
  groomNickname: string;
  brideNickname: string;
  eventDate: string; // ISO 8601
}
```

---

### 3. Shared Components

#### `ScrollReveal.jsx`
Wrapper component untuk scroll-triggered animation menggunakan `IntersectionObserver`.

```typescript
Props: {
  children: ReactNode;
  delay?: number;       // default: 0
  duration?: number;    // default: 800
  threshold?: number;   // default: 0.1
  className?: string;
}
State: isVisible (boolean, default false)
```

#### `SectionDivider.jsx`
Pembatas visual antar section, menampilkan ornamen SVG.

```typescript
Props: {
  variant: 'floral' | 'simple' | 'gold';
}
```

#### `FloatingOrnament.jsx`
Elemen dekoratif yang melayang dengan animasi infinite.

```typescript
Props: {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  asset: string; // path ke SVG
  className?: string;
}
```

#### `OrnamentFrame.jsx`
Bingkai ornamen reusable untuk foto dan kartu.

```typescript
Props: {
  children: ReactNode;
  variant: 'circle' | 'rectangle';
  size?: 'sm' | 'md' | 'lg';
}
```

#### `MusicToggle.jsx`
Tombol fixed di pojok kanan bawah untuk toggle BGM.

```typescript
Props: {
  musicUrl: string;
}
State: {
  isPlaying: boolean; // default false
  audioRef: useRef<HTMLAudioElement>;
}
```

#### `CopyButton.jsx`
Tombol salin ke clipboard dengan feedback visual.

```typescript
Props: {
  text: string;        // teks yang akan disalin
  label?: string;      // default "Salin"
}
State: {
  isCopied: boolean;   // default false (reset setelah 2 detik)
}
```

## Checklist
- [ ] Implementasi `ScrollReveal.jsx`
- [ ] Implementasi `SectionDivider.jsx`
- [ ] Implementasi `FloatingOrnament.jsx`
- [ ] Implementasi `OrnamentFrame.jsx`
- [ ] Implementasi `MusicToggle.jsx`
- [ ] Implementasi `CopyButton.jsx`
- [ ] Implementasi `CoverSection.jsx`
- [ ] Implementasi `HeroSection.jsx`
- [ ] Testing cover → buka → hero flow di mobile viewport
