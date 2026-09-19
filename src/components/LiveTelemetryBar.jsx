import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Truck, Clock, Phone } from 'lucide-react';

export default function LiveTelemetryBar() {
  const [telemetry, setTelemetry] = useState({
    activeInTransit: 22,
    dispatchReady: 6,
    status: 'ONLINE',
    corridors: [
      { name: 'Nagpur - Wardha', status: 'Optimal' },
      { name: 'Nagpur - Chandrapur', status: 'Optimal' },
      { name: 'Nagpur - Amravati', status: 'Clear' },
      { name: 'Nagpur - Gondia', status: 'Optimal' },
    ],
  });

  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Dynamic real-time clock
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    // Fetch dynamic telemetry from serverless API
    fetch('/api/telemetry')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.activeInTransit) {
          setTelemetry({
            activeInTransit: data.activeInTransit,
            dispatchReady: data.dispatchReady,
            status: data.status,
            corridors: data.activeCorridors || telemetry.corridors,
          });
        }
      })
      .catch(() => {});

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        backgroundColor: 'rgba(10, 12, 16, 0.95)',
        borderBottom: '1px solid rgba(255, 85, 0, 0.25)',
        color: '#ffffff',
        fontSize: '0.75rem',
        fontFamily: 'var(--font-mono)',
        padding: '0.45rem 1rem',
        position: 'relative',
        zIndex: 40,
        backdropFilter: 'blur(10px)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}
      >
        {/* Left: Live Status Pulse */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span
            style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 10px #10b981',
              animation: 'pulse 2s infinite',
            }}
          />
          <span style={{ color: 'var(--accent-orange)', fontWeight: 600, letterSpacing: '0.12em' }}>
            NAGPUR CENTRAL DISPATCH:
          </span>
          <span style={{ color: '#d1d5db' }}>{telemetry.activeInTransit} UNITS IN TRANSIT</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span style={{ color: '#9ca3af' }}>{telemetry.dispatchReady} STAGED READY</span>
        </div>

        {/* Center: Live Corridor Feed */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            color: '#9ca3af',
          }}
          className="telemetry-corridors-strip"
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#10b981' }}>
            <Activity size={12} /> Live Corridors Active
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <ShieldCheck size={12} color="var(--accent-orange)" /> 100% Geo-Tagged
          </span>
        </div>

        {/* Right: Real-Time Clock & Hotline */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: 'var(--accent-orange)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Clock size={12} /> {currentTime || 'LIVE IST'}
          </span>
          <a
            href="tel:+918668406011"
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              backgroundColor: 'rgba(255, 85, 0, 0.15)',
              padding: '0.2rem 0.6rem',
              borderRadius: '2px',
              border: '1px solid rgba(255, 85, 0, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-orange)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 85, 0, 0.15)')}
          >
            <Phone size={10} /> +91 8668406011
          </a>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        @media (max-width: 860px) {
          .telemetry-corridors-strip {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
