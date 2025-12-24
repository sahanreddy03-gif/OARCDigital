import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { AnalysisResult } from "./analysisEngine";

interface StrategyTerminalProps {
  analysisResult: AnalysisResult;
  onComplete: () => void;
}

export default function StrategyTerminal({ analysisResult, onComplete }: StrategyTerminalProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const terminalSequence = [
    `[CORTEX] Sector identified: ${analysisResult.detectedSector?.name || "General Business"}`,
    `[CORTEX] Confidence Score: ${analysisResult.confidenceScore}%`,
    `[CORTEX] Keywords matched: ${analysisResult.matchedKeywords.join(", ") || "N/A"}`,
    ``,
    `[ANALYSIS] Running blind spot detection...`,
    ...analysisResult.blindSpots.map(bs => `[ALERT] ${bs.riskLevel}: ${bs.title}`),
    ``,
    `[STRATEGY] Compiling tactical recommendations...`,
    ...analysisResult.tactics.map(t => `[TACTIC] ${t.impact} IMPACT: ${t.name}`),
    ``,
    `[CORTEX] Analysis complete. Generating visual report...`,
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < terminalSequence.length) {
        setLogs(prev => [...prev, terminalSequence[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="bg-black rounded-lg border border-white/10 overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-4 text-xs text-zinc-500 font-mono">OARC_CORTEX_TERMINAL</span>
        </div>

        {/* Terminal Body */}
        <div
          ref={containerRef}
          className="p-4 h-[400px] overflow-y-auto font-mono text-sm space-y-1 scrollbar-thin scrollbar-thumb-zinc-800"
        >
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`${
                log.includes("[ALERT]") 
                  ? "text-red-400" 
                  : log.includes("[TACTIC]") 
                  ? "text-green-400" 
                  : log.includes("[CORTEX]")
                  ? "text-cyan-400"
                  : "text-zinc-400"
              }`}
            >
              {log || <span>&nbsp;</span>}
            </motion.div>
          ))}
          <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
