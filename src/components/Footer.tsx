import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Copy, Terminal } from 'lucide-react';
import { useStudio } from '../context/StudioContext';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { openChat } = useStudio();

  const email = "sjha9563@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-white/[0.08] bg-zinc-100 dark:bg-[#020307] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Banner */}
        <div className="rounded-3xl p-8 sm:p-12 border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-zinc-950/70 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800/60 text-xs font-mono text-cyan-800 dark:text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span>COMMERCIAL SPRINT BOOKINGS ACTIVE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Have a project or system to build?
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We engineer custom web apps, mobile SDUI platforms, AI agent networks, Excel KPI dashboards, and high-conversion brand media with on-time delivery guarantees.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => openChat()}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white dark:text-black font-bold text-xs font-mono shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02]"
            >
              Start Live Project Inquiry
            </button>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/[0.1] text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : email}</span>
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-left text-xs font-mono">
          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
              Commercial Services
            </h4>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li><Link to="/services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Web Applications</Link></li>
              <li><Link to="/services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Mobile &amp; SDUI Apps</Link></li>
              <li><Link to="/services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">AI &amp; Agent Systems</Link></li>
              <li><Link to="/services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Desktop Applications</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
              Creative &amp; Data
            </h4>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li><Link to="/services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Excel &amp; BI Dashboards</Link></li>
              <li><Link to="/services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Logo &amp; Brand Identity</Link></li>
              <li><Link to="/services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Marketing Banners</Link></li>
              <li><Link to="/services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">System Integrations</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
              Flagship Platforms
            </h4>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li><Link to="/work" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Central AI Hub</Link></li>
              <li><Link to="/work" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Dukaandaar SDUI</Link></li>
              <li><Link to="/work" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Padhtai-Hain EdTech</Link></li>
              <li><Link to="/apks" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">UsageDataTrack (APK)</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
              Management &amp; Social
            </h4>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li><Link to="/admin" className="text-cyan-600 dark:text-cyan-400 font-bold hover:underline">Backend Admin Console</Link></li>
              <li><a href="https://github.com/Issonujha" target="_blank" rel="noreferrer noopener" className="hover:text-black dark:hover:text-white">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/sonu-jha-633765167/" target="_blank" rel="noreferrer noopener" className="hover:text-black dark:hover:text-white">LinkedIn</a></li>
              <li><a href="https://bit.ly/sonuJhaResume2024" target="_blank" rel="noreferrer noopener" className="hover:text-black dark:hover:text-white">Résumé</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-zinc-200 dark:border-white/[0.04] text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Sonu Jha Studio &bull; All Rights Reserved &copy; {new Date().getFullYear()}</span>
          </div>
          <div>
            Live on custom domain <span className="text-zinc-800 dark:text-zinc-400 font-bold">sonujha.in</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
