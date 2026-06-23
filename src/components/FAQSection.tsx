'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { translations } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';

interface FAQSectionProps {
  language: Language;
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.03] transition-colors"
      >
        <span className="text-white font-semibold text-sm sm:text-base">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 border-t border-white/5 pt-4">
          <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection({ language }: FAQSectionProps) {
  const t = translations[language].faq;

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">{t.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.headline1}{' '}
            <span className="gradient-text">{t.headlineHighlight}</span>
          </h2>
        </div>

        <div className="space-y-3">
          {t.items.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
