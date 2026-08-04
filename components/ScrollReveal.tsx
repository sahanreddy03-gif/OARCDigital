"use client";
/**
 * ScrollReveal — universal GSAP entrance wrapper.
 * Wrap any element or group; it fades/slides in when it enters the viewport.
 *
 * Usage:
 *   <ScrollReveal>  ← default fadeUp
 *   <ScrollReveal type="fadeIn" delay={0.2}>
 *   <ScrollReveal type="stagger" stagger={0.1}>  ← animates direct children
 */
import { useEffect, useRef } from "react";
import type { JSX } from "react";
import { registerGSAP, gsap, ScrollTrigger, EASE, DUR, STAG } from "@/lib/motion/gsap-system";

type RevealType = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleUp" | "stagger";

interface ScrollRevealProps {
  children: React.ReactNode;
  type?: RevealType;
  delay?: number;
  duration?: number;
  stagger?: number;
  y?: number;
  ease?: string;
  start?: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function ScrollReveal({
  children,
  type = "fadeUp",
  delay = 0,
  duration = DUR.normal,
  stagger = STAG.normal,
  y = 36,
  ease = EASE.out,
  start = "top 88%",
  className,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGSAP();
    const el = ref.current;
    if (!el) return;

    let tween: gsap.core.Tween | gsap.core.Timeline;

    if (type === "stagger") {
      // Animate direct children with stagger
      const kids = Array.from(el.children);
      gsap.set(kids, { opacity: 0, y });
      tween = gsap.to(kids, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        delay,
        ease,
        scrollTrigger: { trigger: el, start },
      });
    } else {
      const from: gsap.TweenVars = { opacity: 0 };
      const to: gsap.TweenVars   = { opacity: 1, duration, delay, ease };

      if (type === "fadeUp")    { from.y = y;  to.y = 0; }
      if (type === "slideLeft") { from.x = -60; to.x = 0; }
      if (type === "slideRight"){ from.x =  60; to.x = 0; }
      if (type === "scaleUp")   { from.scale = 0.92; to.scale = 1; }

      to.scrollTrigger = { trigger: el, start };
      gsap.set(el, from);
      tween = gsap.to(el, to);
    }

    return () => {
      tween.kill();
      ScrollTrigger.getAll()
        .filter((st) => st.trigger === el)
        .forEach((st) => st.kill());
    };
  }, [type, delay, duration, stagger, y, ease, start]);

  return (
    // @ts-expect-error — dynamic tag
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
