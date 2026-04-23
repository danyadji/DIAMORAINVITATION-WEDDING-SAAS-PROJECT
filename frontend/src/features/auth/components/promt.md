<!DOCTYPE html>

<html lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Diamora - Authentication</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;family=Noto+Serif:ital,wght@0,400;0,700;1,400&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "tertiary-fixed": "#d2e4ff",
                    "on-tertiary": "#ffffff",
                    "on-primary-container": "#442c00",
                    "primary-fixed-dim": "#eebf76",
                    "on-tertiary-fixed-variant": "#244870",
                    "inverse-primary": "#eebf76",
                    "surface-container-highest": "#e2e2e2",
                    "secondary-fixed-dim": "#dcc3a0",
                    "inverse-on-surface": "#f1f1f0",
                    "error": "#ba1a1a",
                    "on-surface": "#1a1c1c",
                    "surface-tint": "#7b5819",
                    "primary": "#7b5819",
                    "tertiary-container": "#799bc7",
                    "surface-container-lowest": "#ffffff",
                    "surface-container-high": "#e8e8e7",
                    "on-primary": "#ffffff",
                    "on-secondary-container": "#756144",
                    "on-background": "#1a1c1c",
                    "on-surface-variant": "#4f4539",
                    "outline": "#817567",
                    "secondary": "#6f5b3f",
                    "tertiary-fixed-dim": "#a7c9f7",
                    "on-secondary": "#ffffff",
                    "surface-container-low": "#f4f4f3",
                    "inverse-surface": "#2f3130",
                    "surface-variant": "#e2e2e2",
                    "primary-container": "#bc914d",
                    "surface": "#f9f9f8",
                    "on-primary-fixed-variant": "#614000",
                    "surface-container": "#eeeeed",
                    "on-tertiary-container": "#063258",
                    "on-primary-fixed": "#281800",
                    "secondary-fixed": "#fadeba",
                    "primary-fixed": "#ffddaf",
                    "on-error-container": "#93000a",
                    "tertiary": "#3e6089",
                    "secondary-container": "#fadeba",
                    "on-secondary-fixed": "#261904",
                    "on-tertiary-fixed": "#001c37",
                    "background": "#f9f9f8",
                    "surface-dim": "#dadad9",
                    "outline-variant": "#d2c4b4",
                    "surface-bright": "#f9f9f8",
                    "on-error": "#ffffff",
                    "on-secondary-fixed-variant": "#564429",
                    "error-container": "#ffdad6"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "fontFamily": {
                    "headline": ["Noto Serif"],
                    "body": ["Inter"],
                    "label": ["Inter"]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .editorial-gradient {
            background: linear-gradient(135deg, #7b5819 0%, #bc914d 100%);
        }
        .glass-panel {
            background: rgba(249, 249, 248, 0.8);
            backdrop-filter: blur(20px);
        }
        input:focus {
            outline: none !important;
            border-bottom-color: #7b5819 !important;
            ring: 0 !important;
        }
    </style>
</head>
<body class="bg-surface font-body text-on-surface antialiased overflow-x-hidden">
<main class="min-h-screen flex">
<!-- Left Side: Aesthetic Imagery -->
<section class="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center p-12">
<div class="absolute inset-0 z-0">
<img alt="Wedding bands on velvet" class="w-full h-full object-cover" data-alt="Close-up of two elegant gold wedding rings resting on a soft cream velvet cushion with romantic warm morning sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHC_6jVDFRYbVU36xYEvXHmCqVvoTOW36x_WtF8zFTOP4yfJPtZJ_EZDX-vtcbDxLsBqMAJkaBbWzAiVaVusKvXOUH50AvHekJb1FD8JFUre_8IPRSIoeFd-w8qGzZh933-3yfCsxmbaKYJlWHWVYa4hbPUl0DjRSz-B3EpdlRcsbRDtklGt7ZAKvvEWZiWNfmsvvwcC-IvwOUFIz3CaJHjE7jP04CgbdEGo80IPKc9hHkjlvMtpEkKq1IO3odKVSJQxCd31HcU6s"/>
<div class="absolute inset-0 bg-stone-900/40 mix-blend-multiply"></div>
</div>
<div class="relative z-10 text-center max-w-lg">
<h2 class="font-headline italic text-5xl text-white mb-6 leading-tight drop-shadow-sm">
                    Cinta sejati dimulai di sini
                </h2>
<div class="w-12 h-px bg-primary-container mx-auto mb-6"></div>
<p class="font-label text-white/80 uppercase tracking-[0.2em] text-xs">
                    The Curated Heirloom
                </p>
</div>
</section>
<!-- Right Side: Authentication Area -->
<section class="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-surface">
<div class="w-full max-w-[440px] flex flex-col gap-10">
<!-- Brand Identity -->
<div class="text-center lg:text-left">
<h1 class="font-headline italic text-3xl text-primary mb-8">Diamora</h1>
<h2 class="font-headline text-4xl text-on-surface mb-2">Selamat Datang</h2>
<p class="text-on-surface-variant text-sm font-body tracking-tight">Rencanakan momen bersejarah Anda dengan sentuhan kurasi terbaik.</p>
</div>
<!-- Tabs (UI State Simulation: Defaults to Login) -->
<div class="flex flex-col gap-8">
<div class="flex gap-8 border-b border-outline-variant/30">
<button class="pb-4 text-sm font-medium tracking-wide uppercase border-b-2 border-primary text-primary transition-all duration-300 text-stone-400 hover:text-on-surface">
                            Masuk
                        </button>
<button class="pb-4 text-sm font-medium tracking-wide uppercase hover:text-on-surface transition-all duration-300 border-b-2 border-primary text-primary">
                            Daftar
                        </button>
</div>
<!-- Login Form -->
<form class="flex flex-col gap-6" onsubmit="return false;">
<div class="flex flex-col gap-1.5 relative group">
<label class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant" for="fullname">Nama Lengkap</label>
<input class="bg-transparent border-0 border-b border-outline-variant/50 py-3 px-0 text-on-surface placeholder:text-stone-300 transition-colors focus:border-primary focus:ring-0" id="fullname" placeholder="Masukkan nama lengkap" type="text"/>
</div>
<div class="flex flex-col gap-1.5 relative group">
<label class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant" for="email">Email</label>
<input class="bg-transparent border-0 border-b border-outline-variant/50 py-3 px-0 text-on-surface placeholder:text-stone-300 transition-colors focus:border-primary focus:ring-0" id="email" placeholder="nama@email.com" type="email"/>
</div>
<div class="flex flex-col gap-1.5 relative group">
<label class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant" for="phone">Nomor Handphone</label>
<input class="bg-transparent border-0 border-b border-outline-variant/50 py-3 px-0 text-on-surface placeholder:text-stone-300 transition-colors focus:border-primary focus:ring-0" id="phone" placeholder="08xx xxxx xxxx" type="tel"/>
</div>
<div class="flex flex-col gap-1.5 relative group">
<label class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant" for="password">Password</label>
<div class="relative">
<input class="w-full bg-transparent border-0 border-b border-outline-variant/50 py-3 px-0 text-on-surface placeholder:text-stone-300 transition-colors focus:border-primary focus:ring-0" id="password" placeholder="••••••••" type="password"/>
<button class="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 hover:text-primary transition-colors" type="button">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
</div>
</div>
<div class="flex flex-col gap-1.5 relative group">
<label class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant" for="confirm-password">Konfirmasi Password</label>
<div class="relative">
<input class="w-full bg-transparent border-0 border-b border-outline-variant/50 py-3 px-0 text-on-surface placeholder:text-stone-300 transition-colors focus:border-primary focus:ring-0" id="confirm-password" placeholder="••••••••" type="password"/>
<button class="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 hover:text-primary transition-colors" type="button">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
</div>
</div>
<div class="flex flex-col gap-4 mt-4">
<button class="editorial-gradient text-white py-4 rounded-lg font-medium text-sm tracking-wide shadow-[0_12px_40px_rgba(123,88,25,0.12)] hover:scale-[0.99] active:scale-95 transition-all duration-300" type="submit">
        Daftar Sekarang
    </button>
<div class="relative flex items-center py-4">
<div class="flex-grow border-t border-outline-variant/20"></div>
<span class="flex-shrink mx-4 text-[10px] uppercase tracking-widest text-stone-400 font-bold">Atau</span>
<div class="flex-grow border-t border-outline-variant/20"></div>
</div>
<button class="flex items-center justify-center gap-3 bg-surface-container-lowest border border-outline-variant/30 py-4 rounded-lg font-medium text-sm text-on-surface hover:bg-surface-container-low transition-all duration-300" type="button">
<svg class="w-5 h-5" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
        Daftar dengan Google
    </button>
</div></form>
<!-- Footer Micro-copy -->
<footer class="mt-8 flex flex-col gap-6">
<div class="p-6 bg-surface-container-low rounded-xl">
<p class="font-headline italic text-primary text-sm mb-2">Punya pertanyaan?</p>
<p class="text-xs text-on-surface-variant leading-relaxed">Hubungi pramutamu digital kami jika Anda memerlukan bantuan dalam proses autentikasi akun Anda.</p>
</div>
<div class="flex flex-wrap gap-4 text-[10px] font-medium tracking-tighter text-stone-400 uppercase">
<a class="hover:text-primary transition-colors" href="#">Privacy Policy</a>
<span class="w-1 h-1 bg-outline-variant rounded-full self-center"></span>
<a class="hover:text-primary transition-colors" href="#">Terms of Service</a>
<span class="w-1 h-1 bg-outline-variant rounded-full self-center"></span>
<a class="hover:text-primary transition-colors" href="#">Help Center</a>
</div>
</footer>
</div>
</div>
</section>
</main>
<!-- Hidden Register Form Template (Visual reference for design consistency) -->
<template id="register-template">
<form class="flex flex-col gap-6">
<div class="flex flex-col gap-1.5 relative group">
<label class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant" for="fullname">Nama Lengkap</label>
<input class="bg-transparent border-0 border-b border-outline-variant/50 py-3 px-0 text-on-surface placeholder:text-stone-300 transition-colors focus:border-primary focus:ring-0" id="fullname" placeholder="Masukkan nama lengkap" type="text"/>
</div>
<div class="flex flex-col gap-1.5 relative group">
<label class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant" for="email">Email</label>
<input class="bg-transparent border-0 border-b border-outline-variant/50 py-3 px-0 text-on-surface placeholder:text-stone-300 transition-colors focus:border-primary focus:ring-0" id="email" placeholder="nama@email.com" type="email"/>
</div>
<div class="flex flex-col gap-1.5 relative group">
<label class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant" for="phone">Nomor Handphone</label>
<input class="bg-transparent border-0 border-b border-outline-variant/50 py-3 px-0 text-on-surface placeholder:text-stone-300 transition-colors focus:border-primary focus:ring-0" id="phone" placeholder="08xx xxxx xxxx" type="tel"/>
</div>
<div class="flex flex-col gap-1.5 relative group">
<label class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant" for="password">Password</label>
<div class="relative">
<input class="w-full bg-transparent border-0 border-b border-outline-variant/50 py-3 px-0 text-on-surface placeholder:text-stone-300 transition-colors focus:border-primary focus:ring-0" id="password" placeholder="••••••••" type="password"/>
<button class="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 hover:text-primary transition-colors" type="button">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
</div>
</div>
<div class="flex flex-col gap-1.5 relative group">
<label class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant" for="confirm-password">Konfirmasi Password</label>
<div class="relative">
<input class="w-full bg-transparent border-0 border-b border-outline-variant/50 py-3 px-0 text-on-surface placeholder:text-stone-300 transition-colors focus:border-primary focus:ring-0" id="confirm-password" placeholder="••••••••" type="password"/>
<button class="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 hover:text-primary transition-colors" type="button">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
</div>
</div>
<div class="flex flex-col gap-4 mt-4">
<button class="editorial-gradient text-white py-4 rounded-lg font-medium text-sm tracking-wide shadow-[0_12px_40px_rgba(123,88,25,0.12)] hover:scale-[0.99] active:scale-95 transition-all duration-300" type="submit">
        Daftar Sekarang
    </button>
<div class="relative flex items-center py-4">
<div class="flex-grow border-t border-outline-variant/20"></div>
<span class="flex-shrink mx-4 text-[10px] uppercase tracking-widest text-stone-400 font-bold">Atau</span>
<div class="flex-grow border-t border-outline-variant/20"></div>
</div>
<button class="flex items-center justify-center gap-3 bg-surface-container-lowest border border-outline-variant/30 py-4 rounded-lg font-medium text-sm text-on-surface hover:bg-surface-container-low transition-all duration-300" type="button">
<svg class="w-5 h-5" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
        Daftar dengan Google
    </button>
</div></form>
</template>
</body></html>