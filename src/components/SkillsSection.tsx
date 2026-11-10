import React from 'react';
import { Layers, Cpu, Server, Smartphone, Wrench } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getIconForCategory = (idx: number) => {
    switch (idx) {
      case 0:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 2:
        return <Smartphone className="w-5 h-5 text-purple-400" />;
      default:
        return <Wrench className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-cyan-400">
            <Layers className="w-3.5 h-3.5" /> TECHNICAL PROFICIENCY MATRIX
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering Skills &amp; Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Engineered with deep foundations in concurrency, resilient networking, and type safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.skills.map((category, idx) => (
            <div
              key={category.title}
              className="glass-panel rounded-2xl p-7 border border-slate-800 hover:border-slate-700 transition-all space-y-5"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  {getIconForCategory(idx)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-3 rounded-xl border flex items-center justify-between text-xs transition-colors ${
                      skill.highlight
                        ? 'bg-slate-900/90 border-cyan-500/30 text-white shadow-sm shadow-cyan-500/5'
                        : 'bg-slate-950/60 border-slate-800/80 text-slate-300'
                    }`}
                  >
                    <span className="font-medium tracking-tight pr-2">
                      {skill.name}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold shrink-0 ${
                        skill.level === 'Expert'
                          ? 'bg-cyan-950 text-cyan-400 border border-cyan-800/60'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
