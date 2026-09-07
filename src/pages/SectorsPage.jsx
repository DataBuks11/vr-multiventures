import React from 'react';
import { Link } from 'react-router-dom';
import ridgeInfrastructureImg from '../assets/ridge-infrastructure.jpg';
import { Radio, Truck, Building, Cpu, Globe, ArrowRight } from 'lucide-react';

export default function SectorsPage() {
  const sectors = [
    {
      id: '01',
      title: 'Telecom Infrastructure Logistics',
      status: 'CORE ACTIVE SECTOR',
      statusColor: '#10b981',
      icon: Radio,
      summary: 'Dedicated ground transportation of mobile cellular towers, base station cabinets, antenna mounts, and telecom components across regional network corridors.',
      features: ['Mobile Tower Steel Lattice Transit', 'Antenna and Microwave Dish Dispatch', 'Cellular Site Power Backups & Solar Arrays'],
    },
    {
      id: '02',
      title: 'Industrial Freight & Haulage',
      status: 'ACTIVE SECTOR',
      statusColor: '#10b981',
      icon: Truck,
      summary: 'Heavy-duty fleet dispatch for critical infrastructure machinery, structural fabrications, and industrial manufacturing freight.',
      features: ['Multi-Axle Flatbed Operations', 'Staged Regional Route Planning', 'Permitted Oversized Cargo Transit'],
    },
    {
      id: '03',
      title: 'Real Estate & Logistics Yards',
      status: 'STRATEGIC EXPANSION',
      statusColor: 'var(--accent-orange)',
      icon: Building,
      summary: 'Identification, development, and management of strategic warehousing hubs, equipment staging yards, and freight parking terminals along key transport corridors.',
      features: ['Equipment Staging & Laydown Yards', 'Corridor Industrial Land Development', 'Modular Distribution Depots'],
    },
    {
      id: '04',
      title: 'Technology & Fleet Telematics',
      status: 'OPERATIONAL EXPANSION',
      statusColor: 'var(--accent-orange)',
      icon: Cpu,
      summary: 'Integration of real-time GPS telemetry, route-clearance mapping, load-sensor monitoring, and digital proof-of-delivery systems.',
      features: ['Real-time Dispatch Telemetry', 'Digital e-POD Confirmation Platforms', 'Predictive Route Clearance Systems'],
    },
    {
      id: '05',
      title: 'Trading & Strategic Procurement',
      status: 'FUTURE HORIZON',
      statusColor: 'var(--text-muted)',
      icon: Globe,
      summary: 'Facilitating component sourcing, raw material supply, and infrastructure hardware distribution to support industrial expansion.',
      features: ['Infrastructure Material Sourcing', 'Turnkey B2B Supply Chains', 'Cross-Border Component Coordination'],
    },
  ];

  return (
    <div style={{ paddingTop: 'var(--header-height)', backgroundColor: '#000000', minHeight: '100vh' }}>
      
      {/* 1. Page Header */}
      <section className="editorial-section" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div style={{ maxWidth: '880px' }}>
            <span className="editorial-label" style={{ color: 'var(--accent-orange)', marginBottom: '1rem' }}>
              OPERATING SECTORS & EXPANSION
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
              Connecting resources,<br />
              people and possibilities.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>
              From our operational anchor in telecommunications logistics to our broader horizon across real estate, technology, and trading, VR Multiventures builds durable opportunities across diverse industries.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Hero Visual Showcase */}
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
            src={ridgeInfrastructureImg}
            alt="Mountain ridge telecom infrastructure connected by highway"
            style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 80%)',
              padding: '2.5rem 2rem 1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-orange)', letterSpacing: '0.2em' }}>
                INFRASTRUCTURE HORIZON
              </span>
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: 400, marginTop: '0.25rem' }}>
                Connecting High-Elevation Telecom Sites & Ground Supply Corridors
              </h3>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
              NETWORK EXPANSION & REACH
            </div>
          </div>
        </div>
      </div>

      {/* 3. Detailed Sector Cards */}
      <section className="editorial-section" style={{ backgroundColor: '#050505', borderTop: '1px solid var(--border-hairline)', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="container">
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="editorial-label" style={{ color: 'var(--accent-orange)', marginBottom: '0.75rem' }}>
              PORTFOLIO ARCHITECTURE
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#ffffff', fontWeight: 300 }}>
              Disciplined Ventures Across Key Sectors
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.id}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-hairline)',
                    padding: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'border-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 85, 0, 0.45)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-hairline)')}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: 'var(--accent-orange)' }}>
                        {sector.id}
                      </span>
                      <span
                        style={{
                          fontSize: '0.6875rem',
                          fontFamily: 'var(--font-mono)',
                          color: sector.statusColor,
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          border: `1px solid ${sector.statusColor}33`,
                          padding: '0.2rem 0.5rem',
                          borderRadius: '2px',
                        }}
                      >
                        {sector.status}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.45rem', color: '#ffffff', fontWeight: 400, marginBottom: '1rem' }}>
                      {sector.title}
                    </h3>
                    <p style={{ fontSize: '0.975rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2rem' }}>
                      {sector.summary}
                    </p>

                    <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '1.25rem' }}>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
                        KEY INITIATIVES
                      </span>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {sector.features.map((feat, fIdx) => (
                          <li key={fIdx} style={{ fontSize: '0.875rem', color: '#cccccc', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--accent-orange)', display: 'inline-block' }} />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Strategic Bottom Link */}
      <section className="editorial-section" style={{ backgroundColor: '#000000' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <span className="editorial-label-muted">LOGISTICS INQUIRY</span>
              <h3 style={{ fontSize: '1.85rem', color: '#ffffff', fontWeight: 300, marginTop: '0.5rem' }}>
                Need specialized infrastructure logistics?
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
              Inquire With Operations
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
