import type { Metadata } from "next";
import ServiceClient from "@/components/services/RevenueServiceClient";
import DeepContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Customer Acquisition | Growth Marketing | OARC Digital",
  description: "Scalable customer acquisition strategies from OARC Digital. Combine AI automation, creative excellence, and data-driven marketing to accelerate growth.",
  alternates: { canonical: "https://oarcdigital.com/services/customer-acquisition-accelerator" },
  openGraph: {
    images: ogImageEntry({ title: "Customer Acquisition | Growth Marketing | OARC Digital", subtitle: "Scalable customer acquisition strategies from OARC Digital. Combine AI automation, creative excellence, and data-driven marketing to accelerate growth." }),
    title: "Customer Acquisition | Growth Marketing | OARC Digital",
    description: "Scalable customer acquisition strategies from OARC Digital. Combine AI automation, creative excellence, and data-driven marketing to accelerate growth.",
    url: "https://oarcdigital.com/services/customer-acquisition-accelerator",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Customer Acquisition | Growth Marketing | OARC Digital", subtitle: "Scalable customer acquisition strategies from OARC Digital. Combine AI automation, creative excellence, and data-driven marketing to accelerate growth." })],
    card: "summary_large_image",
    title: "Customer Acquisition | Growth Marketing | OARC Digital",
    description: "Scalable customer acquisition strategies from OARC Digital. Combine AI automation, creative excellence, and data-driven marketing to accelerate growth.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["customer-acquisition"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/customer-acquisition"
          title={schema.title}
          description={schema.description}
          features={schema.features}
          offers={schema.offers}
          faqs={schema.faqs}
        />
        <ServiceClient slug="customer-acquisition" extraSeoContent={<DeepContent />} />
      </>
    );
  }
  