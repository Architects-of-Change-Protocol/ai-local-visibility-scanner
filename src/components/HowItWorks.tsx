import { ClipboardList, BarChart2, Lightbulb } from 'lucide-react';
import { translations } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';

const stepIcons = [ClipboardList, BarChart2, Lightbulb];

interface HowItWorksProps {
  language: Language;
}

export default function HowItWorks({ language }: HowItWorksProps) {
  const t = translations[language].howItWorks;

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">{t.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.headline1}{' '}
            <span className="gradient-text">{t.headlineHighlight}</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">{t.subheadline}</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          <div className="grid sm:grid-cols-3 gap-8">
            {t.steps.map((step, i) => {
              const Icon = stepIcons[i];
              const num = String(i + 1).padStart(2, '0');
              return (
                <div key={step.title} className="relative text-center group">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-2xl glass-strong flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-emerald-400" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                        <span className="text-xs font-bold text-slate-400">{num}</span>
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm max-w-xs mx-auto">{step.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
