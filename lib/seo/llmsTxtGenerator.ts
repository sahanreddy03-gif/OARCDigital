// Single source of truth for the AEO/llms.txt + llms-full.txt
// surface coverage of the canonical Core 60 pages.
//
// Why this module exists (Task #135):
//   The existing `llmsFullBuilder.ts` only walks SERVICE_SCHEMAS +
//   PILLAR_SCHEMAS — that's 16 services + 4 pillars = 20 pages. The
//   ranked Core 60 (`.local/memory/core-url-rank.md`, mirrored in
//   `lib/seo/topPages.ts`) covers another ~40 supporting / spoke pages
//   that ChatGPT, Perplexity, Claude, Gemini and Google AI Overviews
//   should be able to cite. Without an entry in llms.txt /
//   llms-full.txt, these pages are effectively invisible to the AI
//   answer engines.
//
// Responsibilities:
//   1. Resolve every TOP_PAGES path → { title, description, canonical,
//      kind } using the framework schemas where available, otherwise
//      a curated supplemental table sourced from each page's own
//      `export const metadata` (so we don't drift from the live <head>).
//   2. Provide `validateCoreCoverage()` so the gate fails loudly when
//      a TOP_PAGES path has no resolvable metadata — that's the
//      "missing entry" condition the task brief locks in.
//   3. Provide `buildCoreIndexSection()` (autogen block for llms.txt)
//      and `buildSupplementalLlmsFullEntries()` (extra body block
//      that llmsFullBuilder.ts splices in after the framework
//      sections) — keeping all generation logic in one file so the
//      compact index and the full reference can never drift apart.
//
// Authoring rules:
//   - Pure module, no side effects, no IO.
//   - Adding a new TOP_PAGES path REQUIRES a SUPPLEMENTAL_META entry
//     (or a SERVICE_SCHEMAS / PILLAR_SCHEMAS framework entry). The
//     gate enforces this.
//   - When a page's <head> title/description changes upstream, mirror
//     it here. The audit-framework tag lays the trap; the gate catches it.

import { TOP_PAGES, type TopPage } from "./topPages";
import { SERVICE_SCHEMAS } from "./serviceSchemaConfig";
import { PILLAR_SCHEMAS } from "./pillarSchemaConfig";

export type CorePageMeta = {
  path: string;
  title: string;
  description: string;
  canonical: string;
  /** "framework" = covered by SERVICE_SCHEMAS / PILLAR_SCHEMAS (full entry).
   *  "supplemental" = lighter stub (title + description + NAP CTA). */
  source: "framework" | "supplemental";
  kind: TopPage["kind"];
  tier: TopPage["tier"];
};

function canonicalFor(path: string): string {
  return path === "/" ? "https://oarcdigital.com" : `https://oarcdigital.com${path}`;
}

// Curated metadata for every TOP_PAGES path NOT covered by
// SERVICE_SCHEMAS / PILLAR_SCHEMAS. Titles + descriptions mirror the
// `export const metadata` of the corresponding `app/<path>/page.tsx`
// at HEAD — when those drift, update here too (the gate's parity
// check will not catch a wording drift on its own; this is a
// content-team responsibility flagged in the module header).
const SUPPLEMENTAL_META: Record<string, { title: string; description: string }> = {
  // ── Pillar / nav supporting shells ────────────────────────────────────
  "/solutions": {
    title: "Business Automation & Revenue Solutions — Malta's First | OARC Digital",
    description:
      "Automate your Malta business with OARC Digital. Workflow automation, CRM integration, API connections, lead funnels, email sequences & custom software development. Eliminate manual processes, reduce costs by 60%, and scale operations. Malta's premier automation partner.",
  },
  "/services": {
    title: "Our Services | AI Creative, AI Employees & Revenue Automation",
    description:
      "Explore OARC Digital's comprehensive suite of AI-powered services: creative production, AI employees for hire, and revenue automation solutions. Elite marketing services designed for ambitious brands in Malta and globally.",
  },
  "/our-work": {
    title: "Our Work | Case Studies & Success Stories | OARC Digital",
    description:
      "Explore OARC Digital's portfolio of successful AI-powered marketing campaigns and creative projects for global brands. Real results, authentic metrics, and proven expertise in AI creative and revenue automation.",
  },
  "/contact": {
    title: "Contact OARC Digital | Get in Touch with Our Team",
    description:
      "Talk to the OARC Digital team in Birkirkara CBD about AI creative, AI employees, and revenue automation. Walk in to The Brewhouse on weekdays, call +356 7971 1799, or book a slot online.",
  },
  "/pricing": {
    title: "Pricing Plans | OARC Digital",
    description:
      "Flexible plans built for growth. Pay for outcomes, not outputs. 10x faster than traditional agencies.",
  },
  "/why-us": {
    title: "Who We Are | Our Founding Story | OARC Digital Malta",
    description:
      "The founding story of OARC Digital — why Sahan Reddy started a Birkirkara studio that puts creative, AI engineering, and growth automation under one roof for Maltese businesses.",
  },
  "/blog": {
    title: "OARC Digital Blog | AI Marketing, Creative Services & Growth Strategies",
    description:
      "Expert insights on AI marketing, creative services, and revenue growth. Learn from real case studies, how-to guides, and industry best practices.",
  },
  "/tools": {
    title: "AI Tools & Tech Stack | OARC Digital",
    description:
      "Discover the 80+ AI sales tools, marketing automation, and creative software we use to deliver results. From Clay and Instantly to Midjourney and Figma.",
  },
  "/about": {
    title: "About OARC Digital | Malta's AI-Native Creative & Automation Agency",
    description:
      "Founded in Birkirkara to bring AI, creative, and automation under one roof for Maltese businesses. Meet the team and the operating principles behind OARC Digital.",
  },
  "/case-studies": {
    title: "Case Studies — OARC Digital Malta | Detailed Engagement Write-Ups",
    description:
      "Detailed long-form case studies from OARC Digital across hospitality, iGaming, real estate, fintech, and SaaS. Methodology, measured outcomes, and the systems we built.",
  },
  "/industries": {
    title: "Industries We Serve in Malta | OARC Digital",
    description:
      "OARC Digital serves restaurants, hotels, healthcare, legal, professional services, construction, beauty, automotive, education, NGOs, iGaming, fintech, real estate, retail, ecommerce, fitness, wellness, and events across Malta. Pick your industry to see how we package the offer.",
  },
  "/intelligence": {
    title: "Business Diagnostics | OARC Intelligence",
    description:
      "Discover what's costing your business. AI-powered diagnostics identify revenue leakage, operational inefficiencies, and hidden cost centers across 8 industries.",
  },
  "/diagnostics": {
    title: "Free Business Diagnostics — Malta | OARC Digital",
    description:
      "Four free tools — Industry Scan, Growth Simulator, AI Workforce Designer, and the Cortex Business Intelligence Scan — for Malta SMEs who want a fast read on where revenue is leaking and what to fix first.",
  },
  "/enterprise": {
    title: "Enterprise Solutions | OARC Digital for Large Organizations",
    description:
      "Enterprise-grade AI marketing solutions from OARC Digital. Scalable AI employees, custom creative production, and revenue automation systems designed for ambitious organizations across Europe, Middle East, and Asia.",
  },
  "/roadmap-2026": {
    title: "Road Map 2026 | OARC Digital's AI Innovation Journey",
    description:
      "Discover OARC Digital's vision for the future of AI-powered marketing. Interactive timeline showcasing our commitment to AI innovation, creative excellence, and revenue automation leadership from Malta to the world.",
  },
  "/pdf-hub": {
    title: "PDF Marketing Hub — Capabilities, Profiles & One-Pagers | OARC Digital",
    description:
      "Download OARC Digital's printable capabilities deck, company profile, AI creative profile, and one-pager. Built for Malta-market sales conversations and EU partner intros.",
  },

  // ── AI services ───────────────────────────────────────────────────────
  "/services/ai-consulting": {
    title: "AI Consulting | AI Strategy & Implementation | OARC Digital Malta",
    description:
      "Strategic AI consulting from OARC Digital. Transform your marketing and operations with expert AI strategy, implementation, and optimization services.",
  },
  "/services/ai-support-specialist": {
    title: "AI Customer Support Agent | 24/7 Automated Support | OARC Digital",
    description:
      "Deploy an AI support agent that handles customer inquiries 24/7. Instant responses, ticket resolution, and seamless escalation to human agents when needed.",
  },
  "/services/ai-appointment-booker": {
    title: "Appointment Booker Agent | AI Scheduling Assistant | OARC Digital",
    description:
      "Reduce no-shows by 20% with intelligent scheduling. Our AI Appointment Booker handles availability, reminders, and rescheduling automatically.",
  },
  "/services/ai-data-analyst": {
    title: "Data Insights Analyst | AI-Powered Business Intelligence | OARC Digital",
    description:
      "Turn data chaos into strategic dashboards. Our AI Data Analyst transforms raw data into actionable insights with machine learning and real-time analytics.",
  },
  "/services/ai-admin-agent": {
    title: "AI Admin Agent | Inbox & Calendar Automation Malta",
    description:
      "Reclaim 15+ hours weekly. AI admin agent triages inbox, books and reschedules meetings, files docs, and runs SOPs across your team — Malta-built.",
  },
  "/services/hire-ai-employees": {
    title: "AI Virtual Talent Hub | Autonomous AI Agents On-Demand | OARC Digital Malta",
    description:
      "Hire autonomous AI agents as on-demand team members. Our production-tested agents think, adapt, and execute 24/7 while slashing your hiring costs. Malta-based support.",
  },

  // ── Software / engineering services ───────────────────────────────────
  "/services/custom-software-development": {
    title: "Custom Software Development | Web Apps & Enterprise Solutions | OARC Digital",
    description:
      "Build powerful custom software solutions tailored to your business. Full-stack development with React, Node.js, Python. From MVPs to enterprise platforms.",
  },
  "/services/mobile-apps-development": {
    title: "Mobile App Development | iOS & Android | OARC Digital",
    description:
      "Build apps people love. Native iOS, Android, and cross-platform development. From MVP to millions of users.",
  },
  "/services/api-integration": {
    title: "API Integration Malta | Connect Any System | OARC Digital",
    description:
      "Custom API development and third-party integration for Malta businesses. Stripe, Salesforce, Twilio, and 500+ platforms. REST, GraphQL, webhooks — enterprise-grade reliability.",
  },
  "/services/mvp-development": {
    title: "MVP Development Services Malta | Launch Your Startup in 8-12 Weeks | OARC Digital",
    description:
      "Build your MVP with a Malta-based product development team. From concept validation to market launch in 8-12 weeks. 40+ MVPs shipped. Get a free consultation.",
  },

  // ── Creative spoke services ───────────────────────────────────────────
  "/services/social": {
    title: "Social Media Strategy & Audit | OARC Digital Malta",
    description:
      "A one-time social media strategy and audit for Malta brands. Forensic teardown of your channels, competitor matrix, content pillars, and a 90-day execution plan.",
  },
  "/services/influencer": {
    title:
      "Malta Influencer Marketing | Local Creator Network for Hospitality, Lifestyle & iGaming",
    description:
      "Malta-local creator partnerships for hospitality, lifestyle, sport, food and MGA-licensed iGaming brands. Maltese creators briefed and contracted to move bookings, deposits and footfall.",
  },
  "/services/influencer-marketing": {
    title: "Influencer Marketing | Creator Partnerships | OARC Digital",
    description:
      "Premium influencer marketing campaigns from OARC Digital. Connect with authentic creators and drive results through strategic influencer partnerships.",
  },
  "/services/motion-design": {
    title: "Motion Design | Animation & Motion Graphics | OARC Digital",
    description:
      "Elite motion design and animation services. OARC Digital creates stunning motion graphics, explainer videos, and animated content that captivates audiences.",
  },
  "/services/presentation-pitch": {
    title: "Presentation Design | Pitch Decks | OARC Digital Malta",
    description:
      "Elite presentation and pitch deck design from OARC Digital. Create compelling visual narratives that win deals and inspire action.",
  },
  "/services/ad-creative": {
    title: "Ad Creative Design | Performance Marketing Creative | OARC Digital",
    description:
      "High-converting ad creative from OARC Digital. Design performance marketing assets that drive results across paid social, display, and video advertising.",
  },
  "/services/email-creative": {
    title: "Email Creative Design | Email Marketing Design | OARC Digital",
    description:
      "Premium email design services that drive engagement and conversions. OARC Digital creates stunning email campaigns combining creative excellence with marketing strategy.",
  },
  "/services/print-packaging": {
    title: "Print & Packaging Design | Physical Product Design | OARC Digital",
    description:
      "Premium print and packaging design services. OARC Digital creates stunning physical brand experiences from product packaging to marketing collateral.",
  },
  "/services/illustration": {
    title: "Illustration Services | Custom Digital Art | OARC Digital Malta",
    description:
      "Premium custom illustration and digital art from OARC Digital. Unique visual storytelling combining traditional artistry with AI-enhanced creative workflows.",
  },
  "/services/design-systems": {
    title: "Design Systems | Scalable UI Frameworks | OARC Digital",
    description:
      "Build comprehensive design systems with OARC Digital. Create consistent, scalable brand experiences across all digital touchpoints with elite design system architecture.",
  },
  "/services/immersive-3d-ar": {
    title: "3D & AR Experiences | Immersive Design | OARC Digital Malta",
    description:
      "Cutting-edge 3D and augmented reality experiences from OARC Digital. Create immersive brand experiences that engage audiences in innovative ways.",
  },

  // ── Marketing / growth / revenue services ─────────────────────────────
  "/services/growth-strategy": {
    title: "Growth Strategy & Consulting | Strategic Planning | OARC Digital",
    description:
      "Expert growth strategy consulting. Market validation, growth experiments, strategic planning, and scaling roadmaps that transform ambitious businesses into market leaders.",
  },
  "/services/performance-analytics": {
    title: "Performance Analytics & Reporting | Data-Driven Insights | OARC Digital",
    description:
      "Custom analytics dashboards, ROI tracking, attribution modeling, and performance insights. Transform data into actionable growth strategies.",
  },
  "/services/lead-generation": {
    title: "Lead Generation | B2B & B2C Lead Gen | OARC Digital Malta",
    description:
      "Premium lead generation services combining AI automation with creative strategy. OARC Digital delivers qualified leads at scale for ambitious brands.",
  },
  "/services/revenue-automation": {
    title: "Revenue Automation Malta | AI Revenue Engine | OARC Digital",
    description:
      "AI-powered revenue automation for Malta businesses. OARC Digital builds systems that generate and convert leads automatically. Contact hello@oarcdigital.com.",
  },
  "/services/funnel-automation": {
    title: "Funnel Automation | Conversion Optimization | OARC Digital Malta",
    description:
      "Automate your marketing funnels with OARC Digital. Build, test, and optimize conversion funnels using AI-powered automation for predictable revenue growth.",
  },
  "/services/customer-acquisition": {
    title: "Customer Acquisition Malta | Predictable CPA at Scale | OARC Digital",
    description:
      "End-to-end customer acquisition engineering for Malta and EU brands. We build the attribution model, run the channels, and report one number: cost-per-acquired-customer.",
  },
};

export function resolveCorePageMeta(p: TopPage): CorePageMeta {
  // Pillar pages — PILLAR_SCHEMAS keys are paths like "/" and "/creative".
  if (p.kind === "pillar") {
    const pillar = (PILLAR_SCHEMAS as Record<string, { title: string; description: string }>)[p.path];
    if (pillar) {
      return {
        path: p.path,
        title: pillar.title,
        description: pillar.description,
        canonical: canonicalFor(p.path),
        source: "framework",
        kind: p.kind,
        tier: p.tier,
      };
    }
  }
  // Service pages — SERVICE_SCHEMAS keys are bare slugs.
  if (p.kind === "service") {
    const slug = p.path.replace(/^\/services\//, "");
    const svc = (SERVICE_SCHEMAS as Record<string, { title: string; description: string }>)[slug];
    if (svc) {
      return {
        path: p.path,
        title: svc.title,
        description: svc.description,
        canonical: canonicalFor(p.path),
        source: "framework",
        kind: p.kind,
        tier: p.tier,
      };
    }
  }
  const sup = SUPPLEMENTAL_META[p.path];
  if (sup) {
    return {
      path: p.path,
      title: sup.title,
      description: sup.description,
      canonical: canonicalFor(p.path),
      source: "supplemental",
      kind: p.kind,
      tier: p.tier,
    };
  }
  // Coverage hole — caller (validateCoreCoverage / generators) MUST surface.
  return {
    path: p.path,
    title: "",
    description: "",
    canonical: canonicalFor(p.path),
    source: "supplemental",
    kind: p.kind,
    tier: p.tier,
  };
}

/** Returns paths that have neither framework nor supplemental metadata. */
export function validateCoreCoverage(): string[] {
  const missing: string[] = [];
  for (const p of TOP_PAGES) {
    const meta = resolveCorePageMeta(p);
    if (!meta.title || !meta.description) missing.push(p.path);
  }
  return missing;
}

/** Throws if any TOP_PAGES path lacks resolvable metadata. Used by the
 *  generators so a missing page hard-fails llms-full.txt regeneration
 *  AND its --check parity gate (which is wired into seo-gate.sh). */
export function assertCoreCoverage(): void {
  const missing = validateCoreCoverage();
  if (missing.length > 0) {
    throw new Error(
      `[llmsTxtGenerator] Core 60 coverage FAILED — ${missing.length} TOP_PAGES path(s) ` +
        `have no SERVICE_SCHEMAS / PILLAR_SCHEMAS / SUPPLEMENTAL_META entry:\n` +
        missing.map((p) => `  - ${p}`).join("\n") +
        `\n  Add a framework entry or extend SUPPLEMENTAL_META in lib/seo/llmsTxtGenerator.ts.`,
    );
  }
}

export const CORE_INDEX_START = "<!-- AUTOGEN:CORE-60-INDEX:START -->";
export const CORE_INDEX_END = "<!-- AUTOGEN:CORE-60-INDEX:END -->";

/** llms.txt block: ranked Core 60 listing (URL + one-line title).
 *  Replaces nothing existing — bracketed by its own AUTOGEN markers so
 *  it can sit alongside the existing CITABLE-FACTS section. */
export function buildCoreIndexSection(): string {
  assertCoreCoverage();
  const lines: string[] = [];
  lines.push(CORE_INDEX_START);
  lines.push("");
  lines.push("## Canonical Core 60 (ranked)");
  lines.push("");
  lines.push(
    "Auto-generated from lib/seo/topPages.ts + lib/seo/llmsTxtGenerator.ts. The single ranked list of core URLs OARC Digital wants AI answer engines (ChatGPT, Perplexity, Claude, Gemini, Copilot) to know about and cite. Order matches `.local/memory/core-url-rank.md`. Do not hand-edit between the AUTOGEN markers — re-run the generator instead.",
  );
  lines.push("");
  let n = 0;
  for (const p of TOP_PAGES) {
    n += 1;
    const meta = resolveCorePageMeta(p);
    const cleanTitle = meta.title.replace(/\s*\|\s*OARC Digital.*$/i, "").trim();
    lines.push(`${n}. [${cleanTitle}](${meta.canonical}) — tier ${p.tier}`);
  }
  lines.push("");
  lines.push(CORE_INDEX_END);
  return lines.join("\n");
}

/** Cite-able facts true for every Core 60 page (location, contact,
 *  pricing handoff). Kept generic-but-true so AI engines have at least
 *  one anchor fact per page even when the framework schema is absent. */
function commonFactsFor(m: CorePageMeta): string[] {
  return [
    `OARC Digital is headquartered at Level 1, The Brewhouse, Central Business District, Birkirkara CBD 2010, Malta — the team running ${m.canonical} works on-island. (source: https://oarcdigital.com/contact)`,
    `${m.canonical} is part of OARC Digital's ranked Core 60 (tier ${m.tier}, ${m.kind}) — the canonical pages OARC Digital wants AI answer engines to cite for queries about its services. (source: https://oarcdigital.com/sitemap.xml)`,
    `Engagements scoped from ${m.canonical} start with a free 30-minute discovery call; the resulting quote is fixed-fee or outcome-priced (no open-ended retainers). (source: https://oarcdigital.com/pricing)`,
  ];
}

/** Two evergreen Q&A pairs for every supplemental Core 60 page. Same
 *  structure as the framework FAQ block so AI engines can ingest a
 *  consistent shape across all 60 pages. */
function commonFaqsFor(m: CorePageMeta): { q: string; a: string }[] {
  const subject = m.title.replace(/\s*[\|—–-]\s*OARC Digital.*$/i, "").trim();
  return [
    {
      q: `How do I engage OARC Digital for ${subject}?`,
      a: `Start at ${m.canonical} or message the Birkirkara team on WhatsApp +356 7971 1799 / hello@oarcdigital.com. Every engagement opens with a free 30-minute discovery call to scope the brief, after which OARC Digital returns a fixed-fee or outcome-priced quote — no open-ended retainers.`,
    },
    {
      q: `Where is the OARC Digital team that delivers this work based?`,
      a: `OARC Digital's head office is at Level 1, The Brewhouse, Central Business District, Birkirkara CBD 2010, Malta. The team works on-island and serves clients across the EU, the Middle East, and Asia remotely.`,
    },
  ];
}

/** llms-full.txt block: full-shape entries (title, canonical,
 *  description, key facts, FAQ summary, pricing/contact) for every
 *  TOP_PAGES path NOT already covered by a framework schema. Spliced
 *  into `buildLlmsFullBody()` after the Pillar + Service sections so
 *  AI engines see the same NAP and conversion handoff everywhere and
 *  every Core 60 entry meets the same output contract. */
export function buildSupplementalLlmsFullEntries(): string {
  assertCoreCoverage();
  const lines: string[] = [];
  const supplementals = TOP_PAGES.map(resolveCorePageMeta).filter(
    (m) => m.source === "supplemental",
  );
  if (supplementals.length === 0) return "";
  lines.push("## Core supporting pages (Top 60 spokes & shells)");
  lines.push("");
  lines.push(
    "Reference entries for the canonical Core 60 pages that don't carry a full 6-layer framework schema. Each entry gives the AI answer engines a citable description, three anchor facts, two Q&A pairs, and a pricing/contact handoff to the Birkirkara HQ.",
  );
  lines.push("");
  for (const m of supplementals) {
    lines.push(`### ${m.title}`);
    lines.push(`Canonical: ${m.canonical}`);
    lines.push("");
    lines.push("**Description**");
    lines.push(m.description);
    lines.push("");
    lines.push(`**Tier**: ${m.tier} · **Kind**: ${m.kind}`);
    lines.push("");
    lines.push("**Cite-able facts**");
    lines.push("");
    for (const f of commonFactsFor(m)) lines.push(`- ${f}`);
    lines.push("");
    lines.push("**FAQs**");
    lines.push("");
    for (const { q, a } of commonFaqsFor(m)) {
      lines.push(`Q: ${q}`);
      lines.push(`A: ${a}`);
      lines.push("");
    }
    lines.push("**Pricing & contact**");
    lines.push(
      "Pricing: free 30-minute discovery call, then fixed-fee or outcome-priced quote (see https://oarcdigital.com/pricing). Contact: OARC Digital, Level 1, The Brewhouse, Mdina Road, Birkirkara CBD 2010, Malta. WhatsApp +356 7971 1799 · hello@oarcdigital.com",
    );
    lines.push("");
    lines.push("---");
    lines.push("");
  }
  return lines.join("\n");
}
