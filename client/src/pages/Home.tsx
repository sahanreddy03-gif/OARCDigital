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

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
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
