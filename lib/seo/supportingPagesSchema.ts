// Per-supporting-page schema inputs. Drives the FAQPage + WebPage + Pillar
// JSON-LD bundle emitted via <RouteSchema type="pillar"> on the 13
// supporting/strategic surfaces in `.local/memory/core-url-rank.md` that are
// not covered by SERVICE_SCHEMAS or PILLAR_SCHEMAS.
//
// Single source of truth — Task #133 schema completeness sweep. Keeping the
// FAQ + title + description here means a phrasing edit is one line and the
// validate-schema.ts gate can keep asserting the contract per slug.

import { NAP } from "@/lib/seo/nap";

export type SupportingPageEntry = {
  path: string;
  title: string;
  description: string;
  faqs: { question: string; answer: string }[];
};

export const SUPPORTING_PAGE_SCHEMAS: Record<string, SupportingPageEntry> = {
  "/services": {
    path: "/services",
    title: "All Services — Creative, AI Agents, Revenue Automation | OARC Digital",
    description:
      "OARC Digital's full Malta-based service catalogue: brand and creative, AI agents and employees, paid media, SEO, and revenue automation under one team.",
    faqs: [
      {
        question: "What services does OARC Digital offer?",
        answer:
          "OARC Digital is a full-stack marketing, creative, and AI-automation agency. Headline services are brand and design, social media creative management, video production, web design and development, paid advertising, SEO, content and email marketing, AI agents (sales, support, booking, admin), and revenue + funnel automation. The same team handles strategy, creative, and engineering on every brief.",
      },
      {
        question: "Where is OARC Digital based?",
        answer:
          `OARC Digital is headquartered at Level 1, The Brewhouse, Central Business District, ${NAP.addressLocality} ${NAP.postalCode}, Malta. Phone ${NAP.phoneDisplay}. The team works on-island with clients across the EU, Middle East, and India.`,
      },
      {
        question: "How are OARC Digital's services priced?",
        answer:
          "Pricing is outcome-led and project-scoped, not retainer-padded. Single workflows from EUR 1,200, brand sprints from EUR 6,500, social retainers from EUR 2,400/month, AI agents from EUR 1,800/agent/month. Every quote opens with a free 30-minute audit so you see what the engagement should actually move before you spend.",
      },
      {
        question: "Can I bundle creative, AI agents, and automation in one engagement?",
        answer:
          "Yes — this is the most common engagement shape. We package brand, performance creative, and the AI agents that operate the funnel as a single quarterly programme so the work compounds. One brief, one team, one performance dashboard.",
      },
      {
        question: "How fast does OARC Digital launch new work?",
        answer:
          "Standard creative deliverables ship in 2 to 4 weeks. AI agents go live in 14 to 21 days. Marketing-automation suites complete inside 4 to 8 weeks. Every engagement opens with a written timeline you sign before kickoff and report against weekly.",
      },
      {
        question: "Do OARC's services cover regulated industries (iGaming, fintech, healthcare)?",
        answer:
          "Yes. We are MGA, MFSA, and IDPC aware on every regulated brief — creative reviewed against the relevant marketing rules, AI agents data-resident in the EU (Frankfurt or Dublin), and compliance handoffs documented at engagement close.",
      },
    ],
  },

  "/our-work": {
    path: "/our-work",
    title: "Our Work — Case Studies & Campaigns | OARC Digital Malta",
    description:
      "Selected OARC Digital projects: AI agents in production, brand systems, video, paid campaigns, and revenue automation builds across Malta and the EU.",
    faqs: [
      {
        question: "What kind of work does OARC Digital showcase?",
        answer:
          "Brand systems, video production, AI agent deployments, paid campaigns, web builds, and full revenue-automation programmes. Every case is published with a measured before/after on the metric the client asked us to move — not vanity metrics.",
      },
      {
        question: "How are case studies selected?",
        answer:
          "We publish work where the client granted naming rights and the measured outcome cleared a meaningful baseline. Anonymised case studies sit behind the contact form for regulated clients (iGaming, fintech, healthcare) where naming would breach an NDA.",
      },
      {
        question: "Can OARC share results from an industry similar to mine?",
        answer:
          `Yes — WhatsApp ${NAP.phoneDisplay} or email ${NAP.email} with your industry and we will send a tailored reel of comparable engagements within 24 working hours.`,
      },
      {
        question: "Does OARC Digital work outside Malta?",
        answer:
          "About 35% of the active engagement book serves clients across the EU, GCC (UAE, KSA), and India. Production happens from Birkirkara; account management adapts to your timezone.",
      },
      {
        question: "Are OARC's case-study results independently verified?",
        answer:
          "We publish the underlying analytics platform (GA4, Meta Ads Manager, HubSpot, the agent's own dashboard) on every case so the figure is auditable. References on request for any case under enterprise consideration.",
      },
      {
        question: "How does OARC measure campaign success?",
        answer:
          "Each engagement opens with a baseline (revenue, lead volume, CAC, retention) and a 90-day target. Weekly performance reports compare actuals against the target. AI-agent and automation work is measured by hours of human time replaced and revenue uplift.",
      },
    ],
  },

  "/contact": {
    path: "/contact",
    title: "Contact OARC Digital — Birkirkara, Malta | Book a 30-Minute Audit",
    description:
      `Talk to the OARC Digital team in Birkirkara CBD about creative, AI agents, and revenue automation. Walk in to The Brewhouse on weekdays, call ${NAP.phoneDisplay}, or book a slot online.`,
    faqs: [
      {
        question: "How do I contact OARC Digital?",
        answer:
          `WhatsApp or call ${NAP.phoneDisplay}, email ${NAP.email}, or walk in to Level 1, The Brewhouse, Central Business District, ${NAP.addressLocality} ${NAP.postalCode}, Malta. Office hours are 09:00 to 18:00 Monday to Friday.`,
      },
      {
        question: "Where is OARC Digital's office in Malta?",
        answer:
          `OARC Digital's head office is at Level 1, The Brewhouse, Central Business District, ${NAP.addressLocality} ${NAP.postalCode}, Malta. The Brewhouse is in the heart of CBD with parking on Triq Mikiel Anton Vassalli and a 4-minute walk from the CBD bus interchange.`,
      },
      {
        question: "How quickly does OARC respond to enquiries?",
        answer:
          "Inbound enquiries received during office hours (09:00 to 18:00 Mon-Fri Malta time) are answered within 2 working hours. Out-of-hours messages are answered the next working morning. The 30-minute audit call is typically scheduled within 48 hours of the first message.",
      },
      {
        question: "Is the first call free?",
        answer:
          "Yes. The first conversation is a free 30-minute discovery audit where we map the highest-leverage opportunity in your current funnel, recommend whether OARC is even the right partner, and outline what an engagement would cost — with no obligation to proceed.",
      },
      {
        question: "What information should I have ready for the first call?",
        answer:
          "Your top business goal for the next 90 days, current monthly marketing spend (rough is fine), the channels you currently use, and any active analytics access (GA4, Meta, CRM). If you do not have these — bring questions; the call still works without numbers.",
      },
      {
        question: "Does OARC accept walk-in meetings?",
        answer:
          `Yes — Level 1, The Brewhouse, ${NAP.addressLocality} CBD between 09:00 and 18:00 on weekdays. We recommend booking ahead via ${NAP.phoneDisplay} so the right specialist is on-site for your brief.`,
      },
    ],
  },

  "/pricing": {
    path: "/pricing",
    title: "Pricing — Creative, AI Agents & Automation | OARC Digital Malta",
    description:
      "Transparent pricing for OARC Digital's services. Project-scoped, outcome-led: brand sprints, social retainers, AI agents, automation suites, and bespoke engagements.",
    faqs: [
      {
        question: "How much does OARC Digital cost?",
        answer:
          "Engagements are project-scoped against the outcome they target. Indicative starting prices: brand sprints from EUR 6,500, social retainers from EUR 2,400 per month, AI agents from EUR 1,800 per agent per month, single-workflow automations from EUR 1,200, marketing-automation suites EUR 6,000 to 18,000.",
      },
      {
        question: "Are there long-term contracts?",
        answer:
          "No mandatory annual lock-ins. Standard retainer engagements run on a 90-day rolling cycle: 30 days notice to pause or cancel after the first quarter. Project work is fixed-scope, fixed-price.",
      },
      {
        question: "What is included in a social media retainer?",
        answer:
          "Content planning, photo and video production, copywriting, scheduling, community management, monthly performance review, and a measurable KPI agreed in week one. Paid amplification is scoped separately because spend varies by client.",
      },
      {
        question: "How is AI-agent pricing calculated?",
        answer:
          "Standard agents (SDR, support, booking, admin) start from EUR 1,800 per month per agent — covers hosting, monitoring, and continuous prompt tuning. Custom agents are scoped per engagement. Pricing is structured so each agent typically replaces 2 to 4 human hours per day, paying back inside the first quarter.",
      },
      {
        question: "Does OARC charge for the first audit call?",
        answer:
          "No. The first 30-minute discovery audit is free — we map the highest-leverage opportunity in your funnel and recommend whether OARC is even the right partner before any quote is issued.",
      },
      {
        question: "Are taxes (VAT) included in the quoted prices?",
        answer:
          "Quoted prices are in EUR ex-VAT. Maltese VAT (18%) is added on every invoice for Malta-resident clients. EU B2B clients receive a reverse-charge invoice (no VAT) on production of a valid VAT number; non-EU clients are invoiced VAT-free.",
      },
    ],
  },

  "/why-us": {
    path: "/why-us",
    title: "Why OARC Digital — Founding Story & Operating Principles | Malta",
    description:
      "Why OARC Digital exists, who founded it, and the operating principles that put creative, AI engineering, and revenue automation under one Birkirkara roof.",
    faqs: [
      {
        question: "Who founded OARC Digital?",
        answer:
          "OARC Digital was founded in 2023 by Sahan Reddy in Birkirkara, Malta, to bring brand creative, AI engineering, and revenue automation under one roof. The full leadership and team page sits at /about.",
      },
      {
        question: "What does OARC stand for?",
        answer:
          "OARC stands for Optimised AI Revenue Creativity — the operating principle that creative work should be measured by the revenue it generates, not the impressions it earns, and that AI is how you scale that loop without losing craft.",
      },
      {
        question: "How is OARC Digital different from a traditional Malta agency?",
        answer:
          "Three differences. First, we are AI-native — production runs 3 to 5x faster without visible cost-cutting. Second, every brief opens with a measurable hypothesis, not a creative deck. Third, the team that designs your brand also writes the automation that operates it, so the loop closes inside one studio.",
      },
      {
        question: "What industries does OARC specialise in?",
        answer:
          "Strongest verticals are hospitality (restaurants, hotels, bars), iGaming and fintech (MGA / MFSA-regulated), professional services (legal, accounting, advisory), real estate, and high-growth SaaS. We turn down briefs outside these where we cannot promise to outperform a vertical specialist.",
      },
      {
        question: "Is OARC Digital GDPR compliant?",
        answer:
          "Yes. AI-agent data sits inside EU-resident infrastructure (Frankfurt or Dublin) by default, processing agreements are ready to sign, and the team is trained against the IDPC's small-business guidance. Data subject access requests are turned around inside 30 days.",
      },
      {
        question: "What guarantees does OARC Digital offer?",
        answer:
          "We guarantee written 90-day targets, weekly transparent reporting against those targets, and a 30-day notice cancellation window after the first quarter. We do not guarantee specific lead or revenue numbers — anyone who does is selling you a story, not a service.",
      },
    ],
  },

  "/blog": {
    path: "/blog",
    title: "OARC Digital Blog — AI Marketing, Creative & Growth in Malta",
    description:
      "Long-form guides on AI marketing, creative production, paid media, SEO, and revenue automation in Malta. Written by the OARC Digital team.",
    faqs: [
      {
        question: "What does the OARC Digital blog cover?",
        answer:
          "Practical, Malta-focused guides on social media, paid advertising, SEO, AI marketing, branding, video, and revenue automation. Every post is written by an OARC practitioner who actually delivers the work, not an outsourced ghostwriter.",
      },
      {
        question: "How often is the OARC blog updated?",
        answer:
          "We publish one to two long-form posts per month plus a quarterly Malta marketing-trends round-up. Existing posts are reviewed and re-stamped twice a year so dated tactics are removed.",
      },
      {
        question: "Can I get OARC's blog by email?",
        answer:
          "Yes — the monthly OARC newsletter rounds up new posts plus a Malta marketing data point. Subscribe via the form at the bottom of any post; we never sell or rent the list.",
      },
      {
        question: "Are the blog tactics specific to Malta?",
        answer:
          "Yes — Malta has unique audience size, language mix, and regulatory context (MGA, MFSA, IDPC). Our posts use Malta examples, Malta benchmarks, and Malta pricing rather than rehashed US case studies.",
      },
      {
        question: "Can I contribute a guest post?",
        answer:
          `We accept guest contributions from Malta-based practitioners with a verifiable track record in marketing, AI, or growth. Pitch via ${NAP.email} with the proposed topic and two writing samples.`,
      },
      {
        question: "How can I cite an OARC Digital blog post?",
        answer:
          "Each post carries a publish date, author byline, and canonical URL. Cite the URL plus the publish date. Quotations of up to 150 words are welcomed without prior permission provided the canonical URL is included.",
      },
    ],
  },

  "/case-studies": {
    path: "/case-studies",
    title: "Case Studies — OARC Digital Malta | Detailed Engagement Write-Ups",
    description:
      "Detailed long-form case studies from OARC Digital across hospitality, iGaming, real estate, fintech, and SaaS. Methodology, measured outcomes, and the systems we built.",
    faqs: [
      {
        question: "What is in an OARC Digital case study?",
        answer:
          "Each case study covers the brief, the diagnosis, the system we built (creative, AI agents, automation), the timeline, and the measured outcome on the metric the client asked us to move. Where possible the underlying analytics platform is named so the result is auditable.",
      },
      {
        question: "How do case studies differ from /our-work?",
        answer:
          "/our-work is the high-level portfolio grid. /case-studies is the long-form library — same engagements, more depth on diagnosis, methodology, and the operating model behind the result.",
      },
      {
        question: "Can I see case studies from my industry?",
        answer:
          `Yes — filter by industry on the index, or WhatsApp ${NAP.phoneDisplay} for a tailored reel of vertical-relevant engagements. Anonymised cases for regulated clients (iGaming, fintech, healthcare) are available on request.`,
      },
      {
        question: "How recent are the published case studies?",
        answer:
          "We publish a new case study per quarter and refresh existing ones with new metrics every six months so the figures shown are never older than the most recent reporting period.",
      },
      {
        question: "Can OARC reference a past client on my behalf?",
        answer:
          `For active engagement consideration we will arrange a direct reference call with a comparable past client where the relationship permits. Email ${NAP.email} to request a reference.`,
      },
      {
        question: "How are case-study outcomes verified?",
        answer:
          "Every quoted figure is sourced from the platform that produced it (GA4, Meta Ads Manager, HubSpot, the AI agent's own console). References on request for enterprise diligence.",
      },
    ],
  },

  "/tools": {
    path: "/tools",
    title: "AI Tools & Tech Stack — OARC Digital Malta",
    description:
      "The AI sales, marketing automation, creative, and analytics tools OARC Digital deploys. Curated stack of 80+ platforms, including pricing notes and use cases.",
    faqs: [
      {
        question: "What tools does OARC Digital actually use?",
        answer:
          "Our active stack covers ~80 tools: AI sales (Clay, Instantly, Apollo), creative (Midjourney, Runway, Figma, Adobe CC), automation (n8n, Make, Zapier), CRM (HubSpot, Pipedrive, Salesforce), analytics (GA4, PostHog, Hotjar), and bespoke internal tooling. The full list is on this page.",
      },
      {
        question: "Does OARC charge for tool licences?",
        answer:
          "No — we never re-bill licence fees with markup. Clients buy their own subscriptions on their own accounts so the data, history, and renewal control sits with you, not the agency.",
      },
      {
        question: "Will OARC train my team on these tools?",
        answer:
          "Yes — every engagement includes practitioner training on the tools we deploy as part of the brief. Standalone training engagements (1 to 5 days) are also available for in-house teams.",
      },
      {
        question: "How does OARC choose new tools?",
        answer:
          "We evaluate against four tests: real client outcome lift, EU data residency, integration depth with our existing stack, and per-month cost vs. value. New tools enter the stack only after a 30-day pilot on a real engagement.",
      },
      {
        question: "Can OARC build a custom tool for my workflow?",
        answer:
          "Yes — bespoke internal tooling is one of our core engineering services. Typical builds are CRM extensions, AI agent dashboards, custom reports, and workflow apps. Scoped per engagement, typically 4 to 12 weeks.",
      },
      {
        question: "Are these tools GDPR compliant?",
        answer:
          "We default to EU-resident or contractually-EU configurations on every tool that processes client data. The list page flags any tool where US data residency is unavoidable and how we mitigate it (data minimisation, anonymisation).",
      },
    ],
  },

  "/about": {
    path: "/about",
    title: "About OARC Digital — Malta's AI-Native Creative & Automation Agency",
    description:
      "Founded in Birkirkara to bring creative, AI engineering, and revenue automation under one roof for Maltese businesses. Our team, story, and operating principles.",
    faqs: [
      {
        question: "When was OARC Digital founded?",
        answer:
          "OARC Digital was founded in 2023 by Sahan Reddy in Birkirkara, Malta. The studio opened with a single mandate: combine brand creative, AI engineering, and revenue automation in one team rather than three vendors.",
      },
      {
        question: "Who runs OARC Digital?",
        answer:
          "Sahan Reddy is the founder and managing director. The day-to-day team mixes creative directors, AI engineers, paid-media strategists, and automation builders working from the Birkirkara studio.",
      },
      {
        question: "Where is OARC Digital located?",
        answer:
          `Level 1, The Brewhouse, Central Business District, ${NAP.addressLocality} ${NAP.postalCode}, Malta. Phone ${NAP.phoneDisplay}. The team works on-island, with European, Middle Eastern, and Asian clients served remotely.`,
      },
      {
        question: "What does OARC Digital stand for?",
        answer:
          "Optimised AI Revenue Creativity. The principle is that creative is measured by the revenue it generates, AI is how you scale the loop, and the same team should own the brief end-to-end.",
      },
      {
        question: "How big is the OARC Digital team?",
        answer:
          "OARC operates as a senior-only studio with a tight on-island team plus a vetted bench of contractors for production peaks. We deliberately stay small so every brief is owned by a senior practitioner, not delegated to juniors.",
      },
      {
        question: "Does OARC Digital have a public LinkedIn or media presence?",
        answer:
          "Yes — Sahan Reddy is on LinkedIn at /in/sahanoarcdigital and the company page is /company/oarcdigital. Media enquiries via the contact page.",
      },
    ],
  },

  "/industries": {
    path: "/industries",
    title: "Industries — OARC Digital Serves Hospitality, iGaming, Fintech & More",
    description:
      "OARC Digital serves restaurants, hotels, healthcare, legal, professional services, construction, beauty, automotive, education, NGOs, iGaming, fintech, real estate, retail, ecommerce, fitness, and wellness across Malta.",
    faqs: [
      {
        question: "Which industries does OARC Digital serve?",
        answer:
          "OARC Digital actively serves 19 verticals across Malta: restaurants, hotels, cafes, bars, iGaming, fintech, real estate, retail, ecommerce, fitness, wellness, events, healthcare clinics, legal services, professional services, construction, beauty and med spas, automotive, education, and non-profits.",
      },
      {
        question: "Does OARC understand regulated industries in Malta?",
        answer:
          "Yes. We are MGA-aware (iGaming), MFSA-aware (fintech and finance), and IDPC-aware (data protection). Healthcare engagements are reviewed against Maltese health-marketing rules. Every regulated engagement opens with a compliance scoping call.",
      },
      {
        question: "What is OARC Digital's strongest vertical?",
        answer:
          "Hospitality (restaurants, hotels, bars) and iGaming/fintech are the deepest verticals by case-study count. Real estate and professional services follow. Vertical specialisation matters because Malta's audience size demands tighter targeting than a generalist agency can deliver.",
      },
      {
        question: "Can OARC build a campaign for a vertical not on this list?",
        answer:
          "We will tell you honestly. If we have run a similar engagement we will scope. If we have not, we recommend a vertical specialist — we do not take briefs we cannot promise to outperform a focused competitor on.",
      },
      {
        question: "Does each industry get a dedicated playbook?",
        answer:
          "Yes — every active vertical has an internal playbook covering the audience map, channel benchmarks, creative formats that work, and the regulatory checklist. Playbooks are updated quarterly from live engagement data.",
      },
      {
        question: "How does OARC stay current on Malta industry trends?",
        answer:
          "Practitioners attend SiGMA, MFSA briefings, MTA forums, and the relevant chamber events. We publish a quarterly Malta marketing-trends round-up on /blog and re-baseline our industry playbooks against the latest data each quarter.",
      },
    ],
  },

  "/intelligence": {
    path: "/intelligence",
    title: "OARC Intelligence — Business Diagnostics & Market Intel | Malta",
    description:
      "OARC Intelligence is the diagnostic layer: industry scans, growth simulators, and AI workforce design tools that surface where revenue is leaking and what to fix first.",
    faqs: [
      {
        question: "What is OARC Intelligence?",
        answer:
          "OARC Intelligence is the diagnostic and benchmarking layer of the agency. It is a suite of free and paid tools that quantify where revenue is leaking in your business, simulate the impact of fixing it, and design the AI workforce or automation that delivers the fix.",
      },
      {
        question: "How is Intelligence different from a normal agency audit?",
        answer:
          "A normal agency audit is qualitative — a deck of opinions. Intelligence outputs are quantitative — pound or euro figures against each problem, sourced from your own data plus Malta industry benchmarks. The numbers feed directly into a scoping call, not a sales pitch.",
      },
      {
        question: "Are the Intelligence tools really free?",
        answer:
          "Yes — the four headline diagnostics (Industry Scan, Growth Simulator, AI Workforce Designer, Cortex Business Intelligence Scan) are free with no login. The paid tier is the bespoke deep-diagnostic engagement that goes beyond what a self-serve tool can model.",
      },
      {
        question: "What data do I need to run an Intelligence diagnostic?",
        answer:
          "The free tools need only your industry, rough revenue, and team size. The deep diagnostic uses your live analytics (GA4, Meta, CRM) under a signed NDA — never shared, never used for any purpose beyond your engagement.",
      },
      {
        question: "Will OARC pitch me after I run a free diagnostic?",
        answer:
          "Only if your output indicates we can credibly help. The diagnostic explicitly recommends 'OARC fits' or 'a vertical specialist fits' or 'you do not need an agency for this'. We earn long-term clients by telling the truth on the first interaction.",
      },
      {
        question: "Are Intelligence outputs valid outside Malta?",
        answer:
          "The methodology travels but the benchmarks are Malta-specific. EU and Middle East businesses can still use the tools — outputs flag where the Malta benchmark may not apply and suggest the regional equivalent.",
      },
    ],
  },

  "/diagnostics": {
    path: "/diagnostics",
    title: "Free Business Diagnostics for Malta SMEs | OARC Digital",
    description:
      "Four free diagnostic tools for Malta SMEs: Industry Scan, Growth Simulator, AI Workforce Designer, and the Cortex Business Intelligence Scan. No login required.",
    faqs: [
      {
        question: "What free diagnostics does OARC Digital offer?",
        answer:
          "Four free tools: Industry Scan (where revenue is leaking by vertical), Growth Simulator (impact of fixing the top three leaks), AI Workforce Designer (which AI agents would pay back inside a quarter), and Cortex Business Intelligence Scan (full operational diagnostic).",
      },
      {
        question: "Do I need to register to run the diagnostics?",
        answer:
          "No — the four headline diagnostics run with no login, no credit card, and no email gate. We collect your output only if you opt in to receive the recommendations as a PDF.",
      },
      {
        question: "How long does each diagnostic take?",
        answer:
          "Industry Scan: 3 minutes. Growth Simulator: 5 minutes. AI Workforce Designer: 7 minutes. Cortex Business Intelligence Scan: 12 minutes. Each output is delivered immediately, on-screen.",
      },
      {
        question: "Are the diagnostic recommendations Malta-specific?",
        answer:
          "Yes — benchmarks are sourced from OARC's active Malta engagement book plus public Malta industry data (NSO, MTA, MGA, MFSA disclosures). Recommendations name Malta tools, Malta vendors, and Malta-typical price points.",
      },
      {
        question: "Will OARC contact me after I run a diagnostic?",
        answer:
          "Only if you opt in. Outputs are yours to keep without sales follow-up. If you ask for a 30-minute audit call we contact you within 48 working hours.",
      },
      {
        question: "Can I share diagnostic results with my team or board?",
        answer:
          "Yes — every diagnostic offers a PDF export designed to drop straight into a board pack, with sources cited and methodology footnotes.",
      },
    ],
  },

  "/enterprise": {
    path: "/enterprise",
    title: "Enterprise Engagements — OARC Digital | Malta & EU",
    description:
      "Enterprise-grade creative, AI agents, and revenue automation for organisations above EUR 5M revenue. Dedicated team, custom SLAs, and EU-data-resident infrastructure.",
    faqs: [
      {
        question: "What is an OARC Digital enterprise engagement?",
        answer:
          "Enterprise engagements are dedicated-team programmes for organisations above roughly EUR 5M annual revenue. They include named senior practitioners, custom SLAs, EU-data-resident infrastructure, and quarterly business reviews against board-level KPIs.",
      },
      {
        question: "How is enterprise pricing structured?",
        answer:
          "Programmes are quoted as a quarterly retainer plus performance-linked components. Typical enterprise programmes start at EUR 18,000 per quarter and scale with team size and integration depth. All pricing is fully itemised and tied to deliverables in the SOW.",
      },
      {
        question: "Does OARC sign enterprise NDAs and DPAs?",
        answer:
          "Yes. Standard NDA, DPA (Data Processing Agreement), and information-security questionnaires are returned within 5 working days. Bespoke security clauses (penetration testing, source-code escrow, EU data residency attestations) accommodated on request.",
      },
      {
        question: "Will OARC integrate with my procurement and legal team?",
        answer:
          "Yes — every enterprise engagement opens with a procurement and legal scoping call so the contract, billing cadence, and compliance reporting align with your existing vendor frameworks before kickoff.",
      },
      {
        question: "Can OARC support multinational rollouts?",
        answer:
          "Yes — we support multi-region rollouts across the EU, GCC, and India with localised creative, language variants, and regional compliance reviews. Production stays centralised in Malta to keep the brand consistent.",
      },
      {
        question: "Who is the named owner of an enterprise engagement?",
        answer:
          "Every enterprise engagement is owned by a Director-level Account Lead with daily involvement, escalation path to the founder, and weekly written status reports. The same Account Lead stays for the full programme; we do not rotate senior owners.",
      },
    ],
  },

  "/roadmap-2026": {
    path: "/roadmap-2026",
    title: "OARC Digital Roadmap 2026 — AI, Creative & Automation Direction",
    description:
      "OARC Digital's 2026 roadmap: AI agent expansion, creative practice growth, automation tooling, and new markets. The product and capability commitments for the year.",
    faqs: [
      {
        question: "What is on OARC Digital's 2026 roadmap?",
        answer:
          "Five themes for 2026: deeper AI agent specialisation by industry, expansion of in-house video production capacity, new automation tooling for SME marketing, deeper integration with the Malta SME stack (Indigo, Shireburn, MaltaPay), and selective expansion into the GCC.",
      },
      {
        question: "How often is the roadmap updated?",
        answer:
          "Major updates publish quarterly. Small refinements (new tooling, completed milestones) update inside the page in real time. Each completed item carries a 'shipped' date so you can see the cadence.",
      },
      {
        question: "Can clients influence the roadmap?",
        answer:
          "Yes — active enterprise clients are invited to a quarterly roadmap review where they can rank upcoming items by relevance to their business. The two highest-voted items each quarter receive a guaranteed development slot.",
      },
      {
        question: "Is the roadmap a commitment or aspiration?",
        answer:
          "Items in the 'Committed' column will ship inside the named quarter. Items in 'Exploring' may move, ship later, or be cancelled with a written explanation. We separate the two so the page is honest, not aspirational.",
      },
      {
        question: "How can I be notified when a roadmap item ships?",
        answer:
          "Subscribe to the OARC newsletter — every roadmap shipment is announced in the next monthly issue. Enterprise clients receive direct notification via their Account Lead.",
      },
      {
        question: "Will the 2026 roadmap impact my pricing?",
        answer:
          "No price changes are tied to the roadmap. New capabilities ship at parity with the current pricing model unless specifically flagged in the SOW for that capability.",
      },
    ],
  },

  "/pdf-hub": {
    path: "/pdf-hub",
    title: "OARC Digital PDF Hub — Capabilities Decks & Methodology Briefs",
    description:
      "Download OARC Digital's capabilities deck, methodology briefs, AI workforce playbook, and case-study compendium. Free, no email gate.",
    faqs: [
      {
        question: "What PDFs are available on OARC Digital's PDF Hub?",
        answer:
          "The headline assets are the OARC Capabilities Deck (12 pages), the AI Workforce Playbook, the Malta Marketing Benchmarks Brief, and the Case-Study Compendium. New briefs are added each quarter.",
      },
      {
        question: "Are the PDFs free to download?",
        answer:
          "Yes — every public PDF on the hub is free with no email gate or login. We collect zero data on the download. Premium briefs (typically commissioned client-only research) require a contact form.",
      },
      {
        question: "Can I share or quote from OARC's PDFs?",
        answer:
          "Yes — sharing is encouraged with attribution. Quotations of up to 200 words are permitted with a citation back to the PDF and oarcdigital.com. For larger excerpts or internal training use, contact the team for written permission.",
      },
      {
        question: "How often are the PDFs updated?",
        answer:
          "The Capabilities Deck refreshes each quarter. Methodology briefs refresh when the underlying methodology changes (typically twice a year). The benchmarks brief refreshes annually with NSO and platform data.",
      },
      {
        question: "Are the PDFs accessible (screen readers, dyslexia-friendly)?",
        answer:
          "Yes — every PDF is exported with proper tagging, alt text on images, and an accessible reading order. Plain-text versions are available on request for screen readers that struggle with PDF rendering.",
      },
      {
        question: "Can OARC produce a custom-branded PDF for my pitch?",
        answer:
          "Yes — bespoke pitch PDFs and capability decks are part of the presentation-pitch service line. Typical turnaround is 5 to 10 working days from brief to final delivery.",
      },
    ],
  },
};

export type SupportingPath = keyof typeof SUPPORTING_PAGE_SCHEMAS;
