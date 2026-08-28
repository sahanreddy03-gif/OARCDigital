import type { Metadata } from "next";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
import RouteSchema from "@/components/RouteSchema";
import { SUPPORTING_PAGE_SCHEMAS } from "@/lib/seo/supportingPagesSchema";
import WorkIndex from "@/components/premium-work/WorkIndex";


export const metadata: Metadata = {
  alternates: getHreflangAlternates("/our-work"),
  title: "Our Work — Evidence-Led Case Studies | OARC Digital Malta",
  description: "OARC Digital case records for client work, event campaigns, public products, restricted engagements, and original studies—each with stated source context and a clear next step.",
  openGraph: {
    images: ogImageEntry({ title: "Our Work — Evidence-Led Case Studies", subtitle: "OARC Digital client, event, product, and original records." }),
    title: "Our Work — Evidence-Led Case Studies | OARC Digital Malta",
    description: "Client records, product systems, and original studies with source context and clear evidence boundaries.",
    url: "https://oarcdigital.com/our-work",
    type: "website",
  },
  twitter: {
    images: [ogImageUrl({ title: "Our Work — Evidence-Led Case Studies", subtitle: "OARC Digital client, event, product, and original records." })],
    card: "summary_large_image",
    title: "Our Work — Evidence-Led Case Studies | OARC Digital Malta",
    description: "Client records, product systems, and original studies with source context and clear evidence boundaries.",
  },
};

export default function Page() {
  return (
    <>
      <SpeakableJsonLd path="/our-work" />
      <RouteSchema
        type="pillar"
        path="/our-work"
        title="Our Work — Evidence-Led Case Studies | OARC Digital Malta"
        description="OARC Digital case records for client work, event campaigns, public products, restricted engagements, and original studies—each with stated source context and a clear next step."
        faqs={SUPPORTING_PAGE_SCHEMAS["/our-work"].faqs}
      />
      <WorkIndex />
    </>
  );
}
