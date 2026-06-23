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
            <span className="text-white font-bold">AI Recommendation Visibility Scan</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#scanner" className="text-slate-400 hover:text-white transition-colors">Escanear</a>
            <a href="#sample" className="text-slate-400 hover:text-white transition-colors">Ejemplo de reporte</a>
            <a href="#pricing" className="text-slate-400 hover:text-white transition-colors">Precios</a>
            <a href="#faq" className="text-slate-400 hover:text-white transition-colors">FAQ</a>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Contacto</a>
          </nav>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-slate-600 text-xs max-w-2xl mx-auto leading-relaxed">
            Esta herramienta proporciona una evaluación educativa de visibilidad. No garantiza posiciones, citas ni recomendaciones de ningún sistema de IA o motor de búsqueda. Los resultados se basan en datos auto-reportados y deben usarse únicamente como guía orientativa.
          </p>
          <p className="text-slate-700 text-xs mt-4">
            © {new Date().getFullYear()} AI Recommendation Visibility Scan. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
