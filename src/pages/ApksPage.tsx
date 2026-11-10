import React from 'react';
import { APK_RELEASES_LIST } from '../data/studioData';
import { Smartphone, Download, History, ShieldCheck } from 'lucide-react';

export const ApksPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/60 text-xs font-mono text-purple-300">
          <Smartphone className="w-3.5 h-3.5" /> ANDROID OS UTILITY &amp; NETWORK INTERNALS
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-zinc-900 leading-tight">
          UsageDataTrack Release Station
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed">
          Native Android security &amp; focus engine utilizing the VpnService API for per-app internet firewalls, QUIC UDP 443 termination, and silent background WorkManager auto-updates.
        </p>
      </div>

      {/* Featured Build v1.44 Card */}
      <div className="rounded-3xl p-8 sm:p-10 border border-purple-500/40 bg-zinc-950/80 dark:bg-zinc-950/80 light:bg-purple-50/50 shadow-2xl space-y-6 text-left">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/[0.08] pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-zinc-900 tracking-tight">
                UsageDataTrack v1.44
              </span>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                LATEST STABLE
              </span>
            </div>
            <p className="text-xs font-mono text-purple-300">
              Released: November 2024 &bull; Target SDK 34 (Android 14) &bull; Size: 11 MB
            </p>
          </div>

          <a
            href="/apk/app-v1.44.apk"
            download
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 hover:from-purple-400 hover:to-indigo-400 text-white font-bold text-xs font-mono shadow-xl shadow-purple-500/25 transition-all hover:scale-[1.02]"
          >
            <Download className="w-4 h-4" />
            <span>Download v1.44 APK (arm64-v8a)</span>
          </a>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-zinc-300">
            Build v1.44 Highlights &amp; Architecture Upgrades:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
            <li className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>Multi-layer background auto-update via WorkManager and FCM trigger.</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>Full scan uninstalled app reconciliation &amp; persistent lifecycle history.</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>Direct system installer fallback with DownloadManager VPN exemptions.</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>Samsung per-app data usage fallback &amp; session timeline navigation.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Historical Releases Table */}
      <div className="rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white overflow-hidden shadow-xl text-left">
        <div className="p-5 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 dark:text-zinc-300 light:text-zinc-800 font-bold">
            <History className="w-4 h-4 text-purple-400" />
            <span>Release Changelog &amp; Historical Binaries</span>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            Direct GitHub Pages Host &bull; sonujha.in/apk
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-zinc-100 text-zinc-400 uppercase text-[11px] border-b border-white/[0.06]">
              <tr>
                <th className="py-3.5 px-6 font-semibold">Build</th>
                <th className="py-3.5 px-6 font-semibold">Date</th>
                <th className="py-3.5 px-6 font-semibold">Key Architecture Updates</th>
                <th className="py-3.5 px-6 font-semibold">Size</th>
                <th className="py-3.5 px-6 font-semibold text-right">Download</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
              {APK_RELEASES_LIST.map((apk) => (
                <tr key={apk.version} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 font-bold text-white dark:text-white light:text-zinc-900 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    {apk.version}
                  </td>
                  <td className="py-4 px-6 text-zinc-400">{apk.date}</td>
                  <td className="py-4 px-6 text-zinc-300 dark:text-zinc-300 light:text-zinc-600 font-sans text-xs">
                    {apk.highlights}
                  </td>
                  <td className="py-4 px-6 text-zinc-400">{apk.fileSize}</td>
                  <td className="py-4 px-6 text-right">
                    <a
                      href={apk.downloadUrl}
                      download
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-purple-300 hover:text-white transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
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
  );
};
