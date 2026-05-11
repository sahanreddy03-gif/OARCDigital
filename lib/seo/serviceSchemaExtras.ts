import type { OfferOpts, ServiceFeature } from "@/lib/schema";

export type ServiceSchemaExtra = {
  title: string;
  description: string;
  offers: OfferOpts[];
  features: ServiceFeature[];
  faqs: { question: string; answer: string }[];
  /** Optional Schema.org Service.serviceType for vertical/industry-specific
   *  Service nodes (e.g. /services/paid declares "Industry-Specific Paid
   *  Advertising" to disambiguate from /services/paid-advertising). */
  serviceType?: string;
  /** Optional Schema.org Service.audience array (verticals targeted). */
  audience?: string[];
  /** Optional Schema.org Service.areaServed override. Defaults to "Malta"
   *  inside buildService when not set. */
  areaServed?: string;
};

export const SERVICE_SCHEMA_EXTRAS: Record<string, ServiceSchemaExtra> = {
  "ad-creative": {
    title: "Ad Creative Design Malta | Performance Marketing Assets | OARC Digital",
    description:
      "Performance ad creative — static, motion, and UGC — built for Meta, TikTok, YouTube, and programmatic. Concept, shoot, edit, and weekly winner reporting from a Malta studio.",
    offers: [
      {
        name: "Creative Sprint",
        priceFrom: 2400,
        unitText: "PROJECT",
        description:
          "Concept, script, and 12 ad variants (statics + 6-second motion) ready for paid social testing. 10 working days end-to-end.",
      },
      {
        name: "Always-On Creative Pod",
        priceFrom: 3900,
        unitText: "MONTH",
        description:
          "20 fresh ads per month across statics, UGC, and motion. Includes performance review, hook iteration, and winner doubling.",
      },
      {
        name: "Studio Production Day",
        priceFrom: 4500,
        unitText: "PROJECT",
        description:
          "On-location or in-studio shoot in Malta — talent, props, lighting, post — for 30+ ad-ready assets in a single day.",
      },
    ],
    features: [
      { name: "Performance creative concepting" },
      { name: "Static, motion, UGC, and CGI assets" },
      { name: "Hook and angle iteration cycles" },
      { name: "Platform-specific aspect ratios" },
      { name: "Localised English / Maltese variants" },
      { name: "Weekly winner / loser teardown reports" },
    ],
    faqs: [
      {
        question: "How many ads do you produce per month?",
        answer:
          "Always-On clients get a baseline of 20 production-ready ads per month — typically a 60/30/10 split across statics, motion, and UGC — refreshed weekly so the ad account always has new variants in rotation.",
      },
      {
        question: "Do you handle the actual shoot in Malta?",
        answer:
          "Yes. Studio days run from our Birkirkara base or on-location across Malta and Gozo. Talent casting, props, lighting, and post-production are all handled in-house — clients only show up for the playback if they want to.",
      },
      {
        question: "Will the creative match my brand guidelines?",
        answer:
          "We onboard the brand book in week one and version every asset against it. Brand-blocking is a pre-export QA step, so you never see a winning ad you cannot run because the logo lockup is wrong.",
      },
      {
        question: "How do you measure ad performance?",
        answer:
          "We pull spend, CTR, CPM, CPA, and ROAS directly from Meta, TikTok, and Google weekly. Each report names winning hooks, losing hooks, and the next batch of variants we're testing — not just a screenshot dump.",
      },
      {
        question: "Can you work with our existing media buyer?",
        answer:
          "Often. We partner with in-house media teams and external agencies regularly — Slack hand-off, shared Drive, and a creative request board with SLA. We also offer paired media-buying via /services/paid-advertising if needed.",
      },
      {
        question: "What's the lead time on a first batch?",
        answer:
          "10 working days from kick-off to a 12-variant first batch. Sprint engagements lock the brief on day one, scripts on day three, designs on day six, and final exports on day ten.",
      },
    ],
  },

  "ai-admin-agent": {
    title: "AI Administrative Agent | Inbox, Calendar & Workflow Automation | OARC Digital",
    description:
      "Reclaim 15+ hours a week. The OARC AI Admin Agent triages your inbox, books and reschedules meetings, files documents, and runs SOP-driven workflows so your team handles only the work humans should.",
    offers: [
      {
        name: "Solo Operator Pilot",
        priceFrom: 990,
        unitText: "MONTH",
        description:
          "Single user — Gmail / Outlook + Google Calendar + Drive triage, with one core SOP automated. Set-up plus weekly tuning.",
      },
      {
        name: "Team Admin Agent",
        priceFrom: 2400,
        unitText: "MONTH",
        description:
          "Up to 10 seats, shared inbox + calendar coverage, document filing, and three SOPs (e.g. invoice intake, NDA routing, supplier onboarding).",
      },
      {
        name: "Operations Pod",
        priceFrom: 5800,
        unitText: "MONTH",
        description:
          "Multi-team deployment with HR, finance, and ops SOPs, custom integrations to your CRM / ERP, and a dedicated solutions engineer.",
      },
    ],
    features: [
      { name: "Inbox triage and reply drafting" },
      { name: "Calendar booking, rescheduling, no-show recovery" },
      { name: "Document filing and naming conventions" },
      { name: "SOP-driven multi-step workflows" },
      { name: "Slack / Teams / Email channel coverage" },
      { name: "Audit log and human-in-the-loop QA" },
    ],
    faqs: [
      {
        question: "What admin tasks does the agent actually do?",
        answer:
          "Inbox triage with prioritised reply drafts, full calendar lifecycle (booking, rescheduling, no-show follow-up), document filing into Drive or SharePoint, expense capture, and any repeatable SOP your team runs more than five times a week.",
      },
      {
        question: "Will it have access to my actual email and calendar?",
        answer:
          "Yes — via OAuth on Gmail, Outlook, Google Calendar, or Microsoft 365. All access is least-privilege scoped, audit-logged, and revocable in one click. The agent never stores credentials, only short-lived tokens.",
      },
      {
        question: "How does this compare with hiring a virtual assistant?",
        answer:
          "A VA is paid for 40 hours and capped at the speed of typing. The Admin Agent is on call 24/7, drafts replies in under 30 seconds, and never forgets a follow-up. We pair it with one human reviewer for the first 30 days to baseline quality.",
      },
      {
        question: "What about errors and hallucinations?",
        answer:
          "Outbound replies above a confidence threshold auto-send. Below the threshold, the draft sits in a review queue with the source emails and a confidence score. Most clients reach 80%+ auto-send by week four.",
      },
      {
        question: "Can it work with our Maltese and English correspondence?",
        answer:
          "Yes — the agent classifies language per message and replies in the same language. We've trained agents on Maltese-English code-switched correspondence for hospitality and professional-services clients on the islands.",
      },
      {
        question: "How long does set-up take?",
        answer:
          "Solo Operator goes live in 5 working days. Team Admin Agent ships in 2 weeks once SOPs are documented. The Operations Pod is a 4-6 week rollout with phased SOP migration.",
      },
    ],
  },

  "ai-appointment-booker": {
    title: "AI Appointment Booker | 24/7 Calendar & Reminder Agent | OARC Digital",
    description:
      "Stop losing bookings to voicemail. The OARC AI Appointment Booker books, confirms, and reschedules appointments across web chat, WhatsApp, SMS, and email — and follows up on no-shows so revenue doesn't leak overnight.",
    offers: [
      {
        name: "Booking Agent Lite",
        priceFrom: 690,
        unitText: "MONTH",
        description:
          "Web chat + email channels, single calendar, up to 400 bookings per month. Includes set-up, scripts, and weekly tuning.",
      },
      {
        name: "Multichannel Booker",
        priceFrom: 1490,
        unitText: "MONTH",
        description:
          "Web, WhatsApp, SMS, and email coverage. Multi-calendar (up to 10 staff), no-show recovery, and reminder cadences.",
      },
      {
        name: "Hospitality Concierge",
        priceFrom: 2900,
        unitText: "MONTH",
        description:
          "Restaurant / clinic / spa concierge — table or appointment management, deposits, waitlists, and bilingual EN/MT scripting.",
      },
    ],
    features: [
      { name: "24/7 booking across web, WhatsApp, SMS, email" },
      { name: "Real-time calendar sync (Google, Outlook, Calendly)" },
      { name: "Automated reminder cadences" },
      { name: "No-show recovery and rebooking" },
      { name: "Deposit and pre-payment capture" },
      { name: "EN / MT bilingual conversation flows" },
    ],
    faqs: [
      {
        question: "Which calendars and booking platforms does it integrate with?",
        answer:
          "Native two-way sync with Google Calendar, Microsoft 365, Calendly, Cal.com, Acuity, Mindbody, OpenTable, ResDiary, and any platform with a public API. Most integrations are live within 48 hours.",
      },
      {
        question: "How does no-show recovery work?",
        answer:
          "If a booking fails to check in, the agent sends a follow-up within 5 minutes asking to rebook. We typically recover 25-40% of no-shows into a future slot — measured weekly per client and reported in the dashboard.",
      },
      {
        question: "Can it take deposits or pre-payments?",
        answer:
          "Yes. We integrate with Stripe, Revolut Business, and most Malta-issued PSPs to capture a configurable deposit before confirming. This alone reduces no-shows by ~30% for clinics and high-end restaurants.",
      },
      {
        question: "Does it handle phone calls?",
        answer:
          "We handle voice via the AI Voice Agent add-on (an extra €390/mo). It answers, books, transfers complex calls, and captures voicemail when humans are unavailable. Most clients route after-hours and overflow calls to it.",
      },
      {
        question: "How long until we see ROI?",
        answer:
          "Restaurants and clinics typically pay back the monthly fee within the first 30 bookings recovered from no-shows or after-hours requests. Most clients hit positive ROI inside the first month.",
      },
      {
        question: "Will it sound natural in Maltese as well as English?",
        answer:
          "Yes. We script and tune the agent on Maltese-English code-switching common in Malta hospitality, and bilingual reminder cadences are configured per client during onboarding.",
      },
    ],
  },

  "ai-compliance-auditor": {
    title: "AI Compliance Auditor | Document Review & Regulatory Monitoring | OARC Digital",
    description:
      "An AI compliance auditor that reads contracts, T&Cs, KYC files, and policy updates so your compliance team only handles the edge cases. Built for Malta-based fintech, iGaming, and professional services.",
    offers: [
      {
        name: "Document Auditor",
        priceFrom: 1490,
        unitText: "MONTH",
        description:
          "Up to 1,000 documents/month — contracts, T&Cs, AML files — extracted, classified, and red-flagged against your policy library.",
      },
      {
        name: "Continuous Compliance",
        priceFrom: 2990,
        unitText: "MONTH",
        description:
          "Document auditor + regulatory change monitoring (MFSA, MGA, IDPC, GDPR) with weekly delta reports and policy-impact summaries.",
      },
      {
        name: "Regulated Enterprise",
        priceFrom: 6500,
        unitText: "MONTH",
        description:
          "Custom rule packs, on-prem or EU-only deployment, MFSA / MGA-grade audit log, and a dedicated compliance engineer.",
      },
    ],
    features: [
      { name: "Contract and policy document classification" },
      { name: "AML / KYC file consistency checks" },
      { name: "Policy library red-flag matching" },
      { name: "MFSA / MGA / IDPC change monitoring" },
      { name: "EU-only data residency and audit log" },
      { name: "Human-reviewer approval workflow" },
    ],
    faqs: [
      {
        question: "Is the AI compliance auditor a substitute for our MLRO or DPO?",
        answer:
          "No. It is a force multiplier for the human compliance function. The auditor does the first-pass read, flags anomalies, and produces a structured summary. Final sign-off, regulator correspondence, and risk decisions stay with your MLRO, DPO, or Head of Compliance.",
      },
      {
        question: "Does it handle Malta-specific regulators?",
        answer:
          "Yes. We have rule packs that monitor MFSA circulars, MGA directives, IDPC guidance, and ASA Malta rulings, with weekly delta summaries that name the affected policies and the suggested remediation.",
      },
      {
        question: "Where is the data hosted?",
        answer:
          "EU-only by default — typically AWS eu-central-1, Azure West Europe, or a private VPC inside Malta. Regulated Enterprise clients can opt for on-prem deployment with private LLM hosting.",
      },
      {
        question: "How accurate is the document review?",
        answer:
          "We benchmark every deployment against a sample of 100 historical compliance reviews. The current production threshold is 96% precision on flagged items and 99% recall — anything below auto-routes to human review.",
      },
      {
        question: "Can it integrate with our existing GRC platform?",
        answer:
          "Yes — native connectors for OneTrust, LogicGate, ServiceNow GRC, and any platform with a REST or webhook interface. Custom connectors are scoped during onboarding.",
      },
      {
        question: "What about confidentiality of legal documents?",
        answer:
          "Documents are processed in an EU-region tenant with no third-party model training, encrypted at rest with customer-held keys (BYOK), and retained only for the contractual period. We sign a DPA and an NDA before any documents are shared.",
      },
    ],
  },

  "ai-consulting": {
    title: "AI Consulting Malta | Strategy, Roadmap & Hands-On Build | OARC Digital",
    description:
      "AI consulting that ends with shipped systems, not slide decks. We assess, design, and build production AI for Malta SMEs — from inbox triage to full revenue agents — with weekly working demos.",
    offers: [
      {
        name: "AI Readiness Sprint",
        priceFrom: 4500,
        unitText: "PROJECT",
        description:
          "Two-week assessment: process map, opportunity stack, ROI model, and a prioritised 90-day execution roadmap with named owners.",
      },
      {
        name: "AI Implementation Engagement",
        priceFrom: 14500,
        unitText: "PROJECT",
        description:
          "6-10 week engagement: pick the top 1-2 opportunities from the sprint and ship them — agent, integrations, training, and handover.",
      },
      {
        name: "Fractional AI Lead",
        priceFrom: 5800,
        unitText: "MONTH",
        description:
          "Embedded senior AI lead — 2 days/week, attends your leadership meetings, owns the AI roadmap, ships against it monthly.",
      },
    ],
    features: [
      { name: "AI readiness audit and process mapping" },
      { name: "Use-case prioritisation with ROI modelling" },
      { name: "Vendor and tool evaluation matrix" },
      { name: "Implementation roadmap with named owners" },
      { name: "Hands-on build, not just advisory" },
      { name: "Team enablement and prompt-engineering training" },
    ],
    faqs: [
      {
        question: "How is OARC's AI consulting different from a Big 4 advisory?",
        answer:
          "Big 4 sells the deck. OARC sells the deck plus the team that builds the next phase. The same engineers who run the AI Readiness Sprint also ship the production agents — there is no hand-off to a delivery partner you have never met.",
      },
      {
        question: "What does the AI Readiness Sprint actually deliver?",
        answer:
          "A current-state process map, a stack-ranked list of AI opportunities with effort and ROI estimates, a vendor / tool evaluation matrix, and a 90-day implementation roadmap with named owners and weekly milestones. Usually 25-40 pages, plus a board-ready slide summary.",
      },
      {
        question: "Will you train our team or replace it?",
        answer:
          "Train it. Every engagement includes prompt-engineering and AI-tool workshops for your operators, plus a written playbook so your team can iterate without us. Replacement is a customer choice, not a recommendation.",
      },
      {
        question: "Which industries do you focus on in Malta?",
        answer:
          "Hospitality, iGaming, fintech, professional services (audit, law, compliance), and B2B SaaS. We have shipped agents and AI workflows for clients in each. We deliberately avoid sectors where we lack domain depth.",
      },
      {
        question: "How do you stop AI projects becoming pilots that never ship?",
        answer:
          "We refuse pilots that don't have a named production owner and a go/no-go date. Every Implementation Engagement ends with a live system in production, monitoring set up, and a written runbook — or we don't bill the final invoice.",
      },
      {
        question: "What is the typical investment for a first project?",
        answer:
          "Most Malta SMEs start with the €4,500 AI Readiness Sprint, then approve a €14,500-€38,000 Implementation Engagement once the ROI is signed off internally. Fractional AI Lead retainers are €5,800/mo for 2 days/week of senior time.",
      },
    ],
  },

  "ai-copywriting": {
    title: "AI Copywriting Services Malta | On-Brand Content at Scale | OARC Digital",
    description:
      "AI-assisted copywriting that holds your brand voice — landing pages, email sequences, ad copy, SEO articles. Trained on your tone, edited by humans, shipped weekly.",
    offers: [
      {
        name: "Copy Pack",
        priceFrom: 1450,
        unitText: "PROJECT",
        description:
          "12 assets in 10 working days — landing page, 5 emails, 6 ad variants, all on-brand and conversion-tested.",
      },
      {
        name: "Always-On Copy Retainer",
        priceFrom: 2200,
        unitText: "MONTH",
        description:
          "Continuous content output — blog posts, lifecycle email, ad copy iteration, sales-page tightening — with weekly editorial standup.",
      },
      {
        name: "Brand Voice Engine",
        priceFrom: 4900,
        unitText: "PROJECT",
        description:
          "Codify the brand voice as a reusable system — voice card, prompts, tone-checking GPT, and a do-not-say list — handed over to your team.",
      },
    ],
    features: [
      { name: "On-brand voice training and tone-checking" },
      { name: "Landing page and sales-page copy" },
      { name: "Lifecycle and broadcast email copy" },
      { name: "Ad copy with hook iteration" },
      { name: "SEO long-form articles with research" },
      { name: "Editorial review by senior human copywriter" },
    ],
    faqs: [
      {
        question: "Will the copy actually sound like our brand or like generic AI?",
        answer:
          "Like your brand. Every retainer starts with a voice-card workshop where we capture tone, vocabulary, do-not-say list, and three exemplar pieces of past copy. The AI is prompt-engineered against that, and a senior human editor signs off every published asset.",
      },
      {
        question: "Do you write in Maltese as well as English?",
        answer:
          "We write in English (Malta), British English, and US English natively. Maltese-language copy is hand-written by a Maltese-native editor — we don't trust pure-AI output for Maltese long-form yet.",
      },
      {
        question: "How fast can you turn around copy?",
        answer:
          "Ad copy: 48 hours. Landing pages: 5 working days. Long-form SEO articles (1,500+ words with research): 7-10 working days. Always-On retainers ship continuously through the week.",
      },
      {
        question: "How is this different from just hiring a freelancer?",
        answer:
          "Freelancers are billed per hour and capped at writing speed. The OARC copy pod uses AI as a research, draft, and variation engine, then a senior editor for voice and accuracy. Net result: 4-6x output at the same monthly cost as one senior freelancer.",
      },
      {
        question: "Do you handle SEO content too?",
        answer:
          "Yes. SEO articles are scoped against a target keyword cluster, briefed against the SERP, written, and on-page-optimised before delivery. We handover meta, headings, and internal-link suggestions in the same doc.",
      },
      {
        question: "Who owns the copy and the brand-voice prompts?",
        answer:
          "You do. The voice card, prompts, and any custom GPT are handed over at project close, and we sign IP-assignment terms in the SOW. There is zero lock-in.",
      },
    ],
  },

  "ai-data-analyst": {
    title: "AI Data Analyst | Self-Serve Insights for Malta Businesses | OARC Digital",
    description:
      "An AI data analyst that answers business questions in plain English — pulls from your warehouse, runs the SQL, charts the result, and explains the why. No more two-week BI ticket queues.",
    offers: [
      {
        name: "Insights Pilot",
        priceFrom: 1990,
        unitText: "MONTH",
        description:
          "Single data source (warehouse or product DB), 5 named users, 20 dashboard tiles, weekly insight digest. Set-up included.",
      },
      {
        name: "Team Analyst",
        priceFrom: 4400,
        unitText: "MONTH",
        description:
          "Up to 3 data sources, 25 named users, custom semantic layer, Slack/Teams Q&A, and a monthly executive briefing.",
      },
      {
        name: "Data Platform Build",
        priceFrom: 18000,
        unitText: "PROJECT",
        description:
          "End-to-end build: warehouse (BigQuery / Snowflake / Postgres), dbt models, semantic layer, AI analyst, and analyst training.",
      },
    ],
    features: [
      { name: "Plain-English Q&A over your warehouse" },
      { name: "Auto-generated SQL with provenance" },
      { name: "Semantic layer with business definitions" },
      { name: "Slack and Teams native interfaces" },
      { name: "Scheduled insight digests" },
      { name: "Read-only access — never writes to source data" },
    ],
    faqs: [
      {
        question: "Will it write incorrect SQL and report nonsense?",
        answer:
          "We mitigate this with a semantic layer (every metric has a curated SQL definition), schema-grounded prompting, and an explainability panel that shows the SQL and the source rows for every answer. Hallucination rate in production is under 2%.",
      },
      {
        question: "What data sources do you connect to?",
        answer:
          "Postgres, MySQL, BigQuery, Snowflake, Redshift, Databricks, MongoDB, Stripe, Shopify, HubSpot, Salesforce, Google Analytics 4, and any database with a JDBC driver. Custom connectors typically take 1-3 days.",
      },
      {
        question: "How does this compare to Power BI or Tableau?",
        answer:
          "Power BI and Tableau need a trained analyst to build dashboards. The AI analyst lets non-technical operators ask 'what changed in NPS last week and why' and get a chart plus a written answer in 30 seconds. We integrate with both BI tools, not replace them.",
      },
      {
        question: "Can it write to our database or send invoices?",
        answer:
          "No. Read-only by design — every connection is least-privilege scoped to SELECT only. If write actions are needed (e.g. updating a Salesforce record), they route through the AI Admin Agent or a custom workflow, not the analyst.",
      },
      {
        question: "How long does set-up take?",
        answer:
          "Pilot: 5-10 working days once warehouse credentials are provided. Team Analyst with custom semantic layer: 3-4 weeks. Full Data Platform Build is 8-10 weeks.",
      },
      {
        question: "Is the data ever sent outside the EU?",
        answer:
          "No. EU-region inference is the default — model calls hit Azure OpenAI in West Europe or AWS Bedrock in eu-central-1. Customer data never leaves the EU unless your SOW explicitly requires it.",
      },
    ],
  },

  "ai-real-estate-agent": {
    title: "AI Real Estate Agent | Lead Qualification & Viewing Booker | OARC Digital",
    description:
      "An AI agent for Malta and EU real-estate brands — qualifies portal enquiries, books viewings, follows up cold leads, and hands warm prospects to your sales team with a full conversation history.",
    offers: [
      {
        name: "Listing Qualifier",
        priceFrom: 990,
        unitText: "MONTH",
        description:
          "Portal-feed and inbound web qualification for up to 1,000 leads/month — budget, timeline, financing, intent capture.",
      },
      {
        name: "Sales Agent Assistant",
        priceFrom: 1890,
        unitText: "MONTH",
        description:
          "Adds viewing booking, calendar sync per agent, multi-listing routing, and a CRM-ready briefing on every handoff.",
      },
      {
        name: "Brokerage Pod",
        priceFrom: 4500,
        unitText: "MONTH",
        description:
          "Multi-agent deployment, EN/MT/IT scripting, cold-lead reactivation, and weekly broker performance reports.",
      },
    ],
    features: [
      { name: "Portal lead capture (Frank Salt, Belair, REMAX, Dhalia)" },
      { name: "Budget, timeline, and intent qualification" },
      { name: "Viewing booking with per-agent calendars" },
      { name: "Cold-lead reactivation cadences" },
      { name: "EN / MT / IT bilingual scripting" },
      { name: "CRM handoff with full conversation thread" },
    ],
    faqs: [
      {
        question: "Which Malta real-estate portals can it ingest leads from?",
        answer:
          "Direct integrations with Frank Salt, Belair, REMAX Malta, Dhalia, RE/MAX, Engel & Völkers, and the major property aggregators. Email-piped and webhook-based portals are connected within 48 hours.",
      },
      {
        question: "How does it handle complex viewing requests?",
        answer:
          "It scopes the brief — area, bedrooms, sea view, parking, budget, viewing window — then proposes 3-5 listings, books a viewing slot per listing across multiple agents' calendars, and sends the prep brief to the agent before they arrive.",
      },
      {
        question: "What happens for high-value or international buyers?",
        answer:
          "We tag leads with a value score (e.g. cash buyer above €1.5m, international relocation, citizenship-by-investment intent) and route them to a senior agent immediately, with a full transcript and a recommended next-best action.",
      },
      {
        question: "Can it speak Italian or other EU languages?",
        answer:
          "Out of the box: English, Maltese, Italian, French, German, Spanish, and Russian. Useful given that 40%+ of Malta property enquiries originate outside the islands.",
      },
      {
        question: "Does it integrate with our CRM?",
        answer:
          "Native two-way sync with HubSpot, Salesforce, Pipedrive, Reapit, and Apto. For brokerages on bespoke CRMs, we build a webhook pipe in 1-2 weeks.",
      },
      {
        question: "How long until we see ROI?",
        answer:
          "Most brokerages recover the monthly fee within 30-45 days from after-hours enquiries that previously bounced. The bigger lift is from cold-lead reactivation — typically 8-15% of dormant leads come back to a viewing in the first 90 days.",
      },
    ],
  },

  "ai-revenue-engine": {
    title: "AI Revenue Engine | Outbound, Nurture & Pipeline Automation | OARC Digital",
    description:
      "A full-funnel AI revenue engine: outbound prospecting, inbound qualification, lifecycle nurture, and revenue ops dashboards — wired into your CRM and reporting weekly to your leadership team.",
    offers: [
      {
        name: "Pipeline Engine",
        priceFrom: 3400,
        unitText: "MONTH",
        description:
          "AI SDR + nurture sequences + dashboard build. Aim: double meetings booked from existing pipeline within 90 days.",
      },
      {
        name: "Full-Stack Revenue Engine",
        priceFrom: 7900,
        unitText: "MONTH",
        description:
          "Outbound prospecting, inbound qualification, CRM hygiene, lifecycle email, and a fractional RevOps lead. Quarterly review cadence.",
      },
      {
        name: "Enterprise Revenue Build",
        priceFrom: 28000,
        unitText: "PROJECT",
        description:
          "12-week build of a custom revenue engine — CRM redesign, ICP rebuild, AI agents, and reporting layer — with handover documentation.",
      },
    ],
    features: [
      { name: "Outbound prospecting and ICP matching" },
      { name: "Inbound lead qualification and routing" },
      { name: "Lifecycle and nurture email sequences" },
      { name: "CRM hygiene and pipeline scoring" },
      { name: "Fractional RevOps leadership" },
      { name: "Revenue dashboards with weekly commentary" },
    ],
    faqs: [
      {
        question: "What's the difference between this and just hiring an SDR?",
        answer:
          "An SDR sends 50 messages a day and forgets 30% of follow-ups. The AI Revenue Engine runs the prospecting, qualifies inbound, scores the pipeline, and books the meetings — leaving humans for the calls that close. Most clients replace 1.5-2 SDR roles within 90 days.",
      },
      {
        question: "Which CRMs do you build on?",
        answer:
          "HubSpot, Salesforce, Pipedrive, Close, and Attio. We're CRM-agnostic but opinionated — if your stack is fragmented we will recommend a single source of truth before bolting on more agents.",
      },
      {
        question: "How do you measure success?",
        answer:
          "Three numbers, reported weekly: qualified meetings booked, pipeline created, revenue closed-attributable. Plus a leading-indicator stack (response rate, reply quality, cycle time) that tells us where to iterate next.",
      },
      {
        question: "Does this work for Malta-sized businesses or only large enterprises?",
        answer:
          "Both. The Pipeline Engine is sized for SMEs with €250k-€2m ARR and a small sales team. The Enterprise Revenue Build is for €5m+ ARR businesses where the cost of a 90-day rebuild is justified by the funnel rebuild.",
      },
      {
        question: "How fast does it pay back?",
        answer:
          "Median Pipeline Engine client recovers the monthly fee within 60 days from incremental meetings. Enterprise builds typically pay back inside 9 months on attributable closed revenue.",
      },
      {
        question: "Will the agents sound human?",
        answer:
          "Yes — we voice-train against your top three reps' call recordings and email threads, and gate every outbound message above a confidence threshold. Below the threshold, a human reviewer approves.",
      },
    ],
  },

  "ai-support-specialist": {
    title: "AI Support Specialist | 24/7 Customer Service Agent | OARC Digital",
    description:
      "An AI support agent that resolves 60-80% of tier-one tickets — chat, email, WhatsApp — and hands the rest to your humans with a full transcript and a suggested reply. Trained on your knowledge base.",
    offers: [
      {
        name: "Support Agent Lite",
        priceFrom: 990,
        unitText: "MONTH",
        description:
          "Web chat + email channels, single language, up to 1,000 tickets/month, knowledge-base ingestion included.",
      },
      {
        name: "Support Pod",
        priceFrom: 2400,
        unitText: "MONTH",
        description:
          "Multichannel (chat, email, WhatsApp, FB Messenger), bilingual EN/MT, up to 5,000 tickets/month, CSAT survey + reporting.",
      },
      {
        name: "Enterprise Support",
        priceFrom: 6900,
        unitText: "MONTH",
        description:
          "Custom integrations to your help-desk and order systems, dedicated solutions engineer, SLA on response and tuning.",
      },
    ],
    features: [
      { name: "Knowledge-base grounded responses" },
      { name: "Multi-channel: chat, email, WhatsApp, FB Messenger" },
      { name: "Order / account lookup integrations" },
      { name: "Tone matching and brand voice training" },
      { name: "CSAT capture and reporting" },
      { name: "Human-handoff with full conversation thread" },
    ],
    faqs: [
      {
        question: "What deflection rate should we realistically expect?",
        answer:
          "60-80% of tier-one tickets resolve fully without human involvement after the first 30 days of tuning. The complex 20-40% (refunds, edge cases, angry escalations) get a draft reply, the relevant policy excerpts, and the conversation handed to your team.",
      },
      {
        question: "Will it lie or invent answers?",
        answer:
          "Hallucination is mitigated by retrieval-grounded generation — answers are anchored to your knowledge base, with a confidence score and source citations attached. Below the confidence threshold, the bot hands off rather than guess.",
      },
      {
        question: "How long does training take?",
        answer:
          "Knowledge-base ingestion is 24-48 hours. Voice and policy tuning takes 1-2 weeks of paired QA. Most clients reach steady-state deflection by week 4.",
      },
      {
        question: "Does it integrate with our help-desk?",
        answer:
          "Native connectors for Zendesk, Intercom, Freshdesk, HelpScout, and Front. For bespoke help-desks we build a webhook pipe in 1-2 weeks.",
      },
      {
        question: "What about Malta clients who write in Maltese?",
        answer:
          "Bilingual EN/MT scripting is included in the Support Pod tier. The agent classifies the inbound language and replies in kind. Maltese-only deployments are also available for pure-Maltese audiences.",
      },
      {
        question: "Can it process refunds or change orders?",
        answer:
          "Yes — for read-only lookups by default, write-actions (refund, address change, subscription pause) gated behind policy rules and human approval until trust is established.",
      },
    ],
  },

  "ai-virtual-talent-hub": {
    title: "AI Virtual Talent Hub | Hire AI Employees on Subscription | OARC Digital",
    description:
      "A roster of pre-built AI employees — SDR, support, admin, analyst, copywriter — deployed on a single subscription. Pick the agents your team needs, swap them as priorities change.",
    offers: [
      {
        name: "Single Agent",
        priceFrom: 990,
        unitText: "MONTH",
        description:
          "One AI employee from the roster, fully managed. Includes set-up, weekly tuning, and Slack support.",
      },
      {
        name: "Hub Subscription",
        priceFrom: 2900,
        unitText: "MONTH",
        description:
          "Up to 4 agents from the roster simultaneously, swap any agent each quarter, shared analytics dashboard.",
      },
      {
        name: "Enterprise Hub",
        priceFrom: 7500,
        unitText: "MONTH",
        description:
          "Unlimited agents from the roster + 2 custom-built agents per year, dedicated solutions architect, SLA-backed uptime.",
      },
    ],
    features: [
      { name: "10+ pre-built AI employees" },
      { name: "Single subscription for the whole roster" },
      { name: "Quarterly agent swap-in / swap-out" },
      { name: "Shared analytics across all agents" },
      { name: "Custom agent builds for Enterprise tier" },
      { name: "Dedicated solutions architect" },
    ],
    faqs: [
      {
        question: "Which AI employees are in the roster?",
        answer:
          "AI SDR, Support Specialist, Admin Agent, Data Analyst, Copywriter, Compliance Auditor, Appointment Booker, Real Estate Agent, Funnel Optimisation Agent, and Lead Generation Engine. New roles are added quarterly.",
      },
      {
        question: "Can I swap agents mid-subscription?",
        answer:
          "Yes — Hub Subscription allows one agent swap per quarter at no charge. Need a different agent in March than December? Tell us 30 days ahead, we de-provision the old one and onboard the new one.",
      },
      {
        question: "How is this different from buying single-purpose AI tools?",
        answer:
          "One contract, one team, one analytics layer. Single-purpose tools (Drift, Intercom Fin, Lindy, Relevance) each charge separately and integrate poorly. The Talent Hub is operated as a single managed service so the agents share context and your team has one point of contact.",
      },
      {
        question: "Do you handle the setup and tuning, or do we?",
        answer:
          "We do — every Hub subscription includes weekly tuning, prompt iteration, and quarterly business reviews. Your team focuses on the work, not on prompt engineering.",
      },
      {
        question: "Where is the data hosted?",
        answer:
          "EU-region only by default — Azure OpenAI West Europe or AWS Bedrock eu-central-1. SOC 2-aligned controls, customer-held encryption keys available on Enterprise tier.",
      },
      {
        question: "What if we need an agent that isn't in the roster?",
        answer:
          "Enterprise Hub includes 2 custom-built agents per year. Hub Subscription clients can commission a custom build at €4,500 per agent on a project basis.",
      },
    ],
  },

  "api-integration": {
    title: "API Integration Services Malta | Connect Your Stack | OARC Digital",
    description:
      "Engineered API integrations between your CRM, ERP, e-commerce, and finance stack — with retries, observability, and error alerting. Ship in weeks, not quarters.",
    offers: [
      {
        name: "Single Integration",
        priceFrom: 2400,
        unitText: "PROJECT",
        description:
          "One direction (e.g. Stripe → Xero) with retries, idempotency, and a monitoring dashboard. Live in 10 working days.",
      },
      {
        name: "Integration Pack",
        priceFrom: 8900,
        unitText: "PROJECT",
        description:
          "Up to 5 integrations, shared queue and observability layer, written runbooks, 30 days of post-launch hypercare.",
      },
      {
        name: "Integration Platform",
        priceFrom: 24000,
        unitText: "PROJECT",
        description:
          "Build a thin internal integration platform on n8n, Workato, or custom Node — re-usable transforms, secret vault, alerting.",
      },
    ],
    features: [
      { name: "Idempotent and retry-safe by default" },
      { name: "Webhook receiver and replay infrastructure" },
      { name: "Secrets vault and least-privilege scopes" },
      { name: "Observability dashboard and PagerDuty alerts" },
      { name: "Runbook for ops handover" },
      { name: "EU-only data routing for GDPR" },
    ],
    faqs: [
      {
        question: "What systems do you typically integrate?",
        answer:
          "Stripe, Xero, QuickBooks, HubSpot, Salesforce, Pipedrive, Shopify, WooCommerce, NetSuite, Zoho, Google Workspace, Microsoft 365, Mailchimp, Klaviyo, and any platform with a public REST or GraphQL API. Custom protocols (SOAP, SFTP, EDI) handled on request.",
      },
      {
        question: "How do you handle failed API calls?",
        answer:
          "Every integration is idempotent and retry-safe. Failed calls go to a dead-letter queue, get exponential-backoff retries, and alert PagerDuty if they exceed thresholds. We don't ship integrations that 'usually work'.",
      },
      {
        question: "Do you build on iPaaS platforms or custom code?",
        answer:
          "Both, depending on volume. Under 100k events/month: n8n, Make, or Zapier. Above that: custom Node.js workers or a managed iPaaS like Workato. We pick on cost-per-event and observability needs, not vendor preference.",
      },
      {
        question: "What about GDPR and data residency?",
        answer:
          "All integrations route data through EU-region infrastructure by default. PII fields are tokenised in transit and encrypted at rest. We sign a DPA before any integration that touches customer data.",
      },
      {
        question: "How long does a typical integration take?",
        answer:
          "Single-direction (e.g. Stripe → Xero): 10 working days. Bi-directional with conflict resolution: 3-4 weeks. Integration platform builds: 8-12 weeks.",
      },
      {
        question: "Who owns the code?",
        answer:
          "You do — full source on your GitHub or GitLab from day one, with a written handover doc and an optional 6-month support retainer for tuning.",
      },
    ],
  },

  "api-integration-services": {
    title: "API Integration Services | Production-Grade Stack Wiring | OARC Digital",
    description:
      "Production-grade API integration delivery for Malta SMEs and EU SaaS — webhooks, retries, secrets management, and observability included. Built to outlast the original engineer.",
    offers: [
      {
        name: "Discovery + Build",
        priceFrom: 3900,
        unitText: "PROJECT",
        description:
          "1-week discovery (architecture, contracts, edge-case mapping) + 2-week build for a single integration with full test coverage.",
      },
      {
        name: "Integration Hardening",
        priceFrom: 6500,
        unitText: "PROJECT",
        description:
          "Take an existing brittle integration, add retries, monitoring, alerts, and a runbook. 3-4 week engagement.",
      },
      {
        name: "Integration Retainer",
        priceFrom: 2400,
        unitText: "MONTH",
        description:
          "1 day/week of senior integration engineering — bug fixes, new connectors, monitoring tuning, on-call backup.",
      },
    ],
    features: [
      { name: "Architecture and contract design" },
      { name: "Webhook ingestion and replay" },
      { name: "Idempotency keys and dedupe layers" },
      { name: "Datadog / Sentry / Better Stack integration" },
      { name: "Written runbooks and handover docs" },
      { name: "EU-region hosting by default" },
    ],
    faqs: [
      {
        question: "How is this different from /services/api-integration?",
        answer:
          "/services/api-integration is the project-shaped offer (single connectors, integration packs). This page is the production-engineering view — discovery + hardening + retainer for teams who already know what to build but want senior integration craftsmanship.",
      },
      {
        question: "Do you take over existing brittle integrations?",
        answer:
          "Yes. Most engagements start with a 1-week audit of the current integration: identify silent failures, missing retries, lack of idempotency, missing alerts. We then ship a hardened version inside 3-4 weeks.",
      },
      {
        question: "What observability stack do you use?",
        answer:
          "Datadog, Sentry, Better Stack, or whatever your team is on. We do not ship integrations without observability — silent failure is the cost driver in most broken integrations we audit.",
      },
      {
        question: "Can you support our existing on-call rotation?",
        answer:
          "Yes — Integration Retainer clients get on-call backup with a documented escalation policy. Most months we never get paged, but the option is there.",
      },
      {
        question: "Which platforms are most common in your work?",
        answer:
          "Stripe ↔ Xero / QuickBooks for finance ops, HubSpot ↔ Salesforce ↔ NetSuite for go-to-market, Shopify ↔ ERP for e-commerce, and CRM ↔ AI agents for revenue automation.",
      },
      {
        question: "Where are you based?",
        answer:
          "Birkirkara, Malta. We work CET hours and partner with Malta-based ISVs and EU SaaS scaleups.",
      },
    ],
  },

  "creative": {
    title: "Creative Services Malta | Concept, Production & Performance | OARC Digital",
    description:
      "Brand, content, and performance creative under one roof — campaign concepting, studio production, motion design, and always-on ad creative. Built in Malta, deployed across the EU.",
    offers: [
      {
        name: "Campaign Sprint",
        priceFrom: 6500,
        unitText: "PROJECT",
        description:
          "Full campaign — concept, copy, design, motion, photography. 4-6 week sprint, ready-to-publish across paid and owned.",
      },
      {
        name: "Creative Retainer",
        priceFrom: 4500,
        unitText: "MONTH",
        description:
          "Always-on creative output — ad creative, social content, landing-page design, brand-guideline upkeep. Weekly editorial review.",
      },
      {
        name: "Studio Day",
        priceFrom: 3900,
        unitText: "PROJECT",
        description:
          "On-location or in-studio shoot in Malta — talent, props, lighting, hair / makeup, post — for 30+ ad-ready assets in 8 hours.",
      },
    ],
    features: [
      { name: "Brand and campaign concepting" },
      { name: "Studio and on-location photography" },
      { name: "Motion design and ad video editing" },
      { name: "Performance creative for paid social" },
      { name: "Landing-page and conversion design" },
      { name: "Maltese / English bilingual production" },
    ],
    faqs: [
      {
        question: "What size of business do you usually work with?",
        answer:
          "Mid-market and growth-stage clients — typically €1m-€100m revenue — across iGaming, hospitality, fintech, B2B SaaS, and DTC e-commerce. Smaller brands go through our project-shaped Creative Sprint, larger ones use the always-on retainer.",
      },
      {
        question: "Do you produce in-house or outsource?",
        answer:
          "In-house. We have full-time concept, copy, design, motion, and photography talent based in Malta, with a vetted freelancer bench for surge work. No mystery overseas team.",
      },
      {
        question: "How does the campaign sprint differ from the retainer?",
        answer:
          "The sprint is a 4-6 week burst — one big idea, fully produced, fully shipped. The retainer is always-on continuous output — weekly drops of ads, social, and landing pages tuned to whatever the marketing team is testing this month.",
      },
      {
        question: "Can you work alongside our in-house creative team?",
        answer:
          "Yes — many clients use OARC for performance creative volume while their in-house team handles brand. We share Notion / Frame.io / Drive workflows, attend stand-ups, and version everything against a shared brand book.",
      },
      {
        question: "Where do studio shoots happen?",
        answer:
          "Our studio in Birkirkara, on-location anywhere in Malta or Gozo, or at client premises. Talent casting, props, lighting, and hair / makeup are all coordinated by a producer.",
      },
      {
        question: "What deliverables do we get?",
        answer:
          "Project-versioned in Frame.io and Drive — every cut, every static, every aspect ratio, plus brand-blocked exports for each platform. Ownership of all assets transfers on payment.",
      },
    ],
  },

  "custom-software-development": {
    title: "Custom Software Development Malta | Bespoke Apps & Platforms | OARC Digital",
    description:
      "Custom software for Malta-based and EU SMEs — TypeScript, Python, and cloud-native platforms. Discovery, build, hardening, and a clean code handover. EU-hosted, GDPR-clean.",
    offers: [
      {
        name: "Discovery Sprint",
        priceFrom: 4900,
        unitText: "PROJECT",
        description:
          "2-week paid discovery — written spec, ER diagram, API contracts, and a fixed-price proposal for the build phase.",
      },
      {
        name: "Custom Build",
        priceFrom: 28000,
        unitText: "PROJECT",
        description:
          "Bespoke web platform or internal app — auth, multi-tenant data, integrations, monitoring. 8-14 week timeline.",
      },
      {
        name: "Engineering Retainer",
        priceFrom: 4900,
        unitText: "MONTH",
        description:
          "1-2 senior engineers post-launch — feature work, performance tuning, platform upgrades, on-call backup.",
      },
    ],
    features: [
      { name: "TypeScript / Node.js / Python stack" },
      { name: "PostgreSQL, MongoDB, and managed warehouse data" },
      { name: "Auth0, Clerk, Auth.js identity options" },
      { name: "EU-region hosting (Vercel, AWS, Render)" },
      { name: "Sentry + PostHog observability" },
      { name: "Full IP and source-code ownership" },
    ],
    faqs: [
      {
        question: "How is this different from /services/saas-development?",
        answer:
          "SaaS Development is for founders building a paid SaaS product. Custom Software Development is broader — internal tools, B2B platforms, marketplaces, integration layers. Same engineering team, different outcome shape.",
      },
      {
        question: "What's the minimum project size?",
        answer:
          "We start at the €4,900 Discovery Sprint. Most clients then approve a €28,000-€120,000 Custom Build phase. Below €15k of effective build work we will refer you to a freelancer or no-code builder rather than overcharge.",
      },
      {
        question: "Do you work fixed-price or time and materials?",
        answer:
          "Fixed-price for the Discovery Sprint and the initial build (because the spec is locked). Engineering Retainer is time-and-materials by week, capped at the agreed monthly hours.",
      },
      {
        question: "How do you handle GDPR for Malta clients?",
        answer:
          "EU-region hosting by default — Vercel eu-west-1, AWS eu-central-1, or Render Frankfurt. We document the data-flow diagram in week one for your DPIA. Customer data does not leave the EU unless your spec specifically requires it.",
      },
      {
        question: "What happens if the project changes mid-build?",
        answer:
          "Scope changes get a written change request with effort and cost. We never silently absorb scope or silently descope — both are bad for trust and bad for the codebase.",
      },
      {
        question: "Where are your engineers based?",
        answer:
          "All senior engineers are EU-based, with the lead team in Malta and a vetted bench in Spain, Portugal, and Poland. CET working hours, English-first communication, no offshore handoffs.",
      },
    ],
  },

  "customer-acquisition": {
    title: "Customer Acquisition Services Malta | Full-Funnel Growth | OARC Digital",
    description:
      "Full-funnel customer acquisition for Malta and EU brands — paid ads, SEO, lifecycle email, and AI agents — wired to a single attribution model. Reported as cost-per-acquired-customer, not vanity metrics.",
    offers: [
      {
        name: "Acquisition Audit",
        priceFrom: 2400,
        unitText: "PROJECT",
        description:
          "2-week audit of every acquisition channel, attribution model, and funnel step. Output: a 90-day acquisition roadmap.",
      },
      {
        name: "Acquisition Retainer",
        priceFrom: 4900,
        unitText: "MONTH",
        description:
          "Multi-channel acquisition delivery — paid ads, SEO, lifecycle email, landing-page testing — with weekly CPA reporting.",
      },
      {
        name: "Growth Engine Build",
        priceFrom: 18000,
        unitText: "PROJECT",
        description:
          "12-week build of a unified acquisition engine — attribution, AI agents, lifecycle automation, dashboards — handed over to your team.",
      },
    ],
    features: [
      { name: "Multi-channel paid acquisition" },
      { name: "SEO and content distribution" },
      { name: "Lifecycle and broadcast email" },
      { name: "Landing-page and offer testing" },
      { name: "Attribution and CPA reporting" },
      { name: "AI agents for qualification and nurture" },
    ],
    faqs: [
      {
        question: "How do you measure customer acquisition success?",
        answer:
          "Cost-per-acquired-customer (CPA) and contribution margin per cohort. Vanity metrics like impressions and clicks appear in dashboards but never drive decisions — only paying customers do.",
      },
      {
        question: "Which channels do you focus on?",
        answer:
          "Channel-agnostic. We audit which channels match your ICP and unit economics, then concentrate spend where CPA × LTV pencils out. For Malta SMEs that's typically Meta + Google, plus SEO; for EU SaaS it often skews to LinkedIn + outbound.",
      },
      {
        question: "Will you replace our internal marketing team?",
        answer:
          "Augment, not replace. Most clients keep brand and content in-house and use OARC for paid acquisition, attribution, and the AI agent layer. Hand-offs go through Notion / Slack / Drive.",
      },
      {
        question: "How long until we see CPA come down?",
        answer:
          "Attribution clean-up in week 1-2 typically lifts measured ROI by 15-25% (you stop double-counting). Real CPA reductions land in months 2-4 once test budgets identify the channel and creative winners.",
      },
      {
        question: "What's the minimum monthly ad spend you work with?",
        answer:
          "€8k/mo paid spend for the Acquisition Retainer to make sense — below that, the management fee is a disproportionate share of cost. Smaller brands start with the Acquisition Audit.",
      },
      {
        question: "Do you provide attribution dashboards?",
        answer:
          "Yes — built in Looker Studio, Hex, or your existing BI tool. Weekly commentary is included; we explain what changed, not just what the number is.",
      },
    ],
  },

  "customer-acquisition-accelerator": {
    title: "Customer Acquisition Accelerator | 90-Day CPA Sprint | OARC Digital",
    description:
      "A 90-day acquisition sprint to compress CAC and unlock the next channel. Audit, rebuild, test, scale — with a written playbook handed to your team at the end.",
    offers: [
      {
        name: "Acceleration Sprint",
        priceFrom: 14500,
        unitText: "PROJECT",
        description:
          "90 days, fixed scope: channel audit, attribution rebuild, 8 creative iterations, landing-page test program. Aim: 30%+ CPA improvement.",
      },
      {
        name: "Acceleration + AI",
        priceFrom: 22500,
        unitText: "PROJECT",
        description:
          "Sprint plus AI SDR + AI nurture deployment. Aim: incremental qualified meetings on top of CPA improvement.",
      },
      {
        name: "Post-Sprint Retainer",
        priceFrom: 3900,
        unitText: "MONTH",
        description:
          "After the sprint — keep the test cadence running, monthly experimentation board, quarterly business review.",
      },
    ],
    features: [
      { name: "90-day fixed-scope program" },
      { name: "Attribution rebuild" },
      { name: "Creative iteration and testing" },
      { name: "Landing-page test program" },
      { name: "Lifecycle automation upgrade" },
      { name: "Documented playbook hand-over" },
    ],
    faqs: [
      {
        question: "How is this different from the standard Acquisition Retainer?",
        answer:
          "The Accelerator is fixed-scope, fixed-price, time-boxed to 90 days, and ends with a written playbook hand-over. The Retainer is open-ended ongoing delivery. Most clients run the Accelerator first, then move to the Retainer if the team wants ongoing OARC support.",
      },
      {
        question: "What if our CPA doesn't improve?",
        answer:
          "We commit to a target CPA improvement in the SOW. If we miss it by more than 10%, the final invoice gets a credit note. Hasn't happened in the last six engagements, but the commitment is real.",
      },
      {
        question: "Can you work with our existing media buyer?",
        answer:
          "Yes. The Accelerator brings creative iteration, attribution, and landing-page testing — which complements an in-house buyer. We share a Slack channel and a weekly playback meeting.",
      },
      {
        question: "Is this suitable for B2B SaaS or only DTC?",
        answer:
          "Both. For DTC the focus is paid social CPA + email LTV. For B2B SaaS the focus is qualified meeting cost + SQL conversion rate. Same playbook, different metrics.",
      },
      {
        question: "What ad budget do you recommend?",
        answer:
          "Minimum €15k/mo media spend during the sprint to generate enough learning. Below that, creative tests are statistically slow. Above €100k/mo, we run multiple parallel ad sets.",
      },
      {
        question: "What does the playbook contain?",
        answer:
          "Attribution model, top creative angles, top hooks, top landing pages, lifecycle email cadence, audience exclusion lists, and a written run-book your team can execute alone after the sprint.",
      },
    ],
  },

  "design-systems": {
    title: "Design Systems Malta | Figma Libraries & Coded Tokens | OARC Digital",
    description:
      "Design systems that ship — Figma component libraries, coded design tokens, Storybook documentation, and adoption support across product and marketing teams.",
    offers: [
      {
        name: "Lite Design System",
        priceFrom: 6500,
        unitText: "PROJECT",
        description:
          "Foundations + 25 components, Figma library, design tokens (W3C), Tailwind / CSS export. 4-week build.",
      },
      {
        name: "Production Design System",
        priceFrom: 16500,
        unitText: "PROJECT",
        description:
          "60+ components, accessibility audit, Storybook, multi-brand theming, governance docs. 8-12 week build.",
      },
      {
        name: "Design System Retainer",
        priceFrom: 2900,
        unitText: "MONTH",
        description:
          "Maintenance, new components, version releases, adoption support, quarterly health audits.",
      },
    ],
    features: [
      { name: "Figma component libraries" },
      { name: "W3C design tokens (color, type, spacing, motion)" },
      { name: "Tailwind / CSS / iOS / Android exports" },
      { name: "WCAG 2.1 AA accessibility audit" },
      { name: "Storybook documentation" },
      { name: "Multi-brand theming support" },
    ],
    faqs: [
      {
        question: "Who needs a design system?",
        answer:
          "Companies with two or more product surfaces (web app, mobile, marketing site), more than three designers or front-end engineers, or a recent rebrand that needs to roll out consistently. Below that scale, a Figma library is enough.",
      },
      {
        question: "Figma + Tailwind — is that the only stack you support?",
        answer:
          "It's our default. We also export to vanilla CSS, CSS variables, SwiftUI, Jetpack Compose, and React Native. Token format follows the W3C Design Tokens spec so you can plug into any pipeline.",
      },
      {
        question: "How do you ensure adoption inside the company?",
        answer:
          "Adoption is a workstream, not a hope. We pair design and engineering for the first migration, run a launch workshop, write a migration playbook, and track component usage in Figma + code via the analytics layer.",
      },
      {
        question: "Can you migrate our existing components?",
        answer:
          "Yes. The Production Design System engagement includes an audit of existing components, a consolidation plan, and a phased migration. Most clients reach 80% adoption inside 90 days post-launch.",
      },
      {
        question: "What about accessibility?",
        answer:
          "Every component ships with a WCAG 2.1 AA audit, keyboard navigation, ARIA roles, and contrast tokens. Higher conformance (AAA, EU EAA-aligned) is available on request.",
      },
      {
        question: "Where is the team based?",
        answer:
          "Lead designers and engineers are Malta-based; specialised contributors (motion, accessibility, iOS/Android tokens) are EU-based. CET working hours, English-first communication.",
      },
    ],
  },

  "digital-marketing": {
    title: "Digital Marketing Services Malta | Multi-Channel Growth | OARC Digital",
    description:
      "Digital marketing for Malta SMEs — paid social, SEO, content, lifecycle, and AI automation under one roof. Reported as revenue contribution, not impressions.",
    offers: [
      {
        name: "Marketing Audit",
        priceFrom: 1900,
        unitText: "PROJECT",
        description:
          "2-week audit of every marketing channel, attribution model, and creative output. Output: a 90-day execution roadmap.",
      },
      {
        name: "Growth Retainer",
        priceFrom: 3900,
        unitText: "MONTH",
        description:
          "Multi-channel marketing delivery — paid, SEO, content, lifecycle email — with weekly reporting and quarterly strategy reviews.",
      },
      {
        name: "Fractional CMO",
        priceFrom: 5800,
        unitText: "MONTH",
        description:
          "Senior marketing leadership 2 days/week — strategy, team coaching, vendor management, board-level reporting.",
      },
    ],
    features: [
      { name: "Multi-channel paid acquisition" },
      { name: "SEO and content production" },
      { name: "Lifecycle and broadcast email" },
      { name: "Conversion-rate optimisation" },
      { name: "Marketing automation" },
      { name: "Quarterly strategy reviews" },
    ],
    faqs: [
      {
        question: "How is this different from /aeo/digital-marketing-agency-malta?",
        answer:
          "The /aeo page is a Malta-search landing page for buyers searching 'digital marketing agency Malta'. This /services page is the capability detail — the actual offering, pricing, and deliverables. Both link to each other; they serve different intents.",
      },
      {
        question: "What's a typical Malta SME engagement size?",
        answer:
          "€3,900-€8,500/mo retainer plus media spend, for businesses doing €1m-€20m revenue. Smaller brands often start with the Marketing Audit then commission specific projects (paid, SEO, or email) as standalone engagements.",
      },
      {
        question: "Do you handle Maltese-language content?",
        answer:
          "Yes. We have Maltese-native copy and content production, useful for hospitality, retail, and political-comms clients. Most performance creative ships in English-Malta variants because most ad audiences code-switch.",
      },
      {
        question: "Will you replace our internal marketing team?",
        answer:
          "No — augment. We typically run the channels and analytics; clients keep brand, PR, and senior comms in-house. Fractional CMO clients get senior leadership without an in-house hire.",
      },
      {
        question: "What reporting cadence do you provide?",
        answer:
          "Weekly performance dashboards, monthly written commentary, quarterly business reviews. Fractional CMO clients get board-ready monthly decks.",
      },
      {
        question: "How long are typical contracts?",
        answer:
          "30-day rolling, 90-day minimum. We'd rather earn the retention than lock you in. Fractional CMO is 6-month minimum because senior leadership effectiveness compounds.",
      },
    ],
  },

  "email-creative": {
    title: "Email Creative Services Malta | Lifecycle, Broadcast & Transactional | OARC Digital",
    description:
      "Email creative that converts — lifecycle journeys, broadcast campaigns, and transactional templates. Designed in MJML, tested across 30+ inboxes, deployed via Klaviyo, HubSpot, or your ESP of choice.",
    offers: [
      {
        name: "Email Foundation",
        priceFrom: 3900,
        unitText: "PROJECT",
        description:
          "Brand templates + 6 lifecycle automations (welcome, abandon, post-purchase, win-back) — designed, coded, tested, deployed.",
      },
      {
        name: "Always-On Email Pod",
        priceFrom: 2900,
        unitText: "MONTH",
        description:
          "4 broadcast campaigns + 2 lifecycle iterations / month, A/B testing, deliverability monitoring.",
      },
      {
        name: "Lifecycle Engine Build",
        priceFrom: 8500,
        unitText: "PROJECT",
        description:
          "12+ automations across new-customer, retention, win-back, VIP, post-purchase. Includes segmentation strategy.",
      },
    ],
    features: [
      { name: "MJML / responsive HTML coding" },
      { name: "30+ inbox / device QA" },
      { name: "Lifecycle automation design" },
      { name: "Broadcast campaign creative" },
      { name: "Klaviyo / HubSpot / Mailchimp deployment" },
      { name: "Deliverability monitoring" },
    ],
    faqs: [
      {
        question: "Which ESP do you build on?",
        answer:
          "Klaviyo for e-commerce, HubSpot for B2B, Customer.io and Iterable for SaaS, Mailchimp / Brevo for SMEs. We're ESP-agnostic but opinionated on stack-fit per business model.",
      },
      {
        question: "Do you handle deliverability and warm-up?",
        answer:
          "Yes — DKIM, SPF, DMARC set-up, IP warm-up plans for new sending domains, and ongoing monitoring of inbox placement using Postmaster Tools and Glock Apps.",
      },
      {
        question: "How does the always-on pod work?",
        answer:
          "Each month you get 4 broadcast campaigns and 2 lifecycle iterations. We agree the editorial calendar at the start of each month, and ship through the month with weekly check-ins. Surge capacity (e.g. Black Friday) is quoted separately.",
      },
      {
        question: "Can you write the email copy too or do you just design?",
        answer:
          "Both. Copy + design + code + deployment is the standard scope. If you have an in-house copywriter, we can scope design + code + deployment only at a reduced retainer.",
      },
      {
        question: "What about Maltese-language email campaigns?",
        answer:
          "Maltese-native copy is available for retail, hospitality, and B2C campaigns. Most retainers ship EN/MT bilingual variants where useful.",
      },
      {
        question: "What's your average lift on lifecycle automations?",
        answer:
          "Typical Foundation engagements lift email-attributed revenue 18-35% within 90 days, mostly from Welcome + Abandon + Post-Purchase flows that didn't exist or were template-only.",
      },
    ],
  },

  "funnel-automation": {
    title: "Funnel Automation Services Malta | End-to-End Conversion Engineering | OARC Digital",
    description:
      "Wire your funnel from ad click to closed deal — landing pages, lifecycle email, AI qualification, and CRM hand-off. Tested weekly, reported as conversion rate per stage.",
    offers: [
      {
        name: "Funnel Audit",
        priceFrom: 1800,
        unitText: "PROJECT",
        description:
          "2-week audit: every funnel stage measured, friction points named, top-3 fix list with effort estimates.",
      },
      {
        name: "Funnel Build",
        priceFrom: 9500,
        unitText: "PROJECT",
        description:
          "Full funnel rebuild — ads, landing, lifecycle email, AI qualification, CRM. 6-8 week sprint with weekly demos.",
      },
      {
        name: "Funnel Retainer",
        priceFrom: 2900,
        unitText: "MONTH",
        description:
          "Ongoing iteration — A/B tests, lifecycle tweaks, AI agent tuning, weekly performance reviews.",
      },
    ],
    features: [
      { name: "Funnel-stage instrumentation" },
      { name: "Landing-page A/B testing" },
      { name: "Lifecycle email automation" },
      { name: "AI lead qualification" },
      { name: "CRM pipeline routing" },
      { name: "Weekly conversion-rate reporting" },
    ],
    faqs: [
      {
        question: "What does 'funnel automation' actually mean for OARC?",
        answer:
          "Every step from ad click to closed deal is instrumented, automated where reasonable, and continuously tested. Lead form → enrichment → AI qualification → meeting booking → CRM stage → hand-off — all of it wired and reported.",
      },
      {
        question: "How is this different from marketing automation?",
        answer:
          "Marketing automation usually means email sequences. Funnel automation includes the email layer plus the qualification logic, the CRM routing, the AI agents, and the dashboards. It's a stack-wide engineering job, not just an ESP configuration.",
      },
      {
        question: "Which CRMs and tools do you integrate?",
        answer:
          "HubSpot, Salesforce, Pipedrive, Close, Attio for CRM; Klaviyo, Customer.io, HubSpot for email; Stripe / Chargebee for billing; Calendly / Cal.com for booking; Slack / Teams for notifications.",
      },
      {
        question: "What's a typical conversion-rate lift after a funnel build?",
        answer:
          "Median lift: 35-60% across the full funnel within 90 days, typically dominated by the qualification step (AI agent) and the booking step (no-show recovery). Reported per stage so you can see where the gain came from.",
      },
      {
        question: "Do you provide the underlying CRM and ESP licenses?",
        answer:
          "No — you license direct from the vendors so you own the data and can leave OARC at any time without re-platforming. We don't take vendor commissions either.",
      },
      {
        question: "How quickly does a Funnel Build go live?",
        answer:
          "6-8 weeks end-to-end, with the first instrumentation and quick-wins (forms, routing, immediate AI qualification) live in week 2-3. Full lifecycle email and dashboards land in week 6-8.",
      },
    ],
  },

  "funnel-optimization-agent": {
    title: "Funnel Optimization Agent | Continuous Conversion-Rate AI | OARC Digital",
    description:
      "An AI agent that watches every funnel step, runs hypotheses, and ships micro-tests — every week — so your conversion rate compounds without an in-house CRO team.",
    offers: [
      {
        name: "CRO Agent Pilot",
        priceFrom: 1490,
        unitText: "MONTH",
        description:
          "Single funnel monitored, 2 tests / week, weekly summary report. Set-up included.",
      },
      {
        name: "CRO Agent Pro",
        priceFrom: 2900,
        unitText: "MONTH",
        description:
          "Up to 3 funnels, 6 tests / week, dashboard access, monthly executive briefing.",
      },
      {
        name: "Embedded CRO",
        priceFrom: 5900,
        unitText: "MONTH",
        description:
          "Agent + a senior CRO consultant 1 day / week — strategy, hypothesis backlog, test prioritisation.",
      },
    ],
    features: [
      { name: "Funnel-stage anomaly detection" },
      { name: "Hypothesis generation and prioritisation" },
      { name: "Micro-test deployment via VWO / Optimizely" },
      { name: "Heatmap + session replay analysis" },
      { name: "Weekly performance summaries" },
      { name: "ROI attribution per test" },
    ],
    faqs: [
      {
        question: "Does the agent actually deploy tests or just suggest them?",
        answer:
          "Both, depending on the test risk. Copy / image / button tests deploy automatically via VWO, Optimizely, or your A/B platform. Layout or page-structure tests require human approval — the agent drafts the test plan, your team approves, the agent ships.",
      },
      {
        question: "What's the test cadence?",
        answer:
          "CRO Agent Pilot ships 2 tests/week per funnel. Pro tier ships 6/week across up to 3 funnels. Tests run for statistical significance (typically 7-14 days), winners promoted, losers rolled back.",
      },
      {
        question: "How does it generate hypotheses?",
        answer:
          "Three sources: (1) anomaly detection on funnel-stage drop-off, (2) heatmap and session-replay analysis from Hotjar / FullStory, (3) a curated CRO hypothesis library mapped to industry and funnel stage. The agent stack-ranks them by expected ROI.",
      },
      {
        question: "What if a test goes badly?",
        answer:
          "Auto-rollback if the test variant underperforms by more than 10% with statistical significance. The losing test is logged with the hypothesis and the failure mode so the backlog learns.",
      },
      {
        question: "Which platforms does it integrate with?",
        answer:
          "VWO, Optimizely, Convert, Google Optimize successor (or your own A/B framework), Hotjar, FullStory, Heap, and the major CMS platforms (WordPress, Webflow, Shopify, Next.js with Vercel Edge Config).",
      },
      {
        question: "How much CRO team experience do we need internally?",
        answer:
          "None for the Pilot — the agent + OARC review handle it. For the Pro and Embedded tiers, a marketing or product lead acts as the approval point on bigger tests, typically 1-2 hours/week.",
      },
    ],
  },

  "growth-strategy": {
    title: "Growth Strategy Consulting | Compound Acquisition Plans | OARC Digital",
    description:
      "Senior growth strategy for Malta and EU SMEs — ICP rebuild, channel selection, GTM motion design, and a 12-month compounding plan. Strategy that gets executed, not stuck on a slide.",
    offers: [
      {
        name: "Growth Diagnostic",
        priceFrom: 4500,
        unitText: "PROJECT",
        description:
          "3-week diagnostic: ICP, channel-mix, funnel economics, retention, and a prioritised 12-month growth roadmap.",
      },
      {
        name: "Growth OS Build",
        priceFrom: 18000,
        unitText: "PROJECT",
        description:
          "Operating system for growth — metrics tree, weekly cadence, experiment backlog, RACI, dashboards. 8-week build.",
      },
      {
        name: "Fractional Head of Growth",
        priceFrom: 6500,
        unitText: "MONTH",
        description:
          "Senior leadership 2 days/week — owns the growth roadmap, attends leadership meetings, ships against the plan.",
      },
    ],
    features: [
      { name: "ICP and segment definition" },
      { name: "Channel selection and economics modelling" },
      { name: "GTM motion design (PLG, sales-led, hybrid)" },
      { name: "Metrics tree and growth dashboards" },
      { name: "Experiment backlog and prioritisation" },
      { name: "Quarterly business reviews with leadership" },
    ],
    faqs: [
      {
        question: "When does growth strategy actually pay off?",
        answer:
          "Inside 90 days you should see clearer focus, a working metrics tree, and an experiment cadence in motion. Material acquisition / retention lift typically lands in months 4-9 — strategy compounds, it doesn't pop.",
      },
      {
        question: "How does this differ from /services/digital-marketing?",
        answer:
          "Digital Marketing is execution — running the channels, shipping the creative. Growth Strategy is the layer above — what to invest in, why, and how to measure. Most clients run both, often with the same team.",
      },
      {
        question: "Do you actually do strategy or just pitch slides?",
        answer:
          "The Growth Diagnostic ships a written 30-50 page report plus a metrics-tree spreadsheet plus a 90-day execution roadmap with named owners. The Growth OS Build leaves a permanent operating cadence behind. The Fractional Head of Growth runs it with you every week.",
      },
      {
        question: "What size of business is this for?",
        answer:
          "€1m-€50m revenue companies — large enough that strategic clarity is high-leverage, small enough that a Big-4 strategy engagement is overkill. Below €500k revenue, you're better served by the Marketing Audit.",
      },
      {
        question: "Is this Malta-only or EU-wide?",
        answer:
          "EU-wide. About half of growth-strategy clients are Malta-based; the rest are scaleups in Ireland, the UK, Spain, Portugal, and the DACH region with EU GTM ambitions.",
      },
      {
        question: "Do you guarantee growth?",
        answer:
          "No reputable growth advisor will. We do guarantee the deliverables, the cadence, and a quarterly business review with our lead partner. If we miss those, the next month is on us.",
      },
    ],
  },

  "hire-ai-employees": {
    title: "Hire AI Employees | Roster of Pre-Built AI Agents | OARC Digital",
    description:
      "Hire AI employees — SDR, support, admin, analyst, and more — on a single subscription. Onboarded in days, managed by us, swap-able as your priorities change.",
    offers: [
      {
        name: "Single AI Hire",
        priceFrom: 990,
        unitText: "MONTH",
        description:
          "Pick one AI employee from the roster, fully managed, with set-up, weekly tuning, and on-call support.",
      },
      {
        name: "AI Team",
        priceFrom: 2900,
        unitText: "MONTH",
        description:
          "Up to 4 AI employees from the roster simultaneously, swap any one each quarter, shared analytics dashboard.",
      },
      {
        name: "AI Workforce",
        priceFrom: 7500,
        unitText: "MONTH",
        description:
          "Unlimited roster access + 2 custom-built agents per year, dedicated solutions architect, SLA-backed uptime.",
      },
    ],
    features: [
      { name: "10+ pre-built AI roles" },
      { name: "Single subscription for the team" },
      { name: "Quarterly role swap-in / swap-out" },
      { name: "Shared analytics across agents" },
      { name: "Custom-built roles (Workforce tier)" },
      { name: "EU-region inference and data residency" },
    ],
    faqs: [
      {
        question: "Which AI employees are available?",
        answer:
          "AI SDR, AI Support Specialist, AI Admin Agent, AI Data Analyst, AI Copywriter, AI Compliance Auditor, AI Appointment Booker, AI Real Estate Agent, AI Funnel Optimisation Agent, and AI Lead Generation Engine. Roles are added quarterly.",
      },
      {
        question: "How is this different from /services/ai-virtual-talent-hub?",
        answer:
          "Same product, different framing — Hire AI Employees is the buyer-facing offer ('I want to hire an AI'), AI Virtual Talent Hub is the platform-side framing. Pricing and roster are identical.",
      },
      {
        question: "How long does onboarding take?",
        answer:
          "Single AI Hire: 5 working days. AI Team: 2-3 weeks for all 4 agents to reach steady-state. AI Workforce: phased onboarding with a dedicated architect, typically 4-6 weeks.",
      },
      {
        question: "Can the AI employees talk to each other?",
        answer:
          "Yes — that's the point of running them on one platform. Shared context, shared CRM access, and shared analytics mean the AI SDR's notes are visible to the AI Admin Agent, etc.",
      },
      {
        question: "What's the minimum commitment?",
        answer:
          "30-day rolling — cancel any month with 30 days notice. We'd rather retain on results than lock-in. Workforce tier asks for a 6-month commitment because the build investment justifies it.",
      },
      {
        question: "Where is the data hosted?",
        answer:
          "EU-region only — Azure OpenAI West Europe or AWS Bedrock eu-central-1 by default. Workforce tier can opt for customer-held encryption keys (BYOK).",
      },
    ],
  },

  "idea-validation-engine": {
    title: "Idea Validation Engine | Test Demand Before You Build | OARC Digital",
    description:
      "Validate a product idea in 14 days — landing page, ad spend, qualified call interviews, and a written go / no-go recommendation. Stop building software no-one wants.",
    offers: [
      {
        name: "Validation Sprint",
        priceFrom: 4900,
        unitText: "PROJECT",
        description:
          "14-day sprint — landing page, €1,500 ad spend, 8 qualified discovery calls, written go / no-go report.",
      },
      {
        name: "Validation + Scope",
        priceFrom: 8900,
        unitText: "PROJECT",
        description:
          "Validation Sprint plus a written product spec and a build proposal if the validation passes.",
      },
      {
        name: "Multi-Idea Validation",
        priceFrom: 14500,
        unitText: "PROJECT",
        description:
          "Three parallel validation sprints across three product hypotheses — for founders deciding between concepts.",
      },
    ],
    features: [
      { name: "Landing-page concept and copy" },
      { name: "Paid traffic and email-list capture" },
      { name: "Discovery call screening and interviews" },
      { name: "Demand signal scoring rubric" },
      { name: "Written go / no-go recommendation" },
      { name: "Optional follow-on build proposal" },
    ],
    faqs: [
      {
        question: "Why pay €4,900 to validate instead of just building?",
        answer:
          "Most software ideas fail because there's no demand, not because the build was bad. Two weeks and €4,900 spent finding that out is materially cheaper than 8 months and €60,000 building the wrong thing. Even if the idea passes, the validation gives you sharper positioning for the build.",
      },
      {
        question: "What does a 'pass' look like?",
        answer:
          "We codify the demand signal in advance — typically a target landing-page CVR (e.g. 4%+), a target email-capture rate, and a target qualified-call-to-fit ratio. Hit the targets, the recommendation is build. Miss them, the recommendation is iterate or shelve.",
      },
      {
        question: "Do you actually run the ads or do we?",
        answer:
          "We do — Meta + LinkedIn + Google traffic depending on ICP, spend €1,500 on paid + organic distribution, and report click / capture / call metrics daily.",
      },
      {
        question: "What happens if our idea fails the validation?",
        answer:
          "You get the same written report — what we tested, what we learned, what to change. Most failed validations recommend a tighter ICP or a different angle, not a full kill. About 35% of validations recommend an iterated re-test.",
      },
      {
        question: "Who runs the discovery interviews?",
        answer:
          "A senior OARC strategist, recorded with consent. You get the recordings, the transcripts, and a synthesis doc — useful even if the idea doesn't pass, because the customer language compounds across future product work.",
      },
      {
        question: "Is this only for software products?",
        answer:
          "No. Service businesses, e-commerce concepts, and physical products all fit the framework. We adapt the demand signal (e.g. waitlist deposits for physical product, signed LOIs for B2B services).",
      },
    ],
  },

  "illustration": {
    title: "Illustration Services Malta | Custom Brand Illustration | OARC Digital",
    description:
      "Custom illustration that owns a visual lane — brand systems, editorial, ad creative, product UX. From concept to handover in any style your brand needs.",
    offers: [
      {
        name: "Single Illustration",
        priceFrom: 690,
        unitText: "PROJECT",
        description:
          "One bespoke illustration with two rounds of revisions, full vector + raster handover.",
      },
      {
        name: "Illustration Set",
        priceFrom: 4500,
        unitText: "PROJECT",
        description:
          "10-piece coherent illustration set with shared style guide — typically used for landing pages, decks, or brand systems.",
      },
      {
        name: "Illustration Retainer",
        priceFrom: 2400,
        unitText: "MONTH",
        description:
          "Ongoing illustration output — 6 illustrations/month for editorial, social, and product needs.",
      },
    ],
    features: [
      { name: "Concept sketches and style direction" },
      { name: "Vector + raster final handover" },
      { name: "Brand-system illustration libraries" },
      { name: "Editorial and ad illustration" },
      { name: "Product / UX spot illustrations" },
      { name: "Animated illustration (Lottie / SVG)" },
    ],
    faqs: [
      {
        question: "What styles do you cover?",
        answer:
          "Flat vector, isometric, hand-drawn, editorial line, 3D-rendered, collage. Each project starts with a style direction round to lock the visual language before production.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "Two rounds of revisions per piece are included; additional rounds are billed hourly. Most pieces close inside the included rounds because the style direction is locked first.",
      },
      {
        question: "What about animated illustration?",
        answer:
          "Lottie and SVG-based animations are scoped per-asset. Typical animated set adds 30-60% to the static-only price.",
      },
      {
        question: "Who owns the illustrations?",
        answer:
          "You do — full IP transfer on payment, with both vector source and raster exports handed over. We retain the right to show the work in our portfolio unless your SOW says otherwise.",
      },
      {
        question: "Can you match a competitor's illustration style?",
        answer:
          "Match-the-vibe yes; copy-the-style no. We will not knowingly clone another illustrator's work, even at request.",
      },
      {
        question: "Where are the illustrators based?",
        answer:
          "Lead illustrators are Malta and EU-based. We have a vetted bench of senior illustrators across Europe for surge capacity and specialised styles.",
      },
    ],
  },

  "immersive-3d-ar": {
    title: "Immersive 3D & AR Services Malta | Product Visualisation, Spatial Brand Experiences | OARC Digital",
    description:
      "Production-grade 3D and AR — product visualisation, configurators, AR try-on, WebGL brand experiences. Built for marketing, e-commerce, and product launches.",
    offers: [
      {
        name: "3D Product Pack",
        priceFrom: 4500,
        unitText: "PROJECT",
        description:
          "10 product renders + 3 motion shots, ad-ready and e-commerce-ready, with full asset handover.",
      },
      {
        name: "AR Experience",
        priceFrom: 9800,
        unitText: "PROJECT",
        description:
          "Web AR (8th Wall / Zappar) or native AR (Snapchat / Meta Spark) campaign with up to 3 interactive scenes.",
      },
      {
        name: "WebGL Microsite",
        priceFrom: 18000,
        unitText: "PROJECT",
        description:
          "Three.js / Babylon.js immersive microsite for a launch — interactive, performant, mobile-first.",
      },
    ],
    features: [
      { name: "Product 3D modelling and texturing" },
      { name: "Cinematic 3D motion shots" },
      { name: "Web AR (8th Wall, Zappar)" },
      { name: "Snap / Spark native AR experiences" },
      { name: "Three.js / Babylon.js WebGL microsites" },
      { name: "Configurator and customisation tooling" },
    ],
    faqs: [
      {
        question: "Do we need a physical product to do 3D rendering?",
        answer:
          "Helpful but not required. CAD, technical drawings, or even high-quality reference photography work. For from-scratch builds we add a modelling phase to the SOW.",
      },
      {
        question: "Which AR platforms do you support?",
        answer:
          "Web AR via 8th Wall and Zappar, native AR for Snapchat (Lens Studio) and Meta (Spark AR). We pick on audience — under-30 brands skew Snap, retail / luxury skews Web AR for QR-code distribution.",
      },
      {
        question: "How heavy are WebGL experiences on mobile?",
        answer:
          "We optimise relentlessly — typical Three.js microsites ship under 2.5MB initial payload, hit interactive in under 3 seconds on a mid-tier Android, and cap at 60fps. We do not ship experiences that murder battery.",
      },
      {
        question: "Can these be re-used for ads or just on our own site?",
        answer:
          "Reusable. 3D renders and motion shots are exported in every aspect ratio for paid social and display. AR experiences distribute via QR codes on packaging, in-store, or in-print.",
      },
      {
        question: "What's the lead time on a 3D Product Pack?",
        answer:
          "3-4 weeks for a 10-product pack, including reference review, modelling, texturing, lighting, rendering, and revisions.",
      },
      {
        question: "Where is the 3D team based?",
        answer:
          "Lead 3D artists are Malta-based; specialised artists (CGI, AR, WebGL engineering) are EU-wide. CET working hours.",
      },
    ],
  },

  "influencer": {
    title:
      "Malta Influencer Marketing | Local Creator Network for Hospitality, Lifestyle & iGaming",
    description:
      "Malta-local creator partnerships for hospitality, lifestyle, sport, food and MGA-licensed iGaming brands. We source, brief and contract Maltese creators who actually move bookings, deposits and footfall.",
    serviceType: "Local Influencer & Creator Marketing",
    areaServed: "Malta",
    audience: [
      "Hospitality (hotels, restaurants, beach clubs)",
      "Lifestyle (fashion, beauty, wellness, family)",
      "Sport and fitness brands",
      "Food and beverage operators",
      "iGaming (MGA-licensed operators within marketing rules)",
    ],
    offers: [
      {
        name: "Local Launch Campaign",
        priceFrom: 3900,
        unitText: "PROJECT",
        description:
          "5 Malta-based creators, fully briefed and contracted, 10 pieces of content for one launch moment — opening week, new menu, product drop or summer season — with a performance report on bookings, footfall or sign-ups.",
      },
      {
        name: "Always-On Maltese Creator Pod",
        priceFrom: 4400,
        unitText: "MONTH",
        description:
          "8-12 Maltese creators per month on a rolling brief across hospitality, lifestyle and food verticals, with paid usage rights, weekly content cadence and a monthly review against booking and revenue data.",
      },
      {
        name: "Hospitality Ambassador Programme",
        priceFrom: 12500,
        unitText: "PROJECT",
        description:
          "12-month ambassador programme for one hotel, restaurant group or destination brand — 3-5 long-term Maltese creators on retainer, exclusivity within category, monthly cadence and quarterly on-property shoot days.",
      },
    ],
    features: [
      { name: "Maltese creator network across hospitality, lifestyle, sport and food" },
      { name: "iGaming-aware briefs that respect MGA marketing rules" },
      { name: "Briefing, contract and payment management in EUR" },
      { name: "Content rights for paid amplification on Meta and TikTok" },
      { name: "ASA Malta and EU disclosure compliance" },
      { name: "Reporting tied to bookings, deposits or footfall — not just reach" },
    ],
    faqs: [
      {
        question: "Why work with Maltese creators instead of import influencers from London or Milan?",
        answer:
          "Local recognition. A creator who is genuinely known on the islands lands better with buyers in Sliema, St Julian's, Valletta and Gozo than a flown-in macro influencer. They already eat at the restaurants you compete with, drink at the same beach clubs, and their followers convert into actual table bookings or hotel stays — not vanity reach from an audience that will never visit Malta.",
      },
      {
        question: "Which creator categories does the network cover?",
        answer:
          "Five working categories: hospitality (hotel, restaurant, beach club and venue creators), lifestyle (fashion, beauty, wellness, family), sport and fitness, food and beverage, and entertainment (DJ, music, nightlife). We deliberately avoid categories where we lack real Maltese depth — politics, hard news commentary and finance influencers are not on the roster.",
      },
      {
        question: "Will you name specific creators in the proposal?",
        answer:
          "Not in the public proposal. The first conversation discusses category, audience size and budget. Once the brief is signed and an NDA is in place, you receive a shortlist of named Maltese creators with audience demographics, engagement history and past brand partnerships. This protects creator pricing and the brands they have worked with.",
      },
      {
        question: "Can you run an iGaming influencer campaign in Malta?",
        answer:
          "Yes — for MGA-licensed operators only, and only for creators whose audience is 18+ and whose content is reviewable against MGA marketing rules and platform policy. We refuse work for unlicensed operators and never run player-acquisition creative that breaches responsible-gaming guidelines or hides the affiliate relationship.",
      },
      {
        question: "How do you measure whether a Malta creator campaign worked?",
        answer:
          "Three reporting layers tied to your business, not just to the post. Creator-level — reach, completion, save and share rate per piece of content. Campaign-level — UTMs, discount codes, QR menu scans and form fills attributable to the campaign window. Business-level — bookings, table covers, hotel nights, deposits or sign-ups in the week after the post versus the prior baseline.",
      },
      {
        question: "How is this different from /services/influencer-marketing?",
        answer:
          "/services/influencer-marketing is the generic strategy and programme offer for any market — Malta, EU or further afield. /services/influencer is specifically the Malta-local creator network: Maltese creators only, hospitality / lifestyle / iGaming focus, and reporting that ties back to revenue on the islands. Pick this page if your brand operates in Malta and wants local recognition.",
      },
      {
        question: "What is the minimum campaign size?",
        answer:
          "The Local Launch Campaign at €3,900 is the floor. Below that, contract management, payments and reporting eat too much of the brief to leave anything meaningful for the creators themselves. Smaller pilots are usually better served as a single hospitality content shoot through /services/social-media-creative-management.",
      },
      {
        question: "Who owns the content after the campaign ends?",
        answer:
          "Each contract spells it out. The default for the Always-On pod and Ambassador programmes is 90-day to 12-month paid usage rights for the brand on Meta and TikTok, plus permanent organic re-share rights with the original credit. Single-campaign contracts default to 30-day paid usage and can be extended for an additional fee per creator.",
      },
    ],
  },

  "influencer-marketing": {
    title: "Influencer Marketing Strategy & Programs | Malta + EU | OARC Digital",
    description:
      "Influencer marketing programs that compound — strategy, creator selection, briefing, contracts, content production, paid amplification, and performance attribution. Built for Malta and EU brands.",
    offers: [
      {
        name: "Influencer Strategy",
        priceFrom: 3900,
        unitText: "PROJECT",
        description:
          "3-week strategy: ICP-creator overlap analysis, 30-creator shortlist, brief framework, 12-month campaign calendar.",
      },
      {
        name: "Always-On Program",
        priceFrom: 5900,
        unitText: "MONTH",
        description:
          "Continuous creator program — 10-15 creators / month, content production, paid amplification budget management, monthly reports.",
      },
      {
        name: "Performance Influencer",
        priceFrom: 9900,
        unitText: "MONTH",
        description:
          "Performance-tilted creator program with embedded paid ads (whitelisted ad accounts), CPA-targeted, weekly creative iteration.",
      },
    ],
    features: [
      { name: "Strategy and creator-overlap analysis" },
      { name: "Briefing and contract management" },
      { name: "Content production support" },
      { name: "Paid amplification (whitelisted ads)" },
      { name: "Attribution and CPA reporting" },
      { name: "Maltese, English, and EU-language creators" },
    ],
    faqs: [
      {
        question: "What's the difference between this and /services/influencer?",
        answer:
          "/services/influencer is a lead-gen overview for buyers searching generically. /services/influencer-marketing is the strategy + program-running offering with deeper deliverables. Most clients land on one and convert into the other.",
      },
      {
        question: "Do you do paid amplification on influencer content?",
        answer:
          "Yes — via whitelisted ad accounts (creator-handle as ad sponsor). We manage the ad spend, creative iteration, and CPA reporting. Performance Influencer tier is built around this.",
      },
      {
        question: "How do you select creators for a brand?",
        answer:
          "Quantitative: audience overlap with ICP, engagement-rate vs follower-count baseline, content-fit score. Qualitative: brand-safety review, recent content tone, past collab performance. Output is a stack-ranked shortlist of 30 creators.",
      },
      {
        question: "Can you run programs in multiple EU languages?",
        answer:
          "Yes — Maltese, English (UK / IE / MT), Italian, Spanish, French, German, Dutch, and most CEE languages have a creator bench. Briefs and contracts are localised per market.",
      },
      {
        question: "What's a typical CPA outcome?",
        answer:
          "Performance Influencer programs typically reach CPA parity with paid social inside 90 days, then beat it by 20-40% over months 4-12 as the creator-content ad library compounds.",
      },
      {
        question: "How long is the typical engagement?",
        answer:
          "Influencer Strategy is a 3-week one-off. Always-On and Performance programs are 6-month minimum because creator relationships and content libraries take time to compound.",
      },
    ],
  },

  "lead-generation": {
    title: "Lead Generation Services Malta | Qualified B2B & B2C Leads | OARC Digital",
    description:
      "Lead generation that delivers qualified meetings, not raw form fills — outbound, inbound, AI qualification, and CRM hand-off. Reported as cost-per-qualified-meeting.",
    offers: [
      {
        name: "Lead Gen Pilot",
        priceFrom: 2900,
        unitText: "MONTH",
        description:
          "Single channel (outbound or paid inbound) with AI qualification, target 25 qualified meetings / month.",
      },
      {
        name: "Multi-Channel Lead Gen",
        priceFrom: 5900,
        unitText: "MONTH",
        description:
          "Outbound + paid inbound + AI qualification + CRM routing, targeting 60+ qualified meetings / month.",
      },
      {
        name: "Lead Gen Engine Build",
        priceFrom: 18000,
        unitText: "PROJECT",
        description:
          "12-week build of a permanent lead gen engine — ICP, prospecting, AI qualification, CRM, dashboards — handed over to your team.",
      },
    ],
    features: [
      { name: "ICP definition and prospect data sourcing" },
      { name: "Outbound prospecting (email + LinkedIn)" },
      { name: "Paid inbound (Meta, LinkedIn, Google)" },
      { name: "AI qualification and meeting booking" },
      { name: "CRM hygiene and routing" },
      { name: "Cost-per-qualified-meeting reporting" },
    ],
    faqs: [
      {
        question: "What does 'qualified' actually mean?",
        answer:
          "Defined per client at kick-off — typically: matches ICP, has budget, has authority, has timeline (BANT) or fits a custom rubric. Unqualified leads are not counted toward the monthly target. We don't pad the numbers.",
      },
      {
        question: "How is this different from /services/lead-generation-engine?",
        answer:
          "/services/lead-generation is the buyer-intent gateway (search 'lead generation Malta'). /services/lead-generation-engine is the AI-agent-native deeper offering. Most clients land on this page first.",
      },
      {
        question: "Do you guarantee a number of qualified meetings?",
        answer:
          "We commit to a target range in the SOW (e.g. 25-35 qualified meetings / month for the Pilot). Miss the floor by more than 20%, the next month is credited. Hit it, both sides know it's working.",
      },
      {
        question: "What ICPs work best?",
        answer:
          "B2B with deal sizes >€5k ARR or €20k project value, where booking a 30-minute meeting has clear economic value. Below that, paid acquisition + self-serve pricing usually outperforms human-meeting lead gen.",
      },
      {
        question: "Do you handle the cold outreach yourself?",
        answer:
          "Yes — we run the email + LinkedIn sequences from your domain (warmed properly, on a separate sub-domain to protect your main inbox), and we own deliverability and reply handling.",
      },
      {
        question: "Where do the prospect lists come from?",
        answer:
          "Apollo, Cognism, Lusha, ZoomInfo, LinkedIn Sales Navigator, and bespoke scraping for niche EU markets. We GDPR-compliance-check every source and respect opt-outs across the entire prospect graph.",
      },
    ],
  },

  "lead-generation-engine": {
    title: "Lead Generation Engine | AI-Native Pipeline Builder | OARC Digital",
    description:
      "An AI-native lead generation engine — agents prospect, qualify, book meetings, and write the pre-call brief. Builds compounding pipeline with one-tenth the SDR headcount.",
    offers: [
      {
        name: "Engine Pilot",
        priceFrom: 2900,
        unitText: "MONTH",
        description:
          "Single ICP, AI prospecting + qualification + booking, target 25 qualified meetings / month.",
      },
      {
        name: "Engine Pro",
        priceFrom: 5900,
        unitText: "MONTH",
        description:
          "Multi-ICP, multi-channel (email, LinkedIn, web chat), 60+ qualified meetings / month, weekly tuning.",
      },
      {
        name: "Engine Custom Build",
        priceFrom: 24000,
        unitText: "PROJECT",
        description:
          "Bespoke engine — your ICP, your CRM, your sales playbook. 8-week build + 90 days of tuning included.",
      },
    ],
    features: [
      { name: "AI prospecting across email + LinkedIn" },
      { name: "AI qualification and meeting booking" },
      { name: "Pre-call brief auto-generated" },
      { name: "CRM enrichment and routing" },
      { name: "Cold-list reactivation cadence" },
      { name: "EU-only data residency" },
    ],
    faqs: [
      {
        question: "How is this different from hiring SDRs?",
        answer:
          "An SDR books 8-15 meetings / month at a fully-loaded cost of €4-6k. The Engine books 25-60 qualified meetings / month at €2,900-€5,900 / month. The trade-off: humans are better at nuanced calls, the Engine is better at volume + consistency. Most clients keep 1-2 senior closers and replace the SDR layer with the Engine.",
      },
      {
        question: "Will the messages sound human?",
        answer:
          "Yes — we voice-train against your top reps' sequences, keep messages short, and rotate templates weekly. We do not use the obvious 'AI-style' opening lines that get auto-flagged.",
      },
      {
        question: "What's the difference vs /services/lead-generation?",
        answer:
          "Lead Generation is the buyer-intent overview; Lead Generation Engine is the AI-agent-native deeper offer. Pricing and outcome targets are the same — different content emphasis.",
      },
      {
        question: "Do you handle cold-email deliverability?",
        answer:
          "Yes — separate sending domain, warm-up over 4-6 weeks, daily DMARC monitoring, and reply-rate-based pacing. We treat the deliverability as a first-class workstream, not an afterthought.",
      },
      {
        question: "How does the pre-call brief work?",
        answer:
          "Before every booked meeting, the engine generates a 1-page brief: prospect background, company news, conversation history, predicted objections, and a recommended opening question. Your closer walks in fully prepped — no scrambling on the way to the meeting.",
      },
      {
        question: "What happens to leads that aren't ready to meet?",
        answer:
          "They go into a long-cycle nurture cadence — monthly value sends, quarterly check-ins. The Engine keeps relationships warm so when timing changes the prospect comes back to us, not a competitor.",
      },
    ],
  },

  "media-buying": {
    title: "Media Buying Services Malta | Performance Paid Across Meta, Google & TikTok | OARC Digital",
    description:
      "Performance media buying for Malta and EU brands — Meta, Google, TikTok, LinkedIn, YouTube. Daily account work, weekly creative iteration, and monthly executive reporting.",
    offers: [
      {
        name: "Single-Channel Buyer",
        priceFrom: 1900,
        unitText: "MONTH",
        description:
          "One platform (Meta or Google) under €25k/mo spend, daily optimisation and weekly reporting.",
      },
      {
        name: "Multi-Channel Buyer",
        priceFrom: 3900,
        unitText: "MONTH",
        description:
          "Meta + Google + one of (TikTok / LinkedIn / YouTube), under €100k/mo spend, dedicated buyer + analyst.",
      },
      {
        name: "Performance Media Pod",
        priceFrom: 7900,
        unitText: "MONTH",
        description:
          "Multi-channel, €100k+/mo spend, embedded buying team, paired creative pod, monthly executive reporting.",
      },
    ],
    features: [
      { name: "Meta, Google, TikTok, LinkedIn, YouTube buying" },
      { name: "Daily account optimisation" },
      { name: "Creative testing and iteration" },
      { name: "Conversion-tracking and CAPI set-up" },
      { name: "Pixel and server-side attribution" },
      { name: "Weekly performance reporting" },
    ],
    faqs: [
      {
        question: "How is media buying priced?",
        answer:
          "Flat monthly retainer — not a percent of spend. We don't get rich by spending more of your money. Retainers are tiered by media volume + channel count + creative iteration cadence.",
      },
      {
        question: "What's the minimum monthly spend you'll work with?",
        answer:
          "€8k/mo media spend for the Single-Channel Buyer to make commercial sense. Below that, the management fee is a disproportionate share of cost — we'll suggest a freelancer or DIY plus a quarterly audit.",
      },
      {
        question: "Do you handle creative or just buying?",
        answer:
          "Creative is a separate offering (/services/ad-creative or /services/creative) — but most clients pair the two. The performance loop only works if buying and creative iterate together weekly.",
      },
      {
        question: "What about server-side tracking and CAPI?",
        answer:
          "Standard set-up on every account — Meta CAPI, Google Enhanced Conversions, TikTok Events API, LinkedIn Conversions API. Without server-side tracking, post-iOS-14 attribution is unreliable.",
      },
      {
        question: "Can you work with our in-house team?",
        answer:
          "Yes. Common pattern: in-house owns brand and email; OARC owns paid + creative. Shared Slack, weekly playback, monthly business review.",
      },
      {
        question: "How long are typical contracts?",
        answer:
          "30-day rolling, 90-day minimum. Performance compounds — a 30-day judgment is too short. Performance Media Pod clients typically commit 6 months to align with creative iteration cycles.",
      },
    ],
  },

  "mobile-applications-development": {
    title: "Mobile Application Development Malta | iOS, Android & React Native | OARC Digital",
    description:
      "Mobile application development for Malta and EU SMEs — native iOS / Android, React Native, and Flutter. From concept through App Store submission, with clean code and full IP transfer.",
    offers: [
      {
        name: "MVP Mobile App",
        priceFrom: 22000,
        unitText: "PROJECT",
        description:
          "12-week React Native MVP — auth, core workflow, push, analytics, App Store + Play Store submission.",
      },
      {
        name: "Full Mobile Build",
        priceFrom: 55000,
        unitText: "PROJECT",
        description:
          "20-24 week native or React Native build — 8+ flows, deep integrations, accessibility, and device-coverage testing.",
      },
      {
        name: "Mobile Maintenance Retainer",
        priceFrom: 3900,
        unitText: "MONTH",
        description:
          "Post-launch — OS updates, App Store reviews, crash triage, new feature work, performance monitoring.",
      },
    ],
    features: [
      { name: "Native iOS (Swift / SwiftUI)" },
      { name: "Native Android (Kotlin / Compose)" },
      { name: "React Native and Flutter" },
      { name: "App Store + Play Store submission" },
      { name: "Push, deep linking, in-app purchase" },
      { name: "Crash analytics + observability" },
    ],
    faqs: [
      {
        question: "Native or cross-platform — which should we pick?",
        answer:
          "Cross-platform (React Native) covers ~85% of use cases at half the cost. Pick native if you need heavy-graphics, deep OS integration (HealthKit, ARKit, Wear OS), or ultra-fast launches. We'll recommend honestly during the discovery phase.",
      },
      {
        question: "How long does App Store submission take?",
        answer:
          "Apple review: 24-72 hours typically. Google review: 2-7 days. We handle the submission, screenshots, listing copy, and any rejection-loop fixes — first submissions sometimes need 1-2 round-trips.",
      },
      {
        question: "Can you work with our existing backend?",
        answer:
          "Yes — most engagements connect to an existing API. We do an API audit during discovery and write the integration layer, including caching, retry, and offline support.",
      },
      {
        question: "What about App Store fees and account ownership?",
        answer:
          "You own the Apple Developer and Google Play accounts. We never publish under our own developer account — that creates lock-in and is the reason most agencies get fired.",
      },
      {
        question: "How is this different from /services/mobile-apps-development?",
        answer:
          "Same engineering team, slightly different SEO target (one ranks for 'mobile applications development', the other for 'mobile apps development'). The deliverables and pricing are aligned across both pages.",
      },
      {
        question: "Where are your engineers based?",
        answer:
          "Lead engineers in Malta; senior iOS / Android specialists EU-wide. CET hours, English-first communication.",
      },
    ],
  },

  "mobile-apps-development": {
    title: "Mobile Apps Development Malta | iOS, Android & Cross-Platform | OARC Digital",
    description:
      "Production-ready mobile apps for Malta SMEs — React Native, native iOS, native Android. Discovery, build, App Store launch, and ongoing maintenance under one roof.",
    offers: [
      {
        name: "MVP App",
        priceFrom: 22000,
        unitText: "PROJECT",
        description:
          "12-week React Native MVP — auth, core workflow, push, analytics, App Store / Play submission included.",
      },
      {
        name: "Full Build",
        priceFrom: 55000,
        unitText: "PROJECT",
        description:
          "20-24 week native or React Native build — 8+ flows, deep integrations, accessibility, device-coverage QA.",
      },
      {
        name: "Maintenance Retainer",
        priceFrom: 3900,
        unitText: "MONTH",
        description:
          "Post-launch ops — OS updates, store reviews, crash triage, new feature work, performance tuning.",
      },
    ],
    features: [
      { name: "iOS, Android, and React Native" },
      { name: "App Store + Play Store launch" },
      { name: "Push, deep linking, in-app purchase" },
      { name: "Crash analytics and observability" },
      { name: "Accessibility and device-coverage QA" },
      { name: "Full IP and source-code ownership" },
    ],
    faqs: [
      {
        question: "How long does an MVP mobile app take?",
        answer:
          "10-14 weeks for an MVP-scope React Native build (auth, 1-2 core flows, push, analytics, store submission). Native-only builds add 30-50% to timeline because of duplicated platform work.",
      },
      {
        question: "Do you submit to the App Store and Play Store?",
        answer:
          "Yes — submission, listing copy, screenshots, App Privacy declarations, and rejection-loop handling are all included in the build SOW.",
      },
      {
        question: "How is this different from /services/mobile-applications-development?",
        answer:
          "Same engineering team and pricing — different SEO targets. Both pages exist because real-world Malta buyers search both terms; we publish a page per term and link them.",
      },
      {
        question: "What stack do you build on?",
        answer:
          "React Native with Expo or bare React Native for cross-platform; SwiftUI / Compose for native. Backend on Node.js + Postgres typically, with a managed BaaS (Supabase, Firebase) for early-stage MVPs.",
      },
      {
        question: "Can you handle in-app purchases and subscriptions?",
        answer:
          "Yes — RevenueCat is our default for cross-platform IAP and subscriptions. For native-only, we wire StoreKit / Play Billing direct.",
      },
      {
        question: "What happens after launch?",
        answer:
          "Maintenance Retainer (€3,900/mo) handles OS updates, App Store review responses, crash triage, and small feature iterations. Larger feature work is scoped as a follow-on project.",
      },
    ],
  },

  "motion-design": {
    title: "Motion Design Services Malta | Brand & Performance Animation | OARC Digital",
    description:
      "Motion design for Malta and EU brands — explainer videos, ad creative, brand stings, UI motion, and Lottie product animation. Concept, design, animate, deliver.",
    offers: [
      {
        name: "Motion Sprint",
        priceFrom: 2400,
        unitText: "PROJECT",
        description:
          "One 30-60 second motion piece — concept, script, design, animate, deliver in 10 working days.",
      },
      {
        name: "Always-On Motion Pod",
        priceFrom: 3900,
        unitText: "MONTH",
        description:
          "8 motion pieces / month for paid social, social organic, and product UX. Iteration baked in.",
      },
      {
        name: "Brand Motion System",
        priceFrom: 9500,
        unitText: "PROJECT",
        description:
          "Reusable brand motion system — stings, transitions, lower-thirds, logo animations — handed over as After Effects + MOGRT.",
      },
    ],
    features: [
      { name: "Explainer videos and product walkthroughs" },
      { name: "Performance ad creative motion" },
      { name: "UI / app micro-interactions (Lottie)" },
      { name: "Brand stings and channel idents" },
      { name: "After Effects + Cinema 4D" },
      { name: "MOGRT templates for in-house teams" },
    ],
    faqs: [
      {
        question: "What's the typical motion-design lead time?",
        answer:
          "30-60 second pieces: 10 working days. Longer-form (90+ seconds): 3-4 weeks. Always-On Pod ships continuously through the month with weekly drops.",
      },
      {
        question: "Do you write the script or do we?",
        answer:
          "Both options. Bring your own script and we design + animate. Or we write — typical OARC-written script goes through 2 review rounds before storyboard.",
      },
      {
        question: "Can you produce motion for performance ads?",
        answer:
          "Yes — short-form (6-15 second) motion is half our motion output. Multiple aspect ratios per piece (9:16, 1:1, 4:5, 16:9) at no extra cost.",
      },
      {
        question: "Do you do 3D motion?",
        answer:
          "Cinema 4D and Blender for 3D motion — typical add-on for product launches and high-impact brand moments. See /services/immersive-3d-ar for the deeper 3D / AR offering.",
      },
      {
        question: "What about Lottie animations for our app?",
        answer:
          "Yes — UI micro-interactions in Lottie / SVG, optimised for sub-50KB payloads and tested across iOS, Android, and modern web.",
      },
      {
        question: "Who owns the source files?",
        answer:
          "You do — After Effects projects, Cinema 4D scenes, and Lottie JSON are all handed over on payment. No vendor lock-in.",
      },
    ],
  },

  "mvp-development": {
    title: "MVP Development Malta | Ship Paid v1 in 8-10 Weeks | OARC Digital",
    description:
      "MVP development for Malta and EU founders — paid v1 SaaS, marketplaces, or B2B platforms in 8-10 weeks. Fixed-scope, EU-hosted, full IP transfer, designed to onboard the first 10 paying customers.",
    offers: [
      {
        name: "MVP Sprint",
        priceFrom: 18000,
        unitText: "PROJECT",
        description:
          "8-10 week paid v1 — auth, billing, the single core workflow, EU-region hosting, onboarding flows for first 10 customers.",
      },
      {
        name: "MVP+ Build",
        priceFrom: 38000,
        unitText: "PROJECT",
        description:
          "12-14 week build — multi-tenant data, admin dashboard, deeper integrations, monitoring, and ops handover.",
      },
      {
        name: "Founder Iteration Retainer",
        priceFrom: 3900,
        unitText: "MONTH",
        description:
          "Post-launch — fortnightly releases prioritised by activation and revenue, weekly founder check-ins.",
      },
    ],
    features: [
      { name: "TypeScript + Next.js stack" },
      { name: "Stripe Billing and EU VAT" },
      { name: "Multi-tenant Postgres data" },
      { name: "EU-region hosting (GDPR-clean)" },
      { name: "Auth (Clerk / Auth.js / Supabase)" },
      { name: "Onboarding playbook for first 10 customers" },
    ],
    faqs: [
      {
        question: "What does 'paid v1' mean?",
        answer:
          "An MVP customers actually pay for — not a pilot, not a free beta. Auth, billing, the core workflow, and the operational scaffolding (monitoring, error tracking, EU-hosted backups) needed to onboard real paying customers without firefighting at midnight.",
      },
      {
        question: "How is this different from /services/saas-development?",
        answer:
          "Same engineering team, different scope framing. /services/saas-development is the broader full-product offering. /services/mvp-development is the focused first-build offering for founders pre-revenue or pre-PMF.",
      },
      {
        question: "What if my idea isn't validated yet?",
        answer:
          "Run /services/idea-validation-engine first — €4,900, 14 days, written go/no-go report. We refuse to build MVPs for ideas that fail the validation gate.",
      },
      {
        question: "Do you take equity instead of cash?",
        answer:
          "No. We take cash because that aligns incentives with shipping. Equity-only deals tend to make agencies into bad shareholders and bad service providers.",
      },
      {
        question: "What stack do you default to?",
        answer:
          "Next.js + TypeScript + Postgres + Drizzle + Stripe Billing + EU-region Vercel / Render hosting. Boring, proven, and easy to hand over to an in-house team when the time comes.",
      },
      {
        question: "What if scope changes during the build?",
        answer:
          "Scope changes get a written change request with effort + cost. We never silently absorb scope (because that ships late) or silently descope (because that ships wrong).",
      },
    ],
  },

  "paid": {
    title:
      "Industry-Specific Paid Ads in Malta | Hospitality, iGaming, E-commerce, Real Estate, SaaS",
    description:
      "Vertical-first paid advertising for Malta hospitality, iGaming, e-commerce, real estate and SaaS brands. Industry buying psychology, channel mix and creative built for each sector.",
    serviceType: "Industry-Specific Paid Advertising",
    areaServed: "Malta",
    audience: [
      "Hospitality (hotels, restaurants, venues)",
      "iGaming (MGA-licensed operators and affiliates)",
      "E-commerce (DTC and marketplace brands)",
      "Real estate (sales agencies and developers)",
      "SaaS (B2B software, fintech, developer tools)",
    ],
    offers: [
      {
        name: "Industry Sprint",
        priceFrom: 2400,
        unitText: "PROJECT",
        description:
          "Two-week vertical-fit audit: industry research, competitor teardown, channel-mix recommendation, and a 30-day test plan tailored to your sector.",
      },
      {
        name: "Vertical Retainer",
        priceFrom: 3600,
        unitText: "MONTH",
        description:
          "Single-vertical paid retainer (hospitality, iGaming, e-commerce, real estate, or SaaS). Industry creative, sector-specific tracking, weekly reporting against vertical benchmarks.",
      },
      {
        name: "Multi-Vertical Pod",
        priceFrom: 7900,
        unitText: "MONTH",
        description:
          "For multi-brand operators across two or more verticals — embedded buyer team, paired industry creative, and a monthly executive briefing per vertical.",
      },
    ],
    features: [
      { name: "Hospitality paid ads (hotels, restaurants, venues)" },
      { name: "iGaming-aware compliance and creative angles" },
      { name: "E-commerce shopping, Performance Max, and feed work" },
      { name: "Real estate listing and buyer-pipeline campaigns" },
      { name: "SaaS demand-gen, MQL pipelines and LinkedIn ABM" },
      { name: "Vertical benchmarks per sector, not generic CPL targets" },
    ],
    faqs: [
      {
        question:
          "How is /services/paid different from /services/paid-advertising?",
        answer:
          "/services/paid-advertising is the generic media-buying offer — Meta, Google, TikTok, LinkedIn, YouTube across any business. /services/paid is industry-specific: the playbook, channel mix, creative angles and benchmarks change for hospitality, iGaming, e-commerce, real estate and SaaS. Pick this page if your sector behaves differently from a generic e-commerce funnel — most do.",
      },
      {
        question: "Which industries do you actually have paid-ads experience in?",
        answer:
          "Five core verticals in Malta and the wider EU: hospitality (hotels, restaurants, beach clubs, venues), iGaming (within MGA marketing rules), e-commerce (DTC and marketplace), real estate (sales and rentals — agencies and developers), and B2B SaaS. Each has its own buyer pod, benchmark library and creative back-catalogue.",
      },
      {
        question: "Why does paid for hospitality look different to paid for SaaS?",
        answer:
          "Hospitality buyers decide in days, often on mobile, and convert through a booking engine — channel mix leans Meta + Google + metasearch, creative leans short-form video of the actual property. SaaS buyers decide over weeks with a buying committee — channel mix leans LinkedIn + Google + retargeting, creative leans demo loops, ROI calculators and case studies. Treating them the same is why most agency campaigns underperform.",
      },
      {
        question: "Do you handle iGaming compliance?",
        answer:
          "Yes. Every iGaming campaign is run against MGA marketing rules and platform policy (Meta and Google's gambling certification, TikTok's restricted-industry list). We refuse work for unlicensed operators and never run player-acquisition creative that breaches responsible-gaming guidelines.",
      },
      {
        question:
          "We are an e-commerce brand selling outside Malta — does this still apply?",
        answer:
          "Yes. The e-commerce vertical playbook ships globally — feed engineering, Shopping/Performance Max, server-side conversions and Klaviyo retargeting are the same in Berlin, Dublin or Dubai. The Malta base means EU-time-zone account work and EUR billing, not a geographic restriction on where the campaigns run.",
      },
      {
        question: "What's the minimum spend per vertical?",
        answer:
          "€8,000 monthly media spend for the Vertical Retainer to be commercially sensible. Below that, management fees become a disproportionate share of total cost — we'll usually point smaller spenders at the generic /services/paid-advertising starter offer or the Industry Sprint instead.",
      },
      {
        question: "Will you also build the landing pages and creative?",
        answer:
          "Yes via /services/ad-creative for assets and /services/web-design or /services/ecommerce-development for landing pages. Most vertical retainers bundle creative — vertical performance lives or dies on creative iteration, and shipping a hotel ad with the wrong room photography is a guaranteed CPL tax.",
      },
      {
        question: "How is the monthly fee calculated?",
        answer:
          "Flat retainer based on vertical complexity, platform count and creative cadence — never a percentage of spend. Percent-of-spend pricing rewards agencies for burning your budget; flat fees reward us for running tighter campaigns.",
      },
      {
        question: "Can you work with our in-house marketing team?",
        answer:
          "Yes. Standard pattern: in-house owns brand, content, email; OARC owns paid + creative. Shared Slack, weekly playbacks, monthly executive review.",
      },
    ],
  },

  "performance-analytics": {
    title: "Performance Analytics Services Malta | Marketing & Product Attribution | OARC Digital",
    description:
      "Performance analytics for Malta and EU brands — attribution, dashboards, incrementality testing, and warehouse builds that surface revenue-impact, not vanity metrics.",
    offers: [
      {
        name: "Analytics Audit",
        priceFrom: 2400,
        unitText: "PROJECT",
        description:
          "2-week audit of every tracker, dashboard, and attribution model. Output: a prioritised remediation roadmap.",
      },
      {
        name: "Analytics Build",
        priceFrom: 12500,
        unitText: "PROJECT",
        description:
          "End-to-end build — warehouse (BigQuery / Snowflake), dbt models, Looker / Hex dashboards, attribution layer.",
      },
      {
        name: "Analytics Retainer",
        priceFrom: 2900,
        unitText: "MONTH",
        description:
          "Ongoing — new dashboards, attribution iteration, incrementality testing, monthly executive briefing.",
      },
    ],
    features: [
      { name: "Server-side and client-side tracking" },
      { name: "Marketing and product attribution" },
      { name: "Warehouse build (BigQuery / Snowflake / Postgres)" },
      { name: "dbt model engineering" },
      { name: "Looker / Hex / Tableau dashboards" },
      { name: "Incrementality and lift testing" },
    ],
    faqs: [
      {
        question: "Why is attribution so hard now?",
        answer:
          "iOS 14+ killed reliable client-side attribution; cookie deprecation continues to erode browser-side signal. The fix is server-side tracking (CAPI, Enhanced Conversions), first-party warehouse data, and incrementality testing as the source of truth — not platform-reported numbers.",
      },
      {
        question: "Which warehouse should we use?",
        answer:
          "Postgres for under €5m revenue / under 100GB data, BigQuery or Snowflake above. We pick on cost-per-query and team comfort, not vendor preference. Warehouse choice is reversible later, so we don't dwell.",
      },
      {
        question: "What's a 'good' marketing attribution model?",
        answer:
          "There isn't a perfect one — we run a multi-touch model as the dashboard floor, validate via geo-incrementality tests quarterly, and continuously check spend allocation against geo-test conclusions. It's a learning system, not a spreadsheet.",
      },
      {
        question: "How do you measure incrementality?",
        answer:
          "Geo-holdouts (turn off ads in 1-2 markets), conversion-lift tests on Meta / Google, and post-purchase surveys ('how did you hear about us'). Triangulation beats any single source.",
      },
      {
        question: "Can you work with our existing BI tool?",
        answer:
          "Yes — Looker, Hex, Tableau, Power BI, Mode, Metabase. We don't insist on tooling. We do insist on a curated semantic layer (definitions of every metric) so dashboards across teams agree.",
      },
      {
        question: "Where is the data hosted?",
        answer:
          "EU-region by default — BigQuery EU, Snowflake EU regions, AWS eu-central-1 for self-hosted Postgres. Customer data does not leave the EU unless your SOW specifically requires it.",
      },
    ],
  },

  "presentation-pitch": {
    title: "Presentation & Pitch Design Services Malta | Investor Decks, Sales Decks | OARC Digital",
    description:
      "Designed-for-results presentations — investor decks, sales decks, board reports, and conference keynotes. Strategy, narrative, design, and rehearsal in one place.",
    offers: [
      {
        name: "Single Deck",
        priceFrom: 2900,
        unitText: "PROJECT",
        description:
          "One 12-25 slide deck — narrative, design, animation. Sales, investor, or executive use cases.",
      },
      {
        name: "Investor Pitch Pack",
        priceFrom: 6900,
        unitText: "PROJECT",
        description:
          "Investor deck + appendix + financial model design + 1-pager + email-friendly summary version.",
      },
      {
        name: "Always-On Deck Pod",
        priceFrom: 2400,
        unitText: "MONTH",
        description:
          "4 decks / month — sales, RFP, exec reporting, conference talks — built against a master template.",
      },
    ],
    features: [
      { name: "Narrative and structure design" },
      { name: "Slide design and motion" },
      { name: "Investor deck specialism" },
      { name: "Sales deck specialism" },
      { name: "Master-template build for in-house re-use" },
      { name: "Speaker rehearsal and notes" },
    ],
    faqs: [
      {
        question: "Why hire OARC instead of a freelance deck designer?",
        answer:
          "Most deck designers are designers — they polish what's already there. OARC starts with the narrative (what's the argument?), then designs against it. The structural work usually adds more value than the visual work.",
      },
      {
        question: "Do you help with the financial model in an investor deck?",
        answer:
          "We design the financial model presentation (charts, pivot views, scenario layouts). We don't build the model itself — that's typically your CFO or a fractional one. Many clients pair us with a financial modelling firm we've worked with.",
      },
      {
        question: "How long does a deck take?",
        answer:
          "12-15 slide sales deck: 2 weeks. 20-25 slide investor deck: 3 weeks including narrative work. Single-conference keynote: 3-4 weeks including rehearsal coaching.",
      },
      {
        question: "Can you work in PowerPoint and Keynote?",
        answer:
          "Both. Default is Figma + handover to PowerPoint or Keynote (most clients prefer PowerPoint for handover-friendly editing). Native Figma decks work for some teams but lose fidelity in offline contexts.",
      },
      {
        question: "Do you rehearse with the speaker?",
        answer:
          "For Investor Pitch Pack and conference engagements, yes — typically 2 rehearsal sessions with structured feedback. Optional add-on (€890) for sales decks.",
      },
      {
        question: "Who owns the templates?",
        answer:
          "You do — master template handed over on payment, with re-use guidance for your in-house team.",
      },
    ],
  },

  "print-packaging": {
    title: "Print & Packaging Design Services Malta | Brand Print, Packaging, Editorial | OARC Digital",
    description:
      "Print and packaging design — brand collateral, retail packaging, editorial layouts, and large-format. Local printer relationships in Malta plus EU print procurement.",
    offers: [
      {
        name: "Single Print Project",
        priceFrom: 1200,
        unitText: "PROJECT",
        description:
          "One print piece — flyer, brochure, business cards, or single SKU pack. Concept, design, print-ready handover.",
      },
      {
        name: "Brand Print Pack",
        priceFrom: 4900,
        unitText: "PROJECT",
        description:
          "Full brand print system — stationery, brochures, print ads, retail signage. Production-ready files + printer brief.",
      },
      {
        name: "Packaging System",
        priceFrom: 9800,
        unitText: "PROJECT",
        description:
          "Multi-SKU packaging system — 4-12 SKUs, dieline engineering, regulatory copy, mock-ups, and printer hand-over.",
      },
    ],
    features: [
      { name: "Brand collateral and stationery" },
      { name: "Retail packaging and dieline engineering" },
      { name: "Editorial layouts and magazines" },
      { name: "Large-format and exhibition design" },
      { name: "Malta + EU print procurement" },
      { name: "Sustainability-spec print options" },
    ],
    faqs: [
      {
        question: "Do you handle print procurement or just files?",
        answer:
          "Both. We hand over print-ready files (PDF/X with bleeds, TAC, ICC profiles) — and we'll quote and project-manage the print run with our Malta + EU printer network if you'd rather not deal with it.",
      },
      {
        question: "Which Malta printers do you work with?",
        answer:
          "Different printers for different jobs — Allied Newspapers / PrintIt for offset short-runs, Print Solutions for larger runs, Inkjet Malta for large-format / signage, and EU specialists (Solopress, Onlineprinters) for premium and unusual specs. We pick on quality + lead time + cost per project.",
      },
      {
        question: "Can you handle regulatory copy on packaging?",
        answer:
          "Yes — food (EU FIC), cosmetics (EU 1223/2009), supplements, and CE / UKCA labelling. We work with regulatory consultants when needed and version-control the legal copy.",
      },
      {
        question: "Do you design sustainable packaging?",
        answer:
          "Yes — FSC-certified stocks, soy inks, mono-material structures, and PCR (post-consumer recycled) plastics where the brief allows. We document the spec choice in the printer brief.",
      },
      {
        question: "What's the typical lead time on packaging?",
        answer:
          "Single SKU: 4-5 weeks design + 2-3 weeks print. Multi-SKU system: 6-8 weeks design + 3-4 weeks print. We work backwards from launch dates to keep schedules realistic.",
      },
      {
        question: "Who owns the print files?",
        answer:
          "You — full editable source (Adobe Illustrator / InDesign) plus print-ready PDFs, handed over on payment.",
      },
    ],
  },

  "rapid-idea-testing": {
    title: "Rapid Idea Testing Services Malta | 14-Day Concept Validation | OARC Digital",
    description:
      "Test product, marketing, or service ideas in 14 days — landing-page test, paid traffic, customer interviews, written go / no-go report. Stop guessing, start measuring.",
    offers: [
      {
        name: "Single Idea Test",
        priceFrom: 4500,
        unitText: "PROJECT",
        description:
          "14 days — landing page, €1,500 ad spend, 5 customer interviews, written report.",
      },
      {
        name: "Idea Test Pack",
        priceFrom: 11500,
        unitText: "PROJECT",
        description:
          "Three parallel idea tests over 4 weeks — useful for picking among multiple concepts.",
      },
      {
        name: "Idea Testing Retainer",
        priceFrom: 3900,
        unitText: "MONTH",
        description:
          "One idea tested per month — for product or marketing teams with a steady pipeline of hypotheses to validate.",
      },
    ],
    features: [
      { name: "Landing-page concept and design" },
      { name: "Paid traffic and capture" },
      { name: "Customer interview synthesis" },
      { name: "Demand-signal scoring rubric" },
      { name: "Written go / no-go recommendation" },
      { name: "Reusable testing playbook" },
    ],
    faqs: [
      {
        question: "How is this different from /services/idea-validation-engine?",
        answer:
          "Idea Validation Engine is the productised offering with a fixed methodology and SKU. Rapid Idea Testing is the broader service framing — same approach, packaged for marketing or feature ideas in addition to product ideas.",
      },
      {
        question: "What does a 14-day test deliver?",
        answer:
          "A live landing page, paid traffic to it, an email capture / waitlist, 3-5 customer interviews from the captures, and a written go / no-go recommendation against pre-agreed demand signals.",
      },
      {
        question: "Why not just survey customers?",
        answer:
          "Surveys ask 'would you buy this' — and people lie. Tests measure 'did you click, sign up, give us money' — and behaviour doesn't lie. We use surveys as a complement, not a substitute.",
      },
      {
        question: "What if our idea doesn't pass?",
        answer:
          "You still get the written report — what we tested, what we learned, what to change. About 35% of failed validations recommend a tighter ICP or a different angle, not a kill.",
      },
      {
        question: "Can we test marketing ideas (not just product)?",
        answer:
          "Yes — landing page concepts, value-prop variants, pricing models, channel hypotheses. Same methodology, different demand signals (e.g. CPC reduction, CVR lift, qualified-meeting rate).",
      },
      {
        question: "What ad spend do you require?",
        answer:
          "Minimum €1,500 paid spend per test for statistical signal. Below that, the test runs but we caveat the conclusion as directional rather than definitive.",
      },
    ],
  },

  "revenue-automation": {
    title: "Revenue Automation Services Malta | RevOps, AI Agents, CRM Hygiene | OARC Digital",
    description:
      "Revenue automation for Malta and EU SMEs — RevOps, AI agents, CRM hygiene, lifecycle email, and billing — wired into one revenue engine that compounds.",
    offers: [
      {
        name: "RevOps Audit",
        priceFrom: 2900,
        unitText: "PROJECT",
        description:
          "3-week audit: every revenue tool, every CRM stage, every lifecycle automation. Output: a prioritised remediation roadmap.",
      },
      {
        name: "Revenue Engine",
        priceFrom: 5900,
        unitText: "MONTH",
        description:
          "Monthly delivery — AI agents, CRM hygiene, lifecycle automation, dashboard, weekly RevOps standup.",
      },
      {
        name: "RevOps Build",
        priceFrom: 22000,
        unitText: "PROJECT",
        description:
          "12-week build of a permanent revenue engine — CRM redesign, automation, AI agents, dashboards — handed over to your team.",
      },
    ],
    features: [
      { name: "CRM audit, redesign, and hygiene" },
      { name: "Lifecycle and lead nurture automation" },
      { name: "AI SDR and AI Support deployment" },
      { name: "Billing automation (Stripe, Chargebee)" },
      { name: "Revenue dashboards and forecasts" },
      { name: "Weekly RevOps cadence" },
    ],
    faqs: [
      {
        question: "What's revenue automation actually do?",
        answer:
          "Removes the 'one human has to do this' bottleneck from revenue activity — pipeline routing, deal-stage hygiene, lifecycle email, billing dunning, customer-success notifications. The aim is double the throughput at the same headcount.",
      },
      {
        question: "How is this different from /services/marketing-automation-suite?",
        answer:
          "Marketing Automation Suite is funnel + lifecycle email-led. Revenue Automation is end-to-end revenue ops — including CRM hygiene, billing, customer success, and finance integration. Both share tooling; this is the broader scope.",
      },
      {
        question: "What's a typical first-90-day result?",
        answer:
          "10-25% lift in pipeline-to-meeting conversion, 20-40% lift in marketing-attributed revenue, and 15-30% reduction in revenue ops headcount cost — measured per client and reported in a quarterly business review.",
      },
      {
        question: "Which CRMs do you build on?",
        answer:
          "HubSpot, Salesforce, Pipedrive, Close, Attio. We're CRM-agnostic but recommend a single source of truth — fragmented stacks dilute the automation gains.",
      },
      {
        question: "Do you take over our existing automation, or rebuild?",
        answer:
          "Audit-first. Most clients have working pieces (welcome flows, onboarding) and broken pieces (deal-stage hygiene, attribution). We keep what works and rebuild the broken layers.",
      },
      {
        question: "Where does the data live?",
        answer:
          "EU-region CRM tenants by default — HubSpot EU, Salesforce EU, etc. Custom builds host on Vercel + Postgres in EU regions for GDPR compliance.",
      },
    ],
  },

  "social": {
    title: "Social Media Strategy & Audit | OARC Digital Malta",
    description:
      "A one-time social media strategy and audit for Malta brands. Forensic teardown of your channels, competitor matrix, content pillars, and a 90-day execution plan you can run in-house or hand to any agency.",
    serviceType: "Social Media Strategy & Audit",
    offers: [
      {
        name: "Strategy Sprint",
        priceFrom: 2400,
        unitText: "PROJECT",
        description:
          "Two-week audit of one channel (Instagram, TikTok, or LinkedIn), competitor matrix, content pillar framework, and a 90-day posting plan. One read-out call.",
      },
      {
        name: "Strategy & Audit",
        priceFrom: 3900,
        unitText: "PROJECT",
        description:
          "Three-week audit across up to three channels, full competitor benchmark, paid-vs-organic mix recommendation, content pillars, 90-day editorial calendar, and a board-ready slide deck.",
      },
      {
        name: "Audit + Implementation Handover",
        priceFrom: 5800,
        unitText: "PROJECT",
        description:
          "Strategy & Audit deliverables plus a four-week implementation handover — onboarding your in-house team or any external agency, SOPs, reporting templates, and a 30-day check-in.",
      },
    ],
    features: [
      { name: "Channel-by-channel performance audit" },
      { name: "Competitor matrix (5-8 named competitors)" },
      { name: "Content pillar and message hierarchy" },
      { name: "90-day editorial calendar" },
      { name: "Paid-vs-organic mix recommendation" },
      { name: "Board-ready slide deck and read-out call" },
    ],
    faqs: [
      {
        question: "What exactly do I get when the audit is finished?",
        answer:
          "A board-ready slide deck (typically 35-50 slides), a competitor matrix in spreadsheet form, a 90-day editorial calendar with named content pillars, and a read-out call with the founder. Everything is yours to keep — no licensing, no lock-in.",
      },
      {
        question: "How is this different from /services/social-media-creative-management?",
        answer:
          "Different intent. /services/social-media-creative-management is an ongoing managed retainer where our pod runs your channels every day. This page is a one-time, project-based deliverable: you get the strategy and the plan, and you (or your in-house team, or another agency) execute. Buyers often start here, then graduate to the managed retainer once the plan is proven.",
      },
      {
        question: "Will you actually post for me?",
        answer:
          "Not under this engagement. The audit ends with a written plan and a handover. If you want us to execute, the natural next step is the managed retainer at /services/social-media-creative-management — we'll discount the audit fee against the first month if you continue with us.",
      },
      {
        question: "What channels do you audit?",
        answer:
          "Instagram, TikTok, LinkedIn, Facebook, YouTube, X, Threads, and Pinterest. Most Malta brands need a deep audit on two to three channels rather than a shallow audit on eight, so we scope per client during the kick-off call.",
      },
      {
        question: "How long does the audit take?",
        answer:
          "Strategy Sprint is two weeks from kick-off to read-out. Strategy & Audit is three weeks. Audit + Implementation Handover is seven weeks total (three weeks of audit, four weeks of handover and SOP work). Calendar invites land on day one.",
      },
      {
        question: "Do you work with brands outside Malta?",
        answer:
          "Yes. The methodology is the same. Malta clients get a competitor matrix weighted toward local players (and our knowledge of Birkirkara, Sliema, and Gozo media buying), while overseas clients get a benchmark against their primary geographic market.",
      },
    ],
  },
};
