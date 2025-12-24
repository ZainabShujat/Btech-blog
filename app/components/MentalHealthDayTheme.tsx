/**
 * MENTAL HEALTH DAY THEME
 * 
 * 🧠 TO CONTROL THIS THEME:
 * Edit app/components/theme-config.ts and set mentalHealthDay to true/false
 */

'use client';

import { THEME_CONFIG } from './theme-config';

export default function MentalHealthDayTheme() {
  const isEnabled = THEME_CONFIG.mentalHealthDay;

  if (!isEnabled) return null;

  return (
    <>
      {/* Banner */}
      <div className="mental-health-banner">
        <div className="banner-content">
          <span className="icon">🧠</span>
          <span className="banner-text">Mental Health Matters — You are not alone. Your feelings are valid.</span>
          <span className="icon">💚</span>
        </div>
      </div>

      {/* Calming Gradient Waves */}
      <div className="waves-overlay" aria-hidden="true">
        <svg className="wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="rgba(152, 251, 152, 0.1)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <style jsx global>{`
        body {
          background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 50%, #a5d6a7 100%) !important;
          background-attachment: fixed;
        }

        body > * h1, body > * h2, body > * h3 {
          color: #2e7d32 !important;
        }

        body > * p:not(.border-purple-500 *, .border-pink-400 *, .border-pink-300 *, .border-amber-300 *, .border-blue-400 *),
        body > * span:not(.border-purple-500 *, .border-pink-400 *, .border-pink-300 *, .border-amber-300 *, .border-blue-400 *) {
          color: #388e3c !important;
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
          background: rgba(255, 255, 255, 0.95) !important;
          backdrop-filter: blur(10px);
          border: 2px solid #81c784 !important;
          box-shadow: 0 4px 20px rgba(129, 199, 132, 0.3) !important;
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
          color: #2e7d32 !important;
        }
      `}</style>

      <style jsx>{`
        .mental-health-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(90deg, #66bb6a, #81c784, #66bb6a);
          background-size: 200% 100%;
          color: white;
          padding: 14px 20px;
          text-align: center;
          z-index: 10000;
          animation: calm-wave 6s ease-in-out infinite;
        }

        .banner-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          font-size: 15px;
          font-weight: 400;
        }

        .icon {
          font-size: 22px;
          animation: gentle-pulse 3s ease-in-out infinite;
        }

        .banner-text {
          font-family: Georgia, serif;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        @keyframes calm-wave {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes gentle-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }

        :global(body) {
          padding-top: 50px !important;
        }

        .waves-overlay {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 200px;
          pointer-events: none;
          z-index: 1;
        }

        .wave {
          width: 100%;
          height: 100%;
          animation: wave-motion 8s ease-in-out infinite;
        }

        @keyframes wave-motion {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-25%); }
        }
      `}</style>
    </>
  );
}
