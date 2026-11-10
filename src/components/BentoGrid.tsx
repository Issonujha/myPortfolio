import React from 'react';
import { Bot, Layers, Smartphone, Server, Zap } from 'lucide-react';

export const BentoGrid: React.FC = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-cyan-400">
            <Zap className="w-3.5 h-3.5" /> ARCHITECTURAL COMPETENCIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Core Engineering Pillars
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Bridging autonomous intelligence, high-throughput backend services, and native client kernels.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Tile 1: AI Agent Architecture (Span 7) */}
          <div className="md:col-span-7 glass-panel rounded-2xl p-7 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-cyan-950/60 border border-cyan-800/50 rounded-xl text-cyan-400">
                <Bot className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-semibold text-cyan-400 px-2.5 py-1 bg-cyan-950/60 rounded-full border border-cyan-800/50">
                8-Layer AI Stack
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              Enterprise Multi-Agent Orchestration
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Moving beyond naive LLM wrappers into hardened, deterministic agent systems: input guardrails against prompt injection, semantic vector caching for $0 repeat queries, RBAC OAuth 2.1 identity, and O(1) MCP tool execution.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
              {['Model Context Protocol (MCP)', 'Vector Cache', 'Complexity Routing', 'Guardrails', 'Distributed Evals'].map((tag) => (
                <span key={tag} className="text-xs font-mono bg-slate-900 px-2.5 py-1 rounded text-slate-300 border border-slate-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Tile 2: Server-Driven UI (Span 5) */}
          <div className="md:col-span-5 glass-panel rounded-2xl p-7 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/20 transition-all" />
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-indigo-950/60 border border-indigo-800/50 rounded-xl text-indigo-400">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-semibold text-indigo-400 px-2.5 py-1 bg-indigo-950/60 rounded-full border border-indigo-800/50">
                SDUI Framework
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
              Server-Driven UI Engines
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Declarative JSON component trees rendered across React Native (iOS/Android) and React 19 web. Roll out new app layouts instantly without App Store review cycles.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
              {['platform-sdui-core', 'React Native', 'React 19', 'Remote Hydration'].map((tag) => (
                <span key={tag} className="text-xs font-mono bg-slate-900 px-2.5 py-1 rounded text-slate-300 border border-slate-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Tile 3: Android Kernel & Network Systems (Span 6) */}
          <div className="md:col-span-6 glass-panel rounded-2xl p-7 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-950/60 border border-purple-800/50 rounded-xl text-purple-400">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-semibold text-purple-400 px-2.5 py-1 bg-purple-950/60 rounded-full border border-purple-800/50">
                Android Internals
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
              OS Network Firewall &amp; VPN Tunnel
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Custom Android VPN service enforcing granular per-app internet isolation, dropping QUIC UDP 443 to inspect SNI headers, and running multi-tiered WorkManager background auto-update pipelines.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
              {['Android VpnService', 'Packet Filtering', 'WorkManager API', 'UsageStatsManager'].map((tag) => (
                <span key={tag} className="text-xs font-mono bg-slate-900 px-2.5 py-1 rounded text-slate-300 border border-slate-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Tile 4: Enterprise Microservices & Security (Span 6) */}
          <div className="md:col-span-6 glass-panel rounded-2xl p-7 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-emerald-950/60 border border-emerald-800/50 rounded-xl text-emerald-400">
                <Server className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-semibold text-emerald-400 px-2.5 py-1 bg-emerald-950/60 rounded-full border border-emerald-800/50">
                Java 17 &bull; Spring Boot
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
              Resilient Microservices &amp; Identity
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Service discovery with Netflix Eureka, fault-tolerant circuit breaking with Hystrix, declarative Feign RPC, and enterprise OAuth 2.0 / Okta token pipelines with stateless JWT validation.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
              {['Spring Boot 3.3', 'Netflix Eureka', 'Hystrix Fallback', 'Okta & JWT Auth', 'Redis Queues'].map((tag) => (
                <span key={tag} className="text-xs font-mono bg-slate-900 px-2.5 py-1 rounded text-slate-300 border border-slate-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
