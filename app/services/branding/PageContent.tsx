import Link from "next/link";
import FlagshipShell from "@/components/flagship/FlagshipShell";
import { Arrow, WaForm, WaIcon, waLink } from "@/components/flagship/parts";
import { NAP } from "@/lib/seo/nap";

interface Faq { question: string; answer: string; }
interface Props { faqs: Faq[]; }

const BLUEPRINT = "Hi OARC. My business or idea is: {x}. Please send my free brand blueprint.";
const PRICE = waLink("Hi OARC. Please send me your price for branding. My business is: ");

const three = [
  { h: "A logo", p: "Your badge. The mark on your sign, your bag and your phone screen.", tag: "One piece" },
  { h: "A brand identity", p: "Your whole look and sound: colours, letters, photos, words and the way things move.", tag: "The full kit" },
  { h: "A brand", p: "The feeling people get when they hear your name. It is why they pick you, and why they pay more.", tag: "The real prize" },
];

// Every kind of branding, grouped into families a business owner can follow.
const families = [
  { fam: "The thinking", items: [
    ["Brand strategy", "The plan. What you stand for, who you serve and why you win."],
    ["Research", "What your customers want and what your rivals really do."],
    ["Positioning", "The one spot you own in people’s minds."],
    ["Brand architecture", "How your brands, products and locations fit together."],
  ] },
  { fam: "The words", items: [
    ["Naming", "A name people remember and can spell."],
    ["Brand story", "Why you exist, told simply."],
    ["Tone of voice", "How you sound, from your website to your WhatsApp replies."],
    ["Tagline and key messages", "The few lines you always say."],
  ] },
  { fam: "The look", items: [
    ["Logo design", "Your badge, made to work at every size."],
    ["Colour psychology", "Colours hint at feelings. The right fit matters more than taste."],
    ["Typography", "Your letter style. It sets the mood before anyone reads a word."],
    ["Art, photo and film style", "The pictures and drawings that are clearly yours."],
    ["Motion", "How your brand moves in video and on screen."],
  ] },
  { fam: "The senses and the mind", items: [
    ["Sonic branding", "Your sound: a short tune, a voice, a ring."],
    ["Sensory branding", "What people touch, smell and taste when they meet you."],
    ["Neuro-branding", "Design based on tested psychology of attention, memory and emotion. No tricks."],
  ] },
  { fam: "What gets a brand", items: [
    ["Company brand", "The whole business."],
    ["Product and service brands", "One item or one service with its own name."],
    ["Personal brand", "A person: a founder, a doctor, a chef."],
    ["Employer brand", "Why good people want to work for you."],
  ] },
  { fam: "Where it lives", items: [
    ["Website and app", "Your brand on every screen."],
    ["Social media", "A feed people know is yours without seeing the name."],
    ["Packaging", "The box, the bag, the label."],
    ["Shop, signs and print", "Your space, your vehicles, menus, uniforms and business cards."],
  ] },
  { fam: "Selling and growing", items: [
    ["Sales branding", "Offers, proposals and pitch decks that look and sound like you."],
    ["Launch campaign", "Telling the world, with a plan."],
    ["Rebrand or refresh", "A big change, or a careful tidy-up."],
    ["Brand guidelines", "The rulebook, so everyone uses your brand the same way."],
  ] },
];

const brain = [
  { n: "0.1s", h: "People judge in a tenth of a second.", p: "We decide if a face can be trusted almost at once. Your brand gets the same split second.", src: "Willis and Todorov, Psychological Science, 2006" },
  { n: "Again", h: "Seen often means liked more.", p: "The more we meet something, the more we like it. So one clear idea, repeated, beats ten clever ones.", src: "Zajonc, 1968: the mere-exposure effect" },
  { n: "Colour", h: "Colour changes how you are read.", p: "The same brand feels different in red than in blue. We choose colour for meaning, not for taste.", src: "Labrecque and Milne, Journal of the Academy of Marketing Science, 2012" },
];

const stages = [
  { h: "Just an idea.", p: "Or no idea yet. We test it, name it and shape the offer before you spend on anything.", fix: "We start here too." },
  { h: "A new business.", p: "You need a name, a look and a launch plan that brings your first customers.", fix: "Brand and launch." },
  { h: "Growing, but it looks old.", p: "The business moved on and the brand did not. We refresh it without losing what works.", fix: "Refresh or rebrand." },
  { h: "More than one brand.", p: "Several products, locations or companies that need to feel like one family.", fix: "One clear system." },
];

const path = [
  { h: "Idea", p: "We sharpen yours, or help you find one." },
  { h: "Brand", p: "Name, story, look and voice." },
  { h: "Launch", p: "A 30-day plan to go public." },
  { h: "Marketing", p: "Content, ads and search." },
  { h: "Sales", p: "The offer, the pitch, the follow-up." },
  { h: "Money", p: "Your price and the numbers that matter." },
  { h: "People", p: "Who to hire first, and when." },
  { h: "Mind and body", p: "A coach in your corner." },
];

const myths = [
  { q: "Build it and they will come.", s: "Nobody comes. Sell 10 before you build one.", v: "f", t: "False" },
  { q: "A great product sells itself.", s: "It does not. People buy what they understand and remember.", v: "f", t: "False" },
  { q: "A customer who pays is the only proof.", s: "A maybe is a no. Money is the vote that counts.", v: "t", t: "True" },
  { q: "Boring work wins.", s: "Show up every day. The same message, again and again.", v: "t", t: "True" },
  { q: "You need a great salesperson.", s: "First find the people who already need what you sell.", v: "h", t: "Half true" },
  { q: "You need to go bigger.", s: "First you need to go better: systems before size.", v: "f", t: "False" },
];

const reasons = [
  { h: "We start before the business exists.", p: "Most agencies begin at the logo. We can begin at the idea." },
  { h: "We do not stop at the logo.", p: "We launch the brand, market it and help you sell it. One team does all of it." },
  { h: "Built on research, not taste.", p: "Every choice has a reason you can read in plain words." },
  { h: "One team. 8 departments.", p: "Strategy, creative, film, web, social media, ads, customer care and AI, under one roof." },
  { h: "Everything we make stays yours.", p: "Your name, your files, your guidelines. No lock-in." },
  { h: "You can meet us.", p: "We are in Birkirkara. We come to you, or you come to us." },
];

const flags = [
  "They start with the logo, not with your customers.",
  "They never ask what makes you different.",
  "You cannot meet the people who do the work.",
  "You do not get your files at the end.",
];

const included = [
  "Customer and rival research",
  "Brand strategy and positioning",
  "Name and tagline, if you need them",
  "Brand story and tone of voice",
  "Logo and full visual identity",
  "Colour and typography system",
  "Photo, film and motion style",
  "Brand guidelines, the rulebook",
  "Website look and key pages",
  "Social media templates",
  "Sales deck and offer design",
  "Packaging, signs and print files",
  "A 30-day launch plan",
  "Launch content: film, photos, posts",
];

const bar = [
  "Brand strategy", "Naming", "Brand story", "Logo design", "Colour", "Typography", "Tone of voice", "Packaging",
  "Website", "Social media", "Pitch decks", "Launch", "Rebrand",
];

function Bar() {
  return (
    <div className="bset">
      <em>We build</em>
      {bar.map((b) => <span key={b}>{b}</span>)}
    </div>
  );
}

export default function BrandingAgencyMalta({ faqs }: Props) {
  return (
    <FlagshipShell accent="#0B0B0B" accentSoft="#F9FF84">
      <div id="top">
        {/* 1 · the promise and the free blueprint */}
        <section className="hero">
          <div className="wrap">
            <h1>
              <span className="kick">Branding agency in Malta</span>
              <span className="big">We build your brand. <i className="mk">From any stage.</i></span>
            </h1>
            <p className="hsub">An idea, a new business or a brand that feels old. We take it from where it is to the top.</p>

            <div className="hgrid">
              <div className="ocard">
                <p className="otop"><span className="otag">Free</span><span className="olim">In 48 hours</span></p>
                <h2>Your free brand blueprint.</h2>
                <p>Send us your business name, or just your idea. In 48 hours you get the honest truth and a plan.</p>
                <WaForm id="blueprint" message={BLUEPRINT} button="Get my blueprint" placeholder="Your business name or idea" label="Your business name or idea" />
                <p className="onote"><span>Opens WhatsApp. No call. No long form.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-hero">Or get my price</a></p>
              </div>

              <div className="screens" aria-hidden="true">
                <div className="scr"><b>Name</b><span className="wm">Your name.</span></div>
                <div className="scr"><b>Colour</b><span className="sw"><i style={{ background: "#0B0B0B" }} /><i style={{ background: "#F9FF84" }} /><i style={{ background: "#2440F0" }} /><i style={{ background: "#fff", boxShadow: "inset 0 0 0 1px rgba(11,11,11,.13)" }} /></span></div>
                <div className="scr s-hide"><b>Type</b><span className="aa">Aa</span></div>
                <div className="scr s-hide"><b>Voice</b><span className="say">“We say it plain.”</span></div>
              </div>
            </div>
          </div>
        </section>

        <div className="band" aria-hidden="true">
          <div className="brun"><Bar /><Bar /></div>
        </div>

        {/* 2 · logo or brand */}
        <section className="sec" id="logo-or-brand">
          <div className="wrap">
            <p className="lab" data-rv><b>01</b>Logo or brand</p>
            <div className="shead" data-rv>
              <h2 className="h2">A logo is not <i>a brand.</i></h2>
              <p className="lead">This is what most businesses in Malta get wrong. Here is the difference, in three lines.</p>
            </div>
            <div className="grid g3">
              {three.map((x) => (
                <article className="card pain" key={x.h} data-rv>
                  <h3>{x.h}</h3>
                  <p>{x.p}</p>
                  <span className="fix">{x.tag}</span>
                </article>
              ))}
            </div>
            <p className="under" data-rv>
              Branding is one of 8 departments at <Link className="txt" href="/" data-testid="link-home-context">OARC Digital</Link>, a marketing agency in Malta.
              So the people who build your brand also launch it and sell it.
            </p>
          </div>
        </section>

        {/* 3 · every kind of branding */}
        <section className="sec paper" id="kinds">
          <div className="wrap">
            <p className="lab" data-rv><b>02</b>What a branding agency does</p>
            <div className="shead" data-rv>
              <h2 className="h2">Every kind of branding. <i>In plain English.</i></h2>
              <p className="lead">Branding is far more than design. These are all the parts, and what each one is for.</p>
            </div>
            <div className="grid g3">
              {families.map((f) => (
                <article className="card" key={f.fam} data-rv>
                  <p className="fam">{f.fam}</p>
                  <dl className="defs">
                    {f.items.map(([t, d]) => (
                      <div key={t}><dt>{t}</dt><dd>{d}</dd></div>
                    ))}
                  </dl>
                </article>
              ))}
              <article className="card cta wide" data-rv>
                <div>
                  <h3>Not sure which ones you need?</h3>
                  <p>We tell you, free, in 48 hours.</p>
                </div>
                <a className="btn btn-w" href="#top" data-testid="link-blueprint-kinds">Get my blueprint <Arrow /></a>
              </article>
            </div>
          </div>
        </section>

        {/* 4 · the brain */}
        <section className="sec" id="brain">
          <div className="wrap">
            <p className="lab" data-rv><b>03</b>Why it works</p>
            <div className="shead" data-rv>
              <h2 className="h2">How people really <i>pick a brand.</i></h2>
              <p className="lead">Not magic. Three things science has tested, and how we use each one.</p>
            </div>
            <div className="grid g3">
              {brain.map((b) => (
                <article className="card" key={b.h} data-rv>
                  <span className="n" aria-hidden="true">{b.n}</span>
                  <h3>{b.h}</h3>
                  <p>{b.p}</p>
                  <p className="src">Source: {b.src}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5 · from any stage */}
        <section className="sec paper" id="stages">
          <div className="wrap">
            <p className="lab" data-rv><b>04</b>Where are you now</p>
            <div className="shead" data-rv>
              <h2 className="h2">Start anywhere. <i>We take it from there.</i></h2>
              <p className="lead">Most agencies start at the logo. We start wherever you are, even before the business exists.</p>
            </div>
            <div className="grid g4">
              {stages.map((s) => (
                <article className="card pain" key={s.h} data-rv>
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                  <span className="fix">{s.fix}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6 · root to one */}
        <section className="sec" id="root-to-one">
          <div className="wrap">
            <p className="lab" data-rv><b>05</b>Root to One</p>
            <div className="shead" data-rv>
              <h2 className="h2">Every role you can’t <i>play alone.</i></h2>
              <p className="lead">A brand is not finished at the logo. We walk the whole road with you, from the root to number one.</p>
            </div>
            <ol className="path">
              {path.map((s, i) => (
                <li key={s.h} data-rv><span className="n" aria-hidden="true">{i + 1}</span><h3>{s.h}</h3><p>{s.p}</p></li>
              ))}
            </ol>
          </div>
        </section>

        {/* 7 · myths */}
        <section className="sec paper" id="myths">
          <div className="wrap">
            <p className="lab" data-rv><b>06</b>Fact check</p>
            <div className="shead" data-rv>
              <h2 className="h2">What founders hear. <i>Fact-checked.</i></h2>
              <p className="lead">Six things everyone tells you when you start. Some are true. Some cost you a year.</p>
            </div>
            <ul className="myths">
              {myths.map((m) => (
                <li key={m.q} data-rv>
                  <span><q>{m.q}</q><small>{m.s}</small></span>
                  <span className={`st ${m.v}`}>{m.t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 8 · why OARC + red flags */}
        <section className="sec dark" id="why">
          <div className="wrap">
            <p className="lab" data-rv><b>07</b>Why us</p>
            <div className="shead" data-rv>
              <h2 className="h2">Why OARC Digital for <i>branding in Malta.</i></h2>
              <p className="lead">We are more than a branding agency. We build the brand, then we build the business around it.</p>
            </div>
            <ul className="why">
              {reasons.map((r) => (
                <li key={r.h} data-rv><h3>{r.h}</h3><p>{r.p}</p></li>
              ))}
            </ul>
            <div className="stat flags" data-rv>
              <b>4</b>
              <div>
                <p>red flags when you hire a branding agency in Malta:</p>
                <ul>{flags.map((f) => <li key={f}>{f}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        {/* 9 · the package, set as end credits */}
        <section className="sec" id="package">
          <div className="wrap">
            <p className="lab" data-rv><b>08</b>The package</p>
            <div className="shead" data-rv>
              <h2 className="h2">The whole brand. <i>Built for you.</i></h2>
              <p className="lead">One package. One team. From the first idea to the day you launch.</p>
            </div>
            <div className="pack y" data-rv>
              <div>
                <p className="otop"><span className="otag">Everything included</span></p>
                <h3>The Root to One package.</h3>
                <p className="pp">Strategy, name, story, look and launch, done for you. The price depends on your stage and how much you need.</p>
                <div className="pbtns">
                  <a className="btn btn-k" href={PRICE} target="_blank" rel="noopener" data-testid="link-price-package"><WaIcon />Get my price</a>
                  <a className="btn btn-o" href="#top" data-testid="link-blueprint-package">Get my free blueprint</a>
                </div>
              </div>
              <ul className="chk">{included.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
            <p className="under" data-rv>
              Only need one part? See <Link className="txt" href="/services/brand">brand strategy</Link>, <Link className="txt" href="/creative">the creative studio</Link> or{" "}
              <Link className="txt" href="/aeo/web-development-agency-malta">websites</Link>.
              Want the whole marketing team every month? See our <Link className="txt" href="/aeo/digital-marketing-agency-malta">digital marketing agency in Malta</Link> offer.
            </p>
          </div>
        </section>

        {/* 10 · end credits */}
        <section className="sec dark" id="credits">
          <div className="wrap">
            <div className="credits" data-rv>
              <p className="star">Starring</p>
              <span className="star-name">You</span>
              <dl className="crew">
                <div><dt>Idea development</dt><dd>OARC</dd></div>
                <div><dt>Brand and launch</dt><dd>OARC</dd></div>
                <div><dt>Marketing</dt><dd>OARC</dd></div>
                <div><dt>Sales</dt><dd>OARC</dd></div>
                <div><dt>Money and numbers</dt><dd>OARC</dd></div>
                <div><dt>Team and hiring</dt><dd>OARC</dd></div>
                <div><dt>Mindset coach</dt><dd>OARC</dd></div>
                <div><dt>Your AI helper, day and night</dt><dd>OARC</dd></div>
              </dl>
            </div>
          </div>
        </section>

        {/* 11 · how it starts */}
        <section className="sec paper" id="start">
          <div className="wrap">
            <p className="lab" data-rv><b>09</b>How it starts</p>
            <div className="shead" data-rv>
              <h2 className="h2">Start with <i>one message.</i></h2>
              <p className="lead">No meeting to book. No form to fill in. Your business name, or your idea in one line.</p>
            </div>
            <ol className="tl">
              <li data-rv><p className="when">Today</p><h3>WhatsApp us your name or idea.</h3><p>One line is enough to begin.</p></li>
              <li data-rv><p className="when">In 48 hours</p><h3>You get your free blueprint.</h3><p>The honest truth: keep it, fix it or drop it. What makes you different. Where your first 10 customers are. A 30-day plan.</p></li>
              <li data-rv><p className="when">Week 1</p><h3>We agree the plan.</h3><p>We come to you, or you come to us in {NAP.addressLocality}. You see the price before anything starts.</p></li>
              <li data-rv><p className="when">Then</p><h3>We build it and launch it.</h3><p>You approve each step. Nothing goes public without your yes.</p></li>
            </ol>
          </div>
        </section>

        {/* 12 · questions */}
        <section className="sec" id="faq">
          <div className="wrap">
            <p className="lab" data-rv><b>10</b>Before you ask</p>
            <div className="shead" data-rv>
              <h2 className="h2">Questions about <i>branding in Malta.</i></h2>
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

        {/* 13 · close */}
        <section className="fin dark">
          <div className="wrap">
            <h2 className="h2" data-rv>Make them <i>remember you.</i></h2>
            <WaForm id="blueprint2" message={BLUEPRINT} button="Get my blueprint" placeholder="Your business name or idea" label="Your business name or idea" />
            <p className="onote"><span>Free. In 48 hours. Opens WhatsApp.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-close">Or get my price</a></p>
            <p className="home">Branding is one of 8 departments at OARC Digital. Find us at {NAP.streetAddressShort}, {NAP.addressLocality} {NAP.postalCode}.</p>
          </div>
        </section>
      </div>
    </FlagshipShell>
  );
}
