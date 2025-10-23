import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SplitSection from "@/components/SplitSection";
import DifferentiatorCards from "@/components/DifferentiatorCards";
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
      <SplitSection />
      <DifferentiatorCards />
      <ServiceGrid />
      <PerformanceMetrics />
      <CTASections />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
