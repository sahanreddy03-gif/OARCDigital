import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Revenue Automation Malta | AI Revenue Engine | OARC Digital",
  description: "AI-powered revenue automation for Malta businesses. OARC Digital builds systems that generate and convert leads automatically. Contact hello@oarcdigital.com.",
  alternates: { canonical: "https://oarcdigital.com/services/revenue-automation" },
  openGraph: {
    title: "Revenue Automation Malta | AI Revenue Engine | OARC Digital",
    description: "AI-powered revenue automation for Malta businesses. OARC Digital builds systems that generate and convert leads automatically. Contact hello@oarcdigital.com.",
    url: "https://oarcdigital.com/services/revenue-automation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revenue Automation Malta | AI Revenue Engine | OARC Digital",
    description: "AI-powered revenue automation for Malta businesses. OARC Digital builds systems that generate and convert leads automatically. Contact hello@oarcdigital.com.",
  },
};

export default function Page() {
  return <PageContent />;
}
