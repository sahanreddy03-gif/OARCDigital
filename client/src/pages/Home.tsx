import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section5 from "@/components/Section5";
import LetsTalkSection from "@/components/LetsTalkSection";
import AICreativeSection from "@/components/AICreativeSection";
import ServiceGrid from "@/components/ServiceGrid";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import CTASections from "@/components/CTASections";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section5 />
      <LetsTalkSection />
      <AICreativeSection />
      <ServiceGrid />
      <PerformanceMetrics />
      <CTASections />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
