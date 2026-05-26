"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingDown, Zap } from "lucide-react";
import { verticals } from "@/data/diagnosticsData";

export default function DiagnosticsTeaser() {
  const previewVertical = verticals[0];
  const previewProblems = previewVertical.problems.slice(0, 3);
  const totalMonthlyLoss = previewProblems.reduce((sum, p) => sum + p.monthlyImpact, 0);

  return (
    <section className="py-12 md:py-16 bg-[#0a0a0c] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-400 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c4ff4d] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c4ff4d]"></span>
            </span>
            AI-Powered Business Intelligence
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Run a free <span className="text-[#c4ff4d]">60-second business diagnostic</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
            Four free tools — Industry Scan, Growth Simulator, AI Workforce Designer, Cortex Business Intelligence Scan — for Malta operators who want a fast read on revenue leakage.
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs text-zinc-500 mb-1">Live Analysis: {previewVertical.name}</p>
              <div className="flex items-center gap-2">
                <TrendingDown className="h-4 w-4 text-red-400" />
                <span className="text-xl md:text-2xl font-bold text-red-400">
                  {new Intl.NumberFormat("en-EU", {
                    style: "currency",
                    currency: "EUR",
                    maximumFractionDigits: 0,
                  }).format(totalMonthlyLoss)}/mo
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3">
              {verticals.slice(0, 5).map((v) => (
                <div 
                  key={v.id} 
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-lg"
                  title={v.name}
                >
                  {v.icon}
                </div>
              ))}
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs text-zinc-400">
                +{verticals.length - 5}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {previewProblems.map((problem, i) => (
              <m.div
                key={problem.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-4 rounded-xl bg-black/30 border border-white/5 hover:border-white/20 transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">
                    Issue #{i + 1}
                  </span>
                  <span className="text-xs text-red-400 font-semibold">
                    -€{(problem.monthlyImpact / 1000).toFixed(1)}K
                  </span>
                </div>
                <h4 className="font-semibold text-white text-sm mb-2">{problem.title}</h4>
                <div className="flex items-center gap-1.5 text-[10px] text-[#c4ff4d]">
                  <Zap className="h-3 w-3" />
                  <span>{problem.solutions.length} solutions</span>
                </div>
              </m.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <p className="text-xs text-zinc-500">
              Analyzing {verticals.reduce((sum, v) => sum + v.problems.length, 0)}+ issues across {verticals.length} industries
            </p>
            <Link href="/diagnostics">
              <button 
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#c4ff4d] text-black text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-[#c4ff4d]/25 transition-all"
                data-testid="button-diagnostics-cta"
              >
                See Your Industry
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </Link>
          </div>
        </m.div>
      </div>
    </section>
  );
}
