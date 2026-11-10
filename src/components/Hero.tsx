import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Layers, Terminal as TermIcon, Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-sm shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-3.5" />
              <span>Architecting Multi-Agent Networks &amp; SDUI Engines</span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Engineering <br className="hidden sm:inline" />
                <span className="gradient-text">Autonomous AI</span> &amp; <br />
                Distributed Systems.
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl font-normal leading-relaxed pt-2">
                Hi, I'm <strong className="text-white font-semibold">Sonu Kumar Jha</strong>. I design production-grade
                <span className="text-cyan-400"> 8-Layer AI Agent Stacks</span>, dynamic
                <span className="text-indigo-400"> Server-Driven UI (SDUI)</span> platforms, and low-level
                <span className="text-purple-400"> Android VPN network engines</span>.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#systems"
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-semibold px-6 py-3 rounded-xl shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02]"
              >
                <span>View Systems Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#ai-stack"
                className="flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-medium px-5 py-3 rounded-xl transition-all hover:border-cyan-500/40"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Test AI Simulator</span>
              </a>

              <a
                href="#apks"
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 py-3 px-3 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Get UsageDataTrack v1.44 APK</span>
              </a>
            </div>

            {/* Metric counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              {PORTFOLIO_DATA.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive System Telemetry Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-5 border border-slate-700/60 shadow-2xl relative overflow-hidden group">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">sonujha@central-ai-hub:~</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE RUNTIME
                </div>
              </div>

              {/* Terminal Code / Telemetry */}
              <div className="py-4 space-y-3 font-mono text-xs leading-relaxed">
                <div className="text-slate-400">
                  <span className="text-cyan-400">$</span> agy status --cluster=prod-central-mesh
                </div>

                <div className="space-y-1.5 text-slate-300 bg-slate-950/70 p-3 rounded-lg border border-slate-800/80">
                  <div className="flex items-center justify-between text-slate-400 text-[11px]">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <Cpu className="w-3.5 h-3.5" /> 8-Layer Agent Router
                    </span>
                    <span className="text-emerald-400 font-bold">READY (0.00ms cached)</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400 text-[11px]">
                    <span className="flex items-center gap-1.5 text-indigo-400">
                      <Layers className="w-3.5 h-3.5" /> Dukaandaar SDUI Core
                    </span>
                    <span className="text-emerald-400 font-bold">HOT-RELOAD SYNCED</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400 text-[11px]">
                    <span className="flex items-center gap-1.5 text-purple-400">
                      <ShieldCheck className="w-3.5 h-3.5" /> Android VPN Firewall
                    </span>
                    <span className="text-cyan-300 font-bold">v1.44 (WorkManager)</span>
                  </div>
                </div>

                {/* Live stream preview */}
                <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-[11px] text-slate-300 space-y-1">
                  <div className="text-slate-500">// Architecture Principles</div>
                  <div><span className="text-cyan-400">const</span> <span className="text-yellow-300">PRINCIPLES</span> = [</div>
                  <div className="pl-4 text-emerald-300">"Zero-Mutation Agent Sandboxes",</div>
                  <div className="pl-4 text-emerald-300">"Server-Driven UI Tree Hydration",</div>
                  <div className="pl-4 text-emerald-300">"Circuit-Breaker Protected Services"</div>
                  <div>];</div>
                </div>

                <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-slate-400">
                    <TermIcon className="w-3 h-3 text-cyan-400" /> Trace: span-98fa-101
                  </span>
                  <span className="text-slate-500">RTT: 12ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
