import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { NAP } from "@/lib/seo/nap";

export default function PjazzaLiveVideoMalta() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "PJAZZA — Malta's First Live Video Marketplace",
    "description": "PJAZZA is Malta's first live video marketplace. Businesses go live, customers discover and buy in real time. Launching May 2026.",
    "author": { "@type": "Organization", "name": "OARC Digital" },
    "publisher": { "@type": "Organization", "name": "OARC Digital", "url": "https://oarcdigital.com" },
    "datePublished": "2026-04-17",
    "url": "https://oarcdigital.com/blog/pjazza-live-video-marketplace-malta"
  };

  return (
    <Layout>
      

      <div className="min-h-screen bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 py-20">

          <div className="mb-4 text-sm text-green-400 font-medium uppercase tracking-wider">
            OARC Digital — April 2026
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            PJAZZA — Malta's First Live Video Marketplace
          </h1>

          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            Malta is getting its first live video marketplace. PJAZZA lets businesses broadcast live to showcase their products, menus, and experiences — while customers discover them and buy in real time.
          </p>

          <div className="prose prose-invert max-w-none space-y-8">

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What is PJAZZA?</h2>
              <p className="text-gray-300 leading-relaxed">
                Think QVC meets Instagram Live, built specifically for Malta. A restaurant goes live during lunch to show today's specials. A boutique showcases new arrivals. A hotel gives a live tour of their renovated rooms. Customers anywhere watch, ask questions, and buy — instantly.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                No app download. No setup for the customer. Just live video and real-time commerce.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Why Malta Needs This</h2>
              <p className="text-gray-300 leading-relaxed">
                Malta has over 3,300 restaurants and hospitality venues, a booming retail sector, and 2.3 million annual tourists. Yet most businesses rely on static photos and occasional posts to reach customers.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                PJAZZA changes that — giving every business a live, real-time channel to drive footfall, reservations, and direct sales. No middlemen. No algorithms. Just your business, live.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Industries We're Onboarding</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3"><span className="text-green-400 mt-1">→</span><span><strong className="text-white">Hospitality</strong> — restaurants, cafes, bars, hotels</span></li>
                <li className="flex items-start gap-3"><span className="text-green-400 mt-1">→</span><span><strong className="text-white">Retail</strong> — boutiques, electronics, lifestyle</span></li>
                <li className="flex items-start gap-3"><span className="text-green-400 mt-1">→</span><span><strong className="text-white">Real Estate</strong> — live property tours</span></li>
                <li className="flex items-start gap-3"><span className="text-green-400 mt-1">→</span><span><strong className="text-white">Events</strong> — live previews, ticket sales</span></li>
                <li className="flex items-start gap-3"><span className="text-green-400 mt-1">→</span><span><strong className="text-white">Services</strong> — any business with something to show</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Launching May 2026</h2>
              <p className="text-gray-300 leading-relaxed">
                PJAZZA launches in May 2026, timed to the Malta EU Presidency Summit — maximum visibility at exactly the right moment. The first 200 businesses to join get free onboarding and 6 months of featured placement on the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">OARC Digital & PJAZZA</h2>
              <p className="text-gray-300 leading-relaxed">
                OARC Digital clients automatically get access to PJAZZA as part of their service package. We handle the content, the live strategy, and the production. Your business gets the visibility and the sales.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Whether you're already an OARC client or looking to get started — PJAZZA is the fastest way to put your business in front of live, buying customers in Malta.
              </p>
            </section>

            <div className="mt-12 p-8 rounded-2xl border border-green-500/20 bg-green-500/5">
              <h3 className="text-xl font-bold text-white mb-3">Want early access?</h3>
              <p className="text-gray-300 mb-6">Contact us directly. First 200 businesses get free onboarding + 6 months featured placement.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${NAP.phoneE164}`}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-black transition-all"
                  style={{ backgroundColor: '#22c55e' }}
                >
                  Call {NAP.phoneDisplay}
                </a>
                <a
                  href={`mailto:${NAP.email}`}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-green-400 border border-green-500/30 hover:border-green-500 transition-all"
                >
                  {NAP.email}
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <Link href="/services" className="text-green-400 hover:text-green-300 transition-colors">
                ← See all OARC Digital services
              </Link>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
