import type { Metadata } from "next";
import { PILLAR_SCHEMAS } from "@/lib/seo/pillarSchemaConfig";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";

const pillarMeta = PILLAR_SCHEMAS["/"];

export const metadata: Metadata = {
  title: pillarMeta.title,
  description: pillarMeta.description,
  alternates: getHreflangAlternates("/"),
  openGraph: {
    images: ogImageEntry({ title: pillarMeta.title, subtitle: pillarMeta.description }),
    title: pillarMeta.title,
    description: pillarMeta.description,
    url: "https://oarcdigital.com/",
  },
  twitter: {
    images: [ogImageUrl({ title: pillarMeta.title, subtitle: pillarMeta.description })],
    card: "summary_large_image",
    title: pillarMeta.title,
    description: pillarMeta.description,
  },
};

import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/HeroSection";
import MostPopularServices from "@/components/MostPopularServices";
import DiagnosticsTeaser from "@/components/DiagnosticsTeaser";
import OARCBrandSection from "@/components/OARCBrandSection";
import ShiftHappensSection from "@/components/ShiftHappensSection";
const oarcBgVideo = "/media/glif-chat-1766630282078_1766685897761.mov";
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
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export default function Page() {
  const pillar = pillarMeta;

  return (
    <Layout>
      <SpeakableJsonLd path="/" />
      <RouteSchema
        type="pillar"
        path="/"
        title={pillar.title}
        description={pillar.description}
        faqs={pillar.faqs}
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

        {/* Our Difference */}
        <Section5 />

        {/* Services Showcase */}
        <Section2 />

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
        {/* Top-30 internal-link funnel: surfaces the highest-leverage AEO + service pages */}
        <MostPopularServices />
        <FAQ />
      </div>
    </Layout>
  );
}
