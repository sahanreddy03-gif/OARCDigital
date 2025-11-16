import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section5 from "@/components/Section5";
import AICreativeSection from "@/components/AICreativeSection";
import HireAIEmployeesSection from "@/components/HireAIEmployeesSection";
import LetsTalkRevenueSection from "@/components/LetsTalkRevenueSection";
import CTASections from "@/components/CTASections";
import BrandShowcaseSection from "@/components/BrandShowcaseSection";
import Testimonials from "@/components/Testimonials";
import { SuccessInNumbers } from "@/components/SuccessInNumbers";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ScrollReveal>
        <Section2 />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Section3 />
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <Section5 />
      </ScrollReveal>
      <ScrollReveal>
        <AICreativeSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <HireAIEmployeesSection />
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <LetsTalkRevenueSection />
      </ScrollReveal>
      <ScrollReveal>
        <SuccessInNumbers />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <BrandShowcaseSection />
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal>
        <CTASections />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <FAQ />
      </ScrollReveal>
      <Footer />
    </div>
  );
}
