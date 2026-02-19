import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, Square, Camera, Smartphone, Film, Radio, Tv, Check, Flame } from 'lucide-react';
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
    <div className="min-h-screen flex flex-col" style={{ background: '#080808' }}>
      <div className="relative flex-1" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0" style={{ background: 'var(--pj-surface)' }}>
          <div className="absolute inset-0">
            {[33.33, 66.66].map((pos, i) => (
              <div key={`v${i}`} className="absolute top-0 bottom-0" style={{ left: `${pos}%`, width: 1, background: 'var(--pj-border)' }} />
            ))}
            {[33.33, 66.66].map((pos, i) => (
              <div key={`h${i}`} className="absolute left-0 right-0" style={{ top: `${pos}%`, height: 1, background: 'var(--pj-border)' }} />
            ))}
          </div>

          {!isRecording && !showSaved && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Camera size={60} style={{ color: 'var(--pj-red)', opacity: 0.06 }} />
            </div>
          )}
        </div>

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <AnimatePresence>
            {isRecording && (
              <motion.div
                className="pj-live-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <LivePulse size={6} color="#fff" />
                <span className="text-[11px] font-bold text-white">REC</span>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="ml-auto px-3 py-1 rounded-full text-[10px] font-medium" style={{ background: 'var(--pj-surface)', color: 'var(--pj-text-tertiary)', border: '1px solid var(--pj-border)' }}>
            {presets[selectedPreset].aspect} · 30fps
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 z-10">
          <AnimatePresence>
            {!showSaved && !isRecording && (
              <motion.div
                className="pj-card px-4 py-2.5 text-[11px] text-center font-medium"
                style={{ color: 'var(--pj-text-tertiary)' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <Flame size={12} className="inline mr-1.5" style={{ color: 'var(--pj-red)' }} />
                Hook in first 2 seconds
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {showSaved && (
            <motion.div
              className="absolute inset-0 z-20 flex flex-col items-center justify-center"
              style={{ background: 'rgba(8,8,8,0.85)', backdropFilter: 'blur(16px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ background: 'var(--pj-red-subtle)', border: '2px solid var(--pj-red)' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <Check size={28} style={{ color: 'var(--pj-red)' }} />
              </motion.div>
              <p className="text-lg font-black text-white mb-5">Video Saved!</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {platforms.map((p, i) => (
                  <motion.div
                    key={i}
                    className="px-3 py-1.5 rounded-full text-[11px] font-bold"
                    style={{ background: 'rgba(26,138,92,0.1)', border: '1px solid rgba(26,138,92,0.15)', color: '#1A8A5C' }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.12 }}
                  >
                    <Check size={10} className="inline mr-1" /> {p}
                  </motion.div>
                ))}
              </div>
              <motion.button
                className="mt-6 pj-btn-primary px-8 py-3 text-sm font-bold"
                whileTap={{ scale: 0.96 }}
                onClick={() => setShowSaved(false)}
              >
                Record Another
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="px-5 py-4" style={{ background: '#080808', borderTop: '1px solid var(--pj-border)' }}>
        <div className="flex gap-2 overflow-x-auto pb-4 pj-scrollbar-hide">
          {presets.map((preset, i) => (
            <motion.button
              key={i}
              className="flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[11px] font-bold whitespace-nowrap transition-all duration-200"
              style={{
                background: selectedPreset === i ? 'var(--pj-red)' : 'var(--pj-surface)',
                color: selectedPreset === i ? 'white' : 'var(--pj-text-tertiary)',
                border: `1px solid ${selectedPreset === i ? 'transparent' : 'var(--pj-border)'}`,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedPreset(i)}
              data-testid={`button-preset-${preset.label.toLowerCase()}`}
            >
              <preset.Icon size={13} />
              {preset.label}
            </motion.button>
          ))}
        </div>

        <div className="flex items-center justify-center py-4">
          <motion.button
            className="relative w-18 h-18 rounded-full flex items-center justify-center"
            style={{
              width: 72,
              height: 72,
              background: isRecording ? 'var(--pj-red)' : 'var(--pj-red)',
              boxShadow: `0 0 ${isRecording ? '40px' : '20px'} var(--pj-red-glow)`,
            }}
            whileTap={{ scale: 0.92 }}
            onClick={toggleRecording}
            data-testid="button-record"
          >
            {isRecording && (
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ border: '3px solid rgba(224,90,58,0.4)' }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
            <div className="relative z-10 flex flex-col items-center">
              {isRecording ? (
                <>
                  <Square size={20} fill="white" className="text-white" />
                  <span className="text-[10px] font-bold text-white mt-1 pj-number-mono">{formatTime(seconds)}</span>
                </>
              ) : (
                <span className="text-[11px] font-black text-white">START</span>
              )}
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
