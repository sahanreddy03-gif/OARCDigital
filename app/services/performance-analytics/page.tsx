import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Performance Analytics Malta | Decision Reporting | OARC",
  description: "Performance analytics and reporting that drive decisions for Malta teams—cut, keep, scale—not slide wallpaper.",
  alternates: getHreflangAlternates("/services/performance-analytics"),
  openGraph: {
    images: ogImageEntry({ title: "Performance Analytics Malta | Decision Reporting | OARC", subtitle: "Performance analytics and reporting that drive decisions for Malta teams—cut, keep, scale—not slide wallpaper." }),
    title: "Performance Analytics Malta | Decision Reporting | OARC",
    description: "Performance analytics and reporting that drive decisions for Malta teams—cut, keep, scale—not slide wallpaper.",
    url: "https://oarcdigital.com/services/performance-analytics",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Performance Analytics Malta | Decision Reporting | OARC", subtitle: "Performance analytics and reporting that drive decisions for Malta teams—cut, keep, scale—not slide wallpaper." })],
    card: "summary_large_image",
    title: "Performance Analytics Malta | Decision Reporting | OARC",
    description: "Performance analytics and reporting that drive decisions for Malta teams—cut, keep, scale—not slide wallpaper.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["performance-analytics"];
    return (
      <>
        <SpeakableJsonLd path="/services/performance-analytics" />
        <RouteSchema
          type="service"
          path="/services/performance-analytics"
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
  