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
import PremiumScrollReveal from "@/components/PremiumScrollReveal";
import SectionTransition from "@/components/SectionTransition";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      
      <SectionTransition 
        variant="gradient" 
        fromColor="rgba(0,0,0,0)" 
        toColor="rgba(255,255,255,0.3)" 
        height={100}
      />
      
      <PremiumScrollReveal animation="fade-up" delay={0.1} duration={1.2}>
        <Section2 />
      </PremiumScrollReveal>
      
      <SectionTransition variant="subtle" fromColor="rgba(255,255,255,0.1)" height={80} />
      
      <PremiumScrollReveal animation="fade-up" delay={0.15} duration={1.1}>
        <Section3 />
      </PremiumScrollReveal>
      
      <SectionTransition 
        variant="gradient" 
        fromColor="rgba(255,255,255,0)" 
        toColor="rgba(0,0,0,0.3)" 
        height={100}
      />
      
      <PremiumScrollReveal animation="fade-up" delay={0.1} duration={1.2} parallax parallaxSpeed={0.3}>
        <Section5 />
      </PremiumScrollReveal>
      
      <SectionTransition 
        variant="gradient" 
        fromColor="rgba(0,0,0,0.3)" 
        toColor="rgba(255,255,255,0.2)" 
        height={100}
      />
      
      <PremiumScrollReveal animation="fade-up" delay={0.2} duration={1.1}>
        <AICreativeSection />
      </PremiumScrollReveal>
      
      <SectionTransition variant="subtle" fromColor="rgba(255,255,255,0.1)" height={80} />
      
      <PremiumScrollReveal animation="fade-up" delay={0.15} duration={1.2}>
        <HireAIEmployeesSection />
      </PremiumScrollReveal>
      
      <SectionTransition 
        variant="gradient" 
        fromColor="rgba(255,255,255,0)" 
        toColor="rgba(0,0,0,0.4)" 
        height={120}
      />
      
      <PremiumScrollReveal animation="fade-up" delay={0.1} duration={1.3} parallax parallaxSpeed={0.2}>
        <LetsTalkRevenueSection />
      </PremiumScrollReveal>
      
      <SectionTransition 
        variant="gradient" 
        fromColor="rgba(0,0,0,0.4)" 
        toColor="rgba(255,255,255,0.2)" 
        height={100}
      />
      
      <PremiumScrollReveal animation="scale" delay={0.2} duration={1.2}>
        <SuccessInNumbers />
      </PremiumScrollReveal>
      
      <SectionTransition variant="subtle" fromColor="rgba(255,255,255,0.1)" height={80} />
      
      <PremiumScrollReveal animation="fade-up" delay={0.15} duration={1.1}>
        <BrandShowcaseSection />
      </PremiumScrollReveal>
      
      <SectionTransition variant="subtle" fromColor="rgba(255,255,255,0.1)" height={80} />
      
      <PremiumScrollReveal animation="fade-up" delay={0.1} duration={1.2}>
        <Testimonials />
      </PremiumScrollReveal>
      
      <SectionTransition variant="subtle" fromColor="rgba(255,255,255,0.1)" height={80} />
      
      <PremiumScrollReveal animation="fade-up" delay={0.2} duration={1.1}>
        <CTASections />
      </PremiumScrollReveal>
      
      <SectionTransition variant="subtle" fromColor="rgba(255,255,255,0.1)" height={80} />
      
      <PremiumScrollReveal animation="fade-up" delay={0.15} duration={1.2}>
        <FAQ />
      </PremiumScrollReveal>
      
      <SectionTransition 
        variant="gradient" 
        fromColor="rgba(255,255,255,0)" 
        toColor="rgba(10,10,10,0.5)" 
        height={100}
      />
      
      <Footer />
    </div>
  );
}
