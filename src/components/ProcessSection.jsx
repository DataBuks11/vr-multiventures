import React from 'react';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Coordinate',
      desc: 'Pickup and delivery requirements are aligned with site engineers, dispatchers, and project schedules.',
    },
    {
      num: '02',
      title: 'Handle',
      desc: 'Infrastructure components are secured, cushioned, and handled with specialized protective protocols.',
    },
    {
      num: '03',
      title: 'Move',
      desc: 'Routes and transportation are coordinated for dependable, punctual movement across challenging terrains.',
    },
    {
      num: '04',
      title: 'Deliver',
      desc: 'Delivery is completed with operational follow-up, client sign-off, and verified proof of delivery.',
    },
  ];

  return (
    <section
      id="process"
      className="editorial-section"
      style={{
        backgroundColor: '#000000',
        borderBottom: '1px solid var(--border-hairline)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '4rem' }}>
          <span className="editorial-label" style={{ color: 'var(--accent-orange)', marginBottom: '1rem' }}>
            OPERATIONAL METHODOLOGY
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            Predictable execution at every stage.
          </h2>
        </div>

        {/* 4-Step Process Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem',
            borderTop: '1px solid var(--border-hairline)',
            paddingTop: '2.5rem',
          }}
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingRight: '1rem',
                position: 'relative',
              }}
            >
              {/* Step Number with Accent Bar */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.75rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.75rem',
                      fontWeight: 300,
                      color: 'var(--accent-orange)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {step.num}
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                    }}
                  >
                    PHASE
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 400,
                    color: '#ffffff',
                    marginBottom: '0.85rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {step.desc}
                </p>
              </div>

              {/* Progress Line Indicator */}
              <div
                style={{
                  height: '2px',
                  width: '100%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  marginTop: '2rem',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${(idx + 1) * 25}%`,
                    backgroundColor: 'var(--accent-orange)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
