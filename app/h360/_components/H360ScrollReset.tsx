'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLenis } from 'lenis/react';
import { scrollToPageTop } from '@/lib/scrollToPageTop';

/** H360 routes: open at top on forward nav; respect hash + browser back. */
export default function H360ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!pathname.startsWith('/h360')) return;
    if (window.location.hash) return;

    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    if (nav?.type === 'back_forward') return;

    scrollToPageTop(lenis);
    lenis?.resize();
  }, [pathname, lenis]);

  return null;
}
