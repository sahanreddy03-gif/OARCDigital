import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronDown, Menu, Plus, Sparkles } from "lucide-react";

const CANONICAL = "https://oarcdigital.com/industries/igaming";
const media = "/media/exact-smoke/igaming";

export const metadata: Metadata = {
  title: "iGaming Marketing in Malta | OARC Digital",
  description:
    "Compliant paid acquisition and controlled revenue operations for Malta iGaming operators, studios, B2B suppliers and affiliates.",
  alternates: { canonical: CANONICAL },
  openGraph: { title: "iGaming Marketing in Malta | OARC Digital", description: "Compliant paid acquisition and controlled revenue operations for Malta iGaming teams.", url: CANONICAL, type: "website" },
};

const values = [
  ["01", "Compliance in the workflow", "Pre-clearance is part of production, not a late-stage obstacle."],
  ["02", "Revenue before activity", "Every campaign, nurture and event sprint has a defined commercial job."],
  ["03", "Malta context, globally useful", "We understand the close social graph without losing sight of your target markets."],
];
const services = [
  ["Paid acquisition", "MGA-aware paid programmes and a curated affiliate layer for licensed markets."],
  ["B2B demand", "SDR and event programmes for studios, platforms, payments, KYC and tooling vendors."],
  ["Player CRM", "Lifecycle automation across registration, KYC, deposits, dormancy and safer-gambling signals."],
  ["AI support", "Multilingual first-line triage on top of your existing helpdesk, with human escalation."],
  ["Creative systems", "Native-language game, operator and B2B creative built for compliant publishing."],
  ["Brand foundations", "Identity systems that work in the lobby, the buying committee and the exhibition hall."],
];
const faqs = [
  ["Who is the iGaming programme for?", "Licensed operators, studios, aggregators, platform suppliers, affiliates and responsible-gambling tooling vendors with a clear market and compliance perimeter."],
  ["Can you work across B2C and B2B?", "Yes. The programme adapts to the different buying rhythms: player lifecycle work for operators, and long-cycle demand generation for suppliers and studios."],
  ["How do you handle responsible-gambling requirements?", "We build a documented review step into creative and CRM production. Signals that require a human response are routed out of the marketing workflow."],
  ["Which markets and languages do you support?", "English, German, Italian, Spanish, Portuguese-BR and Polish are our sustained production languages, with additional languages scoped per project."],
];

export default function IGamingMaltaIndustryHub() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${CANONICAL}#page`,
    url: CANONICAL,
    name: "iGaming Marketing in Malta",
    description: "Compliant paid acquisition and controlled revenue operations for Malta iGaming teams.",
    inLanguage: "en-MT",
    mainEntity: { "@type": "ItemList", itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s[0] })) },
  };
  return (
    <div className="ig-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="ig-preload" aria-hidden="true"><img src={`${media}/logo.svg`} alt="" /><span>OARC Digital</span></div>
      <header className="ig-nav">
        <div className="ig-nav-inner">
          <Link href="/" className="ig-brand" aria-label="OARC Digital home"><img src={`${media}/logo.svg`} alt="" /><span>OARC<span>Digital</span></span></Link>
          <nav className="ig-desktop-nav" aria-label="Homepage navigation">
            <Link href="#about">About</Link><Link href="#values">Approach</Link><Link href="#services">Services</Link><Link href="#process">Process</Link><Link href="#faq">FAQs</Link>
          </nav>
          <div className="ig-nav-actions"><Link className="ig-nav-contact" href="/contact">Contact <ArrowUpRight size={14} /></Link><button className="ig-menu" aria-label="Open menu"><Menu size={18} /><span>Menu</span></button></div>
        </div>
      </header>
      <main>
        <section className="ig-hero">
          <div className="ig-hero-video"><video autoPlay loop muted playsInline poster={`${media}/hero-poster.jpg`}><source src={`${media}/hero.mp4`} type="video/mp4" /></video><div className="ig-hero-shade" /></div>
          <div className="ig-container ig-hero-content">
            <div className="ig-eyebrow"><Sparkles size={15} /> Malta iGaming industry hub</div>
            <h1>Marketing systems<br /><em>for serious play.</em></h1>
            <p>Compliant acquisition and controlled revenue operations for licensed operators, studios, B2B suppliers and affiliates.</p>
            <div className="ig-buttons"><Link className="ig-button ig-button-light" href="/contact">Talk to OARC <ArrowUpRight size={16} /></Link><Link className="ig-button ig-button-quiet" href="#services">Explore the stack</Link></div>
          </div>
          <div className="ig-scroll">Scroll to explore <span /></div>
        </section>
        <section className="ig-marquee" aria-label="iGaming sectors"><div>OPERATORS <i>/</i> STUDIOS <i>/</i> PLATFORMS <i>/</i> AFFILIATES <i>/</i> PLAYER PROTECTION <i>/</i> OPERATORS <i>/</i> STUDIOS <i>/</i> PLATFORMS <i>/</i></div></section>
        <section id="about" className="ig-section ig-about ig-container">
          <div className="ig-label"><b>001</b><span /> What we do</div>
          <div className="ig-about-copy"><h2>The Malta iGaming market is connected by design.</h2><p>That makes reputation, regulatory discipline and commercial timing inseparable. OARC helps teams turn that reality into an operating advantage: paid programmes that respect the perimeter, B2B demand around the event calendar, and lifecycle systems that keep useful work moving after the first click.</p><Link className="ig-text-link" href="/contact">Start with the real constraint <ArrowUpRight size={15} /></Link></div>
          <div className="ig-about-media"><img src={`${media}/about.png`} alt="Abstract OARC Digital automation artwork" /><div className="ig-media-caption">OARC / MALTA / IGAMING</div></div>
        </section>
        <section id="values" className="ig-section ig-values"><div className="ig-container">
          <div className="ig-label"><b>002</b><span /> Our approach</div><div className="ig-section-heading"><h2>Built around<br /><em>your perimeter.</em></h2><p>Less theatre. More operating clarity for teams working inside regulated markets.</p></div>
          <div className="ig-value-grid">{values.map(([n, title, copy]) => <article key={n} className="ig-value"><div className="ig-value-top"><span>{n}</span><Plus size={18} /></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div></section>
        <section id="services" className="ig-section ig-services ig-container"><div className="ig-label"><b>003</b><span /> Capabilities</div><div className="ig-section-heading"><h2>One partner.<br /><em>Six useful layers.</em></h2><p>Start with the bottleneck in front of you. Add the next layer when the team is ready to absorb it.</p></div><div className="ig-service-list">{services.map(([title, copy], i) => <Link href="/contact" className="ig-service" key={title}><span className="ig-service-number">0{i + 1}</span><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight className="ig-service-arrow" size={20} /></Link>)}</div></section>
        <section id="process" className="ig-section ig-process"><div className="ig-container"><div className="ig-label"><b>004</b><span /> How it works</div><div className="ig-process-layout"><h2>Good work<br /><em>has a sequence.</em></h2><div className="ig-process-steps"><div><strong>01</strong><h3>Map the perimeter</h3><p>Markets, licence context, audiences, systems and the approval path.</p></div><div><strong>02</strong><h3>Choose the first lever</h3><p>A focused programme with a clear owner, signal and next decision.</p></div><div><strong>03</strong><h3>Build the rhythm</h3><p>Reporting and production routines that keep compliance and growth together.</p></div></div></div></div></section>
        <section className="ig-cta"><div className="ig-container"><div className="ig-label"><b>005</b><span /> Next move</div><h2>Make your next<br /><em>move deliberate.</em></h2><p>Tell us where acquisition, operations or compliance is slowing the team down.</p><Link href="/contact" className="ig-button ig-button-light">Contact OARC <ArrowUpRight size={16} /></Link><a className="ig-whatsapp" href="https://wa.me/35679711799">WhatsApp +356 7971 1799</a></div></section>
        <section id="faq" className="ig-section ig-faq ig-container"><div className="ig-label"><b>006</b><span /> FAQs</div><div className="ig-faq-grid"><h2>Useful answers,<br /><em>without the spin.</em></h2><div>{faqs.map(([q, a]) => <details key={q}><summary>{q}<ChevronDown size={17} /></summary><p>{a}</p></details>)}</div></div></section>
      </main>
      <footer className="ig-footer"><div className="ig-container"><div className="ig-footer-top"><Link href="/" className="ig-brand"><img src={`${media}/logo.svg`} alt="" /><span>OARC<span>Digital</span></span></Link><div><p>Malta-based digital systems for ambitious, regulated teams.</p><Link href="/contact">Start a conversation <ArrowUpRight size={14} /></Link></div></div><div className="ig-footer-bottom"><span>© {new Date().getFullYear()} OARC Digital</span><Link href="/">Home</Link><Link href="/contact">Contact</Link><a href="https://wa.me/35679711799">+356 7971 1799</a></div></div></footer>
      <style>{css}</style>
    </div>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
.ig-page{--ink:#17191d;--paper:#e8e6df;--muted:#777a79;--line:rgba(23,25,29,.16);--acid:#d8f36a;background:var(--paper);color:var(--ink);font-family:'DM Sans',sans-serif;overflow:hidden}.ig-page *{box-sizing:border-box}.ig-page a{color:inherit;text-decoration:none}.ig-container{width:min(1180px,calc(100% - 64px));margin:auto}.ig-preload{position:fixed;inset:0;z-index:30;display:flex;align-items:center;justify-content:center;gap:10px;background:var(--ink);color:#fff;animation:ig-hide .18s .08s forwards;pointer-events:none}.ig-preload img{width:24px;filter:invert(1)}.ig-preload span{font:600 14px 'Space Grotesk'}.ig-nav{position:absolute;z-index:5;top:0;left:0;width:100%;color:#fff}.ig-nav-inner{width:min(1280px,calc(100% - 64px));height:88px;margin:auto;display:flex;align-items:center;justify-content:space-between}.ig-brand{display:flex;align-items:center;gap:10px;font:600 17px 'Space Grotesk'}.ig-brand img{width:25px;height:25px;filter:invert(1)}.ig-brand span span{font-weight:400;opacity:.6}.ig-desktop-nav{display:flex;gap:28px;margin-left:120px;font-size:13px;color:rgba(255,255,255,.7)}.ig-desktop-nav a:hover,.ig-nav-contact:hover{color:var(--acid)}.ig-nav-actions{display:flex;align-items:center;gap:22px}.ig-nav-contact{display:flex;gap:5px;align-items:center;font-size:13px}.ig-menu{border:0;background:none;color:inherit;display:flex;align-items:center;gap:8px;font:inherit;font-size:13px;cursor:pointer}.ig-hero{min-height:780px;height:94vh;position:relative;color:#fff;display:flex;align-items:center}.ig-hero-video,.ig-hero-video video,.ig-hero-shade{position:absolute;inset:0;width:100%;height:100%}.ig-hero-video video{object-fit:cover}.ig-hero-shade{background:linear-gradient(110deg,rgba(13,15,19,.93),rgba(13,15,19,.6) 55%,rgba(13,15,19,.35))}.ig-hero-content{position:relative;padding-top:80px}.ig-eyebrow,.ig-label{display:flex;align-items:center;gap:9px;text-transform:uppercase;letter-spacing:.13em;font-size:11px}.ig-eyebrow{color:var(--acid);margin-bottom:28px}.ig-hero h1,.ig-section-heading h2,.ig-about h2,.ig-process h2,.ig-cta h2,.ig-faq h2{font:500 clamp(52px,8vw,112px)/.94 'Space Grotesk';letter-spacing:-.065em;margin:0}.ig-hero h1 em,.ig-section-heading h2 em,.ig-about h2 em,.ig-process h2 em,.ig-cta h2 em,.ig-faq h2 em{font-style:normal;color:var(--acid)}.ig-hero p{max-width:520px;font-size:18px;line-height:1.5;color:rgba(255,255,255,.7);margin:32px 0}.ig-buttons{display:flex;align-items:center;gap:14px}.ig-button{display:inline-flex;align-items:center;gap:24px;padding:16px 20px;border:1px solid transparent;font-size:13px;font-weight:600}.ig-button-light{background:var(--acid);color:var(--ink)}.ig-button-quiet{border-color:rgba(255,255,255,.35);color:#fff}.ig-scroll{position:absolute;right:32px;bottom:28px;writing-mode:vertical-rl;text-transform:uppercase;letter-spacing:.15em;font-size:10px;color:#fff;display:flex;gap:14px;align-items:center}.ig-scroll span{height:50px;border-left:1px solid var(--acid)}.ig-marquee{border-bottom:1px solid var(--line);border-top:1px solid var(--line);overflow:hidden;white-space:nowrap;padding:18px 0;font:600 13px 'Space Grotesk';letter-spacing:.12em}.ig-marquee div{animation:ig-marquee 32s linear infinite}.ig-marquee i{font-style:normal;color:#9c9e95;padding:0 24px}.ig-section{padding:150px 0}.ig-label{color:var(--muted);margin-bottom:60px}.ig-label b{font-weight:500;color:var(--ink)}.ig-label span{width:38px;border-top:1px solid currentColor}.ig-about{display:grid;grid-template-columns:1fr 1.7fr;gap:60px}.ig-about .ig-label{grid-row:span 2}.ig-about-copy{max-width:680px}.ig-about h2{font-size:clamp(42px,5.5vw,78px);margin-bottom:32px}.ig-about-copy p,.ig-section-heading p{font-size:17px;line-height:1.65;color:#5f6260;max-width:570px}.ig-text-link,.ig-footer-top a{display:inline-flex;align-items:center;gap:8px;border-bottom:1px solid var(--ink);padding-bottom:6px;font-size:13px;margin-top:22px}.ig-about-media{grid-column:2;position:relative;margin-top:55px}.ig-about-media img{display:block;width:100%;height:400px;object-fit:cover;filter:grayscale(1);mix-blend-mode:multiply}.ig-media-caption{position:absolute;bottom:16px;left:18px;color:#fff;font:10px 'Space Grotesk';letter-spacing:.13em}.ig-values{background:#202227;color:#fff}.ig-values .ig-label{color:#8f9290}.ig-values .ig-label b{color:#fff}.ig-section-heading{display:flex;justify-content:space-between;align-items:end;gap:40px;margin-bottom:75px}.ig-section-heading h2{font-size:clamp(48px,6.5vw,90px)}.ig-section-heading p{color:#9b9d9e;margin:0}.ig-value-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(255,255,255,.2)}.ig-value{padding:28px 24px 10px 0;border-right:1px solid rgba(255,255,255,.2);margin-right:24px}.ig-value:last-child{border:0}.ig-value-top{display:flex;justify-content:space-between;color:var(--acid);font-size:12px}.ig-value h3{font:500 24px 'Space Grotesk';margin:70px 0 14px}.ig-value p{color:#9b9d9e;line-height:1.5;max-width:250px}.ig-services{padding-bottom:130px}.ig-services .ig-section-heading{margin-bottom:50px}.ig-service-list{border-top:1px solid var(--line)}.ig-service{display:grid;grid-template-columns:90px 1fr auto;gap:20px;align-items:center;padding:27px 0;border-bottom:1px solid var(--line);transition:padding .25s ease}.ig-service:hover{padding-left:15px;background:rgba(216,243,106,.08)}.ig-service-number{font:12px 'Space Grotesk';color:var(--muted)}.ig-service h3{font:500 27px 'Space Grotesk';margin:0 0 5px}.ig-service p{margin:0;color:#666a68;font-size:14px}.ig-service-arrow{color:var(--muted)}.ig-process{background:#d5d3cb}.ig-process-layout{display:grid;grid-template-columns:1fr 1fr;gap:100px}.ig-process h2{font-size:clamp(50px,6vw,82px)}.ig-process-steps{border-top:1px solid var(--line)}.ig-process-steps>div{padding:22px 0;border-bottom:1px solid var(--line);display:grid;grid-template-columns:52px 1fr}.ig-process-steps strong{font:12px 'Space Grotesk';color:var(--muted)}.ig-process h3{font:500 22px 'Space Grotesk';margin:0}.ig-process p{grid-column:2;margin:9px 0 3px;color:#676966;line-height:1.5;font-size:14px}.ig-cta{background:#22252a;color:#fff;padding:140px 0}.ig-cta .ig-label{color:#929591}.ig-cta h2{font-size:clamp(58px,9vw,124px);max-width:900px}.ig-cta p{color:#a5a7a5;margin:32px 0}.ig-whatsapp{display:inline-block;margin-left:24px;color:var(--acid);font-size:13px;border-bottom:1px solid var(--acid);padding-bottom:5px}.ig-faq-grid{display:grid;grid-template-columns:1fr 1.3fr;gap:100px}.ig-faq h2{font-size:clamp(45px,5vw,70px)}details{border-top:1px solid var(--line);padding:21px 0}details:last-child{border-bottom:1px solid var(--line)}summary{list-style:none;display:flex;align-items:center;justify-content:space-between;gap:20px;font:500 17px 'Space Grotesk';cursor:pointer}summary::-webkit-details-marker{display:none}summary svg{transition:transform .2s}details[open] summary svg{transform:rotate(180deg)}details p{color:#656966;line-height:1.6;font-size:14px;max-width:550px;margin:17px 0 2px}.ig-footer{background:#22252a;color:#fff;padding:58px 0 24px}.ig-footer-top{display:flex;justify-content:space-between;align-items:start;padding-bottom:70px;border-bottom:1px solid rgba(255,255,255,.16)}.ig-footer-top p{color:#999d9b;font-size:13px;margin:0}.ig-footer-top a{color:var(--acid);border-color:var(--acid);margin-top:18px}.ig-footer-bottom{display:flex;gap:24px;padding-top:22px;color:#858987;font-size:11px}.ig-footer-bottom a:nth-child(2){margin-left:auto}@keyframes ig-hide{to{opacity:0;visibility:hidden}}@keyframes ig-marquee{to{transform:translateX(-50%)}}@media(max-width:760px){.ig-container,.ig-nav-inner{width:calc(100% - 40px)}.ig-desktop-nav,.ig-nav-contact{display:none}.ig-nav-inner{height:72px}.ig-hero{min-height:680px;height:92vh}.ig-hero h1{font-size:58px}.ig-hero p{font-size:16px}.ig-scroll{display:none}.ig-section{padding:90px 0}.ig-about{display:block}.ig-about .ig-label{margin-bottom:45px}.ig-about-media{margin-top:50px}.ig-about-media img{height:260px}.ig-section-heading{display:block;margin-bottom:48px}.ig-section-heading p{margin-top:22px}.ig-value-grid{display:block}.ig-value{border-right:0;border-bottom:1px solid rgba(255,255,255,.2);padding:24px 0 35px;margin:0}.ig-value h3{margin-top:45px}.ig-service{grid-template-columns:40px 1fr auto;gap:12px}.ig-service h3{font-size:21px}.ig-service p{font-size:13px}.ig-process-layout,.ig-faq-grid{display:block}.ig-process h2,.ig-faq h2{margin-bottom:50px}.ig-cta{padding:90px 0}.ig-whatsapp{display:block;margin:22px 0 0}.ig-footer-top{display:block}.ig-footer-top>div{margin-top:40px}.ig-footer-bottom{flex-wrap:wrap}.ig-footer-bottom a:nth-child(2){margin-left:0}.ig-buttons{flex-wrap:wrap}.ig-button{padding:14px 16px}}
@media(prefers-reduced-motion:reduce){.ig-preload{animation:none;display:none}.ig-marquee div{animation:none}.ig-service{transition:none}}
`;