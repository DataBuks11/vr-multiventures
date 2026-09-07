import React from 'react';

export default function PartnerSection() {
  return (
    <section
      id="partner"
      className="editorial-section"
      style={{
        backgroundColor: '#050505',
        borderBottom: '1px solid var(--border-hairline)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="partner-grid"
        >
          {/* Left Column: Context Label & Title */}
          <div>
            <span className="editorial-label" style={{ color: 'var(--accent-orange)', marginBottom: '1rem' }}>
              KEY LOGISTICS ALLIANCE
            </span>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                lineHeight: 1.15,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                marginBottom: '1.75rem',
              }}
            >
              Our first major partner.
            </h2>
            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '620px',
                fontWeight: 300,
              }}
            >
              VR Multiventures' logistics journey begins with its first major partner, Reliance, supporting the movement of mobile tower parts and telecom infrastructure components.
            </p>
          </div>

          {/* Right Column: Editorial Highlight Plate (No unauthorized logos, strictly professional) */}
          <div>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-hairline)',
                padding: '2.5rem 2rem',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '32px',
                  height: '2px',
                  backgroundColor: 'var(--accent-orange)',
                }}
              />

              <span
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  display: 'block',
                  marginBottom: '1.5rem',
                }}
              >
                COLLABORATION OVERVIEW
              </span>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '1rem' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.25rem' }}>
                    Primary Operational Scope
                  </div>
                  <div style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 400 }}>
                    Local and regional dispatch of cellular tower structures & assemblies
                  </div>
                </div>

                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '1rem' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.25rem' }}>
                    Equipment Handled
                  </div>
                  <div style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 400 }}>
                    Telecom infrastructure components, antenna units, power modules & accessories
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.25rem' }}>
                    Operational Standard
                  </div>
                  <div style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 400 }}>
                    Protocol-compliant handling, secure lashing, and proof-of-delivery verification
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .partner-grid {
            grid-template-columns: 1.2fr 1fr !important;
            gap: 4.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
