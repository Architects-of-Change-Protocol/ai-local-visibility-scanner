import { Sparkles } from 'lucide-react';
import { translations } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language].footer;

  return (
    <footer className="border-t border-white/5 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top row: logo + tagline + nav */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">

          {/* Logo + tagline */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="leading-none">
                <div className="text-white font-bold text-sm tracking-tight">AI Visibility Scan</div>
                <div className="text-emerald-400 text-[10px] font-medium tracking-wide">{t.logoSub}</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md">{t.tagline}</p>
          </div>

          {/* Navigation */}
          <nav aria-label={language === 'es' ? 'Navegación del pie de página' : 'Footer navigation'}>
            <ul className="space-y-2">
              {t.nav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors duration-150">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom: disclaimer + copyright */}
        <div className="border-t border-white/5 pt-8 space-y-3">
          <p className="text-slate-600 text-xs max-w-3xl leading-relaxed">{t.disclaimer}</p>
          <p className="text-slate-700 text-xs">
            © {new Date().getFullYear()} AI Recommendation Visibility Scan. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
