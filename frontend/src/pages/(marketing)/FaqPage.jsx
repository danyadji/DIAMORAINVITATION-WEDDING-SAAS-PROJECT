import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import { Button } from '../../components/ui/button';

const faqs = [
  {
    q: 'Apakah data undangan bisa diedit kembali setelah dipublikasikan?',
    a: 'Tentu saja. Anda memiliki fleksibilitas penuh untuk mengubah informasi acara, foto, atau detail lainnya kapan saja melalui dashboard editor kami. Perubahan akan langsung terupdate secara real-time pada link undangan Anda.'
  },
  {
    q: 'Apakah ada batasan jumlah tamu yang bisa saya kirimi undangan?',
    a: 'Diamora tidak membatasi jumlah tamu. Anda dapat membagikan link undangan Anda kepada ribuan tamu tanpa biaya tambahan. Sistem kami dirancang untuk menangani trafik tinggi dengan lancar.'
  },
  {
    q: 'Bagaimana cara kerja fitur RSVP dan Buku Tamu?',
    a: 'Setiap tamu dapat mengisi konfirmasi kehadiran dan pesan ucapan langsung di halaman undangan. Anda akan menerima notifikasi instan, dan semua data akan tersusun rapi di dashboard management tamu Anda untuk memudahkan pengaturan katering dan tempat duduk.'
  },
  {
    q: 'Apakah saya bisa menggunakan lagu favorit saya sendiri?',
    a: 'Sangat bisa. Selain menyediakan koleksi musik kurasi kami yang elegan, Anda dapat mengunggah file musik pribadi atau menautkan playlist untuk memberikan sentuhan personal pada momen spesial Anda.'
  },
  {
    q: 'Apakah privasi foto dan lokasi acara saya aman?',
    a: 'Keamanan data Anda adalah prioritas utama kami. Anda dapat mengaktifkan fitur perlindungan kata sandi atau membatasi akses link hanya untuk tamu tertentu. Data lokasi dan media Anda dienkripsi untuk memastikan privasi terjaga.'
  },
  {
    q: 'Berapa lama link undangan saya akan tetap aktif?',
    a: 'Link undangan Anda akan tetap aktif selama satu tahun penuh setelah tanggal acara. Ini memungkinkan tamu untuk melihat kembali galeri foto dan pesan ucapan sebagai kenang-kenangan digital yang indah.'
  }
];

export default function FaqPage() {
  return (
    <MainLayout>
      <div className="bg-[#f9f9f9] min-h-screen">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="block text-[#7b5819] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              Bantuan & Dukungan
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 leading-tight mb-6">
              Pertanyaan Sering Diajukan
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto font-light">
              Temukan jawaban atas segala pertanyaan Anda mengenai pembuatan undangan digital eksklusif di Diamora.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pb-32 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0px_20px_40px_rgba(0,0,0,0.03)] border border-slate-100">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem 
                    key={idx} 
                    value={`item-${idx}`} 
                    className="border-b border-slate-100 last:border-0 py-2"
                  >
                    <AccordionTrigger className="text-left py-6 hover:no-underline group">
                      <span className="text-lg md:text-xl font-serif text-slate-900 group-hover:text-[#7b5819] transition-colors">
                        {faq.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 font-light leading-relaxed pb-8 text-base md:text-lg max-w-[95%]">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Contact Support Callout */}
            <div className="mt-12 flex flex-col md:flex-row items-center justify-between p-8 bg-white/50 rounded-2xl border border-slate-100 gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-serif text-slate-900">Masih memiliki pertanyaan?</h3>
                <p className="text-slate-500 text-sm mt-1">Tim desainer kami siap membantu mewujudkan impian Anda.</p>
              </div>
              <Button 
                variant="outline"
                className="whitespace-nowrap px-8 py-6 border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl font-medium transition-all"
              >
                Hubungi Support
              </Button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
