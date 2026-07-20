"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/**
 * Custom morphing cursor — desktop (fine-pointer) only.
 *
 * A small dot trails the native pointer. Over interactive elements it
 * scales up; over elements carrying a `data-cursor="View|Play|Drag"`
 * attribute it morphs into a labelled pill. The native cursor stays
 * visible (accessibility), this layer is pure garnish.
 */
export default function CustomCursor() {
  const [active, setActive] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (reducedMotion || !finePointer) return;
    setActive(true);
  }, []);

  useEffect(() => {
    if (!active) return;
    const dot = dotRef.current;
    const label = labelRef.current;
    if (!dot || !label) return;

    // Keep the dot centered on the pointer even as it grows into a pill
    gsap.set(dot, { xPercent: -50, yPercent: -50 });
    const xTo = gsap.quickTo(dot, "x", { duration: 0.35, ease: "power3.out" });
    const yTo = gsap.quickTo(dot, "y", { duration: 0.35, ease: "power3.out" });

    let visible = false;
    let currentMode = "";

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      if (!visible) {
        visible = true;
        gsap.to(dot, { autoAlpha: 1, duration: 0.2 });
      }
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const setMode = (mode: "idle" | "hover" | "label", text = "") => {
      // Dedupe: pointerover fires on every element boundary crossing —
      // only tween when the mode (or pill label) actually changes.
      const key = mode === "label" ? `label:${text}` : mode;
      if (key === currentMode) return;
      currentMode = key;

      if (mode === "label" && text) {
        label.textContent = text;
        gsap.to(dot, {
          width: 64,
          height: 64,
          backgroundColor: "rgba(255,255,255,0.95)",
          duration: 0.3,
          ease: "power3.out",
          overwrite: "auto",
        });
        gsap.to(label, { autoAlpha: 1, duration: 0.2, delay: 0.05, overwrite: "auto" });
      } else if (mode === "hover") {
        gsap.to(label, { autoAlpha: 0, duration: 0.1, overwrite: "auto" });
        gsap.to(dot, {
          width: 28,
          height: 28,
          backgroundColor: "rgba(255,255,255,0.35)",
          duration: 0.25,
          ease: "power3.out",
          overwrite: "auto",
        });
      } else {
        gsap.to(label, { autoAlpha: 0, duration: 0.1, overwrite: "auto" });
        gsap.to(dot, {
          width: 10,
          height: 10,
          backgroundColor: "rgba(255,255,255,0.9)",
          duration: 0.25,
          ease: "power3.out",
          overwrite: "auto",
        });
      }
    };

    const onOver = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (!target || !(target instanceof Element)) return;
      const labelled = target.closest("[data-cursor]");
      if (labelled) {
        setMode("label", labelled.getAttribute("data-cursor") || "");
        return;
      }
      if (target.closest("a, button, [role='button'], input, textarea, select")) {
        setMode("hover");
        return;
      }
      setMode("idle");
    };

    const onLeaveWindow = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        visible = false;
        gsap.to(dot, { autoAlpha: 0, duration: 0.2 });
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("mouseout", onLeaveWindow);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("mouseout", onLeaveWindow);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] flex items-center justify-center rounded-full mix-blend-difference"
      style={{
        width: 10,
        height: 10,
        backgroundColor: "rgba(255,255,255,0.9)",
        transform: "translate(-100px, -100px)",
        opacity: 0,
        visibility: "hidden",
        willChange: "transform",
      }}
    >
      <span
        ref={labelRef}
        className="select-none text-[11px] font-semibold uppercase tracking-widest text-black"
        style={{ opacity: 0, visibility: "hidden" }}
      />
    </div>
  );
}
