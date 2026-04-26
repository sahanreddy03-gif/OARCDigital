// Per-service Malta context — one paragraph + structured anchors per
// SERVICE_SCHEMAS slug. The audit (`scripts/audit-framework.ts` Layer-2
// gate) fails when a service in SERVICE_SCHEMAS has no entry here, when
// any required town/anchor is missing from the paragraph, or when two
// paragraphs are exact duplicates (template-clone failure mode).
//
// Rendered by `components/seo/MaltaContextBlock.tsx`, mounted just above
// the FAQ section on every /services/<slug>/PageContent.tsx.
//
// AUTHORING RULES:
//  - Every paragraph MUST mention both `towns` literally (case-insensitive)
//    and the `anchor` literally. The audit enforces this.
//  - Paragraphs MUST be substantively unique. No template fill-ins.
//  - Aim for 3-5 sentences and ~250-650 characters of body text.
//  - No banned phrases (the existing phraseBlocklist scan applies here too).

export type MaltaContextEntry = {
  /** 2 specific Malta towns, neighbourhoods, or districts referenced in the paragraph. */
  towns: [string, string];
  /** A single industry, regulator, or domain-specific Malta anchor referenced in the paragraph. */
  anchor: string;
  /** The body paragraph rendered on the page. */
  paragraph: string;
};

export const MALTA_CONTEXT: Record<string, MaltaContextEntry> = {
  "web-design": {
    towns: ["Sliema", "Valletta"],
    anchor: "hospitality",
    paragraph:
      "We design Malta-market websites with the buying journey already plotted. A Sliema seafront restaurant gets a different conversion path to a Valletta heritage hotel, even though both sit inside the same hospitality vertical — Sliema converts on Instagram-driven walk-ins, Valletta converts on multi-language pre-booking traffic from cruise itineraries. Every build opens with a 60-minute UX audit against the three closest local competitors so the brief is grounded in the actual SERP, not a template.",
  },

  "social-media-creative-management": {
    towns: ["St Julian's", "Mosta"],
    anchor: "tourism",
    paragraph:
      "Social posting that wins in Malta is split into two very different audiences. The St Julian's expat-and-tourism crowd lives on Instagram saves and TikTok geo-tags, while the Mosta family-decision audience still moves on Facebook event shares and parish-feast content. Our content calendar separates the two so the same restaurant brand can run a Paceville reel campaign for cruise tourists in the morning and a Sunday-market Mosta carousel in the afternoon — without diluting either voice.",
  },

  "video-production": {
    towns: ["Valletta", "Birkirkara"],
    anchor: "Malta Civil Aviation Directorate",
    paragraph:
      "Our Birkirkara studio handles interview, product, and short-form work in-house, and we scout locations across Valletta, Mdina, Gozo, and the Three Cities for brand films. Drone work is operated under a Malta Civil Aviation Directorate permit so aerial cuts of Valletta bastions, Comino, or any controlled zone are shot legally and insured. We hand over native masters plus pre-cut 9:16 / 1:1 / 16:9 variants so the same shoot day feeds Reels, TikTok, paid social, and the website hero.",
  },

  branding: {
    towns: ["Birkirkara", "Valletta"],
    anchor: "MFSA",
    paragraph:
      "Brand systems built for Malta scale-ups are quieter and more disciplined than UK or US competitors expect. A Valletta legal practice and a Birkirkara fintech both need a wordmark that survives a regulator review — MFSA brand-mark guidance, Maltese trademark search, and Latin-character readability for non-English-language clients are all baked into our identity workshops. We ship Adobe + Figma source files plus a trademark-ready master logo, so the next ten years of vendors do not introduce drift.",
  },

  "paid-advertising": {
    towns: ["Sliema", "Ħamrun"],
    anchor: "iGaming",
    paragraph:
      "Paid spend in Malta gets cut to one-tenth of an EU media plan, which means every creative and audience must be earning. We segment Sliema's affluent under-40 crowd separately from Ħamrun's multilingual community, run Maltese-and-English ad copy variants where the audience demands it, and keep iGaming spend inside the Maltese-licensed creative inventory so MGA marketing rules stay clean. ROAS targets are set against pipeline, not platform-reported conversions, because Meta over-attributes by ~30% on small Malta audiences.",
  },

  "marketing-automation-suite": {
    towns: ["Gżira", "Qormi"],
    anchor: "IDPC",
    paragraph:
      "Most Malta automation projects stall on the same two issues: WhatsApp templates the Gżira iGaming operator never approved with Meta, and Qormi trades businesses with no consented contact list. We treat IDPC consent as a first-class part of the design — every webform, every WhatsApp opt-in, every CRM merge logs a lawful basis. The HubSpot/Make/n8n stack is then wired so a Qormi fabricator's missed WhatsApp message becomes a routed call inside two minutes, with the conversation already attached to the CRM record.",
  },

  "ai-sdr-agent": {
    towns: ["Mrieħel", "San Ġwann"],
    anchor: "MGA",
    paragraph:
      "An AI SDR working a Malta TAM is a different animal to one prospecting the EU at large. The Mrieħel iGaming and San Ġwann SME audiences are tightly networked — every C-suite contact knows three others in the same building, so a tone-deaf outbound message poisons the well for two competing services at once. Our agents are tuned to the local cadence (Maltese surnames, Maltese title conventions, MGA-licensed company nuances), and never email a regulated entity inside the MFSA / MGA / IDPC compliance perimeter without a human approver in the chain.",
  },

  "seo-services": {
    towns: ["Valletta", "Sliema"],
    anchor: "Malta SERP",
    paragraph:
      "The Malta SERP is a small-pond / sharp-teeth market. A handful of agencies fight over the same Sliema retail and Valletta hospitality keyword sets, often sharing the same backlink sources, and the AI-overview rollout has compressed click-through-rates further. Our retainers focus on three durable advantages — first-party Malta data, deep topical clusters around iGaming / hospitality / fintech, and llms.txt + Schema.org coverage so AI assistants can quote our clients verbatim instead of summarising a competitor.",
  },

  "saas-development": {
    towns: ["SmartCity Malta", "Birkirkara"],
    anchor: "MDIA",
    paragraph:
      "SaaS shipped from Malta competes globally but lives under MDIA / MITA technical-standards expectations from day one. Our Birkirkara delivery team works with founders inside SmartCity Malta and the wider tech corridor on multi-tenant Postgres on Neon or AWS Frankfurt, billing on Stripe with VAT-MOSS, and access logging that holds up to an MFSA innovation-hub audit if the product crosses into regulated territory. We refuse to ship a SaaS without an export-my-data button — the GDPR exposure is too cheap to insure against badly.",
  },

  "web-apps-development": {
    towns: ["St Julian's", "Sliema"],
    anchor: "PSD2",
    paragraph:
      "Custom web apps for St Julian's iGaming operators and Sliema fintech founders share two requirements: PSD2-compliant payment flows where money moves, and EU-resident infrastructure where personal data lives. Our default stack is Next.js on Vercel Frankfurt with a Neon EU database, Auth.js with passkeys, and Stripe Connect for payouts. Internal admin surfaces ship with role-based access and audit logging because most of these clients sit one questionnaire away from an SRA / MFSA / MGA controls review.",
  },

  "content-marketing": {
    towns: ["Mosta", "St Julian's"],
    anchor: "MGA marketing rules",
    paragraph:
      "Content for Malta brands is two markets in one document. The Mosta family-decision-maker reads slowly, in English with the occasional Maltese phrase, and trusts long-form articles linked to a parish or community angle. The St Julian's iGaming buyer reads in five minutes between meetings and wants benchmarks, not opinion. We brief writers against MGA marketing rules where licences are involved, never make a financial-return claim without a tested figure, and publish in clusters so the topical authority compounds across the whole client site.",
  },

  "email-marketing": {
    towns: ["Birkirkara", "Sliema"],
    anchor: "IDPC",
    paragraph:
      "Birkirkara SMBs and Sliema premium retailers run on the same two assumptions: that their CRM list is GDPR-clean, and that segmentation actually changes open rates in a country of 500,000 people. Both are usually wrong. We re-permission lists against IDPC consent rules before the first campaign, prune anonymised contacts, and segment by purchase recency rather than persona — at Malta scale, recency beats demographics every time. Templates are built mobile-first because the Maltese inbox skews 78% mobile.",
  },

  "ecommerce-development": {
    towns: ["Valletta", "Mosta"],
    anchor: "Maltese VAT",
    paragraph:
      "Ecommerce for a Valletta artisan brand and a Mosta family retailer face the same hidden tax: Maltese VAT is three-tier (18% / 7% / 5%) and most off-the-shelf themes break checkout when applied wrong. Our builds bake the Maltese rate matrix into the cart, support multi-currency for cruise-passenger spend, and ship a Maltese Post integration as the default carrier with DHL / FedEx as overflow. Every store launches with a Schema.org Product feed for Google Shopping and Bing Merchant Center.",
  },

  "wordpress-development": {
    towns: ["Qormi", "Ħamrun"],
    anchor: "NIC.mt",
    paragraph:
      "WordPress is still the right answer for a Qormi family business with three people who need to update content weekly and a Ħamrun multi-language site that has to ship in English, Maltese, and Italian. We run multilingual on Polylang or WPML, host inside the EU (Hetzner Frankfurt or AWS Dublin) with a NIC.mt-registered .com.mt domain mapped cleanly, and lock the admin behind two-factor and Wordfence — a default WordPress install is hammered by bots within hours of going live.",
  },

  "shopify-development": {
    towns: ["Sliema", "Valletta"],
    anchor: "cruise tourism",
    paragraph:
      "Shopify is the natural choice for Sliema fashion brands and Valletta artisans who want a bilingual store live in three weeks, not three months. We theme on Dawn or a custom 2.0 theme, wire multi-currency to capture cruise tourism spend (USD and GBP convert at the gateway), and connect Klaviyo for the email loop because Shopify's own marketing tools under-deliver in low-volume EU markets. Tax rules are configured for Maltese VAT plus EU OSS, so the merchant is never accidentally non-compliant on a Berlin or Milan order.",
  },

  "devops-services": {
    towns: ["Mrieħel", "SmartCity Malta"],
    anchor: "MGA technical standards",
    paragraph:
      "Mrieħel iGaming and SmartCity Malta engineering teams reach for us when they need someone who understands the difference between an MGA technical standards audit and a generic ISO 27001 review. We harden CI/CD on GitHub Actions with branch protection and signed commits, deploy to AWS eu-central-1 or Frankfurt-region Vercel with locked-down IAM, and ship monitoring (Datadog or Grafana) tuned to the latency profile that Malta-to-EU traffic actually has. Postmortems are written, not buried in Slack — every incident leaves a documented prevention.",
  },

  "database-design": {
    towns: ["Valletta", "SmartCity Malta"],
    anchor: "EU data residency",
    paragraph:
      "Database work for MFSA-licensed fintechs in Valletta and MDIA-licensed innovators in SmartCity Malta carries an EU data residency obligation that off-the-shelf US-tier services routinely violate. We design Postgres schemas on Neon or AWS RDS in Frankfurt or Dublin, separate PII from operational data so subject-access requests do not require a full-table dump, and add row-level security where multi-tenant isolation matters. Every schema review includes an explicit retention policy — IDPC will ask for it, and \"forever\" is not an answer.",
  },
};

/** Returns the entry for a slug or null if none defined. Pure helper for the component. */
export function getMaltaContext(slug: string): MaltaContextEntry | null {
  return MALTA_CONTEXT[slug] ?? null;
}
