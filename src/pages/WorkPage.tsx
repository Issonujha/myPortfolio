import React, { useState } from 'react';
import { FLAGSHIP_CASE_STUDIES } from '../data/studioData';
import { Cpu, CheckCircle2, Download } from 'lucide-react';
import { GithubIcon } from '../components/icons';

export const WorkPage: React.FC = () => {
  const [activeStudyId, setActiveStudyId] = useState<string>(FLAGSHIP_CASE_STUDIES[0].id);

  const activeStudy = FLAGSHIP_CASE_STUDIES.find(cs => cs.id === activeStudyId) || FLAGSHIP_CASE_STUDIES[0];

  return (
    <div className="pt-28 pb-20 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800/60 text-xs font-mono text-cyan-800 dark:text-cyan-400">
          <Cpu className="w-3.5 h-3.5" /> ARCHITECTURAL BLUEPRINTS &amp; PLATFORMS
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
          Engineering Case Studies
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Deep architectural specifications, real system design workflow diagrams, and code implementations for high-concurrency systems.
        </p>
      </div>

      {/* Case Study Selector */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 p-1.5 bg-zinc-100 dark:bg-zinc-900/80 rounded-2xl border border-zinc-200 dark:border-white/[0.08] max-w-3xl mx-auto backdrop-blur-md">
        {FLAGSHIP_CASE_STUDIES.map((cs) => (
          <button
            key={cs.id}
            onClick={() => setActiveStudyId(cs.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all shrink-0 ${
              activeStudyId === cs.id
                ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
            }`}
          >
            {cs.title}
          </button>
        ))}
      </div>

      {/* Active Case Study Spotlight */}
      <div className="rounded-3xl p-7 sm:p-10 border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-zinc-950/70 shadow-2xl space-y-8 text-left">
        
        {/* Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 dark:border-white/[0.08] pb-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60">
              {activeStudy.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight pt-1">
              {activeStudy.title}
            </h2>
            <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
              {activeStudy.tagline}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {activeStudy.githubUrl && (
              <a
                href={activeStudy.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs font-semibold transition-colors shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source</span>
              </a>
            )}
            {activeStudy.apkUrl && (
              <a
                href={activeStudy.apkUrl}
                download
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-semibold transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Get v1.44 APK</span>
              </a>
            )}
          </div>
        </div>

        {/* Real Architecture Image (if present) */}
        {activeStudy.image && (
          <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/[0.08] bg-zinc-100 dark:bg-zinc-950 shadow-2xl">
            <img
              src={activeStudy.image}
              alt={activeStudy.title}
              className="w-full h-auto max-h-[550px] object-cover"
            />
            {activeStudy.imageCaption && (
              <div className="p-3.5 bg-zinc-100 dark:bg-zinc-900/90 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 border-t border-zinc-200 dark:border-white/[0.08]">
                {activeStudy.imageCaption}
              </div>
            )}
          </div>
        )}

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {activeStudy.metrics.map((m, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/[0.05]">
              <div className="text-xl font-bold font-mono text-zinc-900 dark:text-white">{m.value}</div>
              <div className="text-[11px] font-mono text-zinc-500 uppercase mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Detailed Narrative */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-zinc-900 dark:text-white tracking-tight">
            System Design &amp; Problem Solved
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {activeStudy.description}
          </p>
        </div>

        {/* Architectural Highlights */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-zinc-900 dark:text-white tracking-tight">
            Engineering Highlights &amp; Guarantees
          </h3>
          <div className="grid grid-cols-1 gap-2.5">
            {activeStudy.highlights.map((h, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/[0.04] text-xs text-zinc-700 dark:text-zinc-300 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-white/[0.08]">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">
            Technology Stack:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {activeStudy.techStack.map((tech) => (
              <span key={tech} className="text-xs font-mono bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-white/[0.06] px-3 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
