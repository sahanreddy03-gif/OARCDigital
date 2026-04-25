import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "Revenue Automation Malta | AI Revenue Engine | OARC Digital",
  description: "AI-powered revenue automation for Malta businesses. OARC Digital builds systems that generate and convert leads automatically. Contact hello@oarcdigital.com.",
  alternates: { canonical: "https://oarcdigital.com/services/revenue-automation" },
  openGraph: {
    title: "Revenue Automation Malta | AI Revenue Engine | OARC Digital",
    description: "AI-powered revenue automation for Malta businesses. OARC Digital builds systems that generate and convert leads automatically. Contact hello@oarcdigital.com.",
    url: "https://oarcdigital.com/services/revenue-automation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revenue Automation Malta | AI Revenue Engine | OARC Digital",
    description: "AI-powered revenue automation for Malta businesses. OARC Digital builds systems that generate and convert leads automatically. Contact hello@oarcdigital.com.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["ai-revenue-engine"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/ai-revenue-engine"
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
  