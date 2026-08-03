"use client";
import { useEffect, useRef } from "react";
import { Briefcase, Star, Clock, Users } from "lucide-react";
import {
  PROOF_PROJECTS_DELIVERED,
  PROOF_SATISFACTION_RATING,
} from "@/lib/proofMetrics";
import { registerGSAP, gsap, ScrollTrigger, EASE, DUR, STAG } from "@/lib/motion/gsap-system";

const STATS = [
  {
    icon: Briefcase,
    label: "Projects",
    raw: 47,
    suffix: "+",
    display: PROOF_PROJECTS_DELIVERED,
    description: "Projects delivered successfully across industries.",
    testid: "stat-projects",
  },
  {
    icon: Star,
    label: "Satisfaction",
    raw: 4.9,
    suffix: "/5",
    display: PROOF_SATISFACTION_RATING,
    description: "Average client satisfaction rating.",
    testid: "stat-satisfaction",
  },
  {
    icon: Clock,
    label: "Speed",
    raw: 72,
    suffix: "h",
    display: "72h",
    description: "Average turnaround time for deliverables.",
    testid: "stat-turnaround",
  },
  {
    icon: Users,
    label: "Retention",
    raw: 85,
    suffix: "%",
    display: "85%",
    description: "Client retention rate year over year.",
    testid: "stat-retention",
  },
];

export function SuccessInNumbers() {
  const sectionRef  = useRef<HTMLElement>(null);
  const eyebrowRef  = useRef<HTMLParagraphElement>(null);
  const headingRef  = useRef<HTMLHeadingElement>(null);
  const descRef     = useRef<HTMLParagraphElement>(null);
  const statRefs    = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs  = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    registerGSAP();
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // ── Header reveal ──────────────────────────────────────────────
      gsap.fromTo(
        [eyebrowRef.current, headingRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: DUR.normal,
          stagger: STAG.tight,
          ease: EASE.out,
          scrollTrigger: { trigger: section, start: "top 85%" },
        }
      );

      // ── Description reveal ─────────────────────────────────────────
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0,
          duration: DUR.normal,
          delay: 0.15,
          ease: EASE.soft,
          scrollTrigger: { trigger: section, start: "top 85%" },
        }
      );

      // ── Stat blocks stagger ────────────────────────────────────────
      gsap.fromTo(
        statRefs.current.filter(Boolean),
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: DUR.slow,
          stagger: STAG.loose,
          ease: EASE.back,
          scrollTrigger: { trigger: section, start: "top 80%" },
        }
      );

      // ── Count-up numbers ───────────────────────────────────────────
      STATS.forEach((stat, i) => {
        const el = numberRefs.current[i];
        if (!el) return;

        const obj = { val: 0 };
        const isDecimal = !Number.isInteger(stat.raw);

        gsap.to(obj, {
          val: stat.raw,
          duration: DUR.xslow,
          delay: i * STAG.loose,
          ease: EASE.out,
          scrollTrigger: { trigger: section, start: "top 80%" },
          onUpdate() {
            el.textContent = isDecimal
              ? obj.val.toFixed(1) + stat.suffix
              : Math.round(obj.val) + stat.suffix;
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0A2818] py-20 md:py-28 lg:py-32"
      data-testid="section-success-numbers"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            ref={eyebrowRef}
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-4 md:mb-6 font-medium"
            data-testid="text-success-eyebrow"
            style={{ opacity: 0 }}
          >
            SUCCESS IN NUMBERS
          </p>
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight"
            data-testid="heading-success"
            style={{ opacity: 0 }}
          >
            The best return on <span className="italic font-serif">your investment</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Left: description */}
          <div className="md:pt-6">
            <p
              ref={descRef}
              className="text-sm md:text-base text-white/70 leading-relaxed max-w-md"
              data-testid="text-success-description"
              style={{ opacity: 0 }}
            >
              Startup, enterprises and mid-market companies trust OARC Digital to
              deliver pixel-perfect creative, at scale.
            </p>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:gap-x-10 md:gap-y-10">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  ref={(el) => { statRefs.current[i] = el; }}
                  data-testid={stat.testid}
                  style={{ opacity: 0 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                    <span className="text-xs uppercase tracking-wider text-emerald-400/80 font-medium">
                      {stat.label}
                    </span>
                  </div>
                  <div
                    ref={(el) => { numberRefs.current[i] = el; }}
                    className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {stat.display}
                  </div>
                  <p className="text-xs md:text-sm text-white/60 font-light leading-snug">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
