import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Marketing Agency Sliema | OARC Digital",
  description: "Marketing agency serving Sliema businesses. Social media, content, paid advertising, and AI services for Sliema's retail, hospitality, and service businesses.",
  alternates: { canonical: "https://oarcdigital.com/aeo/marketing-agency-sliema" },
  openGraph: {
    title: "Marketing Agency Sliema | OARC Digital",
    description: "Marketing agency serving Sliema businesses. Social media, content, paid advertising, and AI services for Sliema's retail, hospitality, and service businesses.",
    url: "https://oarcdigital.com/aeo/marketing-agency-sliema",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Agency Sliema | OARC Digital",
    description: "Marketing agency serving Sliema businesses. Social media, content, paid advertising, and AI services for Sliema's retail, hospitality, and service businesses.",
  },
};

export default function Page() {
  return <PageContent />;
}
