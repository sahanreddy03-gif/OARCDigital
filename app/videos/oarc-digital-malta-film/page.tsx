import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { ogImageEntry } from "@/lib/seo/ogImageUrl";
import { NAP } from "@/lib/seo/nap";
import { HERO_CUSTOMERS_VIDEO } from "@/lib/media/heroCustomersVideo";

/**
 * Watch page for the homepage film. Google only indexes a video when it is the
 * main content of its page ("Video isn't on a watch page" in Search Console for
 * the homepage hero loop). This page exists so the film can be indexed.
 */
const CANONICAL = "https://oarcdigital.com/videos/oarc-digital-malta-film";
const TITLE = "OARC Digital Film: Marketing Agency Malta (Video)";
const DESCRIPTION =
  "Watch OARC Digital's 17-second film. A Birkirkara marketing agency: one team for creative, filming, social media, ads and AI automation, for €500 a month.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    images: ogImageEntry({ title: "OARC Digital — the film", subtitle: DESCRIPTION }),
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    type: "video.other",
    videos: [{ url: HERO_CUSTOMERS_VIDEO.absoluteMp4, type: "video/mp4", width: 1280, height: 720 }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const videoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "VideoObject",
      "@id": `${CANONICAL}#video`,
      name: "OARC Digital — Customers? (Marketing Agency Malta film)",
      description: DESCRIPTION,
      thumbnailUrl: [HERO_CUSTOMERS_VIDEO.absolutePosterJpg],
      uploadDate: HERO_CUSTOMERS_VIDEO.uploadDate,
      duration: HERO_CUSTOMERS_VIDEO.durationIso,
      contentUrl: HERO_CUSTOMERS_VIDEO.absoluteMp4,
      url: CANONICAL,
      inLanguage: "en",
      publisher: { "@id": "https://oarcdigital.com/#organization" },
      contentLocation: { "@type": "Place", name: "Birkirkara, Malta" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://oarcdigital.com/" },
        { "@type": "ListItem", position: 2, name: "OARC Digital film", item: CANONICAL },
      ],
    },
  ],
};

export default function Page() {
  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <article className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">Video · 17 seconds</p>
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">OARC Digital: the film</h1>

        <div className="overflow-hidden rounded-2xl bg-black shadow-xl">
          <video
            className="aspect-video w-full"
            controls
            playsInline
            preload="metadata"
            poster={HERO_CUSTOMERS_VIDEO.posterJpg}
            width={HERO_CUSTOMERS_VIDEO.width}
            height={HERO_CUSTOMERS_VIDEO.height}
          >
            <source src={HERO_CUSTOMERS_VIDEO.mp4} type="video/mp4" />
          </video>
        </div>

        <section className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            One question every owner in Malta asks: where are the customers? This film is how OARC Digital opens that
            conversation. We are a marketing agency in Birkirkara, at {NAP.streetAddressShort}, and we run one team for
            creative, filming, social media, Meta and Google ads, websites and AI follow-up.
          </p>
          <p>
            It is the whole marketing team for €500 a month, with no setup fee. You keep your accounts, your footage
            and your dashboard.
          </p>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link className="rounded-full bg-orange-600 px-6 py-3 font-semibold text-white" href="/contact">
            Book a 20-minute call
          </Link>
          <Link className="rounded-full border px-6 py-3 font-semibold" href="/services/video-production">
            Video production in Malta
          </Link>
          <Link className="rounded-full border px-6 py-3 font-semibold" href="/our-work">
            Our work
          </Link>
        </div>
      </article>
    </Layout>
  );
}
