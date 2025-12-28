/**
 * NEW YEAR'S DAY THEME
 * 
 * 🎊 TO CONTROL THIS THEME:
 * Edit app/components/theme-config.ts and set newYearsDay to true/false
 */

'use client';


export default function NewYearsDayTheme() {
  return (
    <>
      <div className="newyear-banner">
        <div className="banner-content">
          <span className="icon">🎊</span>
          <span className="banner-text">Happy New Year — New beginnings, endless possibilities!</span>
          <span className="icon">🎉</span>
        </div>
      </div>

      <div className="fireworks-particles" aria-hidden="true">
        {['✨', '🎆', '🎇', '⭐', '💫'].map((spark, i) => (
          <div
            key={i}
            className="firework"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {spark}
          </div>
        ))}
      </div>

      <style jsx global>{`
        body {
          background: radial-gradient(circle at center, #1a1a2e 0%, #0f0f1e 100%) !important;
          background-attachment: fixed;
        }

        body > * h1, body > * h2, body > * h3 {
          color: #ffd700 !important;
        }

        body > * p:not(.border-purple-500 *, .border-pink-400 *, .border-pink-300 *, .border-amber-300 *, .border-blue-400 *),
        body > * span:not(.border-purple-500 *, .border-pink-400 *, .border-pink-300 *, .border-amber-300 *, .border-blue-400 *) {
          color: #e8e8e8 !important;
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
          background: rgba(30, 30, 46, 0.95) !important;
          backdrop-filter: blur(10px);
          border: 2px solid #ffd700 !important;
          box-shadow: 0 0 30px rgba(255, 215, 0, 0.4), 0 4px 20px rgba(0, 0, 0, 0.3) !important;
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
          color: #ffd700 !important;
        }
      `}</style>

      <style jsx>{`
        .newyear-banner {
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
          animation: rainbow-party 5s linear infinite;
          border-bottom: 3px solid #ffd700;
        }

        .banner-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          font-size: 16px;
          font-weight: 700;
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }

        .icon {
          font-size: 26px;
          animation: party-pop 1s ease-in-out infinite;
        }

        @keyframes rainbow-party {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }

        @keyframes party-pop {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.2) rotate(-10deg); }
          75% { transform: scale(1.2) rotate(10deg); }
        }

        :global(body) {
          padding-top: 50px !important;
        }

        .fireworks-particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
          overflow: hidden;
        }

        .firework {
          position: absolute;
          font-size: 28px;
          animation: explode 3s ease-out infinite;
        }

        @keyframes explode {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 1;
          }
          100% {
            transform: scale(0.5) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
