'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import { queryClient } from '@/lib/queryClient';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import SmoothScroll from '@/components/SmoothScroll';
import ScrollToTop from '@/components/ScrollToTop';

const ARCWidget = dynamic(() => import('@/components/ARC/ARCWidget'), {
  ssr: false,
});

const CookieConsent = dynamic(() => import('@/components/CookieConsent'), {
  ssr: false,
});

/**
 * Motion stack (one orchestration point):
 * - MotionConfig: respect OS reduced-motion
 * - LazyMotion domAnimation: ~4.6kb initial vs full motion bundle
 * - SmoothScroll: Lenis after idle (does not block SSR/SEO HTML)
 * - ARC / cookies: dynamic import (no main-bundle cost)
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation} strict>
          <SmoothScroll>
            <TooltipProvider>
              <Suspense fallback={null}>
                <ScrollToTop />
              </Suspense>
              {children}
              <ARCWidget />
              <CookieConsent />
              <Toaster />
            </TooltipProvider>
          </SmoothScroll>
        </LazyMotion>
      </MotionConfig>
    </QueryClientProvider>
  );
}
