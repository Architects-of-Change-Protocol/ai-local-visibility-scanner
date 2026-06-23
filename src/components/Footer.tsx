import { Sparkles } from 'lucide-react';

type Language = 'es' | 'en';

interface FooterProps {
  language: Language;
}

const navLinks: Record<Language, { label: string; href: string }[]> = {
  es: [
    { label: 'Inicio', href: '#hero' },
    { label: 'Cómo funciona', href: '#how-it-works' },
    { label: 'Escaneo', href: '#scanner' },
    { label: 'Precios', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  en: [
    { label: 'Home', href: '#hero' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Scan', href: '#scanner' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
};

const copy: Record<Language, { tagline: string; disclaimer: string; rights: string }> = {
  es: {
    tagline:
      'Escaneo de Visibilidad en Recomendaciones de IA para negocios que quieren ser más fáciles de entender, comparar y considerar por sistemas de inteligencia artificial.',
    disclaimer:
      'Este escaneo es educativo y orientativo. No garantiza posiciones, rankings, menciones, citas o recomendaciones en ningún buscador, plataforma o sistema de inteligencia artificial.',
    rights: 'Todos los derechos reservados.',
  },
  en: {
    tagline:
      'AI Recommendation Visibility Scan for businesses that want to be easier to understand, compare, and consider by AI systems.',
    disclaimer:
      'This scan provides an educational visibility assessment. It does not guarantee rankings, mentions, citations, or recommendations from any search engine, platform, or AI system.',
    rights: 'All rights reserved.',
  },
};

export default function Footer({ language }: FooterProps) {
  const { tagline, disclaimer, rights } = copy[language];
  const links = navLinks[language];

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
                <div className="text-emerald-400 text-[10px] font-medium tracking-wide">AI Recommendation Visibility Scan</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md">
              {tagline}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom: disclaimer + copyright */}
        <div className="border-t border-white/5 pt-8 space-y-3">
          <p className="text-slate-600 text-xs max-w-3xl leading-relaxed">
            {disclaimer}
          </p>
          <p className="text-slate-700 text-xs">
            © {new Date().getFullYear()} AI Recommendation Visibility Scan. {rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
