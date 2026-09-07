import React from 'react';
import { Link } from 'react-router-dom';
import vrSymbol from '../assets/vr-symbol.png';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const ecosystemPartners = [
    {
      name: 'TOWERGRID',
      tagline: 'TELECOM INFRA',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 4 22 20 22" />
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="6" y1="17" x2="18" y2="17" />
          <line x1="9" y1="7" x2="15" y2="7" />
          <circle cx="12" cy="2" r="1.2" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'APEX HAULAGE',
      tagline: 'FREIGHT CORRIDORS',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="13 17 18 12 13 7" />
          <polyline points="6 17 11 12 6 7" />
          <line x1="2" y1="21" x2="22" y2="21" />
        </svg>
      ),
    },
    {
      name: 'INFRACONNECT',
      tagline: 'INTERMODAL LOGISTICS',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },
    {
      name: 'NEXUS CORRIDOR',
      tagline: 'ROUTE TELEMETRY',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" fillOpacity="0.25" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      className="liquid-glass"
      style={{
        backgroundColor: 'var(--bg-glass-heavy)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--border-glass)',
        paddingTop: '5rem',
        paddingBottom: '3rem',
        position: 'relative',
        zIndex: 2,
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="container">
        {/* Top Footer Tier: Approved Logo & Editorial Tagline */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '2.5rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid var(--border-hairline)',
          }}
        >
          {/* Logo & Tagline */}
          <div style={{ maxWidth: '420px' }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div className="brand-logo-badge">
                <img
                  src={vrSymbol}
                  alt="VR"
                  style={{
                    height: '32px',
                    width: 'auto',
                    display: 'block',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  letterSpacing: '-0.015em',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                VR Multiventures<span style={{ color: 'var(--accent-orange)' }}>.</span>
              </span>
            </Link>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Moving infrastructure. Connecting possibilities. Specializing in reliable logistics and the local transportation of critical telecom tower equipment.
            </p>
          </div>

          {/* Multi-Page Navigation Directory */}
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-orange)',
                  marginBottom: '1rem',
                }}
              >
                CORPORATE
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <li><Link to="/about" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>About Enterprise</Link></li>
                <li><Link to="/services" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Specialized Services</Link></li>
                <li><Link to="/sectors" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Operating Sectors</Link></li>
                <li><Link to="/partner" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Key Partner</Link></li>
                <li><Link to="/process" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Operational Process</Link></li>
                <li><Link to="/contact" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Dispatch Inquiry</Link></li>
              </ul>
            </div>

            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '1rem',
                }}
              >
                OPERATIONS DESK
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                <div>+91 [Direct Line Placeholder]</div>
                <div>ops@vrmultiventures.com [Placeholder]</div>
                <div>Regional Logistics Center, India [Placeholder]</div>
                <div style={{ marginTop: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-orange)', fontFamily: 'var(--font-mono)' }}>
                    HOURS: 24/7 Dispatch Control
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Industry & Network Trust Strip: 4 Premium Partner Logos */}
        <div
          style={{
            padding: '2.25rem 0',
            borderBottom: '1px solid var(--border-hairline)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <span
            style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            NETWORK & CORRIDOR ECOSYSTEM
          </span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(1.5rem, 3.5vw, 3.25rem)',
              flexWrap: 'wrap',
            }}
          >
            {ecosystemPartners.map((partner) => (
              <div
                key={partner.name}
                className="partner-logo-item"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  color: 'var(--text-secondary)',
                  opacity: 0.75,
                  transition: 'all 0.25s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.75';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ color: 'var(--accent-orange)', display: 'flex', alignItems: 'center' }}>
                  {partner.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      fontFamily: 'var(--font-heading)',
                      lineHeight: 1.1,
                      color: 'inherit',
                    }}
                  >
                    {partner.name}
                  </span>
                  <span
                    style={{
                      fontSize: '0.5625rem',
                      fontWeight: 500,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)',
                      marginTop: '2px',
                    }}
                  >
                    {partner.tagline}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Tier: Copyright & Back to Top */}
        <div
          style={{
            paddingTop: '2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.08em',
            }}
          >
            © 2026 VR Multiventures. All rights reserved.
          </div>

          <div
            style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
            }}
          >
            DIVERSE VENTURES. BRIGHTER TOMORROWS.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              padding: '0.4rem 0.75rem',
              border: '1px solid var(--border-hairline)',
              backgroundColor: 'transparent',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-orange)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-hairline)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            Top
            <ArrowUp size={12} color="var(--accent-orange)" />
          </button>
        </div>
      </div>
    </footer>
  );
}
