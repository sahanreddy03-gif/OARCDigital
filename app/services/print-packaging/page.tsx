import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Print & Packaging Design | Physical Product Design | OARC Digital",
  description: "Premium print and packaging design services. OARC Digital creates stunning physical brand experiences from product packaging to marketing collateral.",
  alternates: getHreflangAlternates("/services/print-packaging"),
  openGraph: {
    images: ogImageEntry({ title: "Print & Packaging Design | Physical Product Design | OARC Digital", subtitle: "Premium print and packaging design services. OARC Digital creates stunning physical brand experiences from product packaging to marketing collateral." }),
    title: "Print & Packaging Design | Physical Product Design | OARC Digital",
    description: "Premium print and packaging design services. OARC Digital creates stunning physical brand experiences from product packaging to marketing collateral.",
    url: "https://oarcdigital.com/services/print-packaging",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Print & Packaging Design | Physical Product Design | OARC Digital", subtitle: "Premium print and packaging design services. OARC Digital creates stunning physical brand experiences from product packaging to marketing collateral." })],
    card: "summary_large_image",
    title: "Print & Packaging Design | Physical Product Design | OARC Digital",
    description: "Premium print and packaging design services. OARC Digital creates stunning physical brand experiences from product packaging to marketing collateral.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["print-packaging"];
    return (
      <>
        <SpeakableJsonLd path="/services/print-packaging" />
        <RouteSchema
          type="service"
          path="/services/print-packaging"
          title={schema.title}
          description={schema.description}
          features={schema.features}
          offers={schema.offers}
          faqs={schema.faqs}
        />
        <PageContent />
      </>
    );
  }
  