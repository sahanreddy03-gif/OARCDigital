import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "How to Choose a Marketing Agency in Malta (Without Getting Burned)",
  description: "Malta has dozens of marketing agencies and hundreds of freelancers all claiming to grow your business. Most won't. Here's how to tell the difference before you sign a contract.",
  alternates: { canonical: "https://oarcdigital.com/blog/marketing-agency-malta" },
  openGraph: {
    title: "How to Choose a Marketing Agency in Malta (Without Getting Burned)",
    description: "Malta has dozens of marketing agencies and hundreds of freelancers all claiming to grow your business. Most won't. Here's how to tell the difference before you sign a contract.",
    url: "https://oarcdigital.com/blog/marketing-agency-malta",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose a Marketing Agency in Malta (Without Getting Burned)",
    description: "Malta has dozens of marketing agencies and hundreds of freelancers all claiming to grow your business. Most won't. Here's how to tell the difference before you sign a contract.",
  },
};

export default function Page() {
  return <PageContent />;
}
