import type { AiSystemContent } from "./types";

export const tourism: AiSystemContent = {
  slug: "tourism",
  name: "Tourism businesses",
  barLabel: "Tourism AI",
  business: "tourism business",
  metaTitle: "AI for Tour Operators in Malta | Tourism AI | OARC Digital",
  metaDescription:
    "The AI system built around your tourism business in Malta. It answers every guest 24/7, fills empty seats, re-plans weather days and builds group quotes.",
  updated: "2026-11-16",
  serviceType: "AI system and booking automation for tourism businesses",
  schemaDescription:
    "An AI system built around each tour operator, DMC, boat charter, dive centre, attraction, travel agency and car hire firm in Malta. It answers guests 24/7 by chat and phone, takes bookings, sends meeting points and forms, re-plans the day when the weather or a cruise call changes, builds group quotes, chases balances, asks for reviews and tracks licences and insurance. The skipper, dive instructor or manager decides on weather, safety and refunds. Set up and run by OARC Digital's team in Malta.",
  hub: {
    title: "Tours, charters and activities",
    body: "Every guest answered, day and night. Every windy day re-planned. Group quotes in minutes.",
    gain: "Tours, boats, diving, groups and car hire",
  },

  lightAreas: true,

  hero: {
    pill: "We set it up for you in 72 hours",
    kicker: "Finally, you have",
    h1Before: "One complete AI system built around",
    h1Highlight: "your tourism business.",
    sub: "AI agents trained on your business answer every guest, fill empty seats and build group quotes in minutes. When the wind turns, your skipper makes the call. The system tells every guest and rebooks them.",
    primaryCta: "Claim your free month",
    secondaryCta: "Book a 20-minute call",
    note: "First month free. Set up and run by OARC’s team in Malta.",
  },

  film: {
    title: "Watch one windy morning, from forecast to every guest rebooked",
    scenes: [
      {
        clock: "Thursday · 05:50",
        caption: "The wind forecast changes overnight, and your skipper gets the facts first.",
        result: "Your skipper decides by 06:10",
        visual: {
          type: "timeline",
          title: "Weather check · Thursday",
          subtitle: "Wind rising to 25 knots from noon",
          steps: [
            { when: "05:50", title: "New forecast spotted", detail: "Wind picks up from noon. Three trips are out in it." },
            { when: "05:51", title: "Skipper Joe gets the facts", detail: "Each trip, its guests and the free seats on Friday." },
            { when: "06:10", title: "Joe decides: the 13:00 and 18:00 trips move", detail: "09:30 sails as planned. His call, logged.", key: true, tag: "Decided by your skipper" },
          ],
        },
      },
      {
        clock: "Thursday · 06:24",
        caption: "Every guest hears the news before breakfast, with a new time ready.",
        result: "Rebooked, not refunded",
        visual: {
          type: "chat",
          initials: "SL",
          name: "Sophie L.",
          origin: "WhatsApp · Gozo trip 13:00 · 4 guests",
          status: "Rebooked",
          messages: [
            { from: "out", text: "Good morning Sophie. Strong wind is due, so Skipper Joe moved your Gozo trip. Friday 10:00 or a refund?", time: "06:24" },
            { from: "in", text: "Oh no! Friday 10:00 works for the 4 of us.", time: "06:31" },
            { from: "out", text: "Done. Same pier, same seats, Friday at 10:00. Your new tickets are in this chat.", time: "06:31" },
          ],
          done: { before: "Moved to ", strong: "Fri 10:00", after: " · 4 seats · no refund needed" },
        },
      },
      {
        clock: "Thursday · 07:30",
        caption: "By 07:30 every guest has an answer, and the refunds wait for your manager.",
        result: "Nobody left at the pier",
        visual: {
          type: "rows",
          title: "Thursday’s changes",
          hint: "Every guest answered by 07:30",
          action: "tag",
          rows: [
            { badge: "38", title: "Gozo trip · 13:00 to Friday 10:00", detail: "33 moved, 2 still choosing, 3 asked for a refund.", tag: "Done" },
            { badge: "26", title: "Sunset trip · 18:00 to Friday 18:00", detail: "24 moved, 2 asked for a refund. Drinks supplier told.", tag: "Done" },
            { badge: "€", top: true, title: "5 refunds · €255", detail: "Each one listed with the reason. Waiting for Martina’s yes.", tag: "Approve" },
          ],
        },
      },
    ],
  },

  dashboard: {
    title: "Every trip and every guest on one screen.",
    body: "Every morning: today’s trips, the forecast, who still owes a form or a balance, and what is waiting for your yes.",
    org: "Your Business",
    search: "Ask anything… “Which divers aren’t ready for tomorrow?”",
    initials: "MV",
    nav: [
      { label: "Today" }, { label: "Enquiries", badge: "31" }, { label: "Bookings" }, { label: "Trips & crew" },
      { label: "Groups & quotes" }, { label: "Forms & payments" }, { label: "Weather & ships" }, { label: "Reports" },
    ],
    greeting: "Good morning, Martina",
    status: "Running · every trip checked overnight",
    kpis: [
      { label: "Enquiries answered overnight", value: "31", note: "9 booked, 4 groups" },
      { label: "Guests on today’s trips", value: "286", note: "All sent the meeting point" },
      { label: "Forms still missing", value: "3", note: "Reminders sent at 18:00" },
      { label: "Balances unpaid", value: "€1,240", note: "6 reminders sent", alert: true },
    ],
    todoTitle: "Needs you today",
    todos: [
      { initials: "GR", title: "Group quote · 28 guests from Milan", detail: "Malta and Gozo day on 12 June. Built from your rates.", tag: "Approve", on: true },
      { initials: "TB", title: "Medical form · Tom B. · try dive", detail: "Ticked yes to one question. Sent to Karl, your instructor.", tag: "Instructor" },
      { initials: "€", title: "5 refunds · moved trips", detail: "€255 in total. Each one listed with the reason.", tag: "Approve" },
      { initials: "DK", title: "Flight late · car handover at 23:40", detail: "D. Keller lands 2 hours late. Handover moved and confirmed.", tag: "Done" },
    ],
    chartTitle: "Seats sold this week",
    bars: [
      { label: "Mon", h: 62 }, { label: "Tue", h: 70 }, { label: "Wed", h: 55 }, { label: "Thu", h: 38 },
      { label: "Fri", h: 84 }, { label: "Sat", h: 92 }, { label: "Sun", h: 100 },
    ],
    chartFoot: { label: "Booked direct this week", value: "58%" },
    chatFloat: {
      channel: "WhatsApp · new guest",
      time: "22:14",
      incoming: "Hi, any space on a boat to Comino tomorrow for 4 of us?",
      reply: "Yes. The 09:30 boat has 6 seats left at €35 each. Shall I hold 4 for you?",
      receipt: "Replied in 30 sec · 4 seats held",
    },
    alertFloat: {
      label: "Weather Watch · just now",
      title: "Wind picks up from noon",
      detail: "3 trips are out in it. Skipper Joe has the list.",
      tag: "Skipper decides",
    },
  },

  worksWith: ["Your booking system", "WhatsApp", "Phone calls", "Outlook & Gmail", "Instagram & Facebook", "Excel & Google Sheets", "Google Business Profile"],

  pillars: {
    label: "Built around your business",
    title: "Your trips. Your guests. Your way of working.",
    items: [
      { icon: "network", title: "Knows every trip you sell", body: "Your trips, prices, seat limits, meeting points and rules in one place. It answers from your data, never from guesses." },
      { icon: "workflow", title: "Works inside the tools you use", body: "Your booking system, WhatsApp, email and spreadsheets stay. The system works behind them." },
      { icon: "users", title: "Your people make the big decisions", body: "Weather, safety, prices and refunds stay with your team. The system does the messages around them." },
    ],
  },

  agents: {
    label: "Your AI crew",
    title: "Three AI agents. Trained on your trips. Filling every seat.",
    intro: "They chat on WhatsApp, Instagram and email, and they call. Each one knows your trips, your prices and your rules. The sea, the safety calls and the refunds stay with your people.",
    note: "They answer, book, remind and rebook. They never decide whether a trip is safe and never promise a refund on their own. A person can take over any chat or call.",
    items: [
      {
        name: "Booking agent",
        title: "Answers every guest. Fills every seat.",
        points: [
          "Replies on WhatsApp, Instagram, email, your website and the phone in under a minute, day or night.",
          "Knows your trips, prices, seat limits and past quotes. Checks what is free and sends the booking link.",
          "Passes groups and unusual requests to your team with the whole chat.",
        ],
        channels: ["WhatsApp", "Voice calls", "Instagram", "Website"],
        result: "No enquiry goes cold",
      },
      {
        name: "Guest agent",
        title: "Looks after every guest, from booking to review.",
        points: [
          "Sends the meeting point, the map pin, what to bring and the forms to sign.",
          "When a trip moves, it messages or calls every guest with what your team decided and the new time.",
          "After the trip, it says thank you, asks for a review and helps them book the next one.",
        ],
        channels: ["WhatsApp", "Voice calls", "Email"],
        result: "Guests arrive ready and come back",
      },
      {
        name: "Operations agent",
        title: "Keeps the day running.",
        points: [
          "Watches the forecast, cruise calls and flights, and tells the right person first.",
          "Matches guides, skippers, boats and cars to trips, and calls suppliers to confirm changes.",
          "Tracks licences, insurance, boat surveys and servicing, and warns weeks ahead.",
        ],
        channels: ["Voice calls", "WhatsApp", "Your calendar"],
        result: "No surprises at the pier",
      },
    ],
  },

  jobs: {
    label: "Everything it does",
    title: "One system. Twenty jobs, from first message to five-star review.",
    items: [
      { icon: "chat", title: "Answers every guest, 24/7", body: "WhatsApp, Instagram, email, your website and the phone. In the guest’s language, with your real prices and times.", gain: "No guest lost to a slow reply" },
      { icon: "refresh", title: "Re-plans the day when the weather turns", body: "Your skipper makes the call. It tells every guest, moves their booking, updates your partners and lists refunds for your yes.", gain: "Nobody left waiting at the pier" },
      { icon: "users", title: "Builds group quotes in minutes", body: "Planners, agents and companies get a priced day plan from your own rates, ready for you to approve.", gain: "Win the group before your rivals reply" },
      { icon: "calendar", title: "Takes bookings by chat and phone", body: "Checks what is free, holds the seats and sends a booking and payment link.", gain: "More seats filled" },
      { icon: "link", title: "Sends the meeting point and what to bring", body: "Map pin, time, what to wear and bring, and a reminder the evening before.", gain: "Fewer “where are you?” calls" },
      { icon: "file", title: "Collects forms before the trip", body: "Waivers, dive medical forms, dive cards, driving licences and guest lists, signed on the phone and checked.", gain: "No queue on the day" },
      { icon: "card", title: "Chases balances and deposits", body: "Friendly reminders and a payment link before the trip, so the money is in before anyone boards.", gain: "Paid before departure" },
      { icon: "badge", title: "Matches crew, guides and cars to every trip", body: "The guide who speaks the group’s language, the skipper for that boat and the right car for each booking.", gain: "The right person on every trip" },
      { icon: "plane", title: "Watches cruise calls, flights and the forecast", body: "When a ship, a flight or the wind changes, your team hears first and the new plan is ready.", gain: "First to know, first to act" },
      { icon: "repeat", title: "Fills quiet departures", body: "Offers the last seats to hotel desks, partners and past guests who asked to hear about offers.", gain: "Fewer empty seats" },
      { icon: "userPlus", title: "Wins more direct bookings", body: "Guests who find you on Google, Instagram or WhatsApp get an answer and a booking link at once, so they book you direct.", gain: "Less commission paid away" },
      { icon: "check", title: "Asks for reviews and answers them", body: "Asks every guest at the right moment and drafts a polite reply to every review for you to send.", gain: "More five-star reviews" },
      { icon: "search", title: "Finds anything in your past data", body: "“Who dived with us twice?” “What did we quote the Milan group?” Answered in seconds from your own files.", gain: "Years of chats put to work" },
      { icon: "shield", title: "Tracks licences, insurance and servicing", body: "MTA licences, guide licences, boat surveys, insurance and kit servicing, each flagged weeks before the date.", gain: "No day lost to a lapsed paper" },
      { icon: "receipt", title: "Handles changes, refunds and complaints", body: "Logs every case, drafts the answer from your rules and puts each refund in front of your manager.", gain: "Every case closed fairly" },
      { icon: "book", title: "Sends itineraries and vouchers", body: "Day-by-day plans, vouchers and travel documents for every traveller, updated the moment anything changes.", gain: "Travellers always have the latest plan" },
      { icon: "pen", title: "Writes your trip pages and posts", body: "Trip descriptions, booking-site listings and social posts in your style and in your guests’ languages.", gain: "Listings ready in minutes" },
      { icon: "trending", title: "Gets you found on Google and in AI answers", body: "SEO for Google, plus the work that helps ChatGPT and Gemini recommend your trips.", gain: "Tourists find you before they land" },
      { icon: "chart", title: "Shows where your money really comes from", body: "Seats sold per trip, where guests came from, what each booking site costs you and who came back.", gain: "Know which trips really pay" },
      { icon: "sun", title: "Briefs your team every morning", body: "Today’s trips, the forecast, missing forms, unpaid balances and who meets whom, where.", gain: "Start the day knowing" },
    ],
  },

  spotlights: [
    {
      label: "Enquiries",
      title: "Every guest answered in seconds. Day or night.",
      points: [
        "It replies on WhatsApp, Instagram, email, your website and the phone, in the guest’s language.",
        "It answers from your own trips, prices, seat limits and rules. It never guesses.",
        "It holds the seats, sends the payment link and the meeting point, and reminds them the night before.",
      ],
      visual: {
        type: "chat",
        initials: "LK",
        name: "Lena K.",
        origin: "Instagram · new enquiry",
        status: "Answered",
        messages: [
          { from: "in", text: "Hi, do you have space on a Comino boat on Saturday for 2 adults and 3 kids?", time: "22:41" },
          { from: "out", text: "Hi Lena, yes. Saturday has a 09:30 and a 13:00 boat. Kids under 12 are half price. Which time suits you?", time: "22:41" },
          { from: "in", text: "09:30 please. Do we need to bring towels?", time: "22:43" },
          { from: "out", text: "Yes, towels and sun cream. I’ll send the meeting point and a payment link now.", time: "22:43" },
        ],
        slots: ["Sat 09:30", "Sat 13:00"],
        done: { before: "5 seats booked · ", strong: "Sat 09:30", after: " · meeting point sent" },
      },
    },
    {
      label: "Groups and DMCs",
      title: "A group quote in minutes, not three days.",
      points: [
        "A planner writes at night about 28 guests in June. By morning, a priced day plan is waiting for you.",
        "It builds the quote from your own rates, your partners’ prices and your margin rules.",
        "It holds the boat and the coach. Nothing goes to the client until you approve the price.",
      ],
      visual: {
        type: "rows",
        title: "Quote · 28 guests · Malta and Gozo · 12 June",
        hint: "Built from your rates at 22:31",
        action: "tag",
        rows: [
          { badge: "01", title: "Coach · 08:30 to 17:30", detail: "One 35-seat coach at your partner’s June rate.", tag: "Held" },
          { badge: "02", title: "Gozo boat day · lunch on board", detail: "28 seats on the 10:00 boat, held for 48 hours.", tag: "Held" },
          { badge: "03", title: "Guide · speaks Italian", detail: "Two licensed guides are free that day. You pick one.", tag: "You pick" },
          { badge: "€", top: true, title: "€3,640 · €130 a guest", detail: "Your margin rule applied. Waiting for Martina’s yes.", tag: "Approve" },
        ],
      },
    },
    {
      label: "Cruise days",
      title: "The ship runs late. Your day still works.",
      points: [
        "It watches each ship’s arrival time and spots a change early.",
        "It moves the guide, the coach and lunch, and tells every guest in their own language.",
        "If the day needs a shorter route, your manager approves it first.",
      ],
      visual: {
        type: "timeline",
        title: "Shore trip · 46 guests · Valletta and Mdina",
        subtitle: "Ship now arrives 10:00, not 08:00 · all aboard 17:30",
        steps: [
          { when: "07:21", title: "New arrival time spotted", detail: "The ship is two hours late. Pick-up was 08:30." },
          { when: "07:22", title: "Guide and coach moved to 10:30", detail: "Charlene and the driver confirmed by message." },
          { when: "07:24", title: "Martina approves a shorter route", detail: "Mdina first, Valletta after lunch. Logged.", key: true, tag: "Approved by your manager" },
          { when: "07:30", title: "Lunch moved to 13:30, guests told", detail: "The restaurant said yes. Guests heard the new plan in their own language." },
          { when: "16:00", title: "Back at the ship, 90 minutes early", detail: "All 46 guests on board in good time." },
        ],
      },
    },
    {
      label: "Dive centres",
      title: "Every form signed before the first diver arrives.",
      points: [
        "Divers get one link. They sign the waiver, fill in the medical form and send a photo of their dive card.",
        "It checks each one and tells your instructor who is ready and who is missing something.",
        "A medical question always goes to your instructor. The system never decides who can dive.",
      ],
      visual: {
        type: "rows",
        title: "Tomorrow · 09:00 boat dive · 8 divers",
        hint: "Forms checked at 18:00",
        action: "tag",
        rows: [
          { badge: "LM", title: "Lukas M. · advanced diver", detail: "Dive card and medical form in. Last dive in May.", tag: "Ready" },
          { badge: "CR", title: "Chiara R. · open water diver", detail: "All forms signed. Rental kit sized and booked.", tag: "Ready" },
          { badge: "TB", top: true, title: "Tom B. · try dive", detail: "Ticked yes to one medical question. Sent to Karl, your instructor.", tag: "Instructor" },
          { badge: "AP", title: "Ana P. · open water diver", detail: "Medical form not signed yet. Reminder goes at 20:00.", tag: "Missing" },
        ],
      },
    },
    {
      label: "Ask anything",
      title: "Ask it like you’d ask your operations manager.",
      points: [
        "Type a question in plain words. The answer comes from your own bookings, chats and files.",
        "No spreadsheets to dig through. No “who took that booking?”",
      ],
      visual: {
        type: "ask",
        questions: [
          { q: "Which divers aren’t ready for tomorrow?", summary: "3 of 32 divers are not ready yet. Reminders went out at 18:00.", rows: [["Ana P. · 09:00 boat dive", "Medical form not signed"], ["Kai L. · 14:00 shore dive", "Waiver not signed"], ["Tom B. · try dive", "With Karl, your instructor"], ["The other 29 divers", "Ready"]] },
          { q: "What did we quote the Milan group last year?", summary: "Quoted on 14 March 2025: €118 a guest for a Malta and Gozo day. They booked.", rows: [["Quote sent", "14 March 2025 · by Martina"], ["Price", "€118 a guest · lunch included"], ["Booked", "31 guests · 6 June 2025"], ["Their feedback", "“The guide was excellent”"], ["Open the quote", "PDF"]] },
          { q: "How many guests came from booking sites in October?", summary: "412 guests came through booking sites. 538 booked you direct.", rows: [["Booked direct", "538 guests · no commission"], ["Booking sites", "412 guests"], ["Hotel desks and partners", "190 guests"], ["Commission paid in October", "€4,940"]] },
          { q: "What is due for renewal before April?", summary: "4 dates fall before April. Each one is already with the right person.", rows: [["Dive boat survey", "12 Feb · surveyor booked"], ["Dive kit service · 14 sets", "3 Mar · booked"], ["Compressor service", "15 Mar · booked"], ["Third-party insurance", "28 Mar · 2 quotes in"]] },
        ],
      },
    },
  ],

  areas: {
    label: "Everything you sell",
    title: "Boats, dives, tours, groups, cars. All of it.",
    intro: "Whatever you sell, the system does the messages, the lists and the reminders. Your people run the day.",
    colA: "Your work",
    colB: "The system does",
    colC: "You do",
    items: [
      { name: "Tours & excursions", system: "Answers every guest, takes the booking, sends the meeting point, books the guide and coach, and moves everyone when plans change.", you: "Give guests a great day out." },
      { name: "Groups, events & DMC work", system: "Builds the quote from your rates, holds boats, coaches and venues, keeps guest lists up to date and keeps the planner informed.", you: "Approve the price and win the client." },
      { name: "Boat trips & yacht charters", system: "Takes bookings and guest lists, watches the forecast, tells every guest what the skipper decided and rebooks them.", you: "Decide if the boat sails." },
      { name: "Dive centres", system: "Collects medical forms and dive cards before arrival, books courses and rental kit, and sends each instructor tomorrow’s list.", you: "Decide who dives, and where." },
      { name: "Attractions & experiences", system: "Answers ticket and opening-time questions, sells timed entry and handles school and group visits.", you: "Look after visitors on the day." },
      { name: "Travel agencies", system: "Answers travellers, builds itineraries from your suppliers, sends vouchers and documents, and tracks every payment and refund date.", you: "Sell the trip and approve every refund." },
      { name: "Car hire", system: "Takes bookings, collects licence photos and flight numbers, confirms pick-up and moves the handover when a flight is late.", you: "Hand over the keys." },
    ],
  },

  wins: {
    label: "Your guests feel it first",
    title: "Their win is your win.",
    items: [
      { title: "Booked from the hotel room.", body: "A family plans tomorrow from their hotel room at 10 pm. They get a time, a price and a booking link. They book you, not the next boat." },
      { title: "Told early, never stranded.", body: "When the wind turns, guests hear it before breakfast, in their language, with a new time ready. Nobody waits at the pier." },
      { title: "Everything on their phone.", body: "Meeting point, map pin, what to bring and the forms to sign, all in one chat. They arrive ready to go." },
    ],
  },

  live: {
    label: "How it starts",
    h2Before: "We set it up for you in",
    h2Em: "72 hours.",
    body: "We come in, connect your tools and set the whole thing up. Nothing new for your team to learn.",
    steps: [
      { when: "Today", title: "A 20-minute call", body: "About how your business runs and where the bookings and hours go." },
      { when: "72 hours", title: "Your first system is live", body: "Every enquiry on WhatsApp, Instagram and your website answered, day and night." },
      { when: "Week 2", title: "Your trips connected", body: "Trips, prices, seats, crew and guest lists in one place." },
      { when: "Every week", title: "It grows with you", body: "It learns your trips, and the next job goes live." },
    ],
  },

  ways: {
    label: "Start where you want",
    title: "One job or the whole operation. You choose.",
    items: [
      { title: "Fix one job", body: "Pick the one thing that eats the most hours and we automate just that.", example: "Example: answer every WhatsApp and Instagram enquiry at night." },
      { title: "Plug into what you use", body: "Keep your booking system, WhatsApp and spreadsheets. We connect to them.", example: "Example: every guest from a booking site gets your meeting point and forms on WhatsApp." },
      { title: "The full system", body: "Everything on this page, built around your trips and your team, customised and looked after by us.", example: "Example: enquiries, bookings, weather days, groups and forms in one place." },
      { title: "Not sure yet?", body: "Most operators aren’t. We look at your week and show you where the bookings and hours go.", example: "Free. Takes 20 minutes." },
    ],
  },

  offer: {
    label: "Limited-time offer",
    title: "Your first month is free.",
    body: "We set it up in 72 hours and run it with you for a month. You see the guests answered, the seats filled and the hours it gives back on your own business first.",
    cta: "Claim your free month",
    secondaryCta: "Book a 20-minute call",
    listLabel: "What you get",
    items: [
      { strong: "First month free.", rest: "See it work on your own trips before you decide." },
      { strong: "Set up for you in 72 hours.", rest: "We connect your WhatsApp, Instagram and booking system. You change nothing." },
      { strong: "It is your system.", rest: "Built around your trips, your prices and your rules." },
      { strong: "Run by us.", rest: "We customise it, look after it and improve it every week." },
      { strong: "Start small.", rest: "One job first. Add the next only when the first has paid for itself." },
    ],
  },

  calc: {
    label: "Your numbers",
    title: "What a slow reply costs you.",
    mode: "percent",
    inputs: [
      { label: "Enquiries in a busy month", value: 400 },
      { label: "Answered too late to book (%)", value: 15, max: 100 },
      { label: "Average booking (€)", value: 90 },
    ],
    out1: "Bookings lost to slow replies in that month",
    out2: "What those bookings are worth",
    footnote: "Assumes each late reply is one booking that goes to another operator. Some guests wait for you, so change the numbers to match your business.",
  },

  trust: {
    label: "You stay in charge",
    title: "It tells the guests. Your skipper decides.",
    items: [
      { icon: "shield", title: "The sea is always a person’s call", body: "Your skipper, instructor or manager decides if a trip runs or a diver dives. The system never says a trip is safe. It passes on what you decided." },
      { icon: "receipt", title: "Refunds wait for your yes", body: "Every refund and exception is listed with the reason. Money goes back only when your manager approves it." },
      { icon: "lock", title: "Guest details stay private", body: "Your business gets its own private system. Guest details, forms and chats are only used for your business and are handled under GDPR." },
      { icon: "users", title: "A team in Malta", body: "OARC’s team in Birkirkara sets it up, teaches it your trips and rules, and picks up the phone." },
    ],
  },

  facts: {
    label: "Why now",
    title: "Tourism runs on rules and renewals. Every one can be missed.",
    items: [
      { n: "14 days", l: "To refund a traveller once a package is cancelled. A package is two or more types of travel service sold together for one trip.", src: { label: "Package Travel Regulations, S.L. 409.19, reg. 13(4)", href: "https://legislation.mt/eli/sl/409.19/eng/pdf" } },
      { n: "€250,000", l: "The least third-party cover for an MTA travel agency, DMC or excursion licence. A DMC also needs €1,000,000 professional indemnity cover.", src: { label: "Malta Tourism Authority: travel and excursion operators", href: "https://mta.com.mt/en/applicationtraveloperator" } },
      { n: "€240,000", l: "The least third-party cover the MTA accepts from a dive centre. Every policy has a renewal date.", src: { label: "Malta Tourism Authority: recreational dive centres", href: "https://mta.com.mt/licenses-applications/recreational-dive-centre/" } },
    ],
  },

  faq: [
    { q: "What is it, exactly?", a: "One AI system built around your tourism business. It answers every guest, takes bookings, sends meeting points and forms, re-plans the day when the weather turns, builds group quotes, chases balances and tracks your licences and insurance. OARC’s team in Malta sets it up and runs it with you." },
    { q: "Does it decide if a trip is safe?", a: "No. Weather, sea conditions and safety are always decided by your skipper, dive instructor or manager. The system passes on what they decided to every guest, fast, and rebooks them." },
    { q: "Will it replace our crew or office team?", a: "No. It takes the repeat questions, the chasing and the night shift, so your crew, guides and office team spend their time on guests and trips." },
    { q: "Is guest data kept private?", a: "Yes. Each business has its own private system. Guest details, chats and forms are only used for your business and are handled under GDPR." },
    { q: "Does it work with our booking system?", a: "Yes. We connect it to the booking system, email, WhatsApp and spreadsheets you already use. If no connection exists, we build one." },
    { q: "Can it take the booking and the payment?", a: "It checks what is free, holds the seats and sends the guest a booking and payment link. Whether it writes the booking straight into your system depends on that system. We check yours on the first call." },
    { q: "Can it do just one thing?", a: "Yes. You can start with one job, such as answering every WhatsApp enquiry at night, and add the next when the first has paid for itself." },
    { q: "How fast is it live?", a: "We set up your first system in 72 hours. The rest is connected over the following weeks." },
    { q: "Do the AI agents call guests?", a: "Yes. A voice agent calls guests when a trip moves, when a form or a balance is missing, and when a group needs a follow-up. It never decides if a trip is safe, and your team can take over any call." },
    { q: "Do guests know they are talking to an AI?", a: "Yes. It says so at the start of every chat and call. A person from your team can take over at any time." },
    { q: "What if it gets something wrong?", a: "Every message and call is logged, so you can see what it said and why. Safety calls and refunds always wait for a person. If something needs changing, OARC’s team in Malta changes it." },
    { q: "How much does it cost?", a: "Right now the first month is free. After that it depends on your business’s size and what you switch on. Ask us and we price it for your business." },
    { q: "Who licenses tour operators and dive centres in Malta?", a: "The Malta Tourism Authority, under Chapter 409 of the Laws of Malta. It licenses travel agencies, destination management companies, excursion organisers, tourist guides and recreational dive centres. Car hire firms need an operator’s licence from Transport Malta." },
    { q: "How fast must a cancelled package be refunded in Malta?", a: "No later than 14 days after the package is cancelled, under the Package Travel Regulations (S.L. 409.19). A package is two or more types of travel service sold together for the same trip. Ask your lawyer which of your products count." },
    { q: "What insurance does a DMC need in Malta?", a: "For its MTA licence, a travel agency, DMC or excursion organiser needs third-party liability cover of at least €250,000. A DMC also needs professional indemnity cover of at least €1,000,000. A recreational dive centre needs third-party cover of at least €240,000." },
  ],

  cta: {
    titleBefore: "Fill every seat. Answer every guest.",
    titleEm: "Starting this week.",
    body: "Claim your free first month. We set it up for you in 72 hours.",
    button: "Claim your free month",
    secondary: "Book a 20-minute call",
  },

  sources: [
    { label: "Package Travel and Linked Travel Arrangements Regulations (S.L. 409.19)", href: "https://legislation.mt/eli/sl/409.19/eng/pdf" },
    { label: "Malta Tourism Authority: licences under Chapter 409", href: "https://mta.com.mt/licenses-applications/" },
    { label: "Malta Tourism Authority: travel and excursion operators", href: "https://mta.com.mt/en/applicationtraveloperator" },
    { label: "Malta Tourism Authority: recreational dive centres", href: "https://mta.com.mt/licenses-applications/recreational-dive-centre/" },
    { label: "Vehicle Hire Services Regulations, 2020 (L.N. 366 of 2020)", href: "https://legislation.mt/getpdf/60225dccbc8272018c1649be" },
  ],
  related: [
    { label: "Voice AI for hospitality", href: "/voice-ai-worker/hospitality" },
    { label: "AI for hotels", href: "/ai/hotels" },
    { label: "AI for restaurants", href: "/ai/restaurants" },
    { label: "AI appointment booker", href: "/services/ai-appointment-booker" },
  ],
  disclaimer: "OARC Digital · Malta. OARC Digital is not a tour operator or travel agency and does not give safety, legal or insurance advice. Names and figures on the screens are from a demo account.",
};
