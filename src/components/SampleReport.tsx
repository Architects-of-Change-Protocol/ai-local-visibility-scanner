import { AlertTriangle, XCircle, CheckCircle } from 'lucide-react';

const sampleCategories = [
  { label: 'Perfil del negocio', score: 12, maxScore: 15 },
  { label: 'Confianza en reseñas', score: 13, maxScore: 15 },
  { label: 'Claridad del sitio web', score: 10, maxScore: 20 },
  { label: 'Preparación para conversión', score: 5, maxScore: 10 },
  { label: 'Utilidad del contenido', score: 7, maxScore: 15 },
  { label: 'Prueba y autenticidad', score: 10, maxScore: 15 },
  { label: 'Preparación técnica para IA', score: 5, maxScore: 10 },
];

const weaknesses = [
  'Sin páginas dedicadas por servicio (ej. /blanqueamiento, /implantes-dentales)',
  'Sin sección de FAQ que responda preguntas previas a la consulta',
  'Buenas reseñas de Google pero ninguna usada como testimonio en el sitio web',
  'Sin página clara de área de cobertura geográfica',
  'Sin schema de LocalBusiness o Service detectado',
];

const strengths = [
  'Google Business Profile completo con fotos',
  '87 reseñas de Google con promedio de 4.8 estrellas',
  'Página de servicios clara con los tratamientos principales',
];

export default function SampleReport() {
  return (
    <section id="sample" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-wider mb-3">Ejemplo de reporte</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Mirá cómo se ve un{' '}
            <span className="gradient-text">escaneo real</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Este es un ejemplo de reporte para una clínica dental local — un caso común: negocios
            consolidados que son encontrables pero aún no están listos para ser recomendados por IA.
          </p>
        </div>

        <div className="glass-strong rounded-2xl overflow-hidden gradient-border">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 sm:px-8 py-6 border-b border-white/8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Puntaje de Visibilidad en Recomendaciones de IA</p>
                <h3 className="text-xl font-bold text-white">Escazú Dental Studio</h3>
                <p className="text-slate-400 text-sm mt-0.5">San José, Costa Rica · Clínica dental</p>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-5xl font-bold gradient-text">62</div>
                <div className="text-slate-400 text-sm">/100</div>
              </div>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-yellow-300 text-sm font-medium">Visible, pero aún no recomendable por IA</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Score bars */}
            <div>
              <h4 className="text-white font-semibold mb-5">Desglose del puntaje</h4>
              <div className="space-y-4">
                {sampleCategories.map((cat) => {
                  const pct = Math.round((cat.score / cat.maxScore) * 100);
                  const barColor = pct >= 70 ? 'from-emerald-500 to-emerald-400' : pct >= 40 ? 'from-yellow-500 to-yellow-400' : 'from-rose-500 to-rose-400';
                  return (
                    <div key={cat.label}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-slate-300">{cat.label}</span>
                        <span className="text-white font-semibold">{cat.score}<span className="text-slate-500 font-normal">/{cat.maxScore}</span></span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${barColor} rounded-full`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Strengths & Weaknesses */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Lo que está funcionando
                </h4>
                <ul className="space-y-2">
                  {strengths.map((s) => (
                    <li key={s} className="flex gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-rose-400 font-semibold mb-3 flex items-center gap-2">
                  <XCircle className="w-4 h-4" />
                  Áreas débiles
                </h4>
                <ul className="space-y-2">
                  {weaknesses.map((w) => (
                    <li key={w} className="flex gap-2 text-sm text-slate-300">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
              <p className="text-sm text-slate-400 leading-relaxed">
                <strong className="text-white">Resumen:</strong> Escazú Dental Studio tiene señales de reseñas sólidas y un perfil de Google completo, pero carece del contenido estructurado y las señales legibles por IA que permitirían a los asistentes de IA recomendarlo con confianza. Mejoras focalizadas en páginas de servicios, contenido FAQ y schema podrían mover este puntaje a 82+ en 30 días.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
