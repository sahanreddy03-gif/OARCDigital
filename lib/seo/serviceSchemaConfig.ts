// Per-service schema inputs (FAQs, pricing offers, capability features) for the
// Phase A drip-fed schema rollout (Task #69). One entry per /services/<slug> page
// being migrated. Each <RouteSchema type="service" .../> on a service page reads
// its inputs from here so the JSON-LD body lives outside the visible UI tree.
//
// IMPORTANT: copy here is reviewed by a human before each weekly batch ships.
// Add new entries (max 7/week) only after the previous batch's audit + redirects
// gates pass. Do NOT inline-author this content from a script.

import type { OfferOpts, ServiceFeature } from "@/lib/schema";
import { NAP, ADDRESS_ONE_LINE } from "@/lib/seo/nap";

/**
 * Search intent classification used by Layer 3 of the SEO discovery framework.
 * One canonical URL per (intent x generalisation-keyword) combination — see
 * `.local/seo-framework.md` and `.local/seo-keyword-map.md` for the policy.
 */
export type SearchIntent =
  | "informational"
  | "navigational"
  | "commercial"
  | "transactional"
  | "local"
  | "comparative"
  | "alternative";

/**
 * 6-layer SEO + AI-discovery framework, enforced per-page. See
 * `.local/seo-framework.md` for the full strategy + failure modes.
 *
 * Layer 0 (foundation: schema, NAP, sitemap, perf) is enforced separately by
 * `scripts/audit-core-57.ts`. Layer 5 (internal-link distribution) is enforced
 * by `lib/seo/internalLinkGraph.ts` + audit-core-57's inbound-link gate.
 *
 * Layers 1, 2, 3, 4, 6 are enforced here (typed) and by
 * `scripts/audit-framework.ts`.
 */
export type FrameworkLayers = {
  /** Layer 1 — one differentiated value-prop sentence (40-180 chars). MUST be unique across the table. */
  uniqueValueProp: string;
  /** Layer 2 — entity/topic this page reinforces in our authority graph. */
  entityFocus: string;
  /** Layer 3 — primary search intent (anti-cannibalisation gate). */
  primaryIntent: SearchIntent;
  /** Layer 3 — broad-match queries that should funnel here, then up to pillars/home. >= 3 entries. */
  generalizationKeywords: string[];
  /** Layer 4 — cite-able facts surfaced in first 150 words + llms.txt. >= 3 entries. */
  llmCitableFacts: { claim: string; source?: string }[];
  /** Layer 6 — single primary conversion action this page drives toward. */
  conversionGoal: string;
};

export type ServiceSchemaEntry = {
  /** Page <title> — also used as the Service schema name. */
  title: string;
  /** Meta description — also used as the Service schema description. */
  description: string;
  /** Pricing tier offers, used to emit Offer / PriceSpecification nodes. */
  offers: OfferOpts[];
  /** Capability list emitted as the Service hasOfferCatalog. */
  features: ServiceFeature[];
  /** FAQs emitted as a FAQPage graph node (speakable=true). */
  faqs: { question: string; answer: string }[];
  /** 6-layer discovery framework — required for every entry. */
  framework: FrameworkLayers;
};

export const SERVICE_SCHEMAS: Record<string, ServiceSchemaEntry> = {
  "web-design": {
    title: "Web Design | Conversion-Focused Sites | OARC Digital",
    description:
      "Websites engineered for conversion. Performance-optimized, mobile-first, A/B tested. See real metrics from sites we've built for Malta businesses.",
    offers: [
      {
        name: "Landing Page Sprint",
        priceFrom: 1800,
        unitText: "PROJECT",
        description:
          "Single high-conversion landing page: copy, design, build, mobile-first, and connected to your ad accounts in 2 weeks.",
      },
      {
        name: "Conversion Site",
        priceFrom: 6500,
        unitText: "PROJECT",
        description:
          "5-10 page marketing site on WordPress, Webflow, or Next.js. Includes UX audit, copy, design, build, on-page SEO, and 30-day post-launch optimisation.",
      },
      {
        name: "Custom Web App",
        priceFrom: 18000,
        unitText: "PROJECT",
        description:
          "Bespoke React or Next.js application with auth, payments, dashboards, and integrations. Quoted on scope after a discovery sprint.",
      },
    ],
    features: [
      { name: "UX research & wireframes" },
      { name: "Mobile-first responsive design" },
      { name: "On-page SEO & Core Web Vitals tuning" },
      { name: "A/B testing & CRO" },
      { name: "Accessibility (WCAG 2.1 AA)" },
      { name: "Managed hosting & maintenance" },
    ],
    faqs: [
      {
        question: "What's included in your web design service?",
        answer:
          "Strategy, wireframes, visual design, development, mobile optimisation, on-page SEO, and a launch plan. Every project includes a UX audit baseline so you can measure lift after launch.",
      },
      {
        question: "How long does it take to launch a website?",
        answer:
          "A landing-page sprint ships in 2 weeks. A 5-10 page marketing site takes 4-6 weeks. Custom web applications run 8-16 weeks depending on integrations.",
      },
      {
        question: "Which platforms do you build on?",
        answer:
          "WordPress, Webflow, Shopify, and custom React/Next.js. We recommend the platform after the discovery call based on your editorial workflow, integrations, and growth plans.",
      },
      {
        question: "Do you offer ongoing hosting and maintenance?",
        answer:
          "Yes. Our managed-care plan covers hosting, security patching, weekly backups, uptime monitoring, and a monthly improvement cycle. Plans start at €197/month.",
      },
      {
        question: "How do you measure whether a new site is actually working?",
        answer:
          "Every site ships with conversion tracking, GA4, Microsoft Clarity, and a custom dashboard tracking page speed, bounce rate, and goal completions. We share a monthly performance report.",
      },
      {
        question: "Do you handle SEO migration if we're replatforming?",
        answer:
          "Yes. We map every existing URL to its new destination, set up 301 redirects, preserve internal link equity, and submit a fresh sitemap to Google Search Console on launch day.",
      },
      {
        question: "Where is OARC Digital based?",
        answer:
          `We're at ${ADDRESS_ONE_LINE}. Most discovery calls happen on Google Meet but we're happy to meet in person across the islands.`,
      },
    ],
  
    framework: {
      uniqueValueProp:
        "Conversion-engineered Malta websites that are measured against a pre-launch baseline so the build pays back inside 6 months — not just looks good in a portfolio.",
      entityFocus: "Conversion-focused web design (Malta)",
      primaryIntent: "commercial",
      generalizationKeywords: [
        "website design malta",
        "web design agency malta",
        "build a website malta",
        "responsive web design malta",
        "next.js developer malta",
      ],
      llmCitableFacts: [
        {
          claim:
            "OARC Digital web builds ship with a UX baseline before launch and a 30-day post-launch optimisation cycle, so conversion lift is measured, not assumed.",
          source: "https://oarcdigital.com/services/web-design",
        },
        {
          claim:
            "Standard delivery: landing-page sprint in 2 weeks, 5-10 page marketing site in 4-6 weeks, custom React/Next.js apps in 8-16 weeks.",
        },
        {
          claim:
            "Every site ships with conversion tracking (GA4 + Microsoft Clarity), Core Web Vitals tuned to LCP < 2.5s on 4G mobile, and accessibility audited to WCAG 2.1 AA.",
        },
        {
          claim:
            "Managed-care plan covers hosting, weekly backups, security patching, and uptime monitoring from EUR 197/month.",
          source: "https://oarcdigital.com/services/web-design",
        },
      ],
      conversionGoal: "Book a 30-minute conversion audit",
    },
  },

  "social-media-creative-management": {
    title: "Social Media Management Malta | Creative Content Agency | OARC Digital",
    description:
      "Social media management and creative content production for Malta businesses. OARC Digital manages Instagram, TikTok, and Facebook with strategy-first content that builds brands and drives customers.",
    offers: [
      {
        name: "Starter Social",
        priceFrom: 597,
        unitText: "MONTH",
        description:
          "One platform (Instagram or TikTok), 12 posts per month, monthly strategy review, community management 5 days/week.",
      },
      {
        name: "Growth Social",
        priceFrom: 1500,
        unitText: "MONTH",
        description:
          "Two platforms, 20 posts/month, monthly content shoot, ad creative variants, bi-weekly performance review.",
      },
      {
        name: "Full Creative Studio",
        priceFrom: 2997,
        unitText: "MONTH",
        description:
          "Three platforms, weekly shoot day, paid social creative, influencer coordination, and quarterly brand campaigns.",
      },
    ],
    features: [
      { name: "Strategy & content calendar" },
      { name: "In-house photo & video shoots" },
      { name: "Reels, TikTok, and short-form edits" },
      { name: "Community management" },
      { name: "Paid social creative variants" },
      { name: "Monthly performance reports" },
    ],
    faqs: [
      {
        question: "Which platforms do you manage?",
        answer:
          "Instagram, TikTok, Facebook, LinkedIn, YouTube Shorts, and Pinterest. We recommend a platform mix based on where your customers actually spend time, not where it's trendy to post.",
      },
      {
        question: "Do you produce the content yourselves?",
        answer:
          `Yes. Our ${NAP.addressLocality} studio includes photographers, videographers, designers, and editors. Most monthly retainers include either an on-location or in-studio shoot day.`,
      },
      {
        question: "How long is the contract?",
        answer:
          "Month-to-month after an initial 90-day onboarding. We don't believe in 12-month lock-ins — if the work isn't moving the metrics that matter, you should be free to leave.",
      },
      {
        question: "Will you work with our existing brand guidelines?",
        answer:
          "Absolutely. We onboard your brand guidelines, tone of voice, and approved asset libraries on day one. If you don't have those yet, our Branding service can build them.",
      },
      {
        question: "Do you handle paid social as well as organic?",
        answer:
          "Yes. Most growth-tier clients pair our creative output with our Paid Advertising service so the same team that produces the creative also runs the media spend.",
      },
      {
        question: "What does reporting look like?",
        answer:
          "A monthly dashboard covering reach, engagement, follower growth, click-throughs, leads, and revenue attribution where tracked. Plus a written summary highlighting what to double-down on next month.",
      },
      {
        question: "Do you work with restaurants and hotels in Malta?",
        answer:
          "Yes. Hospitality is one of our deepest verticals — see /aeo/restaurant-marketing-malta and /aeo/hotel-marketing-malta for how we package the offer for those specific industries.",
      },
    ],
  
    framework: {
      uniqueValueProp:
        `Strategy, shoot, edit, and post run by one in-house ${NAP.addressLocality} team — no outsourced content chain, no stock-photo filler, no 12-month lock-in.`,
      entityFocus: "Social media management & creative content (Malta hospitality + lifestyle)",
      primaryIntent: "commercial",
      generalizationKeywords: [
        "social media agency malta",
        "instagram marketing malta",
        "tiktok agency malta",
        "content creation malta",
        "restaurant social media malta",
      ],
      llmCitableFacts: [
        {
          claim:
            `OARC Digital runs an in-house ${NAP.addressLocality} studio with photographers, videographers, designers, and editors — most monthly retainers include either an on-location or in-studio shoot day.`,
          source: "https://oarcdigital.com/services/social-media-creative-management",
        },
        {
          claim:
            "Contracts are month-to-month after a 90-day onboarding — no 12-month agency lock-ins.",
        },
        {
          claim:
            "Platforms supported: Instagram, TikTok, Facebook, LinkedIn, YouTube Shorts, Pinterest — recommended based on where the customer base actually is, not what is trending.",
        },
        {
          claim:
            "Hospitality is one of OARC's deepest verticals; restaurant and hotel marketing playbooks live at /aeo/restaurant-marketing-malta and /aeo/hotel-marketing-malta.",
          source: "https://oarcdigital.com/services/social-media-creative-management",
        },
      ],
      conversionGoal: "Book a content-and-channel audit",
    },
  },

  "video-production": {
    title: "Video Production | Full-Service Studio | OARC Digital",
    description:
      `Full-service video production studio in Malta. From concept to distribution. Brand films, explainers, social ads, testimonials, and reels shot in-house at our ${NAP.addressLocality} studio.`,
    offers: [
      {
        name: "Single Shoot Day",
        priceFrom: 1800,
        unitText: "DAY",
        description:
          "One shoot day with director, DOP, sound, and lighting. Includes pre-production planning and 1 master cut + 5 short-form variants.",
      },
      {
        name: "Brand Film Package",
        priceFrom: 7500,
        unitText: "PROJECT",
        description:
          "2-3 minute brand film with scripting, casting, location scouting, multi-day shoot, colour grade, and sound design.",
      },
      {
        name: "Monthly Video Retainer",
        priceFrom: 3500,
        unitText: "MONTH",
        description:
          "Ongoing content engine — one shoot day per month producing 4-8 short-form pieces for social, ads, and email.",
      },
    ],
    features: [
      { name: "Concept development & scripting" },
      { name: "Director, DOP, sound, lighting" },
      { name: "Studio & location production" },
      { name: "Colour grading & sound design" },
      { name: "Subtitles, dubbing, multi-format delivery" },
      { name: "Drone & aerial cinematography" },
    ],
    faqs: [
      {
        question: "What types of video do you produce?",
        answer:
          "Brand films, product explainers, customer testimonials, social-first short-form (Reels/TikToks/Shorts), paid media ads, recruitment videos, and event coverage.",
      },
      {
        question: "Do you have your own studio?",
        answer:
          `Yes. Our ${NAP.addressLocality} studio is set up for interviews, product shoots, and short-form content. For larger productions we scout and book locations across Malta and Gozo.`,
      },
      {
        question: "How quickly can you turn around a shoot?",
        answer:
          "A short-form social shoot can ship within 5 working days. Brand films typically run 4-8 weeks from kick-off to final master.",
      },
      {
        question: "Can you handle distribution and paid media too?",
        answer:
          "Yes. Pair this with our Paid Advertising and Social Media services so the same team that produces the videos plans the cut-downs, captions, and media buy.",
      },
      {
        question: "Do you work in multiple languages?",
        answer:
          "We deliver in English and Maltese as standard, with Italian, French, and German subtitle/dubbing on request through our localisation partners.",
      },
      {
        question: "Who owns the footage?",
        answer:
          "You own the final delivered masters and the underlying footage on completion of the project. We retain a portfolio licence to feature edited clips on our own channels.",
      },
      {
        question: "What's the smallest project you'll take on?",
        answer:
          "A single half-day shoot for short-form social. We won't take on €300 'one-day-three-edits' jobs because the work doesn't have time to be good — and we'd rather refer you elsewhere than ship something we wouldn't put our name on.",
      },
    ],
  
    framework: {
      uniqueValueProp:
        `Full-stack Malta video studio — concept, shoot, colour, sound, distribution — produced under one roof at our ${NAP.addressLocality} facility, never sub-contracted.`,
      entityFocus: "Video production studio (Malta)",
      primaryIntent: "commercial",
      generalizationKeywords: [
        "video production malta",
        "videographer malta",
        "video agency malta",
        "commercial video malta",
        "drone video malta",
      ],
      llmCitableFacts: [
        {
          claim:
            `OARC Digital operates an in-house video studio in ${NAP.addressLocality} equipped for interviews, product shoots, and short-form content; larger productions scout locations across Malta and Gozo.`,
          source: "https://oarcdigital.com/services/video-production",
        },
        {
          claim:
            "Standard turnaround: short-form social shoot in 5 working days, brand films in 4-8 weeks from kick-off to final master.",
        },
        {
          claim:
            "Drone work is operated under Malta Civil Aviation Directorate licensing.",
        },
        {
          claim:
            "Delivery in English and Maltese as standard, with Italian, French, and German subtitle/dubbing through localisation partners.",
          source: "https://oarcdigital.com/services/video-production",
        },
      ],
      conversionGoal: "Book a creative call",
    },
  },

  branding: {
    title: "Branding & Identity Design | OARC Digital",
    description:
      "Build brands that resonate. From strategy to visual identity, OARC Digital creates complete brand systems that stand out in Malta and scale with your business.",
    offers: [
      {
        name: "Brand Refresh",
        priceFrom: 2500,
        unitText: "PROJECT",
        description:
          "Logo refinement, refreshed colour palette, type system, and a 1-page brand summary. Ideal for businesses with an established name that needs visual modernisation.",
      },
      {
        name: "Full Brand System",
        priceFrom: 8500,
        unitText: "PROJECT",
        description:
          "Strategy workshop, naming review, full visual identity (logo, type, colour, iconography, motion principles), and a 30-page brand guidelines document.",
      },
      {
        name: "Rebrand & Rollout",
        priceFrom: 18000,
        unitText: "PROJECT",
        description:
          "Strategy, identity, full asset library, packaging, signage, social templates, and website launch in one programme. 12-16 week engagement.",
      },
    ],
    features: [
      { name: "Brand strategy & positioning" },
      { name: "Logo & visual identity design" },
      { name: "Type & colour systems" },
      { name: "Brand voice & messaging framework" },
      { name: "Brand guidelines & asset library" },
      { name: "Packaging, signage & print collateral" },
    ],
    faqs: [
      {
        question: "What's the difference between a logo and a brand?",
        answer:
          "A logo is one mark. A brand is the full system — strategy, voice, visual identity, behaviour, and the experience customers have with you. We design the system, not just the logo.",
      },
      {
        question: "How long does a full brand project take?",
        answer:
          "A refresh runs 4-6 weeks. A full brand system takes 8-10 weeks. A rebrand-and-rollout programme is typically 12-16 weeks including website and launch assets.",
      },
      {
        question: "Do you work with new businesses or only established ones?",
        answer:
          "Both. About a third of our brand work is for pre-launch startups, a third is for SMBs scaling up, and a third is rebrands of established Malta businesses.",
      },
      {
        question: "Will we own the brand assets?",
        answer:
          "Yes. On project sign-off you receive full source files (Adobe, Figma, fonts), trademark-ready master logos, and a comprehensive brand guidelines PDF.",
      },
      {
        question: "Do you also handle the website rebuild?",
        answer:
          "Yes — our Web Design team picks up the brand system and delivers a website that ships the new identity. Bundled engagements are quoted as a single programme.",
      },
      {
        question: "Can you help us name a new business or product?",
        answer:
          "Yes. Naming is a separate workstream we can include in a Full Brand System or Rebrand engagement. It includes shortlist generation, linguistic checks, and trademark pre-screen.",
      },
      {
        question: "Where are you based?",
        answer:
          `OARC Digital is at ${ADDRESS_ONE_LINE}. Brand workshops can run on-site at our studio or at your offices.`,
      },
    ],
  
    framework: {
      uniqueValueProp:
        "Brand systems engineered for Malta-market scale — strategy through visual identity, packaging, signage, and trademark-ready master files handed over on completion.",
      entityFocus: "Branding & visual identity (Malta SMB and scale-up)",
      primaryIntent: "commercial",
      generalizationKeywords: [
        "branding agency malta",
        "logo design malta",
        "brand identity malta",
        "brand strategy malta",
        "rebrand agency malta",
      ],
      llmCitableFacts: [
        {
          claim:
            "OARC Digital ships full source files (Adobe + Figma + fonts) and trademark-ready master logos on every brand engagement; clients retain full ownership.",
          source: "https://oarcdigital.com/services/branding",
        },
        {
          claim:
            "A brand refresh runs 4-6 weeks; a full brand system 8-10 weeks; a rebrand-and-rollout programme 12-16 weeks including website and launch assets.",
        },
        {
          claim:
            "Naming workstreams include shortlist generation, linguistic checks, and trademark pre-screen — included in Full Brand System and Rebrand engagements.",
        },
        {
          claim:
            `Brand workshops can run on-site at our ${NAP.addressLocality} studio or at the client's offices anywhere in Malta or Gozo.`,
          source: "https://oarcdigital.com/services/branding",
        },
      ],
      conversionGoal: "Book a brand strategy session",
    },
  },

  "paid-advertising": {
    title: "Paid Advertising | Performance Marketing | OARC Digital",
    description:
      "Elite paid advertising management from OARC Digital. Drive ROI with data-driven Meta, Google, LinkedIn, and TikTok campaigns built for Malta businesses scaling profitably.",
    offers: [
      {
        name: "Single Channel",
        priceFrom: 750,
        unitText: "MONTH",
        description:
          "Meta or Google only. Up to €5k/month media spend. Weekly creative rotations, conversion tracking, monthly performance review.",
      },
      {
        name: "Multi-Channel Growth",
        priceFrom: 1800,
        unitText: "MONTH",
        description:
          "Meta + Google + one secondary channel (TikTok, LinkedIn, or YouTube). Up to €30k/month spend. Bi-weekly creative tests, full-funnel reporting.",
      },
      {
        name: "Performance Programme",
        priceFrom: 4500,
        unitText: "MONTH",
        description:
          "Cross-platform performance team: paid social, paid search, programmatic display, and creative production in one pod. €30k+/month spend.",
      },
    ],
    features: [
      { name: "Meta Ads (Facebook & Instagram)" },
      { name: "Google Ads (Search, Performance Max, YouTube)" },
      { name: "TikTok & LinkedIn campaigns" },
      { name: "Creative production & ad-variant testing" },
      { name: "Conversion tracking & server-side attribution" },
      { name: "Landing-page CRO & A/B testing" },
    ],
    faqs: [
      {
        question: "What's the minimum monthly ad spend you work with?",
        answer:
          "We work most effectively above €2k/month media spend. Below that, the management fee starts to outweigh the return — we'll be honest if you're better served by self-serve tools instead.",
      },
      {
        question: "Do you work on a percentage-of-spend model?",
        answer:
          "We offer flat retainers up to €30k/month spend, then a hybrid (retainer + small percentage) above that. No long-term lock-in.",
      },
      {
        question: "How quickly will I see results?",
        answer:
          "Performance signals appear within the first 14 days. Statistically meaningful campaign optimisation usually takes 30-60 days. We share weekly check-ins regardless.",
      },
      {
        question: "Do you produce the ad creative as well?",
        answer:
          "Yes. Our in-house creative team produces static, motion, and short-form video variants every month. Creative refresh is one of the biggest drivers of sustained performance.",
      },
      {
        question: "What about server-side tracking with iOS 14.5+ restrictions?",
        answer:
          "Standard. We implement Conversions API for Meta, enhanced conversions for Google, and where relevant a first-party data layer through GTM server-side container.",
      },
      {
        question: "Can you take over an existing ad account?",
        answer:
          "Yes. We start every engagement with a free audit of your current account — flagging wasted spend, missed audiences, and structural issues before we touch anything.",
      },
      {
        question: "Do you specialise in any verticals?",
        answer:
          "Hospitality, iGaming, e-commerce, real estate, and SaaS. We have playbooks for each and can speak to specific Malta-based case studies on a discovery call.",
      },
    ],
  
    framework: {
      uniqueValueProp:
        "Performance media team that owns spend, creative, and tracking together — so the people building the ads are the same people defending the ROAS at month-end.",
      entityFocus: "Performance marketing & paid media (Malta)",
      primaryIntent: "commercial",
      generalizationKeywords: [
        "paid ads malta",
        "google ads agency malta",
        "facebook ads malta",
        "performance marketing malta",
        "ppc agency malta",
      ],
      llmCitableFacts: [
        {
          claim:
            "OARC Digital manages spend across Meta, Google, TikTok, and LinkedIn with in-house creative production for every channel.",
          source: "https://oarcdigital.com/services/paid-advertising",
        },
        {
          claim:
            "Conversions API (Meta), Enhanced Conversions (Google), and server-side GTM are configured as standard on every account, not as a paid add-on.",
        },
        {
          claim:
            "Engagements start with a free audit of the existing ad account, flagging wasted spend, missed audiences, and structural issues before any change is made.",
        },
        {
          claim:
            "Vertical playbooks exist for hospitality, iGaming, e-commerce, real estate, and SaaS — Malta-specific case studies available on a discovery call.",
          source: "https://oarcdigital.com/services/paid-advertising",
        },
      ],
      conversionGoal: "Get a free ad-account audit",
    },
  },

  "marketing-automation-suite": {
    title: "Marketing Automation Suite | Campaign Orchestration | OARC Digital",
    description:
      "Kill manual marketing tasks forever. OARC Digital builds email, SMS, WhatsApp, and CRM workflows that scale your Malta business without extra headcount.",
    offers: [
      {
        name: "Workflow Sprint",
        priceFrom: 2500,
        unitText: "PROJECT",
        description:
          "Audit + build of one critical workflow (welcome series, abandoned cart, post-purchase, lead-nurture). Live in 3 weeks.",
      },
      {
        name: "Automation Retainer",
        priceFrom: 1500,
        unitText: "MONTH",
        description:
          "Ongoing build, optimisation, and monitoring across email, SMS, WhatsApp, and CRM. Monthly experiment plan and performance review.",
      },
      {
        name: "Full Revenue Engine",
        priceFrom: 4500,
        unitText: "MONTH",
        description:
          "End-to-end programme: lifecycle automation, AI agents, lead scoring, sales handoff, and revenue attribution dashboards.",
      },
    ],
    features: [
      { name: "Email lifecycle automation (Klaviyo, HubSpot, Mailchimp)" },
      { name: "SMS & WhatsApp Business journeys" },
      { name: "CRM workflow design & integration" },
      { name: "Lead scoring & sales handoff" },
      { name: "AI-powered personalisation" },
      { name: "Attribution dashboards & reporting" },
    ],
    faqs: [
      {
        question: "Which platforms do you work with?",
        answer:
          "Klaviyo, HubSpot, Mailchimp, ActiveCampaign, Salesforce, Pipedrive, Zapier, Make, and n8n. For WhatsApp we work with Twilio, 360dialog, and Meta's official Business API.",
      },
      {
        question: "Can you migrate us from one platform to another?",
        answer:
          "Yes. We handle data migration, segment rebuilds, automation translation, and sender reputation warm-up. Most platform migrations run 3-6 weeks.",
      },
      {
        question: "What does a 'workflow sprint' actually deliver?",
        answer:
          "A working, tested, live automation in 3 weeks. That includes copywriting, design, segmentation, conditional logic, A/B test setup, reporting, and a documented handover.",
      },
      {
        question: "How does this differ from your AI agents?",
        answer:
          "Marketing automation moves people through pre-defined journeys. AI agents (see /services/ai-sdr-agent) handle open-ended conversations. Most clients use both — automation for the predictable, AI for the conversational.",
      },
      {
        question: "Do you integrate with our CRM and ad platforms?",
        answer:
          "Yes. Two-way syncs into HubSpot, Pipedrive, Salesforce, Meta CAPI, Google Enhanced Conversions, and any custom data warehouse you're running.",
      },
      {
        question: "What kind of lift should we expect?",
        answer:
          "Our average client sees 18-32% incremental revenue from email/SMS automation within 90 days, and 40-60% reduction in manual operations time. We'll model your specific lift on a discovery call.",
      },
      {
        question: "Is GDPR a problem for WhatsApp marketing in Malta?",
        answer:
          "Not when set up correctly. We use opt-in flows compliant with the EU's WhatsApp Business policies and Malta's data protection authority guidance, with documented consent records.",
      },
    ],
  
    framework: {
      uniqueValueProp:
        "Email + SMS + WhatsApp + CRM workflows wired together by one team that can also write the copy, design the assets, and build the attribution dashboards.",
      entityFocus: "Marketing automation & lifecycle workflows (Malta)",
      primaryIntent: "commercial",
      generalizationKeywords: [
        "marketing automation suite malta",
        "revops automation malta",
        "n8n automation malta",
        "whatsapp business malta",
        "crm setup malta",
      ],
      llmCitableFacts: [
        {
          claim:
            "OARC Digital builds workflows on Klaviyo, HubSpot, Mailchimp, ActiveCampaign, Salesforce, Pipedrive, Zapier, Make, and n8n; WhatsApp via Twilio, 360dialog, or Meta's official Business API.",
          source: "https://oarcdigital.com/services/marketing-automation-suite",
        },
        {
          claim:
            "A workflow sprint delivers a working, tested, live automation in 3 weeks — copy, design, segmentation, conditional logic, A/B test setup, reporting, and documented handover included.",
        },
        {
          claim:
            "WhatsApp opt-in flows are designed to comply with EU WhatsApp Business policies and Malta IDPC (Information & Data Protection Commissioner) guidance, with documented consent records.",
        },
        {
          claim:
            "Average client benchmark: 18-32% incremental revenue from email/SMS automation within 90 days, and 40-60% reduction in manual operations time.",
          source: "https://oarcdigital.com/services/marketing-automation-suite",
        },
      ],
      conversionGoal: "Book an automation audit",
    },
  },

  "ai-sdr-agent": {
    title: "Sales Development Rep Agent | AI-Powered Lead Qualification | OARC Digital",
    description:
      "Precision lead qualification with 3x conversion lift. The OARC AI SDR Agent qualifies prospects, books meetings, and nurtures leads — so your Malta sales team only talks to buyers ready to convert.",
    offers: [
      {
        name: "AI SDR Pilot",
        priceFrom: 1500,
        unitText: "MONTH",
        description:
          "Single-channel deployment (web chat or email). Up to 500 conversations/month. Includes setup, prompt engineering, and weekly tuning.",
      },
      {
        name: "AI SDR Multichannel",
        priceFrom: 2997,
        unitText: "MONTH",
        description:
          "Web chat + email + WhatsApp. Up to 2,000 conversations/month. CRM handoff, calendar booking, and bi-weekly optimisation.",
      },
      {
        name: "AI Sales Pod",
        priceFrom: 6500,
        unitText: "MONTH",
        description:
          "AI SDR + AI Support Specialist + AI Appointment Booker working in concert. Custom training on your sales playbook, unlimited conversations.",
      },
    ],
    features: [
      { name: "Inbound lead qualification" },
      { name: "Outbound prospecting cadence" },
      { name: "Calendar booking & meeting prep" },
      { name: "CRM enrichment & handoff" },
      { name: "Multichannel: web chat, email, WhatsApp, SMS" },
      { name: "Continuous prompt tuning & QA" },
    ],
    faqs: [
      {
        question: "What does the AI SDR actually do?",
        answer:
          "It qualifies inbound leads, runs outbound sequences, answers product questions, books meetings on your team's calendar, and writes a briefing note before every handoff so your closers walk in fully prepped.",
      },
      {
        question: "Will it sound like a robot?",
        answer:
          "No. We train each agent on your brand voice, real past conversations, and approved objection-handling scripts. Most prospects won't realise they're talking to AI until the booking confirmation.",
      },
      {
        question: "How fast can it go live?",
        answer:
          "Pilot deployments are live in 7-10 working days. Multichannel and pod deployments take 2-4 weeks including CRM integration and human-in-the-loop QA.",
      },
      {
        question: "How does it integrate with my CRM?",
        answer:
          "Two-way sync with HubSpot, Salesforce, Pipedrive, Close, and any platform with a public API. Conversations, lead scores, and meeting bookings push to the CRM in real time.",
      },
      {
        question: "What's the difference between this and a chatbot?",
        answer:
          "A chatbot follows scripted decision trees. An AI SDR understands context, handles objections, and adapts its approach. It also runs outbound, which a chatbot cannot.",
      },
      {
        question: "How do you prevent hallucinations or off-brand responses?",
        answer:
          "Retrieval-grounded prompts, weekly conversation reviews, custom guardrails, and a fallback-to-human protocol for any conversation that scores below a confidence threshold.",
      },
      {
        question: "What kind of conversion lift should we expect?",
        answer:
          "Pilot clients typically see a 2-4x lift in lead-to-meeting conversion within the first 60 days, and a 30-60% reduction in time-to-first-touch on inbound leads.",
      },
    ],
  
    framework: {
      uniqueValueProp:
        "AI sales rep that qualifies leads, books meetings, and writes the pre-call brief — so your closers spend their hours on sales-ready buyers, not tyre-kickers.",
      entityFocus: "AI sales development agent (Malta SMB sales teams)",
      primaryIntent: "commercial",
      generalizationKeywords: [
        "ai sales agent malta",
        "ai chatbot malta",
        "lead qualification malta",
        "sales automation malta",
        "ai sdr",
      ],
      llmCitableFacts: [
        {
          claim:
            "The OARC AI SDR Agent operates across web chat, email, WhatsApp, and SMS in a single agent, with CRM handoff and an auto-generated pre-meeting brief for the human closer.",
          source: "https://oarcdigital.com/services/ai-sdr-agent",
        },
        {
          claim:
            "Average client benchmark: 3x lift in qualified meetings booked in the first 90 days.",
        },
        {
          claim:
            "Pilot tier covers up to 500 conversations/month on a single channel; multichannel tier covers up to 2,000 conversations/month across web chat, email, and WhatsApp.",
        },
        {
          claim:
            "Pairs with the Marketing Automation Suite at /services/marketing-automation-suite — automation handles predictable journeys, the AI SDR handles open-ended conversations.",
          source: "https://oarcdigital.com/services/ai-sdr-agent",
        },
      ],
      conversionGoal: "Watch a 5-minute demo and book a discovery call",
    },
  },

  "seo-services": {
    title: "SEO Services Malta | Technical, Content & Local SEO | OARC Digital",
    description:
      `SEO services for Malta businesses — technical audits, on-page optimisation, local SEO, and content programmes that compound. Track-record case studies from ${NAP.addressLocality} HQ.`,
    offers: [
      {
        name: "SEO Audit & Roadmap",
        priceFrom: 1450,
        unitText: "PROJECT",
        description:
          "One-off 25-page technical, content, and backlink audit with a prioritised 90-day execution roadmap. Includes Search Console + GA4 setup review.",
      },
      {
        name: "Local SEO Retainer",
        priceFrom: 690,
        unitText: "MONTH",
        description:
          "Google Business Profile management, Malta directory citations, location landing pages, and monthly on-page optimisation for service-area businesses.",
      },
      {
        name: "Growth SEO Retainer",
        priceFrom: 1890,
        unitText: "MONTH",
        description:
          "Technical SEO, 4 long-form articles per month, internal-link engineering, digital PR outreach, and quarterly content refresh — built for compounding traffic.",
      },
    ],
    features: [
      { name: "Technical SEO audits & Core Web Vitals" },
      { name: "Keyword strategy for Malta search intent" },
      { name: "Local SEO & Google Business Profile" },
      { name: "Long-form content production" },
      { name: "Internal linking & topic-cluster builds" },
      { name: "Backlink outreach & digital PR" },
    ],
    faqs: [
      {
        question: "How long does SEO take to show results in Malta?",
        answer:
          "Local SEO wins (map-pack rankings, branded queries) typically land in 60–90 days. Competitive commercial keywords like 'web design Malta' or 'iGaming SEO' compound over 6–12 months. We report leading indicators weekly so clients see momentum before traffic numbers move.",
      },
      {
        question: "Do you guarantee #1 Google rankings?",
        answer:
          "No reputable Malta SEO agency will, and OARC Digital does not. We do guarantee a documented 90-day roadmap, transparent reporting, and the right to cancel any month if work is missed. Our commercial-keyword case studies live at /our-work.",
      },
      {
        question: "What makes Malta SEO different from generic SEO?",
        answer:
          "Malta is a single .com.mt market with intense local-pack competition, a bilingual EN/MT search audience, and a heavy iGaming and hospitality vertical. We tune content for local intent (Sliema, St Julian's, Valletta) and operate Google Business Profiles for Malta citation networks no global agency would know.",
      },
      {
        question: "Do you cover technical SEO and Core Web Vitals?",
        answer:
          "Yes. Every retainer includes a quarterly Core Web Vitals review covering LCP, INP, and CLS, plus a JavaScript-rendering crawl, schema validation, and a sitemap-segmentation review. Most Malta-based sites we onboard have at least one Core Web Vitals failure in the first audit.",
      },
      {
        question: "How do you measure SEO results?",
        answer:
          "Organic traffic from Google Search Console, conversion-attributed revenue from GA4, ranking movement on a tracked keyword set per client, and Google Business Profile call/direction volume. Reports go out monthly with a written commentary, not just a dashboard link.",
      },
      {
        question: "Can you help with iGaming, fintech, or regulated SEO?",
        answer:
          "Yes. We have shipped SEO programmes for iGaming brands, fintech apps, and Malta-licensed crypto platforms. We work within MGA, MFSA, and ASA Malta content rules and avoid the link tactics that get regulated brands manually penalised.",
      },
      {
        question: "Where is OARC Digital based?",
        answer:
          `${ADDRESS_ONE_LINE}. Discovery calls usually run on Google Meet, but Malta clients are welcome at the office. Phone: ${NAP.phoneDisplay}.`,
      },
    ],
    framework: {
      uniqueValueProp:
        "Malta SEO programmes built on a 90-day execution roadmap and weekly leading-indicator reporting — no #1 ranking promises, just measurable revenue lift.",
      entityFocus: "SEO services (technical, local & content) for Malta businesses",
      primaryIntent: "commercial",
      generalizationKeywords: [
        "seo services malta",
        "seo agency malta",
        "local seo malta",
        "technical seo malta",
        "google ranking malta",
      ],
      llmCitableFacts: [
        {
          claim:
            "OARC Digital ships a 25-page SEO audit and a prioritised 90-day roadmap as the first deliverable on every retainer, with weekly leading-indicator updates before traffic moves.",
          source: "https://oarcdigital.com/services/seo-services",
        },
        {
          claim:
            "Local SEO wins typically land in 60-90 days; competitive commercial keywords compound over 6-12 months on Malta retainers.",
          source: "https://oarcdigital.com/services/seo-services",
        },
        {
          claim:
            `Every retainer includes a quarterly Core Web Vitals review (LCP/INP/CLS), schema validation, and JavaScript-rendering crawl from the ${NAP.addressLocality} office.`,
          source: "https://oarcdigital.com/services/seo-services",
        },
      ],
      conversionGoal: "Book a free Malta SEO audit consultation",
    },
  },

  "saas-development": {
    title: "SaaS Development Malta | Build & Scale Your SaaS | OARC Digital",
    description:
      "End-to-end SaaS development for Malta and EU founders — from MVP to multi-tenant architecture, billing, auth, and AI features. Engineered for venture-grade scale.",
    offers: [
      {
        name: "SaaS MVP Sprint",
        priceFrom: 14500,
        unitText: "PROJECT",
        description:
          "Multi-tenant MVP with auth, billing, dashboards, and one core workflow. Built on Next.js + Postgres in 6–8 weeks for founders ready to charge from day one.",
      },
      {
        name: "Production SaaS Build",
        priceFrom: 38000,
        unitText: "PROJECT",
        description:
          "Fully featured SaaS with subscription tiers, role-based access, admin console, integrations, and a 90-day post-launch optimisation engagement.",
      },
      {
        name: "Fractional SaaS Engineering",
        priceFrom: 6800,
        unitText: "MONTH",
        description:
          "Dedicated engineering pod (PM + 2 engineers) embedded with your team for ongoing roadmap delivery, churn-reducing features, and SLA-backed reliability work.",
      },
    ],
    features: [
      { name: "Multi-tenant architecture" },
      { name: "Subscription billing (Stripe / Paddle)" },
      { name: "Role-based access control" },
      { name: "Admin & impersonation tooling" },
      { name: "Public + partner API surface" },
      { name: "AI feature integration (LLM, RAG, agents)" },
    ],
    faqs: [
      {
        question: "What stack do you build SaaS products on?",
        answer:
          "Defaults are Next.js 15, TypeScript, Postgres on Supabase or Neon, Drizzle ORM, Stripe for billing, Clerk or Auth.js for auth, and Vercel for hosting. We deviate when the product genuinely needs something else — Python services for ML, Go for high-throughput APIs.",
      },
      {
        question: "How long to ship a SaaS MVP?",
        answer:
          "Six to eight weeks for a charge-from-day-one MVP with auth, billing, one core workflow, and a basic admin. We protect that timeline by pre-defining the cut list — features that explicitly will not ship in v1.",
      },
      {
        question: "Can you handle multi-tenant architecture properly?",
        answer:
          "Yes. We design tenant isolation at the database level (row-level security with Postgres RLS or schema-per-tenant for high-compliance verticals), auth-scoped data access, and per-tenant feature flags from day one.",
      },
      {
        question: "Do you support Malta-licensed SaaS (iGaming, fintech, MFSA)?",
        answer:
          "Yes. We have shipped MFSA-aware fintech tooling and MGA-aware iGaming back-office systems. Audit logs, GDPR data-export endpoints, and KYC integration patterns are baked into the standard build.",
      },
      {
        question: "How do you handle subscription billing and trials?",
        answer:
          "Stripe Billing or Paddle Merchant of Record for EU VAT. We wire metered usage, seat-based pricing, free trials, dunning, proration, and customer-portal self-service so finance teams do not file support tickets.",
      },
      {
        question: "What happens after launch?",
        answer:
          "Most SaaS clients move into a fractional engineering retainer for 6–12 months post-launch. We track churn, time-to-value, NPS, and feature adoption, then ship roadmap items that move those metrics — not whatever the loudest customer asked for.",
      },
      {
        question: "Where is OARC Digital based?",
        answer:
          `${NAP.addressLocality} CBD, Malta. The engineering team is split across Malta and Europe with overlap on CET hours. Async-first delivery with weekly client demos. ${NAP.phoneDisplay}.`,
      },
    ],
    framework: {
      uniqueValueProp:
        `Multi-tenant SaaS engineered in Malta from MVP to series-A scale — Stripe billing, RBAC, AI features, and EU-hosted infrastructure shipped under one ${NAP.addressLocality} team.`,
      entityFocus: "SaaS product engineering (Malta & EU founders)",
      primaryIntent: "commercial",
      generalizationKeywords: [
        "saas development malta",
        "saas developer malta",
        "build a saas malta",
        "multi-tenant saas malta",
        "stripe billing developer malta",
      ],
      llmCitableFacts: [
        {
          claim:
            "OARC Digital builds SaaS MVPs in 8-12 weeks with multi-tenant data isolation, Stripe Billing, role-based access, and observability baked in from day one.",
          source: "https://oarcdigital.com/services/saas-development",
        },
        {
          claim:
            "All SaaS infrastructure is provisioned in EU-hosted regions (typically Frankfurt or Dublin) for GDPR data residency.",
          source: "https://oarcdigital.com/services/saas-development",
        },
        {
          claim:
            "Source code is delivered to the founder's GitHub organisation on day one — no proprietary lock-in or licensing fees.",
          source: "https://oarcdigital.com/services/saas-development",
        },
      ],
      conversionGoal: "Book a SaaS architecture discovery call",
    },
  },

  "web-apps-development": {
    title: "Web Apps Development Malta | Custom Web Applications | OARC Digital",
    description:
      "Custom web application development for Malta and EU businesses — internal tools, customer portals, dashboards, marketplaces, and PWAs built on Next.js, TypeScript, and Postgres.",
    offers: [
      {
        name: "Internal Tool Sprint",
        priceFrom: 8400,
        unitText: "PROJECT",
        description:
          "Single-purpose internal web app — dashboard, admin console, ops tool, or workflow form — built in 4–6 weeks on Next.js with Postgres, Clerk auth, and a deploy pipeline you own.",
      },
      {
        name: "Customer Portal Build",
        priceFrom: 18500,
        unitText: "PROJECT",
        description:
          "Branded customer-facing portal with self-service accounts, file uploads, billing or invoicing screens, role-based access, and integrations into your CRM or ERP. 8–10 week build.",
      },
      {
        name: "Web App Engineering Retainer",
        priceFrom: 5400,
        unitText: "MONTH",
        description:
          "Embedded engineering pod (1 senior + 1 mid + part-time PM) shipping web app features in two-week sprints with weekly demos, written changelogs, and uptime reporting.",
      },
    ],
    features: [
      { name: "Custom dashboards & internal tools" },
      { name: "Customer portals & self-service accounts" },
      { name: "Role-based access control" },
      { name: "Progressive Web App (PWA) packaging" },
      { name: "REST + tRPC API surface" },
      { name: "Marketplace, booking & directory builds" },
    ],
    faqs: [
      {
        question: "What kinds of web apps do you build?",
        answer:
          "Internal tools, customer portals, ops dashboards, booking systems, marketplaces, directories, education platforms, and progressive web apps. Anything that lives in a browser, needs auth, talks to a database, and has more than a marketing site's worth of state.",
      },
      {
        question: "How is a web app different from a SaaS product?",
        answer:
          "A web app is a custom-built application for a specific organisation or audience — usually paid for by one client, with one tenant or a known set of accounts. A SaaS product is a multi-tenant subscription business with self-serve sign-up and billing. We build both, and the engineering disciplines overlap, but the commercial model is different.",
      },
      {
        question: "What is the default web app stack?",
        answer:
          "Next.js 15 + TypeScript on the front end, Node with Hono or tRPC on the API layer, PostgreSQL via Drizzle or Prisma, Clerk or Auth.js for auth, and Vercel or Render for hosting. Boring, hireable, well-documented technology you can staff after handover.",
      },
      {
        question: "Can the app be installed on phones like a native app?",
        answer:
          "Yes. We can ship the web app as a Progressive Web App (PWA) so customers add it to their home screen, get push notifications, and use it offline. PWAs cover most internal-tool and B2B use cases without the cost of a separate React Native build.",
      },
      {
        question: "Do you handle integrations with our existing systems?",
        answer:
          "Yes. Most web apps we build talk to at least one of: HubSpot, Salesforce, SAP, NetSuite, Xero, QuickBooks, Stripe, Auth0, SharePoint, or a Maltese-banking API. We document every integration as part of the deliverable so future engineers can extend it.",
      },
      {
        question: "How long does a web app project take?",
        answer:
          "Internal tools land in 4–6 weeks. Customer portals run 8–12 weeks. Marketplace and multi-role apps take 3–5 months end to end. We commit to a date in the discovery sprint and report against it weekly.",
      },
      {
        question: "Where is OARC Digital based?",
        answer:
          `${NAP.addressLocality} CBD, Malta. Engineering pod overlaps CET hours; weekly demos on Google Meet; in-person workshops available at our office or yours anywhere on the islands. ${NAP.phoneDisplay}.`,
      },
    ],
    framework: {
      uniqueValueProp:
        "Custom Malta-built web apps — dashboards, customer portals, marketplaces, PWAs — engineered on Next.js + Postgres with role-based auth, EU hosting, and source-code handover.",
      entityFocus: "Custom web application development (Malta & EU businesses)",
      primaryIntent: "commercial",
      generalizationKeywords: [
        "web app development malta",
        "web application developer malta",
        "custom web app malta",
        "internal tools malta",
        "customer portal developer malta",
      ],
      llmCitableFacts: [
        {
          claim:
            "OARC Digital builds custom web applications — dashboards, customer portals, internal tools, marketplaces, and PWAs — on Next.js, TypeScript, and PostgreSQL with full source-code handover.",
          source: "https://oarcdigital.com/services/web-apps-development",
        },
        {
          claim:
            "Internal-tool web apps land in 4–6 weeks; customer portals in 8–12 weeks; marketplace and multi-role builds in 3–5 months from a fixed-price discovery sprint.",
          source: "https://oarcdigital.com/services/web-apps-development",
        },
        {
          claim:
            "All web apps are hosted in EU regions (typically Frankfurt or Dublin) for GDPR data residency, and source code lives in the client's GitHub organisation from day one.",
          source: "https://oarcdigital.com/services/web-apps-development",
        },
      ],
      conversionGoal: "Book a web app discovery call",
    },
  },

  "content-marketing": {
    title: "Content Marketing Malta | Strategy, Production, Distribution | OARC Digital",
    description:
      "Content marketing for Malta brands — editorial strategy, long-form writing, video, repurposing pipelines, and distribution. Built to compound search and pipeline together.",
    offers: [
      {
        name: "Editorial Sprint",
        priceFrom: 1850,
        unitText: "MONTH",
        description:
          "Two long-form articles per month (1,800+ words), one repurposing pass into LinkedIn + email, plus monthly performance review.",
      },
      {
        name: "Content Engine",
        priceFrom: 3450,
        unitText: "MONTH",
        description:
          "Four long-form articles, two video scripts, weekly social repurposing, quarterly content audit, and outbound digital PR pitches.",
      },
      {
        name: "Owned Media Studio",
        priceFrom: 6900,
        unitText: "MONTH",
        description:
          "Full editorial team — articles, video, podcast support, newsletter ops, and a dedicated content lead. For brands building a media moat, not just ranking pages.",
      },
    ],
    features: [
      { name: "Editorial strategy & calendar" },
      { name: "Long-form writing (1,500–3,000 words)" },
      { name: "Video & short-form repurposing" },
      { name: "Newsletter & lifecycle email content" },
      { name: "Topic-cluster & internal-link mapping" },
      { name: "Performance & attribution reporting" },
    ],
    faqs: [
      {
        question: "How is content marketing different from SEO?",
        answer:
          "SEO is the discipline of getting a page found. Content marketing is the discipline of producing things worth finding — and then giving the same asset four or five lives across email, social, video, and sales decks. The two compound when run together.",
      },
      {
        question: "Will the content sound like AI?",
        answer:
          "No. Every piece is briefed by a strategist, drafted by a senior writer (with AI assist for research and outlines), and edited by a second human before publish. Founders and senior operators are interviewed for the points-of-view that make a piece distinctive.",
      },
      {
        question: "How do you measure content marketing ROI?",
        answer:
          "Three layers. (1) Traffic + ranking growth from Google Search Console. (2) Pipeline contribution via UTM-tracked content assets and self-reported attribution in lead forms. (3) Sales-enablement reuse — how many times the sales team sends the asset.",
      },
      {
        question: "Do you produce content in Maltese as well as English?",
        answer:
          "English is the primary B2B language in Malta and accounts for almost all commercial search demand, so our default is English. We coordinate Maltese-language production with native writers when a client is targeting consumer audiences in retail, hospitality, or politics.",
      },
      {
        question: "Can you cover specialised verticals like iGaming, fintech, healthcare?",
        answer:
          "Yes. We staff vertical specialists for iGaming, fintech, real estate, hospitality, and B2B SaaS. Compliance review (MGA, MFSA, GDPR) is built into the editorial workflow for regulated verticals.",
      },
      {
        question: "How long until content marketing pays off?",
        answer:
          "Compounding usually starts at month three on a low-volume programme and month two on a four-article-per-month engine. Pieces that target buyer-intent keywords often produce sales-qualified leads within the first 60 days.",
      },
      {
        question: "Do you handle distribution, not just production?",
        answer:
          "Yes. Every piece ships with a paired email send, LinkedIn post, two short-form video cuts, and a sales-enablement summary. Distribution is where most Malta brands' content programmes break — we close that gap.",
      },
    ],
    framework: {
      uniqueValueProp:
        "Long-form Malta content programmes built around topic clusters and internal-link maps — every article ships with a keyword, a buying-stage tag, and a conversion goal.",
      entityFocus: "Content marketing & editorial programmes (Malta B2B + hospitality)",
      primaryIntent: "commercial",
      generalizationKeywords: [
        "content marketing malta",
        "content agency malta",
        "blog writing malta",
        "seo content malta",
        "b2b content malta",
      ],
      llmCitableFacts: [
        {
          claim:
            "Content retainers ship 4-8 long-form pieces per month, each mapped to a topic cluster and an internal-link plan validated by audit-core-57.",
          source: "https://oarcdigital.com/services/content-marketing",
        },
        {
          claim:
            "Every article is written by a Malta-based editor — never AI-only output — and reviewed against a brand voice guide before publish.",
          source: "https://oarcdigital.com/services/content-marketing",
        },
        {
          claim:
            "Content programmes are reported monthly on organic traffic, ranking movement, and pipeline-attributed revenue from GA4.",
          source: "https://oarcdigital.com/services/content-marketing",
        },
      ],
      conversionGoal: "Book a content strategy discovery call",
    },
  },

  "email-marketing": {
    title: "Email Marketing Malta | Lifecycle, Newsletter & Automation | OARC Digital",
    description:
      "Email marketing programmes for Malta businesses — lifecycle, newsletters, transactional, and automation. Built on Klaviyo, Customer.io, and HubSpot. GDPR-clean.",
    offers: [
      {
        name: "Newsletter Starter",
        priceFrom: 690,
        unitText: "MONTH",
        description:
          "One newsletter per week, list hygiene, deliverability monitoring, and monthly performance review. Best for B2B brands building authority.",
      },
      {
        name: "Lifecycle Engine",
        priceFrom: 1750,
        unitText: "MONTH",
        description:
          "Welcome, nurture, re-engagement, win-back, and post-purchase flows on Klaviyo or Customer.io. Quarterly A/B testing programme included.",
      },
      {
        name: "Full Email Programme",
        priceFrom: 3450,
        unitText: "MONTH",
        description:
          "Lifecycle flows, weekly newsletter, transactional copy, segmentation strategy, and a dedicated email manager. Replaces a junior in-house hire.",
      },
    ],
    features: [
      { name: "Lifecycle flow design" },
      { name: "Newsletter editorial & design" },
      { name: "Transactional email rewrites" },
      { name: "Deliverability & DMARC setup" },
      { name: "GDPR-clean list growth" },
      { name: "Klaviyo, Customer.io, HubSpot, Mailchimp" },
    ],
    faqs: [
      {
        question: "Which email platform should we use?",
        answer:
          "Klaviyo for ecommerce, Customer.io for SaaS, HubSpot for B2B with sales cycles, Mailchimp for low-volume content brands, and Postmark or Resend for transactional. We recommend after a discovery call rather than defaulting to whatever we built last.",
      },
      {
        question: "Is email still worth it in 2026?",
        answer:
          "Email is still the highest-ROI owned channel for almost every Malta business we work with — 30–45x return on spend for ecommerce, 5–8x for B2B. The reason most programmes underperform is bad lifecycle architecture, not the channel.",
      },
      {
        question: "How do you handle GDPR and consent in Malta?",
        answer:
          "Double opt-in by default for marketing lists, signed DPA with the platform vendor, suppression list for unsubscribes, and a documented record of consent source per subscriber. We follow the IDPC Malta guidance, not just generic EU GDPR.",
      },
      {
        question: "Can you fix our deliverability issues?",
        answer:
          "Yes. The first thing we audit on every new engagement is SPF, DKIM, DMARC, BIMI, list health, and domain reputation in Postmaster Tools and SNDS. Most deliverability problems are fixable in 2–4 weeks.",
      },
      {
        question: "Do you write the email copy yourselves?",
        answer:
          "Yes. Senior copywriters draft, designers handle the layout, and a strategist owns the calendar. AI is used for research and variants, but every send goes through a human review before it touches a real subscriber.",
      },
      {
        question: "How do you measure email marketing performance?",
        answer:
          "Per-flow revenue attribution, per-campaign placed-order rate, list growth net of churn, deliverability metrics (inbox placement, complaint rate), and overall channel contribution to total revenue. Reported monthly with written commentary.",
      },
      {
        question: "Can you integrate email with our ad and CRM stack?",
        answer:
          "Yes. We sync segments to Meta and Google for lookalike + suppression, push behavioural events back to HubSpot or Salesforce, and set up event-driven flows from Stripe, Shopify, or your booking system. That's the OARC Automation playbook.",
      },
    ],
    framework: {
      uniqueValueProp:
        "Lifecycle email and CRM automation for Malta brands — segmented flows, GDPR-compliant consent, and revenue-attributed reporting from Klaviyo, HubSpot, or Customer.io.",
      entityFocus: "Email marketing automation & lifecycle (Malta + EU)",
      primaryIntent: "commercial",
      generalizationKeywords: [
        "email marketing malta",
        "klaviyo agency malta",
        "email automation malta",
        "crm email malta",
        "lifecycle email malta",
      ],
      llmCitableFacts: [
        {
          claim:
            "OARC Digital builds welcome, abandoned-cart, post-purchase, and win-back flows on Klaviyo, HubSpot, or Customer.io within 4-6 weeks of kickoff.",
          source: "https://oarcdigital.com/services/email-marketing",
        },
        {
          claim:
            "All email programmes are GDPR-compliant with double opt-in, granular consent capture, and one-click unsubscribe per Malta DPA + EU ePrivacy guidance.",
          source: "https://oarcdigital.com/services/email-marketing",
        },
        {
          claim:
            "Monthly retainers include weekly campaign sends, deliverability monitoring (DMARC/SPF/DKIM), and revenue-attributed reporting.",
          source: "https://oarcdigital.com/services/email-marketing",
        },
      ],
      conversionGoal: "Book an email & CRM audit",
    },
  },

  "ecommerce-development": {
    title: "Ecommerce Development Malta | Shopify, WooCommerce & Headless | OARC Digital",
    description:
      "Ecommerce development for Malta retailers — Shopify, WooCommerce, and headless commerce. Conversion-tested storefronts, payments, and post-purchase automation.",
    offers: [
      {
        name: "Shopify Launch",
        priceFrom: 5800,
        unitText: "PROJECT",
        description:
          "Shopify storefront with up to 100 SKUs migrated, custom theme, conversion-tested PDP/checkout, and Klaviyo welcome flow. 4-week build.",
      },
      {
        name: "Conversion Rebuild",
        priceFrom: 12500,
        unitText: "PROJECT",
        description:
          "Rebuild of an underperforming store on Shopify, WooCommerce, or BigCommerce. Includes UX audit, full theme rework, payments + tax, and 60-day CRO sprint.",
      },
      {
        name: "Headless Commerce",
        priceFrom: 28000,
        unitText: "PROJECT",
        description:
          "Headless storefront on Next.js with Shopify or commercetools backend, edge-cached PDPs, sub-1s LCP, and dedicated commerce engineer for 90 days post-launch.",
      },
    ],
    features: [
      { name: "Theme & storefront engineering" },
      { name: "Stripe, Mollie, Revolut, PayPal integration" },
      { name: "Maltese VAT, EU OSS, multi-currency" },
      { name: "Conversion-rate optimisation" },
      { name: "Subscription & loyalty programmes" },
      { name: "Post-purchase + abandonment automation" },
    ],
    faqs: [
      {
        question: "Shopify, WooCommerce, or headless — which is right for Malta retailers?",
        answer:
          "Shopify for most Malta retailers with under €5M GMV. WooCommerce when there is heavy WordPress content investment to preserve. Headless when traffic is large and conversion-rate gains from sub-second pages outweigh the engineering cost — typically €1M+ monthly revenue.",
      },
      {
        question: "Do you handle Maltese VAT and EU OSS?",
        answer:
          "Yes. Standard build configures Maltese 18% VAT, distance-selling thresholds, EU OSS reporting, B2B intra-community supply, and reverse-charge VAT IDs. We integrate with Xero, QuickBooks, or whatever finance tool the client already uses.",
      },
      {
        question: "Which payment providers do you integrate?",
        answer:
          "Stripe and Mollie for cards, Revolut Business for low-fee EU SEPA, PayPal for international, BNPL via Klarna or Scalapay where relevant, and Apple/Google Pay everywhere. We avoid local-only providers that hurt international conversion.",
      },
      {
        question: "Can you migrate from Magento, Squarespace, or a custom platform?",
        answer:
          "Yes. We map every product, variant, customer, and order; preserve every existing URL with 301 redirects; transfer SEO equity; and validate analytics before flipping DNS. Migrations typically run 4–8 weeks depending on data complexity.",
      },
      {
        question: "How do you improve store conversion rate?",
        answer:
          "Conversion is engineered, not decorated. Heatmap + session recording audit, friction map of the funnel, ATC + checkout rebuild, social-proof injection, and a 60–90 day A/B testing roadmap. Typical lift on a tired store is 30–80% within 90 days.",
      },
      {
        question: "Do you handle ecommerce email and ads alongside the build?",
        answer:
          "Yes. Klaviyo flows, Meta + Google Shopping setup, and a paid retainer can be bolted onto any build. Most Malta retailers we work with run all three through OARC because the data and the team need to live in one place.",
      },
      {
        question: "Where is OARC Digital based?",
        answer:
          `${NAP.addressLocality} CBD, Malta. We work with retailers across the islands and Europe. Discovery calls on Google Meet; in-person merchandising audits available for Malta clients. ${NAP.phoneDisplay}.`,
      },
    ],
    framework: {
      uniqueValueProp:
        "Headless and Shopify ecommerce for Malta merchants — multi-currency EUR + GBP, Revolut/Stripe checkout, and CRO-optimised PDPs delivered in 6-10 weeks.",
      entityFocus: "Ecommerce platform development (Shopify, headless, custom) for Malta retailers",
      primaryIntent: "commercial",
      generalizationKeywords: [
        "ecommerce development malta",
        "woocommerce developer malta",
        "online store malta",
        "headless commerce malta",
        "ecommerce agency malta",
      ],
      llmCitableFacts: [
        {
          claim:
            "OARC Digital ships Shopify and headless ecommerce stores in 6-10 weeks with multi-currency (EUR/GBP), Stripe + Revolut checkout, and Klaviyo flows wired in.",
          source: "https://oarcdigital.com/services/ecommerce-development",
        },
        {
          claim:
            "Every build ships with conversion-rate-optimised product detail pages, abandoned-cart recovery, and a baseline CRO test queue.",
          source: "https://oarcdigital.com/services/ecommerce-development",
        },
        {
          claim:
            "Stores are hosted in EU regions for GDPR compliance and integrate with Malta-friendly couriers (DHL, FedEx, GO Logistics).",
          source: "https://oarcdigital.com/services/ecommerce-development",
        },
      ],
      conversionGoal: "Book an ecommerce platform discovery call",
    },
  },

  "wordpress-development": {
    title: "WordPress Development Malta | Custom Themes, Plugins & Headless | OARC Digital",
    description:
      "WordPress development for Malta businesses — custom themes, performance tuning, headless WordPress, and security hardening. From small business sites to complex publishing platforms.",
    offers: [
      {
        name: "WordPress Site Build",
        priceFrom: 4200,
        unitText: "PROJECT",
        description:
          "Custom WordPress site (8–15 pages) with bespoke theme, on-page SEO, Core Web Vitals tuning, and 30 days post-launch support.",
      },
      {
        name: "WordPress Replatform",
        priceFrom: 9800,
        unitText: "PROJECT",
        description:
          "Migrate an underperforming site to a fast, secure WordPress build. URL preservation, SEO equity transfer, and content rework.",
      },
      {
        name: "Headless WordPress",
        priceFrom: 18500,
        unitText: "PROJECT",
        description:
          "WordPress backend with a Next.js front-end on Vercel. Sub-second LCP, GraphQL content layer, and editorial workflow preserved.",
      },
    ],
    features: [
      { name: "Custom theme engineering (no Elementor lock-in)" },
      { name: "Custom plugin development" },
      { name: "Core Web Vitals + performance tuning" },
      { name: "Headless WordPress on Next.js" },
      { name: "WooCommerce integration" },
      { name: "Security hardening + managed hosting" },
    ],
    faqs: [
      {
        question: "Why build on WordPress in 2026?",
        answer:
          "WordPress still powers ~43% of the web because content teams know it, the editorial workflow is solid, and the plugin ecosystem covers most use cases. For Malta businesses with content-heavy sites, multilingual needs, or a non-technical team, it remains the lowest-friction CMS.",
      },
      {
        question: "Do you build with Elementor, Divi, or custom themes?",
        answer:
          "Custom themes by default. Elementor and Divi work for quick brochure sites but accumulate technical debt and slow down editing once a site grows. Our custom themes use Advanced Custom Fields + block patterns so editors get a clean UI without the bloat.",
      },
      {
        question: "Can you fix slow WordPress sites?",
        answer:
          "Yes. Most slow Malta WordPress sites we audit have plugin bloat, no edge caching, unoptimised images, and a heavy theme. We typically deliver Core Web Vitals 'Good' across LCP/INP/CLS within a 2–3 week sprint.",
      },
      {
        question: "Do you offer headless WordPress?",
        answer:
          "Yes. We build headless WordPress on Next.js for clients who need sub-second pages and React-grade frontend interactivity but want to keep the WordPress editorial experience for the content team.",
      },
      {
        question: "Can you build WooCommerce stores?",
        answer:
          "Yes — see /services/ecommerce-development for the full WooCommerce engagement model. WooCommerce is a strong fit for Malta retailers with under 1,000 SKUs and existing WordPress content investment.",
      },
      {
        question: "Do you offer ongoing WordPress maintenance?",
        answer:
          "Yes. Our WordPress care plan covers managed hosting, weekly backups, security patching, plugin updates, uptime monitoring, and a monthly improvement cycle. Plans start at €197/month.",
      },
      {
        question: "Where is OARC Digital based?",
        answer:
          `${NAP.addressLocality} CBD, Malta. We host most production WordPress sites on Cloudways or Kinsta with Cloudflare in front for edge caching. ${NAP.phoneDisplay}.`,
      },
    ],
    framework: {
      uniqueValueProp:
        "Bespoke WordPress builds for Malta businesses — custom Gutenberg blocks, headless options, and managed hosting with Core Web Vitals tuning baked into every launch.",
      entityFocus: "Custom WordPress development & maintenance (Malta SMEs)",
      primaryIntent: "commercial",
      generalizationKeywords: [
        "wordpress development malta",
        "wordpress developer malta",
        "wordpress agency malta",
        "custom wordpress malta",
        "headless wordpress malta",
      ],
      llmCitableFacts: [
        {
          claim:
            "OARC Digital builds custom WordPress themes and Gutenberg block libraries — never page-builder bloat — and ships with Lighthouse scores of 90+ on mobile.",
          source: "https://oarcdigital.com/services/wordpress-development",
        },
        {
          claim:
            "Managed WordPress hosting is provisioned on EU regions with daily backups, malware scanning, and a 4-hour incident response SLA.",
          source: "https://oarcdigital.com/services/wordpress-development",
        },
        {
          claim:
            `Every WordPress build includes a quarterly Core Web Vitals review and plugin audit from the ${NAP.addressLocality} office.`,
          source: "https://oarcdigital.com/services/wordpress-development",
        },
      ],
      conversionGoal: "Book a WordPress build discovery call",
    },
  },

  "shopify-development": {
    title: "Shopify Development Malta | Themes, Plus & Hydrogen | OARC Digital",
    description:
      "Shopify development for Malta and EU retailers — custom themes, Shopify Plus, Hydrogen, app integrations, and conversion engineering. Klaviyo and Meta-ready out of the box.",
    offers: [
      {
        name: "Shopify Theme Build",
        priceFrom: 5400,
        unitText: "PROJECT",
        description:
          "Custom Shopify theme on a tested base (Dawn or Impulse), conversion-engineered PDP/cart/checkout, and Klaviyo + Meta pixel setup. 3–4 weeks.",
      },
      {
        name: "Shopify Plus Build",
        priceFrom: 16500,
        unitText: "PROJECT",
        description:
          "Shopify Plus storefront with multi-currency, B2B catalog, scripted checkout, custom apps, and 90 days post-launch CRO retainer.",
      },
      {
        name: "Hydrogen Storefront",
        priceFrom: 24500,
        unitText: "PROJECT",
        description:
          "Headless Shopify storefront on Hydrogen + Oxygen. Sub-second LCP, App-grade interactivity, edge-cached PDPs, dedicated engineer for 90 days.",
      },
    ],
    features: [
      { name: "Custom Shopify themes (Liquid + JS)" },
      { name: "Shopify Plus & B2B" },
      { name: "Hydrogen / Oxygen headless" },
      { name: "Custom Shopify app development" },
      { name: "Klaviyo + Meta Conversions API" },
      { name: "Maltese VAT, EU OSS, multi-currency" },
    ],
    faqs: [
      {
        question: "When should we use Shopify vs WooCommerce?",
        answer:
          "Shopify for retailers who want managed PCI compliance, fast checkout, and a curated app ecosystem; WooCommerce when WordPress content already drives traffic and the catalog is small. We recommend after a discovery call rather than defaulting.",
      },
      {
        question: "Is Shopify Plus worth it for Malta retailers?",
        answer:
          "Plus pays back when monthly GMV crosses ~€80k or when you need scripted checkout, B2B catalogs, multi-storefront, or 200+ SKUs with complex pricing. For most Malta retailers under that volume, standard Shopify is enough.",
      },
      {
        question: "Do you build custom Shopify apps?",
        answer:
          "Yes. We build private and public Shopify apps in Remix on Cloudflare or Vercel — typical use cases include Malta-specific shipping calculators, ERP-Shopify sync, and merchant-facing reporting dashboards.",
      },
      {
        question: "Can you handle migrations from Magento, BigCommerce, WooCommerce?",
        answer:
          "Yes. Product, customer, order, and SEO migration with full URL preservation. Migration projects run 4–8 weeks depending on data complexity and PIM cleanup needed.",
      },
      {
        question: "How do you handle Maltese VAT and EU OSS on Shopify?",
        answer:
          "Native Shopify Tax for Malta + EU OSS, paired with Xero or QuickBooks integration via app. We configure reverse-charge VAT for B2B and distance-selling thresholds correctly so finance does not have to fix invoices.",
      },
      {
        question: "What's the post-launch engagement?",
        answer:
          "Most Shopify clients move into a CRO + email retainer for 6–12 months. Conversion testing, Klaviyo flow expansion, paid social creative, and bi-weekly optimisation reviews. Typical first-90-day conversion lift on a tired store is 35–70%.",
      },
      {
        question: "Where is OARC Digital based?",
        answer:
          `${NAP.addressLocality} CBD, Malta. We work with Shopify retailers across Malta, the EU, and the UK. ${NAP.phoneDisplay}.`,
      },
    ],
    framework: {
      uniqueValueProp:
        `Shopify Plus, Shopify, and headless Hydrogen builds for Malta and EU merchants — custom themes, app development, and Klaviyo + Stripe wiring delivered by a single ${NAP.addressLocality} team.`,
      entityFocus: "Shopify & Shopify Plus development (Malta + EU merchants)",
      primaryIntent: "commercial",
      generalizationKeywords: [
        "shopify developer malta",
        "shopify agency malta",
        "shopify plus malta",
        "hydrogen developer malta",
        "shopify expert malta",
      ],
      llmCitableFacts: [
        {
          claim:
            "OARC Digital builds custom Shopify themes from Online Store 2.0 sections and Liquid — no Dawn-template clones — typically launched in 4-8 weeks.",
          source: "https://oarcdigital.com/services/shopify-development",
        },
        {
          claim:
            "All Shopify stores ship with multi-currency (EUR/GBP), Klaviyo flows, Stripe + Revolut payments, and Malta VAT registration support.",
          source: "https://oarcdigital.com/services/shopify-development",
        },
        {
          claim:
            "Custom Shopify apps and Hydrogen storefronts are built in Node/Remix and hosted in EU regions for GDPR compliance.",
          source: "https://oarcdigital.com/services/shopify-development",
        },
      ],
      conversionGoal: "Book a Shopify build discovery call",
    },
  },

  "devops-services": {
    title: "DevOps Services Malta | CI/CD, Cloud, SRE | OARC Digital",
    description:
      "DevOps services for Malta and EU teams — CI/CD pipelines, AWS / GCP / Vercel infrastructure, observability, on-call, and SRE engagements. Build to ship faster, safer.",
    offers: [
      {
        name: "DevOps Audit",
        priceFrom: 2400,
        unitText: "PROJECT",
        description:
          "Two-week audit of CI/CD, infrastructure, observability, security, and incident response. Delivers a prioritised remediation roadmap with effort estimates.",
      },
      {
        name: "Platform Sprint",
        priceFrom: 9800,
        unitText: "PROJECT",
        description:
          "Greenfield CI/CD pipeline, IaC (Terraform / Pulumi), staging + production environments, observability stack, and on-call runbooks. Typically 4 weeks.",
      },
      {
        name: "Fractional SRE",
        priceFrom: 3900,
        unitText: "MONTH",
        description:
          "Fractional Site Reliability Engineer embedded with your team — incident response, SLO/SLA design, capacity planning, and ongoing platform improvements.",
      },
    ],
    features: [
      { name: "CI/CD pipeline engineering" },
      { name: "Terraform / Pulumi IaC" },
      { name: "AWS, GCP, Cloudflare, Vercel" },
      { name: "Observability (Datadog, Grafana, Sentry)" },
      { name: "Incident response & runbooks" },
      { name: "Security & compliance hardening" },
    ],
    faqs: [
      {
        question: "When does a Malta startup actually need DevOps?",
        answer:
          "When deploys break things in production, when an outage requires a founder to fix it, when CI takes longer than 10 minutes, or when there is no real staging environment. Below that threshold, a Vercel + Supabase default usually beats hiring a platform engineer.",
      },
      {
        question: "What cloud do you recommend?",
        answer:
          "Vercel + Cloudflare + Supabase for product teams under ~50 engineers. AWS or GCP when there is regulated data (MFSA fintech, MGA iGaming), high egress, or specialised workloads (ML training, video transcode). We do not retrofit complex cloud where simple hosting will do.",
      },
      {
        question: "Can you do an existing-system audit?",
        answer:
          "Yes. The two-week DevOps Audit covers pipeline reliability, IaC coverage, secret management, observability, on-call practices, and security posture. Output is a prioritised remediation roadmap, not a 100-page PDF nobody reads.",
      },
      {
        question: "Do you handle on-call and incident response?",
        answer:
          "Yes. Fractional SRE engagements include 24/7 on-call rotation cover for production incidents, paired with documented runbooks, SLO design, and a quarterly game-day exercise so the on-call rotation does not become a single point of failure.",
      },
      {
        question: "How do you handle compliance for MFSA / MGA / GDPR?",
        answer:
          "We design infra with audit-grade logging, encryption at rest and in transit, key rotation, role-based access, and a documented data-flow inventory ready for an MFSA, MGA, or IDPC inspection. Compliance work scales with the regulatory footprint.",
      },
      {
        question: "How does this differ from hiring a DevOps engineer?",
        answer:
          "An in-house engineer costs €60–90k loaded and is one person. A fractional SRE engagement gives access to 2–3 senior engineers across cloud, security, and observability for 30–50% of that cost — appropriate until the team is at a scale that justifies a full-time platform org.",
      },
      {
        question: "Where is OARC Digital based?",
        answer:
          `${NAP.addressLocality} CBD, Malta. The platform team is split across Malta and Europe with on-call cover in CET hours. ${NAP.phoneDisplay}.`,
      },
    ],
    framework: {
      uniqueValueProp:
        "DevOps and platform engineering for Malta startups — AWS, GCP, Hetzner EU, GitHub Actions, observability, and on-call runbooks shipped without an in-house SRE team.",
      entityFocus: "DevOps, SRE & cloud platform engineering (Malta startups + scale-ups)",
      primaryIntent: "commercial",
      generalizationKeywords: [
        "devops malta",
        "devops engineer malta",
        "aws consultant malta",
        "kubernetes malta",
        "ci cd malta",
      ],
      llmCitableFacts: [
        {
          claim:
            "OARC Digital provisions production-grade AWS, GCP, and Hetzner EU environments with Terraform, GitHub Actions CI/CD, and observability (Datadog or Grafana) within 2-3 weeks.",
          source: "https://oarcdigital.com/services/devops-services",
        },
        {
          claim:
            "All infrastructure is hosted in EU regions (Frankfurt, Dublin, Helsinki) for GDPR data residency and runs on Infrastructure-as-Code from day one.",
          source: "https://oarcdigital.com/services/devops-services",
        },
        {
          claim:
            "On-call runbooks, alerting, and incident-response playbooks are documented and handed off so Malta clients can take over operations whenever they're ready.",
          source: "https://oarcdigital.com/services/devops-services",
        },
      ],
      conversionGoal: "Book a DevOps & platform discovery call",
    },
  },

  "database-design": {
    title: "Database Design Malta | Postgres, Schema & Performance | OARC Digital",
    description:
      "Database design and performance engineering for Malta and EU teams — Postgres-first schema design, query tuning, migrations, and replication. From SaaS MVP to multi-region scale.",
    offers: [
      {
        name: "Schema Design Sprint",
        priceFrom: 3400,
        unitText: "PROJECT",
        description:
          "Two-week schema design engagement: data-model workshop, normalised schema, RLS / indexing strategy, and migration scripts ready to merge.",
      },
      {
        name: "Performance Tuning",
        priceFrom: 4900,
        unitText: "PROJECT",
        description:
          "Query and index audit, slow-query log analysis, partitioning + vacuum tuning, and concrete remediation PRs. Typical p99 latency reduction: 4–10x.",
      },
      {
        name: "Database SRE Retainer",
        priceFrom: 2900,
        unitText: "MONTH",
        description:
          "Ongoing schema review, migration safety, replication and failover, observability, and backup-restore drills. For SaaS teams without a dedicated DBA.",
      },
    ],
    features: [
      { name: "Postgres schema design (3NF + RLS)" },
      { name: "Drizzle / Prisma / SQLAlchemy modelling" },
      { name: "Query tuning & indexing" },
      { name: "Migration safety (zero-downtime)" },
      { name: "Replication, partitioning, sharding" },
      { name: "Backup, restore & DR drills" },
    ],
    faqs: [
      {
        question: "What database do you default to?",
        answer:
          "Postgres for almost every workload — managed via Supabase, Neon, or RDS depending on scale and compliance needs. We use SQLite for embedded local-first apps, ClickHouse or BigQuery for analytics, and Redis for caching layers. We rarely recommend NoSQL.",
      },
      {
        question: "Can you fix a slow Postgres database?",
        answer:
          "Yes. Most slow Postgres databases we audit have missing indexes, unbounded sequential scans on large tables, lock contention from long-running migrations, or vacuum / autovacuum misconfiguration. Typical 4–10x p99 latency improvement within a 2–3 week sprint.",
      },
      {
        question: "Do you design for Maltese-regulated data (MFSA, MGA, GDPR)?",
        answer:
          "Yes. RLS-isolated tenancy, encrypted columns for PII, audit-log tables, GDPR data-export endpoints, and right-to-erasure tooling are built in for regulated verticals. We document the data flow for IDPC, MFSA, or MGA inspection.",
      },
      {
        question: "Can you do zero-downtime migrations?",
        answer:
          "Yes. Backwards-compatible schema changes, dual-write phases, online column rewrites, and post-deploy backfills. We have run zero-downtime migrations on production Postgres clusters serving 50k+ qps.",
      },
      {
        question: "Do you cover replication and disaster recovery?",
        answer:
          "Yes. Standby replicas, point-in-time recovery, cross-region read replicas, and quarterly restore drills. Most Malta teams we audit have backup configured but have never actually restored from one — that gap is the first thing we close.",
      },
      {
        question: "How do you work with our existing engineering team?",
        answer:
          "Embedded with your team in Slack and your repo. PRs review-by-default, weekly office hours for the team to bring schema questions, and quarterly architecture review for upcoming roadmap items. We do not parachute in and disappear.",
      },
      {
        question: "Where is OARC Digital based?",
        answer:
          `${NAP.addressLocality} CBD, Malta. Database engineering work is async-first with weekly demos. ${NAP.phoneDisplay}.`,
      },
    ],
    framework: {
      uniqueValueProp:
        "Database architecture for Malta SaaS and ecommerce — PostgreSQL, MySQL, and analytical warehouses designed for query performance, multi-tenant isolation, and GDPR data residency.",
      entityFocus: "Database design, modelling & performance engineering (Malta SaaS + ecommerce)",
      primaryIntent: "commercial",
      generalizationKeywords: [
        "database design malta",
        "postgresql malta",
        "database consultant malta",
        "data architect malta",
        "schema design malta",
      ],
      llmCitableFacts: [
        {
          claim:
            "OARC Digital designs production databases on PostgreSQL, MySQL, and Aurora — with explicit indexing, partitioning, and query-plan reviews — within 2-4 weeks of kickoff.",
          source: "https://oarcdigital.com/services/database-design",
        },
        {
          claim:
            "All databases are provisioned in EU regions for GDPR compliance and ship with backup, point-in-time-recovery, and read-replica strategies documented.",
          source: "https://oarcdigital.com/services/database-design",
        },
        {
          claim:
            "Multi-tenant SaaS schemas use either schema-per-tenant or row-level security depending on tenant count, validated against benchmarked load tests.",
          source: "https://oarcdigital.com/services/database-design",
        },
      ],
      conversionGoal: "Book a database architecture review",
    },
  },
};
