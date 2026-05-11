import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Privacy Policy | OARC Digital - Data Protection & GDPR Compliance",
  description: "Learn how OARC Digital collects, uses, and protects your personal data in compliance with GDPR and Malta's Data Protection Act. Your privacy rights explained.",
  alternates: { canonical: "https://oarcdigital.com/privacy-policy" },
  openGraph: {
    images: ogImageEntry({ title: "Privacy Policy | OARC Digital - Data Protection & GDPR Compliance", subtitle: "Learn how OARC Digital collects, uses, and protects your personal data in compliance with GDPR and Malta's Data Protection Act. Your privacy rights explained." }),
    title: "Privacy Policy | OARC Digital - Data Protection & GDPR Compliance",
    description: "Learn how OARC Digital collects, uses, and protects your personal data in compliance with GDPR and Malta's Data Protection Act. Your privacy rights explained.",
    url: "https://oarcdigital.com/privacy-policy",
    type: "website",
  },
  twitter: {
    images: [ogImageUrl({ title: "Privacy Policy | OARC Digital - Data Protection & GDPR Compliance", subtitle: "Learn how OARC Digital collects, uses, and protects your personal data in compliance with GDPR and Malta's Data Protection Act. Your privacy rights explained." })],
    card: "summary_large_image",
    title: "Privacy Policy | OARC Digital - Data Protection & GDPR Compliance",
    description: "Learn how OARC Digital collects, uses, and protects your personal data in compliance with GDPR and Malta's Data Protection Act. Your privacy rights explained.",
  },
};

export default function Page() {
  return <PageContent />;
}
