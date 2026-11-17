import type { AiSystemContent } from "./types";

export const clinics: AiSystemContent = {
  slug: "clinics",
  name: "Clinics and private hospitals",
  barLabel: "Clinic AI",
  business: "clinic",
  metaTitle: "AI for Clinics in Malta | Clinic Automation | OARC Digital",
  metaDescription:
    "The AI system built around your clinic in Malta. It answers patients day and night, fills cancelled slots, books check-ups and files letters. Doctors decide.",
  updated: "2026-11-16",
  serviceType: "AI system and front-desk automation for clinics and private hospitals",
  schemaDescription:
    "An AI system built around each clinic and private hospital in Malta that answers patients 24/7, books and moves appointments, fills cancelled slots from the waitlist, runs recalls and reminders, collects forms, files letters and results, drafts letters for doctors to sign and checks in after treatment. It never gives medical advice: a doctor or nurse makes every clinical decision. Set up and run by OARC Digital's team in Malta.",
  hub: {
    title: "Clinics and private hospitals",
    body: "Every patient answered, day and night. Cancelled slots refilled and check-ups booked. Anything clinical goes to your doctors.",
    gain: "GP, dental, specialists, physio and hospitals",
  },

  lightAreas: true,

  hero: {
    pill: "We set it up for you in 72 hours",
    kicker: "Finally, you have",
    h1Before: "One complete AI system built around",
    h1Highlight: "your clinic.",
    sub: "AI agents trained on your clinic answer every patient, fill cancelled slots and book check-ups. The system collects the forms, files every result and checks in after treatment. Every clinical decision stays with your doctors and nurses.",
    primaryCta: "Claim your free month",
    secondaryCta: "Book a 20-minute call",
    note: "First month free. Set up and run by OARC’s team in Malta.",
  },

  film: {
    title: "Watch one patient, from first message to the doctor’s decision",
    scenes: [
      {
        clock: "Tuesday · 21:42",
        caption: "A new patient writes long after your clinic has closed.",
        result: "Booked in under a minute",
        visual: {
          type: "chat",
          initials: "ER",
          name: "Elena R.",
          origin: "WhatsApp · new patient",
          status: "Booked",
          messages: [
            { from: "in", text: "Hi, a mole on my shoulder looks different. Can a skin doctor see me this week?", time: "21:42" },
            { from: "out", text: "Good evening Elena. Dr Vella can see you on Thursday at 16:20 or Friday at 09:00. Which suits you?", time: "21:42" },
            { from: "in", text: "Thursday at 16:20, please. Can I fill in the form in Italian?", time: "21:43" },
          ],
          done: { before: "Booked with Dr Vella · ", strong: "Thu 16:20", after: " · form sent in Italian" },
        },
      },
      {
        clock: "Tuesday · 21:58",
        caption: "She sends her form and insurance card from her phone, and each one is filed.",
        result: "No clipboard at reception",
        visual: {
          type: "rows",
          title: "E. Rossi · Thu 16:20 · Dr Vella",
          hint: "Sent from her phone, 21:58",
          action: "tag",
          rows: [
            { badge: "PDF", title: "Patient form", detail: "Filled in Italian. Allergies flagged for Dr Vella.", tag: "Filed" },
            { badge: "JPG", title: "Insurance card", detail: "Policy number read and saved to her file.", tag: "Filed" },
            { badge: "–", top: true, title: "GP referral", detail: "Her insurer needs one. Elena was asked to bring it.", tag: "Asked" },
          ],
        },
      },
      {
        clock: "Friday · 09:10",
        caption: "The day after her procedure, the AI calls to check on her.",
        result: "The doctor decides. Nobody waits.",
        visual: {
          type: "timeline",
          title: "Check-in call · E. Rossi",
          subtitle: "After Thursday’s procedure with Dr Vella",
          steps: [
            { when: "09:10", title: "“How are you feeling today?”", detail: "Elena says the wound is still bleeding a little." },
            { when: "09:11", title: "Dr Vella alerted at once", detail: "No advice given. The call notes went straight to the doctor.", key: true, tag: "Doctor decides" },
            { when: "09:16", title: "Dr Vella calls her back", detail: "Booked in for 11:30 today. Confirmed to Elena in Italian." },
          ],
        },
      },
    ],
  },

  dashboard: {
    title: "Every patient and every slot, on one screen.",
    body: "Every morning: who booked overnight, which slots are empty and what is waiting for a doctor.",
    org: "Your Clinic",
    search: "Ask anything… “Who is overdue a check-up?”",
    initials: "CB",
    nav: [
      { label: "Today" }, { label: "Messages", badge: "9" }, { label: "Diary" }, { label: "Patients" },
      { label: "Recalls" }, { label: "Letters & results" }, { label: "Billing" }, { label: "Reports" },
    ],
    greeting: "Good morning, Claire",
    status: "Running · every patient answered overnight",
    kpis: [
      { label: "Patients booked overnight", value: "14", note: "WhatsApp, website and calls" },
      { label: "Cancelled slots refilled", value: "5 of 6", note: "From the waitlist" },
      { label: "Check-ups booked this week", value: "38", note: "From recall messages" },
      { label: "Not confirmed for tomorrow", value: "4", note: "Being called now", alert: true },
    ],
    todoTitle: "Needs you today",
    todos: [
      { initials: "ER", title: "Worry flagged · E. Rossi", detail: "Bleeding after Thursday’s procedure. Dr Vella called her at 09:16.", tag: "Handled", on: true },
      { initials: "JG", title: "Referral letter · J. Galea", detail: "Drafted from Dr Zammit’s notes. Waiting for his signature.", tag: "Sign" },
      { initials: "MB", title: "Insurer pre-approval · M. Borg", detail: "Form filled in. The GP letter is still missing.", tag: "Waiting" },
      { initials: "AM", title: "Google review · Anna M., 5 stars", detail: "Reply drafted. It does not confirm she is a patient.", tag: "Approve" },
    ],
    chartTitle: "Booked while you were closed",
    bars: [
      { label: "Mon", h: 58 }, { label: "Tue", h: 72 }, { label: "Wed", h: 49 }, { label: "Thu", h: 66 },
      { label: "Fri", h: 81 }, { label: "Sat", h: 64 }, { label: "Sun", h: 100 },
    ],
    chartFoot: { label: "Bookings after hours this week", value: "41" },
    chatFloat: {
      channel: "WhatsApp · patient",
      time: "07:12",
      incoming: "Hi, can I move my cleaning on Friday? Something came up at work.",
      reply: "Of course, Luke. Dr Grech has Tuesday at 08:40 or Wednesday at 17:20. Which suits you?",
      receipt: "Replied in 30 sec · visit moved",
    },
    alertFloat: {
      label: "Waitlist · just now",
      title: "Cancelled slot filled",
      detail: "Thu 10:00 with Dr Zammit. Cancelled at 07:41, filled at 07:44.",
      tag: "Filled from waitlist",
    },
  },

  worksWith: ["Your booking system", "Your practice software", "WhatsApp", "Phone calls", "Outlook & Gmail", "Excel & Google Sheets", "Facebook & Instagram", "Google Business Profile"],

  pillars: {
    label: "Built around your clinic",
    title: "Your clinic. Your patients. Your way of working.",
    items: [
      { icon: "folder", title: "Every patient file in one place", body: "Forms, referral letters, results, scan reports and insurer papers. Filed to the right patient and found in seconds." },
      { icon: "workflow", title: "Works inside the tools you use", body: "Reception keeps the booking system and phones it knows. The system works quietly behind them." },
      { icon: "shield", title: "A doctor always decides", body: "It books, reminds and prepares. Anything clinical goes to a nurse or doctor, and the decision is theirs." },
    ],
  },

  agents: {
    label: "Your AI reception",
    title: "Three AI agents. Trained on your clinic. Doctors still decide.",
    intro: "They chat on WhatsApp and your website, and they call. Each one knows your doctors, your services, your hours and your booking rules. Anything clinical goes straight to a person.",
    note: "They book, remind and collect. They never diagnose and never advise. A nurse or doctor can take over any chat or call.",
    items: [
      {
        name: "Front-desk agent",
        title: "Answers every patient, day and night.",
        points: [
          "Replies on WhatsApp, your website, Facebook and the phone in under a minute, in the patient’s language.",
          "Books, moves and cancels visits in the right doctor’s diary, by your clinic’s rules.",
          "Hands pain, bleeding, swelling or breathing worries to a person at once.",
        ],
        channels: ["WhatsApp", "Voice calls", "Website", "Facebook & Instagram"],
        result: "No patient goes to the next clinic",
      },
      {
        name: "Recall agent",
        title: "Fills the diary and brings patients back.",
        points: [
          "Works through your overdue check-ups, follow-ups and treatment plans not yet booked.",
          "Offers every cancelled slot to your waitlist the same minute.",
          "Messages first, then calls the patients who don’t reply, and books the visit.",
        ],
        channels: ["WhatsApp", "Voice calls", "SMS", "Email"],
        result: "Fewer empty slots, every week",
      },
      {
        name: "Check-in agent",
        title: "Gets every patient ready, and checks in after.",
        points: [
          "Sends forms and the prep notes your doctors approved, and collects what is missing.",
          "Reads referral letters, results and insurer papers, and files each one to the right patient.",
          "Calls or messages after treatment. Any worry goes to the doctor or nurse at once.",
        ],
        channels: ["WhatsApp", "Voice calls", "Email", "Private link"],
        result: "Nobody lost after the visit",
      },
    ],
  },

  jobs: {
    label: "Everything it does",
    title: "One system. Nineteen clinic jobs done for you.",
    items: [
      { icon: "chat", title: "Answers every patient, day and night", body: "WhatsApp, your website, Facebook and the phone. It finds the right doctor and books the visit, in the patient’s language.", gain: "No patient lost after closing time" },
      { icon: "calendar", title: "Keeps the diary full", body: "Books, moves and cancels by your clinic’s rules. A cancelled slot goes to your waitlist the same minute.", gain: "Fewer empty slots" },
      { icon: "refresh", title: "Brings patients back for check-ups", body: "Six-month check-ups, yearly checks and follow-ups. A kind reminder first, then a booking in the right diary.", gain: "Recalls that run themselves" },
      { icon: "clock", title: "Cuts no-shows", body: "Reminders patients answer in one tap: confirm, move or cancel. No reply means a friendly call.", gain: "Fewer empty chairs" },
      { icon: "phone", title: "Calls the patients who don’t reply", body: "A voice agent rings patients who missed a message, to confirm, move or book a visit.", gain: "No more phone tag" },
      { icon: "file", title: "Collects forms before the visit", body: "History forms, insurance details and anything to read before a procedure, done at home on the phone.", gain: "No clipboard at reception" },
      { icon: "inbox", title: "Files every letter and result", body: "Referral letters, lab results, scan reports and insurer papers, read and filed to the right patient.", gain: "No scanning pile" },
      { icon: "card", title: "Checks insurance before the visit", body: "Reads the policy details, notes what the insurer asks for and requests any missing referral.", gain: "Fewer claim surprises" },
      { icon: "eye", title: "Checks in after treatment", body: "A message or a call the day after a procedure. Any worry word goes to the doctor or nurse at once.", gain: "Patients feel looked after" },
      { icon: "pen", title: "Drafts letters for the doctor to sign", body: "Referral letters, insurer reports and sick notes, drafted from the doctor’s notes in their own style.", gain: "Letters out the same day" },
      { icon: "book", title: "Answers the everyday questions", body: "Opening hours, parking, what to bring and the fees you publish. Always from your clinic’s own information.", gain: "Fewer calls on hold" },
      { icon: "languages", title: "Speaks your patients’ languages", body: "It replies in the language each patient writes in, so residents and visitors are understood.", gain: "Understood the first time" },
      { icon: "plane", title: "Looks after patients from abroad", body: "Travel dates, documents and the quote request, gathered before the doctor’s first call.", gain: "One clear plan before they fly" },
      { icon: "receipt", title: "Sends receipts and chases payments", body: "Itemised receipts for every paid visit, polite reminders for unpaid bills and payments matched to invoices.", gain: "Money in, on time" },
      { icon: "trending", title: "Gets your clinic found on Google and in AI answers", body: "SEO for Google, plus the work that helps ChatGPT and Gemini recommend your clinic.", gain: "New patients find you first" },
      { icon: "users", title: "Drafts replies to reviews", body: "A warm reply to every Google review, ready for you to approve. It never confirms who is a patient.", gain: "Every review answered" },
      { icon: "folder", title: "Keeps clinic and staff records ready", body: "Staff records, fire drills and equipment checks, logged and reminded before they are due.", gain: "Records ready when asked" },
      { icon: "chart", title: "Shows how the clinic is doing", body: "Visits, no-shows, new patients and where they came from, every week, with no report to build.", gain: "Know what’s working" },
      { icon: "sun", title: "Briefs the team every morning", body: "Today’s gaps, unconfirmed patients, results waiting for a doctor and overdue recalls.", gain: "Start the day ready" },
    ],
  },

  spotlights: [
    {
      label: "Recalls",
      title: "Check-ups that book themselves.",
      points: [
        "It works through your list of patients due a check-up, a cleaning or a follow-up.",
        "It sends a kind reminder, then calls the ones who don’t reply.",
        "It books the visit in the right diary. Nobody at reception has to chase.",
      ],
      visual: {
        type: "chat",
        initials: "MC",
        name: "Mark C.",
        origin: "WhatsApp · check-up due",
        status: "Booked",
        messages: [
          { from: "out", text: "Hi Mark, this is the AI assistant at Dr Grech’s clinic. Your six-month check-up is due. Shall I book it?", time: "10:05" },
          { from: "in", text: "Yes please. A Saturday morning if you have one.", time: "10:21" },
          { from: "out", text: "Dr Grech has Saturday at 09:30 or 11:00. Which suits you?", time: "10:21" },
        ],
        slots: ["Sat 09:30", "Sat 11:00"],
        done: { before: "Check-up booked with Dr Grech · ", strong: "Sat 09:30", after: " · reminder set" },
      },
    },
    {
      label: "Waitlist",
      title: "A cancelled slot, filled before the doctor arrives.",
      points: [
        "A patient cancels at 07:41. The slot goes to your waitlist the same minute.",
        "The first to say yes gets it. The others are told kindly and keep their place.",
        "It remembers who lives in Gozo or works late, and offers times that suit them.",
      ],
      visual: {
        type: "rows",
        title: "Thu 10:00 · Dr Zammit · Mosta",
        hint: "Cancelled at 07:41",
        action: "tag",
        rows: [
          { badge: "01", top: true, title: "Joseph B. · waiting 9 days", detail: "Said yes at 07:44. Booked and reminded.", tag: "Booked" },
          { badge: "02", title: "Priya N. · waiting 6 days", detail: "Told kindly the slot is taken. Still on the list.", tag: "Waitlist" },
          { badge: "03", title: "Rita S. · lives in Gozo", detail: "Asked for after 11:00. Offered Friday at 11:30.", tag: "Offered" },
        ],
      },
    },
    {
      label: "Reminders",
      title: "Reminders patients can answer in one tap.",
      points: [
        "Every patient gets a reminder they can answer: confirm, move or cancel.",
        "No reply means a friendly call the day before.",
        "A cancelled visit goes straight back to your waitlist.",
      ],
      visual: {
        type: "timeline",
        title: "Check-up · Mark C. · Sat 09:30",
        subtitle: "With Dr Grech, booked 12 days ahead",
        steps: [
          { when: "Day −3", title: "Reminder on WhatsApp", detail: "Confirm, move or cancel, in one tap." },
          { when: "Day −1", title: "No reply, so a friendly call", detail: "The voice agent rang at 17:30. Mark confirmed.", key: true, tag: "Confirmed" },
          { when: "Day 0", title: "In the chair on time", detail: "Forms done at home. Straight in to Dr Grech." },
          { when: "After", title: "Next check-up saved", detail: "The next reminder is set for six months." },
        ],
      },
    },
    {
      label: "Letters",
      title: "Letters drafted. The doctor signs.",
      points: [
        "It drafts referral letters, insurer reports and sick notes from the doctor’s notes and your clinic’s templates.",
        "Anything clinical is left for the doctor. Nothing goes out unsigned.",
        "Once signed, each letter goes where it needs to go, the same minute.",
      ],
      visual: {
        type: "rows",
        title: "Waiting for Dr Zammit",
        hint: "Drafted from his notes and your templates",
        action: "tag",
        rows: [
          { badge: "01", top: true, title: "Referral letter · J. Galea", detail: "To an orthopaedic surgeon. Scan report attached.", tag: "Sign" },
          { badge: "02", title: "Insurer report · M. Borg", detail: "Visit dates and fees filled in from the diary.", tag: "Review" },
          { badge: "03", title: "Sick note · K. Farrugia", detail: "Name and visit date filled in. Days off left for you.", tag: "Sign" },
          { badge: "04", title: "Results letter · P. Azzopardi", detail: "Your template. What the results mean is for you to write.", tag: "Review" },
        ],
      },
    },
    {
      label: "Ask anything",
      title: "Ask it like you’d ask your best receptionist.",
      points: [
        "Type a question in plain words. The answer comes from your own diary and files.",
        "No reports to build. No “can you check the system for me?”",
      ],
      visual: {
        type: "ask",
        questions: [
          { q: "Who is overdue a check-up?", summary: "212 patients are overdue. Reminders have started for all of them.", rows: [["Over 12 months", "48 · calls this week"], ["9 to 12 months", "71 · messages sent"], ["6 to 9 months", "93 · messages sent"], ["Booked so far", "38 this week"]] },
          { q: "Which slots are still empty next week?", summary: "6 slots are still empty next week. The waitlist has been asked about every one.", rows: [["Mon 11:20 · Dr Zammit, Mosta", "Waitlist asked"], ["Tue 15:40 · Dr Vella, Sliema", "Waitlist asked"], ["Wed 09:00 · physio room, Sliema", "Offered to 3 patients"], ["Thu 17:00 · Dr Grech, Mosta", "Waitlist asked"], ["+ 2 more", "See all"]] },
          { q: "Who hasn’t confirmed for tomorrow?", summary: "4 patients haven’t confirmed yet. The voice agent is working through them now.", rows: [["Sarah F. · 09:00", "Calling now"], ["Daniel P. · 10:40", "Message read · call at 12:00"], ["Tom W. · 14:20", "Call at 12:30"], ["Maria D. · 16:00", "Asked to move · new time offered"]] },
          { q: "Which results are waiting for a doctor?", summary: "3 results are in and waiting for review.", rows: [["K. Farrugia · blood test", "Arrived Tuesday · Dr Zammit"], ["M. Borg · scan report", "Arrived today · Dr Zammit"], ["P. Azzopardi · lab results", "Arrived today · Dr Vella"], ["Patients told", "Their doctor will be in touch"]] },
        ],
      },
    },
  ],

  areas: {
    label: "Every kind of clinic",
    title: "From the GP’s room to the operating theatre.",
    intro: "Every clinic runs on bookings, forms, letters and reminders. The system does those. Your team gives the care.",
    colA: "Your work",
    colB: "The system does",
    colC: "You do",
    items: [
      { name: "GP and group practices", system: "Answers the phones and WhatsApp, books each doctor’s sessions, reminds patients about follow-ups and files every letter and result.", you: "See the patient and decide." },
      { name: "Dental", system: "Books check-ups and cleanings, recalls every patient on time, sends treatment plans and quotes, and follows up plans not yet booked.", you: "Plan and treat." },
      { name: "Specialists and consultants", system: "Takes in referrals, books first visits and follow-ups, checks insurer papers and drafts the letter back to the GP.", you: "Examine, decide and sign." },
      { name: "Physiotherapy", system: "Books the whole course of sessions, moves them when plans change and sends the exercise sheets your physios approved.", you: "Assess and treat." },
      { name: "Aesthetic clinics", system: "Books consultations and answers practical questions with wording you approved. It never promises results and never names a prescription medicine.", you: "Consult and decide what is right." },
      { name: "Private hospitals and day care", system: "Prepares admissions, sends the pre-op instructions your doctors approved, chases insurer pre-approval and checks in after discharge.", you: "Operate, treat and discharge." },
      { name: "Diagnostics and labs", system: "Books scans and tests, sends the preparation steps your team approved and tells patients when results are with their doctor.", you: "Read and report the results." },
    ],
  },

  wins: {
    label: "Your patients feel it first",
    title: "Their win is your win.",
    items: [
      { title: "An answer tonight, not tomorrow.", body: "A patient writes at 9 pm. They get a reply, a time and a doctor’s name. They stop searching for another clinic." },
      { title: "Forms done from the sofa.", body: "No clipboard in the waiting room. Patients fill in forms on their phone, in their own language, before they arrive." },
      { title: "Someone checks in after.", body: "The day after a procedure, a call asks how they are. Any worry reaches their doctor at once." },
    ],
  },

  live: {
    label: "How it starts",
    h2Before: "We set it up for you in",
    h2Em: "72 hours.",
    body: "We come in, connect your tools and set the whole thing up. Nothing new for your doctors or reception to learn.",
    steps: [
      { when: "Today", title: "A 20-minute call", body: "About how your clinic works and where patients slip through." },
      { when: "72 hours", title: "Your first system is live", body: "Usually: every patient message on WhatsApp and your website answered, day and night." },
      { when: "Week 2", title: "Your diary and files connected", body: "Patients, doctors, recalls and letters in one place." },
      { when: "Every week", title: "It grows with you", body: "It learns your clinic, and the next job goes live." },
    ],
  },

  ways: {
    label: "Start where you want",
    title: "One job or the whole clinic. You choose.",
    items: [
      { title: "Fix one job", body: "Pick the one thing that costs your clinic most and we automate just that.", example: "Example: answer every WhatsApp message after closing time." },
      { title: "Plug into what you use", body: "Keep your booking system, practice software and phone line. We connect to them.", example: "Example: visits booked at night land straight in your diary." },
      { title: "The full system", body: "Everything on this page, built around your clinic, customised and looked after by us.", example: "Example: messages, diary, recalls, forms, letters and aftercare in one place." },
      { title: "Not sure yet?", body: "That’s normal. We look at your week and show you where patients and hours slip away.", example: "Free. Takes 20 minutes." },
    ],
  },

  offer: {
    label: "Limited-time offer",
    title: "Your first month is free.",
    body: "We set it up in 72 hours and run it with you for a month. You see the messages answered, the slots refilled and the check-ups booked on your own clinic first.",
    cta: "Claim your free month",
    secondaryCta: "Book a 20-minute call",
    listLabel: "What you get",
    items: [
      { strong: "First month free.", rest: "See it work with your own patients before you decide." },
      { strong: "Set up for you in 72 hours.", rest: "We connect your WhatsApp, phones and booking system. You change nothing." },
      { strong: "It is your system.", rest: "Built around your clinic, your doctors and your booking rules." },
      { strong: "Run by us.", rest: "We customise it, look after it and improve it every week." },
      { strong: "Start small.", rest: "One job first. Add the next only when the first has paid for itself." },
    ],
  },

  calc: {
    label: "Your numbers",
    title: "What your empty slots cost.",
    mode: "times",
    factor: 48,
    inputs: [
      { label: "Doctors or therapists seeing patients", value: 4 },
      { label: "Slots each one loses a week", value: 3 },
      { label: "Average fee per visit (€)", value: 50 },
    ],
    out1: "Lost slots in a year",
    out2: "What those slots are worth at your fees",
    footnote: "Assumes 48 working weeks a year. Lost slots are no-shows and late cancellations. Not every slot can be refilled, so change the numbers to match your clinic.",
  },

  trust: {
    label: "You stay in charge",
    title: "It books and prepares. A doctor decides.",
    items: [
      { icon: "shield", title: "Doctors and nurses decide", body: "It never diagnoses, never advises and never promises results. Words like pain, bleeding, swelling or breathing go straight to a person." },
      { icon: "lock", title: "Patient files stay private", body: "Your clinic gets its own private system. Patient files are never mixed with another clinic’s and are handled under GDPR." },
      { icon: "check", title: "Only words you approved", body: "Reminders, prep notes and aftercare messages use wording your clinic signed off. Every message and call is logged." },
      { icon: "users", title: "A team in Malta", body: "OARC’s team in Birkirkara sets it up, teaches it your clinic’s booking rules and picks up the phone." },
    ],
  },

  facts: {
    label: "Why now",
    title: "Private care is big in Malta. So is the paperwork.",
    items: [
      { n: "30%", l: "Of all health spending in Malta was paid out of pocket by patients in 2021. One of the highest shares in the EU.", src: { label: "WHO Observatory, Malta health system summary 2024", href: "https://eurohealthobservatory.who.int/publications/i/malta-health-system-summary-2024" } },
      { n: "77.2%", l: "Of people aged 15 and over had seen a GP in the past year (2019/2020 survey). Primary care still relies heavily on the private sector.", src: { label: "Malta Medical Journal, 2025 (EHIS 2019/2020)", href: "https://www.um.edu.mt/library/oar/bitstream/123456789/135954/1/MMJ37%282%29A3.pdf" } },
      { n: "Twice a year", l: "Every licensed private hospital and day-care clinic must be inspected at least this often. Inspectors can ask to see registers and records.", src: { label: "S.L. 458.23, reg. 13", href: "https://legislation.mt/eli/sl/458.23/eng/pdf" } },
    ],
  },

  faq: [
    { q: "What is it, exactly?", a: "One AI system built around your clinic. It answers patients, books and fills the diary, brings patients back for check-ups, collects forms, files letters and results, drafts letters for your doctors and checks in after treatment. OARC’s team in Malta sets it up and runs it with you." },
    { q: "Does it give medical advice?", a: "No. It never diagnoses, never advises and never promises results. It books, reminds and collects. Anything clinical goes to a nurse or doctor, and every clinical decision stays with them." },
    { q: "What happens if a patient mentions pain or bleeding?", a: "It passes the patient to a person at once, following your clinic’s rules: the nurse on duty, the on-call doctor or reception. It gives no advice, and that person sees exactly what the patient said. If it could be an emergency, it sends only the emergency message your doctors wrote." },
    { q: "Will it replace our receptionists or nurses?", a: "No. It takes the repeat calls, reminders and form-chasing, so your people spend their time with the patients in front of them." },
    { q: "Is patient data kept private?", a: "Yes. Your clinic gets its own private system. Patient data is only used for your clinic and is handled under GDPR." },
    { q: "Does it work with our booking or practice software?", a: "Yes. We connect it to the booking system, practice software, phones and inboxes you already use. If no connection exists, we build one." },
    { q: "Can it do just one thing?", a: "Yes. You can start with one job, such as answering every WhatsApp message after closing time, and add the next when the first has paid for itself." },
    { q: "How fast is it live?", a: "We set up your first system in 72 hours. The rest is connected over the following weeks." },
    { q: "Do the AI agents call patients?", a: "Yes. A voice agent calls patients to confirm, move or book visits, works through your recall list and checks in after treatment. It never gives medical advice, and a nurse or doctor can take over any call." },
    { q: "What if it gets something wrong?", a: "Clinical wording only goes out after your clinic has approved it, and every message and call is logged. A person can take over any chat or call. If something needs changing, OARC’s team in Malta changes it." },
    { q: "How much does it cost?", a: "Right now the first month is free. After that it depends on your clinic’s size and what you switch on. Ask us and we price it for your clinic." },
    { q: "Is private healthcare common in Malta?", a: "Yes. In Malta’s 2019/2020 European Health Interview Survey, 77.2% of people aged 15 and over had seen a GP in the past year, and a 2025 study of the survey found primary care still relies heavily on the private sector. More people had seen a private specialist (25.6%) than a government one (18.4%). Patients pay for private care themselves or through private health insurance." },
    { q: "Do private hospitals and day-care clinics in Malta need a licence?", a: "Yes. They are licensed under the Licensing of Private Medical Clinics Regulations (S.L. 458.23), which do not cover a doctor’s own consulting room. A licence is only granted or renewed if the clinic meets those rules, and every licensed clinic must be inspected at least twice in every 12 months." },
    { q: "Can a clinic in Malta advertise prescription-only medicines?", a: "No. Under Malta’s Medicinal Products (Advertising) Regulations, prescription-only medicines may not be advertised to the general public. The Medicines Authority does not check adverts before they are published, and breaking the rules is an offence. The system only uses wording your clinic has approved and never promotes a prescription medicine." },
  ],

  cta: {
    titleBefore: "No patient left on hold.",
    titleEm: "Starting this week.",
    body: "Claim your free first month. We set it up for you in 72 hours.",
    button: "Claim your free month",
    secondary: "Book a 20-minute call",
  },

  sources: [
    { label: "WHO Observatory: Malta health system summary 2024", href: "https://eurohealthobservatory.who.int/publications/i/malta-health-system-summary-2024" },
    { label: "Malta Medical Journal 2025: patient satisfaction, EHIS 2019/2020", href: "https://www.um.edu.mt/library/oar/bitstream/123456789/135954/1/MMJ37%282%29A3.pdf" },
    { label: "Licensing of Private Medical Clinics Regulations (S.L. 458.23)", href: "https://legislation.mt/eli/sl/458.23/eng/pdf" },
    { label: "Medicinal Products (Advertising) Regulations (S.L. 458.32)", href: "https://legislation.mt/eli/sl/458.32/eng/pdf" },
    { label: "Medicines Authority: advertising of medicines", href: "https://medicinesauthority.gov.mt/regulationadvertisingofmedicines" },
  ],
  related: [
    { label: "Marketing for clinics in Malta", href: "/industries/healthcare-clinics" },
    { label: "AI appointment booker", href: "/services/ai-appointment-booker" },
    { label: "Voice AI for clinics", href: "/voice-ai-worker/healthcare" },
    { label: "AI for business admin", href: "/ai/business-admin" },
  ],
  disclaimer: "OARC Digital · Malta. OARC Digital is not a medical provider and does not give medical advice. Names and figures on the screens are from a demo account.",
};
