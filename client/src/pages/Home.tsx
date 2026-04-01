import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/HeroSection";
import DiagnosticsTeaser from "@/components/DiagnosticsTeaser";
import OARCBrandSection from "@/components/OARCBrandSection";
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
import ScrollReveal from "@/components/ScrollReveal";
import { localBusinessSchema, organizationSchema, createFAQSchema } from "@/utils/structuredData";
import { createAggregateRatingSchema, createReviewSchema } from "@/utils/advancedSchema";

export default function Home() {
  const faqSchema = createFAQSchema([
    {
      question: "What services does OARC Digital offer?",
      answer: "OARC Digital offers AI-powered creative services, AI employees for hire, and revenue automation solutions. Our services include social media management, video production, web design, branding, AI copywriting, and complete marketing automation."
    },
    {
      question: "Where is OARC Digital located?",
      answer: "OARC Digital has offices in Malta (Birkirkara CBD), Chennai (India), and Dubai (UAE), serving clients across Europe, Middle East, and Asia."
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
        title="OARC Digital | Brand Strategy, AI Solutions & Growth Automation — Malta's First"
        description="OARC Digital helps Maltese businesses grow revenue through brand strategy, AI-driven automation, performance marketing, and scalable growth systems. Malta's first AI-native creative, automation & intelligent agents agency."
        canonicalUrl="https://oarcdigital.com/"
        structuredData={homepageSchema}
      />
      <div className="overflow-x-hidden">
        <HeroSection />

        <ScrollReveal>
          <OARCBrandSection videoSrc={oarcBgVideo} />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <TrustedBrandsSection />
        </ScrollReveal>

        <ScrollReveal>
          <AICreativeSection />
        </ScrollReveal>

        <ScrollReveal>
          <Section2 />
        </ScrollReveal>

        <ScrollReveal>
          <Section5 />
        </ScrollReveal>

        <ScrollReveal>
          <HireAIEmployeesSection />
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <LetsTalkRevenueSection />
        </ScrollReveal>

        <ScrollReveal>
          <TechEnabledSection />
        </ScrollReveal>

        <ScrollReveal>
          <SuccessInNumbers />
        </ScrollReveal>

        <ScrollReveal>
          <BrandShowcaseSection />
        </ScrollReveal>

        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>

        <ScrollReveal>
          <ComparisonSection />
        </ScrollReveal>

        <ScrollReveal>
          <GrowthSimulator />
        </ScrollReveal>

        <ScrollReveal>
          <DiagnosticsTeaser />
        </ScrollReveal>

        <ScrollReveal>
          <MoneyBackGuaranteeSection />
        </ScrollReveal>

        <ScrollReveal>
          <BlogPreviewSection />
        </ScrollReveal>

        <ScrollReveal>
          <CTASections />
        </ScrollReveal>

        <ScrollReveal>
          <NeedHelpCTA />
        </ScrollReveal>

        <ScrollReveal>
          <FAQ />
        </ScrollReveal>
      </div>
    </Layout>
  );
}
