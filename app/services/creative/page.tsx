import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "Content Creation | Video, Photo & Graphics | OARC Digital",
  description: "Professional content production for social media. From video reels and photography to graphics and animations—scroll-stopping content that converts.",
  alternates: { canonical: "https://oarcdigital.com/services/creative" },
  openGraph: {
    title: "Content Creation | Video, Photo & Graphics | OARC Digital",
    description: "Professional content production for social media. From video reels and photography to graphics and animations—scroll-stopping content that converts.",
    url: "https://oarcdigital.com/services/creative",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Creation | Video, Photo & Graphics | OARC Digital",
    description: "Professional content production for social media. From video reels and photography to graphics and animations—scroll-stopping content that converts.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["creative"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/creative"
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
  