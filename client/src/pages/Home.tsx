import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/HeroSection";
import DiagnosticsTeaser from "@/components/DiagnosticsTeaser";
import OARCBrandSection from "@/components/OARCBrandSection";
import ShiftHappensSection from "@/components/ShiftHappensSection";
import oarcBgVideo from "@assets/glif-chat-1766630282078_1766685897761.mov";
import TrustedBrandsSection from "@/components/TrustedBrandsSection";
import AICreativeSection from "@/components/AICreativeSection";
import Section2 from "@/components/Section2";
import Section5 from "@/components/Section5";
import HireAIEmployeesSection from "@/components/HireAIEmployeesSection";
import TechEnabledSection from "@/components/TechEnabledSection";
import LetsTalkRevenueSection from "@/components/LetsTalkRevenueSection";
import { SuccessInNumbers } from "@/components/SuccessInNumbers";
import BrandShowcaseSection from "@/components/BrandShowcaseSection";
import Testimonials from "@/components/Testimonials";
import ComparisonSection from "@/components/ComparisonSection";
import GrowthSimulator from "@/components/GrowthSimulator";
import MoneyBackGuaranteeSection from "@/components/MoneyBackGuaranteeSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import CTASections from "@/components/CTASections";
import NeedHelpCTA from "@/components/NeedHelpCTA";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import { localBusinessSchema, organizationSchema, createFAQSchema } from "@/utils/structuredData";
import { createBreadcrumbSchema } from "@/utils/advancedSchema";

export default function Home() {
  const faqSchema = createFAQSchema([
    {
      question: "What services does OARC Digital offer?",
      answer: "OARC Digital offers AI-powered creative services, AI employees for hire, and revenue automation solutions. Our services include social media management, video production, web design, branding, AI copywriting, and complete marketing automation."
    },
    {
      question: "Where is OARC Digital located?",
      answer: "OARC Digital has offices in Malta (Ta' Xbiex), Chennai (India), and Dubai (UAE), serving clients across Europe, Middle East, and Asia."
    },
    {
      question: "How does OARC Digital use AI in marketing?",
      answer: "We combine cutting-edge AI technology with human creativity to deliver superior results. Our AI employees handle repetitive tasks 24/7, while our expert team focuses on strategy and creative excellence."
    },
    {
      question: "What makes OARC Digital different from other marketing agencies?",
      answer: "OARC Digital is the only agency that combines AI-powered automation, world-class creative services, and dedicated AI employees. We deliver enterprise-grade results at unprecedented speed and scale."
    }
  ]);

  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, organizationSchema, faqSchema]
  };

  return (
    <Layout>
      <SEOHead
        title="OARC Digital | Brand Strategy, AI Solutions & Growth Automation — Malta's First"
        description="OARC Digital helps Maltese businesses grow revenue through brand strategy, AI-driven automation, performance marketing, and scalable growth systems. Malta's first AI-native creative, automation & intelligent agents agency."
        canonicalUrl="https://oarcdigital.com/"
        structuredData={homepageSchema}
      />
      <div className="overflow-x-hidden">
        <HeroSection />

        {/* SHIFT HAPPENS — editorial identity section that fills the gap */}
        <ShiftHappensSection />

        {/* OARC Brand Section - clean video background */}
        <OARCBrandSection videoSrc={oarcBgVideo} />

        {/* What We Do - Creative Services */}
        <TrustedBrandsSection />
        <AICreativeSection />

        {/* Services Showcase */}
        <Section2 />

        {/* Our Difference */}
        <Section5 />

        {/* AI Services Pillars - Dark Premium Zone */}
        <HireAIEmployeesSection />
        <LetsTalkRevenueSection />

        {/* Tech & Services */}
        <TechEnabledSection />

        {/* Success Metrics */}
        <SuccessInNumbers />

        {/* Case Studies & Social Proof */}
        <BrandShowcaseSection />

        {/* Testimonials */}
        <Testimonials />

        {/* Why OARC - Comparison */}
        <ComparisonSection />
        <GrowthSimulator />
        
        {/* Business Diagnostics Teaser - Compact version linking to full diagnostics */}
        <DiagnosticsTeaser />

        {/* Final CTAs */}
        <MoneyBackGuaranteeSection />
        <BlogPreviewSection />
        <CTASections />
        <NeedHelpCTA />
        <FAQ />
      </div>
    </Layout>
  );
}
