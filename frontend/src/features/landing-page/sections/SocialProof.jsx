import React from 'react';

export default function SocialProof() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
          Telah dipercaya oleh 500+ pasangan
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-serif font-bold text-xl"><span className="w-6 h-6 bg-[#BC914D] rounded-full inline-block"></span>M&N</div>
          <div className="flex items-center gap-2 font-serif font-bold text-xl"><span className="w-6 h-6 bg-slate-800 rounded inline-block"></span>LoveStory</div>
          <div className="flex items-center gap-2 font-serif font-bold text-xl"><span className="w-6 h-6 bg-[#BC914D] rotate-45 inline-block"></span>Eternity</div>
          <div className="flex items-center gap-2 font-serif font-bold text-xl"><span className="w-8 h-4 bg-slate-800 rounded-full inline-block"></span>Ties</div>
          <div className="flex items-center gap-2 font-serif font-bold text-xl"><span className="w-6 h-6 border-4 border-[#BC914D] rounded-full inline-block"></span>Bloom</div>
        </div>
      </div>
    </section>
  );
}
