import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section5 from "@/components/Section5";
import TechEnabledSection from "@/components/TechEnabledSection";
import AICreativeSection from "@/components/AICreativeSection";
import HireAIEmployeesSection from "@/components/HireAIEmployeesSection";
import LetsTalkRevenueSection from "@/components/LetsTalkRevenueSection";
import CTASections from "@/components/CTASections";
import BrandShowcaseSection from "@/components/BrandShowcaseSection";
import Testimonials from "@/components/Testimonials";
import { SuccessInNumbers } from "@/components/SuccessInNumbers";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { localBusinessSchema, organizationSchema } from "@/utils/structuredData";

export default function Home() {
  // Combine schemas for homepage
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, organizationSchema]
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEOHead
        title="OARC Digital | AI-Powered Creative & Marketing Agency in Malta"
        description="Premium AI-powered creative services, AI employees, and revenue automation solutions. Elite marketing agency in Malta delivering world-class digital experiences across Europe, Middle East, and Asia."
        canonicalUrl="https://oarcdigital.com"
        structuredData={homepageSchema}
      />
      <Navigation />
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section5 />
      <AICreativeSection />
      <TechEnabledSection />
      <HireAIEmployeesSection />
      <LetsTalkRevenueSection />
      <SuccessInNumbers />
      <BrandShowcaseSection />
      <Testimonials />
      <CTASections />
      <FAQ />
      <Footer />
    </div>
  );
}
