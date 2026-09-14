import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { NAP } from "@/lib/seo/nap";

const CANONICAL = "https://oarcdigital.com/press";
const TITLE = "Press Resources | OARC Digital";
const DESCRIPTION =
  "Press and editorial resources for OARC Digital: company description, verified positioning, contact details, and canonical links.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: CANONICAL, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const pressSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#webpage`,
  url: CANONICAL,
  name: TITLE,
  description: DESCRIPTION,
  about: { "@type": "Organization", name: "OARC Digital", url: "https://oarcdigital.com" },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["[data-speakable='press-summary']"],
  },
};

export default function PressPage() {
  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pressSchema) }} />
      <article className="mx-auto max-w-4xl px-6 py-20 md:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">Press resources</p>
        <h1 className="mb-8 text-4xl font-bold leading-tight md:text-6xl">OARC Digital press room</h1>
        <p className="mb-12 max-w-3xl text-xl leading-relaxed text-muted-foreground" data-speakable="press-summary">
          OARC Digital is a Malta-based creative and AI systems agency. It combines human-directed
          brand and content work with AI workers, Voice AI Worker, workflow automation, and hospitality
          systems for businesses in Malta and across the EU.
        </p>

        <section className="mb-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="mb-3 text-xl font-bold">Company description</h2>
            <p className="leading-relaxed text-muted-foreground">
              OARC Digital helps businesses connect creative demand generation with the systems that
              answer, qualify, book, support, and report on that demand. Its work spans creative,
              AI workers, voice coverage, business automation, and H360 hospitality tools.
            </p>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="mb-3 text-xl font-bold">Editorial positioning</h2>
            <p className="leading-relaxed text-muted-foreground">
              Use “Malta-based creative and AI systems agency” as the concise description. Avoid
              unsupported rankings, client or outcome claims, and universal pricing statements.
            </p>
          </div>
        </section>

        <section className="mb-10 rounded-2xl border bg-card p-6 md:p-8" aria-labelledby="press-contact">
          <h2 id="press-contact" className="mb-4 text-2xl font-bold">Press contact</h2>
          <address className="not-italic leading-relaxed text-muted-foreground">
            OARC Digital<br />
            {NAP.streetAddress}, {NAP.addressLocality} {NAP.postalCode}, Malta<br />
            <a className="text-orange-600 hover:underline" href={`mailto:${NAP.email}`}>{NAP.email}</a><br />
            <a className="text-orange-600 hover:underline" href={`tel:${NAP.phoneE164}`}>{NAP.phoneDisplay}</a>
          </address>
        </section>

        <section aria-labelledby="canonical-resources">
          <h2 id="canonical-resources" className="mb-4 text-2xl font-bold">Canonical resources</h2>
          <ul className="space-y-3 text-orange-600">
            <li><Link className="hover:underline" href="/llms.txt">AI-readable company index (llms.txt)</Link></li>
            <li><Link className="hover:underline" href="/llms-full.txt">Full AI-readable reference (llms-full.txt)</Link></li>
            <li><Link className="hover:underline" href="/our-work">Our work and public portfolio</Link></li>
            <li><Link className="hover:underline" href="/ai-native-marketing-agency">AI-native marketing agency definition</Link></li>
          </ul>
        </section>
      </article>
    </Layout>
  );
}