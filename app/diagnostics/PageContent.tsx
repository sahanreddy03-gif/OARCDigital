"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Clock,
  Lightbulb,
  Brain,
  TrendingDown,
  Activity,
  Users2,
  Search,
  ScanLine,
  Eye,
  EyeOff,
  Sparkles,
  Building2,
} from "lucide-react";
import { verticals, calculateTotalImpact, type Problem } from "@/data/diagnosticsData";
import Layout from "@/components/layout/Layout";
import EmailGate from "@/components/diagnostics/EmailGate";
import GrowthSimulator from "@/components/GrowthSimulator";
import CortexContainer from "@/components/Cortex/CortexContainer";
import RouteSchema from "@/components/RouteSchema";
import { NAP } from "@/lib/seo/nap";

type ToolId = "industry-scan" | "growth-simulator" | "workforce-designer" | "intelligence-scan";

interface ToolDef {
  id: ToolId;
  name: string;
  tag: string;
  icon: typeof Activity;
  blurb: string;
  body: string;
  useFor: string[];
  fullReportRows: number;
}

const TOOLS: ToolDef[] = [
  {
    id: "industry-scan",
    name: "Industry Scan",
    tag: "60-second diagnostic",
    icon: Search,
    blurb:
      "Pick your industry. See the top revenue leaks, the psychology behind them, and the fixes ranked by payback time.",
    body:
      "The Industry Scan compresses 18 months of OARC client work into a single click per vertical. We profile eight Malta-heavy industries — restaurants, hotels, retail, professional services, fitness, beauty, healthcare clinics, and B2B SaaS — and surface the five issues most likely to be quietly bleeding margin every month. Each issue carries a euro figure tied to a Malta SME baseline (turnover under five million, 3 to 25 staff), the behavioural reason it keeps happening, and three fixes ranked by payback window.",
    useFor: [
      "Owners who want a fast read on where to look first",
      "Operators benchmarking against the rest of the vertical",
      "Founders preparing a board update or investor brief",
    ],
    fullReportRows: 12,
  },
  {
    id: "growth-simulator",
    name: "Growth Simulator",
    tag: "12-month projection",
    icon: TrendingDown,
    blurb:
      "Model what an AI workforce does to your revenue line over twelve months. Add agents, watch the curve, see the ROI.",
    body:
      "The Growth Simulator is the same projection model we run live in pilot calls. Pick the agents you would deploy — sales, content, support, data — and the simulator plots monthly revenue against a traditional human-only baseline across a twelve-month horizon. Cost, revenue contribution, and ROI multiplier update on every change. The point is not the exact number on month nine. The point is the shape of the curve, and where the AI line breaks away from the linear human line.",
    useFor: [
      "Building the business case for an AI deployment",
      "Stress-testing a quarterly revenue plan",
      "Comparing two staffing scenarios side-by-side",
    ],
    fullReportRows: 8,
  },
  {
    id: "workforce-designer",
    name: "AI Workforce Designer",
    tag: "Hiring plan, no payroll",
    icon: Users2,
    blurb:
      "Design the AI team you would hire if you could. Sales, content, support, ops — see who pays for themselves first.",
    body:
      "The Workforce Designer reuses the simulator engine but reframes the question. Instead of starting with a revenue target, you start with an org chart. What does your team look like today? Where are the bottlenecks — outbound, qualifying, support tickets, recurring reports? You add AI agents to the chart, and the designer prices the deployment, estimates the human hours displaced per week, and shows the order in which each agent crosses break-even.",
    useFor: [
      "COOs sizing an AI rollout against a hiring freeze",
      "Founders pricing a new function before signing a lease",
      "Heads of revenue rebuilding a sales floor",
    ],
    fullReportRows: 10,
  },
  {
    id: "intelligence-scan",
    name: "Business Intelligence Scan",
    tag: "Cortex engine",
    icon: ScanLine,
    blurb:
      "Paste a URL or describe your business. Cortex returns a strategic read on your funnel, positioning, and biggest opportunity.",
    body:
      "The Business Intelligence Scan runs the OARC Cortex engine against the context you provide — either a website URL or a few sentences about how the business operates. Cortex pulls signals on positioning, audience, channel mix, and likely friction points, then produces a one-page strategic read with three priority actions ranked by impact. The free version gives you the headline read; the full report includes the supporting evidence, a competitor comparison, and a 90-day implementation outline.",
    useFor: [
      "Owners who already have a website and want a second opinion",
      "Marketing leads building the next quarterly plan",
      "Investors doing a quick read on a portfolio company",
    ],
    fullReportRows: 14,
  },
];

const FAQS = [
  {
    question: "Is the diagnostics hub really free?",
    answer:
      `Yes. The four tools — Industry Scan, Growth Simulator, AI Workforce Designer, and the Cortex Business Intelligence Scan — are free with no credit card. We show the headline result on screen, then offer a full PDF workbook in exchange for a work email so we can route the report and follow up if you want a human conversation. You can run every tool without ever giving us your address.`,
  },
  {
    question: "How is /diagnostics different from /tools?",
    answer:
      `Two different shelves. /tools lists the third-party stack OARC uses internally — Clay, Instantly, Midjourney, Figma, n8n, the lot — so prospects can see what they would inherit when they hire us. /diagnostics is the opposite direction: free interactive tools you can run on your own business, right now, without hiring anyone. Tools we use vs free tools you can use.`,
  },
  {
    question: "Where do the euro figures come from?",
    answer:
      `Each industry baseline is anchored to OARC's working sample of Malta SMEs (turnover under EUR 5M, 3 to 25 staff). The figures reflect what we have measured in pilots and discovery calls — recovered no-show revenue, avoided churn, hours of admin reclaimed — and are deliberately conservative. If your business is materially larger or smaller, treat the numbers as directional rather than precise.`,
  },
  {
    question: "What happens to my data after I run a scan?",
    answer:
      `Inputs to the Cortex Business Intelligence Scan are processed in EU-resident infrastructure (Frankfurt or Dublin) and discarded after the report is generated. Email addresses captured at the gate are stored in the OARC CRM and used for one report email plus an optional human follow-up if you flagged interest. We never resell or trade lead data — IDPC and GDPR rules apply across the board.`,
  },
  {
    question: "Can I share these reports with my team?",
    answer:
      `Yes. The full PDF workbook is licensed for internal use — share it with your operating team, board, or co-founders without restriction. Republication on a third-party site needs written permission. Most teams print one copy, mark it up in a working session, and use it as the input to the next quarterly plan.`,
  },
  {
    question: "Do I have to talk to a salesperson after I download a report?",
    answer:
      `No. We send the report once. There is no sequence of follow-up emails, no SDR queue, nothing. If you want a human conversation, the report includes a calendar link and our WhatsApp number; if you do not, you do not hear from us again. We measured the alternative and the friction was costing more than the leads were worth.`,
  },
  {
    question: "How long does each tool take to run?",
    answer:
      `Industry Scan and the Cortex Business Intelligence Scan both clear in under sixty seconds. The Growth Simulator and AI Workforce Designer are interactive — most people spend five to ten minutes adding agents, removing them, and watching the curve change. There is no save state; if you close the tab, you start fresh, which is intentional.`,
  },
  {
    question: "What if my industry is not in the Industry Scan?",
    answer:
      `The eight verticals cover roughly 80% of the Malta SME book we have worked with. If you are in a vertical we do not list — construction, marine services, education, agritech, regulated betting — run the Cortex Business Intelligence Scan instead and paste your URL. The Cortex engine builds the diagnostic from your actual business rather than a vertical baseline, so it works on anything that has a website.`,
  },
];

export default function PageContent() {
  const [activeTool, setActiveTool] = useState<ToolId>("industry-scan");
  const [unlockedTools, setUnlockedTools] = useState<Set<ToolId>>(new Set());
  const [selectedVertical, setSelectedVertical] = useState(verticals[0].id);
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const vertical = verticals.find((v) => v.id === selectedVertical)!;
  const totalImpact = calculateTotalImpact(vertical.problems);
  const PREVIEW_ROWS = 3;
  const visibleProblems = unlockedTools.has("industry-scan")
    ? vertical.problems
    : vertical.problems.slice(0, PREVIEW_ROWS);
  const hiddenCount = vertical.problems.length - visibleProblems.length;

  const tool = TOOLS.find((t) => t.id === activeTool)!;

  const markUnlocked = (id: ToolId) => {
    setUnlockedTools((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  return (
    <Layout>
      <RouteSchema
        type="service"
        path="/diagnostics"
        title="Free Business Diagnostics — Malta | OARC Digital"
        description="Four free tools — Industry Scan, Growth Simulator, AI Workforce Designer, and the Cortex Business Intelligence Scan — for Malta SMEs who want a fast read on where revenue is leaking and what to fix first."
        serviceType="Business Diagnostic"
        audience={["SME Malta"]}
        areaServed="Malta"
        faqs={FAQS}
      />

      <div className="min-h-screen bg-[#0a0a0c] relative">
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <main className="relative z-10 container mx-auto px-6 py-10 md:py-16">
          {/* HERO */}
          <motion.section
            className="max-w-4xl mx-auto text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            data-testid="section-diagnostics-hero"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-400 mb-5">
              <Sparkles className="h-3.5 w-3.5 text-[#c4ff4d]" />
              Free OARC Diagnostics Hub
            </div>
            <h1
              className="text-4xl md:text-6xl font-bold mb-5 text-white leading-tight"
              data-speakable
            >
              Find what is <span className="text-[#c4ff4d]">costing you</span> in 60 seconds.
            </h1>
            <p
              className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-6"
              data-speakable
            >
              Four free tools for Malta operators who want a real read on where revenue is leaking,
              where AI agents pay for themselves, and which fix to ship first. No login, no credit
              card, no SDR queue.
            </p>
            <p className="text-sm text-zinc-500 max-w-2xl mx-auto">
              Run any tool in your browser. The first three rows of every result are visible without
              an email. The full workbook — every issue, every fix, every euro figure — arrives in
              your inbox the moment you ask for it.
            </p>
          </motion.section>

          {/* TOOL CARDS */}
          <section className="max-w-6xl mx-auto mb-12" data-testid="section-tool-cards">
            <div className="grid md:grid-cols-2 gap-4">
              {TOOLS.map((t, i) => {
                const Icon = t.icon;
                const isActive = activeTool === t.id;
                return (
                  <motion.button
                    key={t.id}
                    onClick={() => {
                      setActiveTool(t.id);
                      setSelectedProblem(null);
                      if (typeof window !== "undefined") {
                        const el = document.getElementById("tool-stage");
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    data-testid={`button-tool-${t.id}`}
                    className={`text-left rounded-2xl border p-6 transition-all ${
                      isActive
                        ? "border-[#c4ff4d]/40 bg-[#c4ff4d]/5 shadow-xl"
                        : "border-white/10 bg-white/5 hover:bg-white/[0.07] hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                          isActive ? "bg-[#c4ff4d] text-black" : "bg-white/10 text-[#c4ff4d]"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                        {t.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{t.name}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-4">{t.blurb}</p>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#c4ff4d]">
                      {isActive ? "Loaded below" : "Open this tool"}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </section>

          {/* TOOL STAGE */}
          <section id="tool-stage" className="max-w-6xl mx-auto mb-16" data-testid="section-tool-stage">
            <div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-6 md:p-8 mb-6">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#c4ff4d]/10 flex items-center justify-center flex-shrink-0">
                  <tool.icon className="h-6 w-6 text-[#c4ff4d]" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#c4ff4d] mb-1">
                    {tool.tag}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" data-testid="text-active-tool-name">
                    {tool.name}
                  </h2>
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">{tool.body}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 mb-2">
                {tool.useFor.map((u, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-white/5 bg-black/30 p-3 text-xs text-zinc-300"
                  >
                    <span className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">
                      Good for
                    </span>
                    {u}
                  </div>
                ))}
              </div>
            </div>

            {/* INDUSTRY SCAN */}
            {activeTool === "industry-scan" && (
              <div className="space-y-6" data-testid="stage-industry-scan">
                <div className="flex flex-wrap justify-center gap-2">
                  {verticals.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => {
                        setSelectedVertical(v.id);
                        setSelectedProblem(null);
                      }}
                      data-testid={`button-industry-${v.id}`}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        selectedVertical === v.id
                          ? "bg-[#c4ff4d] text-black shadow-lg shadow-[#c4ff4d]/30"
                          : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                      }`}
                    >
                      <span className="text-base">{v.icon}</span>
                      <span>{v.name}</span>
                    </button>
                  ))}
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-2">
                    <div>
                      <p className="text-sm text-zinc-400 mb-1">
                        Estimated monthly leakage — {vertical.name}
                      </p>
                      <p className="text-4xl font-bold text-red-400" data-testid="text-monthly-leakage">
                        {new Intl.NumberFormat("en-EU", {
                          style: "currency",
                          currency: "EUR",
                          maximumFractionDigits: 0,
                        }).format(totalImpact)}
                        <span className="text-xl text-zinc-500 font-normal">/mo</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-6 text-center">
                      <div>
                        <p className="text-3xl font-bold text-[#c4ff4d]">
                          {vertical.problems.length}
                        </p>
                        <p className="text-xs text-zinc-500">issues identified</p>
                      </div>
                      <div className="h-10 w-px bg-white/10" />
                      <div>
                        <p className="text-3xl font-bold text-[#c4ff4d]">
                          {vertical.problems.reduce((s, p) => s + p.solutions.length, 0)}
                        </p>
                        <p className="text-xs text-zinc-500">fixes ready</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {visibleProblems.map((problem, index) => (
                    <button
                      key={problem.id}
                      onClick={() =>
                        setSelectedProblem(selectedProblem?.id === problem.id ? null : problem)
                      }
                      data-testid={`button-problem-${problem.id}`}
                      className={`w-full text-left rounded-2xl border p-5 transition-all ${
                        selectedProblem?.id === problem.id
                          ? "border-[#c4ff4d]/40 bg-white/10"
                          : "border-white/10 bg-white/5 hover:bg-white/[0.07]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="w-7 h-7 rounded-lg bg-[#c4ff4d]/10 text-[#c4ff4d] text-xs font-bold flex items-center justify-center">
                              {index + 1}
                            </span>
                            <h3 className="font-bold text-lg text-white">{problem.title}</h3>
                          </div>
                          <p className="text-sm text-zinc-400 leading-relaxed">
                            {selectedProblem?.id === problem.id
                              ? problem.insight
                              : problem.insight.slice(0, 120) + "…"}
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-xl font-bold text-red-400">
                            {new Intl.NumberFormat("en-EU", {
                              style: "currency",
                              currency: "EUR",
                              maximumFractionDigits: 0,
                            }).format(problem.monthlyImpact)}
                          </p>
                          <p className="text-[10px] text-zinc-500 mt-0.5">lost monthly</p>
                        </div>
                      </div>

                      <AnimatePresence>
                        {selectedProblem?.id === problem.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-5 pt-5 border-t border-white/10 space-y-4"
                          >
                            <div className="flex gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                              <Brain className="h-5 w-5 text-[#c4ff4d] flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold mb-1">
                                  Why it happens
                                </p>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                  {problem.psychology}
                                </p>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 mb-2">
                                <Lightbulb className="h-4 w-4 text-[#c4ff4d]" />
                                <p className="text-sm font-semibold text-white">How to fix it</p>
                              </div>
                              {problem.solutions.map((s, i) => (
                                <div
                                  key={i}
                                  className="flex items-center justify-between gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
                                >
                                  <div className="flex items-center gap-2 flex-1 min-w-0">
                                    <ChevronRight className="h-4 w-4 text-[#c4ff4d] flex-shrink-0" />
                                    <span className="text-sm text-white">{s.title}</span>
                                  </div>
                                  <div className="flex items-center gap-3 flex-shrink-0">
                                    <span className="flex items-center gap-1 text-[10px] text-zinc-400">
                                      <Clock className="h-3 w-3" />
                                      {s.timeframe}
                                    </span>
                                    <span className="text-[10px] font-semibold text-[#c4ff4d] px-2 py-0.5 rounded bg-[#c4ff4d]/10">
                                      {s.impact}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  ))}
                </div>

                {hiddenCount > 0 && !unlockedTools.has("industry-scan") && (
                  <div className="space-y-3">
                    <div className="rounded-2xl border border-dashed border-white/15 bg-zinc-900/40 p-5 text-center">
                      <EyeOff className="h-5 w-5 text-zinc-500 mx-auto mb-2" />
                      <p className="text-sm text-zinc-400">
                        {hiddenCount} more issues for {vertical.name} are hidden in the full
                        workbook
                      </p>
                    </div>
                    <EmailGate
                      toolName="Industry Scan"
                      rowsHidden={hiddenCount}
                      onUnlock={() => markUnlocked("industry-scan")}
                    />
                  </div>
                )}
                {unlockedTools.has("industry-scan") && (
                  <div className="rounded-xl border border-[#c4ff4d]/20 bg-[#c4ff4d]/5 p-4 flex items-center gap-3">
                    <Eye className="h-4 w-4 text-[#c4ff4d]" />
                    <p className="text-sm text-zinc-300">
                      Full workbook unlocked. The complete report has been emailed to you.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* GROWTH SIMULATOR */}
            {activeTool === "growth-simulator" && (
              <div className="space-y-6" data-testid="stage-growth-simulator">
                {unlockedTools.has("growth-simulator") ? (
                  <div className="rounded-2xl overflow-hidden border border-white/10" data-testid="growth-simulator-full">
                    <GrowthSimulator />
                  </div>
                ) : (
                  <>
                    <div
                      className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/40 p-6"
                      data-testid="growth-simulator-preview"
                    >
                      <div className="grid sm:grid-cols-3 gap-4 mb-4">
                        {[
                          { label: "Avg Order Value", value: "€ 48" },
                          { label: "Monthly Visitors", value: "12,400" },
                          { label: "Conversion Rate", value: "1.8 %" },
                        ].map((s) => (
                          <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                            <div className="text-xs uppercase tracking-wider text-zinc-500 mb-1">{s.label}</div>
                            <div className="text-2xl font-bold text-white">{s.value}</div>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-xl border border-white/10 bg-black/40 p-5">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-zinc-400">12-month revenue projection</span>
                          <span className="text-xs uppercase tracking-wider text-[#c4ff4d]">Sample baseline</span>
                        </div>
                        <div className="h-32 flex items-end gap-1">
                          {[18, 22, 25, 31, 35, 40, 44, 49, 55, 62, 68, 74].map((h, i) => (
                            <div
                              key={i}
                              className="flex-1 rounded-t-sm bg-gradient-to-t from-[#c4ff4d]/20 to-[#c4ff4d]/60"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400">
                        <EyeOff className="h-3.5 w-3.5 text-[#c4ff4d]" />
                        Live simulator + your Malta-vertical benchmark unlock after email
                      </div>
                    </div>
                    <EmailGate
                      toolName="Growth Simulator"
                      rowsHidden={tool.fullReportRows}
                      onUnlock={() => markUnlocked("growth-simulator")}
                    />
                  </>
                )}
              </div>
            )}

            {/* WORKFORCE DESIGNER */}
            {activeTool === "workforce-designer" && (
              <div className="space-y-6" data-testid="stage-workforce-designer">
                <div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-5">
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    <span className="text-[#c4ff4d] font-semibold">Designer brief —</span> add the
                    AI agents you would hire if payroll was not the constraint. Each agent has a
                    monthly run cost and a measured revenue or hours-saved contribution. Aim for an
                    ROI multiplier above 3x before you start a pilot conversation with us.
                  </p>
                </div>
                {unlockedTools.has("workforce-designer") ? (
                  <div className="rounded-2xl overflow-hidden border border-white/10" data-testid="workforce-designer-full">
                    <GrowthSimulator />
                  </div>
                ) : (
                  <>
                    <div
                      className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/40 p-6"
                      data-testid="workforce-designer-preview"
                    >
                      <div className="space-y-3">
                        {[
                          { role: "AI SDR Agent", cost: "€ 480 / mo", roi: "5.2x", visible: true },
                          { role: "AI Support Specialist", cost: "€ 380 / mo", roi: "4.1x", visible: true },
                          { role: "AI Appointment Booker", cost: "€ 290 / mo", roi: "3.8x", visible: true },
                        ].map((r) => (
                          <div
                            key={r.role}
                            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                          >
                            <div>
                              <div className="text-white font-semibold">{r.role}</div>
                              <div className="text-xs text-zinc-500">{r.cost}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-[#c4ff4d] font-bold">{r.roi}</div>
                              <div className="text-[10px] uppercase tracking-wider text-zinc-500">ROI</div>
                            </div>
                          </div>
                        ))}
                        <div className="rounded-xl border border-dashed border-white/15 bg-black/30 px-4 py-4 text-center text-sm text-zinc-500">
                          + 9 more agent roles, with payback windows and Malta vertical benchmarks, unlock after email
                        </div>
                      </div>
                    </div>
                    <EmailGate
                      toolName="AI Workforce Designer"
                      rowsHidden={tool.fullReportRows}
                      onUnlock={() => markUnlocked("workforce-designer")}
                    />
                  </>
                )}
              </div>
            )}

            {/* INTELLIGENCE SCAN (CORTEX) */}
            {activeTool === "intelligence-scan" && (
              <div className="space-y-6" data-testid="stage-intelligence-scan">
                {unlockedTools.has("intelligence-scan") ? (
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/30" data-testid="intelligence-scan-full">
                    <CortexContainer />
                  </div>
                ) : (
                  <>
                    <div
                      className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6"
                      data-testid="intelligence-scan-preview"
                    >
                      <div className="grid sm:grid-cols-2 gap-4 mb-5">
                        {[
                          { tag: "Stage 1", title: "Business Profile", body: "Industry, size, revenue band, current digital footprint." },
                          { tag: "Stage 2", title: "Workflow Map", body: "Where time, money and context are leaking across operations." },
                          { tag: "Stage 3", title: "AI Opportunity Scan", body: "Three highest-leverage agent pilots ranked by payback window." },
                        ].map((s) => (
                          <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                            <div className="text-[10px] uppercase tracking-wider text-[#c4ff4d] mb-1">{s.tag}</div>
                            <div className="text-white font-semibold mb-1">{s.title}</div>
                            <p className="text-xs text-zinc-400 leading-relaxed">{s.body}</p>
                          </div>
                        ))}
                        <div className="rounded-xl border border-dashed border-white/15 bg-black/30 p-4 flex items-center justify-center text-center">
                          <div className="text-sm text-zinc-500">
                            Stage 4 — Cortex one-pager with your scored leverage map — unlocks after email
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        The Cortex Business Intelligence Scan is the same five-stage diagnostic we
                        run inside paid pilots. The first three stages are previewed above. Enter
                        your email to launch the live workflow and download the one-pager for your
                        own business.
                      </p>
                    </div>
                    <EmailGate
                      toolName="Business Intelligence Scan"
                      rowsHidden={tool.fullReportRows}
                      onUnlock={() => markUnlocked("intelligence-scan")}
                    />
                  </>
                )}
              </div>
            )}
          </section>

          {/* HUB METHODOLOGY */}
          <section className="max-w-5xl mx-auto mb-16" data-testid="section-methodology">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                How the diagnostics are built
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Every figure on this page is anchored to OARC's working sample of Malta SMEs and
                cross-checked against open industry research. Here is what sits behind each tool.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Activity className="h-6 w-6 text-[#c4ff4d] mb-3" />
                <h3 className="font-bold text-white mb-2">Real client baselines</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Industry Scan euro figures come from pilot data across restaurants, hotels,
                  retail, and professional-services clients OARC has worked with from our
                  {" " + NAP.addressLocality} studio. Sample size is finite, so we treat the
                  numbers as directional rather than precise — useful for prioritisation, not
                  forecasting.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Brain className="h-6 w-6 text-[#c4ff4d] mb-3" />
                <h3 className="font-bold text-white mb-2">Behavioural framing</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Each issue carries a "why it keeps happening" block grounded in behavioural
                  economics — present bias, status-quo defaults, recognition triggers, social
                  proof. The fix matters less than the mechanic that the fix interrupts. That is
                  what stops the leakage from coming back.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Building2 className="h-6 w-6 text-[#c4ff4d] mb-3" />
                <h3 className="font-bold text-white mb-2">Malta-specific context</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Pricing assumes EUR-denominated SMEs with 3 to 25 staff and turnover under five
                  million. Where regulation matters — MFSA, MGA, IDPC — we flag it in the full
                  workbook rather than the on-page preview. The hub is built for Malta first, EU
                  second.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-900/30 p-6">
              <h3 className="text-lg font-bold text-white mb-3">A note from Sahan, OARC founder</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                The reason these tools are free is honest: the cost of a half-decent diagnostic in
                Malta has historically been a five-figure consulting brief and a two-month wait. We
                think that gate is in the wrong place. The right gate is the pilot — the moment a
                client actually pays us money to deploy something. So we moved every diagnostic
                upstream of that gate and made them ungated. If a Malta operator can run an
                Industry Scan, plot the Growth Simulator curve, design an AI workforce, and read a
                Cortex one-pager on their own business in a single coffee, they make a sharper
                decision when the pilot conversation finally happens. That is good for them and
                good for us. Everything else is just plumbing.
              </p>
            </div>
          </section>

          {/* TOOLS-WE-USE vs FREE-TOOLS clarifier */}
          <section className="max-w-5xl mx-auto mb-16" data-testid="section-clarifier">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/60 to-black/60 p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                    You are here
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-3">Free tools you can use</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                    The /diagnostics hub is four interactive tools you can run on your own
                    business in the next ten minutes — Industry Scan, Growth Simulator, AI
                    Workforce Designer, and the Cortex Business Intelligence Scan. Free, no login,
                    no card. Use them whether or not you ever hire OARC.
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#c4ff4d]">
                    <Sparkles className="h-3.5 w-3.5" />
                    Diagnostic-first
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                    Different shelf
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-3">Tools we use</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                    The /tools page lists the third-party stack OARC operates internally — Clay,
                    Instantly, Midjourney, Figma, n8n, HubSpot — so prospects can see what they
                    inherit when they hire us. That page is for due diligence; this hub is for
                    diagnostic work you can run yourself.
                  </p>
                  <Link
                    href="/tools"
                    data-testid="link-tools-page"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white"
                  >
                    See the OARC stack
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="max-w-3xl mx-auto mb-16" data-testid="section-faq">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Diagnostics hub — questions worth asking
              </h2>
              <p className="text-zinc-400">
                Everything we get asked the most about the four tools, the data, and what happens
                next.
              </p>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-white/10 bg-white/5 p-5"
                  data-testid={`faq-item-${i}`}
                >
                  <summary className="flex items-center justify-between cursor-pointer text-white font-semibold list-none">
                    <span className="pr-4">{faq.question}</span>
                    <ChevronRight className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="max-w-4xl mx-auto" data-testid="section-final-cta">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#c4ff4d]/10 to-transparent p-8 md:p-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Run a diagnostic, then run a 14-day pilot
              </h3>
              <p className="text-zinc-300 max-w-2xl mx-auto mb-6">
                The diagnostics hub is the start of the conversation. The 14-day pilot is the
                proof. We deploy against the highest-leverage finding from your scan, measure the
                outcome on your real data, and refund the pilot if the numbers do not move.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/contact">
                  <button
                    data-testid="button-start-pilot"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c4ff4d] text-black font-semibold rounded-xl shadow-lg shadow-[#c4ff4d]/25 transition-all"
                  >
                    Start a 14-day pilot
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
                <Link
                  href={`https://wa.me/${NAP.whatsappNumber}`}
                  data-testid="link-whatsapp-team"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 text-white font-semibold rounded-xl transition-all hover:bg-white/10"
                >
                  WhatsApp the team
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
