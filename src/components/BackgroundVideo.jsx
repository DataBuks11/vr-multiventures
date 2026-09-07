import React from 'react';

export default function BackgroundVideo() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      <video
        className="bg-video-element"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.92,
          filter: 'contrast(1.08) brightness(1.02)',
          transition: 'opacity 0.4s ease, filter 0.4s ease',
        }}
      >
        <source src="/bg-animation.mp4" type="video/mp4" />
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_132544_b6ef0174-ed95-45ad-9a2f-ccb8acfbdce8.mp4"
          type="video/mp4"
        />
      </video>

      {/* Ultra-subtle tint ensuring text contrast while keeping background animation crystal clear */}
      <div
        className="bg-video-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.28) 100%)',
          pointerEvents: 'none',
          transition: 'background 0.4s ease',
        }}
      />
    </div>
  );
}
