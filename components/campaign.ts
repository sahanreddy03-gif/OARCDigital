/** Shared conversion exits + Shift Happens campaign (all insight pages). */

export const HOME = "https://oarcdigital.com/";
export const CONTACT = "https://oarcdigital.com/contact";
export const INSTAGRAM = "https://www.instagram.com/oarcdigital/";
export const PHONE_DISPLAY = "+356 7971 1799";
export const PHONE_E164 = "35679711799";

export const CAMPAIGN = "Shift Happens";
export const OFFER = "50% off";

/** Prefill mentions Shift Happens 50% off — use on every WA CTA. */
export function waUrl(context: string): string {
  const text = `Hi OARC — ${CAMPAIGN} ${OFFER}. ${context}`;
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(text)}`;
}

export const WA_DEFAULT = waUrl("I want to claim the offer for the next clients contacting now.");

/** Live money paths verified HTTP 200 on oarcdigital.com (2026-09-17). */
export const MONEY_LINKS = [
  { href: "https://oarcdigital.com/services", label: "Services" },
  { href: "https://oarcdigital.com/our-work", label: "Our work" },
  { href: "https://oarcdigital.com/case-studies", label: "Case studies" },
  { href: "https://oarcdigital.com/creative", label: "Creative" },
  { href: "https://oarcdigital.com/automation", label: "Automation" },
  { href: "https://oarcdigital.com/voice-ai-worker", label: "Voice AI" },
] as const;

export const CTA_CLAIM = "Claim 50% off — Shift Happens";
export const CTA_WA = "WhatsApp now — 50% off Shift Happens";
export const CTA_URGENCY =
  "Shift Happens · 50% off for the next clients who contact now. Soft window — when seats fill, the offer closes.";
