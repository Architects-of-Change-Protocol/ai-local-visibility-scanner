'use client';

import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onScanClick: () => void;
}

export default function FinalCTA({ onScanClick }: FinalCTAProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-4">Don&#39;t wait</p>
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Don&#39;t let AI{' '}
          <span className="gradient-text">misunderstand</span>{' '}
          your business.
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          Every day without clear AI signals is a day your competitors get recommended and you don&#39;t.
          It takes less than 2 minutes to find out where you stand.
        </p>

        <button
          onClick={onScanClick}
          className="group inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30"
        >
          Scan My Business
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-slate-600 text-sm mt-6">No signup required. Takes less than 2 minutes.</p>
      </div>
    </section>
  );
}
