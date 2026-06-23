'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { translations } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[language].header;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleNavClick(href: string) {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass border-b border-white/[0.06] shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[70px]">

            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
              className="flex items-center gap-2.5 group shrink-0"
              aria-label="AI Visibility Scan"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/30 transition-colors">
                <Sparkles className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="leading-none">
                <div className="text-white font-bold text-sm sm:text-base tracking-tight">AI Visibility Scan</div>
                <div className="text-emerald-400 text-[10px] font-medium tracking-wide hidden sm:block">{t.logoSub}</div>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label={language === 'es' ? 'Navegación principal' : 'Main navigation'}>
              {t.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className="text-slate-400 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/[0.05] transition-all duration-150"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop right: language toggle + CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageToggle language={language} setLanguage={setLanguage} />
              <a
                href="#scanner"
                onClick={(e) => { e.preventDefault(); handleNavClick('#scanner'); }}
                className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 whitespace-nowrap"
              >
                {t.cta}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile: language toggle + hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <LanguageToggle language={language} setLanguage={setLanguage} />
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="w-9 h-9 flex items-center justify-center rounded-lg glass border border-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label={mobileOpen
                  ? (language === 'es' ? 'Cerrar menú' : 'Close menu')
                  : (language === 'es' ? 'Abrir menú' : 'Open menu')}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`fixed top-[64px] sm:top-[70px] left-0 right-0 z-40 lg:hidden transition-all duration-300 ease-out ${
          mobileOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="glass-strong border-b border-white/[0.08] shadow-xl shadow-black/40 mx-4 rounded-2xl overflow-hidden">
          <nav className="px-4 py-3" aria-label={language === 'es' ? 'Menú móvil' : 'Mobile menu'}>
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="flex items-center text-slate-300 hover:text-white font-medium text-base py-3 px-2 rounded-lg hover:bg-white/[0.05] transition-colors border-b border-white/[0.04] last:border-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="px-4 pb-4">
            <a
              href="#scanner"
              onClick={(e) => { e.preventDefault(); handleNavClick('#scanner'); }}
              className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm py-3 rounded-xl transition-all duration-200"
            >
              {t.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function LanguageToggle({ language, setLanguage }: { language: Language; setLanguage: (l: Language) => void }) {
  return (
    <div className="flex items-center glass border border-white/10 rounded-lg overflow-hidden text-xs font-bold">
      <button
        onClick={() => setLanguage('es')}
        className={`px-2.5 py-1.5 transition-colors ${language === 'es' ? 'bg-emerald-500/20 text-emerald-300' : 'text-slate-500 hover:text-slate-300'}`}
        aria-label="Cambiar a español"
        aria-pressed={language === 'es'}
      >
        ES
      </button>
      <div className="w-px h-4 bg-white/10" />
      <button
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1.5 transition-colors ${language === 'en' ? 'bg-emerald-500/20 text-emerald-300' : 'text-slate-500 hover:text-slate-300'}`}
        aria-label="Switch to English"
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  );
}
