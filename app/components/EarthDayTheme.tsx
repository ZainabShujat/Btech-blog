/**
 * EARTH DAY THEME
 * 
 * 🌍 TO CONTROL THIS THEME:
 * Edit app/components/theme-config.ts and set earthDay to true/false
 */

'use client';


export default function EarthDayTheme() {
  return (
    <>
      <div className="earth-banner">
        <div className="banner-content">
          <span className="icon">🌍</span>
          <span className="banner-text">Earth Day — Protect our planet, it's the only home we have</span>
          <span className="icon">🌱</span>
        </div>
      </div>

      <div className="leaves-particles" aria-hidden="true" style={{ opacity: 0.18 }}>
        {['🍃', '🌿', '🌾', '🌱', '🍀'].map((leaf, i) => (
          <div
            key={i}
            className="leaf"
            style={{
              left: `${(i * 15) % 100}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          >
            {leaf}
          </div>
        ))}
      </div>

      <style jsx global>{`
        body {
          background: linear-gradient(135deg, #a7c957 0%, #6a994e 50%, #386641 100%) !important;
          background-attachment: fixed;
        }

        body > * h1, body > * h2, body > * h3 {
          color: #f2e8cf !important;
        }

        body > * p:not(.border-purple-500 *, .border-pink-400 *, .border-pink-300 *, .border-amber-300 *, .border-blue-400 *),
        body > * span:not(.border-purple-500 *, .border-pink-400 *, .border-pink-300 *, .border-amber-300 *, .border-blue-400 *) {
          color: #f2e8cf !important;
        }

        .CategoryCard {
          background: rgba(255, 255, 255, 0.97) !important;
          backdrop-filter: blur(10px);
          border: 2px solid #6a994e !important;
          box-shadow: 0 4px 20px rgba(106, 153, 78, 0.3) !important;
        }

        .CategoryCard * {
          color: #386641 !important;
        }
      `}</style>

      <style jsx>{`
        .earth-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(90deg, #386641, #6a994e, #386641);
          background-size: 200% 100%;
          color: white;
          padding: 14px 20px;
          text-align: center;
          z-index: 10000;
          animation: earth-pulse 6s ease-in-out infinite;
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
          font-size: 24px;
          animation: grow 3s ease-in-out infinite;
        }

        @keyframes earth-pulse {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes grow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        :global(body) {
          padding-top: 50px !important;
        }

        .leaves-particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .leaf {
          position: absolute;
          font-size: 28px;
          animation: sway 8s ease-in-out infinite;
        }

        @keyframes sway {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: 0.7; }
          50% {
            transform: translateY(50vh) translateX(30px) rotate(180deg);
          }
          90% { opacity: 0.7; }
          100% {
            transform: translateY(110vh) translateX(-20px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
