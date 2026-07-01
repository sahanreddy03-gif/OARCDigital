'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLenis } from 'lenis/react';
import { scrollToPageTop } from '@/lib/scrollToPageTop';

/** Hub root always opens at top unless URL has a hash anchor */
export default function H360ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (pathname !== '/h360') return;
    if (window.location.hash) return;
    scrollToPageTop(lenis);
  }, [pathname, lenis]);

  return null;
}
