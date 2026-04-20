import React from 'react';
import { Button } from '../../../components/ui/button'; 

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur flex-none transition-colors duration-500 bg-white/80 border-b border-slate-200">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-screen-2xl">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold text-[#BC914D]">Diamora Invitation</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium hover:text-[#BC914D] transition-colors">Home</a>
          <a href="#" className="text-sm font-medium hover:text-[#BC914D] transition-colors">Tema</a>
          <a href="#features" className="text-sm font-medium hover:text-[#BC914D] transition-colors">Harga Paket</a>
          <a href="#pricing" className="text-sm font-medium hover:text-[#BC914D] transition-colors">Portofolio</a>
          <a href="#faq" className="text-sm font-medium hover:text-[#BC914D] transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" className="hidden sm:inline-flex hover:text-[#BC914D]">Login</Button>
          </Link>
          <Link to="/register">
            <Button className="bg-[#BC914D] hover:bg-[#a37d42] text-white">Daftar Gratis</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
