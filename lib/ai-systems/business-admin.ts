import type { AiSystemContent } from "./types";

export const businessAdmin: AiSystemContent = {
  slug: "business-admin",
  name: "Business admin",
  barLabel: "Admin AI",
  business: "business",
  metaTitle: "AI for Business Admin in Malta | Automation | OARC Digital",
  metaDescription:
    "The AI system built around your business in Malta. It chases unpaid invoices, reads every bill, sorts your email and watches every deadline. You approve.",
  updated: "2026-11-16",
  serviceType: "AI system and admin automation for businesses",
  schemaDescription:
    "An AI system built around the admin work of any business in Malta. It answers and sorts email, chases unpaid invoices, reads bills and receipts, matches the bank, prepares the month-end pack, VAT figures and payroll inputs for the accountant, onboards new staff and tracks tax, payroll, permit and company deadlines. The owner, a manager or the company's accountant approves every payment and filing. Set up and run by OARC Digital's team in Malta.",
  hub: {
    title: "Admin for any business",
    body: "Every unpaid invoice chased. Every receipt filed. Every deadline watched. You and your accountant approve.",
    gain: "Invoices, bills, staff, files and deadlines",
  },

  lightAreas: true,

  hero: {
    pill: "We set it up for you in 72 hours",
    kicker: "Finally, you have",
    h1Before: "One complete AI system built around",
    h1Highlight: "your business.",
    sub: "AI agents trained on your business answer the emails, chase the unpaid invoices and collect every receipt and form. The system watches every deadline and gets month-end ready for your accountant. Nothing is paid or filed until you say yes.",
    primaryCta: "Claim your free month",
    secondaryCta: "Book a 20-minute call",
    note: "First month free. Set up and run by OARC’s team in Malta.",
  },

  film: {
    title: "Watch one late invoice, from overdue to paid",
    scenes: [
      {
        clock: "Monday · 08:00",
        caption: "Three invoices are overdue, and nobody in the office has had time to chase.",
        result: "Two handled before you arrive",
        visual: {
          type: "rows",
          title: "Overdue this morning",
          hint: "Days late · biggest first",
          action: "tag",
          rows: [
            { badge: "18", top: true, title: "Grech Interiors Ltd · €3,240", detail: "Invoice 2291. Usually pays within 30 days.", tag: "Chase today" },
            { badge: "6", title: "Farrugia Catering · €860", detail: "Friendly reminder sent at 08:00, with a pay link.", tag: "Reminded" },
            { badge: "2", title: "M. Azzopardi · €240", detail: "Said the invoice never arrived. A copy went again.", tag: "Sent again" },
          ],
        },
      },
      {
        clock: "Monday · 09:00",
        caption: "Your Payments agent writes to the customer on WhatsApp, with the invoice and a pay link.",
        result: "He replied in 4 minutes",
        visual: {
          type: "chat",
          initials: "MS",
          name: "Mark S.",
          origin: "WhatsApp · Grech Interiors Ltd",
          status: "Replied",
          messages: [
            { from: "out", text: "Good morning Mark. Invoice 2291 for €3,240 was due on 29 October. Here it is again, with a link to pay.", time: "09:00" },
            { from: "in", text: "Sorry, it slipped. Can we pay half today and half on the 30th?", time: "09:04" },
            { from: "out", text: "Thank you, Mark. I’ll check with Joanne and confirm within the hour.", time: "09:04" },
          ],
          done: { before: "Payment plan asked for · ", strong: "sent to Joanne", after: " · notes saved" },
        },
      },
      {
        clock: "Monday · 09:20",
        caption: "You approve the plan, and the first half is paid before lunch.",
        result: "Money in. Nobody chased by hand.",
        visual: {
          type: "timeline",
          title: "Invoice 2291 · Grech Interiors Ltd",
          subtitle: "€3,240 · 18 days late this morning",
          steps: [
            { when: "09:20", title: "Joanne approves the payment plan", detail: "Half today, half on 30 November.", key: true, tag: "Approved by the owner" },
            { when: "09:21", title: "Mark told, pay link sent", detail: "Confirmed on WhatsApp the same minute." },
            { when: "11:05", title: "€1,620 paid and matched", detail: "Receipt sent. The second half is in the diary." },
          ],
        },
      },
    ],
  },

  dashboard: {
    title: "Every invoice, bill and date on one screen.",
    body: "Every morning: who owes you, what you owe, what is due and what is waiting for your yes.",
    org: "Your Company",
    search: "Ask anything… “How much went on fuel this year?”",
    initials: "JA",
    nav: [
      { label: "Today" }, { label: "Inbox", badge: "9" }, { label: "Money in" }, { label: "Bills" },
      { label: "Bank" }, { label: "Staff" }, { label: "Deadlines" }, { label: "Reports" },
    ],
    greeting: "Good morning, Joanne",
    status: "Running · inbox sorted overnight",
    kpis: [
      { label: "Emails sorted since Friday", value: "214", note: "9 need you" },
      { label: "Bills read this week", value: "63", note: "1 duplicate stopped" },
      { label: "Dates in the next 30 days", value: "6", note: "Work for 4 prepared" },
      { label: "Overdue invoices", value: "€18,460", note: "All 14 customers reminded", alert: true },
    ],
    todoTitle: "Needs you today",
    todos: [
      { initials: "GI", title: "Payment plan · Grech Interiors Ltd", detail: "€3,240. Half now, half on the 30th. Asked on WhatsApp.", tag: "Approve", on: true },
      { initials: "VP", title: "Bill · Vella Packaging", detail: "€2,316.00. Matches order 124 and the agreed price.", tag: "Approve" },
      { initials: "PN", title: "New starter · Priya N. · next Monday", detail: "Documents in. Jobsplus form ready to sign.", tag: "Sign" },
      { initials: "PR", title: "Payroll inputs · November", detail: "Hours in from 23 of 24 staff. One timesheet asked for again.", tag: "Check" },
    ],
    chartTitle: "Late payments collected last week",
    bars: [
      { label: "Mon", h: 38 }, { label: "Tue", h: 64 }, { label: "Wed", h: 52 }, { label: "Thu", h: 80 }, { label: "Fri", h: 100 },
    ],
    chartFoot: { label: "Paid after a reminder", value: "€9,870" },
    chatFloat: {
      channel: "Email · customer",
      time: "16:02",
      incoming: "Hi, can you send me October’s invoice again? Our accounts need it.",
      reply: "Of course. Here is invoice 2274 for October, as a PDF.",
      receipt: "Replied in 1 min · copy sent",
    },
    alertFloat: {
      label: "Bill Check · just now",
      title: "Same bill sent twice",
      detail: "Zammit Wholesale · €1,184.20. Already paid on 3 November.",
      tag: "Not paid again",
    },
  },

  worksWith: ["Outlook & Gmail", "WhatsApp", "Excel & Google Sheets", "Your accounts software", "Your payroll software", "Bank statements", "Scanned paper", "Phone calls"],

  pillars: {
    label: "Built around your business",
    title: "Your business. Your numbers. Your way of working.",
    items: [
      { icon: "folder", title: "Every paper in one place", body: "Emails, invoices, bills, receipts, contracts and WhatsApp photos. Sorted by customer, supplier and person, and found in seconds." },
      { icon: "workflow", title: "Nothing new to learn", body: "Your team stays in Outlook, Gmail, Excel and WhatsApp. The system works behind them and hands over what is ready." },
      { icon: "check", title: "You approve what matters", body: "It reads, matches and chases. Payments and filings wait for your yes, or your accountant’s." },
    ],
  },

  agents: {
    label: "Your AI office team",
    title: "Three AI agents. Trained on your business. They do the chasing.",
    intro: "They chat on WhatsApp and email, and they call. Each one knows your customers, your suppliers, your prices and how your office talks.",
    note: "They answer, remind and chase. They never pay, file or sign anything, and never give tax advice. A person can take over any chat or call.",
    items: [
      {
        name: "Office agent",
        title: "Answers every email, call and message.",
        points: [
          "Replies to customers, suppliers and staff on email, WhatsApp and the phone, from your own files.",
          "Sends copy invoices, statements and order updates, and books meetings in the right diary.",
          "Hands what needs a person to the right one, with a reply already drafted.",
        ],
        channels: ["Email", "WhatsApp", "Voice calls", "Website"],
        result: "No message waits until Monday",
      },
      {
        name: "Payments agent",
        title: "Chases every unpaid invoice.",
        points: [
          "Sends polite reminders before and after the due date, with the invoice and a pay link.",
          "Calls customers who don’t reply, notes what they promise and reminds them on the day.",
          "Tells you who promised what. Payment plans wait for your yes.",
        ],
        channels: ["WhatsApp", "Email", "Voice calls"],
        result: "Paid sooner, no awkward calls",
      },
      {
        name: "Paperwork agent",
        title: "Collects every document and form.",
        points: [
          "Asks staff, suppliers and customers for receipts, timesheets, IDs and signatures.",
          "Reads each one, names it and files it to the right folder.",
          "Calls or messages anyone who is late, and warns you and your accountant weeks before a date.",
        ],
        channels: ["WhatsApp", "Private link", "Email", "Voice calls"],
        result: "Month-end without the hunt",
      },
    ],
  },

  jobs: {
    label: "Everything it does",
    title: "One system. Twenty admin jobs off your desk.",
    items: [
      { icon: "euro", title: "Chases every unpaid invoice", body: "Polite reminders on WhatsApp and email before and after the due date, then a call. Each one carries the invoice and a pay link.", gain: "Cash in sooner" },
      { icon: "inbox", title: "Sorts and answers your inbox", body: "Every email read and sorted. Routine ones answered from your own files. The rest go to the right person with a reply drafted.", gain: "Mornings back for real work" },
      { icon: "folder", title: "Gets month-end ready for your accountant", body: "Invoices, receipts and bank lines matched and listed. Anything missing is asked for before your accountant has to.", gain: "No more “send me that receipt”" },
      { icon: "receipt", title: "Reads every bill and receipt", body: "Bills from email, receipts as WhatsApp photos, paper from the scanner. Each one read, checked against the order and filed.", gain: "Nothing lost by month-end" },
      { icon: "file", title: "Sends invoices the same day", body: "Turns job sheets, orders and bookings into invoices and sends them while the work is fresh.", gain: "Every job billed" },
      { icon: "repeat", title: "Matches the bank every day", body: "Links each payment in and out to its invoice or bill, and lists anything that doesn’t match.", gain: "Books always up to date" },
      { icon: "card", title: "Lines up supplier payments", body: "Approved bills sorted by due date and checked for duplicates, ready for you to pay in one go.", gain: "No bill paid twice" },
      { icon: "pen", title: "Drafts quotes and letters", body: "Quotes from your price list, and letters and replies in your company’s own wording, ready for you to check.", gain: "Quotes out the same day" },
      { icon: "clock", title: "Tracks every deadline", body: "VAT, payroll forms, provisional tax, the annual return, contracts and permits. On your accountant’s dates, weeks ahead.", gain: "No surprise penalties" },
      { icon: "chart", title: "Prepares the VAT figures", body: "Pulls the numbers from your invoices and bills, marks anything unusual and hands them to your accountant to check and file.", gain: "A calm VAT week" },
      { icon: "users", title: "Gets payroll inputs right", body: "Collects hours, leave and overtime from every team, checks them and sends one clean file to payroll.", gain: "Everyone paid right, first time" },
      { icon: "userPlus", title: "Onboards every new hire", body: "Contract, ID, bank details and permit papers collected on their phone. The Jobsplus form is ready to sign inside the four working days.", gain: "Ready on day one" },
      { icon: "plane", title: "Handles work permit paperwork", body: "Checks each worker’s documents, prepares the single permit pack and starts every renewal months before it runs out.", gain: "Your people keep working" },
      { icon: "badge", title: "Keeps staff records up to date", body: "Contracts, leave, training and permit dates in one place, with a reminder before anything runs out.", gain: "Nothing lapses unnoticed" },
      { icon: "chat", title: "Answers staff questions", body: "Leave left, payslip dates, policies and forms. Answered from your own files, at 9 pm as well as 9 am.", gain: "Fewer interruptions" },
      { icon: "calendar", title: "Runs bookings and diaries", body: "Meetings, site visits and appointments booked, moved and reminded. No double bookings.", gain: "Fewer no-shows" },
      { icon: "search", title: "Files and finds every document", body: "Every contract, invoice, letter and scan named and filed to the right customer, supplier or person. Ask for it in plain words.", gain: "Found in seconds" },
      { icon: "eye", title: "Watches for rule changes", body: "Reads the new notices from the tax office, Jobsplus, Identità and the Business Registry, and tells you and your accountant what changes for you.", gain: "Hear it first, not last" },
      { icon: "trending", title: "Gets you found on Google and in AI answers", body: "SEO for Google, plus the work that helps ChatGPT and Gemini recommend your business.", gain: "New customers find you first" },
      { icon: "sun", title: "Sends you one page every Monday", body: "Sales, unpaid invoices, cash due in and out, and staff hours. Everything you need before your first coffee.", gain: "Know where the money is" },
    ],
  },

  spotlights: [
    {
      label: "Your inbox",
      title: "214 emails since Friday. Sorted before you sit down.",
      points: [
        "It reads every email that came in and sorts it by customer, supplier and how urgent it is.",
        "It answers the routine ones from your own files: copy invoices, prices, order updates.",
        "The few that need a person go to the right one, with a reply already drafted.",
      ],
      visual: {
        type: "rows",
        title: "Inbox · Monday 08:00",
        hint: "214 sorted · 9 need you",
        action: "tag",
        rows: [
          { badge: "1", top: true, title: "Complaint · late delivery to Mosta", detail: "Apology and a new delivery date drafted.", tag: "Review" },
          { badge: "2", title: "Quote request · 40 office chairs", detail: "Prices taken from your list. Quote drafted.", tag: "Review" },
          { badge: "3", title: "Supplier price rise from 1 December", detail: "Saved to the supplier file. In your Monday report.", tag: "Filed" },
          { badge: "4", title: "Customer asks for a copy invoice", detail: "Sent from the accounts folder a minute later.", tag: "Answered" },
        ],
      },
    },
    {
      label: "Month-end",
      title: "Month-end, ready before your accountant asks.",
      points: [
        "Every invoice, receipt and bank line for the month, collected from email, WhatsApp and the scanner.",
        "It matches them, lists the gaps and asks the right person for what is missing.",
        "You approve one tidy pack. Your accountant checks it and files.",
      ],
      visual: {
        type: "timeline",
        title: "October month-end",
        subtitle: "For your accountant · ready in 3 days",
        steps: [
          { when: "31 Oct", title: "October’s paperwork collected", detail: "187 invoices and receipts from email, WhatsApp and the scanner." },
          { when: "1 Nov", title: "Bank lines matched", detail: "312 of 318 matched. 6 gaps found, the right people asked." },
          { when: "2 Nov", title: "Gaps closed", detail: "5 receipts sent in. 1 left for your accountant to decide." },
          { when: "3 Nov", title: "You approve the pack", detail: "Sales, costs, VAT figures and the bank, in one file.", key: true, tag: "Sent to your accountant" },
          { when: "5 Nov", title: "Accountant’s questions answered", detail: "Each answer links to the document it came from." },
        ],
      },
    },
    {
      label: "New staff",
      title: "New starters ready on day one.",
      points: [
        "Each new hire gets a welcome and a checklist on their phone, in their language.",
        "It collects the contract, ID, bank details and permit papers, and checks nothing is missing.",
        "The Jobsplus form is ready for you to sign inside the four working days.",
      ],
      visual: {
        type: "chat",
        initials: "PN",
        name: "Priya N.",
        origin: "WhatsApp · starts next Monday",
        status: "Onboarding",
        messages: [
          { from: "out", text: "Hi Priya, welcome to the team. Please send your ID, bank details and permit letter here before Monday.", time: "10:02" },
          { from: "in", text: "Thank you. I’ll send them tonight. What time do I start on Monday?", time: "10:05" },
          { from: "out", text: "08:30 at the Mosta office. Would a 10-minute welcome call on Friday suit you?", time: "10:05" },
        ],
        slots: ["Fri 10:00", "Fri 15:30"],
        done: { before: "Welcome call booked · ", strong: "Fri 10:00", after: " · Jobsplus form ready to sign" },
      },
    },
    {
      label: "Bills and receipts",
      title: "Every bill read. Nothing paid twice.",
      points: [
        "Bills come by email, receipts as WhatsApp photos, paper through the scanner. It reads them all.",
        "It checks each bill against the order and the agreed price, and spots the same bill sent twice.",
        "Approved bills are lined up by due date, so you pay them in one go.",
      ],
      visual: {
        type: "rows",
        title: "Bills and receipts · this week",
        hint: "From email, WhatsApp and the scanner",
        action: "tag",
        rows: [
          { badge: "PDF", title: "Vella Packaging · €2,316.00", detail: "Matches order 124 and the agreed price. Due 30 Nov.", tag: "Approve" },
          { badge: "PDF", top: true, title: "Zammit Wholesale · €1,184.20", detail: "Same bill sent twice. Already paid on 3 November.", tag: "Stopped" },
          { badge: "JPG", title: "Fuel receipt · Kevin B.", detail: "€62.00. WhatsApp photo, read and filed to Van 1.", tag: "Filed" },
          { badge: "JPG", title: "Hardware receipt · Sarah M.", detail: "Too blurry to read. Sarah asked for a new photo.", tag: "Asked again" },
        ],
      },
    },
    {
      label: "Ask anything",
      title: "Ask it like you’d ask your office manager.",
      points: [
        "Type a question in plain words. The answer comes from your own invoices, bills and files, with a link to each one.",
        "No reports to build. No “who has that spreadsheet?”",
      ],
      visual: {
        type: "ask",
        questions: [
          { q: "Who owes us money?", summary: "€18,460 is overdue from 14 customers. Every one of them has been reminded.", rows: [["Grech Interiors Ltd", "€3,240 · plan agreed"], ["Bonnici Builders", "€1,950 · promised Friday"], ["Calleja Garage", "€1,120 · called today"], ["Farrugia Catering", "€860 · reminded"], ["+ 10 more", "See all"]] },
          { q: "What is due this month?", summary: "6 dates this month. The work for 4 of them is already prepared.", rows: [["VAT return figures", "Ready for your accountant"], ["Payroll forms", "Hours in from 23 of 24 staff"], ["Permit renewal · R. Fernando", "Pack started · 2 documents asked"], ["Van insurance renewal", "Reminder set · you decide"], ["+ 2 more", "See all"]] },
          { q: "How much went on fuel this year?", summary: "€4,820 since January. That is €390 more than by this time last year.", rows: [["Van 1 · Kevin B.", "€1,930"], ["Van 2 · Sarah M.", "€1,710"], ["Company car", "€1,180"], ["Receipts missing", "3 · staff asked"]] },
          { q: "Who is off next week?", summary: "3 people are on leave next week. Cover is booked for 2 of them.", rows: [["Maria C.", "Mon to Wed · cover booked"], ["Kevin B.", "Friday · cover booked"], ["Daniel O.", "All week · no cover yet"], ["Leave left this year", "Open the list"]] },
        ],
      },
    },
  ],

  areas: {
    label: "Every part of your office",
    title: "Money in. Money out. People. Papers. Dates.",
    intro: "Most admin is reading, matching, chasing and filling in forms. The system does that. Your team does the parts that need a person.",
    colA: "Your work",
    colB: "The system does",
    colC: "You do",
    items: [
      { name: "Invoicing and getting paid", system: "Turns jobs and orders into invoices the same day, reminds before and after the due date, calls late payers and matches every payment.", you: "Agree payment plans and decide who gets credit." },
      { name: "Customer emails and quotes", system: "Answers routine questions, sends copy invoices and statements, and drafts quotes from your price list.", you: "Win the work and handle the tricky ones." },
      { name: "Bills, receipts and suppliers", system: "Reads every bill and receipt, checks it against the order, stops duplicates and lines up payments by due date.", you: "Approve and pay." },
      { name: "Bank and month-end", system: "Matches the bank every day, chases missing receipts and builds the month-end pack for your accountant.", you: "Approve the pack. Your accountant checks it." },
      { name: "Payroll, leave and staff questions", system: "Collects hours, leave and overtime, sends one clean file to payroll and answers staff questions from your own files.", you: "Approve the payroll run." },
      { name: "New hires and work permits", system: "Collects every document from new starters, prepares the Jobsplus form and the single permit pack, and starts renewals months early.", you: "Sign the forms." },
      { name: "Contracts, files and records", system: "Names and files every contract, letter and scan, keeps staff and supplier records up to date and finds anything in seconds.", you: "Ask for anything in plain words." },
      { name: "VAT, tax and company dates", system: "Keeps your accountant’s dates, prepares the VAT figures and payroll forms, and reminds everyone weeks ahead.", you: "Check the figures with your accountant, who files." },
    ],
  },

  wins: {
    label: "Your customers feel it first",
    title: "Their win is your win.",
    items: [
      { title: "A reply the same hour.", body: "A customer asks for a copy invoice at 4 pm. It arrives a minute later. They pay it, and they remember you as easy to work with." },
      { title: "Invoices right the first time.", body: "The right amount and the right order number, sent the same day. No back and forth, no corrections." },
      { title: "Reminders that stay friendly.", body: "Late payers get a polite message with the invoice and a pay link, not an angry call. You get paid and keep the customer." },
    ],
  },

  live: {
    label: "How it starts",
    h2Before: "We set it up for you in",
    h2Em: "72 hours.",
    body: "We come in, connect your email, files and accounts, and set the whole thing up. Nothing new for your team to learn.",
    steps: [
      { when: "Today", title: "A 20-minute call", body: "About how your office works and where the hours and the money go." },
      { when: "72 hours", title: "Your first system is live", body: "Usually: every unpaid invoice chased and every email sorted." },
      { when: "Week 2", title: "Your numbers connected", body: "Invoices, bills, the bank, staff records and deadlines in one place." },
      { when: "Every week", title: "It grows with you", body: "It learns your business, and the next job goes live." },
    ],
  },

  ways: {
    label: "Start where you want",
    title: "One job or the whole office. You choose.",
    items: [
      { title: "Fix one job", body: "Pick the one thing that eats the most hours and we automate just that.", example: "Example: chase every unpaid invoice." },
      { title: "Plug into what you use", body: "Keep your accounts package, payroll software, Outlook and Excel. We connect to them.", example: "Example: approved bills go straight into your accounts software." },
      { title: "The full system", body: "Everything on this page, built around your business, customised and looked after by us.", example: "Example: invoices, bills, inbox, staff and deadlines in one place." },
      { title: "Not sure yet?", body: "Most owners aren’t. We look at your week and show you where the hours and the money go.", example: "Free. Takes 20 minutes." },
    ],
  },

  offer: {
    label: "Limited-time offer",
    title: "Your first month is free.",
    body: "We set it up in 72 hours and run it with you for a month. You see the invoices chased, the receipts filed and the hours it gives back on your own business first.",
    cta: "Claim your free month",
    secondaryCta: "Book a 20-minute call",
    listLabel: "What you get",
    items: [
      { strong: "First month free.", rest: "See it work on your own invoices and inbox before you decide." },
      { strong: "Set up for you in 72 hours.", rest: "We connect your email, WhatsApp, files and accounts. You change nothing." },
      { strong: "Your accountant stays in charge.", rest: "They get tidy packs and clear figures. They still check and file." },
      { strong: "Run by us.", rest: "We customise it, look after it and improve it every week." },
      { strong: "Start small.", rest: "One job first. Add the next only when the first has paid for itself." },
    ],
  },

  calc: {
    label: "Your numbers",
    title: "What all that chasing costs you.",
    mode: "times",
    factor: 46,
    inputs: [
      { label: "People who do admin work", value: 4 },
      { label: "Hours each one spends a week chasing and filing", value: 6 },
      { label: "Cost of one hour of their time (€)", value: 25 },
    ],
    out1: "Hours you could get back every year",
    out2: "What those hours cost you now",
    footnote: "Assumes 46 working weeks a year. The hours go back to your team for work that needs a person, so change the numbers to match your business.",
  },

  trust: {
    label: "You stay in charge",
    title: "It prepares. You and your accountant decide.",
    items: [
      { icon: "check", title: "Nothing paid or filed without a yes", body: "Payments, payment plans, filings and anything sent to an authority wait for you, a manager or your accountant to approve. It never gives tax advice." },
      { icon: "lock", title: "Your numbers stay yours", body: "Your invoices, bank lines and staff files are only used for your business and are handled under GDPR." },
      { icon: "book", title: "Every number shows its source", body: "Each figure links to the invoice, bill or bank line it came from. Checking takes seconds." },
      { icon: "users", title: "A team in Malta", body: "OARC’s team in Birkirkara sets it up, connects it to the software you already use and picks up the phone." },
    ],
  },

  facts: {
    label: "Why now",
    title: "Admin runs on deadlines. Miss one and it costs.",
    items: [
      { n: "4 days", l: "Working days to send Jobsplus the form when someone starts work, or when they leave.", src: { label: "Jobsplus policy note, July 2025", href: "https://jobsplus.gov.mt/media/gwld3ous/submission-of-engagement-and-termination-10-07-2025.pdf" } },
      { n: "€20 a month", l: "The penalty for a late VAT return, or 1% of the VAT due if that is higher. Up to €250 a return.", src: { label: "VAT Act, Cap. 406, art. 38", href: "https://legislation.mt/eli/cap/406/eng/pdf" } },
      { n: "4 months", l: "What the law gives Identità to process a single permit. The average is closer to two.", src: { label: "Identità, single permit processing", href: "https://identita.gov.mt/?p=2654" } },
    ],
  },

  faq: [
    { q: "What is it, exactly?", a: "One AI system built around your business’s admin. It answers and sorts your email, chases unpaid invoices, reads every bill and receipt, matches the bank, gets month-end ready for your accountant, collects staff paperwork and tracks every deadline. OARC’s team in Malta sets it up and runs it with you." },
    { q: "Does it give tax or accounting advice?", a: "No. It reads, matches, prepares and reminds. Your accountant checks the figures and files, and you approve every payment." },
    { q: "Will it replace our admin staff?", a: "No. It takes the sorting, typing, matching and chasing, so your team spends its time on customers, suppliers and the problems that need a person." },
    { q: "Does it work with our accountant?", a: "Yes. Your accountant stays in charge. They get the month-end pack, the VAT figures and the payroll inputs ready to check, and every number links to its document. It works for your accountant, not instead of them." },
    { q: "Are customer and staff records kept private?", a: "Yes. Your customer, supplier and staff records are only used for your business and are handled under GDPR." },
    { q: "Does it work with our accounts and payroll software?", a: "Yes. We connect it to the email, files, accounts and payroll software you already use. If no connection exists, we build one." },
    { q: "Can it do just one thing?", a: "Yes. Many owners start with one job, such as chasing unpaid invoices, and add the next when the first has paid for itself." },
    { q: "How fast is it live?", a: "We set up your first system in 72 hours, usually chasing unpaid invoices and sorting your inbox. The rest is connected over the following weeks." },
    { q: "Do the AI agents call customers?", a: "Yes. A voice agent calls customers about unpaid invoices, calls staff and suppliers about missing documents, and books meetings. Payment plans wait for your yes, and a person can take over any call." },
    { q: "What if it gets something wrong?", a: "Nothing is paid, filed or sent to an authority until you or your accountant approve it. Every number links to its document and every action is logged. If something needs changing, OARC’s team in Malta changes it." },
    { q: "How much does it cost?", a: "Right now the first month is free. After that it depends on your business’s size and what you switch on. Ask us and we price it for your business." },
    { q: "How long does an employer have to send Jobsplus the engagement form?", a: "Four working days from the day the person starts work. The termination form has the same limit, counted from the day the job ends." },
    { q: "What is the penalty for a late VAT return in Malta?", a: "For a business registered under article 10, it is 1% of the VAT due or €20, whichever is higher, for every month or part of a month the return is late. It stops at €250 a return, or lower when the VAT due is under €250. Your accountant has your return dates." },
    { q: "How long does a single permit take in Malta?", a: "The law gives Identità up to four months to process a single permit application. Identità says the average is closer to two months, counted from when the application goes in with every document." },
  ],

  cta: {
    titleBefore: "Every invoice chased. Every receipt filed.",
    titleEm: "Starting this week.",
    body: "Claim your free first month. We set it up for you in 72 hours.",
    button: "Claim your free month",
    secondary: "Book a 20-minute call",
  },

  sources: [
    { label: "Jobsplus: engagement and termination forms", href: "https://jobsplus.gov.mt/media/gwld3ous/submission-of-engagement-and-termination-10-07-2025.pdf" },
    { label: "Value Added Tax Act (Cap. 406)", href: "https://legislation.mt/eli/cap/406/eng/pdf" },
    { label: "Identità: single permit processing period", href: "https://identita.gov.mt/?p=2654" },
  ],
  related: [
    { label: "Business automation", href: "/automation" },
    { label: "AI admin agent", href: "/services/ai-admin-agent" },
    { label: "AI data analyst", href: "/services/ai-data-analyst" },
    { label: "AI for law firms", href: "/ai/law-firms" },
  ],
  disclaimer: "OARC Digital · Malta. OARC Digital is not an accounting or tax firm and does not give tax advice. Names and figures on the screens are from a demo account.",
};
