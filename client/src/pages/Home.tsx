import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/HeroSection";
import OARCBrandSection from "@/components/OARCBrandSection";
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
import ROICalculatorSection from "@/components/ROICalculatorSection";
import MoneyBackGuaranteeSection from "@/components/MoneyBackGuaranteeSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import CTASections from "@/components/CTASections";
import NeedHelpCTA from "@/components/NeedHelpCTA";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import { localBusinessSchema, organizationSchema, createFAQSchema } from "@/utils/structuredData";
import { createAggregateRatingSchema, createReviewSchema } from "@/utils/advancedSchema";
import LivingAIInterface from "@/components/ai/LivingAIInterface";

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

  const ratingSchema = createAggregateRatingSchema("OARC Digital", 4.9, 127);

  const reviewSchema = createReviewSchema([
    {
      author: "Sarah Chen",
      rating: 5,
      reviewBody: "OARC transformed our social media presence completely. Their AI-powered approach delivered results we never thought possible.",
      datePublished: "2024-10-15"
    },
    {
      author: "Michael Rodriguez",
      rating: 5,
      reviewBody: "The AI employees we hired from OARC handle our customer support 24/7. Game-changing for our business.",
      datePublished: "2024-11-02"
    },
    {
      author: "Emma Thompson",
      rating: 5,
      reviewBody: "Best marketing agency we've worked with. The combination of AI and human creativity is unmatched.",
      datePublished: "2024-11-18"
    }
  ]);

  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, organizationSchema, faqSchema, ratingSchema, reviewSchema]
  };

  return (
    <Layout>
      <SEOHead
        title="OARC Digital | AI-Powered Creative & Marketing Agency in Malta"
        description="Premium AI-powered creative services, AI employees, and revenue automation solutions. Elite marketing agency in Malta delivering world-class digital experiences across Europe, Middle East, and Asia."
        canonicalUrl="https://oarcdigital.com"
        structuredData={homepageSchema}
      />
      <div className="overflow-x-hidden">
        <HeroSection />

        {/* OARC Brand Section - premium display of OARC acronym and pillars */}
        <OARCBrandSection />

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

        {/* Final CTAs */}
        <ROICalculatorSection />
        <MoneyBackGuaranteeSection />
        <BlogPreviewSection />
        <CTASections />
        <NeedHelpCTA />
        <FAQ />
        <LivingAIInterface />
      </div>
    </Layout>
  );
}
