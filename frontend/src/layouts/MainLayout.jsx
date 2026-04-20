import React from 'react';
// import Navbar from '../features/landing-page/sections/Navbar'; // Update later
// import Footer from '../features/landing-page/sections/Footer'; // Update later

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      {/* <Navbar /> */}
      <main className="flex-grow">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
