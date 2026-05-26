"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, Clock, Lightbulb, Brain, Shield, TrendingUp, Zap, BarChart3 } from "lucide-react";
import { verticals, calculateTotalImpact, type Problem } from "@/data/diagnosticsData";
import Layout from "@/components/layout/Layout";
export default function PageContent() {
  const [selectedVertical, setSelectedVertical] = useState(verticals[0].id);
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  const vertical = verticals.find((v) => v.id === selectedVertical)!;
  const totalImpact = calculateTotalImpact(vertical.problems);

  return (
    <Layout>
      
      <div className="min-h-screen bg-[#0a0a0c] relative">
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <main className="relative z-10 container mx-auto px-6 py-8 md:py-12">
          <m.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                What should you fix <span className="text-[#c4ff4d]">right now</span>?
              </h1>
              <p className="text-lg text-zinc-400">
                Select your industry. Get instant answers backed by data and behavioral science.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {verticals.map((v, i) => (
                <m.button
                  key={v.id}
                  onClick={() => {
                    setSelectedVertical(v.id);
                    setSelectedProblem(null);
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`
                    flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-medium transition-all
                    ${selectedVertical === v.id
                      ? "bg-[#c4ff4d] text-black shadow-xl shadow-[#c4ff4d]/30 scale-105"
                      : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-105"
                    }
                  `}
                  data-testid={`button-industry-${v.id}`}
                >
                  <span className="text-xl">{v.icon}</span>
                  <span>{v.name}</span>
                </m.button>
              ))}
            </div>
          </m.div>

          <div className="max-w-5xl mx-auto">
            <m.div 
              className="mb-8 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-sm text-zinc-400 mb-1">Your {vertical.name} business is losing</p>
                  <p className="text-4xl font-bold text-red-400">
                    {new Intl.NumberFormat("en-EU", {
                      style: "currency",
                      currency: "EUR",
                      maximumFractionDigits: 0,
                    }).format(totalImpact)}
                    <span className="text-xl text-zinc-500 font-normal">/month</span>
                  </p>
                </div>
                <div className="flex items-center gap-6 text-center">
                  <div>
                    <p className="text-3xl font-bold text-[#c4ff4d]">{vertical.problems.length}</p>
                    <p className="text-xs text-zinc-500">issues identified</p>
                  </div>
                  <div className="h-10 w-px bg-white/10" />
                  <div>
                    <p className="text-3xl font-bold text-[#c4ff4d]">
                      {vertical.problems.reduce((sum, p) => sum + p.solutions.length, 0)}
                    </p>
                    <p className="text-xs text-zinc-500">solutions ready</p>
                  </div>
                </div>
              </div>
            </m.div>

            <m.div 
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-2 text-white">Your Priority Actions</h2>
              <p className="text-zinc-400">Click any issue to see why it's happening and how to fix it</p>
            </m.div>

            <div className="space-y-4 mb-12">
              {vertical.problems.map((problem, index) => (
                <m.button
                  key={problem.id}
                  onClick={() => setSelectedProblem(selectedProblem?.id === problem.id ? null : problem)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className={`
                    w-full text-left bg-white/5 border rounded-2xl p-6 transition-all group relative overflow-hidden
                    ${selectedProblem?.id === problem.id 
                      ? "border-[#c4ff4d]/50 bg-white/10 shadow-xl" 
                      : "border-white/10 hover:bg-white/10 hover:shadow-lg hover:scale-[1.01]"
                    }
                  `}
                  data-testid={`button-problem-${problem.id}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c4ff4d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#c4ff4d]/10 text-[#c4ff4d] text-sm font-bold flex items-center justify-center group-hover:bg-[#c4ff4d] group-hover:text-black transition-colors">
                            {index + 1}
                          </span>
                          <h3 className="font-bold text-xl text-white">{problem.title}</h3>
                        </div>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                          {selectedProblem?.id === problem.id ? problem.insight : problem.insight.slice(0, 140) + "..."}
                        </p>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <p className="text-2xl font-bold text-red-400">
                          {new Intl.NumberFormat("en-EU", {
                            style: "currency",
                            currency: "EUR",
                            maximumFractionDigits: 0,
                          }).format(problem.monthlyImpact)}
                        </p>
                        <p className="text-xs text-zinc-500 mt-1">lost monthly</p>
                      </div>
                    </div>

                    <AnimatePresence>
                      {selectedProblem?.id === problem.id && (
                        <m.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 pt-6 border-t border-white/10 space-y-6"
                        >
                          <div className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
                            <Brain className="h-5 w-5 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-2">
                                Why This Happens
                              </p>
                              <p className="text-sm text-zinc-300 leading-relaxed">{problem.psychology}</p>
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <Lightbulb className="h-5 w-5 text-[#c4ff4d]" />
                              <p className="text-sm font-semibold text-white">How to Fix It</p>
                            </div>
                            <div className="space-y-3">
                              {problem.solutions.map((solution, i) => (
                                <div
                                  key={i}
                                  className="flex items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#c4ff4d]/30 transition-all group/solution"
                                >
                                  <div className="flex items-center gap-3 min-w-0 flex-1">
                                    <ChevronRight className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 group-hover/solution:translate-x-0.5 transition-transform" />
                                    <span className="text-sm font-medium text-white">{solution.title}</span>
                                  </div>
                                  <div className="flex items-center gap-4 flex-shrink-0">
                                    <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                                      <Clock className="h-3.5 w-3.5" />
                                      {solution.timeframe}
                                    </div>
                                    <span className="text-xs font-semibold text-[#c4ff4d] px-2 py-1 rounded-md bg-[#c4ff4d]/10">
                                      {solution.impact}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </m.div>
                      )}
                    </AnimatePresence>
                  </div>
                </m.button>
              ))}
            </div>

            <m.div 
              className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-3 text-white">Ready to implement these solutions?</h3>
              <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
                Our 14-day pilot program delivers measurable results with your actual data. If we don't improve your
                operations, it's completely free.
              </p>
              <Link href="/contact">
                <button 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#c4ff4d] text-black font-semibold rounded-xl shadow-lg shadow-[#c4ff4d]/25 hover:shadow-[#c4ff4d]/40 transition-all"
                  data-testid="button-start-pilot"
                >
                  Start Your 14-Day Pilot
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </m.div>
          </div>
        </main>

        <section className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Built for decision-makers who need answers, not dashboards
                </h2>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                  OARC transforms complex operational data into actionable intelligence. Every insight is backed by
                  behavioral economics and validated with real numbers.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#c4ff4d]/10 flex items-center justify-center mx-auto">
                    <BarChart3 className="h-8 w-8 text-[#c4ff4d]" />
                  </div>
                  <h3 className="font-bold text-xl text-white">Real-Time Diagnostics</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Continuous monitoring of 50+ operational metrics across your business. Instant alerts when
                    inefficiencies emerge.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#c4ff4d]/10 flex items-center justify-center mx-auto">
                    <Zap className="h-8 w-8 text-[#c4ff4d]" />
                  </div>
                  <h3 className="font-bold text-xl text-white">Psychology-Backed Solutions</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Not just what's broken, but why. Every problem includes behavioral analysis and proven intervention
                    strategies.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#c4ff4d]/10 flex items-center justify-center mx-auto">
                    <Shield className="h-8 w-8 text-[#c4ff4d]" />
                  </div>
                  <h3 className="font-bold text-xl text-white">Guaranteed Results</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    14-day pilot with measurable KPIs. If we don't deliver documented improvements, the pilot is
                    completely free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
