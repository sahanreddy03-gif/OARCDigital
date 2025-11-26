import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustedBrandsSection from "@/components/TrustedBrandsSection";
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
import { localBusinessSchema, organizationSchema, createFAQSchema } from "@/utils/structuredData";
import { createAggregateRatingSchema, createReviewSchema } from "@/utils/advancedSchema";

export default function Home() {
  // FAQ Schema for voice search & position zero
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
  
  // Aggregate Rating Schema - Shows stars in Google search!
  const ratingSchema = createAggregateRatingSchema("OARC Digital", 4.9, 127);
  
  // Review Schema from real testimonials
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
  
  // Combine schemas for homepage
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, organizationSchema, faqSchema, ratingSchema, reviewSchema]
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
      <TrustedBrandsSection />
      <AICreativeSection />
      <Section2 />
      <Section3 />
      <Section5 />
      <HireAIEmployeesSection />
      <TechEnabledSection />
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
