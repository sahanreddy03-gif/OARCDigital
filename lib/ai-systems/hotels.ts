import type { AiSystemContent } from "./types";

export const hotels: AiSystemContent = {
  slug: "hotels",
  name: "Hotels",
  barLabel: "Hotel AI",
  business: "hotel",
  metaTitle: "AI for Hotels in Malta | Hotel Automation | OARC Digital",
  metaDescription:
    "The AI system built around your hotel in Malta. It answers every guest 24/7, books them direct, quotes groups fast and does the back office. You decide.",
  updated: "2026-11-16",
  serviceType: "AI system and automation for hotels and guesthouses",
  schemaDescription:
    "An AI system built around each hotel, guesthouse and serviced apartment in Malta. It answers guests 24/7 on chat and phone, turns enquiries into direct bookings, drafts group and event quotes, gets arrivals ready, sells the extras the hotel chooses, asks every guest for a review and drafts replies, and handles back-office work such as the eco-contribution. The hotel manager decides every rate, discount, refund and exception. Set up and run by OARC Digital's team in Malta.",
  hub: {
    title: "Hotels and guesthouses",
    body: "Every guest answered in under a minute. More bookings direct. Group quotes out the same day. Your manager decides.",
    gain: "Hotels, guesthouses and serviced apartments",
  },

  lightAreas: true,

  hero: {
    pill: "We set it up for you in 72 hours",
    kicker: "Finally, you have",
    h1Before: "One complete AI system built around",
    h1Highlight: "your hotel.",
    sub: "AI agents trained on your hotel answer every guest, day and night, and book them direct. The system drafts group quotes, gets arrivals ready and looks after your reviews. Rates, refunds and exceptions stay with your manager.",
    primaryCta: "Claim your free month",
    secondaryCta: "Book a 20-minute call",
    note: "First month free. Set up and run by OARC’s team in Malta.",
  },

  film: {
    title: "Watch one wedding group, from first message to your yes",
    scenes: [
      {
        clock: "Thursday · 22:50",
        caption: "A wedding planner writes long after your sales office has closed.",
        result: "Answered in 45 seconds",
        visual: {
          type: "chat",
          initials: "GR",
          name: "Giulia R.",
          origin: "WhatsApp · group enquiry",
          status: "Answered",
          messages: [
            { from: "in", text: "Hi! I’m planning a wedding in Mdina. Do you have 18 rooms for 14 to 17 May, and dinner for 40 on the 14th?", time: "22:50" },
            { from: "out", text: "Congratulations, Giulia. Yes: 18 rooms are free, 6 with sea view, and the terrace is free on the 14th.", time: "22:50" },
            { from: "in", text: "Great. Can you do 15% off if we take all 18?", time: "22:52" },
          ],
          done: { before: "18 rooms held · ", strong: "15% passed to Mark", after: " · quote by 10:00" },
        },
      },
      {
        clock: "Thursday · 22:53",
        caption: "The quote builds itself from your rate sheet and events menu.",
        result: "Drafted in 3 minutes",
        visual: {
          type: "rows",
          title: "Group quote · Giulia R. · wedding",
          hint: "From your rates, 22:53",
          action: "tag",
          rows: [
            { badge: "18", title: "Rooms · 14 to 17 May", detail: "18 rooms for 3 nights at your May group rate.", tag: "Priced" },
            { badge: "40", title: "Welcome dinner · terrace", detail: "Menu B from your events pack, 14 May at 20:00.", tag: "Priced" },
            { badge: "15%", top: true, title: "Discount asked", detail: "Your group limit is 10%. Only Mark can go higher.", tag: "Mark decides" },
          ],
        },
      },
      {
        clock: "Friday · 08:40",
        caption: "Mark decides the price, and only then does the quote go.",
        result: "Quote out before 09:00",
        visual: {
          type: "timeline",
          title: "Wedding group · 18 rooms · 3 nights",
          subtitle: "14 to 17 May 2027 · €10,980",
          steps: [
            { when: "08:40", title: "Mark approves the quote", detail: "10%, not 15%. He adds a free welcome drink.", key: true, tag: "Approved by your manager" },
            { when: "08:41", title: "Sent in Italian", detail: "With the deposit link. Rooms held for 7 days." },
            { when: "08:41", title: "Follow-up set", detail: "No reply by Tuesday? The agent calls Giulia." },
          ],
        },
      },
    ],
  },

  dashboard: {
    title: "Your whole hotel on one screen.",
    body: "Every morning: who arrives today, what came in overnight and what is waiting for your yes.",
    org: "Your Hotel",
    search: "Ask anything… “How full are we next weekend?”",
    initials: "MC",
    nav: [
      { label: "Today" }, { label: "Enquiries", badge: "17" }, { label: "Arrivals" }, { label: "Groups & events" },
      { label: "Guest requests" }, { label: "Reviews" }, { label: "Back office" }, { label: "Reports" },
    ],
    greeting: "Good morning, Mark",
    status: "Running · every guest answered overnight",
    kpis: [
      { label: "Booked direct overnight", value: "6", note: "€2,140 · no commission" },
      { label: "Arriving today", value: "31", note: "26 checked in online" },
      { label: "Quotes waiting for you", value: "3", note: "Ready for your yes" },
      { label: "Deposits not paid", value: "€1,860", note: "3 reminders sent", alert: true },
    ],
    todoTitle: "Needs you today",
    todos: [
      { initials: "GR", title: "Wedding group · 18 rooms · May", detail: "Quote ready. Planner asked for 15%. Your limit is 10%.", tag: "Decide", on: true },
      { initials: "TH", title: "2-star review · Tom H. · Room 214", detail: "Noise from the bar. Reply drafted, offer waiting for you.", tag: "Approve" },
      { initials: "LK", title: "Late check-out · Lena K. · Room 305", detail: "Asks for 16:00. Your rule stops at 14:00.", tag: "Your call" },
      { initials: "EC", title: "Eco-contribution · October", detail: "€4,218 on 2,812 adult nights. Ready to report and pay.", tag: "Check" },
    ],
    chartTitle: "Direct bookings this week",
    bars: [
      { label: "Mon", h: 52 }, { label: "Tue", h: 46 }, { label: "Wed", h: 61 }, { label: "Thu", h: 58 },
      { label: "Fri", h: 74 }, { label: "Sat", h: 83 }, { label: "Sun", h: 100 },
    ],
    chartFoot: { label: "Commission kept", value: "€1,960" },
    chatFloat: {
      channel: "WhatsApp · new guest",
      time: "01:52",
      incoming: "Hi, any rooms for 2 nights from Friday? Two adults.",
      reply: "Yes. A double with breakfast is €138 a night, booked direct. Shall I hold it?",
      receipt: "Replied in 40 sec · booked direct",
    },
    alertFloat: {
      label: "Review Watch · just now",
      title: "2-star review on Google",
      detail: "Tom H., Room 214: noise from the bar. Reply drafted for Mark.",
      tag: "Reply ready",
    },
  },

  worksWith: ["Your PMS", "Your channel manager", "Your booking engine", "WhatsApp", "Outlook & Gmail", "Phone calls", "Google Business Profile", "Instagram & Facebook"],

  pillars: {
    label: "Built around your hotel",
    title: "Your hotel. Your guests. Your way of working.",
    items: [
      { icon: "network", title: "Every guest in one thread", body: "WhatsApp, email, calls, booking-site messages and reviews. One history per guest, from first question to check-out." },
      { icon: "workflow", title: "Works with your PMS, not around it", body: "Your front office keeps the systems it knows. The system works behind the desk and hands over what is ready." },
      { icon: "check", title: "Your rules, your call", body: "It quotes from your rate sheet and house rules. Anything outside them goes to your manager." },
    ],
  },

  agents: {
    label: "Your AI front office",
    title: "Three AI agents. Trained on your hotel. Awake at 3 am.",
    intro: "They chat on WhatsApp, email and your website, and they answer and make calls. Each one knows your rooms, your rates and your house rules. Prices and exceptions stay with your team.",
    note: "They answer, book and remind. They never offer a price, discount or refund outside your rules. A person can take over any chat or call.",
    items: [
      {
        name: "Booking agent",
        title: "Turns questions into direct bookings.",
        points: [
          "Answers WhatsApp, email, your website and the phone in under a minute, day or night.",
          "Checks what is free, quotes your direct rate and sends your booking link.",
          "Takes group and event enquiries and drafts the quote for your manager.",
        ],
        channels: ["WhatsApp", "Voice calls", "Email", "Website"],
        result: "No enquiry left until morning",
      },
      {
        name: "Guest agent",
        title: "Looks after every guest, booking to check-out.",
        points: [
          "Asks for arrival times, offers transfers and collects check-in details before the guest lands.",
          "Offers the extras you choose, at the right moment, in the guest’s language.",
          "Sends each request to the right team and gets a person on the line when a guest needs one.",
        ],
        channels: ["WhatsApp", "Voice calls", "SMS", "Email"],
        result: "Guests sorted before they arrive",
      },
      {
        name: "Review agent",
        title: "Gets you more reviews and more guests back.",
        points: [
          "Asks every guest for a review once they have checked out.",
          "Spots an unhappy guest the same day and drafts the reply for your manager.",
          "Invites past guests back with an offer you approve, if they agreed to hear from you.",
        ],
        channels: ["Email", "WhatsApp", "Voice calls"],
        result: "Bad stays caught, good ones shared",
      },
    ],
  },

  jobs: {
    label: "Everything it does",
    title: "One system. Nineteen jobs, from first message to check-out.",
    items: [
      { icon: "chat", title: "Answers every guest, 24/7", body: "WhatsApp, email, your website, Instagram and the phone. In the guest’s language, in under a minute.", gain: "No booking lost to a slow reply" },
      { icon: "euro", title: "Turns enquiries into direct bookings", body: "It checks what is free, quotes your direct rate and sends your booking link. The guest books with you.", gain: "No booking-site commission" },
      { icon: "users", title: "Quotes groups, weddings and events", body: "It checks the rooms, builds the quote from your rates and events menu, and sends it once your manager says yes.", gain: "Quotes out the same day" },
      { icon: "phone", title: "Answers the phone", body: "A voice agent picks up at night and during the check-in rush. It answers, books and puts callers through to your team.", gain: "No call goes to voicemail" },
      { icon: "chart", title: "Sells the extras before arrival", body: "Upgrades, breakfast, transfers, spa and late check-out, offered a few days before the guest arrives.", gain: "More spent on every stay" },
      { icon: "plane", title: "Sends every pre-arrival message", body: "Arrival time, directions, parking, transfers and the eco-contribution explained, in the guest’s language.", gain: "No surprises at the desk" },
      { icon: "badge", title: "Gets check-in done before arrival", body: "Collects names, passport details and arrival times online, and fills in your registration card.", gain: "No queue at the desk" },
      { icon: "inbox", title: "Handles requests during the stay", body: "Towels, a taxi, a table for dinner, a later check-out. Each request goes to the right team.", gain: "Guests ask once" },
      { icon: "pen", title: "Asks every guest for a review", body: "After check-out, each guest gets a thank-you and a link to review you on Google.", gain: "More reviews, every week" },
      { icon: "shield", title: "Catches bad reviews early", body: "It spots an unhappy guest or a low review the same day, drafts the reply and tells your manager.", gain: "Fixed before it spreads" },
      { icon: "refresh", title: "Resells cancelled rooms", body: "When a room comes free, it offers it to guests who asked for those dates and were turned away.", gain: "Fewer empty nights" },
      { icon: "link", title: "Answers booking-site messages", body: "Guest questions that come in through the booking sites get a quick answer from your own facts.", gain: "No message left waiting" },
      { icon: "card", title: "Chases deposits and balances", body: "Sends payment links, reminds guests before your deadline and shows you what is still unpaid.", gain: "Money in before arrival" },
      { icon: "receipt", title: "Works out the eco-contribution", body: "Counts each adult guest’s nights, applies the cap, puts it on its own line on the bill and keeps the totals ready.", gain: "No sums by hand" },
      { icon: "building", title: "Runs apartment check-ins", body: "Door codes, house rules, cleaning between stays and check-out reminders, sent on time for every unit.", gain: "Less admin per apartment" },
      { icon: "repeat", title: "Brings past guests back", body: "Offers for their favourite room and dates, sent to past guests who agreed to hear from you.", gain: "Repeat bookings, direct" },
      { icon: "calendar", title: "Watches every date that matters", body: "Licence renewals, contract dates, allotment release dates and next season’s rates.", gain: "Nothing lapses by surprise" },
      { icon: "trending", title: "Gets you found on Google and in AI answers", body: "SEO for Google, plus the work that helps ChatGPT and Gemini recommend your hotel.", gain: "Guests find you first" },
      { icon: "sun", title: "Briefs your manager every morning", body: "Arrivals, departures, VIPs, open complaints, quotes waiting and messages nobody has answered.", gain: "Start the day knowing" },
    ],
  },

  spotlights: [
    {
      label: "Direct bookings",
      title: "They ask at midnight. They book with you.",
      points: [
        "It answers on WhatsApp, email, your website and Instagram, in the guest’s language.",
        "It checks what is free, quotes your own direct rate and offers the extras you choose.",
        "It sends your booking link. The guest books with you, and no commission goes to a booking site.",
      ],
      visual: {
        type: "chat",
        initials: "LB",
        name: "Luca B.",
        origin: "Website chat · new guest",
        status: "Booked",
        messages: [
          { from: "in", text: "Hi! Do you have a double for 2 nights from 23 April? Sea view if possible.", time: "23:58" },
          { from: "out", text: "Hi Luca, yes. Our direct rate for sea view is €156 a night with breakfast. Shall I hold it?", time: "23:58" },
          { from: "in", text: "Yes please. Can you pick us up from the airport too?", time: "00:01" },
        ],
        slots: ["Car · €30", "Minivan · €45"],
        done: { before: "Booked direct · ", strong: "€342 with pickup", after: " · no booking-site commission" },
      },
    },
    {
      label: "Before they arrive",
      title: "Every guest sorted before they land.",
      points: [
        "A week out, it asks for the arrival time and offers a transfer.",
        "It collects check-in details online, so the desk only hands over a key.",
        "A few days before arrival, it offers the upgrades and extras you choose.",
      ],
      visual: {
        type: "timeline",
        title: "Emma & James W. · 3 nights",
        subtitle: "Arriving 18 April · Room 312",
        steps: [
          { when: "Day −7", title: "Arrival time asked", detail: "They land at 21:35. Airport transfer booked, €35." },
          { when: "Day −5", title: "Check-in done online", detail: "Names, passports and signature collected." },
          { when: "Day −3", title: "Sea-view upgrade offered", detail: "€25 a night more. They said yes.", key: true, tag: "+€75 extra sold" },
          { when: "Day −1", title: "Final details sent", detail: "Directions, parking and the eco-contribution explained." },
          { when: "Arrival", title: "Key ready at the desk", detail: "No forms, no queue. Straight up to a sea view." },
        ],
      },
    },
    {
      label: "Reviews",
      title: "A bad review caught before breakfast.",
      points: [
        "It reads every new review as it lands and tells your manager about the bad ones first.",
        "It drafts each reply in your hotel’s voice. Any offer to the guest waits for your manager’s yes.",
        "Every guest gets a thank-you after check-out and a link to leave a review.",
      ],
      visual: {
        type: "rows",
        title: "New reviews · this morning",
        hint: "Checked at 06:00",
        action: "tag",
        rows: [
          { badge: "2★", top: true, title: "Tom H. · Room 214", detail: "Noise from the bar until late. Reply and an offer drafted.", tag: "For Mark" },
          { badge: "4★", title: "Karl M. · Room 330", detail: "Slow wifi on floor 3. Reply drafted, maintenance told.", tag: "Review" },
          { badge: "5★", title: "Sophie L. · Room 118", detail: "Loved the breakfast and the pool. Thank-you sent.", tag: "Replied" },
          { badge: "5★", title: "Rita & Joe C. · Room 405", detail: "Anniversary stay. Reply drafted in Maltese.", tag: "Review" },
        ],
      },
    },
    {
      label: "Cancellations",
      title: "A room cancels. Twenty minutes later, it is sold again.",
      points: [
        "When a booking cancels, it finds guests who asked for those dates and were turned away.",
        "It calls or messages them, quotes your own rate and sends the booking link.",
        "Your team sees who took the room and at what rate.",
      ],
      visual: {
        type: "chat",
        initials: "MF",
        name: "Maria F.",
        origin: "Voice call · 1 min 30 sec",
        status: "Called",
        messages: [
          { from: "out", text: "Hi Maria, it’s the hotel’s AI assistant. A room just came free for 2 to 4 May. Still interested?", time: "16:04" },
          { from: "in", text: "Yes! Is there one with a sea view?", time: "16:04" },
          { from: "out", text: "Yes: sea view at €148 a night, or with a balcony at €165. Which would you like?", time: "16:05" },
        ],
        slots: ["Sea view · €148", "Balcony · €165"],
        done: { before: "Room sold again · ", strong: "€330 for 2 nights", after: " · paid at 16:20" },
      },
    },
    {
      label: "Ask anything",
      title: "Ask it like you’d ask your night manager.",
      points: [
        "Type a question in plain words. The answer comes from your own bookings, rates and messages.",
        "No reports to pull. No PMS screens to dig through.",
      ],
      visual: {
        type: "ask",
        questions: [
          { q: "How full are we next weekend?", summary: "Friday is 86% full and Saturday 94%. 14 room nights are left to sell.", rows: [["Friday", "62 of 72 rooms · 10 free"], ["Saturday", "68 of 72 rooms · 4 free"], ["Booked direct", "39 of 130 room nights"], ["Waiting list", "3 guests asked for Saturday"]] },
          { q: "Which group quotes are still open?", summary: "4 quotes are open, worth €46,650. 3 are waiting for your yes.", rows: [["Wedding · 18 rooms · May", "Waiting for you · 15% asked"], ["Conference · 30 rooms · April", "Waiting for you"], ["Language school · 24 rooms · February", "Waiting for you"], ["Borg Holdings · 10 rooms · March", "Sent · follow-up Tuesday"]] },
          { q: "How much eco-contribution did we charge in October?", summary: "€4,218 on 2,812 adult nights. The report is ready.", rows: [["Adult nights charged", "2,812 × €1.50"], ["Guests at the €22.50 cap", "6 long stays"], ["Paid at check-out", "€4,083"], ["Still to collect", "€135 · 9 guests in house"]] },
          { q: "What did guests complain about this month?", summary: "12 complaints. Noise from the bar comes up most.", rows: [["Noise from the bar", "5 · rooms facing the terrace"], ["Slow wifi on floor 3", "3 · fixed on 14 November"], ["Breakfast queue at 09:00", "2"], ["Room too warm", "2"]] },
        ],
      },
    },
  ],

  areas: {
    label: "Every part of your hotel",
    title: "Rooms, groups, restaurant, spa. All of it.",
    intro: "Whatever you sell, the system does the replies, the reminders and the forms. Your team does the welcome.",
    colA: "Your work",
    colB: "The system does",
    colC: "You do",
    items: [
      { name: "Rooms & direct bookings", system: "Answers every enquiry, quotes your direct rate, sends the booking link and confirms the deposit.", you: "Set the rates and the rules." },
      { name: "Groups, weddings & events", system: "Checks the rooms, builds the quote from your rate sheet and events menu, and follows up until the deposit is in.", you: "Approve the price." },
      { name: "Corporate & conferences", system: "Tracks contract rates and room blocks, chases rooming lists and sends the invoice to the right company.", you: "Win the account." },
      { name: "Tour operators & allotments", system: "Watches allotment release dates and contract terms, and tells you which rooms come back to sell.", you: "Negotiate the contract." },
      { name: "Restaurant & bar", system: "Takes table bookings from guests and outside diners, and passes dietary notes to the kitchen.", you: "Run the floor." },
      { name: "Spa, pool & extras", system: "Offers treatments, day passes and transfers before arrival, and books them into the right diary.", you: "Choose what to sell." },
      { name: "Serviced apartments & short lets", system: "Sends door codes and house rules, books cleaning between stays and checks every unit is ready.", you: "Add more units." },
      { name: "Boutique hotels & guesthouses", system: "Gives a small team a reservations desk that never closes: replies, bookings, arrivals and reviews.", you: "Keep the personal touch." },
    ],
  },

  wins: {
    label: "Your guests feel it first",
    title: "Their win is your win.",
    items: [
      { title: "An answer at midnight.", body: "A couple asks about a room just before midnight. They get a price and a booking link in a minute. They book with you, not the next hotel." },
      { title: "Straight to the room.", body: "Check-in details are done before they land. They pick up a key, not a form." },
      { title: "Heard the same day.", body: "A guest is unhappy about noise. Your manager knows by breakfast and moves them to a quiet room before lunch. They go home with a better story." },
    ],
  },

  live: {
    label: "How it starts",
    h2Before: "We set it up for you in",
    h2Em: "72 hours.",
    body: "We come in, connect your systems and set the whole thing up. Nothing new for your team to learn.",
    steps: [
      { when: "Today", title: "A 20-minute call", body: "About how your hotel works and where bookings and hours slip away." },
      { when: "72 hours", title: "Your first system is live", body: "Usually: every enquiry on WhatsApp, email and your website answered, day and night." },
      { when: "Week 2", title: "Your systems connected", body: "Rooms, rates, bookings and guest messages in one place." },
      { when: "Every week", title: "It grows with you", body: "It learns your hotel, and the next job goes live." },
    ],
  },

  ways: {
    label: "Start where you want",
    title: "One job or the whole hotel. You choose.",
    items: [
      { title: "Fix one job", body: "Pick the one thing that costs you most and we automate just that.", example: "Example: answer every WhatsApp and website enquiry at night." },
      { title: "Plug into what you use", body: "Keep your PMS, channel manager and booking engine. We connect to them.", example: "Example: direct bookings land in your PMS with the deposit noted." },
      { title: "The full system", body: "Everything on this page, built around your hotel, customised and looked after by us.", example: "Example: enquiries, groups, arrivals, reviews and the back office in one place." },
      { title: "Not sure yet?", body: "Most hotels aren’t. We look at your week and show you where bookings and hours slip away.", example: "Free. Takes 20 minutes." },
    ],
  },

  offer: {
    label: "Limited-time offer",
    title: "Your first month is free.",
    body: "We set it up in 72 hours and run it with you for a month. You see the guests answered, the bookings made direct and the hours it gives back in your own hotel first.",
    cta: "Claim your free month",
    secondaryCta: "Book a 20-minute call",
    listLabel: "What you get",
    items: [
      { strong: "First month free.", rest: "See it work on your own guests before you decide." },
      { strong: "Set up for you in 72 hours.", rest: "We connect your WhatsApp, inboxes and booking system. You change nothing." },
      { strong: "It is your system.", rest: "Built around your hotel, with your rooms, rates and house rules." },
      { strong: "Run by us.", rest: "We look after it and improve it every week, in high season and low." },
      { strong: "Start small.", rest: "One job first, like night-time enquiries. Add the next when the first has paid for itself." },
    ],
  },

  calc: {
    label: "Your numbers",
    title: "The commission you could keep.",
    mode: "percent",
    inputs: [
      { label: "Bookings a year through booking sites", value: 1500 },
      { label: "Share you could move to direct (%)", value: 10, max: 100 },
      { label: "Commission on an average booking (€)", value: 70 },
    ],
    out1: "Bookings that could come direct each year",
    out2: "Commission you would keep",
    footnote: "Assumes a booking made direct pays no booking-site commission. Not every guest will switch, so change the numbers to match your hotel.",
  },

  trust: {
    label: "You stay in charge",
    title: "It prepares. Your manager decides.",
    items: [
      { icon: "scale", title: "Prices only from your rules", body: "It never offers a price, discount or refund you have not set. Exceptions and complaints go to a person." },
      { icon: "lock", title: "Guest data stays private", body: "Your hotel gets its own private system. Guest details are only used for your hotel and are handled under GDPR." },
      { icon: "eye", title: "Every word is logged", body: "Every message, call and booking is logged, so you can always see what was said and done." },
      { icon: "users", title: "A team in Malta", body: "OARC’s team in Birkirkara sets it up, teaches it your rooms, rates and house rules, and picks up the phone." },
    ],
  },

  facts: {
    label: "Why now",
    title: "New rules in 2026. Every one lands on your desk.",
    items: [
      { n: "€1.50", l: "Eco-contribution a night for every guest aged 18 or over, since 1 July 2026. It goes on the bill as its own line.", src: { label: "Malta Tourism Authority: environmental contribution", href: "https://mta.com.mt/environmental-contribution/" } },
      { n: "€22.50", l: "The most one guest pays per visit. It is not subject to VAT or commission.", src: { label: "Malta Tourism Authority: environmental contribution", href: "https://mta.com.mt/environmental-contribution/" } },
      { n: "June 2026", l: "New Tourism Accommodation Regulations in force since 15 June. Hotel standards now follow the 2025 to 2030 criteria.", src: { label: "MTA circular on Legal Notice 92 of 2026", href: "https://mta.com.mt/notices/circular-tourism-accommodation-2026-collective.pdf" } },
    ],
  },

  faq: [
    { q: "What is it, exactly?", a: "One AI system built around your hotel. It answers every guest, turns enquiries into direct bookings, drafts group and event quotes, gets arrivals ready, sells the extras you choose, looks after your reviews and does the back office. OARC’s team in Malta sets it up and runs it with you." },
    { q: "Does it set prices or give refunds?", a: "No. It quotes only your own rates and offers. Discounts, refunds, exceptions and complaints always go to your manager or front office." },
    { q: "Does it give legal or tax advice?", a: "No. It works out figures such as the eco-contribution from your own bookings and keeps them in order. Your manager or accountant checks them and decides." },
    { q: "Will it replace our receptionists or reservations team?", a: "No. It takes the repeat questions, the night messages and the form-filling, so your front office can look after the guests in front of them." },
    { q: "Is guest data kept private?", a: "Yes. Each hotel has its own private system. Guest details are only used for your hotel and are handled under GDPR." },
    { q: "Does it work with our PMS and channel manager?", a: "Yes. We connect it to the PMS, channel manager, booking engine and inboxes you already use. If no connection exists, we build one." },
    { q: "Will it really bring more direct bookings?", a: "It answers every guest fast, quotes your direct rate and sends your own booking link, so fewer people drift off to a booking site while they wait. It cannot stop guests using booking sites, and your rates and website still matter." },
    { q: "Can it do just one thing?", a: "Yes. You can start with one job, such as answering every enquiry at night, and add the next when the first has paid for itself." },
    { q: "How fast is it live?", a: "We set up your first system in 72 hours, usually answering every enquiry on your WhatsApp, email and website. The rest is connected over the following weeks." },
    { q: "Do the AI agents call guests?", a: "Yes. A voice agent answers your phone and calls guests about arrival times, unpaid deposits and rooms that came free. It never offers a price outside your rules, and your team can take over any call." },
    { q: "What if it gets something wrong?", a: "It answers only from your own rooms, rates and house rules, and passes anything it is unsure of to your team. Every message and call is logged, so you can see what was said. If something needs changing, OARC’s team in Malta changes it." },
    { q: "How much does it cost?", a: "Right now the first month is free. After that it depends on your hotel’s size and what you switch on. Ask us and we price it for your hotel." },
    { q: "How much is the eco-contribution in Malta?", a: "Since 1 July 2026, €1.50 a night for every guest aged 18 or over at the start of the visit, up to €22.50 per person per visit. The cap also covers a visit split between Malta and Gozo. It must be charged apart from the room rate, as its own line on the invoice or receipt, and it is not subject to VAT or commission." },
    { q: "Who handles the eco-contribution in Malta?", a: "The Malta Tourism Authority is the authority in charge. Some operational and coordination work has been delegated to the Malta Hotels and Restaurants Association (MHRA). Hotels, and the sites and agents that take bookings, may be directed to work with the MHRA on collecting it, reporting it and paying it over." },
    { q: "What are Malta’s new Tourism Accommodation Regulations?", a: "Legal Notice 92 of 2026, in force since 15 June 2026. They bring four older sets of rules into one, covering hotels, guesthouses, hostels and short-term rentals. Hotel standards now follow the Hotel Stars Union criteria for 2025 to 2030, and existing hotels are expected to start adapting." },
  ],

  cta: {
    titleBefore: "Keep the guests who ask you first.",
    titleEm: "And the commission.",
    body: "Claim your free first month. We set it up for you in 72 hours.",
    button: "Claim your free month",
    secondary: "Book a 20-minute call",
  },

  sources: [
    { label: "Malta Tourism Authority: environmental contribution", href: "https://mta.com.mt/environmental-contribution/" },
    { label: "MTA circular: Tourism Accommodation Regulations, 2026", href: "https://mta.com.mt/notices/circular-tourism-accommodation-2026-collective.pdf" },
    { label: "Legal Notice 92 of 2026 (legislation.mt)", href: "https://legislation.mt/eli/ln/2026/92/eng" },
  ],
  related: [
    { label: "Hotel marketing in Malta", href: "/industries/hotels" },
    { label: "Voice AI for hospitality", href: "/voice-ai-worker/hospitality" },
    { label: "Direct bookings vs booking sites", href: "/aeo/hotel-marketing-malta" },
    { label: "AI for restaurants", href: "/ai/restaurants" },
  ],
  disclaimer: "OARC Digital · Malta. OARC Digital is not a tax adviser and does not give legal or tax advice. Names and figures on the screens are from a demo account.",
};
