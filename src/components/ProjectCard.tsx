import React from 'react';
import { ArrowRight, Cpu, Layers, Smartphone, Server } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { GithubIcon } from './icons';

interface ProjectCardProps {
  project: Project;
  onInspect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onInspect }) => {
  const getCategoryIcon = (category: Project['category']) => {
    switch (category) {
      case 'AI & Systems':
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'SDUI & Platforms':
        return <Layers className="w-4 h-4 text-indigo-400" />;
      case 'Android & OS':
        return <Smartphone className="w-4 h-4 text-purple-400" />;
      case 'Microservices':
        return <Server className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between group relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-slate-700/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

      <div className="space-y-4">
        {/* Card Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
              {getCategoryIcon(project.category)}
            </span>
            <span className="text-[11px] font-mono text-slate-400 font-medium">
              {project.category}
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-500 font-semibold px-2 py-0.5 rounded bg-slate-900/80">
            {project.year}
          </span>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-1.5">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs font-medium text-cyan-300/80 font-mono">
            {project.tagline}
          </p>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 pt-1">
            {project.description}
          </p>
        </div>

        {/* Key Metrics / Highlights */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.metrics.slice(0, 2).map((metric, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800 px-2 py-0.5 rounded"
              >
                &bull; {metric}
              </span>
            ))}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono bg-slate-950 text-slate-400 px-2 py-0.5 rounded border border-slate-800/80"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="text-[11px] font-mono text-slate-500 self-center">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Card Actions */}
      <div className="flex items-center justify-between pt-5 mt-4 border-t border-slate-800/80">
        <button
          onClick={() => onInspect(project)}
          className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <span>Architecture Specs</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label={`Source code for ${project.title}`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
