/**
 * INTERNATIONAL WOMEN'S DAY THEME
 * 
 * 💜 TO CONTROL THIS THEME:
 * Edit app/components/theme-config.ts and set womensDay to true/false
 */

'use client';

import { THEME_CONFIG } from './theme-config';

export default function WomensDayTheme() {
  const isEnabled = THEME_CONFIG.womensDay;

  if (!isEnabled) return null;

  return (
    <>
      {/* Banner */}
      <div className="womens-banner">
        <div className="banner-content">
          <span className="icon">💜</span>
          <span className="banner-text">International Women's Day — Celebrate strength, resilience, and empowerment</span>
          <span className="icon">✨</span>
        </div>
      </div>

      {/* Floating Empowerment Symbols */}
      <div className="empowerment-particles" aria-hidden="true">
        {['💜', '✨', '🌸', '👑', '💪'].map((symbol, i) => (
          <div
            key={i}
            className="empower-symbol"
            style={{
              left: `${(i * 20) % 100}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <style jsx global>{`
        body {
          background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 50%, #ce93d8 100%) !important;
          background-attachment: fixed;
        }

        body > * h1, body > * h2, body > * h3 {
          color: #6a1b9a !important;
        }

        body > * p:not(.border-purple-500 *, .border-pink-400 *, .border-pink-300 *, .border-amber-300 *),
        body > * span:not(.border-purple-500 *, .border-pink-400 *, .border-pink-300 *, .border-amber-300 *) {
          color: #7b1fa2 !important;
        }

        .border-purple-500,
        .border-pink-400,
        .border-pink-300,
        .border-amber-300,
        .border-amber-500,
        .border-green-300,
        .border-emerald-300,
        .border-emerald-500,
        .border-blue-300 {
          background: rgba(255, 255, 255, 0.98) !important;
          backdrop-filter: blur(10px);
          border: 2px solid #ab47bc !important;
          box-shadow: 0 4px 20px rgba(171, 71, 188, 0.3), 0 0 30px rgba(186, 104, 200, 0.2) !important;
        }

        .border-purple-500 *,
        .border-pink-400 *,
        .border-pink-300 *,
        .border-amber-300 *,
        .border-amber-500 *,
        .border-green-300 *,
        .border-emerald-300 *,
        .border-emerald-500 *,
        .border-blue-300 * {
          color: #6a1b9a !important;
        }
      `}</style>

      <style jsx>{`
        .womens-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(90deg, #8e24aa, #ab47bc, #ba68c8, #ab47bc, #8e24aa);
          background-size: 300% 100%;
          color: white;
          padding: 14px 20px;
          text-align: center;
          z-index: 10000;
          animation: shimmer-purple 6s linear infinite;
        }

        .banner-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          font-size: 15px;
          font-weight: 500;
        }

        .icon {
          font-size: 22px;
          animation: sparkle 2s ease-in-out infinite;
        }

        .banner-text {
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        @keyframes shimmer-purple {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }

        @keyframes sparkle {
          0%, 100% { 
            transform: scale(1) rotate(0deg);
            filter: brightness(1);
          }
          50% { 
            transform: scale(1.15) rotate(10deg);
            filter: brightness(1.3);
          }
        }

        :global(body) {
          padding-top: 50px !important;
        }

        .empowerment-particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .empower-symbol {
          position: absolute;
          font-size: 30px;
          opacity: 0;
          animation: empower-rise 10s ease-in-out infinite;
        }

        @keyframes empower-rise {
          0% {
            transform: translateY(100vh) scale(0.5);
            opacity: 0;
          }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% {
            transform: translateY(-10vh) scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
