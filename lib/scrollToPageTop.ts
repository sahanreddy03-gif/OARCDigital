import type Lenis from 'lenis';

/** Scroll window (+ Lenis when active) to top without fighting browser back/restore. */
export function scrollToPageTop(lenis?: Lenis | null) {
  if (typeof window === 'undefined') return;

  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  lenis?.scrollTo(0, { immediate: true });
}

/** Smooth in-page anchor — native on touch, Lenis when present. */
export function scrollToAnchor(id: string, lenis?: Lenis | null) {
  if (typeof window === 'undefined') return;
  const el = document.getElementById(id);
  if (!el) return;

  if (lenis) {
    lenis.scrollTo(el, { offset: -72, duration: 0.85 });
    return;
  }

  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
