import React, { useState } from 'react';
import { PORTFOLIO_DATA } from './data/portfolioData';
import { GithubIcon, LinkedinIcon, ExternalLinkIcon, MailIcon, FileTextIcon, DownloadIcon } from './components/icons';

export const App: React.FC = () => {
  const [activeProductTab, setActiveProductTab] = useState<string>(PORTFOLIO_DATA.products[0].id);
  const [codeOrImageTab, setCodeOrImageTab] = useState<'visual' | 'code'>('visual');
  const [emailCopied, setEmailCopied] = useState(false);

  const activeProduct = PORTFOLIO_DATA.products.find(p => p.id === activeProductTab) || PORTFOLIO_DATA.products[0];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#05070c] text-zinc-300 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* ========================================================
          1. NAVIGATION BAR (Linear / Stripe style glassmorphism)
         ======================================================== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#05070c]/80 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo Mark */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 p-[1px] transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#05070c] rounded-[7px] flex items-center justify-center font-mono text-xs font-bold text-cyan-400">
                SJ
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Sonu Jha
              </span>
              <span className="text-[10px] font-mono text-zinc-500 tracking-wider -mt-0.5">
                SYSTEMS ARCHITECT
              </span>
            </div>
          </a>

          {/* Navigation Jump Links */}
          <div className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
            <a href="#systems" className="hover:text-white transition-colors">Products &amp; Systems</a>
            <a href="#architecture" className="hover:text-white transition-colors">8-Layer AI Stack</a>
            <a href="#apks" className="hover:text-white transition-colors">Android APKs</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Roles</span>
            </div>

            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.profile.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-1.5 text-xs font-semibold bg-white hover:bg-zinc-200 text-black px-3.5 py-1.5 rounded-lg transition-all hover:scale-[1.02]"
            >
              <FileTextIcon className="w-3.5 h-3.5" />
              <span>Résumé</span>
              <ExternalLinkIcon className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </div>
      </nav>

      {/* ========================================================
          2. HERO SECTION (Stripe / Linear High-Impact Product Style)
         ======================================================== */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-grid-pattern">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-cyan-500/15 via-indigo-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-cyan-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>ENTERPRISE SYSTEMS &bull; MULTI-AGENT AI &bull; SDUI</span>
          </div>

          {/* Main Headline */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Autonomous AI</span> &amp; Distributed Systems.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Hi, I'm <strong className="text-white font-semibold">Sonu Kumar Jha</strong>. Systems architect &amp; senior engineer. I design the 8-Layer Enterprise AI Stack, Server-Driven UI platforms, and native Android OS network firewalls.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#systems"
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-black font-semibold text-sm px-6 py-3 rounded-xl shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02]"
            >
              <span>Explore Flagship Systems</span>
              <ExternalLinkIcon className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-white/[0.1] font-mono text-xs px-5 py-3 rounded-xl transition-colors"
            >
              <MailIcon className="w-4 h-4 text-cyan-400" />
              <span>{emailCopied ? "Email Copied!" : PORTFOLIO_DATA.profile.email}</span>
            </button>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-10 border-t border-white/[0.08]">
            {PORTFOLIO_DATA.metrics.map((metric, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs text-zinc-500 mt-1 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. INTERACTIVE PRODUCT STAGE (Linear / Stripe Tabbed Showcase)
         ======================================================== */}
      <section id="systems" className="py-24 relative border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
              FLAGSHIP PLATFORMS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Built for Scale &amp; Determinism
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Explore the architectural foundations, live schemas, and engineering implementations of my core platforms.
            </p>
          </div>

          {/* Product Selector Switcher (Linear Style) */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 p-1.5 bg-zinc-900/80 rounded-2xl border border-white/[0.08] max-w-3xl mx-auto mb-10 backdrop-blur-md">
            {PORTFOLIO_DATA.products.map((product) => (
              <button
                key={product.id}
                onClick={() => {
                  setActiveProductTab(product.id);
                  setCodeOrImageTab('visual');
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all shrink-0 ${
                  activeProductTab === product.id
                    ? 'bg-white text-black font-bold shadow-lg shadow-white/10'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>{product.name}</span>
              </button>
            ))}
          </div>

          {/* Active Product Stage Card */}
          <div className="glow-card rounded-3xl p-6 sm:p-10 border border-white/[0.08] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Product Deep Dive */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                      {activeProduct.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      {activeProduct.period} &bull; {activeProduct.role}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {activeProduct.headline}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {activeProduct.subhead}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-zinc-950/80 border border-white/[0.06]">
                  {activeProduct.stats.map((stat, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="text-lg font-bold text-white font-mono">{stat.value}</div>
                      <div className="text-[10px] text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Architectural Features */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                    Architectural Guarantees
                  </div>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeProduct.features.map((feat, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-zinc-900/40 border border-white/[0.05] space-y-1">
                        <div className="text-xs font-bold text-zinc-200 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{feat.title}</span>
                        </div>
                        <div className="text-xs text-zinc-400 leading-relaxed pl-3.5">
                          {feat.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges & Links */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
                  <div className="flex flex-wrap gap-1.5">
                    {activeProduct.techStack.map((tech) => (
                      <span key={tech} className="text-[11px] font-mono bg-zinc-900 text-zinc-400 border border-white/[0.06] px-2.5 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {activeProduct.githubUrl && (
                      <a
                        href={activeProduct.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-300 hover:text-white px-3 py-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    )}
                    {activeProduct.apkDownloadUrl && (
                      <a
                        href={activeProduct.apkDownloadUrl}
                        download
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-black bg-cyan-400 hover:bg-cyan-300 px-3.5 py-1.5 rounded-lg transition-colors"
                      >
                        <DownloadIcon className="w-3.5 h-3.5" />
                        <span>Get v1.44 APK</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: High-Res Visual / Code Switcher */}
              <div className="lg:col-span-6 space-y-3">
                {/* Switcher Tab Header */}
                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCodeOrImageTab('visual')}
                      className={`text-xs font-mono px-3 py-1 rounded-lg transition-colors ${
                        codeOrImageTab === 'visual'
                          ? 'bg-white/[0.1] text-white font-bold'
                          : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      System Architecture Preview
                    </button>
                    {activeProduct.codeSnippet && (
                      <button
                        onClick={() => setCodeOrImageTab('code')}
                        className={`text-xs font-mono px-3 py-1 rounded-lg transition-colors ${
                          codeOrImageTab === 'code'
                            ? 'bg-white/[0.1] text-white font-bold'
                            : 'text-zinc-500 hover:text-zinc-300'
                        }`}
                      >
                        {activeProduct.codeSnippet.filename}
                      </button>
                    )}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-600">STABLE SPEC</span>
                </div>

                {/* Display Body */}
                <div className="rounded-2xl border border-white/[0.08] bg-zinc-950/90 overflow-hidden shadow-2xl relative">
                  {codeOrImageTab === 'visual' && activeProduct.image ? (
                    <div className="group relative overflow-hidden">
                      <img
                        src={activeProduct.image}
                        alt={activeProduct.name}
                        className="w-full h-auto max-h-[500px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      {activeProduct.imageCaption && (
                        <div className="p-3 bg-zinc-950/90 border-t border-white/[0.08] text-[11px] font-mono text-zinc-400 text-left">
                          {activeProduct.imageCaption}
                        </div>
                      )}
                    </div>
                  ) : activeProduct.codeSnippet ? (
                    <div className="p-5 font-mono text-xs text-left">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] text-zinc-500 text-[11px]">
                        <span>{activeProduct.codeSnippet.filename}</span>
                        <span className="uppercase">{activeProduct.codeSnippet.language}</span>
                      </div>
                      <pre className="text-cyan-300 leading-relaxed overflow-x-auto whitespace-pre">
                        {activeProduct.codeSnippet.code}
                      </pre>
                    </div>
                  ) : (
                    <div className="p-12 text-center text-xs font-mono text-zinc-500">
                      Binary Utility &bull; Target Android 14 API
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. THE 8-LAYER ENTERPRISE AI ARCHITECTURE BREAKDOWN
         ======================================================== */}
      <section id="architecture" className="py-24 relative bg-grid-pattern border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
              SYSTEM DESIGN SPECIFICATION
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              The 8-Layer Enterprise AI Stack
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Hardened architecture standard eliminating naive LLM wrapper vulnerabilities, prompt breaches, and unchecked database pollution.
            </p>
          </div>

          {/* 8-Layer Pipeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "01", name: "Raw Model Generation", desc: "Pluggable provider adapter streaming chunked Server-Sent Events (SSE) with deterministic JSON schemas." },
              { num: "02", name: "System Persona Builder", desc: "Strict instruction grounding restricting agent responses to verified internal tool outputs." },
              { num: "03", name: "RAG & Schema Registry", desc: "Deterministic knowledge base injecting isolated project schemas to prevent parameter hallucination." },
              { num: "04", name: "MCP Tool Execution", desc: "Command Pattern tool dispatcher executing on Spring Boot (:8080) with zero direct database mutation." },
              { num: "05", name: "RBAC & Identity", desc: "OAuth 2.1 token enforcement (ROLE_ADMIN) propagating verified internal security claims." },
              { num: "06", name: "Guardrails & Safety", desc: "Input classifier blocking prompt injection attacks and guaranteeing zero data mutations." },
              { num: "07", name: "Semantic Vector Cache", desc: "Cosine vector similarity cache resolving repeated queries with $0 token cost and model routing." },
              { num: "08", name: "Observability & Evals", desc: "OpenTelemetry distributed tracing capturing spans from edge proxy to tool execution." },
            ].map((layer) => (
              <div key={layer.num} className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.06] hover:border-cyan-500/40 transition-all text-left space-y-3">
                <div className="text-xs font-mono font-bold text-cyan-400">
                  LAYER {layer.num}
                </div>
                <h4 className="text-base font-bold text-white tracking-tight">
                  {layer.name}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {layer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. ANDROID RELEASES HUB (UsageDataTrack)
         ======================================================== */}
      <section id="apks" className="py-24 relative border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400">
              NATIVE ANDROID UTILITY
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              UsageDataTrack Release Station
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Custom VpnService packet firewall, QUIC UDP 443 termination, and WorkManager background auto-updater.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-zinc-950/60 overflow-hidden shadow-2xl">
            <div className="p-5 border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span>Production Builds (v1.11 &ndash; v1.44)</span>
              </div>
              <span className="text-xs font-mono text-zinc-500">Target SDK 34 (Android 14)</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-zinc-900/80 text-zinc-400 uppercase text-[11px] border-b border-white/[0.06]">
                  <tr>
                    <th className="py-3.5 px-6 font-semibold">Build</th>
                    <th className="py-3.5 px-6 font-semibold">Date</th>
                    <th className="py-3.5 px-6 font-semibold">Changelog &amp; Architecture Notes</th>
                    <th className="py-3.5 px-6 font-semibold">Size</th>
                    <th className="py-3.5 px-6 font-semibold text-right">Download</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] text-zinc-300">
                  {PORTFOLIO_DATA.apks.map((apk) => (
                    <tr key={apk.version} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        {apk.version}
                      </td>
                      <td className="py-4 px-6 text-zinc-400">{apk.date}</td>
                      <td className="py-4 px-6 text-zinc-300 font-sans text-xs">{apk.highlights}</td>
                      <td className="py-4 px-6 text-zinc-400">{apk.fileSize}</td>
                      <td className="py-4 px-6 text-right">
                        <a
                          href={apk.downloadUrl}
                          download
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-purple-300 hover:text-white transition-colors"
                        >
                          <DownloadIcon className="w-3.5 h-3.5" />
                          <span>APK</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. WORK EXPERIENCE (Vercel Timeline Style)
         ======================================================== */}
      <section id="experience" className="py-24 relative bg-grid-pattern border-t border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
              TRACK RECORD
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Engineering Experience
            </h2>
          </div>

          <div className="space-y-8">
            {PORTFOLIO_DATA.experiences.map((exp, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-zinc-950/70 border border-white/[0.08] space-y-4 text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{exp.role}</h3>
                    <div className="text-sm font-semibold text-cyan-400">{exp.company} &bull; <span className="text-zinc-500 font-normal">{exp.location}</span></div>
                  </div>
                  <div className="text-xs font-mono font-bold text-zinc-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.08] self-start sm:self-auto">
                    {exp.period}
                  </div>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                  {exp.summary}
                </p>

                <ul className="space-y-2 text-xs text-zinc-400">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-cyan-400 shrink-0 select-none">&bull;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="text-[11px] font-mono bg-zinc-900 text-zinc-400 px-2.5 py-0.5 rounded border border-white/[0.06]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          7. SKILLS MATRIX
         ======================================================== */}
      <section id="skills" className="py-24 relative border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
              TECHNICAL COMPETENCY
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Skills &amp; Technology Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {PORTFOLIO_DATA.skills.map((group) => (
              <div key={group.category} className="p-6 rounded-2xl bg-zinc-950/60 border border-white/[0.08] space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="text-xs font-mono bg-white/[0.03] text-zinc-300 border border-white/[0.06] px-2.5 py-1 rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          8. CONTACT & FOOTER (Stripe / Linear Banner)
         ======================================================== */}
      <footer className="py-20 relative bg-[#020307] border-t border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Let's engineer scalable systems.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
              Open to senior systems engineering roles, distributed platform architecture, and specialized AI systems consulting.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="flex items-center gap-2 bg-white hover:bg-zinc-200 text-black font-bold text-sm px-6 py-3 rounded-xl transition-all hover:scale-[1.02]"
            >
              <MailIcon className="w-4 h-4" />
              <span>Send Direct Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-white/[0.1] font-mono text-xs px-5 py-3 rounded-xl transition-colors"
            >
              <span>{emailCopied ? "Email Copied!" : PORTFOLIO_DATA.profile.email}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-6 text-zinc-500 text-xs font-mono">
            <a href={PORTFOLIO_DATA.profile.github} target="_blank" rel="noreferrer noopener" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href={PORTFOLIO_DATA.profile.linkedin} target="_blank" rel="noreferrer noopener" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href={PORTFOLIO_DATA.profile.resumeUrl} target="_blank" rel="noreferrer noopener" className="hover:text-white transition-colors">
              Résumé
            </a>
          </div>

          <div className="text-[11px] font-mono text-zinc-600 pt-6 border-t border-white/[0.04]">
            &copy; {new Date().getFullYear()} Sonu Kumar Jha &bull; Deployed on custom domain <span className="text-zinc-400">sonujha.in</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
