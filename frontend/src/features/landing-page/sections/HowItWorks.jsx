import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Daftar & Lengkapi Data',
    desc: 'Buat akun Anda dan masukkan detail informasi acara.'
  },
  {
    number: '2',
    title: 'Pilih Desain Tema',
    desc: 'Pilih dari beragam koleksi tema premium kami yang sesuai dengan gaya Anda.'
  },
  {
    number: '3',
    title: 'Tambah Daftar Tamu',
    desc: 'Masukkan daftar nama tamu yang akan menerima undangan spesial ini.'
  },
  {
    number: '4',
    title: 'Bagikan Link & QR Code',
    desc: 'Sebarkan undangan praktis melalui WhatsApp, link, atau cetak QR Code.'
  },
  {
    number: '5',
    title: 'Pantau RSVP & Kado',
    desc: 'Lacak kehadiran tamu dan kelola hadiah secara real-time via Dashboard.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
          5 Langkah Mudah
        </h2>
        <p className="text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
          Buat undangan digital cantik dan lengkap hanya dalam beberapa menit.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 relative max-w-7xl mx-auto">
          {/* Connector Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[2.5rem] left-[10%] right-[10%] h-[2px] bg-slate-100 -z-10"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-white border-[3px] border-[#BC914D] flex items-center justify-center text-2xl font-bold text-[#BC914D] mb-6 shadow-sm">
                {step.number}
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-3 px-2">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed px-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
