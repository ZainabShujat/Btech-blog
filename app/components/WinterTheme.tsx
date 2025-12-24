/**
 * WINTER THEME COMPONENT
 * 
 * 🎄 TO CONTROL THIS THEME:
 * Edit app/components/theme-config.ts and set winter to true/false
 */

'use client';

import { THEME_CONFIG } from './theme-config';

export default function WinterTheme() {
  const isEnabled = THEME_CONFIG.winter;

  if (!isEnabled) return null;

  return (
    <>
      {/* Festive Banner */}
      <div className="winter-banner">
        <div className="banner-content">
          <span className="banner-emoji">❄️</span>
          <span className="banner-text">Happy Holidays! Wishing you a magical season ✨</span>
          <span className="banner-emoji">🎄</span>
        </div>
      </div>

      {/* Snowflakes */}
      <div className="snowfall" aria-hidden="true">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 10 + 10}px`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      <style jsx global>{`
        /* Winter theme color overrides */
        body {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
          background-attachment: fixed;
        }

        /* Add frost effect to cards */
        .border-purple-500,
        .border-pink-400,
        .border-pink-300,
        .border-amber-300 {
          background: rgba(255, 255, 255, 0.95) !important;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3) !important;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
        }
      `}</style>

      <style jsx>{`
        /* Festive Banner */
        .winter-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(90deg, #1e3a8a, #3b82f6, #1e3a8a);
          color: white;
          padding: 12px 20px;
          text-align: center;
          z-index: 9998;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          animation: shimmer 3s ease-in-out infinite;
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
          animation: bounce 2s ease-in-out infinite;
        }

        .banner-text {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        @keyframes shimmer {
          0%, 100% {
            background: linear-gradient(90deg, #1e3a8a, #3b82f6, #1e3a8a);
          }
          50% {
            background: linear-gradient(90deg, #3b82f6, #60a5fa, #3b82f6);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        /* Add padding to body to account for banner */
        :global(body) {
          padding-top: 50px !important;
        }

        /* Snowfall Effect */
        .snowfall {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
          overflow: hidden;
        }

        .snowflake {
          position: absolute;
          top: -20px;
          color: white;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
          animation: fall linear infinite;
          opacity: 0.8;
        }

        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
