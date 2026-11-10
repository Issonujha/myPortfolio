import React from 'react';
import { X, Download, CheckCircle, Shield, Cpu } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { GithubIcon } from './icons';

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-panel w-full max-w-4xl max-h-[90vh] rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/60">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {project.year} &bull; {project.role}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close Architecture Deep Dive"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm leading-relaxed">
          {/* Tagline & Overview */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
              Architecture Overview
            </h4>
            <p className="text-slate-200 text-base font-medium">
              {project.tagline}
            </p>
            <p className="text-slate-400">
              {project.description}
            </p>
          </div>

          {/* Metrics & Guarantees */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                Performance &amp; System Guarantees
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="p-3 bg-slate-900/50 rounded-lg border border-slate-800 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 font-medium">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Details / Execution Layers */}
          {project.architectureDetails && (
            <div className="space-y-4">
              {project.architectureDetails.layers && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                    <Cpu className="w-4 h-4" /> 8-Layer Execution Pipeline
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.architectureDetails.layers.map((layer, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-2.5 bg-slate-950/70 border border-slate-800 rounded-lg font-mono text-xs">
                        <span className="w-6 h-6 rounded bg-slate-800 text-cyan-300 flex items-center justify-center font-bold text-[11px] shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-slate-200">{layer}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Architectural Highlights */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
                  <Shield className="w-4 h-4" /> Key Design Patterns &amp; Implementation Details
                </h4>
                <div className="space-y-2">
                  {project.architectureDetails.highlights.map((h, i) => (
                    <div key={i} className="p-3 bg-slate-900/40 rounded-lg border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-indigo-400 font-bold">&bull;</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-xs font-mono bg-slate-900 border border-slate-700/80 px-2.5 py-1 rounded text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-4 px-6 border-t border-slate-800 bg-slate-900/70">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white px-3.5 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source Repository</span>
              </a>
            )}
            {project.apkDownloadUrl && (
              <a
                href={project.apkDownloadUrl}
                download
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-950 px-4 py-2 bg-purple-400 hover:bg-purple-300 rounded-lg transition-colors font-mono"
              >
                <Download className="w-4 h-4" />
                <span>Download APK Release</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-400 hover:text-white px-4 py-2 rounded-lg hover:bg-slate-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
