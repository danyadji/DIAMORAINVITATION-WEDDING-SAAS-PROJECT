import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import './jawa-klasik.css';

// Layout sections
import HeroSection from './sections/HeroSection';
import CoverSection from './sections/CoverSection';
import QuoteSection from './sections/QuoteSection';
import CoupleProfile from './sections/CoupleProfile';
import EventDetails from './sections/EventDetails';
import CountdownTimer from './sections/CountdownTimer';
import GallerySection from './sections/GallerySection';
import WeddingGift from './sections/WeddingGift';
import RSVPSection from './sections/RSVPSection';
import FooterSection from './sections/FooterSection';

// Shared components
import MusicToggle from './sections/components/MusicToggle';

export default function JawaKlasikTemplate() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get('to') || 'Tamu Undangan';

  const [invitationData, setInvitationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Simulated fetch
    const timer = setTimeout(() => {
      setInvitationData({
        id: 1,
        groom: { nickname: 'Fifi' },
        bride: { nickname: 'Danu' },
        eventDate: '2026-08-24T00:00:00'
      });
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [slug]);

  if (isLoading) return <div className="flex items-center justify-center min-h-screen font-body text-jawa-charcoal">Unduhan sedang dimuat...</div>;
  if (!invitationData) return <div className="flex items-center justify-center min-h-screen font-body">Undangan tidak ditemukan.</div>;

  return (
    <div className="relative min-h-screen bg-jawa-parchment font-body overflow-x-hidden selection:bg-jawa-clay selection:text-white">
      {!isOpen && (
        <CoverSection
          guestName={guestName}
          groomNickname={invitationData.groom.nickname}
          brideNickname={invitationData.bride.nickname}
          onOpen={() => setIsOpen(true)}
        />
      )}

      {isOpen && (
        <div className="animate-fade-in">
          <MusicToggle musicUrl={invitationData.musicUrl} />
          
          <HeroSection
            groomName={invitationData.groom.nickname}
            brideName={invitationData.bride.nickname}
            guestName={guestName}
            eventDate="24.08.2024"
          />
          
          <QuoteSection />
          
          <CoupleProfile
            groom={invitationData.groom}
            bride={invitationData.bride}
          />
          
          <EventDetails events={invitationData.events || []} />
          
          <CountdownTimer targetDate={invitationData.eventDate} />
          
          <GallerySection photos={invitationData.gallery || []} />
          
          <WeddingGift bankAccounts={invitationData.bankAccounts || []} />
          
          <RSVPSection
            invitationId={invitationData.id}
            guestName={guestName}
          />
          
          <FooterSection
            groomNickname={invitationData.groom.nickname}
            brideNickname={invitationData.bride.nickname}
            eventDate={invitationData.eventDate}
          />
        </div>
      )}
    </div>
  );
}
