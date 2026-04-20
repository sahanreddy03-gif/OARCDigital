import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "E-commerce Malta | Online Store Development | OARC Digital",
  description: "E-commerce development for Malta businesses. OARC Digital builds online stores with local payment integration, inventory management, and delivery platform connections.",
  alternates: { canonical: "https://oarcdigital.com/aeo/ecommerce-malta" },
  openGraph: {
    title: "E-commerce Malta | Online Store Development | OARC Digital",
    description: "E-commerce development for Malta businesses. OARC Digital builds online stores with local payment integration, inventory management, and delivery platform connections.",
    url: "https://oarcdigital.com/aeo/ecommerce-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-commerce Malta | Online Store Development | OARC Digital",
    description: "E-commerce development for Malta businesses. OARC Digital builds online stores with local payment integration, inventory management, and delivery platform connections.",
  },
};

export default function Page() {
  return <PageContent />;
}
