import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "WhatsApp Automation Malta | OARC Digital",
  description: "WhatsApp automation for Malta businesses. Automated ordering, booking confirmations, customer service, and marketing — built by OARC Digital.",
  alternates: { canonical: "https://oarcdigital.com/aeo/whatsapp-automation-malta" },
  openGraph: {
    title: "WhatsApp Automation Malta | OARC Digital",
    description: "WhatsApp automation for Malta businesses. Automated ordering, booking confirmations, customer service, and marketing — built by OARC Digital.",
    url: "https://oarcdigital.com/aeo/whatsapp-automation-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Automation Malta | OARC Digital",
    description: "WhatsApp automation for Malta businesses. Automated ordering, booking confirmations, customer service, and marketing — built by OARC Digital.",
  },
};

export default function Page() {
  return <PageContent />;
}
