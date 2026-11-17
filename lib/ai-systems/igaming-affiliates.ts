import type { AiSystemContent } from "./types";

export const igamingAffiliates: AiSystemContent = {
  slug: "igaming-affiliates",
  name: "iGaming affiliates",
  barLabel: "Affiliate AI",
  business: "gaming affiliate business",
  metaTitle: "iGaming Affiliate AI in Malta | Compliance | OARC Digital",
  metaDescription:
    "The AI system built around your iGaming affiliate business in Malta. It checks every page against the advert rules, keeps offers current and chases commission.",
  updated: "2026-11-16",
  serviceType: "AI system and compliance automation for iGaming affiliates",
  schemaDescription:
    "An AI system built around each iGaming affiliate business in Malta: it checks every page, post and advert against the advert rules and each operator's terms before it goes live, keeps bonus terms and links up to date, drafts reviews and guides, reconciles commission statements, chases payouts and tracks search and AI-answer visibility. An editor or compliance lead approves everything. Set up and run by OARC Digital's team in Malta.",
  hub: {
    title: "iGaming affiliates",
    body: "Every page checked before it goes live. Every offer kept current and every commission gap chased. Your editor signs off.",
    gain: "Review sites, tipsters, networks and media",
  },

  lightAreas: true,

  hero: {
    pill: "We set it up for you in 72 hours",
    kicker: "Finally, you have",
    h1Before: "One complete AI system built around",
    h1Highlight: "your affiliate business.",
    sub: "The system checks every page, post and ad against the advert rules and each operator’s terms, and keeps every offer current. AI agents trained on your deals talk to operators, answer readers and chase every euro you’re owed. Nothing goes live without your editor’s yes.",
    primaryCta: "Claim your free month",
    secondaryCta: "Book a 20-minute call",
    note: "First month free. Set up and run by OARC’s team in Malta.",
  },

  film: {
    title: "Watch one bonus change, from the operator’s email to your approval",
    scenes: [
      {
        clock: "Thursday · 22:48",
        caption: "An operator says its welcome offer changes at midnight, and your team has gone home.",
        result: "Confirmed in 3 minutes",
        visual: {
          type: "chat",
          initials: "NK",
          name: "Nina K.",
          origin: "Email · Grech Gaming",
          status: "Confirmed",
          messages: [
            { from: "in", text: "Heads up: from midnight our welcome offer is 50% up to €100, 35x wagering.", time: "22:48" },
            { from: "out", text: "Thanks Nina. Does the old 100% up to €200 end at 00:00 in every market?", time: "22:49" },
            { from: "in", text: "Yes, every market. The new terms page is already live.", time: "22:51" },
          ],
          done: { before: "Change confirmed · ", strong: "14 places", after: " still show the old offer" },
        },
      },
      {
        clock: "Thursday · 22:56",
        caption: "It finds every page, post and banner with the old offer, and drafts each fix.",
        result: "All 14 found, fixes drafted",
        visual: {
          type: "rows",
          title: "Grech Gaming · old offer in 14 places",
          hint: "Found at 22:55",
          action: "tag",
          rows: [
            { badge: "01", top: true, title: "Casino welcome offers guide", detail: "Offer table redrafted. Wagering shown, terms one click away.", tag: "Fix ready" },
            { badge: "02", title: "Grech Gaming review", detail: "Bonus box and summary rewritten from the new terms page.", tag: "Fix ready" },
            { badge: "03", title: "Homepage banner", detail: "Old artwork. New approved banner requested from Nina.", tag: "Asked" },
          ],
        },
      },
      {
        clock: "Thursday · 23:20",
        caption: "Your editor checks the fixes on her phone, and they go live at midnight with the new offer.",
        result: "Approved by Sara. Live at 00:00.",
        visual: {
          type: "timeline",
          title: "Welcome offer update · Grech Gaming",
          subtitle: "Old offer ends at 00:00",
          steps: [
            { when: "23:14", title: "Every fix checked against the rules", detail: "Age sign, play-responsibly message and terms link on all 14." },
            { when: "23:20", title: "Sara approves the update", detail: "One line reworded on her phone. Every change logged.", key: true, tag: "Approved by your editor" },
            { when: "00:00", title: "Live the minute the offer changes", detail: "Old offer gone everywhere. Every link tested." },
          ],
        },
      },
    ],
  },

  dashboard: {
    title: "Every site and every deal on one screen.",
    body: "Every morning: what changed overnight, what is waiting for your yes, and who still owes you money.",
    org: "Your Sites",
    search: "Ask anything… “Which pages show Grech Gaming’s offer?”",
    initials: "LM",
    nav: [
      { label: "Today" }, { label: "To approve", badge: "7" }, { label: "Pages" }, { label: "Offers" },
      { label: "Operators" }, { label: "Commission" }, { label: "Search & AI" }, { label: "Reports" },
    ],
    greeting: "Good morning, Luke",
    status: "Running · every page checked overnight",
    kpis: [
      { label: "Pages and posts checked", value: "1,240", note: "4 flagged for review" },
      { label: "Offers changed overnight", value: "3", note: "Fixes drafted for 11 pages" },
      { label: "Waiting for your yes", value: "7", note: "Fixes and new drafts" },
      { label: "Commission overdue", value: "€6,980", note: "2 operators chased", alert: true },
    ],
    todoTitle: "Needs you today",
    todos: [
      { initials: "VG", title: "Free spins cut · Vella Gaming", detail: "9 pages show the old offer. Fixes drafted, live when you approve.", tag: "Approve", on: true },
      { initials: "GG", title: "October gap · Galea Gaming", detail: "18 first deposits missing. Call with their finance team on Wed 10:00.", tag: "Chased" },
      { initials: "AG", title: "Deal renews in 90 days · Attard Gaming", detail: "Case built from six months of players and revenue.", tag: "Review" },
      { initials: "SL", title: "New review from Sara · Grech Gaming", detail: "Checked against the rules. One banner for Daniela to decide.", tag: "Decide" },
    ],
    chartTitle: "First deposits tracked this week",
    bars: [
      { label: "Mon", h: 52 }, { label: "Tue", h: 47 }, { label: "Wed", h: 60 }, { label: "Thu", h: 56 },
      { label: "Fri", h: 71 }, { label: "Sat", h: 88 }, { label: "Sun", h: 100 },
    ],
    chartFoot: { label: "Matched to statements so far", value: "94%" },
    chatFloat: {
      channel: "Email · Grech Gaming",
      time: "22:48",
      incoming: "Heads up: from midnight our welcome offer is 50% up to €100.",
      reply: "Thanks Nina. Every page will show it from 00:00, once our editor approves.",
      receipt: "Replied in 1 min · 14 places found",
    },
    alertFloat: {
      label: "Offer Watch · just now",
      title: "Free spins cut at Vella Gaming",
      detail: "9 pages show the old offer. Fixes drafted for Sara.",
      tag: "Fixes drafted",
    },
  },

  worksWith: ["Your CMS", "Your tracking software", "Operator affiliate portals", "Excel & Google Sheets", "Outlook & Gmail", "WhatsApp", "Facebook & Instagram", "Phone calls"],

  pillars: {
    label: "Built around your affiliate business",
    title: "Your sites. Your deals. Your way of working.",
    items: [
      { icon: "network", title: "Every deal and every page in one place", body: "Operator agreements, offers, statements, tracking links and every page you run. Connected, and found in seconds." },
      { icon: "workflow", title: "Works inside the tools you use", body: "Your writers keep their CMS. Your finance team keeps its sheets. The system works behind them." },
      { icon: "shield", title: "Checked before it goes live", body: "Every page, post and ad is checked against the advert rules and the operator’s terms. Your editor says yes, or it waits." },
    ],
  },

  agents: {
    label: "Your AI team",
    title: "Three AI agents. Trained on your sites. They never promise a win.",
    intro: "They chat by email, WhatsApp and on your sites, and they call. Each one knows your deals, your pages and every operator’s terms.",
    note: "They answer, confirm and chase. They never promise a win, never write for minors and never publish without a yes. A person on your team can take over any chat or call.",
    items: [
      {
        name: "Partner agent",
        title: "Keeps every operator in step.",
        points: [
          "Watches each operator’s offer and terms pages, and checks every change with their affiliate manager.",
          "Asks for approved banners, logos and terms, and gets new pages cleared when a deal says it must.",
          "Books deal and renewal calls in your diary, with your numbers ready.",
        ],
        channels: ["Email", "WhatsApp", "Voice calls", "Your calendar"],
        result: "No change catches you out",
      },
      {
        name: "Payout agent",
        title: "Gets you paid in full.",
        points: [
          "Matches every statement against your own clicks, sign-ups and first deposits.",
          "Finds missing players, wrong rates, late payments and deductions nobody explained.",
          "Writes to or calls the operator’s affiliate and finance team with the proof, until it is settled.",
        ],
        channels: ["Email", "Voice calls", "WhatsApp"],
        result: "Every euro you’re owed, chased",
      },
      {
        name: "Reader agent",
        title: "Answers readers honestly.",
        points: [
          "Replies on your sites, email and social pages in the reader’s language, from the operator’s real terms.",
          "Explains wagering and bonus terms in plain words. It never says a bet is safe or a win is likely.",
          "If a reader mentions being under age or losing control, it stops, shows where to get help and tells your team.",
        ],
        channels: ["Your sites", "Facebook & Instagram", "Email", "WhatsApp"],
        result: "Readers who trust your pages",
      },
    ],
  },

  jobs: {
    label: "Everything it does",
    title: "One system. Twenty jobs, from the first draft to the last payout.",
    items: [
      { icon: "shield", title: "Checks every page before it goes live", body: "Reviews, bonus pages, emails and banners, against the advert rules, your market rules and each operator’s brand rules. It marks every line to fix.", gain: "No deal lost to a breach" },
      { icon: "refresh", title: "Keeps every offer up to date", body: "Watches each operator’s own offer and terms pages. When a bonus changes, it finds every page that shows it and drafts the fix.", gain: "No page shows a dead offer" },
      { icon: "euro", title: "Reconciles every commission statement", body: "Matches what each operator pays against your own clicks, sign-ups and first deposits, then chases every gap.", gain: "Paid for every player you send" },
      { icon: "trending", title: "Gets you found on Google and in AI answers", body: "SEO for Google, plus the work that helps ChatGPT and Gemini quote your guides. It watches every page that earns.", gain: "More readers find you first" },
      { icon: "pen", title: "Drafts reviews and guides", body: "From your own checklists and each operator’s real terms. Every claim links to its source. An editor approves each one.", gain: "More pages, same standard" },
      { icon: "badge", title: "Puts the age and help lines on every page", body: "The minimum age, a play-responsibly message and a link to help, in the right place on every page, post and banner.", gain: "Never left off a page" },
      { icon: "image", title: "Keeps your social posts inside the rules", body: "Checks every post for the age sign, the play-responsibly message and the terms link, and asks for age-gating wherever a platform offers it.", gain: "Every post checked first" },
      { icon: "filter", title: "Shows each reader only the right offers", body: "Uses your deals and each operator’s accepted countries to show readers only the offers meant for where they are.", gain: "No offer in the wrong country" },
      { icon: "link", title: "Finds broken links and dead offers", body: "Tests every tracking link and offer box every day. Closed brands, expired codes and broken links come back as a fix list.", gain: "No click goes to waste" },
      { icon: "chat", title: "Answers readers in their language", body: "On your sites, email and social pages, from your own pages and the operator’s real terms. It never pushes a bet.", gain: "Readers trust your pages" },
      { icon: "file", title: "Keeps every agreement searchable", body: "Rates, caps, approval rules, brand rules and notice dates. Ask in plain words and get the clause.", gain: "No missed clause" },
      { icon: "users", title: "Prepares deals and renewals", body: "Builds the case from your players and revenue for each operator, drafts the email and books the call.", gain: "Every renewal prepared early" },
      { icon: "phone", title: "Calls operators about late payments", body: "A voice agent phones affiliate and finance contacts about missing statements and late payments, and logs every answer.", gain: "Cash in sooner" },
      { icon: "receipt", title: "Invoices fixed fees and listings", body: "Sends invoices for listing fees and paid placements on time, and chases what is unpaid.", gain: "Every listing paid for" },
      { icon: "chart", title: "Builds your weekly report", body: "Traffic, clicks, sign-ups, first deposits and commission, per operator, per site and per page.", gain: "Decisions on facts" },
      { icon: "eye", title: "Flags risky traffic", body: "Spots sign-ups from countries a deal does not cover, comments that suggest a reader is under age, and clicks that look fake.", gain: "Your deals stay safe" },
      { icon: "inbox", title: "Watches for rule changes", body: "Reads MGA news and the notices your operators send, and shows which of your pages a change touches.", gain: "First to know" },
      { icon: "languages", title: "Translates pages for new markets", body: "Working translations of your reviews and guides, with the age and help lines your compliance lead sets for each country.", gain: "Every market in its own language" },
      { icon: "calendar", title: "Plans content around the sports calendar", body: "Lines up previews and guides before big matches and tournaments, so drafts reach your editors in time.", gain: "Ready before kick-off" },
      { icon: "sun", title: "Briefs you every morning", body: "Offers that changed overnight, pages waiting for a yes, statements due and payments late.", gain: "Start the day knowing" },
    ],
  },

  spotlights: [
    {
      label: "Before it goes live",
      title: "Checked before a reader, an operator or the MGA sees it.",
      points: [
        "It reads every new page, email and banner: the words, the offer and the images.",
        "It checks Malta’s advert rules, the rules you set for each market, and each operator’s brand rules.",
        "Every flag shows the rule behind it. Your editor or compliance lead decides what goes live.",
      ],
      visual: {
        type: "rows",
        title: "New review · Grech Gaming",
        hint: "Checked before publishing · 4 flags",
        action: "tag",
        rows: [
          { badge: "01", top: true, title: "Banner with a cartoon mascot", detail: "Could appeal to children. Daniela decides.", tag: "Needs you" },
          { badge: "02", title: "“Your best chance to win big”", detail: "A claim about winning. Removed, new line drafted.", tag: "Rewritten" },
          { badge: "03", title: "Bonus box", detail: "Wagering was missing. Added, with the terms one click away.", tag: "Fixed" },
          { badge: "04", title: "Age sign and help link", detail: "Not under the offer. Added where your rules put them.", tag: "Fixed" },
        ],
      },
    },
    {
      label: "Commission",
      title: "Every statement checked. Every missing player chased.",
      points: [
        "It matches each operator’s statement against your own clicks, sign-ups and first deposits.",
        "It lists the gap: which players, which rate and how much, with the proof.",
        "The payout agent writes or calls the operator, books the call and keeps chasing until it is paid.",
      ],
      visual: {
        type: "chat",
        initials: "JP",
        name: "Jonas P.",
        origin: "Email · Galea Gaming affiliate team",
        status: "Chased",
        messages: [
          { from: "out", text: "Hi Jonas, your October statement shows 194 first deposits. Our tracking shows 212. The 18 are attached.", time: "09:02" },
          { from: "in", text: "Thanks. I can see some of them. Our finance team needs to check the rest.", time: "09:40" },
          { from: "out", text: "Of course. Could we have a short call with finance this week? Here are two times.", time: "09:41" },
        ],
        slots: ["Wed 10:00", "Thu 15:30"],
        done: { before: "Call booked with finance · ", strong: "Wed 10:00", after: " · €1,260 in question" },
      },
    },
    {
      label: "Search and AI answers",
      title: "Watch every page that earns. Fix the ones that slip.",
      points: [
        "It tracks every page that earns, on Google and in answers from ChatGPT and Gemini.",
        "When a page slips, it shows why and drafts the refresh: newer offers, clearer answers, faster pages.",
        "It finds the questions readers ask that no page of yours answers yet.",
      ],
      visual: {
        type: "rows",
        title: "Pages to act on this week",
        hint: "Ranked by commission at stake",
        action: "tag",
        rows: [
          { badge: "01", top: true, title: "Free spins guide", detail: "Down from 3rd to 6th on Google. Two offers on it are 40 days old.", tag: "Refresh drafted" },
          { badge: "02", title: "Attard Gaming review", detail: "Quoted in AI answers this week. Every fact still current.", tag: "Quoted" },
          { badge: "03", title: "“How does wagering work?”", detail: "Readers ask it every day. No page of yours answers it yet.", tag: "Outline ready" },
          { badge: "04", title: "Free bet guide", detail: "Up from 9th to 4th since last month’s refresh.", tag: "Climbing" },
        ],
      },
    },
    {
      label: "Operator deals",
      title: "No deal renews by surprise.",
      points: [
        "It keeps every agreement searchable: rates, caps, approval rules and notice dates.",
        "Months before a renewal, it builds your case from that operator’s players, deposits and revenue.",
        "It books the call and marks every change in the new terms. You negotiate and sign.",
      ],
      visual: {
        type: "timeline",
        title: "Attard Gaming · revenue share deal",
        subtitle: "Renews 1 March 2027",
        steps: [
          { when: "Day −90", title: "Renewal and notice dates found", detail: "Clause 9: 60 days’ notice to change terms." },
          { when: "Day −80", title: "Your case built", detail: "Six months of players, deposits and revenue for this operator." },
          { when: "Day −75", title: "Call booked with their affiliate manager", detail: "At their Ta’ Xbiex office. Your numbers sent ahead." },
          { when: "Day −62", title: "New terms in, every change marked", detail: "Rate up, cap removed, one new approval rule.", key: true, tag: "Ready for you" },
          { when: "Day 0", title: "Signed, and your reports updated", detail: "The new rate is used from the first statement." },
        ],
      },
    },
    {
      label: "Ask anything",
      title: "Ask it like you’d ask your best affiliate manager.",
      points: [
        "Type a question in plain words. The answer comes from your own deals, pages and statements, with a link to each.",
        "No sheets to open. No “who has that contract?”",
      ],
      visual: {
        type: "ask",
        questions: [
          { q: "Which pages show Grech Gaming’s welcome offer?", summary: "12 pages and 2 banners. All match the operator’s live terms, checked at 06:00.", rows: [["Casino welcome offers guide", "Matches"], ["Grech Gaming review", "Matches"], ["New casinos guide", "Matches"], ["Homepage banner", "New artwork approved"], ["+ 10 more", "See all"]] },
          { q: "Who hasn’t paid for October?", summary: "2 operators are late, €6,980 in total. Both have been chased.", rows: [["Galea Gaming", "€4,120 · 9 days late · call booked"], ["Vella Gaming", "€2,860 · 3 days late · reminder sent"], ["Every other operator", "Paid and matched"], ["Next statements due", "5 December"]] },
          { q: "What does our Attard Gaming deal say about approvals?", summary: "New pages that name the brand need their OK first. Found in 2 seconds.", rows: [["Approval rule", "Clause 6 · new pages and banners"], ["Time to reply", "5 working days"], ["Brand rules", "Logo and colour file, version 4"], ["Signed copy", "Open document"]] },
          { q: "Which offers end this week?", summary: "4 offers end this week. Every page is ready to change on the day.", rows: [["Fri · Galea Gaming free bet", "6 pages · fixes drafted"], ["Sat · Vella Gaming cashback", "4 pages · fixes drafted"], ["Sun · Attard Gaming free spins", "3 pages · operator asked"], ["Sun · Grech Gaming reload bonus", "New terms not out yet"]] },
        ],
      },
    },
  ],

  areas: {
    label: "Every way you earn",
    title: "Reviews, tips, deals and payouts. All of it.",
    intro: "Most affiliate work is checking, updating and chasing. The system does that. Your people write, judge and close the deals.",
    colA: "Your work",
    colB: "The system does",
    colC: "You do",
    items: [
      { name: "Casino reviews & comparisons", system: "Drafts reviews from your checklist and each operator’s real terms, keeps every comparison table current and checks each page before it goes live.", you: "Write the verdict and set the ranking." },
      { name: "Bonus & offer pages", system: "Watches every operator’s offer page, finds each page that shows a changed bonus and drafts the fix, with wagering and the terms link.", you: "Approve it, and it goes live." },
      { name: "Sports tips & previews", system: "Pulls form, stats and the latest odds into a draft preview, and flags any line that suggests a sure win.", you: "Make the pick and sign the tip." },
      { name: "News & guides", system: "Drafts news and how-to guides from approved sources, links every claim and updates each guide when a rule changes.", you: "Edit and publish." },
      { name: "Social channels & communities", system: "Checks every post for the age sign, the play-responsibly message and the terms link, and asks for age-gating wherever the platform offers it.", you: "Approve and post." },
      { name: "Email & newsletters", system: "Checks every email before it is sent, keeps the help link in every issue and stops mail to anyone who unsubscribes.", you: "Choose what goes out." },
      { name: "Operator deals", system: "Keeps every agreement searchable, watches renewal and notice dates and builds each renewal case from your numbers.", you: "Negotiate and sign." },
      { name: "Commission & payouts", system: "Reconciles every statement with your tracking, invoices fixed fees and chases every late or short payment.", you: "Sign off the numbers." },
      { name: "Networks & sub-affiliates", system: "Checks every partner’s pages and posts against your rules and the operators’, and works out what each partner is owed.", you: "Decide who stays in the network." },
    ],
  },

  wins: {
    label: "Your readers feel it first",
    // Not "Their win is your win.": affiliates earn when players lose, so that line reads wrong here.
    title: "Straight with readers. Good for you.",
    items: [
      { title: "The offer they read is the offer they get.", body: "A reader clicks a bonus on your page and finds the same terms at the operator. No nasty surprise, so they trust your next page too." },
      { title: "A straight answer, any hour.", body: "At 1 am a reader asks how wagering works. They get a plain answer from the real terms, with no push to bet." },
      { title: "Help is always there.", body: "Every page and post shows the minimum age and where to get help. Readers who need it find it fast." },
    ],
  },

  live: {
    label: "How it starts",
    h2Before: "We set it up for you in",
    h2Em: "72 hours.",
    body: "We come in, connect your sites, deals and inboxes, and set the whole thing up. Nothing new for your writers to learn.",
    steps: [
      { when: "Today", title: "A 20-minute call", body: "About your sites, your operators and where the hours and the money go." },
      { when: "72 hours", title: "Your first system is live", body: "Usually: every page checked before it goes live, and every operator offer watched." },
      { when: "Week 2", title: "Your deals and statements connected", body: "Agreements, tracking and commission reports in one place." },
      { when: "Every week", title: "It grows with you", body: "It learns your sites and your operators, and the next job goes live." },
    ],
  },

  ways: {
    label: "Start where you want",
    title: "One job or every site. You choose.",
    items: [
      { title: "Fix one job", body: "Pick the one thing that costs you most and we automate just that.", example: "Example: check every page against the rules before it goes live." },
      { title: "Plug into what you use", body: "Keep your CMS, your tracking software and your sheets. We connect to them.", example: "Example: operator statements matched to your tracking every month." },
      { title: "The full system", body: "Everything on this page, built around your affiliate business, customised and looked after by us.", example: "Example: pages, offers, deals and payouts in one place." },
      { title: "Not sure yet?", body: "Most affiliates aren’t. We look at your week and show you where the hours and the commission leak.", example: "Free. Takes 20 minutes." },
    ],
  },

  offer: {
    label: "Limited-time offer",
    title: "Your first month is free.",
    body: "We set it up in 72 hours and run it with you for a month. You see the pages checked, the offers kept current and the commission gaps found on your own sites first.",
    cta: "Claim your free month",
    secondaryCta: "Book a 20-minute call",
    listLabel: "What you get",
    items: [
      { strong: "First month free.", rest: "See it work on your own sites and statements before you decide." },
      { strong: "Set up for you in 72 hours.", rest: "We connect your sites, inboxes and tracking. You change nothing." },
      { strong: "It is your system.", rest: "Built around your sites, your operators’ rules and your way of working." },
      { strong: "Run by us.", rest: "We customise it, look after it and improve it every week." },
      { strong: "Start small.", rest: "One job first. Add the next only when the first has paid for itself." },
    ],
  },

  calc: {
    label: "Your numbers",
    title: "What a missing player costs you.",
    mode: "percent",
    inputs: [
      { label: "Depositing players you send operators a year", value: 5000 },
      { label: "Share that never shows on a statement (%)", value: 2, max: 100 },
      { label: "Average commission per player (€)", value: 120 },
    ],
    out1: "Players not paid for, every year",
    out2: "Commission those players were worth",
    footnote: "Assumes every player earns the same commission. The 2% is only a starting point, so change the numbers to match your business.",
  },

  trust: {
    label: "You stay in charge",
    title: "It checks. Your editor decides.",
    items: [
      { icon: "eye", title: "A person approves every word", body: "Nothing goes live on a page, a post, an email or an ad without your editor’s or compliance lead’s yes." },
      { icon: "shield", title: "Never for minors. Never a promised win.", body: "It never writes for minors or vulnerable people, never promises winnings and never pushes a bet. It flags any line that could." },
      { icon: "lock", title: "Your deals stay private", body: "Your business gets its own private system. Your rates, statements and reader data are only used for your business and handled under GDPR." },
      { icon: "users", title: "A team in Malta", body: "OARC’s team in Birkirkara sets it up, teaches it your rules and every operator’s brand rules, and picks up the phone." },
    ],
  },

  facts: {
    label: "Why now",
    title: "The rules are exact. Your pages have to be too.",
    items: [
      { n: "10%", l: "The smallest share of an advert the ‘play responsibly’ message can take, in the MGA’s guidelines.", src: { label: "MGA Commercial Communications Committee Guidelines, 3.1", href: "https://www.mga.org.mt/app/uploads/Commercial-Communications-Committee-Guidelines-1.pdf" } },
      { n: "1 click", l: "When a digital advert has no room for an offer’s key terms, they should be one click away at most.", src: { label: "Gaming Commercial Communications Regulations, reg. 30", href: "https://legislation.mt/eli/sl/583.9/eng" } },
      { n: "3 days", l: "Working days an operator gets to answer in writing once the MGA flags an advert.", src: { label: "Gaming Commercial Communications Regulations, reg. 32", href: "https://legislation.mt/eli/sl/583.9/eng" } },
    ],
  },

  faq: [
    { q: "What is it, exactly?", a: "One AI system built around your affiliate business. It checks every page, post and ad against the rules before it goes live, keeps every offer up to date, drafts reviews and guides, reconciles commission and chases payouts. OARC’s team in Malta sets it up and runs it with you." },
    { q: "Does it give legal or compliance advice?", a: "No. It checks your pages against the rules your compliance lead sets and each operator’s terms, and shows the rule behind every flag. Your compliance lead decides. Nothing goes live without a person’s yes." },
    { q: "Will it replace our writers or editors?", a: "No. It takes the checking, updating, reconciling and chasing. Your writers write, your editors decide and your partner managers close the deals." },
    { q: "Is our deal and reader data kept private?", a: "Yes. Your business gets its own private system. Your deals, rates, statements and reader data are only used for your business and handled under GDPR." },
    { q: "Does it work with our CMS and tracking software?", a: "Yes. We connect it to the CMS, tracking, reporting and accounts software you already use. If no connection exists, we build one." },
    { q: "Can it write our reviews?", a: "It drafts them from your own review checklist and each operator’s real terms, with every claim linked to its source. An editor reads and approves every page before it goes live." },
    { q: "Can it get our pages found on Google and in AI answers?", a: "It does the SEO work for Google, plus the work that helps ChatGPT and Gemini quote your guides, and it tracks every page that earns. Nobody can promise a ranking, so we don’t. You see what moved and why." },
    { q: "Can it do just one thing?", a: "Yes. You can start with one job, such as checking every page before it goes live, and add the next when the first has paid for itself." },
    { q: "How fast is it live?", a: "We set up your first system in 72 hours, usually the page checks and the offer watch. The rest is connected over the following weeks." },
    { q: "Do the AI agents call operators?", a: "Yes. The payout agent calls affiliate and finance contacts about missing statements and late payments. The partner agent calls to confirm offer changes and book deal calls. They never cold-call readers, and a person on your team can take over any call." },
    { q: "What if it gets something wrong?", a: "Nothing goes live until your editor or compliance lead has read and approved it. Every flag shows the rule behind it, and every change is logged. If something needs changing, OARC’s team in Malta changes it." },
    { q: "How much does it cost?", a: "Right now the first month is free. After that it depends on your business’s size and what you switch on. Ask us and we price it for your business." },
    { q: "Do Malta’s gaming advert rules cover affiliates?", a: "They apply to licensed operators and to anyone who provides a service to them or works with them. Social media posts made for an operator are covered in full. The operator answers for a breach even when a third party made it. And when an affiliate mails its own list for an operator, the MGA’s guidelines say both may be held in breach." },
    { q: "What must a gambling advert in Malta show?", a: "The operator’s name, who licensed it and the licence number. The minimum age to play, shown for the whole advert. A responsible gaming message and the web address of a responsible gaming body. On a small phone screen, that web address can sit behind a link, at most two clicks away." },
    { q: "Can a gambling advert in Malta promise winnings?", a: "No. Malta’s rules say an advert must not give false information about the chances of winning or the expected return. It must not suggest gaming can solve money worries, be an alternative to a job or work as an investment." },
  ],

  cta: {
    titleBefore: "Every page checked. Every euro chased.",
    titleEm: "Starting this week.",
    body: "Claim your free first month. We set it up for you in 72 hours.",
    button: "Claim your free month",
    secondary: "Book a 20-minute call",
  },

  sources: [
    { label: "Gaming Commercial Communications Regulations (S.L. 583.09)", href: "https://legislation.mt/eli/sl/583.9/eng" },
    { label: "MGA Commercial Communications Committee Guidelines", href: "https://www.mga.org.mt/app/uploads/Commercial-Communications-Committee-Guidelines-1.pdf" },
    { label: "MGA: what is required when advertising", href: "https://www.mga.org.mt/faqs/what-is-required-when-advertising/" },
  ],
  related: [
    { label: "iGaming marketing in Malta", href: "/industries/igaming" },
    { label: "AI compliance auditor", href: "/services/ai-compliance-auditor" },
    { label: "AI data analyst", href: "/services/ai-data-analyst" },
    { label: "AI for iGaming operators", href: "/ai/igaming-operators" },
  ],
  disclaimer: "OARC Digital · Malta. OARC Digital is not a gaming regulator, auditor or law firm and does not give legal or compliance advice. Names and figures on the screens are from a demo account.",
};
