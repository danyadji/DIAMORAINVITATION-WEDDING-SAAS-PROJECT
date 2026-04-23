import React from 'react';
import { Card, CardContent } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

const templates = [
  {
    title: 'Tema Minimalis Modern',
    desc: 'Bersih & Elegan',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=400&h=500' 
  },
  {
    title: 'Tema Jawa Klasik',
    desc: 'Tradisional & Timeless',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400&h=500'
  },
  {
    title: 'Tema Floral Romance',
    desc: 'Manis & Penuh Bunga',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=400&h=500'
  },
    {
    title: 'Tema Jawa Klasik',
    desc: 'Tradisional & Timeless',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400&h=500'
  },
  {
    title: 'Tema Floral Romance',
    desc: 'Manis & Penuh Bunga',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=400&h=500'
  },
    {
    title: 'Tema Jawa Klasik',
    desc: 'Tradisional & Timeless',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400&h=500'
  },
  
];

export default function TemplateShowcase() {
  return (
    <section id="templates" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Desain Eksklusif untuk Cerita Anda
          </h2>
          <p className="text-slate-600 text-lg">
            Dari minimalis modern hingga klasik tradisional, temukan yang paling mewakili Anda.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {templates.map((tpl, idx) => (
            <div key={idx} className="group">
              <Card className="border-0 bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                  <img 
                    src={tpl.image} 
                    alt={tpl.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                     <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] md:text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                       Lihat Detail
                     </span>
                  </div>
                </div>
                <CardContent className="p-3 md:p-5 flex flex-col flex-1">
                  <h3 className="text-sm md:text-xl font-serif font-bold text-slate-900 mb-1 line-clamp-1 group-hover:text-[#BC914D] transition-colors">{tpl.title}</h3>
                  <p className="text-[10px] md:text-sm text-slate-500 mb-4 line-clamp-1">{tpl.desc}</p>
                  
                  <div className="flex flex-col md:flex-row gap-2 mt-auto">
                    <Button
                      variant="secondary"
                      className="flex-1 py-1 px-2 md:py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 text-[10px] md:text-xs h-7 md:h-9"
                    >
                      Preview
                    </Button>
                    <Button className="flex-1 py-1 px-2 md:py-2.5 bg-[#BC914D] hover:bg-[#a37d42] text-white text-[10px] md:text-xs h-7 md:h-9">
                      Gunakan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button className="bg-[#BC914D] hover:bg-[#a37d42] text-white px-8 py-6 rounded-lg font-bold text-base shadow-lg shadow-[#BC914D]/20 transition-all hover:-translate-y-1">
            Semua Template &rarr;
          </Button>
        </div>  
      </div>
    </section>
  );
}
