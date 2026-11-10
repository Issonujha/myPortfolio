import React, { useState, useEffect } from 'react';
import { PORTFOLIO_CONTENT } from './data/portfolioData';
import { GithubIcon, LinkedinIcon, ExternalLinkIcon, MailIcon, FileTextIcon, DownloadIcon } from './components/icons';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse spotlight tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scrollspy to track active section
  useEffect(() => {
    const sectionIds = PORTFOLIO_CONTENT.navigation.map(n => n.href.replace('#', ''));
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-[#0b0f17] text-zinc-400 selection:bg-teal-300 selection:text-teal-900 min-h-screen">
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden lg:block"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(45, 212, 191, 0.07), transparent 80%)`,
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* ========================================================
              LEFT COLUMN (Header, Navigation, Socials - Sticky)
             ======================================================== */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              {/* Profile Header */}
              <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                <a href="/">{PORTFOLIO_CONTENT.profile.name}</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-zinc-200 sm:text-xl">
                {PORTFOLIO_CONTENT.profile.title}
              </h2>
              <p className="mt-4 max-w-xs text-sm leading-normal text-zinc-400">
                {PORTFOLIO_CONTENT.profile.tagline}
              </p>

              {/* Status Indicator */}
              <div className="mt-6 flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                <span>{PORTFOLIO_CONTENT.profile.location}</span>
              </div>

              {/* Desktop Section Navigation (Scrollspy) */}
              <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
                <ul className="w-max space-y-3">
                  {PORTFOLIO_CONTENT.navigation.map((item) => {
                    const sectionId = item.href.replace('#', '');
                    const isActive = activeSection === sectionId;
                    return (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className={`group flex items-center py-1 transition-all ${
                            isActive ? 'text-zinc-100' : 'text-zinc-500 hover:text-zinc-200'
                          }`}
                        >
                          <span
                            className={`mr-4 h-px transition-all duration-200 motion-reduce:transition-none ${
                              isActive
                                ? 'w-16 bg-zinc-100'
                                : 'w-8 bg-zinc-600 group-hover:w-16 group-hover:bg-zinc-200'
                            }`}
                          />
                          <span className="text-xs font-bold uppercase tracking-widest">
                            {item.label}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Social Footprint & Resume Link */}
            <div className="mt-8 flex items-center gap-5 text-zinc-400">
              <a
                href={PORTFOLIO_CONTENT.profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-zinc-100 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-6 w-6" />
              </a>

              <a
                href={PORTFOLIO_CONTENT.profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-zinc-100 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-6 w-6" />
              </a>

              <a
                href={`mailto:${PORTFOLIO_CONTENT.profile.email}`}
                className="hover:text-zinc-100 transition-colors"
                aria-label="Send direct email"
              >
                <MailIcon className="h-6 w-6" />
              </a>

              <a
                href={PORTFOLIO_CONTENT.profile.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-300 hover:text-teal-300 transition-colors ml-2 px-3 py-1.5 rounded-full border border-zinc-700/80 hover:border-teal-500/50"
              >
                <FileTextIcon className="h-3.5 w-3.5" />
                <span>Resume</span>
                <ExternalLinkIcon className="h-3 w-3 opacity-70" />
              </a>
            </div>
          </header>

          {/* ========================================================
              RIGHT COLUMN (Naturally Scrolling Content)
             ======================================================== */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            
            {/* ----------------- SECTION: ABOUT ----------------- */}
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
              aria-label="About Sonu Jha"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0b0f17]/85 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
                  About
                </h2>
              </div>
              <div className="space-y-4 text-zinc-400 leading-relaxed text-sm">
                <p>
                  {PORTFOLIO_CONTENT.profile.about1}
                </p>
                <p>
                  {PORTFOLIO_CONTENT.profile.about2}
                </p>
                <p>
                  {PORTFOLIO_CONTENT.profile.about3}
                </p>
              </div>
            </section>

            {/* ----------------- SECTION: EXPERIENCE ----------------- */}
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
              aria-label="Work experience"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0b0f17]/85 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
                  Experience
                </h2>
              </div>

              <div className="space-y-12">
                {PORTFOLIO_CONTENT.experiences.map((exp, idx) => (
                  <div
                    key={idx}
                    className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100"
                  >
                    {/* Hover Card Backdrop */}
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]" />

                    {/* Timeline Date Header */}
                    <header
                      className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2"
                      aria-label={exp.period}
                    >
                      {exp.period}
                    </header>

                    {/* Content */}
                    <div className="z-10 sm:col-span-6 space-y-3">
                      <h3 className="font-medium leading-snug text-zinc-100">
                        <div>
                          <span className="inline-flex items-baseline font-semibold leading-tight text-zinc-100 group-hover:text-teal-300 transition-colors">
                            <span>{exp.role} &bull; </span>
                            <span className="ml-1 text-zinc-300 font-normal">{exp.company}</span>
                          </span>
                        </div>
                      </h3>

                      <p className="text-xs text-zinc-400 leading-normal">
                        {exp.summary}
                      </p>

                      <ul className="space-y-1.5 text-xs text-zinc-400">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="text-teal-400 shrink-0 select-none">&bull;</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Tags */}
                      <ul className="flex flex-wrap gap-1.5 pt-2" aria-label="Technologies used">
                        {exp.skills.map((skill) => (
                          <li
                            key={skill}
                            className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-[11px] font-mono font-medium leading-4 text-teal-300"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <a
                  href={PORTFOLIO_CONTENT.profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold group/link text-sm"
                >
                  <span>View Full Résumé</span>
                  <ExternalLinkIcon className="ml-1 inline-block h-3.5 w-3.5 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
                </a>
              </div>
            </section>

            {/* ----------------- SECTION: PROJECTS ----------------- */}
            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
              aria-label="Selected engineering projects"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0b0f17]/85 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
                  Projects
                </h2>
              </div>

              <div className="space-y-12">
                {PORTFOLIO_CONTENT.projects.map((project) => (
                  <div
                    key={project.id}
                    className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100"
                  >
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]" />

                    <div className="z-10 mb-2 mt-1 text-xs font-mono font-medium text-zinc-500 sm:col-span-2">
                      <div>{project.year}</div>
                      <div className="text-[11px] text-zinc-600 mt-1">{project.role}</div>
                    </div>

                    <div className="z-10 sm:col-span-6 space-y-2.5">
                      <h3 className="font-medium leading-snug text-zinc-100">
                        {project.githubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-baseline font-semibold leading-tight text-zinc-100 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          >
                            <span>{project.title}</span>
                            <ExternalLinkIcon className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
                          </a>
                        ) : (
                          <span className="font-semibold text-zinc-100 text-base">
                            {project.title}
                          </span>
                        )}
                      </h3>

                      <p className="text-xs text-zinc-300 font-mono">
                        {project.summary}
                      </p>

                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {project.description}
                      </p>

                      {project.highlights && (
                        <ul className="space-y-1 text-xs text-zinc-400 pt-1">
                          {project.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-1.5">
                              <span className="text-teal-400 shrink-0">&bull;</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Tech badges */}
                      <ul className="flex flex-wrap gap-1.5 pt-2" aria-label="Technologies used">
                        {project.techStack.map((tech) => (
                          <li
                            key={tech}
                            className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-[11px] font-mono font-medium leading-4 text-teal-300"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>

                      {/* Actions */}
                      <div className="flex items-center gap-4 pt-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 font-mono"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>Source</span>
                          </a>
                        )}

                        {project.apkDownloadUrl && (
                          <a
                            href={project.apkDownloadUrl}
                            download
                            className="inline-flex items-center gap-1.5 text-xs text-teal-300 hover:text-teal-200 font-mono"
                          >
                            <DownloadIcon className="w-3.5 h-3.5" />
                            <span>Download APK</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ----------------- SECTION: ARCHITECTURE DEEP DIVES ----------------- */}
            <section
              id="architecture"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
              aria-label="Systems Architecture Specification"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0b0f17]/85 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
                  Architecture
                </h2>
              </div>

              <div className="space-y-6">
                <div className="p-5 rounded-lg border border-zinc-800 bg-zinc-900/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-zinc-100 text-sm tracking-tight">
                      The 8-Layer Enterprise AI Stack (System Specification)
                    </h3>
                    <span className="text-[11px] font-mono text-teal-300 px-2 py-0.5 rounded bg-teal-950/60 border border-teal-800/60">
                      Standardized Pipeline
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Designed to prevent naive LLM wrapper failure modes: prompt injections, unbounded token costs, unauthorized database mutations, and latency spikes.
                  </p>

                  <div className="space-y-2 font-mono text-xs text-zinc-300">
                    <div className="p-2.5 rounded bg-zinc-950/70 border border-zinc-800/80 flex items-start gap-3">
                      <span className="text-teal-400 font-bold shrink-0">L6</span>
                      <div>
                        <strong className="text-zinc-200">Guardrails &amp; Safety:</strong> Input classifier blocks prompt injections; read-only guarantees prevent destructive SQL mutations.
                      </div>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-950/70 border border-zinc-800/80 flex items-start gap-3">
                      <span className="text-teal-400 font-bold shrink-0">L7</span>
                      <div>
                        <strong className="text-zinc-200">Semantic Cache &amp; Router:</strong> Vector similarity cache delivers $0 repeated token costs; complexity router cascades between Gemini Flash and DeepSeek.
                      </div>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-950/70 border border-zinc-800/80 flex items-start gap-3">
                      <span className="text-teal-400 font-bold shrink-0">L5</span>
                      <div>
                        <strong className="text-zinc-200">RBAC Identity:</strong> OAuth 2.1 token validation enforces ROLE_ADMIN and propagates authenticated headers downstream.
                      </div>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-950/70 border border-zinc-800/80 flex items-start gap-3">
                      <span className="text-teal-400 font-bold shrink-0">L4</span>
                      <div>
                        <strong className="text-zinc-200">MCP Tool Execution:</strong> Command pattern tool dispatcher executes on internal Spring Boot services (:8080) with zero direct database mutation.
                      </div>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-950/70 border border-zinc-800/80 flex items-start gap-3">
                      <span className="text-teal-400 font-bold shrink-0">L8</span>
                      <div>
                        <strong className="text-zinc-200">Observability &amp; Tracing:</strong> OpenTelemetry spans record latency breakdown from router to model generation.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-lg border border-zinc-800 bg-zinc-900/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-zinc-100 text-sm tracking-tight">
                      Server-Driven UI (`platform-sdui-core`)
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-zinc-800">
                      Cross-Platform
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Decouples screen layout from mobile app releases. The Spring Boot backend emits validated JSON component trees that are hydrated identically across React Native and React 19 web clients.
                  </p>
                </div>
              </div>
            </section>

            {/* ----------------- SECTION: ANDROID APK HUB ----------------- */}
            <section
              id="apks"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
              aria-label="UsageDataTrack Android APK releases"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0b0f17]/85 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
                  Android APKs
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Direct release builds for <strong className="text-zinc-200">UsageDataTrack</strong>: an Android OS utility utilizing the <code className="text-teal-300 font-mono">VpnService</code> API for granular per-app internet cutoff and WorkManager silent background auto-updates.
                </p>

                <div className="rounded-lg border border-zinc-800 overflow-hidden">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-zinc-900/60 text-zinc-400 text-[11px] border-b border-zinc-800">
                      <tr>
                        <th className="py-2.5 px-4 font-semibold">Version</th>
                        <th className="py-2.5 px-4 font-semibold">Date</th>
                        <th className="py-2.5 px-4 font-semibold hidden sm:table-cell">Notes</th>
                        <th className="py-2.5 px-4 font-semibold text-right">Binary</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                      {PORTFOLIO_CONTENT.apks.map((apk) => (
                        <tr key={apk.version} className="hover:bg-zinc-800/20 transition-colors">
                          <td className="py-3 px-4 font-bold text-zinc-100">
                            {apk.version}
                          </td>
                          <td className="py-3 px-4 text-zinc-400">
                            {apk.date}
                          </td>
                          <td className="py-3 px-4 text-zinc-400 font-sans text-xs hidden sm:table-cell">
                            {apk.highlights}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <a
                              href={apk.downloadUrl}
                              download
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-teal-300 hover:text-teal-200 transition-colors text-[11px]"
                            >
                              <DownloadIcon className="w-3 h-3" />
                              <span>{apk.fileSize}</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ----------------- SECTION: SKILLS ----------------- */}
            <section
              id="skills"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
              aria-label="Technical skills"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0b0f17]/85 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
                  Skills
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PORTFOLIO_CONTENT.skills.map((group) => (
                  <div key={group.category} className="p-4 rounded-lg border border-zinc-800/80 bg-zinc-900/20 space-y-2.5">
                    <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
                      {group.category}
                    </h3>
                    <ul className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-[11px] font-mono bg-zinc-800/50 text-zinc-300 border border-zinc-700/60 px-2 py-0.5 rounded"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* ----------------- COLOPHON FOOTER ----------------- */}
            <footer className="max-w-md pb-16 text-xs text-zinc-500 sm:pb-0 font-mono leading-relaxed">
              <p>
                Crafted by <strong className="text-zinc-400 font-medium">Sonu Kumar Jha</strong>. Built with{' '}
                <a href="https://react.dev" target="_blank" rel="noreferrer noopener" className="text-zinc-400 hover:text-teal-300">React</a>,{' '}
                <a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer noopener" className="text-zinc-400 hover:text-teal-300">TypeScript</a>, and{' '}
                <a href="https://tailwindcss.com" target="_blank" rel="noreferrer noopener" className="text-zinc-400 hover:text-teal-300">Tailwind CSS</a>. Deployed to GitHub Pages on custom domain{' '}
                <span className="text-zinc-300">sonujha.in</span>.
              </p>
            </footer>

          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
