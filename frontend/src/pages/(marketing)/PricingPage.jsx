import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';

const pricingPlans = [
  {
    name: 'Starter',
    subtitle: 'Elegan digital untuk awal yang manis.',
    pricePrefix: 'Rp',
    price: '99k',
    period: '/bulan',
    highlighted: false,
    cta: 'Pesan Sekarang',
    features: ['3 Template Pilihan', 'RSVP Digital Dasar', 'Galeri Musik Standar'],
  },
  {
    name: 'Professional',
    subtitle: 'Pengalaman lengkap untuk momen istimewa Anda.',
    pricePrefix: 'Rp',
    price: '299k',
    period: '/bulan',
    highlighted: true,
    badge: 'Paling Populer',
    cta: 'Pesan Sekarang',
    features: [
      'Akses Semua Template Premium',
      'Custom Domain Gratis 1 Tahun',
      'Automasi RSVP Lanjutan',
      'Integrasi Galeri Foto & Video',
    ],
  },
  {
    name: 'Concierge',
    subtitle: 'Pendampingan personal, eksklusif, dan bespoke.',
    pricePrefix: '',
    price: 'Custom',
    period: '',
    highlighted: false,
    cta: 'Pesan Sekarang',
    features: ['Design Director Dedicated', 'Fitur Custom by Request', 'Support Prioritas VIP'],
  },
];

const comparisons = [
  {
    feature: 'Template Undangan',
    starter: '3 Pilihan',
    professional: 'Semua Template',
    concierge: 'Desain Eksklusif',
  },
  {
    feature: 'Manajemen RSVP',
    starter: true,
    professional: true,
    concierge: true,
  },
  {
    feature: 'Domain Kustom',
    starter: '—',
    professional: true,
    concierge: true,
  },
  {
    feature: 'Kapasitas Penyimpanan',
    starter: '500MB',
    professional: '5GB',
    concierge: 'Unlimited',
  },
  {
    feature: 'Tingkat Dukungan',
    starter: 'Email',
    professional: 'Prioritas 24/7',
    concierge: 'Jalur Khusus',
  },
];

const faqs = [
  {
    q: 'Apakah paket bisa di-upgrade di tengah masa aktif?',
    a: 'Bisa. Anda dapat upgrade kapan saja, dan selisih biaya akan dihitung prorata ke periode berikutnya.',
  },
  {
    q: 'Apakah domain custom termasuk dalam paket?',
    a: 'Untuk paket Professional dan Concierge, domain custom sudah termasuk gratis selama 1 tahun pertama.',
  },
  {
    q: 'Bagaimana keamanan data tamu undangan?',
    a: 'Data RSVP dan informasi tamu dilindungi dengan enkripsi standar industri agar tetap aman dan privat.',
  },
];

function FeatureValue({ value, highlight = false }) {
  if (value === true) {
    return <span className="material-symbols-outlined text-[#BC914D]">check</span>;
  }

  return (
    <span className={highlight ? 'text-sm font-semibold text-slate-900' : 'text-sm text-slate-600'}>
      {value}
    </span>
  );
}

export default function PricingPage() {
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-white via-[#f8f5ef] to-slate-50">
        <section className="max-w-[1200px] mx-auto px-6 text-center pt-28 pb-14">
          <div className="inline-block px-4 py-1.5 bg-slate-100 rounded-full text-[#BC914D] text-[10px] tracking-[0.2em] uppercase mb-6 font-semibold">
            Investasi
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-slate-900 mb-6 tracking-tight">
            Pilih Paket Kebahagiaanmu
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
            Mulai kisah indah Anda dengan fondasi yang tepat. Setiap paket dirancang untuk menghadirkan
            undangan digital yang elegan, personal, dan berkesan.
          </p>
        </section>

        <section className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch pb-24">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${plan.highlighted
                ? 'border-[#BC914D]/30 shadow-xl shadow-[#BC914D]/10 md:scale-[1.03] z-10'
                : 'border-slate-200 shadow-sm hover:shadow-lg'
                }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#BC914D] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {plan.badge}
                </span>
              )}

              <CardContent className="p-7 md:p-8 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className={`font-serif text-2xl mb-2 ${plan.highlighted ? 'text-[#BC914D]' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className="text-sm text-slate-600">{plan.subtitle}</p>
                </div>

                <div className="mb-7 flex items-end gap-1">
                  {plan.pricePrefix ? <span className="text-2xl text-slate-700">{plan.pricePrefix}</span> : null}
                  <span className="text-5xl font-light tracking-tight text-slate-900">{plan.price}</span>
                  {plan.period ? <span className="text-sm text-slate-500 mb-1">{plan.period}</span> : null}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-slate-600">
                      <span className="material-symbols-outlined text-[#BC914D] text-lg">check</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={
                    plan.highlighted
                      ? 'w-full bg-[#BC914D] hover:bg-[#a37d42] text-white'
                      : 'w-full bg-slate-100 hover:bg-slate-200 text-slate-900'
                  }
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="max-w-[1000px] mx-auto px-6 pb-24">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-slate-900 mb-10">Perbandingan Fitur</h2>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full min-w-[780px] text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-6 font-semibold text-slate-600">Fitur</th>
                  <th className="p-6 text-center font-medium text-slate-700">Starter</th>
                  <th className="p-6 text-center font-semibold text-[#BC914D]">Professional</th>
                  <th className="p-6 text-center font-medium text-slate-700">Concierge</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.feature} className="border-b border-slate-100 last:border-b-0">
                    <td className="p-6 text-sm font-medium text-slate-800">{row.feature}</td>
                    <td className="p-6 text-center">
                      <FeatureValue value={row.starter} />
                    </td>
                    <td className="p-6 text-center">
                      <FeatureValue value={row.professional} highlight />
                    </td>
                    <td className="p-6 text-center">
                      <FeatureValue value={row.concierge} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="max-w-[840px] mx-auto px-6 pb-28">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-slate-900 mb-10">Pertanyaan Umum</h2>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-2 md:p-3">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.q} value={`faq-${index}`} className="px-4 md:px-5">
                  <AccordionTrigger className="text-left font-serif text-lg text-slate-900 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-sm leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
