import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LivePulse from '../components/LivePulse';

const presets = [
  { icon: '📱', label: 'TikTok', duration: '15-60s', aspect: '9:16' },
  { icon: '▶️', label: 'Shorts', duration: '<60s', aspect: '9:16' },
  { icon: '📸', label: 'Story', duration: '15s', aspect: '9:16' },
  { icon: '📰', label: 'Feed', duration: '30-90s', aspect: '4:5' },
  { icon: '🔴', label: 'Live', duration: '∞', aspect: '9:16' },
  { icon: '📹', label: 'Vibe Cam', duration: 'Loop', aspect: '1:1' },
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
    <div className="min-h-screen flex flex-col" style={{ background: '#0D0D0F' }}>
      <div className="relative flex-1" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #111, #0a0a0a)' }}>
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  [i < 2 ? 'left' : 'right']: i % 2 === 0 ? '33.33%' : '66.66%',
                  top: 0,
                  bottom: 0,
                  width: 1,
                  background: 'rgba(255,255,255,0.08)',
                }}
              />
            ))}
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={`h${i}`}
                className="absolute"
                style={{
                  top: i === 0 ? '33.33%' : '66.66%',
                  left: 0,
                  right: 0,
                  height: 1,
                  background: 'rgba(255,255,255,0.08)',
                }}
              />
            ))}
          </div>

          {!isRecording && !showSaved && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl opacity-10">📷</span>
            </div>
          )}
        </div>

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <AnimatePresence>
            {isRecording && (
              <motion.div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(224,90,58,0.9)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <LivePulse size={6} color="#fff" />
                <span className="text-[11px] font-bold text-white">REC</span>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="ml-auto px-3 py-1 rounded-full text-[10px] font-medium text-white/40" style={{ background: 'rgba(0,0,0,0.5)' }}>
            {presets[selectedPreset].aspect} • 30fps
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 z-10">
          <AnimatePresence>
            {!showSaved && (
              <motion.div
                className="pj-glass px-3 py-2 text-[10px] text-white/50 text-center"
                style={{ borderRadius: 100 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                💡 Hook in first 2 seconds
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {showSaved && (
            <motion.div
              className="absolute inset-0 z-20 flex flex-col items-center justify-center"
              style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="text-4xl mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                ✅
              </motion.div>
              <p className="text-lg font-black text-white mb-6">Video Saved!</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {platforms.map((p, i) => (
                  <motion.div
                    key={i}
                    className="px-3 py-1.5 rounded-full text-[11px] font-bold"
                    style={{ background: 'rgba(26,138,92,0.15)', color: '#1A8A5C' }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                  >
                    ✓ {p}
                  </motion.div>
                ))}
              </div>
              <motion.button
                className="mt-6 pj-gold-btn px-8 py-3 rounded-2xl text-sm font-bold text-white"
                whileTap={{ scale: 0.96 }}
                onClick={() => setShowSaved(false)}
              >
                Record Another
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="px-5 py-4" style={{ background: '#0D0D0F' }}>
        <div className="flex gap-2 overflow-x-auto pb-4 pj-scrollbar-hide">
          {presets.map((preset, i) => (
            <motion.button
              key={i}
              className="flex-shrink-0 px-4 py-2 rounded-full text-[11px] font-bold whitespace-nowrap transition-all duration-200"
              style={{
                background: selectedPreset === i
                  ? 'linear-gradient(135deg, #C4941E, #D4A843)'
                  : 'rgba(255,255,255,0.05)',
                color: selectedPreset === i ? 'white' : 'rgba(255,255,255,0.4)',
                border: `1px solid ${selectedPreset === i ? 'transparent' : 'rgba(255,255,255,0.08)'}`,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedPreset(i)}
              data-testid={`button-preset-${preset.label.toLowerCase()}`}
            >
              {preset.icon} {preset.label} ({preset.duration})
            </motion.button>
          ))}
        </div>

        <div className="flex items-center justify-center py-4">
          <motion.button
            className="relative w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              background: isRecording
                ? '#E05A3A'
                : 'linear-gradient(135deg, #C4941E, #D4A843)',
              boxShadow: isRecording
                ? '0 0 40px rgba(224,90,58,0.4)'
                : '0 0 40px rgba(196,148,30,0.3)',
            }}
            whileTap={{ scale: 0.92 }}
            onClick={toggleRecording}
            data-testid="button-record"
          >
            {isRecording && (
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ border: '3px solid rgba(224,90,58,0.5)' }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
            <div className="relative z-10 flex flex-col items-center">
              {isRecording ? (
                <>
                  <div className="w-5 h-5 rounded-sm bg-white" />
                  <span className="text-[10px] font-bold text-white mt-1">{formatTime(seconds)}</span>
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
