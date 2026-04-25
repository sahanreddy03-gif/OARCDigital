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
  | "aeo-vertical"
  | "blog";

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
      "/services/marketing-automation-suite",
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
      "/services/paid-advertising",
      "/services/marketing-automation-suite",
      "/services/branding",
      "/services/video-production",
      "/services/seo-services",
      "/services/saas-development",
      "/services/ecommerce-development",
      "/services/wordpress-development",
      "/services/shopify-development",
      "/services/email-marketing",
      "/services/content-marketing",
      "/services/devops-services",
      "/services/database-design",
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
      "/services/video-production",
      "/services/paid-advertising",
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
      "/services/branding",
      "/aeo/app-development-malta",
      "/aeo/digital-marketing-agency-malta",
      "/services/wordpress-development",
      "/services/shopify-development",
      "/services/ecommerce-development",
      "/aeo/web-development-agency-malta",
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
      "/services/marketing-automation-suite",
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
      "/aeo/mobile-app-developers-malta",
      "/services/saas-development",
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
      "/services/saas-development",
      "/services/devops-services",
      "/services/database-design",
      "/aeo/saas-development-malta",
      "/aeo/custom-software-malta",
      "/aeo/outsource-development-malta",
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
      "/services/paid-advertising",
      "/services/branding",
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
      "/services/branding",
      "/services/paid-advertising",
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
      "/services/branding",
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
      "/services/paid-advertising",
      "/services/seo-services",
      "/services/content-marketing",
      "/blog/seo-malta-complete-guide",
    ],
  },
  {
    path: "/aeo/paid-advertising-malta",
    title: "Paid Advertising Malta",
    shortLabel: "Paid Ads Malta",
    hub: "aeo-service",
    spokes: [
      "/services/paid-advertising",
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
      "/services/video-production",
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
      "/services/wordpress-development",
      "/aeo/web-development-agency-malta",
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
      "/aeo/web-development-agency-malta",
      "/services/wordpress-development",
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
      "/aeo/mobile-app-developers-malta",
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
      "/services/saas-development",
      "/services/devops-services",
      "/services/database-design",
      "/aeo/saas-development-malta",
      "/aeo/custom-software-malta",
      "/aeo/outsource-development-malta",
      "/aeo/web-development-agency-malta",
      "/aeo/mobile-app-developers-malta",
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
      "/services/video-production",
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
      "/services/video-production",
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
      "/services/video-production",
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
      "/services/marketing-automation-suite",
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
      "/services/marketing-automation-suite",
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
      "/services/marketing-automation-suite",
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
      "/services/marketing-automation-suite",
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
      "/aeo/marketing-agency-gzira",
      "/aeo/marketing-agency-swieqi",
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
      "/aeo/marketing-agency-swieqi",
      "/aeo/marketing-agency-gzira",
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
      "/aeo/marketing-agency-mosta",
      "/aeo/marketing-agency-qormi",
      "/aeo/marketing-agency-paola",
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
      "/services/paid-advertising",
      "/aeo/social-media-agency-malta",
      "/services/web-design",
      "/services/custom-software-development",
      "/services/ecommerce-development",
      "/services/shopify-development",
      "/services/email-marketing",
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
      "/services/paid-advertising",
      "/aeo/seo-agency-malta",
      "/aeo/content-creation-malta",
      "/aeo/influencer-marketing-malta",
    ],
  },
  // Service-shell + blog leaves referenced as spokes from other nodes. They
  // are declared here (without their own outbound spokes) so the production
  // graph validator does not throw. Their own SEO content lives in their
  // route files; this graph node exists only so getRelatedLinks() can resolve
  // titles when these are surfaced in another page's RelatedLinks block.
  {
    path: "/services/mvp-development",
    title: "MVP Development",
    shortLabel: "MVP",
    hub: "service",
    spokes: [],
  },
  {
    path: "/services/api-integration-services",
    title: "API & Integration Services",
    shortLabel: "API Integration",
    hub: "service",
    spokes: [],
  },
  {
    path: "/services/branding",
    title: "Branding & Identity",
    shortLabel: "Branding",
    hub: "service",
    spokes: [
      "/aeo/branding-agency-malta",
      "/aeo/digital-marketing-agency-malta",
      "/services/web-design",
      "/services/social-media-creative-management",
      "/services/video-production",
      "/creative",
    ],
  },
  {
    path: "/services/video-production",
    title: "Video Production",
    shortLabel: "Video",
    hub: "service",
    spokes: [
      "/aeo/video-production-malta",
      "/aeo/content-creation-malta",
      "/aeo/instagram-marketing-malta",
      "/aeo/tiktok-marketing-malta",
      "/services/social-media-creative-management",
      "/creative",
    ],
  },
  {
    path: "/services/paid-advertising",
    title: "Paid Advertising",
    shortLabel: "Paid Ads",
    hub: "service",
    spokes: [
      "/aeo/paid-advertising-malta",
      "/aeo/digital-marketing-agency-malta",
      "/aeo/seo-agency-malta",
      "/services/social-media-creative-management",
      "/services/marketing-automation-suite",
      "/aeo/igaming-marketing-malta",
    ],
  },
  {
    path: "/services/marketing-automation-suite",
    title: "Marketing Automation Suite",
    shortLabel: "Marketing Automation",
    hub: "service",
    spokes: [
      "/aeo/marketing-automation-malta",
      "/aeo/crm-automation-malta",
      "/aeo/whatsapp-automation-malta",
      "/services/ai-sdr-agent",
      "/services/ai-support-specialist",
      "/automation",
      "/services/email-marketing",
    ],
  },
  {
    path: "/blog/seo-malta-complete-guide",
    title: "SEO Malta: Complete Guide",
    shortLabel: "SEO Guide",
    hub: "blog",
    spokes: [],
  },

  // ── Phase C: 9 new service pages (Task #70) ────────────────────────────
  {
    path: "/services/seo-services",
    title: "SEO Services Malta",
    shortLabel: "SEO Services",
    hub: "service",
    spokes: [
      "/aeo/seo-agency-malta",
      "/services/content-marketing",
      "/aeo/digital-marketing-agency-malta",
      "/services/web-design",
      "/blog/seo-malta-complete-guide",
      "/aeo/best-marketing-agency-malta",
    ],
  },
  {
    path: "/services/saas-development",
    title: "SaaS Development",
    shortLabel: "SaaS Dev",
    hub: "service",
    spokes: [
      "/aeo/saas-development-malta",
      "/services/custom-software-development",
      "/services/mvp-development",
      "/services/database-design",
      "/services/devops-services",
      "/aeo/software-development-malta",
    ],
  },
  {
    path: "/services/content-marketing",
    title: "Content Marketing",
    shortLabel: "Content Marketing",
    hub: "service",
    spokes: [
      "/services/seo-services",
      "/aeo/content-creation-malta",
      "/services/social-media-creative-management",
      "/services/email-marketing",
      "/aeo/best-marketing-agency-malta",
      "/aeo/digital-marketing-agency-malta",
    ],
  },
  {
    path: "/services/email-marketing",
    title: "Email Marketing",
    shortLabel: "Email Marketing",
    hub: "service",
    spokes: [
      "/services/marketing-automation-suite",
      "/services/content-marketing",
      "/aeo/marketing-automation-malta",
      "/aeo/crm-automation-malta",
      "/services/ecommerce-development",
      "/aeo/digital-marketing-agency-malta",
    ],
  },
  {
    path: "/services/ecommerce-development",
    title: "Ecommerce Development",
    shortLabel: "Ecommerce Dev",
    hub: "service",
    spokes: [
      "/aeo/ecommerce-malta",
      "/services/shopify-development",
      "/services/wordpress-development",
      "/services/web-design",
      "/services/email-marketing",
      "/services/paid-advertising",
    ],
  },
  {
    path: "/services/wordpress-development",
    title: "WordPress Development",
    shortLabel: "WordPress",
    hub: "service",
    spokes: [
      "/services/web-design",
      "/services/ecommerce-development",
      "/aeo/web-design-malta",
      "/aeo/website-development-malta",
      "/services/seo-services",
      "/services/devops-services",
    ],
  },
  {
    path: "/services/shopify-development",
    title: "Shopify Development",
    shortLabel: "Shopify",
    hub: "service",
    spokes: [
      "/services/ecommerce-development",
      "/aeo/ecommerce-malta",
      "/services/email-marketing",
      "/services/paid-advertising",
      "/services/web-design",
      "/services/seo-services",
    ],
  },
  {
    path: "/services/devops-services",
    title: "DevOps Services",
    shortLabel: "DevOps",
    hub: "service",
    spokes: [
      "/services/saas-development",
      "/services/custom-software-development",
      "/services/database-design",
      "/aeo/software-development-malta",
      "/aeo/digital-transformation-malta",
      "/services/api-integration-services",
    ],
  },
  {
    path: "/services/database-design",
    title: "Database Design",
    shortLabel: "Database",
    hub: "service",
    spokes: [
      "/services/saas-development",
      "/services/custom-software-development",
      "/services/devops-services",
      "/services/api-integration-services",
      "/aeo/software-development-malta",
      "/aeo/digital-transformation-malta",
    ],
  },

  // ── Phase D: 11 new AEO landing pages (Task #70) ───────────────────────
  {
    path: "/aeo/saas-development-malta",
    title: "SaaS Development Malta",
    shortLabel: "SaaS Malta",
    hub: "aeo-service",
    spokes: [
      "/services/saas-development",
      "/services/custom-software-development",
      "/aeo/software-development-malta",
      "/aeo/web-development-agency-malta",
      "/aeo/custom-software-malta",
      "/services/devops-services",
      "/aeo/outsource-development-malta",
    ],
  },
  {
    path: "/aeo/mobile-app-developers-malta",
    title: "Mobile App Developers Malta",
    shortLabel: "Mobile App Devs",
    hub: "aeo-service",
    spokes: [
      "/services/mobile-apps-development",
      "/aeo/app-development-malta",
      "/aeo/software-development-malta",
      "/services/custom-software-development",
      "/aeo/saas-development-malta",
      "/services/mvp-development",
      "/aeo/outsource-development-malta",
    ],
  },
  {
    path: "/aeo/web-development-agency-malta",
    title: "Web Development Agency Malta",
    shortLabel: "Web Dev Agency",
    hub: "aeo-service",
    spokes: [
      "/services/web-design",
      "/services/wordpress-development",
      "/aeo/web-design-malta",
      "/aeo/website-development-malta",
      "/aeo/saas-development-malta",
      "/services/shopify-development",
    ],
  },
  {
    path: "/aeo/outsource-development-malta",
    title: "Outsource Development Malta",
    shortLabel: "Outsource Dev",
    hub: "aeo-service",
    spokes: [
      "/services/custom-software-development",
      "/aeo/software-development-malta",
      "/aeo/saas-development-malta",
      "/aeo/custom-software-malta",
      "/services/devops-services",
      "/services/mobile-apps-development",
    ],
  },
  {
    path: "/aeo/custom-software-malta",
    title: "Custom Software Malta",
    shortLabel: "Custom Software",
    hub: "aeo-service",
    spokes: [
      "/services/custom-software-development",
      "/aeo/software-development-malta",
      "/aeo/saas-development-malta",
      "/services/api-integration-services",
      "/services/database-design",
      "/services/devops-services",
    ],
  },
  {
    path: "/aeo/marketing-agency-mosta",
    title: "Marketing Agency Mosta",
    shortLabel: "Mosta",
    hub: "aeo-city",
    spokes: [
      "/aeo/digital-marketing-agency-malta",
      "/aeo/best-marketing-agency-malta",
      "/aeo/marketing-agency-birkirkara",
      "/aeo/marketing-agency-sliema",
      "/aeo/social-media-agency-malta",
      "/aeo/marketing-agency-qormi",
      "/aeo/marketing-agency-mellieha",
      "/aeo/marketing-agency-paola",
    ],
  },
  {
    path: "/aeo/marketing-agency-qormi",
    title: "Marketing Agency Qormi",
    shortLabel: "Qormi",
    hub: "aeo-city",
    spokes: [
      "/aeo/digital-marketing-agency-malta",
      "/aeo/best-marketing-agency-malta",
      "/aeo/marketing-agency-birkirkara",
      "/aeo/marketing-agency-mosta",
      "/aeo/marketing-agency-paola",
      "/aeo/social-media-agency-malta",
      "/aeo/marketing-agency-mellieha",
    ],
  },
  {
    path: "/aeo/marketing-agency-swieqi",
    title: "Marketing Agency Swieqi",
    shortLabel: "Swieqi",
    hub: "aeo-city",
    spokes: [
      "/aeo/marketing-agency-st-julians",
      "/aeo/marketing-agency-sliema",
      "/aeo/marketing-agency-gzira",
      "/aeo/digital-marketing-agency-malta",
      "/aeo/best-marketing-agency-malta",
      "/aeo/social-media-agency-malta",
      "/aeo/marketing-agency-paola",
    ],
  },
  {
    path: "/aeo/marketing-agency-gzira",
    title: "Marketing Agency Gzira",
    shortLabel: "Gzira",
    hub: "aeo-city",
    spokes: [
      "/aeo/marketing-agency-sliema",
      "/aeo/marketing-agency-st-julians",
      "/aeo/marketing-agency-swieqi",
      "/aeo/digital-marketing-agency-malta",
      "/aeo/best-marketing-agency-malta",
      "/aeo/social-media-agency-malta",
      "/aeo/marketing-agency-mellieha",
    ],
  },
  {
    path: "/aeo/marketing-agency-mellieha",
    title: "Marketing Agency Mellieha",
    shortLabel: "Mellieha",
    hub: "aeo-city",
    spokes: [
      "/aeo/digital-marketing-agency-malta",
      "/aeo/best-marketing-agency-malta",
      "/aeo/hotel-marketing-malta",
      "/aeo/restaurant-marketing-malta",
      "/aeo/social-media-agency-malta",
      "/aeo/marketing-agency-st-julians",
      "/aeo/marketing-agency-paola",
    ],
  },
  {
    path: "/aeo/marketing-agency-paola",
    title: "Marketing Agency Paola",
    shortLabel: "Paola",
    hub: "aeo-city",
    spokes: [
      "/aeo/digital-marketing-agency-malta",
      "/aeo/best-marketing-agency-malta",
      "/aeo/marketing-agency-qormi",
      "/aeo/marketing-agency-birkirkara",
      "/aeo/social-media-agency-malta",
      "/aeo/restaurant-marketing-malta",
      "/aeo/marketing-agency-mosta",
    ],
  },
];

export const LINK_GRAPH: ReadonlyMap<string, LinkNode> = new Map(
  NODES.map((n) => [n.path, n]),
);

// Module-load validation: every declared spoke must resolve to a real node in
// the graph. Throws at import time so a broken edge cannot silently erode
// internal-link equity in production. Wrapped in NODE_ENV check so unit tests
// can intentionally probe broken graphs if they ever need to.
(function validateGraph() {
  const errors: string[] = [];
  for (const node of NODES) {
    for (const spoke of node.spokes) {
      if (!LINK_GRAPH.has(spoke)) {
        errors.push(`  ${node.path} -> ${spoke} (spoke target not declared)`);
      }
    }
  }
  if (errors.length) {
    const msg = `internalLinkGraph: ${errors.length} broken spoke(s):\n${errors.join("\n")}`;
    if (process.env.NODE_ENV === "production") throw new Error(msg);
    console.warn(msg);
  }
})();

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
