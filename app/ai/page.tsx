import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { AI_SYSTEMS } from "@/lib/ai-systems";
import { whatsappLink } from "@/components/ai-systems/AiSystemPage";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
import s from "@/components/ai-systems/ai-system.module.css";

const BASE = "https://oarcdigital.com";
const URL = `${BASE}/ai`;
const TITLE = "AI Systems for Businesses in Malta, by Industry | OARC Digital";
const DESCRIPTION =
  "One AI system built around your industry. It answers every enquiry, does the admin and tracks every deadline. Built and run by OARC's team in Malta.";
const OG = { title: "AI systems, built around your industry", subtitle: "Set up and run by OARC's team in Malta.", eyebrow: "AI systems" };

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { images: ogImageEntry(OG), title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { images: [ogImageUrl(OG)], card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

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
        itemListElement: AI_SYSTEMS.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `AI system for ${c.name.toLowerCase()}`,
          url: `${BASE}/ai/${c.slug}`,
        })),
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
  ],
};

export default function AiHubPage() {
  return (
    <Layout navTheme="light">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className={s.root}>
        <section className={s.hero} style={{ paddingTop: "clamp(96px, 9vw, 128px)" }}>
          <div className={s.wrap}>
            <nav className={s.crumbs} aria-label="Breadcrumb">
              <Link href="/">OARC Digital</Link><span>/</span><span>AI systems</span>
            </nav>
            <span className={s.pill}><span className={s.ldot} />Live in 48 hours</span>
            <p className={s.fin}>Pick your industry.</p>
            <h1>One AI system, built around <span className={s.hl}>your kind of business.</span></h1>
            <p className={s.sub}>
              It answers every enquiry, does the admin and tracks every deadline. We build it around how you already work,
              customise it and run it with you from Malta.
            </p>

            <div className={s.hubGrid}>
              {AI_SYSTEMS.map((c, i) => (
                <Link key={c.slug} href={`/ai/${c.slug}`} className={s.hubCard} data-testid={`link-ai-${c.slug}`}>
                  <span className={s.no}>{String(i + 1).padStart(2, "0")}</span>
                  <h2>{c.hub.title}</h2>
                  <p>{c.hub.body}</p>
                  <span className={s.gain}>{c.hub.gain}</span>
                </Link>
              ))}
            </div>

            <div className={s.cta}>
              <h2>Your industry not here yet? <em>We build it.</em></h2>
              <p>Clinics, hotels, restaurants, schools, tourism, iGaming or any office with too much admin. Tell us how your week runs.</p>
              <a className={`${s.btn} ${s.onDark}`} href={whatsappLink("business in Malta")} target="_blank" rel="noopener" data-testid="button-book-demo">
                <MessageCircle aria-hidden="true" strokeWidth={1.6} />Book a 20-minute call
              </a>
            </div>

            <div className={s.foot}>
              <p className={s.lab}>Also from OARC</p>
              <div className={s.rel}>
                <Link href="/automation">Business automation</Link>
                <Link href="/ai-agents">AI agents</Link>
                <Link href="/voice-ai-worker">Voice AI</Link>
                <Link href="/industries">Marketing by industry</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
