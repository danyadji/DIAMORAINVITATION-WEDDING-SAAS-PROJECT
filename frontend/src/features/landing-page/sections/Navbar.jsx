import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../../components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobilePortfolioOpen, setIsMobilePortfolioOpen] = useState(false);

  // 1. Tambahkan useRef untuk mengikat ke elemen kontainer menu mobile
  const menuRef = useRef(null);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Tema', to: '/themes' },
    { name: 'Harga Paket', to: '/pricing' },
  ];

  const portfolioItems = [
    { name: 'Motion 3D', to: '/portfolio/motion-3d' },
    { name: 'Custom Ilustrasi', to: '/portfolio/custom-ilustrasi' },
    { name: 'Undangan Web', to: '/portfolio/undangan-web' },
  ];

  // 2. Tambahkan useEffect untuk event listener mousedown & touchstart
  useEffect(() => {
    const handleClickOutside = (event) => {
      // 3. Jika click target berada di luar elemen ref, jalankan fungsi penutup menu
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    // 4. Clean-up event listener di return statement
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md flex-none bg-white/90 border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between max-w-7xl">

        {/* Left Side: Logo & Brand */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-[#BC914D] rounded-lg flex items-center justify-center">
            <span className="text-white font-serif font-bold text-xl">D</span>
          </div>
          <span className="text-xl md:text-2xl font-serif font-bold text-slate-900 tracking-tight">
            Diamora<span className="hidden sm:inline font-light text-[#BC914D] ml-2 italic">Invitation</span>
          </span>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-slate-600 hover:text-[#BC914D] transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Desktop Dropdown Portofolio */}
          <div
            className="relative group py-4"
            onMouseEnter={() => setIsPortfolioOpen(true)}
            onMouseLeave={() => setIsPortfolioOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-[#BC914D] transition-colors">
              Portofolio
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isPortfolioOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isPortfolioOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 mt-1 w-56 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden z-50"
                >
                  <div className="p-2">
                    {portfolioItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-4 py-3 text-sm text-slate-600 hover:bg-[#BC914D]/5 hover:text-[#BC914D] rounded-xl transition-all font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/faq" className="text-sm font-medium text-slate-600 hover:text-[#BC914D] transition-colors">FAQ</Link>
        </nav>

        {/* Right Side: Desktop Auth & Hamburger Toggle */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" className="text-slate-600 hover:text-[#BC914D] font-medium h-10 px-6">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-[#BC914D] hover:bg-[#a37d42] text-white rounded-full px-8 shadow-lg shadow-[#BC914D]/20 h-10">
                Daftar Gratis
              </Button>
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[100] lg:hidden flex items-start justify-center p-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <motion.div
                ref={menuRef} // 1. Bind ref ke elemen kontainer putih
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden mt-2"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Menu Header */}
                <div className="px-6 py-5 flex items-center justify-between border-b border-slate-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#BC914D] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      D
                    </div>
                    <span className="text-xl font-bold text-slate-800">Diamora</span>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-100 text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Menu Items List */}
                <div className="px-4 py-2">
                  <div className="border-b border-slate-50">
                    <Link
                      to="/"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-5 text-slate-600 hover:text-[#BC914D] transition-colors group"
                    >
                      <span className="text-lg font-medium">Home</span>

                    </Link>
                  </div>

                  <div className="border-b border-slate-50">
                    <Link
                      to="/themes"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-5 text-slate-600 hover:text-[#BC914D] transition-colors group"
                    >
                      <span className="text-lg font-medium">Tema</span>
                    </Link>
                  </div>

                  <div className="border-b border-slate-50">
                    <Link
                      to="/pricing"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-5 text-slate-600 hover:text-[#BC914D] transition-colors group"
                    >
                      <span className="text-lg font-medium">Harga Paket</span>
                    </Link>
                  </div>

                  {/* Portfolio Mobile Accordion */}
                  <div className="border-b border-slate-50">
                    <button
                      onClick={() => setIsMobilePortfolioOpen(!isMobilePortfolioOpen)}
                      className="w-full flex items-center justify-between px-4 py-5 text-slate-600 hover:text-[#BC914D] transition-colors group"
                    >
                      <span className="text-lg font-medium">Portofolio</span>
                      <ChevronDown
                        size={20}
                        className={`text-slate-200 transition-transform duration-300 ${isMobilePortfolioOpen ? 'rotate-180 text-[#BC914D]' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {isMobilePortfolioOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-slate-50/50 rounded-xl mb-2"
                        >
                          <div className="flex flex-col py-2">
                            {portfolioItems.map((item) => (
                              <Link
                                key={item.to}
                                to={item.to}
                                onClick={() => setIsMenuOpen(false)}
                                className="px-8 py-3 text-sm text-slate-500 hover:text-[#BC914D] transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="border-b border-slate-50">
                    <Link
                      to="/faq"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-5 text-slate-600 hover:text-[#BC914D] transition-colors group"
                    >
                      <span className="text-lg font-medium">FAQ</span>
                    </Link>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="px-8 py-8 flex flex-col gap-4 bg-white">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant="secondary"
                      className="w-full h-14 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium text-lg border-0 shadow-none"
                    >
                      Log In
                    </Button>
                  </Link>
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                    <Button
                      className="w-full h-14 rounded-full bg-[#BC914D] hover:bg-[#a37d42] text-white font-medium text-lg shadow-lg shadow-[#BC914D]/20 border-0"
                    >
                      Daftar Gratis
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
