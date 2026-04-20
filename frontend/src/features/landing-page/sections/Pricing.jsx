import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-slate-900 mb-16">
          Pilih Paket Kebahagiaanmu
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center mt-16">
          {/* Basic Card */}
          <Card className="flex flex-col border-slate-200 p-8 shadow-sm hover:border-[#BC914D] transition-colors rounded-2xl">
            <CardHeader className="text-center p-0 mb-8 mt-4">
              <span className="text-slate-500 text-sm font-bold tracking-widest uppercase mb-4 block">Esensial</span>
              <CardTitle className="text-3xl font-serif font-bold text-slate-900 mb-4">Basic</CardTitle>
              <div className="text-5xl font-bold text-slate-900">Rp 99k</div>
            </CardHeader>
            <CardContent className="p-0 mb-10 w-full text-left flex-1">
              <ul className="space-y-4 text-slate-600 text-sm">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#BC914D] text-lg">check_circle</span> 
                  1 Pilihan Tema Dasar
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#BC914D] text-lg">check_circle</span> 
                  Fitur RSVP Sederhana
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#BC914D] text-lg">check_circle</span> 
                  Masa Aktif 3 Bulan
                </li>
                <li className="flex items-center gap-3 opacity-40">
                  <span className="material-symbols-outlined text-lg">block</span> 
                  Tanpa Musik & Galeri
                </li>
              </ul>
            </CardContent>
            <CardFooter className="p-0">
              <Button variant="outline" className="w-full border-2 border-[#BC914D] text-[#BC914D] hover:bg-[#BC914D] hover:text-white py-6 text-base font-bold rounded-lg transition-colors">
                Pilih Basic
              </Button>
            </CardFooter>
          </Card>

          {/* Premium Card */}
          <Card className="flex flex-col border-[3px] border-[#BC914D] p-8 shadow-xl relative transform md:scale-105 z-10 rounded-2xl bg-white">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#BC914D] text-white px-4 py-1 text-xs font-bold rounded-full whitespace-nowrap">
              PILIHAN FAVORIT
            </div>
            <CardHeader className="text-center p-0 mb-8 mt-4">
              <span className="text-slate-500 text-sm font-bold tracking-widest uppercase mb-4 block">Populer</span>
              <CardTitle className="text-3xl font-serif font-bold text-slate-900 mb-4">Premium</CardTitle>
              <div className="text-5xl font-bold text-slate-900">Rp 199k</div>
            </CardHeader>
            <CardContent className="p-0 mb-10 w-full text-left flex-1">
              <ul className="space-y-4 text-slate-600 text-sm">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#BC914D] text-lg">check_circle</span> 
                  Akses 10 Tema Premium
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#BC914D] text-lg">check_circle</span> 
                  Galeri Maks 20 Foto
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#BC914D] text-lg">check_circle</span> 
                  Background Music Pilihan
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#BC914D] text-lg">check_circle</span> 
                  Masa Aktif 1 Tahun
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#BC914D] text-lg">check_circle</span> 
                  Masa Aktif 1 Tahun
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#BC914D] text-lg">check_circle</span> 
                  Masa Aktif 1 Tahun
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#BC914D] text-lg">check_circle</span> 
                  Masa Aktif 1 Tahun
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#BC914D] text-lg">check_circle</span> 
                  Masa Aktif 1 Tahun
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#BC914D] text-lg">check_circle</span> 
                  Masa Aktif 1 Tahun
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#BC914D] text-lg">check_circle</span> 
                  Masa Aktif 1 Tahun
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#BC914D] text-lg">check_circle</span> 
                  Masa Aktif 1 Tahun
                </li>
              </ul>
            </CardContent>
            <CardFooter className="p-0">
              <Button className="w-full bg-[#BC914D] hover:bg-[#a37d42] text-white py-6 text-base font-bold shadow-lg shadow-[#BC914D]/20 rounded-lg">
                Pilih Premium
              </Button>
            </CardFooter>
          </Card>

          {/* Exclusive Card */}
          <Card className="flex flex-col border-slate-200 p-8 shadow-sm hover:border-[#BC914D] transition-colors rounded-2xl">
            <CardHeader className="text-center p-0 mb-8 mt-4">
              <span className="text-slate-500 text-sm font-bold tracking-widest uppercase mb-4 block">Terlengkap</span>
              <CardTitle className="text-3xl font-serif font-bold text-slate-900 mb-4">Eksklusif</CardTitle>
              <div className="text-5xl font-bold text-slate-900">Rp 299k</div>
            </CardHeader>
            <CardContent className="p-0 mb-10 w-full text-left flex-1">
              <ul className="space-y-4 text-slate-600 text-sm">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#BC914D] text-lg">check_circle</span> 
                  Semua Akses Tema Premium
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#BC914D] text-lg">check_circle</span> 
                  Galeri Video & Foto Bebas
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#BC914D] text-lg">check_circle</span> 
                  Custom Music & Story
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#BC914D] text-lg">check_circle</span> 
                  Masa Aktif Selamanya
                </li>
              </ul>
            </CardContent>
            <CardFooter className="p-0">
              <Button variant="outline" className="w-full border-2 border-[#BC914D] text-[#BC914D] hover:bg-[#BC914D] hover:text-white py-6 text-base font-bold rounded-lg transition-colors">
                Pilih Eksklusif
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
