import { lazy, Suspense } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/HeroSection";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import { localBusinessSchema, organizationSchema, createFAQSchema } from "@/utils/structuredData";
import { createAggregateRatingSchema, createReviewSchema } from "@/utils/advancedSchema";

const OARCBrandSection      = lazy(() => import("@/components/OARCBrandSection"));
const TrustedBrandsSection  = lazy(() => import("@/components/TrustedBrandsSection"));
const AICreativeSection     = lazy(() => import("@/components/AICreativeSection"));
const Section2              = lazy(() => import("@/components/Section2"));
const Section5              = lazy(() => import("@/components/Section5"));
const HireAIEmployeesSection= lazy(() => import("@/components/HireAIEmployeesSection"));
const TechEnabledSection    = lazy(() => import("@/components/TechEnabledSection"));
const LetsTalkRevenueSection= lazy(() => import("@/components/LetsTalkRevenueSection"));
const SuccessInNumbers      = lazy(() => import("@/components/SuccessInNumbers").then(m => ({ default: m.SuccessInNumbers })));
const BrandShowcaseSection  = lazy(() => import("@/components/BrandShowcaseSection"));
const Testimonials          = lazy(() => import("@/components/Testimonials"));
const ComparisonSection     = lazy(() => import("@/components/ComparisonSection"));
const GrowthSimulator       = lazy(() => import("@/components/GrowthSimulator"));
const DiagnosticsTeaser     = lazy(() => import("@/components/DiagnosticsTeaser"));
const MoneyBackGuaranteeSection = lazy(() => import("@/components/MoneyBackGuaranteeSection"));
const BlogPreviewSection    = lazy(() => import("@/components/BlogPreviewSection"));
const CTASections           = lazy(() => import("@/components/CTASections"));
const NeedHelpCTA           = lazy(() => import("@/components/NeedHelpCTA"));
const FAQ                   = lazy(() => import("@/components/FAQ"));

const SectionFallback = () => <div style={{ minHeight: '1px' }} />;

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

        <Suspense fallback={<SectionFallback />}>
          <ScrollReveal>
            <OARCBrandSection />
          </ScrollReveal>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ScrollReveal delay={100}>
            <TrustedBrandsSection />
          </ScrollReveal>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ScrollReveal>
            <AICreativeSection />
          </ScrollReveal>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ScrollReveal>
            <Section2 />
          </ScrollReveal>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ScrollReveal>
            <Section5 />
          </ScrollReveal>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ScrollReveal>
            <HireAIEmployeesSection />
          </ScrollReveal>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ScrollReveal delay={50}>
            <LetsTalkRevenueSection />
          </ScrollReveal>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ScrollReveal>
            <TechEnabledSection />
          </ScrollReveal>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ScrollReveal>
            <SuccessInNumbers />
          </ScrollReveal>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ScrollReveal>
            <BrandShowcaseSection />
          </ScrollReveal>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ScrollReveal>
            <Testimonials />
          </ScrollReveal>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ScrollReveal>
            <ComparisonSection />
          </ScrollReveal>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ScrollReveal>
            <GrowthSimulator />
          </ScrollReveal>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ScrollReveal>
            <DiagnosticsTeaser />
          </ScrollReveal>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ScrollReveal>
            <MoneyBackGuaranteeSection />
          </ScrollReveal>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ScrollReveal>
            <BlogPreviewSection />
          </ScrollReveal>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ScrollReveal>
            <CTASections />
          </ScrollReveal>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ScrollReveal>
            <NeedHelpCTA />
          </ScrollReveal>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ScrollReveal>
            <FAQ />
          </ScrollReveal>
        </Suspense>
      </div>
    </Layout>
  );
}
