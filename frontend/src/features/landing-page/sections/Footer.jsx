import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#18140F] border-t border-[#BC914D]/20 pt-20 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="text-2xl font-serif font-bold text-[#BC914D] mb-4 tracking-tight">
              Diamora Invitation
            </div>
            <p className="text-stone-300 text-sm leading-relaxed max-w-sm mb-6">
              Platform undangan pernikahan digital premium. Wujudkan undangan impian yang elegan, praktis, dan berkesan untuk momen terbaik Anda.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#BC914D] text-stone-300 hover:text-white transition-colors group">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#BC914D] text-stone-300 hover:text-white transition-colors group">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#BC914D] text-stone-300 hover:text-white transition-colors group">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-2.02-2C18.68 4 12 4 12 4s-6.68 0-8.52.42a2.78 2.78 0 0 0-2.02 2C1 8.26 1 12 1 12s0 3.74.46 5.58a2.78 2.78 0 0 0 2.02 2C5.32 20 12 20 12 20s6.68 0 8.52-.42a2.78 2.78 0 0 0 2.02-2C23 15.74 23 12 23 12s0-3.74-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Produk</h4>
            <ul className="space-y-4 text-sm text-stone-300 tracking-wide">
              <li><a href="#templates" className="hover:text-[#BC914D] transition-colors">Tema Undangan</a></li>
              <li><a href="#features" className="hover:text-[#BC914D] transition-colors">Fitur Premium</a></li>
              <li><a href="#pricing" className="hover:text-[#BC914D] transition-colors">Harga Paket</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Bantuan</h4>
            <ul className="space-y-4 text-sm text-stone-300 tracking-wide">
              <li><a href="#faq" className="hover:text-[#BC914D] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#BC914D] transition-colors">Kontak Kami</a></li>
              <li><a href="#" className="hover:text-[#BC914D] transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-[#BC914D] transition-colors">Syarat & Ketentuan</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#BC914D]/20 pt-8 text-center text-sm text-stone-400">
          &copy; {new Date().getFullYear()} Diamora Invitation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
