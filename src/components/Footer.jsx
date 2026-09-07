import React from 'react';
import vrSymbol from '../assets/vr-symbol.png';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#000000',
        borderTop: '1px solid var(--border-hairline)',
        paddingTop: '5rem',
        paddingBottom: '3rem',
        position: 'relative',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
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
              <span
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  letterSpacing: '-0.015em',
                  color: '#ffffff',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                VR Multiventures<span style={{ color: 'var(--accent-orange)' }}>.</span>
              </span>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Moving infrastructure. Connecting possibilities. Specializing in reliable logistics and the transportation of critical telecom tower equipment.
            </p>
          </div>

          {/* Editorial Quick Links */}
          <div style={{ display: 'flex', gap: '3.5rem', flexWrap: 'wrap' }}>
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
                NAVIGATION
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <li><a href="#about" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>About Enterprise</a></li>
                <li><a href="#services" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Services & Fleet</a></li>
                <li><a href="#sectors" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Operating Sectors</a></li>
                <li><a href="#partner" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Key Partner</a></li>
                <li><a href="#process" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Methodology</a></li>
                <li><a href="#contact" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Inquire Dispatch</a></li>
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
                DISPATCH HUB
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                <div>+91 [Direct Line Placeholder]</div>
                <div>ops@vrmultiventures.com [Placeholder]</div>
                <div>Regional Logistics Center, India [Placeholder]</div>
              </div>
            </div>
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
              color: '#ffffff',
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
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: 'transparent',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-orange)';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
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
