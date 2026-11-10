import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-cyan-400">
            <Briefcase className="w-3.5 h-3.5" /> CAREER &amp; TRACK RECORD
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Demonstrated track record of delivering resilient backend platforms and innovative systems.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-5 md:before:left-1/2 md:before:-ml-[1px] before:w-0.5 before:bg-slate-800">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row items-start ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              } group`}
            >
              {/* Timeline Center Node */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#090d16] border-2 border-cyan-500/80 flex items-center justify-center z-10 shadow-md shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              </div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                <div className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" /> {exp.period}
                      </span>
                      <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-slate-300">
                      {exp.company}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {exp.summary}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    {exp.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
