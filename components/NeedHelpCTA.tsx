"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { registerGSAP, gsap, EASE, DUR } from "@/lib/motion/gsap-system";

export default function NeedHelpCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    const ctx = gsap.context(() => {
      // Animate the whole bar as one unit
      gsap.fromTo(
        barRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: DUR.normal,
          ease: EASE.out,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      // Icon tile scales in separately with slight delay
      gsap.fromTo(
        iconRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: DUR.normal,
          delay: 0.15,
          ease: EASE.back,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef.current!);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-8 md:py-10 relative overflow-hidden"
      style={{ backgroundColor: "#e8f5e9" }}
      data-testid="section-need-help-cta"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-10 max-w-6xl relative">
        <div
          ref={barRef}
          className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center gap-4">
            <div
              ref={iconRef}
              className="hidden sm:flex w-12 h-12 rounded-full items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(34, 197, 94, 0.15)", opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6" style={{ color: "#16a34a" }} />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold" style={{ color: "#0a0a0a" }} data-testid="heading-need-help">
                Need help deciding? Let's chat.
              </h3>
              <p className="text-sm mt-1 hidden sm:block" style={{ color: "rgba(0, 0, 0, 0.6)" }}>
                Get personalized recommendations for your business
              </p>
            </div>
          </div>

          <Link href="/contact">
            <Button
              size="lg"
              className="rounded-full font-semibold shadow-lg whitespace-nowrap"
              style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}
              data-testid="button-schedule-consultation"
            >
              Schedule a Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
