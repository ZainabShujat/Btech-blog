/**
 * DOCTORS DAY / HEALTHCARE THEME
 * 
 * 🩺 TO CONTROL THIS THEME:
 * Edit app/components/theme-config.ts and set doctorsDay to true/false
 */

'use client';


export default function DoctorsDayTheme() {
  return (
    <>
      {/* Banner */}
      <div className="doctors-banner">
        <div className="banner-content">
          <span className="icon">🩺</span>
          <span className="banner-text">Doctors Day — Honoring those who heal and care</span>
          <span className="icon">❤️</span>
        </div>
      </div>

      {/* Floating Medical Symbols */}
      <div className="medical-particles" aria-hidden="true">
        {['❤️', '💊', '🩺', '⚕️', '+'].map((symbol, i) => (
          <div
            key={i}
            className="medical-symbol"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${5 + Math.random() * 3}s`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <style jsx global>{`
        body {
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #90caf9 100%) !important;
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
          border: 2px solid #1976d2 !important;
          box-shadow: 0 4px 20px rgba(25, 118, 210, 0.2), 0 0 30px rgba(239, 83, 80, 0.1) !important;
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
          color: #1565c0 !important;
        }
      `}</style>

      <style jsx>{`
        .doctors-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(90deg, #1976d2, #42a5f5, #1976d2);
          background-size: 200% 100%;
          color: white;
          padding: 14px 20px;
          text-align: center;
          z-index: 10000;
          animation: wave 4s ease-in-out infinite;
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
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        @keyframes wave {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          15% { transform: scale(1.2); }
          30% { transform: scale(1); }
        }

        :global(body) {
          padding-top: 50px !important;
        }

        .medical-particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .medical-symbol {
          position: absolute;
          font-size: 24px;
          opacity: 0.4;
          animation: float-medical linear infinite;
        }

        @keyframes float-medical {
          0% {
            transform: translateY(100vh);
            opacity: 0;
          }
          10%, 90% { opacity: 0.4; }
          100% {
            transform: translateY(-10vh);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
