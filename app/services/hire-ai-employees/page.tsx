import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Hire AI Employees Malta | Virtual Talent | OARC",
  description: "Hire AI employees for sales, support, booking, and ops—Malta-based deployment with human oversight and CRM connection. Start with one role.",
  alternates: getHreflangAlternates("/services/hire-ai-employees"),
  openGraph: {
    images: ogImageEntry({ title: "Hire AI Employees Malta | Virtual Talent | OARC", subtitle: "Hire AI employees for sales, support, booking, and ops—Malta-based deployment with human oversight and CRM connection. Start with one role." }),
    title: "Hire AI Employees Malta | Virtual Talent | OARC",
    description: "Hire AI employees for sales, support, booking, and ops—Malta-based deployment with human oversight and CRM connection. Start with one role.",
    url: "https://oarcdigital.com/services/hire-ai-employees",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Hire AI Employees Malta | Virtual Talent | OARC", subtitle: "Hire AI employees for sales, support, booking, and ops—Malta-based deployment with human oversight and CRM connection. Start with one role." })],
    card: "summary_large_image",
    title: "Hire AI Employees Malta | Virtual Talent | OARC",
    description: "Hire AI employees for sales, support, booking, and ops—Malta-based deployment with human oversight and CRM connection. Start with one role.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["hire-ai-employees"];
    return (
      <>
        <SpeakableJsonLd path="/services/hire-ai-employees" />
        <RouteSchema
          type="service"
          path="/services/hire-ai-employees"
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
  