import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useStudio } from '../context/StudioContext';
import { Sun, Moon, Settings } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme, openChat, setCustomizerOpen } = useStudio();
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services & Timing', path: '/services' },
    { label: 'Case Studies', path: '/work' },
    { label: 'Android APKs', path: '/apks' },
    { label: 'Admin Console', path: '/admin' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b bg-[#05070c]/85 dark:bg-[#05070c]/85 light:bg-white/90 backdrop-blur-xl border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Studio Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 p-[1px] transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-[#05070c] dark:bg-[#05070c] light:bg-white rounded-[7px] flex items-center justify-center font-mono text-xs font-bold text-cyan-400">
              SJ
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold tracking-tight text-white dark:text-white light:text-zinc-900 group-hover:text-cyan-400 transition-colors">
              Sonu Jha Studio
            </span>
            <span className="text-[10px] font-mono text-zinc-400 tracking-wider -mt-0.5">
              DIGITAL ENGINEERING &bull; SERVICES
            </span>
          </div>
        </Link>

        {/* Desktop Page Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 p-1 rounded-xl border border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-black font-bold shadow-sm shadow-cyan-500/20'
                    : 'text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Action Controls & Live Chat Trigger */}
        <div className="flex items-center gap-2.5">
          {/* Live Customer Chat Button */}
          <button
            onClick={() => openChat()}
            className="flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-black transition-all shadow-md shadow-cyan-500/15 hover:scale-[1.02]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
            </span>
            <span className="hidden sm:inline">Live Inquiry</span>
            <span className="sm:hidden">Chat</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-white/[0.05] light:hover:bg-zinc-100 transition-colors"
            aria-label="Toggle Dark and Light theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Settings Customizer */}
          <button
            onClick={() => setCustomizerOpen(true)}
            className="p-2 rounded-lg text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-white/[0.05] light:hover:bg-zinc-100 transition-colors"
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
