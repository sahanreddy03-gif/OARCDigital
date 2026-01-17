import { useRef, useState, useCallback, useEffect } from 'react';
import heroVideo from '@assets/video_final_1768658189717.mp4';
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

    // Load custom fonts
    Promise.all([
      document.fonts.load("48px 'Heat Robox'"),
      document.fonts.load("bold 28px 'Nextf Games'"),
      document.fonts.load("bold 28px 'Boldisy'"),
    ]).then(() => {
      setFontsLoaded(true);
    }).catch(() => {
      setFontsLoaded(true); // Continue anyway with fallback fonts
    });
  }, []);

  // Draw frame to canvas
  const drawFrame = useCallback((ctx: CanvasRenderingContext2D, video: HTMLVideoElement | null, time: number) => {
    const width = 1080;
    const height = 1350;

    // Clear and fill background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    // Draw video if available
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

    // Dark gradient overlay
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(0,0,0,0.70)');
    gradient.addColorStop(0.35, 'rgba(0,0,0,0.30)');
    gradient.addColorStop(0.65, 'rgba(0,0,0,0.30)');
    gradient.addColorStop(1, 'rgba(0,0,0,0.80)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Draw logo image
    const logoSize = 100;
    const logoX = width / 2 - 160;
    const logoY = 60;
    if (logoRef.current) {
      ctx.drawImage(logoRef.current, logoX, logoY, logoSize, logoSize);
    }

    // OARC text with Heat Robox font (same as homepage)
    ctx.textAlign = 'left';
    ctx.font = "48px 'Heat Robox', sans-serif";
    ctx.fillStyle = '#FFFFFF';
    const orcTextX = logoX + logoSize + 20;
    ctx.fillText('OARC', orcTextX, logoY + 55);
    
    // Measure OARC width to center DIGITAL under it
    const oarcWidth = ctx.measureText('OARC').width;

    // DIGITAL text - smaller, centered under OARC, in GREEN (like homepage)
    ctx.font = "24px 'Heat Robox', sans-serif";
    ctx.fillStyle = '#c4ff4d';
    const digitalWidth = ctx.measureText('DIGITAL').width;
    const digitalX = orcTextX + (oarcWidth - digitalWidth) / 2;
    ctx.fillText('DIGITAL', digitalX, logoY + 85);

    // Main headline - centered
    ctx.textAlign = 'center';
    ctx.font = "800 62px 'Montserrat', 'Arial Black', sans-serif";
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('WE ARE THE MODERN', width/2, height/2 - 40);
    ctx.fillText('AI', width/2, height/2 + 40);

    // Italic subheadline
    ctx.font = "italic 78px 'EB Garamond', Georgia, serif";
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('CREATIVE AGENCY', width/2, height/2 + 150);

    // Ticker bar background - TALLER
    const tickerHeight = 100;
    const tickerY = height - tickerHeight;
    ctx.fillStyle = '#BFFF00';
    ctx.fillRect(0, tickerY, width, tickerHeight);

    // Ticker with mixed fonts - Ciscela for SOCIAL, AI, STRATEGY, Nextf Games for rest
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'left';
    
    // Define ticker segments with their fonts
    const normalFont = "bold 28px 'Nextf Games', 'Arial Black', sans-serif";
    const accentFont = "bold 28px 'Boldisy', Georgia, serif";
    
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
        ctx.fillText(seg.text, xPos, tickerY + 62);
        xPos += ctx.measureText(seg.text).width;
      }
    }
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

    const duration = 8000;
    startTimeRef.current = performance.now();
    const chunks: Blob[] = [];

    try {
      const stream = canvas.captureStream(30);
      
      // Try different codecs
      let mimeType = 'video/webm;codecs=vp8';
      if (MediaRecorder.isTypeSupported('video/webm;codecs=vp9')) {
        mimeType = 'video/webm;codecs=vp9';
      }

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType,
        videoBitsPerSecond: 5000000
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
    a.download = 'oarc-instagram-1080x1350.webm';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, [downloadUrl]);

  const canRecord = isReady && fontsLoaded;

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center py-8 px-4">
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
        <h1 className="text-2xl font-bold text-white">Instagram Export (1080×1350)</h1>
        
        <p className="text-white/60 text-sm max-w-md text-center">
          Click "Start Recording" to capture 8 seconds of video with the animated ticker.
        </p>
        
        {error && <p className="text-red-400 text-sm">{error}</p>}

        <div className="flex gap-4">
          {!downloadUrl ? (
            <button
              onClick={startRecording}
              disabled={!canRecord || isRecording}
              className={`px-8 py-4 font-bold rounded-lg transition-colors text-lg ${
                canRecord && !isRecording
                  ? 'bg-[#BFFF00] text-black hover:bg-[#BFFF00]/90' 
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
                className="px-8 py-4 font-bold rounded-lg bg-[#BFFF00] text-black hover:bg-[#BFFF00]/90 text-lg"
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

      {/* Canvas */}
      <div className="border-4 border-white/20 rounded-lg overflow-hidden shadow-2xl">
        <canvas
          ref={canvasRef}
          width={1080}
          height={1350}
          className="bg-black"
          style={{ width: 360, height: 450 }}
        />
      </div>

      <p className="mt-4 text-white/40 text-sm">
        Preview shown at 33% scale. Recording exports at full 1080×1350 pixels.
      </p>
    </div>
  );
}
