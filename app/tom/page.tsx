import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import RouteSchema from "@/components/RouteSchema";
import TomExperience from "./TomExperience";

export const metadata: Metadata = {
  title: "OARC Operator System — work moves while the call is happening",
  description: "A managed operating layer that receives work, understands business rules, acts inside your systems, proves the result, and keeps people in control.",
  alternates: { canonical: "https://oarcdigital.com/tom" },
  openGraph: { title: "OARC Operator System — work moves while the call is happening", description: "A managed operating layer that receives work, understands business rules, acts inside your systems, proves the result, and keeps people in control.", url: "https://oarcdigital.com/tom", type: "website" },
  twitter: { card: "summary_large_image", title: "OARC Operator System", description: "One operating layer. Every permitted action visible." },
};

export default function TomPage() {
  return <Layout navTheme="dark" showMobileNav><RouteSchema type="service" path="/tom" title="OARC Operator System" description={metadata.description as string} serviceType="Managed AI operating layer" audience={["Hospitality","Sales","Healthcare","Finance","Real estate","Logistics","Home services"]} faqs={[{question:"What is the OARC Operator System?",answer:"A managed operating layer that receives work, understands your business rules, takes permitted actions inside your systems, and records the result."},{question:"What happens when it does not know?",answer:"It says so and hands over to your chosen person with the full context attached."}]}/><TomExperience /></Layout>;
}