import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/accordion';

const faqs = [
  {
    q: 'Apakah data undangan bisa diedit kembali setelah dipublikasikan?',
    a: 'Tentu saja! Anda bisa mengubah detail acara, foto galeri, hingga mengganti tema (misalnya ke tema Jawa Klasik) kapan saja melalui dashboard Anda tanpa batas, bahkan setelah link disebar.'
  },
  {
    q: 'Apakah ada batasan jumlah tamu yang bisa saya kirimi undangan?',
    a: 'Tidak ada batasan sama sekali. Anda dapat membuat nama tamu secara dinamis tanpa batas (unlimited) dan menyebarkan link unik tersebut ke ratusan hingga ribuan kontak WhatsApp Anda.'
  },
  {
    q: 'Bagaimana cara kerja fitur RSVP dan Buku Tamu?',
    a: 'Saat tamu mengisi formulir kehadiran (RSVP) di undangan Anda, datanya akan langsung masuk secara real-time ke dashboard Anda. Anda bisa mengunduh rekap kehadiran tersebut dalam format Excel/PDF untuk memudahkan bagian penerima tamu di hari H.'
  },
  {
    q: 'Apakah saya bisa menggunakan lagu favorit saya sendiri?',
    a: 'Sangat bisa! Kami menyediakan galeri musik bebas hak cipta, namun Anda juga bisa mengunggah lagu favorit Anda sendiri (format MP3) atau menggunakan link YouTube untuk diputar otomatis di latar belakang undangan.'
  },
  {
    q: 'Apakah privasi foto dan lokasi acara saya aman?',
    a: 'Keamanan data Anda adalah prioritas kami. Anda dapat mengaktifkan fitur "Undangan Privat", sehingga hanya tamu yang memiliki link khusus dengan namanya yang bisa membuka dan melihat detail acara pernikahan Anda.'
  },
  {
    q: 'Berapa lama link undangan saya akan tetap aktif?',
    a: 'Untuk paket Premium, link undangan dan galeri foto kenangan Anda akan tetap aktif selama 12 bulan (1 tahun) sejak tanggal acara pernikahan selesai.'
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-slate-900 mb-12">
          Pertanyaan Sering Diajukan
        </h2>
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-slate-100 last:border-0">
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-[#BC914D] text-lg py-5 hover:no-underline transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
