import { lazy, Suspense, useEffect, useRef, useState } from "react";
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

/**
 * DeferredSection — mounts children only once the placeholder div enters the
 * viewport (with a generous rootMargin so chunks start loading slightly before
 * they're needed). Until then the lazy component is never instantiated and its
 * JS chunk is never requested.
 */
function DeferredSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {shouldRender ? (
        <Suspense fallback={<div style={{ minHeight: "1px" }} />}>
          {children}
        </Suspense>
      ) : (
        <div style={{ minHeight: "1px" }} />
      )}
    </div>
  );
}

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

        {/* Hero — always eager, no deferral */}
        <HeroSection />

        <DeferredSection>
          <ScrollReveal>
            <OARCBrandSection />
          </ScrollReveal>
        </DeferredSection>

        <DeferredSection>
          <ScrollReveal delay={100}>
            <TrustedBrandsSection />
          </ScrollReveal>
        </DeferredSection>

        <DeferredSection>
          <ScrollReveal>
            <AICreativeSection />
          </ScrollReveal>
        </DeferredSection>

        <DeferredSection>
          <ScrollReveal>
            <Section2 />
          </ScrollReveal>
        </DeferredSection>

        <DeferredSection>
          <ScrollReveal>
            <Section5 />
          </ScrollReveal>
        </DeferredSection>

        <DeferredSection>
          <ScrollReveal>
            <HireAIEmployeesSection />
          </ScrollReveal>
        </DeferredSection>

        <DeferredSection>
          <ScrollReveal delay={50}>
            <LetsTalkRevenueSection />
          </ScrollReveal>
        </DeferredSection>

        <DeferredSection>
          <ScrollReveal>
            <TechEnabledSection />
          </ScrollReveal>
        </DeferredSection>

        <DeferredSection>
          <ScrollReveal>
            <SuccessInNumbers />
          </ScrollReveal>
        </DeferredSection>

        <DeferredSection>
          <ScrollReveal>
            <BrandShowcaseSection />
          </ScrollReveal>
        </DeferredSection>

        <DeferredSection>
          <ScrollReveal>
            <Testimonials />
          </ScrollReveal>
        </DeferredSection>

        <DeferredSection>
          <ScrollReveal>
            <ComparisonSection />
          </ScrollReveal>
        </DeferredSection>

        <DeferredSection>
          <ScrollReveal>
            <GrowthSimulator />
          </ScrollReveal>
        </DeferredSection>

        <DeferredSection>
          <ScrollReveal>
            <DiagnosticsTeaser />
          </ScrollReveal>
        </DeferredSection>

        <DeferredSection>
          <ScrollReveal>
            <MoneyBackGuaranteeSection />
          </ScrollReveal>
        </DeferredSection>

        <DeferredSection>
          <ScrollReveal>
            <BlogPreviewSection />
          </ScrollReveal>
        </DeferredSection>

        <DeferredSection>
          <ScrollReveal>
            <CTASections />
          </ScrollReveal>
        </DeferredSection>

        <DeferredSection>
          <ScrollReveal>
            <NeedHelpCTA />
          </ScrollReveal>
        </DeferredSection>

        <DeferredSection>
          <ScrollReveal>
            <FAQ />
          </ScrollReveal>
        </DeferredSection>

      </div>
    </Layout>
  );
}
