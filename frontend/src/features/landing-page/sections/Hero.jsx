import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../../components/ui/button';

import heroMockup from '../assets/01-o-removebg-preview.png';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-32">
          <motion.div 
            className="w-full md:w-[45%] text-center md:text-left mt-8 md:mt-0 shrink-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-6 text-slate-900">
              Sebar Momen Bahagiamu dalam <span className="text-[#BC914D]">5 Menit</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Wujudkan undangan pernikahan digital yang elegan dan personal. Praktis, cepat, dan berkesan untuk setiap tamu undangan Anda.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-[#BC914D] hover:bg-[#a37d42] text-white px-8 py-6 rounded-lg text-base">
                Mulai Buat Sekarang
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#BC914D] text-[#BC914D] hover:bg-[#BC914D]/10 px-8 py-6 rounded-lg text-base">
                Lihat Demo
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="w-full md:w-[55%] relative hidden md:flex justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Mockup Image */}
            <div className="transform rotate-3 hover:rotate-0 transition-transform duration-700 w-full max-w-[550px] lg:max-w-[750px]">
               <img src={heroMockup} alt="Mockup Undangan Digital" className="w-full h-auto drop-shadow-2xl rounded-2xl" />
            </div>
            {/* Decorative blurs */}
            <div className="absolute -inset-10 bg-[#BC914D]/20 blur-3xl -z-10 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
