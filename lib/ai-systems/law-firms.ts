import type { AiSystemContent } from "./types";

export const lawFirms: AiSystemContent = {
  slug: "law-firms",
  name: "Law firms",
  barLabel: "Law Firm AI",
  business: "law firm",
  metaTitle: "AI for Law Firms in Malta | Legal Automation | OARC Digital",
  metaDescription:
    "The AI system built around your law firm in Malta. It files every document, tracks every deadline, drafts from your templates and bills your time. You sign off.",
  updated: "2026-11-13",
  serviceType: "AI system and legal automation for law firms",
  schemaDescription:
    "An AI system built around each law firm in Malta. It answers new clients 24/7, runs client checks, takes in and files every document, tracks court, permit and filing deadlines, drafts from the firm's own templates, prepares permit applications, company filings and VAT and tax returns, records time and bills. A warranted advocate approves everything. Set up and run by OARC Digital's team in Malta.",
  hub: {
    title: "Law firms",
    body: "Every client document filed. Every deadline tracked. First drafts in your firm’s own words. An advocate signs off.",
    gain: "Permits, corporate, property, tax and disputes",
  },

  proof: { line: "Running in 10 law and accounting firms in Malta", short: "In 10 firms in Malta" },
  trustEarly: true,

  hero: {
    pill: "Live in 48 hours, or you don’t pay",
    kicker: "Your lawyers studied law. Not filing.",
    h1Before: "The complete AI system built around",
    h1Highlight: "your law firm.",
    sub: "It takes in every client document, tracks every deadline, drafts from your own templates and records your time. Nothing leaves the firm without an advocate’s yes.",
    primaryCta: "Ask for the price",
    secondaryCta: "Book a 20-minute call",
    note: "Set up and run by OARC’s team in Malta. Nothing new for your lawyers to learn.",
  },

  film: {
    title: "Watch one client, from first message to invoice",
    scenes: [
      {
        clock: "Tuesday · 21:42",
        caption: "A new client writes. Your office is closed.",
        result: "Answered in 40 seconds",
        visual: {
          type: "chat",
          initials: "RS",
          name: "Rafael S.",
          origin: "WhatsApp · new client",
          status: "Answered",
          messages: [
            { from: "in", text: "Hi, I need help renewing my work permit. It expires in April.", time: "21:42" },
            { from: "out", text: "Good evening Rafael. We can help. Is it the same job and the same employer as on your permit?", time: "21:42" },
            { from: "in", text: "Yes, same job, at Camilleri Trading.", time: "21:44" },
            { from: "out", text: "Thank you. Here is your private link. Please send your passport, contract, lease and health insurance.", time: "21:44" },
          ],
          done: { before: "File opened · ", strong: "no conflict found", after: " · no legal advice given" },
        },
      },
      {
        clock: "Tuesday · 21:47",
        caption: "He sends his documents from his phone. Each one is read, named and filed.",
        result: "Nobody chased him",
        visual: {
          type: "rows",
          title: "R. Santos · work permit renewal",
          hint: "Uploaded today, 21:47",
          action: "tag",
          rows: [
            { badge: "PDF", title: "Passport", detail: "Valid to 2031. Name matches the contract.", tag: "Filed" },
            { badge: "PDF", title: "Employment contract", detail: "Signed by both sides. Salary and hours read.", tag: "Filed" },
            { badge: "JPG", top: true, title: "Lease agreement", detail: "Photo too dark to read. Client asked for a new one.", tag: "Asked again" },
            { badge: "–", title: "Health insurance", detail: "Not sent yet. Reminder goes at 09:00.", tag: "Missing" },
          ],
        },
      },
      {
        clock: "Wednesday · 08:30",
        caption: "The application is filled in. It waits for one thing: your review.",
        result: "Ready before you sat down",
        visual: {
          type: "rows",
          title: "Waiting for Dr Anna",
          hint: "Prepared overnight",
          action: "tag",
          rows: [
            { badge: "01", top: true, title: "Work permit renewal · R. Santos", detail: "Forms filled in from the passport and the contract.", tag: "Review" },
            { badge: "02", title: "Engagement letter · R. Santos", detail: "Your template. Fixed fee filled in.", tag: "Sign" },
            { badge: "03", title: "Reply to letter · Vella", detail: "Every fact links to its document.", tag: "Review" },
          ],
        },
      },
      {
        clock: "Wednesday · 08:41",
        caption: "You read it. You approve it. Only then does it go.",
        result: "Nothing leaves without an advocate’s yes",
        visual: {
          type: "timeline",
          title: "Work permit renewal · R. Santos",
          subtitle: "Permit expires 30 April 2027",
          steps: [
            { when: "08:41", title: "Dr Anna approves the application", detail: "Two small edits. Both are logged.", key: true, tag: "Approved by an advocate" },
            { when: "08:42", title: "Sent", detail: "Client told the same minute, in Portuguese." },
            { when: "08:42", title: "Next expiry saved", detail: "The next renewal is already in the diary." },
          ],
        },
      },
      {
        clock: "Friday",
        caption: "The time you spent is already on the invoice.",
        result: "Every hour recorded. No timesheet.",
        visual: {
          type: "rows",
          title: "Time recorded this week",
          hint: "From your emails, calls and documents",
          action: "tag",
          rows: [
            { badge: "1.5h", top: true, title: "R. Santos · permit renewal", detail: "Review, two edits, one client call.", tag: "Invoice drafted" },
            { badge: "3.2h", title: "Borg Holdings Ltd · annual return", detail: "Drafting and filing.", tag: "Invoice drafted" },
            { badge: "0.8h", title: "Camilleri Trading · VAT return", detail: "Check and sign-off.", tag: "Added" },
          ],
        },
      },
    ],
  },

  dashboard: {
    title: "Your whole firm on one screen.",
    body: "Every morning: what was filed overnight, what is due, and what is waiting for your signature.",
    org: "Your Firm",
    search: "Ask anything… “Which permits expire before June?”",
    initials: "AB",
    nav: [
      { label: "Today" }, { label: "New clients", badge: "6" }, { label: "Matters" }, { label: "Documents" },
      { label: "Deadlines" }, { label: "Drafts" }, { label: "Time & billing" }, { label: "Reports" },
    ],
    greeting: "Good morning, Anna",
    status: "Running · everything filed overnight",
    kpis: [
      { label: "Documents filed overnight", value: "126", note: "Named, sorted, linked" },
      { label: "Deadlines in 14 days", value: "9", note: "All assigned" },
      { label: "Drafts waiting for you", value: "5", note: "Ready to review" },
      { label: "Unbilled time", value: "€4,300", note: "3 invoices drafted", alert: true },
    ],
    todoTitle: "Needs you today",
    todos: [
      { initials: "RS", title: "Work permit expiring · R. Santos", detail: "Renewal pack ready. 1 document missing, client asked.", tag: "Review", on: true },
      { initials: "BH", title: "New client · Borg Holdings Ltd", detail: "ID and company checks done. Engagement letter drafted.", tag: "Sign" },
      { initials: "BV", title: "Court · Thu 09:30 · Borg vs Vella", detail: "Bundle built from 214 emails and 38 documents.", tag: "Ready" },
      { initials: "CT", title: "VAT return · Camilleri Trading", detail: "Figures pulled from the invoices. Due in 6 days.", tag: "Check" },
    ],
    chartTitle: "Hours recorded this week",
    bars: [
      { label: "Mon", h: 62 }, { label: "Tue", h: 74 }, { label: "Wed", h: 58 }, { label: "Thu", h: 86 }, { label: "Fri", h: 100 },
    ],
    chartFoot: { label: "Captured with no timesheet", value: "31 h" },
    chatFloat: {
      channel: "WhatsApp · new client",
      time: "21:42",
      incoming: "Hi, I need help renewing my work permit. It expires next month.",
      reply: "I can start your file today. Please send a photo of your residence card and your contract.",
      receipt: "Replied in 40 sec · file opened",
    },
    alertFloat: {
      label: "Deadline Watch · just now",
      title: "Reply due in 6 days",
      detail: "Borg vs Vella. The draft is ready for Dr Anna to review.",
      tag: "Draft ready",
    },
  },

  worksWith: ["Outlook & Gmail", "WhatsApp", "Word & Excel", "SharePoint & OneDrive", "Your practice software", "Your accounts software", "Scanned paper files", "Phone calls"],

  pillars: {
    label: "Built around your firm",
    title: "Your firm. Your files. Your way of working.",
    items: [
      { icon: "folder", title: "Every file in one place", body: "Emails, contracts, court papers, scans and WhatsApp photos. Sorted by client and matter, and found in seconds." },
      { icon: "workflow", title: "Works inside the tools you use", body: "Your lawyers stay in Outlook, Word and the software they know. The system works behind them." },
      { icon: "scale", title: "A lawyer always signs", body: "It prepares. You decide. Nothing goes to a client, a court or an authority without an advocate’s yes." },
    ],
  },

  jobs: {
    label: "Everything it does",
    title: "One system. Eighteen jobs done for you.",
    items: [
      { icon: "chat", title: "Answers every new client, 24/7", body: "WhatsApp, email, your website and the phone. It asks what the matter is and books the first meeting.", gain: "No client walks to the next firm" },
      { icon: "badge", title: "Runs client checks", body: "Collects ID and proof of address, checks for conflicts and prepares the due diligence file for you to approve.", gain: "Onboarding in a day, not a week" },
      { icon: "inbox", title: "Takes in every document", body: "Clients upload or forward anything. It reads it, names it and files it to the right matter.", gain: "No more sorting inboxes" },
      { icon: "search", title: "Finds anything in seconds", body: "Ask in plain words. It searches every contract, email, letter and scan your firm holds.", gain: "Hours of searching, gone" },
      { icon: "pen", title: "Drafts from your templates", body: "Engagement letters, agreements, leases, powers of attorney and letters, in your firm’s own wording.", gain: "First draft in minutes" },
      { icon: "eye", title: "Checks contracts", body: "Reads an incoming contract and marks what is missing or unusual against your firm’s standard.", gain: "A second pair of eyes on every page" },
      { icon: "clock", title: "Tracks every deadline", body: "Court dates, filing limits, permit expiries, renewals and annual returns. Reminders start weeks ahead.", gain: "No last-minute panic" },
      { icon: "plane", title: "Prepares permit applications", body: "Work, residence and student permits. It checks every passport, contract and certificate and fills in the forms.", gain: "More applications per lawyer" },
      { icon: "building", title: "Keeps companies compliant", body: "Annual returns, registers and resolutions, prepared and reminded before the due date.", gain: "No late penalties" },
      { icon: "receipt", title: "Prepares VAT and tax filings", body: "Pulls the figures from invoices and statements and builds the return for you to check.", gain: "Filing day is a quiet day" },
      { icon: "file", title: "Handles property and vehicle paperwork", body: "Tracks promise-of-sale dates, gathers the documents and prepares transfer and registration forms.", gain: "Clean files, every time" },
      { icon: "gavel", title: "Builds the dispute file", body: "Turns hundreds of emails and documents into a timeline and a bundle, and lists what is missing.", gain: "Days of prep in an hour" },
      { icon: "book", title: "Finds the law", body: "Searches Malta’s laws and your firm’s past work, and shows the source for every answer.", gain: "Research starts with the answer" },
      { icon: "languages", title: "Translates", body: "Working translations in Maltese, English, Italian and more, ready for you to check.", gain: "Clients read it in their language" },
      { icon: "euro", title: "Records time and bills", body: "Captures time from your emails, calls and documents, drafts the invoice and chases what is unpaid.", gain: "Bill every hour you work" },
      { icon: "card", title: "Does the bookkeeping", body: "Matches payments to invoices, sorts receipts and keeps the records tidy for your accountant.", gain: "Books always up to date" },
      { icon: "refresh", title: "Keeps clients updated", body: "Clients get a clear update at every step and can ask where their file is, any time.", gain: "Fewer “any news?” calls" },
      { icon: "sun", title: "Briefs each lawyer every morning", body: "Today’s deadlines, drafts to review, files waiting on a client and unbilled work.", gain: "Start the day knowing" },
    ],
  },

  spotlights: [
    {
      label: "Client portal",
      title: "Clients send it once. It files itself.",
      points: [
        "Each client gets a private link. They drop in photos, PDFs, scans or voice notes from their phone.",
        "The system reads every file, names it, files it to the right matter and tells the right lawyer.",
        "If something is missing or unreadable, it asks the client the same minute. You don’t chase.",
      ],
      visual: {
        type: "rows",
        title: "R. Santos · work permit renewal",
        hint: "Uploaded today, 21:47",
        action: "tag",
        rows: [
          { badge: "PDF", title: "Passport", detail: "Valid to 2031. Name matches the contract.", tag: "Filed" },
          { badge: "PDF", title: "Employment contract", detail: "Signed by both sides. Salary and hours read.", tag: "Filed" },
          { badge: "JPG", top: true, title: "Lease agreement", detail: "Photo too dark to read. Client asked for a new one.", tag: "Asked again" },
          { badge: "–", title: "Health insurance", detail: "Not sent yet. Reminder goes tomorrow at 09:00.", tag: "Missing" },
        ],
      },
    },
    {
      label: "Deadlines",
      title: "Every deadline, weeks ahead.",
      points: [
        "It reads the dates out of court notices, contracts, permits and company records.",
        "It reminds the right lawyer early, then again, then tells a partner.",
        "It prepares the work before the date. The deadline becomes a signature, not a scramble.",
      ],
      visual: {
        type: "timeline",
        title: "Work permit renewal · R. Santos",
        subtitle: "Permit expires 30 April 2027",
        steps: [
          { when: "Day −90", title: "Client and employer told what is needed", detail: "Checklist sent on WhatsApp in Portuguese." },
          { when: "Day −75", title: "Documents in and checked", detail: "5 of 6 are fine. One photo asked for again." },
          { when: "Day −60", title: "Application ready for you", detail: "Forms filled in. Waiting for Dr Anna’s review.", key: true, tag: "Ready to review" },
          { when: "Day −58", title: "Sent after your approval", detail: "Client told the same minute." },
          { when: "Decision", title: "Client updated, next expiry saved", detail: "The next renewal is already in the diary." },
        ],
      },
    },
    {
      label: "New clients",
      title: "Every new client answered in seconds.",
      points: [
        "It replies on WhatsApp, email, your website and the phone, in the client’s language.",
        "It asks what a good secretary would ask. It never gives legal advice.",
        "It opens the file, runs the conflict check and books the meeting.",
      ],
      visual: {
        type: "chat",
        initials: "MG",
        name: "Marco G.",
        origin: "Enquiry from your website",
        status: "Answered",
        messages: [
          { from: "in", text: "Good evening. I’m buying a flat in Gżira and I want a lawyer to check the promise of sale.", time: "20:52" },
          { from: "out", text: "Good evening Marco. We can help. Is there a date to sign, and has a notary been chosen?", time: "20:52" },
          { from: "in", text: "Signing is next Friday. The notary is chosen.", time: "20:54" },
          { from: "out", text: "Understood. Dr Anna can review it before then. Would a call tomorrow suit you?", time: "20:54" },
        ],
        slots: ["Tue 09:30", "Tue 16:00"],
        done: { before: "Call booked with Dr Anna · ", strong: "Tue 09:30", after: " · file opened, no conflict found" },
      },
    },
    {
      label: "Drafting",
      title: "First drafts in minutes. In your firm’s words.",
      points: [
        "It learns your templates, your clauses and how your firm writes.",
        "Every change from your standard is marked, so a review takes minutes.",
        "Nothing is sent until an advocate approves it.",
      ],
      visual: {
        type: "rows",
        title: "Drafts waiting for you",
        hint: "Made from your own templates",
        action: "tag",
        rows: [
          { badge: "01", top: true, title: "Engagement letter · Borg Holdings Ltd", detail: "Fees and scope filled in from the first call.", tag: "Review" },
          { badge: "02", title: "Lease agreement · shop in Mosta", detail: "Your template. Three clauses changed, each one marked.", tag: "Review" },
          { badge: "03", title: "Reply to letter · Vella", detail: "Built from the file. Every fact links to its document.", tag: "Review" },
          { badge: "04", title: "Power of attorney · Santos", detail: "In two languages. Details taken from the passport.", tag: "Review" },
        ],
      },
    },
    {
      label: "Ask anything",
      title: "Ask it like you’d ask your best clerk.",
      points: [
        "Type a question in plain words. The answer comes from your own files, with a link to the document.",
        "No folders to dig through. No “who has that file?”",
      ],
      visual: {
        type: "ask",
        questions: [
          { q: "Which permits expire before June?", summary: "11 permits expire before June. Renewals have started on all of them.", rows: [["R. Santos · work permit", "30 Apr · ready to review"], ["L. Okafor · work permit", "12 May · 1 document missing"], ["P. Sharma · student", "20 May · waiting on school letter"], ["D. Reyes · work permit", "28 May · sent"], ["+ 7 more", "See all"]] },
          { q: "What did we agree with Borg Holdings on fees?", summary: "Engagement letter signed on 14 March. Found in 2 seconds.", rows: [["Hourly rate", "Clause 4 of the signed letter"], ["Billing", "Monthly · 30 days to pay"], ["Fee cap", "Agreed for phase 1"], ["Signed copy", "Open document"]] },
          { q: "What is due this week?", summary: "9 deadlines this week. 7 are ready for review.", rows: [["Mon · VAT return, Camilleri Trading", "Ready to check"], ["Tue · Annual return, Borg Holdings", "Ready to sign"], ["Thu · Court, Borg vs Vella", "Bundle ready"], ["Fri · Promise of sale ends, Gżira flat", "Notary reminded"], ["+ 5 more", "See all"]] },
          { q: "How much time is unbilled?", summary: "€4,300 of work is recorded and not yet invoiced.", rows: [["Borg Holdings Ltd", "€1,850 · invoice drafted"], ["Camilleri Trading", "€1,200 · invoice drafted"], ["R. Santos", "€450 · fixed fee, stage 2"], ["4 smaller matters", "€800"]] },
        ],
      },
    },
  ],

  areas: {
    label: "Every service you offer",
    title: "The routine work, done. In every practice area.",
    intro: "Most legal work is steps, forms and dates. The system does those. Your lawyers do the thinking.",
    colA: "Your work",
    colB: "The system does",
    colC: "You do",
    items: [
      { name: "Work & residence permits", system: "Checks every document, fills in the application, tracks the decision and starts each renewal months early.", you: "Advise the client and approve the file." },
      { name: "Students & relocation", system: "Collects school letters, insurance and proof of funds, and keeps the student updated in their own language.", you: "Handle the hard cases." },
      { name: "Company & corporate", system: "Prepares incorporation packs, annual returns, registers and resolutions, and watches every filing date.", you: "Structure the deal." },
      { name: "VAT, tax & bookkeeping", system: "Sorts invoices and receipts, prepares VAT returns and income tax filings, and matches payments.", you: "Check the numbers and sign." },
      { name: "Property", system: "Tracks promise-of-sale dates, gathers the documents and keeps buyer, seller and notary in step.", you: "Review the terms and protect the client." },
      { name: "Contracts & agreements", system: "Drafts from your templates, compares versions and marks every clause that differs from your standard.", you: "Negotiate." },
      { name: "Disputes & court", system: "Builds the timeline and the bundle from the file, tracks court dates and drafts routine letters.", you: "Argue the case." },
      { name: "Vehicles & registrations", system: "Prepares transfer and registration forms and checks the documents are complete before they go in.", you: "Sign off." },
      { name: "Employment & recruitment", system: "Checks the documents of workers coming from abroad, prepares contracts and keeps employer files in order.", you: "Advise the employer." },
    ],
  },

  wins: {
    label: "Your clients feel it first",
    title: "Their win is your win.",
    items: [
      { title: "An answer tonight, not next week.", body: "A worried client writes at 9 pm. They get a reply, a list of what to send and a meeting time. They stop looking for another firm." },
      { title: "No more “any news?”", body: "Clients see where their file is at every step. They trust you more and call you less." },
      { title: "Send it once.", body: "A client uploads a document one time, from their phone. Nobody asks them for it again." },
    ],
  },

  live: {
    label: "How it works",
    h2Before: "Live in",
    h2Em: "48 hours.",
    body: "Nothing new for your lawyers to learn. OARC’s team sets it up on your tools and runs it with you.",
    steps: [
      { when: "Today", title: "A 20-minute call", body: "About how your firm works and where the hours go." },
      { when: "48 hours", title: "Your first system is live", body: "Usually: every new enquiry answered and every incoming document filed." },
      { when: "Week 2", title: "Your files connected", body: "Clients, matters, templates and deadlines in one place." },
      { when: "Every week", title: "It grows with you", body: "It learns your firm, and the next job goes live." },
    ],
  },

  ways: {
    label: "Start where you want",
    title: "One job or the whole firm. You choose.",
    items: [
      { title: "Fix one job", body: "Pick the one thing that eats the most hours and we automate just that.", example: "Example: collect and file every client document." },
      { title: "Plug into what you use", body: "Keep your practice software, Outlook and accounts package. We connect to them.", example: "Example: recorded time lands in your billing software." },
      { title: "The full system", body: "Everything on this page, built around your firm, customised and looked after by us.", example: "Example: intake, documents, deadlines, drafts and billing in one place." },
      { title: "Not sure yet?", body: "Most firms aren’t. We look at your week and show you where the hours go.", example: "Free. Takes 20 minutes." },
    ],
  },

  offer: {
    label: "The offer",
    title: "Live in 48 hours. Or you don’t pay.",
    body: "Your first system is working two days after you say yes. If it isn’t live by then, you owe nothing. The 20-minute call is free either way, and you keep the list of what to fix first.",
    cta: "Ask for the price",
    secondaryCta: "Book my 20-minute call",
    listLabel: "What you get",
    items: [
      { strong: "Live in 48 hours, or you don’t pay.", rest: "Your first system is working two days after you say yes." },
      { strong: "A free map of your firm.", rest: "Where the hours go, and what to fix first." },
      { strong: "It is your system.", rest: "Built around your firm, with your templates and your way of working." },
      { strong: "Run by us.", rest: "We customise it, look after it and improve it every week." },
      { strong: "Start small.", rest: "One job first. Add the next only when the first has paid for itself." },
    ],
  },

  calc: {
    label: "Your numbers",
    title: "What your admin hours are worth.",
    mode: "times",
    factor: 46,
    inputs: [
      { label: "Lawyers in your firm", value: 6 },
      { label: "Admin hours each one loses a week", value: 5 },
      { label: "Average hourly rate (€)", value: 120 },
    ],
    out1: "Hours you could get back every year",
    out2: "What those hours are worth at your rate",
    footnote: "Assumes 46 working weeks a year. Not every hour saved becomes a billed hour, so change the numbers to match your firm.",
  },

  trust: {
    label: "You stay in charge",
    title: "It prepares. An advocate decides.",
    items: [
      { icon: "scale", title: "A lawyer signs everything", body: "Nothing reaches a client, a court or an authority without an advocate’s approval. The system never gives legal advice." },
      { icon: "lock", title: "Client secrets stay secret", body: "Your firm gets its own private system. Your files are never mixed with another firm’s and are handled under GDPR." },
      { icon: "book", title: "Every answer shows its source", body: "When it quotes a law, a clause or a date, it links to the document it came from. Checking takes seconds." },
      { icon: "users", title: "A team in Malta", body: "OARC’s team in Birkirkara sets it up, teaches it your templates and picks up the phone." },
    ],
  },

  facts: {
    label: "Why now",
    title: "Legal work runs on clocks. Every one can be missed.",
    items: [
      { n: "20 days", l: "To file a sworn reply in a civil case. The clock starts the day you are served.", src: { label: "Code of Organization and Civil Procedure, art. 158", href: "https://legislation.mt/eli/cap/12/eng" } },
      { n: "4 days", l: "Working days to send Jobsplus the engagement form for every new worker.", src: { label: "Jobsplus, July 2025", href: "https://jobsplus.gov.mt/media/gwld3ous/submission-of-engagement-and-termination-10-07-2025.pdf" } },
      { n: "5 years", l: "How long client due diligence records must be kept. Every file has to be findable.", src: { label: "FIAU Implementing Procedures", href: "https://fiaumalta.org/app/uploads/2025/11/27.01.2017-Implementing-Procedures-Part-I.pdf" } },
    ],
  },

  faq: [
    { q: "What is it, exactly?", a: "One AI system built around your law firm. It answers new clients, takes in and files every document, tracks every deadline, drafts from your templates, prepares applications and filings, records time and bills. OARC’s team in Malta sets it up and runs it with you." },
    { q: "Does it give legal advice?", a: "No. It prepares the work. An advocate reviews and approves everything before it leaves the firm." },
    { q: "Will it replace our lawyers or clerks?", a: "No. It takes the sorting, chasing, form-filling and first drafts, so your people spend their time on clients and on the law." },
    { q: "Is client data kept confidential?", a: "Yes. Each firm has its own private system. Your files are only used for your firm and are handled under GDPR." },
    { q: "Can clients upload documents themselves?", a: "Yes. Each client gets a private link. They send photos, PDFs or scans from their phone, and the system files each one to the right matter and tells the right lawyer." },
    { q: "Does it work with our practice management software?", a: "Yes. We connect it to the email, document storage, practice and accounts software you already use. If no connection exists, we build one." },
    { q: "Does it know Malta law?", a: "It works from Malta’s published laws and from your firm’s own templates and files, and it shows the source for every answer. Your lawyers check everything before it is used." },
    { q: "Can law firms use AI?", a: "Yes. In October 2025 the CCBE, which represents Europe’s bars and law societies, published a guide on generative AI for lawyers. Its main points are client confidentiality, checking every output and the lawyer staying responsible. This system is built on those rules." },
    { q: "Can it do just one thing?", a: "Yes. Many firms start with one job, such as collecting and filing client documents, and add the next when the first has paid for itself." },
    { q: "How fast is it live?", a: "Your first system is live in 48 hours. If it isn’t live by then, you don’t pay. The rest is connected over the following weeks." },
    { q: "What if it gets something wrong?", a: "Nothing reaches a client, a court or an authority until an advocate has read and approved it. Every draft shows its sources, and every action is logged. If something needs changing, OARC’s team in Malta changes it." },
    { q: "How much does it cost?", a: "It depends on your firm’s size and what you switch on first. Ask on WhatsApp and we price it for your firm." },
  ],

  cta: {
    titleBefore: "Give your lawyers their hours back.",
    titleEm: "Starting this week.",
    body: "Ask for the price today. Your first system is live in 48 hours, or you don’t pay.",
    button: "Ask for the price",
    secondary: "Book a 20-minute call",
  },

  sources: [
    { label: "Code of Organization and Civil Procedure (Cap. 12)", href: "https://legislation.mt/eli/cap/12/eng" },
    { label: "Jobsplus: engagement and termination forms", href: "https://jobsplus.gov.mt/media/gwld3ous/submission-of-engagement-and-termination-10-07-2025.pdf" },
    { label: "FIAU Implementing Procedures, Part I", href: "https://fiaumalta.org/app/uploads/2025/11/27.01.2017-Implementing-Procedures-Part-I.pdf" },
    { label: "CCBE guide on generative AI for lawyers", href: "https://eucrim.eu/news/ccbe-issues-guidance-on-generative-ai-use-in-legal-practice/" },
  ],
  related: [
    { label: "Business automation", href: "/automation" },
    { label: "Voice AI for law firms", href: "/voice-ai-worker/legal" },
    { label: "AI admin agent", href: "/services/ai-admin-agent" },
    { label: "AI for real estate agencies", href: "/ai/real-estate" },
  ],
  disclaimer: "OARC Digital · Malta. OARC Digital is not a law firm and does not give legal advice. Names and figures on the screens are from a demo account.",
};
