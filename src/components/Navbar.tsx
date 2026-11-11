import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useStudio } from '../context/StudioContext';
import { Sun, Moon, Settings, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme, setCustomizerOpen } = useStudio();
  const location = useLocation();

  const navLinks = [
    { label: 'Overview', path: '/' },
    { label: 'Case Studies', path: '/work' },
    { label: 'Android APKs', path: '/apks' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b bg-white/90 dark:bg-[#05070c]/85 backdrop-blur-xl border-zinc-200 dark:border-white/[0.08] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Studio Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 p-[1px] transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-white dark:bg-[#05070c] rounded-[7px] flex items-center justify-center font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400">
              SJ
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              Sonu Kumar Jha
            </span>
            <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 tracking-wider -mt-0.5">
              AI SYSTEMS &bull; DISTRIBUTED ARCHITECTURES
            </span>
          </div>
        </Link>

        {/* Desktop Page Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900/60 p-1 rounded-xl border border-zinc-200 dark:border-white/[0.08]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-black font-bold shadow-sm shadow-cyan-500/20'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <a
            href="https://portfolio.sonujha.in/"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-cyan-700 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 transition-colors"
          >
            <span>Commercial Studio</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <a
            href="mailto:sjha9563@gmail.com"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black transition-all shadow-md shadow-cyan-500/15 hover:scale-[1.02]"
          >
            <span>Get in Touch</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/[0.05] transition-colors"
            aria-label="Toggle Dark and Light theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Settings Customizer */}
          <button
            onClick={() => setCustomizerOpen(true)}
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/[0.05] transition-colors"
            aria-label="Open Theme Customizer"
            title="Theme & Accent Settings"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>

      </div>
    </nav>
  );
};
