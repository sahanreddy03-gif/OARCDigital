import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Custom Software Development Malta | Web Apps | OARC",
  description: "Custom software and web apps for Malta teams—scoped products that fit real workflows instead of forcing broken processes into generic tools.",
  alternates: getHreflangAlternates("/services/custom-software-development"),
  openGraph: {
    images: ogImageEntry({ title: "Custom Software Development Malta | Web Apps | OARC", subtitle: "Custom software and web apps for Malta teams—scoped products that fit real workflows instead of forcing broken processes into generic tools." }),
    title: "Custom Software Development Malta | Web Apps | OARC",
    description: "Custom software and web apps for Malta teams—scoped products that fit real workflows instead of forcing broken processes into generic tools.",
    url: "https://oarcdigital.com/services/custom-software-development",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Custom Software Development Malta | Web Apps | OARC", subtitle: "Custom software and web apps for Malta teams—scoped products that fit real workflows instead of forcing broken processes into generic tools." })],
    card: "summary_large_image",
    title: "Custom Software Development Malta | Web Apps | OARC",
    description: "Custom software and web apps for Malta teams—scoped products that fit real workflows instead of forcing broken processes into generic tools.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["custom-software-development"];
    return (
      <>
        <SpeakableJsonLd path="/services/custom-software-development" />
        <RouteSchema
          type="service"
          path="/services/custom-software-development"
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
  