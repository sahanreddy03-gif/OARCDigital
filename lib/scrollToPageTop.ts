import type Lenis from 'lenis';

/** Scroll window + Lenis to top — beats browser scroll restoration */
export function scrollToPageTop(lenis?: Lenis | null) {
  if (typeof window === 'undefined') return;

  const run = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    lenis?.scrollTo(0, { immediate: true });
  };

  run();
  requestAnimationFrame(run);
  requestAnimationFrame(() => requestAnimationFrame(run));
}
