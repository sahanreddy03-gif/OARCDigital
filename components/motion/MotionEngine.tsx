"use client";

import SmoothScroll from "./SmoothScroll";
import CustomCursor from "./CustomCursor";

/**
 * Global motion layer — mounted once in the root layout.
 * Individual pieces self-gate on pointer type and prefers-reduced-motion.
 */
export default function MotionEngine() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
    </>
  );
}
