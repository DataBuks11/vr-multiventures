import React from 'react';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="editorial-section"
      style={{
        backgroundColor: '#050505',
        borderBottom: '1px solid var(--border-hairline)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
          }}
          className="about-grid"
        >
          {/* Left Column Label */}
          <div>
            <span className="editorial-label" style={{ color: 'var(--accent-orange)', marginBottom: '1rem' }}>
              ABOUT THE ENTERPRISE
            </span>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                color: 'var(--text-muted)',
                lineHeight: 1.8,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                marginTop: '1.5rem',
              }}
            >
              <div>ENTERPRISE / VR MULTIVENTURES</div>
              <div>SPECIALTY / INFRASTRUCTURE LOGISTICS</div>
              <div>FIRST LOGISTICS ALLIANCE / RELIANCE</div>
              <div>HEADQUARTERS / REGIONAL OPERATIONS</div>
            </div>
          </div>

          {/* Right Column: Headline & Body */}
          <div style={{ maxWidth: '820px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 4rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: '#ffffff',
                letterSpacing: '-0.025em',
                marginBottom: '2rem',
              }}
            >
              Multiple ventures.<br />
              One clear direction.
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              <p>
                VR Multiventures is built around practical opportunities, reliable operations, and long-term relationships. Our current focus is logistics and telecom infrastructure transportation, with a vision to grow across multiple industries.
              </p>
              <p style={{ color: '#ffffff', fontWeight: 400 }}>
                We believe in grounded, disciplined execution—ensuring every critical component reaches its site safely, intact, and on schedule.
              </p>
            </div>

            {/* Guiding Principles Strip */}
            <div
              style={{
                marginTop: '3.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border-hairline)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-orange)', fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}>
                  01 / DISCIPLINE
                </span>
                <h4 style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0.4rem 0' }}>Dependable Transit</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  Rigorous timing and component care on every assigned route.
                </p>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-orange)', fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}>
                  02 / ALIGNMENT
                </span>
                <h4 style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0.4rem 0' }}>Partner Centric</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  Seamless collaboration with prime telecom contractors and site leads.
                </p>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-orange)', fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}>
                  03 / HORIZON
                </span>
                <h4 style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0.4rem 0' }}>Sustainable Growth</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  Expanding operational capabilities while maintaining zero defect standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .about-grid {
            grid-template-columns: 280px 1fr !important;
            gap: 4.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
