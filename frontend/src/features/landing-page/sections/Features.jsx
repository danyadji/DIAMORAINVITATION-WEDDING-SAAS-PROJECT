import React from 'react';

const featuresData = [
  {
    title: 'RSVP Online',
    desc: 'Kelola konfirmasi kehadiran tamu dengan mudah, praktis, dan real-time.',
    icon: 'assignment_turned_in' // Material symbol
  },
  {
    title: 'Galeri Foto',
    desc: 'Bagikan momen indah pre-wedding Anda dalam galeri estetik.',
    icon: 'photo_library'
  },
  {
    title: 'Peta Lokasi',
    desc: 'Bantu tamu menemukan lokasi acara pernikahan dengan akurasi tinggi.',
    icon: 'map'
  },
  {
    title: 'Musik Latar',
    desc: 'Berikan kesan mendalam dengan iringan lagu pilihan Anda.',
    icon: 'library_music'
  },
  {
    title: 'Motion 3D',
    desc: 'Berikan pengalaman interaktif yang memukau dengan transisi animasi 3D elegan.',
    icon: '3d_rotation'
  },
  {
    title: 'Custom Ilustrasi',
    desc: 'Hiasi undangan dengan karya seni khusus yang mencerminkan karakter dan kisah cinta Anda.',
    icon: 'brush'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Fitur Premium untuk Momen Spesial
          </h2>
          <p className="text-slate-600 text-lg">
            Setiap detail dirancang untuk memberikan pengalaman terbaik bagi Anda dan tamu undangan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#BC914D]/10 flex items-center justify-center rounded-xl mb-6 group-hover:bg-[#BC914D] transition-colors">
                {/* Assuming Material Symbols are loaded in index.html as per previous user request */}
                <span className="material-symbols-outlined text-[#BC914D] group-hover:text-white transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
