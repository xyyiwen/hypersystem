'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { translations } from '@/translations';
import { LOGO_URL, LOGO_WHITE_URL, BRAND_GREEN } from '@/lib/brand';

const ROUTES = [
  { path: '/', labelKey: 'product' as const },
  { path: '/club', labelKey: 'clubSystem' as const },
  { path: '/player', labelKey: 'playerSystem' as const },
  { path: '/pricing', labelKey: 'pricing' as const },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, openTrial } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: typeof lang; label: string }[] = [
    { code: 'zh-TW', label: '繁體中文' },
    { code: 'zh-CN', label: '简体中文' },
    { code: 'en', label: 'English' },
    { code: 'ja', label: '日本語' },
  ];

  const isDarkHero = !isScrolled && (pathname === '/club' || pathname === '/player');

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-8 md:px-16 lg:px-24 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4 shadow-sm'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <Link href="/" className="group flex items-center">
          <img
            src={isDarkHero ? LOGO_WHITE_URL : LOGO_URL}
            alt="HyperSystem Logo"
            className="h-10 md:h-12 w-auto transition-all duration-500 group-hover:scale-105"
          />
        </Link>

        <div className="hidden md:flex items-center gap-0">
          <div className="flex items-center gap-2">
            {ROUTES.map(({ path, labelKey }) => {
              const isActive = pathname === path;
              let activeClasses = 'bg-slate-900 text-white shadow-lg';
              let inactiveClasses = 'text-slate-600 hover:text-blue-600 hover:bg-brand-green/10';
              if (isDarkHero) {
                activeClasses = 'bg-white text-slate-950 shadow-2xl';
                inactiveClasses = 'text-white/70 hover:text-white hover:bg-white/10';
              }
              return (
                <Link
                  key={path}
                  href={path}
                  className={`text-base font-bold px-5 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                    isActive ? activeClasses : inactiveClasses
                  }`}
                >
                  {t[labelKey]}
                </Link>
              );
            })}
          </div>

          <div
            className={`w-0.5 h-6 mx-2 transition-colors duration-500 ${
              isDarkHero ? 'bg-white/20' : 'bg-slate-200'
            }`}
          />

          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className={`flex items-center gap-2 text-base font-bold transition-all duration-500 px-4 py-2 ${
                isDarkHero ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              <Globe size={18} />
              {languages.find((l) => l.code === lang)?.label}
            </button>
            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-4 w-48 bg-white border border-slate-100 rounded-2xl shadow-2xl py-2 overflow-hidden"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-5 py-3 text-base font-bold transition-colors ${
                        lang === l.code ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={openTrial}
            style={{ backgroundColor: BRAND_GREEN }}
            className={`text-slate-950 px-8 py-3 rounded-xl text-base font-black tracking-tight transition-all shadow-xl ml-4 ${
              isDarkHero
                ? 'hover:bg-white hover:text-slate-950'
                : 'hover:bg-slate-900 hover:text-white shadow-brand'
            }`}
          >
            {t.trial}
          </button>
        </div>

        <button
          className={`md:hidden p-2 transition-colors duration-500 ${
            isDarkHero ? 'text-white' : 'text-slate-900'
          }`}
        >
          <Menu />
        </button>
      </div>
    </nav>
  );
}
