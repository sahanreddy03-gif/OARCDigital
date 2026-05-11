import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Heritage Luxury Group Fashion Automation Case Study | OARC Digital",
  description: "How OARC Digital automated SAP S/4HANA processes for Heritage Luxury Group, transforming financial planning, sales, and operations with near real-time data.",
  alternates: { canonical: "https://oarcdigital.com/case-studies/heritage-luxury-group" },
  openGraph: {
    images: ogImageEntry({ title: "Heritage Luxury Group Fashion Automation Case Study | OARC Digital", subtitle: "How OARC Digital automated SAP S/4HANA processes for Heritage Luxury Group, transforming financial planning, sales, and operations with near real-time data." }),
    title: "Heritage Luxury Group Fashion Automation Case Study | OARC Digital",
    description: "How OARC Digital automated SAP S/4HANA processes for Heritage Luxury Group, transforming financial planning, sales, and operations with near real-time data.",
    url: "https://oarcdigital.com/case-studies/heritage-luxury-group",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Heritage Luxury Group Fashion Automation Case Study | OARC Digital", subtitle: "How OARC Digital automated SAP S/4HANA processes for Heritage Luxury Group, transforming financial planning, sales, and operations with near real-time data." })],
    card: "summary_large_image",
    title: "Heritage Luxury Group Fashion Automation Case Study | OARC Digital",
    description: "How OARC Digital automated SAP S/4HANA processes for Heritage Luxury Group, transforming financial planning, sales, and operations with near real-time data.",
  },
};

export default function Page() {
  return <PageContent />;
}
