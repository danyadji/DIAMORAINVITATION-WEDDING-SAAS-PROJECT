import React, { useMemo } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';

const portfolios = [
  // Motion 3D
  {
    id: 1,
    title: 'Modern 3D Gold Ribbon',
    category: 'motion-3d',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600',
    description: 'Animasi undangan 3D premium dengan aksen emas yang mewah.'
  },
  {
    id: 2,
    title: 'Floral Bloom Animation',
    category: 'motion-3d',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600',
    description: 'Gerakan bunga bermekaran yang elegan dan romantis.'
  },
   {
    id: 1,
    title: 'Modern 3D Gold Ribbon',
    category: 'motion-3d',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600',
    description: 'Animasi undangan 3D premium dengan aksen emas yang mewah.'
  },
  {
    id: 2,
    title: 'Floral Bloom Animation',
    category: 'motion-3d',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600',
    description: 'Gerakan bunga bermekaran yang elegan dan romantis.'
  },
  // Custom Ilustrasi
  {
    id: 3,
    title: 'Watercolor Wedding Map',
    category: 'custom-ilustrasi',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600',
    description: 'Ilustrasi peta lokasi dengan gaya cat air yang unik.'
  },
  {
    id: 4,
    title: 'Couple Portrait Minimalist',
    category: 'custom-ilustrasi',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600',
    description: 'Ilustrasi wajah pasangan dengan gaya minimalis kontemporer.'
  },
  // Undangan Web
  {
    id: 5,
    title: 'Interactive Royal Theme',
    category: 'undangan-web',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=600',
    description: 'Undangan web dengan fitur RSVP real-time dan galeri interaktif.'
  },
  {
    id: 6,
    title: 'Night Sky Stardust',
    category: 'undangan-web',
    image: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&q=80&w=600',
    description: 'Tema gelap dengan efek bintang berkelip dan musik atmosferik.'
  },
];

export default function PortfolioPage({ category }) {
  const filteredPortfolios = useMemo(() => {
    if (!category) return portfolios;
    return portfolios.filter(p => p.category === category);
  }, [category]);

  const getTitle = () => {
    switch (category) {
      case 'motion-3d': return 'Motion 3D Invitation';
      case 'custom-ilustrasi': return 'Custom Ilustrasi';
      case 'undangan-web': return 'Undangan Web Interaktif';
      default: return 'Portofolio Eksklusif';
    }
  };

  const getSubtitle = () => {
    switch (category) {
      case 'motion-3d': return 'Sentuhan sinematik untuk undangan digital Anda.';
      case 'custom-ilustrasi': return 'Ekspresikan diri Anda melalui karya seni personal.';
      case 'undangan-web': return 'Teknologi modern bertemu dengan estetika pernikahan tradisional.';
      default: return 'Jelajahi hasil karya terbaik kami yang menggabungkan seni dan teknologi.';
    }
  };

  return (
    <MainLayout>
      <div className="bg-[#fcfaf7] min-h-screen pb-32">
        {/* Header Section */}
        <section className="pt-28 pb-16 px-6 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 bg-slate-100 rounded-full text-[#BC914D] text-[10px] tracking-[0.3em] uppercase mb-6 font-bold"
            >
              Showcase
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight mb-6"
            >
              {getTitle()}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
            >
              {getSubtitle()}
            </motion.p>
          </div>
        </section>

        {/* Filter Bar (Conditional) */}
        {!category && (
          <div className="max-w-7xl mx-auto px-6 mt-12 mb-8">
            <div className="flex flex-wrap items-center justify-center gap-4">
               <Link to="/portfolio">
                <Button variant="default" className="bg-[#BC914D] rounded-full px-8">Semua</Button>
               </Link>
               <Link to="/portfolio/motion-3d">
                <Button variant="outline" className="rounded-full border-slate-200 px-8 hover:bg-[#BC914D] hover:text-white transition-all">Motion 3D</Button>
               </Link>
               <Link to="/portfolio/custom-ilustrasi">
                <Button variant="outline" className="rounded-full border-slate-200 px-8 hover:bg-[#BC914D] hover:text-white transition-all">Ilustrasi</Button>
               </Link>
               <Link to="/portfolio/undangan-web">
                <Button variant="outline" className="rounded-full border-slate-200 px-8 hover:bg-[#BC914D] hover:text-white transition-all">Web</Button>
               </Link>
            </div>
          </div>
        )}

        {/* Portfolio Grid */}
        <section className="max-w-screen-2xl mx-auto px-4 md:px-6 mt-12 md:mt-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredPortfolios.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <Card className="border-0 bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative aspect-[3/4] md:aspect-video overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-6">
                         <span className="text-white text-[10px] md:text-sm font-medium border border-white/30 bg-white/10 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                           Lihat Sample
                         </span>
                      </div>
                    </div>
                    <div className="p-3 md:p-5 flex flex-col flex-1">
                       <span className="text-[#BC914D] text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-1.5 md:mb-2 block">
                         {item.category.replace('-', ' ')}
                       </span>
                       <h3 className="text-sm md:text-xl font-serif font-bold text-slate-900 mb-2 group-hover:text-[#BC914D] transition-colors line-clamp-1">
                         {item.title}
                       </h3>
                       <p className="text-slate-500 text-[11px] md:text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                         {item.description}
                       </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
