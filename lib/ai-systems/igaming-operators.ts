import type { AiSystemContent } from "./types";

export const igamingOperators: AiSystemContent = {
  slug: "igaming-operators",
  name: "iGaming operators",
  barLabel: "iGaming AI",
  business: "casino or sportsbook",
  metaTitle: "AI System for iGaming Operators in Malta | OARC Digital",
  metaDescription:
    "The AI system built around your casino or sportsbook in Malta. It answers players 24/7, prepares KYC and AML checks and sends risk signs to a person at once.",
  updated: "2026-11-16",
  serviceType: "AI system and automation for online casino and sportsbook operators",
  schemaDescription:
    "An AI system built around each online casino and sportsbook operator in Malta. It answers players 24/7, collects and reads verification documents, prepares source-of-funds files, sends safer-gambling risk signs to a person at once, handles complaints and match-day questions, and builds audit and report packs. The MLRO and compliance officer make every KYC, AML and safer-gambling decision. Set up and run by OARC Digital's team in Malta.",
  hub: {
    title: "iGaming operators",
    body: "Every player answered and every check prepared. Risk signs go to a person at once. Your compliance team decides.",
    gain: "Online casinos and sportsbooks",
  },

  lightAreas: true,

  hero: {
    pill: "We set it up for you in 72 hours",
    kicker: "Finally, you have",
    h1Before: "One complete AI system built around",
    h1Highlight: "your casino or sportsbook.",
    sub: "AI agents trained on your brand answer every player and collect every document. Risk signs go to a person at once, and nothing in the system pushes anyone to play more. Your compliance team makes every decision.",
    primaryCta: "Claim your free month",
    secondaryCta: "Book a 20-minute call",
    note: "First month free. Set up and run by OARC’s team in Malta.",
  },

  film: {
    title: "Watch one withdrawal, from first message to your compliance team’s yes",
    scenes: [
      {
        clock: "Saturday · 23:10",
        caption: "A player asks where his money is, on the busiest night of the week.",
        result: "Answered the same minute",
        visual: {
          type: "chat",
          initials: "LF",
          name: "Luca F.",
          origin: "Live chat · withdrawal question",
          status: "Answered",
          messages: [
            { from: "in", text: "Hi, my €1,240 withdrawal is still pending. Is something wrong?", time: "23:10" },
            { from: "out", text: "Hi Luca. It is waiting on one document: a payslip or bank statement from the last 3 months. Upload it here?", time: "23:10" },
            { from: "in", text: "Ok, sending my payslip now.", time: "23:12" },
          ],
          done: { before: "Withdrawal checked · ", strong: "1 document missing", after: " · upload link sent" },
        },
      },
      {
        clock: "Saturday · 23:14",
        caption: "He uploads his payslip from his phone, and it is read, matched to his account and filed.",
        result: "Ready for your compliance team",
        visual: {
          type: "rows",
          title: "L. Ferri · withdrawal €1,240",
          hint: "Uploaded Saturday, 23:14",
          action: "tag",
          rows: [
            { badge: "PDF", title: "Payslip · October", detail: "Salary and employer read. Name matches the account.", tag: "Filed" },
            { badge: "€", title: "Deposits, last 90 days", detail: "€3,900 in total, set beside the payslip for your checker.", tag: "Prepared" },
            { badge: "AML", top: true, title: "Source-of-funds file", detail: "Complete. Nothing is paid before your compliance team says yes.", tag: "For review" },
          ],
        },
      },
      {
        clock: "Monday · 09:12",
        caption: "Your compliance officer checks the file and says yes before a cent is paid.",
        result: "Paid after a person’s yes",
        visual: {
          type: "timeline",
          title: "Withdrawal · L. Ferri · €1,240",
          subtitle: "Requested Saturday · working day 1 of 5",
          steps: [
            { when: "09:12", title: "Daniela approves the file", detail: "She checks the payslip and the deposits. One note added.", key: true, tag: "Approved by compliance" },
            { when: "09:13", title: "Withdrawal released", detail: "Luca is told the same minute, in Italian." },
            { when: "09:13", title: "Saved to his record", detail: "Every message, document and decision, with who and when." },
          ],
        },
      },
    ],
  },

  dashboard: {
    title: "Support, checks and safer gambling. One screen.",
    body: "Every morning: what was answered overnight, which checks are waiting, and which flags need a person.",
    org: "Your Brand",
    search: "Ask anything… “Which withdrawals are waiting on a check?”",
    initials: "DA",
    nav: [
      { label: "Today" }, { label: "Player chats" }, { label: "Verification", badge: "14" }, { label: "Safer gambling" },
      { label: "Withdrawals" }, { label: "Complaints" }, { label: "Sportsbook" }, { label: "Reports" },
    ],
    greeting: "Good morning, Daniela",
    status: "Running · every chat answered overnight",
    kpis: [
      { label: "Player chats answered overnight", value: "1,284", note: "41 handed to a person" },
      { label: "Checks waiting for you", value: "14", note: "9 files ready to review" },
      { label: "Safer-play flags", value: "3", note: "Each one with a person" },
      { label: "Withdrawals due tomorrow", value: "5", note: "2 still waiting on a check", alert: true },
    ],
    todoTitle: "Needs you today",
    todos: [
      { initials: "JV", title: "Safer-play flag · J. Vella", detail: "Asked to raise his limit at 02:40. Offers paused.", tag: "Decide", on: true },
      { initials: "LF", title: "Source of funds · L. Ferri · €1,240", detail: "Payslip read and set beside his deposits.", tag: "Review" },
      { initials: "MA", title: "Complaint · M. Azzopardi", detail: "Bonus terms. Reply drafted, clause 7.3 attached.", tag: "Sign" },
      { initials: "SA", title: "System audit · day 41 of 60", detail: "Evidence pack nearly ready. 2 change records missing.", tag: "Check" },
    ],
    chartTitle: "Player chats this week",
    bars: [
      { label: "Mon", h: 48 }, { label: "Tue", h: 44 }, { label: "Wed", h: 52 }, { label: "Thu", h: 58 },
      { label: "Fri", h: 71 }, { label: "Sat", h: 100 }, { label: "Sun", h: 86 },
    ],
    chartFoot: { label: "Handed to a person", value: "214" },
    chatFloat: {
      channel: "Live chat · sportsbook",
      time: "21:47",
      incoming: "Why was my bet voided? The match was played!",
      reply: "It kicked off 3 hours late. Rule 4.2 voids bets after 2 hours, so your €20 stake is back.",
      receipt: "Answered from your rulebook",
    },
    alertFloat: {
      label: "Safer Play · just now",
      title: "Risk signs on one account",
      detail: "J. Vella · 9 deposits in 3 days. Sent to Rachel. Offers paused.",
      tag: "With a person",
    },
  },

  worksWith: ["Your gaming platform", "Your helpdesk and live chat", "Your KYC tools", "Your payment providers", "Your CRM", "Outlook & Gmail", "Excel & Google Sheets", "Phone calls"],

  pillars: {
    label: "Built around your casino or sportsbook",
    title: "Your players. Your rules. Your way of working.",
    items: [
      { icon: "shield", title: "Safer gambling comes first", body: "It never pushes play. Risk signs go to a person at once, and no offer reaches a self-excluded or flagged player." },
      { icon: "workflow", title: "Works inside your tools", body: "Your platform, your helpdesk, your KYC and payment tools. Your team keeps them. The system works behind them." },
      { icon: "scale", title: "Your compliance team decides", body: "It prepares every check, file and report. Your MLRO and compliance officer make every decision on a player." },
    ],
  },

  agents: {
    label: "Your AI player team",
    title: "Three AI agents. Trained on your rules. Never a nudge to play.",
    intro: "They chat and they call. Each one knows your T&Cs, your bonus rules, your payment methods and how your brand talks. Decisions about players stay with your people.",
    note: "They answer, collect, remind and flag. They never decide a check, never offer a bonus and never contact a player in a way they did not agree to. A person can take over any chat or call.",
    items: [
      {
        name: "Player care agent",
        title: "Answers every player.",
        points: [
          "Replies in live chat, email and on the phone, 24/7, in the player’s language.",
          "Answers from your T&Cs, bonus rules, help pages and past tickets, and quotes the rule.",
          "Hands anything sensitive to a person with the full story. It never pushes anyone to play.",
        ],
        channels: ["Live chat", "Voice calls", "Email", "Your help centre"],
        result: "No player left waiting",
      },
      {
        name: "Verification agent",
        title: "Gets every player verified.",
        points: [
          "Asks for the right documents at the right time: ID, proof of address, payslips.",
          "Reads every upload and asks again the same minute if a photo is blurred or out of date.",
          "Builds each KYC and source-of-funds file for your checker. Your compliance team decides.",
        ],
        channels: ["Upload link", "Live chat", "Email", "Voice calls"],
        result: "Fewer accounts stuck in checks",
      },
      {
        name: "Safer gambling agent",
        title: "Spots the signs early.",
        points: [
          "Watches every account for the risk signs the MGA lists, plus the ones your team adds.",
          "Sends each flag to your safer-gambling team at once, and calls the person on duty when it can’t wait.",
          "Stops every offer to that player and drafts a check-in for a person to approve.",
        ],
        channels: ["Your player data", "Voice calls", "Your team’s inbox", "Live chat"],
        result: "Help reaches players sooner",
      },
    ],
  },

  jobs: {
    label: "Everything it does",
    title: "One system. Twenty jobs, from sign-up to payout.",
    items: [
      { icon: "shield", title: "Spots risk signs and tells a person at once", body: "Deposits, extra payment methods, reversed withdrawals, complaints and limit changes. Each flag reaches your safer-gambling team with the reasons.", gain: "Help reaches players sooner" },
      { icon: "chat", title: "Answers every player, 24/7", body: "Live chat, email and the phone, in the player’s language, from your own help pages, T&Cs and past tickets.", gain: "No queue on a Saturday night" },
      { icon: "badge", title: "Gets every player verified", body: "Asks for ID, proof of address and source-of-funds papers, reads each one and asks again if a photo fails.", gain: "Fewer accounts stuck in checks" },
      { icon: "euro", title: "Explains every withdrawal", body: "Tells players where their money is and what is still needed, in plain words. Warns you before a payout runs late.", gain: "Fewer “where is my money?” tickets" },
      { icon: "folder", title: "Builds the source-of-funds file", body: "Requests the papers, sets them beside the deposits and prepares the file. Your MLRO decides.", gain: "AML files complete, first time" },
      { icon: "lock", title: "Respects every exclusion and limit", body: "Confirms a self-exclusion or a stricter limit straight away, explains any waiting time and never tries to change a player’s mind.", gain: "No pressure, no missed step" },
      { icon: "filter", title: "Checks every offer list before it goes", body: "Takes out self-excluded players, open safer-gambling flags and anyone who did not agree to that channel.", gain: "No offer reaches the wrong player" },
      { icon: "inbox", title: "Handles every complaint", body: "Logs it, finds the rule, drafts the first reply and keeps the record. Unhappy players get your ADR details.", gain: "A fair answer, fast" },
      { icon: "clock", title: "Takes the match-day rush", body: "Bet status, cash-out, voids and settlement, answered from your own rulebook while the match is on.", gain: "A calm queue at kick-off" },
      { icon: "search", title: "Flags unusual betting", body: "Spots odd patterns on a match and prepares the evidence for your integrity officer, who decides what to report.", gain: "Every concern on record" },
      { icon: "card", title: "Catches duplicate accounts and bonus abuse", body: "Spots the same device, card or address across accounts, including self-excluded players trying again, and prepares the case for a person.", gain: "Protects players and your margin" },
      { icon: "eye", title: "Shows players their own history", body: "When a player asks what they have spent, it shows their deposits, wins and losses, with their limits and tools in the same reply.", gain: "Players see the full picture" },
      { icon: "file", title: "Keeps the record of every player contact", body: "What was said, by whom and when, across chat, email and calls. Kept at least two years after the last contact, as the MGA requires.", gain: "Any question answered in seconds" },
      { icon: "chart", title: "Builds your audit and report packs", body: "Policies, logs, samples and training records, gathered from your files and ready for your compliance officer.", gain: "No scramble before the auditor" },
      { icon: "calendar", title: "Watches every deadline", body: "System audits, audited accounts, T&C notices, licence renewals and payouts. Reminders start weeks ahead.", gain: "No late filings" },
      { icon: "book", title: "Reads every MGA and FIAU update", body: "Shows what changed, which of your policies it touches and who needs to read it.", gain: "First to know" },
      { icon: "phone", title: "Calls players about their checks", body: "A voice agent calls about missing documents and expiring IDs, only if the player agreed to calls.", gain: "Fewer players stuck halfway" },
      { icon: "refresh", title: "Keeps your help centre current", body: "Turns solved tickets into help articles and answers for your team to approve.", gain: "Fewer repeat questions" },
      { icon: "trending", title: "Gets you found on Google and in AI answers", body: "SEO for Google, plus the work that helps ChatGPT and Gemini recommend your brand. Your compliance team checks every page.", gain: "Found by players looking for you" },
      { icon: "sun", title: "Briefs every team lead each morning", body: "Open tickets, stuck checks, flags waiting for a person and this week’s deadlines.", gain: "Start the day knowing" },
    ],
  },

  spotlights: [
    {
      label: "Safer gambling",
      title: "Every flag goes to a person. At once.",
      points: [
        "It watches for the signs the MGA lists: how much and how often a player deposits, extra payment methods, reversed withdrawals, more complaints and bonus requests, and how they use their limits.",
        "Each flag goes to your safer-gambling team at once, with the reasons, and offers to that player stop.",
        "It drafts the check-in. A person reads it, decides and speaks to the player.",
      ],
      visual: {
        type: "timeline",
        title: "Safer-play flag · J. Vella",
        subtitle: "Signs seen Sunday, 02:40",
        steps: [
          { when: "02:40", title: "He asks to raise his deposit limit", detail: "Logged. He is told a higher limit can only start after 24 hours." },
          { when: "02:41", title: "Flag sent to the safer-gambling team", detail: "With every sign: 9 deposits in 3 days and a reversed withdrawal.", key: true, tag: "A person decides" },
          { when: "02:41", title: "Offers paused", detail: "No bonus or marketing message reaches him while the flag is open." },
          { when: "10:05", title: "Rachel calls him", detail: "He agreed to calls when he signed up. He chooses a lower limit." },
          { when: "10:20", title: "Saved to his record", detail: "The signs, the call and the decision, with who and when." },
        ],
      },
    },
    {
      label: "Sportsbook",
      title: "Match day. Every bet question answered from your rulebook.",
      points: [
        "Is my bet settled? Why did cash-out stop? Why was it voided? It answers while the match is on.",
        "It reads the bet and quotes your exact rule, in the player’s language.",
        "Unusual betting goes to your integrity officer with the evidence. Trading, settlement and reporting stay with your team.",
      ],
      visual: {
        type: "rows",
        title: "Match day · Saturday",
        hint: "18:00 to 23:00",
        action: "tag",
        rows: [
          { badge: "412", title: "“Is my bet settled?”", detail: "Answered from the live bet record.", tag: "Answered" },
          { badge: "268", title: "“Why did cash-out stop?”", detail: "Your cash-out rule quoted, in plain words.", tag: "Answered" },
          { badge: "191", title: "“Why was my bet voided?”", detail: "The void rule and the reason, from your rulebook.", tag: "Answered" },
          { badge: "23", top: true, title: "Unusual bets on one match", detail: "New accounts, same market, just before kick-off. Evidence ready.", tag: "Integrity officer" },
        ],
      },
    },
    {
      label: "Complaints",
      title: "Every complaint logged. The right rule quoted.",
      points: [
        "It logs every complaint, finds the rule in your T&Cs and drafts the first reply for your team.",
        "It keeps a record of every complaint not settled at the first stage, as the MGA requires.",
        "If the player is still unhappy, it gives them your ADR details. Your team decides every complaint.",
      ],
      visual: {
        type: "chat",
        initials: "MA",
        name: "Michela A.",
        origin: "Live chat · complaint",
        status: "Logged",
        messages: [
          { from: "in", text: "You cancelled my €300 win. The bonus terms never said that slot didn’t count!", time: "23:52" },
          { from: "out", text: "I’m sorry, Michela. I’ve logged your complaint. Clause 7.3 lists the games that don’t count. Can we call you?", time: "23:52" },
          { from: "in", text: "Yes. Tomorrow morning please.", time: "23:55" },
          { from: "out", text: "Done. Graziella from our complaints team will call you. Which time suits you?", time: "23:55" },
        ],
        slots: ["Tue 10:00", "Tue 11:30"],
        done: { before: "Call booked with Graziella · ", strong: "Tue 10:00", after: " · complaint logged, clause attached" },
      },
    },
    {
      label: "Audits and reports",
      title: "Your audit evidence, ready before anyone asks.",
      points: [
        "It gathers policies, logs, training records and case samples from your own files.",
        "A check with no evidence fails until the proof arrives, so it lists every gap weeks before the deadline, with an owner.",
        "Your compliance officer checks the pack. It goes to your auditor only after their yes.",
      ],
      visual: {
        type: "rows",
        title: "System audit · evidence pack",
        hint: "Day 41 of 60",
        action: "tag",
        rows: [
          { badge: "34", title: "Policies and procedures", detail: "Current versions, each with its date and owner.", tag: "Ready" },
          { badge: "12", title: "Safer-gambling cases", detail: "Flags, calls and decisions, picked from the record.", tag: "Ready" },
          { badge: "48", title: "Staff training record", detail: "Who was trained, on what and how often.", tag: "Ready" },
          { badge: "2", top: true, title: "Platform change records", detail: "Two changes have no sign-off. IT asked on Monday.", tag: "Missing" },
        ],
      },
    },
    {
      label: "Ask anything",
      title: "Ask it like you’d ask your best shift lead.",
      points: [
        "Type a question in plain words. The answer comes from your own players, tickets and compliance records, with a link to each one.",
        "No reports to build. No “who has that file?”",
      ],
      visual: {
        type: "ask",
        questions: [
          { q: "Which withdrawals are waiting on a check?", summary: "14 withdrawals are waiting. 9 files are ready for your compliance team.", rows: [["L. Ferri · €1,240", "Payslip in · ready to review"], ["A. Nowak · €860", "Proof of address asked again"], ["S. Grech · €2,300", "Source of funds · ready to review"], ["K. Schmidt · €410", "ID expired · new one asked"], ["+ 10 more", "See all"]] },
          { q: "How many safer-play flags this week?", summary: "17 flags this week. Every one went to a person at once.", rows: [["Deposits up sharply", "7 · all reviewed"], ["Withdrawal reversed", "4 · all reviewed"], ["Limit raise asked", "4 · 1 waiting for Rachel"], ["More complaints and bonus requests", "2 · reviewed"]] },
          { q: "Which complaints are still open?", summary: "6 complaints are open. 2 passed the first stage and are on your record.", rows: [["M. Azzopardi · bonus terms", "Call booked Tue 10:00"], ["T. Mensah · voided bet", "Trader checking"], ["P. Rossi · late withdrawal", "Reply drafted"], ["E. Lindqvist · account closed", "ADR details sent"], ["+ 2 more", "See all"]] },
          { q: "When did we last change our T&Cs?", summary: "On 3 March, version 14. Players were told that day and the MGA 9 days later.", rows: [["What changed", "Bonus terms, clause 7.3"], ["Players told", "3 March · by email and on login"], ["MGA told", "12 March · inside the 30 days"], ["Version 13", "Saved · open document"]] },
        ],
      },
    },
  ],

  areas: {
    label: "Every team you run",
    title: "Support, compliance, sportsbook. The routine work, done.",
    intro: "Most of an operator’s day is questions, documents and dates. The system takes those. Your people make every decision on a player.",
    colA: "Your work",
    colB: "The system does",
    colC: "Your team does",
    items: [
      { name: "Player support", system: "Answers chat, email and calls in the player’s language from your T&Cs and past tickets, and hands hard cases to a person with the full story.", you: "Handle the hard cases." },
      { name: "Verification and KYC", system: "Asks for ID and proof of address, reads every upload, asks again when one fails and prepares the file for your checker.", you: "Approve the file." },
      { name: "AML and source of funds", system: "Requests the papers, sets them beside the deposits and builds the file, with every step logged.", you: "Decide, with your MLRO." },
      { name: "Safer gambling", system: "Watches for the risk signs you set, sends every flag to a person at once, pauses offers and drafts the check-in.", you: "Talk to the player and decide." },
      { name: "Withdrawals", system: "Tells players where their money is, collects what is missing and warns you before a payout runs late.", you: "Release the payout." },
      { name: "Complaints", system: "Logs every complaint, finds the rule, drafts the first reply and keeps the record, with your ADR details ready.", you: "Make it right." },
      { name: "Sportsbook", system: "Answers bet, cash-out and void questions on match day and sends unusual betting to your integrity officer with the evidence.", you: "Trade, settle and decide what to report." },
      { name: "Audits and MGA reports", system: "Gathers policies, logs, samples and training records, builds the pack and watches every due date.", you: "Check it and sign." },
    ],
  },

  wins: {
    label: "Your players feel it first",
    // Not "Their win is your win." On a casino page that reads as a joke about player winnings.
    title: "Fair to them. Good for you.",
    items: [
      { title: "An answer at 23:10.", body: "A player asks where their money is late on a Saturday. They get a clear answer and know exactly what to send. No angry email, no complaint." },
      { title: "Help before it gets worse.", body: "When the signs point to trouble, a person reaches out early and kindly. The player gets help, not another offer." },
      { title: "Paid without the runaround.", body: "Players send each document once, from their phone. They see every step until the money lands." },
    ],
  },

  live: {
    label: "How it starts",
    h2Before: "We set it up for you in",
    h2Em: "72 hours.",
    body: "We come in, connect your tools and set the whole thing up. Nothing new for your support or compliance team to learn.",
    steps: [
      { when: "Today", title: "A 20-minute call", body: "About your brands, your markets and where your team’s hours go." },
      { when: "72 hours", title: "Your first system is live", body: "Usually: every player question answered from your own T&Cs and help pages." },
      { when: "Week 2", title: "Your checks and flags connected", body: "Verification, withdrawals, safer-gambling flags and complaints in one place." },
      { when: "Every week", title: "It grows with you", body: "It learns your rules, and the next job goes live." },
    ],
  },

  ways: {
    label: "Start where you want",
    title: "One job or your whole operation. You choose.",
    items: [
      { title: "Fix one job", body: "Pick the one thing that eats the most hours and we automate just that.", example: "Example: answer every withdrawal question, day and night." },
      { title: "Plug into what you use", body: "Keep your platform, your helpdesk and your KYC tools. We connect to them.", example: "Example: safer-gambling flags land in your team’s inbox with the reasons." },
      { title: "The full system", body: "Everything on this page, built around your brand, customised and looked after by us.", example: "Example: support, checks, safer gambling, complaints and reports in one place." },
      { title: "Not sure yet?", body: "Most operators aren’t. We look at your week and show you where the hours go.", example: "Free. Takes 20 minutes." },
    ],
  },

  offer: {
    label: "Limited-time offer",
    title: "Your first month is free.",
    body: "We set it up in 72 hours and run it with you for a month. You see the questions answered, the checks prepared and the hours it gives back on your own brand first.",
    cta: "Claim your free month",
    secondaryCta: "Book a 20-minute call",
    listLabel: "What you get",
    items: [
      { strong: "First month free.", rest: "See it work on your own players and tickets before you decide." },
      { strong: "Set up for you in 72 hours.", rest: "We connect your helpdesk, your help pages and your T&Cs. You change nothing." },
      { strong: "It is your system.", rest: "Built around your brand, your rules and your compliance team’s way of working." },
      { strong: "Run by us.", rest: "We customise it, look after it and improve it every week." },
      { strong: "Start small.", rest: "One job first. Add the next only when the first has paid for itself." },
    ],
  },

  calc: {
    label: "Your numbers",
    title: "What routine questions cost you.",
    mode: "percent",
    inputs: [
      { label: "Player chats, emails and calls a month", value: 9000 },
      { label: "Share that are routine questions (%)", value: 60, max: 100 },
      { label: "Cost to answer one (€)", value: 3 },
    ],
    out1: "Routine questions every month",
    out2: "What answering them costs every month",
    footnote: "Routine means a question answered from your own rules, like a withdrawal status or a bonus term. These are starting numbers, not industry figures, so change the numbers to match your casino or sportsbook.",
  },

  trust: {
    label: "You stay in charge",
    title: "It prepares. Your compliance team decides.",
    items: [
      { icon: "scale", title: "A person makes every decision", body: "KYC, AML and safer-gambling decisions stay with your MLRO and compliance officer. The system never gives legal or compliance advice." },
      { icon: "shield", title: "It never pushes play", body: "No bonus offers from the agents. No offer to a self-excluded or flagged player. No contact a player did not agree to." },
      { icon: "lock", title: "Private, and on the record", body: "Your brand gets its own private system, handled under GDPR. Every message, check and decision is logged with who and when." },
      { icon: "users", title: "A team in Malta", body: "OARC’s team in Birkirkara sets it up, teaches it your rules and picks up the phone." },
    ],
  },

  facts: {
    label: "Why now",
    title: "The MGA’s rules run on clocks. So does player trust.",
    items: [
      { n: "5 days", l: "Working days to send a player their money after they ask, if practicable.", src: { label: "MGA Player Protection Directive, art. 29", href: "https://www.mga.org.mt/app/uploads/Directive-2-of-2018-Player-Protection-Directive.pdf" } },
      { n: "24 hours", l: "Before a looser limit can start. A stricter one starts at once.", src: { label: "MGA Player Protection Directive, art. 14", href: "https://www.mga.org.mt/app/uploads/Directive-2-of-2018-Player-Protection-Directive.pdf" } },
      { n: "60 days", l: "For your external auditor to file your system audit report, from the letter of engagement.", src: { label: "MGA notice on system audits, May 2025", href: "https://www.mga.org.mt/app/uploads/MGA-communicates-changes-to-the-System-Audit-System-Review-and-Compliance-Audit-procedures-1.pdf" } },
    ],
  },

  faq: [
    { q: "What is it, exactly?", a: "One AI system built around your casino or sportsbook. It answers players, gets them verified, prepares source-of-funds files, sends risk signs to a person, handles complaints and match-day questions, and builds your audit packs. OARC’s team in Malta sets it up and runs it with you." },
    { q: "Does it give legal or compliance advice?", a: "No. It prepares the checks, files and reports. Your MLRO and compliance officer make every KYC, AML and safer-gambling decision." },
    { q: "Will it replace our support or compliance team?", a: "No. It takes the routine questions, the document chasing and the evidence gathering, so your people spend their time on the players who need a person and on the decisions." },
    { q: "Does it push players to gamble more?", a: "No. It never offers bonuses, never sends an offer to a self-excluded or flagged player and only contacts players in the ways they agreed to. Risk signs go to your safer-gambling team at once." },
    { q: "Is player data kept private?", a: "Yes. Your brand gets its own private system. Player data is only used for your business and is handled under GDPR." },
    { q: "Does it work with our gaming platform?", a: "Yes. We connect it to the gaming platform, helpdesk, KYC and payment tools you already use. If no connection exists, we build one." },
    { q: "Does it work for a sportsbook?", a: "Yes. On match days it answers bet status, cash-out, void and settlement questions from your own rulebook. It drafts each integrity escalation with the evidence, and your integrity officer decides what to report. In October 2026 the MGA published a review of how operators spot and escalate betting integrity concerns. It pointed to clearly documented escalation and human oversight of monitoring." },
    { q: "Can it do just one thing?", a: "Yes. You can start with one job, such as answering every withdrawal question, and add the next when the first has paid for itself." },
    { q: "How fast is it live?", a: "We set up your first system in 72 hours, usually answering player questions from your own T&Cs and help pages. The rest is connected over the following weeks." },
    { q: "Do the AI agents call players?", a: "Yes, but only players who agreed to calls. A voice agent calls about missing documents and expiring IDs, never with an offer. Safer-gambling calls are made by your team, and a person can take over any call." },
    { q: "Will the MGA accept it?", a: "We can’t speak for the MGA. What we can say: every decision on a player stays with a person, every action is logged, and your evidence comes from your own records. Your MLRO and compliance officer keep their roles and their responsibility." },
    { q: "What if it gets something wrong?", a: "It answers from your own rules and quotes them, and anything sensitive goes to a person. Every decision on a player is made by your team. Every message and action is logged, so you can see what it did and why. If something needs changing, OARC’s team in Malta changes it." },
    { q: "How much does it cost?", a: "Right now the first month is free. After that it depends on your operation’s size and what you switch on. Ask us and we price it for your operation." },
    { q: "How fast must an operator in Malta pay out a withdrawal?", a: "Within five working days of the player’s request, if practicable. That is the rule in the MGA’s Player Protection Directive. Where possible, the money goes back to the account it came from." },
    { q: "When does a higher deposit limit start in Malta?", a: "Only after 24 hours. Under the MGA’s Player Protection Directive, a request to loosen or remove a limit takes effect 24 hours after the operator receives it. A request for a stricter limit takes effect at once." },
  ],

  cta: {
    titleBefore: "Clear the Saturday-night queue.",
    titleEm: "Starting this week.",
    body: "Claim your free first month. We set it up for you in 72 hours.",
    button: "Claim your free month",
    secondary: "Book a 20-minute call",
  },

  sources: [
    { label: "MGA Player Protection Directive (Directive 2 of 2018)", href: "https://www.mga.org.mt/app/uploads/Directive-2-of-2018-Player-Protection-Directive.pdf" },
    { label: "MGA: changes to system audit procedures, May 2025", href: "https://www.mga.org.mt/app/uploads/MGA-communicates-changes-to-the-System-Audit-System-Review-and-Compliance-Audit-procedures-1.pdf" },
    { label: "MGA: review of sports betting integrity reporting, October 2026", href: "https://www.mga.org.mt/mga-publishes-findings-from-thematic-review-on-sports-betting-integrity-reporting-and-escalation/" },
  ],
  related: [
    { label: "iGaming marketing in Malta", href: "/industries/igaming" },
    { label: "AI compliance auditor", href: "/services/ai-compliance-auditor" },
    { label: "AI support specialist", href: "/services/ai-support-specialist" },
    { label: "AI for iGaming suppliers", href: "/ai/igaming-suppliers" },
  ],
  disclaimer: "OARC Digital · Malta. OARC Digital is not a gaming regulator, auditor or law firm and does not give legal or compliance advice. Names and figures on the screens are from a demo account.",
};
