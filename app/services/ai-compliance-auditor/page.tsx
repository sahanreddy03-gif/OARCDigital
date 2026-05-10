import type { Metadata } from "next";
import ServiceClient from "@/components/services/AIEmployeeServiceClient";
import DeepContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Compliance & Legal Auditor | GDPR & Risk Scanning | OARC Digital",
  description: "GDPR bulletproof with real-time risk scanning. Our AI Compliance Auditor monitors regulations, flags violations, and keeps your business protected 24/7.",
  alternates: { canonical: "https://oarcdigital.com/services/ai-compliance-auditor" },
  openGraph: {
    images: ogImageEntry({ title: "Compliance & Legal Auditor | GDPR & Risk Scanning | OARC Digital", subtitle: "GDPR bulletproof with real-time risk scanning. Our AI Compliance Auditor monitors regulations, flags violations, and keeps your business protected 24/7." }),
    title: "Compliance & Legal Auditor | GDPR & Risk Scanning | OARC Digital",
    description: "GDPR bulletproof with real-time risk scanning. Our AI Compliance Auditor monitors regulations, flags violations, and keeps your business protected 24/7.",
    url: "https://oarcdigital.com/services/ai-compliance-auditor",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Compliance & Legal Auditor | GDPR & Risk Scanning | OARC Digital", subtitle: "GDPR bulletproof with real-time risk scanning. Our AI Compliance Auditor monitors regulations, flags violations, and keeps your business protected 24/7." })],
    card: "summary_large_image",
    title: "Compliance & Legal Auditor | GDPR & Risk Scanning | OARC Digital",
    description: "GDPR bulletproof with real-time risk scanning. Our AI Compliance Auditor monitors regulations, flags violations, and keeps your business protected 24/7.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["ai-compliance-auditor"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/ai-compliance-auditor"
          title={schema.title}
          description={schema.description}
          features={schema.features}
          offers={schema.offers}
          faqs={schema.faqs}
        />
        <ServiceClient slug="ai-compliance-auditor" extraSeoContent={<DeepContent />} />
      </>
    );
  }
  