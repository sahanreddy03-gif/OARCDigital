import type { AiSystemContent } from "./types";

export const education: AiSystemContent = {
  slug: "education",
  name: "Schools and colleges",
  barLabel: "School AI",
  business: "school",
  metaTitle: "AI for Schools in Malta | Admissions & Admin | OARC Digital",
  metaDescription:
    "The AI system built around your school in Malta. It answers every enquiry, collects student documents, chases fees and tracks visa dates. Your staff decide.",
  updated: "2026-11-16",
  serviceType: "AI system and admissions automation for schools and colleges",
  schemaDescription:
    "An AI system built around each school, language school and college in Malta. It answers students, parents and agencies 24/7, books tours and trial lessons, quotes from the school's own prices, collects and checks student documents, tracks visa, permit and fee dates, chases unpaid fees and runs arrival days. The school's head, registrar or admissions team decides places, fees, grades and refunds, and Identità decides visas and permits. Set up and run by OARC Digital's team in Malta.",
  hub: {
    title: "Schools and colleges",
    body: "Every enquiry answered, day or night. Every student file complete. Every fee chased. Your staff decide.",
    gain: "ELT, private schools, tuition centres, colleges",
  },

  lightAreas: true,

  hero: {
    pill: "We set it up for you in 72 hours",
    kicker: "Finally, you have",
    h1Before: "One complete AI system built around",
    h1Highlight: "your school.",
    sub: "AI agents trained on your school answer every student, parent and agency, day or night. The system collects every document, watches every visa and fee date, and books tours and trial lessons. Your teachers teach. Your staff decide.",
    primaryCta: "Claim your free month",
    secondaryCta: "Book a 20-minute call",
    note: "First month free. Set up and run by OARC’s team in Malta.",
  },

  film: {
    title: "Watch one student, from first message to acceptance letter",
    scenes: [
      {
        clock: "Tuesday · 22:14",
        caption: "A student abroad asks about a long course after your office has closed.",
        result: "Answered in 35 seconds",
        visual: {
          type: "chat",
          initials: "VR",
          name: "Valentina R.",
          origin: "WhatsApp · new student",
          status: "Answered",
          messages: [
            { from: "in", text: "Hi! Is there a 24-week English course from March? I’ll need a school letter for my visa.", time: "22:14" },
            { from: "out", text: "Hi Valentina, yes, March has places. I’ve sent you the price and the list of documents to send.", time: "22:14" },
            { from: "in", text: "Great, I’ll send them all tonight.", time: "22:16" },
          ],
          done: { before: "Price sent from your list · ", strong: "document list sent", after: " · file opened" },
        },
      },
      {
        clock: "Tuesday · 22:31",
        caption: "Her documents arrive from her phone, and each one is checked against your list.",
        result: "Checked while your office slept",
        visual: {
          type: "rows",
          title: "V. Rojas · 24-week English course",
          hint: "Uploaded tonight, 22:31",
          action: "tag",
          rows: [
            { badge: "PDF", title: "Passport", detail: "Valid to 2033. Name matches the booking form.", tag: "Filed" },
            { badge: "PDF", title: "Bank statement", detail: "Last three months. Ready for admissions to check.", tag: "Filed" },
            { badge: "JPG", top: true, title: "Health insurance", detail: "Photo too blurry to read. Valentina asked for a new one.", tag: "Asked again" },
          ],
        },
      },
      {
        clock: "Wednesday · 08:40",
        caption: "Rebecca in admissions reads the file and approves the letter before it goes.",
        result: "A person approves every letter",
        visual: {
          type: "timeline",
          title: "Acceptance letter · V. Rojas",
          subtitle: "Course starts 1 March 2027",
          steps: [
            { when: "08:40", title: "Rebecca approves the letter", detail: "One line added about her accommodation. The edit is logged.", key: true, tag: "Approved by admissions" },
            { when: "08:41", title: "Sent to Valentina", detail: "With a link to pay the deposit and what happens next." },
            { when: "08:41", title: "Next dates saved", detail: "Deposit due date and arrival day are in the diary." },
          ],
        },
      },
    ],
  },

  dashboard: {
    title: "Every enquiry, file and fee on one screen.",
    body: "Every morning: who wrote overnight, which files are missing a document, which fees are late and who arrives next.",
    org: "Your School",
    search: "Ask anything… “Which fees are overdue?”",
    initials: "RC",
    nav: [
      { label: "Today" }, { label: "Enquiries", badge: "17" }, { label: "Tours & trials" }, { label: "Student files" },
      { label: "Visas & permits" }, { label: "Fees" }, { label: "Arrivals" }, { label: "Reports" },
    ],
    greeting: "Good morning, Rebecca",
    status: "Running · every enquiry answered overnight",
    kpis: [
      { label: "Enquiries answered overnight", value: "17", note: "Students, parents and agencies" },
      { label: "Files missing a document", value: "5", note: "Each student asked again" },
      { label: "Arrivals this Sunday", value: "42", note: "40 fully confirmed" },
      { label: "Fees overdue", value: "€6,840", note: "7 reminders sent", alert: true },
    ],
    todoTitle: "Needs you today",
    todos: [
      { initials: "VR", title: "Acceptance letter · V. Rojas", detail: "All documents in. Letter drafted from your template.", tag: "Approve", on: true },
      { initials: "MD", title: "Visa extension · M. Demir", detail: "Visa ends in 40 days. Forms ready for your check.", tag: "Check" },
      { initials: "AM", title: "Group quote · agency in Milan", detail: "16 juniors, two weeks in July. Built from your price list.", tag: "Review" },
      { initials: "PF", title: "Waiting list · Pace family", detail: "A Year 2 place opened. They are first in line.", tag: "Offer" },
    ],
    chartTitle: "Enquiries this week",
    bars: [
      { label: "Mon", h: 52 }, { label: "Tue", h: 64 }, { label: "Wed", h: 47 }, { label: "Thu", h: 71 },
      { label: "Fri", h: 66 }, { label: "Sat", h: 83 }, { label: "Sun", h: 100 },
    ],
    chartFoot: { label: "Answered outside office hours", value: "61" },
    chatFloat: {
      channel: "WhatsApp · parent",
      time: "21:52",
      incoming: "Hi, my son is 14. Do you have a junior course in July with a host family?",
      reply: "Yes, from 6 July. Juniors are met at the airport and stay with a host family. Here is the price.",
      receipt: "Replied in 35 sec · price sent",
    },
    alertFloat: {
      label: "Visa Watch · just now",
      title: "Visa ends in 40 days",
      detail: "M. Demir. The extension forms are ready for Rebecca to check.",
      tag: "Forms ready",
    },
  },

  worksWith: ["WhatsApp", "Outlook & Gmail", "Phone calls", "Your website", "Your school software", "Your accounts software", "Excel & Google Sheets", "Facebook & Instagram"],

  pillars: {
    label: "Built around your school",
    title: "Your school. Your students. Your way of working.",
    items: [
      { icon: "folder", title: "One file for every student", body: "The enquiry, documents, fees, visa dates and every message. Kept together and found in seconds." },
      { icon: "workflow", title: "No new software for your staff", body: "Your office keeps its email, WhatsApp and school software. The system works quietly behind them." },
      { icon: "scale", title: "A person always decides", body: "It answers, collects and reminds. Who gets a place, what a family pays and every grade stay with your people." },
    ],
  },

  agents: {
    label: "Your AI admissions office",
    title: "Three AI agents. Trained on your school. Working when your office is closed.",
    intro: "They chat on WhatsApp, email and your website, and they call. Each one knows your courses, fees, term dates and how your school talks. Teaching and decisions stay with your staff.",
    note: "They answer, collect and remind. They never give visa advice and never decide on a place, a grade or a refund. A person on your team can take over any chat or call.",
    items: [
      {
        name: "Admissions agent",
        title: "Answers every enquiry.",
        points: [
          "Replies to students, parents and agencies on WhatsApp, email, your website and the phone, day or night.",
          "Answers in their language, from your own courses, prices and term dates.",
          "Books the tour, the trial lesson or the call with admissions in the right diary.",
        ],
        channels: ["WhatsApp", "Voice calls", "Email", "Website"],
        result: "No family waits until Monday",
      },
      {
        name: "Student file agent",
        title: "Completes every student file.",
        points: [
          "Sends each student or parent a private link and a clear list of what to send.",
          "Reads, names and files every passport, form, school record and insurance policy.",
          "Messages or calls when something is missing, unreadable or about to expire.",
        ],
        channels: ["Private link", "WhatsApp", "Voice calls"],
        result: "Complete files, nobody chasing",
      },
      {
        name: "Fees and dates agent",
        title: "Watches every date and every euro.",
        points: [
          "Tracks term dates, arrival days, visa and permit expiries and fee due dates.",
          "Tells the right person weeks ahead, then again, then the director.",
          "Calls or messages students and parents about what is due, and books the next step.",
        ],
        channels: ["Voice calls", "WhatsApp", "Your calendar"],
        result: "Nothing late, nothing unpaid",
      },
    ],
  },

  jobs: {
    label: "Everything it does",
    title: "One system. Twenty jobs done for your school.",
    items: [
      { icon: "chat", title: "Answers every enquiry, day or night", body: "Students, parents and agencies get a full answer on WhatsApp, email, your website or the phone, in their own language.", gain: "No student lost to a faster school" },
      { icon: "refresh", title: "Wakes up old enquiries", body: "Old quotes, the waiting list, past students and agencies that went quiet. It writes to each one with something that fits today.", gain: "Students you already paid to find" },
      { icon: "folder", title: "Collects and checks every document", body: "Passports, forms, school records, proof of funds and insurance. Each student is told exactly what is missing.", gain: "Every file complete before the deadline" },
      { icon: "calendar", title: "Books tours, open days and trial lessons", body: "Finds a time that suits the family, confirms it, reminds them and moves it when plans change.", gain: "Fuller open days, fewer no-shows" },
      { icon: "euro", title: "Quotes from your own price list", body: "Course, accommodation, transfers and extras, for one student, a family or a whole group.", gain: "Agencies get your quote first" },
      { icon: "phone", title: "Picks up the phone while you teach", body: "When you are in class, the voice agent answers your number, books the trial lesson and messages you the details.", gain: "No missed call, no missed student" },
      { icon: "card", title: "Chases unpaid fees", body: "Polite reminders before the due date and firmer ones after, by message or by phone, with a link to pay.", gain: "Fees in on time, no awkward calls" },
      { icon: "pen", title: "Drafts letters from your templates", body: "Acceptance letters, booking confirmations, invoices and replies, in your school’s wording, ready for staff to approve.", gain: "Hours of typing, gone" },
      { icon: "clock", title: "Watches visa and permit dates", body: "Reads the expiry date from every visa and residence card, and reminds the student and your office weeks ahead.", gain: "Every expiry seen weeks ahead" },
      { icon: "plane", title: "Runs arrival day", body: "Airport pickup, room details, first-day instructions and the placement test, sent before the student lands.", gain: "Nobody lost at the airport" },
      { icon: "book", title: "Answers parents’ everyday questions", body: "Term dates, uniforms, buses, clubs and the absence policy, straight from your own handbook.", gain: "Fewer calls to the school office" },
      { icon: "users", title: "Tells parents about absences", body: "When a pupil is marked absent with no reason given, it messages the parent at once and tells the office who has not replied.", gain: "Parents know the same morning" },
      { icon: "check", title: "Collects consent forms", body: "Trips, photos and activities. Parents sign on their phone, and you see at a glance who has not.", gain: "Every form signed before the trip" },
      { icon: "link", title: "Keeps agencies up to date", body: "Availability, group bookings, brochures and commission statements, in each agency’s language.", gain: "Agencies send you the next group" },
      { icon: "building", title: "Matches rooms and host families", body: "Uses your own list and each student’s age, dates and diet. Your team makes the final choice.", gain: "No last-minute room scramble" },
      { icon: "repeat", title: "Runs re-enrolment", body: "Asks every family about next year, chases the forms and the deposit, and tells you early who is leaving.", gain: "Next year’s numbers, early" },
      { icon: "trending", title: "Gets your school found on Google and in AI answers", body: "SEO for Google, plus the work that helps ChatGPT and Gemini recommend your school.", gain: "Families find you first" },
      { icon: "userPlus", title: "Asks for reviews at the right moment", body: "At the end of a course or a term, it asks students and parents for a review and a referral.", gain: "More reviews, more word of mouth" },
      { icon: "chart", title: "Shows which agencies and ads bring students", body: "Which countries, agencies, ads and pages bring enquiries, and which ones turn into students.", gain: "Spend where students come from" },
      { icon: "sun", title: "Briefs the director every morning", body: "New enquiries, tours booked, files missing a document, fees overdue and who arrives next.", gain: "The whole school, before the first bell" },
    ],
  },

  spotlights: [
    {
      label: "Parents",
      title: "Parents write at night. Now they get an answer.",
      points: [
        "It replies on WhatsApp, email, your website and the phone, in the parent’s language.",
        "It answers from your own fees, term dates, bus routes and handbook, and passes anything else to your office.",
        "It books the tour and reminds the family the day before.",
      ],
      visual: {
        type: "chat",
        initials: "SW",
        name: "Sarah W.",
        origin: "Website chat · new family",
        status: "Answered",
        messages: [
          { from: "in", text: "Hi, we move to Malta in August. Do you have a Year 4 place for September?", time: "21:40" },
          { from: "out", text: "Welcome, Sarah. Year 4 has two places left. I’ve sent the fees and the bus routes. Would you like a tour?", time: "21:40" },
          { from: "in", text: "Yes please. We’re in Malta next week.", time: "21:43" },
          { from: "out", text: "Ms Vella can show you around on Thursday or Friday. Which suits you?", time: "21:43" },
        ],
        slots: ["Thu 09:30", "Fri 14:00"],
        done: { before: "Tour booked with Ms Vella · ", strong: "Thu 09:30", after: " · family reminded the day before" },
      },
    },
    {
      label: "Old enquiries",
      title: "Last year’s enquiries are this year’s students.",
      points: [
        "Every morning it gives your office a list of the people most likely to enrol now, and why.",
        "It looks at old quotes, the waiting list, past students and agencies that went quiet.",
        "The voice agent calls or writes to each one and books the ones who say yes.",
      ],
      visual: {
        type: "rows",
        title: "Today’s call list",
        hint: "Ranked by how likely they are to enrol",
        action: "call",
        rows: [
          { badge: "94", top: true, title: "Pace family · waiting list, Year 2", detail: "A Year 2 place opened yesterday. They asked in May." },
          { badge: "88", title: "Ahmed K. · Diploma in Hospitality", detail: "Asked last year. The February intake opens next week." },
          { badge: "81", title: "Lukas M. · past student", detail: "Studied with you in 2025. Opened your Business English email twice." },
          { badge: "76", title: "Agency in Kraków · group of 10", detail: "Asked for a July quote last March. Never booked." },
        ],
      },
    },
    {
      label: "Visas & permits",
      title: "No visa runs out by surprise.",
      points: [
        "It reads the expiry date from every visa and residence card the day it arrives.",
        "It reminds the student and your office early, then again, then the director.",
        "It gets the forms ready. Your staff check them, and Identità decides.",
      ],
      visual: {
        type: "timeline",
        title: "Visa extension · M. Demir",
        subtitle: "Visa ends 14 February 2027",
        steps: [
          { when: "Day −60", title: "Student told what is needed", detail: "Checklist and a private upload link sent on WhatsApp." },
          { when: "Day −50", title: "Documents in and checked", detail: "4 of 5 are fine. The bank letter was asked for again." },
          { when: "Day −40", title: "Forms ready for your office", detail: "Waiting for Rebecca to check.", key: true, tag: "Ready to check" },
          { when: "Day −38", title: "Sent after Rebecca’s check", detail: "Student told the same minute." },
          { when: "Decision", title: "Identità decides, student updated", detail: "The new date is saved and the next reminder is set." },
        ],
      },
    },
    {
      label: "Tuition and training",
      title: "You teach. It picks up the phone.",
      points: [
        "When you are in a lesson, the voice agent answers your number.",
        "It knows your subjects, levels, times and fees, and books the trial lesson.",
        "You get the details by message, ready for when the lesson ends.",
      ],
      visual: {
        type: "chat",
        initials: "MF",
        name: "Maria F.",
        origin: "Voice call · 1 min 52 sec",
        status: "Answered",
        messages: [
          { from: "out", text: "Hello, thanks for calling. I’m the centre’s AI assistant. How can I help?", time: "16:05" },
          { from: "in", text: "My daughter is in Form 4. Do you have maths lessons on Saturday mornings?", time: "16:05" },
          { from: "out", text: "Yes, two small Form 4 groups. The first lesson is a free trial. Which time suits her?", time: "16:06" },
          { from: "in", text: "The earlier one, please.", time: "16:06" },
        ],
        slots: ["Sat 10:00", "Sat 11:30"],
        done: { before: "Trial booked · ", strong: "Sat 10:00", after: " · details sent to you by message" },
      },
    },
    {
      label: "Ask anything",
      title: "Ask it like you’d ask your best school secretary.",
      points: [
        "Type a question in plain words. The answer comes from your own records, with a link to each one.",
        "No end-of-term spreadsheets. No waiting for someone to look it up.",
      ],
      visual: {
        type: "ask",
        questions: [
          { q: "Who arrives this Sunday?", summary: "42 students arrive this Sunday. 40 are fully confirmed.", rows: [["Junior group · agency in Turin", "14 students · all confirmed"], ["Adults · single bookings", "26 students · all confirmed"], ["M. Okafor", "Flight details missing · asked"], ["L. Novak", "Host family to confirm"]] },
          { q: "Which fees are overdue?", summary: "€6,840 is overdue on 7 accounts. Each one has had a reminder.", rows: [["Grech family · Term 2", "€1,450 · call booked for 10:00"], ["T. Schmid · course and host family", "€1,280 · link sent twice"], ["Agency in Munich · group deposit", "€2,100 · 9 days late"], ["+ 4 more", "€2,010"]] },
          { q: "Which visas end before March?", summary: "9 students have a visa ending before March. 6 are staying on, and their paperwork has started.", rows: [["M. Demir", "14 Feb · staying on · ready to check"], ["L. Wang", "21 Feb · staying on · 1 document missing"], ["S. Tran", "26 Feb · course ends, flying home"], ["+ 6 more", "See all"]] },
          { q: "Who is on the waiting list?", summary: "23 families are waiting. 3 places opened this week.", rows: [["Year 1", "8 families · 1 place opened"], ["Year 2", "6 families · 1 place opened"], ["Year 5", "5 families"], ["Year 7", "4 families · 1 place opened"]] },
        ],
      },
    },
  ],

  areas: {
    label: "Every kind of school",
    title: "Whatever you teach, the office work looks the same.",
    intro: "Every school answers enquiries, collects documents, chases fees and watches dates. The system does those. Your people teach and decide.",
    colA: "Your work",
    colB: "The system does",
    colC: "Your staff do",
    items: [
      { name: "English language schools", system: "Answers students and agencies in their language, quotes courses and rooms, confirms bookings, runs arrivals and starts visa paperwork early.", you: "Teach, welcome and approve every letter." },
      { name: "Junior and summer courses", system: "Collects parent consent forms, matches host families from your list and keeps parents and group leaders updated every day.", you: "Choose the families and keep children safe." },
      { name: "Private and independent schools", system: "Answers parents, books tours, runs the waiting list and re-enrolment, and sends fee reminders.", you: "Offer the places and know the families." },
      { name: "Kindergartens and early years", system: "Answers parents, books visits, keeps the waiting list and collects every form before the first day.", you: "Decide who joins and settle each child in." },
      { name: "Tuition and exam prep", system: "Answers the phone while you teach, books trial lessons, fills groups and chases term fees.", you: "Teach." },
      { name: "Music, sport and activity academies", system: "Handles enquiries, trial sessions, timetables, kit lists and fee reminders for every group.", you: "Coach and teach." },
      { name: "Colleges and higher education", system: "Answers applicants and agencies, checks every document, drafts acceptance letters and tracks intakes and permit dates.", you: "Decide who you accept." },
      { name: "Professional and corporate training", system: "Fills courses, sends joining instructions, invoices companies and sends end-of-course letters.", you: "Run the training." },
    ],
  },

  wins: {
    label: "Your students and parents feel it first",
    title: "Their win is your win.",
    items: [
      { title: "Answered while they’re still deciding.", body: "A parent writes at 10 pm with three schools open in three tabs. Yours replies first, with real fees and a tour time." },
      { title: "One list. Sent once.", body: "Students get one clear list of what to send. They send it from their phone, and nobody asks for the same paper twice." },
      { title: "Met at the airport, not lost in it.", body: "Before they land, students know who meets them, where they sleep and where to be on Monday morning." },
    ],
  },

  live: {
    label: "How it starts",
    h2Before: "We set it up for you in",
    h2Em: "72 hours.",
    body: "We come in, connect your tools and set the whole thing up. Nothing new for your staff to learn.",
    steps: [
      { when: "Today", title: "A 20-minute call", body: "About how your school works and where enquiries get lost." },
      { when: "72 hours", title: "Your first system is live", body: "Usually: every enquiry on your WhatsApp, email and website answered, day or night." },
      { when: "Week 2", title: "Your school data connected", body: "Courses, prices, term dates, student files and fees in one place." },
      { when: "Every week", title: "It grows with you", body: "It learns your school, and the next job goes live." },
    ],
  },

  ways: {
    label: "Start where you want",
    title: "One job or the whole school. You choose.",
    items: [
      { title: "Fix one job", body: "Pick the one thing that eats the most hours and we automate just that.", example: "Example: answer every enquiry at night and at weekends." },
      { title: "Plug into what you use", body: "Keep your school software, email and accounts package. We connect to them.", example: "Example: a confirmed booking lands in your school software by itself." },
      { title: "The full system", body: "Everything on this page, built around your school, customised and looked after by us.", example: "Example: enquiries, documents, fees, visas and arrivals in one place." },
      { title: "Not sure yet?", body: "Most schools aren’t. We look at your week and show you where students and hours slip away.", example: "Free. Takes 20 minutes." },
    ],
  },

  offer: {
    label: "Limited-time offer",
    title: "Your first month is free.",
    body: "We set it up in 72 hours and run it with you for a month. You see the enquiries answered, the files completed and the hours it gives back, in your own school first.",
    cta: "Claim your free month",
    secondaryCta: "Book a 20-minute call",
    listLabel: "What you get",
    items: [
      { strong: "First month free.", rest: "See it work on your own enquiries before you decide." },
      { strong: "Set up for you in 72 hours.", rest: "We connect your WhatsApp, email and website. Your staff change nothing." },
      { strong: "It is your system.", rest: "Built around your school, with your courses, prices and way of working." },
      { strong: "Run by us.", rest: "We customise it, look after it and improve it every week." },
      { strong: "Start small.", rest: "One job first. Add the next only when the first has paid for itself." },
    ],
  },

  calc: {
    label: "Your numbers",
    title: "What a slow reply costs your school.",
    mode: "percent",
    inputs: [
      { label: "Enquiries a year", value: 600 },
      { label: "Extra enquiries that become students (%)", value: 5, max: 100 },
      { label: "Average fees per student (€)", value: 1800 },
    ],
    out1: "Students you could add each year",
    out2: "Fees you could add each year",
    footnote: "Assumes that answering first, with real fees and dates, turns a small share of the enquiries you lose today into students. The starting numbers are a guide, not industry figures, so change the numbers to match your school.",
  },

  trust: {
    label: "You stay in charge",
    title: "It prepares. Your school decides.",
    items: [
      { icon: "eye", title: "Your staff decide. Always.", body: "Places, fees, grades and refunds are decided by your head, registrar or admissions team. Identità decides visas and permits. The system never gives visa advice." },
      { icon: "lock", title: "Student and parent details stay private", body: "Each school gets its own private system. Details are only used for your school and are handled under GDPR. You decide what it collects, and parents can always ask for a person." },
      { icon: "book", title: "Answers come from your own handbook", body: "Fees, dates and rules come from your price list, calendar and handbook. Every message is logged, so you can see what it said and why." },
      { icon: "users", title: "A team in Malta", body: "OARC’s team in Birkirkara sets it up, teaches it your courses and fees, and picks up the phone." },
    ],
  },

  facts: {
    label: "Why now",
    title: "New students every week. A rush every summer.",
    items: [
      { n: "76,063", l: "Foreign students took English courses in Malta in 2025. The average stay was 3.4 weeks.", src: { label: "Malta Tourism Authority, 2025", href: "https://cms.mta.com.mt/api/media/file/The%20English%20Language%20Travel%20Market%20in%20Malta%202025.pdf" } },
      { n: "32.4%", l: "Of English language students came in July and August, not counting online courses. Two months, nearly a third of the year’s students.", src: { label: "Malta Tourism Authority, 2025", href: "https://cms.mta.com.mt/api/media/file/The%20English%20Language%20Travel%20Market%20in%20Malta%202025.pdf" } },
      { n: "1,044", l: "Non-EU students on English courses asked for a visa extension in 2025. Every one is paperwork with a date.", src: { label: "ELT Council Annual Report 2025", href: "https://eltcouncil.gov.mt/wp-content/uploads/2026/04/ELT-Council-Annual-Report-2025.pdf" } },
    ],
  },

  faq: [
    { q: "What is it, exactly?", a: "One AI system built around your school. It answers students, parents and agencies, books tours and trial lessons, collects and checks documents, watches visa, permit and fee dates, chases what is unpaid and runs arrival days. OARC’s team in Malta sets it up and runs it with you." },
    { q: "Does it give visa advice or decide admissions?", a: "No. It collects the documents, checks nothing is missing and keeps track of the dates. Identità decides visas and permits. Your staff decide who gets a place, what you charge and any refund." },
    { q: "Will it replace our teachers or office staff?", a: "No. It takes the repeat questions, the chasing and the form-filling, so your teachers teach and your office has time for the people in front of them." },
    { q: "Is student and parent data kept private?", a: "Yes. Each school has its own private system. Students’ and parents’ details are only used for your school, are never mixed with another school’s and are handled under GDPR. Your school decides what is collected and who sees it, and a parent can ask for a person at any time." },
    { q: "Does it work with our school software?", a: "Yes. We connect it to the school management, booking, accounts and email software you already use. If no connection exists, we build one." },
    { q: "Can it do just one thing?", a: "Yes. You can start with one job, such as answering parents and students at night and at weekends, and add the next when the first has paid for itself." },
    { q: "How fast is it live?", a: "We set up your first system in 72 hours, usually answering every student, parent and agency on your WhatsApp, email and website. The rest is connected over the following weeks." },
    { q: "Do the AI agents call parents and students?", a: "Yes. A voice agent calls about missing documents, unpaid fees, tours and arrival details, and books the next step. It says it is your school’s AI assistant, it never gives visa advice, and a person on your team can take over any call." },
    { q: "Will parents mind talking to an AI?", a: "It tells them it is your school’s AI assistant and answers straight away, at any hour. Anything sensitive goes to your staff, and a parent can ask for a person at any time." },
    { q: "Can it reply in our students’ languages?", a: "Yes. It writes back in the language a student, parent or agency uses, from your own courses, prices and dates. Every message is logged, so your staff can read any conversation." },
    { q: "What if it gets something wrong?", a: "It answers from your own price list, calendar and handbook, and anything sensitive goes to your staff first. Every message and action is logged, so you can see what it said and why. If something needs changing, OARC’s team in Malta changes it." },
    { q: "How much does it cost?", a: "Right now the first month is free. After that it depends on your school’s size and what you switch on. Ask us and we price it for your school." },
    { q: "Who can get a student permit in Malta?", a: "Students from outside the EU who are accepted by a licensed institution for a full-time course leading to a higher education qualification. Their passport or travel document must be valid for at least six months when they apply, and the fee is €50. Students who can enter without a visa must apply within three months of arriving. Identità decides each application." },
    { q: "How many students come to Malta to learn English?", a: "In 2025, 76,063 foreign students took English courses at Malta’s licensed language schools, for 3.4 weeks on average. Italy sent the most, 17,526, and July and August alone brought 32.4% of them, not counting online courses." },
    { q: "Who licenses private schools in Malta?", a: "Private kindergartens, primary and secondary schools need a licence from the Directorate for Quality and Standards in Education (DQSE), under the Education Act (Cap. 605). Further education institutions are licensed by the Malta Further and Higher Education Authority (MFHEA). English language schools and their annexes are licensed by the ELT Council." },
  ],

  cta: {
    titleBefore: "A family is choosing a school tonight.",
    titleEm: "Be the one that answers.",
    body: "Claim your free first month. We set it up for you in 72 hours.",
    button: "Claim your free month",
    secondary: "Book a 20-minute call",
  },

  sources: [
    { label: "Malta Tourism Authority: The English Language Travel Market in Malta, 2025", href: "https://cms.mta.com.mt/api/media/file/The%20English%20Language%20Travel%20Market%20in%20Malta%202025.pdf" },
    { label: "ELT Council Annual Report 2025", href: "https://eltcouncil.gov.mt/wp-content/uploads/2026/04/ELT-Council-Annual-Report-2025.pdf" },
    { label: "Identità: residence permits for study", href: "https://identita.gov.mt/expatriates-unit-main-page/noneu-nationals/non-employment-permits/study-research-trainees-volunteers-interns/" },
    { label: "Eurydice: private education in Malta", href: "https://eurydice.eacea.ec.europa.eu/eurypedia/malta/organisation-private-education" },
  ],
  related: [
    { label: "Marketing for schools in Malta", href: "/industries/education" },
    { label: "Voice AI for schools", href: "/voice-ai-worker/education" },
    { label: "AI admin agent", href: "/services/ai-admin-agent" },
    { label: "AI for business admin", href: "/ai/business-admin" },
  ],
  disclaimer: "OARC Digital · Malta. OARC Digital is not an immigration adviser and does not give visa or legal advice. Names and figures on the screens are from a demo account.",
};
