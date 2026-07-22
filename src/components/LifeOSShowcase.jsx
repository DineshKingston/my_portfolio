import React from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

export default function LifeOSShowcase() {
  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="section-container">
        
        {/* Header Badge */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="section-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(99,102,241,0.15)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.3)' }}>
            <Sparkles size={14} /> Flagship Project Showcase
          </div>
          <h2 className="section-title" style={{ marginTop: '0.5rem' }}>LifeOS — AI Personal Operating System</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '700px' }}>
            Enterprise-grade full-stack personal operating system with streaming AI assistance, RAG vector knowledge vault, goal feasibility tracking, and automated task rescheduling.
          </p>
        </div>

        {/* Live Status Bar */}
        <div style={{
          background: 'rgba(15, 23, 42, 0.8)',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          padding: '1rem 1.5rem',
          marginBottom: '2.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ height: '10px', width: '10px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 10px #10b981' }}></span>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#10b981' }}>
              Live Production Certified System
            </span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            <span>Backend: <strong style={{ color: 'var(--text-primary)' }}>AWS EC2 (Online)</strong></span>
            <span>•</span>
            <span>Observability: <strong style={{ color: 'var(--text-primary)' }}>Grafana Active</strong></span>
            <span>•</span>
            <span>Performance: <strong style={{ color: 'var(--text-primary)' }}>k6 Certified (339 RPS)</strong></span>
          </div>
        </div>

        {/* Highlights Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
          marginBottom: '2.5rem'
        }}>
          <div style={{ padding: '1.2rem', background: 'var(--bg-primary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Architecture</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>Flutter 3.41 + Spring Boot 3.3</div>
          </div>

          <div style={{ padding: '1.2rem', background: 'var(--bg-primary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>AI Vector Store</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>RAG + pgvector (HNSW)</div>
          </div>

          <div style={{ padding: '1.2rem', background: 'var(--bg-primary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Infrastructure</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>AWS EC2 + Docker + NGINX</div>
          </div>

          <div style={{ padding: '1.2rem', background: 'var(--bg-primary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Quality & Load</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>k6 Certified (0% Error)</div>
          </div>
        </div>

        {/* Feature Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginBottom: '2.5rem'
        }}>
          <div style={{ padding: '1.5rem', background: 'var(--bg-primary)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#818cf8', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              🤖 Streaming AI Chat Engine
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Real-time SSE streaming with model switching (DeepSeek V4 / OpenCode) and conversation persistence.
            </p>
          </div>

          <div style={{ padding: '1.5rem', background: 'var(--bg-primary)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#34d399', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              📚 Knowledge Vault (RAG)
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Multi-document PDF processing, semantic chunking, and cosine similarity vector search via pgvector.
            </p>
          </div>

          <div style={{ padding: '1.5rem', background: 'var(--bg-primary)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fbbf24', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              🎯 Autonomous Goal Engine
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Feasibility calculation, milestone breakdown, health score metrics, and automated task rescheduling.
            </p>
          </div>

          <div style={{ padding: '1.5rem', background: 'var(--bg-primary)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#c084fc', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              🔔 FCM Push Notification System
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Foreground/background push alerts with DJB2-hash tray isolation preventing notification overwrites.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <a
            href="https://github.com/DineshKingston/LifeOs/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem', borderRadius: '12px', fontWeight: 600 }}
          >
            <span>📱 Download Latest Beta APK</span>
            <ExternalLink size={16} />
          </a>

          <a
            href="https://github.com/DineshKingston/LifeOs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem', borderRadius: '12px', fontWeight: 600 }}
          >
            <Github size={16} />
            <span>View GitHub Repository</span>
          </a>
        </div>

      </div>
    </section>
  );
}
