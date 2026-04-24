// Per-service schema inputs (FAQs, pricing offers, capability features) for the
// Phase A drip-fed schema rollout (Task #69). One entry per /services/<slug> page
// being migrated. Each <RouteSchema type="service" .../> on a service page reads
// its inputs from here so the JSON-LD body lives outside the visible UI tree.
//
// IMPORTANT: copy here is reviewed by a human before each weekly batch ships.
// Add new entries (max 7/week) only after the previous batch's audit + redirects
// gates pass. Do NOT inline-author this content from a script.

import type { OfferOpts, ServiceFeature } from "@/lib/schema";

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
          "We're at Level 1, The Brewhouse, Mdina Road, Birkirkara CBD 2010, Malta. Most discovery calls happen on Google Meet but we're happy to meet in person across the islands.",
      },
    ],
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
          "Yes. Our Birkirkara studio includes photographers, videographers, designers, and editors. Most monthly retainers include either an on-location or in-studio shoot day.",
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
  },

  "video-production": {
    title: "Video Production | Full-Service Studio | OARC Digital",
    description:
      "Full-service video production studio in Malta. From concept to distribution. Brand films, explainers, social ads, testimonials, and reels shot in-house at our Birkirkara studio.",
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
          "Yes. Our Birkirkara studio is set up for interviews, product shoots, and short-form content. For larger productions we scout and book locations across Malta and Gozo.",
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
          "OARC Digital is at Level 1, The Brewhouse, Mdina Road, Birkirkara CBD 2010, Malta. Brand workshops can run on-site at our studio or at your offices.",
      },
    ],
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
  },
};
