import type { Metadata } from "next";
import { supportingPagesSEO } from "@/data/seoMetadata";
import RouteSchema from "@/components/RouteSchema";
import { SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SUPPORTING_PAGE_SCHEMAS } from "@/lib/seo/supportingPagesSchema";

export const metadata: Metadata = {
  title: supportingPagesSEO.enterprise.title,
  description: supportingPagesSEO.enterprise.description,
  alternates: { canonical: `https://oarcdigital.com${supportingPagesSEO.enterprise.path}` },
  openGraph: {
    images: ogImageEntry({ title: supportingPagesSEO.enterprise.title, subtitle: supportingPagesSEO.enterprise.description }),
    title: supportingPagesSEO.enterprise.title,
    description: supportingPagesSEO.enterprise.description,
    url: `https://oarcdigital.com${supportingPagesSEO.enterprise.path}`,
    type: supportingPagesSEO.enterprise.ogType ?? "website",
  },
  twitter: {
    images: [ogImageUrl({ title: supportingPagesSEO.enterprise.title, subtitle: supportingPagesSEO.enterprise.description })],
    card: "summary_large_image",
    title: supportingPagesSEO.enterprise.title,
    description: supportingPagesSEO.enterprise.description,
  },
};

import Layout from "@/components/layout/Layout";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export default function Page() {
  return (
    <Layout>
      <SpeakableJsonLd path="/enterprise" />
      <RouteSchema
        type="pillar"
        path="/enterprise"
        title="Enterprise Engagements — OARC Digital | Malta & EU"
        description="Enterprise-grade creative, AI agents, and revenue automation for organisations above EUR 5M revenue. Dedicated team, custom SLAs, and EU-data-resident infrastructure."
        faqs={SUPPORTING_PAGE_SCHEMAS["/enterprise"].faqs}
      />
      <div className="min-h-screen bg-background py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise Solutions (Phase 1 Skeleton)</h1>
          <p className="text-xl text-gray-600">Enterprise offerings and custom solutions coming in Phase 3.</p>
        </div>
      </div>
    </Layout>
  );
}
