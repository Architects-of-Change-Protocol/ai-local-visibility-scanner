import { Bot, Layers, EyeOff, ShieldCheck } from 'lucide-react';

const pains = [
  {
    icon: Bot,
    color: 'emerald',
    title: 'Los clientes le piden recomendaciones a la IA',
    body: 'En lugar de buscar en Google, millones de clientes ahora le preguntan a ChatGPT, Gemini, Perplexity o Siri: "¿Quién es el mejor plomero cerca de mí?" Tu negocio necesita aparecer como una opción recomendable.',
  },
  {
    icon: Layers,
    color: 'blue',
    title: 'La IA resume en lugar de mostrar links',
    body: 'Las herramientas de IA no listan diez opciones. Eligen una o dos, explican por qué son confiables y las presentan como la respuesta. Si no sos claro, no sos elegido.',
  },
  {
    icon: EyeOff,
    color: 'purple',
    title: 'Los negocios poco claros son ignorados',
    body: 'Si tu sitio web, perfil de Google y contenido no explican claramente qué hacés, a quién servís y dónde — los sistemas de IA pasan al competidor que sí lo hace.',
  },
  {
    icon: ShieldCheck,
    color: 'rose',
    title: 'Las señales de confianza importan más que nunca',
    body: 'Los sistemas de IA evalúan reseñas, datos estructurados, información NAP consistente y descripciones de servicios claras. Que falte alguna de estas señales es una barrera que te cuesta recomendaciones.',
  },
];

const colorMap: Record<string, { bg: string; icon: string }> = {
  emerald: { bg: 'bg-emerald-500/15', icon: 'text-emerald-400' },
  blue: { bg: 'bg-blue-500/15', icon: 'text-blue-400' },
  purple: { bg: 'bg-purple-500/15', icon: 'text-purple-400' },
  rose: { bg: 'bg-rose-500/15', icon: 'text-rose-400' },
};

export default function PainSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-rose-400 font-semibold text-sm uppercase tracking-wider mb-3">El problema</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Cuatro razones por las que la IA está{' '}
            <span className="gradient-text">dejando negocios afuera</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            La mayoría de los negocios locales no saben cómo los evalúan los sistemas de IA — ni
            que ya están perdiendo clientes frente a competidores mejor posicionados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {pains.map((pain) => {
            const Icon = pain.icon;
            const colors = colorMap[pain.color];
            return (
              <div
                key={pain.title}
                className="glass rounded-2xl p-8 hover:bg-white/[0.06] transition-all duration-200 hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{pain.title}</h3>
                <p className="text-slate-400 leading-relaxed">{pain.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
