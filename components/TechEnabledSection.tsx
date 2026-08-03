"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Wrench,
  Workflow,
  Rocket,
  ArrowRight
} from "lucide-react";
import { registerGSAP, gsap, EASE, DUR, STAG } from "@/lib/motion/gsap-system";

interface TechCard {
  title: string;
  description: string;
  icon: React.ElementType;
  variant: "lime" | "cream" | "sage" | "teal";
  hasToolsLink?: boolean;
}

const techCards: TechCard[] = [
  {
    title: "Custom mobile apps built for your workflow.",
    description: "From iOS to Android, we develop native and cross-platform apps that put your business in your customers' pockets—24/7 accessibility, zero friction.",
    icon: Smartphone,
    variant: "lime",
  },
  {
    title: "AI tools that remove bottlenecks.",
    description: "We identify what slows you down and build tailored solutions—whether it's inventory tracking, client portals, or internal dashboards.",
    icon: Wrench,
    variant: "cream",
    hasToolsLink: true,
  },
  {
    title: "Automation that runs while you sleep.",
    description: "Repetitive tasks drain your team. Our AI-powered workflows handle invoicing, follow-ups, and data sync so you focus on growth.",
    icon: Workflow,
    variant: "teal",
  },
  {
    title: "Launch faster. Scale smarter.",
    description: "OARC builds MVPs in weeks, not months. We move at startup speed with enterprise-grade reliability—Malta-based support included.",
    icon: Rocket,
    variant: "sage",
  },
];

const CARD_STYLES = {
  lime:  { bg: "bg-[#c4ff4d]",   text: "text-[#1a2e29]",  desc: "text-[#1a2e29]/70", iconBg: "bg-[#1a2e29]/10", icon: "text-[#1a2e29]" },
  cream: { bg: "bg-[#f5f0e6]",   text: "text-[#1a2e29]",  desc: "text-[#1a2e29]/60", iconBg: "bg-[#1a2e29]/10", icon: "text-[#1a2e29]" },
  sage:  { bg: "bg-[#a8b892]",   text: "text-[#1a2e29]",  desc: "text-[#1a2e29]/70", iconBg: "bg-[#1a2e29]/10", icon: "text-[#1a2e29]" },
  teal:  { bg: "bg-[#3d5a54]",   text: "text-white",      desc: "text-white/80",      iconBg: "bg-white/15",     icon: "text-white" },
};

const TechEnabledSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header slides up
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: DUR.normal,
          ease: EASE.hard,
          scrollTrigger: { trigger: section, start: "top 85%" },
        }
      );

      // Bento cards stagger in with slight scale
      if (gridRef.current) {
        const cards = Array.from(gridRef.current.children);
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: DUR.slow,
            stagger: STAG.loose,
            ease: EASE.back,
            scrollTrigger: { trigger: section, start: "top 80%" },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#f0fff4" }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14"
          style={{ opacity: 0 }}
        >
          <div className="max-w-2xl">
            <h2
              className="text-[#1a2e29] font-bold mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
            >
              Custom solutions that{" "}
              <span className="italic font-medium text-[#1a2e29]">simplify your business</span>.
            </h2>
            <p className="text-base md:text-lg text-[#1a2e29]/60 leading-relaxed max-w-lg">
              We build mobile apps, software platforms, and AI automations tailored to how you
              actually work—making business easier, faster, and more profitable.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link href="/contact">
              <Button
                size="default"
                className="bg-[#1a2e29] hover:bg-[#0f1c18] text-white font-medium rounded-full px-6 group"
                data-testid="button-tech-learn-more"
              >
                Start a project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Bento grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {[
            { card: techCards[0], span: "md:col-span-7", size: "min-h-[220px] md:min-h-[280px]" },
            { card: techCards[1], span: "md:col-span-5", size: "min-h-[200px] md:min-h-[280px]" },
            { card: techCards[2], span: "md:col-span-5", size: "min-h-[200px] md:min-h-[280px]" },
            { card: techCards[3], span: "md:col-span-7", size: "min-h-[220px] md:min-h-[280px]" },
          ].map(({ card, span, size }, idx) => {
            const s = CARD_STYLES[card.variant];
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${s.bg} ${span} ${size}`}
                data-testid={`card-tech-feature-${idx}`}
                style={{ opacity: 0 }}
              >
                <div className="p-6 md:p-8 h-full flex flex-col">
                  <div className={`w-11 h-11 md:w-12 md:h-12 rounded-xl ${s.iconBg} flex items-center justify-center mb-5`}>
                    <Icon className={`w-5 h-5 md:w-6 md:h-6 ${s.icon}`} strokeWidth={1.5} />
                  </div>
                  <h3
                    className={`font-semibold mb-3 ${s.text}`}
                    style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)", lineHeight: "1.2", letterSpacing: "-0.02em" }}
                  >
                    {card.title}
                  </h3>
                  <p className={`text-sm md:text-base leading-relaxed ${s.desc} max-w-md`}>
                    {card.description}
                  </p>
                  {card.hasToolsLink && (
                    <div className="mt-auto pt-4">
                      <Link href="/tools">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#1a2e29] hover:bg-[#1a2e29]/10 px-0 font-medium group/btn"
                          data-testid="button-try-tools"
                        >
                          Try These Tools
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechEnabledSection;
