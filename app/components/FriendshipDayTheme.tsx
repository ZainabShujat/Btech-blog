/**
 * FRIENDSHIP DAY THEME
 * 
 * 🤝 TO CONTROL THIS THEME:
 * Edit app/components/theme-config.ts and set friendshipDay to true/false
 */

'use client';


export default function FriendshipDayTheme() {
  return (
    <>
      <div className="friendship-banner">
        <div className="banner-content">
          <span className="icon">🤝</span>
          <span className="banner-text">Happy Friendship Day — Celebrating the bonds that make life beautiful</span>
          <span className="icon">✨</span>
        </div>
      </div>

      <div className="hearts-particles" aria-hidden="true">
        {['💛', '💙', '💚', '🧡', '💜'].map((heart, i) => (
          <div
            key={i}
            className="heart"
            style={{
              left: `${(i * 20) % 100}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          >
            {heart}
          </div>
        ))}
      </div>

      <style jsx global>{`
        body {
          background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%) !important;
          background-attachment: fixed;
        }

        body > * h1, body > * h2, body > * h3 {
          color: #fff !important;
        }

        body > * p:not(.border-purple-500 *, .border-pink-400 *, .border-pink-300 *, .border-amber-300 *, .border-blue-400 *),
        body > * span:not(.border-purple-500 *, .border-pink-400 *, .border-pink-300 *, .border-amber-300 *, .border-blue-400 *) {
          color: #f8f9fa !important;
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
          border: 2px solid #ffd89b !important;
          box-shadow: 0 4px 20px rgba(255, 216, 155, 0.4) !important;
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
          color: #19547b !important;
        }
      `}</style>

      <style jsx>{`
        .friendship-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(90deg, #19547b, #ffd89b, #19547b);
          background-size: 200% 100%;
          color: white;
          padding: 14px 20px;
          text-align: center;
          z-index: 10000;
          animation: joy-wave 7s ease-in-out infinite;
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
          animation: celebrate 2.5s ease-in-out infinite;
        }

        @keyframes joy-wave {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes celebrate {
          0%, 100% { transform: rotate(-5deg) scale(1); }
          50% { transform: rotate(5deg) scale(1.1); }
        }

        :global(body) {
          padding-top: 50px !important;
        }

        .hearts-particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .heart {
          position: absolute;
          font-size: 30px;
          animation: float-up 10s ease-in-out infinite;
        }

        @keyframes float-up {
          0% {
            transform: translateY(110vh) scale(0.8);
            opacity: 0;
          }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% {
            transform: translateY(-10vh) scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
