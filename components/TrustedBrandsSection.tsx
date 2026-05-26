"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Users, TrendingUp, ShieldCheck } from "lucide-react";

const STATS = [
  {
    icon: Star,
    value: 4.9,
    suffix: "/5",
    label: "Satisfaction Rating",
    sub: "Across all client engagements",
    decimals: 1,
    testId: "stat-strip-rating",
  },
  {
    icon: Users,
    value: 47,
    suffix: "+",
    label: "Clients Served",
    sub: "Startups to enterprise brands",
    decimals: 0,
    testId: "stat-strip-clients",
  },
  {
    icon: TrendingUp,
    value: 68,
    suffix: "%",
    label: "Avg ROI Lift",
    sub: "Across active retainer clients",
    decimals: 0,
    testId: "stat-strip-roi",
  },
  {
    icon: ShieldCheck,
    value: 90,
    suffix: " Days",
    label: "Guarantee Period",
    sub: "Results or we work for free",
    decimals: 0,
    testId: "stat-strip-guarantee",
  },
];

function useCountUp(target: number, decimals: number, active: boolean) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!active) return;
    const duration = 1500;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [active, target, decimals]);

  return count;
}

function StatBlock({
  icon: Icon, value, suffix, label, sub, decimals, testId, active,
}: (typeof STATS)[0] & { active: boolean }) {
  const count = useCountUp(value, decimals, active);
  const display = decimals > 0 ? count.toFixed(decimals) : Math.round(count).toString();

  return (
    <div
      className="flex flex-col items-center text-center px-4 py-8 md:py-10 relative group"
      data-testid={testId}
    >
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.2)" }}
      >
        <Icon className="w-5 h-5" style={{ color: "#22c55e" }} />
      </div>

      {/* Number */}
      <div
        className="font-bold text-white mb-1 tabular-nums leading-none"
        style={{ fontSize: "clamp(2.25rem,5vw,3.5rem)", letterSpacing: "-0.03em" }}
        aria-label={`${display}${suffix} ${label}`}
      >
        {display}
        <span style={{ color: "#22c55e" }}>{suffix}</span>
      </div>

      {/* Label */}
      <p
        className="text-xs uppercase tracking-[0.18em] font-semibold mt-2 mb-1"
        style={{ color: "rgba(255,255,255,0.55)" }}
      >
        {label}
      </p>

      {/* Sub */}
      <p className="text-[11px] leading-snug max-w-[130px]" style={{ color: "rgba(255,255,255,0.3)" }}>
        {sub}
      </p>

      {/* Vertical divider (hidden on last item, only on md+) */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px hidden md:block last:hidden"
        style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
      />
    </div>
  );
}

export default function TrustedBrandsSection() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#070709" }}
      data-testid="section-trust-stats"
      aria-label="OARC Digital — key performance metrics"
    >
      {/* Top gradient seam (blends from OARCBrandSection dark) */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-12 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #030305, transparent)" }}
      />

      {/* Subtle green glow centre */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(34,197,94,0.04) 0%, transparent 70%)",
        }}
      />

      {/* 4-column grid */}
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-white/5">
          {STATS.map((s) => (
            <StatBlock key={s.testId} {...s} active={active} />
          ))}
        </div>
      </div>

      {/* Bottom gradient seam */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
        style={{ background: "linear-gradient(to top, #f0fff4, transparent)" }}
      />
    </section>
  );
}
