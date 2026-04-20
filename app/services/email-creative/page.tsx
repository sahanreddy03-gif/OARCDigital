import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Email Creative Design | Email Marketing Design | OARC Digital",
  description: "Premium email design services that drive engagement and conversions. OARC Digital creates stunning email campaigns combining creative excellence with marketing strategy.",
  alternates: { canonical: "https://oarcdigital.com/services/email-creative" },
  openGraph: {
    title: "Email Creative Design | Email Marketing Design | OARC Digital",
    description: "Premium email design services that drive engagement and conversions. OARC Digital creates stunning email campaigns combining creative excellence with marketing strategy.",
    url: "https://oarcdigital.com/services/email-creative",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Creative Design | Email Marketing Design | OARC Digital",
    description: "Premium email design services that drive engagement and conversions. OARC Digital creates stunning email campaigns combining creative excellence with marketing strategy.",
  },
};

export default function Page() {
  return <PageContent />;
}
