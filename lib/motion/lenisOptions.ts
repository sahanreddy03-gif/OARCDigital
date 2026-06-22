import type { LenisOptions } from 'lenis';

/**
 * Shared Lenis tuning — snappy wheel (no long duration float).
 * Used site-wide; loaded after idle so LCP is not blocked.
 */
export const LENIS_OPTIONS: LenisOptions = {
  lerp: 0.1,
  smoothWheel: true,
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
