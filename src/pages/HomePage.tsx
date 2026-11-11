import React from 'react';
import { Link } from 'react-router-dom';
import { FLAGSHIP_CASE_STUDIES } from '../data/studioData';
import {
  Cpu,
  Layers,
  Smartphone,
  Server,
  ArrowRight,
  ExternalLink,
  Download,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-28 pb-24">
      
      {/* ========================================================
          1. HERO SECTION (Senior Systems & AI Architect)
         ======================================================== */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-cyan-500/15 via-indigo-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.1] text-xs font-mono text-cyan-700 dark:text-cyan-400 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>AI SYSTEMS &bull; DISTRIBUTED PLATFORMS &bull; ANDROID KERNEL</span>
          </div>

          {/* Main Headline */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.08]">
              Engineering Autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400">AI Platforms</span> &amp; Distributed Systems.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Hi, I'm <strong className="text-zinc-900 dark:text-white">Sonu Kumar Jha</strong>. I architect 8-layer enterprise AI agent swarms, high-throughput Server-Driven UI (SDUI) engines, and low-level Android VPN network utilities.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/work"
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white dark:text-black font-bold text-xs font-mono px-6 py-3.5 rounded-xl shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02]"
            >
              <span>Explore Architecture Deep Dives</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/apks"
              className="flex items-center gap-2 bg-white dark:bg-zinc-900/90 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-white/[0.1] font-mono text-xs px-5 py-3.5 rounded-xl shadow-sm transition-colors"
            >
              <Smartphone className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>UsageDataTrack APKs</span>
            </Link>

            <a
              href="https://github.com/Issonujha"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 bg-white dark:bg-zinc-900/90 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-white/[0.1] font-mono text-xs px-5 py-3.5 rounded-xl shadow-sm transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Architectural Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-10 border-t border-zinc-200 dark:border-white/[0.08]">
            {[
              { value: "<15ms", label: "Agent Gateway Latency" },
              { value: "8-Layer", label: "Enterprise AI Security Stack" },
              { value: "44 Releases", label: "Android APK Kernel Utility" },
              { value: "100%", label: "Zero Direct DB Mutation" },
            ].map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.06] text-left shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white font-mono tracking-tight">
                  {m.value}
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 font-medium">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          2. CORE TECHNICAL COMPETENCIES & DOMAIN MASTERY
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            TECHNICAL ARSENAL
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Engineering Domains &amp; Core Stack
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
            Battle-tested systems engineering spanning distributed microservices, LLM agent pipelines, and kernel-level networking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {[
            {
              icon: Cpu,
              title: "Autonomous AI & LLM Systems",
              desc: "Multi-agent swarm coordination, Model Context Protocol (MCP), tool routing, prompt injection defense, and streaming SSE pipelines.",
              skills: ["Python", "FastAPI", "Spring AI", "LangChain", "Vector DBs", "Claude / Gemini APIs"],
              highlightColor: "text-cyan-500",
            },
            {
              icon: Layers,
              title: "Server-Driven UI (SDUI)",
              desc: "JSON schema-driven UI runtime dehydrating backend layouts to cross-platform mobile & web clients with dynamic state binding.",
              skills: ["React Native", "React 19", "TypeScript", "Tailwind CSS", "Dynamic Forms", "Atomic Locks"],
              highlightColor: "text-sky-500",
            },
            {
              icon: Server,
              title: "Distributed Microservices",
              desc: "Decoupled cloud microservices with Eureka dynamic service discovery, Feign RPC, circuit breakers, and distributed transactional locking.",
              skills: ["Java 17/21", "Spring Boot", "Spring Cloud", "PostgreSQL", "Redis", "Kafka / RabbitMQ"],
              highlightColor: "text-emerald-500",
            },
            {
              icon: Smartphone,
              title: "Native Android & Network Kernel",
              desc: "Low-level OS utilities via Android VpnService, QUIC UDP 443 termination, per-app network firewalls, and WorkManager background sync.",
              skills: ["Android SDK", "Kotlin / Java", "VpnService API", "Network Security", "WorkManager", "IPC & AIDL"],
              highlightColor: "text-purple-500",
            },
          ].map((domain, i) => (
            <div
              key={i}
              className="glow-card rounded-2xl p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.08] flex items-center justify-center">
                  <domain.icon className={`w-5 h-5 ${domain.highlightColor}`} />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight">
                  {domain.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {domain.desc}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-zinc-100 dark:border-white/[0.06]">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                  Key Technologies:
                </span>
                <div className="flex flex-wrap gap-1">
                  {domain.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 border border-zinc-200 dark:border-white/[0.06]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          3. FLAGSHIP ARCHITECTURAL CASE STUDIES
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            PROVEN PRODUCTION PLATFORMS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Flagship Engineering Systems
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
            Architectural case studies engineered, load-tested, and deployed in production.
          </p>
        </div>

        {/* 4 Flagship Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {FLAGSHIP_CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              className="rounded-3xl p-7 sm:p-8 border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-zinc-950/60 shadow-xl space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60">
                    {cs.badge}
                  </span>
                  <Link
                    to="/work"
                    className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Read Architecture Spec</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {cs.image && (
                  <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-white/[0.08] max-h-56 shadow-sm">
                    <img src={cs.image} alt={cs.title} className="w-full h-full object-cover" />
                  </div>
                )}

                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                    {cs.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                    {cs.tagline}
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                    {cs.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/[0.06] text-xs font-mono">
                  {cs.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="font-bold text-zinc-900 dark:text-white">{m.value}</div>
                      <div className="text-[10px] text-zinc-500">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Key Highlights */}
                <div className="space-y-1.5 pt-2">
                  {cs.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="text-xs text-zinc-700 dark:text-zinc-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Stack & Action */}
              <div className="pt-4 border-t border-zinc-100 dark:border-white/[0.08] flex items-center justify-between">
                <div className="flex flex-wrap gap-1 max-w-[70%]">
                  {cs.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] font-mono bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 px-2 py-0.5 rounded border border-zinc-200 dark:border-white/[0.06]">
                      {tech}
                    </span>
                  ))}
                </div>
                {cs.githubUrl && (
                  <a
                    href={cs.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                )}
                {cs.apkUrl && (
                  <a
                    href={cs.apkUrl}
                    download
                    className="inline-flex items-center gap-1 text-xs font-mono text-purple-600 dark:text-purple-400 hover:underline font-semibold"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>APK</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
          >
            <span>View Complete Engineering Architecture Blueprints</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ========================================================
          4. USAGEDATATRACK ANDROID APK RELEASES HIGHLIGHT
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 border border-purple-200 dark:border-purple-500/40 bg-purple-50/50 dark:bg-zinc-950/80 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 text-xs font-mono border border-purple-200 dark:border-purple-800/60">
              <Smartphone className="w-3.5 h-3.5" />
              <span>NATIVE ANDROID UTILITY ENGINE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              UsageDataTrack v1.44 Stable Release
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Per-app network firewall, QUIC UDP 443 termination, full scan uninstalled app reconciliation, and automated background update via WorkManager. Over 40 production releases hosted directly on GitHub Pages.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="/apk/app-v1.44.apk"
              download
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 hover:from-purple-400 hover:to-indigo-400 text-white font-bold text-xs font-mono shadow-xl shadow-purple-500/25 transition-all hover:scale-[1.02]"
            >
              <Download className="w-4 h-4" />
              <span>Download v1.44 APK</span>
            </a>
            <Link
              to="/apks"
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/[0.1] text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <span>View All 44 Releases</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. COMMERCIAL SERVICES STUDIO LINK (Points to portfolio.sonujha.in)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-10 border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-zinc-950/60 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              <span>LOOKING FOR CLIENT SOLUTIONS?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
              Digital Engineering &amp; Client Services Studio
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              Commercial projects, custom app development, BI dashboards, AI systems, and logo branding are handled via our dedicated studio portal.
            </p>
          </div>

          <a
            href="https://portfolio.sonujha.in/"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black font-mono font-bold text-xs hover:bg-zinc-800 dark:hover:bg-white transition-colors shadow-sm shrink-0"
          >
            <span>Visit Studio (portfolio.sonujha.in)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* ========================================================
          6. GET IN TOUCH / COLLABORATION
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-white/[0.08] pt-20">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Let's Build Something Exceptional
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Interested in architectural consulting, enterprise AI engineering, or high-scale distributed systems? Get in touch directly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 font-mono text-xs">
            <a
              href="mailto:sjha9563@gmail.com"
              className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-colors shadow-md shadow-cyan-500/20"
            >
              sjha9563@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/sonu-jha-633765167/"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/[0.1] text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://bit.ly/sonuJhaResume2024"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/[0.1] text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors shadow-sm"
            >
              <span>View Résumé</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
