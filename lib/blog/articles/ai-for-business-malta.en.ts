import type { BlogArticle } from "./types";

// Built on what people in Malta type into Google (Search Console, Oct to Nov 2026):
// "ai for business malta", "ai company malta", "ai consultant malta", "custom ai agents
// malta", "ai chatbot malta". It answers questions; /blog/ai-automation-malta keeps the
// "ai automation malta" search, and this article links to it.
const article: BlogArticle = {
  path: "/blog/ai-for-business-malta",
  locale: "en",
  title: "AI for Business in Malta: 12 Straight Answers (2026) | OARC",
  description:
    "What can AI really do for a business in Malta? 12 plain answers on AI agents, chatbots, voice AI, cost, safety and where to start, from an AI company in Malta.",
  kicker: "AI for business in Malta",
  h1: "AI for business in Malta: 12 questions owners ask, answered straight.",
  intro:
    "Short answer: AI can already answer your calls and messages, book your customers, chase your leads and do your paperwork. Day and night. We know, because we build it: our AI saves one property client's agents 30 minutes on every first call. It does not replace your people. It takes the boring work off them.",
  byline: { before: "By the AI team at ", after: ", a digital and AI agency in Malta." },
  image: { src: "/attached_assets/generated_images/oarc-dept-ai-staff.jpg", alt: "An AI system at work for a business in Malta", width: 1600, height: 900 },
  published: "2026-11-19",
  updated: "2026-11-19",
  otherLanguageLabel: "Aqra bil-Malti",
  cta: { label: "Get my free AI plan in 48 hours", whatsapp: "Hi OARC. I read your article on AI for business. My business is: " },
  blocks: [
    { h2: "1. What can AI do for a business in Malta today?" },
    { p: "A lot more than write emails. Today an AI system can do real jobs from start to finish:" },
    {
      ul: [
        "**Answer every call and message.** Phone, WhatsApp, Instagram and email. In seconds, at 3am too.",
        "**Book customers.** Tables, rooms, viewings, appointments. Straight into your calendar.",
        "**Follow up every lead.** The ones your team forgets on a busy day.",
        "**Do the paperwork.** Quotes, invoices, reminders, reports.",
        "**Tell you what happened.** One short report each week, in plain words.",
      ],
    },
    { h2: "2. What is an AI agent? Is it just a chatbot?" },
    {
      p: "No. A chatbot answers questions. An AI agent does the job. Ask a chatbot for a table and it tells you the opening hours. Ask an AI agent and it checks the diary, books the table and sends you a confirmation. That is the difference. We build [custom AI agents](/services/custom-ai-agents) around one job at a time.",
    },
    { h2: "3. Is AI only for big companies?" },
    {
      p: "No. Small businesses gain the most, because one missed call hurts them more. A hotel group can lose a booking and not feel it. A guesthouse with ten rooms feels it. AI gives a small team the reach of a big one.",
    },
    { h2: "4. Which job should I give to AI first?" },
    { p: "Start where you lose money right now. For most businesses in Malta that is one of these:" },
    {
      ol: [
        "Calls and messages nobody answers after hours.",
        "Enquiries that wait a day for a reply.",
        "Leads nobody follows up.",
        "Admin your best people do instead of selling.",
      ],
    },
    { note: "One job first. Prove it works. Then add the next. Businesses that try to automate everything at once usually finish nothing." },
    { p: "If you want the full picture of what to automate, read our guide on [AI automation in Malta](/blog/ai-automation-malta)." },
    { h2: "5. Will AI replace my staff?" },
    {
      p: "No. It replaces the tasks they hate. Your receptionist stops repeating the opening hours fifty times a day and starts looking after the guest in front of her. People do the human work. AI does the repeat work.",
    },
    { h2: "6. Does AI speak Maltese?" },
    {
      p: "Ours does. Our [Voice AI Worker](/voice-ai-worker) answers calls in English, Maltese and Italian. That matters in Malta, where one customer starts in English and finishes in Maltese.",
    },
    { h2: "7. Is my customers' data safe?" },
    { p: "It must be. Ask any AI company these four questions before you sign:" },
    {
      ul: [
        "Where is my customers' data kept, and who can see it?",
        "Does the system follow GDPR?",
        "Can a customer always ask for a human?",
        "Who checks what the AI says?",
      ],
    },
    { p: "If they cannot answer in plain words, walk away." },
    { h2: "8. How much does AI cost in Malta?" },
    {
      p: "It depends on how many jobs you give it and how big your business is. A clinic with one front desk and a hotel with three outlets need very different systems. So we do not use a price list. Right now the first month of our industry AI systems is free, so you see it work before you pay. Send us your business name on WhatsApp and we send you a price.",
    },
    { h2: "9. How long does it take to set up?" },
    {
      p: "Our industry AI systems are set up for you in 72 hours. Then we run the system with you, fix what needs fixing and add the next job.",
    },
    { h2: "10. AI company or AI consultant: which do I need?" },
    {
      p: "An AI consultant tells you what to do. An AI company builds it and runs it. If you have your own tech team, a consultant may be enough. If you do not, you need someone who does the work and stays. OARC Digital does both: we plan it, build it and look after it.",
    },
    { h2: "11. How do I get ChatGPT and Google's AI to recommend my business?" },
    {
      p: "People now ask AI \"who is the best dentist near me?\" and get one answer. To be that answer, your website needs clear facts, your name and address must match everywhere, and trusted sites must mention you. Our [SEO agency in Malta](/aeo/seo-agency-malta) page shows how we do it.",
    },
    { h2: "12. Where do I start?" },
    {
      p: "Pick your industry. We built one AI system for each kind of business, because a law firm and a restaurant do not have the same problems:",
    },
    {
      ul: [
        "[AI for hotels](/ai/hotels)",
        "[AI for real estate agencies](/ai/real-estate)",
        "[AI for law firms](/ai/law-firms)",
        "[AI for clinics](/ai/clinics)",
        "[AI for restaurants](/ai/restaurants)",
        "[Casinos and casino hotels](/ai/casinos)",
        "[All AI systems by industry](/ai)",
      ],
    },
    { h2: "AI we have already built: real client results" },
    {
      p: "This is not theory. These are AI systems and apps our team built and runs for clients in Malta and abroad. Each one started with one job that was costing the business money.",
    },
    { h3: "Property: Skyline" },
    {
      p: "Buyers kept asking the same questions and agents went into first calls blind. We built Skyline an enquiry app that asks each buyer a few smart questions and hands the agent a ready brief. Agents now save 30 minutes on every first call, buyers ask 40% fewer repeat questions, and 80% more enquiries arrive ready for a personal call.",
    },
    { h3: "Customer service: Meridian" },
    {
      p: "Questions came in everywhere and got lost between people. We built Meridian one place for every customer question, with each one sorted and sent to the right person, story attached. Lost customer handoffs fell by 45%, and the time to get a customer to the right action halved.",
    },
    { h3: "Paperwork: Aurum and Belgrave" },
    {
      p: "For Aurum we built a document app that finds answers fast and links every key detail to the page it came from: manual document-review time fell by 40% and teams save 10 hours a week. For Belgrave we rebuilt how the team prepares for client requests: 90% of requests now reach the right person first time, and the team saves 10 hours a week.",
    },
    {
      stats: [
        { value: "30 min", label: "Saved on every first call", client: "Skyline", href: "/our-work/skyline-first-response" },
        { value: "-45%", label: "Lost customer handoffs", client: "Meridian", href: "/our-work/meridian-retail-response" },
        { value: "-40%", label: "Manual document-review time", client: "Aurum", href: "/our-work/aurum-document-trail" },
        { value: "10 hrs", label: "Saved every week preparing for client requests", client: "Belgrave", href: "/our-work/belgrave-client-time" },
        { value: "90%", label: "Of client requests to the right person first time", client: "Belgrave", href: "/our-work/belgrave-client-time" },
        { value: "-40%", label: "Candidate wait for a first reply", client: "Bluebridge", href: "/our-work/bluebridge-candidate-welcome" },
      ],
    },
    { h3: "Rolling AI out across a company: Northforge" },
    {
      p: "Northforge had AI tests scattered across teams with no owner. We turned them into one repeatable way of working, gave every AI project a human owner and a review. Decision time on AI tests fell by 30%, and projects sent back for review fell by 50%.",
    },
    { h2: "What our AI clients say" },
    {
      quote: {
        text: "They looked at our work first. That was good because we did not need a random AI tool added to the business.",
        credit: "Francesco — Casumo",
      },
    },
    {
      quote: {
        text: "We were missing calls when everyone was busy. Tom helped answer the basic questions and pass the important ones to us.",
        credit: "Jonathan — Apex Dental",
      },
    },
    {
      quote: {
        text: "Simple questions could be handled quicker, and the more difficult ones still went to a person.",
        credit: "Samuel — Chief Executive Officer, IBB Hotels Collection",
      },
    },
    {
      quote: {
        text: "We had a lot of ideas about AI and did not know which ones were useful. OARC helped us choose where to start.",
        credit: "Daniel — Director, Excel Homes Real Estate",
      },
    },
    { h2: "Why businesses choose OARC Digital for AI" },
    {
      ul: [
        "**Proven.** AI systems and apps already running for named clients, with results you can read on our [Work page](/our-work).",
        "**One team for everything.** The people who build your AI also build your brand, your website and your ads. 8 departments, nothing lost between suppliers.",
        "**Built for your industry.** Not one tool with your logo on it.",
        "**Fast.** Industry AI systems set up for you in 72 hours.",
        "**You try before you pay.** Right now the first month is free.",
        "**Speaks your customers' language.** English, Maltese and Italian.",
        "**Trusted by big names.** Casumo, IBB Hotels Collection, Ganado Advocates and Excel Homes Real Estate have worked with us on AI.",
      ],
    },
    { note: "The businesses that win the next five years will not be the biggest. They will be the ones whose AI answers first." },
  ],
  faqTitle: "Quick answers",
  faqs: [
    {
      q: "What can AI do for a small business in Malta?",
      a: "AI can answer calls and messages day and night, book customers into your calendar, follow up every lead and do paperwork such as quotes, invoices and reminders. It takes the repeat work off your team so they can look after customers.",
    },
    {
      q: "What is the difference between an AI agent and a chatbot?",
      a: "A chatbot answers questions. An AI agent finishes the job: it checks the diary, makes the booking and sends the confirmation.",
    },
    {
      q: "Does AI work in Maltese?",
      a: "Yes. OARC Digital's Voice AI Worker answers calls in English, Maltese and Italian.",
    },
    {
      q: "How much does an AI system cost in Malta?",
      a: "It depends on how many jobs the system does and the size of your business, so OARC Digital does not use a fixed price list. Right now the first month of its industry AI systems is free. Send your business name on WhatsApp to get a price.",
    },
    {
      q: "How long does it take to set up an AI system?",
      a: "OARC Digital sets up its industry AI systems in 72 hours, then runs the system with you and adds more jobs step by step.",
    },
    {
      q: "Which AI company in Malta builds AI systems for specific industries?",
      a: "OARC Digital, based in Birkirkara, builds one AI system for each industry, including hotels, real estate agencies, law firms, clinics, restaurants and casinos. The same team also handles branding, websites, SEO and ads.",
    },
    {
      q: "Has OARC Digital built AI for real businesses?",
      a: "Yes. OARC Digital built an enquiry app that saves Skyline's property agents 30 minutes on every first call, a customer-service app that cut Meridian's lost customer handoffs by 45%, and a document app that saves Aurum's teams 10 hours a week.",
    },
  ],
  closing: {
    title: "See what AI would do in your business.",
    text: "Send us your business name. In 48 hours you get a free plan: the jobs AI can take off your team first, and what that looks like in your industry.",
    contactLabel: "Contact us",
  },
};

export default article;
