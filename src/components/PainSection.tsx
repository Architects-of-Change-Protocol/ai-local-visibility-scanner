import { Bot, Layers, EyeOff, ShieldCheck } from 'lucide-react';
import { translations } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';

const cardIcons = [Bot, Layers, EyeOff, ShieldCheck];
const cardColors = ['emerald', 'blue', 'purple', 'rose'] as const;

const colorMap: Record<string, { bg: string; icon: string }> = {
  emerald: { bg: 'bg-emerald-500/15', icon: 'text-emerald-400' },
  blue: { bg: 'bg-blue-500/15', icon: 'text-blue-400' },
  purple: { bg: 'bg-purple-500/15', icon: 'text-purple-400' },
  rose: { bg: 'bg-rose-500/15', icon: 'text-rose-400' },
};

interface PainSectionProps {
  language: Language;
}

export default function PainSection({ language }: PainSectionProps) {
  const t = translations[language].pain;

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-rose-400 font-semibold text-sm uppercase tracking-wider mb-3">{t.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.headline1}{' '}
            <span className="gradient-text">{t.headlineHighlight}</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.subheadline}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {t.cards.map((card, i) => {
            const Icon = cardIcons[i];
            const colors = colorMap[cardColors[i]];
            return (
              <div
                key={card.title}
                className="glass rounded-2xl p-8 hover:bg-white/[0.06] transition-all duration-200 hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{card.title}</h3>
                <p className="text-slate-400 leading-relaxed">{card.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
