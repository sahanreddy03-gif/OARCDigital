import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "Illustration Services | Custom Digital Art | OARC Digital Malta",
  description: "Premium custom illustration and digital art from OARC Digital. Unique visual storytelling combining traditional artistry with AI-enhanced creative workflows.",
  alternates: { canonical: "https://oarcdigital.com/services/illustration" },
  openGraph: {
    title: "Illustration Services | Custom Digital Art | OARC Digital Malta",
    description: "Premium custom illustration and digital art from OARC Digital. Unique visual storytelling combining traditional artistry with AI-enhanced creative workflows.",
    url: "https://oarcdigital.com/services/illustration",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Illustration Services | Custom Digital Art | OARC Digital Malta",
    description: "Premium custom illustration and digital art from OARC Digital. Unique visual storytelling combining traditional artistry with AI-enhanced creative workflows.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["illustration"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/illustration"
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
  