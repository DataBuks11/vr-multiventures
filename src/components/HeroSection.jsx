import React from 'react';
import heroArtwork from '../assets/vr-hero-composition.png';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: 'calc(var(--header-height) + 1.5rem)',
        paddingBottom: '3.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'var(--bg-primary)',
        transition: 'background-color 0.4s ease',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '20%',
          width: '500px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255, 85, 0, 0.07) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Top Editorial Subheader */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            paddingBottom: '1.75rem',
            borderBottom: '1px solid var(--border-hairline)',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              lineHeight: 1.5,
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <div>MULTIPLE</div>
            <div>VENTURES</div>
            <div>BIGGER</div>
            <div style={{ color: 'var(--text-primary)' }}>TOMORROWS</div>
          </div>

          <div
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              textAlign: 'right',
            }}
            className="hero-top-right-tags"
          >
            PEOPLE &nbsp;|&nbsp; IDEAS &nbsp;|&nbsp; INDUSTRIES &nbsp;|&nbsp; IMPACT
          </div>
        </div>

        {/* Oversized Geometric VR Lettermark Artwork */}
        <div
          style={{
            width: '100%',
            maxWidth: '1100px',
            margin: '0 auto',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem 0 2.5rem',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              borderRadius: '2px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9)',
            }}
          >
            <img
              src={heroArtwork}
              alt="VR Multiventures Infrastructure Transport on Highway"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
                transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="hero-artwork-img"
            />
          </div>
        </div>

        {/* Bottom Hero Anchor & Tagline Strip */}
        <div
          style={{
            marginTop: 'auto',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-hairline)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--accent-orange)',
                display: 'block',
                marginBottom: '0.35rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              LOGISTICS & INFRASTRUCTURE TRANSPORTATION
            </span>
            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-primary)',
                fontWeight: 300,
                letterSpacing: '-0.01em',
              }}
            >
              Moving infrastructure. Connecting possibilities.
            </p>
          </div>

          <a
            href="#positioning"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '0.75rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              padding: '0.6rem 1rem',
              border: '1px solid var(--border-hairline)',
              borderRadius: '2px',
              backgroundColor: 'var(--bg-glass-light)',
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
            Explore Overview
            <ChevronDown size={14} color="var(--accent-orange)" />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-top-right-tags {
            font-size: 0.65rem !important;
            letter-spacing: 0.12em !important;
          }
        }
        .hero-artwork-img:hover {
          transform: scale(1.015);
        }
      `}</style>
    </section>
  );
}
