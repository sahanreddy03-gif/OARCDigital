"use client";

// Bottom-fixed conversion bar shown on mobile only. Two slots are always
// visible (WhatsApp + Call) because both work without external configuration.
// The Cal.com slot is conditional on NEXT_PUBLIC_CALCOM_BOOKING_URL being set
// — Prohibits rendering a fallback that 404s.

import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { whatsappUrl, callUrl, calcomUrl } from "@/lib/utm";

export default function MobileStickyCTA() {
  const pathname = usePathname() ?? "/";
  const wa = whatsappUrl(pathname);
  const tel = callUrl();
  const cal = calcomUrl(pathname);

  return (
    <nav
      aria-label="Mobile contact actions"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background/95 px-3 py-2 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] backdrop-blur md:hidden"
      data-testid="nav-mobile-sticky-cta"
    >
      <div className="mx-auto flex max-w-screen-sm items-stretch justify-between gap-2">
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-md bg-emerald-600 px-3 py-2.5 text-sm font-semibold text-white hover-elevate active-elevate-2"
          data-testid="link-mobile-whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          WhatsApp
        </a>
        {cal && (
          <a
            href={cal}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-md bg-orange-600 px-3 py-2.5 text-sm font-semibold text-white hover-elevate active-elevate-2"
            data-testid="link-mobile-book"
            aria-label="Book a call"
          >
            <Calendar className="h-4 w-4" aria-hidden />
            Book
          </a>
        )}
        <a
          href={tel}
          className="flex flex-1 items-center justify-center gap-2 rounded-md border border-border bg-card px-3 py-2.5 text-sm font-semibold text-foreground hover-elevate active-elevate-2"
          data-testid="link-mobile-call"
          aria-label="Call OARC Digital"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call
        </a>
      </div>
    </nav>
  );
}
