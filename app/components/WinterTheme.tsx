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
          <span className="banner-text">Happy Holidays! Wishing you a magical season & a Happy New Year✨</span>
          <span className="banner-emoji">🎄</span>
        </div>
      </div>

      {/* Snowflakes */}
      <div className="snowfall" aria-hidden="true" suppressHydrationWarning>
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
            suppressHydrationWarning
          >
            ❄
          </div>
        ))}
      </div>

      <style jsx global>{`
        /* Winter theme color overrides */
        body {
          background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #7dd3fc 100%) !important;
          background-attachment: fixed;
          padding-top: 50px !important;
        }

        /* Add frost effect to cards */
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
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.9), 
            rgba(240, 249, 255, 0.85),
            rgba(255, 255, 255, 0.9)) !important;
          backdrop-filter: blur(16px);
          border: 2px solid rgba(186, 230, 253, 0.7) !important;
          box-shadow: 
            0 8px 32px rgba(14, 165, 233, 0.15),
            0 4px 16px rgba(125, 211, 252, 0.2),
            inset 0 2px 4px rgba(255, 255, 255, 1),
            inset -2px -2px 8px rgba(186, 230, 253, 0.4) !important;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .border-purple-500::before,
        .border-pink-400::before,
        .border-pink-300::before,
        .border-amber-300::before,
        .border-amber-500::before,
        .border-green-300::before,
        .border-emerald-300::before,
        .border-emerald-500::before,
        .border-blue-300::before,
        .border-blue-400::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(186, 230, 253, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(125, 211, 252, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(224, 242, 254, 0.15) 0%, transparent 60%);
          pointer-events: none;
          opacity: 0.6;
        }

        .border-purple-500::after,
        .border-pink-400::after,
        .border-pink-300::after,
        .border-amber-300::after,
        .border-amber-500::after,
        .border-green-300::after,
        .border-emerald-300::after,
        .border-emerald-500::after,
        .border-blue-300::after,
        .border-blue-400::after {
          content: '❄';
          position: absolute;
          top: 8px;
          right: 8px;
          font-size: 20px;
          opacity: 0.2;
          color: #0ea5e9;
          pointer-events: none;
          animation: crystallize 4s ease-in-out infinite;
        }

        .border-purple-500:hover,
        .border-pink-400:hover,
        .border-pink-300:hover,
        .border-amber-300:hover,
        .border-amber-500:hover,
        .border-green-300:hover,
        .border-emerald-300:hover,
        .border-emerald-500:hover,
        .border-blue-300:hover,
        .border-blue-400:hover {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.95), 
            rgba(224, 242, 254, 0.9),
            rgba(255, 255, 255, 0.95)) !important;
          box-shadow: 
            0 12px 40px rgba(14, 165, 233, 0.25),
            0 6px 20px rgba(125, 211, 252, 0.3),
            inset 0 2px 6px rgba(255, 255, 255, 1),
            inset -2px -2px 10px rgba(186, 230, 253, 0.5) !important;
          transform: translateY(-2px);
        }

        @keyframes crystallize {
          0%, 100% {
            opacity: 0.2;
            transform: rotate(0deg);
          }
          50% {
            opacity: 0.4;
            transform: rotate(15deg);
          }
        }
      `}</style>

      <style jsx>{`
        /* Festive Banner */
        .winter-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          background: linear-gradient(90deg, #0ea5e9, #38bdf8, #0ea5e9);
          color: white;
          padding: 12px 20px;
          text-align: center;
          z-index: 10000;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
          animation: shimmer 3s ease-in-out infinite;
        }

        .banner-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          font-weight: 600;
          margin: 0 auto;
          max-width: 1200px;
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
          color: #f0f9ff;
          font-size: 18px;
          text-shadow: 
            0 0 10px rgba(14, 165, 233, 0.9),
            0 0 20px rgba(56, 189, 248, 0.7),
            0 0 5px rgba(255, 255, 255, 1),
            2px 2px 4px rgba(14, 116, 144, 0.6);
          animation: fall linear infinite;
          opacity: 0.95;
          filter: drop-shadow(0 0 8px rgba(14, 165, 233, 0.6));
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
