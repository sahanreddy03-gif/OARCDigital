import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
// /malta/[location]/[industry]/[service] — kept industries × kept services only.
// Archived combos are 410'd by middleware before reaching this route.

import Layout from '@/components/layout/Layout';
import JsonLd from '@/components/JsonLd';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { buildLocationIndustryServiceContent } from '@/lib/seo/generateUniquePageContent';
import { getLocationProfile } from '@/lib/seo/locationData';
import restore from '@/lib/seo/restore.json';
import { NAP } from '@/lib/seo/nap';

export async function generateStaticParams() {
  return (restore as { kept: { locationIndustryServices: { location: string; industry: string; service: string }[] } })
    .kept.locationIndustryServices.map(({ location, industry, service }) => ({ location, slug: industry, service }));
}

export async function generateMetadata({
  params,
}: {
  params: { location: string; slug: string; service: string };
}): Promise<Metadata> {
  const c = buildLocationIndustryServiceContent(params.location, params.slug, params.service);
  if (!c) return { title: 'Not Found | OARC Digital' };
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: c.canonical },
    openGraph: { title: c.title, description: c.description, url: c.canonical, type: 'website', images: ogImageEntry({ title: c.title, subtitle: c.description }) },
    twitter: { card: 'summary_large_image', title: c.title, description: c.description, images: [ogImageUrl({ title: c.title, subtitle: c.description })] },
  };
}

export default function IndustryLocationServicePage({
  params,
}: {
  params: { location: string; slug: string; service: string };
}) {
  const c = buildLocationIndustryServiceContent(params.location, params.slug, params.service);
  if (!c) notFound();

  const loc = getLocationProfile(params.location)!;

  return (
    <Layout>
      <JsonLd
        id={`malta-${params.location}-${params.slug}-${params.service}`}
        data={c.schema}
      />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href={`/malta/${params.location}`} className="hover:text-white transition-colors">{loc.name}</Link>
              <span>/</span>
              <span className="text-white">{c.hero.eyebrow.split(' · ')[1]}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">
                {c.hero.eyebrow}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {c.hero.h1}
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              {c.hero.intro}
            </p>
          </div>
        </section>

        {/* Problem + Delivery */}
        <section className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <div className="bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">
              The Challenge in {loc.name}
            </h2>
            <p className="text-foreground leading-relaxed">{c.challenge}</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">What We Deliver</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold mb-2 text-lg">The Service</h3>
              <p className="text-muted-foreground leading-relaxed">{c.serviceDescription}</p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold mb-2 text-lg">What You Get</h3>
              <p className="text-muted-foreground leading-relaxed">{c.serviceDeliverable}.</p>
              <p className="text-sm text-muted-foreground mt-4">
                Packages from <span className="text-foreground font-semibold">€{c.pricingFromEUR.toLocaleString()}/month</span>.
              </p>
            </div>
          </div>

          {/* The Opportunity */}
          <div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold mb-3 text-emerald-700 dark:text-emerald-400">
              The Opportunity in {loc.name}
            </h2>
            <p className="text-foreground leading-relaxed">{c.opportunity}</p>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Common Questions</h2>
          <div className="space-y-4 mb-12">
            {c.faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-zinc-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Ready to grow in {loc.name}?
            </h2>
            <p className="text-zinc-300 mb-6">
              OARC Digital — Malta&apos;s First Creative + AI Systems Agency. Month-to-month contracts. Senior team on
              every account.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              data-testid="link-contact-cta"
            >
              Start a Conversation
            </a>
            <p className="text-zinc-500 text-sm mt-4">{NAP.email} · {NAP.phoneDisplay}</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
