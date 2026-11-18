import Link from "next/link";
import FlagshipShell from "@/components/flagship/FlagshipShell";
import { Arrow, SearchIcon, WaForm, WaIcon, waLink } from "@/components/flagship/parts";
import { NAP } from "@/lib/seo/nap";

interface Faq { question: string; answer: string; }
interface Props { faqs: Faq[]; }

const BLUEPRINT = "Hi OARC. My business is {x}. Please send my free website blueprint.";
const PRICE = waLink("Hi OARC. Please send me your price for a website. My business is: ");

// Every kind of website, in one plain line, with who usually wants it.
const types = [
  { h: "Simple website", p: "A few clear pages that say who you are and how to reach you.", who: "Trades, clinics, law firms" },
  { h: "Landing page", p: "One page with one job: get the enquiry.", who: "Ads, offers, launches" },
  { h: "Online shop", p: "Sell your products and get paid online.", who: "Retail, fashion, food" },
  { h: "Booking website", p: "People pick a time and book, with no phone call.", who: "Salons, clinics, restaurants, tours" },
  { h: "Portfolio", p: "Your best work, shown beautifully.", who: "Architects, photographers, designers" },
  { h: "Members area", p: "Content only logged-in people can see.", who: "Gyms, schools, coaches" },
  { h: "Listings website", p: "Lots of items people can search and filter.", who: "Property, cars, jobs" },
  { h: "Web app or portal", p: "Customers log in and do things, like in an app.", who: "Finance, iGaming, logistics" },
  { h: "Many languages", p: "One website that speaks to every visitor in their language.", who: "Tourism, property, export" },
  { h: "3D website", p: "Objects and spaces people can turn and explore.", who: "Luxury, cars, yachts, property" },
  { h: "Interactive story", p: "A site that moves and reveals as you scroll.", who: "Brands, launches, events" },
];

const jobs = [
  { h: "It tells your story.", p: "No template. Your words, your pictures and your film, made for you.", fix: "Unique to you." },
  { h: "It gets found.", p: "Built from the first line to rank on Google and to be read by AI.", fix: "SEO, AEO and GEO inside." },
  { h: "It answers.", p: "An AI assistant replies to visitors day and night, from your own information.", fix: "No visitor left waiting." },
  { h: "It takes the enquiry.", p: "Smart forms, booking links and WhatsApp, on every page.", fix: "Visitors become customers." },
];

const free = [
  "AI lead form that asks the right questions",
  "Booking link, connected to your calendar",
  "AI customer support, trained on your business",
  "WhatsApp and call buttons on every page",
  "Google and AI set-up: schema, sitemap, llms.txt",
  "Tracking on every button, so you know what works",
  "SSL padlock, hosting set-up and daily backups",
  "Training, so you can edit it yourself",
];

const platforms = [
  { h: "WordPress", p: "Best when your team publishes often. Easy to edit." },
  { h: "Webflow", p: "Best for design-led sites that change quickly." },
  { h: "Shopify", p: "Best for online shops, in Malta and abroad." },
  { h: "Custom build (Next.js)", p: "Best for speed, 3D, web apps and anything special." },
];

const terms: [string, string][] = [
  ["Core Web Vitals", "Google’s three scores for speed and comfort. We build to pass them."],
  ["Responsive", "It fits a phone, a tablet and a laptop by itself."],
  ["Accessibility (WCAG)", "People with disabilities can use it too."],
  ["SSL", "The padlock. Visitor data is kept private."],
  ["CMS", "The simple screen where you change your own words and photos."],
  ["Schema", "Hidden labels that tell Google and AI what each thing is."],
  ["llms.txt", "A short file that tells AI tools what your business does."],
  ["CDN", "Your site is served from a server near each visitor, so it loads fast."],
  ["Analytics", "Counts your visitors and what they do."],
  ["Conversion tracking", "Counts enquiries and sales, and where they came from."],
  ["CRM link", "Every enquiry lands in your customer list by itself."],
  ["Payment gateway", "Takes card payments safely."],
  ["Cookie consent (GDPR)", "Asks permission before tracking. It is EU law."],
  ["WebGL", "Real 3D inside the browser, with nothing to install."],
];

const industries = [
  "Restaurants and cafés", "Hotels and guest houses", "Clinics and dentists", "Real estate", "Law firms", "Accountants",
  "Shops and online stores", "iGaming", "Fintech", "Construction and trades", "Schools and courses", "Tourism and activities",
  "Beauty and wellness", "Gyms and fitness", "Car dealers and rentals", "Tech and software", "Events and weddings",
];

const reasons = [
  { h: "One team makes all of it.", p: "Writers, designers, a film crew, developers and AI engineers. You do not hire five companies." },
  { h: "We write the words.", p: "And shoot the photos and the film. You do not get an empty design to fill in." },
  { h: "Built to rank from line one.", p: "Search is planned before design starts, not added at the end." },
  { h: "You keep your Google rankings.", p: "When we move an old site, every old link is pointed to its new page." },
  { h: "It is yours.", p: "Your domain, your website, your content. You can edit it yourself." },
  { h: "You can meet us.", p: "We are in Birkirkara. We come to you, or you come to us." },
];

const flags = [
  "Who owns the website and the domain when it is done?",
  "Can I change the words and photos myself?",
  "Is being found on Google and AI included?",
  "Who looks after it after launch?",
];

const included = [
  "Plan and page map",
  "Words written for you",
  "Custom design: 2D, 3D or interactive",
  "Photos and film",
  "Built on the right platform for you",
  "Made for phones first",
  "SEO, AEO and GEO set-up",
  "AI lead form",
  "Booking system",
  "AI customer support",
  "WhatsApp and call buttons",
  "Tracking and a simple dashboard",
  "Hosting set-up, SSL and backups",
  "Old links moved, so rankings stay",
  "Training for your team",
  "A care plan after launch",
];

const bar = [
  "Simple websites", "Landing pages", "Online shops", "Booking websites", "Web apps", "Customer portals", "3D websites",
  "Interactive websites", "Many languages", "WordPress", "Shopify", "Webflow", "Next.js",
];

function Bar() {
  return (
    <div className="bset">
      <em>We build</em>
      {bar.map((b) => <span key={b}>{b}</span>)}
    </div>
  );
}

export default function WebDevelopmentAgencyMalta({ faqs }: Props) {
  return (
    <FlagshipShell accent="#0B0B0B" accentSoft="#D5D5FF">
      <div id="top">
        {/* 1 · the promise and the free blueprint */}
        <section className="hero">
          <div className="wrap">
            <h1>
              <span className="kick">Web development agency in Malta</span>
              <span className="big">Any website you can imagine. <i className="mk">Built to sell.</i></span>
            </h1>
            <p className="hsub">2D, 3D, interactive or simple. Fast, found on Google and AI, and ready to take enquiries from day one.</p>

            <div className="hgrid">
              <div className="ocard">
                <p className="otop"><span className="otag">Free</span><span className="olim">In 48 hours</span></p>
                <h2>Your free website blueprint.</h2>
                <p>Send us your business name. In 48 hours you get a plan for your website: what it should say, how it should look and what it needs to sell.</p>
                <WaForm id="blueprint" message={BLUEPRINT} button="Get my blueprint" />
                <p className="onote"><span>Opens WhatsApp. No call. No long form.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-hero">Or get my price</a></p>
              </div>

              <div className="screens" aria-hidden="true">
                <div className="scr">
                  <b>3D and interactive</b>
                  <span className="cube"><i /><i /><i /><i /><i /><i /></span>
                </div>
                <div className="scr">
                  <b>AI support</b>
                  <div className="bub">Are you open on Sunday?</div>
                  <div className="bub ai">Yes, 9 to 5. <u>Shall I book you in?</u></div>
                </div>
                <div className="scr s-hide">
                  <b>Booking</b>
                  <div className="row"><i>1</i>Fri 16:00</div>
                  <div className="row you"><i>2</i>Sat 10:30 · Booked</div>
                </div>
                <div className="scr s-hide">
                  <b>Found</b>
                  <div className="q"><SearchIcon />near me</div>
                  <div className="row you"><i>1</i>Your business</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="band" aria-hidden="true">
          <div className="brun"><Bar /><Bar /></div>
        </div>

        {/* 2 · every kind of website */}
        <section className="sec" id="types">
          <div className="wrap">
            <p className="lab" data-rv><b>01</b>What we build</p>
            <div className="shead" data-rv>
              <h2 className="h2">Any kind of website. <i>Made for your business.</i></h2>
              <p className="lead">Futuristic or minimal, small or huge. We pick the kind that fits what you sell.</p>
            </div>
            <div className="grid g4">
              {types.map((t) => (
                <article className="card" key={t.h} data-rv>
                  <h3 style={{ marginTop: 0 }}>{t.h}</h3>
                  <p>{t.p}</p>
                  <p className="we">{t.who}</p>
                </article>
              ))}
              <article className="card cta" data-rv>
                <div>
                  <h3>Not sure which one?</h3>
                  <p>We tell you, free, in 48 hours.</p>
                </div>
                <a className="btn btn-w" href="#top" data-testid="link-blueprint-types">Get my blueprint <Arrow /></a>
              </article>
            </div>
            <p className="under" data-rv>
              Websites are built by the web team at <Link className="txt" href="/" data-testid="link-home-context">OARC Digital</Link>, a digital and AI agency in Malta.
              So your website, your marketing and your AI tools are made to work together.
            </p>
          </div>
        </section>

        {/* 3 · beautiful is not enough */}
        <section className="sec paper" id="jobs">
          <div className="wrap">
            <p className="lab" data-rv><b>02</b>What it must do</p>
            <div className="shead" data-rv>
              <h2 className="h2">Beautiful is <i>not enough.</i></h2>
              <p className="lead">A stunning website that nobody finds is a poster in a locked room. Every website we build does four jobs.</p>
            </div>
            <div className="grid g4">
              {jobs.map((x, i) => (
                <article className="card pain" key={x.h} data-rv>
                  <span className="n" aria-hidden="true">{i + 1}</span>
                  <h3 style={{ marginTop: 16 }}>{x.h}</h3>
                  <p>{x.p}</p>
                  <span className="fix">{x.fix}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4 · included free */}
        <section className="sec" id="included">
          <div className="wrap">
            <p className="lab" data-rv><b>03</b>Included with every website</p>
            <div className="shead" data-rv>
              <h2 className="h2">The extras others charge for. <i>Included.</i></h2>
              <p className="lead">Your website should work for you from the first day. So these come with every one we build.</p>
            </div>
            <ul className="chips big" data-rv>
              {free.map((it) => <li key={it}>{it}</li>)}
            </ul>
            <p className="under" data-rv>
              Want to rank higher after launch? See our <Link className="txt" href="/aeo/seo-agency-malta">SEO agency in Malta</Link> page.
              Want AI to run more of your business? See our <Link className="txt" href="/ai">AI systems</Link>.
            </p>
          </div>
        </section>

        {/* 5 · platforms */}
        <section className="sec paper" id="platforms">
          <div className="wrap">
            <p className="lab" data-rv><b>04</b>Platforms we build on</p>
            <div className="shead" data-rv>
              <h2 className="h2">The right tool <i>for your website.</i></h2>
              <p className="lead">We are not tied to one platform. We choose the one that fits your business.</p>
            </div>
            <div className="grid g4">
              {platforms.map((x) => (
                <article className="card" key={x.h} data-rv>
                  <h3 style={{ marginTop: 0 }}>{x.h}</h3>
                  <p>{x.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6 · the tech in plain words */}
        <section className="sec" id="tech">
          <div className="wrap">
            <p className="lab" data-rv><b>05</b>The tech, explained</p>
            <div className="shead" data-rv>
              <h2 className="h2">Web words. <i>In plain English.</i></h2>
              <p className="lead">You will hear these from every web agency. Here is what each one really means.</p>
            </div>
            <dl className="terms" data-rv>
              {terms.map(([t, d]) => (
                <div key={t}><dt>{t}</dt><dd>{d}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        {/* 7 · every industry */}
        <section className="sec paper" id="industries">
          <div className="wrap">
            <p className="lab" data-rv><b>06</b>Your industry</p>
            <div className="shead" data-rv>
              <h2 className="h2">A website built for <i>your industry.</i></h2>
              <p className="lead">A hotel needs bookings. A law firm needs trust. A shop needs a fast checkout. We build for what your customers do.</p>
            </div>
            <ul className="chips big" data-rv>
              {industries.map((it) => <li key={it}>{it}</li>)}
              <li className="on">Yours too</li>
            </ul>
          </div>
        </section>

        {/* 8 · why OARC */}
        <section className="sec dark" id="why">
          <div className="wrap">
            <p className="lab" data-rv><b>07</b>Why us</p>
            <div className="shead" data-rv>
              <h2 className="h2">Why OARC Digital for <i>your website.</i></h2>
              <p className="lead">We do not hand you a design and leave. We build the thing that brings you customers.</p>
            </div>
            <ul className="why">
              {reasons.map((r) => (
                <li key={r.h} data-rv><h3>{r.h}</h3><p>{r.p}</p></li>
              ))}
            </ul>
            <div className="stat flags" data-rv>
              <b>4</b>
              <div>
                <p>questions to ask any web development agency in Malta before you sign:</p>
                <ul>{flags.map((f) => <li key={f}>{f}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        {/* 9 · the package */}
        <section className="sec" id="package">
          <div className="wrap">
            <p className="lab" data-rv><b>08</b>The package</p>
            <div className="shead" data-rv>
              <h2 className="h2">The whole website. <i>Done for you.</i></h2>
              <p className="lead">One package. One team. From the first idea to the day it goes live, and after.</p>
            </div>
            <div className="pack k" data-rv>
              <div>
                <p className="otop"><span className="otag">Everything included</span></p>
                <h3>The Website Domination package.</h3>
                <p className="pp">Words, design, film, build, search and AI, done for you. The price depends on the kind of website and how big it is.</p>
                <div className="pbtns">
                  <a className="btn btn-y" href={PRICE} target="_blank" rel="noopener" data-testid="link-price-package"><WaIcon />Get my price</a>
                  <a className="btn btn-o" href="#top" data-testid="link-blueprint-package">Get my free blueprint</a>
                </div>
              </div>
              <ul className="chk">{included.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
            <p className="under" data-rv>
              Want the whole marketing team every month, website included? See our <Link className="txt" href="/aeo/digital-marketing-agency-malta">digital marketing agency in Malta</Link> offer.
              Only need a design refresh? See <Link className="txt" href="/services/web-design">web design</Link>.
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
              <li data-rv><p className="when">In 48 hours</p><h3>You get your free blueprint.</h3><p>What your website should say, how it should look, and what it needs to sell.</p></li>
              <li data-rv><p className="when">Then</p><h3>We design and build.</h3><p>You see it grow and approve each step. You get the dates and the price before we start.</p></li>
              <li data-rv><p className="when">Launch day</p><h3>It goes live.</h3><p>We move everything, point the old links to the new pages and train your team in {NAP.addressLocality} or at your place.</p></li>
            </ol>
          </div>
        </section>

        {/* 11 · questions */}
        <section className="sec" id="faq">
          <div className="wrap">
            <p className="lab" data-rv><b>10</b>Before you ask</p>
            <div className="shead" data-rv>
              <h2 className="h2">Questions about <i>websites in Malta.</i></h2>
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
            <h2 className="h2" data-rv>Make your website your <i>best salesperson.</i></h2>
            <WaForm id="blueprint2" message={BLUEPRINT} button="Get my blueprint" />
            <p className="onote"><span>Free. In 48 hours. Opens WhatsApp.</span><a href={PRICE} target="_blank" rel="noopener" data-testid="link-price-close">Or get my price</a></p>
            <p className="home">Web is one of 8 departments at OARC Digital. Find us at {NAP.streetAddressShort}, {NAP.addressLocality} {NAP.postalCode}.</p>
          </div>
        </section>
      </div>
    </FlagshipShell>
  );
}
