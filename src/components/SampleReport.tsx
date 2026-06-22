import { AlertTriangle, XCircle, CheckCircle } from 'lucide-react';

const sampleCategories = [
  { label: 'Business Profile', score: 12, maxScore: 15 },
  { label: 'Review Trust', score: 13, maxScore: 15 },
  { label: 'Website Clarity', score: 10, maxScore: 20 },
  { label: 'Conversion Readiness', score: 5, maxScore: 10 },
  { label: 'Content Usefulness', score: 7, maxScore: 15 },
  { label: 'Proof & Authenticity', score: 10, maxScore: 15 },
  { label: 'Technical & AI Readiness', score: 5, maxScore: 10 },
];

const weaknesses = [
  'No dedicated service pages (e.g. /teeth-whitening, /dental-implants)',
  'No FAQ section addressing common pre-appointment questions',
  'Good Google reviews but none featured as testimonials on the website',
  'No clear service area page listing covered neighborhoods',
  'No LocalBusiness or Service schema detected',
];

const strengths = [
  'Google Business Profile fully completed with photos',
  '87 Google reviews with a 4.8 average rating',
  'Clear services page listing core treatments',
];

export default function SampleReport() {
  return (
    <section id="sample" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-wider mb-3">Sample Report</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            See what a real scan{' '}
            <span className="gradient-text">looks like</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Here&#39;s a sample report for a local dental clinic — a common scenario we see with
            established businesses that are findable but not yet AI-ready.
          </p>
        </div>

        <div className="glass-strong rounded-2xl overflow-hidden gradient-border">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 sm:px-8 py-6 border-b border-white/8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">AI Findability Report</p>
                <h3 className="text-xl font-bold text-white">Escazú Dental Studio</h3>
                <p className="text-slate-400 text-sm mt-0.5">San José, Costa Rica · Dental Clinic</p>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-5xl font-bold gradient-text">62</div>
                <div className="text-slate-400 text-sm">/100</div>
              </div>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-yellow-300 text-sm font-medium">Visible, but not AI-ready</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Score bars */}
            <div>
              <h4 className="text-white font-semibold mb-5">Score Breakdown</h4>
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
                  What&#39;s working
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
                  Weak areas
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
                <strong className="text-white">Summary:</strong> Escazú Dental Studio has strong review signals and a complete Google profile, but lacks the structured content and AI-readable signals that would allow AI assistants to confidently recommend it. Focused improvements to service pages, FAQ content, and schema could realistically move this score to 82+ within 30 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
