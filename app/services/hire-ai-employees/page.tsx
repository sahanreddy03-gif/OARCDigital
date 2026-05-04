import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "AI Virtual Talent Hub | Autonomous AI Agents On-Demand | OARC Digital Malta",
  description: "Hire autonomous AI agents as on-demand team members. Our production-tested agents think, adapt, and execute 24/7 while slashing your hiring costs. Malta-based support.",
  alternates: { canonical: "https://oarcdigital.com/services/hire-ai-employees" },
  openGraph: {
    title: "AI Virtual Talent Hub | Autonomous AI Agents On-Demand | OARC Digital Malta",
    description: "Hire autonomous AI agents as on-demand team members. Our production-tested agents think, adapt, and execute 24/7 while slashing your hiring costs. Malta-based support.",
    url: "https://oarcdigital.com/services/hire-ai-employees",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Virtual Talent Hub | Autonomous AI Agents On-Demand | OARC Digital Malta",
    description: "Hire autonomous AI agents as on-demand team members. Our production-tested agents think, adapt, and execute 24/7 while slashing your hiring costs. Malta-based support.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["hire-ai-employees"];
    return (
      <>
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
  