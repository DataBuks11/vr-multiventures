import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Truck, MapPin, Radio, Clock, CheckCircle2 } from 'lucide-react';

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: '01',
      title: 'Mobile tower parts transportation',
      category: 'TELECOM FLEET',
      icon: Radio,
      desc: 'Dedicated transport solutions designed specifically for heavy, awkward, and sensitive mobile cellular tower structural parts, microwave antennas, and modular cage units.',
      capabilities: ['Structural Mast & Lattice Transit', 'Antenna & Feeder Cable Delivery', 'Tower Base Hardware Logistics'],
    },
    {
      id: '02',
      title: 'Telecom infrastructure logistics',
      category: 'CRITICAL INFRASTRUCTURE',
      icon: Truck,
      desc: 'End-to-end regional logistics for telecom power systems, base station controllers, battery banks, solar arrays, and outdoor electronics enclosures.',
      capabilities: ['BTS & Enclosure Transport', 'Power Backup Rack Dispatch', 'Site Upgrade Materials'],
    },
    {
      id: '03',
      title: 'Local pickup and delivery coordination',
      category: 'LAST-MILE MOBILITY',
      icon: MapPin,
      desc: 'Punctual, organized local movement coordinating directly between regional logistics hubs, warehousing depots, and difficult-to-reach cellular site locations.',
      capabilities: ['Scheduled Time-Window Dispatch', 'Difficult Terrain Routing', 'Urban & Remote Site Access'],
    },
    {
      id: '04',
      title: 'Secure handling of infrastructure components',
      category: 'ZERO-DAMAGE PROTOCOL',
      icon: ShieldCheck,
      desc: 'Meticulous securing, cushioned tie-downs, weatherproofing, and safe handling procedures tailored to prevent shock, abrasion, and damage to mission-critical hardware.',
      capabilities: ['Specialized Lashing Protocols', 'Pre-Transit Damage Inspection', 'Protective Weather Shielding'],
    },
    {
      id: '05',
      title: 'Route planning and delivery coordination',
      category: 'PRECISION DISPATCH',
      icon: Clock,
      desc: 'Intelligent route optimization factoring in overhead clearances, road conditions, bridge restrictions, and project delivery deadlines to eliminate delays.',
      capabilities: ['Clearance & Roadway Surveying', 'Staged Multi-Drop Coordination', 'Proactive Transit Monitoring'],
    },
    {
      id: '06',
      title: 'Proof of delivery and operational follow-up',
      category: 'AUDIT & COMPLIANCE',
      icon: CheckCircle2,
      desc: 'Thorough handover validation including physical verification, itemized sign-offs, photo documentation, and real-time dispatch updates for site engineers.',
      capabilities: ['Digital & Physical POD Documentation', 'Immediate Handover Confirmation', 'Operational Discrepancy Reporting'],
    },
  ];

  return (
    <section
      id="services"
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
            OPERATIONAL CAPABILITIES
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
              fontWeight: 300,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              maxWidth: '850px',
            }}
          >
            Built for movement.<br />
            Designed for reliability.
          </h2>
        </div>

        {/* Editorial Services List with Thin Dividers */}
        <div style={{ borderTop: '1px solid var(--border-hairline)' }}>
          {services.map((item, index) => {
            const isHovered = activeService === index;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveService(index)}
                style={{
                  borderBottom: '1px solid var(--border-hairline)',
                  padding: '2rem 0',
                  cursor: 'pointer',
                  transition: 'background-color 0.25s ease, padding 0.25s ease',
                  backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
                }}
                className="service-row"
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '1.25rem',
                    alignItems: 'baseline',
                  }}
                  className="service-inner-grid"
                >
                  {/* Service Number & Category */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.25rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: isHovered ? 'var(--accent-orange)' : 'var(--text-muted)',
                        letterSpacing: '0.1em',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {item.id}
                    </span>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Service Title */}
                  <div>
                    <h3
                      style={{
                        fontSize: 'clamp(1.25rem, 2.2vw, 1.85rem)',
                        fontWeight: 300,
                        color: isHovered ? '#ffffff' : 'var(--text-secondary)',
                        letterSpacing: '-0.015em',
                        transition: 'color 0.2s ease',
                        marginBottom: isHovered ? '0.75rem' : '0',
                      }}
                    >
                      {item.title}
                    </h3>
                    
                    {/* Expandable / Detailed Description */}
                    <div
                      style={{
                        maxHeight: isHovered ? '200px' : '0px',
                        opacity: isHovered ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      <p style={{ fontSize: '0.95rem', color: '#b0b0b5', maxWidth: '680px', marginBottom: '1rem' }}>
                        {item.desc}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        {item.capabilities.map((cap, cIdx) => (
                          <span
                            key={cIdx}
                            style={{
                              fontSize: '0.75rem',
                              fontFamily: 'var(--font-mono)',
                              color: 'var(--text-secondary)',
                              backgroundColor: 'rgba(255, 255, 255, 0.04)',
                              border: '1px solid rgba(255, 255, 255, 0.08)',
                              padding: '0.25rem 0.65rem',
                              borderRadius: '2px',
                            }}
                          >
                            + {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Icon Indicator */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}
                    className="service-icon-col"
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '2px',
                        border: isHovered ? '1px solid var(--accent-orange)' : '1px solid rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isHovered ? 'var(--accent-orange)' : 'var(--text-muted)',
                        backgroundColor: isHovered ? 'rgba(255, 85, 0, 0.08)' : 'transparent',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .service-inner-grid {
            grid-template-columns: 240px 1fr 60px !important;
            gap: 2.5rem !important;
          }
          .service-row:hover {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
