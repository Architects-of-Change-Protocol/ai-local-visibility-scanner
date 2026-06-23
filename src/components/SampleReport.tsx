import { AlertTriangle, XCircle, CheckCircle } from 'lucide-react';
import { translations } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';

interface SampleReportProps {
  language: Language;
}

export default function SampleReport({ language }: SampleReportProps) {
  const t = translations[language].sampleReport;

  return (
    <section id="sample" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-wider mb-3">{t.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.headline1}{' '}
            <span className="gradient-text">{t.headlineHighlight}</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">{t.subheadline}</p>
        </div>

        <div className="glass-strong rounded-2xl overflow-hidden gradient-border">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 sm:px-8 py-6 border-b border-white/8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">{t.scoreLabel}</p>
                <h3 className="text-xl font-bold text-white">{t.businessName}</h3>
                <p className="text-slate-400 text-sm mt-0.5">{t.businessMeta}</p>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-5xl font-bold gradient-text">62</div>
                <div className="text-slate-400 text-sm">/100</div>
              </div>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-yellow-300 text-sm font-medium">{t.status}</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Score bars */}
            <div>
              <h4 className="text-white font-semibold mb-5">{t.breakdownTitle}</h4>
              <div className="space-y-4">
                {t.categories.map((cat) => {
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
                  {t.strengthsTitle}
                </h4>
                <ul className="space-y-2">
                  {t.strengths.map((s) => (
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
                  {t.weaknessesTitle}
                </h4>
                <ul className="space-y-2">
                  {t.weaknesses.map((w) => (
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
                <strong className="text-white">{t.summaryLabel}:</strong> {t.summaryText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
