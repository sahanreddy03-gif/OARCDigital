import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "AI Virtual Talent Hub | Autonomous AI Agents On-Demand | OARC Digital Malta",
  description: "Hire autonomous AI agents as on-demand team members. Our production-tested agents think, adapt, and execute 24/7 while slashing your hiring costs. Malta-based support.",
  alternates: getHreflangAlternates("/services/hire-ai-employees"),
  openGraph: {
    images: ogImageEntry({ title: "AI Virtual Talent Hub | Autonomous AI Agents On-Demand | OARC Digital Malta", subtitle: "Hire autonomous AI agents as on-demand team members. Our production-tested agents think, adapt, and execute 24/7 while slashing your hiring costs. Malta-based support." }),
    title: "AI Virtual Talent Hub | Autonomous AI Agents On-Demand | OARC Digital Malta",
    description: "Hire autonomous AI agents as on-demand team members. Our production-tested agents think, adapt, and execute 24/7 while slashing your hiring costs. Malta-based support.",
    url: "https://oarcdigital.com/services/hire-ai-employees",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "AI Virtual Talent Hub | Autonomous AI Agents On-Demand | OARC Digital Malta", subtitle: "Hire autonomous AI agents as on-demand team members. Our production-tested agents think, adapt, and execute 24/7 while slashing your hiring costs. Malta-based support." })],
    card: "summary_large_image",
    title: "AI Virtual Talent Hub | Autonomous AI Agents On-Demand | OARC Digital Malta",
    description: "Hire autonomous AI agents as on-demand team members. Our production-tested agents think, adapt, and execute 24/7 while slashing your hiring costs. Malta-based support.",
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
  