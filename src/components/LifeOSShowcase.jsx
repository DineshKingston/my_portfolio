import React from 'react';
import { ExternalLink, Github, Sparkles, Server, Cpu, Database, Activity, ShieldCheck, Smartphone } from 'lucide-react';

export default function LifeOSShowcase() {
  return (
    <div className="w-full rounded-2xl md:rounded-3xl border border-slate-800 bg-slate-900/90 backdrop-blur-xl p-5 sm:p-8 md:p-10 shadow-2xl overflow-hidden transition-all hover:border-slate-700/80">
      
      {/* Header Badge & Title */}
      <div className="text-center mb-6 md:mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles size={14} /> Flagship Full-Stack System
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
          LifeOS — AI Personal Operating System
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Enterprise-grade mobile & backend personal operating system featuring streaming AI assistance, RAG vector knowledge vault, goal feasibility tracking, and automated task rescheduling.
        </p>
      </div>

      {/* Live System Status Bar (Mobile-Responsive Stack) */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 bg-slate-950/80 border border-slate-800/80 rounded-xl md:rounded-2xl mb-6">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Live Certified System
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
            Backend: <strong className="text-slate-200">AWS EC2</strong>
          </span>
          <span className="inline-flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
            Monitoring: <strong className="text-slate-200">Grafana Active</strong>
          </span>
          <span className="inline-flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
            k6 Load: <strong className="text-slate-200">339 RPS</strong>
          </span>
        </div>
      </div>

      {/* Highlights Grid (1 column on mobile, 2 on tablet, 4 on desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800/60">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
            <Smartphone size={14} className="text-indigo-400" /> Architecture
          </div>
          <div className="text-sm font-bold text-white">Flutter 3.41 + Spring Boot 3.3</div>
        </div>

        <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800/60">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
            <Database size={14} className="text-emerald-400" /> AI Vector Store
          </div>
          <div className="text-sm font-bold text-white">RAG + pgvector (HNSW)</div>
        </div>

        <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800/60">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
            <Server size={14} className="text-amber-400" /> Infrastructure
          </div>
          <div className="text-sm font-bold text-white">AWS EC2 + Docker + NGINX</div>
        </div>

        <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800/60">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
            <Activity size={14} className="text-purple-400" /> Quality & Load
          </div>
          <div className="text-sm font-bold text-white">k6 Certified (0% Error)</div>
        </div>
      </div>

      {/* Feature Grid (1 col on mobile, 2 col on tablet+) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8">
        <div className="p-4 sm:p-5 bg-slate-950/40 rounded-xl border border-slate-800/60 hover:border-slate-700/80 transition-all">
          <div className="text-sm sm:text-base font-bold text-indigo-400 mb-1 flex items-center gap-2">
            🤖 Streaming AI Chat Engine
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Real-time SSE streaming with model switching (DeepSeek V4 / OpenCode) and conversation persistence.
          </p>
        </div>

        <div className="p-4 sm:p-5 bg-slate-950/40 rounded-xl border border-slate-800/60 hover:border-slate-700/80 transition-all">
          <div className="text-sm sm:text-base font-bold text-emerald-400 mb-1 flex items-center gap-2">
            📚 Knowledge Vault (RAG)
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Multi-document PDF processing, semantic chunking, and cosine similarity vector search via pgvector.
          </p>
        </div>

        <div className="p-4 sm:p-5 bg-slate-950/40 rounded-xl border border-slate-800/60 hover:border-slate-700/80 transition-all">
          <div className="text-sm sm:text-base font-bold text-amber-400 mb-1 flex items-center gap-2">
            🎯 Autonomous Goal Engine
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Feasibility calculation, milestone breakdown, health score metrics, and automated task rescheduling.
          </p>
        </div>

        <div className="p-4 sm:p-5 bg-slate-950/40 rounded-xl border border-slate-800/60 hover:border-slate-700/80 transition-all">
          <div className="text-sm sm:text-base font-bold text-purple-400 mb-1 flex items-center gap-2">
            🔔 FCM Push Notification System
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Foreground/background push alerts with DJB2-hash tray isolation preventing notification overwrites.
          </p>
        </div>
      </div>

      {/* Action Buttons (Full width on mobile, auto on desktop) */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
        <a
          href="https://github.com/DineshKingston/LifeOs/releases/latest"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/30 active:scale-95"
        >
          <span>📱 Download Latest Beta APK</span>
          <ExternalLink size={16} />
        </a>

        <a
          href="https://github.com/DineshKingston/LifeOs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-950 hover:bg-slate-800 text-slate-200 text-sm font-semibold rounded-xl border border-slate-800 transition-all active:scale-95"
        >
          <Github size={16} />
          <span>View GitHub Repository</span>
        </a>
      </div>

    </div>
  );
}
