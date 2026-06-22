'use client';

import { ReactLenis } from 'lenis/react';
import { useEffect, useState, type ReactNode } from 'react';

const LENIS_OPTIONS = {
  duration: 1.05,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 1.4,
  autoRaf: true,
};

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [reduceMotion, setReduceMotion] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  if (reduceMotion === null) return <>{children}</>;
  if (reduceMotion) return <>{children}</>;

  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  );
}
