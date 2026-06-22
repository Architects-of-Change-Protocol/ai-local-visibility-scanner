import { Sparkles } from 'lucide-react';
import { LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="text-white font-bold">AI Local Visibility Scanner</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#scanner" className="text-slate-400 hover:text-white transition-colors">Scanner</a>
            <a href="#sample" className="text-slate-400 hover:text-white transition-colors">Sample Report</a>
            <a href="#pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-slate-400 hover:text-white transition-colors">FAQ</a>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Contact</a>
          </nav>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-slate-600 text-xs max-w-2xl mx-auto leading-relaxed">
            This tool provides an educational visibility assessment. It does not guarantee rankings, citations, or recommendations from any AI system or search engine. Results are based on self-reported data and should be used as a directional guide only.
          </p>
          <p className="text-slate-700 text-xs mt-4">
            © {new Date().getFullYear()} AI Local Visibility Scanner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
