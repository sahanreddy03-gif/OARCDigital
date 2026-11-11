"use client";

import { usePathname } from "next/navigation";
import { SiWhatsapp } from "react-icons/si";
import { CalendarDays } from "lucide-react";
import { bookingUrl, whatsappUrl } from "@/lib/utm";

type EnquiryNextStepsProps = {
  /** Visitor's first name, if the form asked for it. Used in the WhatsApp text only. */
  name?: string;
  /** What they asked about, e.g. "AI Chatbot" or "Industry Scan". */
  topic?: string;
  /** Line shown above the buttons. */
  lead?: string;
  /** "dark" for the site's dark panels, "light" for the pale guide pages. */
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Shown after any form is sent. A sent form is not the end: the visitor can
 * carry on in WhatsApp (straight to the owner's phone) or pick a slot on the
 * Cal.com page, instead of waiting for an email reply.
 */
export default function EnquiryNextSteps({
  name,
  topic,
  lead = "Want a faster answer?",
  tone = "dark",
  className = "",
}: EnquiryNextStepsProps) {
  const pathname = usePathname() ?? "/";
  const firstName = name?.trim().split(/\s+/)[0];
  const message =
    `Hi OARC Digital, I just sent an enquiry on your website` +
    (topic ? ` about ${topic}` : "") +
    "." +
    (firstName ? ` My name is ${firstName}.` : "");

  const leadClass = tone === "dark" ? "text-zinc-300" : "text-[#1a1a1a]";
  const calClass =
    tone === "dark"
      ? "border-white/25 text-white hover:bg-white/10"
      : "border-black/20 text-[#1a1a1a] hover:bg-black/5";

  return (
    <div className={className} data-testid="enquiry-next-steps">
      <p className={`mb-3 text-sm font-medium ${leadClass}`}>{lead}</p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={whatsappUrl(pathname, message)}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="link-next-whatsapp"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
        >
          <SiWhatsapp className="h-5 w-5" aria-hidden="true" />
          Message us on WhatsApp
        </a>
        <a
          href={bookingUrl(pathname)}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="link-next-booking"
          className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl border px-5 py-3.5 text-sm font-semibold transition-colors ${calClass}`}
        >
          <CalendarDays className="h-5 w-5" aria-hidden="true" />
          Book a 20-minute call
        </a>
      </div>
    </div>
  );
}
