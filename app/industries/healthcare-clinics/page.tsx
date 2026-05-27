import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Brain, Workflow, Building2, Stethoscope, ShieldCheck, Calendar, Heart, FileText } from "lucide-react";
import RelatedLinks from "@/components/RelatedLinks";
import TrustBlock from "@/components/seo/TrustBlock";
import { IMAGE_REGISTRY } from "@/lib/images/registry";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const HERO_IMAGE_ID = "img-005";
const heroEntry = IMAGE_REGISTRY.find((e) => e.id === HERO_IMAGE_ID);
if (!heroEntry) {
  throw new Error(`/industries/healthcare-clinics hero image ${HERO_IMAGE_ID} missing from IMAGE_REGISTRY`);
}
const heroImage = `/images/registry/${heroEntry.seoFilename}.webp`;
const heroImageAlt = heroEntry.altText;

const CANONICAL = "https://oarcdigital.com/industries/healthcare-clinics";
const LAST_UPDATED = "2026-05-11";
const LAST_UPDATED_DISPLAY = "11 May 2026";

const TITLE = "Healthcare Clinic Marketing in Malta | Compliant Patient Acquisition";
const DESCRIPTION = "The full marketing stack for Malta private clinics, dental practices, specialist consultants and aesthetic medicine — Medicines Authority-aware creative, patient-first web with PMS-integrated booking, recall automation, practitioner content, and the AI Appointment Booker for 24/7 enquiry handling.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })],
    card: "summary_large_image",
    title: TITLE,
    description: "Medicines Authority-aware creative, patient-first web, recall automation, practitioner content and the AI Appointment Booker — built for Malta private clinics.",
  },
};

type ServiceBlock = { slug: string; title: string; blurb: string; icon: typeof Brain; detail: string };

const services: ServiceBlock[] = [
  {
    slug: "ai-appointment-booker",
    title: "AI Appointment Booker for Clinics",
    blurb: "An after-hours patient enquiry agent reading every WhatsApp, web-chat, Instagram DM and website form — capturing the patient at the moment of intent, qualifying against your appointment types, and handing a structured booking brief to reception in the morning.",
    icon: Brain,
    detail: "Most Malta clinic enquiries arrive outside surgery hours — Sunday afternoons, weekday evenings, the half-hour before a school run. By the time reception opens at 09:00, the patient has already booked with whichever clinic answered first. Our AI Appointment Booker reads inbound enquiries 24/7 across WhatsApp Business, web chat, Instagram and the website form, qualifies against your published appointment types and practitioner availability, and either confirms a slot directly into your PMS (Dentally, EXACT, Cliniko, in-house) or hands a structured booking brief to reception inside two minutes. Clinical questions are never answered — anything that strays into clinical territory is escalated immediately to a named clinician.",
  },
  {
    slug: "web-design",
    title: "Patient-First Web with PMS-Integrated Booking",
    blurb: "Conversion-focused clinic websites with treatment pages written in plain English, transparent pricing where compliant, online booking integrated to your practice management system, and the Medicines Authority-required content properly designed in — not bolted on.",
    icon: Building2,
    detail: "A typical Malta clinic website was built five years ago by a friend of a friend and has not been touched since. Treatment pages are thin, pricing is hidden, the online booking either does not exist or pushes patients to a third-party form that breaks every six months. We rebuild the site against the actual patient journey — clear treatment pages with named practitioners, transparent pricing where the regulator permits, online booking integrated directly to Dentally, EXACT, Cliniko or your in-house PMS, and the Medicines Authority-required content (prescriber identification, regulated-product disclosures, complaints procedure) designed into the IA from day one.",
  },
  {
    slug: "social-media-creative-management",
    title: "Practitioner-Led Educational Content",
    blurb: "A weekly practitioner-led content cadence on Instagram, TikTok and YouTube Shorts — clinical educators talking patient questions in plain English, never in marketing language — that builds clinical authority without breaching Maltese or EU healthcare advertising rules.",
    icon: Heart,
    detail: "Healthcare social content fails most often because it is written by a marketing team rather than the clinical team. The fix is to put the practitioner in front of the camera weekly, talking real patient questions in plain English — &ldquo;what to expect at your first consultation&rdquo;, &ldquo;why we don&apos;t recommend X for patients with Y&rdquo;, &ldquo;the difference between treatment A and treatment B&rdquo;. We produce a weekly practitioner-led content block from a single in-clinic shoot, edit for Instagram, TikTok and YouTube Shorts, and run every piece through compliance review before publish.",
  },
  {
    slug: "marketing-automation-suite",
    title: "Recall, No-Show & Post-Treatment Automation",
    blurb: "PMS-connected automation that handles six-month dental recalls, six-week post-procedure follow-ups, no-show reduction reminders, and the structured re-engagement sequence for patients who have not visited in eighteen months.",
    icon: Workflow,
    detail: "Most Malta clinics do recall by hand on Tuesday afternoons — a receptionist working through a printed list, calling patients one at a time, with no reliable way to know which calls landed and which went to voicemail. We connect Dentally, EXACT, Cliniko or the in-house PMS to a recall automation layer that runs the six-month dental recall, the six-week post-procedure follow-up, the SMS no-show reduction reminder 24 hours before the appointment, and the structured re-engagement sequence at month 18. IDPC consent is logged at every step. Every clinical message routes through a clinician for sign-off before going live.",
  },
  {
    slug: "paid-advertising",
    title: "Compliant Local Paid Acquisition",
    blurb: "Hyper-local Google Search and Meta campaigns reviewed against Medicines Authority advertising standards, the European Medical Devices Regulation where applicable, and the relevant professional-body guidance — measured in qualified consultations, not impressions.",
    icon: Stethoscope,
    detail: "Healthcare paid acquisition in Malta sits inside a tight compliance perimeter — the Medicines Authority&apos;s advertising rules, the European Medical Devices Regulation for relevant categories, the Maltese Medical Council and Dental Council guidance, and (for cross-border patients) EU patient-mobility considerations. We design every campaign within those rules, never write copy that promises medical outcomes, and route every creative through a clinical reviewer before publish. Spend reports in qualified consultations and converted treatment plans, not impressions or reach. Aesthetic medicine and injectable treatments carry a separate, stricter compliance layer.",
  },
  {
    slug: "branding",
    title: "Calm Clinical Brand Systems",
    blurb: "Brand identity work that reads correctly on signage, on a prescription pad, on a six-page treatment-plan PDF, on a digital booking confirmation and on a regulator inspection report — without slipping into wellness-spa visual language that undermines clinical authority.",
    icon: ShieldCheck,
    detail: "A clinic brand has to balance two competing signals — warmth and clinical authority. Lean too far into one and the brand reads either as a wellness spa (and patients quietly question the clinical credentials) or as a hospital wing (and patients are uncomfortable making a private appointment). We build brand systems that hold both signals — calm typography, clinical-grade colour discipline, photography that shows real practitioners and real environments — and ship a brand-system guide that covers the full asset set: signage, prescription stationery, treatment-plan PDFs, digital booking confirmations and regulator-facing documents.",
  },
];

const segments = [
  { market: "General Dental Practices", detail: "The largest single segment of Malta private healthcare marketing demand. Recall is the single highest-ROI automation. Aesthetic dentistry (whitening, Invisalign, veneers) carries a separate compliance layer and a separate paid programme." },
  { market: "Specialist Consultants & Day Surgery", detail: "Cardiology, gynaecology, orthopaedics, gastroenterology, dermatology and the day-surgery clinics serving them. Buying decisions are part GP-referral, part direct-to-patient. Practitioner content and clinical-authority signal carry the most weight in the patient&apos;s research moment." },
  { market: "Aesthetic Medicine & Med Spas", detail: "Injectables, laser, cosmetic dermatology and prescription-grade aesthetic treatments. Tightest compliance perimeter in the vertical — every claim and every before/after carries Medicines Authority and professional-body scrutiny. Marketing only works inside a documented pre-clearance process." },
  { market: "Allied Health & Physiotherapy", detail: "Physiotherapy, podiatry, dietetics, speech-and-language and counselling practices. Recall and post-treatment follow-up are weaker by default than the dental segment but the marginal patient lifetime value is high. CRM is the highest-leverage rebuild." },
  { market: "Multi-Disciplinary Polyclinics", detail: "The integrated private clinic model — primary care, diagnostics, day surgery, allied health under one roof. Marketing programme runs as a portfolio rather than a single brand, with per-discipline content cadences and shared infrastructure (PMS-integrated booking, AI Appointment Booker, group-level brand)." },
];

const painPoints = [
  { icon: Calendar, title: "After-hours patient enquiries lost to whoever answers first", detail: "Most patient enquiries arrive outside surgery hours — Sunday afternoons, weekday evenings, the half-hour before a school run. Without an AI capture layer, reception catches up the next morning and 30–45% of weekly enquiries have already gone to whichever clinic answered the WhatsApp first. The fix is not &lsquo;reply faster&rsquo; — it is a 24/7 capture layer that confirms a slot directly into the PMS or hands a structured brief to reception by 09:00." },
  { icon: ShieldCheck, title: "Compliance fear blocking any digital activity", detail: "Most Malta clinics either avoid social and paid advertising entirely (and lose the discovery moment to less-cautious competitors) or run activity without a documented pre-clearance process (and accumulate Medicines Authority and professional-body risk). The middle path — a structured pre-clearance template, clinical reviewer in the weekly creative standup, and a documented compliance log per asset — is the single highest-impact process change in most clinic engagements." },
  { icon: FileText, title: "Recall done by hand on Tuesday afternoons", detail: "Six-month dental recall, six-week post-procedure follow-up, eighteen-month re-engagement — most Malta clinics run all three by hand from a printed PMS export, with no reliable way to know which calls landed and which went to voicemail. PMS-integrated automation typically lifts recall conversion by 18–32% inside ninety days, with every clinical message routed through a clinician for sign-off." },
  { icon: Building2, title: "A website built five years ago and never touched", detail: "A clinic website built before the practice doubled in size, before two new specialists joined, before the PMS was upgraded and before online booking became the default patient expectation. Thin treatment pages, hidden pricing, broken booking forms and a mobile experience that breaks below 375px width. The website rebuild against a real patient journey is one of the highest-ROI projects in the vertical." },
];

const stats = [
  { metric: "30–45%", label: "of weekly patient enquiries", note: "lost to slow after-hours response" },
  { metric: "18–32%", label: "recall conversion lift", note: "from PMS-integrated automation in 90 days" },
  { metric: "24h", label: "compliance pre-clearance", note: "median turnaround on creative review" },
  { metric: "5 lang", label: "supported by the AI Appointment Booker", note: "EN, MT, IT, DE, FR" },
];

const faqs = [
  { q: "Is it legal to advertise a private clinic in Malta?", a: "Yes — within the Medicines Authority advertising rules, the European Medical Devices Regulation where applicable, and the relevant professional-body guidance (Medical Council of Malta, Dental Council of Malta and equivalents for allied health). We work alongside your clinical team on every claim and never write copy that promises medical outcomes. Aesthetic and injectable treatments carry a separate, stricter compliance layer with documented pre-clearance per asset." },
  { q: "Do you understand Medicines Authority advertising rules in detail?", a: "Yes. Every piece of patient-facing creative goes through a structured pre-clearance template that maps the asset against the applicable Medicines Authority guidance, the relevant professional-body code, and (for prescription-grade aesthetic medicine) the additional EU promotional rules. We keep a documented compliance log per asset so the regulator-facing audit trail is always on file." },
  { q: "Can the AI Appointment Booker integrate with our practice management system?", a: "Yes — Dentally, EXACT, Cliniko, Pabau, NextGen Dental and most major in-house PMS deployments. The agent confirms a slot directly into the PMS where the integration permits and hands a structured booking brief to reception where it does not. Clinical questions are never answered — anything that strays into clinical territory escalates immediately to a named clinician." },
  { q: "How do you handle patient data and IDPC consent?", a: "IDPC compliance is treated as a first-class part of every CRM and automation design we ship. Every webform, every booking confirmation, every recall communication logs a documented lawful basis. Patient identifiers are minimised in every channel that does not strictly require them, and we run a quarterly subject-access-request workflow review with your data protection officer." },
  { q: "What languages does the AI Appointment Booker handle?", a: "English, Maltese, Italian, German and French on a sustained production cadence; Spanish, Portuguese, Polish and Dutch at machine-translation grade with native fall-back review on escalations. The five primary languages cover the bulk of after-hours patient enquiry traffic, including resident expats and the cross-border patients who travel to Malta for specific specialist treatments." },
  { q: "Can you produce practitioner-led video content at our clinic?", a: "Yes. A single in-clinic shoot day with the practitioner team produces enough creative — short-form practitioner explainers, treatment walkthroughs, FAQ replies — to feed Instagram, TikTok and YouTube Shorts for six-to-eight weeks. Every piece runs through compliance review before publish. We also coordinate written informed consent for any patient-facing footage that includes a named patient." },
  { q: "What budgets are realistic for a clinic engagement?", a: "Single-practitioner practices typically commit €1.8k–€3.5k per month for the GBP, web and content basics plus the AI Appointment Booker. Mid-sized clinics (four-to-eight practitioners) are €3.5k–€7k per month with full recall automation and paid acquisition layered in. Multi-site clinic groups and polyclinics are quoted on a per-site baseline plus a group-level retainer for shared infrastructure." },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "@id": `${CANONICAL}#breadcrumbs`, itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://oarcdigital.com/" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://oarcdigital.com/industries" },
      { "@type": "ListItem", position: 3, name: "Healthcare Clinics", item: CANONICAL },
    ] },
    { "@type": "CollectionPage", "@id": `${CANONICAL}#collection`, url: CANONICAL, name: "Healthcare Clinic Marketing in Malta", description: DESCRIPTION, inLanguage: "en-MT", isPartOf: { "@type": "WebSite", "@id": "https://oarcdigital.com/#website" }, dateModified: LAST_UPDATED, about: { "@type": "Thing", name: "Healthcare clinic marketing in Malta" }, mainEntity: { "@id": `${CANONICAL}#services-list` } },
    { "@type": "ItemList", "@id": `${CANONICAL}#services-list`, name: "Healthcare Marketing Services for Malta Clinics", numberOfItems: services.length, itemListOrder: "https://schema.org/ItemListOrderAscending", itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, url: `https://oarcdigital.com/services/${s.slug}`, name: s.title })) },
    { "@type": "FAQPage", "@id": `${CANONICAL}#faq`, mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "ImageObject", "@id": `${CANONICAL}#case-study-image`, url: "https://oarcdigital.com/attached_assets/Untitled_design_(96)_1779836586705.png", name: "Malta healthcare clinic digital marketing results — OARC Digital patient acquisition and AI automation", description: "OARC Digital patient acquisition, AI appointment booker, and recall automation results for Malta private clinics and dental practices.", width: 1080, height: 1080, contentUrl: "https://oarcdigital.com/attached_assets/Untitled_design_(96)_1779836586705.png" },
  ],
};

export default function HealthcareClinicsMaltaIndustryHub() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

        <section className="relative min-h-[65vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImage} alt={heroImageAlt} className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 py-20 w-full">
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors" data-testid="link-breadcrumb-home">Home</Link>
              <span>/</span>
              <Link href="/industries" className="hover:text-white transition-colors" data-testid="link-breadcrumb-industries">Industries</Link>
              <span>/</span>
              <span className="text-white">Healthcare Clinics</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30">
                <MapPin className="w-3 h-3 text-orange-400" />
                <span className="text-orange-300 text-xs font-semibold uppercase tracking-wider">Malta Industry Hub</span>
              </div>
              <time dateTime={LAST_UPDATED} className="text-xs text-white/60" data-testid="text-last-updated">Last updated: {LAST_UPDATED_DISPLAY}</time>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" data-speakable>Healthcare Clinic Marketing in Malta</h1>
            <p className="text-xl text-white/85 mb-8 max-w-2xl leading-relaxed" data-speakable>
              The full marketing stack for Malta private clinics, dental practices, specialist consultants and aesthetic medicine — Medicines Authority-aware creative, patient-first web with PMS-integrated booking, recall automation, practitioner-led content, and the AI Appointment Booker for 24/7 enquiry handling.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" data-testid="link-cta-strategy-call">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold">Book a strategy call <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </Link>
              <Link href="/services/ai-appointment-booker" data-testid="link-cta-ai-agent">
                <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20">See the AI Appointment Booker</Button>
              </Link>
            </div>
          </div>
        </section>

        <div className="bg-zinc-950 flex justify-center py-6 px-4" data-testid="section-clinic-case-study">
          <img
            src="/attached_assets/Untitled_design_(96)_1779836586705.png"
            alt="Malta healthcare clinic reduced no-show rate from 28% to 4% in 6 weeks using OARC Digital automated patient flow — waitlist filled released slots within minutes | OARC Digital"
            width={1080}
            height={1080}
            className="w-full max-w-xl rounded-xl shadow-2xl"
            data-testid="img-clinic-case-study"
          />
        </div>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16 space-y-16">
          <section>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-500 text-xs font-semibold uppercase tracking-wider">Industry Hub</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">A hub, not a single product page — six services for the full Malta clinic stack</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              This page is the broader industry hub for Malta private healthcare. It is intentionally separate from <Link href="/services/ai-appointment-booker" className="text-orange-600 underline">the AI Appointment Booker product page</Link>, which goes deep on a single flagship product. Here we cover the full stack a Malta clinic — single-practitioner, mid-sized practice, multi-site group or integrated polyclinic — needs in 2026: Medicines Authority-aware compliant creative, patient-first web with PMS-integrated booking, practitioner-led educational content, recall and post-treatment automation, calm clinical brand systems, and the AI Appointment Booker that captures the after-hours enquiry the moment it lands.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Most clinics do not need all six on day one. The honest sequence we recommend in the first call is usually: stand up the AI Appointment Booker first (highest immediate ROI from recovered after-hours enquiries), rebuild the website against a real patient journey, then layer the recall automation, the practitioner content cadence and the paid acquisition programme as the team has bandwidth to absorb them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">A small market with a tightly regulated perimeter and a globally mobile patient pool</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Malta&apos;s private healthcare market sits inside a layered regulatory perimeter — the Medicines Authority for advertising of medicinal products and prescription-grade aesthetic treatments, the European Medical Devices Regulation for relevant device categories, the Medical Council of Malta and the Dental Council of Malta for practitioner conduct, and the Information and Data Protection Commissioner for patient data handling. Every marketing decision a Malta clinic makes passes through that perimeter, whether the team realises it or not.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The patient pool is more diverse than the population alone suggests. Resident Maltese patients form the core; the resident expat population (UK, Italian, German, French, Scandinavian) is a substantial second segment with a strong preference for English-speaking practitioners and online booking; cross-border medical-tourism patients travel to Malta for specific specialist treatments (dental, fertility, ophthalmology, aesthetic) on cycles measured in months rather than days. The marketing infrastructure has to assume all three audiences, multi-language content (English, Maltese, Italian, German), and a patient research moment that frequently happens at 22:00 on a Sunday.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              The competitive picture inside the perimeter is genuinely concentrated. Most clinical specialties have between four and twelve practising consultants in the country, and the patient&apos;s research path almost always touches Google Maps, the practitioner&apos;s LinkedIn, the clinic&apos;s GBP photo set and the clinic&apos;s reviews before a consultation request lands. Practices that have not refreshed any of those four signals in the past twelve months are quietly losing the discovery moment to whichever competitor refreshed last.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Where Malta clinics leak appointments every week</h2>
            <div className="space-y-4">
              {painPoints.map((p, i) => (
                <div key={i} className="p-6 rounded-xl bg-card border flex items-start gap-5">
                  <div className="w-11 h-11 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-zinc-950 text-white rounded-2xl p-10">
            <h2 className="text-2xl font-bold mb-8 text-center">The Malta Private Clinic in Numbers</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((r, i) => (
                <div key={i} className="text-center p-6 rounded-xl border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">{r.metric}</div>
                  <div className="text-white font-medium mb-1 text-sm">{r.label}</div>
                  <div className="text-zinc-500 text-xs">{r.note}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Six services for Malta clinics — each linking deeper</h2>
            <p className="text-muted-foreground mb-8">Every block below is its own dedicated service page with its own scope, pricing logic and case examples. Most clinics start with the AI Appointment Booker and the website rebuild and add the others as the team has bandwidth to absorb them.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {services.map((s) => (
                <Link href={`/services/${s.slug}`} key={s.slug} className="block p-6 rounded-xl bg-card border hover:border-orange-400 transition-colors group" data-testid={`link-service-${s.slug}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                      <s.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 group-hover:text-orange-600 transition-colors">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.blurb}</p>
                      <span className="text-xs text-orange-500 font-medium mt-2 inline-block">Read the full service page <ArrowRight className="inline w-3 h-3 ml-0.5" /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="space-y-6">
              {services.map((s) => (
                <div key={`detail-${s.slug}`} className="border-l-2 border-orange-500/30 pl-5">
                  <h3 className="font-bold mb-2">{s.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-2">{s.detail}</p>
                  <Link href={`/services/${s.slug}`} className="text-xs text-orange-600 hover:text-orange-700 font-medium">Full {s.title.toLowerCase()} page <ArrowRight className="inline w-3 h-3 ml-0.5" /></Link>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Five Clinical Segments We Actually Serve</h2>
            <p className="text-muted-foreground mb-6">Each segment carries a different compliance perimeter, a different patient buying journey and a different content cadence. A single &ldquo;healthcare retainer&rdquo; that ignores the differences between general dental and aesthetic medicine delivers value to neither.</p>
            <div className="space-y-3">
              {segments.map((s, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border flex items-start gap-4 flex-wrap md:flex-nowrap">
                  <span className="font-bold text-orange-600 text-sm md:w-56 flex-shrink-0">{s.market}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
            <div className="flex items-start gap-3 mb-3">
              <Brain className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
              <h2 className="text-xl font-bold">AI Appointment Booker — closing the after-hours enquiry gap inside the compliance perimeter</h2>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              Patient enquiries arrive at 22:30 on a Sunday in a WhatsApp message in Italian. By the time reception opens at 09:00 on Monday, the patient has booked with whichever clinic answered first. The OARC AI Appointment Booker reads inbound enquiries 24/7 across WhatsApp Business, web chat, Instagram and the website form, qualifies against your published appointment types and practitioner availability, and either confirms a slot directly into your PMS (Dentally, EXACT, Cliniko, Pabau, in-house) or hands a structured booking brief to reception inside two minutes.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              Clinical questions are never answered. Anything that strays into clinical territory — symptom description, medication query, urgent presentation — escalates immediately to a named clinician with the conversation transcript already attached. IDPC consent is logged at the start of every conversation. The agent works in English, Maltese, Italian, German and French on a sustained cadence and falls back to native review for escalations in other languages.
            </p>
            <Link href="/services/ai-appointment-booker" className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors text-sm">
              Full AI Appointment Booker product page <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">How a Clinic Programme Typically Rolls Out</h2>
            <p className="text-muted-foreground mb-6">A realistic ninety-day shape for a mid-sized Malta practice with four-to-eight practitioners and an established PMS install. Single-practitioner practices compress the early weeks; multi-site groups stretch them across the portfolio.</p>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Weeks 1–2 — Compliance and patient-journey audit</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">We audit the existing creative output against Medicines Authority guidance, the relevant professional-body codes and the EU Medical Devices Regulation where applicable. We map the actual patient journey from search through booking through follow-up. Output is a written prioritised plan, a structured pre-clearance template, and a documented compliance log per asset.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Weeks 3–6 — AI Appointment Booker live and website rebuild</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">AI Appointment Booker connected to your PMS, listening across WhatsApp, web chat, Instagram and the website form. Two weeks in shadow mode against reception, then live in production with clinician escalation paths in place. Website rebuild against the patient journey, with PMS-integrated booking and Medicines Authority-required content properly designed in.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Weeks 7–10 — Recall automation and practitioner content</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">PMS-connected automation built for the six-month dental recall (or specialty equivalent), six-week post-procedure follow-up, no-show reduction reminders and eighteen-month re-engagement. Every clinical message routes through a clinician for sign-off. First in-clinic shoot day produces six-to-eight weeks of practitioner-led content for Instagram, TikTok and YouTube Shorts.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Weeks 11–13 — Compliant paid acquisition and reporting</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Hyper-local Google Search and Meta campaigns go live with documented compliance pre-clearance per asset. Spend reports in qualified consultations and converted treatment plans. Reporting consolidates after-hours enquiry capture, recall conversion, content reach and paid acquisition into a single principal view.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Month 4 onward — Steady-state retainer with quarterly compliance review</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Programme settles into a steady-state retainer with monthly practitioner content, sustained recall optimisation, ongoing AI Appointment Booker tuning, and a quarterly compliance review with the clinical lead. The principal gets a one-page written summary every month, not a fifty-slide PDF.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What We Will Not Do for a Clinic Client</h2>
            <p className="text-muted-foreground mb-6">A short, honest list. We share this on the first call so there are no surprises later.</p>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li className="p-4 rounded-xl bg-card border"><strong>We do not write copy that promises medical outcomes.</strong> No guarantee language, no &ldquo;cure&rdquo; phrasing, no implied clinical results in marketing copy. Every claim is reviewed against Medicines Authority guidance and the relevant professional-body code before publish.</li>
              <li className="p-4 rounded-xl bg-card border"><strong>We do not run aesthetic or injectable creative without documented pre-clearance.</strong> Every asset in the prescription-grade aesthetic medicine space carries a clinical reviewer signature in the campaign log. No exceptions.</li>
              <li className="p-4 rounded-xl bg-card border"><strong>We do not let the AI Appointment Booker answer clinical questions.</strong> Symptom description, medication queries and urgent presentations escalate immediately to a named clinician. The agent confirms slots and qualifies appointment types — it does not provide clinical advice.</li>
              <li className="p-4 rounded-xl bg-card border"><strong>We do not publish patient images or testimonials without informed consent.</strong> Every named-patient piece carries a signed informed consent on file, with a clear right to withdraw documented in the consent itself.</li>
              <li className="p-4 rounded-xl bg-card border"><strong>We do not lock clinics into 24-month contracts.</strong> Standard term is rolling monthly after the first ninety days. The retainer renews because it is working, not because of the paperwork.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border">
                  <h3 className="font-bold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital</h2>
            <TrustBlock variant="visit" />
          </section>

          <RelatedLinks slug="/industries/healthcare-clinics" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Book a Free Clinic Marketing Audit</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              We will review your compliance pre-clearance picture, your after-hours enquiry capture, your PMS-integrated booking flow and your recall conversion — and send you a written, prioritised action plan within five working days.
            </p>
            <Link href="/contact" data-testid="link-cta-audit">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Book the audit <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
