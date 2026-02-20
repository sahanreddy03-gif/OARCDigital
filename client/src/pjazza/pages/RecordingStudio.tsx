import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
import { Video, Square, Camera, Smartphone, Film, Radio, Tv, Check, Flame, ArrowLeft, Sparkles } from 'lucide-react';
import LivePulse from '../components/LivePulse';

const presets = [
  { Icon: Smartphone, label: 'TikTok', duration: '15-60s', aspect: '9:16' },
  { Icon: Video, label: 'Shorts', duration: '<60s', aspect: '9:16' },
  { Icon: Camera, label: 'Story', duration: '15s', aspect: '9:16' },
  { Icon: Film, label: 'Feed', duration: '30-90s', aspect: '4:5' },
  { Icon: Radio, label: 'Live', duration: '\u221e', aspect: '9:16' },
  { Icon: Tv, label: 'Vibe Cam', duration: 'Loop', aspect: '1:1' },
];

const platforms = ['TikTok', 'Reels', 'Shorts', 'Stories'];

export default function RecordingStudio() {
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [showSaved, setShowSaved] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [, navigate] = useLocation();

  const toggleRecording = () => {
    if (isRecording) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setIsRecording(false);
      setShowSaved(true);
    } else {
      setSeconds(0);
      setShowSaved(false);
      setIsRecording(true);
      intervalRef.current = setInterval(() => setSeconds(s => s + 1), 1000);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen flex flex-col pj-grain" style={{ background: 'var(--pj-deep)' }}>
      <div className="relative flex-1" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--pj-surface-1), var(--pj-deep))' }}>
          <div className="absolute inset-0">
            {[33.33, 66.66].map((pos, i) => (
              <div key={`v${i}`} className="absolute top-0 bottom-0" style={{ left: `${pos}%`, width: 1, background: 'var(--pj-border-subtle)' }} />
            ))}
            {[33.33, 66.66].map((pos, i) => (
              <div key={`h${i}`} className="absolute left-0 right-0" style={{ top: `${pos}%`, height: 1, background: 'var(--pj-border-subtle)' }} />
            ))}
          </div>

          {!isRecording && !showSaved && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <Camera size={48} strokeWidth={1.2} style={{ color: 'var(--pj-crimson)', opacity: 0.08 }} />
                <span className="text-[11px] font-medium" style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text-muted)' }}>
                  Camera preview
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <motion.button
            className="pj-pill text-[11px] gap-1.5"
            style={{ background: 'var(--pj-surface-glass)', backdropFilter: 'blur(12px)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/pjazza/business/dashboard')}
          >
            <ArrowLeft size={14} strokeWidth={2.5} />
            Back
          </motion.button>

          <AnimatePresence>
            {isRecording && (
              <motion.div
                className="pj-live-badge px-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <LivePulse size={6} color="#fff" />
                <span className="text-[11px] font-bold text-white" style={{ fontFamily: 'var(--pj-font-display)' }}>REC</span>
              </motion.div>
            )}
          </AnimatePresence>

          <div
            className="pj-pill text-[10px]"
            style={{ background: 'var(--pj-surface-glass)', backdropFilter: 'blur(12px)' }}
          >
            {presets[selectedPreset].aspect} · 30fps
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 z-10">
          <AnimatePresence>
            {!showSaved && !isRecording && (
              <motion.div
                className="pj-card-glow px-4 py-3 text-[11px] text-center font-medium flex items-center justify-center gap-2"
                style={{ color: 'var(--pj-text-tertiary)' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <Sparkles size={13} strokeWidth={2.5} style={{ color: 'var(--pj-crimson)' }} />
                Hook in first 2 seconds
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {showSaved && (
            <motion.div
              className="absolute inset-0 z-20 flex flex-col items-center justify-center"
              style={{ background: 'rgba(10,10,15,0.88)', backdropFilter: 'blur(24px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                style={{ background: 'var(--pj-green-subtle)', border: '2px solid var(--pj-green)' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <Check size={28} strokeWidth={2.5} style={{ color: 'var(--pj-green)' }} />
              </motion.div>
              <p
                className="text-xl font-bold mb-6"
                style={{ fontFamily: 'var(--pj-font-display)', color: 'var(--pj-text)' }}
              >
                Video Saved!
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {platforms.map((p, i) => (
                  <motion.div
                    key={i}
                    className="pj-pill text-[11px] font-bold"
                    style={{ background: 'var(--pj-green-subtle)', border: '1px solid rgba(52,211,153,0.15)', color: 'var(--pj-green)' }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.12 }}
                  >
                    <Check size={11} strokeWidth={2.5} /> {p}
                  </motion.div>
                ))}
              </div>
              <motion.button
                className="mt-7 pj-btn-primary px-8 py-3.5 text-[14px] font-bold"
                style={{ fontFamily: 'var(--pj-font-display)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setShowSaved(false)}
              >
                Record Another
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="px-6 py-5" style={{ background: 'var(--pj-deep)', borderTop: '1px solid var(--pj-border)' }}>
        <div className="flex gap-2 overflow-x-auto pb-4 pj-scrollbar-hide">
          {presets.map((preset, i) => (
            <motion.button
              key={i}
              className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[11px] font-bold whitespace-nowrap transition-all duration-300"
              style={{
                fontFamily: 'var(--pj-font-display)',
                background: selectedPreset === i ? 'var(--pj-crimson)' : 'var(--pj-surface-1)',
                color: selectedPreset === i ? 'white' : 'var(--pj-text-tertiary)',
                border: `1px solid ${selectedPreset === i ? 'transparent' : 'var(--pj-border)'}`,
                boxShadow: selectedPreset === i ? '0 4px 16px rgba(196,30,58,0.3)' : 'none',
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedPreset(i)}
              data-testid={`button-preset-${preset.label.toLowerCase()}`}
            >
              <preset.Icon size={13} strokeWidth={2} />
              {preset.label}
            </motion.button>
          ))}
        </div>

        <div className="flex items-center justify-center py-4">
          <motion.button
            className="relative flex items-center justify-center"
            style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: 'var(--pj-crimson)',
              boxShadow: isRecording
                ? '0 0 50px rgba(196,30,58,0.5)'
                : '0 0 24px rgba(196,30,58,0.3)',
            }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleRecording}
            data-testid="button-record"
            animate={isRecording ? {
              boxShadow: ['0 0 30px rgba(196,30,58,0.3)', '0 0 60px rgba(196,30,58,0.6)', '0 0 30px rgba(196,30,58,0.3)'],
            } : {}}
            transition={isRecording ? { duration: 1, repeat: Infinity } : {}}
          >
            {isRecording && (
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ border: '3px solid rgba(196,30,58,0.3)' }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
            <div className="relative z-10 flex flex-col items-center">
              {isRecording ? (
                <>
                  <Square size={20} fill="white" className="text-white" />
                  <span
                    className="text-[10px] font-bold text-white mt-1 pj-number-mono"
                    style={{ fontFamily: 'var(--pj-font-display)' }}
                  >
                    {formatTime(seconds)}
                  </span>
                </>
              ) : (
                <span
                  className="text-[11px] font-bold text-white"
                  style={{ fontFamily: 'var(--pj-font-display)', letterSpacing: '0.05em' }}
                >
                  START
                </span>
              )}
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
