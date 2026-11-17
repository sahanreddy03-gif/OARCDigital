import type { AiSystemContent } from "./types";

export const restaurants: AiSystemContent = {
  slug: "restaurants",
  name: "Restaurants",
  barLabel: "Restaurant AI",
  business: "restaurant",
  metaTitle: "AI for Restaurants in Malta | Table Bookings | OARC Digital",
  metaDescription:
    "The AI system built around your restaurant in Malta. It answers every call and message, books every table, brings guests back and does the admin. You decide.",
  updated: "2026-11-16",
  serviceType: "AI system and automation for restaurants, cafés and bars",
  schemaDescription:
    "An AI system built around each restaurant in Malta. It answers calls and messages 24/7, books and confirms tables, cuts no-shows, takes direct takeaway orders, brings past guests back, replies to reviews, handles group and event enquiries, and tracks licence and VAT dates. It answers allergy questions only from the restaurant's own approved information, and the owner or manager decides prices, deposits, refunds and complaints. Set up and run by OARC Digital's team in Malta.",
  hub: {
    title: "Restaurants",
    body: "Every call answered, even mid-service. Every table confirmed. Past guests invited back on quiet nights. You keep the final say.",
    gain: "À la carte, cafés, bars, takeaway and events",
  },

  lightAreas: true,

  hero: {
    pill: "We set it up for you in 72 hours",
    kicker: "Finally, you have",
    h1Before: "One complete AI system built around",
    h1Highlight: "your restaurant.",
    sub: "AI agents trained on your restaurant answer every call and message, book every table and bring past guests back. The system takes direct orders, answers reviews and tracks your licence and VAT dates. Your team stays on the floor with the guests.",
    primaryCta: "Claim your free month",
    secondaryCta: "Book a 20-minute call",
    note: "First month free. Set up and run by OARC’s team in Malta.",
  },

  film: {
    title: "Watch one office dinner, from first message to your yes",
    scenes: [
      {
        clock: "Friday · 20:46",
        caption: "An office asks for dinner for 14 while your team is busy with service.",
        result: "Answered during service",
        visual: {
          type: "chat",
          initials: "NC",
          name: "Nadia C.",
          origin: "WhatsApp · group enquiry",
          status: "Answered",
          messages: [
            { from: "in", text: "Hi! Can you do dinner for 14 next Friday? It’s our office night out. One of us is coeliac.", time: "20:46" },
            { from: "out", text: "Hi Nadia, yes. I can hold the terrace at 20:00. The chef will check the menu for your coeliac guest.", time: "20:46" },
            { from: "in", text: "Perfect. Our budget is about €45 a head.", time: "20:48" },
          ],
          done: { before: "Terrace held for 14 · ", strong: "coeliac guest passed to the chef", after: " · quote drafted" },
        },
      },
      {
        clock: "Friday · 20:51",
        caption: "It builds the quote from your own group menu and your house rules.",
        result: "Quote ready in 5 minutes",
        visual: {
          type: "rows",
          title: "Office dinner · N. Camilleri · 14 guests",
          hint: "Next Friday · 20:00 · terrace",
          action: "tag",
          rows: [
            { badge: "01", title: "Set menu B · €45 a head", detail: "From your own group menu. 14 guests, €630 in all.", tag: "Drafted" },
            { badge: "02", top: true, title: "Coeliac guest", detail: "Not guessed. Sent to Chef Mark to choose the dishes.", tag: "Chef to choose" },
            { badge: "03", title: "Deposit · groups over 10", detail: "Your house rule. Ramona sets the amount.", tag: "Manager decides" },
          ],
        },
      },
      {
        clock: "Saturday · 10:12",
        caption: "Your manager checks the price and the deposit, and only then does it go.",
        result: "Nothing goes out without your yes",
        visual: {
          type: "timeline",
          title: "Office dinner · 14 guests · N. Camilleri",
          subtitle: "Friday 27 November · 20:00 · terrace",
          steps: [
            { when: "10:12", title: "Ramona approves the quote", detail: "Chef Mark’s coeliac dishes added. Deposit set at €150.", key: true, tag: "Approved by your manager" },
            { when: "10:13", title: "Sent to Nadia", detail: "Menu, price and deposit details in one message." },
            { when: "Thursday", title: "Final numbers confirmed", detail: "Nadia confirms 14. The kitchen has the coeliac plan." },
          ],
        },
      },
    ],
  },

  dashboard: {
    title: "Tonight’s service on one screen.",
    body: "Every morning: tonight’s covers, guest notes, big tables, and what is waiting for your yes.",
    org: "Your Restaurant",
    search: "Ask anything… “How many covers on Saturday?”",
    initials: "RG",
    nav: [
      { label: "Today" }, { label: "Bookings", badge: "17" }, { label: "Guests" }, { label: "Groups & events" },
      { label: "Orders" }, { label: "Reviews" }, { label: "Suppliers" }, { label: "Reports" },
    ],
    greeting: "Good morning, Ramona",
    status: "Running · every message answered overnight",
    kpis: [
      { label: "Covers booked tonight", value: "86", note: "3 tables still free" },
      { label: "Calls and messages answered", value: "57", note: "31 during service" },
      { label: "Tables confirmed by reminder", value: "19", note: "2 cancelled, both refilled" },
      { label: "Free seats on Tuesday", value: "32", note: "Invite to past guests ready", alert: true },
    ],
    todoTitle: "Needs you today",
    todos: [
      { initials: "JB", title: "Birthday for 20 · Saturday · J. Borg", detail: "Set menu and quote drafted. The deposit needs your yes.", tag: "Approve", on: true },
      { initials: "PS", title: "2-star review · Paul S.", detail: "Waited 40 minutes for mains. A calm reply is drafted.", tag: "Reply" },
      { initials: "SB", title: "Sea bream up 9% · fish supplier", detail: "Now €14.20 a kilo. Three dishes use it.", tag: "Check" },
      { initials: "LI", title: "Liability insurance · renews in 28 days", detail: "Needed for your licence. The broker has been asked for the new policy.", tag: "Plan" },
    ],
    chartTitle: "Covers booked this week",
    bars: [
      { label: "Mon", h: 34 }, { label: "Tue", h: 26 }, { label: "Wed", h: 41 }, { label: "Thu", h: 58 },
      { label: "Fri", h: 92 }, { label: "Sat", h: 100 }, { label: "Sun", h: 77 },
    ],
    chartFoot: { label: "Booked during service or after closing", value: "146" },
    chatFloat: {
      channel: "Instagram · message",
      time: "23:12",
      incoming: "Hey, any chance of a table for 2 tomorrow at 8? It’s our anniversary.",
      reply: "Happy anniversary. Yes, 20:00 on the terrace is yours. I’ve noted it.",
      receipt: "Replied in 30 sec · table booked",
    },
    alertFloat: {
      label: "Table Watch · just now",
      title: "Table for 4 cancelled",
      detail: "Saturday 20:00. Offered to the waitlist and taken in 6 minutes.",
      tag: "Refilled",
    },
  },

  worksWith: ["Your booking system", "WhatsApp", "Phone calls", "Instagram & Facebook", "Google Business Profile", "Your till reports", "Excel & Google Sheets", "Outlook & Gmail"],

  pillars: {
    label: "Built around your restaurant",
    title: "Your restaurant. Your guests. Your house rules.",
    items: [
      { icon: "users", title: "Every guest remembered", body: "Bookings, phone numbers, birthdays, allergies and favourite tables. One guest list, and it belongs to you." },
      { icon: "calendar", title: "Works from your own diary", body: "It books into the diary your team already uses, with your own table plan. Nothing new to learn." },
      { icon: "shield", title: "Your house rules, every time", body: "It answers only from your menu, prices and allergen sheet. Anything it isn’t sure of goes to your staff." },
    ],
  },

  agents: {
    label: "Your AI front of house",
    title: "Three AI agents. Trained on your restaurant. Never a guess about allergens.",
    intro: "They chat on WhatsApp, Instagram and your website, and they answer and make calls. Each one knows your menu, your tables, your hours and your house rules.",
    note: "They answer, book and remind. They never guess about allergens and never set a price, a deposit or a refund. A person can take over any chat or call.",
    items: [
      {
        name: "Host agent",
        title: "Answers every guest.",
        points: [
          "Picks up the phone, WhatsApp, Instagram and website messages in seconds, even in the middle of service.",
          "Books into your live diary in the guest’s language and sends the confirmation.",
          "Answers from your own menu and allergen sheet, and passes any doubt to your staff.",
        ],
        channels: ["Voice calls", "WhatsApp", "Instagram", "Website"],
        result: "No table lost to a busy phone",
      },
      {
        name: "Events agent",
        title: "Wins the big tables.",
        points: [
          "Takes every group, private dining and catering enquiry: date, headcount, budget and dietary needs.",
          "Drafts the menu and quote from your own packs, for your manager to approve.",
          "Follows up by message and phone until the guest decides, then chases the final numbers.",
        ],
        channels: ["Email", "WhatsApp", "Voice calls", "Website"],
        result: "No group goes next door",
      },
      {
        name: "Guest agent",
        title: "Brings guests back.",
        points: [
          "Messages or calls to confirm bookings, and offers a cancelled table to the waitlist.",
          "Thanks guests after the visit and answers good reviews in your voice. The hard ones go to you.",
          "Invites past guests back on quiet nights, only those who said yes to hearing from you.",
        ],
        channels: ["WhatsApp", "Voice calls", "Email", "Google reviews"],
        result: "Quiet nights fill up",
      },
    ],
  },

  jobs: {
    label: "Everything it does",
    title: "One system. Nineteen jobs, from the first call to the last table.",
    items: [
      { icon: "chat", title: "Answers every call and message, 24/7", body: "The phone, WhatsApp, Instagram, Facebook and your website. Even at 20:30 on a full Saturday.", gain: "No table lost to a busy phone" },
      { icon: "calendar", title: "Books every table into your diary", body: "It checks your live diary, books the table and sends a confirmation in the guest’s language.", gain: "No more bookings on scraps of paper" },
      { icon: "repeat", title: "Brings past guests back", body: "A thank-you after the visit, a note before their birthday and a table offered on quiet nights. Only to guests who said yes.", gain: "Quiet nights fill up" },
      { icon: "clock", title: "Cuts no-shows", body: "A reminder before every booking, an easy way to cancel, and the free table offered to your waitlist.", gain: "Fewer empty tables at 20:00" },
      { icon: "users", title: "Wins group and event bookings", body: "Birthdays, office dinners, weddings and catering. It takes the details and drafts the menu and quote for your yes.", gain: "Big tables answered the same evening" },
      { icon: "inbox", title: "Takes direct takeaway orders", body: "On WhatsApp or the phone. It reads the order back and passes it to the kitchen. No app in the middle.", gain: "You keep the margin and the guest" },
      { icon: "shield", title: "Never guesses about allergens", body: "It uses only your approved allergen sheet, notes every allergy on the booking and passes any doubt to your staff.", gain: "Safer service on every shift" },
      { icon: "pen", title: "Replies to every review", body: "It thanks happy guests in your voice. Unhappy reviews come to you first, with a calm reply drafted.", gain: "No review left hanging" },
      { icon: "link", title: "Keeps your menu and hours right everywhere", body: "Google, your website, Instagram and Facebook show the same menu, prices and holiday hours.", gain: "No guest finds a closed door" },
      { icon: "languages", title: "Speaks your guests’ languages", body: "Replies in the guest’s own language and translates your menu into Italian, German, French and more, for you to check.", gain: "Every visitor understood" },
      { icon: "image", title: "Posts your dishes", body: "Turns today’s special and your own photos into Instagram, Facebook and WhatsApp posts, ready for your yes.", gain: "Posting without losing your evenings" },
      { icon: "phone", title: "Calls guests for you", body: "A voice agent confirms big tables, returns missed calls and rings the waitlist when a table frees up.", gain: "No phone tag between tables" },
      { icon: "trending", title: "Gets you found on Google and in AI answers", body: "SEO for Google, plus the work that helps ChatGPT and Gemini recommend your restaurant.", gain: "Hungry people find you first" },
      { icon: "chart", title: "Reads the data you already have", body: "Old bookings, till reports and reviews. Your best nights, the dishes that sell and the regulars you haven’t seen in two months.", gain: "Decisions from your own numbers" },
      { icon: "workflow", title: "Suggests the rota and prep list", body: "It forecasts covers night by night from your bookings, the weather, local events and the season.", gain: "The right staff on the right night" },
      { icon: "euro", title: "Checks supplier invoices", body: "Matches each invoice to what was ordered, flags price rises and drafts the next order.", gain: "Food cost under control" },
      { icon: "file", title: "Keeps your paperwork dates", body: "Licence, fire certificate, music permit, insurance and VAT returns. Reminders start weeks ahead.", gain: "No date slips past" },
      { icon: "search", title: "Watches the street for you", body: "New openings, rivals’ menus and prices, village festas, concerts and cruise days. You hear first.", gain: "Move before the street does" },
      { icon: "sun", title: "Briefs you before every service", body: "Tonight’s covers, big tables, birthdays, allergies on the book and what needs your yes.", gain: "Start service knowing" },
    ],
  },

  spotlights: [
    {
      label: "Calls during service",
      title: "The phone rings at 20:30. It gets answered.",
      points: [
        "It answers the phone, WhatsApp, Instagram and your website while your team looks after the room.",
        "It books into your live diary and notes allergies, birthdays and high chairs.",
        "It never guesses about allergens. Any doubt goes to your staff the same minute.",
      ],
      visual: {
        type: "chat",
        initials: "MA",
        name: "Matthew A.",
        origin: "Phone call · 1 min 20 sec",
        status: "Booked",
        messages: [
          { from: "in", text: "Hi, have you got a table for four tonight? Around nine?", time: "20:31" },
          { from: "out", text: "Good evening. Yes, I have 21:00 inside or 21:15 on the terrace. Which would you like?", time: "20:31" },
          { from: "in", text: "The terrace, please. My daughter has a nut allergy. Is that OK?", time: "20:32" },
          { from: "out", text: "I’ve put the nut allergy on your booking and told the team. Your server will go through the menu with you.", time: "20:32" },
        ],
        slots: ["21:00 inside", "21:15 terrace"],
        done: { before: "Table for 4 booked · ", strong: "21:15 terrace", after: " · nut allergy flagged to the kitchen" },
      },
    },
    {
      label: "No-shows",
      title: "A cancelled table, filled before service.",
      points: [
        "Every booking gets a reminder with a one-tap way to confirm or cancel.",
        "A cancelled table goes straight to your waitlist. The first to say yes gets it.",
        "Big tables get a call the day before. Your deposit rules stay yours.",
      ],
      visual: {
        type: "timeline",
        title: "Table 9 · 4 guests · Saturday 20:00",
        subtitle: "Booked by phone on Tuesday",
        steps: [
          { when: "Tue 14:02", title: "Booked by phone", detail: "Confirmation sent on WhatsApp." },
          { when: "Fri 12:00", title: "Reminder sent", detail: "One tap to confirm or cancel." },
          { when: "Sat 16:40", title: "Guest cancels by reply", detail: "Their child is ill. No awkward call needed." },
          { when: "Sat 16:41", title: "Offered to the waitlist", detail: "3 guests waiting for Saturday were messaged.", key: true, tag: "Refilled in 6 minutes" },
          { when: "Sat 20:00", title: "Table 9 is full", detail: "The Abela family, seated on time." },
        ],
      },
    },
    {
      label: "Regulars",
      title: "Your best guests, invited back by name.",
      points: [
        "It remembers who came, how often and what they love to order.",
        "It writes at the right moment: a birthday, a quiet Tuesday, a favourite dish back on the menu.",
        "Only guests who said yes hear from you, and anyone can stop with one reply.",
      ],
      visual: {
        type: "rows",
        title: "Guests to invite back this week",
        hint: "Chosen from your own bookings",
        action: "tag",
        rows: [
          { badge: "Bday", top: true, title: "Maria B. · birthday on Saturday", detail: "Comes every year with 6 people. Table 12 offered.", tag: "Invite sent" },
          { badge: "9 wk", title: "Joe & Rita C. · last visit 9 weeks ago", detail: "Always Fridays, always the sea bream. Their usual table offered.", tag: "Invite sent" },
          { badge: "12", title: "Office of 12 · Christmas dinner last year", detail: "Asked about this year before the dates go.", tag: "Asked" },
          { badge: "May", title: "Luca & Giulia · visitors from Milan", detail: "Asked to hear about summer. A note goes in May.", tag: "Saved" },
        ],
      },
    },
    {
      label: "Reviews",
      title: "Every review answered. The hard ones come to you.",
      points: [
        "It thanks happy guests by name, in your restaurant’s voice.",
        "Unhappy reviews come to you first, with a calm reply drafted. Complaints stay your call.",
        "Each week it tells you what guests praise and what they complain about.",
      ],
      visual: {
        type: "rows",
        title: "New reviews this week",
        hint: "14 new on Google",
        action: "tag",
        rows: [
          { badge: "5★", title: "“Best rabbit in years” · Anthony G.", detail: "Thanked by name. Sunday lunch mentioned.", tag: "Replied" },
          { badge: "5★", title: "“Lovely terrace, kind staff” · Hannah W.", detail: "Thanked by name and invited back.", tag: "Replied" },
          { badge: "2★", top: true, title: "“Waited 40 minutes for mains” · Paul S.", detail: "Sent to you with a calm reply drafted.", tag: "Needs you" },
          { badge: "4★", title: "“Good food, a bit loud” · Sara D.", detail: "Thanked. Noted in your weekly summary.", tag: "Replied" },
        ],
      },
    },
    {
      label: "Ask anything",
      title: "Ask it like you’d ask your head waiter.",
      points: [
        "Type or say a question in plain words. The answer comes from your own bookings, till reports and invoices.",
        "No notebooks to flick through. No “who took that booking?”",
      ],
      visual: {
        type: "ask",
        questions: [
          { q: "How many covers on Saturday?", summary: "112 covers booked. 3 tables still free at 21:00.", rows: [["19:00", "36 covers · full"], ["20:00", "56 covers · includes the birthday for 20"], ["21:00", "20 covers · 3 tables free"], ["Allergies on the book", "4 · kitchen told"]] },
          { q: "Which dishes sold best this month?", summary: "Baked sea bream leads. Rabbit wins every Sunday.", rows: [["Baked sea bream", "212 sold"], ["Rabbit stew", "174 sold · most on Sundays"], ["Prawn linguine", "160 sold"], ["Tiramisu", "148 sold"], ["+ 38 more dishes", "See all"]] },
          { q: "How many takeaway orders came direct?", summary: "138 orders came straight to you this month, with no app in the middle.", rows: [["WhatsApp", "96 orders"], ["Phone", "42 orders"], ["Busiest night", "Friday · 31 orders"], ["Guests saved", "54 new numbers, with their yes"]] },
          { q: "What did our suppliers put up?", summary: "4 prices went up this month. Sea bream is the big one.", rows: [["Sea bream", "+9% · in 3 dishes"], ["Olive oil", "+6%"], ["Fresh cream", "+4%"], ["Coffee beans", "+3%"]] },
        ],
      },
    },
  ],

  areas: {
    label: "Every kind of venue",
    title: "From the pizzeria to the private dining room.",
    intro: "Every venue runs on calls, bookings, orders and dates. The system does those. Your team does the hospitality.",
    colA: "Your work",
    colB: "The system does",
    colC: "Your team does",
    items: [
      { name: "À la carte restaurants", system: "Answers every call and message, books into your diary, notes allergies and birthdays, and confirms every table.", you: "Looks after the guests in the room." },
      { name: "Fine dining", system: "Remembers every guest’s preferences, confirms each table the day before and keeps a waitlist for full nights.", you: "Creates the evening." },
      { name: "Pizzerias & casual dining", system: "Handles the rush of calls and messages, answers questions from your own menu and refills cancelled tables.", you: "Keeps the ovens going." },
      { name: "Takeaway & delivery", system: "Takes direct orders on WhatsApp and the phone, reads each one back and saves the guest’s number with their yes.", you: "Cooks and packs." },
      { name: "Cafés & snack bars", system: "Takes cake and party orders, answers opening-hour questions and posts the day’s specials.", you: "Runs the counter." },
      { name: "Bars & lounges", system: "Answers late-night messages, books tables and events, and fills quiet weeknights from past guests.", you: "Pours, hosts and keeps the mood." },
      { name: "Private dining, events & catering", system: "Takes every enquiry, drafts menus and quotes from your packs, and chases final numbers and dietary needs.", you: "Approves the price and runs the night." },
      { name: "Restaurant groups", system: "Puts every venue’s bookings, reviews and numbers on one screen, and shows which one needs help.", you: "Decides where people and money go." },
    ],
  },

  wins: {
    label: "Your guests feel it first",
    title: "Their win is your win.",
    items: [
      { title: "An answer, not a ringing phone.", body: "A guest calls at 20:30 on a full Saturday. They get an answer, a table and a confirmation. They never try the place next door." },
      { title: "Remembered, not asked again.", body: "The nut allergy, the birthday, the table by the window. A guest says it once, and your team knows it every visit." },
      { title: "Easy to change plans.", body: "Running late or can’t make it? One reply moves or cancels the table. No awkward call, and someone else gets the table." },
    ],
  },

  live: {
    label: "How it starts",
    h2Before: "We set it up for you in",
    h2Em: "72 hours.",
    body: "We come in, connect your phone, messages and booking diary, and set the whole thing up. Nothing new for your staff to learn.",
    steps: [
      { when: "Today", title: "A 20-minute call", body: "About how your restaurant works and where tables and hours slip away." },
      { when: "72 hours", title: "Your first system is live", body: "Usually: every call and message answered and every table booked into your diary." },
      { when: "Week 2", title: "Your guest list connected", body: "Past bookings, regulars, notes and your menu in one place." },
      { when: "Every week", title: "It grows with you", body: "It learns your restaurant, and the next job goes live." },
    ],
  },

  ways: {
    label: "Start where you want",
    title: "One job or the whole restaurant. You choose.",
    items: [
      { title: "Fix one job", body: "Pick the one thing that costs you most and we automate just that.", example: "Example: answer every call during service." },
      { title: "Plug into what you use", body: "Keep your booking system, your till and your WhatsApp number. We connect to them.", example: "Example: phone bookings land straight in your diary." },
      { title: "The full system", body: "Everything on this page, built around your restaurant, customised and looked after by us.", example: "Example: calls, bookings, guests, reviews and paperwork in one place." },
      { title: "Not sure yet?", body: "Most owners aren’t. We look at your week and show you where the tables and hours go.", example: "Free. Takes 20 minutes." },
    ],
  },

  offer: {
    label: "Limited-time offer",
    title: "Your first month is free.",
    body: "We set it up in 72 hours and run it with you for a month. You see the calls answered, the tables filled and the guests coming back in your own restaurant first.",
    cta: "Claim your free month",
    secondaryCta: "Book a 20-minute call",
    listLabel: "What you get",
    items: [
      { strong: "First month free.", rest: "See it work on your own bookings before you decide." },
      { strong: "Set up for you in 72 hours.", rest: "We connect your phone, WhatsApp and booking diary. You change nothing." },
      { strong: "It is your system.", rest: "Built around your restaurant, with your menu, your tables and your house rules." },
      { strong: "Run by us.", rest: "We customise it, look after it and improve it every week." },
      { strong: "Start small.", rest: "One job first. Add the next only when the first has paid for itself." },
    ],
  },

  calc: {
    label: "Your numbers",
    title: "What your missed calls are worth.",
    mode: "times",
    factor: 48,
    inputs: [
      { label: "Bookings you miss in a week", value: 5 },
      { label: "Guests per booking", value: 3 },
      { label: "Average spend per guest (€)", value: 35 },
    ],
    out1: "Covers you could win back every year",
    out2: "What those covers are worth at your average spend",
    footnote: "Assumes you are open 48 weeks a year. Not every missed call is a lost booking, so change the numbers to match your restaurant.",
  },

  trust: {
    label: "You stay in charge",
    title: "It takes the calls. You make the call.",
    items: [
      { icon: "scale", title: "A person decides what matters", body: "Prices, deposits, refunds, anything on the house and every complaint stay with you or your manager." },
      { icon: "shield", title: "No guessing on allergens", body: "It only repeats the allergen information you approved. Any allergy or diet question beyond that goes straight to your staff." },
      { icon: "lock", title: "Your guest list is yours", body: "Your restaurant gets its own private system. Guest data is only used for your restaurant and handled under GDPR. If you leave, you take it with you." },
      { icon: "users", title: "A team in Malta", body: "OARC’s team in Birkirkara sets it up, teaches it your menu and house rules, and picks up the phone." },
    ],
  },

  facts: {
    label: "Why now",
    title: "Good food is half the job. The rules are the other half.",
    items: [
      { n: "14", l: "Allergens your guests must be able to get information on, even for food that is not pre-packed.", src: { label: "EU Regulation 1169/2011, art. 44 and Annex II", href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011R1169" } },
      { n: "€250,000", l: "The minimum third-party liability insurance the MTA asks for to license a catering business.", src: { label: "Malta Tourism Authority: catering licence", href: "https://mta.com.mt/licenses-applications/catering-establishment/" } },
      { n: "15th", l: "The day your VAT return is due, in the second month after each tax period ends.", src: { label: "VAT Act, Cap. 406, art. 27", href: "https://legislation.mt/eli/cap/406/eng/pdf" } },
    ],
  },

  faq: [
    { q: "What is it, exactly?", a: "One AI system built around your restaurant. It answers every call and message, books tables into your diary, cuts no-shows, takes direct orders, brings past guests back, answers reviews, handles group enquiries and keeps your paperwork dates. OARC’s team in Malta sets it up and runs it with you." },
    { q: "Does it give allergy or dietary advice?", a: "No. It only repeats your restaurant’s own approved allergen information. If a guest asks something it can’t answer from that, it notes the allergy on the booking and passes the question to your staff. It never guesses." },
    { q: "Will it replace our waiters or hosts?", a: "No. It takes the phone, the messages, the reminders and the admin, so your team can look after the guests in the room." },
    { q: "Is guest data kept private?", a: "Yes. Each restaurant has its own private system. Guest data is only used for your restaurant and is handled under GDPR. Guests only get offers if they said yes, and anyone can stop them with one reply." },
    { q: "Does it work with our booking system and till?", a: "Yes. We connect it to the booking, till and messaging software you already use. If no connection exists, we build one. It reads your till’s reports and never issues fiscal receipts. Your till keeps doing that." },
    { q: "Can it do just one thing?", a: "Yes. You can start with one job, such as answering every call during service, and add the next when the first has paid for itself." },
    { q: "How fast is it live?", a: "We set up your first system in 72 hours, usually answering every call and message and booking into your diary. The rest is connected over the following weeks." },
    { q: "Do the AI agents call guests?", a: "Yes. A voice agent answers your phone, confirms big tables, returns missed calls and rings the waitlist when a table frees up. It never guesses about allergens, and a person can take over any call." },
    { q: "Will guests know they are talking to an AI?", a: "Yes. It says it is your restaurant’s AI assistant. Anyone who would rather speak to a person can ask, and it passes them to your team." },
    { q: "What if it gets something wrong?", a: "Every message and action is logged, so you can see what it did and why. Prices, deposits, refunds and complaints always go to a person. If something needs changing, OARC’s team in Malta changes it." },
    { q: "How much does it cost?", a: "Right now the first month is free. After that it depends on your restaurant’s size and what you switch on. Ask us and we price it for your restaurant." },
    { q: "Do restaurants in Malta need a licence?", a: "Yes. A restaurant needs a catering licence from the Malta Tourism Authority, unless it sits inside a licensed hotel and is run by the hotel. The rules also ask for priced menus shown outside, a fire safety certificate, and every permit and certificate kept on site." },
    { q: "Must restaurants in Malta give allergen information?", a: "Yes. Under EU food law, which applies in Malta, information on 14 listed allergens, such as gluten, eggs, milk, nuts and fish, must be available even for food that is not pre-packed. That includes the dishes you serve." },
    { q: "Does a restaurant in Malta have to give a fiscal receipt?", a: "Yes. Under Malta’s VAT Act, a fiscal receipt must be issued straight after payment, unless a tax invoice is required for that sale instead. The AI system does not issue receipts or change anything on your till." },
  ],

  cta: {
    titleBefore: "Stop losing tables to a ringing phone.",
    titleEm: "Starting this week.",
    body: "Claim your free first month. We set it up for you in 72 hours.",
    button: "Claim your free month",
    secondary: "Book a 20-minute call",
  },

  sources: [
    { label: "EU Regulation 1169/2011 on food information (EUR-Lex)", href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011R1169" },
    { label: "Malta Tourism Authority: catering establishment licence", href: "https://mta.com.mt/licenses-applications/catering-establishment/" },
    { label: "Catering Establishments Regulations (S.L. 409.15)", href: "https://legislation.mt/eli/sl/409.15/eng/pdf" },
    { label: "Value Added Tax Act (Cap. 406)", href: "https://legislation.mt/eli/cap/406/eng/pdf" },
  ],
  related: [
    { label: "Restaurant marketing in Malta", href: "/industries/restaurants" },
    { label: "AI voice host for restaurants", href: "/services/ai-restaurant-voice-host" },
    { label: "Voice AI for hospitality", href: "/voice-ai-worker/hospitality" },
    { label: "AI for hotels", href: "/ai/hotels" },
  ],
  disclaimer: "OARC Digital · Malta. OARC Digital is not a food safety or legal adviser and does not give allergy, food safety or legal advice. Names and figures on the screens are from a demo account.",
};
