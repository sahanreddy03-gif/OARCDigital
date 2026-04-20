import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Mobile App Development | iOS & Android | OARC Digital",
  description: "Build apps people love. Native iOS, Android, and cross-platform development. From MVP to millions of users.",
  alternates: { canonical: "https://oarcdigital.com/services/mobile-apps-development" },
  openGraph: {
    title: "Mobile App Development | iOS & Android | OARC Digital",
    description: "Build apps people love. Native iOS, Android, and cross-platform development. From MVP to millions of users.",
    url: "https://oarcdigital.com/services/mobile-apps-development",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development | iOS & Android | OARC Digital",
    description: "Build apps people love. Native iOS, Android, and cross-platform development. From MVP to millions of users.",
  },
};

export default function Page() {
  return <PageContent />;
}
