import React from 'react';
import { ExternalLink, Github, Sparkles, Server, Cpu, Database, Activity, Smartphone } from 'lucide-react';

export default function LifeOSShowcase() {
  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border)',
      borderRadius: '24px',
      padding: '2rem',
      marginTop: '3.5rem',
      marginBottom: '2rem'
    }}>
      
      {/* Header Badge & Title */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div className="section-badge" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(99,102,241,0.15)',
          color: '#818cf8',
          border: '1px solid rgba(99,102,241,0.3)',
          marginBottom: '0.75rem'
        }}>
          <Sparkles size={14} /> Featured System Showcase
        </div>
        <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          LifeOS — Deep Dive Architecture
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
          Full-stack personal operating system featuring streaming AI assistance, RAG vector knowledge vault, goal feasibility tracking, and automated task rescheduling.
        </p>
      </div>

      {/* Live System Status Bar */}
      <div style={{
        background: 'var(--bg-primary)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        padding: '1rem 1.25rem',
        marginBottom: '2rem',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ height: '10px', width: '10px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 10px #10b981' }}></span>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#10b981' }}>
            Live Production Certified System
          </span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
          <span>Backend: <strong style={{ color: 'var(--text-primary)' }}>AWS EC2</strong></span>
          <span>•</span>
          <span>Observability: <strong style={{ color: 'var(--text-primary)' }}>Grafana Active</strong></span>
          <span>•</span>
          <span>k6 Load: <strong style={{ color: 'var(--text-primary)' }}>339.81 RPS</strong></span>
        </div>
      </div>

      {/* Highlights Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <div style={{ padding: '1rem', background: 'var(--bg-primary)', borderRadius: '12px', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
            <Smartphone size={14} style={{ color: '#818cf8' }} /> Architecture
          </div>
          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>Flutter 3.41 + Spring Boot 3.3</div>
        </div>

        <div style={{ padding: '1rem', background: 'var(--bg-primary)', borderRadius: '12px', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
            <Database size={14} style={{ color: '#34d399' }} /> AI Vector Store
          </div>
          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>RAG + pgvector (HNSW)</div>
        </div>

        <div style={{ padding: '1rem', background: 'var(--bg-primary)', borderRadius: '12px', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
            <Server size={14} style={{ color: '#fbbf24' }} /> Infrastructure
          </div>
          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>AWS EC2 + Docker + NGINX</div>
        </div>

        <div style={{ padding: '1rem', background: 'var(--bg-primary)', borderRadius: '12px', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
            <Activity size={14} style={{ color: '#c084fc' }} /> Quality & Load
          </div>
          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>k6 Certified (0% Error)</div>
        </div>
      </div>

      {/* Feature Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <div style={{ padding: '1.25rem', background: 'var(--bg-primary)', borderRadius: '14px', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#818cf8', marginBottom: '0.4rem' }}>
            🤖 Streaming AI Chat Engine
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
            Real-time SSE streaming with model switching (DeepSeek V4 / OpenCode) and conversation persistence.
          </p>
        </div>

        <div style={{ padding: '1.25rem', background: 'var(--bg-primary)', borderRadius: '14px', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#34d399', marginBottom: '0.4rem' }}>
            📚 Knowledge Vault (RAG)
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
            Multi-document PDF processing, semantic chunking, and cosine similarity vector search via pgvector.
          </p>
        </div>

        <div style={{ padding: '1.25rem', background: 'var(--bg-primary)', borderRadius: '14px', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fbbf24', marginBottom: '0.4rem' }}>
            🎯 Autonomous Goal Engine
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
            Feasibility calculation, milestone breakdown, health score metrics, and automated task rescheduling.
          </p>
        </div>

        <div style={{ padding: '1.25rem', background: 'var(--bg-primary)', borderRadius: '14px', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#c084fc', marginBottom: '0.4rem' }}>
            🔔 FCM Push Notification System
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
            Foreground/background push alerts with DJB2-hash tray isolation preventing notification overwrites.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        <a
          href="https://github.com/DineshKingston/LifeOS-Showcase/raw/main/releases/app-arm64-v8a-release.apk"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.4rem', borderRadius: '12px', fontWeight: 600, fontSize: '0.85rem' }}
        >
          <span>📱 Download Latest Beta APK</span>
          <ExternalLink size={15} />
        </a>

        <a
          href="https://github.com/DineshKingston/LifeOS-Showcase"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.4rem', borderRadius: '12px', fontWeight: 600, fontSize: '0.85rem' }}
        >
          <Github size={15} />
          <span>View GitHub Showcase Repo</span>
        </a>
      </div>

    </div>
  );
}
