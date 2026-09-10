import React, { useRef, useEffect, useState } from 'react';

export default function BackgroundVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly set DOM properties for iOS Safari, Chrome, and Android compatibility
    // (React's JSX props do not always sync DOM properties before autoplay evaluation)
    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('x5-playsinline', 'true');

    const attemptPlay = () => {
      if (!video) return;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay was restricted by mobile battery saver or browser policy.
            // Attach low-overhead touch/scroll listeners to trigger playback on first user gesture.
            const triggerOnInteraction = () => {
              if (video) {
                video.muted = true;
                video
                  .play()
                  .then(() => {
                    setIsPlaying(true);
                    cleanupListeners();
                  })
                  .catch(() => {});
              }
            };

            const cleanupListeners = () => {
              window.removeEventListener('touchstart', triggerOnInteraction);
              window.removeEventListener('touchend', triggerOnInteraction);
              window.removeEventListener('click', triggerOnInteraction);
              window.removeEventListener('scroll', triggerOnInteraction);
              window.removeEventListener('pointerdown', triggerOnInteraction);
            };

            window.addEventListener('touchstart', triggerOnInteraction, { passive: true, once: true });
            window.addEventListener('touchend', triggerOnInteraction, { passive: true, once: true });
            window.addEventListener('click', triggerOnInteraction, { passive: true, once: true });
            window.addEventListener('scroll', triggerOnInteraction, { passive: true, once: true });
            window.addEventListener('pointerdown', triggerOnInteraction, { passive: true, once: true });
          });
      }
    };

    attemptPlay();

    // Auto-resume if user returns to the tab
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && video && video.paused) {
        video.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

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
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
        willChange: 'transform',
      }}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        className="bg-video-element"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        x5-playsinline="true"
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.92,
          filter: 'contrast(1.08) brightness(1.02)',
          transition: 'opacity 0.4s ease, filter 0.4s ease',
          transform: 'translateZ(0)',
          WebkitTransform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_132544_b6ef0174-ed95-45ad-9a2f-ccb8acfbdce8.mp4"
          type="video/mp4"
        />
        <source src="/bg-animation.mp4" type="video/mp4" />
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
