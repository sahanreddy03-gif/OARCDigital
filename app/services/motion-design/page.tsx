import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "Motion Design | Animation & Motion Graphics | OARC Digital",
  description: "Elite motion design and animation services. OARC Digital creates stunning motion graphics, explainer videos, and animated content that captivates audiences.",
  alternates: { canonical: "https://oarcdigital.com/services/motion-design" },
  openGraph: {
    title: "Motion Design | Animation & Motion Graphics | OARC Digital",
    description: "Elite motion design and animation services. OARC Digital creates stunning motion graphics, explainer videos, and animated content that captivates audiences.",
    url: "https://oarcdigital.com/services/motion-design",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Motion Design | Animation & Motion Graphics | OARC Digital",
    description: "Elite motion design and animation services. OARC Digital creates stunning motion graphics, explainer videos, and animated content that captivates audiences.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["motion-design"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/motion-design"
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
  