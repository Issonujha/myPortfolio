import React, { useState } from 'react';
import { STUDIO_SERVICES } from '../data/studioData';
import { FeatureTimingEstimator } from '../components/FeatureTimingEstimator';
import { useStudio } from '../context/StudioContext';
import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { openChat } = useStudio();

  const categories = ['All', 'Engineering', 'Data & Automation', 'Design & Creative'];

  const filteredServices = selectedCategory === 'All'
    ? STUDIO_SERVICES
    : STUDIO_SERVICES.filter(s => s.category === selectedCategory);

  return (
    <div className="pt-28 pb-20 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs font-mono text-cyan-400">
          <Clock className="w-3.5 h-3.5" /> GUARANTEED ON-TIME DELIVERY SLAS
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-zinc-900 leading-tight">
          Commercial Services &amp; Delivery Timings
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed">
          Select features and calculate transparent delivery deadlines and budgets for web applications, mobile SDUI apps, AI agents, Excel dashboards, and creative brand media.
        </p>
      </div>

      {/* Embedded Interactive Feature Timing Estimator */}
      <div>
        <FeatureTimingEstimator />
      </div>

      {/* Category Filter Pills */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
          <div className="text-left">
            <h2 className="text-2xl font-bold text-white dark:text-white light:text-zinc-900 tracking-tight">
              Detailed Service Specifications
            </h2>
            <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
              Browse full deliverable checklists and technical add-on features.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 border border-white/[0.08]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-mono px-3.5 py-1.5 rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-black font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Detailed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              className="rounded-3xl p-7 sm:p-8 border border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200 bg-zinc-950/70 dark:bg-zinc-950/70 light:bg-white shadow-xl space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                    {srv.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5 bg-emerald-950/50 px-2.5 py-0.5 rounded border border-emerald-800/60">
                    <Clock className="w-3.5 h-3.5" /> Base: {srv.baseDeliveryDays} Days
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-zinc-900 tracking-tight">
                    {srv.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    {srv.headline}
                  </p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed pt-1">
                    {srv.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2 p-3.5 rounded-xl bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-50 border border-white/[0.05]">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                    Core Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                    {srv.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Optional Features */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                    Available Add-on Features &amp; Delivery Days:
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {srv.features.map((f) => (
                      <div key={f.id} className="p-2.5 rounded-lg bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-100 border border-white/[0.04] flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-300 dark:text-zinc-300 light:text-zinc-800">{f.name}</span>
                        <div className="text-right shrink-0">
                          <span className="text-cyan-400 font-bold">+${f.additionalPrice}</span>
                          <span className="text-zinc-500 text-[10px] ml-1.5">(+{f.additionalDays}d)</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {srv.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-white/[0.06] px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">Starting at</span>
                  <div className="text-lg font-bold font-mono text-white dark:text-white light:text-zinc-900">
                    ${srv.basePrice.toLocaleString()}
                  </div>
                </div>
                <button
                  onClick={() => openChat(srv.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black transition-colors"
                >
                  <span>Chat for Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
