import type { Metadata } from "next";
import Link from "next/link";
import styles from "./fintech.module.css";

const CANONICAL = "https://oarcdigital.com/industries/fintech";
const media = "/media/exact-smoke/fintech";

export const metadata: Metadata = {
  title: "Fintech marketing in Malta | OARC Digital",
  description:
    "Brand, websites and demand systems for Malta fintech teams working across payments, EMI, RegTech and B2B finance.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Fintech marketing in Malta | OARC Digital",
    description:
      "Compliance-ready landing pages and credible pipeline for Malta fintech teams.",
    url: CANONICAL,
    type: "website",
  },
};

const services = [
  ["01", "Brand foundations", "A clear voice and visual system for regulated payments, EMI and B2B finance products."],
  ["02", "Websites that hold up", "Fast, legible landing pages with the right place for licence information, terms and risk language."],
  ["03", "Buyer journeys", "Information architecture built around CFOs, treasurers, compliance leads and integration teams."],
  ["04", "Content systems", "Useful, source-led points of view on payments, RegTech and the questions your buyers actually ask."],
  ["05", "Demand programmes", "Human-reviewed outbound and lifecycle journeys for long, multi-stakeholder sales cycles."],
  ["06", "Product stories", "Demo-led video and founder content that makes a complex financial product easier to trust."],
  ["07", "Compliance-ready craft", "A practical process for approvals, consent records and buyer-facing claims."],
];

const reads = [
  ["The payment product page as a due-diligence room", "A practical note for teams selling into banks, platforms and procurement."],
  ["A clearer way to explain regulated finance", "Why precision beats volume when every claim is reviewed."],
  ["From licence to pipeline", "The content and conversion path that helps a fintech team be understood."],
];

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${CANONICAL}#page`,
  url: CANONICAL,
  name: "Fintech marketing in Malta",
  description: "Brand, websites and demand systems for Malta fintech teams.",
  isPartOf: { "@type": "WebSite", url: "https://oarcdigital.com/" },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service[1],
    })),
  },
};

export default function FintechMaltaIndustryHub() {
  return (
    <main className={styles.page}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <header className={styles.header}>
          <Link href="/" className={styles.logo} aria-label="OARC Digital home">OARC DIGITAL<sup>©</sup></Link>
          <nav aria-label="Primary navigation">
            <Link href="/industries">Industries</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact" className={styles.navCta}>Contact</Link>
          </nav>
        </header>

        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>OARC DIGITAL / MALTA FINTECH</p>
            <h1>Fintech marketing<br />for teams that<br /><em>move money.</em></h1>
          </div>
          <div className={styles.heroAside}>
            <p>We build the brand, web and demand systems behind regulated payments, EMI, RegTech and B2B finance.</p>
            <Link href="/contact" className={styles.circleLink}>Book a call <span>↗</span></Link>
          </div>
          <div className={styles.heroArt} aria-hidden="true">
            <img src={`${media}/EmEeE3nEnsYtcfk6OkPsVDAiEc.png`} alt="" />
          </div>
        </section>

        <div className={styles.marquee} aria-label="OARC Digital services">
          <span>PAYMENTS</span><b>+</b><span>EMI</span><b>+</b><span>REGTECH</span><b>+</b><span>B2B FINANCE</span><b>+</b>
        </div>

        <section className={styles.workSection}>
          <div className={styles.sectionLabel}><span>01</span><span>THE WORK</span></div>
          <div className={styles.workIntro}>
            <h2>Credibility is<br /><em>the conversion.</em></h2>
            <p>For a Malta fintech, the website is often the first room a buyer, partner bank or compliance reviewer enters. We make that room clear, useful and unmistakably yours.</p>
          </div>
          <div className={styles.workGrid}>
            <figure className={styles.workLarge}><img src={`${media}/LdXlZLEZZdv65gH0UdKdxJymyw.png`} alt="Abstract editorial still from the OARC fintech work" /><figcaption>01 / REGULATED BY DESIGN</figcaption></figure>
            <figure className={styles.workSmall}><img src={`${media}/jMMzqyjk7CHaWvuthpQDkHx8A.png`} alt="Editorial composition for a fintech brand" /><figcaption>02 / MADE TO BE UNDERSTOOD</figcaption></figure>
            <figure className={styles.workSmall}><img src={`${media}/2huW5RlJbcixAJ5B0XPJz7ofHuQ.png`} alt="Graphic study for a finance product" /><figcaption>03 / SIGNAL, NOT NOISE</figcaption></figure>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.sectionLabel}><span>02</span><span>WHAT WE DO</span></div>
          <div className={styles.servicesTop}><h2>One clear system.<br /><em>Every touchpoint.</em></h2><p>Not a fixed package. We start with the pressure point, then build the pieces your team can actually use.</p></div>
          <div className={styles.serviceList}>
            {services.map(([number, title, copy]) => <article className={styles.serviceRow} key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><span className={styles.arrow}>+</span></article>)}
          </div>
        </section>

        <section className={styles.readsSection}>
          <div className={styles.sectionLabel}><span>03</span><span>READS</span></div>
          <div className={styles.readsHeading}><h2>Notes for the<br /><em>regulated world.</em></h2><Link href="/journal">View all reads +</Link></div>
          <div className={styles.readsGrid}>
            {reads.map(([title, copy], i) => <Link href="/journal" className={styles.readCard} key={title}><img src={`${media}/${["qnF48NDkND2wwflYUqb0gqBsOQ.png","S2SuZiZulrtvLrs30SjQSv40.png","EmEeE3nEnsYtcfk6OkPsVDAiEc.png"][i]}`} alt="" /><span>0{i + 1} / NOTE</span><h3>{title}</h3><p>{copy}</p></Link>)}
          </div>
        </section>

        <footer className={styles.footer}>
          <div><h2>Let&apos;s make<br /><em>it clear.</em></h2><Link href="/contact" className={styles.footerCta}>Start a conversation +</Link></div>
          <div className={styles.footerLinks}><Link href="/">Home</Link><Link href="/industries">Industries</Link><Link href="/contact">Contact</Link><a href="https://wa.me/35679711799">WhatsApp +356 7971 1799</a></div>
          <div className={styles.footerBase}><span>OARC DIGITAL© 2026</span><span>Malta / Europe</span><span>Privacy</span></div>
        </footer>
    </main>
  );
}