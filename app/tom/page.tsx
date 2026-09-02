import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import RouteSchema from "@/components/RouteSchema";
import TomExperience from "./TomExperience";

export const metadata: Metadata = {
  title: "Tom — You will have one person | OARC Digital",
  description: "One AI operator who talks to your customers, does the work the same second, coordinates your staff, and watches your business — built around your company, in person, in Malta.",
  alternates: { canonical: "https://oarcdigital.com/tom" },
  openGraph: { title: "Tom — You will have one person | OARC Digital", description: "One AI operator who talks to your customers, does the work the same second, coordinates your staff, and watches your business — built around your company, in person, in Malta.", url: "https://oarcdigital.com/tom", type: "website" },
  twitter: { card: "summary_large_image", title: "Tom — You will have one person | OARC Digital", description: "One AI operator. An entire department behind him." },
};

export default function TomPage() {
  return <Layout navTheme="dark" showMobileNav><RouteSchema type="service" path="/tom" title="Tom — You will have one person" description={metadata.description as string} serviceType="AI operator and business automation" audience={["Hospitality","Sales","Healthcare","Finance","Real estate","Logistics","Home services"]} faqs={[{question:"Will my customers know he's AI?",answer:"He never pretends to be human — if anyone asks, he says so, plainly."},{question:"What happens when he doesn't know?",answer:"He says so and hands over to your chosen person, instantly, with the full story attached."}]}/><TomExperience /></Layout>;
}