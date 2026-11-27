// Content for /blog/marketing-agency-malta, the "Why OARC Digital" showcase page.
//
// Sources (Nov 2026):
// - Client names and every result below come from `results` / `stats` in
//   lib/data/premium-work/caseProof.ts (achieved outcomes, never targets). The owner
//   confirmed all 32 brands on the Work page are real clients.
// - "Millions of views a month" and "sales up to 5x" are the owner's own statements
//   about the portfolio (25 Nov 2026), written as OARC's claim.
// - "Malta's first Creative + AI Systems Agency" is OARC's own tagline, used on the
//   site since April 2026.
// - Quotes are word for word from lib/reviews/approvedQuotes.ts.
// - "Brands our people have worked with" are the names on the homepage logo wall.
// Do not add awards, rankings or numbers that are not in those sources.

import { ADDRESS_ONE_LINE } from "@/lib/seo/nap";

export type Proof = { client: string; slug: string; label: string };
export type Department = { name: string; line: string; proof: Proof[] };

export const CLIENTS: { name: string; slug: string }[] = [
  { name: "MCW CBD", slug: "mcw-cbd" },
  { name: "Tiffany Lounge", slug: "tiffany" },
  { name: "Portomaso Casino", slug: "portomaso-casino" },
  { name: "Massive Promotions", slug: "massive-fan-zone" },
  { name: "Spinola Gin Fest", slug: "spinola-gin-fest" },
  { name: "Drink N More", slug: "drink-n-more" },
  { name: "Calle Bistro", slug: "calle-bistro" },
  { name: "Kreta", slug: "kreta" },
  { name: "Louisiana Mama", slug: "louisiana-mama" },
  { name: "Palino", slug: "palino" },
  { name: "Ricky Jr Burger", slug: "ricky-jr-burger" },
  { name: "PJAZZA", slug: "pjazza" },
  { name: "Meridian", slug: "meridian-retail-response" },
  { name: "Cobalt", slug: "cobalt-decision-thread" },
  { name: "Skyline", slug: "skyline-first-response" },
  { name: "Vela", slug: "vela-signal-pipeline" },
  { name: "Ashford", slug: "ashford-in-real-life" },
  { name: "Kinetic", slug: "kinetic-member-energy" },
  { name: "Maison Verre", slug: "maison-verre-discovery" },
  { name: "Botanic Muse", slug: "botanic-muse-field-notes" },
  { name: "Vertex", slug: "vertex-after-launch" },
  { name: "Arena One", slug: "arena-one-regional-signal" },
  { name: "Wellbridge", slug: "wellbridge-clear-path" },
  { name: "Aurum", slug: "aurum-document-trail" },
  { name: "Hearth", slug: "hearth-test-kitchen" },
  { name: "Fanline", slug: "fanline-live-ritual" },
  { name: "Crownline", slug: "crownline-fresh-signal" },
  { name: "Bluebridge", slug: "bluebridge-candidate-welcome" },
  { name: "Northforge", slug: "northforge-adoption-ladder" },
  { name: "Belgrave", slug: "belgrave-client-time" },
  { name: "Operations Data Foundation", slug: "data-foundation" },
  { name: "Live Information Experience", slug: "live-context" },
];

/** Homepage logo wall: brands our people have worked with. */
export const PEOPLE_BRANDS = [
  "BrewDog", "Betsson", "Dishoom", "Premier Inn", "Malmaison", "JA Resorts", "Festival Republic",
  "LeoVegas", "eCabs", "Skyscanner", "The Hoxton", "Wise", "SumUp", "Unibet", "TONI&GUY",
  "Cafe del Mar", "Kilimanjaro Live", "LEON", "Wahaca", "Zizzi", "talabat", "tabby", "Turtle Bay",
];

// Owner (2026-11-27): keep this page generic. A few numbers at the top only, with no
// brand names next to them. Department bullets in words (no numbers), fewer of them.
// No "32 brands" line anywhere.
export const BIG_NUMBERS = [
  { value: "Millions", label: "of views every month across the brands we grow" },
  { value: "Up to 5x", label: "more sales for the brands we work with" },
  { value: "#1", label: "on Google in Malta for local brands" },
  { value: "Thousands", label: "of fans brought to live events and launches" },
];

export const DEPARTMENTS: Department[] = [
  {
    name: "SEO and Google",
    line: "We get you found first.",
    proof: [
      { client: "MCW CBD", slug: "mcw-cbd", label: "Taken to the top of Google in Malta" },
      { client: "Calle Bistro", slug: "calle-bistro", label: "More calls straight from Google" },
    ],
  },
  {
    name: "Social media and content",
    line: "Posts that fill tables and shops.",
    proof: [
      { client: "Kreta", slug: "kreta", label: "Instagram turned into a source of reservations" },
      { client: "Ricky Jr Burger", slug: "ricky-jr-burger", label: "Daily burger reels people actually watch" },
    ],
  },
  {
    name: "Paid ads",
    line: "Every euro sent where it sells.",
    proof: [
      { client: "Palino", slug: "palino", label: "More delivery orders from local ads" },
      { client: "Tiffany Lounge", slug: "tiffany", label: "Paid campaigns people stop and engage with" },
    ],
  },
  {
    name: "Events and launches",
    line: "We fill the room on day one.",
    proof: [
      { client: "Massive Promotions", slug: "massive-fan-zone", label: "Thousands of fans at the Spinola Bay Fan Zone" },
      { client: "Spinola Gin Fest", slug: "spinola-gin-fest", label: "Campaign content seen right across Malta" },
    ],
  },
  {
    name: "Food and hospitality",
    line: "More diners, more orders, more nights out.",
    proof: [
      { client: "Louisiana Mama", slug: "louisiana-mama", label: "More meals sold, week after week" },
      { client: "Portomaso Casino", slug: "portomaso-casino", label: "More people booking the restaurant" },
    ],
  },
  {
    name: "Websites, tracking and marketplaces",
    line: "Sites that sell, and prove it.",
    proof: [
      { client: "Tiffany Lounge", slug: "tiffany", label: "Website tracking that shows which posts sell" },
      { client: "PJAZZA", slug: "pjazza", label: "A marketplace where sellers and buyers meet" },
    ],
  },
  {
    name: "Brand and creative",
    line: "Stories people remember and share.",
    proof: [
      { client: "Ashford", slug: "ashford-in-real-life", label: "A launch story shoppers followed" },
      { client: "Kinetic", slug: "kinetic-member-energy", label: "Member stories people shared" },
    ],
  },
  {
    name: "Gaming, sport and live",
    line: "Fans who come back.",
    proof: [
      { client: "Vertex", slug: "vertex-after-launch", label: "Players coming back after launch" },
      { client: "Fanline", slug: "fanline-live-ritual", label: "Fans watching longer during live events" },
    ],
  },
  {
    name: "AI staff and sales systems",
    line: "Software that sells while you sleep.",
    proof: [
      { client: "Skyline", slug: "skyline-first-response", label: "Enquiries that arrive ready for a personal call" },
      { client: "Meridian", slug: "meridian-retail-response", label: "Fewer customers lost between teams" },
    ],
  },
  {
    name: "Automation and operations",
    line: "Hours back, every week.",
    proof: [
      { client: "Aurum", slug: "aurum-document-trail", label: "Hours saved every week on paperwork" },
      { client: "Belgrave", slug: "belgrave-client-time", label: "Requests that reach the right person first time" },
    ],
  },
];

export const COMPARE = {
  cols: ["OARC Digital", "Typical agency", "Freelancer"],
  rows: [
    { what: "Creative studio in-house (film, photo, design)", v: ["Yes", "Often outsourced", "One skill"] },
    { what: "Software and AI built in-house", v: ["Yes", "Rarely", "No"] },
    { what: "Social, ads, SEO and website in one plan", v: ["Yes", "Split across teams", "One channel"] },
    { what: "Experts in every department", v: ["Yes", "Juniors do the work", "One person"] },
    { what: "One person to call", v: ["Yes", "Account manager", "Yes"] },
    { what: "You own every account and file", v: ["Always", "Sometimes", "Sometimes"] },
    { what: "Targets agreed first, money back if missed", v: ["Yes", "Rarely", "No"] },
  ],
};

// "How to choose a marketing agency" guide (owner, 2026-11-25): the old buyer's guide
// points, rewritten in the words people type into Google. This page ranks #1 for
// "how to choose a marketing agency" (Search Console, 28 days to 2026-11-23).
// No prices here: €500 lives on the offer page only.
export const TESTS = [
  {
    q: "Can you show me real results?",
    why: "Ask for named clients and real results: sales, bookings, calls. \"We grew their social media\" is not a result.",
    a: "Real, named brands, each with its own case page, from local restaurants to international names.",
  },
  {
    q: "Who will actually work on my business?",
    why: "Many agencies bring their best people to the sales meeting, then hand the work to juniors. Ask for names, and meet them.",
    a: "Senior experts in every department. You meet the people who do your work.",
  },
  {
    q: "What do I get every month, and what costs extra?",
    why: "Get the full list in writing: what they make, how often, and what is extra, like tools, photos or ad fees.",
    a: "Your free plan shows the work and the price in writing, before you sign. Your ad budget goes straight to Meta and Google.",
  },
  {
    q: "How will you measure results?",
    why: "If they cannot say what success looks like before they start, you cannot hold them to it.",
    a: "Targets are agreed with you, in writing, before we start.",
  },
  {
    q: "How long is the contract?",
    why: "A long contract on day one protects the agency, not you.",
    a: "No long lock-in. We keep clients by growing them.",
  },
  {
    q: "Who owns my accounts and content?",
    why: "You should own your pages, ad accounts, website, photos and videos. If you leave, everything leaves with you.",
    a: "Always you. Ad accounts, footage, pages and data stay in your name.",
  },
  {
    q: "Can you do everything in one place?",
    why: "Most businesses hire a designer, a video team, an ads person and a web developer separately. Four suppliers, and no one in charge.",
    a: "Yes. Creativity and software in one house: film, design, social, ads, SEO, websites and AI, in one plan.",
  },
];

// From the old "number one" article (owner-approved, live 2026-11-19 to 2026-11-25).
// Dropped: the Google rating line (no rating stored in the site data) and the
// "#1 for best digital marketing malta" line (not in the last 28 days of Search Console).
export const BEST_MEANS = [
  { k: "For results", v: "Real, named clients, in every department." },
  { k: "For range", v: "Creative, marketing, AI and software in one team." },
  { k: "For reach", v: "Local family businesses and international brands." },
  { k: "For speed", v: "A free plan fast, and AI systems set up in days." },
  { k: "For risk", v: "Targets agreed up front, and you own everything." },
];

// From the old /aeo/best-marketing-agency-malta page, in plain words.
export const OPTIONS = [
  { who: "A traditional Malta agency", good: "Known names and long relationships.", catch: "Slow to use AI, juniors often do the work, and long contracts." },
  { who: "A freelancer", good: "Cheap and flexible.", catch: "One person, one skill, and no backup when they are busy or sick." },
  { who: "An agency abroad", good: "Big names and big portfolios.", catch: "Nobody in Malta, expensive, and new to how this market works." },
  { who: "Hiring your own marketer", good: "Full attention on your business.", catch: "One person can't do strategy, video, design, ads and reporting." },
];

// Kept generic on this page (owner, 2026-11-27); the full terms are in
// components/MoneyBackGuaranteeSection.tsx.
export const GUARANTEE =
  "We agree your targets before we start. If we don't hit them, you get your money back. Terms apply. And you own everything: your ad accounts, footage, pages and data stay in your name.";

export const ONE_TEAM =
  "Most businesses run a designer, a social media freelancer, an ads person, a web developer and an IT company. Five invoices. Five opinions. Nobody owns the result. With OARC Digital, the people who make your ads also build the website the ads send people to, and the AI that answers every enquiry those ads bring in. Nothing gets lost in between.";

export const ONE_TEAM_QUOTE = {
  quote: "We used OARC for content first, then advertising and some AI work. It was useful not having to manage different teams.",
  credit: "Doris — G3 Group",
};

export const RED_FLAGS = [
  "can't show you real results",
  "promises you the top of Google before they know your business",
  "wants a long contract signed on day one",
  "won't give you admin access to your own accounts",
  "posts the same kind of content for every client",
];

export const QUOTES = [
  { quote: "Having the creative, marketing, and technical side with one team made things much simpler for us.", credit: "Steve — Rent Anytime" },
  { quote: "We highly recommend OARC for marketing. They are easy to talk to and they actually help.", credit: "Alan — Dhalia Real Estate Services" },
  { quote: "The work helped people understand what we do. That was something we were not explaining very well before.", credit: "Simon — Eden Leisure Group" },
];

export const FAQS = [
  {
    q: "How do I choose a marketing agency in Malta?",
    a: "Ask seven questions before you sign: can you show me real results, who will work on my business, what do I get every month and what costs extra, how will you measure results, how long is the contract, who owns my accounts, and can you do everything in one place. If they can't answer in plain words, walk away.",
  },
  {
    q: "How much does a marketing agency in Malta cost?",
    a: "It depends on what you need: one channel, or the whole job of brand, content, ads, website and AI. Ask for one monthly price in writing with everything included, and keep your ad budget separate. OARC sends you a free plan with the price first.",
  },
  {
    q: "What makes OARC Digital different from other marketing agencies in Malta?",
    a: "OARC Digital is Malta's first Creative + AI Systems Agency: a creative studio and a software team in one house, based in Birkirkara. One team runs your brand, content, social media, ads, SEO, website and AI staff, with experts in every department.",
  },
  {
    q: "Which brands has OARC Digital worked with?",
    a: "The brands on our Work page include MCW CBD, Tiffany Lounge, Portomaso Casino, Massive Promotions, Kreta, Palino, Louisiana Mama, Calle Bistro and PJAZZA. Our people have also worked with brands such as BrewDog, Betsson, Dishoom, Premier Inn and JA Resorts.",
  },
  {
    q: "Is it better to hire a freelancer or an agency in Malta?",
    a: "A freelancer covers one skill. An agency with in-house creative and software covers the whole job: brand, content, ads, website and automation, with backup and one plan. If you want growth across channels, choose the agency.",
  },
  {
    q: "How do I know if my current agency is underperforming?",
    a: "Ask for their latest results in plain terms: bookings, sales, calls or leads. If they cannot name them, they are underperforming.",
  },
  {
    q: "Can an agency outside Malta handle marketing in Malta?",
    a: "It can, but Malta rewards local knowledge: the seasons, the towns, the language mix and how people book. OARC is in Birkirkara and works for local and international brands.",
  },
  {
    q: "Which is the best marketing and AI agency in Malta?",
    a: "OARC Digital in Birkirkara makes the case with proof: creative, marketing, AI and software in one team, results for real, named brands in every department, and targets agreed before it starts. See it all on the OARC Digital homepage, oarcdigital.com.",
  },
  {
    q: "Is there an agency in Malta that does both marketing and AI?",
    a: "Yes. OARC Digital does branding, content, video, social media, ads, websites and SEO, and also builds AI systems and software that answer enquiries, book customers and follow up leads.",
  },
  {
    q: "How fast will I see results from a marketing agency?",
    a: "Ads can show early signs within weeks. Social media builds over a few months. Google rankings take longer, but they keep paying back. Your free plan shows what to expect for your business.",
  },
  {
    q: "What happens in the first month?",
    a: "We get access to your accounts, set up tracking, measure where you are today and agree targets with you. Then we fix the biggest problem first.",
  },
  {
    q: "Does OARC Digital offer a guarantee?",
    a: "Yes. OARC Digital agrees your targets before it starts, and if they are not hit, you get your money back. Terms apply.",
  },
  {
    q: "Where is OARC Digital based?",
    a: `${ADDRESS_ONE_LINE}. We work with clients across Malta and Gozo, and abroad.`,
  },
];
