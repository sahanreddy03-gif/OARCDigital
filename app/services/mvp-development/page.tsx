import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "MVP Development Services Malta | Launch Your Startup in 8-12 Weeks | OARC Digital",
  description: "Build your MVP with Malta's leading product development team. From concept validation to market launch in 8-12 weeks. 40+ MVPs shipped. Get a free consultation.",
  alternates: { canonical: "https://oarcdigital.com/services/mvp-development" },
  openGraph: {
    title: "MVP Development Services Malta | Launch Your Startup in 8-12 Weeks | OARC Digital",
    description: "Build your MVP with Malta's leading product development team. From concept validation to market launch in 8-12 weeks. 40+ MVPs shipped. Get a free consultation.",
    url: "https://oarcdigital.com/services/mvp-development",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP Development Services Malta | Launch Your Startup in 8-12 Weeks | OARC Digital",
    description: "Build your MVP with Malta's leading product development team. From concept validation to market launch in 8-12 weeks. 40+ MVPs shipped. Get a free consultation.",
  },
};

export default function Page() {
  return <PageContent />;
}
