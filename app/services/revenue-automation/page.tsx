import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Revenue Automation Malta | AI Revenue Engine | OARC Digital",
  description: `AI-powered revenue automation for Malta businesses. OARC Digital builds systems that generate and convert leads automatically. Contact ${NAP.email}.`,
  alternates: getHreflangAlternates("/services/revenue-automation"),
  openGraph: {
    images: ogImageEntry({ title: "Revenue Automation Malta | AI Revenue Engine | OARC Digital", subtitle: `AI-powered revenue automation for Malta businesses. OARC Digital builds systems that generate and convert leads automatically. Contact ${NAP.email}.` }),
    title: "Revenue Automation Malta | AI Revenue Engine | OARC Digital",
    description: `AI-powered revenue automation for Malta businesses. OARC Digital builds systems that generate and convert leads automatically. Contact ${NAP.email}.`,
    url: "https://oarcdigital.com/services/revenue-automation",
    type: "website",
  },
  twitter: {
    images: [ogImageUrl({ title: "Revenue Automation Malta | AI Revenue Engine | OARC Digital", subtitle: `AI-powered revenue automation for Malta businesses. OARC Digital builds systems that generate and convert leads automatically. Contact ${NAP.email}.` })],
    card: "summary_large_image",
    title: "Revenue Automation Malta | AI Revenue Engine | OARC Digital",
    description: `AI-powered revenue automation for Malta businesses. OARC Digital builds systems that generate and convert leads automatically. Contact ${NAP.email}.`,
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["revenue-automation"];
    return (
      <>
        <SpeakableJsonLd path="/services/revenue-automation" />
        <RouteSchema
          type="service"
          path="/services/revenue-automation"
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
  