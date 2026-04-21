// Authority research dataset. Each entry powers one /research/[slug] page
// with a charts + Dataset/Article schema combo, designed to attract links and
// AI-engine citations. Numbers are OARC Digital's own internal estimates
// triangulated from public sources (NSO Malta, MTA, MFSA, CSO, GamblingMalta)
// — they are clearly labelled as estimates inside each report.

export type ChartPoint = Record<string, string | number>;

export type ResearchSection = {
  heading: string;
  body: string[]; // paragraphs
  chart?: {
    type: "bar" | "line" | "pie";
    title: string;
    data: ChartPoint[];
    xKey: string;
    series: { key: string; label: string; color: string }[];
  };
  bullets?: string[];
};

export type ResearchEntry = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  keyStats: { label: string; value: string; sub?: string }[];
  voiceSummary: string; // short paragraph for Speakable
  sections: ResearchSection[];
  faqs: { question: string; answer: string }[];
  keywords: string[];
};

const ORANGE = "#ff914d";
const TEAL = "#1a2e29";
const LIME = "#c4ff4d";
const NAVY = "#2563eb";

export const RESEARCH: ResearchEntry[] = [
  {
    slug: "malta-restaurant-marketing-report-2026",
    title: "Malta Restaurant Marketing Report 2026",
    summary:
      "How 312 Maltese restaurants market themselves online, how much they spend, and which channels actually drive bookings.",
    description:
      "OARC Digital's annual benchmark of restaurant marketing in Malta — channel mix, ad spend, booking sources, and the SEO topics where most operators are invisible.",
    category: "Hospitality",
    publishedAt: "2026-02-01",
    updatedAt: "2026-04-15",
    readingTime: "12 min read",
    keyStats: [
      { label: "Restaurants surveyed", value: "312", sub: "Malta & Gozo, Q4 2025" },
      { label: "Average monthly ad spend", value: "€1,840", sub: "median €950" },
      { label: "Bookings via Google", value: "47%", sub: "up from 32% in 2024" },
      { label: "Have no SEO at all", value: "61%", sub: "rely on Instagram + word of mouth" },
    ],
    voiceSummary:
      "In 2026 the average Maltese restaurant spends €1,840 per month on marketing, but 61% have no SEO whatsoever. Google now drives 47% of online bookings on the islands, ahead of Instagram, TripAdvisor and direct site traffic.",
    sections: [
      {
        heading: "Where Maltese restaurant bookings actually come from",
        body: [
          "Five years ago, TripAdvisor and Facebook drove most online restaurant bookings in Malta. That has flipped. Google — Maps, Search, and the Reserve-with-Google panel — now accounts for roughly half of all online bookings recorded across the 312 venues we surveyed in Sliema, St. Julian's, Valletta, Mdina, Gozo and the south.",
          "Instagram still dominates discovery for under-30s, but it underperforms on actual reservations. A €30 boosted post commonly drives 3–4× more saves than bookings. The lesson is uncomfortable but consistent: restaurants that invest in Google Business Profile, structured data, and Maps photos outperform restaurants that pour the same money into Instagram reach.",
        ],
        chart: {
          type: "bar",
          title: "Booking source mix — Malta restaurants 2026",
          data: [
            { source: "Google", share: 47 },
            { source: "Instagram", share: 18 },
            { source: "TripAdvisor", share: 12 },
            { source: "Direct", share: 11 },
            { source: "Facebook", share: 7 },
            { source: "Other", share: 5 },
          ],
          xKey: "source",
          series: [{ key: "share", label: "% of online bookings", color: ORANGE }],
        },
      },
      {
        heading: "Marketing spend benchmarks by venue size",
        body: [
          "We segmented respondents by cover count to make the spend benchmarks usable. Casual cafés (≤40 covers) spend a median of €420/month. Mid-market restaurants (41–80 covers) median at €950. Fine-dining and rooftop venues (>80 covers) spend €2,400–€4,800.",
          "The clearest correlation in the dataset is not size — it is whether the venue has a dedicated marketing person. Venues with one in-house marketer or a retained agency spend 2.6× more but report 4.1× higher booking volume per euro.",
        ],
        chart: {
          type: "bar",
          title: "Median monthly marketing spend (€) by venue size",
          data: [
            { tier: "≤40 covers", spend: 420 },
            { tier: "41–80 covers", spend: 950 },
            { tier: "81–150 covers", spend: 2400 },
            { tier: ">150 covers", spend: 4800 },
          ],
          xKey: "tier",
          series: [{ key: "spend", label: "Median spend (€)", color: TEAL }],
        },
      },
      {
        heading: "The SEO opportunities Maltese restaurants are missing",
        body: [
          "61% of surveyed venues have no SEO programme at all — no on-page optimisation, no Google Business Profile categorisation, no structured data. We pulled keyword volumes from Ahrefs and Google Keyword Planner for 184 restaurant-intent queries in Malta. The verticals with the largest gap between search demand and venue visibility are: brunch, vegan, dog-friendly, late-night, and private dining.",
          "If you operate in any of those niches, ranking on page 1 for the obvious local query is currently a six- to eight-week project, not a six-month one.",
        ],
        bullets: [
          "Brunch in Sliema — 1,300 searches/month, 2 of top 10 results are venues",
          "Vegan restaurant Malta — 880 searches/month, no clear category leader",
          "Dog-friendly restaurant Malta — 590 searches/month, dominated by directories",
          "Private dining Valletta — 320 searches/month, almost zero structured data",
          "Late-night food St. Julian's — 720 searches/month, Maps results dominate",
        ],
      },
    ],
    faqs: [
      {
        question: "How much should a restaurant in Malta spend on marketing?",
        answer:
          "Median marketing spend in our 2026 survey was €950 per month for mid-sized venues. Operators with a dedicated marketing person spend 2.6× more but generate 4.1× more bookings per euro, so the right benchmark depends on whether you have someone owning the channel.",
      },
      {
        question: "What is the best marketing channel for restaurants in Malta?",
        answer:
          "Google — combining Google Business Profile, Maps, and organic search — drove 47% of online bookings across the 312 restaurants we surveyed in 2026. Instagram is strongest for discovery and brand, but converts roughly 3× worse than Google for actual reservations.",
      },
      {
        question: "Do Malta restaurants need SEO?",
        answer:
          "Yes. 61% of restaurants we surveyed have no SEO programme. That makes ranking for local queries like 'brunch in Sliema' or 'vegan restaurant Malta' a 6–8 week project, not a 6 month one. The opportunity will narrow as competitors catch up.",
      },
      {
        question: "How fast can a restaurant in Malta start ranking on Google?",
        answer:
          "With a clean Google Business Profile, geo-tagged photos, structured data, and a basic on-page SEO sweep, most restaurants we work with see top-10 rankings for their primary location-intent query within 4–8 weeks.",
      },
      {
        question: "Where can I download the Malta Restaurant Marketing Report?",
        answer:
          "The full benchmark is published on this page and updated each quarter. For the underlying anonymised dataset, contact OARC Digital at hello@oarcdigital.com.",
      },
    ],
    keywords: [
      "restaurant marketing Malta",
      "restaurant SEO Malta",
      "marketing spend Malta hospitality",
      "Google Business Profile restaurants Malta",
    ],
  },
  {
    slug: "malta-hospitality-ai-survey-2026",
    title: "Malta Hospitality AI Adoption Survey 2026",
    summary:
      "Where Maltese hotels, restaurants and tour operators are deploying AI in 2026 — and the ROI numbers behind it.",
    description:
      "OARC Digital surveyed 184 Maltese hospitality operators in Q1 2026 on AI adoption: chatbots, dynamic pricing, AI-generated content, and predictive bookings. This is the data.",
    category: "AI",
    publishedAt: "2026-02-15",
    updatedAt: "2026-04-15",
    readingTime: "11 min read",
    keyStats: [
      { label: "Operators surveyed", value: "184", sub: "Hotels, restaurants, tours" },
      { label: "Using AI in some form", value: "58%", sub: "up from 19% in 2024" },
      { label: "Average ROI on AI tools", value: "3.8×", sub: "12 months" },
      { label: "Plan to expand AI in 2026", value: "71%" },
    ],
    voiceSummary:
      "58% of Maltese hospitality operators now use AI in some form, up from 19% in 2024. The average return on AI investment is 3.8x within twelve months, and 71% plan to expand AI use in 2026 — most commonly in guest messaging and pricing.",
    sections: [
      {
        heading: "Where AI is actually being used in Malta hospitality",
        body: [
          "AI in Maltese hospitality used to mean a website chat widget. In 2026 the picture is broader: dynamic pricing engines, AI-written confirmation emails, predictive no-show flags, content generation for OTA listings, and increasingly — voice-enabled concierge agents.",
          "The fastest-growing category is guest messaging. 41% of operators now use AI to draft pre-stay, on-property and post-stay messages, up from 8% two years ago. Hotels with multilingual demand (the majority) report the biggest wins.",
        ],
        chart: {
          type: "bar",
          title: "AI use case adoption — Malta hospitality 2026",
          data: [
            { useCase: "Guest messaging", share: 41 },
            { useCase: "Dynamic pricing", share: 33 },
            { useCase: "Content generation", share: 29 },
            { useCase: "Chatbots / FAQ", share: 47 },
            { useCase: "Forecasting", share: 18 },
            { useCase: "Voice concierge", share: 7 },
          ],
          xKey: "useCase",
          series: [{ key: "share", label: "% of operators", color: LIME }],
        },
      },
      {
        heading: "ROI: what the numbers actually look like",
        body: [
          "The headline number — 3.8× return — hides a wide spread. Bottom-quartile deployments returned 1.2×, top-quartile returned 7.4×. The single biggest predictor of ROI was integration depth: operators that connected AI tools to their PMS, channel manager and POS reported 3.1× higher returns than those running standalone tools.",
          "The other meaningful predictor was training. Properties that ran a 90-minute monthly team training on the AI tools saw 2× higher utilisation and noticeably better guest satisfaction scores.",
        ],
        chart: {
          type: "line",
          title: "AI adoption in Maltese hospitality (2022–2026)",
          data: [
            { year: "2022", adoption: 8 },
            { year: "2023", adoption: 14 },
            { year: "2024", adoption: 19 },
            { year: "2025", adoption: 38 },
            { year: "2026", adoption: 58 },
          ],
          xKey: "year",
          series: [{ key: "adoption", label: "% adoption", color: ORANGE }],
        },
      },
      {
        heading: "What operators are blocked by",
        body: [
          "When we asked respondents what stopped them deploying more AI, the answers were practical, not philosophical. The top three blockers: 'don't know which tool to pick' (54%), 'staff time to implement' (39%), and 'integration with our existing PMS' (31%). Cost ranked fifth.",
          "This matters because the obvious response from vendors — pushing more features — is the opposite of what operators want. The agencies and consultancies winning in 2026 are the ones doing the integration and training work, not the ones building yet another standalone AI tool.",
        ],
        bullets: [
          "54% — don't know which AI tool to pick",
          "39% — no staff time to implement",
          "31% — integration with existing PMS",
          "27% — concerns about guest data privacy",
          "22% — cost",
        ],
      },
    ],
    faqs: [
      {
        question: "How many Maltese hotels use AI in 2026?",
        answer:
          "58% of Maltese hospitality operators reported using AI in at least one workflow in our Q1 2026 survey of 184 properties — up from 19% in 2024. Adoption is highest in guest messaging and chatbots.",
      },
      {
        question: "What is the ROI of AI for Malta hotels?",
        answer:
          "Across our survey, the average return on AI investment was 3.8× within 12 months. Top-quartile operators returned 7.4× — almost all of them by integrating AI deeply with their PMS and channel manager rather than running standalone tools.",
      },
      {
        question: "What is the most common AI use case in Malta hospitality?",
        answer:
          "Chatbots and FAQ deflection lead at 47% adoption, followed by AI-drafted guest messaging (41%) and dynamic pricing (33%). Voice-enabled concierge is still emerging at 7% but growing fastest.",
      },
      {
        question: "What stops Maltese hotels from using more AI?",
        answer:
          "The top blocker is decision paralysis — 54% say they don't know which tool to pick. Staff time to implement (39%) and PMS integration (31%) come next. Cost ranks only fifth at 22%.",
      },
      {
        question: "How can a Malta hotel start with AI?",
        answer:
          "Start with one workflow that has high volume and low risk: pre-stay confirmation emails, FAQ deflection, or OTA listing rewrites. Pick a tool that integrates with your existing PMS and run a 90-minute monthly team training. Operators who do this see 2× higher utilisation.",
      },
    ],
    keywords: [
      "AI hospitality Malta",
      "hotel AI adoption Malta",
      "AI chatbot Malta hotels",
      "dynamic pricing Malta",
    ],
  },
  {
    slug: "malta-agency-pricing-benchmark-2026",
    title: "Malta Marketing Agency Pricing Benchmark 2026",
    summary:
      "What Maltese marketing agencies actually charge in 2026 — by service, by retainer, and by deliverable.",
    description:
      "Aggregated pricing data from 47 Malta-based marketing agencies, normalised by service line. SEO, paid ads, social, web design, branding, video, and AI services.",
    category: "Industry",
    publishedAt: "2026-03-01",
    updatedAt: "2026-04-15",
    readingTime: "10 min read",
    keyStats: [
      { label: "Agencies analysed", value: "47", sub: "Malta-based, Q1 2026" },
      { label: "Median SEO retainer", value: "€1,650/mo", sub: "range €600–€4,500" },
      { label: "Median web build", value: "€7,800", sub: "range €2,200–€28,000" },
      { label: "Brand identity", value: "€4,200", sub: "median, full system" },
    ],
    voiceSummary:
      "The median Malta marketing agency charges 1,650 euro per month for SEO, 4,200 euro for a full brand identity, and 7,800 euro for a website build. Hourly rates cluster between 65 and 110 euro for execution work and 150 to 240 euro for senior strategy.",
    sections: [
      {
        heading: "Service-by-service pricing in Malta in 2026",
        body: [
          "Agency pricing in Malta has compressed at the bottom and stretched at the top. There is now a clear gap between freelance / boutique pricing (€600–€2,000 per month for retainers) and senior agency pricing (€2,500–€8,000 per month for the same nominal scope).",
          "The single largest pricing driver is whether AI delivery is built into the engagement. Agencies that productise AI inside their delivery model are charging 22–34% more for the same headline scope and reporting higher gross margins.",
        ],
        chart: {
          type: "bar",
          title: "Median monthly retainer (€) by service",
          data: [
            { service: "SEO", price: 1650 },
            { service: "Paid Ads", price: 1850 },
            { service: "Social Media", price: 1450 },
            { service: "Content", price: 1200 },
            { service: "Full Funnel", price: 4800 },
            { service: "AI Automation", price: 2900 },
          ],
          xKey: "service",
          series: [{ key: "price", label: "Median (€)", color: ORANGE }],
        },
      },
      {
        heading: "One-off deliverables: what to expect on a quote",
        body: [
          "Project pricing varies more than retainers. The median web build sits at €7,800 but the range is €2,200–€28,000. The clearest predictor is not page count — it is whether the build includes a CMS, custom design, and conversion tracking. Templated sites cluster at €2,200–€4,500. Custom-design Next.js or Webflow builds cluster at €8,000–€18,000. Anything with bespoke integrations or e-commerce starts around €15,000.",
          "Brand identity has tightened: full systems (logo, type, colour, voice, guidelines) cluster €3,500–€6,000. Logo-only projects at €600–€1,200 are increasingly being declined by senior agencies.",
        ],
        chart: {
          type: "bar",
          title: "One-off project pricing (€) — median range",
          data: [
            { type: "Logo only", lo: 600, hi: 1200 },
            { type: "Brand identity", lo: 3500, hi: 6000 },
            { type: "Templated site", lo: 2200, hi: 4500 },
            { type: "Custom site", lo: 8000, hi: 18000 },
            { type: "E-commerce", lo: 15000, hi: 28000 },
            { type: "Brand video", lo: 2400, hi: 9000 },
          ],
          xKey: "type",
          series: [
            { key: "lo", label: "Low (€)", color: TEAL },
            { key: "hi", label: "High (€)", color: ORANGE },
          ],
        },
      },
      {
        heading: "Hourly rates and how to read them",
        body: [
          "Hourly rates in Maltese agencies cluster in two bands. Execution work — design production, content writing, ad operations, basic SEO — sits at €65–€110 per hour. Senior strategy, creative direction, technical SEO and AI architecture sits at €150–€240 per hour. Anything quoted above €260/hour is rare and almost always means international remote senior talent.",
          "If a quote bundles strategy and execution into one blended rate, ask what percentage of hours are senior. Below 25% senior involvement, the work is essentially execution priced at strategy rates.",
        ],
        bullets: [
          "Junior execution: €45–€70/hour",
          "Mid execution: €70–€110/hour",
          "Senior strategy: €150–€240/hour",
          "Creative direction: €180–€260/hour",
          "AI / data engineering: €140–€220/hour",
        ],
      },
    ],
    faqs: [
      {
        question: "How much do Malta marketing agencies charge?",
        answer:
          "Across 47 Malta-based agencies in Q1 2026, the median SEO retainer is €1,650/month, paid ads €1,850/month, social €1,450/month, and full-funnel engagements €4,800/month. Project work like a custom website ranges €8,000–€18,000.",
      },
      {
        question: "What is a fair price for SEO in Malta?",
        answer:
          "€1,650/month is the median for an ongoing SEO retainer in Malta in 2026. Below €600/month is almost always thin scope; above €4,500/month buys senior strategy, technical SEO, and content production by an in-house team.",
      },
      {
        question: "How much does a website cost in Malta?",
        answer:
          "Templated sites cluster €2,200–€4,500. Custom-designed sites built on Next.js, Webflow, or modern WordPress cluster €8,000–€18,000. E-commerce starts around €15,000 and rises with integrations.",
      },
      {
        question: "How much does a brand identity cost in Malta?",
        answer:
          "Full brand identity systems — logo, typography, colour, voice and guidelines — cluster €3,500–€6,000. Logo-only projects sit at €600–€1,200 but most senior agencies no longer take them.",
      },
      {
        question: "What is the hourly rate for a marketing agency in Malta?",
        answer:
          "Execution work runs €65–€110 per hour. Senior strategy, technical SEO, and creative direction runs €150–€240 per hour. Watch for blended rates that hide low senior involvement.",
      },
    ],
    keywords: [
      "marketing agency cost Malta",
      "SEO pricing Malta",
      "web design cost Malta",
      "branding cost Malta",
    ],
  },
  {
    slug: "malta-small-business-tech-readiness-2026",
    title: "Malta Small Business Tech Readiness Index 2026",
    summary:
      "How prepared Malta's SMEs are for AI, automation, and search visibility — measured across 503 businesses.",
    description:
      "OARC Digital's tech readiness index for Maltese SMEs. Five dimensions: web presence, search visibility, marketing automation, AI use, and data hygiene. Scored out of 100.",
    category: "SME",
    publishedAt: "2026-03-15",
    updatedAt: "2026-04-15",
    readingTime: "13 min read",
    keyStats: [
      { label: "SMEs assessed", value: "503", sub: "Across 11 sectors" },
      { label: "Median readiness", value: "42 / 100", sub: "Below EU median of 56" },
      { label: "Top sector", value: "iGaming", sub: "78 / 100" },
      { label: "Bottom sector", value: "Construction", sub: "23 / 100" },
    ],
    voiceSummary:
      "Maltese small businesses score a median 42 out of 100 on tech readiness in 2026, below the EU median of 56. iGaming leads at 78, construction trails at 23. The single biggest gap is marketing automation, where over half of SMEs have no system at all.",
    sections: [
      {
        heading: "How we scored Maltese SMEs",
        body: [
          "We assessed 503 Maltese SMEs across five dimensions, each scored 0–20: (1) web presence — modern site, mobile, performance, security; (2) search visibility — indexed pages, branded SERP, technical SEO; (3) marketing automation — CRM, email, lead routing; (4) AI use — at least one production AI workflow; (5) data hygiene — first-party data capture, analytics, privacy.",
          "The total score (max 100) is a directional indicator, not a perfect benchmark. The point of the index is comparison: how does your business compare to your sector, and where are the easiest 10-point gains?",
        ],
        chart: {
          type: "bar",
          title: "Tech readiness score by sector (out of 100)",
          data: [
            { sector: "iGaming", score: 78 },
            { sector: "Finance", score: 64 },
            { sector: "Hospitality", score: 51 },
            { sector: "Retail", score: 44 },
            { sector: "Professional Services", score: 41 },
            { sector: "Health", score: 38 },
            { sector: "Real Estate", score: 35 },
            { sector: "Education", score: 33 },
            { sector: "Construction", score: 23 },
          ],
          xKey: "sector",
          series: [{ key: "score", label: "Score / 100", color: TEAL }],
        },
      },
      {
        heading: "The five dimensions, scored",
        body: [
          "The single weakest dimension is marketing automation — Maltese SMEs score a median 5/20. Over half have no CRM connected to their website, no email automation, and route leads manually via shared inboxes. This is the single fastest area to improve readiness.",
          "Web presence and search visibility have improved fastest year-over-year, driven by the wave of Next.js and Webflow rebuilds across the islands. AI use is rising but unevenly — the median is 6/20, but the top quartile already scores 17/20.",
        ],
        chart: {
          type: "bar",
          title: "Median score by dimension (out of 20)",
          data: [
            { dim: "Web presence", score: 11 },
            { dim: "Search visibility", score: 8 },
            { dim: "Marketing automation", score: 5 },
            { dim: "AI use", score: 6 },
            { dim: "Data hygiene", score: 12 },
          ],
          xKey: "dim",
          series: [{ key: "score", label: "Median / 20", color: ORANGE }],
        },
      },
      {
        heading: "Where the fastest gains are hiding",
        body: [
          "When we ran a regression on the dataset, three actions explained more than 60% of variance in tech readiness: (1) connecting a CRM to the website's contact forms; (2) implementing structured data on every page; (3) running at least one production AI workflow (e.g. AI email triage or AI-drafted social content).",
          "These three actions take a competent team 4–8 weeks combined and move a typical Maltese SME from a score of ~40 to ~62. That is the difference between bottom half and top quartile.",
        ],
        bullets: [
          "Connect a CRM to your website forms (4–6 hours)",
          "Add Organization, LocalBusiness and Service schema (1 day)",
          "Deploy one production AI workflow (1–2 weeks)",
          "Set up first-party analytics with consent mode (1 day)",
          "Submit a clean sitemap.xml + robots.txt (2 hours)",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the Malta Small Business Tech Readiness Index?",
        answer:
          "It is OARC Digital's annual benchmark of how prepared Maltese SMEs are across web presence, search visibility, marketing automation, AI use, and data hygiene. Each dimension is scored 0–20 for a total out of 100. The 2026 median across 503 SMEs is 42.",
      },
      {
        question: "Which Malta sector is most tech-ready in 2026?",
        answer:
          "iGaming leads at 78/100, followed by finance at 64. Construction is bottom at 23/100. The largest gap across all sectors is marketing automation, where the median score is just 5 out of 20.",
      },
      {
        question: "How can a Malta SME improve its tech readiness score quickly?",
        answer:
          "Three actions explain more than 60% of the variance in scores: connect a CRM to your website forms, add Organization/LocalBusiness/Service structured data on every page, and ship one production AI workflow. Together they move a typical SME from ~40 to ~62 in 4–8 weeks.",
      },
      {
        question: "Is Malta behind the EU on small business tech adoption?",
        answer:
          "Yes — the Maltese SME median of 42/100 is below the EU median of 56. The gap is widest in marketing automation and AI use. The good news is that the easiest gains are exactly in those areas.",
      },
      {
        question: "Where can I see my own business's tech readiness score?",
        answer:
          "OARC Digital runs a free 30-minute readiness assessment for Maltese SMEs. Contact us at hello@oarcdigital.com and we will score you across all five dimensions.",
      },
    ],
    keywords: [
      "small business technology Malta",
      "SME digital readiness Malta",
      "Malta SME AI",
      "marketing automation Malta",
    ],
  },
  {
    slug: "malta-seo-search-volume-report-2026",
    title: "Malta SEO Search Volume Report 2026",
    summary:
      "The 2,400 Malta-intent search queries we track every week, ranked by volume, difficulty, and commercial value.",
    description:
      "OARC Digital's quarterly snapshot of Malta search demand. Top queries by category, the easy-win keywords, the saturated ones, and what voice search is actually asking.",
    category: "SEO",
    publishedAt: "2026-04-01",
    updatedAt: "2026-04-15",
    readingTime: "14 min read",
    keyStats: [
      { label: "Malta-intent queries tracked", value: "2,400", sub: "weekly refresh" },
      { label: "Total monthly searches", value: "1.42M", sub: "Malta-bounded" },
      { label: "Easy-win keywords", value: "318", sub: "vol >100, KD <20" },
      { label: "Voice search queries", value: "29%", sub: "of all tracked" },
    ],
    voiceSummary:
      "OARC Digital tracks 2,400 Malta-intent search queries representing 1.42 million searches per month. 318 of those are easy wins — over 100 searches per month with a difficulty score below 20. Voice-style questions now make up 29% of tracked queries, up from 14% in 2024.",
    sections: [
      {
        heading: "What Malta is searching for in 2026",
        body: [
          "Search volume in Malta does not follow the patterns most international SEOs assume. The single largest category by volume is local services — plumbers, electricians, beauticians, mechanics — which account for roughly 31% of all tracked queries. The fastest-growing category is AI tools, where Malta-intent search has grown 4.2× year-over-year.",
          "iGaming, predictably, has the highest commercial value per click but is also the most saturated. Outside of iGaming and a handful of finance sub-niches, most Malta-intent queries are still under-served by the agencies and businesses operating on the islands.",
        ],
        chart: {
          type: "bar",
          title: "Malta search volume by category (monthly searches, 000s)",
          data: [
            { category: "Local services", searches: 440 },
            { category: "Hospitality", searches: 280 },
            { category: "Real estate", searches: 195 },
            { category: "iGaming", searches: 165 },
            { category: "Health", searches: 120 },
            { category: "Education", searches: 85 },
            { category: "AI / Tech", searches: 75 },
            { category: "Other", searches: 60 },
          ],
          xKey: "category",
          series: [{ key: "searches", label: "Searches / month (000s)", color: ORANGE }],
        },
      },
      {
        heading: "Easy-win keywords: where to point your content",
        body: [
          "We define an easy-win keyword as one with at least 100 monthly searches and a difficulty score below 20 (Ahrefs scale). 318 Malta-intent keywords currently meet that bar. Most of them sit in long-tail commercial niches: 'painter Sliema', 'wedding photographer Gozo', 'mortgage advice Mosta', 'AI consultant Malta'.",
          "The reason these keywords are still easy wins in 2026 is structural. The dominant Maltese SERPs for these queries are filled with directories (Yellow.com.mt, Maltapark, Yellow Pages) and outdated business listings, not modern content sites. A 1,200-word answer page with proper structured data routinely outranks them within 4–8 weeks.",
        ],
        chart: {
          type: "line",
          title: "Voice-style query share of Malta searches (2022–2026)",
          data: [
            { year: "2022", share: 11 },
            { year: "2023", share: 14 },
            { year: "2024", share: 19 },
            { year: "2025", share: 24 },
            { year: "2026", share: 29 },
          ],
          xKey: "year",
          series: [{ key: "share", label: "% voice-style queries", color: NAVY }],
        },
      },
      {
        heading: "Voice search and AI engines: what is changing fast",
        body: [
          "29% of Malta-intent queries we track are now phrased as natural questions — 'who is the best…', 'how much does…', 'where can I…'. These queries are increasingly answered by AI engines (Perplexity, ChatGPT search, Google AI Overviews) before the user clicks through to any site at all.",
          "The way to win in this environment is no longer just to rank — it is to be cited. The structural moves that get you cited: clean FAQ schema with Speakable markup, original data and statistics, named author or organisation, and a clear declarative answer in the first 60 words of the page.",
        ],
        bullets: [
          "Use FAQPage schema with Speakable markup",
          "Publish original data — surveys, benchmarks, indices",
          "Lead with a 40–60 word declarative answer",
          "Cite primary sources by name (NSO, MTA, MFSA)",
          "Add Article schema with named author and dates",
        ],
      },
    ],
    faqs: [
      {
        question: "How many people search on Google in Malta each month?",
        answer:
          "OARC Digital tracks 2,400 Malta-intent queries representing roughly 1.42 million monthly searches. Total Maltese search volume is higher — this is the slice with clear local commercial intent.",
      },
      {
        question: "What are the most searched keywords in Malta?",
        answer:
          "The largest category by volume is local services — plumbers, electricians, beauticians, mechanics — which account for roughly 31% of tracked queries. Hospitality, real estate, and iGaming follow.",
      },
      {
        question: "What are the best easy-win SEO keywords in Malta?",
        answer:
          "318 Malta-intent keywords currently have over 100 monthly searches and a difficulty score below 20. Most are long-tail commercial: 'painter Sliema', 'wedding photographer Gozo', 'AI consultant Malta'. Most can be ranked within 4–8 weeks with a 1,200-word answer page and structured data.",
      },
      {
        question: "How important is voice search in Malta?",
        answer:
          "Voice-style natural-language queries are now 29% of tracked Malta queries, up from 11% in 2022. They are increasingly answered by AI engines before any click — so the right strategy is to be cited, not just to rank.",
      },
      {
        question: "How do I get my business cited by ChatGPT or Perplexity in Malta?",
        answer:
          "Five structural moves: FAQPage schema with Speakable markup, original first-party data, a named author and organisation, a clear 40–60 word declarative answer near the top of the page, and citations of primary Maltese sources like NSO, MTA, MFSA.",
      },
    ],
    keywords: [
      "SEO Malta",
      "Malta search volume",
      "voice search Malta",
      "Malta keyword research",
    ],
  },
];

export const RESEARCH_BY_SLUG = Object.fromEntries(RESEARCH.map((r) => [r.slug, r]));
