import Link from "next/link";
import FlagshipShell from "@/components/flagship/FlagshipShell";
import { Arrow, SearchIcon, WaForm, WaIcon, waLink } from "@/components/flagship/parts";
import { NAP } from "@/lib/seo/nap";

interface Faq { question: string; answer: string; }
interface Props { faqs: Faq[]; }

const BLUEPRINT = "Hi OARC. My business is {x}. Please send my free ranking blueprint.";
const PRICE = waLink("Hi OARC. Please send me your price for SEO. My business is: ");

// The seven places people search. `what` says it in one line, `we` says what OARC does there.
const places = [
  { name: "Google Search", what: "Someone types what they need and picks from the first few results.", we: "We get your pages to the top for the words that bring customers." },
  { name: "Google Maps", what: "The “near me” search. The top 3 places on the map get most of the calls.", we: "We build your Google Business Profile, your reviews and your local pages." },
  { name: "AI answers on Google", what: "Google now writes its own answer above the results. It is called AI Overviews and AI Mode.", we: "We make your website a source that Google’s AI quotes." },
  { name: "AI chats", what: "ChatGPT, Gemini, Perplexity, Claude, Copilot, Grok and Meta AI. People ask them who to hire.", we: "We make sure they know you, trust you and say your name." },
  { name: "Voice search", what: "Siri, Google Assistant and Alexa read out one answer, not ten.", we: "We write short, clear answers that a voice can read out loud." },
  { name: "Video and social search", what: "YouTube, TikTok and Instagram are search engines now, most of all for younger buyers.", we: "We title, caption and tag your videos so people find them." },
  { name: "Other search engines and maps", what: "Bing, Apple Maps, DuckDuckGo and Brave. Many AI tools read these, not Google.", we: "We list and verify you on each one, with the same details everywhere." },
];

const terms = [
  { abbr: "SEO", full: "Search engine optimisation", text: "Getting your website to the top of Google and Bing." },
  { abbr: "Local", full: "Local SEO", text: "Getting you into the top 3 on the map when someone nearby searches." },
  { abbr: "AEO", full: "Answer engine optimisation", text: "Getting your words picked as the one answer, by Google’s AI and by voice assistants." },
  { abbr: "GEO", full: "Generative engine optimisation", text: "Getting AI chats like ChatGPT and Gemini to recommend your business by name." },
];

const pains = [
  { h: "You’re on page 2. Nobody looks there.", p: "Almost every click goes to the first page. Page 2 is where good businesses stay hidden.", fix: "Page 1 for the searches that pay." },
  { h: "Your rival shows up first. Every time.", p: "They are not better than you. They are just easier for Google to understand.", fix: "We study them. Then we pass them." },
  { h: "You ask ChatGPT. It names someone else.", p: "AI can only recommend a business it knows and trusts. Right now, that is not you.", fix: "We make AI say your name." },
  { h: "You paid for SEO. You got a report.", p: "Pages of charts, and no new customers to show for it.", fix: "We report enquiries, not graphs." },
];

const steps = [
  { h: "We fix your website.", p: "Speed, phone layout, broken links, and the hidden labels (called schema) that tell Google and AI what you do." },
  { h: "We find the words your customers type.", p: "Real search data, in English and in Maltese. No guessing." },
  { h: "We write what people ask.", p: "Pages and articles that answer real questions. Written by people, checked against the data." },
  { h: "We get AI to know you.", p: "Clear facts, clear answers and the same details everywhere, so ChatGPT, Gemini and Perplexity can quote you." },
  { h: "We get trusted sites to talk about you.", p: "Maltese press, directories and partners. Real links only. No tricks that get you punished later." },
  { h: "We show you the numbers.", p: "A written report every month: your rankings, your visitors and your enquiries. In plain words." },
];

const channels = [
  { group: "Your website", items: ["Service pages", "Location pages", "Articles and guides", "Questions and answers"] },
  { group: "Google", items: ["Business Profile posts", "Photos", "Reviews and replies", "Questions and answers"] },
  { group: "Video", items: ["YouTube", "YouTube Shorts", "TikTok", "Instagram Reels"] },
  { group: "Social media", items: ["LinkedIn", "Facebook", "Instagram", "X", "Pinterest", "Threads"] },
  { group: "Communities", items: ["Reddit", "Quora", "Medium", "Substack"] },
  { group: "Maps and listings", items: ["Bing Places", "Apple Maps", "Clutch", "Yellow Pages Malta", "Industry directories"] },
  { group: "News and press", items: ["Maltese news sites", "Trade press", "Podcasts", "Partner blogs"] },
];

const industries = [
  "Restaurants and cafés", "Hotels and guest houses", "Clinics and dentists", "Real estate", "Law firms", "Accountants",
  "Shops and online stores", "iGaming", "Fintech", "Construction and trades", "Schools and courses", "Tourism and activities",
  "Beauty and wellness", "Gyms and fitness", "Car dealers and rentals", "Tech and software", "Events and weddings",
];

const reasons = [
  { h: "Built for AI from day one.", p: "Every page we make is written so Google and AI can quote it. Most agencies add this later, if at all." },
  { h: "English and Maltese.", p: "Most agencies only study English searches. We study both, because your customers use both." },
  { h: "One team. 8 departments.", p: "Writers, a film crew, web developers and AI engineers under one roof in Birkirkara. Nothing is sent abroad." },
  { h: "Real data from Malta.", p: "Not a London plan pasted onto Valletta. We work from what people in Malta really search." },
  { h: "Real links only.", p: "Press, partners and trusted directories. No link farms. Nothing that puts your website at risk." },
  { h: "A person writes your report.", p: "A strategist explains what happened and what comes next. You can always meet us in person." },
];

const included = [
  "Full website health check, and the fixes",
  "Keyword map in English and Maltese",
  "Google Business Profile, built and managed",
  "A review system: ask, collect, reply",
  "Service pages and location pages",
  "New articles every month, written by people",
  "AI visibility: ChatGPT, Gemini, Perplexity, Claude, Copilot",
  "Voice search answers for Siri, Google and Alexa",
  "Schema and an llms.txt file, so AI can read you",
  "Bing Places and Apple Maps listings",
  "Links from press and trusted directories",
  "YouTube and social search set-up",
  "Your rivals tracked, every month",
  "A one-page report: rankings, visitors, enquiries",
];

const bar = [
  "Google Search", "Google Maps", "AI Overviews", "ChatGPT", "Gemini", "Perplexity", "Claude", "Copilot", "Grok",
  "Siri", "Alexa", "Google Assistant", "YouTube", "TikTok", "Bing", "Apple Maps",
];

function Bar() {
  return (
    <div className="bset">
      <em>Found on</em>
      {bar.map((b) => <span key={b}>{b}</span>)}
    </div>
  );
}

export default function SEOAgencyMalta({ faqs }: Props) {
  return (
    <FlagshipShell>
      <div id="top">
        {/* 1 · the promise and the free blueprint */}
        <section className="hero">
          <div className="wrap">
            <h1>
              <span className="kick">SEO agency in Malta</span>
              <span className="big">We make your business rank on <i className="mk">Google</i> and <i className="mk">AI.</i></span>
            </h1>
            <p className="hsub">Search, maps, AI chats and voice. One Malta team gets you found in all of them.</p>

            <div className="hgrid">
              <div className="ocard">
                <p className="otop"><span className="otag">Free</span><span className="olim">In 48 hours</span></p>
                <h2>Your free ranking blueprint.</h2>
                <p>Send us your business name. In 48 hours you get a plan that shows where you rank today, and how to get to the top.</p>
                <WaForm id="blueprint" message={BLUEPRINT} button="Get my blueprint" />
                <p className="onote"><span>Opens WhatsApp. No call. No long form.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-hero">Or get my price</a></p>
              </div>

              <div className="screens" aria-hidden="true">
                <div className="scr">
                  <b>Search</b>
                  <div className="q"><SearchIcon />best in Malta</div>
                  <div className="row you"><i>1</i>Your business</div>
                  <div className="row"><i>2</i>Someone else</div>
                </div>
                <div className="scr">
                  <b>AI chat</b>
                  <div className="bub">Who should I call in Malta?</div>
                  <div className="bub ai">I’d start with <u>your business</u>. Here is why.</div>
                </div>
                <div className="scr s-hide">
                  <b>Maps</b>
                  <div className="q"><SearchIcon />near me</div>
                  <div className="row you"><i>A</i>Your business · Open now</div>
                  <div className="row"><i>B</i>Someone else</div>
                </div>
                <div className="scr s-hide">
                  <b>Voice</b>
                  <div className="wave">{Array.from({ length: 18 }, (_, i) => <span key={i} />)}</div>
                  <div className="row you"><i>1</i>“The top answer is your business.”</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="band" aria-hidden="true">
          <div className="brun"><Bar /><Bar /></div>
        </div>

        {/* 2 · where people search now */}
        <section className="sec" id="places">
          <div className="wrap">
            <p className="lab" data-rv><b>01</b>Where people search</p>
            <div className="shead" data-rv>
              <h2 className="h2">People don’t just <i>Google any more.</i></h2>
              <p className="lead">Your next customer asks a phone, a map or an AI chat. We get you found in all 7 places.</p>
            </div>
            <div className="grid g4">
              {places.map((pl, i) => (
                <article className="card" key={pl.name} data-rv>
                  <span className="n" aria-hidden="true">{i + 1}</span>
                  <h3>{pl.name}</h3>
                  <p>{pl.what}</p>
                  <p className="we">{pl.we}</p>
                </article>
              ))}
              <article className="card cta" data-rv>
                <div>
                  <h3>Not sure where you stand?</h3>
                  <p>We check all 7 for you. Free, in 48 hours.</p>
                </div>
                <a className="btn btn-w" href="#top" data-testid="link-blueprint-places">Get my blueprint <Arrow /></a>
              </article>
            </div>
          </div>
        </section>

        {/* 3 · the four words, in plain English */}
        <section className="sec paper" id="words">
          <div className="wrap">
            <p className="lab" data-rv><b>02</b>The words, explained</p>
            <div className="shead" data-rv>
              <h2 className="h2">SEO, AEO, GEO. <i>In plain English.</i></h2>
              <p className="lead">Four short words. Each one is a different way to be found.</p>
            </div>
            <div className="grid g4">
              {terms.map((t) => (
                <article className="card term" key={t.abbr} data-rv>
                  <abbr title={t.full}>{t.abbr}</abbr>
                  <p className="full">{t.full}</p>
                  <p>{t.text}</p>
                </article>
              ))}
            </div>
            <p className="after" data-rv>Most agencies sell you one. You need all four, working as one plan.</p>
          </div>
        </section>

        {/* 4 · sound familiar */}
        <section className="sec" id="familiar">
          <div className="wrap">
            <p className="lab" data-rv><b>03</b>The problem</p>
            <div className="shead" data-rv>
              <h2 className="h2 il">Sound <i>familiar?</i></h2>
              <p className="lead">If people can’t find you, they find someone else. It is that simple.</p>
            </div>
            <div className="grid g4">
              {pains.map((x) => (
                <article className="card pain" key={x.h} data-rv>
                  <h3>{x.h}</h3>
                  <p>{x.p}</p>
                  <span className="fix">{x.fix}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5 · the playbook */}
        <section className="sec paper" id="playbook">
          <div className="wrap">
            <p className="lab" data-rv><b>04</b>What we do</p>
            <div className="shead" data-rv>
              <h2 className="h2">Our SEO playbook. <i>6 steps.</i></h2>
              <p className="lead">The same six steps for every business. The plan inside them is made for yours.</p>
            </div>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.h} data-rv><div><h3>{s.h}</h3><p>{s.p}</p></div></li>
              ))}
            </ol>
          </div>
        </section>

        {/* 6 · every channel */}
        <section className="sec" id="channels">
          <div className="wrap">
            <p className="lab" data-rv><b>05</b>Where we publish</p>
            <div className="shead" data-rv>
              <h2 className="h2">We put you where <i>your customers are.</i></h2>
              <p className="lead">Free, organic content built on real search data, on every channel that matters. No ad budget needed.</p>
            </div>
            <div className="chgroups">
              {channels.map((c) => (
                <div className="chg" key={c.group} data-rv>
                  <h3>{c.group}</h3>
                  <ul className="chips">{c.items.map((it) => <li key={it}>{it}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7 · every industry */}
        <section className="sec paper" id="industries">
          <div className="wrap">
            <p className="lab" data-rv><b>06</b>Your industry</p>
            <div className="shead" data-rv>
              <h2 className="h2">A plan built for <i>your industry.</i></h2>
              <p className="lead">People search for a restaurant very differently from a law firm. So every plan is different.</p>
            </div>
            <ul className="chips big" data-rv>
              {industries.map((it) => <li key={it}>{it}</li>)}
              <li className="on">Yours too</li>
            </ul>
            <p className="under" data-rv>
              Want AI to answer your customers as well? See our <Link className="txt" href="/ai">AI systems for each industry</Link>.
            </p>
          </div>
        </section>

        {/* 8 · why OARC */}
        <section className="sec dark" id="why">
          <div className="wrap">
            <p className="lab" data-rv><b>07</b>Why us</p>
            <div className="shead" data-rv>
              <h2 className="h2">Why OARC Digital for <i>SEO in Malta.</i></h2>
              <p className="lead">Search is not a side job here. It is built into everything we make.</p>
            </div>
            <ul className="why">
              {reasons.map((r) => (
                <li key={r.h} data-rv><h3>{r.h}</h3><p>{r.p}</p></li>
              ))}
            </ul>
            <div className="stat" data-rv>
              <b>9,600+</b>
              <p>
                times Google’s AI answers have shown our own pages since May 2026. We test everything on ourselves first.
                <small>Source: our own Google Search Console, May to November 2026.</small>
              </p>
            </div>
          </div>
        </section>

        {/* 9 · the package */}
        <section className="sec" id="package">
          <div className="wrap">
            <p className="lab" data-rv><b>08</b>The package</p>
            <div className="shead" data-rv>
              <h2 className="h2">Own your search. <i>All of it.</i></h2>
              <p className="lead">One package. One team. Every place people search, covered.</p>
            </div>
            <div className="pack" data-rv>
              <div>
                <p className="otop"><span className="otag">Everything included</span></p>
                <h3>The Search Domination package.</h3>
                <p className="pp">Google, Maps, AI chats and voice, done for you every month. The price depends on your industry and your rivals.</p>
                <div className="pbtns">
                  <a className="btn btn-w" href={PRICE} target="_blank" rel="noopener" data-testid="link-price-package"><WaIcon />Get my price</a>
                  <a className="btn btn-o" href="#top" data-testid="link-blueprint-package">Get my free blueprint</a>
                </div>
              </div>
              <ul className="chk">{included.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
            <p className="under" data-rv>
              Want the whole marketing team, not only search? See our <Link className="txt" href="/aeo/digital-marketing-agency-malta">digital marketing agency in Malta</Link> offer.
              Only need the technical side? See <Link className="txt" href="/services/seo-services">SEO services</Link>.
            </p>
          </div>
        </section>

        {/* 10 · how it starts */}
        <section className="sec paper" id="start">
          <div className="wrap">
            <p className="lab" data-rv><b>09</b>How it starts</p>
            <div className="shead" data-rv>
              <h2 className="h2">Start with <i>one message.</i></h2>
              <p className="lead">No meeting to book. No form to fill in. Just your business name.</p>
            </div>
            <ol className="tl">
              <li data-rv><p className="when">Today</p><h3>WhatsApp us your business name.</h3><p>That is all we need to begin.</p></li>
              <li data-rv><p className="when">In 48 hours</p><h3>You get your free blueprint.</h3><p>Where you rank on Google and Maps, what AI says about you, and your first 5 fixes.</p></li>
              <li data-rv><p className="when">Week 1</p><h3>We agree the plan.</h3><p>We come to you, or you come to us in {NAP.addressLocality}. You see the price before anything starts.</p></li>
              <li data-rv><p className="when">Every month</p><h3>You climb.</h3><p>New content, better rankings and one clear report.</p></li>
            </ol>
          </div>
        </section>

        {/* 11 · questions */}
        <section className="sec" id="faq">
          <div className="wrap">
            <p className="lab" data-rv><b>10</b>Before you ask</p>
            <div className="shead" data-rv>
              <h2 className="h2">Questions about <i>SEO in Malta.</i></h2>
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

        {/* 12 · close */}
        <section className="fin dark">
          <div className="wrap">
            <h2 className="h2" data-rv>Don’t let your rival <i>be the answer.</i></h2>
            <WaForm id="blueprint2" message={BLUEPRINT} button="Get my blueprint" />
            <p className="onote"><span>Free. In 48 hours. Opens WhatsApp.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-close">Or get my price</a></p>
            <p className="home">
              OARC Digital is a full <Link href="/" data-testid="link-home-context">marketing agency in Malta</Link>. Search is one of our 8 departments.
              Find us at {NAP.streetAddressShort}, {NAP.addressLocality} {NAP.postalCode}.
            </p>
          </div>
        </section>
      </div>
    </FlagshipShell>
  );
}
