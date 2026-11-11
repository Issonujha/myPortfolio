import React from 'react';
import { useStudio } from '../context/StudioContext';
import { X, Sun, Moon, Check, Sliders } from 'lucide-react';
import { AccentColor } from '../types';

export const ThemeCustomizerModal: React.FC = () => {
  const { isCustomizerOpen, setCustomizerOpen, theme, setTheme, accent, setAccent } = useStudio();

  if (!isCustomizerOpen) return null;

  const accentOptions: { id: AccentColor; name: string; bgClass: string }[] = [
    { id: 'cyan', name: 'Cyan (Default)', bgClass: 'bg-cyan-400' },
    { id: 'emerald', name: 'Emerald', bgClass: 'bg-emerald-400' },
    { id: 'violet', name: 'Violet', bgClass: 'bg-violet-400' },
    { id: 'amber', name: 'Amber', bgClass: 'bg-amber-400' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-md rounded-3xl p-6 sm:p-8 border border-white/[0.1] dark:border-white/[0.1] light:border-zinc-300 bg-[#090d16]/95 dark:bg-[#090d16]/95 light:bg-white shadow-2xl backdrop-blur-2xl space-y-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-cyan-400" />
            <h3 className="text-base font-bold text-white dark:text-white light:text-zinc-900 tracking-tight">
              Theme &amp; Visual Settings
            </h3>
          </div>
          <button
            onClick={() => setCustomizerOpen(false)}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-white/[0.05]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Appearance Mode Selection */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
            Appearance Mode
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setTheme('dark')}
              className={`p-3.5 rounded-xl border flex items-center justify-center gap-2 text-xs font-mono font-bold transition-all ${
                theme === 'dark'
                  ? 'bg-zinc-800 text-white border-cyan-400 shadow-md ring-1 ring-cyan-400'
                  : 'bg-zinc-900/60 text-zinc-400 border-white/[0.06] hover:text-white'
              }`}
            >
              <Moon className="w-4 h-4 text-cyan-400" />
              <span>Dark Theme</span>
            </button>

            <button
              onClick={() => setTheme('light')}
              className={`p-3.5 rounded-xl border flex items-center justify-center gap-2 text-xs font-mono font-bold transition-all ${
                theme === 'light'
                  ? 'bg-zinc-200 text-black border-cyan-500 shadow-md ring-1 ring-cyan-500'
                  : 'bg-zinc-900/60 text-zinc-400 border-white/[0.06] hover:text-white'
              }`}
            >
              <Sun className="w-4 h-4 text-amber-500" />
              <span>Light Theme</span>
            </button>
          </div>
        </div>

        {/* Accent Color Selection */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
            Brand Accent Color
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            {accentOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setAccent(opt.id)}
                className={`p-2.5 rounded-xl border flex items-center justify-between text-xs font-mono transition-all ${
                  accent === opt.id
                    ? 'bg-zinc-800 text-white border-cyan-400'
                    : 'bg-zinc-900/40 text-zinc-400 border-white/[0.06]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`w-3.5 h-3.5 rounded-full ${opt.bgClass}`} />
                  <span>{opt.name}</span>
                </div>
                {accent === opt.id && <Check className="w-3.5 h-3.5 text-cyan-400" />}
              </button>
            ))}
          </div>
        </div>

        {/* Close Button */}
        <div className="pt-2">
          <button
            onClick={() => setCustomizerOpen(false)}
            className="w-full py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs font-mono transition-colors"
          >
            Apply &amp; Close Settings
          </button>
        </div>
      </div>
    </div>
  );
};
