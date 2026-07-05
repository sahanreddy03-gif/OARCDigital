'use client';

import { useEffect, useRef } from 'react';

/** Shared scroll-reveal — CSS only, no scroll hijack (IntersectionObserver once). */
export const H360_REVEAL_CSS = `
  .h360-rv { opacity:0; transform:translateY(28px);
    transition:opacity .65s cubic-bezier(.22,1,.36,1), transform .65s cubic-bezier(.22,1,.36,1); }
  .h360-rv.h360-rv-in { opacity:1; transform:translateY(0); }
  .h360-rv-d1 { transition-delay:.08s; }
  .h360-rv-d2 { transition-delay:.16s; }
  .h360-rv-d3 { transition-delay:.24s; }
  @media (prefers-reduced-motion: reduce) {
    .h360-rv { opacity:1; transform:none; transition:none; }
  }
`;

export function useH360Reveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.12) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('h360-rv-in');
      return;
    }

    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('h360-rv-in');
          ob.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, [threshold]);

  return ref;
}
