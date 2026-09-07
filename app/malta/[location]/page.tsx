import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import JsonLd from '@/components/JsonLd';
import {
  buildLocationHubContent,
  getIndustryProfile,
  getServiceProfile,
} from '@/lib/seo/generateUniquePageContent';
import restore from '@/lib/seo/restore.json';
import { NAP } from '@/lib/seo/nap';
import {
  currentAdditionalLocationServiceLocations,
  currentAdditionalLocationServices,
  historicalIndustries,
  historicalParentLocations,
  historicalServices,
} from '@/shared/historicalProgrammaticInventory';

const currentLocationSet = new Set(currentAdditionalLocationServiceLocations);

function serviceCatalogForLocation(location: string) {
  const slugs = [
    ...(historicalParentLocations.includes(location) ? historicalServices : []),
    ...(currentLocationSet.has(location) ? currentAdditionalLocationServices : []),
  ];
  return slugs.map((slug) => {
    const svc = getServiceProfile(slug);
    return {
      slug,
      name: svc?.name ?? slug,
      desc: svc?.description.split('—')[0].trim() ?? '',
    };
  });
}

const matrixCatalog = historicalIndustries.map((industry) => {
  const profile = getIndustryProfile(industry);
  return {
    slug: industry,
    name: profile?.name ?? industry,
    services: historicalServices.map((service) => {
      const svc = getServiceProfile(service);
      return {
        slug: service,
        name: svc?.shortName ?? service,
      };
    }),
  };
});

export const dynamicParams = true;
export const revalidate = 604800;

const serviceCatalog = (location: string) => serviceCatalogForLocation(location);

const _assertServiceProfiles = historicalServices.map((slug) => {
  const svc = getServiceProfile(slug);
  if (!svc) throw new Error(`Missing historical service profile: ${slug}`);
  return svc;
});

type LocationParams = { location: string };

export async function generateStaticParams() {
  return (restore as { kept: { locationHubs: { location: string }[] } }).kept.locationHubs;
}

export async function generateMetadata({ params }: { params: Promise<LocationParams> }): Promise<Metadata> {
  const { location } = await params;
  const c = buildLocationHubContent(location, serviceCatalog(location));
  if (!c) return { title: 'Location Not Found | OARC Digital' };
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: c.canonical },
    openGraph: { title: c.title, description: c.description, url: c.canonical, type: 'website', images: ogImageEntry({ title: c.title, subtitle: c.description }) },
    twitter: { card: 'summary_large_image', title: c.title, description: c.description, images: [ogImageUrl({ title: c.title, subtitle: c.description })] },
  };
}

export default async function LocationHubPage({ params }: { params: Promise<LocationParams> }) {
  const { location } = await params;
  const c = buildLocationHubContent(location, serviceCatalog(location));
  if (!c) notFound();

  return (
    <Layout>
      <JsonLd id={`malta-${location}-hub`} data={c.schema} />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/malta" className="hover:text-white transition-colors">Malta</Link>
              <span>/</span>
              <span className="text-white">{c.hero.eyebrow.replace('Malta — ', '')}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">{c.hero.eyebrow}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {c.hero.h1}
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              {c.hero.intro}
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About {c.hero.eyebrow.replace('Malta — ', '')}</h2>
          <p className="text-muted-foreground leading-relaxed mb-12">{c.whyHere}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold mb-4">Local Challenges</h3>
              <ul className="space-y-3">
                {c.challenges.map((item, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed">• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Marketing Opportunities</h3>
              <ul className="space-y-3">
                {c.opportunities.map((item, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed">• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {c.services.length > 0 && (
            <>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Services Available in {c.hero.eyebrow.replace('Malta — ', '')}</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-16">
                {c.services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/malta/${location}/${service.slug}`}
                    className="group p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-orange-500/50 transition-all"
                    data-testid={`link-service-${service.slug}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-bold mb-1">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.desc}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-orange-500 mt-1 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

          <div className="mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-600 mb-3">
              Industry × service guides
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Explore every restored guide for {c.hero.eyebrow.replace('Malta — ', '')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Choose an industry, then the service you need. These guides combine the local
              market conditions above with sector-specific commercial priorities and delivery.
            </p>
            <div className="space-y-5">
              {matrixCatalog.map((industry) => (
                <section
                  key={industry.slug}
                  className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5"
                >
                  <h3 className="font-bold text-lg mb-3">{industry.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {industry.services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/malta/${location}/${industry.slug}/${service.slug}`}
                        className="rounded-full border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-orange-500/60 hover:text-foreground"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to grow your business in {c.hero.eyebrow.replace('Malta — ', '')}?</h2>
            <p className="text-zinc-300 mb-6">OARC Digital — Malta&apos;s First Creative + AI Systems Agency. Month-to-month contracts. Senior team on every account.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors" data-testid="link-contact-cta">
              Start a Conversation
            </Link>
            <p className="text-zinc-500 text-sm mt-4">{NAP.email} · {NAP.phoneDisplay}</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
