import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "AI Tools & Tech Stack | OARC Digital",
  description: "Discover the 80+ AI sales tools, marketing automation, and creative software we use to deliver results. From Clay and Instantly to Midjourney and Figma.",
  alternates: { canonical: "https://oarcdigital.com/tools" },
  openGraph: {
    title: "AI Tools & Tech Stack | OARC Digital",
    description: "Discover the 80+ AI sales tools, marketing automation, and creative software we use to deliver results. From Clay and Instantly to Midjourney and Figma.",
    url: "https://oarcdigital.com/tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools & Tech Stack | OARC Digital",
    description: "Discover the 80+ AI sales tools, marketing automation, and creative software we use to deliver results. From Clay and Instantly to Midjourney and Figma.",
  },
};

export default function Page() {
  return <PageContent />;
}
