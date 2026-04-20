"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import dynamic from "next/dynamic";
import { queryClient } from "../client/src/lib/queryClient";
import { TooltipProvider } from "../client/src/components/ui/tooltip";
import { Toaster } from "../client/src/components/ui/toaster";

const ARCWidget = dynamic(
  () => import("../client/src/components/ARC/ARCWidget"),
  { ssr: false }
);

const CookieConsent = dynamic(
  () => import("../client/src/components/CookieConsent"),
  { ssr: false }
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          {children}
          <ARCWidget />
          <CookieConsent />
          <Toaster />
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}
