import React from 'react';
import { Link } from 'react-router-dom';
import { useStudio } from '../context/StudioContext';
import { STUDIO_SERVICES, FLAGSHIP_CASE_STUDIES } from '../data/studioData';
import { FeatureTimingEstimator } from '../components/FeatureTimingEstimator';
import { Sparkles, ArrowRight, CheckCircle2, Clock } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { openChat } = useStudio();

  return (
    <div className="space-y-28 pb-20">
      
      {/* ========================================================
          1. HERO SECTION (Stripe / Linear High-Impact Product Style)
         ======================================================== */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-grid-pattern">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-cyan-500/15 via-indigo-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-100 border border-white/[0.1] dark:border-white/[0.1] light:border-zinc-300 text-xs font-mono text-cyan-400 dark:text-cyan-400 light:text-cyan-700 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>FULL-STACK DIGITAL STUDIO &bull; AI SYSTEMS &bull; GUARANTEED SLAs</span>
          </div>

          {/* Main Headline */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white dark:text-white light:text-zinc-900 leading-[1.08]">
              We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Digital Products</span>, AI Systems &amp; Brand Media.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              From enterprise web apps and native mobile SDUI to autonomous AI agents, Excel KPI dashboards, and logo branding &mdash; delivered strictly on schedule.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/services"
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-black font-bold text-xs font-mono px-6 py-3.5 rounded-xl shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02]"
            >
              <span>Explore Services &amp; Timings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => openChat()}
              className="flex items-center gap-2 bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-zinc-100 hover:bg-zinc-800 text-zinc-200 dark:text-zinc-200 light:text-zinc-800 border border-white/[0.1] dark:border-white/[0.1] light:border-zinc-300 font-mono text-xs px-5 py-3.5 rounded-xl transition-colors"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Instant Project Quote</span>
            </button>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-10 border-t border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200">
            {[
              { value: "100%", label: "On-Time SLA Delivery" },
              { value: "8 Domains", label: "End-to-End Capabilities" },
              { value: "15+", label: "Microservices Architected" },
              { value: "48h", label: "Express Turnaround Available" },
            ].map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-zinc-50 border border-white/[0.06] dark:border-white/[0.06] light:border-zinc-200 text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-zinc-900 font-mono tracking-tight">
                  {m.value}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-500 light:text-zinc-600 mt-1 font-medium">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          2. CORE COMMERCIAL SERVICES CATALOG (8 Offerings)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            COMMERCIAL CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-zinc-900">
            What We Build &amp; Deliver
          </h2>
          <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm sm:text-base">
            Every technical and creative service your product needs, backed by transparent delivery schedules and fixed scope milestones.
          </p>
        </div>

        {/* 8-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDIO_SERVICES.map((s) => (
            <div
              key={s.id}
              className="glow-card rounded-2xl p-6 border border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200 flex flex-col justify-between text-left space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                    {s.badge}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-emerald-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {s.baseDeliveryDays}d Base
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white dark:text-white light:text-zinc-900 group-hover:text-cyan-400 transition-colors tracking-tight">
                  {s.name}
                </h3>

                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed line-clamp-3">
                  {s.description}
                </p>

                {/* Popular features preview */}
                <div className="space-y-1.5 pt-2 border-t border-white/[0.06] dark:border-white/[0.06] light:border-zinc-200">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                    Key Features:
                  </span>
                  <div className="space-y-1">
                    {s.features.slice(0, 2).map((f) => (
                      <div key={f.id} className="text-[11px] text-zinc-300 dark:text-zinc-300 light:text-zinc-700 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span className="line-clamp-1">{f.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-3 border-t border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-white dark:text-white light:text-zinc-900">
                  From ${s.basePrice.toLocaleString()}
                </span>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Configure</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          3. INTERACTIVE FEATURE SELECTOR & TIMING ESTIMATOR MODULE
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeatureTimingEstimator />
      </section>

      {/* ========================================================
          4. FLAGSHIP CASE STUDIES PREVIEW
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            PROVEN ENGINEERING SYSTEMS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-zinc-900">
            Architectural Case Studies
          </h2>
          <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm sm:text-base">
            Real enterprise software architectures engineered, tested, and shipped.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {FLAGSHIP_CASE_STUDIES.slice(0, 2).map((cs) => (
            <div
              key={cs.id}
              className="rounded-3xl p-7 border border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white shadow-xl space-y-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                  {cs.badge}
                </span>
                <Link to="/work" className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1">
                  <span>Full Spec</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {cs.image && (
                <div className="rounded-xl overflow-hidden border border-white/[0.08] max-h-56">
                  <img src={cs.image} alt={cs.title} className="w-full h-full object-cover" />
                </div>
              )}

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white dark:text-white light:text-zinc-900 tracking-tight">
                  {cs.title}
                </h3>
                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed">
                  {cs.tagline}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 border border-white/[0.06] text-xs font-mono">
                {cs.metrics.map((m, i) => (
                  <div key={i}>
                    <div className="font-bold text-white dark:text-white light:text-zinc-900">{m.value}</div>
                    <div className="text-[10px] text-zinc-500">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>View All Architectural Case Studies (SDUI, AI Agents, Android Kernel)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ========================================================
          5. 4-STEP CLIENT SPRINT PROCESS
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] pt-20">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            HOW WE OPERATE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-zinc-900">
            Guaranteed On-Time Delivery Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
          {[
            { step: "01", title: "Discovery & Scope", desc: "4-hour intake call to define exact technical deliverables, schemas, and locked-in delivery SLA." },
            { step: "02", title: "System Architecture", desc: "Formal HLD/LLD diagrams, database models, and API contracts agreed upon before writing code." },
            { step: "03", title: "Rapid Sprint Build", desc: "Daily git commits, milestone demos, and continuous progress visibility on your client portal." },
            { step: "04", title: "Production Launch", desc: "Comprehensive QA evaluation, automated CI/CD deployment, zero-downtime cutover, and handoff." },
          ].map((proc) => (
            <div key={proc.step} className="p-6 rounded-2xl bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-zinc-50 border border-white/[0.06] dark:border-white/[0.06] light:border-zinc-200 space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400">STEP {proc.step}</span>
              <h4 className="text-base font-bold text-white dark:text-white light:text-zinc-900">{proc.title}</h4>
              <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed">{proc.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
