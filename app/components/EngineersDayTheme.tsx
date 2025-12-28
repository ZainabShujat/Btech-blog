/**
 * ENGINEERS DAY THEME
 * 
 * 💻 TO CONTROL THIS THEME:
 * Edit app/components/theme-config.ts and set engineersDay to true/false
 */

'use client';


export default function EngineersDayTheme() {
  return (
    <>
      {/* Banner */}
      <div className="engineers-banner">
        <div className="banner-content">
          <span className="icon">⚙️</span>
          <span className="banner-text">Happy Engineers Day — Building the future, one line at a time</span>
          <span className="icon">💻</span>
        </div>
      </div>

      {/* Floating Code Symbols */}
      <div className="code-particles" aria-hidden="true">
        {['{', '}', '<', '>', '/', '(', ')', ';', '[', ']', '=', '+'].map((symbol, i) => (
          <div
            key={i}
            className="code-symbol"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 10 + 20}px`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <style jsx global>{`
        body {
          background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%) !important;
          background-attachment: fixed;
        }

        body > * p:not(.border-purple-500 *, .border-pink-400 *, .border-pink-300 *, .border-amber-300 *, .border-blue-400 *),
        body > * span:not(.border-purple-500 *, .border-pink-400 *, .border-pink-300 *, .border-amber-300 *, .border-blue-400 *) {
          color: #a0d2eb !important;
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
          border: 1px solid #00ff41 !important;
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.3), 0 4px 20px rgba(0, 0, 0, 0.3) !important;
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
          color: #a0d2eb !important;
        }
      `}</style>

      <style jsx>{`
        .engineers-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(90deg, #1a1a2e, #16213e, #1a1a2e);
          border-bottom: 2px solid #00ff41;
          color: #00ff41;
          padding: 14px 20px;
          text-align: center;
          z-index: 10000;
          font-family: 'Courier New', monospace;
        }

        .banner-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          font-size: 14px;
          letter-spacing: 1px;
        }

        .icon {
          font-size: 20px;
          animation: pulse 2s ease-in-out infinite;
        }

        .banner-text {
          color: #a0d2eb;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        :global(body) {
          padding-top: 50px !important;
        }

        .code-particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .code-symbol {
          position: absolute;
          color: rgba(0, 255, 65, 0.3);
          font-family: 'Courier New', monospace;
          animation: float-code 15s linear infinite;
          font-weight: bold;
        }

        @keyframes float-code {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% {
            transform: translateY(-10vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
