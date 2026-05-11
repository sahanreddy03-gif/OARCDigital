"use client";

import { usePathname } from "next/navigation";
import { SiWhatsapp } from "react-icons/si";
import { whatsappUrl } from "@/lib/utm";

export default function MobileStickyCTA() {
  const pathname = usePathname() ?? "/";
  const wa = whatsappUrl(pathname);

  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      data-testid="link-mobile-whatsapp"
      className="fixed bottom-6 left-6 z-[9997] md:hidden"
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
    </a>
  );
}
