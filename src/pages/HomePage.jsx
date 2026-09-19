import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import BrandPositioning from '../components/BrandPositioning';
import towerTransportImg from '../assets/tower-transport.jpg';
import handlingInspectionImg from '../assets/handling-inspection.jpg';
import logisticsHubImg from '../assets/logistics-hub.jpg';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Radio,
  Clock,
  MapPin,
  CheckCircle,
  RefreshCw,
  Layers,
  Compass,
  Cpu,
  AlertCircle,
} from 'lucide-react';
import { submitContactInquiry } from '../utils/contactApi';

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
    serviceType: 'Mobile Tower Parts Transportation',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    const res = await submitContactInquiry({
      name: formData.name,
      company: formData.company,
      contact: formData.contact,
      serviceType: formData.serviceType,
      urgency: 'Scheduled Project Window',
      message: formData.message,
    });

    setSubmitting(false);

    if (res.success) {
      setSubmitted(true);
    } else {
      setErrorMessage(res.error || 'Failed to dispatch notification email. Please retry.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      contact: '',
      serviceType: 'Mobile Tower Parts Transportation',
      message: '',
    });
    setErrorMessage(null);
    setSubmitted(false);
  };

  const allServices = [
    {
      id: '01',
      title: 'Mobile tower parts transportation',
      category: 'SPECIALIZED HAULAGE',
      icon: Radio,
      desc: 'Transit engineered specifically for cellular lattice structures, modular tubular poles, antennas, and mounting hardware.',
      highlights: ['Structural mast sections', 'Antenna headframes', 'Tower foundation anchors'],
    },
    {
      id: '02',
      title: 'Telecom infrastructure logistics',
      category: 'CRITICAL HARDWARE',
      icon: Truck,
      desc: 'Full-spectrum transit of Base Transceiver Station (BTS) enclosures, rectifiers, battery storage banks, and optical fiber drums.',
      highlights: ['BTS outdoor cabinets', 'Power rack assemblies', 'Optical cable drums'],
    },
    {
      id: '03',
      title: 'Local pickup and delivery coordination',
      category: 'LAST-MILE MOBILITY',
      icon: MapPin,
      desc: 'Point-to-point dispatch synchronizing central logistics depots with difficult-to-reach cellular sites across urban and rural terrains.',
      highlights: ['Staged depot pickup', 'Difficult terrain routing', 'Urban rooftop coordination'],
    },
    {
      id: '04',
      title: 'Secure handling of infrastructure components',
      category: 'ZERO-DAMAGE PROTOCOLS',
      icon: ShieldCheck,
      desc: 'Rigorous lashing, impact dampening, and weatherproofing to safeguard electronic and mechanical telecommunications hardware.',
      highlights: ['Certified rigging protocols', 'Vibration dampening', 'Weatherproof tarpaulins'],
    },
    {
      id: '05',
      title: 'Route planning and delivery coordination',
      category: 'PRECISION DISPATCH',
      icon: Clock,
      desc: 'Turn-by-turn route surveys evaluating overhead clearances, bridge weight restrictions, and site delivery windows.',
      highlights: ['Clearance verification', 'Contingency detour mapping', 'Site arrival scheduling'],
    },
    {
      id: '06',
      title: 'Proof of delivery and operational follow-up',
      category: 'AUDIT & VERIFICATION',
      icon: CheckCircle2,
      desc: 'Itemized physical verification, serial number matching, and instantaneous digital e-POD confirmation upon handover.',
      highlights: ['Itemized barcode audits', 'Photographic confirmation', 'Digital e-POD sign-off'],
    },
  ];

  const processSteps = [
    { num: '01', title: 'Coordinate', text: 'Pickup and delivery requirements are aligned with site engineers and dispatch schedules.' },
    { num: '02', title: 'Handle', text: 'Infrastructure components are secured, cushioned, and rigged with specialized protective protocols.' },
    { num: '03', title: 'Move', text: 'Routes and transportation are coordinated for dependable, punctual movement across challenging terrains.' },
    { num: '04', title: 'Deliver', text: 'Delivery is completed with operational follow-up, client sign-off, and verified proof of delivery.' },
  ];

  const metrics = [
    { value: '100%', label: 'Transit Protocol Adherence', sub: 'Zero deviations from safety standards' },
    { value: '24/7', label: 'Continuous Fleet Telemetry', sub: 'Active GPS & route monitoring' },
    { value: 'Zero', label: 'Tolerance Damage Goal', sub: 'Impact-dampened component lashing' },
    { value: 'Multi', label: 'Sector Vision', sub: 'Telecom, Freight, Yards, Tech & Trading' },
  ];

  return (
    <div>
      {/* 1. Hero Section: Clean Pitch Black, Iconic Geometric VR Cutout Artwork */}
      <HeroSection />

      {/* From here downwards: Transparent Liquid Glass with Background Video Animation Shining Through */}

      {/* 2. Brand Positioning Section (Liquid Glass) */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <BrandPositioning />
      </div>

      {/* 3. Operational Telemetry & Scale Metric Bar */}
      <section className="editorial-section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div
            className="liquid-glass"
            style={{
              padding: '2.5rem 2rem',
              borderRadius: '2px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {metrics.map((m, idx) => (
              <div key={idx} style={{ borderLeft: idx !== 0 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none', paddingLeft: idx !== 0 ? '1.5rem' : '0' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '2.5rem', color: 'var(--accent-orange)', fontWeight: 300, lineHeight: 1 }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '0.95rem', color: '#ffffff', fontWeight: 500, marginTop: '0.5rem' }}>
                  {m.label}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Complete Services Matrix (Liquid Glass Cards) */}
      <section className="editorial-section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
            <div>
              <span className="editorial-label" style={{ marginBottom: '0.75rem' }}>
                OPERATIONAL CAPABILITIES
              </span>
              <h2 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)', color: '#ffffff', fontWeight: 300, lineHeight: 1.12 }}>
                Built for movement.<br />
                Designed for reliability.
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
                padding: '0.8rem 1.4rem',
                border: '1px solid rgba(255, 85, 0, 0.4)',
                backgroundColor: 'rgba(255, 85, 0, 0.08)',
                backdropFilter: 'blur(8px)',
              }}
            >
              Full Service Specs & Equipment
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Featured Logistics Photo Banner */}
          <div
            className="liquid-glass"
            style={{
              borderRadius: '2px',
              overflow: 'hidden',
              marginBottom: '3.5rem',
              maxHeight: '460px',
              position: 'relative',
            }}
          >
            <img
              src={towerTransportImg}
              alt="Heavy flatbed logistics truck transporting mobile tower steel lattice parts"
              style={{ width: '100%', height: '460px', objectFit: 'cover', display: 'block', opacity: 0.95 }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(6, 6, 10, 0.95) 0%, rgba(6, 6, 10, 0.4) 60%, transparent 100%)',
                padding: '2.5rem 2rem 1.75rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-orange)', fontFamily: 'var(--font-mono)', letterSpacing: '0.2em' }}>
                  FLEET OPERATIONS
                </span>
                <h3 style={{ fontSize: '1.65rem', color: '#ffffff', fontWeight: 400, marginTop: '0.25rem' }}>
                  Precision Transit for Mobile Tower Steel Lattice & Components
                </h3>
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                TELECOM INFRASTRUCTURE CORRIDORS
              </div>
            </div>
          </div>

          {/* 6 Core Services Liquid Glass Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {allServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  className="liquid-glass-card"
                  style={{
                    padding: '2.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: '2px',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: 'var(--accent-orange)' }}>
                        {svc.id}
                      </span>
                      <Icon size={20} color="var(--accent-orange)" />
                    </div>

                    <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                      {svc.category}
                    </span>

                    <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 400, marginBottom: '0.85rem' }}>
                      {svc.title}
                    </h3>
                    <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {svc.desc}
                    </p>

                    <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1rem' }}>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {svc.highlights.map((item, i) => (
                          <li key={i} style={{ fontSize: '0.8125rem', color: '#b5b5c0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--accent-orange)', display: 'inline-block' }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
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
                    Service Details <ArrowRight size={13} color="var(--accent-orange)" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Key Partner Feature Section (Liquid Glass) */}
      <section className="editorial-section">
        <div className="container">
          <div
            className="liquid-glass"
            style={{
              padding: '3.5rem',
              borderRadius: '2px',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3.5rem',
              alignItems: 'center',
            }}
            className="home-partner-panel"
          >
            <div>
              <span className="editorial-label" style={{ marginBottom: '1rem' }}>
                KEY LOGISTICS ALLIANCE
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#ffffff', fontWeight: 300, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Our first major partner.
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300, marginBottom: '2rem' }}>
                VR Multiventures' logistics journey begins with its first major partner, Reliance, supporting the movement of mobile tower parts and telecom infrastructure components.
              </p>

              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
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
                    padding: '0.85rem 1.6rem',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  }}
                >
                  Explore Alliance Details
                  <ArrowRight size={14} color="var(--accent-orange)" />
                </Link>
              </div>
            </div>

            <div style={{ borderRadius: '2px', overflow: 'hidden', border: '1px solid var(--border-hairline)' }}>
              <img
                src={logisticsHubImg}
                alt="VR Multiventures Logistics Terminal Operations"
                style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
        <style>{`
          @media (min-width: 860px) {
            .home-partner-panel {
              grid-template-columns: 1.2fr 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* 6. Four-Stage Operational Process (Liquid Glass) */}
      <section className="editorial-section">
        <div className="container">
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="editorial-label" style={{ marginBottom: '0.75rem' }}>
              OPERATIONAL METHODOLOGY
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#ffffff', fontWeight: 300 }}>
              Precision at every milestone.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="liquid-glass-card"
                style={{
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '2px',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', color: 'var(--accent-orange)', fontWeight: 300 }}>
                      {step.num}
                    </span>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.15em' }}>
                      PHASE
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: 400, marginBottom: '0.85rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {step.text}
                  </p>
                </div>

                <div style={{ height: '2px', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.1)', marginTop: '2rem' }}>
                  <div style={{ height: '100%', width: `${(idx + 1) * 25}%`, backgroundColor: 'var(--accent-orange)' }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link
              to="/process"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--accent-orange)',
              }}
            >
              Read In-Depth Workflow & Rigging Protocols <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Inspection Quality Feature Banner (Liquid Glass) */}
      <section className="editorial-section">
        <div className="container">
          <div
            className="liquid-glass"
            style={{
              padding: '3rem',
              borderRadius: '2px',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3rem',
              alignItems: 'center',
            }}
            className="home-inspection-panel"
          >
            <div style={{ borderRadius: '2px', overflow: 'hidden', border: '1px solid var(--border-hairline)' }}>
              <img
                src={handlingInspectionImg}
                alt="Logistics crew securing telecom equipment"
                style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div>
              <span className="editorial-label" style={{ marginBottom: '0.75rem' }}>
                ZERO-DEFECT STANDARD
              </span>
              <h3 style={{ fontSize: '2rem', color: '#ffffff', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.25rem' }}>
                Handling delicate infrastructure with precision and care.
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                From mobile tower structural parts to telecom electronics, we ensure every component is properly secured, weather-shielded, and audited for zero damage on arrival.
              </p>
              <Link
                to="/about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                }}
              >
                Learn About Our Standards <ArrowRight size={13} color="var(--accent-orange)" />
              </Link>
            </div>
          </div>
        </div>
        <style>{`
          @media (min-width: 860px) {
            .home-inspection-panel {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* 8. Enterprise Multi-Sector Expansion Horizon */}
      <section className="editorial-section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
            <div>
              <span className="editorial-label" style={{ marginBottom: '0.75rem' }}>
                STRATEGIC FOOTPRINT & ROADMAP
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#ffffff', fontWeight: 300 }}>
                Diversified ventures.<br />
                Cohesive execution.
              </h2>
            </div>
            <Link
              to="/sectors"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--accent-orange)',
              }}
            >
              Explore All Operating Sectors <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { id: '01', title: 'Telecom Infra Logistics', tag: 'CORE ACTIVE', status: '#10b981', desc: 'Specialized mobile tower sections, antenna arrays & BTS cabinet haulage.' },
              { id: '02', title: 'Industrial Freight & Haulage', tag: 'ACTIVE', status: '#10b981', desc: 'Heavy multi-axle freight movement for capital equipment & infrastructure.' },
              { id: '03', title: 'Real Estate & Yards', tag: 'EXPANSION', status: 'var(--accent-orange)', desc: 'Strategic highway laydown yards, transit depots & equipment parking.' },
              { id: '04', title: 'Technology & Telematics', tag: 'EXPANSION', status: 'var(--accent-orange)', desc: 'Live GPS telemetry, load safety sensors & digital proof-of-delivery.' },
            ].map((s) => (
              <div
                key={s.id}
                className="liquid-glass-card"
                style={{
                  padding: '2rem 1.75rem',
                  borderRadius: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: 'var(--accent-orange)' }}>
                      {s.id}
                    </span>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.12em',
                        color: s.status,
                        padding: '0.2rem 0.5rem',
                        border: `1px solid ${s.status === '#10b981' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(255, 85, 0, 0.3)'}`,
                      }}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 400, marginBottom: '0.65rem' }}>
                    {s.title}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Clarifications & Contractor FAQs (Liquid Glass) */}
      <section className="editorial-section">
        <div className="container">
          <div style={{ marginBottom: '3rem', maxWidth: '720px' }}>
            <span className="editorial-label" style={{ marginBottom: '0.75rem' }}>
              OPERATIONAL FAQS
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#ffffff', fontWeight: 300 }}>
              Immediate operational clarity.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {[
              {
                q: 'What cellular tower cargo can VR Multiventures transport?',
                a: 'We accommodate all lattice mast sections (tubular and angular), monopoles, mounting headframes, BTS enclosures, battery backup banks, and electrical cable drums.',
              },
              {
                q: 'How do you coordinate last-mile deliveries to remote hilltop sites?',
                a: 'Our dispatch team conducts pre-route gradient surveys and utilizes high-traction, small-wheelbase transfer carriers when regional terrain becomes inaccessible for heavy flatbeds.',
              },
              {
                q: 'What measures prevent component abrasion or weather exposure?',
                a: 'All cargo receives certified vibration-dampening dunnage, multi-tier ratchet binding, corner protection, and high-gauge weatherproof tarpaulin wraps before carrier departure.',
              },
              {
                q: 'How is proof of delivery confirmed upon site handover?',
                a: 'Digital e-POD sign-offs are completed on-site with authorized installation engineers, supported by itemized serial number manifests and photographic verification.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="liquid-glass-card"
                style={{
                  padding: '2.25rem',
                  borderRadius: '2px',
                }}
              >
                <h4 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 400, marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  {item.q}
                </h4>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Direct Dispatch Inquiry Form (Liquid Glass) */}
      <section className="editorial-section">
        <div className="container">
          <div
            className="liquid-glass"
            style={{
              padding: '4rem 3rem',
              borderRadius: '2px',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '4rem',
              alignItems: 'start',
            }}
            className="home-contact-grid"
          >
            <div>
              <span className="editorial-label" style={{ marginBottom: '1rem' }}>
                DISPATCH COORDINATION
              </span>
              <h2 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)', color: '#ffffff', fontWeight: 300, lineHeight: 1.1, marginBottom: '1.25rem' }}>
                Let's move what matters.
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2.5rem' }}>
                Have a logistics requirement or cellular tower parts dispatch scheduled? Contact our operations desk for synchronized routing and reliable fleet execution.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.85rem' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                    Direct Operations Line
                  </div>
                  <div style={{ fontSize: '1.05rem', color: '#ffffff', marginTop: '0.2rem' }}>
                    <a href="tel:+918668406011" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-orange)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>
                      +91 8668406011
                    </a>
                  </div>
                </div>

                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.85rem' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                    Logistics Coordination Email
                  </div>
                  <div style={{ fontSize: '1.05rem', color: '#ffffff', marginTop: '0.2rem' }}>
                    <a href="mailto:contact@multiventures.com" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-orange)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>
                      contact@multiventures.com
                    </a>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                    Registered Office & Hub
                  </div>
                  <div style={{ fontSize: '1.05rem', color: '#ffffff', marginTop: '0.2rem', lineHeight: 1.5 }}>
                    42, Solanki Patil wadi, Bidipeth road, Near Sakkardara talao, Nagpur
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Form Panel */}
            <div
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.45)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                padding: '2.5rem',
                borderRadius: '2px',
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <CheckCircle size={40} color="#10b981" style={{ marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: 300, marginBottom: '0.5rem' }}>
                    Requirement Registered
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                    Thank you, <strong style={{ color: '#ffffff' }}>{formData.name}</strong>. Our fleet dispatch team will review requirements and reach out promptly.
                  </p>
                  <button
                    onClick={handleReset}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.75rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-orange)',
                      padding: '0.5rem 1rem',
                      border: '1px solid rgba(255, 85, 0, 0.3)',
                    }}
                  >
                    <RefreshCw size={13} /> Submit Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.8rem 1rem', backgroundColor: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="e.g. Telecom Infra Corp"
                      value={formData.company}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.8rem 1rem', backgroundColor: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                      Phone / Email *
                    </label>
                    <input
                      type="text"
                      name="contact"
                      required
                      placeholder="+91 8668406011 or contact@multiventures.com"
                      value={formData.contact}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.8rem 1rem', backgroundColor: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                      Requirement Details *
                    </label>
                    <textarea
                      rows={3}
                      name="message"
                      required
                      placeholder="Specify tower parts, equipment weight, origin & destination site..."
                      value={formData.message}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.8rem 1rem', backgroundColor: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', outline: 'none', resize: 'vertical' }}
                    />
                  </div>

                  {errorMessage && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.85rem 1rem',
                        backgroundColor: 'rgba(239, 68, 68, 0.12)',
                        border: '1px solid rgba(239, 68, 68, 0.4)',
                        color: '#fca5a5',
                        fontSize: '0.85rem',
                        borderRadius: '2px',
                      }}
                    >
                      <AlertCircle size={16} color="#ef4444" style={{ flexShrink: 0 }} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      backgroundColor: 'var(--accent-orange)',
                      color: '#ffffff',
                      padding: '0.9rem 1.5rem',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.75rem',
                      marginTop: '0.5rem',
                      boxShadow: '0 4px 20px rgba(255, 85, 0, 0.3)',
                      opacity: submitting ? 0.8 : 1,
                    }}
                  >
                    {submitting ? (
                      <>
                        <RefreshCw size={14} style={{ animation: 'spin 1s linear infinite' }} />
                        <span>Transmitting Requirement...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Requirement</span>
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <style>{`
          @media (min-width: 860px) {
            .home-contact-grid {
              grid-template-columns: 1fr 1.2fr !important;
            }
          }
        `}</style>
      </section>

    </div>
  );
}
