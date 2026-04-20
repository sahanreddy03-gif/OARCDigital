"use client";

import { ArrowRight, Phone, Mail, CheckCircle } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

interface ServiceMeta {
  title: string;
  category: string;
}

interface IndustryMeta {
  name: string;
  plural: string;
}

interface ComboContent {
  intro: string;
  why: string[];
  deliverables: string[];
}

export const serviceMap: Record<string, ServiceMeta> = {
  "social-media-creative-management": { title: "Social Media Management", category: "Creative & Design" },
  "video-production": { title: "Video Production", category: "Creative & Design" },
  "branding-services": { title: "Brand Identity", category: "Creative & Design" },
  "ai-sdr-agent": { title: "AI Sales Agent", category: "AI Workforce Agents" },
  "ai-support-specialist": { title: "AI Customer Support", category: "AI Workforce Agents" },
  "marketing-automation-suite": { title: "Marketing Automation", category: "Growth Automation" },
  "web-design": { title: "Website Design", category: "Creative & Design" },
  "paid-advertising": { title: "Paid Advertising", category: "Creative & Design" },
};

export const industryMap: Record<string, IndustryMeta> = {
  restaurant: { name: "Restaurant", plural: "Restaurants" },
  hotel: { name: "Hotel", plural: "Hotels" },
  restaurants: { name: "Restaurant", plural: "Restaurants" },
  hotels: { name: "Hotel", plural: "Hotels" },
  cafes: { name: "Cafe", plural: "Cafes" },
  bars: { name: "Bar & Nightlife", plural: "Bars" },
  igaming: { name: "iGaming", plural: "iGaming Companies" },
  fintech: { name: "Fintech", plural: "Fintech Companies" },
  "real-estate": { name: "Real Estate", plural: "Real Estate Agencies" },
  retail: { name: "Retail", plural: "Retail Businesses" },
  fitness: { name: "Fitness", plural: "Fitness Businesses" },
  wellness: { name: "Wellness", plural: "Wellness Businesses" },
  events: { name: "Events", plural: "Event Companies" },
};

const comboOverrides: Record<string, ComboContent> = {
  "social-media-creative-management_restaurants": {
    intro: "Restaurants in Malta live and die by their social media presence. A beautifully plated dish, an authentic kitchen story, or a perfectly timed Reel can fill a restaurant for weeks. OARC Digital creates social media content that makes your restaurant impossible to scroll past.",
    why: [
      "Malta's restaurant scene is discovered on Instagram and TikTok first — your social media is your shop window",
      "Consistent, high-quality content builds trust with both locals and the 2.3M+ annual tourists visiting Malta",
      "We understand Malta's food culture, the Qormi-to-Valletta dining scene, and what content actually drives reservations",
    ],
    deliverables: [
      "Monthly content calendar with 20+ posts across Instagram and TikTok",
      "Professional food and atmosphere photography direction and captioning",
      "Weekly Stories and Reels optimised for Malta audience timing",
      "Monthly performance report with engagement, reach, and follower growth data",
    ],
  },
  "video-production_hotels": {
    intro: "A hotel's visual content is its most powerful sales tool. International guests choose hotels based on how they look online — professional video transforms browsers into bookers. OARC Digital produces cinematic hotel content that justifies premium pricing and drives direct bookings.",
    why: [
      "85% of travellers say video influences their accommodation choice — poor video means lost bookings",
      "Professional property video differentiates you from OTA competitors with the same listing photography",
      "Malta's Mediterranean light and architecture are cinematic assets — we know how to capture them",
    ],
    deliverables: [
      "Full property showcase video (2–3 minutes, suitable for website and YouTube)",
      "Room category videos for each tier (standard, superior, suite)",
      "6 social media cut-downs optimised for Instagram Reels and TikTok",
      "Aerial footage showcasing property location and Malta surroundings",
    ],
  },
  "ai-sdr-agent_igaming": {
    intro: "iGaming is one of the world's most competitive B2B sales environments. Operators, affiliates, and suppliers exchange dozens of contacts at every conference — the companies that follow up fast and at scale win the business. OARC's AI Sales Agent automates your outreach so you never miss a warm lead.",
    why: [
      "Speed-to-follow-up is the single biggest determinant of B2B iGaming deal conversion",
      "Manual outreach doesn't scale — you meet 200 people at SiGMA and can only follow up with 20",
      "AI-personalised outreach at scale gives you the conversational quality of manual outreach at 10x the volume",
    ],
    deliverables: [
      "AI Sales Agent configured for your iGaming product and ICP (operator/affiliate/supplier)",
      "Personalised outreach sequences for conference follow-ups and cold prospecting",
      "CRM integration for lead tracking and pipeline management",
      "Monthly performance report: contacts reached, response rate, meetings booked",
    ],
  },
  "marketing-automation-suite_fintech": {
    intro: "Fintech has the longest B2B sales cycles of any industry. Decision-makers evaluate multiple vendors over months before committing. Marketing automation ensures your brand stays top-of-mind through every stage of that cycle — without your team manually chasing every lead.",
    why: [
      "Fintech buyers conduct 70% of their research before speaking to a vendor — automation ensures you're visible throughout",
      "Multi-touch nurture sequences convert 3x more leads than single-touch outreach",
      "Automated qualification reduces time spent on prospects who will never buy, focusing your team on genuine opportunities",
    ],
    deliverables: [
      "Full lead nurture email sequence (8–12 touchpoints across 90 days)",
      "Lead scoring model integrated with your CRM",
      "Trigger-based automation for website behaviour, content downloads, and pricing page visits",
      "Monthly performance dashboard: open rates, click rates, MQL/SQL conversion rates",
    ],
  },
};

export function getComboContent(serviceSlug: string, industry: string, serviceMeta: ServiceMeta, industryMeta: IndustryMeta): ComboContent {
  const key = `${serviceSlug}_${industry}`;
  if (comboOverrides[key]) return comboOverrides[key];
  return {
    intro: `${serviceMeta.title} is one of the most effective growth tools available to ${industryMeta.plural.toLowerCase()} in Malta today. OARC Digital combines deep understanding of ${industryMeta.plural.toLowerCase()} with proven ${serviceMeta.title.toLowerCase()} expertise to deliver results that move the needle for your business.`,
    why: [
      `${industryMeta.plural} in Malta operate in a competitive market where the brands that invest in ${serviceMeta.title.toLowerCase()} consistently outperform those that don't`,
      `OARC Digital brings both technical ${serviceMeta.title.toLowerCase()} expertise and local Malta market knowledge — a combination you won't find elsewhere`,
      `We have a proven track record delivering measurable results for businesses in the ${industryMeta.name.toLowerCase()} sector`,
    ],
    deliverables: [
      `Custom ${serviceMeta.title.toLowerCase()} strategy tailored to your ${industryMeta.name.toLowerCase()} business and Malta market`,
      `Full implementation and management — you focus on your business, we handle the ${serviceMeta.title.toLowerCase()}`,
      `Regular reporting with clear metrics tied to your business goals`,
      `Dedicated account manager with experience in the ${industryMeta.name.toLowerCase()} sector`,
    ],
  };
}

export default function ServiceIndustryClient({ serviceSlug, industry }: { serviceSlug: string; industry: string }) {
  if (!serviceMap[serviceSlug] || !industryMap[industry]) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
            <Link href="/services">
              <Button>View All Services</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const service = serviceMap[serviceSlug];
  const ind = industryMap[industry];
  const content = getComboContent(serviceSlug, industry, service, ind);

  return (
    <Layout>
      <main className="min-h-screen">
        <section className="relative bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-950 text-white py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,145,77,0.08),transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-wrap items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <Link href={`/services/${serviceSlug}`} className="hover:text-white transition-colors">{service.title}</Link>
              <span>/</span>
              <Link href={`/industries/${industry}`} className="hover:text-white transition-colors">{ind.plural}</Link>
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <span className="text-orange-400 font-semibold uppercase tracking-wider text-xs">{service.category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {service.title} for <span style={{ color: "#ff914d" }}>{ind.plural}</span> in Malta
              </h1>
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">{content.intro}</p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/35679711799" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                    Book Free Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <a href="tel:+35679711799">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Phone className="mr-2 w-4 h-4" /> +356 7971 1799
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why {ind.plural} in Malta Need {service.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {content.why.map((reason, i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-card border hover:border-orange-500/30 transition-all">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(255,145,77,0.1)" }}>
                    <span className="font-bold text-sm" style={{ color: "#ff914d" }}>{i + 1}</span>
                  </div>
                  <p className="text-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              What We Deliver
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Specific, measurable outputs — not vague promises.
            </p>
            <div className="max-w-3xl mx-auto space-y-4">
              {content.deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-card border">
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Book a free 30-minute strategy call. We'll analyse your current {service.title.toLowerCase()} and show you exactly what we'd do differently.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/35679711799" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="font-bold">
                  WhatsApp Us Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="mailto:hello@oarcdigital.com">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  <Mail className="mr-2 w-4 h-4" /> hello@oarcdigital.com
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href={`/services/${serviceSlug}`}>
                <span className="px-4 py-2 rounded-full border border-border hover:border-orange-400 hover:text-orange-400 text-sm transition-all cursor-pointer">
                  ← All {service.title} Services
                </span>
              </Link>
              <Link href={`/industries/${industry}`}>
                <span className="px-4 py-2 rounded-full border border-border hover:border-orange-400 hover:text-orange-400 text-sm transition-all cursor-pointer">
                  ← All Services for {ind.plural}
                </span>
              </Link>
              <Link href="/industries">
                <span className="px-4 py-2 rounded-full border border-border hover:border-orange-400 hover:text-orange-400 text-sm transition-all cursor-pointer">
                  All Industries →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
