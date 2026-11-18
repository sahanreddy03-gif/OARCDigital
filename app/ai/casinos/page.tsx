import type { Metadata } from "next";
import Link from "next/link";
import FlagshipShell from "@/components/flagship/FlagshipShell";
import { Arrow, WaForm, WaIcon, waLink } from "@/components/flagship/parts";
import { NAP } from "@/lib/seo/nap";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
import { twinLanguages } from "@/lib/i18n/twins";

const BASE = "https://oarcdigital.com";
const URL = `${BASE}/ai/casinos`;
const TITLE = "Casino Marketing and AI Systems in Malta | OARC Digital";
const DESCRIPTION =
  "Custom systems, a staff app, room and table bookings, and marketing that brings players and guests to casinos and casino hotels in Malta. Free blueprint in 48 hours.";
const OG = { title: "Systems and marketing for casinos in Malta", subtitle: "Custom systems, a staff app, bookings and marketing, from one team.", eyebrow: "AI systems" };

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL, languages: twinLanguages("/ai/casinos") },
  openGraph: { images: ogImageEntry(OG), title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { images: [ogImageUrl(OG)], card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const BLUEPRINT = "Hi OARC. Our casino or hotel is {x}. Please send our free blueprint.";
const PRICE = waLink("Hi OARC. Please send me your price for a casino or casino hotel. Our property is: ");

const three = [
  { h: "We build your systems.", p: "Custom software for your casino and your hotel: bookings, your loyalty club, a staff app and one clear dashboard.", we: "Built around how your property really runs." },
  { h: "We fill your floor and your rooms.", p: "Hotel rooms, poker seats, private tables, restaurant tables and stay-and-play packages, booked day and night.", we: "No enquiry waits until morning." },
  { h: "We bring the right guests.", p: "Film, content, social media and adverts that reach locals, tourists, high-value travellers and companies.", we: "In Malta, across Europe and in Asia." },
];

const parts = [
  { h: "The casino floor", p: "Slots, tables, the poker room and the VIP rooms. Schedules, bookings and offers in one place." },
  { h: "The hotel", p: "Direct room bookings, arrivals, guest messages and housekeeping, linked to the casino." },
  { h: "Restaurants and bars", p: "Table bookings, special nights and guest notes, so a player gets the right table for dinner." },
  { h: "Events and groups", p: "Company nights, conferences, tournaments and private parties, quoted and followed up fast." },
];

// Each game, who usually plays it, and how OARC reaches that crowd.
const games = [
  { h: "Slots", p: "The biggest crowd on the floor. Locals and visitors who want an easy, social night out.", we: "Offers and slot tournaments, promoted where the rules allow." },
  { h: "Roulette", p: "The classic first table for a new visitor.", we: "Campaigns for tourists and hotel guests." },
  { h: "Blackjack", p: "Players who enjoy skill and a fast game.", we: "Table offers and learn-to-play nights." },
  { h: "Punto banco and baccarat", p: "The first choice of many high-value players, most of all from Asia.", we: "Private-table packages, in their own language." },
  { h: "Table poker", p: "Ultimate Texas Hold’em and three-card games, played against the house.", we: "For poker fans who want a quicker game." },
  { h: "Poker cash games", p: "Regulars who come back every week.", we: "A poker community: schedule, seats and updates." },
  { h: "Poker tournaments", p: "Players who travel across Europe for the right event.", we: "Tournament pages, satellites and seat booking." },
  { h: "VIP and private rooms", p: "High-value guests who expect to be known.", we: "Tools for your hosts: who is arriving and what they like." },
];

const bookings = [
  "Hotel rooms and suites", "Poker tournament seats", "Cash-game seats", "Private and VIP tables", "Restaurant tables", "Bar and lounge tables",
  "Event tickets", "Company and group nights", "Airport transfers", "Birthdays and celebrations",
];

const offers = [
  { h: "Stay and play", p: "A room, a welcome and an evening on the floor, sold as one package." },
  { h: "Dine and play", p: "Dinner in your restaurant, then the tables. One booking." },
  { h: "Tournament weekends", p: "The poker event, the room and the transfer, booked together." },
  { h: "Company nights", p: "Private events, incentive trips and conference evenings for businesses." },
  { h: "Celebrations", p: "Birthdays and big nights, planned with your team." },
  { h: "High-value weekends", p: "For VIP and junket guests: the suite, the host, the private table and the car, arranged before they land." },
];

const guests = [
  { h: "Locals.", p: "People in Malta who want a good night out. Every advert follows Malta’s age rules." },
  { h: "Tourists already here.", p: "Found on Google, Maps and AI answers when they search for what to do tonight." },
  { h: "High-value travellers.", p: "Wealthy guests in Europe and Asia who plan a trip around the stay, the food and the tables." },
  { h: "Companies and groups.", p: "Incentive trips, conferences and private events, reached on LinkedIn and through planners." },
  { h: "Poker players.", p: "Players who follow the European tournament calendar and choose where to travel next." },
  { h: "Your own hotel guests.", p: "Already in your rooms. Invited down to the floor at the right moment." },
];

const app = [
  "Rotas and shift swaps, approved by a manager",
  "Announcements, with a tick when each person has read them",
  "Chat by department and by shift",
  "Tasks and handover notes",
  "Incident and maintenance forms",
  "Leave requests, payslips and documents",
  "Training and house rules",
  "Built-in translation for a mixed team",
  "Works on any phone",
];

const depts: [string, string][] = [
  ["Gaming floor", "Table and slot schedules, staffing and floor notes in one place."],
  ["Poker room", "Tournament schedule, seat booking and waiting lists."],
  ["VIP and hosts", "Who is arriving, what they like and what to prepare."],
  ["Cage and cashier", "Shift handovers and checklists. Money decisions stay with your people."],
  ["Loyalty club", "Sign-ups, tiers, offers and birthday messages."],
  ["Hotel front desk", "Direct bookings, arrivals and guest messages."],
  ["Housekeeping", "Rooms ready, guest requests and repairs."],
  ["Restaurants and bars", "Table bookings, special nights and guest notes."],
  ["Events and groups", "Quotes, schedules and follow-up."],
  ["Surveillance and security", "Incident logs and shift handovers. Cameras stay on your own systems."],
  ["HR and rota", "Rosters, swaps, leave and training."],
  ["Compliance", "Checklists, records and reminders, ready for your compliance team."],
];

const content = [
  "Property film", "Tournament coverage", "Chef and bar stories", "Room and suite tours", "Reels and short videos", "Photos",
  "Social media, run every week", "Google and Google Maps", "AI search answers", "Meta, Google and LinkedIn adverts", "Travel and event listings", "Offers to members who opted in",
];

const rules = [
  { h: "Adults only.", p: "Adverts are aimed at adults, and never at children." },
  { h: "No false promises.", p: "We never suggest that gaming is a way to make money or to fix a problem." },
  { h: "Responsible gaming on everything.", p: "Every advert carries the responsible gaming message and where to get help." },
  { h: "Self-exclusion is respected.", p: "People who have excluded themselves are never contacted. Your lists are checked in every campaign." },
  { h: "No pressure on at-risk players.", p: "Player data is never used to push people who show signs of a gambling problem." },
  { h: "People decide.", p: "AI never decides anything about a player’s account, limits or money. It hands those to your team." },
];

const reasons = [
  { h: "Systems and marketing in one team.", p: "The agency that brings the guests also builds the system that books them." },
  { h: "We work on your property.", p: "Our film crew and our developers come to you and see how each shift really runs." },
  { h: "It works with what you have.", p: "Your casino management system, your hotel booking system, your tills and your CRM. We check each one with your IT team." },
  { h: "Malta, Europe and Asia.", p: "We know the local crowd, and we plan campaigns for guests abroad in their own language." },
  { h: "AI and people together.", p: "AI does the busy work. Your team keeps every decision that matters." },
  { h: "You can meet us.", p: "We are in Birkirkara. Real people, in person, in Malta." },
];

const included = [
  "Custom systems for your casino and hotel",
  "A staff app for every department",
  "Room, table and seat bookings",
  "AI that answers guests in their language",
  "Tools for your loyalty club",
  "Tools for your VIP hosts",
  "Packages and offers, planned with you",
  "Film, photos and short videos",
  "Social media, run every week",
  "Google, Maps and AI search",
  "Adverts in Malta, Europe and Asia",
  "Pages for company and group sales",
  "One dashboard and a monthly report",
  "Training and monthly care",
];

const faqs = [
  { question: "What does OARC Digital do for casinos in Malta?", answer: "Three things. We build custom systems for your casino and hotel, including a staff app. We take bookings for rooms, poker seats, tables and packages, day and night. And we run the marketing that brings guests: film, content, social media and adverts. One team does all three." },
  { question: "Do you work with casino hotels, restaurants and bars too?", answer: "Yes. A casino is usually part of a bigger property. We connect the casino floor, the hotel, the restaurants, the bars and the events team, so a guest is known in all of them and one package can cover all of them." },
  { question: "Can it work with our casino management system and our hotel booking system?", answer: "In most cases yes. We connect to the tools you already use, such as your casino management system, your hotel booking system, your tills and your CRM. We check each one with your IT team before we promise anything." },
  { question: "What is the staff app?", answer: "One app for your whole team. It holds rotas and shift swaps, announcements, chat by department and by shift, tasks and handover notes, incident reports and training. It works on any phone, in English, Maltese and the other languages your team speaks." },
  { question: "How do you bring high-value guests from Europe and Asia?", answer: "We plan stay, dine and play packages with you. Then we place them where those guests look: search, AI answers, social media, travel and event listings, and adverts in their own language. Every campaign follows the gaming advertising rules of the country it runs in." },
  { question: "Which games do you market?", answer: "All of them, each to its own crowd: slots, roulette, blackjack, punto banco and baccarat, poker cash games, poker tournaments and VIP tables. A slots player and a tournament poker player are found in different places, so each game gets its own plan." },
  { question: "Can guests book a poker seat, a table or a room in one message?", answer: "Yes. Guests ask on WhatsApp, your website, the phone or social media. The system answers in their language, checks what is free and books it, or passes it to your team when a person is needed." },
  { question: "Do your adverts follow Malta's gaming advertising rules?", answer: "Yes. Adverts are for adults only, never promise winnings, name the licence holder, carry the responsible gaming message and never target people who have excluded themselves. Your compliance team approves every campaign before it goes out." },
  { question: "Do you check the self-exclusion list before a campaign?", answer: "Yes. Before any message goes to your members, your exclusion list is applied, so people who have excluded themselves are never contacted. Members who opted out of marketing are removed too." },
  { question: "Who is responsible if an advert breaks the rules?", answer: "Under Malta's rules the licence holder stays responsible for its adverts, even when an agency makes them. That is why nothing goes out until your compliance team has approved it." },
  { question: "Does the AI make decisions about players?", answer: "No. The AI answers questions, takes bookings and does admin. Anything about a player's account, limits, checks or money goes to your team. People decide." },
  { question: "Is our guest data safe?", answer: "Your data stays yours. It is protected under GDPR, only the people who need it can see it, and we work under a confidentiality agreement. The systems we build for you are yours too." },
  { question: "How long does it take?", answer: "A booking assistant or a staff app can be live in weeks. Bigger systems that connect many departments take longer. You get the dates for each step before we start." },
  { question: "How much does it cost?", answer: "It depends on the size of your property and what you need built. We visit you, see how you work and then give you a price. Send us the name of your property on WhatsApp to start." },
  { question: "Do you also work with online casinos?", answer: "Yes. We have separate AI systems for iGaming operators, suppliers and affiliates. This page is for land-based casinos and the hotels around them." },
  { question: "What is in the free blueprint?", answer: "A plan for your property: where guests are being lost, where staff time is being lost, which system to build first and which guests to go after. You get it on WhatsApp within 48 hours." },
  { question: "Where is OARC Digital based?", answer: `${NAP.streetAddressShort}, ${NAP.addressLocality} ${NAP.postalCode}, Malta. You can meet the team in person. WhatsApp ${NAP.phoneDisplay}. Email ${NAP.email}.` },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "Casino marketing and AI systems in Malta",
      serviceType: "Custom software, staff app, bookings and marketing for land-based casinos and casino hotels",
      description: DESCRIPTION,
      url: URL,
      areaServed: { "@type": "Country", name: "Malta" },
      provider: { "@id": `${BASE}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "OARC Digital", item: BASE },
        { "@type": "ListItem", position: 2, name: "AI systems", item: `${BASE}/ai` },
        { "@type": "ListItem", position: 3, name: "Casinos", item: URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

const bar = [
  "Slots", "Roulette", "Blackjack", "Punto banco", "Baccarat", "Poker cash games", "Poker tournaments", "VIP rooms",
  "Hotel rooms", "Restaurants", "Bars", "Events", "Loyalty club",
];

function Bar() {
  return (
    <div className="bset">
      <em>We fill</em>
      {bar.map((b) => <span key={b}>{b}</span>)}
    </div>
  );
}

export default function AiCasinosPage() {
  return (
    <FlagshipShell accent="#8C6A16" accentSoft="#F1E4BE" navTheme="dark" langPath="/ai/casinos">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div id="top">
        {/* 1 · the promise and the free blueprint */}
        <section className="hero dark">
          <div className="wrap">
            <h1>
              <span className="kick">Casino marketing and AI systems in Malta</span>
              <span className="big">We fill your tables <i className="mk">and your rooms.</i></span>
            </h1>
            <p className="hsub">Custom systems, a staff app and marketing for casinos, and the hotels, restaurants and bars around them.</p>

            <div className="hgrid">
              <div className="ocard">
                <p className="otop"><span className="otag">Free</span><span className="olim">In 48 hours</span></p>
                <h2>Your free casino blueprint.</h2>
                <p>Send us the name of your casino or hotel. In 48 hours you get a plan: where guests are lost, where staff time is lost, and what to build first.</p>
                <WaForm id="blueprint" message={BLUEPRINT} button="Get my blueprint" placeholder="Your casino or hotel name" label="Your casino or hotel name" />
                <p className="onote"><span>Opens WhatsApp. No call. No long form.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-hero">Or get my price</a></p>
              </div>

              <div className="screens" aria-hidden="true">
                <div className="scr">
                  <b>Poker room · Saturday</b>
                  <div className="row"><i>1</i>Tournament · 21:00</div>
                  <div className="row you"><i>2</i>Seat 7 · Booked</div>
                </div>
                <div className="scr">
                  <b>WhatsApp · 02:10</b>
                  <div className="bub">Two nights, dinner and the tournament?</div>
                  <div className="bub ai">Done. <u>Room, table and seat booked.</u></div>
                </div>
                <div className="scr s-hide">
                  <b>Staff app</b>
                  <div className="row"><i>1</i>Rota · Night shift</div>
                  <div className="row you"><i>2</i>Shift swap approved</div>
                </div>
                <div className="scr s-hide">
                  <b>Tonight</b>
                  <div className="kv"><span>Guests arriving</span><b>On the list</b></div>
                  <div className="kv"><span>Waiting for a host</span><b>None</b></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="band lt" aria-hidden="true">
          <div className="brun"><Bar /><Bar /></div>
        </div>

        {/* 2 · three jobs */}
        <section className="sec" id="jobs">
          <div className="wrap">
            <p className="lab" data-rv><b>01</b>What we do</p>
            <div className="shead" data-rv>
              <h2 className="h2">Three jobs. <i>One team.</i></h2>
              <p className="lead">Most agencies only run your adverts. Most software firms only build your systems. We do both, and we connect them.</p>
            </div>
            <div className="grid g3">
              {three.map((x, i) => (
                <article className="card" key={x.h} data-rv>
                  <span className="n" aria-hidden="true">{i + 1}</span>
                  <h3>{x.h}</h3>
                  <p>{x.p}</p>
                  <p className="we">{x.we}</p>
                </article>
              ))}
            </div>
            <p className="under" data-rv>
              Casino work is shared by all 8 departments at <Link className="txt" href="/" data-testid="link-home-context">OARC Digital</Link>, a digital and AI agency in Malta.
              So your systems, your content and your adverts come from one team.
            </p>
          </div>
        </section>

        {/* 3 · one property, many businesses */}
        <section className="sec paper" id="property">
          <div className="wrap">
            <p className="lab" data-rv><b>02</b>The whole property</p>
            <div className="shead" data-rv>
              <h2 className="h2">A casino is never <i>just a casino.</i></h2>
              <p className="lead">It is a hotel, restaurants, bars and events too. Your guests see one place. Your systems should see one guest.</p>
            </div>
            <div className="grid g4">
              {parts.map((x) => (
                <article className="card" key={x.h} data-rv>
                  <h3 style={{ marginTop: 0 }}>{x.h}</h3>
                  <p>{x.p}</p>
                </article>
              ))}
            </div>
            <p className="after" data-rv>One guest profile across all four. A hotel guest gets the right casino offer. A player gets the right table for dinner.</p>
          </div>
        </section>

        {/* 4 · every game */}
        <section className="sec" id="games">
          <div className="wrap">
            <p className="lab" data-rv><b>03</b>The games</p>
            <div className="shead" data-rv>
              <h2 className="h2">Every game has <i>its own crowd.</i></h2>
              <p className="lead">A slots player and a tournament poker player are found in very different places. We market each game to the people who play it.</p>
            </div>
            <div className="grid g3">
              {games.map((g) => (
                <article className="card" key={g.h} data-rv>
                  <h3 style={{ marginTop: 0 }}>{g.h}</h3>
                  <p>{g.p}</p>
                  <p className="we">{g.we}</p>
                </article>
              ))}
              <article className="card cta" data-rv>
                <div>
                  <h3>Which game needs more players?</h3>
                  <p>We plan it for you. Free, in 48 hours.</p>
                </div>
                <a className="btn btn-w" href="#top" data-testid="link-blueprint-games">Get my blueprint <Arrow /></a>
              </article>
            </div>
          </div>
        </section>

        {/* 5 · bookings */}
        <section className="sec paper" id="bookings">
          <div className="wrap">
            <p className="lab" data-rv><b>04</b>Bookings</p>
            <div className="shead" data-rv>
              <h2 className="h2">Booked in <i>one message.</i></h2>
              <p className="lead">Guests ask on WhatsApp, your website, the phone or social media. The system answers in their language and books it.</p>
            </div>
            <ul className="chips big" data-rv>
              {bookings.map((it) => <li key={it}>{it}</li>)}
              <li className="on">Stay, dine and play packages</li>
            </ul>
            <p className="under" data-rv>Anything about a player’s account, limits or money goes straight to your team. People decide. The system never does.</p>
          </div>
        </section>

        {/* 6 · offers */}
        <section className="sec" id="offers">
          <div className="wrap">
            <p className="lab" data-rv><b>05</b>Packages</p>
            <div className="shead" data-rv>
              <h2 className="h2">We build the offers <i>with you.</i></h2>
              <p className="lead">We sit down with your team and plan what will sell. Then we put it in front of the right people.</p>
            </div>
            <div className="grid g3">
              {offers.map((x) => (
                <article className="card" key={x.h} data-rv>
                  <h3 style={{ marginTop: 0 }}>{x.h}</h3>
                  <p>{x.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 7 · who we bring */}
        <section className="sec dark" id="guests">
          <div className="wrap">
            <p className="lab" data-rv><b>06</b>Your guests</p>
            <div className="shead" data-rv>
              <h2 className="h2">The right guests. <i>From the right places.</i></h2>
              <p className="lead">We do not just make adverts. We put your offer where your next guest is already looking.</p>
            </div>
            <ul className="why">
              {guests.map((r) => (
                <li key={r.h} data-rv><h3>{r.h}</h3><p>{r.p}</p></li>
              ))}
            </ul>
            <div className="stat" data-rv>
              <b>68.8%</b>
              <p>
                of casino visits in Malta in 2025 were by guests from outside Malta. So most of your marketing has to reach people before they land.
                <small>Source: Malta Gaming Authority, Annual Report 2025.</small>
              </p>
            </div>
          </div>
        </section>

        {/* 8 · the staff app */}
        <section className="sec" id="staff-app">
          <div className="wrap">
            <p className="lab" data-rv><b>07</b>The staff app</p>
            <div className="shead" data-rv>
              <h2 className="h2">One app for <i>your whole team.</i></h2>
              <p className="lead">A big property runs on many people, on shifts, in many departments. We build one app that keeps them all together.</p>
            </div>
            <div className="split" data-rv>
              <ul className="chk">{app.map((it) => <li key={it}>{it}</li>)}</ul>
              <div className="phone" aria-hidden="true">
                <div className="scrn">
                  <div className="bar"><b>Night shift</b><span>Floor</span></div>
                  <div className="pin">Tonight: poker tournament at 21:00. All seats taken.</div>
                  <div className="msg"><small>Pit 2</small>Table 6 needs a dealer at 22:00.</div>
                  <div className="msg me"><small>Floor manager</small>Covered. Maria is on her way.</div>
                  <div className="msg"><small>Front desk</small>Suite guest arriving at 23:30. Host ready?</div>
                  <div className="msg me"><small>VIP host</small>Ready. Car is at the airport.</div>
                  <div className="tabs"><b>Chat</b><span>Rota</span><span>Tasks</span><span>News</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9 · every department */}
        <section className="sec paper" id="departments">
          <div className="wrap">
            <p className="lab" data-rv><b>08</b>Your departments</p>
            <div className="shead" data-rv>
              <h2 className="h2">Every department. <i>One system.</i></h2>
              <p className="lead">Each part of your property gets what it needs, and they all share the same information.</p>
            </div>
            <dl className="terms" data-rv>
              {depts.map(([t, d]) => (
                <div key={t}><dt>{t}</dt><dd>{d}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        {/* 10 · content and adverts */}
        <section className="sec" id="content">
          <div className="wrap">
            <p className="lab" data-rv><b>09</b>Content and adverts</p>
            <div className="shead" data-rv>
              <h2 className="h2">We film it. We post it. <i>We run the adverts.</i></h2>
              <p className="lead">Our crew comes to your property. One shoot gives you weeks of content for every channel.</p>
            </div>
            <ul className="chips big" data-rv>
              {content.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
        </section>

        {/* 11 · by the rules */}
        <section className="sec dark" id="rules">
          <div className="wrap">
            <p className="lab" data-rv><b>10</b>Done right</p>
            <div className="shead" data-rv>
              <h2 className="h2">Done right. <i>By the rules.</i></h2>
              <p className="lead">Gaming is regulated, and so is its advertising. Everything we make is built to follow the rules.</p>
            </div>
            <ul className="why">
              {rules.map((r) => (
                <li key={r.h} data-rv><h3>{r.h}</h3><p>{r.p}</p></li>
              ))}
            </ul>
            <p className="note" data-rv>
              We work to Malta’s Gaming Commercial Communications Regulations and the guidance of the Malta Gaming Authority.
              Every advert names the licence holder, and your compliance team approves every campaign before it goes out.
            </p>
          </div>
        </section>

        {/* 12 · why OARC */}
        <section className="sec paper" id="why">
          <div className="wrap">
            <p className="lab" data-rv><b>11</b>Why us</p>
            <div className="shead" data-rv>
              <h2 className="h2">Why OARC Digital for <i>your casino.</i></h2>
              <p className="lead">We do not sell you software and leave, or post for you and hope. We build it, fill it and run it with you.</p>
            </div>
            <div className="grid g3">
              {reasons.map((r) => (
                <article className="card" key={r.h} data-rv>
                  <h3 style={{ marginTop: 0 }}>{r.h}</h3>
                  <p>{r.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 13 · the package */}
        <section className="sec" id="package">
          <div className="wrap">
            <p className="lab" data-rv><b>12</b>The package</p>
            <div className="shead" data-rv>
              <h2 className="h2">Your whole property. <i>Covered.</i></h2>
              <p className="lead">One package. One team. Systems, bookings and marketing for the casino and everything around it.</p>
            </div>
            <div className="pack k" data-rv>
              <div>
                <p className="otop"><span className="otag">Everything included</span></p>
                <h3>The Full House package.</h3>
                <p className="pp">Built around your property and run with your team. The price depends on the size of your property and what you need.</p>
                <div className="pbtns">
                  <a className="btn btn-y" href={PRICE} target="_blank" rel="noopener" data-testid="link-price-package"><WaIcon />Get my price</a>
                  <a className="btn btn-o" href="#top" data-testid="link-blueprint-package">Get my free blueprint</a>
                </div>
              </div>
              <ul className="chk">{included.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
            <p className="under" data-rv>
              Run a hotel or a restaurant without a casino? See our AI systems for <Link className="txt" href="/ai/hotels">hotels</Link> and <Link className="txt" href="/ai/restaurants">restaurants</Link>.
              Run an online casino? See <Link className="txt" href="/ai/igaming-operators">AI for iGaming operators</Link>, or <Link className="txt" href="/ai">all AI systems</Link>.
            </p>
          </div>
        </section>

        {/* 14 · how it starts */}
        <section className="sec paper" id="start">
          <div className="wrap">
            <p className="lab" data-rv><b>13</b>How it starts</p>
            <div className="shead" data-rv>
              <h2 className="h2">Start with <i>one message.</i></h2>
              <p className="lead">No meeting to book. No form to fill in. Just the name of your property.</p>
            </div>
            <ol className="tl">
              <li data-rv><p className="when">Today</p><h3>WhatsApp us your property’s name.</h3><p>That is all we need to begin.</p></li>
              <li data-rv><p className="when">In 48 hours</p><h3>You get your free blueprint.</h3><p>Where guests are lost, where staff time is lost, and what to build first.</p></li>
              <li data-rv><p className="when">Then</p><h3>We visit and plan.</h3><p>We walk the property with your team, agree the plan and the offers, and give you the price and the dates.</p></li>
              <li data-rv><p className="when">Every month</p><h3>We run it with you.</h3><p>New content, new campaigns, system care and one clear report.</p></li>
            </ol>
          </div>
        </section>

        {/* 15 · questions */}
        <section className="sec" id="faq">
          <div className="wrap">
            <p className="lab" data-rv><b>14</b>Before you ask</p>
            <div className="shead" data-rv>
              <h2 className="h2">Questions from <i>casino teams.</i></h2>
              <p className="lead">Short, straight answers. Ask us anything else on WhatsApp.</p>
            </div>
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.question}>
                  <summary>{f.question}</summary>
                  <p className="faq-answer">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 16 · close */}
        <section className="fin dark">
          <div className="wrap">
            <h2 className="h2" data-rv>Keep the floor <i>full.</i></h2>
            <WaForm id="blueprint2" message={BLUEPRINT} button="Get my blueprint" placeholder="Your casino or hotel name" label="Your casino or hotel name" />
            <p className="onote"><span>Free. In 48 hours. Opens WhatsApp.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-close">Or get my price</a></p>
            <p className="home">Find OARC Digital at {NAP.streetAddressShort}, {NAP.addressLocality} {NAP.postalCode}. For adults only. Please play responsibly.</p>
          </div>
        </section>
      </div>
    </FlagshipShell>
  );
}
