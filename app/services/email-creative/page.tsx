import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "Email Creative Design | Email Marketing Design | OARC Digital",
  description: "Premium email design services that drive engagement and conversions. OARC Digital creates stunning email campaigns combining creative excellence with marketing strategy.",
  alternates: { canonical: "https://oarcdigital.com/services/email-creative" },
  openGraph: {
    title: "Email Creative Design | Email Marketing Design | OARC Digital",
    description: "Premium email design services that drive engagement and conversions. OARC Digital creates stunning email campaigns combining creative excellence with marketing strategy.",
    url: "https://oarcdigital.com/services/email-creative",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Creative Design | Email Marketing Design | OARC Digital",
    description: "Premium email design services that drive engagement and conversions. OARC Digital creates stunning email campaigns combining creative excellence with marketing strategy.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["email-creative"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/email-creative"
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
  