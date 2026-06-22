'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Does this guarantee that ChatGPT will recommend my business?',
    a: 'No. The scanner helps identify signals that make your business clearer, more trustworthy, and easier for search engines and AI systems to understand. No tool or service can guarantee AI recommendations — AI systems make their own determinations. What we can do is help you remove the barriers that cause AI to skip or misrepresent your business.',
  },
  {
    q: 'Is this SEO?',
    a: 'It includes SEO fundamentals, but the focus goes further. AI-era visibility is about clarity, trust, structured business information, and answering real customer questions — not just ranking for keywords. Think of it as the next layer on top of traditional local SEO.',
  },
  {
    q: 'Do I need a new website?',
    a: 'Not always. Many of the highest-impact improvements — adding FAQs, testimonials, service area details, pricing ranges, and schema markup — can be added to your existing website without a redesign. A new site is rarely the first priority.',
  },
  {
    q: 'Can agencies use this tool?',
    a: 'Yes. Agencies can use the AI Local Visibility Scanner as a lead generation and diagnostic tool for local clients. Run a scan during a sales call to immediately demonstrate gaps and opportunities. Our Pro Audit and Done-For-You tiers are structured to work well with agency workflows.',
  },
  {
    q: 'How long does the scan take?',
    a: 'Less than 2 minutes. The form asks 20 yes/no and fill-in questions about your current online presence. No logins, no integrations, no technical setup required. Your score is instant.',
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
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Common questions,{' '}
            <span className="gradient-text">honest answers</span>
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
