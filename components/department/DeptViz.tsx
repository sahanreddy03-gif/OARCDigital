"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Draws one of the department diagrams (SVG markup built in lib/departments/*)
 * and plays its entrance animation once, when it scrolls into view.
 * CSS-only animation after that; reduced-motion users see the final state.
 */
export default function DeptViz({ svg, label }: { svg: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={label}
      data-in={inView ? "" : undefined}
      className="dept-viz w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
