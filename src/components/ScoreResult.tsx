'use client';

import { useEffect, useRef, useState } from 'react';
import { CheckCircle, AlertTriangle, XCircle, TrendingUp, ExternalLink } from 'lucide-react';
import type { ScanResult } from '@/lib/types';
import { LINKS } from '@/lib/constants';
import { translations } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';

interface ScoreResultProps {
  result: ScanResult;
  businessName: string;
  language: Language;
}

function ScoreRing({ score }: { score: number }) {
  const [animated, setAnimated] = useState(false);
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (animated ? (score / 100) * circumference : circumference);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(t);
  }, []);

  const ringColor =
    score >= 85 ? '#10b981' : score >= 70 ? '#3b82f6' : score >= 50 ? '#eab308' : score >= 30 ? '#f97316' : '#ef4444';

  return (
    <div className="relative w-36 h-36 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="54" fill="none" stroke="#1e293b" strokeWidth="10" />
        <circle
          cx="60" cy="60" r="54" fill="none" stroke={ringColor} strokeWidth="10"
          strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset}
          className="score-ring" style={{ filter: `drop-shadow(0 0 8px ${ringColor}60)` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-white">{score}</span>
        <span className="text-sm text-slate-400">/100</span>
      </div>
    </div>
  );
}

function CategoryBar({ label, score, maxScore, description }: { label: string; score: number; maxScore: number; description: string }) {
  const pct = Math.round((score / maxScore) * 100);
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const barColor = pct >= 70 ? 'from-emerald-500 to-emerald-400' : pct >= 40 ? 'from-yellow-500 to-yellow-400' : 'from-rose-500 to-rose-400';

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="text-sm font-medium text-slate-300">{label}</span>
        <span className="text-sm font-bold text-white">{score}<span className="text-slate-500 font-normal">/{maxScore}</span></span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden mb-1">
        <div
          className={`h-full bg-gradient-to-r ${barColor} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: animated ? `${pct}%` : '0%' }}
        />
      </div>
      <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">{description}</p>
    </div>
  );
}

const statusConfig: Record<string, { icon: React.ElementType; bg: string; border: string; text: string }> = {
  emerald: { icon: CheckCircle, bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400' },
  blue: { icon: TrendingUp, bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
  yellow: { icon: AlertTriangle, bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400' },
  orange: { icon: AlertTriangle, bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400' },
  red: { icon: XCircle, bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400' },
};

export default function ScoreResult({ result, businessName, language }: ScoreResultProps) {
  const cfg = statusConfig[result.statusColor] ?? statusConfig.yellow;
  const StatusIcon = cfg.icon;
  const t = translations[language].scoreResult;

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">{t.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">{t.headline}</h2>
          {businessName && <p className="text-slate-400 text-lg">{businessName}</p>}
        </div>

        {/* Score card */}
        <div className="glass-strong rounded-2xl p-8 mb-6 gradient-border">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="shrink-0">
              <ScoreRing score={result.totalScore} />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className={`inline-flex items-center gap-2 ${cfg.bg} border ${cfg.border} rounded-full px-4 py-1.5 mb-4`}>
                <StatusIcon className={`w-4 h-4 ${cfg.text}`} />
                <span className={`text-sm font-semibold ${cfg.text}`}>{result.statusLabel}</span>
              </div>
              <p className="text-slate-300 leading-relaxed">{result.summary}</p>
            </div>
          </div>
        </div>

        {/* Category breakdown */}
        <div className="glass rounded-2xl p-6 sm:p-8 mb-6">
          <h3 className="text-white font-bold text-lg mb-6">{t.breakdownTitle}</h3>
          <div className="space-y-5">
            {result.categories.map((cat) => (
              <CategoryBar key={cat.label} {...cat} />
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="glass rounded-2xl p-6 sm:p-8 mb-6">
          <h3 className="text-white font-bold text-lg mb-2">{t.recommendationsTitle}</h3>
          <p className="text-slate-400 text-sm mb-6">{t.recommendationsSubtitle}</p>
          <ol className="space-y-4">
            {result.recommendations.map((rec, i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-xs font-bold text-emerald-400">
                  {i + 1}
                </span>
                <p className="text-slate-300 text-sm leading-relaxed pt-0.5">{rec}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Estimated opportunity */}
        <div className="glass rounded-2xl p-6 mb-6 bg-blue-500/5 border border-blue-500/15">
          <div className="flex gap-3">
            <TrendingUp className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-semibold mb-1">{t.opportunityTitle}</h4>
              <p className="text-slate-400 text-sm">{result.estimatedOpportunity}</p>
            </div>
          </div>
        </div>

        {/* Upsell CTA */}
        <div className="glass-strong rounded-2xl p-8 gradient-border">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">{t.upsellTitle}</h3>
            <p className="text-slate-400 max-w-xl mx-auto">{t.upsellBody}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={LINKS.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:scale-105"
            >
              {t.proAuditCta}
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={LINKS.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 glass hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 border border-white/10"
            >
              {t.implementationCta}
            </a>
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 glass hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 border border-white/10"
            >
              {t.whatsappCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
