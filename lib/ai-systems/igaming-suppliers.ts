import type { AiSystemContent } from "./types";

export const igamingSuppliers: AiSystemContent = {
  slug: "igaming-suppliers",
  name: "iGaming suppliers",
  barLabel: "iGaming B2B AI",
  business: "B2B gaming company",
  metaTitle: "iGaming Supplier AI in Malta | B2B Automation | OARC Digital",
  metaDescription:
    "The AI system built around your B2B gaming company in Malta. It answers operator RFPs, sorts integration tickets and watches every certificate. You sign off.",
  updated: "2026-11-16",
  serviceType: "AI system and B2B automation for iGaming suppliers",
  schemaDescription:
    "An AI system built around each B2B gaming company in Malta, from platform providers, game studios and aggregators to payment and KYC vendors. It answers operator enquiries and RFPs, fills due diligence questionnaires from approved answers, sorts integration tickets, tracks certificates, market approvals, contracts and licence dates, follows up trade-show leads and builds operator invoices. The sales lead signs deals, the compliance team signs certifications and regulator filings, and engineers approve technical answers. Set up and run by OARC Digital's team in Malta.",
  hub: {
    title: "iGaming suppliers",
    body: "Every operator RFP answered. Every integration ticket sorted. Every certificate date watched. Your team signs off.",
    gain: "Platforms, studios, aggregators, payments and KYC",
  },

  lightAreas: true,

  hero: {
    pill: "We set it up for you in 72 hours",
    kicker: "Finally, you have",
    h1Before: "One complete AI system built around",
    h1Highlight: "your B2B gaming company.",
    sub: "AI agents trained on your company answer operators, sort integration tickets and follow up trade-show leads. The system fills RFPs and questionnaires and watches every certificate and contract date. It only says what your team has approved.",
    primaryCta: "Claim your free month",
    secondaryCta: "Book a 20-minute call",
    note: "First month free. Set up and run by OARC’s team in Malta.",
  },

  film: {
    title: "Watch one operator RFP, from late-night email to signed reply",
    scenes: [
      {
        clock: "Tuesday · 22:06",
        caption: "A new operator sends an RFP after your sales team has gone home.",
        result: "Answered in 1 minute",
        visual: {
          type: "chat",
          initials: "AL",
          name: "Anna L.",
          origin: "Email · new operator",
          status: "Answered",
          messages: [
            { from: "in", text: "Hi, we launch a casino brand in Sweden and Denmark in March. Can you answer our RFP by Friday?", time: "22:06" },
            { from: "out", text: "Good evening Anna. Happy to. Please send the RFP and your due diligence form. Slots only, or live casino too?", time: "22:07" },
            { from: "in", text: "Slots and live casino. Both files are attached.", time: "22:12" },
          ],
          done: { before: "212 questions read · ", strong: "first draft by 07:00", after: " · call booked with Mark" },
        },
      },
      {
        clock: "Wednesday · 06:58",
        caption: "By morning, all 212 questions are drafted from answers your team already approved.",
        result: "Gaps flagged, never guessed",
        visual: {
          type: "rows",
          title: "RFP · Galea Gaming Ltd",
          hint: "212 questions · drafted overnight",
          action: "tag",
          rows: [
            { badge: "188", title: "Answered from your approved library", detail: "Licence, company, games, RTPs and payments. Each answer links to its source.", tag: "Drafted" },
            { badge: "19", title: "Security and hosting", detail: "Drafted from your last audit. Waiting for an engineer to check.", tag: "Engineer" },
            { badge: "5", top: true, title: "Not on file", detail: "Danish approval dates for 3 games. Flagged for compliance, never guessed.", tag: "Flagged" },
          ],
        },
      },
      {
        clock: "Thursday · 16:40",
        caption: "Your engineer, compliance lead and sales lead sign before anything is sent.",
        result: "Sent a day early",
        visual: {
          type: "timeline",
          title: "RFP reply · Galea Gaming Ltd",
          subtitle: "Due Friday 17:00",
          steps: [
            { when: "Wed 11:20", title: "Engineer checks the 19 security answers", detail: "Two edits. Both logged." },
            { when: "Thu 15:05", title: "Compliance lead signs the licence answers", detail: "Certificates attached. Danish dates marked as pending." },
            { when: "Thu 16:40", title: "Sales lead approves and sends", detail: "A day before the deadline. Call booked for Monday.", key: true, tag: "Signed by your sales lead" },
          ],
        },
      },
    ],
  },

  dashboard: {
    title: "Every operator, ticket and certificate on one screen.",
    body: "Every morning: what came in overnight, which launches are at risk, and what is waiting for your signature.",
    org: "Your Company",
    search: "Ask anything… “Which certificates expire before June?”",
    initials: "SG",
    nav: [
      { label: "Today" }, { label: "Enquiries", badge: "5" }, { label: "Operators" }, { label: "Tickets" },
      { label: "Certificates" }, { label: "Contracts" }, { label: "Invoices" }, { label: "Reports" },
    ],
    greeting: "Good morning, Sarah",
    status: "Running · every ticket sorted overnight",
    kpis: [
      { label: "Tickets solved overnight", value: "38", note: "From approved fixes" },
      { label: "RFPs and questionnaires", value: "3", note: "Drafts ready to check" },
      { label: "Certificates due before June", value: "6", note: "Each has an owner" },
      { label: "Late operator invoices", value: "€64,200", note: "4 reminders sent", alert: true },
    ],
    todoTitle: "Needs you today",
    todos: [
      { initials: "GG", title: "RFP · Galea Gaming Ltd", detail: "212 answers drafted. 19 need an engineer, 5 need compliance.", tag: "Review", on: true },
      { initials: "RC", title: "RNG certificate · expires 31 March", detail: "Renewal pack ready. Two April launches depend on it.", tag: "Sign" },
      { initials: "VP", title: "Contract · Vella Play Ltd", detail: "Renews itself on 1 January on old rates. Notice window closes Friday.", tag: "Decide" },
      { initials: "FP", title: "October statement · Farrugia Play", detail: "€31,240 revenue share, built from 2.1 million game rounds.", tag: "Approve" },
    ],
    chartTitle: "Operator tickets this week",
    bars: [
      { label: "Mon", h: 46 }, { label: "Tue", h: 52 }, { label: "Wed", h: 61 }, { label: "Thu", h: 74 }, { label: "Fri", h: 100 },
    ],
    chartFoot: { label: "Solved from approved fixes", value: "146" },
    chatFloat: {
      channel: "Website chat · operator",
      time: "23:48",
      incoming: "Do you have a 94% RTP version of Luzzu Lights?",
      reply: "Yes. The 94% and 96% versions are both certified. The game sheet is on its way.",
      receipt: "Replied in 50 sec · game sheet sent",
    },
    alertFloat: {
      label: "Certificate Watch · just now",
      title: "RNG certificate expires 31 March",
      detail: "Two April launches depend on it. The renewal pack is ready to sign.",
      tag: "Pack ready",
    },
  },

  worksWith: ["Outlook & Gmail", "Your CRM", "Your ticket desk", "Your back office", "Excel & Google Sheets", "WhatsApp", "Your team chat", "Phone calls"],

  pillars: {
    label: "Built around your company",
    title: "Your products. Your operators. Your way of working.",
    items: [
      { icon: "folder", title: "Every answer you ever gave, in one place", body: "RFP answers, questionnaires, API docs, old tickets, certificates and contracts. Sorted by operator and product, and found in seconds." },
      { icon: "workflow", title: "Works inside the tools you use", body: "Your team stays in its CRM, ticket desk and inbox. The system works behind them." },
      { icon: "check", title: "The right person always signs", body: "Sales signs the deals. Compliance signs the filings. Engineers approve the technical answers. The system drafts and tracks." },
    ],
  },

  agents: {
    label: "Your AI account team",
    title: "Three AI agents. Trained on your company. Never a promise you didn’t approve.",
    intro: "They chat by email, website chat and WhatsApp, and they call. Each one knows your products, your docs and how your company talks. Prices, dates and contracts stay with your people.",
    note: "They answer, chase and remind. They never agree a price, a launch date or a contract term. A person can take over any chat or call.",
    items: [
      {
        name: "Partner agent",
        title: "Answers every operator.",
        points: [
          "Replies to new operators by email, website chat, WhatsApp and phone, day or night, from your approved answers.",
          "Follows up every trade-show contact in their language and books the call in your sales lead’s diary.",
          "Keeps long deals warm. It follows up for months, until the operator says yes, no or not yet.",
        ],
        channels: ["Email", "Website chat", "WhatsApp", "Voice calls"],
        result: "No operator left waiting",
      },
      {
        name: "Integration agent",
        title: "Sorts every ticket.",
        points: [
          "Answers API, game-launch and report questions from your docs and past fixes, day or night.",
          "Asks for the logs, request IDs and screenshots your engineers would ask for.",
          "Hands anything new to the right engineer with the full story, so nobody starts from zero.",
        ],
        channels: ["Ticket desk", "Email", "Shared chats", "Voice calls"],
        result: "Engineers only get the hard ones",
      },
      {
        name: "Renewals agent",
        title: "Watches every date.",
        points: [
          "Tracks certificates, market approvals, licence filings and contract renewals.",
          "Tells the right person months ahead, then again, then a director.",
          "Calls or messages the operator before a renewal or a maintenance window, and books the meeting.",
        ],
        channels: ["Voice calls", "Email", "Your calendar"],
        result: "No launch blocked by a date",
      },
    ],
  },

  jobs: {
    label: "Everything it does",
    title: "One system. Nineteen jobs, from RFP to invoice.",
    items: [
      { icon: "inbox", title: "Answers every operator enquiry and RFP", body: "Email, website chat, WhatsApp and the phone, day or night. It answers from your approved documents and books the call.", gain: "No operator waits for Monday" },
      { icon: "wrench", title: "Sorts every integration ticket", body: "API, game-launch, wallet and report questions answered from your docs and past fixes. New problems go to an engineer with the full story.", gain: "Operators go live sooner" },
      { icon: "file", title: "Fills due diligence questionnaires", body: "Licence, security, AML and company questions, filled from answers your team already approved. Anything new is flagged, never guessed.", gain: "Consistent answers, every time" },
      { icon: "badge", title: "Watches every certificate and approval", body: "Test lab certificates, market approvals and licence dates. Reminders start months before anything expires.", gain: "No launch blocked by paperwork" },
      { icon: "calendar", title: "Prepares every game launch", body: "A checklist for each market: approvals, game sheets, assets and dates, all ready before launch day.", gain: "Ready on day one" },
      { icon: "eye", title: "Checks operator contracts", body: "Reads each incoming contract and marks what differs from your standard terms: revenue share, liability, exclusivity and notice.", gain: "Faster signatures, fewer surprises" },
      { icon: "repeat", title: "Catches every renewal", body: "Tracks notice windows and auto-renewals in every operator contract, and tells your sales lead while there is time to talk terms.", gain: "No deal renews on old terms" },
      { icon: "receipt", title: "Builds operator statements and invoices", body: "Pulls rounds, wagers and revenue share from your back office and drafts each operator’s monthly invoice for you to approve.", gain: "No manual month-end" },
      { icon: "euro", title: "Chases late payments", body: "Polite reminders before the due date, firmer ones after, and a call when an invoice is weeks late.", gain: "Cash in on time" },
      { icon: "userPlus", title: "Follows up every trade-show lead", body: "Every badge scan and business card gets a message in their language within a day, with what you talked about.", gain: "Contacts become calls" },
      { icon: "phone", title: "Calls operators", body: "A voice agent calls operator contacts about open tickets, release dates, maintenance windows and renewals.", gain: "No more email ping-pong" },
      { icon: "clock", title: "Keeps every support promise", body: "Tracks each open ticket by operator, priority and age, and warns before a response time in your contract is missed.", gain: "Accounts stay happy" },
      { icon: "book", title: "Turns old tickets into answers", body: "Past tickets, docs and release notes become one help centre for your staff and your operators.", gain: "Each question answered once" },
      { icon: "shield", title: "Keeps your licence file ready", body: "Audit evidence and policies filed by section, with every audit and accounts date tracked. Your compliance team checks instead of hunts.", gain: "Evidence ready before it is asked for" },
      { icon: "search", title: "Reads every MGA update", body: "New directives, notices and consultations, read the day they appear. It shows your compliance team what each one touches.", gain: "You hear it first" },
      { icon: "card", title: "Explains failed payments and checks", body: "For payment and KYC vendors: tells operator staff why a payment was declined or an ID check failed, in plain words.", gain: "Fewer escalations" },
      { icon: "pen", title: "Writes release notes and game sheets", body: "Release notes, game sheets and operator updates in your house style, from your own data, for a person to approve.", gain: "Every release goes out complete" },
      { icon: "trending", title: "Gets you found on Google and in AI answers", body: "SEO for Google, plus the work that helps ChatGPT and Gemini recommend your company to operators.", gain: "Operators find you first" },
      { icon: "sun", title: "Briefs each account manager every morning", body: "Renewals coming up, open tickets, late invoices and operators who have gone quiet.", gain: "Know which account needs you" },
    ],
  },

  spotlights: [
    {
      label: "Integration support",
      title: "A launch breaks at 2 am. The fix is in your old tickets.",
      points: [
        "It answers API, game-launch, wallet and report questions from your docs, release notes and past tickets.",
        "It asks for the logs, request IDs and screenshots before anyone is woken.",
        "Anything new goes to the right engineer with the full story. A new fix is only used again after an engineer approves it.",
      ],
      visual: {
        type: "chat",
        initials: "TW",
        name: "Tomasz W.",
        origin: "Ticket desk · Vella Play Ltd",
        status: "Fixed",
        messages: [
          { from: "in", text: "Game launch fails on our staging site since your update. Error 4031 on every slot.", time: "02:14" },
          { from: "out", text: "Hi Tomasz. 4031 means the old launch URL. Since v5.2 you need the new one. Here are the two steps.", time: "02:14" },
          { from: "in", text: "Works now, thanks. We go live on Thursday. Can someone check our config first?", time: "02:29" },
          { from: "out", text: "Yes. An engineer can check it with you this morning or this afternoon. Which suits you?", time: "02:29" },
        ],
        slots: ["Today 10:00", "Today 14:30"],
        done: { before: "Fixed from ticket #3187 · ", strong: "review today 10:00", after: " · engineer briefed" },
      },
    },
    {
      label: "Trade-show leads",
      title: "Every contact from the show followed up. In their language.",
      points: [
        "Scan badges and snap business cards. It reads each contact and what you talked about.",
        "Each one gets a message in their language within a day, with the deck or the game you showed them.",
        "Every morning it ranks who to call first, and why.",
      ],
      visual: {
        type: "rows",
        title: "After the show · 146 contacts",
        hint: "Ranked by how ready they are",
        action: "call",
        rows: [
          { badge: "94", top: true, title: "Anna L. · Galea Gaming Ltd", detail: "Launching in two markets in March. Asked for live casino and an RFP." },
          { badge: "88", title: "CEO · new licensee", detail: "Licence issued last month. Needs a platform and payments by spring." },
          { badge: "81", title: "Head of content · Bonello Gaming", detail: "Opened your deck twice. Asked about crash games for Italy." },
          { badge: "73", title: "Head of casino · Cassar Bet Ltd", detail: "Met on day 2. Wants 20 new slots for a new brand. Follow-up sent in German." },
        ],
      },
    },
    {
      label: "Certificates & approvals",
      title: "No launch waits on a missing certificate.",
      points: [
        "It reads the dates in every test lab certificate, market approval and licence document.",
        "It builds a checklist for each launch and warns the right person months ahead, then again, then a director.",
        "It prepares the approval and renewal packs. Your compliance team checks them and signs.",
      ],
      visual: {
        type: "timeline",
        title: "Luzzu Lights · launch in Denmark",
        subtitle: "Launch day 1 March 2027 · 3 operators waiting",
        steps: [
          { when: "Day −90", title: "Launch checklist built", detail: "Approval, game sheet, assets and dates for Denmark, each with an owner." },
          { when: "Day −75", title: "Test lab report in and checked", detail: "One page missing. The lab was asked the same day." },
          { when: "Day −60", title: "Approval pack ready for you", detail: "Waiting for your compliance lead to review and sign.", key: true, tag: "Ready to sign" },
          { when: "Day −58", title: "Sent after your approval", detail: "Every step logged. Account managers told." },
          { when: "Launch day", title: "Live with all 3 operators", detail: "Game sheet and assets sent a week ahead. The next game is already on the list." },
        ],
      },
    },
    {
      label: "For payment and KYC vendors",
      title: "Every declined payment and failed check, explained in plain words.",
      points: [
        "Operator staff ask why a deposit was declined or an ID check failed. It reads the reason code and answers in plain words.",
        "It takes new operators through onboarding: documents, test transactions and the go-live date, with no chasing.",
        "It keeps your due diligence answers and contracts current. Your risk and compliance people make every decision.",
      ],
      visual: {
        type: "rows",
        title: "Operator questions · last night",
        hint: "Answered from your reason codes",
        action: "tag",
        rows: [
          { badge: "41", title: "Declined deposits · Vella Play Ltd", detail: "The card issuer blocks gaming payments. Operator told what it means and what to offer instead.", tag: "Explained" },
          { badge: "12", title: "Failed ID checks · Farrugia Play", detail: "Photos too dark to read. A tip sheet sent to their support team.", tag: "Explained" },
          { badge: "3", top: true, title: "Payouts on hold · Azzopardi Bet", detail: "Over the review limit. Sent to your risk team to decide.", tag: "Your risk team" },
          { badge: "1", title: "New operator · live on Monday", detail: "Test transactions passed. Contract and due diligence signed.", tag: "Ready" },
        ],
      },
    },
    {
      label: "Ask anything",
      title: "Ask it like you’d ask your best account manager.",
      points: [
        "Type a question in plain words. The answer comes from your own tickets, contracts and files, with a link to the source.",
        "No digging through shared drives. No “who answered this last time?”",
      ],
      visual: {
        type: "ask",
        questions: [
          { q: "Which certificates expire before June?", summary: "6 certificates expire before June. Each one has an owner and a date.", rows: [["RNG certificate", "31 Mar · pack ready to sign"], ["Platform certificate · Sweden", "2 May · evidence coming in"], ["Live tables · Spain", "27 May · renewal started"], ["Luzzu Lights · Italy", "29 May · re-test booked"], ["+ 2 more", "See all"]] },
          { q: "What did we agree with Vella Play on revenue share?", summary: "Contract signed on 3 March 2025. Found in 2 seconds.", rows: [["Revenue share", "Clause 6 · tiered by monthly GGR"], ["Minimum monthly fee", "Clause 6.4 · from month 4"], ["Renewal", "Renews itself on 1 January"], ["Notice to change terms", "Window closes this Friday"], ["Signed copy", "Open document"]] },
          { q: "Which operators are late paying?", summary: "4 operators owe €64,200. Reminders went to all of them on Monday.", rows: [["Azzopardi Bet Ltd", "€22,100 · 12 days late"], ["Borg Interactive", "€18,450 · 26 days late · call booked"], ["Mifsud Play", "€15,900 · 5 days late"], ["Grech Gaming Ltd", "€7,750 · 2 days late"]] },
          { q: "Which tickets could miss their promised time?", summary: "3 tickets are close to the response time in their contract. Each has an engineer on it.", rows: [["Azzopardi Bet · wallet timeouts", "Priority 1 · 40 min left"], ["Vella Play · report totals differ", "Priority 2 · 3 h left"], ["Borg Interactive · free rounds", "Priority 2 · 5 h left"], ["All other tickets", "Inside the promised times"]] },
        ],
      },
    },
  ],

  areas: {
    label: "Every kind of supplier",
    title: "Platforms, games, payments, KYC. All of it.",
    intro: "Every supplier lives on answers, tickets, certificates and invoices. The system does those. Your team builds the product and wins the deals.",
    colA: "Your work",
    colB: "The system does",
    colC: "You do",
    items: [
      { name: "Platform providers", system: "Answers RFPs, runs integration tickets, tracks every certificate and builds each operator’s monthly statement.", you: "Win the deal and set the roadmap." },
      { name: "Game studios", system: "Prepares game sheets and launch checklists per market, tracks test lab certificates and answers operator questions about every game.", you: "Make the next hit." },
      { name: "Aggregators", system: "Routes tickets between studios and operators, keeps every game’s approvals in one list and splits the monthly statements.", you: "Choose the studios and sign the operators." },
      { name: "Live casino", system: "Answers table, studio and stream questions, tracks approvals per market and tells operators before maintenance.", you: "Run the studio." },
      { name: "Sportsbook and odds feeds", system: "Answers feed and settlement questions from your docs, tracks market approvals and keeps match-day tickets moving.", you: "Set the prices and manage the risk." },
      { name: "Payment providers", system: "Explains declined payments to operator staff, onboards new operators and checks settlements against your reports.", you: "Decide on risk and pricing." },
      { name: "KYC and identity checks", system: "Explains failed checks in plain words, keeps operator questionnaires current and tracks every contract and renewal.", you: "Set the rules and sign the answers." },
    ],
  },

  wins: {
    label: "Your operators feel it first",
    title: "Their win is your win.",
    items: [
      { title: "Their RFP comes back first.", body: "A new operator sends the same RFP to five suppliers. Yours comes back early, complete and signed. That is how a shortlist starts." },
      { title: "Live on the day they planned.", body: "Certificates, approvals and game sheets are ready before launch day. Their campaign goes out on time, with you in it." },
      { title: "A fix at 2 am, not a ticket number.", body: "Their developer gets an answer in the middle of the night, or an engineer who already knows the problem. They trust you with the next launch." },
    ],
  },

  live: {
    label: "How it starts",
    h2Before: "We set it up for you in",
    h2Em: "72 hours.",
    body: "We come in, connect your inbox, ticket desk and documents, and set the whole thing up. Nothing new for your team to learn.",
    steps: [
      { when: "Today", title: "A 20-minute call", body: "About how your company works and where deals and hours leak." },
      { when: "72 hours", title: "Your first system is live", body: "Usually: every operator enquiry and integration ticket answered from your own docs, day and night." },
      { when: "Week 2", title: "Your files connected", body: "RFP answers, certificates, contracts and invoices in one place." },
      { when: "Every week", title: "It grows with you", body: "It learns your products, and the next job goes live." },
    ],
  },

  ways: {
    label: "Start where you want",
    title: "One team or the whole company. You choose.",
    items: [
      { title: "Fix one job", body: "Pick the one thing that eats the most hours and we automate just that.", example: "Example: answer every integration ticket at night." },
      { title: "Plug into what you use", body: "Keep your CRM, ticket desk and back office. We connect to them.", example: "Example: each month’s game data becomes operator invoices in your accounts software." },
      { title: "The full system", body: "Everything on this page, built around your company, customised and looked after by us.", example: "Example: RFPs, tickets, certificates, contracts and invoices in one place." },
      { title: "Not sure yet?", body: "Most suppliers aren’t. We look at your week and show you where the hours go.", example: "Free. Takes 20 minutes." },
    ],
  },

  offer: {
    label: "Limited-time offer",
    title: "Your first month is free.",
    body: "We set it up in 72 hours and run it with you for a month. You see the tickets sorted, the RFPs drafted and the dates caught on your own company first.",
    cta: "Claim your free month",
    secondaryCta: "Book a 20-minute call",
    listLabel: "What you get",
    items: [
      { strong: "First month free.", rest: "See it work on your own operators and tickets before you decide." },
      { strong: "Set up for you in 72 hours.", rest: "We connect your inbox, ticket desk and documents. You change nothing." },
      { strong: "It is your system.", rest: "Built around your products, your approved answers and your way of working." },
      { strong: "Run by us.", rest: "We customise it, look after it and improve it every week." },
      { strong: "Start small.", rest: "One job first. Add the next only when the first has paid for itself." },
    ],
  },

  calc: {
    label: "Your numbers",
    title: "What answering the same questions costs you.",
    mode: "times",
    factor: 46,
    inputs: [
      { label: "People who answer operators", value: 4 },
      { label: "Hours each spends a week on repeat questions", value: 10 },
      { label: "Cost of an hour of their time (€)", value: 45 },
    ],
    out1: "Hours a year spent on questions answered before",
    out2: "What those hours cost you",
    footnote: "Assumes 46 working weeks a year. Repeat questions are tickets, RFP lines and questionnaire answers your team has written before. Not every hour comes back, so change the numbers to match your company.",
  },

  trust: {
    label: "You stay in charge",
    title: "It drafts and tracks. Your people sign.",
    items: [
      { icon: "eye", title: "Nothing new goes out unchecked", body: "The agents only use answers your team has approved. Anything new waits for the person who owns it, and every action is logged." },
      { icon: "lock", title: "Operator data stays apart", body: "Your data is only used for your company and is handled under GDPR. Each operator only ever gets answers about its own account." },
      { icon: "book", title: "Every answer shows its source", body: "Each RFP answer, ticket reply and date links to the document it came from. Checking takes seconds." },
      { icon: "users", title: "A team in Malta", body: "OARC’s team in Birkirkara sets it up, loads your approved answers and docs, and picks up the phone." },
    ],
  },

  facts: {
    label: "Why now",
    title: "New licences every year. Deadlines on every one.",
    items: [
      { n: "19", l: "New gaming licences the MGA issued in 2025, from 38 applications. Each new licensee picks its partners.", src: { label: "MGA 2025 Annual Report, July 2026", href: "https://www.mga.org.mt/the-mga-publishes-its-2025-annual-report-and-financial-statements/" } },
      { n: "60 days", l: "For the external auditor to file a System Audit report, from the Letter of Engagement. A check without enough evidence is marked non-compliant.", src: { label: "MGA audit procedures, May 2025", href: "https://www.mga.org.mt/app/uploads/MGA-communicates-changes-to-the-System-Audit-System-Review-and-Compliance-Audit-procedures-1.pdf" } },
      { n: "180 days", l: "To file audited financial statements with the MGA after the financial year ends. It applies to every licensed company.", src: { label: "MGA Directive 3 of 2018, art. 41", href: "https://www.mga.org.mt/submission-of-audited-financial-statements-2021/" } },
    ],
  },

  faq: [
    { q: "What is it, exactly?", a: "One AI system built around your B2B gaming company. It answers operator enquiries and RFPs, fills due diligence questionnaires, sorts integration tickets, watches every certificate, approval and contract date, follows up trade-show leads and builds operator invoices. OARC’s team in Malta sets it up and runs it with you." },
    { q: "Does it give legal or compliance advice?", a: "No. It drafts and tracks. Your compliance team signs certifications and regulator filings, your engineers approve technical answers and your sales lead signs deals." },
    { q: "Will it replace our account managers or support engineers?", a: "No. It takes the repeat questions, the form-filling and the chasing, so your people spend their time on operators, launches and the hard problems." },
    { q: "Is operator data kept confidential?", a: "Yes. Your data is only used for your company and is handled under GDPR. Each operator only ever gets answers about its own account." },
    { q: "Can it fill in RFPs and due diligence questionnaires?", a: "Yes. It fills each one from answers your team has already approved, links every answer to its source and flags anything new or out of date. Your compliance team and sales lead check and sign before it goes." },
    { q: "Does it work with our CRM, ticket desk and back office?", a: "Yes. We connect it to the CRM, ticket desk, email, documents and back-office software you already use. If no connection exists, we build one." },
    { q: "Is it for payment and KYC providers too?", a: "Yes. It explains declined payments and failed checks to operator staff from your reason codes, takes new operators through onboarding and keeps their questionnaires and contracts on time. Your risk and compliance people make every decision." },
    { q: "Can it do just one thing?", a: "Yes. You can start with one job, such as answering integration tickets at night, and add the next when the first has paid for itself." },
    { q: "How fast is it live?", a: "We set up your first system in 72 hours. The rest is connected over the following weeks." },
    { q: "Do the AI agents call operators?", a: "Yes. A voice agent calls operator contacts about open tickets, release dates, maintenance windows and renewals, and books the meeting. It never agrees a price, a launch date or a contract term, and a person can take over any call." },
    { q: "What if it gets something wrong?", a: "The agents only use answers your team has approved. Anything new goes to the right person first, every answer shows its source and every action is logged. If something needs changing, OARC’s team in Malta changes it." },
    { q: "How much does it cost?", a: "Right now the first month is free. After that it depends on your company’s size and what you switch on. Ask us and we price it for your company." },
    { q: "What must an MGA B2B licensee show on its website?", a: "The MGA’s Player Protection Directive says a B2B licensee must show, where it is easy to see, that it is licensed by the MGA, with its licence number and the activities it is licensed for. This applies on its website and in public premises where it shows its products to clients and prospects. It must also make clear which products are licensed, which hold a material supply certificate and which have neither." },
    { q: "Must an operator re-submit certification for games from a B2B licensee?", a: "No. The MGA’s Player Protection Directive says certification for games submitted by a B2B licensee does not have to be re-submitted by a B2C licensee that gets those games from it." },
    { q: "When is an MGA System Audit report due?", a: "The MGA says the external auditor must file the completed report through its portal within 60 days of the Letter of Engagement. If non-compliance is found, the licensee may ask for 60 more days to fix it. A check without enough evidence is marked non-compliant until proof is given." },
  ],

  cta: {
    titleBefore: "The next RFP lands tonight.",
    titleEm: "Be the first to answer.",
    body: "Claim your free first month. We set it up for you in 72 hours.",
    button: "Claim your free month",
    secondary: "Book a 20-minute call",
  },

  sources: [
    { label: "MGA: 2025 Annual Report and Financial Statements", href: "https://www.mga.org.mt/the-mga-publishes-its-2025-annual-report-and-financial-statements/" },
    { label: "MGA: System Audit, System Review and Compliance Audit procedures, May 2025", href: "https://www.mga.org.mt/app/uploads/MGA-communicates-changes-to-the-System-Audit-System-Review-and-Compliance-Audit-procedures-1.pdf" },
    { label: "MGA: audited financial statements, Directive 3 of 2018, art. 41", href: "https://www.mga.org.mt/submission-of-audited-financial-statements-2021/" },
    { label: "MGA Player Protection Directive (Directive 2 of 2018)", href: "https://www.mga.org.mt/app/uploads/Directive-2-of-2018-Player-Protection-Directive.pdf" },
  ],
  related: [
    { label: "iGaming marketing in Malta", href: "/industries/igaming" },
    { label: "AI SDR agent", href: "/services/ai-sdr-agent" },
    { label: "AI compliance auditor", href: "/services/ai-compliance-auditor" },
    { label: "AI for iGaming operators", href: "/ai/igaming-operators" },
  ],
  disclaimer: "OARC Digital · Malta. OARC Digital is not a gaming regulator, auditor or law firm and does not give legal or compliance advice. Names and figures on the screens are from a demo account.",
};
