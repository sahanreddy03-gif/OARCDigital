import type { Metadata } from "next";
import PageContent from "@/components/services/RevenueServiceClient";

export const metadata: Metadata = {
  title: "Customer Acquisition Accelerator | Multi-Channel Growth | OARC Digital",
  description: "Turn ad spend into predictable revenue. AI optimizes your campaigns across every channel in real-time, cutting acquisition costs by 40% while scaling what works.",
  alternates: { canonical: "https://oarcdigital.com/services/customer-acquisition-accelerator" },
  openGraph: {
    title: "Customer Acquisition Accelerator | Multi-Channel Growth | OARC Digital",
    description: "Turn ad spend into predictable revenue. AI optimizes your campaigns across every channel in real-time, cutting acquisition costs by 40% while scaling what works.",
    url: "https://oarcdigital.com/services/customer-acquisition-accelerator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Acquisition Accelerator | Multi-Channel Growth | OARC Digital",
    description: "Turn ad spend into predictable revenue. AI optimizes your campaigns across every channel in real-time, cutting acquisition costs by 40% while scaling what works.",
  },
};

export default function Page() {
  return <PageContent slug="customer-acquisition-accelerator" />;
}
