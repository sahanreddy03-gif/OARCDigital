import type { Metadata } from "next";
import Link from "next/link";
import FlagshipShell from "@/components/flagship/FlagshipShell";
import { Arrow, WaForm, WaIcon, waLink } from "@/components/flagship/parts";
import { AI_SYSTEMS, nameInSentence } from "@/lib/ai-systems";
import { NAP } from "@/lib/seo/nap";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const BASE = "https://oarcdigital.com";
const URL = `${BASE}/ai`;
// Title and URL are unchanged on purpose.
const TITLE = "AI Systems for Businesses in Malta, by Industry | OARC Digital";
const DESCRIPTION =
  "AI systems for businesses in Malta. AI that answers every enquiry, books, follows up and does the admin, connected to your website, WhatsApp, phone and CRM. Free AI blueprint in 48 hours.";
const OG = { title: "AI systems, built around your business", subtitle: "Set up and run by OARC's team in Malta.", eyebrow: "AI systems" };

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { images: ogImageEntry(OG), title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { images: [ogImageUrl(OG)], card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const BLUEPRINT = "Hi OARC. My business is {x}. Please send my free AI blueprint.";
const PRICE = waLink("Hi OARC. Please send me your price for an AI system. My business is: ");

const jobs = [
  { h: "It answers.", p: "Website chat, WhatsApp, phone, email and social messages. Day and night, from your own information.", we: "No enquiry waits until morning." },
  { h: "It books.", p: "It takes appointments, sends reminders and moves bookings when plans change.", we: "Fewer no-shows. A fuller calendar." },
  { h: "It sells.", p: "It catches every lead, asks the right questions, follows up and prepares the quote.", we: "No lead goes cold." },
  { h: "It runs the admin.", p: "Documents, invoices, data entry and the weekly report, done by themselves.", we: "Hours back, every week." },
  { h: "It knows.", p: "One screen shows what came in, what was done and what needs you.", we: "You see everything." },
];

const tools = [
  "Your website", "WhatsApp", "Phone calls", "Email", "Instagram and Facebook messages", "Google Calendar", "Outlook",
  "HubSpot", "Salesforce", "Your own CRM", "Google Sheets and Excel", "Shopify", "WordPress", "Your booking system", "Your till or POS", "Your accounting software",
];

const control = [
  { h: "You set the rules.", p: "What it may say, what it may do, and what always needs your OK." },
  { h: "When it is not sure, it asks.", p: "It hands the conversation to a person, with the full history, so nobody repeats themselves." },
  { h: "You can see everything.", p: "Every message and every action is kept in a record you can read." },
  { h: "A person can step in.", p: "Your team can take over any conversation at any moment." },
  { h: "Tested before it goes live.", p: "We try it on real questions from your business first, and fix what it gets wrong." },
  { h: "You can switch it off.", p: "It is your system. One click stops it." },
];

const terms: [string, string][] = [
  ["AI agent", "Software that does a job for you. It does not just chat."],
  ["LLM", "The AI brain that reads and writes, like the one behind ChatGPT."],
  ["Knowledge base", "Your own information. The AI answers from this, not from guesses."],
  ["Automation", "Steps that run by themselves, in the right order."],
  ["Integration", "How your tools talk to each other."],
  ["CRM", "One list of every customer and every lead."],
  ["Human handoff", "The moment a person approves or takes over."],
  ["Guardrails", "Rules the AI is not allowed to break."],
  ["Hallucination", "When AI makes something up. Good systems are built to stop it."],
  ["Audit log", "A record of everything the AI did."],
  ["GDPR", "The EU law that protects personal data."],
  ["Voice AI", "AI that answers the phone and talks like a person."],
];

const reasons = [
  { h: "We come to you first.", p: "Our developers visit, watch how your week really runs, and build around that." },
  { h: "A system, not a chatbot.", p: "Website, WhatsApp, phone, bookings, CRM and admin, working as one." },
  { h: "It works with what you have.", p: "HubSpot, Salesforce or your own tools. You do not have to change everything." },
  { h: "We run it with you.", p: "We watch it, fix it and improve it every month. You are never left alone with it." },
  { h: "AI and marketing in one team.", p: "The same agency brings the enquiries and builds the system that answers them." },
  { h: "You can meet us.", p: "We are in Birkirkara. Real people, in person, in Malta." },
];

const included = [
  "A map of your week and where time is lost",
  "AI chat on your website",
  "AI on WhatsApp and social messages",
  "Voice AI that answers the phone",
  "AI that reads and sorts your email",
  "Bookings, reminders and reschedules",
  "Lead capture and follow-up",
  "Quotes and proposals prepared for you",
  "Your CRM connected and kept up to date",
  "Documents, invoices and data entry",
  "One dashboard for everything",
  "Rules, approvals and a full record",
  "Training for your team",
  "Monthly care, checks and improvements",
];

const faqs = [
  { question: "What is an AI system for a business?", answer: "It is software that does everyday jobs for you: answering enquiries, booking appointments, following up leads and doing admin. It is connected to your website, WhatsApp, phone, email and customer list, so the jobs happen by themselves, day and night, while your team stays in control." },
  { question: "What exactly will it do for my business?", answer: "That depends on your business. Send us your business name and within 48 hours you get a free AI blueprint: a map of the jobs AI can take off your team, and which one to build first." },
  { question: "Will it work with the tools I already use?", answer: "Yes, in most cases. We connect to your website, WhatsApp, phone, email, calendar and customer list, including HubSpot, Salesforce and custom systems. You do not have to change everything." },
  { question: "How long until it is live?", answer: "We set up your first system in 72 hours. Bigger systems with many connections take longer, and you get the dates before we start." },
  { question: "How much does an AI system cost in Malta?", answer: "It depends on how many jobs it does and how many tools it connects to. We visit you, see how you work and then give you a price. Send us your business name on WhatsApp to start." },
  { question: "What happens when the AI does not know the answer?", answer: "It does not guess. It hands the conversation to a person on your team, with the full history, so the customer does not have to repeat anything." },
  { question: "Can a person take over at any time?", answer: "Yes. Your team can step into any conversation at any moment, and you can switch the system off with one click." },
  { question: "Will it say wrong things to my customers?", answer: "We build it to answer from your own information, with rules it may not break, and we test it on real questions from your business before it goes live. Anything it is unsure about goes to a person." },
  { question: "Is it a chatbot?", answer: "No. A chatbot only chats. An AI system also does the work: it books the appointment, updates your customer list, sends the reminder and prepares the quote." },
  { question: "Does it speak Maltese and other languages?", answer: "It can answer in English and Maltese, and in the other languages your customers use. We test each language with you before launch." },
  { question: "Who looks after it after launch?", answer: "We do. We check it, fix it and improve it every month, and your team can reach us in person in Malta." },
  { question: "Do I need technical staff?", answer: "No. We build it, connect it and run it with you. Your team only needs to know how to read the dashboard and when to step in." },
  { question: "Can I start small?", answer: "Yes. Most businesses start with one job, like answering enquiries or booking, and add more once they see it working." },
  { question: "Do you have AI systems for my industry?", answer: "Yes. We have systems for real estate, law firms, clinics, hotels, restaurants, tourism, schools, iGaming and general business admin, and we build for any other industry too." },
  { question: "Where is OARC Digital based?", answer: `${NAP.streetAddressShort}, ${NAP.addressLocality} ${NAP.postalCode}, Malta. You can meet the team in person. WhatsApp ${NAP.phoneDisplay}. Email ${NAP.email}.` },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${URL}#page`,
      name: "AI systems by industry",
      url: URL,
      description: DESCRIPTION,
      about: { "@id": `${BASE}/#organization` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [
          ...AI_SYSTEMS.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `AI system for ${nameInSentence(c.name)}`,
            url: `${BASE}/ai/${c.slug}`,
          })),
          {
            "@type": "ListItem",
            position: AI_SYSTEMS.length + 1,
            name: "AI systems and marketing for casinos",
            url: `${BASE}/ai/casinos`,
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "OARC Digital", item: BASE },
        { "@type": "ListItem", position: 2, name: "AI systems", item: URL },
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
  "Website chat", "WhatsApp", "Phone calls", "Email", "Bookings", "Reminders", "Lead follow-up", "Quotes", "CRM",
  "Invoices", "Reports", "Dashboards",
];

function Bar() {
  return (
    <div className="bset">
      <em>AI for</em>
      {bar.map((b) => <span key={b}>{b}</span>)}
    </div>
  );
}

export default function AiHubPage() {
  return (
    <FlagshipShell accent="#2440F0" accentSoft="#D6E0FF" navTheme="dark">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div id="top">
        {/* 1 · the promise and the free blueprint */}
        <section className="hero dark">
          <div className="wrap">
            <h1>
              <span className="kick">AI systems for businesses in Malta</span>
              <span className="big">AI that does the busy work. <i className="mk">Day and night.</i></span>
            </h1>
            <p className="hsub">It answers every enquiry, books every appointment and does the admin. You stay in control.</p>

            <div className="hgrid">
              <div className="ocard">
                <p className="otop"><span className="otag">Free</span><span className="olim">In 48 hours</span></p>
                <h2>Your free AI blueprint.</h2>
                <p>Send us your business name. In 48 hours you get a map of the jobs AI can take off your team, and what to build first.</p>
                <WaForm id="blueprint" message={BLUEPRINT} button="Get my blueprint" />
                <p className="onote"><span>Opens WhatsApp. No call. No long form.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-hero">Or get my price</a></p>
              </div>

              <div className="screens" aria-hidden="true">
                <div className="scr">
                  <b>WhatsApp · 23:41</b>
                  <div className="bub">Do you have a table for 4 tomorrow?</div>
                  <div className="bub ai">Yes. 20:00 is free. <u>Booked for you.</u></div>
                </div>
                <div className="scr">
                  <b>Today</b>
                  <div className="kv"><span>Enquiries answered</span><b>All</b></div>
                  <div className="kv"><span>Waiting for you</span><b>2</b></div>
                </div>
                <div className="scr s-hide">
                  <b>Follow-up</b>
                  <div className="row"><i>1</i>Quote sent</div>
                  <div className="row you"><i>2</i>Reminder sent · Replied</div>
                </div>
                <div className="scr s-hide">
                  <b>Admin</b>
                  <div className="row you"><i>✓</i>Invoice made and sent</div>
                  <div className="row"><i>✓</i>Customer list updated</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="band lt" aria-hidden="true">
          <div className="brun"><Bar /><Bar /></div>
        </div>

        {/* 2 · what it does */}
        <section className="sec" id="jobs">
          <div className="wrap">
            <p className="lab" data-rv><b>01</b>What it does</p>
            <div className="shead" data-rv>
              <h2 className="h2">Five jobs. <i>Done for you.</i></h2>
              <p className="lead">Not a chatbot. One system behind your business that answers, books, sells, runs the admin and keeps you informed.</p>
            </div>
            <div className="grid g3">
              {jobs.map((x, i) => (
                <article className="card" key={x.h} data-rv>
                  <span className="n" aria-hidden="true">{i + 1}</span>
                  <h3>{x.h}</h3>
                  <p>{x.p}</p>
                  <p className="we">{x.we}</p>
                </article>
              ))}
              <article className="card cta" data-rv>
                <div>
                  <h3>Which job should AI take first?</h3>
                  <p>We map it for you. Free, in 48 hours.</p>
                </div>
                <a className="btn btn-w" href="#top" data-testid="link-blueprint-jobs">Get my blueprint <Arrow /></a>
              </article>
            </div>
            <p className="under" data-rv>
              AI systems are built by the AI and tech team at OARC Digital, a <Link className="txt" href="/" data-testid="link-home-context">digital and AI agency in Malta</Link>.
              So the team that brings your enquiries also builds the system that answers them.
            </p>
          </div>
        </section>

        {/* 3 · works with what you use */}
        <section className="sec paper" id="tools">
          <div className="wrap">
            <p className="lab" data-rv><b>02</b>Your tools</p>
            <div className="shead" data-rv>
              <h2 className="h2">It works with what <i>you already use.</i></h2>
              <p className="lead">You do not have to change everything. We connect the tools you have and make them work together.</p>
            </div>
            <ul className="chips big" data-rv>
              {tools.map((it) => <li key={it}>{it}</li>)}
              <li className="on">Yours too</li>
            </ul>
          </div>
        </section>

        {/* 4 · by industry */}
        <section className="sec" id="industries">
          <div className="wrap">
            <p className="lab" data-rv><b>03</b>Your industry</p>
            <div className="shead" data-rv>
              <h2 className="h2">Pick your industry. <i>See your system.</i></h2>
              <p className="lead">Each one is built around how that kind of business really works.</p>
            </div>
            <div className="grid g3">
              {AI_SYSTEMS.map((c) => (
                <Link className="card ind" key={c.slug} href={`/ai/${c.slug}`} data-rv data-testid={`link-ai-${c.slug}`}>
                  <h2>{c.hub.title}</h2>
                  <p>{c.hub.body}</p>
                  <span className="we">{c.hub.gain}</span>
                  <span className="go">See the system <Arrow /></span>
                </Link>
              ))}
              <Link className="card ind" href="/ai/casinos" data-rv data-testid="link-ai-casinos">
                <h2>Casinos and casino hotels</h2>
                <p>Every room, seat and table booked in one message. One app for the whole team. The right guests brought in.</p>
                <span className="we">Casino floor, poker room, hotel, restaurants and bars</span>
                <span className="go">See the system <Arrow /></span>
              </Link>
              <article className="card cta" style={{ gridColumn: "1 / -1" }} data-rv>
                <div>
                  <h3>Your industry is not here yet?</h3>
                  <p>Retail, logistics, construction, finance and more. We build it around your week.</p>
                </div>
                <a className="btn btn-w" href="#top" data-testid="link-blueprint-industries">Get my blueprint <Arrow /></a>
              </article>
            </div>
          </div>
        </section>

        {/* 5 · you stay in control */}
        <section className="sec dark" id="control">
          <div className="wrap">
            <p className="lab" data-rv><b>04</b>Safety</p>
            <div className="shead" data-rv>
              <h2 className="h2">You stay <i>in control.</i></h2>
              <p className="lead">AI does the work. People make the calls that matter. That is how every system we build is set up.</p>
            </div>
            <ul className="why">
              {control.map((r) => (
                <li key={r.h} data-rv><h3>{r.h}</h3><p>{r.p}</p></li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6 · the words */}
        <section className="sec" id="words">
          <div className="wrap">
            <p className="lab" data-rv><b>05</b>The words, explained</p>
            <div className="shead" data-rv>
              <h2 className="h2">AI words. <i>In plain English.</i></h2>
              <p className="lead">No jargon. Here is what the words you keep hearing really mean.</p>
            </div>
            <dl className="terms" data-rv>
              {terms.map(([t, d]) => (
                <div key={t}><dt>{t}</dt><dd>{d}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        {/* 7 · why OARC */}
        <section className="sec paper" id="why">
          <div className="wrap">
            <p className="lab" data-rv><b>06</b>Why us</p>
            <div className="shead" data-rv>
              <h2 className="h2">Why OARC Digital for <i>AI in Malta.</i></h2>
              <p className="lead">We do not sell you software and leave. We build it around your business and run it with you.</p>
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

        {/* 8 · the package */}
        <section className="sec" id="package">
          <div className="wrap">
            <p className="lab" data-rv><b>07</b>The package</p>
            <div className="shead" data-rv>
              <h2 className="h2">Your whole business. <i>Connected.</i></h2>
              <p className="lead">One package. One team. Every channel answered and every job tracked.</p>
            </div>
            <div className="pack" data-rv>
              <div>
                <p className="otop"><span className="otag">Everything included</span></p>
                <h3>The Full AI System package.</h3>
                <p className="pp">Answering, booking, selling and admin, built around how you work. The price depends on how many jobs it does and what it connects to.</p>
                <div className="pbtns">
                  <a className="btn btn-w" href={PRICE} target="_blank" rel="noopener" data-testid="link-price-package"><WaIcon />Get my price</a>
                  <a className="btn btn-o" href="#top" data-testid="link-blueprint-package">Get my free blueprint</a>
                </div>
              </div>
              <ul className="chk">{included.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
            <p className="under" data-rv>
              Only need one helper? See our <Link className="txt" href="/ai-agents">AI agents</Link> and the <Link className="txt" href="/voice-ai-worker">voice AI worker</Link> that answers your phone.
              Need the website it runs on? See <Link className="txt" href="/aeo/web-development-agency-malta">websites</Link>.
            </p>
          </div>
        </section>

        {/* 9 · how it starts */}
        <section className="sec paper" id="start">
          <div className="wrap">
            <p className="lab" data-rv><b>08</b>How it starts</p>
            <div className="shead" data-rv>
              <h2 className="h2">Start with <i>one message.</i></h2>
              <p className="lead">No meeting to book. No form to fill in. Just your business name.</p>
            </div>
            <ol className="tl">
              <li data-rv><p className="when">Today</p><h3>WhatsApp us your business name.</h3><p>That is all we need to begin.</p></li>
              <li data-rv><p className="when">In 48 hours</p><h3>You get your free AI blueprint.</h3><p>The jobs AI can take off your team, and which one to build first.</p></li>
              <li data-rv><p className="when">Then</p><h3>We visit and build.</h3><p>We come to you, see how your week runs and set up your first system in 72 hours.</p></li>
              <li data-rv><p className="when">Every month</p><h3>We run it with you.</h3><p>We check it, improve it and add the next job when you are ready.</p></li>
            </ol>
          </div>
        </section>

        {/* 10 · questions */}
        <section className="sec" id="faq">
          <div className="wrap">
            <p className="lab" data-rv><b>09</b>Before you ask</p>
            <div className="shead" data-rv>
              <h2 className="h2">Questions about <i>AI for your business.</i></h2>
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

        {/* 11 · close */}
        <section className="fin dark">
          <div className="wrap">
            <h2 className="h2" data-rv>Let AI do <i>the busy work.</i></h2>
            <WaForm id="blueprint2" message={BLUEPRINT} button="Get my blueprint" />
            <p className="onote"><span>Free. In 48 hours. Opens WhatsApp.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-close">Or get my price</a></p>
            <p className="home">AI and tech is one of 8 departments at OARC Digital. Find us at {NAP.streetAddressShort}, {NAP.addressLocality} {NAP.postalCode}.</p>
          </div>
        </section>
      </div>
    </FlagshipShell>
  );
}
