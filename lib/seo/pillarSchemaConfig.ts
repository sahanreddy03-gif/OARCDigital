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
    title: "Marketing Agency Malta | AI Creative + Agents | OARC",
    // Google-first: ~140–155 chars, key message in first ~120 (mobile SERP). Bing max 160.
    description:
      "Malta marketing agency in Birkirkara: brand, social, video, AI agents & automation under one roof. Built for revenue growth—not slides. Book a call.",
    faqs: [
      {
        question: "Who is a good marketing agency in Malta for SMBs that want AI plus creative?",
        answer:
          `OARC Digital in Birkirkara is a marketing agency that combines creative production, SEO and ads, AI agents, Voice AI Worker, and automation under one team—so Malta SMBs grow revenue without juggling three vendors.`,
      },
      {
        question: "What does OARC Digital do?",
        answer:
          `OARC Digital is Malta's AI-native marketing and automation agency at Level 1, The Brewhouse, Central Business District, ${NAP.addressLocality} ${NAP.postalCode}, Malta. We build creative work, AI agents (sales, support, bookings, ops), Voice AI Worker phone coverage, and revenue-automation systems for businesses in Malta and across the EU.`,
      },
      {
        question: "Where is OARC Digital based and how do I contact the team?",
        answer:
          `OARC Digital's head office is at Level 1, The Brewhouse, Central Business District, ${NAP.addressLocality} ${NAP.postalCode}, Malta. Phone ${NAP.phoneDisplay}. On Google Maps, OARC Digital shows a 5.0 rating from 6 Google reviews. Book a call or WhatsApp the same number.`,
      },
      {
        question: "Do you only do social media, or also AI agents, voice, and automation?",
        answer:
          "Both. AI agents and Voice AI Worker sit beside editorial creative, social management, SEO, and paid media. Start where the money leak is—missed calls, weak brand, invisible search, or manual follow-up—then expand under one Birkirkara team.",
      },
      {
        question: "What makes OARC different from other Malta agencies?",
        answer:
          "We are AI-native rather than retrofitted. Human creative direction ships with AI-speed production, AI agents handle real workflows, and automation connects leads into your CRM. Pricing is tied to outcomes, not vanity retainers, and the same team that designs your brand also writes the systems that operate it.",
      },
      {
        question: "What industries does OARC Digital work with in Malta?",
        answer:
          "Our strongest verticals in Malta are hospitality (restaurants, hotels, bars), iGaming and fintech (MGA / MFSA-regulated), professional services (legal, accounting, advisory), clinics, and high-growth SaaS. We are MFSA, MGA, and IDPC aware on every regulated engagement.",
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
            `OARC Digital is Malta's AI-native marketing and automation agency, headquartered at Level 1, The Brewhouse, Central Business District, ${NAP.addressLocality} ${NAP.postalCode}, Malta. Phone ${NAP.phoneDisplay}. Services cover creative, AI agents, Voice AI Worker, and revenue automation.`,
          source: "https://oarcdigital.com/contact",
        },
        {
          claim:
            "On Google Maps, OARC Digital (Birkirkara) shows a 5.0 rating from 6 Google reviews.",
          source: "https://oarcdigital.com/",
        },
        {
          claim:
            "OARC Digital's strongest Malta verticals are hospitality, iGaming and fintech (MGA / MFSA regulated), professional services, clinics, and high-growth SaaS.",
          source: "https://oarcdigital.com/industries",
        },
      ],
      conversionGoal: `WhatsApp ${NAP.phoneDisplay} or book a 30-minute audit call`,
    },
  },

  "/ai-agents": {
    title: "AI Agents for Business Malta | OARC Workforce",
    description:
      "Deploy AI agents for sales, support, booking, and ops—24/7, EU-data-aware, CRM-connected. Malta's AI workforce from OARC Digital.",
    faqs: [
      {
        question: "What is an AI agent and how is it different from a chatbot?",
        answer:
          "An AI agent completes multi-step workflows end-to-end — qualifying a lead, booking the meeting, updating your CRM, and following up — without a human in the loop for the predictable steps. A chatbot answers single questions. OARC AI agents are trained on your tone and data with direct integrations into your stack.",
      },
      {
        question: "Which AI agents does OARC offer?",
        answer:
          "Core agents include AI SDR (outbound), AI Support Specialist, AI Appointment Booker, AI Admin, AI Data Analyst, and custom agents for specific workflows. Voice AI Worker covers phone lines when callers need a next step, not voicemail.",
      },
      {
        question: "Do you offer voice phone agents as well as chat?",
        answer:
          "Yes. OARC builds chat, WhatsApp, and Voice AI Worker phone agents so callers and chatters both get a next step without waiting in voicemail limbo—especially useful for Malta hospitality, clinics, and service businesses.",
      },
      {
        question: "How long does it take to deploy an AI agent in Malta?",
        answer:
          "Standard agents (SDR, support, booking) typically deploy in 14 to 21 days from signed scope. Custom agents take longer depending on integration complexity. Every deployment includes training on your tone, your data, and the systems the agent must operate.",
      },
      {
        question: "Where is the data processed and stored?",
        answer:
          "All AI-agent data sits inside EU-resident infrastructure (Frankfurt or Dublin) by default. We are GDPR-compliant out of the box and configure additional residency on request for regulated clients (MFSA, MGA, healthcare).",
      },
      {
        question: "Do AI agents replace my staff?",
        answer:
          "They replace the repetitive work, not the relationships. Keep humans for high-judgement work (closing deals, escalations, strategy) and hand off predictable workflows (qualification, scheduling, tier-1 support, reporting) to the agents.",
      },
      {
        question: "Can OARC's AI agents integrate with my existing CRM?",
        answer:
          "Yes. Native connectors exist for HubSpot, Salesforce, Pipedrive, Zoho, Monday, Airtable, Notion, and any system with a REST API. WhatsApp Business API, Meta, Google, Stripe, and Cal.com are also supported.",
      },
      {
        question: "How do I know an AI agent is right for my business?",
        answer:
          "Book a free 30-minute AI workforce audit. We map your current workflows, estimate the human-hour cost of each, and tell you which (if any) are economic to hand to an AI agent—including when you should skip it.",
      },
      {
        question: "What can an AI agent do for my Malta business on day one?",
        answer:
          "OARC AI agents can answer FAQs, qualify leads, book appointments, and update your CRM from day one—so Malta businesses stop losing demand to slow replies. Pair with Creative when you also need demand generation assets.",
      },
      {
        question: "Who builds OARC AI agents?",
        answer:
          `OARC Digital in Birkirkara builds and supports the agents—same Malta team as creative and automation, phone ${NAP.phoneDisplay}. Not a offshore chatbot reseller bolted onto a media retainer.`,
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
    title: "Creative Agency Malta | Brand + Video | OARC",
    description:
      "Creative agency in Malta for brand, social, and video—human direction, AI-augmented production, measured on revenue. Birkirkara.",
    faqs: [
      {
        question: "What does a creative agency in Malta actually deliver for an SMB?",
        answer:
          "Brand identity and guidelines, social creative systems, short-form video and Reels, photography direction, web visual systems, and paid-media creative. OARC measures that work against enquiries and revenue—not just aesthetics—and production is AI-augmented with human creative direction.",
      },
      {
        question: "Is OARC only a social media agency?",
        answer:
          "No. Social is one spoke. The creative practice also covers brand strategy, video production, web design, and ad creative, and it sits next to AI agents, Voice AI Worker, and automation when owners need demand answered after the creative creates it.",
      },
      {
        question: "How is OARC's creative work different from a traditional Malta agency?",
        answer:
          "Two things. First, we are AI-augmented — production happens faster without template sludge. Second, every brief opens with a measurable creative hypothesis: which metric this work is supposed to move and how we will know.",
      },
      {
        question: "Do you produce video in-house?",
        answer:
          "Yes — full in-house video production from concept to delivery. Studio shoots, on-location, and AI-augmented post. Common formats include brand films, social-cut packs, product demos, and case studies.",
      },
      {
        question: "Can creative work connect to AI agents and phone coverage?",
        answer:
          "Yes. Creative that drives enquiries pairs with AI agents and Voice AI Worker so leads and callers get a next step instead of voicemail. One team owns the brief from asset to answer.",
      },
      {
        question: "How long does a brand identity project take?",
        answer:
          "A brand sprint (positioning, visual identity, basic guidelines, first applications) ships in 4 to 6 weeks. A full brand build (deeper strategy, naming, tone of voice, full system, launch assets) runs 8 to 12 weeks.",
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
            "OARC Digital's creative practice covers brand, social, video, and web, and sits beside AI agents and Voice AI Worker when owners need demand answered after creative creates it.",
          source: "https://oarcdigital.com/creative",
        },
      ],
      conversionGoal: "Book a free 30-minute creative audit or request a tailored reel",
    },
  },

  "/automation": {
    title: "Business Automation Malta | Revenue Solutions | OARC",
    description:
      "One Malta team for creative, AI agents, and automation—so owners get more customers and fewer manual loops. Birkirkara. Book a call.",
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
      {
        question: "What business automation solutions does OARC offer in Malta?",
        answer:
          "OARC combines creative, AI agents, and workflow automation so Malta businesses capture more demand and run fewer manual loops under one team.",
      },
      {
        question: "Where should I start: AI, creative, or SEO?",
        answer:
          "Start where money leaks: missed calls (voice), weak brand (creative), or invisible search (SEO). OARC sequences from that leak on the first call.",
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
