// /case-studies — long-form case-study index. Sister surface to /our-work
// (the portfolio grid). Listed in `.local/memory/core-url-rank.md` as a
// Tier-2 P1 page; established here in Task #133 to give it a real schema
// surface (Service+FAQ+Breadcrumb+Speakable bundle via RouteSchema pillar).

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SUPPORTING_PAGE_SCHEMAS } from "@/lib/seo/supportingPagesSchema";
import { caseStudiesArray } from "@/data/caseStudies";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const TITLE = "Case Studies | Evidence-Led PJAZZA Product Story | OARC Digital";
const DESCRIPTION =
  "Evidence-led project stories from OARC Digital. The first published case study follows PJAZZA, OARC's own live shopping marketplace for Malta.";
const URL = "https://oarcdigital.com/case-studies";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: getHreflangAlternates("/case-studies"),
  openGraph: {
    images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    siteName: "OARC Digital",
  },
  twitter: {
    images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })],
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return (
    <Layout>
      <SpeakableJsonLd path="/case-studies" />
      <RouteSchema
        type="pillar"
        path="/case-studies"
        title={TITLE}
        description={DESCRIPTION}
        faqs={SUPPORTING_PAGE_SCHEMAS["/case-studies"].faqs}
      />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-950 text-white py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <h1
              data-speakable
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              data-testid="text-case-studies-h1"
            >
              Case Studies
            </h1>
            <p
              data-speakable
              className="text-xl text-zinc-300 max-w-3xl"
              data-testid="text-case-studies-lead"
            >
              Project stories published only when a name, media, link, and visible
              claim have an identified source. The first release follows PJAZZA,
              an OARC-owned product.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudiesArray.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}`}
                  className="group block rounded-md border bg-card p-6 hover-elevate"
                  data-testid={`link-case-study-${cs.slug}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {cs.category}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <h2 className="text-lg font-semibold mb-2" data-testid={`text-case-study-title-${cs.slug}`}>
                    {cs.brand}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {cs.description}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/contact">
                <Button size="lg" data-testid="button-case-studies-contact">
                  Discuss a similar engagement
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
