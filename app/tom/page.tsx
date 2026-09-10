import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
import TomExperience from "./TomExperience";

const title = "Voice AI Worker — calls become completed work | OARC Digital";
const description = "A managed operating layer that receives work, understands business rules, acts inside your systems, proves the result, and keeps people in control.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://oarcdigital.com/tom" },
  openGraph: { title, description, url: "https://oarcdigital.com/tom", type: "website", images: ogImageEntry({ title, subtitle: description }) },
  twitter: { card: "summary_large_image", title: "Voice AI Worker", description: "One operating layer. Every permitted action visible.", images: [ogImageUrl({ title, subtitle: description })] },
};

export default function TomPage() {
  return <Layout navTheme="dark" showMobileNav><RouteSchema type="service" path="/tom" title="Voice AI Worker" description={metadata.description as string} serviceType="Managed Voice AI Worker" audience={["Hospitality","Sales","Healthcare","Finance","Real estate","Logistics","Home services"]} faqs={[{question:"What is the Voice AI Worker?",answer:"A managed operating layer that receives work, understands your business rules, takes permitted actions inside your systems, and records the result."},{question:"What happens when it does not know?",answer:"It says so and hands over to your chosen person with the full context attached."}]}/><TomExperience /></Layout>;
}