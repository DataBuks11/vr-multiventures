import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import BrandPositioning from '../components/BrandPositioning';
import towerTransportImg from '../assets/tower-transport.jpg';
import logisticsHubImg from '../assets/logistics-hub.jpg';
import { ArrowRight, CheckCircle2, Shield, Truck, Radio, Clock } from 'lucide-react';

export default function HomePage() {
  const previewServices = [
    {
      num: '01',
      title: 'Mobile tower parts transportation',
      desc: 'Specialized heavy and delicate transit for cell tower lattice frames, antenna arrays, and modular mounts.',
      icon: Radio,
    },
    {
      num: '02',
      title: 'Telecom infrastructure logistics',
      desc: 'Complete site-to-site movement of base station hardware, power rectifiers, and optical transmission units.',
      icon: Truck,
    },
    {
      num: '03',
      title: 'Local pickup and delivery coordination',
      desc: 'Synchronized local dispatch connecting regional warehouse hubs with difficult-to-access cellular sites.',
      icon: Clock,
    },
  ];

  return (
    <div>
      {/* 1. Iconic VR Lettermark Hero */}
      <HeroSection />

      {/* 2. Brand Positioning Section */}
      <BrandPositioning />

      {/* 3. Featured Capabilities Preview */}
      <section className="editorial-section" style={{ backgroundColor: '#000000', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
            <div>
              <span className="editorial-label" style={{ color: 'var(--accent-orange)', marginBottom: '0.75rem' }}>
                SPECIALIZED CAPABILITIES
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#ffffff', fontWeight: 300, lineHeight: 1.15 }}>
                Built for movement.<br />Designed for reliability.
              </h2>
            </div>
            <Link
              to="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontSize: '0.8125rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--accent-orange)',
                padding: '0.75rem 1.25rem',
                border: '1px solid rgba(255, 85, 0, 0.3)',
                backgroundColor: 'rgba(255, 85, 0, 0.04)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 85, 0, 0.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 85, 0, 0.04)')}
            >
              View All 6 Services
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Feature Image Banner */}
          <div
            style={{
              position: 'relative',
              borderRadius: '2px',
              overflow: 'hidden',
              marginBottom: '3.5rem',
              border: '1px solid var(--border-hairline)',
              maxHeight: '440px',
            }}
          >
            <img
              src={towerTransportImg}
              alt="Heavy flatbed logistics truck transporting mobile tower steel lattice parts"
              style={{
                width: '100%',
                height: '440px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)',
                padding: '2.5rem 2rem 1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-orange)', fontFamily: 'var(--font-mono)', letterSpacing: '0.2em' }}>
                  ON-ROAD OPERATIONS
                </span>
                <h3 style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: 400, marginTop: '0.25rem' }}>
                  Critical Mobile Tower Structural Haulage
                </h3>
              </div>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                GPS MONITORED · ZERO DAMAGE PROTOCOL
              </span>
            </div>
          </div>

          {/* 3 Teaser Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {previewServices.map((svc) => (
              <div
                key={svc.num}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-hairline)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 85, 0, 0.4)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-hairline)')}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: 'var(--accent-orange)' }}>
                      {svc.num}
                    </span>
                    <svc.icon size={20} color="var(--text-muted)" />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 400, marginBottom: '0.75rem' }}>
                    {svc.title}
                  </h4>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {svc.desc}
                  </p>
                </div>
                <Link
                  to="/services"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    marginTop: '2rem',
                  }}
                >
                  Learn More <ArrowRight size={13} color="var(--accent-orange)" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Strategic Partner Highlight */}
      <section className="editorial-section" style={{ backgroundColor: '#050505', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', alignItems: 'center' }} className="home-partner-grid">
            <div>
              <span className="editorial-label" style={{ color: 'var(--accent-orange)', marginBottom: '1rem' }}>
                FOUNDATIONAL ALLIANCE
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#ffffff', fontWeight: 300, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Our first major partner.
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300, marginBottom: '2rem' }}>
                VR Multiventures' logistics journey begins with its first major partner, Reliance, supporting the movement of mobile tower parts and telecom infrastructure components.
              </p>
              <Link
                to="/partner"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                  padding: '0.75rem 1.5rem',
                  border: '1px solid var(--border-strong)',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                }}
              >
                Read Alliance Details
                <ArrowRight size={14} color="var(--accent-orange)" />
              </Link>
            </div>

            <div
              style={{
                position: 'relative',
                borderRadius: '2px',
                overflow: 'hidden',
                border: '1px solid var(--border-hairline)',
              }}
            >
              <img
                src={logisticsHubImg}
                alt="VR Multiventures Logistics Terminal Operations"
                style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)',
                  padding: '2rem',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                <div>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-orange)', letterSpacing: '0.2em' }}>
                    INFRASTRUCTURE DISPATCH
                  </span>
                  <p style={{ fontSize: '1.05rem', color: '#ffffff', margin: 0, marginTop: '0.25rem' }}>
                    Coordinating timely equipment dispatch across challenging local and regional routes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (min-width: 860px) {
            .home-partner-grid {
              grid-template-columns: 1.2fr 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* 5. Process & Direct Call to Action */}
      <section className="editorial-section" style={{ backgroundColor: '#000000' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-hairline)',
              padding: '4rem 2.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '2px',
                backgroundColor: 'var(--accent-orange)',
              }}
            />

            <span className="editorial-label" style={{ color: 'var(--accent-orange)', marginBottom: '1rem' }}>
              GET STARTED WITH VR MULTIVENTURES
            </span>
            <h2 style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', color: '#ffffff', fontWeight: 300, lineHeight: 1.12, marginBottom: '1.25rem', maxWidth: '750px' }}>
              Let's move what matters.
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Have a logistics requirement or cellular tower parts dispatch scheduled? Contact our dispatch team for synchronized routing and reliable execution.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link
                to="/contact"
                style={{
                  backgroundColor: 'var(--accent-orange)',
                  color: '#ffffff',
                  padding: '1rem 2.25rem',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  boxShadow: '0 4px 20px rgba(255, 85, 0, 0.3)',
                }}
              >
                Inquire Dispatch Requirement
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/about"
                style={{
                  padding: '1rem 2rem',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                  border: '1px solid var(--border-strong)',
                  backgroundColor: 'transparent',
                }}
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
