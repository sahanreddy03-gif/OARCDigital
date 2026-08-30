import type { Metadata } from "next";
import { PILLAR_SCHEMAS } from "@/lib/seo/pillarSchemaConfig";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { buildVideoObject } from "@/lib/schema";
import { HERO_CUSTOMERS_VIDEO } from "@/lib/media/heroCustomersVideo";

const pillarMeta = PILLAR_SCHEMAS["/"];

const HERO_VIDEO_OG = {
  title: HERO_CUSTOMERS_VIDEO.name,
  description: HERO_CUSTOMERS_VIDEO.description,
  poster: HERO_CUSTOMERS_VIDEO.absolutePosterJpg,
  video: HERO_CUSTOMERS_VIDEO.absoluteMp4,
  width: HERO_CUSTOMERS_VIDEO.width,
  height: HERO_CUSTOMERS_VIDEO.height,
} as const;

export const metadata: Metadata = {
  title: pillarMeta.title,
  description: pillarMeta.description,
  alternates: getHreflangAlternates("/"),
  openGraph: {
    title: HERO_VIDEO_OG.title,
    description: HERO_VIDEO_OG.description,
    url: "https://oarcdigital.com/",
    type: "website",
    images: [
      {
        url: HERO_VIDEO_OG.poster,
        width: HERO_VIDEO_OG.width,
        height: HERO_VIDEO_OG.height,
        alt: HERO_VIDEO_OG.title,
      },
    ],
    videos: [
      {
        url: HERO_VIDEO_OG.video,
        width: HERO_VIDEO_OG.width,
        height: HERO_VIDEO_OG.height,
        type: "video/mp4",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HERO_VIDEO_OG.title,
    description: HERO_VIDEO_OG.description,
    images: [HERO_VIDEO_OG.poster],
  },
};

const HERO_VIDEO_SCHEMA = buildVideoObject({
  name: HERO_CUSTOMERS_VIDEO.name,
  description: HERO_CUSTOMERS_VIDEO.description,
  thumbnailUrl: HERO_CUSTOMERS_VIDEO.absolutePosterJpg,
  uploadDate: HERO_CUSTOMERS_VIDEO.uploadDate,
  contentUrl: HERO_CUSTOMERS_VIDEO.absoluteMp4,
  duration: HERO_CUSTOMERS_VIDEO.durationIso,
});

import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/HeroSection";
import MostPopularServices from "@/components/MostPopularServices";
import DiagnosticsTeaser from "@/components/DiagnosticsTeaser";
import OARCBrandSection from "@/components/OARCBrandSection";
import ShiftHappensSection from "@/components/ShiftHappensSection";
import OARCDepartmentIndex from "@/components/OARCDepartmentIndex";
const oarcBgVideo = "/media/glif-chat-1766630282078_1766685897761.mov";
import TrustedBrandsSection from "@/components/TrustedBrandsSection";
import AICreativeSection from "@/components/AICreativeSection";
import Section2 from "@/components/Section2";
import Section5 from "@/components/Section5";
import HireAIEmployeesSection from "@/components/HireAIEmployeesSection";
import TechEnabledSection from "@/components/TechEnabledSection";
import LetsTalkRevenueSection from "@/components/LetsTalkRevenueSection";
import BrandShowcaseSection from "@/components/BrandShowcaseSection";
import HomepageWorkProof from "@/components/HomepageWorkProof";
import ComparisonSection from "@/components/ComparisonSection";
import GrowthSimulator from "@/components/GrowthSimulator";
import MoneyBackGuaranteeSection from "@/components/MoneyBackGuaranteeSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import CTASections from "@/components/CTASections";
import NeedHelpCTA from "@/components/NeedHelpCTA";
import FAQ from "@/components/FAQ";
import RouteSchema from "@/components/RouteSchema";

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
      <script
        id="homepage-hero-video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HERO_VIDEO_SCHEMA) }}
      />
      {/* overflow-x intentionally NOT set here — any overflow:hidden ancestor
          silently breaks position:sticky descendants in iOS Safari, causing a
          blank white page. Each section manages its own overflow internally. */}
      <div>
        <HeroSection />

        {/* SHIFT HAPPENS + department index — one unified bone surface, no gap */}
        <div style={{ background: "#F2EFE9" }}>
          <ShiftHappensSection />
          <div
            id="homepage-floating-controls-trigger"
            aria-hidden="true"
            className="h-px w-full"
          />
          <OARCDepartmentIndex />
        </div>

        {/* Stat ticker strip — original position, old logo strip style */}
        <TrustedBrandsSection />

        {/* Every type of creative work */}
        <AICreativeSection />

        {/* Services Showcase + industry chips */}
        <Section2 />

        {/* Our Difference */}
        <Section5 />

        {/* AI Services Pillars - Dark Premium Zone */}
        <HireAIEmployeesSection />
        <LetsTalkRevenueSection />

        {/* Tech & Services */}
        <TechEnabledSection />

        {/* Case Studies & Social Proof */}
        <BrandShowcaseSection />

        {/* Evidence-led work proof */}
        <HomepageWorkProof />

        {/* Why OARC - Comparison */}
        <ComparisonSection />
        <GrowthSimulator />

        {/* Blog preview */}
        <BlogPreviewSection />

        {/* Business Diagnostics Teaser */}
        <DiagnosticsTeaser />

        {/* Final CTAs */}
        <MoneyBackGuaranteeSection />
        <CTASections />
        <NeedHelpCTA />
        {/* Top-30 internal-link funnel */}
        <MostPopularServices />
        <FAQ />
      </div>
    </Layout>
  );
}
