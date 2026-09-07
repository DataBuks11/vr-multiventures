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

        {/* Bottom Industry & Network Trust Strip: Four Logoipsum Wordmarks */}
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
              gap: 'clamp(2rem, 4vw, 4rem)',
              flexWrap: 'wrap',
              opacity: 0.65,
            }}
          >
            <span className="logoipsum" style={{ fontSize: '1.25rem', color: '#ffffff' }}>logoipsum</span>
            <span className="logoipsum" style={{ fontSize: '1.25rem', color: '#ffffff' }}>logoipsum</span>
            <span className="logoipsum" style={{ fontSize: '1.25rem', color: '#ffffff' }}>logoipsum</span>
            <span className="logoipsum" style={{ fontSize: '1.25rem', color: '#ffffff' }}>logoipsum</span>
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
