/**
 * DIWALI THEME COMPONENT
 * 
 * 🪔 TO CONTROL THIS THEME:
 * Edit app/components/theme-config.ts and set diwali to true/false
 */

'use client';

import { THEME_CONFIG } from './theme-config';

export default function DiwaliTheme() {
  const isEnabled = THEME_CONFIG.diwali;

  if (!isEnabled) return null;

  return (
    <>
      {/* Festive Banner */}
      <div className="diwali-banner">
        <div className="banner-content">
          <span className="banner-emoji">🪔</span>
          <span className="banner-text">Happy Diwali! Wishing you light, prosperity & joy ✨</span>
          <span className="banner-emoji">🎆</span>
        </div>
      </div>

      {/* Floating Diyas */}
      <div className="diyas-container" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="diya"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              top: `${Math.random() * 100}%`,
            }}
          >
            🪔
          </div>
        ))}
      </div>

      <style jsx global>{`
        /* Diwali theme color overrides */
        body {
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffd700 100%) !important;
          background-attachment: fixed;
        }

        /* Add glow effect to cards */
        .border-purple-500,
        .border-pink-400,
        .border-pink-300,
        .border-amber-300 {
          background: rgba(255, 255, 255, 0.95) !important;
          backdrop-filter: blur(10px);
          border: 2px solid #ffd700 !important;
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.5), 0 8px 32px 0 rgba(255, 107, 53, 0.3) !important;
        }
      `}</style>

      <style jsx>{`
        /* Festive Banner */
        .diwali-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(90deg, #d4145a, #ff6b35, #f7931e, #ffd700, #f7931e, #ff6b35, #d4145a);
          background-size: 200% 100%;
          color: white;
          padding: 12px 20px;
          text-align: center;
          z-index: 9998;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          animation: shimmer 4s ease-in-out infinite;
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
          animation: glow 2s ease-in-out infinite;
        }

        .banner-text {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        @keyframes shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes glow {
          0%, 100% {
            filter: brightness(1);
            transform: scale(1);
          }
          50% {
            filter: brightness(1.5);
            transform: scale(1.1);
          }
        }

        /* Add padding to body to account for banner */
        :global(body) {
          padding-top: 50px !important;
        }

        /* Floating Diyas */
        .diyas-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
          overflow: hidden;
        }

        .diya {
          position: absolute;
          font-size: 24px;
          animation: float 4s ease-in-out infinite;
          filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.8));
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
      `}</style>
    </>
  );
}
