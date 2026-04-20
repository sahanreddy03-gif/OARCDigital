import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Digital Marketing | Full-Service Marketing | OARC Digital Malta",
  description: "Comprehensive digital marketing services from OARC Digital. Integrate strategy, creative, and technology for ambitious brands across Europe, Middle East, and Asia.",
  alternates: { canonical: "https://oarcdigital.com/services/digital-marketing" },
  openGraph: {
    title: "Digital Marketing | Full-Service Marketing | OARC Digital Malta",
    description: "Comprehensive digital marketing services from OARC Digital. Integrate strategy, creative, and technology for ambitious brands across Europe, Middle East, and Asia.",
    url: "https://oarcdigital.com/services/digital-marketing",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing | Full-Service Marketing | OARC Digital Malta",
    description: "Comprehensive digital marketing services from OARC Digital. Integrate strategy, creative, and technology for ambitious brands across Europe, Middle East, and Asia.",
  },
};

export default function Page() {
  return <PageContent />;
}
