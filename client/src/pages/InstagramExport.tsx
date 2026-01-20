import { useRef, useState, useCallback, useEffect } from 'react';
import heroVideo from '@assets/video_final_1768707020686.mp4';
import logoImage from '@assets/download_(2)_1768663468684.png';

export default function InstagramExport() {
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

  // Load logo image and fonts
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      logoRef.current = img;
    };
    img.src = logoImage;

    const loadFonts = async () => {
      try {
        const halfre = new FontFace('Halfre', 'url(/fonts/halfre.woff2)');
        const heatRobox = new FontFace('Heat Robox', 'url(/fonts/heat-robox.ttf)');
        const soreille = new FontFace('Soreille', 'url(/fonts/soreille.ttf)');
        
        const fonts = await Promise.all([halfre.load(), heatRobox.load(), soreille.load()]);
        fonts.forEach(font => document.fonts.add(font));
        setFontsLoaded(true);
      } catch (err) {
        console.error('Font loading error:', err);
        setFontsLoaded(true);
      }
    };
    loadFonts();
  }, []);

  // Draw frame to canvas - TRUE 1080x1080 square format for Meta Ads
  const drawFrame = useCallback((ctx: CanvasRenderingContext2D, video: HTMLVideoElement | null, time: number) => {
    const width = 1080;
    const height = 1080;

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    // Draw video - COVER FILL (scale and center, no letterboxing)
    if (video && video.readyState >= 2) {
      const videoAspect = video.videoWidth / video.videoHeight;
      const canvasAspect = 1.0;
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
    gradient.addColorStop(0, 'rgba(0,0,0,0.75)');
    gradient.addColorStop(0.30, 'rgba(0,0,0,0.35)');
    gradient.addColorStop(0.60, 'rgba(0,0,0,0.35)');
    gradient.addColorStop(1, 'rgba(0,0,0,0.85)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Logo
    const logoSize = 90;
    const logoX = width / 2 - 140;
    const logoY = 50;
    if (logoRef.current) {
      ctx.drawImage(logoRef.current, logoX, logoY, logoSize, logoSize);
    }

    // OARC text
    ctx.textAlign = 'left';
    ctx.font = "44px 'Heat Robox', sans-serif";
    ctx.fillStyle = '#FFFFFF';
    const orcTextX = logoX + logoSize + 18;
    ctx.fillText('OARC', orcTextX, logoY + 50);
    
    const oarcWidth = ctx.measureText('OARC').width;

    // DIGITAL text
    ctx.font = "22px 'Heat Robox', sans-serif";
    ctx.fillStyle = '#c4ff4d';
    const digitalWidth = ctx.measureText('DIGITAL').width;
    const digitalX = orcTextX + (oarcWidth - digitalWidth) / 2;
    ctx.fillText('DIGITAL', digitalX, logoY + 78);

    // Main headline
    ctx.textAlign = 'center';
    ctx.font = "800 56px 'Montserrat', 'Arial Black', sans-serif";
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('WE ARE THE MODERN', width/2, height/2 - 60);
    ctx.fillText('AI', width/2, height/2 + 10);

    // Italic subheadline
    ctx.font = "italic 68px 'EB Garamond', Georgia, serif";
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('CREATIVE AGENCY', width/2, height/2 + 110);

    // Bottom section
    const ctaHeight = 85;
    const tickerHeight = 55;
    const totalBottomHeight = tickerHeight + ctaHeight;
    const tickerY = height - totalBottomHeight;
    const ctaY = tickerY + tickerHeight;
    
    // Ticker bar
    ctx.fillStyle = '#c4ff4d';
    ctx.fillRect(0, tickerY, width, tickerHeight);

    // Ticker text
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'left';
    ctx.font = "26px 'Halfre', sans-serif";
    
    const tickerText = 'WE PUT SOCIAL · AI · STRATEGY AT THE CENTER OF EVERYTHING WE DO. · ';
    const totalWidth = ctx.measureText(tickerText).width;
    const offset = (time * 100) % totalWidth;
    
    for (let i = -1; i < 4; i++) {
      const xPos = i * totalWidth - offset;
      ctx.fillText(tickerText, xPos, tickerY + 37);
    }
    
    // CTA section
    ctx.fillStyle = '#e8ffe0';
    ctx.fillRect(0, ctaY, width, ctaHeight);
    
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'left';
    const ctaLeftPadding = 50;
    
    ctx.font = "bold 28px 'Montserrat', sans-serif";
    const line1Y = ctaY + 32;
    ctx.fillText('Transform Your Brand in 30 Days', ctaLeftPadding, line1Y);
    
    ctx.font = "20px 'Soreille', Georgia, serif";
    const line2Y = ctaY + 58;
    ctx.fillText('Book your free strategy call', ctaLeftPadding, line2Y);
    
    const arrowX = width - 100;
    const arrowCenterY = (line1Y + line2Y) / 2;
    ctx.font = "bold 40px sans-serif";
    ctx.textAlign = 'center';
    ctx.fillText('→', arrowX, arrowCenterY + 6);
  }, []);

  // Live preview animation
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
    
    const timer = setTimeout(() => setIsReady(true), 3000);

    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
      clearTimeout(timer);
    };
  }, []);

  // Start recording - 30fps
  const startRecording = useCallback(async () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    setError(null);
    setDownloadUrl(null);
    setIsRecording(true);
    setProgress(0);

    video.currentTime = 0;
    video.muted = false;
    video.volume = 1.0;
    await video.play().catch(() => {});

    const duration = 13000;
    startTimeRef.current = performance.now();
    const chunks: Blob[] = [];

    try {
      const canvasStream = canvas.captureStream(30);
      
      const videoStream = (video as any).captureStream ? (video as any).captureStream() : null;
      
      const combinedStream = new MediaStream();
      
      canvasStream.getVideoTracks().forEach(track => {
        combinedStream.addTrack(track);
      });
      
      if (videoStream) {
        videoStream.getAudioTracks().forEach((track: MediaStreamTrack) => {
          combinedStream.addTrack(track);
        });
      }
      
      const mimeType = 'video/webm;codecs=vp8,opus';

      const mediaRecorder = new MediaRecorder(combinedStream, {
        mimeType,
        videoBitsPerSecond: 20000000,
        audioBitsPerSecond: 192000
      });

      mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.onstop = async () => {
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
          
          // Upload to server for MP4 conversion
          const formData = new FormData();
          formData.append('video', webmBlob, 'recording.webm');
          
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
        video.muted = true;
        setError('Recording failed');
        setIsRecording(false);
      };

      mediaRecorder.start(1000);

      const progressInterval = setInterval(() => {
        const elapsed = performance.now() - startTimeRef.current;
        const pct = Math.min(45, Math.floor((elapsed / duration) * 45));
        setProgress(pct);

        if (elapsed >= duration) {
          clearInterval(progressInterval);
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
      setError('Recording not supported in this browser');
      setIsRecording(false);
    }
  }, []);

  // Download MP4
  const handleDownload = useCallback(() => {
    if (!downloadUrl) return;
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = 'oarc-instagram-1080x1080.mp4';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, [downloadUrl]);

  const canRecord = isReady && fontsLoaded;
  const isBusy = isRecording || isConverting;

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center py-8 px-4">
      <span style={{ fontFamily: 'Halfre', position: 'absolute', opacity: 0, pointerEvents: 'none' }}>.</span>
      <span style={{ fontFamily: 'Soreille', position: 'absolute', opacity: 0, pointerEvents: 'none' }}>.</span>
      <span style={{ fontFamily: 'Heat Robox', position: 'absolute', opacity: 0, pointerEvents: 'none' }}>.</span>
      
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

      <div className="mb-6 flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-white">Instagram Export (1080×1080 MP4)</h1>
        
        <p className="text-white/60 text-sm max-w-md text-center">
          True 1:1 square format MP4 (H.264) for Meta Ads. 30fps, no padding or letterboxing. Conversion takes ~2 minutes.
        </p>
        
        <div className="flex gap-2 text-xs">
          <span className={`px-2 py-1 rounded ${fontsLoaded ? 'bg-green-600' : 'bg-yellow-600'}`}>
            {fontsLoaded ? 'Fonts Ready' : 'Loading Fonts...'}
          </span>
          <span className="px-2 py-1 rounded bg-green-600">
            Server Converter Ready
          </span>
        </div>
        
        {error && <p className="text-red-400 text-sm">{error}</p>}

        <div className="flex gap-4">
          {!downloadUrl ? (
            <button
              onClick={startRecording}
              disabled={!canRecord || isBusy}
              className={`px-8 py-4 font-bold rounded-lg transition-colors text-lg ${
                canRecord && !isBusy
                  ? 'bg-[#c4ff4d] text-black hover:bg-[#c4ff4d]/90' 
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
                className="px-8 py-4 font-bold rounded-lg bg-[#c4ff4d] text-black hover:bg-[#c4ff4d]/90 text-lg"
                data-testid="button-download"
              >
                Download MP4
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
        Preview at 37% scale. Exports true 1080×1080 MP4 (H.264) at 30fps.
      </p>
    </div>
  );
}
