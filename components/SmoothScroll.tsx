'use client';

import { useEffect, useState, type ComponentType, type ReactNode } from 'react';
import type { LenisProps } from 'lenis/react';
import { LENIS_OPTIONS, shouldEnableLenis } from '@/lib/motion/lenisOptions';

type ReactLenisType = ComponentType<LenisProps>;

/**
 * Lenis loads after idle — HTML/SEO paint first, smooth scroll second.
 * Only disabled when user prefers reduced motion (accessibility + INP).
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [ReactLenis, setReactLenis] = useState<ReactLenisType | null>(null);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const sync = () => setBlocked(!shouldEnableLenis());
    sync();

    const mqs = [
      window.matchMedia('(prefers-reduced-motion: reduce)'),
      window.matchMedia('(pointer: coarse)'),
      window.matchMedia('(hover: none)'),
    ];
    mqs.forEach((mq) => mq.addEventListener('change', sync));

    if (!shouldEnableLenis()) {
      return () => mqs.forEach((mq) => mq.removeEventListener('change', sync));
    }

    const load = () => {
      import('lenis/react').then((mod) => setReactLenis(() => mod.ReactLenis));
    };

    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(load, { timeout: 2000 });
    } else {
      timeoutId = setTimeout(load, 120);
    }

    return () => {
      mqs.forEach((mq) => mq.removeEventListener('change', sync));
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  if (blocked || !ReactLenis) return <>{children}</>;

  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  );
}
