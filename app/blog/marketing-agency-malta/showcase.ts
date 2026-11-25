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

export type Proof = { client: string; slug: string; value: string; label: string };
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

export const BIG_NUMBERS = [
  { value: "Millions", label: "of views every month across our brands" },
  { value: "Up to 5x", label: "sales pushed for the brands we grow" },
  { value: "#1", label: "on Google in Malta in 3 months, for MCW CBD" },
  { value: "12,000", label: "fans brought to the World Cup Fan Zone" },
  { value: "32", label: "named brands. Every case on our Work page is real" },
];

export const DEPARTMENTS: Department[] = [
  {
    name: "SEO and Google",
    line: "We get you found first.",
    proof: [
      { client: "MCW CBD", slug: "mcw-cbd", value: "#1", label: "On Google in Malta in 3 months" },
      { client: "MCW CBD", slug: "mcw-cbd", value: "€20,000", label: "Sales generated" },
      { client: "Calle Bistro", slug: "calle-bistro", value: "+48%", label: "Calls from Google" },
    ],
  },
  {
    name: "Social media and content",
    line: "Posts that fill tables and shops.",
    proof: [
      { client: "Kreta", slug: "kreta", value: "+28%", label: "Reservations from Instagram" },
      { client: "Tiffany Lounge", slug: "tiffany", value: "+24%", label: "Table bookings from Instagram" },
      { client: "Ricky Jr Burger", slug: "ricky-jr-burger", value: "50,000", label: "Views on daily burger reels" },
    ],
  },
  {
    name: "Paid ads",
    line: "Every euro sent where it sells.",
    proof: [
      { client: "Palino", slug: "palino", value: "+28%", label: "Delivery orders from two-town ads" },
      { client: "Tiffany Lounge", slug: "tiffany", value: "55%", label: "Engagement from paid campaigns" },
      { client: "Calle Bistro", slug: "calle-bistro", value: "400", label: "Diners on the reservation page" },
    ],
  },
  {
    name: "Events and launches",
    line: "We fill the room on day one.",
    proof: [
      { client: "Massive Promotions", slug: "massive-fan-zone", value: "12,000", label: "Fans at the Spinola Bay Fan Zone" },
      { client: "Spinola Gin Fest", slug: "spinola-gin-fest", value: "300,000", label: "People reached by campaign content" },
      { client: "Drink N More", slug: "drink-n-more", value: "2,000", label: "New followers in launch week" },
    ],
  },
  {
    name: "Food and hospitality",
    line: "More diners, more orders, more nights out.",
    proof: [
      { client: "Louisiana Mama", slug: "louisiana-mama", value: "700", label: "More meals sold" },
      { client: "Portomaso Casino", slug: "portomaso-casino", value: "+35%", label: "Restaurant booking clicks" },
      { client: "Kreta", slug: "kreta", value: "60,000", label: "Local diners reached" },
    ],
  },
  {
    name: "Websites, tracking and marketplaces",
    line: "Sites that sell, and prove it.",
    proof: [
      { client: "Tiffany Lounge", slug: "tiffany", value: "+50%", label: "Sales from website tracking" },
      { client: "PJAZZA", slug: "pjazza", value: "100", label: "New sellers onboarded" },
      { client: "PJAZZA", slug: "pjazza", value: "500", label: "Buyers starting a seller chat" },
    ],
  },
  {
    name: "Brand and creative",
    line: "Stories people remember and share.",
    proof: [
      { client: "Ashford", slug: "ashford-in-real-life", value: "50,000", label: "Shoppers reached by the launch story" },
      { client: "Maison Verre", slug: "maison-verre-discovery", value: "+50%", label: "Saves on launch posts" },
      { client: "Kinetic", slug: "kinetic-member-energy", value: "+35%", label: "Member-story shares" },
      { client: "Botanic Muse", slug: "botanic-muse-field-notes", value: "+40%", label: "Customer-led stories published" },
    ],
  },
  {
    name: "Gaming, sport and live",
    line: "Fans who come back.",
    proof: [
      { client: "Vertex", slug: "vertex-after-launch", value: "+25%", label: "Players returning after launch" },
      { client: "Arena One", slug: "arena-one-regional-signal", value: "+30%", label: "Regional esports views" },
      { client: "Fanline", slug: "fanline-live-ritual", value: "+31%", label: "Longer viewing during live events" },
      { client: "Live Information Experience", slug: "live-context", value: "+30%", label: "Fans returning to live updates" },
    ],
  },
  {
    name: "AI staff and sales systems",
    line: "Software that sells while you sleep.",
    proof: [
      { client: "Skyline", slug: "skyline-first-response", value: "+80%", label: "Enquiries ready for a personal call" },
      { client: "Vela", slug: "vela-signal-pipeline", value: "+45%", label: "Real buying signals acted on" },
      { client: "Meridian", slug: "meridian-retail-response", value: "-45%", label: "Lost customer handoffs" },
      { client: "Bluebridge", slug: "bluebridge-candidate-welcome", value: "-40%", label: "Candidate wait for a first reply" },
    ],
  },
  {
    name: "Automation and operations",
    line: "Hours back, every week.",
    proof: [
      { client: "Aurum", slug: "aurum-document-trail", value: "10 hrs", label: "Saved every week" },
      { client: "Belgrave", slug: "belgrave-client-time", value: "90%", label: "Requests to the right person first time" },
      { client: "Operations Data Foundation", slug: "data-foundation", value: "-25%", label: "Order errors" },
      { client: "Crownline", slug: "crownline-fresh-signal", value: "-40%", label: "Time spent checking stock" },
      { client: "Cobalt", slug: "cobalt-decision-thread", value: "-35%", label: "Time spent chasing decisions" },
      { client: "Northforge", slug: "northforge-adoption-ladder", value: "-30%", label: "Decision time on AI tests" },
      { client: "Wellbridge", slug: "wellbridge-clear-path", value: "-30%", label: "Calls asking what happens next" },
      { client: "Hearth", slug: "hearth-test-kitchen", value: "-45%", label: "Time spent reviewing campaigns" },
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
    why: "Ask for named clients and real numbers: sales, bookings, calls, views. \"We grew their social media\" is not a result.",
    a: "32 named brands, each with its own case page. We took MCW CBD to #1 on Google in Malta in 3 months.",
  },
  {
    q: "Who will actually work on my business?",
    why: "Many agencies bring their best people to the sales meeting, then hand the work to juniors. Ask for names, and meet them.",
    a: "Senior experts in every department. You meet the people who do your work.",
  },
  {
    q: "What do I get every month, and what costs extra?",
    why: "Get the full list in writing: what they make, how often, and what is extra, like tools, photos or ad fees.",
    a: "Your free plan comes in 48 hours, with the work and the price in writing. Your ad budget goes straight to Meta and Google.",
  },
  {
    q: "How will you measure results?",
    why: "If they cannot say what success looks like before they start, you cannot hold them to it.",
    a: "Targets are agreed before you pay. If we miss them, you get your money back.",
  },
  {
    q: "How long is the contract?",
    why: "A 12-month contract on day one protects the agency, not you.",
    a: "No 12-month trap. We keep clients by growing them.",
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

export const RED_FLAGS = [
  "can't show results in numbers",
  "guarantees you #1 on Google before they know your business",
  "wants 12 months signed on day one",
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
    a: "Ask seven questions before you sign: can you show me real results, who will work on my business, what do I get every month and what costs extra, how will you measure results, how long is the contract, who owns my accounts, and can you do everything in one place. If they can't answer in plain words and numbers, walk away.",
  },
  {
    q: "How much does a marketing agency in Malta cost?",
    a: "It depends on what you need: one channel, or the whole job of brand, content, ads, website and AI. Ask for one monthly price in writing with everything included, and keep your ad budget separate. OARC sends you a free plan with the price in 48 hours.",
  },
  {
    q: "What makes OARC Digital different from other marketing agencies in Malta?",
    a: "OARC Digital is Malta's first Creative + AI Systems Agency: a creative studio and a software team in one house, based in Birkirkara. One team runs your brand, content, social media, ads, SEO, website and AI staff, with experts in every department.",
  },
  {
    q: "Which brands has OARC Digital worked with?",
    a: "32 named brands are on our Work page, including MCW CBD, Tiffany Lounge, Portomaso Casino, Massive Promotions, Kreta, Palino, Louisiana Mama, Calle Bistro and PJAZZA. Our people have also worked with brands such as BrewDog, Betsson, Dishoom, Premier Inn and JA Resorts.",
  },
  {
    q: "Is it better to hire a freelancer or an agency in Malta?",
    a: "A freelancer covers one skill. An agency with in-house creative and software covers the whole job: brand, content, ads, website and automation, with backup and one plan. If you want growth across channels, choose the agency.",
  },
  {
    q: "How do I know if my current agency is underperforming?",
    a: "Ask for three results from the last 90 days, in numbers: bookings, sales, calls or leads. If they cannot name them, they are underperforming.",
  },
  {
    q: "Can an agency outside Malta handle marketing in Malta?",
    a: "It can, but Malta rewards local knowledge: the seasons, the towns, the language mix and how people book. OARC is in Birkirkara and works for local and international brands.",
  },
];
