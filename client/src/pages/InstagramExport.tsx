import { useRef, useState, useCallback, useEffect } from 'react';
import heroVideo from '@assets/video_final_1768658189717.mp4';

export default function InstagramExport() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Handle video ready state
  const handleVideoLoaded = useCallback(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 500);
  }, []);

  // Fallback: enable after 3 seconds even if video doesn't load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Toggle fullscreen
  const toggleFullScreen = useCallback(() => {
    setIsFullScreen(!isFullScreen);
  }, [isFullScreen]);

  // Exit fullscreen on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullScreen) {
        setIsFullScreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullScreen]);

  // Fullscreen view - render at exact 1080x1350
  if (isFullScreen) {
    return (
      <div 
        className="fixed inset-0 bg-black flex items-center justify-center z-50"
        onClick={() => setIsFullScreen(false)}
      >
        <div 
          className="relative overflow-hidden"
          style={{ 
            width: 1080, 
            height: 1350,
            maxWidth: '100vw',
            maxHeight: '100vh',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Video Background */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* Dark Gradient Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 35%, rgba(0,0,0,0.25) 65%, rgba(0,0,0,0.75) 100%)'
            }}
          />

          {/* Content */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-between">
            {/* OARC Logo */}
            <div className="pt-16 flex items-center gap-3">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="24" stroke="#BFFF00" strokeWidth="3" />
                <ellipse cx="28" cy="28" rx="9" ry="20" stroke="#BFFF00" strokeWidth="2" />
              </svg>
              <span 
                className="text-5xl tracking-[0.3em]"
                style={{ fontFamily: "'Heat Robox', 'Orbitron', sans-serif", fontWeight: 500 }}
              >
                <span style={{ color: '#BFFF00' }}>O</span>
                <span className="text-white">ARC</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="text-center px-12 -mt-20">
              <h1 
                className="text-white uppercase leading-tight"
                style={{ 
                  fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
                  fontSize: 68,
                  fontWeight: 800,
                  letterSpacing: '0.1em'
                }}
              >
                WE ARE THE MODERN AI
              </h1>
              <h2 
                className="text-white uppercase mt-6"
                style={{ 
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: 88,
                  fontWeight: 400,
                  fontStyle: 'italic',
                  letterSpacing: '0.12em'
                }}
              >
                CREATIVE AGENCY
              </h2>
            </div>

            {/* Ticker Bar */}
            <div 
              className="w-full overflow-hidden"
              style={{ backgroundColor: '#BFFF00', padding: '22px 0' }}
            >
              <div 
                className="flex whitespace-nowrap animate-ticker-fullscreen"
                style={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#000000',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase'
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <span key={i} className="mr-16">
                    WE PUT SOCIAL · AI · STRATEGY AT THE CENTER OF EVERYTHING WE DO.
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Exit hint */}
          <div className="absolute top-4 right-4 z-20">
            <button 
              onClick={() => setIsFullScreen(false)}
              className="px-4 py-2 bg-black/50 text-white text-sm rounded hover:bg-black/70"
            >
              Press ESC or click here to exit
            </button>
          </div>
        </div>

        <style>{`
          @keyframes ticker-fullscreen {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-ticker-fullscreen {
            animation: ticker-fullscreen 20s linear infinite;
          }
        `}</style>
      </div>
    );
  }

  // Normal preview view
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center py-8 px-4">
      {/* Controls */}
      <div className="mb-6 flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-white">Instagram Export (1080×1350)</h1>
        
        <div className="text-white/60 text-sm max-w-lg text-center space-y-2">
          <p>Click "Open Full Screen" to view at actual size, then screen record using:</p>
          <ul className="text-left list-disc list-inside">
            <li><strong>Mac:</strong> QuickTime Player → New Screen Recording</li>
            <li><strong>Windows:</strong> OBS Studio (free) or Xbox Game Bar (Win+G)</li>
            <li><strong>Chrome:</strong> Use DevTools (F12) → Device mode → Set 1080×1350</li>
          </ul>
        </div>
        
        {!isReady && (
          <p className="text-yellow-400 text-sm">Loading video...</p>
        )}
        
        <button
          onClick={toggleFullScreen}
          disabled={!isReady}
          className={`px-8 py-4 font-bold rounded-lg transition-colors text-lg ${
            isReady 
              ? 'bg-[#BFFF00] text-black hover:bg-[#BFFF00]/90' 
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
          data-testid="button-fullscreen"
        >
          Open Full Screen Preview
        </button>
      </div>

      {/* Preview Frame - Scaled down for display */}
      <div 
        className="relative border-4 border-white/20 rounded-lg overflow-hidden shadow-2xl cursor-pointer hover:border-[#BFFF00]/50 transition-colors"
        style={{ 
          width: 360, 
          height: 450,
        }}
        onClick={toggleFullScreen}
      >
        {/* Actual 1080x1350 content scaled down */}
        <div 
          className="origin-top-left"
          style={{ 
            width: 1080, 
            height: 1350,
            transform: 'scale(0.333)',
            transformOrigin: 'top left'
          }}
        >
          {/* Video Background */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={handleVideoLoaded}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* Dark Gradient Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 35%, rgba(0,0,0,0.25) 65%, rgba(0,0,0,0.75) 100%)'
            }}
          />

          {/* Content */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-between">
            {/* OARC Logo */}
            <div className="pt-16 flex items-center gap-3">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="24" stroke="#BFFF00" strokeWidth="3" />
                <ellipse cx="28" cy="28" rx="9" ry="20" stroke="#BFFF00" strokeWidth="2" />
              </svg>
              <span 
                className="text-5xl tracking-[0.3em]"
                style={{ fontFamily: "'Heat Robox', 'Orbitron', sans-serif", fontWeight: 500 }}
              >
                <span style={{ color: '#BFFF00' }}>O</span>
                <span className="text-white">ARC</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="text-center px-12 -mt-20">
              <h1 
                className="text-white uppercase leading-tight"
                style={{ 
                  fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
                  fontSize: 68,
                  fontWeight: 800,
                  letterSpacing: '0.1em'
                }}
              >
                WE ARE THE MODERN AI
              </h1>
              <h2 
                className="text-white uppercase mt-6"
                style={{ 
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: 88,
                  fontWeight: 400,
                  fontStyle: 'italic',
                  letterSpacing: '0.12em'
                }}
              >
                CREATIVE AGENCY
              </h2>
            </div>

            {/* Ticker Bar */}
            <div 
              className="w-full overflow-hidden"
              style={{ backgroundColor: '#BFFF00', padding: '22px 0' }}
            >
              <div 
                className="flex whitespace-nowrap animate-ticker"
                style={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#000000',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase'
                }}
              >
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="mr-16">
                    WE PUT SOCIAL · AI · STRATEGY AT THE CENTER OF EVERYTHING WE DO.
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Click to enlarge overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/30 transition-colors">
          <span className="text-white/0 hover:text-white/90 transition-colors font-bold text-lg">
            Click to Preview Full Size
          </span>
        </div>
      </div>

      <p className="mt-4 text-white/40 text-sm">
        Preview shown at 33% scale. Click to view at full 1080×1350 pixels.
      </p>

      {/* Ticker animation CSS */}
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-20%); }
        }
        .animate-ticker {
          animation: ticker 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
