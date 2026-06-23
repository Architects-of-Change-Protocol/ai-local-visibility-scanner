'use client';

import { ArrowRight, Sparkles, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface HeroProps {
  onScanClick: () => void;
  onSampleClick: () => void;
}

function MockReportCard() {
  const categories = [
    { label: 'Perfil', score: 10, max: 15 },
    { label: 'Reseñas', score: 9, max: 15 },
    { label: 'Sitio web', score: 8, max: 20 },
    { label: 'Contenido', score: 5, max: 15 },
  ];

  const weakAreas = ['Prueba local', 'Claridad de servicios', 'FAQs', 'Datos estructurados'];

  return (
    <div className="glass-strong rounded-2xl p-6 w-full max-w-sm mx-auto gradient-border pulse-glow">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-wider">Ejemplo de reporte</p>
          <p className="text-white font-semibold mt-0.5">Clínica dental</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold gradient-text">64</div>
          <div className="text-xs text-slate-400">/100</div>
        </div>
      </div>

      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg px-3 py-1.5 mb-4 flex items-center gap-2">
        <AlertTriangle className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
        <span className="text-yellow-300 text-xs font-medium">Visible, pero aún no recomendable por IA</span>
      </div>

      <div className="space-y-2 mb-4">
        {categories.map((cat) => (
          <div key={cat.label}>
            <div className="flex justify-between text-xs text-slate-400 mb-1">
              <span>{cat.label}</span>
              <span>{cat.score}/{cat.max}</span>
            </div>
            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
                style={{ width: `${(cat.score / cat.max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div>
        <p className="text-xs text-slate-500 mb-2">Áreas débiles:</p>
        <div className="flex flex-wrap gap-1.5">
          {weakAreas.map((area) => (
            <span
              key={area}
              className="flex items-center gap-1 text-xs bg-red-500/10 text-red-400 border border-red-500/20 rounded-full px-2 py-0.5"
            >
              <XCircle className="w-3 h-3" />
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero({ onScanClick, onSampleClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-300 font-medium">Escaneo de Visibilidad en Recomendaciones de IA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              ¿Tu negocio aparece como una{' '}
              <span className="gradient-text">opción recomendable</span>{' '}
              para la IA?
            </h1>

            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
              Descubrí en menos de 2 minutos si tu presencia digital tiene las señales de claridad,
              confianza y relevancia que ayudan a que sistemas de IA puedan entender, comparar y
              considerar tu negocio en recomendaciones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={onScanClick}
                className="group flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                Escanear mi negocio — $30
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onSampleClick}
                className="flex items-center justify-center gap-2 glass hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-white/10"
              >
                <CheckCircle className="w-4 h-4 text-slate-400" />
                Ver ejemplo de reporte
              </button>
            </div>

            <p className="text-sm text-slate-500">
              Pago seguro con Stripe. Resultado desbloqueado después del pago.
            </p>
          </div>

          <div className="lg:flex lg:justify-end animate-fade-in-up hidden lg:block">
            <MockReportCard />
          </div>
        </div>
      </div>
    </section>
  );
}
