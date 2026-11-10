import React from 'react';
import { Smartphone, Download, History } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ApkDownloads: React.FC = () => {
  return (
    <section id="apks" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/60 text-xs font-mono text-purple-300">
            <Smartphone className="w-3.5 h-3.5" /> ANDROID OS INTERNALS &amp; RELEASES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            UsageDataTrack: APK Release Hub
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Native Android security &amp; telemetry engine featuring hardware VPN packet filtering, WorkManager background auto-update pipelines, and per-app internet firewalls.
          </p>
        </div>

        {/* Featured Latest Release Banner */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-purple-500/40 shadow-xl shadow-purple-950/20 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  UsageDataTrack v1.44 (Latest Production Build)
                </span>
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                  STABLE
                </span>
              </div>
              <p className="text-sm text-slate-300 max-w-2xl">
                Multi-layer background auto-update via WorkManager and FCM trigger. Full scan uninstalled app reconciliation, persistent app installation lifecycle history, and direct system installer fallback.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-400 pt-1">
                <span>&bull; Size: 11 MB</span>
                <span>&bull; Released: Nov 2024</span>
                <span>&bull; Architecture: arm64-v8a / armeabi-v7a</span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="/apk/app-v1.44.apk"
                download
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02]"
              >
                <Download className="w-4 h-4" />
                <span>Download v1.44 APK</span>
              </a>
            </div>
          </div>
        </div>

        {/* Historical Releases Table */}
        <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
          <div className="p-4 px-6 border-b border-slate-800 bg-slate-900/60 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 font-semibold">
              <History className="w-4 h-4 text-purple-400" />
              <span>Release Changelog &amp; Historical Binaries</span>
            </div>
            <span className="text-xs font-mono text-slate-500">
              Target SDK 34 (Android 14)
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-950/80 text-slate-400 uppercase text-[11px] border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-6 font-semibold">Version</th>
                  <th className="py-3.5 px-6 font-semibold">Release Date</th>
                  <th className="py-3.5 px-6 font-semibold">Key Architectural Updates</th>
                  <th className="py-3.5 px-6 font-semibold">Size</th>
                  <th className="py-3.5 px-6 font-semibold text-right">Download</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {PORTFOLIO_DATA.apkReleases.map((apk) => (
                  <tr key={apk.version} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400" />
                      {apk.version}
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      {apk.releaseDate}
                    </td>
                    <td className="py-4 px-6 text-slate-300 font-sans text-xs">
                      {apk.highlights}
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      {apk.fileSize}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href={apk.downloadUrl}
                        download
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-purple-300 hover:text-white transition-colors"
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
    </section>
  );
};
