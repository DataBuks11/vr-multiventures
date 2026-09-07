import React from 'react';
import { Link } from 'react-router-dom';
import handlingInspectionImg from '../assets/handling-inspection.jpg';
import { CheckCircle2, ArrowRight, ShieldCheck, MapPin, ClipboardList, CheckSquare } from 'lucide-react';

export default function ProcessPage() {
  const steps = [
    {
      num: '01',
      phase: 'ALIGNMENT & PLANNING',
      title: 'Coordinate',
      summary: 'Pickup and delivery requirements are thoroughly aligned with site engineers, dispatch depots, and crane availability.',
      breakdown: [
        'Detailed cargo audit: dimensions, weights, and center-of-gravity verification.',
        'Site access evaluation: road gradients, turning radiuses, and terrain suitability.',
        'Staging window synchronization with field installation crews.',
        'Permit acquisition for oversized structural loads and heavy machinery.',
      ],
    },
    {
      num: '02',
      phase: 'RIGGING & SECURING',
      title: 'Handle',
      summary: 'Infrastructure components are secured, cushioned, and handled with specialized protective protocols.',
      breakdown: [
        'Multi-point heavy duty ratchet strap and chain securing system.',
        'High-density rubber dampening to prevent transit vibration damage.',
        'Waterproof tarpaulin shielding for sensitive power cabinets and rectifiers.',
        'Final pre-departure stability sign-off by certified rigging supervisors.',
      ],
    },
    {
      num: '03',
      phase: 'CONTROLLED TRANSIT',
      title: 'Move',
      summary: 'Routes and transportation are coordinated for dependable, punctual movement across challenging terrains.',
      breakdown: [
        'Pre-surveyed route navigation avoiding low bridge clearances and weight restrictions.',
        'Real-time GPS telemetry and transit milestone monitoring.',
        'Driver adherence to regulated speed, mandatory rest stops, and defensive driving.',
        'Continuous communication with site managers regarding updated arrival ETAs.',
      ],
    },
    {
      num: '04',
      phase: 'VERIFICATION & SIGN-OFF',
      title: 'Deliver',
      summary: 'Delivery is completed with operational follow-up, itemized physical checks, and proof of delivery.',
      breakdown: [
        'Safe site unloading coordination with crane and lifting operators.',
        'Item-by-item physical inspection against delivery manifest with site lead.',
        'High-resolution photographic documentation of delivered cargo condition.',
        'Instant digital proof of delivery (e-POD) sign-off and operational follow-up.',
      ],
    },
  ];

  return (
    <div style={{ paddingTop: 'var(--header-height)', backgroundColor: '#000000', minHeight: '100vh' }}>
      
      {/* 1. Page Header */}
      <section className="editorial-section" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div style={{ maxWidth: '880px' }}>
            <span className="editorial-label" style={{ color: 'var(--accent-orange)', marginBottom: '1rem' }}>
              OPERATIONAL METHODOLOGY
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
              Precision at every milestone.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>
              From initial dispatch scheduling to certified on-site handover, our four-stage logistics methodology ensures zero-damage and on-time delivery for vital telecom infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Visual Showcase */}
      <div className="container" style={{ marginBottom: '5rem' }}>
        <div
          style={{
            position: 'relative',
            borderRadius: '2px',
            overflow: 'hidden',
            border: '1px solid var(--border-hairline)',
          }}
        >
          <img
            src={handlingInspectionImg}
            alt="Rigging and Inspection Procedures"
            style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 80%)',
              padding: '2.5rem 2rem 1.5rem',
            }}
          >
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-orange)', letterSpacing: '0.2em' }}>
              QUALITY CONTROL PROTOCOL
            </span>
            <h3 style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: 400, marginTop: '0.25rem' }}>
              Rigorous Pre-Departure Rigging & Component Inspection
            </h3>
          </div>
        </div>
      </div>

      {/* 3. Detailed 4-Step Process Section */}
      <section className="editorial-section" style={{ backgroundColor: '#050505', borderTop: '1px solid var(--border-hairline)', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="container">
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="editorial-label" style={{ color: 'var(--accent-orange)', marginBottom: '0.75rem' }}>
              THE 4-STAGE FRAMEWORK
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#ffffff', fontWeight: 300 }}>
              Disciplined Execution Workflow
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
            {steps.map((step) => (
              <div
                key={step.num}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-hairline)',
                  padding: '2.5rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '2rem',
                  transition: 'border-color 0.2s ease',
                }}
                className="step-grid"
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 85, 0, 0.5)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-hairline)')}
              >
                {/* Step Metadata & Title */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '2.5rem', color: 'var(--accent-orange)', fontWeight: 300, lineHeight: 1 }}>
                      {step.num}
                    </span>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.2em' }}>
                      {step.phase}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.85rem', color: '#ffffff', fontWeight: 400, marginBottom: '1rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {step.summary}
                  </p>
                </div>

                {/* Step Breakdown Checkpoints */}
                <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.08)', paddingLeft: '2rem' }} className="step-breakdown-col">
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '1.25rem' }}>
                    OPERATIONAL PROTOCOLS
                  </span>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {step.breakdown.map((item, iIdx) => (
                      <li key={iIdx} style={{ fontSize: '0.925rem', color: '#e0e0e0', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', lineHeight: 1.5 }}>
                        <CheckSquare size={16} color="var(--accent-orange)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (min-width: 860px) {
            .step-grid {
              grid-template-columns: 1.2fr 1fr !important;
            }
          }
          @media (max-width: 859px) {
            .step-breakdown-col {
              border-left: none !important;
              padding-left: 0 !important;
              border-top: 1px solid rgba(255, 255, 255, 0.08);
              padding-top: 1.5rem;
            }
          }
        `}</style>
      </section>

      {/* 4. Bottom Action */}
      <section className="editorial-section" style={{ backgroundColor: '#000000' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <span className="editorial-label-muted">EXPERIENCE PRECISION</span>
              <h3 style={{ fontSize: '1.85rem', color: '#ffffff', fontWeight: 300, marginTop: '0.5rem' }}>
                Ready to coordinate your next delivery?
              </h3>
            </div>
            <Link
              to="/contact"
              style={{
                backgroundColor: 'var(--accent-orange)',
                color: '#ffffff',
                padding: '0.9rem 2rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              Contact Operations Desk
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
