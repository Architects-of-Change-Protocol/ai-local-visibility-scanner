import { BrainCircuit, Search, MessageSquare, TrendingUp } from 'lucide-react';

const stats = [
  { value: '60%+', label: 'de las búsquedas ya tienen respuestas generadas por IA' },
  { value: '3×', label: 'más probable que elijan negocios recomendados por IA' },
  { value: '2025', label: 'el año en que la IA cambió la búsqueda local para siempre' },
];

const shifts = [
  {
    icon: Search,
    title: 'De resultados de búsqueda a resúmenes de IA',
    body: 'Los clientes ya no revisan diez links. Le hacen una pregunta a un asistente de IA y reciben una respuesta curada — usualmente con uno o dos negocios.',
  },
  {
    icon: BrainCircuit,
    title: 'La IA lee tus señales, no tus intenciones',
    body: 'Los sistemas de IA evalúan negocios basándose en información estructurada: qué ofrecés, dónde, a quién servís, qué dicen los clientes y si tus datos son claros y consistentes.',
  },
  {
    icon: MessageSquare,
    title: 'Las conversaciones reemplazan las búsquedas por palabras clave',
    body: '"Mejor dentista cerca de mí que atienda sábados con buenas reseñas" — así buscan los clientes hoy. Tu negocio necesita ser considerado en esas consultas complejas y ricas en intención.',
  },
  {
    icon: TrendingUp,
    title: 'Los que ganan obtienen ventajas que se acumulan',
    body: 'Los negocios con señales fuertes de visibilidad son citados, resumidos y recomendados más seguido — lo que construye reputación, reseñas y más citas de IA con el tiempo.',
  },
];

export default function WhyNowSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">Por qué importa ahora</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            La forma en que los clientes encuentran negocios{' '}
            <span className="gradient-text">cambió fundamentalmente</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Los asistentes de IA se convirtieron en la nueva primera página del descubrimiento local.
            La mayoría de los negocios no están listos — y no lo saben.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.value} className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {shifts.map((item) => {
            const Icon = item.icon;
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
