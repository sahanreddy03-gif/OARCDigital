// Centralised conversion-link builders. Every WhatsApp / call / Cal.com link
// across the app MUST go through these so attribution lands consistently in
// GA4 + Clarity + WhatsApp Business inbox.
//
// No silent fallbacks. If an env-gated destination
// (Cal.com booking URL) is not configured, the helper returns `null` and the
// caller is responsible for hiding the slot rather than rendering a broken
// link.

import { NAP } from "@/lib/seo/nap";

const WHATSAPP_NUMBER = NAP.whatsappNumber;
const PHONE_E164 = NAP.phoneE164;

const DEFAULT_WHATSAPP_MESSAGE =
  "Hi OARC Digital, I'd like to talk about a project.";

function withUtm(href: string, sourcePath: string, medium: string, campaign = "organic") {
  const join = href.includes("?") ? "&" : "?";
  const params = new URLSearchParams({
    utm_source: sourcePath || "/",
    utm_medium: medium,
    utm_campaign: campaign,
  });
  return `${href}${join}${params.toString()}`;
}

/**
 * WhatsApp click-to-chat URL with UTM attribution. wa.me ignores extra query
 * params for routing but the params survive into GA4 outbound-link tracking,
 * which is the attribution surface we care about.
 */
export function whatsappUrl(sourcePath: string, message?: string) {
  const text = message ?? DEFAULT_WHATSAPP_MESSAGE;
  const base = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  return withUtm(base, sourcePath, "whatsapp");
}

/** tel: link — no UTM possible on tel:, attribution comes from GA4 click event. */
export function callUrl() {
  return `tel:${PHONE_E164}`;
}

/**
 * Cal.com booking URL. Returns `null` when NEXT_PUBLIC_CALCOM_BOOKING_URL is
 * not set so callers explicitly handle the missing-config case.
 */
export function calcomUrl(sourcePath: string): string | null {
  const base = process.env.NEXT_PUBLIC_CALCOM_BOOKING_URL?.trim();
  if (!base) return null;
  return withUtm(base, sourcePath, "calcom", "booking");
}

export const CONTACT = {
  phoneE164: PHONE_E164,
  whatsappNumber: WHATSAPP_NUMBER,
  email: NAP.email,
};
