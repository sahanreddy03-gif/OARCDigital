import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ScannerOverlayProps {
  inputData: { type: string; value: string };
  onComplete: () => void;
}

const scanLogs = [
  "OARC CORTEX v3.7.2 initializing...",
  "Establishing secure neural link...",
  "Loading sector intelligence modules...",
  "Parsing input vectors...",
  "Cross-referencing industry benchmarks...",
  "Identifying anomaly patterns...",
  "Calculating revenue leak signatures...",
  "Mapping strategic blind spots...",
  "Generating tactical recommendations...",
  "Compiling executive dossier...",
  "Scan complete. Rendering results.",
];

export default function ScannerOverlay({ inputData, onComplete }: ScannerOverlayProps) {
  const [progress, setProgress] = useState(0);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [displayedLogs, setDisplayedLogs] = useState<string[]>([]);

  useEffect(() => {
    const totalDuration = 4000;
    const interval = totalDuration / scanLogs.length;
    
    const timer = setInterval(() => {
      setCurrentLogIndex(prev => {
        if (prev < scanLogs.length - 1) {
          setDisplayedLogs(logs => [...logs, scanLogs[prev]]);
          setProgress(((prev + 1) / scanLogs.length) * 100);
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return prev;
        }
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-8"
    >
      {/* Scanning Animation Circle */}
      <div className="relative w-48 h-48 mb-8">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(6, 182, 212, 0.2)"
            strokeWidth="2"
            fill="none"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="#06b6d4"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={283}
            strokeDashoffset={283 - (283 * progress) / 100}
            style={{ filter: "drop-shadow(0 0 8px #06b6d4)" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-cyan-400 font-mono" data-testid="text-scan-progress">{Math.round(progress)}%</span>
          <span className="text-xs text-zinc-500 uppercase tracking-widest">Scanning</span>
        </div>
      </div>

      {/* Log Output */}
      <div className="w-full max-w-lg h-48 bg-zinc-900/50 rounded-lg border border-white/10 p-4 overflow-hidden font-mono text-sm">
        <div className="space-y-1">
          {displayedLogs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-cyan-400/80"
            >
              <span className="text-zinc-600">{">"}</span> {log}
            </motion.div>
          ))}
          <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse" />
        </div>
      </div>

      {/* Scanning Target Info */}
      <p className="mt-6 text-zinc-500 text-sm">
        Analyzing: <span className="text-zinc-300">{inputData.type === "url" ? inputData.value : "User-provided context"}</span>
      </p>
    </motion.div>
  );
}
