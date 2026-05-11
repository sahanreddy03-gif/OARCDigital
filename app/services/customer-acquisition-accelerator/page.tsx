import type { Metadata } from "next";
import ServiceClient from "@/components/services/RevenueServiceClient";
import DeepContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Customer Acquisition Accelerator | Multi-Channel Growth | OARC Digital",
  description: "Turn ad spend into predictable revenue. AI optimizes your campaigns across every channel in real-time, cutting acquisition costs by 40% while scaling what works.",
  alternates: getHreflangAlternates("/services/customer-acquisition-accelerator"),
  openGraph: {
    images: ogImageEntry({ title: "Customer Acquisition Accelerator | Multi-Channel Growth | OARC Digital", subtitle: "Turn ad spend into predictable revenue. AI optimizes your campaigns across every channel in real-time, cutting acquisition costs by 40% while scaling what works." }),
    title: "Customer Acquisition Accelerator | Multi-Channel Growth | OARC Digital",
    description: "Turn ad spend into predictable revenue. AI optimizes your campaigns across every channel in real-time, cutting acquisition costs by 40% while scaling what works.",
    url: "https://oarcdigital.com/services/customer-acquisition-accelerator",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Customer Acquisition Accelerator | Multi-Channel Growth | OARC Digital", subtitle: "Turn ad spend into predictable revenue. AI optimizes your campaigns across every channel in real-time, cutting acquisition costs by 40% while scaling what works." })],
    card: "summary_large_image",
    title: "Customer Acquisition Accelerator | Multi-Channel Growth | OARC Digital",
    description: "Turn ad spend into predictable revenue. AI optimizes your campaigns across every channel in real-time, cutting acquisition costs by 40% while scaling what works.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["customer-acquisition-accelerator"];
    return (
      <>
        <SpeakableJsonLd path="/services/customer-acquisition-accelerator" />
        <RouteSchema
          type="service"
          path="/services/customer-acquisition-accelerator"
          title={schema.title}
          description={schema.description}
          features={schema.features}
          offers={schema.offers}
          faqs={schema.faqs}
        />
        <ServiceClient slug="customer-acquisition-accelerator" extraSeoContent={<DeepContent />} />
      </>
    );
  }
  