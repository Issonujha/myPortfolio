import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { ProjectCard } from './components/ProjectCard';
import { ArchitectureModal } from './components/ArchitectureModal';
import { AgentSimulator } from './components/AgentSimulator';
import { ApkDownloads } from './components/ApkDownloads';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Footer } from './components/Footer';
import { PORTFOLIO_DATA, Project } from './data/portfolioData';
import { Cpu } from 'lucide-react';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'AI & Systems', 'SDUI & Platforms', 'Android & OS', 'Microservices'];

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Bento Grid */}
      <BentoGrid />

      {/* Systems Architecture & Projects Section */}
      <section id="systems" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-cyan-400">
                <Cpu className="w-3.5 h-3.5" /> ARCHITECTURAL CASE STUDIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Featured Systems &amp; Platforms
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                Deep dives into multi-agent intelligence hubs, declarative UI hydration frameworks, and OS-level network engines.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-mono px-3 py-1.5 rounded-lg transition-all ${
                    activeCategory === cat
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onInspect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive 8-Layer AI Simulator */}
      <AgentSimulator />

      {/* UsageDataTrack Android APK Hub */}
      <ApkDownloads />

      {/* Skills Matrix */}
      <SkillsSection />

      {/* Career Experience Timeline */}
      <ExperienceTimeline />

      {/* Footer & Contact */}
      <Footer />

      {/* Interactive Architecture Modal */}
      <ArchitectureModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
