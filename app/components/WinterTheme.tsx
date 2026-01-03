/**
 * WINTER THEME COMPONENT
 * 
 * 🎄 TO CONTROL THIS THEME:
 * Edit app/components/theme-config.ts and set winter to true/false
 */

'use client';


export default function WinterTheme() {
  return (
    <>
      {/* Festive Banner (fixed at top) */}
      <div className="winter-banner">
        <div className="banner-content flex items-center justify-center gap-2 py-2 px-4 bg-blue-100 dark:bg-slate-800 text-blue-900 dark:text-blue-100 font-semibold text-sm md:text-base rounded-b-xl shadow">
          <span className="banner-emoji">❄️</span>
          <span className="banner-text">Happy Holidays! Wishing you a magical season & a Happy New Year✨</span>
          <span className="banner-emoji">🎄</span>
        </div>
      </div>

      {/* Snowflakes (fixed, full height, animated) */}
      <div className="snowfall" aria-hidden="true" suppressHydrationWarning>
        {Array.from({ length: 24 }).map((_, i) => {
          // Use a seeded random for consistent positions on re-render
          const left = Math.floor((i * 37) % 100); // Spread snowflakes horizontally
          const duration = 2.2 + (i % 3) + Math.random() * 1.2; // 2.2-5s (faster)
          const delay = (i * 0.7) % 8; // Staggered delays
          const size = 12 + (i % 8) + Math.random() * 12; // 16-28px (normal)
          return (
            <div
              key={i}
              className="snowflake"
              style={{
                left: `${left}%`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                fontSize: `${size}px`,
              }}
              suppressHydrationWarning
            >
              ❄
            </div>
          );
        })}
      </div>

      <style jsx global>{`
        /* Winter theme color overrides */
        body {
          background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #7dd3fc 100%) !important;
          background-attachment: fixed;
          padding-top: 50px !important;
        }
        @media (prefers-color-scheme: dark) {
          body {
            background: linear-gradient(135deg, #0f172a 0%, #334155 50%, #1e293b 100%) !important;
            color: #f1f5f9 !important;
          }
        }

        /* Add frost effect to all category cards */
        .CategoryCard {
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
        @media (prefers-color-scheme: dark) {
          .CategoryCard {
            background: linear-gradient(135deg, 
              rgba(30, 41, 59, 0.95), 
              rgba(51, 65, 85, 0.9),
              rgba(15, 23, 42, 0.95)) !important;
            border: 2px solid rgba(51, 65, 85, 0.7) !important;
            box-shadow: 
              0 8px 32px rgba(30, 64, 175, 0.15),
              0 4px 16px rgba(51, 65, 85, 0.2),
              inset 0 2px 4px rgba(30, 41, 59, 1),
              inset -2px -2px 8px rgba(51, 65, 85, 0.4) !important;
          }
        }

        .CategoryCard::before {
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

        .CategoryCard::after {
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
        .border-blue-400:hover,
        .border-indigo-500:hover {
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
        @media (prefers-color-scheme: dark) {
          .border-purple-500:hover,
          .border-pink-400:hover,
          .border-pink-300:hover,
          .border-amber-300:hover,
          .border-amber-500:hover,
          .border-green-300:hover,
          .border-emerald-300:hover,
          .border-emerald-500:hover,
          .border-blue-300:hover,
          .border-blue-400:hover,
          .border-indigo-500:hover {
            background: linear-gradient(135deg, 
              rgba(30, 41, 59, 0.98), 
              rgba(51, 65, 85, 0.93),
              rgba(30, 64, 175, 0.90)) !important;
            box-shadow: 
              0 12px 40px rgba(30, 64, 175, 0.25),
              0 6px 20px rgba(51, 65, 85, 0.3),
              inset 0 2px 6px rgba(30, 41, 59, 1),
              inset -2px -2px 10px rgba(51, 65, 85, 0.5) !important;
          }
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
          position: static;
          width: 100%;
          background: linear-gradient(90deg, #0ea5e9, #38bdf8, #0ea5e9);
          color: white;
          padding: 12px 20px;
          text-align: center;
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

        /* Remove global body padding, use margin on main content instead */

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
          font-size: 14px;
          text-shadow:
            0 0 8px #38bdf8,
            0 0 16px #0ea5e9,
            0 0 24px #0ea5e9,
            0 0 2px #fff;
          animation: fall linear infinite;
          opacity: 0.68;
          filter: drop-shadow(0 0 8px #38bdf8) drop-shadow(0 0 12px #0ea5e9);
          transition: opacity 0.2s, font-size 0.2s;
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
