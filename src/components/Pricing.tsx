import { Check, Zap, Star, Wrench } from 'lucide-react';
import { LINKS } from '@/lib/constants';

const plans = [
  {
    icon: Zap,
    name: 'Reporte Inicial',
    nameEn: 'Starter Report',
    price: '$29',
    badge: null,
    description: 'Ideal para dueños que quieren entender qué mejorar',
    features: [
      'Puntaje completo de visibilidad en recomendaciones de IA',
      'Checklist priorizado',
      'Plan de acción de 7 días',
      'Exportación en PDF',
    ],
    cta: 'Obtener Reporte Inicial',
    href: LINKS.stripe,
    highlight: false,
  },
  {
    icon: Star,
    name: 'Auditoría Pro',
    nameEn: 'Pro Audit',
    price: '$99',
    badge: 'Más popular',
    description: 'Para negocios locales que toman en serio su visibilidad',
    features: [
      'Revisión manual del sitio web y Google Business Profile',
      'Comparación con competidores',
      'Recomendaciones personalizadas',
      'Video explicativo',
      'Seguimiento a 30 días',
    ],
    cta: 'Reservar Auditoría Pro',
    href: LINKS.calendly,
    highlight: true,
  },
  {
    icon: Wrench,
    name: 'Implementación Completa',
    nameEn: 'Done-For-You Setup',
    price: 'desde $499',
    badge: null,
    description: 'Para negocios que quieren que alguien más lo haga',
    features: [
      'Mejoras de copy en el sitio web',
      'Sección de preguntas frecuentes',
      'Páginas de servicios locales',
      'Mejoras de CTA',
      'Recomendaciones de contenido estructurado',
      'Configuración de schema markup',
    ],
    cta: 'Iniciar Implementación',
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
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">Precios</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            De la visibilidad a la{' '}
            <span className="gradient-text">implementación</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Elegí el nivel de apoyo que más se ajusta a donde estás y lo que necesitás para avanzar.
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
