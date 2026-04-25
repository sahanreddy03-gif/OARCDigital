import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "AI Copywriting | Conversion-Focused Copy | OARC Digital",
  description: "Elite AI-powered copywriting services from OARC Digital. Create compelling, conversion-focused copy at scale with human creativity and AI efficiency.",
  alternates: { canonical: "https://oarcdigital.com/services/ai-copywriting" },
  openGraph: {
    title: "AI Copywriting | Conversion-Focused Copy | OARC Digital",
    description: "Elite AI-powered copywriting services from OARC Digital. Create compelling, conversion-focused copy at scale with human creativity and AI efficiency.",
    url: "https://oarcdigital.com/services/ai-copywriting",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Copywriting | Conversion-Focused Copy | OARC Digital",
    description: "Elite AI-powered copywriting services from OARC Digital. Create compelling, conversion-focused copy at scale with human creativity and AI efficiency.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["ai-copywriting"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/ai-copywriting"
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
  