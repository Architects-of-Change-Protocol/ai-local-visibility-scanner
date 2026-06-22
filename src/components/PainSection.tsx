import { Bot, Layers, EyeOff, ShieldCheck } from 'lucide-react';

const pains = [
  {
    icon: Bot,
    color: 'emerald',
    title: 'Customers ask AI for recommendations',
    body: 'Instead of typing into Google, millions of customers now ask ChatGPT, Gemini, Perplexity, or Siri: "Who is the best plumber in my area?" Your business needs to be the answer.',
  },
  {
    icon: Layers,
    color: 'blue',
    title: 'AI summarizes instead of showing links',
    body: 'AI tools don\'t list ten options. They pick one or two, summarize why they\'re trustworthy, and present them as the answer. If you\'re not clear, you\'re not chosen.',
  },
  {
    icon: EyeOff,
    color: 'purple',
    title: 'Unclear businesses get ignored',
    body: 'If your website, Google profile, and content don\'t clearly explain what you do, who you serve, and where — AI systems move on to a competitor that does.',
  },
  {
    icon: ShieldCheck,
    color: 'rose',
    title: 'Trust signals matter more than ever',
    body: 'AI systems weigh reviews, structured data, consistent NAP information, and clear service descriptions. Missing any of these is a red flag that costs you recommendations.',
  },
];

const colorMap: Record<string, { bg: string; icon: string }> = {
  emerald: { bg: 'bg-emerald-500/15', icon: 'text-emerald-400' },
  blue: { bg: 'bg-blue-500/15', icon: 'text-blue-400' },
  purple: { bg: 'bg-purple-500/15', icon: 'text-purple-400' },
  rose: { bg: 'bg-rose-500/15', icon: 'text-rose-400' },
};

export default function PainSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-rose-400 font-semibold text-sm uppercase tracking-wider mb-3">The problem</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Four ways AI search is{' '}
            <span className="gradient-text">leaving businesses behind</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Most local businesses have no idea how AI systems evaluate them — or that they&#39;re
            already losing customers to better-optimized competitors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {pains.map((pain) => {
            const Icon = pain.icon;
            const colors = colorMap[pain.color];
            return (
              <div
                key={pain.title}
                className="glass rounded-2xl p-8 hover:bg-white/[0.06] transition-all duration-200 hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{pain.title}</h3>
                <p className="text-slate-400 leading-relaxed">{pain.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
