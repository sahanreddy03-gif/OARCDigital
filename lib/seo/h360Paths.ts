/** Canonical H360 cluster URLs for sitemap + llms.txt — keep in sync with app/h360 routes */
import type { UrlEntry } from "./sitemapHelpers";

export type H360PathEntry = {
  path: string;
  title: string;
  description: string;
  /** Sitemap priority 0–1 */
  priority: number;
  changefreq: UrlEntry["changefreq"];
  /** Repo path for lastmod; defaults to app${path}/page.tsx */
  source?: string;
  kind: "hub" | "product" | "pillar" | "pain" | "faq";
};

export const H360_SITE_BASE = "https://oarcdigital.com";

export const H360_PATHS: H360PathEntry[] = [
  {
    path: "/h360",
    title: "H360 by OARC Digital — Restaurant Marketing Malta",
    description:
      "H360 is OARC Digital's restaurant-only growth system for Malta — Google Visibility, reviews, social, website, direct orders, loyalty, and floor operations in one hub.",
    priority: 1.0,
    changefreq: "weekly",
    source: "app/h360/page.tsx",
    kind: "hub",
  },
  // ── 18 hub product cards (+ SEARCH spoke) ─────────────────────────────
  {
    path: "/h360/google-business-profile-restaurant-malta",
    title: "Google Business Profile Restaurant Malta",
    description: "Google Business Profile management for Malta restaurants — active GBP, posts, photos, review replies, and local SEO.",
    priority: 0.9,
    changefreq: "monthly",
    kind: "product",
  },
  {
    path: "/h360/restaurant-seo-malta",
    title: "Restaurant SEO Malta",
    description: "Restaurant SEO for Malta — rank for 'best pizza Malta', menu keywords, and local search without reading 20-page reports.",
    priority: 0.85,
    changefreq: "monthly",
    kind: "product",
  },
  {
    path: "/h360/get-more-google-reviews-restaurant-malta",
    title: "Get More Google Reviews Restaurant Malta",
    description: "Smart Google review automation for Malta restaurants — more 5-star reviews, AI-drafted replies, better Maps ranking.",
    priority: 0.9,
    changefreq: "monthly",
    kind: "product",
  },
  {
    path: "/h360/restaurant-social-media-malta",
    title: "Restaurant Social Media Malta",
    description: "Restaurant social media and paid ads for Malta — content, reels, and campaigns that fill tables.",
    priority: 0.85,
    changefreq: "monthly",
    kind: "product",
  },
  {
    path: "/h360/restaurant-website-malta",
    title: "Restaurant Website Malta",
    description: "Mobile-first restaurant websites for Malta — menu, hours, booking, and Google-ready SEO.",
    priority: 0.85,
    changefreq: "monthly",
    kind: "product",
  },
  {
    path: "/h360/restaurant-management-system-malta",
    title: "Restaurant Management System Malta",
    description: "Full restaurant operating system for Malta — menu, orders, kitchen, loyalty, and owner dashboard in one H360 stack.",
    priority: 0.8,
    changefreq: "monthly",
    kind: "product",
  },
  {
    path: "/h360/restaurant-booking-system-malta",
    title: "Restaurant Booking System Malta",
    description: "Table booking for Malta restaurants — online reservations, no double-booking, confirmed covers on your phone.",
    priority: 0.85,
    changefreq: "monthly",
    kind: "product",
  },
  {
    path: "/h360/restaurant-table-ordering-qr-malta",
    title: "Restaurant Table Ordering QR Malta",
    description: "QR table ordering for Malta restaurants — guests order on phone, kitchen gets tickets, you keep delivery-app margin.",
    priority: 0.9,
    changefreq: "monthly",
    kind: "product",
  },
  {
    path: "/h360/restaurant-qr-payment-malta",
    title: "Restaurant QR Payment Malta",
    description: "Pay-at-table QR for Malta restaurants — fast checkout, full margin, no platform fees.",
    priority: 0.8,
    changefreq: "monthly",
    kind: "product",
  },
  {
    path: "/h360/digital-stamp-card-restaurant-malta",
    title: "Digital Stamp Card Restaurant Malta",
    description: "Digital stamp cards in Apple/Google Wallet for Malta restaurants — eat 8 get 1 free without paper or staff scanning.",
    priority: 0.85,
    changefreq: "monthly",
    kind: "product",
  },
  {
    path: "/h360/restaurant-loyalty-card-malta",
    title: "Restaurant Loyalty Card Malta",
    description: "Wallet loyalty passes for Malta restaurants — points, tiers, and win-back without a venue app.",
    priority: 0.85,
    changefreq: "monthly",
    kind: "product",
  },
  {
    path: "/h360/whatsapp-marketing-restaurant-malta",
    title: "WhatsApp Marketing Restaurant Malta",
    description: "WhatsApp marketing for Malta restaurants — broadcasts, offers, and reactivation to guests who already opted in.",
    priority: 0.85,
    changefreq: "monthly",
    kind: "product",
  },
  {
    path: "/h360/restaurant-sms-marketing-malta",
    title: "Restaurant SMS Marketing Malta",
    description: "SMS and wallet win-back for Malta restaurants — reach lapsed guests without buying phone lists.",
    priority: 0.85,
    changefreq: "monthly",
    kind: "product",
  },
  {
    path: "/h360/restaurant-event-promotion-malta",
    title: "Restaurant Event Promotion Malta",
    description: "Event promotion and RSVPs for Malta restaurants — live music nights, wine dinners, filled seats.",
    priority: 0.8,
    changefreq: "monthly",
    kind: "product",
  },
  {
    path: "/h360/restaurant-analytics-without-pos-malta",
    title: "Restaurant Analytics Without POS Malta",
    description: "Owner analytics for Malta restaurants without a POS — revenue, covers, and what to fix first.",
    priority: 0.8,
    changefreq: "monthly",
    kind: "product",
  },
  {
    path: "/h360/recipe-costing-restaurant-malta",
    title: "Recipe Costing Restaurant Malta",
    description: "Recipe and dish margin costing for Malta restaurants — real food cost per plate, not guesswork.",
    priority: 0.75,
    changefreq: "monthly",
    kind: "product",
  },
  {
    path: "/h360/restaurant-stock-management-malta",
    title: "Restaurant Stock Management Malta",
    description: "Stock and inventory for Malta restaurants — low-stock alerts, never 86 the bestseller.",
    priority: 0.75,
    changefreq: "monthly",
    kind: "product",
  },
  {
    path: "/h360/restaurant-staff-scheduling-malta",
    title: "Restaurant Staff Scheduling Malta",
    description: "Staff rosters and shift confirmations for Malta restaurants — WhatsApp yes/no, sick cover in minutes.",
    priority: 0.75,
    changefreq: "monthly",
    kind: "product",
  },
  {
    path: "/h360/restaurant-table-management-malta",
    title: "Restaurant Table Management Malta",
    description: "Live floor plan and table turns for Malta restaurants — see occupied tables and seat the next walk-in.",
    priority: 0.75,
    changefreq: "monthly",
    kind: "product",
  },
  // ── Pillars ───────────────────────────────────────────────────────────
  {
    path: "/h360/google-maps-restaurant-malta",
    title: "Google Maps for Restaurants Malta",
    description: "Pillar guide — get found on Google Maps in Malta with active GBP and the searches-to-calls metric owners need.",
    priority: 0.9,
    changefreq: "monthly",
    kind: "pillar",
  },
  {
    path: "/h360/restaurant-reviews-malta",
    title: "Restaurant Reviews Malta",
    description: "Pillar guide — more Google reviews, faster replies, and trust that converts searchers into walk-ins.",
    priority: 0.85,
    changefreq: "monthly",
    kind: "pillar",
  },
  {
    path: "/h360/restaurant-pos-system-malta",
    title: "Restaurant POS System Malta",
    description: "Pillar guide — POS, kitchen, and payments for Malta restaurants without losing margin to platforms.",
    priority: 0.8,
    changefreq: "monthly",
    kind: "pillar",
  },
  // ── Pain / intent pages ───────────────────────────────────────────────
  {
    path: "/h360/why-is-my-restaurant-empty",
    title: "Why Is My Restaurant Empty?",
    description: "Diagnosis for quiet Malta restaurants — visibility, reviews, offers, and the H360 fixes that fill tables.",
    priority: 0.75,
    changefreq: "monthly",
    kind: "pain",
  },
  {
    path: "/h360/why-am-i-not-on-google-maps",
    title: "Why Am I Not on Google Maps?",
    description: "Fix missing or low-ranking Google Maps listings for Malta restaurants — claim, verify, and stay active.",
    priority: 0.8,
    changefreq: "monthly",
    kind: "pain",
  },
  {
    path: "/h360/how-to-get-more-customers-restaurant-malta",
    title: "How to Get More Customers Restaurant Malta",
    description: "Practical playbook for more restaurant customers in Malta — Google, reviews, direct orders, and loyalty.",
    priority: 0.8,
    changefreq: "monthly",
    kind: "pain",
  },
  {
    path: "/h360/how-to-get-more-google-reviews-restaurant",
    title: "How to Get More Google Reviews Restaurant",
    description: "Step-by-step for more 5-star Google reviews at Malta restaurants — timing, QR, and smart follow-up.",
    priority: 0.8,
    changefreq: "monthly",
    kind: "pain",
  },
  {
    path: "/h360/losing-money-to-wolt-bolt-malta",
    title: "Losing Money to Wolt and Bolt Malta",
    description: "How Malta restaurants escape delivery-app margin loss with direct QR ordering and owned guest data.",
    priority: 0.85,
    changefreq: "monthly",
    kind: "pain",
  },
  {
    path: "/h360/restaurant-not-getting-walk-ins",
    title: "Restaurant Not Getting Walk-ins Malta",
    description: "Why walk-ins dropped and what Malta restaurant owners fix first — Maps, hours, photos, and local SEO.",
    priority: 0.8,
    changefreq: "monthly",
    kind: "pain",
  },
  {
    path: "/h360/faq",
    title: "H360 FAQ — Restaurant Marketing Malta",
    description: "Frequently asked questions about H360 by OARC Digital — pricing, setup, Google, orders, and loyalty for Malta restaurants.",
    priority: 0.7,
    changefreq: "monthly",
    kind: "faq",
  },
];

export function h360SourcePath(entry: H360PathEntry): string {
  return entry.source ?? `app${entry.path}/page.tsx`;
}

export function h360Canonical(path: string): string {
  return path === "/h360" ? `${H360_SITE_BASE}/h360` : `${H360_SITE_BASE}${path}`;
}
