import type { AiSystemContent } from "./types";

export const realEstate: AiSystemContent = {
  slug: "real-estate",
  name: "Real estate",
  barLabel: "Real Estate AI",
  business: "real estate agency",
  metaTitle: "Real Estate AI for Agencies in Malta | OARC Digital",
  metaDescription:
    "The AI system built around your real estate agency in Malta. It answers every enquiry 24/7, finds owners ready to list, tracks every lease and does the admin.",
  updated: "2026-11-13",
  serviceType: "AI system and automation for estate and letting agencies",
  schemaDescription:
    "An AI system built around each estate or letting agency in Malta. It answers every enquiry 24/7, qualifies leads, books viewings, tracks leases and notice deadlines, finds owners ready to list, writes listings, runs renewals, and handles repairs, rent and paperwork. Set up and run by OARC Digital's team in Malta.",
  hub: {
    title: "Real estate agencies",
    body: "Every enquiry answered in under a minute. Every lease tracked. A call list of owners ready to list, every morning.",
    gain: "Sales, lets and property management",
  },

  proof: { line: "Running in 8 real estate agencies in Malta", short: "In 8 agencies in Malta" },

  hero: {
    pill: "Live in 48 hours, or you don’t pay",
    kicker: "The agency that answers first gets the flat.",
    h1Before: "The complete AI system built around",
    h1Highlight: "your real estate agency.",
    sub: "It answers every enquiry in under a minute, tells you which flats free up before anyone else knows, and does the paperwork. Your agents show homes and close deals.",
    primaryCta: "Ask for the price",
    secondaryCta: "Book a 20-minute call",
    note: "Set up and run by OARC’s team in Malta. Nothing new for your agents to learn.",
  },

  film: {
    title: "Watch one night and one morning in your agency",
    scenes: [
      {
        clock: "Sunday · 23:14",
        caption: "A tenant asks about a flat. Your office is closed.",
        result: "Answered in 38 seconds",
        visual: {
          type: "chat",
          initials: "SK",
          name: "Sofia K.",
          origin: "WhatsApp · new enquiry",
          status: "Answered",
          messages: [
            { from: "in", text: "Hi! Is the 2-bed in Sliema still free from 1 December? My budget is €1,400.", time: "23:14" },
            { from: "out", text: "Hi Sofia, yes it is. How many people are moving in, and do you need the contract for a residence permit?", time: "23:14" },
            { from: "in", text: "2 of us. Yes, for my permit.", time: "23:16" },
          ],
          done: { before: "Lead checked · ", strong: "€1,400 · from 1 Dec", after: " · permit needed" },
        },
      },
      {
        clock: "Sunday · 23:16",
        caption: "It offers two times. She picks one. The viewing is booked.",
        result: "Booked while you slept",
        visual: {
          type: "chat",
          initials: "SK",
          name: "Sofia K.",
          origin: "WhatsApp · same chat",
          status: "Booking",
          messages: [
            { from: "out", text: "Two flats fit you. I can show you both this week. Which time suits you?", time: "23:16" },
            { from: "in", text: "Thursday at 18:00 please.", time: "23:17" },
            { from: "out", text: "Done. Daniel will meet you there. I’ll remind you both on Thursday morning.", time: "23:17" },
          ],
          done: { before: "Viewing booked with Daniel · ", strong: "Thu 18:00", after: " · both reminded" },
        },
      },
      {
        clock: "Monday · 07:30",
        caption: "Your agents open one list: who to call first, and why.",
        result: "4 owners ready to list",
        visual: {
          type: "rows",
          title: "Today’s call list",
          hint: "Ranked by how ready they are",
          action: "call",
          rows: [
            { badge: "92", top: true, title: "Robert C. · Sliema 3-bed", detail: "Bought in 2016. Asked for a valuation last month." },
            { badge: "84", title: "Anna V. · Msida 2-bed", detail: "Her tenant’s lease ends in 90 days." },
            { badge: "77", title: "Mark B. · Swieqi villa", detail: "Lives abroad. Opened your last two reports." },
            { badge: "71", title: "New project · Gżira", detail: "Planning application for 8 flats filed this week." },
          ],
        },
      },
      {
        clock: "Monday · 09:05",
        caption: "A tenant says she is leaving in March. The flat is listed the same day.",
        result: "Listed before anyone else knows",
        visual: {
          type: "timeline",
          title: "Apt 7, St Julian’s · 2-bed · €1,450",
          subtitle: "Lease ends 28 February",
          steps: [
            { when: "09:05", title: "Tenant asked: staying or moving?", detail: "Answer: moving out in March." },
            { when: "09:06", title: "Owner told the same minute", detail: "He says: find me a new tenant." },
            { when: "11:30", title: "Listed, and sent to 9 people already looking", detail: "Photos booked for tomorrow.", key: true, tag: "Listed · 9 matched" },
          ],
        },
      },
      {
        clock: "Month end",
        caption: "Every landlord gets a report nobody had to write.",
        result: "Owners stay with you",
        visual: {
          type: "rows",
          title: "Landlord reports · November",
          hint: "Sent on the 30th",
          action: "tag",
          rows: [
            { badge: "RC", title: "Robert C. · Sliema 3-bed", detail: "Rent in on time. Boiler serviced.", tag: "Sent" },
            { badge: "AV", top: true, title: "Anna V. · Msida 2-bed", detail: "Lease ends in 90 days. Asked: renew or sell?", tag: "Reply needed" },
            { badge: "MB", title: "Mark B. · Swieqi villa", detail: "2 repairs done, €180. Rent in on the 1st.", tag: "Sent" },
            { badge: "+", title: "Every other landlord", detail: "Each report built from that month’s real activity.", tag: "Sent" },
          ],
        },
      },
    ],
  },

  dashboard: {
    title: "Your whole agency on one screen.",
    body: "Every morning: what came in overnight, what needs you, and who to call first.",
    org: "Your Agency",
    search: "Ask anything… “Which leases end in March?”",
    initials: "MA",
    nav: [
      { label: "Today" }, { label: "Enquiries", badge: "23" }, { label: "Leases" }, { label: "Owners" },
      { label: "Listings" }, { label: "Viewings" }, { label: "Rent & repairs" }, { label: "Reports" },
    ],
    greeting: "Good morning, Maria",
    status: "Running · everything checked overnight",
    kpis: [
      { label: "Enquiries answered", value: "23", note: "All within a minute" },
      { label: "Leases ending in 90 days", value: "11", note: "Owners and tenants asked" },
      { label: "Owners ready to list", value: "4", note: "On today’s call list" },
      { label: "Rent overdue", value: "€1,950", note: "2 reminders sent", alert: true },
    ],
    todoTitle: "Needs you today",
    todos: [
      { initials: "JP", title: "Tenant leaving · Apt 7, St Julian’s", detail: "Listed this morning. 9 people already looking were sent it.", tag: "Listed", on: true },
      { initials: "RC", title: "Owner may sell · Sliema 3-bed", detail: "Bought 2016, asked for a valuation last month.", tag: "Call today" },
      { initials: "LK", title: "Viewing · Thu 18:00 · Gżira studio", detail: "Booked on WhatsApp at 23:14. Both sides reminded.", tag: "Booked" },
      { initials: "DM", title: "Leak reported · Msida 2-bed", detail: "Plumber booked for 10:00. Tenant and owner updated.", tag: "Handled" },
    ],
    chartTitle: "Enquiries this week",
    bars: [
      { label: "Mon", h: 46 }, { label: "Tue", h: 58 }, { label: "Wed", h: 40 }, { label: "Thu", h: 72 },
      { label: "Fri", h: 64 }, { label: "Sat", h: 88 }, { label: "Sun", h: 100 },
    ],
    chartFoot: { label: "Average first reply", value: "38 sec" },
    chatFloat: {
      channel: "WhatsApp · new enquiry",
      time: "23:14",
      incoming: "Hi, is the 2-bed in Sliema still free from December?",
      reply: "Yes, it is. I can show it Thu 18:00 or Sat 11:00. Which suits you?",
      receipt: "Replied in 38 sec · viewing booked",
    },
    alertFloat: {
      label: "Lease Radar · just now",
      title: "Tenant leaving in March",
      detail: "Apt 7, St Julian’s · €1,450. Listed before anyone else knows.",
      tag: "Listed · 9 matched",
    },
  },

  worksWith: ["WhatsApp", "Gmail & Outlook", "Phone calls", "Excel & Google Sheets", "Your CRM", "Property portals", "Facebook & Instagram"],

  pillars: {
    label: "Built around you",
    title: "Your agency. Your data. Your way of working.",
    items: [
      { icon: "network", title: "Connects all your data", body: "Leases, listings, clients, WhatsApp, email and spreadsheets. One place, always up to date." },
      { icon: "workflow", title: "Works inside your workflow", body: "Your agents keep the tools they know. It works in the background and hands them what’s ready." },
      { icon: "trending", title: "Grows with you", body: "It learns your agency every week. Start with one job and add the next when it pays for itself." },
    ],
  },

  jobs: {
    label: "Everything it does",
    title: "One system. Sixteen jobs done for you.",
    items: [
      { icon: "chat", title: "Answers every enquiry, 24/7", body: "WhatsApp, portals, your website, Facebook and the phone. In the client’s language.", gain: "No lead goes cold" },
      { icon: "filter", title: "Qualifies every lead", body: "Budget, move-in date, who’s moving, permit needs. Hot leads go straight to your agent.", gain: "Agents only talk to ready people" },
      { icon: "calendar", title: "Books every viewing", body: "Finds a time, confirms it, reminds both sides and reschedules when plans change.", gain: "Fewer no-shows" },
      { icon: "clock", title: "Knows which flats free up", body: "Tracks every lease end and the 3-month notice deadline, and asks tenant and owner early.", gain: "You list first" },
      { icon: "userPlus", title: "Finds owners ready to sell or let", body: "A ranked call list every morning, with the reason each owner is likely to move.", gain: "More stock than your rivals" },
      { icon: "refresh", title: "Wakes up your old contacts", body: "Messages past enquirers, tenants and buyers with something that fits them today.", gain: "Deals from people you already know" },
      { icon: "link", title: "Matches every new listing", body: "The minute a flat is live, it goes to everyone already looking for one like it.", gain: "Let before it’s advertised" },
      { icon: "pen", title: "Writes your listings", body: "Descriptions in your agency’s style, in English and the languages your clients speak.", gain: "Listings ready in minutes" },
      { icon: "image", title: "Makes photos and ads sell", body: "Enhances photos, stages empty rooms, and builds ads and short videos for every listing.", gain: "More clicks, more viewings" },
      { icon: "euro", title: "Values a property in minutes", body: "A clear price report from real local prices, so you walk into the meeting ready.", gain: "Win the listing" },
      { icon: "repeat", title: "Runs renewals and rent reviews", body: "Asks months ahead, drafts the renewal and suggests a rent review inside the legal cap.", gain: "Keep every good tenant" },
      { icon: "wrench", title: "Handles repairs", body: "Takes the request, puts emergencies first, books the contractor and updates everyone.", gain: "Calm tenants, happy owners" },
      { icon: "card", title: "Chases rent and invoices", body: "Friendly reminders before the due date, firm ones after, and invoices sent on time.", gain: "Money in, on time" },
      { icon: "file", title: "Does the paperwork", body: "Leases, registration within the 30-day limit, promise-of-sale dates and client checks.", gain: "Every deadline caught" },
      { icon: "chart", title: "Reports to every landlord", body: "A monthly report of everything done for their property, sent without anyone writing it.", gain: "Landlords stay with you" },
      { icon: "sun", title: "Briefs you every morning", body: "What moved overnight: new listings, price changes, new projects and who to call first.", gain: "Always one step ahead" },
    ],
  },

  spotlights: [
    {
      label: "Enquiries",
      title: "Every enquiry answered in seconds. Day or night.",
      points: [
        "It replies on WhatsApp, portals, your website and the phone, in the client’s language.",
        "It asks the right questions: budget, move-in date, who’s moving and permit needs.",
        "It books the viewing, reminds everyone, and keeps following up until they sign.",
      ],
      visual: {
        type: "chat",
        initials: "SK",
        name: "Sofia K.",
        origin: "Enquiry from a property portal",
        status: "Answered",
        messages: [
          { from: "in", text: "Hi! Looking for a 2-bed in Sliema or Gżira from 1 December, budget around €1,400.", time: "23:14" },
          { from: "out", text: "Hi Sofia, I have two that fit. How many people are moving in, and will you need the contract for a residence permit?", time: "23:14" },
          { from: "in", text: "2 of us. Yes, for my permit.", time: "23:16" },
          { from: "out", text: "Perfect. I can show you both on Thursday. Which time suits you?", time: "23:16" },
        ],
        slots: ["Thu 18:00", "Sat 11:00"],
        done: { before: "Viewing booked with Daniel · ", strong: "Thu 18:00", after: " · both reminded" },
      },
    },
    {
      label: "Owners & listings",
      title: "Your next listing is already in your phone.",
      points: [
        "Every morning it hands your agents a ranked call list of owners likely to sell or let, with the reason.",
        "It spots past buyers who may sell, leases about to end and new projects in planning.",
        "It prepares the valuation, so your agent walks in with the right price.",
      ],
      visual: {
        type: "rows",
        title: "Today’s call list",
        hint: "Ranked by how ready they are",
        action: "call",
        rows: [
          { badge: "92", top: true, title: "Robert C. · Sliema 3-bed", detail: "Bought in 2016. Asked for a valuation last month." },
          { badge: "84", title: "Anna V. · Msida 2-bed", detail: "Her tenant’s lease ends in 90 days. Hasn’t said if she’ll renew." },
          { badge: "77", title: "Mark B. · Swieqi villa", detail: "Lives abroad. Opened your last two landlord reports." },
          { badge: "71", title: "New project · Gżira", detail: "Planning application for 8 flats filed this week." },
        ],
      },
    },
    {
      label: "Leases & renewals",
      title: "Never miss a lease deadline again.",
      points: [
        "It tracks every lease end and the owner’s 3-month notice deadline.",
        "It asks tenant and owner months ahead, and drafts the renewal.",
        "If the tenant is leaving, the flat is listed the same day and sent to people already looking.",
      ],
      visual: {
        type: "timeline",
        title: "Apt 7, St Julian’s · 2-bed · €1,450",
        subtitle: "Lease ends 28 February 2027",
        steps: [
          { when: "Day −120", title: "Owner asked: renew, review the rent or take it back?", detail: "Sent on WhatsApp in the owner’s language." },
          { when: "Day −120", title: "Tenant asked: staying or moving?", detail: "Answer: moving out in March." },
          { when: "Day −119", title: "Listed before anyone else knows", detail: "Photos booked. 9 people already looking were sent it.", key: true, tag: "Listed · 9 matched" },
          { when: "Day −90", title: "Owner’s notice deadline", detail: "Covered. Nothing rolls over by accident." },
          { when: "Day +30", title: "New lease registered on time", detail: "Inside the 30-day limit. Invoice sent." },
        ],
      },
    },
    {
      label: "Ask anything",
      title: "Ask it like you’d ask your best agent.",
      points: [
        "Type or say a question in plain words. The answer comes from your own data.",
        "No reports to build, no spreadsheets to search.",
      ],
      visual: {
        type: "ask",
        questions: [
          { q: "Which leases end in March?", summary: "7 leases end in March. Owners have been asked about all of them.", rows: [["Apt 7, St Julian’s", "Tenant leaving · listed"], ["Flat 3, Sliema", "Renewing +3%"], ["Apt 12, Msida", "Owner deciding"], ["Studio 2, Gżira", "Renewing"], ["+ 3 more", "See all"]] },
          { q: "Who asked about 2-beds in Sliema?", summary: "14 people in the last 30 days. 9 are still looking.", rows: [["Sofia K.", "€1,400 · from 1 Dec"], ["James R.", "€1,600 · from Jan"], ["Ana P. & Luca M.", "€1,300 · permit needed"], ["Tomasz W.", "€1,500 · from Feb"], ["+ 10 more", "See all"]] },
          { q: "Which owners haven’t heard from us?", summary: "23 owners haven’t had contact in 6 months. A check-in message is ready to send.", rows: [["Mark B.", "Swieqi villa · 8 months"], ["Carmen F.", "Birkirkara 2-bed · 7 months"], ["Paul Z.", "Mellieħa 3-bed · 6 months"], ["Rita G.", "Sliema studio · 6 months"], ["+ 19 more", "See all"]] },
          { q: "How did each agent do this week?", summary: "52 viewings booked, 9 lets agreed, 3 new listings won.", rows: [["Daniel", "18 viewings · 4 lets"], ["Maria", "15 viewings · 3 lets · 2 listings"], ["Kurt", "12 viewings · 2 lets · 1 listing"], ["Night shift (the system)", "41 enquiries answered"]] },
        ],
      },
    },
  ],

  areas: {
    label: "Every kind of property",
    title: "Sales, lets, commercial. All of it.",
    intro: "Whatever is on your books, the system does the chasing and your agents do the deal.",
    colA: "Your work",
    colB: "The system does",
    colC: "Your agent does",
    items: [
      { name: "Long lets", system: "Answers enquiries, books viewings, tracks every lease end and notice date, drafts renewals, registers the lease and chases rent.", you: "Shows the flat and signs the tenant." },
      { name: "Sales", system: "Finds owners ready to sell, prepares the valuation, matches buyers, follows up after every viewing and tracks promise-of-sale dates.", you: "Wins the listing and closes the sale." },
      { name: "Short lets", system: "Replies to guests in their language, handles check-in messages, books cleaning and repairs, and reports income to the owner.", you: "Grows the number of homes you manage." },
      { name: "Commercial", system: "Tracks lease terms, break dates and rent reviews for shops and offices, and tells you who is looking for space.", you: "Negotiates the terms." },
      { name: "New developments", system: "Captures every enquiry from ads and the website, sends plans and prices, and keeps buyers updated until the keys.", you: "Meets the serious buyers." },
      { name: "Property management", system: "Takes repair requests, books contractors, collects rent and sends each landlord a monthly report.", you: "Keeps landlords for years." },
    ],
  },

  wins: {
    label: "Your clients feel it first",
    title: "Their win is your win.",
    items: [
      { title: "A reply in under a minute.", body: "At 11 pm on a Sunday, a tenant asks about a flat. They get an answer and a viewing time. Your agency is the one they remember." },
      { title: "Owners who always know.", body: "Every landlord gets a monthly report without asking. They stop calling to check. They also stop shopping around." },
      { title: "The right home, first.", body: "Buyers and tenants hear about a matching home the minute it is listed. Many deals close before the advert goes out." },
    ],
  },

  live: {
    label: "How it works",
    h2Before: "Live in",
    h2Em: "48 hours.",
    body: "Nothing new for your agents to learn. OARC’s team sets it up on your tools and runs it with you.",
    steps: [
      { when: "Today", title: "A 20-minute call", body: "About how your agency works and where it loses time and deals." },
      { when: "48 hours", title: "Your first system is live", body: "Every enquiry on your WhatsApp and website answered, 24/7." },
      { when: "Week 2", title: "All your data connected", body: "Leases, listings, owners and clients in one place." },
      { when: "Every week", title: "It grows with you", body: "It learns more, and the next job goes live." },
    ],
  },

  ways: {
    label: "Start where you want",
    title: "One job or the whole agency. You choose.",
    items: [
      { title: "Fix one job", body: "Pick the one thing that costs you most and we automate just that.", example: "Example: answer every WhatsApp enquiry at night." },
      { title: "Plug into what you use", body: "Keep your CRM, your portals and your website. We connect to them.", example: "Example: new portal leads go straight into your CRM, already qualified." },
      { title: "The full system", body: "Everything on this page, built around your agency, customised and looked after by us.", example: "Example: enquiries, leases, owners, rent and reports in one place." },
      { title: "Not sure yet?", body: "Most agencies aren’t. We look at your week and show you where the money leaks.", example: "Free. Takes 20 minutes." },
    ],
  },

  offer: {
    label: "The offer",
    title: "Live in 48 hours. Or you don’t pay.",
    body: "Your first system answers enquiries on your own WhatsApp and website two days after you say yes. If it isn’t live by then, you owe nothing. The 20-minute call is free either way, and you keep the list of what to fix first.",
    cta: "Ask for the price",
    secondaryCta: "Book my 20-minute call",
    listLabel: "What you get",
    items: [
      { strong: "Live in 48 hours, or you don’t pay.", rest: "Your first system answers enquiries two days after you say yes." },
      { strong: "A free map of your agency.", rest: "Where time and deals leak, and what to fix first." },
      { strong: "Nothing new to learn.", rest: "It works through the WhatsApp, email and CRM you already use." },
      { strong: "Built for you, run by us.", rest: "We customise it to your agency and look after it every week." },
      { strong: "Start small.", rest: "One job first. Add the next only when the first has paid for itself." },
    ],
  },

  calc: {
    label: "Your numbers",
    title: "What being first is worth to you.",
    mode: "percent",
    inputs: [
      { label: "Leases you manage", value: 150 },
      { label: "Tenants who leave each year (%)", value: 40, max: 100 },
      { label: "Average monthly rent (€)", value: 1200 },
    ],
    out1: "Flats to re-let every year",
    out2: "Letting fees on the table when you list first",
    footnote: "Assumes one month’s rent in fees per letting: half from each side, the usual practice in Malta.",
  },

  trust: {
    label: "You stay in charge",
    title: "It does the work. You make the calls.",
    items: [
      { icon: "eye", title: "A person approves what matters", body: "Prices, contracts and offers never go out without your agent saying yes." },
      { icon: "lock", title: "Your data stays yours", body: "It is only used for your agency and handled under GDPR. If you leave, you take it with you." },
      { icon: "users", title: "A team in Malta", body: "OARC’s team in Birkirkara sets it up, runs it with you and picks up the phone." },
      { icon: "check", title: "It shows its work", body: "Every message and every action is logged, so you can always see what it did and why." },
    ],
  },

  facts: {
    label: "Why now",
    title: "The fastest agency gets the flat.",
    items: [
      { n: "70,589", l: "Rental contracts in Malta. Every one has a deadline.", src: { label: "Housing Authority figures, first half of 2025 (BusinessNow)", href: "https://businessnow.mt/more-than-70000-active-rental-contracts-with-the-housing-authority-in-the-first-half-of-2025/" } },
      { n: "3 months", l: "The notice an owner must give. Miss it and the lease rolls over a year.", src: { label: "Private Residential Leases Act, Cap. 604", href: "https://legislation.mt/eli/cap/604/eng" } },
      { n: "68%", l: "Of website enquiries to big US agencies got no reply within 24 hours.", src: { label: "Pied Piper study, 2026", href: "https://www.floridarealtors.org/news-media/news-articles/2026/10/real-estate-inquiries-often-fail-reach-agents" } },
    ],
  },

  faq: [
    { q: "What is it, exactly?", a: "One AI system built around your agency. It answers every enquiry, books viewings, tracks every lease, finds owners ready to list, writes your listings, handles repairs and rent, and does the paperwork. OARC’s team in Malta sets it up and runs it with you." },
    { q: "Will it replace my agents?", a: "No. It does the chasing, the admin and the night shift, so your agents spend their day on viewings, owners and closing." },
    { q: "Do my agents need to learn new software?", a: "No. It works through the WhatsApp, email, spreadsheets and CRM you already use." },
    { q: "Can it do just one thing?", a: "Yes. Many agencies start with one job, such as answering every enquiry at night, and add the next when the first has paid for itself." },
    { q: "Does it work with our CRM and the property portals?", a: "Yes. We connect it to the CRM, portals, website and inboxes you already have. If something has no connection ready, we build it." },
    { q: "How fast is it live?", a: "Your first system is live in 48 hours, usually answering every enquiry on your WhatsApp and website. If it isn’t live by then, you don’t pay. The rest is connected over the following weeks." },
    { q: "Which number does it answer from?", a: "Yours. It replies on your agency’s own WhatsApp number, email and website, so clients keep talking to your agency." },
    { q: "What if it gets something wrong?", a: "Every message and action is logged, so you can see what it did and why. Prices, contracts and offers never go out without your agent’s yes. If something needs changing, OARC’s team in Malta changes it." },
    { q: "What happens to our data?", a: "It stays yours and is only used for your agency, handled under GDPR. If you leave, you take it with you." },
    { q: "How much does it cost?", a: "It depends on your agency’s size and what you switch on first. Ask on WhatsApp and we price it for your agency." },
    { q: "When must a landlord in Malta say a lease won’t be renewed?", a: "For a long let, at least three months before it ends, by registered letter. Otherwise the lease renews for another year." },
    { q: "How long is there to register a lease in Malta?", a: "30 days from the start of the lease. The Housing Authority fee is €10 on time and €120 if it is late. A lease that is not registered is not valid." },
    { q: "How much can rent go up each year in Malta?", a: "For a long private residential lease, the yearly increase cannot be more than the change in the official Property Price Index, and never more than 5%." },
  ],

  cta: {
    titleBefore: "Your next listing is about to free up.",
    titleEm: "Know first.",
    body: "Ask for the price today. Your first system is live in 48 hours, or you don’t pay.",
    button: "Ask for the price",
    secondary: "Book a 20-minute call",
  },

  sources: [
    { label: "BusinessNow: 70,589 rental contracts", href: "https://businessnow.mt/more-than-70000-active-rental-contracts-with-the-housing-authority-in-the-first-half-of-2025/" },
    { label: "Private Residential Leases Act (Cap. 604)", href: "https://legislation.mt/eli/cap/604/eng" },
    { label: "Housing Authority: lease registration, 30 days", href: "https://rentregistration.mt/notice/" },
    { label: "Pied Piper study, reported by Florida Realtors", href: "https://www.floridarealtors.org/news-media/news-articles/2026/10/real-estate-inquiries-often-fail-reach-agents" },
  ],
  related: [
    { label: "Real estate marketing in Malta", href: "/industries/real-estate" },
    { label: "AI real estate agent", href: "/services/ai-real-estate-agent" },
    { label: "Voice AI for real estate", href: "/voice-ai-worker/real-estate" },
    { label: "AI for law firms", href: "/ai/law-firms" },
  ],
  disclaimer: "OARC Digital · Malta. Names and figures on the screens are from a demo account. This page is information, not legal advice.",
};
