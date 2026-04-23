import React, { useMemo, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

const filterChips = ['Semua', 'Minimalist', 'Floral', 'Klasik', 'Modern', 'Vintage'];

const themeTemplates = [
  {
    title: 'Minimalist Chic',
    category: 'Best Seller',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=900&h=1125',
  },
  {
    title: 'Jawa Klasik',
    category: 'New',
    image:
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=900&h=1125',
  },
  {
    title: 'Rustic Elegance',
    category: null,
    image:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=900&h=1125',
  },
  {
    title: 'Modern Botanical',
    category: null,
    image:
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=900&h=1125',
  },
  {
    title: 'Vintage Love',
    category: null,
    image:
      'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&q=80&w=900&h=1125',
  },
  {
    title: 'Floral Dream',
    category: null,
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=900&h=1125',
  },
  
];

export default function ThemesPage() {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(themeTemplates.length / itemsPerPage);

  const paginatedThemes = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return themeTemplates.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) {
      return;
    }
    setCurrentPage(page);
  };

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-white via-[#f8f5ef] to-slate-50">
        <section className="max-w-4xl mx-auto text-center px-6 pt-28 pb-12">
          <h1 className="font-serif text-4xl md:text-6xl text-slate-900 mb-6 tracking-tight">
            Temukan Desain Impian Anda
          </h1>
          <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Jelajahi koleksi terkurasi desain undangan pernikahan premium untuk mewujudkan momen
            spesial Anda dengan sentuhan artistik.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-6 mb-12">
          <div className="flex flex-col gap-7">
            <div className="relative max-w-3xl mx-auto w-full">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                search
              </span>
              <input
                type="text"
                placeholder="Cari nama template atau gaya..."
                className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#BC914D]/40 text-slate-900"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {filterChips.map((chip, index) => (
                <Button
                  key={chip}
                  variant={index === 0 ? 'default' : 'secondary'}
                  className={
                    index === 0
                      ? 'px-6 rounded-full bg-[#BC914D] hover:bg-[#a37d42] text-white'
                      : 'px-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }
                >
                  {chip}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-4 md:px-6 pb-10">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {paginatedThemes.map((theme) => (
              <Card
                key={theme.title}
                className="group border-0 bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={theme.image}
                    alt={theme.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {theme.category && (
                    <span
                      className={`absolute top-2 md:top-4 left-2 md:left-4 px-2 md:px-3 py-1 text-[8px] md:text-[10px] uppercase tracking-widest font-bold rounded-sm ${
                        theme.category === 'Best Seller'
                          ? 'bg-[#BC914D]/95 text-white'
                          : 'bg-slate-900/90 text-white'
                      }`}
                    >
                      {theme.category}
                    </span>
                  )}
                </div>

                <CardContent className="p-3 md:p-6">
                  <h3 className="font-serif text-sm md:text-xl font-bold text-slate-900 mb-3 md:mb-4 truncate md:whitespace-normal">{theme.title}</h3>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-3">
                    <Button
                      variant="secondary"
                      className="flex-1 py-1.5 md:py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs md:text-sm h-8 md:h-10"
                    >
                      Preview
                    </Button>
                    <Button className="flex-1 py-1.5 md:py-2.5 bg-[#BC914D] hover:bg-[#a37d42] text-white text-xs md:text-sm h-8 md:h-10">
                      Gunakan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">
              Halaman {currentPage} dari {totalPages}
            </p>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="border-slate-300"
              >
                Sebelumnya
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={page === currentPage ? 'default' : 'outline'}
                  onClick={() => goToPage(page)}
                  className={
                    page === currentPage
                      ? 'bg-[#BC914D] hover:bg-[#a37d42] text-white'
                      : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                  }
                >
                  {page}
                </Button>
              ))}

              <Button
                variant="outline"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="border-slate-300"
              >
                Berikutnya
              </Button>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-24 pt-8 text-center">
          <div className="bg-white py-12 px-8 rounded-3xl border border-slate-200 shadow-sm">
            <p className="font-serif italic text-2xl text-slate-700 mb-6">
              "Ingin desain kustom? Hubungi tim kami."
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[#BC914D] font-semibold hover:underline gap-2 group"
            >
              Hubungi Boutique Digital kami
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
