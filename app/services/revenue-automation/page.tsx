import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "Revenue Automation Malta | AI Revenue Engine | OARC Digital",
  description: `AI-powered revenue automation for Malta businesses. OARC Digital builds systems that generate and convert leads automatically. Contact ${NAP.email}.`,
  alternates: { canonical: "https://oarcdigital.com/services/revenue-automation" },
  openGraph: {
    title: "Revenue Automation Malta | AI Revenue Engine | OARC Digital",
    description: `AI-powered revenue automation for Malta businesses. OARC Digital builds systems that generate and convert leads automatically. Contact ${NAP.email}.`,
    url: "https://oarcdigital.com/services/revenue-automation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revenue Automation Malta | AI Revenue Engine | OARC Digital",
    description: `AI-powered revenue automation for Malta businesses. OARC Digital builds systems that generate and convert leads automatically. Contact ${NAP.email}.`,
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["revenue-automation"];
    return (
      <>
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
  