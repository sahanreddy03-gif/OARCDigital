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

// ─── AggregateRating + Review JSON-LD ────────────────────────────────────────
// Kept as a standalone script so it does not mutate the shared RouteSchema graph.
// Google's Rich Results Test validates these nodes independently.
const REVIEW_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AggregateRating",
      "@id": "https://oarcdigital.com/#aggregateRating",
      itemReviewed: { "@id": "https://oarcdigital.com/#organization" },
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "47",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah Chen" },
      itemReviewed: { "@id": "https://oarcdigital.com/#organization" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "For us it has been important to find a creative partner like OARC — a team we can trust to deliver quality work on time, even with short notices.",
      datePublished: "2024-01-01",
      name: "Exceptional creative partner — SatAir",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Michael Rodriguez" },
      itemReviewed: { "@id": "https://oarcdigital.com/#organization" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "OARC Digital took the time to learn about our company, applied their insights from various design projects and sought to meet our needs.",
      datePublished: "2024-01-01",
      name: "68% ROI increase in 8 months — TechVentures",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Emma Thompson" },
      itemReviewed: { "@id": "https://oarcdigital.com/#organization" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "The combination of creativity and technology sets OARC apart. They've helped us scale 4x while maintaining exceptional quality.",
      datePublished: "2024-01-01",
      name: "4x business growth — InnovateCo",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rajeev Shukla" },
      itemReviewed: { "@id": "https://oarcdigital.com/#organization" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Working with OARC Digital has transformed how we approach marketing. Their AI-driven strategies deliver results that traditional agencies simply can't match.",
      datePublished: "2024-01-01",
      name: "320% revenue growth in 12 months — Digital Innovations",
    },
  ],
};

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
        aggregateRating={{ ratingValue: 4.9, reviewCount: 47, bestRating: 5 }}
      />
      {/* AggregateRating + Review nodes — separate graph for Rich Results eligibility */}
      <script
        id="homepage-reviews-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(REVIEW_SCHEMA) }}
      />
      <script
        id="homepage-hero-video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HERO_VIDEO_SCHEMA) }}
      />
      <div className="overflow-x-hidden">
        <HeroSection />

        {/* SHIFT HAPPENS — editorial identity */}
        <ShiftHappensSection />

        {/* OARC Brand Section - video background */}
        <OARCBrandSection videoSrc={oarcBgVideo} />

        {/* Stat ticker strip — original position, old logo strip style */}
        <TrustedBrandsSection />

        {/* Every type of creative work */}
        <AICreativeSection />

        {/* Services Showcase + industry chips */}
        <Section2 />

        {/* Our Difference */}
        <Section5 />

        {/* SUCCESS IN NUMBERS — proof after the difference is established */}
        <SuccessInNumbers />

        {/* AI Services Pillars - Dark Premium Zone */}
        <HireAIEmployeesSection />
        <LetsTalkRevenueSection />

        {/* Tech & Services */}
        <TechEnabledSection />

        {/* Case Studies & Social Proof */}
        <BrandShowcaseSection />

        {/* Testimonials */}
        <Testimonials />

        {/* Why OARC - Comparison */}
        <ComparisonSection />
        <GrowthSimulator />

        {/* Business Diagnostics Teaser */}
        <DiagnosticsTeaser />

        {/* Final CTAs */}
        <MoneyBackGuaranteeSection />
        <BlogPreviewSection />
        <CTASections />
        <NeedHelpCTA />
        {/* Top-30 internal-link funnel */}
        <MostPopularServices />
        <FAQ />
      </div>
    </Layout>
  );
}
