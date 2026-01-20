import { useRef, useState, useCallback, useEffect } from 'react';
import heroVideo from '@assets/video_final_1768707020686.mp4';
import logoImage from '@assets/download_(2)_1768663468684.png';

export default function InstagramExport() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Load logo image and fonts
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      logoRef.current = img;
    };
    img.src = logoImage;

    // Load custom fonts using FontFace API for canvas
    const loadFonts = async () => {
      try {
        const roctaria = new FontFace('Roctaria', 'url(/fonts/roctaria.woff2)');
        const heatRobox = new FontFace('Heat Robox', 'url(/fonts/heat-robox.ttf)');
        const soreille = new FontFace('Soreille', 'url(/fonts/soreille.ttf)');
        
        const fonts = await Promise.all([roctaria.load(), heatRobox.load(), soreille.load()]);
        fonts.forEach(font => document.fonts.add(font));
        setFontsLoaded(true);
      } catch (err) {
        console.error('Font loading error:', err);
        setFontsLoaded(true); // Continue anyway with fallback fonts
      }
    };
    loadFonts();
  }, []);

  // Draw frame to canvas - 1080x1080 square format for Instagram
  const drawFrame = useCallback((ctx: CanvasRenderingContext2D, video: HTMLVideoElement | null, time: number) => {
    const width = 1080;
    const height = 1080;

    // Clear and fill background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    // Draw video if available - cover fill for square
    if (video && video.readyState >= 2) {
      const videoAspect = video.videoWidth / video.videoHeight;
      const canvasAspect = width / height;
      let drawWidth = width;
      let drawHeight = height;
      let offsetX = 0;
      let offsetY = 0;

      if (videoAspect > canvasAspect) {
        drawWidth = height * videoAspect;
        offsetX = (width - drawWidth) / 2;
      } else {
        drawHeight = width / videoAspect;
        offsetY = (height - drawHeight) / 2;
      }

      ctx.drawImage(video, offsetX, offsetY, drawWidth, drawHeight);
    }

    // Dark gradient overlay for text readability
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(0,0,0,0.75)');
    gradient.addColorStop(0.30, 'rgba(0,0,0,0.35)');
    gradient.addColorStop(0.60, 'rgba(0,0,0,0.35)');
    gradient.addColorStop(1, 'rgba(0,0,0,0.85)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Draw logo image - top left area
    const logoSize = 90;
    const logoX = width / 2 - 140;
    const logoY = 50;
    if (logoRef.current) {
      ctx.drawImage(logoRef.current, logoX, logoY, logoSize, logoSize);
    }

    // OARC text with Heat Robox font
    ctx.textAlign = 'left';
    ctx.font = "44px 'Heat Robox', sans-serif";
    ctx.fillStyle = '#FFFFFF';
    const orcTextX = logoX + logoSize + 18;
    ctx.fillText('OARC', orcTextX, logoY + 50);
    
    // Measure OARC width to center DIGITAL under it
    const oarcWidth = ctx.measureText('OARC').width;

    // DIGITAL text - smaller, centered under OARC, in GREEN
    ctx.font = "22px 'Heat Robox', sans-serif";
    ctx.fillStyle = '#c4ff4d';
    const digitalWidth = ctx.measureText('DIGITAL').width;
    const digitalX = orcTextX + (oarcWidth - digitalWidth) / 2;
    ctx.fillText('DIGITAL', digitalX, logoY + 78);

    // Main headline - centered, adjusted for square format
    ctx.textAlign = 'center';
    ctx.font = "800 56px 'Montserrat', 'Arial Black', sans-serif";
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('WE ARE THE MODERN', width/2, height/2 - 60);
    ctx.fillText('AI', width/2, height/2 + 10);

    // Italic subheadline
    ctx.font = "italic 68px 'EB Garamond', Georgia, serif";
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('CREATIVE AGENCY', width/2, height/2 + 110);

    // Bottom section: Ticker (55px) + CTA (85px) = 140px total
    const ctaHeight = 85;
    const tickerHeight = 55;
    const totalBottomHeight = tickerHeight + ctaHeight;
    const tickerY = height - totalBottomHeight;
    const ctaY = tickerY + tickerHeight;
    
    // Ticker bar background - lime green
    ctx.fillStyle = '#c4ff4d';
    ctx.fillRect(0, tickerY, width, tickerHeight);

    // Ticker with mixed fonts - Roctaria for SOCIAL, AI, STRATEGY, Soreille for rest
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'left';
    
    const normalFont = "26px 'Soreille', Georgia, serif";
    const accentFont = "26px 'Roctaria', Georgia, serif";
    
    const segments = [
      { text: 'WE PUT ', font: normalFont },
      { text: 'SOCIAL', font: accentFont },
      { text: ' · ', font: normalFont },
      { text: 'AI', font: accentFont },
      { text: ' · ', font: normalFont },
      { text: 'STRATEGY', font: accentFont },
      { text: ' AT THE CENTER OF EVERYTHING WE DO. · ', font: normalFont },
    ];
    
    // Calculate total width of one full ticker repeat
    let totalWidth = 0;
    for (const seg of segments) {
      ctx.font = seg.font;
      totalWidth += ctx.measureText(seg.text).width;
    }
    
    const offset = (time * 100) % totalWidth;
    
    // Draw multiple copies for seamless scrolling
    for (let i = -1; i < 4; i++) {
      let xPos = i * totalWidth - offset;
      for (const seg of segments) {
        ctx.font = seg.font;
        ctx.fillText(seg.text, xPos, tickerY + 37);
        xPos += ctx.measureText(seg.text).width;
      }
    }
    
    // CTA section below ticker - lighter pale green
    ctx.fillStyle = '#e8ffe0';
    ctx.fillRect(0, ctaY, width, ctaHeight);
    
    // Left-aligned CTA text
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'left';
    const ctaLeftPadding = 50;
    
    // Line 1: Transform Your Brand in 30 Days
    ctx.font = "bold 30px 'Montserrat', sans-serif";
    const line1Y = ctaY + 32;
    ctx.fillText('Transform Your Brand in 30 Days', ctaLeftPadding, line1Y);
    
    // Line 2: Book your free strategy call
    ctx.font = "22px 'Soreille', Georgia, serif";
    const line2Y = ctaY + 62;
    ctx.fillText('Book your free strategy call', ctaLeftPadding, line2Y);
    
    // Arrow on the right side
    const arrowX = width - 100;
    const arrowCenterY = (line1Y + line2Y) / 2;
    ctx.font = "bold 44px sans-serif";
    ctx.textAlign = 'center';
    ctx.fillText('→', arrowX, arrowCenterY + 6);
  }, []);

  // Live preview animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let running = true;
    const animate = () => {
      if (!running) return;
      const time = performance.now() / 1000;
      drawFrame(ctx, video, time);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      running = false;
      cancelAnimationFrame(animationRef.current);
    };
  }, [drawFrame]);

  // Handle video ready
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => setIsReady(true);
    video.addEventListener('loadeddata', handleLoaded);
    
    // Fallback
    const timer = setTimeout(() => setIsReady(true), 3000);

    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
      clearTimeout(timer);
    };
  }, []);

  // Start recording
  const startRecording = useCallback(async () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas) return;

    setError(null);
    setDownloadUrl(null);
    setIsRecording(true);
    setProgress(0);

    // Reset video
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }

    const duration = 13000;
    startTimeRef.current = performance.now();
    const chunks: Blob[] = [];

    try {
      const stream = canvas.captureStream(30);
      
      // Try different codecs for best quality
      let mimeType = 'video/webm;codecs=vp8';
      if (MediaRecorder.isTypeSupported('video/webm;codecs=vp9')) {
        mimeType = 'video/webm;codecs=vp9';
      }

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType,
        videoBitsPerSecond: 8000000 // Higher bitrate for quality
      });

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        setDownloadUrl(url);
        setIsRecording(false);
        setProgress(100);
      };

      mediaRecorder.onerror = (e) => {
        console.error('MediaRecorder error:', e);
        setError('Recording failed');
        setIsRecording(false);
      };

      mediaRecorder.start(100);

      // Progress tracking
      const progressInterval = setInterval(() => {
        const elapsed = performance.now() - startTimeRef.current;
        const pct = Math.min(99, Math.floor((elapsed / duration) * 100));
        setProgress(pct);

        if (elapsed >= duration) {
          clearInterval(progressInterval);
          mediaRecorder.stop();
        }
      }, 100);

    } catch (err) {
      console.error('Recording setup failed:', err);
      setError('Recording not supported in this browser');
      setIsRecording(false);
    }
  }, []);

  // Download
  const handleDownload = useCallback(() => {
    if (!downloadUrl) return;
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = 'oarc-instagram-1080x1080.webm';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, [downloadUrl]);

  const canRecord = isReady && fontsLoaded;

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center py-8 px-4">
      {/* Hidden font preloaders - forces browser to load fonts for canvas */}
      <span style={{ fontFamily: 'Roctaria', position: 'absolute', opacity: 0, pointerEvents: 'none' }}>.</span>
      <span style={{ fontFamily: 'Soreille', position: 'absolute', opacity: 0, pointerEvents: 'none' }}>.</span>
      <span style={{ fontFamily: 'Heat Robox', position: 'absolute', opacity: 0, pointerEvents: 'none' }}>.</span>
      
      {/* Hidden video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="hidden"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Header */}
      <div className="mb-6 flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-white">Instagram Export (1080×1080)</h1>
        
        <p className="text-white/60 text-sm max-w-md text-center">
          Click "Start Recording" to capture 13 seconds of video with the animated ticker. 1:1 square format for Instagram.
        </p>
        
        {error && <p className="text-red-400 text-sm">{error}</p>}

        <div className="flex gap-4">
          {!downloadUrl ? (
            <button
              onClick={startRecording}
              disabled={!canRecord || isRecording}
              className={`px-8 py-4 font-bold rounded-lg transition-colors text-lg ${
                canRecord && !isRecording
                  ? 'bg-[#c4ff4d] text-black hover:bg-[#c4ff4d]/90' 
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
              data-testid="button-record"
            >
              {isRecording ? `Recording... ${progress}%` : (canRecord ? 'Start Recording' : 'Loading...')}
            </button>
          ) : (
            <>
              <button
                onClick={handleDownload}
                className="px-8 py-4 font-bold rounded-lg bg-[#c4ff4d] text-black hover:bg-[#c4ff4d]/90 text-lg"
                data-testid="button-download"
              >
                Download Video
              </button>
              <button
                onClick={() => { setDownloadUrl(null); setProgress(0); }}
                className="px-6 py-4 font-bold rounded-lg bg-white/10 text-white hover:bg-white/20 text-lg"
                data-testid="button-record-again"
              >
                Record Again
              </button>
            </>
          )}
        </div>
      </div>

      {/* Canvas - square format */}
      <div className="border-4 border-white/20 rounded-lg overflow-hidden shadow-2xl">
        <canvas
          ref={canvasRef}
          width={1080}
          height={1080}
          className="bg-black"
          style={{ width: 400, height: 400 }}
        />
      </div>

      <p className="mt-4 text-white/40 text-sm">
        Preview shown at 37% scale. Recording exports at full 1080×1080 pixels.
      </p>
    </div>
  );
}
