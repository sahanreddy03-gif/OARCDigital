import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Email Marketing Malta: How to Get 40%+ Open Rates | OARC Digital",
  description: "A complete guide to email marketing for Malta businesses. Learn how to build a quality list, write subject lines that get opened, and automate campaigns that generate revenue.",
  alternates: { canonical: "https://oarcdigital.com/blog/email-marketing-malta" },
  openGraph: {
    title: "Email Marketing Malta: How to Get 40%+ Open Rates | OARC Digital",
    description: "A complete guide to email marketing for Malta businesses. Learn how to build a quality list, write subject lines that get opened, and automate campaigns that generate revenue.",
    url: "https://oarcdigital.com/blog/email-marketing-malta",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Marketing Malta: How to Get 40%+ Open Rates | OARC Digital",
    description: "A complete guide to email marketing for Malta businesses. Learn how to build a quality list, write subject lines that get opened, and automate campaigns that generate revenue.",
  },
};

export default function Page() {
  return <PageContent />;
}
