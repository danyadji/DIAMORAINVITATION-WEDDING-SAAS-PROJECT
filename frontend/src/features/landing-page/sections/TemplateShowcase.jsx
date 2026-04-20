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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {templates.map((tpl, idx) => (
            <div key={idx} className="group">
              <Card className="border-0 shadow-none bg-transparent flex flex-col items-center">
                <div className="relative w-4/5 aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-slate-200 shadow-md">
                  <img 
                    src={tpl.image} 
                    alt={tpl.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button className="bg-white text-slate-900 hover:bg-[#BC914D] hover:text-white border-0 font-bold px-8">
                      Preview
                    </Button>
                  </div>
                </div>
                <CardContent className="p-0 text-center">
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-1">{tpl.title}</h3>
                  <p className="text-sm text-slate-500">{tpl.desc}</p>
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
