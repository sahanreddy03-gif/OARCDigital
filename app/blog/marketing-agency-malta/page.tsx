import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "How to Choose a Marketing Agency in Malta (Without Getting Burned)",
  description: "Malta has dozens of marketing agencies and hundreds of freelancers all claiming to grow your business. Most won't. Here's how to tell the difference before you sign a contract.",
  alternates: { canonical: "https://oarcdigital.com/blog/marketing-agency-malta" },
  openGraph: {
    images: ogImageEntry({ title: "How to Choose a Marketing Agency in Malta (Without Getting Burned)", subtitle: "Malta has dozens of marketing agencies and hundreds of freelancers all claiming to grow your business. Most won't. Here's how to tell the difference before you sign a contract." }),
    title: "How to Choose a Marketing Agency in Malta (Without Getting Burned)",
    description: "Malta has dozens of marketing agencies and hundreds of freelancers all claiming to grow your business. Most won't. Here's how to tell the difference before you sign a contract.",
    url: "https://oarcdigital.com/blog/marketing-agency-malta",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "How to Choose a Marketing Agency in Malta (Without Getting Burned)", subtitle: "Malta has dozens of marketing agencies and hundreds of freelancers all claiming to grow your business. Most won't. Here's how to tell the difference before you sign a contract." })],
    card: "summary_large_image",
    title: "How to Choose a Marketing Agency in Malta (Without Getting Burned)",
    description: "Malta has dozens of marketing agencies and hundreds of freelancers all claiming to grow your business. Most won't. Here's how to tell the difference before you sign a contract.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/marketing-agency-malta"
        title="How to Choose a Marketing Agency in Malta (Without Getting Burned)"
        description="Malta has dozens of marketing agencies and hundreds of freelancers all claiming to grow your business. Most won't. Here's how to tell the difference before you sign a contract."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
