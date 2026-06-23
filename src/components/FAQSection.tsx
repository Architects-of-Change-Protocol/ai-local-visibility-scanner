'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: '¿Esto garantiza que ChatGPT va a recomendar mi negocio?',
    a: 'No. El escaneo ayuda a identificar las señales que hacen tu negocio más claro, confiable y fácil de entender para sistemas de IA. Ninguna herramienta puede garantizar que un sistema de IA te recomiende — esa determinación la toma la IA. Lo que sí podemos hacer es ayudarte a eliminar las barreras que hacen que la IA ignore o malinterprete tu negocio.',
  },
  {
    q: '¿Esto es SEO?',
    a: 'Incluye fundamentos de SEO, pero el enfoque va más allá. La visibilidad en recomendaciones de IA se trata de claridad, confianza, información estructurada y responder preguntas reales de los clientes — no solo de rankear por palabras clave. Pensalo como la siguiente capa sobre el SEO local tradicional.',
  },
  {
    q: '¿Necesito un sitio web nuevo?',
    a: 'Casi nunca. Muchas de las mejoras de mayor impacto — agregar FAQs, testimonios, detalles del área de servicio, rangos de precios y schema markup — se pueden incorporar al sitio web que ya tenés sin necesidad de un rediseño. Un sitio nuevo rara vez es la primera prioridad.',
  },
  {
    q: '¿Las agencias pueden usar esta herramienta?',
    a: 'Sí. Las agencias pueden usar el Escaneo de Visibilidad en Recomendaciones de IA como herramienta de generación de leads y diagnóstico para clientes locales. Corré un escaneo durante una llamada de ventas para demostrar de inmediato las brechas y oportunidades. Nuestros planes Pro y de Implementación Completa están diseñados para flujos de trabajo de agencias.',
  },
  {
    q: '¿Cuánto tarda el escaneo?',
    a: 'Menos de 2 minutos. El formulario hace 20 preguntas de sí/no y de completar sobre tu presencia digital actual. Sin logins, sin integraciones, sin configuración técnica. Tu puntaje es instantáneo.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.03] transition-colors"
      >
        <span className="text-white font-semibold text-sm sm:text-base">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 border-t border-white/5 pt-4">
          <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Preguntas frecuentes</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Preguntas frecuentes,{' '}
            <span className="gradient-text">respuestas honestas</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
