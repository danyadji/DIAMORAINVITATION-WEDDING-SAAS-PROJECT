import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Hero from '../../features/landing-page/sections/Hero';
import Features from '../../features/landing-page/sections/Features';
import HowItWorks from '../../features/landing-page/sections/HowItWorks';
import TemplateShowcase from '../../features/landing-page/sections/TemplateShowcase';
import Pricing from '../../features/landing-page/sections/Pricing';
import FAQ from '../../features/landing-page/sections/FAQ';

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <HowItWorks />
      <TemplateShowcase />
      <Pricing />
      <FAQ />
    </MainLayout>
  );
}
