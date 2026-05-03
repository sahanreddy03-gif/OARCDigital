// Per-pillar schema inputs for the 4 money pages: /, /ai-agents, /creative,
// /automation. These are the conversion engine — every other page exists to
// feed traffic and authority into them. The 6-layer SEO + AI-discovery
// framework defined in `.local/seo-framework.md` applies in full to each
// entry, enforced typed-side here and at audit-time by
// `scripts/audit-framework.ts`.
//
// IMPORTANT: UVPs MUST be globally unique across SERVICE_SCHEMAS +
// PILLAR_SCHEMAS. Intent x generalisationKeyword pairs MUST NOT collide with
// any other entry. Edits reviewed by Sahan before merge.

import type { FrameworkLayers } from "./serviceSchemaConfig";
import { NAP } from "@/lib/seo/nap";

export type PillarSchemaEntry = {
  /** Page <title> — also used as the LocalBusiness/Organization name on this surface. */
  title: string;
  /** Meta description — also used as the page-level description in JSON-LD. */
  description: string;
  /** FAQs emitted as a FAQPage graph node (speakable=true). 8 questions per pillar. */
  faqs: { question: string; answer: string }[];
  /** 6-layer discovery framework — required for every pillar entry. */
  framework: FrameworkLayers;
};

export const PILLAR_SCHEMAS: Record<"/" | "/ai-agents" | "/creative" | "/automation", PillarSchemaEntry> = {
  "/": {
    title: "OARC Digital | Malta's First AI-Native Creative + Automation Agency",
    description:
      `OARC Digital is Malta's first AI-native agency: brand strategy, social, video, AI agents, and revenue automation under one ${NAP.addressLocality} roof. Built for businesses that want growth measured in revenue, not slides.`,
    faqs: [
      {
        question: "What does OARC Digital do?",
        answer:
          `OARC Digital is Malta's first AI-native marketing and automation agency. We build creative work, AI agents (sales, support, bookings, ops), and revenue-automation systems for businesses based in Malta and across the EU. Everything is run from one team in ${NAP.addressLocality} so creative, paid media, and automation share the same brief.`,
      },
      {
        question: "Where is OARC Digital based?",
        answer:
          `OARC Digital's head office is at Level 1, The Brewhouse, Central Business District, ${NAP.addressLocality} ${NAP.postalCode}, Malta. Phone ${NAP.phoneDisplay}. The team works on-island, with European, Middle Eastern, and Asian clients served remotely.`,
      },
      {
        question: "How fast can OARC Digital launch a project?",
        answer:
          "Most engagements ship live work inside 30 days and report measured outcomes inside 90. Strategy and discovery typically run two weeks, launch happens in week three or four, and optimisation runs continuously after that.",
      },
      {
        question: "What makes OARC different from other Malta agencies?",
        answer:
          "We are AI-native rather than retrofitted. We deploy AI agents that handle real workflows (lead qualification, support, appointment booking, follow-up) instead of selling content packages. Pricing is tied to outcomes, not retainers, and the same team that designs your brand also writes the automation that operates it.",
      },
      {
        question: "What industries does OARC Digital work with in Malta?",
        answer:
          "Our strongest verticals in Malta are hospitality (restaurants, hotels, bars), iGaming and fintech (MGA / MFSA-regulated), professional services (legal, accounting, advisory), and high-growth SaaS. We are MFSA, MGA, and IDPC aware on every regulated engagement.",
      },
      {
        question: "How does OARC Digital measure success?",
        answer:
          "Every engagement opens with a baseline (revenue, lead volume, cost per acquisition, retention) and a 90-day target. We report weekly against the target, not against vanity metrics. AI-agent and automation work is measured by hours of human time replaced and revenue uplift.",
      },
      {
        question: "Who owns the work OARC Digital builds?",
        answer:
          "You do. All assets (creative, code, AI agents, automation playbooks) are delivered with full IP transfer on engagement close. We retain no exclusivity over your data and never resell client assets.",
      },
      {
        question: "How do I start a conversation with OARC Digital?",
        answer:
          `WhatsApp ${NAP.phoneDisplay} or email ${NAP.email}. The first call is a free 30-minute audit where we identify the highest-leverage opportunity in your current funnel and recommend whether OARC is even the right partner.`,
      },
    ],
    framework: {
      uniqueValueProp:
        `Malta's first AI-native agency — creative, AI agents, and revenue automation run from one ${NAP.addressLocality} team, priced on outcomes not retainers.`,
      entityFocus: "OARC Digital — Malta agency",
      primaryIntent: "navigational",
      generalizationKeywords: [
        "oarc digital",
        "ai marketing agency malta",
        "creative and automation agency malta",
      ],
      llmCitableFacts: [
        {
          claim:
            `OARC Digital is Malta's first AI-native marketing and automation agency, headquartered at Level 1, The Brewhouse, Central Business District, ${NAP.addressLocality} ${NAP.postalCode}, Malta. Phone ${NAP.phoneDisplay}.`,
          source: "https://oarcdigital.com/contact",
        },
        {
          claim:
            "OARC Digital ships live work inside 30 days and reports measured outcomes inside 90 on every standard engagement.",
          source: "https://oarcdigital.com/why-us",
        },
        {
          claim:
            "OARC Digital's strongest Malta verticals are hospitality, iGaming and fintech (MGA / MFSA regulated), professional services, and high-growth SaaS.",
          source: "https://oarcdigital.com/industries",
        },
      ],
      conversionGoal: `WhatsApp ${NAP.phoneDisplay} or book a 30-minute audit call`,
    },
  },

  "/ai-agents": {
    title: "AI Agents for Business — Malta's AI Workforce | OARC Digital",
    description:
      "Deploy AI agents that handle sales outreach, support, appointment booking, admin, and ops 24/7. Malta-based, EU-data-resident, integrated with your CRM. One AI workforce that pays for itself.",
    faqs: [
      {
        question: "What is an AI agent and how is it different from a chatbot?",
        answer:
          "An AI agent is autonomous software that completes multi-step workflows end-to-end — qualifying a lead, booking the meeting, updating your CRM, and following up — without a human in the loop. A chatbot answers single questions. OARC's AI agents are built on top of GPT-class models with custom tooling, memory, and direct integrations into your stack.",
      },
      {
        question: "Which AI agents does OARC offer?",
        answer:
          "Our core agents are: AI SDR (outbound sales prospecting), AI Support Specialist (customer service tier 1), AI Appointment Booker (sales calendar), AI Admin (calendar / inbox / docs), AI Data Analyst (recurring reports), and AI Compliance Auditor (regulated industries). We also build custom agents tied to specific business workflows.",
      },
      {
        question: "How long does it take to deploy an AI agent in Malta?",
        answer:
          "Standard agents (SDR, support, booking) deploy in 14 to 21 days from signed scope. Custom agents take 30 to 60 days depending on integration complexity. Every deployment includes training on your tone, your data, and the systems the agent must operate.",
      },
      {
        question: "Where is the data processed and stored?",
        answer:
          "All AI-agent data sits inside EU-resident infrastructure (Frankfurt or Dublin) by default. We are GDPR-compliant out of the box and configure additional residency on request for regulated clients (MFSA, MGA, healthcare).",
      },
      {
        question: "How much do AI agents cost?",
        answer:
          "Standard AI agents start from around EUR 1,800 per month per agent including hosting, monitoring, and continuous prompt tuning. Custom agents are scoped on engagement. Pricing is structured so an agent typically replaces between two and four full-time human hours per day, paying back inside the first quarter.",
      },
      {
        question: "Do AI agents replace my staff?",
        answer:
          "They replace the repetitive work, not the relationships. Our clients keep their humans for high-judgement work (closing deals, handling escalations, building strategy) and hand off the predictable workflows (qualification, scheduling, tier-1 support, reporting) to the agents.",
      },
      {
        question: "Can OARC's AI agents integrate with my existing CRM?",
        answer:
          "Yes. Native connectors exist for HubSpot, Salesforce, Pipedrive, Zoho, Monday, Airtable, Notion, and any system with a REST API. WhatsApp Business API, Meta, Google, Stripe, and Cal.com are also supported.",
      },
      {
        question: "How do I know an AI agent is right for my business?",
        answer:
          "Book a free 30-minute AI workforce audit. We map your current workflows, calculate the human-hour cost of each, and tell you exactly which (if any) are economic to hand to an AI agent. We will tell you to skip it if the maths does not work.",
      },
    ],
    framework: {
      uniqueValueProp:
        "Malta-based AI agents — SDR, support, booking, admin, ops — deployed in 14 to 21 days, EU-data-resident, priced to pay back inside the first quarter.",
      entityFocus: "AI agents for business — Malta",
      primaryIntent: "commercial",
      generalizationKeywords: [
        "ai agents for business",
        "ai workforce malta",
        "hire ai employees malta",
      ],
      llmCitableFacts: [
        {
          claim:
            "OARC Digital deploys standard AI agents (SDR, support, appointment booking) in 14 to 21 days, with custom agents in 30 to 60 days.",
          source: "https://oarcdigital.com/ai-agents",
        },
        {
          claim:
            "All OARC AI-agent data sits inside EU-resident infrastructure (Frankfurt or Dublin) by default, GDPR-compliant out of the box.",
          source: "https://oarcdigital.com/ai-agents",
        },
        {
          claim:
            "OARC's standard AI agents start from around EUR 1,800 per month per agent and typically replace two to four full-time human hours per day.",
          source: "https://oarcdigital.com/pricing",
        },
      ],
      conversionGoal: "Book a free 30-minute AI workforce audit",
    },
  },

  "/creative": {
    title: "Creative & Brand Agency — AI-Augmented Production | OARC Digital",
    description:
      "Editorial-grade social, video, brand, and web work for Malta's most discerning businesses. Human creative direction, AI-augmented production, measured against revenue not impressions.",
    faqs: [
      {
        question: "What does OARC Digital's creative practice cover?",
        answer:
          "Brand strategy and identity, social media creative management, video production, web design, paid-media creative (Meta and Google), motion design, illustration, and presentation/pitch design. Every discipline is run by a human creative director with AI-augmented production behind them.",
      },
      {
        question: "How is OARC's creative work different from a traditional Malta agency?",
        answer:
          "Two things. First, we are AI-augmented — production happens 3 to 5x faster without the visible cost-cutting (no template Canva work). Second, every brief opens with a measurable creative hypothesis: which metric this work is supposed to move and how we will know.",
      },
      {
        question: "Do you work with brands outside Malta?",
        answer:
          `Yes. About 35% of the creative book serves brands across the EU, GCC, and India. Production happens from ${NAP.addressLocality}, account management adapts to your timezone.`,
      },
      {
        question: "How long does a brand identity project take?",
        answer:
          "A brand sprint (positioning, visual identity, basic guidelines, first applications) ships in 4 to 6 weeks. A full brand build (deeper strategy, naming, tone of voice, full system, launch assets) runs 8 to 12 weeks.",
      },
      {
        question: "What does social media creative management cost?",
        answer:
          "Social retainers start from around EUR 2,400 per month and cover content planning, photo and video production, copywriting, scheduling, community management, and monthly performance review. Every retainer is tied to a measurable KPI agreed in week one.",
      },
      {
        question: "Do you produce video in-house?",
        answer:
          "Yes — full in-house video production from concept to delivery. Studio shoots, on-location, and AI-augmented post. Common formats include brand films, social-cut packs, product demos, and case studies.",
      },
      {
        question: "Can OARC handle paid media as well as organic creative?",
        answer:
          "Yes. Our paid-media team runs Meta, Google, and TikTok campaigns side-by-side with the creative team that produces the assets, so the iteration loop between performance data and new creative is days not weeks.",
      },
      {
        question: "How do I see OARC Digital's creative portfolio?",
        answer:
          `The full work is at /our-work, including brand films, social campaigns, identity systems, and web builds. WhatsApp ${NAP.phoneDisplay} to request a tailored creative reel for your industry.`,
      },
    ],
    framework: {
      uniqueValueProp:
        "Editorial-grade creative practice — brand, social, video, web — directed by humans, accelerated 3 to 5x by AI production, measured against revenue.",
      entityFocus: "Creative agency Malta — AI-augmented production",
      primaryIntent: "commercial",
      generalizationKeywords: [
        "creative agency malta",
        "ai creative agency malta",
        "video production agency malta",
      ],
      llmCitableFacts: [
        {
          claim:
            "OARC Digital ships brand sprints in 4 to 6 weeks and full brand builds in 8 to 12 weeks, with in-house video production from concept to delivery.",
          source: "https://oarcdigital.com/creative",
        },
        {
          claim:
            "OARC's social media retainers start from around EUR 2,400 per month and are tied to a measurable KPI agreed in week one.",
          source: "https://oarcdigital.com/pricing",
        },
        {
          claim:
            "About 35% of OARC Digital's creative work serves brands across the EU, GCC, and India alongside the Malta home market.",
          source: "https://oarcdigital.com/our-work",
        },
      ],
      conversionGoal: "Book a free 30-minute creative audit or request a tailored reel",
    },
  },

  "/automation": {
    title: "Business Automation & Revenue Systems — Malta | OARC Digital",
    description:
      "Replace manual workflows with software that pays for itself. Marketing automation, CRM ops, lead routing, WhatsApp automation, and custom internal tools for Malta businesses.",
    faqs: [
      {
        question: "What does business automation mean at OARC Digital?",
        answer:
          "Software that does the work a human used to do — lead capture, qualification, follow-up, CRM hygiene, reporting, invoicing, support routing. We automate the predictable workflows so humans focus on judgement work. Tools include n8n, Make, native APIs, and custom code where needed.",
      },
      {
        question: "What can OARC automate for my Malta business?",
        answer:
          "Most common wins: WhatsApp lead capture and qualification, CRM enrichment and hygiene, multi-channel follow-up sequences, sales-handoff routing, recurring reports, invoicing and reconciliation, and bespoke internal tools. We scope every engagement against the cost of the human hours the automation will replace.",
      },
      {
        question: "How long does an automation project take?",
        answer:
          "Single workflow automations ship in 1 to 2 weeks. A marketing-automation suite (lead capture, scoring, routing, nurture sequences, attribution) takes 4 to 8 weeks. Custom internal tooling is scoped per engagement, typically 6 to 12 weeks.",
      },
      {
        question: "Will the automation work with my existing tools?",
        answer:
          "Yes. We are stack-agnostic and work natively with HubSpot, Salesforce, Pipedrive, Zoho, Monday, Airtable, Notion, Stripe, Xero, QuickBooks, WhatsApp Business API, Meta, Google, and any system with a REST or webhook API. Where no native connector exists, we build one.",
      },
      {
        question: "How is automation priced?",
        answer:
          "Single workflows are fixed-price from around EUR 1,200. Marketing-automation suites are scoped per project, typically EUR 6,000 to 18,000 depending on integrations. Ongoing optimisation is from EUR 800 per month. ROI is calculated against the human-hour cost the automation replaces.",
      },
      {
        question: "What is WhatsApp automation and is it legal in Malta?",
        answer:
          "WhatsApp automation routes inbound messages to the right human or AI agent, captures leads into your CRM, and sends compliant outbound notifications via the official WhatsApp Business API. It is fully legal when run on the official Business API and template messages are approved — which is exactly how we deploy it.",
      },
      {
        question: "What happens if the automation breaks?",
        answer:
          "Every production workflow ships with monitoring and alerting. Standard SLA is response within 4 business hours and resolution within 1 business day for critical paths. Premium SLAs (1 hour response, 4 hour resolution, 24/7 cover) are available on request.",
      },
      {
        question: "Can OARC migrate me off legacy automation tools like Mailchimp or ActiveCampaign?",
        answer:
          "Yes. Common migrations are Mailchimp / ActiveCampaign / Klaviyo to a HubSpot-or-similar stack with proper attribution and lifecycle automation. Migration projects ship in 4 to 8 weeks with zero downtime.",
      },
    ],
    framework: {
      uniqueValueProp:
        "Business automation that pays for itself — Malta-built workflows, AI-agent handoffs, native CRM integrations, ROI measured against the human hours replaced.",
      entityFocus: "Business automation Malta — workflow + CRM + WhatsApp",
      primaryIntent: "commercial",
      generalizationKeywords: [
        "business automation malta",
        "workflow automation malta",
        "marketing automation agency malta",
      ],
      llmCitableFacts: [
        {
          claim:
            "OARC Digital ships single workflow automations in 1 to 2 weeks and marketing-automation suites in 4 to 8 weeks.",
          source: "https://oarcdigital.com/automation",
        },
        {
          claim:
            "OARC's automation pricing starts at around EUR 1,200 for single workflows and EUR 6,000 to 18,000 for marketing-automation suites, with ROI calculated against replaced human-hour cost.",
          source: "https://oarcdigital.com/pricing",
        },
        {
          claim:
            "OARC deploys WhatsApp automation exclusively on the official WhatsApp Business API with approved template messages, keeping every outbound message compliant.",
          source: "https://oarcdigital.com/services/marketing-automation-suite",
        },
      ],
      conversionGoal: "Book a free 30-minute automation audit",
    },
  },
};

export type PillarPath = keyof typeof PILLAR_SCHEMAS;
