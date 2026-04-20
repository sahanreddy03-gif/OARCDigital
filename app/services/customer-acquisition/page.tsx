import type { Metadata } from "next";
import PageContent from "@/components/services/RevenueServiceClient";

export const metadata: Metadata = {
  title: "Customer Acquisition | Growth Marketing | OARC Digital",
  description: "Scalable customer acquisition strategies from OARC Digital. Combine AI automation, creative excellence, and data-driven marketing to accelerate growth.",
  alternates: { canonical: "https://oarcdigital.com/services/customer-acquisition" },
  openGraph: {
    title: "Customer Acquisition | Growth Marketing | OARC Digital",
    description: "Scalable customer acquisition strategies from OARC Digital. Combine AI automation, creative excellence, and data-driven marketing to accelerate growth.",
    url: "https://oarcdigital.com/services/customer-acquisition",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Acquisition | Growth Marketing | OARC Digital",
    description: "Scalable customer acquisition strategies from OARC Digital. Combine AI automation, creative excellence, and data-driven marketing to accelerate growth.",
  },
};

export default function Page() {
  return <PageContent slug="customer-acquisition" />;
}
