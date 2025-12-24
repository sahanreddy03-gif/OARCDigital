import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import InputHub from "./InputHub";
import ScannerOverlay from "./ScannerOverlay";
import StrategyTerminal from "./StrategyTerminal";
import ReportGenerator from "./ReportGenerator";
import { analyzeInput, AnalysisResult } from "./analysisEngine";

type Stage = "idle" | "scanning" | "terminal" | "results";

export default function CortexContainer() {
  const [stage, setStage] = useState<Stage>("idle");
  const [inputData, setInputData] = useState<{ type: string; value: string } | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const handleInputSubmit = (data: { type: string; value: string }) => {
    setInputData(data);
    setStage("scanning");
  };

  const handleScanComplete = () => {
    if (inputData) {
      const result = analyzeInput(inputData.value);
      setAnalysisResult(result);
      setStage("terminal");
    }
  };

  const handleTerminalComplete = () => {
    setStage("results");
  };

  const handleReset = () => {
    setStage("idle");
    setInputData(null);
    setAnalysisResult(null);
  };

  return (
    <div className="min-h-[600px] bg-[#0a0a0c] text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-black" />

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {stage === "idle" && (
            <InputHub key="input" onSubmit={handleInputSubmit} />
          )}

          {stage === "scanning" && inputData && (
            <ScannerOverlay
              key="scanner"
              inputData={inputData}
              onComplete={handleScanComplete}
            />
          )}

          {stage === "terminal" && analysisResult && (
            <StrategyTerminal
              key="terminal"
              analysisResult={analysisResult}
              onComplete={handleTerminalComplete}
            />
          )}

          {stage === "results" && analysisResult && (
            <ReportGenerator
              key="report"
              analysisResult={analysisResult}
              onReset={handleReset}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
