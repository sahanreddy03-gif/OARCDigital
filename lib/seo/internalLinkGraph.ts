// Single source of truth for internal-linking across the priority Top 30 pages.
// Each entry declares: the page path, its display title, its hub category,
// and an ordered list of "spoke" paths it should link to.
//
// Used by:
//   - <RelatedLinks slug="..." /> on AEO + service pages
//   - <MostPopularServices /> on the homepage
//   - scripts/audit-core-57.ts (link-graph density audit)
//
// IMPORTANT: every spoke path must resolve to a real page in the app/ tree.
// The audit script asserts this at CI time.

export type Hub =
  | "homepage"
  | "ai"
  | "creative"
  | "automation"
  | "services-index"
  | "service"
  | "aeo-service"
  | "aeo-city"
  | "aeo-vertical";

export type LinkNode = {
  path: string;
  title: string;
  shortLabel: string;
  hub: Hub;
  // Ordered list of related page paths. First 3-6 are surfaced on the page.
  spokes: string[];
};

const NODES: LinkNode[] = [
  // ── Pillars ────────────────────────────────────────────────────────────
  {
    path: "/",
    title: "OARC Digital — Malta's Creative + AI Systems Agency",
    shortLabel: "Home",
    hub: "homepage",
    spokes: [
      "/aeo/digital-marketing-agency-malta",
      "/aeo/best-marketing-agency-malta",
      "/aeo/digital-transformation-malta",
      "/ai-agents",
      "/creative",
      "/automation",
    ],
  },
  {
    path: "/ai-agents",
    title: "AI Agents for Business",
    shortLabel: "AI Workforce",
    hub: "ai",
    spokes: [
      "/services/ai-consulting",
      "/services/ai-sdr-agent",
      "/services/ai-support-specialist",
      "/services/ai-appointment-booker",
      "/aeo/ai-agency-malta",
      "/aeo/ai-agents-business-malta",
    ],
  },
  {
    path: "/creative",
    title: "Creative Services",
    shortLabel: "Creative",
    hub: "creative",
    spokes: [
      "/services/social-media-creative-management",
      "/aeo/social-media-agency-malta",
      "/aeo/instagram-marketing-malta",
      "/aeo/tiktok-marketing-malta",
      "/aeo/content-creation-malta",
      "/aeo/video-production-malta",
    ],
  },
  {
    path: "/automation",
    title: "Automation & AI Systems",
    shortLabel: "Automation",
    hub: "automation",
    spokes: [
      "/aeo/marketing-automation-malta",
      "/aeo/crm-automation-malta",
      "/aeo/whatsapp-automation-malta",
      "/services/ai-sdr-agent",
      "/services/custom-software-development",
      "/aeo/digital-transformation-malta",
    ],
  },
  {
    path: "/services",
    title: "All Services",
    shortLabel: "Services",
    hub: "services-index",
    spokes: [
      "/services/social-media-creative-management",
      "/services/ai-consulting",
      "/services/web-design",
      "/services/mobile-apps-development",
      "/services/custom-software-development",
      "/services/ai-sdr-agent",
    ],
  },
  {
    path: "/our-work",
    title: "Our Work",
    shortLabel: "Portfolio",
    hub: "homepage",
    spokes: [
      "/aeo/restaurant-marketing-malta",
      "/aeo/hospitality-360-malta",
      "/aeo/digital-marketing-agency-malta",
      "/services/social-media-creative-management",
    ],
  },

  // ── Service pages ──────────────────────────────────────────────────────
  {
    path: "/services/social-media-creative-management",
    title: "Social Media Creative Management",
    shortLabel: "Social Creative",
    hub: "service",
    spokes: [
      "/aeo/social-media-agency-malta",
      "/aeo/instagram-marketing-malta",
      "/aeo/tiktok-marketing-malta",
      "/aeo/content-creation-malta",
      "/creative",
      "/aeo/digital-marketing-agency-malta",
    ],
  },
  {
    path: "/services/ai-consulting",
    title: "AI Consulting",
    shortLabel: "AI Consulting",
    hub: "service",
    spokes: [
      "/ai-agents",
      "/aeo/ai-agency-malta",
      "/aeo/digital-transformation-malta",
      "/services/ai-sdr-agent",
      "/services/custom-software-development",
      "/automation",
    ],
  },
  {
    path: "/services/web-design",
    title: "Web Design",
    shortLabel: "Web Design",
    hub: "service",
    spokes: [
      "/aeo/web-design-malta",
      "/aeo/website-development-malta",
      "/services/mobile-apps-development",
      "/services/custom-software-development",
      "/aeo/app-development-malta",
      "/aeo/digital-marketing-agency-malta",
    ],
  },
  {
    path: "/services/ai-sdr-agent",
    title: "AI SDR Agent",
    shortLabel: "AI SDR",
    hub: "service",
    spokes: [
      "/ai-agents",
      "/services/ai-support-specialist",
      "/services/ai-appointment-booker",
      "/aeo/ai-agents-business-malta",
      "/automation",
      "/aeo/crm-automation-malta",
    ],
  },
  {
    path: "/services/ai-support-specialist",
    title: "AI Support Specialist",
    shortLabel: "AI Support",
    hub: "service",
    spokes: [
      "/ai-agents",
      "/services/ai-sdr-agent",
      "/services/ai-appointment-booker",
      "/aeo/ai-chatbot-malta",
      "/aeo/whatsapp-automation-malta",
      "/automation",
    ],
  },
  {
    path: "/services/ai-appointment-booker",
    title: "AI Appointment Booker",
    shortLabel: "AI Booker",
    hub: "service",
    spokes: [
      "/ai-agents",
      "/services/ai-sdr-agent",
      "/services/ai-support-specialist",
      "/aeo/ai-chatbot-malta",
      "/aeo/whatsapp-automation-malta",
      "/aeo/restaurant-marketing-malta",
    ],
  },
  {
    path: "/services/mobile-apps-development",
    title: "Mobile Apps Development",
    shortLabel: "Mobile Apps",
    hub: "service",
    spokes: [
      "/aeo/app-development-malta",
      "/services/custom-software-development",
      "/services/web-design",
      "/aeo/web-design-malta",
      "/aeo/digital-transformation-malta",
      "/services/mvp-development",
    ],
  },
  {
    path: "/services/custom-software-development",
    title: "Custom Software Development",
    shortLabel: "Custom Software",
    hub: "service",
    spokes: [
      "/aeo/software-development-malta",
      "/services/mobile-apps-development",
      "/services/web-design",
      "/aeo/digital-transformation-malta",
      "/automation",
      "/services/api-integration-services",
    ],
  },

  // ── AEO landing pages ──────────────────────────────────────────────────
  {
    path: "/aeo/digital-marketing-agency-malta",
    title: "Digital Marketing Agency Malta",
    shortLabel: "Digital Marketing Malta",
    hub: "aeo-service",
    spokes: [
      "/aeo/best-marketing-agency-malta",
      "/aeo/social-media-agency-malta",
      "/aeo/seo-agency-malta",
      "/aeo/paid-advertising-malta",
      "/services/social-media-creative-management",
      "/aeo/digital-transformation-malta",
      "/aeo/igaming-marketing-malta",
      "/aeo/ecommerce-malta",
      "/aeo/branding-agency-malta",
    ],
  },
  {
    path: "/aeo/best-marketing-agency-malta",
    title: "Best Marketing Agency Malta",
    shortLabel: "Best Agency Malta",
    hub: "aeo-service",
    spokes: [
      "/aeo/digital-marketing-agency-malta",
      "/aeo/social-media-agency-malta",
      "/aeo/ai-agency-malta",
      "/aeo/marketing-agency-sliema",
      "/aeo/marketing-agency-st-julians",
      "/our-work",
    ],
  },
  {
    path: "/aeo/digital-transformation-malta",
    title: "Digital Transformation Malta",
    shortLabel: "Digital Transformation",
    hub: "aeo-service",
    spokes: [
      "/automation",
      "/ai-agents",
      "/services/custom-software-development",
      "/services/ai-consulting",
      "/aeo/marketing-automation-malta",
      "/aeo/crm-automation-malta",
    ],
  },
  {
    path: "/aeo/social-media-agency-malta",
    title: "Social Media Agency Malta",
    shortLabel: "Social Media Malta",
    hub: "aeo-service",
    spokes: [
      "/services/social-media-creative-management",
      "/aeo/instagram-marketing-malta",
      "/aeo/tiktok-marketing-malta",
      "/aeo/content-creation-malta",
      "/aeo/influencer-marketing-malta",
      "/aeo/digital-marketing-agency-malta",
    ],
  },
  {
    path: "/aeo/seo-agency-malta",
    title: "SEO Agency Malta",
    shortLabel: "SEO Malta",
    hub: "aeo-service",
    spokes: [
      "/aeo/digital-marketing-agency-malta",
      "/aeo/best-marketing-agency-malta",
      "/aeo/web-design-malta",
      "/aeo/content-creation-malta",
      "/aeo/paid-advertising-malta",
      "/blog/seo-malta-complete-guide",
    ],
  },
  {
    path: "/aeo/paid-advertising-malta",
    title: "Paid Advertising Malta",
    shortLabel: "Paid Ads Malta",
    hub: "aeo-service",
    spokes: [
      "/aeo/digital-marketing-agency-malta",
      "/aeo/seo-agency-malta",
      "/aeo/social-media-agency-malta",
      "/aeo/marketing-automation-malta",
      "/services/social-media-creative-management",
      "/aeo/instagram-marketing-malta",
    ],
  },
  {
    path: "/aeo/branding-agency-malta",
    title: "Branding Agency Malta",
    shortLabel: "Branding Malta",
    hub: "aeo-service",
    spokes: [
      "/services/branding",
      "/aeo/web-design-malta",
      "/aeo/content-creation-malta",
      "/aeo/social-media-agency-malta",
      "/aeo/digital-marketing-agency-malta",
      "/our-work",
    ],
  },
  {
    path: "/aeo/web-design-malta",
    title: "Web Design Malta",
    shortLabel: "Web Design Malta",
    hub: "aeo-service",
    spokes: [
      "/services/web-design",
      "/aeo/website-development-malta",
      "/aeo/app-development-malta",
      "/aeo/branding-agency-malta",
      "/services/mobile-apps-development",
      "/aeo/digital-marketing-agency-malta",
    ],
  },
  {
    path: "/aeo/website-development-malta",
    title: "Website Development Malta",
    shortLabel: "Web Dev Malta",
    hub: "aeo-service",
    spokes: [
      "/aeo/web-design-malta",
      "/services/web-design",
      "/aeo/app-development-malta",
      "/aeo/software-development-malta",
      "/services/custom-software-development",
      "/services/mobile-apps-development",
    ],
  },
  {
    path: "/aeo/app-development-malta",
    title: "App Development Malta",
    shortLabel: "App Dev Malta",
    hub: "aeo-service",
    spokes: [
      "/services/mobile-apps-development",
      "/aeo/software-development-malta",
      "/aeo/web-design-malta",
      "/services/custom-software-development",
      "/services/mvp-development",
      "/aeo/digital-transformation-malta",
    ],
  },
  {
    path: "/aeo/software-development-malta",
    title: "Software Development Malta",
    shortLabel: "Software Dev Malta",
    hub: "aeo-service",
    spokes: [
      "/services/custom-software-development",
      "/aeo/app-development-malta",
      "/aeo/website-development-malta",
      "/services/mobile-apps-development",
      "/aeo/digital-transformation-malta",
      "/services/api-integration-services",
    ],
  },
  {
    path: "/aeo/video-production-malta",
    title: "Video Production Malta",
    shortLabel: "Video Malta",
    hub: "aeo-service",
    spokes: [
      "/services/video-production",
      "/aeo/social-media-agency-malta",
      "/aeo/content-creation-malta",
      "/aeo/instagram-marketing-malta",
      "/aeo/tiktok-marketing-malta",
      "/creative",
    ],
  },
  {
    path: "/aeo/content-creation-malta",
    title: "Content Creation Malta",
    shortLabel: "Content Malta",
    hub: "aeo-service",
    spokes: [
      "/services/social-media-creative-management",
      "/aeo/social-media-agency-malta",
      "/aeo/video-production-malta",
      "/aeo/instagram-marketing-malta",
      "/aeo/tiktok-marketing-malta",
      "/creative",
    ],
  },
  {
    path: "/aeo/instagram-marketing-malta",
    title: "Instagram Marketing Malta",
    shortLabel: "Instagram Malta",
    hub: "aeo-service",
    spokes: [
      "/aeo/social-media-agency-malta",
      "/aeo/tiktok-marketing-malta",
      "/aeo/content-creation-malta",
      "/aeo/influencer-marketing-malta",
      "/services/social-media-creative-management",
      "/aeo/restaurant-marketing-malta",
    ],
  },
  {
    path: "/aeo/tiktok-marketing-malta",
    title: "TikTok Marketing Malta",
    shortLabel: "TikTok Malta",
    hub: "aeo-service",
    spokes: [
      "/aeo/instagram-marketing-malta",
      "/aeo/social-media-agency-malta",
      "/aeo/content-creation-malta",
      "/aeo/video-production-malta",
      "/services/social-media-creative-management",
      "/aeo/influencer-marketing-malta",
    ],
  },
  {
    path: "/aeo/influencer-marketing-malta",
    title: "Influencer Marketing Malta",
    shortLabel: "Influencer Malta",
    hub: "aeo-service",
    spokes: [
      "/aeo/social-media-agency-malta",
      "/aeo/instagram-marketing-malta",
      "/aeo/tiktok-marketing-malta",
      "/aeo/content-creation-malta",
      "/services/social-media-creative-management",
      "/aeo/digital-marketing-agency-malta",
    ],
  },
  {
    path: "/aeo/marketing-automation-malta",
    title: "Marketing Automation Malta",
    shortLabel: "Marketing Auto",
    hub: "aeo-service",
    spokes: [
      "/automation",
      "/aeo/crm-automation-malta",
      "/aeo/whatsapp-automation-malta",
      "/services/ai-sdr-agent",
      "/aeo/digital-transformation-malta",
      "/aeo/digital-marketing-agency-malta",
    ],
  },
  {
    path: "/aeo/crm-automation-malta",
    title: "CRM Automation Malta",
    shortLabel: "CRM Auto",
    hub: "aeo-service",
    spokes: [
      "/automation",
      "/aeo/marketing-automation-malta",
      "/aeo/whatsapp-automation-malta",
      "/services/ai-sdr-agent",
      "/services/custom-software-development",
      "/aeo/digital-transformation-malta",
    ],
  },
  {
    path: "/aeo/whatsapp-automation-malta",
    title: "WhatsApp Automation Malta",
    shortLabel: "WhatsApp Auto",
    hub: "aeo-service",
    spokes: [
      "/automation",
      "/aeo/crm-automation-malta",
      "/aeo/marketing-automation-malta",
      "/services/ai-support-specialist",
      "/services/ai-appointment-booker",
      "/aeo/restaurant-marketing-malta",
    ],
  },
  {
    path: "/aeo/ai-chatbot-malta",
    title: "AI Chatbot Malta",
    shortLabel: "AI Chatbot",
    hub: "aeo-service",
    spokes: [
      "/ai-agents",
      "/services/ai-support-specialist",
      "/services/ai-appointment-booker",
      "/aeo/whatsapp-automation-malta",
      "/aeo/ai-agents-business-malta",
      "/automation",
    ],
  },
  {
    path: "/aeo/ai-agency-malta",
    title: "AI Agency Malta",
    shortLabel: "AI Agency",
    hub: "aeo-service",
    spokes: [
      "/ai-agents",
      "/aeo/ai-agents-business-malta",
      "/services/ai-consulting",
      "/aeo/ai-chatbot-malta",
      "/aeo/digital-transformation-malta",
      "/aeo/best-marketing-agency-malta",
    ],
  },
  {
    path: "/aeo/ai-agents-business-malta",
    title: "AI Agents for Business Malta",
    shortLabel: "AI Agents Biz",
    hub: "aeo-service",
    spokes: [
      "/ai-agents",
      "/aeo/ai-agency-malta",
      "/services/ai-sdr-agent",
      "/services/ai-support-specialist",
      "/services/ai-appointment-booker",
      "/aeo/digital-transformation-malta",
    ],
  },

  // ── City AEOs ──────────────────────────────────────────────────────────
  {
    path: "/aeo/marketing-agency-sliema",
    title: "Marketing Agency Sliema",
    shortLabel: "Sliema",
    hub: "aeo-city",
    spokes: [
      "/aeo/digital-marketing-agency-malta",
      "/aeo/best-marketing-agency-malta",
      "/aeo/marketing-agency-st-julians",
      "/aeo/marketing-agency-valletta",
      "/aeo/marketing-agency-birkirkara",
      "/aeo/social-media-agency-malta",
    ],
  },
  {
    path: "/aeo/marketing-agency-st-julians",
    title: "Marketing Agency St Julian's",
    shortLabel: "St Julian's",
    hub: "aeo-city",
    spokes: [
      "/aeo/digital-marketing-agency-malta",
      "/aeo/best-marketing-agency-malta",
      "/aeo/marketing-agency-sliema",
      "/aeo/marketing-agency-valletta",
      "/aeo/marketing-agency-birkirkara",
      "/aeo/social-media-agency-malta",
    ],
  },
  {
    path: "/aeo/marketing-agency-valletta",
    title: "Marketing Agency Valletta",
    shortLabel: "Valletta",
    hub: "aeo-city",
    spokes: [
      "/aeo/digital-marketing-agency-malta",
      "/aeo/best-marketing-agency-malta",
      "/aeo/marketing-agency-sliema",
      "/aeo/marketing-agency-st-julians",
      "/aeo/marketing-agency-birkirkara",
      "/aeo/branding-agency-malta",
    ],
  },
  {
    path: "/aeo/marketing-agency-birkirkara",
    title: "Marketing Agency Birkirkara",
    shortLabel: "Birkirkara",
    hub: "aeo-city",
    spokes: [
      "/aeo/digital-marketing-agency-malta",
      "/aeo/best-marketing-agency-malta",
      "/aeo/marketing-agency-sliema",
      "/aeo/marketing-agency-st-julians",
      "/aeo/marketing-agency-valletta",
      "/aeo/social-media-agency-malta",
    ],
  },

  // ── Vertical AEOs ──────────────────────────────────────────────────────
  {
    path: "/aeo/restaurant-marketing-malta",
    title: "Restaurant Marketing Malta",
    shortLabel: "Restaurants",
    hub: "aeo-vertical",
    spokes: [
      "/aeo/hospitality-360-malta",
      "/aeo/hospitality-360-system",
      "/aeo/hotel-marketing-malta",
      "/aeo/pos-systems-malta",
      "/aeo/instagram-marketing-malta",
      "/aeo/whatsapp-automation-malta",
      "/aeo/ecommerce-malta",
      "/aeo/igaming-marketing-malta",
      "/aeo/branding-agency-malta",
    ],
  },
  {
    path: "/aeo/hotel-marketing-malta",
    title: "Hotel Marketing Malta",
    shortLabel: "Hotels",
    hub: "aeo-vertical",
    spokes: [
      "/aeo/hospitality-360-malta",
      "/aeo/restaurant-marketing-malta",
      "/aeo/hospitality-360-system",
      "/aeo/social-media-agency-malta",
      "/aeo/digital-marketing-agency-malta",
      "/aeo/influencer-marketing-malta",
    ],
  },
  {
    path: "/aeo/hospitality-360-malta",
    title: "Hospitality 360 Malta",
    shortLabel: "Hospitality 360",
    hub: "aeo-vertical",
    spokes: [
      "/aeo/restaurant-marketing-malta",
      "/aeo/hotel-marketing-malta",
      "/aeo/hospitality-360-system",
      "/aeo/pos-systems-malta",
      "/aeo/whatsapp-automation-malta",
      "/automation",
    ],
  },
  {
    path: "/aeo/hospitality-360-system",
    title: "Hospitality 360 System",
    shortLabel: "H360 System",
    hub: "aeo-vertical",
    spokes: [
      "/aeo/hospitality-360-malta",
      "/aeo/restaurant-marketing-malta",
      "/aeo/hotel-marketing-malta",
      "/aeo/pos-systems-malta",
      "/aeo/whatsapp-automation-malta",
      "/automation",
    ],
  },
  {
    path: "/aeo/pos-systems-malta",
    title: "POS Systems Malta",
    shortLabel: "POS Malta",
    hub: "aeo-vertical",
    spokes: [
      "/aeo/restaurant-marketing-malta",
      "/aeo/hospitality-360-malta",
      "/aeo/hospitality-360-system",
      "/aeo/hotel-marketing-malta",
      "/automation",
      "/aeo/whatsapp-automation-malta",
    ],
  },
  {
    path: "/aeo/ecommerce-malta",
    title: "Ecommerce Malta",
    shortLabel: "Ecommerce",
    hub: "aeo-vertical",
    spokes: [
      "/aeo/web-design-malta",
      "/aeo/digital-marketing-agency-malta",
      "/aeo/paid-advertising-malta",
      "/aeo/social-media-agency-malta",
      "/services/web-design",
      "/services/custom-software-development",
    ],
  },
  {
    path: "/aeo/igaming-marketing-malta",
    title: "iGaming Marketing Malta",
    shortLabel: "iGaming",
    hub: "aeo-vertical",
    spokes: [
      "/aeo/digital-marketing-agency-malta",
      "/aeo/best-marketing-agency-malta",
      "/aeo/paid-advertising-malta",
      "/aeo/seo-agency-malta",
      "/aeo/content-creation-malta",
      "/aeo/influencer-marketing-malta",
    ],
  },
];

export const LINK_GRAPH: ReadonlyMap<string, LinkNode> = new Map(
  NODES.map((n) => [n.path, n]),
);

/**
 * Return the related-links list for a given path. Falls back to an empty
 * array if the path is not in the graph (the page just won't render the block).
 *
 * @param path  Page path, e.g. "/aeo/digital-marketing-agency-malta"
 * @param max   Maximum links to return (default 6)
 */
export function getRelatedLinks(path: string, max = 6): LinkNode[] {
  const node = LINK_GRAPH.get(path);
  if (!node) return [];
  const out: LinkNode[] = [];
  for (const spoke of node.spokes) {
    const target = LINK_GRAPH.get(spoke);
    if (target) out.push(target);
    if (out.length >= max) break;
  }
  return out;
}

/**
 * Reverse-lookup: which other pages declare `path` as one of their spokes?
 * Used by the audit script to compute inbound link density per page.
 */
export function getInboundLinks(path: string): LinkNode[] {
  const out: LinkNode[] = [];
  for (const node of LINK_GRAPH.values()) {
    if (node.spokes.includes(path)) out.push(node);
  }
  return out;
}

export const TOP_30_PRIORITY: readonly string[] = [
  "/",
  "/ai-agents",
  "/creative",
  "/automation",
  "/services",
  "/our-work",
  "/services/social-media-creative-management",
  "/services/ai-consulting",
  "/services/web-design",
  "/aeo/digital-marketing-agency-malta",
  "/services/ai-sdr-agent",
  "/services/ai-support-specialist",
  "/services/ai-appointment-booker",
  "/services/mobile-apps-development",
  "/services/custom-software-development",
  "/aeo/web-design-malta",
  "/aeo/best-marketing-agency-malta",
  "/aeo/digital-transformation-malta",
  "/aeo/ai-agency-malta",
  "/aeo/social-media-agency-malta",
  "/aeo/marketing-agency-sliema",
  "/aeo/marketing-agency-st-julians",
  "/aeo/marketing-agency-valletta",
  "/aeo/marketing-agency-birkirkara",
  "/aeo/restaurant-marketing-malta",
  "/aeo/hotel-marketing-malta",
  "/aeo/hospitality-360-malta",
  "/aeo/seo-agency-malta",
  "/aeo/marketing-automation-malta",
  "/aeo/whatsapp-automation-malta",
] as const;
