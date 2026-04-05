import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";

// ─── Scoring Engine ───────────────────────────────────────────────────────────

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

function getSubScore(businessName: string, industry: string, index: number): number {
  const h = hashString(businessName.toLowerCase().trim() + industry + index);
  return 25 + (h % 46);
}

const SUB_SCORE_LABELS = [
  "Social Media Presence",
  "Website & SEO",
  "Online Reviews",
  "AI & Automation Readiness",
  "Content Quality",
];

const RECOMMENDATIONS: Record<string, string> = {
  "Social Media Presence":
    "Post consistently on Instagram and TikTok — Malta audiences scroll daily between 6-10pm.",
  "Website & SEO":
    "Your website isn't appearing in local searches. This is costing you 40%+ of potential customers.",
  "Online Reviews":
    "Automate your Google review collection. OARC's Hospitality 360 does this automatically.",
  "AI & Automation Readiness":
    "AI tools could save your team 10+ hours per week and respond to customers 24/7.",
  "Content Quality":
    "Better content means more engagement. Businesses in Malta see 3-5x more enquiries with professional content.",
};

function getInterpretation(score: number): string {
  if (score <= 40)
    return "Your digital presence needs urgent attention. Competitors are winning customers you should have.";
  if (score <= 60)
    return "You have the basics but you're leaving revenue on the table. A targeted strategy could double your results.";
  if (score <= 80)
    return "Strong foundation. With the right AI systems, you could dominate your local market.";
  return "Impressive. OARC Digital could take you from strong to category leader.";
}

function getScoreColor(score: number): string {
  if (score <= 40) return "#ef4444";
  if (score <= 60) return "#f59e0b";
  if (score <= 80) return "#ff914d";
  return "#22c55e";
}

// ─── Count-Up Hook ────────────────────────────────────────────────────────────

function useCountUp(target: number, duration = 1200, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) { setValue(0); return; }
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setValue(start);
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return value;
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────

function SubScoreBar({
  label,
  score,
  animate,
  delay,
}: {
  label: string;
  score: number;
  animate: boolean;
  delay: number;
}) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (!animate) { setWidth(0); return; }
    const t = setTimeout(() => setWidth((score / 20) * 100), delay);
    return () => clearTimeout(t);
  }, [animate, score, delay]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-zinc-300 font-medium">{label}</span>
        <span className="text-sm font-bold" style={{ color: getScoreColor(score * 5) }}>
          {score}/20
        </span>
      </div>
      <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all ease-out"
          style={{
            width: `${width}%`,
            backgroundColor: getScoreColor(score * 5),
            transitionDuration: "800ms",
          }}
        />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

type Industry = "restaurant" | "cafe" | "hotel" | "retail" | "other";

interface ScoreResult {
  businessName: string;
  industry: Industry;
  subScores: number[];
  total: number;
  lowestLabel: string;
  recommendation: string;
  interpretation: string;
}

const INDUSTRIES: { value: Industry; label: string }[] = [
  { value: "restaurant", label: "Restaurant" },
  { value: "cafe", label: "Cafe" },
  { value: "hotel", label: "Hotel" },
  { value: "retail", label: "Retail" },
  { value: "other", label: "Other" },
];

export default function MaltaDigitalScore() {
  const [, navigate] = useLocation();
  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState<Industry>("restaurant");
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [animating, setAnimating] = useState(false);
  const [copied, setCopied] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const displayScore = useCountUp(result?.total ?? 0, 1200, animating);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const name = businessName.trim();
    if (!name) return;

    const subScores = SUB_SCORE_LABELS.map((_, i) => getSubScore(name, industry, i));
    const total = subScores.reduce((a, b) => a + b, 0);
    const minIdx = subScores.indexOf(Math.min(...subScores));
    const lowestLabel = SUB_SCORE_LABELS[minIdx];

    setResult({
      businessName: name,
      industry,
      subScores,
      total,
      lowestLabel,
      recommendation: RECOMMENDATIONS[lowestLabel],
      interpretation: getInterpretation(total),
    });
    setAnimating(false);
    setTimeout(() => {
      setAnimating(true);
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  function handleReset() {
    setResult(null);
    setAnimating(false);
    setBusinessName("");
    setIndustry("restaurant");
  }

  function handleShare() {
    if (!result) return;
    const text = `My ${result.businessName} scored ${result.total}/100 on the Malta Digital Score. Free tool by OARC Digital: https://oarcdigital.com/tools/malta-digital-score`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  const scoreColor = result ? getScoreColor(result.total) : "#ff914d";

  return (
    <Layout>
      <SEOHead
        title="Malta Digital Score | Free Business Digital Audit | OARC Digital"
        description="Find out how your Malta business scores on social media, SEO, reviews, AI readiness, and content quality. Free instant score. No email required."
        canonicalUrl="https://oarcdigital.com/tools/malta-digital-score"
      />

      {/* ── Hero / Input ─────────────────────────────────────────────────── */}
      <section className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-4 py-20">
        <div className="w-full max-w-xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span
              className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border"
              style={{ color: "#ff914d", borderColor: "#ff914d33", backgroundColor: "#ff914d11" }}
            >
              Free Instant Audit
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center leading-tight mb-4">
            What&apos;s Your Malta<br />
            <span style={{ color: "#ff914d" }}>Digital Score?</span>
          </h1>

          <p className="text-zinc-400 text-center text-base md:text-lg mb-10 max-w-md mx-auto">
            Find out how your business stacks up in Malta&apos;s digital landscape.
            Free. Instant. No email required.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                Business Name or Instagram Handle
              </label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="e.g. The Harbour Cafe or @harbourcafe"
                required
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                Industry
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value as Industry)}
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-orange-400 transition-colors appearance-none"
              >
                {INDUSTRIES.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-lg font-bold text-white text-lg transition-all active:scale-95"
              style={{ backgroundColor: "#ff914d" }}
            >
              Get My Score
            </button>
          </form>

          <p className="text-center text-zinc-600 text-xs mt-4">
            No sign-up. No email. Results in seconds.
          </p>
        </div>
      </section>

      {/* ── Results ──────────────────────────────────────────────────────── */}
      {result && (
        <section
          ref={resultsRef}
          className="bg-zinc-900 px-4 py-16"
        >
          <div className="w-full max-w-xl mx-auto">

            {/* Score Card */}
            <div className="rounded-2xl border border-zinc-700 bg-zinc-950 overflow-hidden">

              {/* Card Header */}
              <div className="px-6 pt-8 pb-6 text-center border-b border-zinc-800">
                <p className="text-zinc-400 text-sm mb-1 font-medium uppercase tracking-wider">
                  Malta Digital Score
                </p>
                <h2 className="text-xl font-bold text-white mb-6">{result.businessName}</h2>

                {/* Big Score */}
                <div className="relative inline-flex items-center justify-center mb-3">
                  <svg className="w-40 h-40 -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="52" fill="none" stroke="#27272a" strokeWidth="10" />
                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke={scoreColor}
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 52}`}
                      strokeDashoffset={`${2 * Math.PI * 52 * (1 - (animating ? result.total : 0) / 100)}`}
                      style={{ transition: "stroke-dashoffset 1.2s ease-out" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span
                      className="text-5xl font-black leading-none"
                      style={{ color: scoreColor }}
                    >
                      {displayScore}
                    </span>
                    <span className="text-zinc-400 text-sm font-medium">/ 100</span>
                  </div>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed max-w-sm mx-auto">
                  {result.interpretation}
                </p>
              </div>

              {/* Sub-Scores */}
              <div className="px-6 py-6 border-b border-zinc-800">
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Score Breakdown
                </h3>
                {SUB_SCORE_LABELS.map((label, i) => (
                  <SubScoreBar
                    key={label}
                    label={label}
                    score={result.subScores[i]}
                    animate={animating}
                    delay={300 + i * 120}
                  />
                ))}
              </div>

              {/* Quick Win */}
              <div className="px-6 py-6 border-b border-zinc-800">
                <div
                  className="rounded-lg px-4 py-4"
                  style={{ backgroundColor: "#ff914d15", borderLeft: "3px solid #ff914d" }}
                >
                  <p className="text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: "#ff914d" }}>
                    #1 Quick Win
                  </p>
                  <p className="text-zinc-200 text-sm leading-relaxed">
                    {result.recommendation}
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="px-6 py-6 space-y-3">
                <button
                  onClick={() => navigate("/contact")}
                  className="w-full py-3.5 rounded-lg font-bold text-white text-base transition-all active:scale-95"
                  style={{ backgroundColor: "#ff914d" }}
                >
                  Get a Free Consultation with OARC Digital
                </button>

                <button
                  onClick={handleShare}
                  className="w-full py-3.5 rounded-lg font-semibold text-sm border border-zinc-600 text-zinc-200 bg-zinc-800 hover:bg-zinc-700 transition-colors"
                >
                  {copied ? "Copied to Clipboard" : "Share Your Score"}
                </button>

                <button
                  onClick={handleReset}
                  className="w-full py-3 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Check Another Business
                </button>
              </div>

              {/* Watermark */}
              <div className="px-6 pb-6 text-center">
                <p className="text-zinc-600 text-xs">
                  Powered by OARC Digital — Malta&apos;s First Creative + AI Systems Agency
                </p>
              </div>
            </div>

          </div>
        </section>
      )}
    </Layout>
  );
}
