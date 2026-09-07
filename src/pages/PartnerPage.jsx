import React from 'react';
import { Link } from 'react-router-dom';
import logisticsHubImg from '../assets/logistics-hub.jpg';
import { ShieldCheck, Truck, Clock, ArrowRight, ChevronRight } from 'lucide-react';

export default function PartnerPage() {
  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 1.5rem)', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      
      {/* 1. Page Header with Breadcrumb */}
      <section className="editorial-section" style={{ paddingBottom: '3rem', paddingTop: '2rem' }}>
        <div className="container">
          <div className="editorial-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={12} />
            <span style={{ color: '#ffffff' }}>Key Logistics Alliance</span>
          </div>

          <div style={{ maxWidth: '880px' }}>
            <span className="editorial-label" style={{ marginBottom: '1rem' }}>
              KEY LOGISTICS ALLIANCE
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: '#ffffff',
                letterSpacing: '-0.025em',
                marginBottom: '1.75rem',
              }}
            >
              Our first major partner.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>
              VR Multiventures' logistics journey begins with its first major partner, Reliance, supporting the movement of mobile tower parts and telecom infrastructure components.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Visual Showcase */}
      <div className="container" style={{ marginBottom: '5rem' }}>
        <div
          className="liquid-glass"
          style={{
            position: 'relative',
            borderRadius: '2px',
            overflow: 'hidden',
          }}
        >
          <img
            src={logisticsHubImg}
            alt="Logistics Coordination Terminal"
            style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block', opacity: 0.95 }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(6, 6, 10, 0.95) 0%, transparent 80%)',
              padding: '2.5rem 2rem 1.5rem',
            }}
          >
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-orange)', letterSpacing: '0.2em' }}>
              OPERATIONAL ALLIANCE
            </span>
            <h3 style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: 400, marginTop: '0.25rem' }}>
              Synchronized Tower Infrastructure Movement & Dedicated Regional Transit
            </h3>
          </div>
        </div>
      </div>

      {/* 3. Alliance Principles & Compliance Content (Liquid Glass) */}
      <section className="editorial-section">
        <div className="container">
          <div
            className="liquid-glass"
            style={{
              padding: '3.5rem',
              borderRadius: '2px',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '4rem',
            }}
            className="partner-details-grid"
          >
            <div>
              <span className="editorial-label" style={{ marginBottom: '1rem' }}>
                COLLABORATION PRINCIPLES
              </span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 300, color: '#ffffff', lineHeight: 1.15 }}>
                Grounded execution for mission-critical infrastructure.
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              <p>
                The roll-out and maintenance of telecommunications networks require absolute logistical dependability. Heavy steel tower structures, high-frequency antennas, and power systems must reach remote and urban deployment points in zero-defect condition, aligned precisely with installation schedules.
              </p>
              <p>
                Through our collaboration supporting <strong style={{ color: '#ffffff' }}>Reliance</strong> as our first major logistics partner, VR Multiventures has structured its fleets, handling protocols, and operational follow-ups to meet rigorous institutional standards.
              </p>
              <p style={{ color: '#ffffff' }}>
                We maintain an unyielding focus on safety, load securing, route planning, and verified proof-of-delivery—providing transparent logistical reliability on every assigned movement.
              </p>
            </div>
          </div>
        </div>
        <style>{`
          @media (min-width: 860px) {
            .partner-details-grid {
              grid-template-columns: 360px 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* 4. Core Scope Dimensions (Liquid Glass Cards) */}
      <section className="editorial-section">
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <span className="editorial-label" style={{ marginBottom: '0.75rem' }}>
              SCOPE & STANDARDS
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#ffffff', fontWeight: 300 }}>
              Disciplined Operational Pillars
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="liquid-glass-card" style={{ padding: '2.25rem', borderRadius: '2px' }}>
              <Truck size={24} color="var(--accent-orange)" style={{ marginBottom: '1.25rem' }} />
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 400, marginBottom: '0.75rem' }}>
                Mobile Tower Transit
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Careful transportation of structural steel sections, mounts, and hardware from supply depots to active site installations.
              </p>
            </div>

            <div className="liquid-glass-card" style={{ padding: '2.25rem', borderRadius: '2px' }}>
              <ShieldCheck size={24} color="var(--accent-orange)" style={{ marginBottom: '1.25rem' }} />
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 400, marginBottom: '0.75rem' }}>
                Zero-Damage Care
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Protocol-driven lashing, cushioned tie-downs, and transit inspections to protect mission-critical equipment.
              </p>
            </div>

            <div className="liquid-glass-card" style={{ padding: '2.25rem', borderRadius: '2px' }}>
              <Clock size={24} color="var(--accent-orange)" style={{ marginBottom: '1.25rem' }} />
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 400, marginBottom: '0.75rem' }}>
                Synchronized Windows
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Punctual delivery coordination matching crane availability and site engineering schedules to minimize dwell time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="editorial-section">
        <div className="container">
          <div
            className="liquid-glass"
            style={{
              padding: '2.5rem 3rem',
              borderRadius: '2px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '2rem',
            }}
          >
            <div>
              <span className="editorial-label-muted">DISPATCH COORDINATION</span>
              <h3 style={{ fontSize: '1.85rem', color: '#ffffff', fontWeight: 300, marginTop: '0.5rem' }}>
                Have an infrastructure transport requirement?
              </h3>
            </div>
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
              <Link
                to="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                  padding: '0.85rem 1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                }}
              >
                ← Return to Home
              </Link>
              <Link
                to="/contact"
                style={{
                  backgroundColor: 'var(--accent-orange)',
                  color: '#ffffff',
                  padding: '0.85rem 1.75rem',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                Contact Dispatch Desk
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
