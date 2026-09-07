import React from 'react';

export default function BrandPositioning() {
  const sectors = [
    { title: 'LOGISTICS', active: true },
    { title: 'TELECOM INFRASTRUCTURE', active: true },
    { title: 'REAL ESTATE', active: false },
    { title: 'TECHNOLOGY', active: false },
    { title: 'TRADING', active: false },
    { title: 'AND BEYOND', active: false },
  ];

  return (
    <section
      id="positioning"
      className="editorial-section"
      style={{
        backgroundColor: '#000000',
        borderTop: '1px solid var(--border-hairline)',
        borderBottom: '1px solid var(--border-hairline)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'start',
          }}
          className="positioning-grid"
        >
          {/* Left Column: Sector Labels & Orange Geometric Accent */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              minHeight: '280px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {sectors.map((sector, index) => (
                <div
                  key={index}
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: sector.active ? '#ffffff' : 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {sector.active && (
                    <span
                      style={{
                        width: '4px',
                        height: '4px',
                        backgroundColor: 'var(--accent-orange)',
                        display: 'inline-block',
                      }}
                    />
                  )}
                  {sector.title}
                </div>
              ))}
            </div>

            {/* Signature Minimal Orange Square Accent */}
            <div style={{ marginTop: '2.5rem' }}>
              <div
                className="orange-block"
                style={{
                  boxShadow: '0 4px 16px rgba(255, 85, 0, 0.35)',
                }}
                title="VR Multiventures Orange Accent"
              />
            </div>
          </div>

          {/* Right Column: Editorial Headline & Copy */}
          <div style={{ maxWidth: '780px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                fontWeight: 300,
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                color: '#ffffff',
                marginBottom: '2.5rem',
              }}
            >
              Multiple<br />
              Ventures<br />
              A Brighter<br />
              Tomorrow.
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              <p>
                At <strong style={{ color: '#ffffff', fontWeight: 600 }}>VR Multiventures</strong>, we build, invest and operate across diverse industries, creating opportunities that drive sustainable growth and real-world impact.
              </p>
              <p>
                From logistics to real estate, technology to trading, we connect resources, people and possibilities to shape a brighter tomorrow.
              </p>
            </div>

            {/* Operational Focus Box */}
            <div
              style={{
                marginTop: '2.5rem',
                padding: '1.5rem',
                borderLeft: '2px solid var(--accent-orange)',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <span
                style={{
                  fontSize: '0.725rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-orange)',
                  fontFamily: 'var(--font-mono)',
                  display: 'block',
                  marginBottom: '0.35rem',
                }}
              >
                CURRENT OPERATIONAL FOCUS
              </span>
              <p style={{ fontSize: '0.95rem', color: '#e0e0e0', margin: 0 }}>
                Specialized in the local transportation and dependable handling of mobile tower components and telecommunications infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .positioning-grid {
            grid-template-columns: 280px 1fr !important;
            gap: 5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
