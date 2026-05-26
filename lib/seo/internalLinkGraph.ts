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
  | "industry-hub"
  | "blog";

export type LinkNode = {
  path: string;
  title: string;
  shortLabel: string;
  hub: Hub;
  // Ordered list of related page paths. First 3-6 are surfaced on the page.
  spokes: string[];
  // Anchor-text variants used by <SmartLink to={path} />. Optional; when
  // omitted (or fewer than 3 supplied) the runtime augments the list with
  // hub-aware defaults so every node always exposes >=3 variants. See
  // `getAnchors()` and `pickAnchor()`.
  anchors?: string[];
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
      "/services",
      "/our-work",
      "/contact",
    ],
  },
  {
    path: "/ai-agents",
    title: "AI Agents for Business",
    shortLabel: "AI Workforce",
    hub: "ai",
    // Layer 5 (SEO framework): pillars MUST link to >= 8 Tier-A service pages.
    spokes: [
      "/services/ai-consulting",
      "/services/ai-sdr-agent",
      "/services/ai-support-specialist",
      "/services/ai-appointment-booker",
      "/services/ai-data-analyst",
      "/services/ai-admin-agent",
      "/services/marketing-automation-suite",
      "/services/custom-software-development",
      "/aeo/ai-agency-malta",
      "/aeo/ai-agents-business-malta",
    ],
  },
  {
    path: "/creative",
    title: "Creative Services",
    shortLabel: "Creative",
    hub: "creative",
    // Layer 5: 8+ Tier-A service spokes from this pillar.
    spokes: [
      "/services/social-media-creative-management",
      "/services/video-production",
      "/services/web-design",
      "/services/branding",
      "/services/paid-advertising",
      "/services/content-marketing",
      "/services/seo-services",
      "/services/email-marketing",
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
    // Layer 5: 8+ Tier-A service spokes from this pillar.
    spokes: [
      "/services/marketing-automation-suite",
      "/services/ai-sdr-agent",
      "/services/ai-appointment-booker",
      "/services/custom-software-development",
      "/services/web-apps-development",
      "/services/saas-development",
      "/services/ecommerce-development",
      "/services/devops-services",
      "/aeo/marketing-automation-malta",
      "/aeo/crm-automation-malta",
      "/aeo/whatsapp-automation-malta",
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
      "/services/web-apps-development",
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
  {
    path: "/about",
    title: "About OARC Digital",
    shortLabel: "About",
    hub: "homepage",
    spokes: [
      "/services/seo-services",
      "/services/branding",
      "/services/ai-consulting",
    ],
  },
  {
    path: "/why-us",
    title: "Why OARC Digital",
    shortLabel: "Why OARC",
    hub: "homepage",
    spokes: [
      "/services/social-media-creative-management",
      "/services/seo-services",
      "/services/ai-consulting",
    ],
  },
  {
    path: "/pricing",
    title: "Pricing — OARC Digital",
    shortLabel: "Pricing",
    hub: "homepage",
    spokes: [
      "/services/social-media-creative-management",
      "/services/paid-advertising",
      "/services/ai-consulting",
    ],
  },
  {
    path: "/contact",
    title: "Contact OARC Digital",
    shortLabel: "Contact",
    hub: "homepage",
    spokes: [
      "/services",
      "/services/seo-services",
      "/services/social-media-creative-management",
      "/services/ai-consulting",
      "/our-work",
      "/ai-agents",
      "/creative",
      "/automation",
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
      "/services/web-apps-development",
      "/aeo/web-design-malta",
      "/aeo/digital-transformation-malta",
      "/services/mvp-development",
      "/aeo/mobile-app-developers-malta",
      "/services/saas-development",
          "/services/mobile-applications-development",
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
      "/services/web-apps-development",
      "/aeo/digital-transformation-malta",
      "/automation",
      "/services/api-integration-services",
      "/services/saas-development",
      "/services/devops-services",
      "/services/database-design",
      "/aeo/saas-development-malta",
      "/aeo/custom-software-malta",
      "/aeo/outsource-development-malta",
          "/services/api-integration",
          "/services/mobile-applications-development",
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
      "/services/web-apps-development",
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
      "/services/web-apps-development",
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
  {
      path: "/services/ai-admin-agent",
      title: "AI Admin Agent",
      shortLabel: "Admin Agent",
      hub: "ai",
      spokes: [
        "/services/ai-compliance-auditor",
      "/services/ai-data-analyst",
      "/services/ai-real-estate-agent",
      "/services/revenue-automation",
      "/services/hire-ai-employees",
      "/ai-agents",
      "/services/ai-consulting",
      ],
    },
  {
      path: "/services/ai-compliance-auditor",
      title: "AI Compliance Auditor",
      shortLabel: "Compliance Auditor",
      hub: "ai",
      spokes: [
        "/services/ai-data-analyst",
      "/services/ai-real-estate-agent",
      "/services/revenue-automation",
      "/services/hire-ai-employees",
      "/services/hire-ai-employees",
      "/ai-agents",
      "/services/ai-consulting",
      ],
    },
  {
      path: "/services/ai-data-analyst",
      title: "AI Data Analyst",
      shortLabel: "Data Analyst",
      hub: "ai",
      spokes: [
        "/services/ai-real-estate-agent",
      "/services/revenue-automation",
      "/services/hire-ai-employees",
      "/services/hire-ai-employees",
      "/services/ai-admin-agent",
      "/ai-agents",
      "/services/ai-consulting",
      ],
    },
  {
      path: "/services/ai-real-estate-agent",
      title: "AI Real Estate Agent",
      shortLabel: "Real Estate Agent",
      hub: "ai",
      spokes: [
        "/services/revenue-automation",
      "/services/hire-ai-employees",
      "/services/hire-ai-employees",
      "/services/ai-admin-agent",
      "/services/ai-compliance-auditor",
      "/ai-agents",
      "/services/ai-consulting",
      ],
    },
  {
      path: "/services/revenue-automation",
      title: "AI Revenue Engine",
      shortLabel: "Revenue Engine",
      hub: "ai",
      spokes: [
        "/services/hire-ai-employees",
      "/services/hire-ai-employees",
      "/services/ai-admin-agent",
      "/services/ai-compliance-auditor",
      "/services/ai-data-analyst",
      "/ai-agents",
      "/services/ai-consulting",
      ],
    },
  {
      path: "/services/hire-ai-employees",
      title: "AI Virtual Talent Hub",
      shortLabel: "Talent Hub",
      hub: "ai",
      spokes: [
        "/services/hire-ai-employees",
      "/services/ai-admin-agent",
      "/services/ai-compliance-auditor",
      "/services/ai-data-analyst",
      "/services/ai-real-estate-agent",
      "/ai-agents",
      "/services/ai-consulting",
      ],
    },
  {
      path: "/services/hire-ai-employees",
      title: "Hire AI Employees",
      shortLabel: "Hire AI",
      hub: "ai",
      spokes: [
        "/services/ai-admin-agent",
      "/services/ai-compliance-auditor",
      "/services/ai-data-analyst",
      "/services/ai-real-estate-agent",
      "/services/revenue-automation",
      "/ai-agents",
      "/services/ai-consulting",
      ],
    },
  {
      path: "/services/customer-acquisition",
      title: "Customer Acquisition",
      shortLabel: "Acquisition",
      hub: "automation",
      spokes: [
        "/services/customer-acquisition-accelerator",
      "/services/funnel-automation",
      "/services/funnel-automation",
      "/services/growth-strategy",
      "/services/idea-validation-engine",
      "/automation",
      "/services/marketing-automation-suite",
      ],
    },
  {
      path: "/services/customer-acquisition-accelerator",
      title: "Customer Acquisition Accelerator",
      shortLabel: "Acquisition Sprint",
      hub: "automation",
      spokes: [
        "/services/funnel-automation",
      "/services/funnel-automation",
      "/services/growth-strategy",
      "/services/idea-validation-engine",
      "/services/lead-generation",
      "/automation",
      "/services/marketing-automation-suite",
      ],
    },
  {
      path: "/services/funnel-automation",
      title: "Funnel Automation",
      shortLabel: "Funnel Automation",
      hub: "automation",
      spokes: [
        "/services/funnel-automation",
      "/services/growth-strategy",
      "/services/idea-validation-engine",
      "/services/lead-generation",
      "/services/lead-generation-engine",
      "/automation",
      "/services/marketing-automation-suite",
      ],
    },
  {
      path: "/services/funnel-automation",
      title: "Funnel Optimization Agent",
      shortLabel: "CRO Agent",
      hub: "automation",
      spokes: [
        "/services/growth-strategy",
      "/services/idea-validation-engine",
      "/services/lead-generation",
      "/services/lead-generation-engine",
      "/services/performance-analytics",
      "/automation",
      "/services/marketing-automation-suite",
      ],
    },
  {
      path: "/services/growth-strategy",
      title: "Growth Strategy",
      shortLabel: "Growth Strategy",
      hub: "automation",
      spokes: [
        "/services/idea-validation-engine",
      "/services/lead-generation",
      "/services/lead-generation-engine",
      "/services/performance-analytics",
      "/services/idea-validation-engine",
      "/automation",
      "/services/marketing-automation-suite",
      ],
    },
  {
      path: "/services/idea-validation-engine",
      title: "Idea Validation Engine",
      shortLabel: "Validation Engine",
      hub: "automation",
      spokes: [
        "/services/lead-generation",
      "/services/lead-generation-engine",
      "/services/performance-analytics",
      "/services/idea-validation-engine",
      "/services/revenue-automation",
      "/automation",
      "/services/marketing-automation-suite",
      ],
    },
  {
      path: "/services/lead-generation",
      title: "Lead Generation",
      shortLabel: "Lead Gen",
      hub: "automation",
      spokes: [
        "/services/lead-generation-engine",
      "/services/performance-analytics",
      "/services/idea-validation-engine",
      "/services/revenue-automation",
      "/services",
      "/automation",
      "/services/marketing-automation-suite",
      ],
    },
  {
      path: "/services/lead-generation-engine",
      title: "Lead Generation Engine",
      shortLabel: "Lead Gen Engine",
      hub: "automation",
      spokes: [
        "/services/performance-analytics",
      "/services/idea-validation-engine",
      "/services/revenue-automation",
      "/services",
      "/services/customer-acquisition",
      "/automation",
      "/services/marketing-automation-suite",
      ],
    },
  {
      path: "/services/performance-analytics",
      title: "Performance Analytics",
      shortLabel: "Analytics",
      hub: "automation",
      spokes: [
        "/services/idea-validation-engine",
      "/services/revenue-automation",
      "/services",
      "/services/customer-acquisition",
      "/services/customer-acquisition-accelerator",
      "/automation",
      "/services/marketing-automation-suite",
      ],
    },
  {
      path: "/services/idea-validation-engine",
      title: "Rapid Idea Testing",
      shortLabel: "Idea Testing",
      hub: "automation",
      spokes: [
        "/services/revenue-automation",
      "/services",
      "/services/customer-acquisition",
      "/services/customer-acquisition-accelerator",
      "/services/funnel-automation",
      "/automation",
      "/services/marketing-automation-suite",
      ],
    },
  {
      path: "/services/revenue-automation",
      title: "Revenue Automation",
      shortLabel: "Revenue Ops",
      hub: "automation",
      spokes: [
        "/services",
      "/services/customer-acquisition",
      "/services/customer-acquisition-accelerator",
      "/services/funnel-automation",
      "/services/funnel-automation",
      "/automation",
      "/services/marketing-automation-suite",
      ],
    },
  {
      path: "/services",
      title: "Digital Marketing",
      shortLabel: "Digital Marketing",
      hub: "automation",
      spokes: [
        "/services/customer-acquisition",
      "/services/customer-acquisition-accelerator",
      "/services/funnel-automation",
      "/services/funnel-automation",
      "/services/growth-strategy",
      "/automation",
      "/services/marketing-automation-suite",
      ],
    },
  {
      path: "/services/ad-creative",
      title: "Ad Creative Design",
      shortLabel: "Ad Creative",
      hub: "creative",
      spokes: [
        "/services/content-marketing",
      "/creative",
      "/services/design-systems",
      "/services/email-creative",
      "/services/illustration",
      "/creative",
      "/services/social-media-creative-management",
      ],
    },
  {
      path: "/services/content-marketing",
      title: "AI Copywriting",
      shortLabel: "AI Copywriting",
      hub: "creative",
      spokes: [
        "/creative",
      "/services/design-systems",
      "/services/email-creative",
      "/services/illustration",
      "/services/immersive-3d-ar",
      "/creative",
      "/services/social-media-creative-management",
      ],
    },
  {
      path: "/creative",
      title: "Creative Services",
      shortLabel: "Creative",
      hub: "creative",
      spokes: [
        "/services/design-systems",
      "/services/email-creative",
      "/services/illustration",
      "/services/immersive-3d-ar",
      "/services/influencer",
      "/creative",
      "/services/social-media-creative-management",
      ],
    },
  {
      path: "/services/design-systems",
      title: "Design Systems",
      shortLabel: "Design Systems",
      hub: "creative",
      spokes: [
        "/services/email-creative",
      "/services/illustration",
      "/services/immersive-3d-ar",
      "/services/influencer",
      "/services/influencer-marketing",
      "/creative",
      "/services/social-media-creative-management",
      ],
    },
  {
      path: "/services/email-creative",
      title: "Email Creative",
      shortLabel: "Email Creative",
      hub: "creative",
      spokes: [
        "/services/illustration",
      "/services/immersive-3d-ar",
      "/services/influencer",
      "/services/influencer-marketing",
      "/services/motion-design",
      "/creative",
      "/services/social-media-creative-management",
      ],
    },
  {
      path: "/services/illustration",
      title: "Illustration & Custom Art",
      shortLabel: "Illustration",
      hub: "creative",
      spokes: [
        "/services/immersive-3d-ar",
      "/services/influencer",
      "/services/influencer-marketing",
      "/services/motion-design",
      "/services/presentation-pitch",
      "/creative",
      "/services/social-media-creative-management",
      ],
    },
  {
      path: "/services/immersive-3d-ar",
      title: "Immersive 3D & AR",
      shortLabel: "3D & AR",
      hub: "creative",
      spokes: [
        "/services/influencer",
      "/services/influencer-marketing",
      "/services/motion-design",
      "/services/presentation-pitch",
      "/services/print-packaging",
      "/creative",
      "/services/social-media-creative-management",
      ],
    },
  {
      path: "/services/influencer",
      title: "Malta Influencer Network",
      shortLabel: "Malta Influencer",
      hub: "creative",
      spokes: [
        "/services/influencer-marketing",
      "/aeo/restaurant-marketing-malta",
      "/aeo/hotel-marketing-malta",
      "/aeo/igaming-marketing-malta",
      "/services/social-media-creative-management",
      "/services/paid-advertising",
      "/aeo/influencer-marketing-malta",
      "/aeo/social-media-agency-malta",
      "/creative",
      ],
    },
  {
      path: "/services/influencer-marketing",
      title: "Influencer Marketing",
      shortLabel: "Influencer Marketing",
      hub: "creative",
      spokes: [
        "/services/motion-design",
      "/services/presentation-pitch",
      "/services/print-packaging",
      "/services/social",
      "/services/paid-advertising",
      "/creative",
      "/services/social-media-creative-management",
      ],
    },
  {
      path: "/services/motion-design",
      title: "Motion Design",
      shortLabel: "Motion Design",
      hub: "creative",
      spokes: [
        "/services/presentation-pitch",
      "/services/print-packaging",
      "/services/social",
      "/services/paid-advertising",
      "/services/paid",
      "/creative",
      "/services/social-media-creative-management",
      ],
    },
  {
      path: "/services/presentation-pitch",
      title: "Presentation & Pitch Design",
      shortLabel: "Pitch Design",
      hub: "creative",
      spokes: [
        "/services/print-packaging",
      "/services/social",
      "/services/paid-advertising",
      "/services/paid",
      "/services/ad-creative",
      "/creative",
      "/services/social-media-creative-management",
      ],
    },
  {
      path: "/services/print-packaging",
      title: "Print & Packaging",
      shortLabel: "Print",
      hub: "creative",
      spokes: [
        "/services/social",
      "/services/paid-advertising",
      "/services/paid",
      "/services/ad-creative",
      "/services/content-marketing",
      "/creative",
      "/services/social-media-creative-management",
      ],
    },
  {
      path: "/services/social",
      title: "Social Media",
      shortLabel: "Social",
      hub: "creative",
      spokes: [
        "/services/paid-advertising",
      "/services/paid",
      "/services/ad-creative",
      "/services/content-marketing",
      "/creative",
      "/creative",
      "/services/social-media-creative-management",
      ],
    },
  {
      path: "/services/paid-advertising",
      title: "Media Buying",
      shortLabel: "Media Buying",
      hub: "creative",
      spokes: [
        "/services/paid",
      "/services/ad-creative",
      "/services/content-marketing",
      "/creative",
      "/services/design-systems",
      "/creative",
      "/services/social-media-creative-management",
      ],
    },
  {
      // Repurposed (Task #119) as the industry-specific paid-ads hub:
      // hospitality, iGaming, e-commerce, real estate, SaaS. Companion to
      // the generic /services/paid-advertising page — that one owns
      // platform/channel intent, this one owns vertical/industry intent.
      path: "/services/paid",
      title: "Industry-Specific Paid Ads (Hospitality, iGaming, E-commerce, Real Estate, SaaS)",
      shortLabel: "Industry Paid Ads",
      hub: "service",
      spokes: [
        "/services/paid-advertising",
        "/services/ad-creative",
        "/services/saas-development",
        "/services/ecommerce-development",
        "/services/marketing-automation-suite",
        "/services/content-marketing",
        "/industries",
        "/creative",
      ],
    },
  {
      path: "/services/api-integration",
      title: "API Integration",
      shortLabel: "API Integration",
      hub: "service",
      spokes: [
        "/services/mobile-applications-development",
      "/services/custom-software-development",
      "/services/saas-development",
      ],
    },
  {
      path: "/services/mobile-applications-development",
      title: "Mobile Applications Development",
      shortLabel: "Mobile Apps",
      hub: "service",
      spokes: [
        "/services/api-integration",
      "/services/custom-software-development",
      "/services/saas-development",
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
    spokes: [
      "/services/custom-software-development",
      "/services/saas-development",
    ],
  },
  {
    path: "/services/mvp-development/for-software",
    title: "MVP Development for Software",
    shortLabel: "Software MVP",
    hub: "service",
    spokes: [
      "/services/mvp-development",
      "/services/custom-software-development",
    ],
  },
  {
    path: "/services/api-integration-services",
    title: "API & Integration Services",
    shortLabel: "API Integration",
    hub: "service",
    spokes: [
      "/services/mobile-applications-development",
      "/services/custom-software-development",
    ],
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
      "/services/web-apps-development",
      "/services/mvp-development",
      "/services/database-design",
      "/services/devops-services",
      "/aeo/software-development-malta",
          "/services/api-integration",
          "/services/mobile-applications-development",
    ],
  },
  {
    path: "/services/web-apps-development",
    title: "Web Apps Development",
    shortLabel: "Web Apps Dev",
    hub: "service",
    spokes: [
      "/services/saas-development",
      "/services/custom-software-development",
      "/services/mobile-apps-development",
      "/services/mvp-development",
      "/services/api-integration-services",
      "/aeo/web-development-agency-malta",
      "/aeo/website-development-malta",
      "/aeo/software-development-malta",
          "/services/api-integration",
          "/services/mobile-applications-development",
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
          "/services/api-integration",
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
          "/services/api-integration",
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
      "/services/web-apps-development",
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

// ── Industry Hub LinkNodes (Phase E — Task #108) ─────────────────────────
// Merged into NODES BEFORE LINK_GRAPH is constructed below — appending
// after Map construction would silently exclude these from the runtime
// graph and break getRelatedLinks() + spoke validation.
NODES.push(
  {
    path: "/industries",
    title: "Industries We Serve in Malta",
    shortLabel: "Industries",
    hub: "industry-hub",
    spokes: [
      "/industries/healthcare-clinics",
      "/industries/legal-services",
      "/industries/professional-services",
      "/industries/construction",
      "/industries/beauty-wellness",
      "/industries/automotive",
      "/industries/education",
      "/industries/nonprofits-ngos",
      "/services",
    ],
  },
  {
    path: "/industries/healthcare-clinics",
    title: "Healthcare Clinic Marketing Agency in Malta",
    shortLabel: "Healthcare Clinics",
    hub: "industry-hub",
    spokes: [
      "/services/web-design",
      "/services/content-marketing",
      "/services/marketing-automation-suite",
      "/services/paid-advertising",
      "/industries",
    ],
  },
  {
    path: "/industries/legal-services",
    title: "Law Firm Marketing Agency in Malta",
    shortLabel: "Law Firms",
    hub: "industry-hub",
    spokes: [
      "/services/seo-services",
      "/services/content-marketing",
      "/services/web-design",
      "/services/branding",
      "/industries",
    ],
  },
  {
    path: "/industries/professional-services",
    title: "Professional Services Marketing Agency in Malta",
    shortLabel: "Professional Services",
    hub: "industry-hub",
    spokes: [
      "/services/branding",
      "/services/content-marketing",
      "/services/marketing-automation-suite",
      "/services/ai-sdr-agent",
      "/industries",
    ],
  },
  {
    path: "/industries/construction",
    title: "Construction & Property Marketing Agency in Malta",
    shortLabel: "Construction",
    hub: "industry-hub",
    spokes: [
      "/services/video-production",
      "/services/web-design",
      "/services/paid-advertising",
      "/services/branding",
      "/industries",
    ],
  },
  {
    path: "/industries/beauty-wellness",
    title: "Beauty & Med Spa Marketing Agency in Malta",
    shortLabel: "Beauty & Med Spas",
    hub: "industry-hub",
    spokes: [
      "/services/social-media-creative-management",
      "/services/paid-advertising",
      "/services/marketing-automation-suite",
      "/services/web-design",
      "/industries",
    ],
  },
  {
    path: "/industries/automotive",
    title: "Automotive Marketing Agency in Malta",
    shortLabel: "Automotive",
    hub: "industry-hub",
    spokes: [
      "/services/video-production",
      "/services/paid-advertising",
      "/services/social-media-creative-management",
      "/services/web-design",
      "/industries",
    ],
  },
  {
    path: "/industries/education",
    title: "Education Marketing Agency in Malta",
    shortLabel: "Education",
    hub: "industry-hub",
    spokes: [
      "/services/video-production",
      "/services/paid-advertising",
      "/services/content-marketing",
      "/services/social-media-creative-management",
      "/industries",
    ],
  },
  {
    path: "/industries/nonprofits-ngos",
    title: "Non-Profit & NGO Marketing Agency in Malta",
    shortLabel: "Non-Profits & NGOs",
    hub: "industry-hub",
    spokes: [
      "/services/content-marketing",
      "/services/paid-advertising",
      "/services/video-production",
      "/services/branding",
      "/industries",
    ],
  },
);

// Module-load invariant: every Phase E hub MUST be in the graph. Catches
// the class of bug where a node array is appended after LINK_GRAPH is
// constructed (the Map snapshot would silently exclude late additions).
const REQUIRED_INDUSTRY_HUBS = [
  "/industries/healthcare-clinics",
  "/industries/legal-services",
  "/industries/professional-services",
  "/industries/construction",
  "/industries/beauty-wellness",
  "/industries/automotive",
  "/industries/education",
  "/industries/nonprofits-ngos",
];

// ── Pillar mapping (Task #136) ────────────────────────────────────────────
// Every spoke MUST link UP to at least one pillar. We expose the mapping
// here so the audit can verify it and so we can auto-inject the pillar
// edge at module-load time for any spoke that's missing it. Pillars never
// need to link up to themselves.
//
// PILLAR_PATHS = the 6 ranking pillars subject to the >=6-spoke fanout
// contract. /our-work and /contact are conversion shells (homepage hub)
// — they participate as spokes (and link UP to pillars) but are NOT
// held to the high-fanout bar.
export const PILLAR_PATHS: ReadonlySet<string> = new Set([
  "/",
  "/ai-agents",
  "/creative",
  "/automation",
  "/services",
  "/industries",
]);

export function pillarFor(node: LinkNode): string | null {
  if (PILLAR_PATHS.has(node.path)) return null;
  switch (node.hub) {
    case "ai":
      return "/ai-agents";
    case "creative":
      return "/creative";
    case "automation":
      return "/automation";
    case "industry-hub":
      return "/industries";
    case "service":
    case "aeo-service":
    case "aeo-city":
    case "aeo-vertical":
    case "blog":
    case "services-index":
    case "homepage":
    default:
      return "/services";
  }
}

// Auto-inject the pillar edge for any spoke missing it. Mutating NODES is
// safe here because LINK_GRAPH is constructed on the next line. Doing the
// injection at module-load (rather than hand-editing every node) keeps the
// pillar contract impossible to forget when a future node is added.
for (const node of NODES) {
  const pillar = pillarFor(node);
  if (pillar && !node.spokes.includes(pillar)) {
    node.spokes.push(pillar);
  }
}

// ── Anchor-text variants (Task #136) ──────────────────────────────────────
// Hub-aware default generator. Every node ends up with >=3 distinct anchor
// strings. Hand-curated variants on individual nodes override the defaults.
// All variants are sanitised through the shared phrase blocklist by
// scripts/audit-internal-links.ts so AI-tell phrases never sneak in.
function deriveDefaultAnchors(node: LinkNode): string[] {
  const t = node.title.trim();
  const s = node.shortLabel.trim();
  const sLower = s.toLowerCase();
  let third: string;
  switch (node.hub) {
    case "homepage":
      third = node.path === "/" ? "OARC Digital home" : `OARC's ${sLower}`;
      break;
    case "ai":
      third = `${sLower} workflow`;
      break;
    case "creative":
      third = `${sLower} studio`;
      break;
    case "automation":
      third = `${sLower} systems`;
      break;
    case "services-index":
      third = "full service catalogue";
      break;
    case "service":
      third = `${sLower} team`;
      break;
    case "aeo-service":
      third = `${sLower} specialists`;
      break;
    case "aeo-city":
      third = `marketing in ${sLower}`;
      break;
    case "aeo-vertical":
      third = `${sLower} marketing in Malta`;
      break;
    case "industry-hub":
      third = `${sLower} marketing`;
      break;
    case "blog":
      third = `${sLower} guide`;
      break;
    default:
      third = sLower;
  }
  const seen = new Set<string>();
  const out: string[] = [];
  for (const candidate of [t, s, third]) {
    const key = candidate.toLowerCase().trim();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(candidate);
  }
  // If title and shortLabel collapsed (rare), pad with one more variant.
  if (out.length < 3) {
    const padding = `OARC's ${sLower}`;
    if (!seen.has(padding.toLowerCase())) out.push(padding);
  }
  if (out.length < 3) {
    out.push(`see ${sLower}`);
  }
  return out;
}

/**
 * Returns >=3 distinct anchor-text variants for the given node. Merges the
 * node's hand-curated `anchors` array (if any) with hub-aware defaults so
 * the contract is impossible to violate accidentally.
 */
export function getAnchors(node: LinkNode): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  const push = (s: string) => {
    const key = s.toLowerCase().trim();
    if (!key || seen.has(key)) return;
    seen.add(key);
    out.push(s);
  };
  if (node.anchors) for (const a of node.anchors) push(a);
  for (const a of deriveDefaultAnchors(node)) push(a);
  return out;
}

/**
 * Deterministic anchor picker: same (sourcePath, targetPath) pair always
 * resolves to the same variant, so SSR + CSR render identically and there's
 * no hydration mismatch — but two different placements of the same target
 * across the site naturally use different anchors, defeating exact-match
 * over-optimisation flags.
 */
export function pickAnchor(
  anchors: string[],
  seed: string,
  index = 0,
): string {
  if (anchors.length === 0) return "";
  let h = 2166136261 >>> 0; // FNV-1a 32-bit init
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return anchors[(h + index) % anchors.length];
}

// ── Hand-curated anchor overrides (high-priority ranking targets) ─────────
// Wired in after NODES is built so hand-picks don't clutter the (very long)
// node table above. Overrides apply to the most-linked-to pages only — the
// rest fall back to the hub-aware defaults.
const ANCHOR_OVERRIDES: Record<string, string[]> = {
  "/": ["OARC Digital", "Malta's creative + AI agency", "OARC's home base"],
  "/ai-agents": [
    "AI agents for business",
    "OARC's AI workforce",
    "AI employees",
    "AI agent platform",
  ],
  "/creative": [
    "creative services",
    "OARC's creative studio",
    "brand + design work",
    "creative production team",
  ],
  "/automation": [
    "automation & AI systems",
    "marketing automation pillar",
    "revenue + ops automation",
    "OARC's automation stack",
  ],
  "/services": [
    "all services",
    "service catalogue",
    "what OARC does",
    "service line-up",
  ],
  "/our-work": [
    "case studies & portfolio",
    "client work",
    "OARC's recent campaigns",
    "see the work",
  ],
  "/contact": [
    "talk to OARC",
    "book an intro call",
    "get in touch",
    "contact the team",
  ],
  "/industries": [
    "industries we serve",
    "by industry",
    "vertical-specific marketing",
    "Malta industry hubs",
  ],
  "/services/social-media-creative-management": [
    "social media creative",
    "managed social posting",
    "social content production",
    "OARC's social team",
  ],
  "/services/ai-sdr-agent": [
    "AI sales rep",
    "outbound automation",
    "OARC's SDR agent",
    "AI prospecting",
  ],
  "/services/ai-support-specialist": [
    "AI customer support",
    "support automation",
    "OARC's AI helpdesk",
  ],
  "/services/ai-appointment-booker": [
    "AI booking agent",
    "automated appointment setting",
    "OARC's calendar bot",
  ],
  "/services/ai-consulting": [
    "AI consulting",
    "AI strategy advisory",
    "where to start with AI",
  ],
  "/services/marketing-automation-suite": [
    "marketing automation suite",
    "lifecycle automation",
    "campaign orchestration",
  ],
  "/services/web-design": [
    "web design",
    "website design + build",
    "OARC's web team",
  ],
  "/services/branding": [
    "branding & identity",
    "brand systems",
    "visual identity work",
  ],
  "/services/video-production": [
    "video production",
    "video & motion content",
    "production crew",
  ],
  "/services/seo-services": [
    "SEO services",
    "organic search programme",
    "ranking + technical SEO",
  ],
  "/services/paid-advertising": [
    "paid advertising",
    "performance media",
    "Meta + Google ads",
  ],
  "/services/content-marketing": [
    "content marketing",
    "editorial + content programme",
    "long-form content team",
  ],
  "/services/email-marketing": [
    "email marketing",
    "lifecycle email",
    "newsletter + email automation",
  ],
  "/services/custom-software-development": [
    "custom software development",
    "bespoke software builds",
    "engineering team",
  ],
  "/services/saas-development": [
    "SaaS development",
    "product engineering",
    "SaaS build partner",
  ],
  "/services/mobile-apps-development": [
    "mobile app development",
    "iOS + Android builds",
    "mobile product team",
  ],
};

for (const [p, anchors] of Object.entries(ANCHOR_OVERRIDES)) {
  for (const node of NODES) {
    if (node.path === p) {
      node.anchors = anchors;
    }
  }
}

export const LINK_GRAPH: ReadonlyMap<string, LinkNode> = new Map(
  NODES.map((n) => [n.path, n]),
);

if (process.env.NODE_ENV !== "test") {
  for (const path of REQUIRED_INDUSTRY_HUBS) {
    if (!LINK_GRAPH.has(path)) {
      throw new Error(
        `internalLinkGraph: required Phase E industry hub missing from LINK_GRAPH: ${path}. ` +
          `Likely cause: INDUSTRY_HUB_NODES was appended after LINK_GRAPH construction.`,
      );
    }
  }
}

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
  // Task #136: reserve the LAST slot for the pillar link so spoke pages
  // always render their UP-link to the pillar, even when the spoke list
  // already has 6+ entries that would otherwise truncate it. Pillars
  // themselves (or nodes whose spokes don't include the pillar at all)
  // fall through to the natural ordering.
  const pillar = pillarFor(node);
  const pillarTarget = pillar ? LINK_GRAPH.get(pillar) : null;
  const wantsPillar = pillarTarget !== null && pillarTarget !== undefined;
  const reserveForPillar = wantsPillar ? 1 : 0;
  const fillCap = Math.max(0, max - reserveForPillar);

  const out: LinkNode[] = [];
  for (const spoke of node.spokes) {
    if (wantsPillar && spoke === pillar) continue; // appended last
    const target = LINK_GRAPH.get(spoke);
    if (target) out.push(target);
    if (out.length >= fillCap) break;
  }
  if (wantsPillar && pillarTarget && !out.some((n) => n.path === pillarTarget.path)) {
    if (out.length >= max) out.pop(); // make room
    out.push(pillarTarget);
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
  // ── Industry Hubs (Phase E — added Task #108) ──────────────────────────
  "/industries",
  "/industries/healthcare-clinics",
  "/industries/legal-services",
  "/industries/professional-services",
  "/industries/construction",
  "/industries/beauty-wellness",
  "/industries/automotive",
  "/industries/education",
  "/industries/nonprofits-ngos",
] as const;
