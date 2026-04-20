import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Custom Software Development | Web Apps & Enterprise Solutions | OARC Digital",
  description: "Build powerful custom software solutions tailored to your business. Full-stack development with React, Node.js, Python. From MVPs to enterprise platforms.",
  alternates: { canonical: "https://oarcdigital.com/services/custom-software-development" },
  openGraph: {
    title: "Custom Software Development | Web Apps & Enterprise Solutions | OARC Digital",
    description: "Build powerful custom software solutions tailored to your business. Full-stack development with React, Node.js, Python. From MVPs to enterprise platforms.",
    url: "https://oarcdigital.com/services/custom-software-development",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development | Web Apps & Enterprise Solutions | OARC Digital",
    description: "Build powerful custom software solutions tailored to your business. Full-stack development with React, Node.js, Python. From MVPs to enterprise platforms.",
  },
};

export default function Page() {
  return <PageContent />;
}
