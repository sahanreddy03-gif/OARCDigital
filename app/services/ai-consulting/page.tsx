import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "AI Consulting Malta | Strategy + Implementation | OARC",
  description: "AI consulting without the hype—strategy tied to implementation for Malta businesses that need a first useful agent or automation, not a whitepaper.",
  alternates: getHreflangAlternates("/services/ai-consulting"),
  openGraph: {
    images: ogImageEntry({ title: "AI Consulting Malta | Strategy + Implementation | OARC", subtitle: "AI consulting without the hype—strategy tied to implementation for Malta businesses that need a first useful agent or automation, not a whitepaper." }),
    title: "AI Consulting Malta | Strategy + Implementation | OARC",
    description: "AI consulting without the hype—strategy tied to implementation for Malta businesses that need a first useful agent or automation, not a whitepaper.",
    url: "https://oarcdigital.com/services/ai-consulting",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "AI Consulting Malta | Strategy + Implementation | OARC", subtitle: "AI consulting without the hype—strategy tied to implementation for Malta businesses that need a first useful agent or automation, not a whitepaper." })],
    card: "summary_large_image",
    title: "AI Consulting Malta | Strategy + Implementation | OARC",
    description: "AI consulting without the hype—strategy tied to implementation for Malta businesses that need a first useful agent or automation, not a whitepaper.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["ai-consulting"];
    return (
      <>
        <SpeakableJsonLd path="/services/ai-consulting" />
        <RouteSchema
          type="service"
          path="/services/ai-consulting"
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
  