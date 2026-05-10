import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Custom Software Development | Web Apps & Enterprise Solutions | OARC Digital",
  description: "Build powerful custom software solutions tailored to your business. Full-stack development with React, Node.js, Python. From MVPs to enterprise platforms.",
  alternates: { canonical: "https://oarcdigital.com/services/custom-software-development" },
  openGraph: {
    images: ogImageEntry({ title: "Custom Software Development | Web Apps & Enterprise Solutions | OARC Digital", subtitle: "Build powerful custom software solutions tailored to your business. Full-stack development with React, Node.js, Python. From MVPs to enterprise platforms." }),
    title: "Custom Software Development | Web Apps & Enterprise Solutions | OARC Digital",
    description: "Build powerful custom software solutions tailored to your business. Full-stack development with React, Node.js, Python. From MVPs to enterprise platforms.",
    url: "https://oarcdigital.com/services/custom-software-development",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Custom Software Development | Web Apps & Enterprise Solutions | OARC Digital", subtitle: "Build powerful custom software solutions tailored to your business. Full-stack development with React, Node.js, Python. From MVPs to enterprise platforms." })],
    card: "summary_large_image",
    title: "Custom Software Development | Web Apps & Enterprise Solutions | OARC Digital",
    description: "Build powerful custom software solutions tailored to your business. Full-stack development with React, Node.js, Python. From MVPs to enterprise platforms.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["custom-software-development"];
    return (
      <>
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
  