import React from 'react';
import { Link } from 'react-router-dom';
import towerTransportImg from '../assets/tower-transport.jpg';
import handlingInspectionImg from '../assets/handling-inspection.jpg';
import { Radio, Truck, MapPin, ShieldCheck, Clock, CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: '01',
      title: 'Mobile tower parts transportation',
      category: 'SPECIALIZED HEAVY HAULAGE',
      icon: Radio,
      summary: 'Heavy and oversized transit specifically engineered for cellular tower structures, tubular poles, and foundation assemblies.',
      details: [
        'Steel lattice tower sections (20m - 60m staged modules)',
        'Tubular monopole structures & mounting brackets',
        'Antenna boom arms, headframes & feeder cable trays',
        'Tower base plates, anchor bolts & counterweight systems',
      ],
      protocols: 'Cushioned bolster points, multi-point chain and ratchet tie-downs, certified wide-load transit permits when required.',
    },
    {
      id: '02',
      title: 'Telecom infrastructure logistics',
      category: 'CRITICAL HARDWARE MOVEMENT',
      icon: Truck,
      summary: 'End-to-end transport of sensitive telecommunication electronics, power rectifiers, and site enclosures.',
      details: [
        'Base Transceiver Station (BTS) outdoor & indoor cabinets',
        'Uninterruptible power supplies, battery racks & rectifiers',
        'Optical fiber drum transit & splicing equipment trailers',
        'Emergency standby diesel generators & solar array components',
      ],
      protocols: 'Air-ride suspension equipped carriers, anti-vibration dunnage, thermal protection covers.',
    },
    {
      id: '03',
      title: 'Local pickup and delivery coordination',
      category: 'LAST-MILE REGIONAL DISPATCH',
      icon: MapPin,
      summary: 'Precision local movement directly connecting central supply hubs, regional staging warehouses, and remote cell towers.',
      details: [
        'Direct scheduled departures from tier-one logistics depots',
        'Last-mile routing to rural, unpaved & mountainous towers',
        'Urban rooftop access coordination & crane transfer staging',
        'Time-critical spares delivery for live network repairs',
      ],
      protocols: 'Pre-dispatch access road surveying, secondary small-wheelbase transfer vehicles for difficult access terrain.',
    },
    {
      id: '04',
      title: 'Secure handling of infrastructure components',
      category: 'ZERO-DAMAGE PROTOCOLS',
      icon: ShieldCheck,
      summary: 'Rigorous handling procedures to eliminate transit vibration, drop impact, moisture ingress, and surface abrasions.',
      details: [
        'Specialized heavy rigging and crane-assisted lifting protocols',
        'Multi-layer weatherproofing and protective pallet wrapping',
        'Shock indicators and sensitive equipment dampening pads',
        'Mandatory load stability certification before departure',
      ],
      protocols: 'Certified handlers equipped with industrial PPE, safety harnesses, and precision hoist equipment.',
    },
    {
      id: '05',
      title: 'Route planning and delivery coordination',
      category: 'TRANSIT INTELLIGENCE',
      icon: Clock,
      summary: 'Proactive surveying and turn-by-turn route evaluation to bypass low bridge clearances, road construction, and axle-weight limits.',
      details: [
        'Overhead clearance verification (bridges, power cables)',
        'Road width and turning radius checks for semi-trailers',
        'Coordination with local highway authorities for transit windows',
        'Contingency detour mapping for uninterrupted movement',
      ],
      protocols: 'Telemetry-assisted dispatch tracking, driver route briefing, and live ETA updates to site installation teams.',
    },
    {
      id: '06',
      title: 'Proof of delivery and operational follow-up',
      category: 'AUDIT & VERIFICATION',
      icon: CheckCircle2,
      summary: 'Comprehensive handover procedures guaranteeing transparency, digital audit trails, and instant verification for project leads.',
      details: [
        'Itemized barcode and serial number physical verification',
        'High-resolution photographic capture of cargo upon delivery',
        'Instant digital proof-of-delivery (e-POD) transmission',
        'Discrepancy resolution and rapid return-loop coordination',
      ],
      protocols: 'Signed confirmation by authorized site project manager before carrier release.',
    },
  ];

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 1.5rem)', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      
      {/* 1. Page Header with Breadcrumb */}
      <section className="editorial-section" style={{ paddingBottom: '3rem', paddingTop: '2rem' }}>
        <div className="container">
          <div className="editorial-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={12} />
            <span style={{ color: '#ffffff' }}>Services & Capabilities</span>
          </div>

          <div style={{ maxWidth: '880px' }}>
            <span className="editorial-label" style={{ marginBottom: '1rem' }}>
              FLEET SERVICES & CAPABILITIES
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
              Built for movement.<br />
              Designed for reliability.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>
              Specialized logistics engineered for telecommunications infrastructure, mobile tower components, and critical ground equipment.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Hero Visual Showcase */}
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
            src={towerTransportImg}
            alt="Mobile Tower Transportation on Road"
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
              PRIMARY DISPATCH FLEET
            </span>
            <h3 style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: 400, marginTop: '0.25rem' }}>
              Heavy Logistics for Structural Telecommunications Components
            </h3>
          </div>
        </div>
      </div>

      {/* 3. Detailed Services Cards (Liquid Glass) */}
      <section className="editorial-section">
        <div className="container">
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="editorial-label" style={{ marginBottom: '0.75rem' }}>
              DETAILED SCOPE OF WORK
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#ffffff', fontWeight: 300 }}>
              6 Core Operational Disciplines
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
            {services.map((svc) => (
              <div
                key={svc.id}
                className="liquid-glass-card"
                style={{
                  padding: '2.5rem',
                  borderRadius: '2px',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '2.5rem',
                  }}
                  className="service-card-grid"
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', color: 'var(--accent-orange)' }}>
                        {svc.id}
                      </span>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.2em' }}>
                        {svc.category}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.65rem', color: '#ffffff', fontWeight: 400, marginBottom: '1rem', lineHeight: 1.25 }}>
                      {svc.title}
                    </h3>
                    <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                      {svc.summary}
                    </p>

                    <div
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.45)',
                        borderLeft: '2px solid var(--accent-orange)',
                        padding: '1rem',
                      }}
                    >
                      <span style={{ fontSize: '0.75rem', color: 'var(--accent-orange)', fontFamily: 'var(--font-mono)', letterSpacing: '0.15em', display: 'block', marginBottom: '0.35rem' }}>
                        SAFETY & TRANSIT PROTOCOL
                      </span>
                      <p style={{ fontSize: '0.875rem', color: '#e0e0e0', margin: 0 }}>
                        {svc.protocols}
                      </p>
                    </div>
                  </div>

                  <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.08)', paddingLeft: '2rem' }} className="service-items-col">
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '1.25rem' }}>
                      CARGO & HARDWARE SCOPE
                    </span>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      {svc.details.map((detail, dIdx) => (
                        <li key={dIdx} style={{ fontSize: '0.95rem', color: '#e5e5e5', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', lineHeight: 1.5 }}>
                          <span style={{ color: 'var(--accent-orange)', fontSize: '1.1rem', lineHeight: 1 }}>•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (min-width: 860px) {
            .service-card-grid {
              grid-template-columns: 1.3fr 1fr !important;
            }
          }
          @media (max-width: 859px) {
            .service-items-col {
              border-left: none !important;
              padding-left: 0 !important;
              border-top: 1px solid rgba(255, 255, 255, 0.08);
              padding-top: 1.5rem;
            }
          }
        `}</style>
      </section>

      {/* 4. Secondary Inspection Banner (Liquid Glass) */}
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
              alignItems: 'center',
            }}
            className="services-inspection-panel"
          >
            <div style={{ borderRadius: '2px', overflow: 'hidden', border: '1px solid var(--border-hairline)' }}>
              <img
                src={handlingInspectionImg}
                alt="Logistics technicians securing and inspecting telecom hardware"
                style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div>
              <span className="editorial-label" style={{ marginBottom: '1rem' }}>
                CERTIFIED HANDLING
              </span>
              <h2 style={{ fontSize: '2.5rem', color: '#ffffff', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.5rem' }}>
                Zero-tolerance for component damage.
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                Telecom electronics and precision antenna arrays cannot withstand improper strapping or transport shock. We maintain certified rigging standards on all journeys.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.8125rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    backgroundColor: 'var(--accent-orange)',
                    padding: '0.85rem 1.75rem',
                  }}
                >
                  Schedule Dispatch <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (min-width: 860px) {
            .services-inspection-panel {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>
      </section>

    </div>
  );
}
