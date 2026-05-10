import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "MVP Development Services Malta | Launch Your Startup in 8-12 Weeks | OARC Digital",
  description: "Build your MVP with a Malta-based product development team. From concept validation to market launch in 8-12 weeks. 40+ MVPs shipped. Get a free consultation.",
  alternates: { canonical: "https://oarcdigital.com/services/mvp-development" },
  openGraph: {
    images: ogImageEntry({ title: "MVP Development Services Malta | Launch Your Startup in 8-12 Weeks | OARC Digital", subtitle: "Build your MVP with a Malta-based product development team. From concept validation to market launch in 8-12 weeks. 40+ MVPs shipped. Get a free consultation." }),
    title: "MVP Development Services Malta | Launch Your Startup in 8-12 Weeks | OARC Digital",
    description: "Build your MVP with a Malta-based product development team. From concept validation to market launch in 8-12 weeks. 40+ MVPs shipped. Get a free consultation.",
    url: "https://oarcdigital.com/services/mvp-development",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "MVP Development Services Malta | Launch Your Startup in 8-12 Weeks | OARC Digital", subtitle: "Build your MVP with a Malta-based product development team. From concept validation to market launch in 8-12 weeks. 40+ MVPs shipped. Get a free consultation." })],
    card: "summary_large_image",
    title: "MVP Development Services Malta | Launch Your Startup in 8-12 Weeks | OARC Digital",
    description: "Build your MVP with a Malta-based product development team. From concept validation to market launch in 8-12 weeks. 40+ MVPs shipped. Get a free consultation.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["mvp-development"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/mvp-development"
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
  