import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import SocialProof from './sections/SocialProof';
import Features from './sections/Features';
import HowItWorks from './sections/HowItWorks';
import TemplateShowcase from './sections/TemplateShowcase';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        {/* <SocialProof /> */}
        <Features />
        <HowItWorks />
        <TemplateShowcase />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
