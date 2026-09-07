import React from 'react';
import { Link } from 'react-router-dom';
import logisticsHubImg from '../assets/logistics-hub.jpg';
import { ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 1.5rem)', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      
      {/* 1. Page Header with Breadcrumb to Home */}
      <section className="editorial-section" style={{ paddingBottom: '3rem', paddingTop: '2rem' }}>
        <div className="container">
          <div className="editorial-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={12} />
            <span style={{ color: '#ffffff' }}>About Enterprise</span>
          </div>

          <div style={{ maxWidth: '850px' }}>
            <span className="editorial-label" style={{ marginBottom: '1rem' }}>
              ABOUT VR MULTIVENTURES
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
              Multiple ventures.<br />
              One clear direction.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>
              VR Multiventures is built around practical opportunities, reliable operations, and long-term relationships. Our current focus is logistics and telecom infrastructure transportation, with a vision to grow across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Visual Showcase (Liquid Glass Framed) */}
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
            alt="VR Multiventures Logistics Operations Terminal"
            style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block', opacity: 0.95 }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(6, 6, 10, 0.95) 0%, rgba(6, 6, 10, 0.4) 60%, transparent 100%)',
              padding: '2.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-orange)', letterSpacing: '0.2em' }}>
                INFRASTRUCTURE IN MOTION
              </span>
              <h3 style={{ fontSize: '1.65rem', color: '#ffffff', fontWeight: 400, marginTop: '0.35rem' }}>
                Dependable Ground Logistics for Vital Telecom Networks
              </h3>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
              HQ & REGIONAL DISPATCH TERMINAL
            </div>
          </div>
        </div>
      </div>

      {/* 3. Deep Corporate Story & Vision (Liquid Glass Panel) */}
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
            className="about-details-grid"
          >
            <div>
              <span className="editorial-label" style={{ marginBottom: '1rem' }}>
                OPERATIONAL GENESIS
              </span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 300, color: '#ffffff', lineHeight: 1.15 }}>
                Connecting critical assets with absolute precision.
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              <p>
                Modern telecommunication infrastructure represents the vital nervous system of commerce and human connection. Yet the actual physical hardware—massive steel tower lattices, sensitive antenna arrays, heavy backup power banks, and optical conduits—requires grounded, unyielding logistical discipline to reach remote locations and urban rooftops safely.
              </p>
              <p>
                At <strong style={{ color: '#ffffff' }}>VR Multiventures</strong>, our operations are purposefully engineered to handle these high-value, oversized, and time-critical infrastructure assets. Working closely with tier-one industry partners, our fleets navigate strict delivery windows and difficult terrain to guarantee continuous deployment.
              </p>
              <p style={{ color: '#ffffff' }}>
                While telecom infrastructure transportation represents our immediate operational foundation, VR Multiventures carries a broader horizon—scaling disciplined operational principles across real estate, technology, and strategic trading.
              </p>
            </div>
          </div>
        </div>
        <style>{`
          @media (min-width: 860px) {
            .about-details-grid {
              grid-template-columns: 360px 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* 4. Three Guiding Principles (Liquid Glass Cards) */}
      <section className="editorial-section">
        <div className="container">
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="editorial-label" style={{ marginBottom: '0.75rem' }}>
              OUR FOUNDATIONAL PILLARS
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#ffffff', fontWeight: 300 }}>
              The core principles guiding VR Multiventures.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="liquid-glass-card" style={{ padding: '2.5rem', borderRadius: '2px' }}>
              <span style={{ fontSize: '0.8125rem', color: 'var(--accent-orange)', fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}>
                01 / OPERATIONAL DISCIPLINE
              </span>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', margin: '1rem 0 0.75rem', fontWeight: 400 }}>
                Zero-Defect Standards
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                From mandatory pre-trip payload audits to certified protective rigging, we treat every cellular component as non-replaceable cargo that must arrive in flawless condition.
              </p>
            </div>

            <div className="liquid-glass-card" style={{ padding: '2.5rem', borderRadius: '2px' }}>
              <span style={{ fontSize: '0.8125rem', color: 'var(--accent-orange)', fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}>
                02 / PARTNER ALIGNMENT
              </span>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', margin: '1rem 0 0.75rem', fontWeight: 400 }}>
                Seamless Integration
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                We work not merely as an outside carrier, but as an integrated logistical arm for our partners—aligning directly with site engineers, dispatchers, and milestone deadlines.
              </p>
            </div>

            <div className="liquid-glass-card" style={{ padding: '2.5rem', borderRadius: '2px' }}>
              <span style={{ fontSize: '0.8125rem', color: 'var(--accent-orange)', fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}>
                03 / SUSTAINABLE HORIZON
              </span>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', margin: '1rem 0 0.75rem', fontWeight: 400 }}>
                Disciplined Expansion
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                Building robust balance sheets, reliable fleet equipment, and dependable operational models that create durable long-term enterprise value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Return Home / Next Steps Strip */}
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
              <span className="editorial-label-muted">CONTINUE EXPLORING</span>
              <h3 style={{ fontSize: '1.75rem', color: '#ffffff', fontWeight: 300, marginTop: '0.5rem' }}>
                Navigate to services or return to the main overview.
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
                ← Back to Home
              </Link>
              <Link
                to="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-orange)',
                  padding: '0.85rem 1.5rem',
                  border: '1px solid rgba(255, 85, 0, 0.4)',
                  backgroundColor: 'rgba(255, 85, 0, 0.08)',
                }}
              >
                Specialized Services <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
