import React from 'react';
import { motion } from 'framer-motion';

// Illustrations
import priaPhoto from '../assets/illustrations/PRIA-BACKGORUND-PELAMINAN.jpg';
import wanitaPhoto from '../assets/illustrations/WANITA-BACKGORUND-PELAMINAN.jpg';
import bgImage from '../assets/backgrounds/bg.jpg';
import paperBg from '../assets/illustrations/bg-surat-pambuka.png'; 
import doveImg from '../assets/illustrations/merpati-terbang.png';
import janurKiri from '../assets/illustrations/janur-kuning-kiri.png';
import janurKanan from '../assets/illustrations/janur-kuning-kanan.png';
import flowerLeft from '../assets/illustrations/bunga-kiri.png';
import flowerRight from '../assets/illustrations/bunga-kanan.png';
import igIcon from '../assets/illustrations/instagram-button.png';
import bgOrnamen2 from '../assets/illustrations/bg-ornamen-2.png';


export default function CoupleProfile({ groom, bride }) {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 1, ease: "easeOut" }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center z-20">
      {/* 
        The Mobile Frame Container:
        Using the "Stacked Sections" approach with a specific background image 
      */}
      <main className="relative w-full max-w-[500px] min-h-screen overflow-hidden mx-auto flex flex-col items-center">
        
        {/* Layer 1: Global Background is applied in JawaKlasikTemplate.jsx */}

        {/* Content Stack */}
        <div className="relative z-10 flex flex-col items-center w-full pb-32">
          
          {/* 1. Quote Section (On Mountain Background) - Fluid Spacing */}
          <div className="pt-20 min-[400px]:pt-28 pb-4 px-6 min-[400px]:px-10 flex flex-col items-center w-full">
            {/* Dove */}
            <motion.img 
              animate={{ 
                y: [0, -10, 0],
                x: [0, 5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              src={doveImg} 
              alt="Dove" 
              className="w-16 min-[400px]:w-20 h-auto -mt-10 min-[400px]:-mt-12 mb-1 min-[400px]:mb-8 drop-shadow-sm"
            />
 
            {/* Quote - Fluid Font */}
            <motion.div {...fadeInUp} className="text-center mt-8 mb-4 min-[400px]:mb-8 relative">
              <p className="font-isi italic text-[#6b492b] text-[11px] min-[375px]:text-[10px] leading-relaxed mb-4 min-[400px]:mb-6 px-2 min-[400px]:px-4" style={{ fontFamily: 'var(--font-isi)' }}>
                "Di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir"
                <br />
                <span className="font-bold text-[9px] min-[375px]:text-[10px] mt-4 block tracking-widest uppercase opacity-80">(QS. Ar-Rum: 21)</span>
              </p>
            </motion.div>
          </div>
 
          {/* 2. Paper Section (bg-ornamen-1 starts here) - Fluid Width */}
          <div className="relative w-full flex flex-col items-center px-4 min-[414px]:px-15 pt-8 pb-32">
            {/* Background Layer: Single bg-ornamen-2 (Stretched to fit content) */}
            <div 
              className="absolute inset-y-0 left-0 right-0 z-0 bg-no-repeat bg-[size:100%_100%] mx-6 min-[400px]:mx-10"
              style={{ backgroundImage: `url(${bgOrnamen2})` }}
            ></div>
            
            {/* Paper Edge Transition (Top) */}
            <div className="absolute -top-10 left-0 right-0 z-20 pointer-events-none mx-6 min-[400px]:mx-10">
              <img 
                src={paperBg} 
                alt="Transition Top" 
                className="w-full h-auto rotate-180 brightness-110"
              />
            </div>
 
            {/* Paper Edge Transition (Bottom) - Overlapping the end of the bg */}
            <div className="absolute bottom-6 left-0 right-0 z-20 pointer-events-none mx-6 min-[400px]:mx-10">
              <img 
                src={paperBg} 
                alt="Transition Bottom" 
                className="w-full h-auto brightness-110"
              />
            </div>
 
            {/* Greeting and Beyond */}
            <div className="relative z-10 flex flex-col items-center w-full px-2 pt-12 min-[400px]:pt-16">
 
          {/* Janur Arches Above Greeting - Fluid Positioning */}
          <div className="relative w-full flex justify-center mb-2">
            <motion.img 
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              src={janurKiri} 
              className="absolute left-[-24px] min-[414px]:left-[-68px] top-[-70px] w-40 min-[400px]:w-44 h-auto rotate-[-15deg]"
            />
            <motion.img 
              initial={{ x: 10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              src={janurKanan} 
              className="absolute right-[-24px] min-[414px]:right-[-68px] top-[-70px] w-40 min-[400px]:w-44 h-auto rotate-[15deg]"
            />
            
            <div className="text-center relative mt-8 z-20">
              <h2 className="font-nama text-xl min-[400px]:text-4xl text-[#6b492b] pt-1" style={{ fontFamily: 'var(--font-nama)' }}>
                 Assalamu’alaikum
              </h2>
            </div>
          </div>
 
          {/* Introductory Text - Fluid Font */}
          <motion.p {...fadeInUp} className="mx-8 font-isi text-[#6b492b] text-[10px] min-[375px]:text-[11px] text-center leading-relaxed mb-2 px-2 min-[400px]:px-4" style={{ fontFamily: 'var(--font-isi)' }}>
            Dengan memohon Rahmat dan Ridho Allah SWT Kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami
          </motion.p>
 
          {/* Bride Profile - Fluid Sizing */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex flex-col items-center mb-2 w-full relative -mt-1">
            <img src={flowerLeft} className="absolute left-[-10%] min-[400px]:left-[-20px] bottom-22 w-24 min-[400px]:w-36 h-auto opacity-80 pointer-events-none" alt="deco" />
            
            <div className="w-[80%] max-w-[160px] aspect-[4/5] rounded-[100%] mt-4 overflow-hidden border-4 border-white shadow-2xl relative z-10 bg-white">
              <img src={wanitaPhoto} alt="Bride" className="w-full h-full object-cover" />
            </div>
            
            <div className="mt-2 min-[400px]:mt-4 text-center px-2 min-[400px]:px-4">
              <h3 className="text-4xl mt-4 min-[400px]:text-4xl text-[#6b492b] font-nama mb-2" style={{ fontFamily: 'var(--font-nama)' }}>
                {bride?.nickname || 'Fifi'}
              </h3>
              <h4 className="font-judul font-bold tracking-widest text-[10px] min-[375px]:text-[12px] text-[#4d3a30] uppercase leading-relaxed" style={{ fontFamily: 'var(--font-judul)' }}>
                {bride?.fullName || 'MAGFIROH NUR PUSPITA'}
              </h4>
              <p className="font-isi text-[10px] min-[375px]:text-[11px] text-[#6b492b]/70 italic mb-4 px-2" style={{ fontFamily: 'var(--font-isi)' }}>
                Putri dari <br/> {bride?.parents || 'Bapak dan Ibu'}
              </p>
              <a href="#" className="inline-block transition-transform hover:scale-110">
                <img src={igIcon} alt="Instagram" className="w-7 min-[400px]:w-8 h-auto" />
              </a>
            </div>
          </motion.div>
 
          {/* Divider */}
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-5xl min-[400px]:text-6xl text-[#6b492b] font-judul my-2 opacity-20 px-8"
          >
            &
          </motion.div>
 
          {/* Groom Profile - Fluid Sizing */}
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="flex flex-col items-center mb-2 w-full relative -mt-1">
            <img src={flowerRight} className="absolute right-[-10%] min-[400px]:right-[-20px] bottom-21 w-28 min-[400px]:w-36 h-auto opacity-80 pointer-events-none" alt="deco" />
            
            <div className="w-[80%] max-w-[160px] aspect-[4/5] rounded-[100%] mt-4 overflow-hidden border-4 border-white shadow-2xl relative z-10 bg-white">
              <img src={priaPhoto} alt="Groom" className="w-full h-full object-cover" />
            </div>
            
            <div className="mt-2 min-[400px]:mt-4 text-center px-2 min-[400px]:px-4">
              <h3 className="text-4xl mt-4 min-[400px]:text-4xl text-[#6b492b] font-nama mb-2" style={{ fontFamily: 'var(--font-nama)' }}>
                {groom?.nickname || 'Danu'}
              </h3>
              <h4 className="font-judul font-bold tracking-widest text-[10px] min-[375px]:text-[12px] text-[#4d3a30] uppercase leading-relaxed" style={{ fontFamily: 'var(--font-judul)' }}>
                {groom?.fullName || 'MUHAMAD ALDANU RAHMANSYAH'}
              </h4>
              <p className="font-isi text-[10px] min-[375px]:text-[11px] text-[#6b492b]/70 italic mb-4 px-2" style={{ fontFamily: 'var(--font-isi)' }}>
                Putra dari <br/> {groom?.parents || 'Bapak dan Ibu'}
              </p>
              <a href="#" className="inline-block transition-transform hover:scale-110">
                <img src={igIcon} alt="Instagram" className="w-7 min-[400px]:w-8 h-auto" />
              </a>
            </div>
          </motion.div>
 
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
