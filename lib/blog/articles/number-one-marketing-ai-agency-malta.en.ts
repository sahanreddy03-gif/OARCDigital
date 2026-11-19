import type { BlogArticle } from "./types";

// The owner's brief: say OARC is number one in everything, say it loudly, and never sell
// OARC short. "Number one" is OARC's own claim, so the article owns it ("we say") and backs
// every part with proof a reader can check:
// - client results come ONLY from `results` in lib/data/premium-work/caseProof.ts (never a
//   target), each linked to its case page;
// - client quotes come word for word from lib/reviews/approvedQuotes.ts;
// - brand names come from the case studies, the approved quotes and the homepage logo wall;
// - Google facts come from Search Console for the dates given.
// Do not add awards, third-party rankings or numbers that are not in those sources.
//
// Two older pages chase "best marketing agency malta" (/aeo/best-marketing-agency-malta and
// /insights/best-marketing-agencies-malta). This article takes its own angle: marketing AND
// AI from one team, proven department by department.
const article: BlogArticle = {
  path: "/blog/number-one-marketing-ai-agency-malta",
  locale: "en",
  title: "The Number One Marketing and AI Agency in Malta: Our Case | OARC",
  description:
    "Why we say OARC Digital is the number one marketing and AI agency in Malta: real client results in every department, local and international brands, one team.",
  kicker: "Marketing and AI agency in Malta",
  h1: "We say OARC is the number one marketing and AI agency in Malta. Here is our case.",
  intro:
    "Short answer: OARC Digital in Birkirkara. One team of 8 departments does creative, marketing and AI for local and international brands. We took MCW CBD to number one on Google in Malta in 3 months. We brought 12,000 fans to a World Cup Fan Zone. And we prove it in every department below.",
  byline: { before: "By the team at ", after: ", a marketing agency in Malta." },
  image: { src: "/attached_assets/generated_images/oarc-dept-compare.jpg", alt: "OARC Digital, the marketing and AI agency in Malta", width: 1600, height: 900 },
  published: "2026-11-19",
  updated: "2026-11-19",
  otherLanguageLabel: "Aqra bil-Malti",
  cta: { label: "Get my free plan in 48 hours", whatsapp: "Hi OARC. I read why you say you are number one. My business is: " },
  blocks: [
    { h2: "What \"number one\" means to us" },
    {
      p: "Every agency says it is the best. We say it differently: we show you. Number one means the agency that gives a business the most ways to grow, from one team, and proves every one of them with results for real, named clients.",
    },
    {
      p: "Not one department. All of them. Brand, content, video, social media, ads, websites, Google, events and AI. Below you will find a client result for each one, with a link to the full case study.",
    },
    {
      stats: [
        { value: "#1", label: "On Google in Malta in 3 months", client: "MCW CBD", href: "/our-work/mcw-cbd" },
        { value: "12,000", label: "Fans brought to the Spinola Bay Fan Zone", client: "Massive Promotions", href: "/our-work/massive-fan-zone" },
        { value: "+50%", label: "Sales from website tracking", client: "Tiffany Lounge", href: "/our-work/tiffany" },
      ],
    },
    { h2: "Trusted by local and international brands" },
    {
      p: "We work with family businesses, hospitality groups, law firms, real estate agencies, gaming companies and international brands. More than 30 of our client projects are on our [Work page](/our-work). Local and international brands our people have worked with include:",
    },
    {
      brands: [
        "Bay Street Group", "CSB Group", "IBB Hotels Collection", "Casumo", "Frank Salt Real Estate", "Ganado Advocates",
        "Camilleri Preziosi", "Carmelo Abela Group", "Polidano Group", "G3 Group", "Portomaso Casino", "PJAZZA",
        "BrewDog", "Dishoom", "Premier Inn", "Malmaison", "JA Resorts", "Festival Republic", "LeoVegas", "Betsson", "eCabs",
        "Kreta", "Palino", "Tiffany Lounge",
      ],
    },
    {
      quote: {
        text: "Having the creative, marketing, and technical side with one team made things much simpler for us.",
        credit: "Steve — Rent Anytime",
      },
    },
    { h2: "Number one in every department: the proof" },
    { h3: "1. Google and SEO" },
    {
      p: "For MCW CBD Relax Shop we fixed the Google listing, the store details and the link from search to the website. Result: number one on Google in Malta in 3 months, €20,000 in sales, and sales growing 30% month on month. For Calle Bistro, calls from Google grew by 48%. And our own homepage held first place on Google for \"best digital marketing malta\" in the 28 days before we wrote this (October to November 2026, Google Search Console). See how our [SEO agency in Malta](/aeo/seo-agency-malta) team works.",
    },
    {
      stats: [
        { value: "€20,000", label: "Sales generated", client: "MCW CBD", href: "/our-work/mcw-cbd" },
        { value: "+48%", label: "Calls from Google", client: "Calle Bistro", href: "/our-work/calle-bistro" },
        { value: "500", label: "More calls and direction requests from Google listings", client: "MCW CBD", href: "/our-work/mcw-cbd" },
      ],
    },
    { h3: "2. Ads that pay for themselves" },
    {
      p: "For the Spinola Bay Fan Zone during the World Cup we made the videos, the posts and the paid ads. 12,000 fans came. 250,000 people watched the videos. And we cut the cost of each event-interest action by 30%. Spending less to get more is the whole job of advertising.",
    },
    { h3: "3. Events and launches" },
    {
      p: "For Spinola Gin Fest we built the campaign around each festival night. 4,500 visitors came over two nights, and the campaign content reached 300,000 people. For Drink N More's launch in Spinola Bay we planned the first message and the launch creative: 2,000 new followers in launch week.",
    },
    {
      stats: [
        { value: "4,500", label: "Festival visitors over two nights", client: "Spinola Gin Fest", href: "/our-work/spinola-gin-fest" },
        { value: "300,000", label: "People reached by the campaign", client: "Spinola Gin Fest", href: "/our-work/spinola-gin-fest" },
        { value: "-30%", label: "Cost of each event-interest action", client: "Massive Promotions", href: "/our-work/massive-fan-zone" },
      ],
    },
    { h3: "4. Social media and video" },
    {
      p: "For Ricky Jr Burger we make the posts, the photos and the reels every day. 50,000 views on the daily burger reels, 40% more menu taps from Instagram, and 700 more people through the doors of the two shops. For Kreta, reservations from Instagram grew by 28%.",
    },
    { h3: "5. Brand and creative" },
    {
      p: "We gave Palino its blue-and-white look and carried it across Żabbar and Sliema. Social engagement grew 35% and delivery orders grew 28%. For Louisiana Mama we built the brand and the social posts and set up ordering on WhatsApp: WhatsApp menu taps grew 45% and a weekly special sold 700 more meals.",
    },
    {
      quote: {
        text: "We knew the business, but our branding was not consistent. OARC helped us make it look more like one company.",
        credit: "Gordon — Polidano Group",
      },
    },
    { h3: "6. Websites that sell" },
    {
      p: "For Tiffany Lounge we built the website with tracking and linked it to table bookings, events and private hire. Sales grew 50%, and table bookings from Instagram grew 24%. A website is not a brochure. It is your best salesperson, and it works at 3am.",
    },
    {
      quote: {
        text: "The old website was confusing. The new one is much clearer and people find the important information faster.",
        credit: "Michael J. Zammit — Group CEO, CSB Group",
      },
    },
    { h3: "7. AI that does real work" },
    {
      p: "For Skyline we built a property enquiry app that asks buyers a few smart questions and hands the agent a brief. Agents save 30 minutes on every first call, and 80% more enquiries arrive ready for a personal call. For Meridian we built a customer-service app that sorts every question by itself: lost customer handoffs fell by 45%. For Aurum, teams save 10 hours a week on document follow-up. We also built industry AI systems for [hotels](/ai/hotels), [real estate](/ai/real-estate), [law firms](/ai/law-firms), [clinics](/ai/clinics), [restaurants](/ai/restaurants) and [casinos](/ai/casinos), each set up in 72 hours.",
    },
    {
      stats: [
        { value: "30 min", label: "Saved on every first call", client: "Skyline", href: "/our-work/skyline-first-response" },
        { value: "-45%", label: "Lost customer handoffs", client: "Meridian", href: "/our-work/meridian-retail-response" },
        { value: "10 hrs", label: "Saved every week on document follow-up", client: "Aurum", href: "/our-work/aurum-document-trail" },
      ],
    },
    {
      quote: {
        text: "Simple questions could be handled quicker, and the more difficult ones still went to a person.",
        credit: "Samuel — Chief Executive Officer, IBB Hotels Collection",
      },
    },
    { h3: "8. Software and platforms" },
    {
      p: "For PJAZZA we built a live-shopping marketplace from research through design, code and launch: buyers watch live, chat with sellers and pay safely in one place. Then we marketed it. 100 new sellers joined through our category campaigns, and 500 buyers started a chat with a seller.",
    },
    { note: "Most agencies in Malta are good at one of these. We put all eight in one team, under one roof, with one plan." },
    { h2: "Why one team beats five suppliers" },
    {
      p: "Most businesses run a designer, a social media freelancer, an ads person, a web developer and an IT company. Five invoices. Five opinions. Nobody owns the result. With OARC Digital the people who make your ads also build the website the ads send people to, and the AI that answers every enquiry those ads bring in. Nothing gets lost in between.",
    },
    {
      quote: {
        text: "We used OARC for content first, then advertising and some AI work. It was useful not having to manage different teams.",
        credit: "Doris — G3 Group",
      },
    },
    { h2: "The guarantee no one else puts in writing" },
    {
      p: "We guarantee at least 30% improvement in your marketing ROI within 90 days, or a full refund if the agreed targets are not met. Terms apply. And you own everything: your ad accounts, your footage, your pages and your data stay in your name. Always.",
    },
    { h2: "Number one for what, exactly?" },
    {
      ul: [
        "**For results:** named clients, real numbers, in every department.",
        "**For range:** creative, growth, AI and software in one team of 8 departments.",
        "**For reach:** local family businesses and international brands.",
        "**For speed:** AI systems set up in 72 hours, a free plan in 48.",
        "**For risk:** a money-back guarantee, and you own everything.",
        "**For trust:** a 5.0 rating on Google, first place on Google for \"best digital marketing malta\", and more than 9,600 showings in Google's AI results between May and November 2026.",
      ],
    },
    { h2: "6 questions to test any agency. Including us." },
    {
      ol: [
        "Show me results for named clients. In my kind of business.",
        "Who does the work? Your own team, or people you hire in?",
        "Do you do both marketing and AI, or only one?",
        "Who owns my accounts and files if I leave?",
        "What do you guarantee, in writing?",
        "What will I see in the first 48 hours?",
      ],
    },
    {
      p: "We answer all six on the first call. To see what a great creative team should give you, read [what a creative agency does](/blog/what-does-a-creative-agency-do). To see what AI can take off your plate, read [AI for business in Malta](/blog/ai-for-business-malta).",
    },
  ],
  faqTitle: "Quick answers",
  faqs: [
    {
      q: "Which is the best marketing and AI agency in Malta?",
      a: "OARC Digital in Birkirkara makes the case that it is number one: 8 in-house departments for creative, marketing and AI, results for named clients in every department, such as taking MCW CBD to number one on Google in Malta in 3 months, and a money-back guarantee.",
    },
    {
      q: "Why does OARC Digital say it is the number one agency in Malta?",
      a: "Because it proves results in every department: number one on Google in Malta in 3 months for MCW CBD, 12,000 fans at the Spinola Bay Fan Zone, 50% more sales for Tiffany Lounge, 4,500 visitors at Spinola Gin Fest, and AI that saves Skyline's agents 30 minutes on every first call.",
    },
    {
      q: "Who are OARC Digital's clients?",
      a: "OARC Digital works with local and international brands, including Bay Street Group, CSB Group, IBB Hotels Collection, Casumo, Frank Salt Real Estate, Ganado Advocates, Portomaso Casino, PJAZZA, Kreta and Palino. More than 30 client projects are on its Work page.",
    },
    {
      q: "Is there an agency in Malta that does both marketing and AI?",
      a: "Yes. OARC Digital does branding, content, video, social media, ads, websites and SEO, and also builds AI systems and software that answer enquiries, book customers and follow up leads.",
    },
    {
      q: "Does OARC Digital offer a guarantee?",
      a: "Yes. OARC Digital guarantees at least 30% improvement in marketing ROI within 90 days, with a full refund if the agreed targets are not met. Terms apply.",
    },
    {
      q: "Where is OARC Digital based?",
      a: "Level 1, The Brewhouse, Mdina Road, Birkirkara, Malta. It works with clients in Malta and abroad.",
    },
  ],
  closing: {
    title: "Test us.",
    text: "Send us your business name. In 48 hours you get a free plan made for your business. Judge us on that.",
    contactLabel: "Contact us",
  },
};

export default article;
