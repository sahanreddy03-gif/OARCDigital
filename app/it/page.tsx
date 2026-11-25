import type { Metadata } from "next";
import LocalePage from "@/components/i18n/LocalePage";
import LocaleSchema from "@/components/i18n/LocaleSchema";
import { HERO_CUSTOMERS_VIDEO } from "@/lib/media/heroCustomersVideo";
import { LOCALE_INFO, localeAlternates, localeUrl } from "@/lib/i18n/twins";
import { DESCRIPTION, TITLE, faqs } from "./_home/meta";

// The Italian home is the English home (app/page.tsx) section for section, in the same
// order. Each section is a translated copy of the English component of the same name; the
// English components are not touched. When the English home changes, change this too.
import HeroSection from "./_home/HeroSection";
import HomepageNeedsSection from "./_home/HomepageNeedsSection";
import TrustedBrandsSection from "./_home/TrustedBrandsSection";
import AICreativeSection from "./_home/AICreativeSection";
import Section5 from "./_home/Section5";
import HomepageWhyOarc from "./_home/HomepageWhyOarc";
import HomepageAIStaff from "./_home/HomepageAIStaff";
import HomepageOurWork from "./_home/HomepageOurWork";
import BlogPreviewSection from "./_home/BlogPreviewSection";
import DiagnosticsTeaser from "./_home/DiagnosticsTeaser";
import MoneyBackGuaranteeSection from "./_home/MoneyBackGuaranteeSection";
import NeedHelpCTA from "./_home/NeedHelpCTA";
import MostPopularServices from "./_home/MostPopularServices";
import FAQ from "./_home/FAQ";

const LOCALE = "it" as const;
const PATH = "/"; // the ENGLISH path
const URL = localeUrl(LOCALE, PATH);

const POSTER = {
  url: HERO_CUSTOMERS_VIDEO.absolutePosterJpg,
  width: HERO_CUSTOMERS_VIDEO.width,
  height: HERO_CUSTOMERS_VIDEO.height,
  alt: "OARC Digital, agenzia di marketing a Malta nata con l’AI",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: localeAlternates(LOCALE, PATH),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    locale: LOCALE_INFO[LOCALE].og,
    images: [POSTER],
    videos: [
      {
        url: HERO_CUSTOMERS_VIDEO.absoluteMp4,
        width: HERO_CUSTOMERS_VIDEO.width,
        height: HERO_CUSTOMERS_VIDEO.height,
        type: "video/mp4",
      },
    ],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [POSTER.url] },
};

export default function Page() {
  const heroVideoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: HERO_CUSTOMERS_VIDEO.name,
    description: HERO_CUSTOMERS_VIDEO.description,
    thumbnailUrl: [HERO_CUSTOMERS_VIDEO.absolutePosterJpg],
    uploadDate: HERO_CUSTOMERS_VIDEO.uploadDate,
    duration: HERO_CUSTOMERS_VIDEO.durationIso,
    contentUrl: HERO_CUSTOMERS_VIDEO.absoluteMp4,
  };

  return (
    <LocalePage locale={LOCALE} path={PATH}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(heroVideoJsonLd) }} />
      <LocaleSchema locale={LOCALE} path={PATH} title={TITLE} description={DESCRIPTION} faqs={faqs} />
      {/* Same structure as app/page.tsx. overflow-x is intentionally NOT set here: an
          overflow:hidden ancestor breaks position:sticky descendants in iOS Safari. */}
      <div>
        <HeroSection />

        <div style={{ background: "#F2EFE9" }}>
          <div id="homepage-floating-controls-trigger" aria-hidden="true" className="h-px w-full" />
          <HomepageNeedsSection />
        </div>

        <TrustedBrandsSection />
        <AICreativeSection />
        <Section5 />
        <HomepageWhyOarc />
        <HomepageAIStaff />
        <HomepageOurWork />
        <BlogPreviewSection />
        <DiagnosticsTeaser />
        <MoneyBackGuaranteeSection />
        <NeedHelpCTA />
        <MostPopularServices />
        <FAQ />
      </div>
    </LocalePage>
  );
}
