import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Layout from "@/components/layout/Layout";
import AiSystemPage from "@/components/ai-systems/AiSystemPage";
import { AI_SYSTEM_SLUGS, getAiSystem } from "@/lib/ai-systems";
import { NAP } from "@/lib/seo/nap";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const BASE = "https://oarcdigital.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return AI_SYSTEM_SLUGS.map((industry) => ({ industry }));
}

type Props = { params: Promise<{ industry: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params;
  const c = getAiSystem(industry);
  if (!c) return {};
  const url = `${BASE}/ai/${c.slug}`;
  const og = { title: c.metaTitle.replace(" | OARC Digital", ""), subtitle: c.hub.body, eyebrow: "AI systems" };
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      images: ogImageEntry(og),
      title: c.metaTitle,
      description: c.metaDescription,
      url,
      type: "website",
    },
    twitter: {
      images: [ogImageUrl(og)],
      card: "summary_large_image",
      title: c.metaTitle,
      description: c.metaDescription,
    },
  };
}

export default async function Page({ params }: Props) {
  const { industry } = await params;
  const c = getAiSystem(industry);
  if (!c) notFound();
  const url = `${BASE}/ai/${c.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `AI system for ${c.name.toLowerCase()} in Malta`,
        serviceType: c.serviceType,
        description: c.schemaDescription,
        url,
        areaServed: { "@type": "Country", name: "Malta" },
        provider: { "@type": "Organization", "@id": `${BASE}/#organization`, name: NAP.name, url: BASE },
        // One Service node. The jobs are listed as plain text, not as 16+ nested offers.
        serviceOutput: c.jobs.items.map((j) => j.title).join("; "),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: c.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "OARC Digital", item: BASE },
          { "@type": "ListItem", position: 2, name: "AI systems", item: `${BASE}/ai` },
          { "@type": "ListItem", position: 3, name: c.name, item: url },
        ],
      },
    ],
  };

  return (
    <Layout navTheme="dark">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AiSystemPage c={c} />
    </Layout>
  );
}
