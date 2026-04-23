import React from 'react';
import Navbar from '../features/landing-page/sections/Navbar';
import Footer from '../features/landing-page/sections/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
