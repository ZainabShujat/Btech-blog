/**
 * HOLI THEME COMPONENT
 * 
 * 🎨 TO CONTROL THIS THEME:
 * Edit app/components/theme-config.ts and set holi to true/false
 */

'use client';

import { THEME_CONFIG } from './theme-config';

export default function HoliTheme() {
  const isEnabled = THEME_CONFIG.holi;

  if (!isEnabled) return null;

  const colors = ['#ff006e', '#fb5607', '#ffbe0b', '#8338ec', '#3a86ff', '#06ffa5'];

  return (
    <>
      {/* Festive Banner */}
      <div className="holi-banner">
        <div className="banner-content">
          <span className="banner-emoji">🎨</span>
          <span className="banner-text">Happy Holi! Let the colors of joy fill your life 🌈</span>
          <span className="banner-emoji">💜</span>
        </div>
      </div>

      {/* Color Splashes */}
      <div className="color-splashes" aria-hidden="true">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="splash"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: colors[Math.floor(Math.random() * colors.length)],
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        /* Holi theme color overrides */
        body {
          background: linear-gradient(135deg, #ff006e 0%, #fb5607 25%, #ffbe0b 50%, #8338ec 75%, #3a86ff 100%) !important;
          background-attachment: fixed;
          background-size: 400% 400%;
          animation: gradient-shift 8s ease infinite;
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Add vibrant glow to cards */
        .border-purple-500,
        .border-pink-400,
        .border-pink-300,
        .border-amber-300 {
          background: rgba(255, 255, 255, 0.95) !important;
          backdrop-filter: blur(10px);
          border: 3px solid transparent !important;
          background-clip: padding-box;
          box-shadow: 0 0 30px rgba(255, 0, 110, 0.4), 
                      0 0 20px rgba(251, 86, 7, 0.3),
                      0 8px 32px 0 rgba(131, 56, 236, 0.3) !important;
        }
      `}</style>

      <style jsx>{`
        /* Festive Banner */
        .holi-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(90deg, #ff006e, #fb5607, #ffbe0b, #8338ec, #3a86ff, #06ffa5);
          background-size: 300% 100%;
          color: white;
          padding: 12px 20px;
          text-align: center;
          z-index: 9998;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          animation: rainbow-flow 6s linear infinite;
        }

        .banner-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          font-weight: 600;
        }

        .banner-emoji {
          font-size: 24px;
          animation: spin-bounce 2s ease-in-out infinite;
        }

        .banner-text {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        @keyframes rainbow-flow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 300% 50%;
          }
        }

        @keyframes spin-bounce {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(-10deg) scale(1.1);
          }
          75% {
            transform: rotate(10deg) scale(1.1);
          }
        }

        /* Add padding to body to account for banner */
        :global(body) {
          padding-top: 50px !important;
        }

        /* Color Splashes */
        .color-splashes {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
          overflow: hidden;
        }

        .splash {
          position: absolute;
          border-radius: 50%;
          opacity: 0.15;
          animation: pulse-splash 3s ease-in-out infinite;
          filter: blur(3px);
        }

        @keyframes pulse-splash {
          0%, 100% {
            transform: scale(1);
            opacity: 0.15;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.25;
          }
        }
      `}</style>
    </>
  );
}
