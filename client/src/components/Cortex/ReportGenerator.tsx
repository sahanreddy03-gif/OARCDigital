import { motion } from "framer-motion";
import { AlertTriangle, Zap, TrendingUp, Target, ArrowRight, CheckCircle2 } from "lucide-react";
import { AnalysisResult } from "./analysisEngine";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ReportGeneratorProps {
  analysisResult: AnalysisResult;
  onReset: () => void;
}

export default function ReportGenerator({ analysisResult, onReset }: ReportGeneratorProps) {
  const { detectedSector, blindSpots, tactics, confidenceScore } = analysisResult;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto p-6 space-y-8"
    >
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-950/50 border border-green-800/50 text-green-400 text-xs font-medium mb-4">
          <CheckCircle2 className="w-3 h-3" /> ANALYSIS COMPLETE
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Strategic Intelligence Report
        </h2>
        <p className="text-zinc-400 mt-2">
          Sector: <span className="text-cyan-400 font-medium">{detectedSector?.name}</span> | 
          Confidence: <span className="text-cyan-400 font-medium">{confidenceScore}%</span>
        </p>
      </div>

      {/* Benchmarks */}
      {detectedSector && (
        <Card className="bg-zinc-900/50 border-white/10 p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-cyan-400" /> Industry Benchmarks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-black/40 rounded-lg border border-white/5">
              <p className="text-xs text-zinc-500 uppercase">Conversion Rate</p>
              <p className="text-xl font-mono font-bold text-white">{detectedSector.benchmarks.conversionRate}</p>
            </div>
            <div className="p-4 bg-black/40 rounded-lg border border-white/5">
              <p className="text-xs text-zinc-500 uppercase">Customer Acquisition Cost</p>
              <p className="text-xl font-mono font-bold text-white">{detectedSector.benchmarks.customerAcquisitionCost}</p>
            </div>
            <div className="p-4 bg-black/40 rounded-lg border border-white/5">
              <p className="text-xs text-zinc-500 uppercase">Retention Rate</p>
              <p className="text-xl font-mono font-bold text-white">{detectedSector.benchmarks.retentionRate}</p>
            </div>
          </div>
        </Card>
      )}

      {/* Blind Spots */}
      <Card className="bg-red-950/20 border-red-800/30 p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-400" /> Critical Blind Spots Detected
        </h3>
        <div className="space-y-4">
          {blindSpots.map((bs) => (
            <div key={bs.id} className="p-4 bg-black/30 rounded-lg border border-red-900/30">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                  bs.riskLevel === "CRITICAL" ? "bg-red-500/20 text-red-400" : "bg-yellow-500/20 text-yellow-400"
                }`}>
                  {bs.riskLevel}
                </span>
                <h4 className="font-semibold text-white">{bs.title}</h4>
              </div>
              <p className="text-sm text-zinc-400">{bs.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Recommended Tactics */}
      <Card className="bg-cyan-950/20 border-cyan-800/30 p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-cyan-400" /> Recommended AI Tactics
        </h3>
        <div className="space-y-4">
          {tactics.map((t) => (
            <div key={t.id} className="p-4 bg-black/30 rounded-lg border border-cyan-900/30">
              <div className="flex items-center gap-2 mb-1">
                <Target className="w-4 h-4 text-cyan-400" />
                <h4 className="font-semibold text-white">{t.name}</h4>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 ml-auto">
                  {t.impact} IMPACT
                </span>
              </div>
              <p className="text-sm text-zinc-400">{t.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <Button
          size="lg"
          data-testid="button-strategy-call"
          className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500"
        >
          Get a Custom Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        <Button variant="outline" size="lg" onClick={onReset} data-testid="button-run-again" className="border-white/10 text-zinc-300 hover:bg-white/5">
          Run Another Scan
        </Button>
      </div>
    </motion.div>
  );
}
