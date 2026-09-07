import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
// /malta/[location]/[industry]/[service] — exact historical 49×15×10 matrix.
// Only the small migration-era subset is prebuilt; the full restored corpus is
// rendered on demand and cached with ISR.

import Layout from '@/components/layout/Layout';
import JsonLd from '@/components/JsonLd';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  buildLocationIndustryServiceContent,
  getIndustryProfile,
  getServiceProfile,
} from '@/lib/seo/generateUniquePageContent';
import { getLocationProfile } from '@/lib/seo/locationData';
import restore from '@/lib/seo/restore.json';
import { NAP } from '@/lib/seo/nap';
import { LOCATION_IND_SVC_GLOBAL_KEEP, KEEP_LOCATION_IND_SVC_COMBOS } from '@/lib/seo/seoSets';
import { historicalServices } from '@/shared/historicalProgrammaticInventory';

type LocationIndustryServiceParams = {
  location: string;
  slug: string;
  service: string;
};

export const dynamicParams = true;
export const revalidate = 604800;

export async function generateStaticParams() {
  return (restore as { kept: { locationIndustryServices: { location: string; industry: string; service: string }[] } })
    .kept.locationIndustryServices.map(({ location, industry, service }) => ({ location, slug: industry, service }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<LocationIndustryServiceParams>;
}): Promise<Metadata> {
  const { location, slug, service } = await params;
  const c = buildLocationIndustryServiceContent(location, slug, service);
  if (!c) return { title: 'Not Found | OARC Digital' };
  const comboKey = `${location}/${slug}/${service}`;
  const shouldIndex =
    LOCATION_IND_SVC_GLOBAL_KEEP ||
    KEEP_LOCATION_IND_SVC_COMBOS.has(comboKey);
  return {
    title: c.title,
    description: c.description,
    robots: shouldIndex ? { index: true, follow: true } : { index: false, follow: true },
    alternates: { canonical: c.canonical },
    openGraph: { title: c.title, description: c.description, url: c.canonical, type: 'website', images: ogImageEntry({ title: c.title, subtitle: c.description }) },
    twitter: { card: 'summary_large_image', title: c.title, description: c.description, images: [ogImageUrl({ title: c.title, subtitle: c.description })] },
  };
}

export default async function IndustryLocationServicePage({
  params,
}: {
  params: Promise<LocationIndustryServiceParams>;
}) {
  const { location, slug, service } = await params;
  const c = buildLocationIndustryServiceContent(location, slug, service);
  if (!c) notFound();

  const loc = getLocationProfile(location)!;
  const ind = getIndustryProfile(slug)!;
  const svc = getServiceProfile(service)!;
  const relatedServices = historicalServices
    .filter((candidate) => candidate !== service)
    .map((candidate) => ({
      slug: candidate,
      name: getServiceProfile(candidate)?.shortName ?? candidate,
    }));

  return (
    <Layout>
      <JsonLd
        id={`malta-${location}-${slug}-${service}`}
        data={c.schema}
      />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/malta" className="hover:text-white transition-colors">Malta</Link>
              <span>/</span>
              <Link href={`/malta/${location}`} className="hover:text-white transition-colors">{loc.name}</Link>
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
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-600 mb-3">
              Local market context
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
              Understanding {ind.plural} in {loc.name}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{c.locationIntro}</p>
              <p>
                The audience here is {loc.audienceProfile.toLowerCase()} That affects the
                message, channel mix, response expectations, and proof a prospective customer
                needs before taking the next step. The goal is not to add a locality name to a
                generic campaign; it is to build the work around how demand forms in this market.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl border p-5">
                <h3 className="font-bold mb-2">Recognisable local signals</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {loc.landmarks.join(', ')} give campaigns, location pages, and visual
                  production relevant geographical context when that context helps customers
                  understand proximity or service coverage.
                </p>
              </div>
              <div className="rounded-xl border p-5">
                <h3 className="font-bold mb-2">Connected markets</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Demand often crosses between {loc.name} and {loc.nearestLocations.join(', ')}.
                  Targeting and reporting should account for that wider catchment instead of
                  drawing an artificial boundary around one postcode.
                </p>
              </div>
            </div>
          </div>

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

          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            What the {svc.shortName.toLowerCase()} programme covers
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {c.serviceBenefits.map((benefit, index) => (
              <div key={benefit} className="flex gap-4 rounded-xl border p-5">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-orange-500/10 text-sm font-bold text-orange-600">
                  {index + 1}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">How delivery works</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The sequence stays clear enough for stakeholders to review and approve, while the
            priorities adapt to the evidence we find in {loc.name}. Every stage has a defined
            output so strategy does not disappear into activity without an accountable result.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {c.process.map((step, index) => (
              <div key={step.step} className="rounded-xl border p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-600 mb-2">
                  Step {index + 1}
                </p>
                <h3 className="font-bold text-lg mb-2">{step.step}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* The Opportunity */}
          <div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold mb-3 text-emerald-700 dark:text-emerald-400">
              The Opportunity in {loc.name}
            </h2>
            <p className="text-foreground leading-relaxed">{c.opportunity}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-xl border p-6">
              <h2 className="text-xl font-bold mb-4">Local pressures to plan around</h2>
              <ul className="space-y-3">
                {c.localChallenges.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground leading-relaxed">
                    <span className="text-orange-600 mr-2">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border p-6">
              <h2 className="text-xl font-bold mb-4">Local opportunities to use</h2>
              <ul className="space-y-3">
                {c.localOpportunities.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground leading-relaxed">
                    <span className="text-emerald-600 mr-2">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-muted/40 p-7 md:p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              How we define progress
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Before work begins, we agree the commercial outcome, the customer action that
                signals intent, and the baseline available from your current analytics, CRM,
                bookings, enquiries, or sales process. That creates a practical measurement
                model for a {ind.name.toLowerCase()} business instead of reporting reach or
                traffic without context.
              </p>
              <p>
                During delivery, we review leading indicators such as qualified visibility,
                engagement with decision-making content, enquiry quality, response time, and
                conversion friction. Where the data shows a constraint outside the original
                brief, we make it visible and agree whether to fix it, test around it, or leave
                it with a documented recommendation.
              </p>
              <p>
                The final operating view belongs to your team. Assets, account access,
                measurement definitions, and agreed workflows are documented so the programme
                can be understood, reviewed, and improved without creating agency lock-in.
              </p>
            </div>
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

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Other restored services for {ind.plural} in {loc.name}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Compare adjacent capabilities for the same local market and sector. Each guide
              keeps its own service scope and self-canonical URL.
            </p>
            <div className="flex flex-wrap gap-2">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/malta/${location}/${slug}/${related.slug}`}
                  className="rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:border-orange-500/60"
                >
                  {related.name}
                </Link>
              ))}
            </div>
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
