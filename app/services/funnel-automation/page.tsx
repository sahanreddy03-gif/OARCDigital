import type { Metadata } from "next";
import ServiceClient from "@/components/services/RevenueServiceClient";
import DeepContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Funnel Automation Malta | Conversion Paths | OARC",
  description: "Funnel automation and conversion paths for Malta businesses—fix pages, nurture, and handoffs so clicks do not die mid-journey. Live missing H1—fix.",
  alternates: getHreflangAlternates("/services/funnel-automation"),
  openGraph: {
    images: ogImageEntry({ title: "Funnel Automation Malta | Conversion Paths | OARC", subtitle: "Funnel automation and conversion paths for Malta businesses—fix pages, nurture, and handoffs so clicks do not die mid-journey. Live missing H1—fix." }),
    title: "Funnel Automation Malta | Conversion Paths | OARC",
    description: "Funnel automation and conversion paths for Malta businesses—fix pages, nurture, and handoffs so clicks do not die mid-journey. Live missing H1—fix.",
    url: "https://oarcdigital.com/services/funnel-automation",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Funnel Automation Malta | Conversion Paths | OARC", subtitle: "Funnel automation and conversion paths for Malta businesses—fix pages, nurture, and handoffs so clicks do not die mid-journey. Live missing H1—fix." })],
    card: "summary_large_image",
    title: "Funnel Automation Malta | Conversion Paths | OARC",
    description: "Funnel automation and conversion paths for Malta businesses—fix pages, nurture, and handoffs so clicks do not die mid-journey. Live missing H1—fix.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["funnel-automation"];
    return (
      <>
        <SpeakableJsonLd path="/services/funnel-automation" />
        <RouteSchema
          type="service"
          path="/services/funnel-automation"
          title={schema.title}
          description={schema.description}
          features={schema.features}
          offers={schema.offers}
          faqs={schema.faqs}
        />
        <ServiceClient slug="funnel-automation" extraSeoContent={<DeepContent />} />
      </>
    );
  }
  