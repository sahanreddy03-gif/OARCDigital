import { useRef, useState, useCallback, useEffect } from 'react';
import heroVideo from '@assets/2026-01-11_01_1768711134246.mp4';
import logoImage from '@assets/download_(2)_1768663468684.png';

export default function AIAgentsExport() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const tickerWidthRef = useRef<number>(0);

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
        const squiver = new FontFace('Squiver', 'url(/fonts/squiver.woff2)');
        
        const fonts = await Promise.all([roctaria.load(), heatRobox.load(), soreille.load(), squiver.load()]);
        fonts.forEach(font => document.fonts.add(font));
        setFontsLoaded(true);
      } catch (err) {
        console.error('Font loading error:', err);
        setFontsLoaded(true);
      }
    };
    loadFonts();
  }, []);

  // Draw frame to canvas - 1080x1350 vertical 4:5 format for Instagram
  const drawFrame = useCallback((ctx: CanvasRenderingContext2D, video: HTMLVideoElement | null, time: number) => {
    const width = 1080;
    const height = 1350; // 4:5 vertical format for Instagram Reels/Stories

    // Clear and fill background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    // Draw video if available - cover the canvas
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
    gradient.addColorStop(0.35, 'rgba(0,0,0,0.25)');
    gradient.addColorStop(0.65, 'rgba(0,0,0,0.25)');
    gradient.addColorStop(1, 'rgba(0,0,0,0.80)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Draw logo image - positioned for 4:5 vertical format
    const logoSize = 100;
    const logoX = width / 2 - 140;
    const logoY = 60;
    if (logoRef.current) {
      ctx.drawImage(logoRef.current, logoX, logoY, logoSize, logoSize);
    }

    // OARC text with Heat Robox font - VERY CLOSE to logo (only 8px gap)
    ctx.textAlign = 'left';
    ctx.font = "48px 'Heat Robox', sans-serif";
    ctx.fillStyle = '#FFFFFF';
    const orcTextX = logoX + logoSize + 8;
    ctx.fillText('OARC', orcTextX, logoY + 55);
    
    // Measure OARC width to center DIGITAL under it
    const oarcWidth = ctx.measureText('OARC').width;

    // DIGITAL text - smaller, centered under OARC, in GREEN
    ctx.font = "24px 'Heat Robox', sans-serif";
    ctx.fillStyle = '#c4ff4d';
    const digitalWidth = ctx.measureText('DIGITAL').width;
    const digitalX = orcTextX + (oarcWidth - digitalWidth) / 2;
    ctx.fillText('DIGITAL', digitalX, logoY + 85);

    // Main headline - CENTERED for 4:5 vertical format (matching creative export)
    const headlineY = height / 2 - 60;
    
    ctx.textAlign = 'center';
    ctx.font = "800 58px 'Montserrat', 'Arial Black', sans-serif";
    ctx.fillStyle = '#FFFFFF';
    
    // Split into lines - centered with proper vertical spacing
    ctx.fillText('BUILD, GROW &', width / 2, headlineY);
    ctx.fillText('SCALE WITH OUR', width / 2, headlineY + 75);
    
    // AI workforce in accent color - italic serif for emphasis
    ctx.font = "italic 68px 'EB Garamond', Georgia, serif";
    ctx.fillStyle = '#c4ff4d';
    ctx.fillText('AI Workforce', width / 2, headlineY + 165);

    // Bottom section: Ticker (65px) + CTA (100px) = 165px total - sized for 4:5 vertical
    const ctaHeight = 100;
    const tickerHeight = 65;
    const totalBottomHeight = tickerHeight + ctaHeight;
    const tickerY = height - totalBottomHeight;
    const ctaY = tickerY + tickerHeight;
    
    // Ticker bar background - lime green
    ctx.fillStyle = '#c4ff4d';
    ctx.fillRect(0, tickerY, width, tickerHeight);

    // Ticker with clean readable Montserrat font
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'left';
    
    const tickerFont = "bold 26px 'Montserrat', Arial, sans-serif";
    
    const segments = [
      { text: 'YOUR TEAM THAT WORKS 24/7: ', font: tickerFont },
      { text: 'AI EMPLOYEES', font: tickerFont },
      { text: ' • ', font: tickerFont },
      { text: 'AUTOMATION', font: tickerFont },
      { text: ' • ', font: tickerFont },
      { text: 'CUSTOM SOLUTIONS', font: tickerFont },
      { text: ' · ', font: tickerFont },
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
        ctx.fillText(seg.text, xPos, tickerY + 43);
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
    
    // Line 1: Transform Your Business in 30 Days
    ctx.font = "bold 32px 'Montserrat', sans-serif";
    const line1Y = ctaY + 40;
    ctx.fillText('Transform Your Business in 30 Days', ctaLeftPadding, line1Y);
    
    // Line 2: Book your free strategy call
    ctx.font = "22px 'Soreille', Georgia, serif";
    const line2Y = ctaY + 70;
    ctx.fillText('Book your free strategy call', ctaLeftPadding, line2Y);
    
    // Arrow on the right side
    const arrowX = width - 100;
    const arrowCenterY = (line1Y + line2Y) / 2;
    ctx.font = "bold 44px sans-serif";
    ctx.textAlign = 'center';
    ctx.fillText('→', arrowX, arrowCenterY + 8);
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

  // Start recording - 12 seconds (6 sec video x2) with audio
  const startRecording = useCallback(async () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    setError(null);
    setDownloadUrl(null);
    setIsRecording(true);
    setProgress(0);

    // Reset and unmute video for audio capture
    video.currentTime = 0;
    video.muted = false;
    video.volume = 1.0;
    await video.play().catch(() => {});

    const duration = 12000; // 12 seconds (6 sec video loops twice)
    startTimeRef.current = performance.now();
    const chunks: Blob[] = [];

    try {
      // Capture canvas at 60fps for smoother video
      const canvasStream = canvas.captureStream(60);
      
      // Capture audio from video element
      const videoStream = (video as any).captureStream ? (video as any).captureStream() : null;
      
      // Create combined stream with video from canvas + audio from source video
      const combinedStream = new MediaStream();
      
      // Add video tracks from canvas
      canvasStream.getVideoTracks().forEach(track => {
        combinedStream.addTrack(track);
      });
      
      // Add audio tracks from source video if available
      if (videoStream) {
        videoStream.getAudioTracks().forEach((track: MediaStreamTrack) => {
          combinedStream.addTrack(track);
        });
      }
      
      // Use VP8+Opus for video+audio, higher bitrate for quality
      const mimeType = 'video/webm;codecs=vp8,opus';

      const mediaRecorder = new MediaRecorder(combinedStream, {
        mimeType,
        videoBitsPerSecond: 15000000, // 15Mbps for high quality
        audioBitsPerSecond: 192000 // 192kbps audio
      });

      mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.onstop = async () => {
        // Re-mute video after recording
        video.muted = true;
        
        if (chunks.length === 0) {
          setError('No video data captured');
          setIsRecording(false);
          return;
        }
        
        setIsRecording(false);
        setIsConverting(true);
        setProgress(50);
        
        // Animate progress during conversion (takes ~2 minutes)
        let conversionProgress = 50;
        const progressTimer = setInterval(() => {
          conversionProgress = Math.min(95, conversionProgress + 0.5);
          setProgress(Math.floor(conversionProgress));
        }, 1000);
        
        try {
          const webmBlob = new Blob(chunks, { type: 'video/webm' });
          
          // Send to server for FFmpeg H.264 conversion
          const formData = new FormData();
          formData.append('video', webmBlob, 'recording.webm');
          formData.append('format', '4:5');
          
          const response = await fetch('/api/convert-video', {
            method: 'POST',
            body: formData
          });
          
          clearInterval(progressTimer);
          
          if (!response.ok) {
            throw new Error('Conversion failed');
          }
          
          const mp4Blob = await response.blob();
          const url = URL.createObjectURL(mp4Blob);
          
          setDownloadUrl(url);
          setProgress(100);
        } catch (err) {
          clearInterval(progressTimer);
          console.error('Conversion error:', err);
          setError('MP4 conversion failed - please try again');
        }
        
        setIsConverting(false);
      };

      mediaRecorder.onerror = (e) => {
        console.error('MediaRecorder error:', e);
        video.muted = true; // Re-mute on error
        setError('Recording failed');
        setIsRecording(false);
      };

      // Start with larger timeslice (1 second) for more complete chunks
      mediaRecorder.start(1000);

      // Progress tracking and stop (first 45% for recording, rest for conversion)
      const progressInterval = setInterval(() => {
        const elapsed = performance.now() - startTimeRef.current;
        const pct = Math.min(45, Math.floor((elapsed / duration) * 45));
        setProgress(pct);

        if (elapsed >= duration) {
          clearInterval(progressInterval);
          // Request any remaining data before stopping
          if (mediaRecorder.state === 'recording') {
            mediaRecorder.requestData();
            setTimeout(() => {
              if (mediaRecorder.state === 'recording') {
                mediaRecorder.stop();
              }
            }, 200);
          }
        }
      }, 100);

    } catch (err) {
      console.error('Recording setup failed:', err);
      video.muted = true;
      setError('Recording not supported in this browser');
      setIsRecording(false);
    }
  }, []);

  // Download
  const handleDownload = useCallback(() => {
    if (!downloadUrl) return;
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = 'oarc-ai-agents-instagram-1080x1350.mp4';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, [downloadUrl]);

  const canRecord = isReady && fontsLoaded;
  const isBusy = isRecording || isConverting;

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center py-8 px-4">
      {/* Hidden font preloaders */}
      <span style={{ fontFamily: 'Roctaria', position: 'absolute', opacity: 0, pointerEvents: 'none' }}>.</span>
      <span style={{ fontFamily: 'Soreille', position: 'absolute', opacity: 0, pointerEvents: 'none' }}>.</span>
      <span style={{ fontFamily: 'Squiver', position: 'absolute', opacity: 0, pointerEvents: 'none' }}>.</span>
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
        <h1 className="text-2xl font-bold text-white">AI Agents Instagram Export (1080×1350 - 4:5)</h1>
        
        <p className="text-white/60 text-sm max-w-md text-center">
          4:5 vertical format MP4 (H.264) for Instagram Reels & Stories. 30fps, Meta Ads compatible. Conversion takes ~2 minutes.
        </p>
        
        {error && <p className="text-red-400 text-sm">{error}</p>}

        <div className="flex gap-4">
          {!downloadUrl ? (
            <button
              onClick={startRecording}
              disabled={!canRecord || isBusy}
              className={`px-8 py-4 font-bold rounded-lg transition-colors text-lg ${
                canRecord && !isBusy
                  ? 'bg-[#BFFF00] text-black hover:bg-[#BFFF00]/90' 
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
              data-testid="button-record"
            >
              {isRecording 
                ? `Recording... ${progress}%` 
                : isConverting 
                  ? `Converting to MP4... ${progress}%`
                  : (canRecord ? 'Start Recording' : 'Loading...')}
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
          style={{ width: 324, height: 405 }}
        />
      </div>

      <p className="mt-4 text-white/40 text-sm">
        Preview shown at 30% scale. Recording exports at full 1080×1350 (4:5) pixels with audio.
      </p>
    </div>
  );
}
