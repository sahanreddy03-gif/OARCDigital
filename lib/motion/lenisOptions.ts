import type { LenisOptions } from 'lenis';

/**
 * Shared Lenis tuning — snappy wheel (no long duration float).
 * Used site-wide; loaded after idle so LCP is not blocked.
 */
export const LENIS_OPTIONS: LenisOptions = {
  /** Higher = snappier wheel — less “scroll paused then catches up” feel */
  lerp: 0.16,
  smoothWheel: true,
  /** Native touch scroll — Lenis must not drive touch or mobile feels sticky */
  syncTouch: false,
  wheelMultiplier: 1,
  touchMultiplier: 1,
  autoRaf: true,
  autoResize: true,
};

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Lenis off on touch/coarse pointers — native scroll only (fixes H360 mobile friction). */
export function shouldEnableLenis(): boolean {
  if (typeof window === 'undefined') return false;
  if (prefersReducedMotion()) return false;
  if (window.matchMedia('(pointer: coarse)').matches) return false;
  if (window.matchMedia('(hover: none)').matches) return false;
  return true;
}
