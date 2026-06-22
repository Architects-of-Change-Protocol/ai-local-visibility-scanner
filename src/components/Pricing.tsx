import { Check, Zap, Star, Wrench } from 'lucide-react';
import { LINKS } from '@/lib/constants';

const plans = [
  {
    icon: Zap,
    name: 'Starter Report',
    price: '$29',
    badge: null,
    description: 'Best for owners who want to DIY',
    features: [
      'Full AI Findability report',
      'Priority checklist',
      '7-day action plan',
      'PDF export',
    ],
    cta: 'Get Starter Report',
    href: LINKS.stripe,
    highlight: false,
  },
  {
    icon: Star,
    name: 'Pro Audit',
    price: '$99',
    badge: 'Most Popular',
    description: 'Best for serious local businesses',
    features: [
      'Manual review of website & GBP',
      'Competitor comparison',
      'Personalized recommendations',
      'Video walkthrough',
      '30-day follow-up check',
    ],
    cta: 'Book Pro Audit',
    href: LINKS.calendly,
    highlight: true,
  },
  {
    icon: Wrench,
    name: 'Done-For-You Setup',
    price: 'from $499',
    badge: null,
    description: 'Best for businesses that want implementation',
    features: [
      'Website copy improvements',
      'FAQ section creation',
      'Local service pages',
      'CTA improvements',
      'Structured content recommendations',
      'Schema markup setup',
    ],
    cta: 'Start Done-For-You',
    href: LINKS.calendly,
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            From insight to{' '}
            <span className="gradient-text">implementation</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Choose the level of support that matches where you are and what you need to move forward.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-7 flex flex-col ${
                  plan.highlight
                    ? 'glass-strong gradient-border pulse-glow'
                    : 'glass hover:bg-white/[0.06] transition-colors'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${plan.highlight ? 'bg-emerald-500/20' : 'bg-slate-800'}`}>
                    <Icon className={`w-5 h-5 ${plan.highlight ? 'text-emerald-400' : 'text-slate-400'}`} />
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

                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-bold py-3.5 rounded-xl transition-all duration-200 hover:scale-105 ${
                    plan.highlight
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
                      : 'glass border border-white/10 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
