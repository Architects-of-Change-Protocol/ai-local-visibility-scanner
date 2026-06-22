import { BrainCircuit, Search, MessageSquare, TrendingUp } from 'lucide-react';

const stats = [
  { value: '60%+', label: 'of searches now have AI-generated answers' },
  { value: '3×', label: 'more likely to choose AI-recommended businesses' },
  { value: '2025', label: 'the year AI changed local search forever' },
];

const shifts = [
  {
    icon: Search,
    title: 'From search results to AI summaries',
    body: 'Customers no longer scroll through ten blue links. They ask AI assistants a question and get a curated answer — usually featuring just one or two businesses.',
  },
  {
    icon: BrainCircuit,
    title: 'AI reads your signals, not your intentions',
    body: 'AI systems judge businesses on structured information: what you offer, where, who you serve, what customers say, and whether your data is clear and consistent.',
  },
  {
    icon: MessageSquare,
    title: 'Conversations replace keyword searches',
    body: '"Best dentist near me open Saturdays with good reviews" — this is how customers search today. Your business needs to match those complex, intent-rich queries.',
  },
  {
    icon: TrendingUp,
    title: 'Winners get compounding advantages',
    body: 'Businesses with strong AI signals get cited, summarized, and recommended more — which builds reputation, reviews, and more AI citations over time.',
  },
];

export default function WhyNowSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">Why this matters now</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The way customers find businesses{' '}
            <span className="gradient-text">has fundamentally changed</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            AI assistants have become the new front page for local discovery. Most businesses
            are not ready — and they don&#39;t know it.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.value} className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {shifts.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass rounded-2xl p-6 hover:bg-white/[0.06] transition-colors duration-200 group"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center group-hover:bg-blue-500/25 transition-colors">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
