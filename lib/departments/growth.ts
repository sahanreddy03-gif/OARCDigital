import type { DepartmentData } from "./types";
import { COBALT, PAPER } from "./types";

/**
 * "Get more customers" (/services/growth).
 * Built from the owner's original Growth department pop-up
 * (components/DepartmentDetailModal.tsx — GM_PARTS / GM_VIZ): same six-step
 * journey, same stats and diagrams. Re-worded into plain, hook-first English
 * with the search terms people use (growth marketing / digital marketing
 * agency Malta, more customers).
 */

const VIZ = {
  find() {
    let s =
      '<rect class="wire up" x="40" y="34" width="320" height="42" rx="10" style="animation-delay:.1s"/>' +
      '<circle class="wire up" cx="66" cy="55" r="8" style="animation-delay:.2s"/><line class="wire up" x1="72" y1="61" x2="80" y2="69" style="animation-delay:.2s"/>' +
      '<text class="lab up" x="90" y="60" font-size="13" style="animation-delay:.3s">best [your service] near me</text>';
    const rows = [
      { y: 98, on: 1, t: "You" },
      { y: 156, on: 0, t: "A competitor" },
      { y: 214, on: 0, t: "A competitor" },
    ];
    rows.forEach((r, i) => {
      s +=
        `<rect class="${r.on ? "nodeOn glow" : "wire"} up" x="40" y="${r.y}" width="320" height="44" rx="8" ${r.on ? "" : 'fill="rgba(14,14,14,.03)"'} style="animation-delay:${0.4 + i * 0.12}s"/>` +
        `<text class="${r.on ? "labk" : "lab"} up" x="60" y="${r.y + 28}" font-size="14" style="animation-delay:${0.5 + i * 0.12}s">${r.t}</text>`;
    });
    s += '<text class="lab up" x="40" y="282" font-size="12" style="animation-delay:.9s">found the moment they search</text>';
    return `<svg viewBox="0 0 400 292">${s}</svg>`;
  },
  findthem() {
    let s = "";
    [128, 92, 56].forEach((r, i) => {
      s += `<circle class="wire draw" style="--L:${(2 * Math.PI * r).toFixed(0)};animation-delay:${i * 0.18}s" cx="200" cy="150" r="${r}"/>`;
    });
    s +=
      '<circle class="nodeOn glow pop" cx="200" cy="150" r="22" style="animation-delay:.2s"/><text class="labk pop" x="200" y="154" font-size="10.5" text-anchor="middle" font-weight="700" style="animation-delay:.35s">buyers</text>';
    const pts = [
      [80, 66], [322, 80], [300, 236], [100, 240], [152, 104], [268, 116], [112, 196], [300, 192],
    ];
    const hit = [0, 3, 5, 6];
    pts.forEach((p, i) => {
      const on = hit.indexOf(i) > -1;
      s += `<circle class="${on ? "nodeOn glow" : "node"} pop" cx="${p[0]}" cy="${p[1]}" r="${on ? 7 : 5}" style="animation-delay:${0.8 + i * 0.05}s"/>`;
    });
    s += '<text class="lab up" x="200" y="294" font-size="12" text-anchor="middle" style="animation-delay:1s">more people just like them</text>';
    return `<svg viewBox="0 0 400 302">${s}</svg>`;
  },
  like() {
    let s = '<path class="wire draw" style="--L:520" d="M30,214 C110,214 124,110 204,98 C264,89 292,116 300,120"/>';
    const b = [[30, 214], [124, 158], [204, 98]];
    b.forEach((p, i) => {
      const on = i === 2;
      s += `<circle class="${on ? "nodeOn glow" : "node"} pop" cx="${p[0]}" cy="${p[1]}" r="${on ? 7 : 5}" style="animation-delay:${0.6 + i * 0.2}s"/>`;
    });
    s +=
      `<path class="pop" style="animation-delay:1.3s" d="M330,112 c-7,-11 -24,-4 -24,9 c0,11 24,24 24,24 c0,0 24,-13 24,-24 c0,-13 -17,-20 -24,-9 z" fill="#FF4B4B"/>` +
      '<text class="lab up" x="34" y="242" font-size="12" style="animation-delay:.3s">a reason to care</text>';
    return `<svg viewBox="0 0 400 260">${s}</svg>`;
  },
  pick() {
    const items = ["A clear price", "Recent work", "Real reviews", "A straight answer"];
    let s = "";
    items.forEach((l, i) => {
      const y = 32 + i * 60;
      s +=
        `<rect class="wire up" x="40" y="${y}" width="236" height="46" rx="8" style="animation-delay:${i * 0.1}s"/>` +
        `<text class="lab up" x="58" y="${y + 29}" font-size="14" style="animation-delay:${i * 0.1}s">${l}</text>` +
        `<circle class="nodeOn glow pop" cx="322" cy="${y + 23}" r="16" style="animation-delay:${0.6 + i * 0.14}s"/>` +
        `<path class="draw" style="--L:26;animation-delay:${0.9 + i * 0.14}s" d="M313,${y + 23} l6,7 l12,-14" stroke="${PAPER}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
    });
    return `<svg viewBox="0 0 400 292">${s}</svg>`;
  },
  stayclose() {
    const s =
      '<circle class="wire" cx="118" cy="128" r="72"/>' +
      '<g class="spin" style="transform-origin:118px 128px"><circle class="nodeOn glow" cx="118" cy="60" r="6"/></g>' +
      `<path class="draw" style="--L:100" d="M118,128 L118,76 M118,128 L150,142" stroke="${COBALT}" stroke-width="3.2" fill="none" stroke-linecap="round"/><circle class="nodeOn" cx="118" cy="128" r="4"/>` +
      '<rect class="nodeOn glow up" x="214" y="106" width="166" height="46" rx="12" style="animation-delay:.8s"/><text class="labk up" x="232" y="134" font-size="13" style="animation-delay:.9s">Tom replied · 4 sec</text>' +
      '<text class="lab up" x="118" y="228" font-size="12" text-anchor="middle" style="animation-delay:.5s">any hour, never quiet</text>';
    return `<svg viewBox="0 0 400 252">${s}</svg>`;
  },
  comeback() {
    let s = '<line class="wire" x1="28" y1="204" x2="372" y2="204"/>';
    [0, 1, 2, 3].forEach((i) => {
      const h = 44 + i * 30;
      const x = 120 + i * 58;
      s += `<rect class="nodeOn grow" x="${x}" y="${204 - h}" width="44" height="${h}" rx="3" style="animation-delay:${0.3 + i * 0.15}s"/>`;
    });
    s +=
      '<rect class="node grow" x="40" y="152" width="44" height="52" rx="3"/><text class="lab" x="62" y="228" font-size="12" text-anchor="middle">first sale</text>' +
      '<text class="lab" x="264" y="228" font-size="12" text-anchor="middle">every time after</text>' +
      `<path class="wire draw" style="--L:420;animation-delay:1s" d="M300,150 C360,120 360,40 200,40 C82,40 70,110 84,150"/><path class="pop" style="animation-delay:1.8s" d="M84,150 l-4,-14 l14,5 z" fill="${COBALT}"/>`;
    return `<svg viewBox="0 0 400 262">${s}</svg>`;
  },
};

export const growth: DepartmentData = {
  path: "/services/growth",
  title: "Growth Marketing Agency Malta | Get More Customers | OARC",
  description:
    "Award-winning growth marketing agency in Malta. One team gets you found on Google, Maps and social, wins the customer and brings them back. Rated 5.0 on Google.",
  hook: "Get more customers.",
  keywordLine: "Growth marketing for Malta businesses: Google, Maps, social media, ads and follow-up, run by one award-winning team.",
  answer:
    "OARC Digital is an award-winning growth marketing agency in Birkirkara, Malta. We get you more customers by running the whole journey, from the moment a stranger finds you to the day they come back, with one team and one number to judge us on: more customers.",
  bestFor:
    "Best for Malta restaurants, clinics, shops, property agents, gaming brands and service businesses that want more enquiries, bookings and repeat customers.",

  journey: {
    title: "From stranger to regular, in 6 steps.",
    intro:
      "A stranger finds you, likes you, picks you over the others and comes back for more. Miss one step and the rest never happen. So we run all six.",
    from: "A stranger",
    to: "A regular",
  },

  steps: [
    {
      title: "They find you.",
      short: "The people already looking.",
      text:
        "Someone in Malta searches for what you sell, on Google, on Maps or in ChatGPT. You show up first. We fix your Google profile, your reviews and your pages, so the people already looking find you and not your competitor. These are the cheapest customers there are.",
      who: "Our Search team",
      stat: "76%",
      statText: "of people who search for something nearby on their phone visit a business within a day. (Google)",
      viz: VIZ.find(),
      vizLabel: "Diagram: your business shows first when someone searches 'best near me'",
    },
    {
      title: "You find them.",
      short: "The people not looking yet.",
      text:
        "Most of your next customers are not searching today. We take the people who already bought from you, find thousands more just like them, and show them your ads on Instagram, Facebook, TikTok and Google, at the hour they are actually scrolling.",
      who: "Our Reach team",
      stat: "6",
      statText: "audiences built from your real customers, not guesses.",
      viz: VIZ.findthem(),
      vizLabel: "Diagram: ads reach new people who look like your existing buyers",
    },
    {
      title: "They like you.",
      short: "They care before they compare.",
      text:
        "An ad gets people to look. A story makes them care. We film and make videos that show who you are, why you do it and what you stand for, so people like you before they ever compare prices.",
      who: "The Studio, our creative team",
      stat: "49%",
      statText: "of an ad's sales comes from the creative itself, not the budget. (Nielsen)",
      viz: VIZ.like(),
      vizLabel: "Diagram: a story turns attention into liking",
    },
    {
      title: "They pick you.",
      short: "You beat the other three.",
      text:
        "Before anyone buys, they check four things: a clear price, recent work, real reviews and a straight answer. Whoever has all four wins. We make sure you do, starting with the price most of your competitors hide.",
      who: "Our Conversion team",
      stat: "4",
      statText: "things every buyer checks before choosing. We make sure you have all of them.",
      viz: VIZ.pick(),
      vizLabel: "Checklist: clear price, recent work, real reviews, a straight answer",
    },
    {
      title: "You stay close.",
      short: "You never go quiet.",
      text:
        "The moment someone messages you, they get an answer in seconds, day or night. That is Tom, your AI receptionist, on WhatsApp, phone, Instagram and email. Then we keep in touch until they are ready to buy.",
      who: "Our Lifecycle team, with Tom",
      stat: "21×",
      statText: "more likely to win a lead you answer in 5 minutes than one you answer in 30. (Lead Response Management study)",
      viz: VIZ.stayclose(),
      vizLabel: "Diagram: Tom replies to every enquiry within seconds, any hour",
      tom: true,
    },
    {
      title: "They come back.",
      short: "Again, and again.",
      text:
        "Your first sale is the expensive one. We ask for the review at the right moment, send the next offer when they are ready and make it easy to refer a friend. One customer becomes many, at almost no cost. This is the cheapest growth there is.",
      who: "Our Retention team",
      stat: "25–95%",
      statText: "more profit from keeping just 5% more of your customers. (Bain & Company)",
      viz: VIZ.comeback(),
      vizLabel: "Chart: sales grow every time a customer comes back",
    },
  ],

  compare: {
    title: "A normal agency vs OARC.",
    rows: [
      ["What you get", "A dashboard full of numbers", "More customers, step by step"],
      ["Who does the work", "Five suppliers you manage", "One team that runs all six steps"],
      ["How it is judged", "Likes, clicks and reach", "One number: more customers"],
      ["Who replies to enquiries", "Whoever is free", "Tom, in seconds, 24/7"],
      ["What you own", "Nothing when you leave", "Your accounts, ads, content and data"],
    ],
  },

  guarantee: {
    title: "30% more return in 90 days, or your money back.",
    text: "We agree the targets with you before we start. If we miss them, you get your money back. You carry none of the risk.",
  },

  faqs: [
    {
      question: "What is growth marketing?",
      answer:
        "Growth marketing is everything that turns strangers into paying, returning customers: being found on Google and Maps, ads on social media, content people like, a clear offer, fast replies and bringing customers back. OARC Digital runs all of it for Malta businesses as one team.",
    },
    {
      question: "Who is OARC Digital?",
      answer:
        "OARC Digital is Malta's first AI-native marketing agency, based at The Brewhouse in Birkirkara and founded in 2023. We are award-winning, named Best Marketing Agency and Best Growth Marketing Agency in Dubai and in Europe, rated 5.0 on Google, and trusted by 20+ brands including BrewDog, Kreta and 32Red.",
    },
    {
      question: "How much does a growth marketing agency cost in Malta?",
      answer:
        "It depends on how many of the six steps you need. After a free 20-minute call we give you one fixed monthly price. No long contract, and your ad budget goes to Google and Meta, never to us.",
    },
    {
      question: "How fast will I get more customers?",
      answer:
        "Ads and fast replies usually bring more enquiries in the first 30 to 60 days. Ranking higher on Google and Maps usually takes 3 to 6 months. We show you the numbers every month.",
    },
    {
      question: "Do you do SEO, Google Ads and Meta ads?",
      answer:
        "Yes. SEO and your Google profile get you found, Google, Meta and TikTok ads reach new people, and our creative team makes the ads and videos. One team, one plan.",
    },
    {
      question: "What is Tom?",
      answer:
        "Tom is OARC's AI receptionist. He answers every call, WhatsApp, Instagram message and email in seconds, day or night, in English, Maltese and Italian, and books customers in. A person on our team checks his work.",
    },
    {
      question: "Do I own my ad accounts and content?",
      answer: "Yes. Your ad accounts, videos, pages, reviews and customer data stay in your name, always.",
    },
    {
      question: "Is OARC a marketing agency or an AI company?",
      answer:
        "A marketing agency with AI built in. People do the strategy, the creative and the ads. AI, like Tom, handles the instant replies and follow-up so no customer is missed.",
    },
  ],

  cta: {
    title: "Run the machine on your business.",
    text: "Book a free 20-minute call. We show you which of the six steps is losing you the most customers, and how we fix it first.",
  },

  related: [
    { label: "Digital marketing agency Malta", href: "/aeo/digital-marketing-agency-malta" },
    { label: "Meet Tom, the AI receptionist", href: "/voice-ai-worker" },
    { label: "AI staff", href: "/services/ai-staff" },
    { label: "Social media", href: "/services/social" },
    { label: "Reputation", href: "/services/reputation" },
    { label: "Automation", href: "/services/automation" },
    { label: "Creative", href: "/creative" },
    { label: "H360 for restaurants", href: "/h360" },
    { label: "Our work", href: "/our-work" },
  ],
  updated: "November 2026",
};
