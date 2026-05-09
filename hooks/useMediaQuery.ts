"use client";

import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
  // Always initialise to false so the first client render matches the server
  // render (which has no window and also returns false). The real value is
  // synced in useEffect after mount, avoiding the server/client hydration
  // mismatch that previously caused React to tear down and rebuild the entire
  // document on desktop viewports.
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
}
