/**
 * SIBLINGS DAY THEME
 * 
 * 👫 TO CONTROL THIS THEME:
 * Edit app/components/theme-config.ts and set siblingsDay to true/false
 */

'use client';

import { THEME_CONFIG } from './theme-config';

export default function SiblingsDayTheme() {
  const isEnabled = THEME_CONFIG.siblingsDay;

  if (!isEnabled) return null;

  return (
    <>
      <div className="siblings-banner">
        <div className="banner-content">
          <span className="icon">👫</span>
          <span className="banner-text">Happy Siblings Day — Partners in crime, friends for life</span>
          <span className="icon">🎈</span>
        </div>
      </div>

      <div className="confetti-particles" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              left: `${Math.random() * 100}%`,
              backgroundColor: ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a8e6cf', '#ff8b94'][i % 5],
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        body {
          background: linear-gradient(135deg, #fff9e6 0%, #ffe8cc 50%, #ffd9b3 100%) !important;
          background-attachment: fixed;
        }

        .border-purple-500,
        .border-pink-400,
        .border-pink-300,
        .border-amber-300,
        .border-amber-500,
        .border-green-300,
        .border-emerald-300,
        .border-emerald-500,
        .border-blue-300,
        .border-blue-400 {
          background: rgba(255, 255, 255, 0.98) !important;
          backdrop-filter: blur(10px);
          border: 2px solid #ff6b6b !important;
          box-shadow: 0 4px 20px rgba(255, 107, 107, 0.2) !important;
        }

        .border-purple-500 *,
        .border-pink-400 *,
        .border-pink-300 *,
        .border-amber-300 *,
        .border-amber-500 *,
        .border-green-300 *,
        .border-emerald-300 *,
        .border-emerald-500 *,
        .border-blue-300 *,
        .border-blue-400 * {
          color: #d63031 !important;
        }
      `}</style>

      <style jsx>{`
        .siblings-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #ffe66d, #4ecdc4, #ff6b6b);
          background-size: 300% 100%;
          color: white;
          padding: 14px 20px;
          text-align: center;
          z-index: 10000;
          animation: playful-slide 8s linear infinite;
        }

        .banner-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          font-size: 15px;
          font-weight: 600;
        }

        .icon {
          font-size: 24px;
          animation: jump 1.5s ease-in-out infinite;
        }

        @keyframes playful-slide {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }

        @keyframes jump {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        :global(body) {
          padding-top: 50px !important;
        }

        .confetti-particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
          overflow: hidden;
        }

        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          animation: confetti-fall linear infinite;
          opacity: 0.8;
        }

        @keyframes confetti-fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
