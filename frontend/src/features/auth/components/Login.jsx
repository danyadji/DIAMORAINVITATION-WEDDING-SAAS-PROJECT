import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen overflow-hidden flex bg-[#f9f9f8] font-sans selection:bg-[#BC914D]/30">
      {/* Left Side: Aesthetic Imagery (Hidden on mobile) */}
      <section className="hidden lg:flex lg:w-1/2 h-full relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Wedding rings" 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200" 
          />
          <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center max-w-lg">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="font-serif italic text-5xl md:text-6xl text-white mb-6 leading-tight drop-shadow-sm"
          >
            Cinta sejati dimulai di sini
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-12 h-px bg-[#BC914D] mx-auto mb-6"
          ></motion.div>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1, duration: 0.8 }}
             className="text-white/80 uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold"
          >
            The Curated Heirloom
          </motion.p>
        </div>
      </section>

      {/* Right Side: Authentication Area */}
      <section className="w-full lg:w-1/2 h-full overflow-y-auto overflow-x-hidden flex items-start justify-center p-6 md:p-16 lg:p-24 relative scrollbar-thin scrollbar-thumb-[#BC914D]/20 scrollbar-track-transparent">
        {/* Subtle decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#BC914D]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <div className="w-full max-w-[440px] flex flex-col gap-10 z-10">
          {/* Brand Identity */}
          <div className="text-center lg:text-left">
            <Link to="/" className="inline-block mb-8">
               <h1 className="font-serif italic text-3xl text-[#7b5819] hover:text-[#BC914D] transition-colors">Diamora</h1>
            </Link>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-serif text-4xl text-[#1a1c1c] mb-2"
            >
              Selamat Datang
            </motion.h2>
            <p className="text-stone-500 text-sm tracking-tight leading-relaxed">
              Rencanakan momen bersejarah Anda dengan sentuhan kurasi terbaik dari The Atelier.
            </p>
          </div>

          {/* Authentication Section */}
          <div className="flex flex-col gap-8">
            {/* Tabs */}
            <div className="flex gap-8 border-b border-stone-200">
              <button className="pb-4 text-xs font-bold tracking-widest uppercase border-b-2 border-[#7b5819] text-[#7b5819] transition-all duration-300">
                Masuk
              </button>
              <Link to="/register" className="pb-4 text-xs font-bold tracking-widest uppercase text-stone-400 hover:text-stone-900 transition-all duration-300">
                Daftar
              </Link>
            </div>

            {/* Login Form */}
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              {/* Email Input */}
              <div className="flex flex-col gap-2 group">
                <Label 
                  htmlFor="email" 
                  className="text-[10px] font-bold uppercase tracking-widest text-stone-500 group-focus-within:text-[#7b5819] transition-colors"
                >
                  Email Address
                </Label>
                <div className="relative border-b border-stone-200 group-focus-within:border-[#7b5819] transition-all">
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="nama@email.com"
                    className="border-0 bg-transparent px-0 py-3 rounded-none focus-visible:ring-0 placeholder:text-stone-300 text-[#1a1c1c] text-base"
                  />
                  <Mail className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-300" />
                </div>
              </div>

              {/* Password Input */}
              <div className="flex flex-col gap-2 group">
                <div className="flex justify-between items-end">
                  <Label 
                    htmlFor="password" 
                    className="text-[10px] font-bold uppercase tracking-widest text-stone-500 group-focus-within:text-[#7b5819] transition-colors"
                  >
                    Password
                  </Label>
                  <Link to="/forgot-password" size="sm" className="text-[10px] font-bold uppercase tracking-widest text-[#7b5819] hover:text-[#BC914D]">
                    Lupa Password?
                  </Link>
                </div>
                <div className="relative border-b border-stone-200 group-focus-within:border-[#7b5819] transition-all">
                  <Input 
                    id="password"
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••"
                    className="border-0 bg-transparent px-0 py-3 rounded-none focus-visible:ring-0 placeholder:text-stone-300 text-[#1a1c1c] text-base pr-10"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 hover:text-[#7b5819] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col gap-4 mt-4">
                <Button 
                  type="submit" 
                  className="w-full py-7 rounded-xl bg-gradient-to-r from-[#7b5819] to-[#bc914d] hover:to-[#a37d42] text-white font-bold text-sm tracking-widest uppercase shadow-lg shadow-[#7b5819]/20 hover:scale-[0.99] active:scale-95 transition-all duration-300 border-0"
                >
                  Log In
                </Button>

                {/* Divider */}
                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t border-stone-100"></div>
                  <span className="flex-shrink mx-4 text-[10px] uppercase tracking-widest text-stone-400 font-bold">Atau</span>
                  <div className="flex-grow border-t border-stone-100"></div>
                </div>

                {/* Google Login */}
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full py-7 rounded-xl border-stone-200 text-stone-700 hover:bg-stone-50 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-3 transition-all active:scale-95"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                  </svg>
                  Masuk dengan Google
                </Button>
              </div>
            </form>

            {/* Support/Faq Link */}
            <footer className="mt-8 flex flex-col gap-6">
              <div className="p-6 bg-stone-100/50 rounded-2xl border border-stone-100 flex flex-col gap-2">
                <p className="font-serif italic text-[#7b5819] text-sm">Punya pertanyaan?</p>
                <p className="text-xs text-stone-500 leading-relaxed font-medium">
                  Hubungi pramutamu digital kami jika Anda memerlukan bantuan dalam proses autentikasi akun Anda.
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-[9px] font-bold tracking-widest text-stone-400 uppercase">
                <Link to="/privacy" className="hover:text-[#7b5819] transition-colors">Privacy Policy</Link>
                <div className="w-1 h-1 bg-stone-300 rounded-full"></div>
                <Link to="/terms" className="hover:text-[#7b5819] transition-colors">Terms of Service</Link>
                <div className="w-1 h-1 bg-stone-300 rounded-full"></div>
                <Link to="/help" className="hover:text-[#7b5819] transition-colors">Help Center</Link>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
}
