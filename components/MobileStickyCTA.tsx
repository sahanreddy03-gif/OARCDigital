"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";
import { whatsappUrl } from "@/lib/utm";
import { useHomepageFloatingControlsVisibility } from "@/components/useHomepageFloatingControlsVisibility";

export default function MobileStickyCTA() {
  const pathname = usePathname() ?? "/";
  const showFloatingControls = useHomepageFloatingControlsVisibility();
  if (pathname.startsWith("/h360")) return null;
  const wa = whatsappUrl(pathname);

  return (
    <AnimatePresence>
      {showFloatingControls && (
        <m.a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          data-testid="link-mobile-whatsapp"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          className="fixed bottom-6 left-6 z-[9997]"
        >
          {/* Pulse ring */}
          <div
            className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20"
            style={{ animationDuration: "2s" }}
          />
          {/* Circle */}
          <div className="relative w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center border border-white/20 shadow-2xl">
            <SiWhatsapp className="w-7 h-7 text-white" aria-hidden="true" />
          </div>
        </m.a>
      )}
    </AnimatePresence>
  );
}
