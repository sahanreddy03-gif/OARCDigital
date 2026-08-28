/** OARC Design Reminder — canonical case routes preserve the exact Premium Work documentary rhythm and make every source boundary legible. */
import type { Metadata } from "next";
import WorkCase from "@/components/premium-work/WorkCase";
import { CLIENT_CASE_STUDIES } from "@/lib/data/premium-work/clientCaseStudies";
import { ORIGINAL_STUDIES } from "@/lib/data/premium-work/originalStudies";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const records = {
  ...CLIENT_CASE_STUDIES,
  ...ORIGINAL_STUDIES,
  pjazza: { name: "PJAZZA", intro: "A public live-shopping marketplace designed to move the useful question closer to a local buying decision.", mode: "Public product" },
  h360: { name: "H360", intro: "A connected restaurant system designed to turn discovery, bookings, guest questions, orders, and operations into a clearer day.", mode: "Public product" },
  "data-foundation": { name: "Data Foundation", intro: "An anonymised system story about making fragmented distributor data more governed, usable, and traceable.", mode: "Confidential engagement" },
} as const;

type WorkFaq = { question: string; answer: string };

export function generateStaticParams() {
  return Object.keys(records).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const record = records[slug as keyof typeof records];
  if (!record) return { title: "Work record not found | OARC Digital", robots: { index: false, follow: false } };
  const confidential = "mode" in record && record.mode.includes("Confidential");
  const title = `${record.name} — OARC Digital Work`;
  return {
    title,
    description: record.intro,
    alternates: { canonical: `/our-work/${slug}` },
    robots: confidential ? { index: false, follow: false } : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    openGraph: {
      title,
      description: record.intro,
      url: `https://oarcdigital.com/our-work/${slug}`,
      type: "article",
      images: ogImageEntry({ title, subtitle: record.intro }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: record.intro,
      images: [ogImageUrl({ title, subtitle: record.intro })],
    },
  };
}

export default async function OurWorkRecordPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const record = records[slug as keyof typeof records];
  const confidential = record && "mode" in record && record.mode.includes("Confidential");
  const faqs: WorkFaq[] = record && !confidential && "faq" in record && Array.isArray(record.faq)
    ? record.faq as WorkFaq[]
    : [];
  const schema = record && !confidential ? {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `https://oarcdigital.com/our-work/${slug}#record`,
        name: `${record.name} — OARC Digital Work`,
        url: `https://oarcdigital.com/our-work/${slug}`,
        description: record.intro,
        author: { "@type": "Organization", name: "OARC Digital", url: "https://oarcdigital.com" },
        dateModified: "2026-08-28",
        isAccessibleForFree: true,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "OARC Digital", item: "https://oarcdigital.com" },
          { "@type": "ListItem", position: 2, name: "Our Work", item: "https://oarcdigital.com/our-work" },
          { "@type": "ListItem", position: 3, name: record.name, item: `https://oarcdigital.com/our-work/${slug}` },
        ],
      },
      ...(faqs.length > 0
        ? [{
            "@type": "FAQPage",
            mainEntity: faqs.map(({ question, answer }) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: { "@type": "Answer", text: answer },
            })),
          }]
        : []),
    ],
  } : null;

  return <>{schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}<WorkCase /></>;
}
