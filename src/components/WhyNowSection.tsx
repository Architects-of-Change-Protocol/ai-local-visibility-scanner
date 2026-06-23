import { BrainCircuit, Search, MessageSquare, TrendingUp } from 'lucide-react';
import { translations } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';

const shiftIcons = [Search, BrainCircuit, MessageSquare, TrendingUp];

interface WhyNowSectionProps {
  language: Language;
}

export default function WhyNowSection({ language }: WhyNowSectionProps) {
  const t = translations[language].whyNow;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">{t.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.headline1}{' '}
            <span className="gradient-text">{t.headlineHighlight}</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.subheadline}</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {t.stats.map((stat) => (
            <div key={stat.value} className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {t.shifts.map((item, i) => {
            const Icon = shiftIcons[i];
            return (
              <div
                key={item.title}
                className="glass rounded-2xl p-6 hover:bg-white/[0.06] transition-colors duration-200 group"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center group-hover:bg-blue-500/25 transition-colors">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
