"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { LazyMotion, domAnimation } from "framer-motion";
import { queryClient } from "@/lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

const ARCWidget = dynamic(() => import("@/components/ARC/ARCWidget"), {
  ssr: false,
});

const CookieConsent = dynamic(() => import("@/components/CookieConsent"), {
  ssr: false,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <LazyMotion features={domAnimation}>
        <TooltipProvider>
          {children}
          <ARCWidget />
          <CookieConsent />
          <Toaster />
        </TooltipProvider>
      </LazyMotion>
    </QueryClientProvider>
  );
}
