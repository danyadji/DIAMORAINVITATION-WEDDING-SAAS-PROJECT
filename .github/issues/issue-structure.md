# 📁 Setup Folder Structure & Routing

**Parent**: Template Undangan "Jawa Klasik"

## Deskripsi
Membuat struktur folder untuk template Jawa Klasik dan menambahkan route publik untuk menampilkan undangan kepada tamu.

## Struktur Folder yang Dibuat

```
src/features/invitations/templates/jawa-klasik/
├── JawaKlasikTemplate.jsx        # Root component (orchestrator)
├── jawa-klasik.css                # CSS khusus template ini
├── sections/
│   ├── CoverSection.jsx
│   ├── HeroSection.jsx
│   ├── QuoteSection.jsx
│   ├── CoupleProfile.jsx
│   ├── EventDetails.jsx
│   ├── CountdownTimer.jsx
│   ├── GallerySection.jsx
│   ├── WeddingGift.jsx
│   ├── RSVPSection.jsx
│   └── FooterSection.jsx
├── components/
│   ├── OrnamentFrame.jsx
│   ├── SectionDivider.jsx
│   ├── FloatingOrnament.jsx
│   ├── MusicToggle.jsx
│   ├── CopyButton.jsx
│   └── ScrollReveal.jsx
└── assets/
    ├── ornaments/
    ├── illustrations/
    ├── backgrounds/
    └── icons/
```

## Routing

Tambahkan route **publik** (tanpa `ProtectedRoute`) di `routes/index.jsx`:

```jsx
import JawaKlasikTemplate from '../features/invitations/templates/jawa-klasik/JawaKlasikTemplate';

// Dalam <Routes>:
<Route path="/invitation/:slug" element={<JawaKlasikTemplate />} />
```

> ⚠️ Route ini **tidak memerlukan autentikasi** karena undangan ditampilkan kepada tamu secara publik. Slug digunakan sebagai identifier unik.

## Root Component Skeleton

```jsx
// JawaKlasikTemplate.jsx
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import api from '../../../../services/api';

export default function JawaKlasikTemplate() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get('to') || 'Tamu Undangan';

  const [invitationData, setInvitationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchInvitation() {
      try {
        const response = await api.get(`/invitations/${slug}`);
        setInvitationData(response.data);
      } catch (error) {
        console.error('Failed to fetch invitation:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchInvitation();
  }, [slug]);

  if (isLoading) return <LoadingScreen />;
  if (!invitationData) return <NotFoundScreen />;

  return (
    <div className="relative min-h-screen bg-jawa-cream-200 font-body">
      {!isOpen && (
        <CoverSection
          guestName={guestName}
          groomNickname={invitationData.groom.nickname}
          brideNickname={invitationData.bride.nickname}
          onOpen={() => setIsOpen(true)}
        />
      )}
      {isOpen && (
        <>
          <MusicToggle musicUrl={invitationData.musicUrl} />
          <HeroSection ... />
          {/* ... section lainnya ... */}
          <FooterSection ... />
        </>
      )}
    </div>
  );
}
```

## Data Flow

```
URL: /invitation/bambang-ayu?to=Budi%20Santoso
                    │              │
                    ▼              ▼
              useParams()    useSearchParams()
              slug="bambang-ayu"  guestName="Budi Santoso"
                    │
                    ▼
          API GET /api/invitation/bambang-ayu
                    │
                    ▼
          setInvitationData(response.data)
                    │
                    ▼
          Pass as props to child components
```

## Checklist
- [ ] Buat folder `src/features/invitations/templates/jawa-klasik/`
- [ ] Buat subfolder: `sections/`, `components/`, `assets/`
- [ ] Buat `JawaKlasikTemplate.jsx` (root component skeleton)
- [ ] Buat `jawa-klasik.css` (placeholder)
- [ ] Tambahkan route `/invitation/:slug` di `routes/index.jsx`
- [ ] Update `features/invitations/index.ts` untuk export template
