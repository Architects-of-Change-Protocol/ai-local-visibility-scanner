import { ClipboardList, BarChart2, Lightbulb } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Enter your business details',
    body: 'Answer 20 quick questions about your online presence, reviews, website structure, and content. No technical knowledge required.',
  },
  {
    number: '02',
    icon: BarChart2,
    title: 'Get your AI Findability Score',
    body: 'Our scoring model evaluates 7 dimensions of AI visibility and gives you a clear score from 0 to 100, with a breakdown of where you stand.',
  },
  {
    number: '03',
    icon: Lightbulb,
    title: 'Receive a practical action plan',
    body: 'Get prioritized, specific recommendations tailored to your answers — so you know exactly what to fix first for the biggest impact.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your AI visibility score{' '}
            <span className="gradient-text">in three steps</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            No technical setup. No signup. Just answers and a clear, actionable report.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative text-center group">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-2xl glass-strong flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-emerald-400" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                        <span className="text-xs font-bold text-slate-400">{step.number}</span>
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm max-w-xs mx-auto">{step.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
