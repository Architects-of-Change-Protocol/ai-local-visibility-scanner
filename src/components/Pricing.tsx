import { Check, Zap, Star, Wrench } from 'lucide-react';
import { LINKS } from '@/lib/constants';
import { translations } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';

const planIcons = [Zap, Star, Wrench];
const planHighlight = [false, true, false];
const planIsAnchor = [true, false, false];
const planHref = ['#scanner', LINKS.calendly, LINKS.calendly];

const ctaClass = (highlight: boolean) =>
  `block text-center font-bold py-3.5 rounded-xl transition-all duration-200 hover:scale-105 ${
    highlight
      ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
      : 'glass border border-white/10 text-white hover:bg-white/10'
  }`;

interface PricingProps {
  language: Language;
}

export default function Pricing({ language }: PricingProps) {
  const t = translations[language].pricing;
  const plans = t.plans;

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">{t.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.headline1}{' '}
            <span className="gradient-text">{t.headlineHighlight}</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">{t.subheadline}</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {plans.map((plan, i) => {
            const Icon = planIcons[i];
            const highlight = planHighlight[i];
            const isAnchor = planIsAnchor[i];
            const href = planHref[i];
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-7 flex flex-col ${
                  highlight ? 'glass-strong gradient-border pulse-glow' : 'glass hover:bg-white/[0.06] transition-colors'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${highlight ? 'bg-emerald-500/20' : 'bg-slate-800'}`}>
                    <Icon className={`w-5 h-5 ${highlight ? 'text-emerald-400' : 'text-slate-400'}`} />
                  </div>
                  <h3 className="text-white font-bold text-lg">{plan.name}</h3>
                  <div className="text-3xl font-bold gradient-text mt-1 mb-1">{plan.price}</div>
                  <p className="text-slate-500 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-3 flex-1 mb-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                {isAnchor ? (
                  <a href={href} className={ctaClass(highlight)}>{plan.cta}</a>
                ) : (
                  <a href={href} target="_blank" rel="noopener noreferrer" className={ctaClass(highlight)}>
                    {plan.cta}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
