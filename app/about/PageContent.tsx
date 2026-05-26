"use client";

// /about — minimal, footer-style founder bio. Two purposes:
//   1. Person schema entity anchor (E-E-A-T signal for AI answer engines).
//   2. A discoverable About surface for prospects who type "[agency] about"
//      or "[agency] founder" — the page exists so that query has a real
//      destination instead of a 404.
// Founder visibility is intentionally low per Mr Reddy's preference: no
// hero photo of him, no homepage promotion, no quotes carved across other
// pages. Prose uses "Reddy" or "Mr Reddy"; the schema name is the full
// "Sahan Reddy" form so the LinkedIn entity resolves.

import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { buildPerson, buildOrganization } from "@/lib/schema";
import { NAP } from "@/lib/seo/nap";

export default function PageContent() {
  const personSchema = buildPerson();
  const orgSchema = buildOrganization();

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [personSchema, orgSchema],
          }),
        }}
      />

      <section className="relative bg-zinc-950 pt-24 md:pt-28 pb-16 text-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#c4ff4d] mb-4" data-testid="text-about-eyebrow">
            About OARC Digital
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            data-speakable
            data-testid="text-about-h1"
          >
            One studio. Three disciplines. Built in Birkirkara.
          </h1>
          <p className="text-lg text-white/70 leading-relaxed mb-4" data-speakable>
            OARC Digital was set up in Malta to do something most agencies
            don&apos;t: put creative, AI engineering, and growth automation under
            one roof. Most Malta brands stitch a brand designer, a Facebook
            ads freelancer, and a CRM consultant from three different cities.
            That stitching is where the work breaks.
          </p>
          <p className="text-base text-white/60 leading-relaxed">
            We work out of Level 1 of The Brewhouse in {NAP.addressLocality}
            &nbsp;CBD — a five-minute walk from Mriehel, ten from Mosta — so
            local clients can drop in for a Friday review instead of another
            video call.
          </p>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/5 py-16 text-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6" data-testid="text-about-principles-h2">
            How we work
          </h2>
          <ul className="space-y-4 text-white/70 leading-relaxed text-base">
            <li>
              <span className="text-white font-semibold">No template clones.</span>{" "}
              Every page, every brand, every automation is built from scratch
              for the client&apos;s actual market. We&apos;d rather ship a smaller
              campaign that works than a glossy one that doesn&apos;t.
            </li>
            <li>
              <span className="text-white font-semibold">AI is a tool, not a tagline.</span>{" "}
              Our AI agents handle real workloads (SDR outreach, support
              triage, appointment booking) inside HubSpot, Twilio, Cal.com.
              They&apos;re not chatbots in a marketing brochure.
            </li>
            <li>
              <span className="text-white font-semibold">We turn down work that doesn&apos;t fit.</span>{" "}
              E-commerce stores under €100K/year revenue, single-event campaigns,
              clients who want to brief monthly and never review weekly — the
              economics don&apos;t work for either side. We say so up front.
            </li>
            <li>
              <span className="text-white font-semibold">Local first.</span>{" "}
              Birkirkara, Sliema, Valletta, St Julians, Mosta, Gzira, Mellieha,
              Paola — we know the streets, the regulators (MGA, MFSA, MTA, MBR),
              and the seasonal rhythm of the island&apos;s sectors.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/5 py-16 text-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4" data-testid="text-about-founder-h2">
            Founder
          </h2>
          <p className="text-base text-white/70 leading-relaxed mb-3">
            Mr Reddy founded OARC Digital after a decade running creative,
            engineering, and growth teams across Asia and the EU. The thesis
            was simple: a Malta-based studio that does all three properly
            instead of one or another.
          </p>
          <p className="text-sm text-white/50 leading-relaxed">
            <Link
              href="https://www.linkedin.com/in/sahanoarcdigital"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
              data-testid="link-founder-linkedin"
            >
              LinkedIn →
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/5 py-16 text-white" data-testid="section-services">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-xl font-bold text-white mb-6">Services we deliver</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/seo-services" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover-elevate block" data-testid="link-about-seo">
              <div className="text-[#c4ff4d] font-bold text-xs tracking-widest uppercase mb-2">Organic</div>
              <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#c4ff4d] transition-colors">SEO Services</h3>
              <p className="text-sm text-white/60">Search visibility that compounds every month.</p>
            </Link>
            <Link href="/services/branding" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover-elevate block" data-testid="link-about-branding">
              <div className="text-[#c4ff4d] font-bold text-xs tracking-widest uppercase mb-2">Identity</div>
              <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#c4ff4d] transition-colors">Branding & Identity</h3>
              <p className="text-sm text-white/60">Brand systems that position you as the clear choice.</p>
            </Link>
            <Link href="/services/ai-consulting" className="group bg-white/5 border border-white/10 rounded-xl p-5 hover-elevate block" data-testid="link-about-ai-consulting">
              <div className="text-[#c4ff4d] font-bold text-xs tracking-widest uppercase mb-2">AI</div>
              <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#c4ff4d] transition-colors">AI Consulting</h3>
              <p className="text-sm text-white/60">AI implementation designed around your business model.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/5 py-12 text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-sm text-white/50 mb-4">Visit the studio or get in touch:</p>
          <address className="not-italic text-base text-white/70 leading-relaxed mb-4">
            Level 1, The Brewhouse,<br />
            Zone 2, Central Business District,<br />
            Mdina Road, {NAP.addressLocality} {NAP.postalCode}, Malta
          </address>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${NAP.phoneE164}`}
              className="text-[#c4ff4d] hover:underline"
              data-testid="link-about-phone"
            >
              {NAP.phoneDisplay}
            </a>
            <span className="text-white/30 hidden sm:inline">·</span>
            <a
              href={`mailto:${NAP.email}`}
              className="text-[#c4ff4d] hover:underline"
              data-testid="link-about-email"
            >
              {NAP.email}
            </a>
            <span className="text-white/30 hidden sm:inline">·</span>
            <Link
              href="/contact"
              className="text-white/80 hover:text-white underline"
              data-testid="link-about-contact"
            >
              Contact page
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
