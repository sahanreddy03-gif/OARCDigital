import { useEffect } from "react";
import { Link } from "wouter";
import { Mail, TrendingUp, Zap, Users, BarChart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

export default function EmailCreative() {
  useEffect(() => {
    document.title = "Email Creative Services - High-Converting Email Design | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Email templates, campaign design, and newsletter layouts that drive clicks and conversions. Mobile-responsive, tested across all email clients.");
    }
    // Open Graph tags - always update content
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Email Creative Services - Emails That Convert | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'Email design and templates that drive opens, clicks, and conversions. Tested across all devices and clients.');
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[hsl(25,85%,55%)] via-[hsl(35,80%,60%)] to-[hsl(45,85%,65%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Emails that <span className="italic">actually get clicked</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Email templates, campaign design, and newsletter layouts engineered for maximum opens, clicks, and conversions. Mobile-responsive and tested across every client.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(25,85%,55%)]" data-testid="button-get-started">
              Design My Emails
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white" data-testid="button-view-templates">
              View Templates
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Designing emails for high-growth brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['E-commerce', 'SaaS Companies', 'Media & Publishing', 'B2B Services', 'DTC Brands', 'Non-Profits'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-[hsl(25,85%,55%)] mb-4">PROVEN PERFORMANCE</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Beautiful design. <span className="italic text-[hsl(45,85%,65%)]">Better results.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Great email design isn't just pretty—it's strategic. We optimize every element for opens, clicks, and conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { value: "52%", label: "Average open rate improvement" },
              { value: "3.8x", label: "Higher click-through vs industry average" },
              { value: "8,200+", label: "Email campaigns designed annually" },
              { value: "100%", label: "Tested across all major email clients" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-[hsl(25,10%,98%)] rounded-xl" data-testid={`metric-${i}`}>
                <div className="text-5xl font-bold text-[hsl(25,85%,55%)] mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Services */}
      <section className="py-20 bg-[hsl(25,10%,98%)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[hsl(25,85%,55%)] mb-4">EMAIL DESIGN SERVICES</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Every campaign. <span className="italic text-[hsl(45,85%,65%)]">Every inbox.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "Campaign Emails", desc: "Promotional emails, product launches, seasonal campaigns, flash sales. Attention-grabbing design, clear CTAs, optimized for mobile. A/B test-ready variants.", icon: Zap },
              { name: "Newsletter Design", desc: "Weekly/monthly newsletter templates. Content-first layouts, consistent branding, easy-to-scan sections. Drag-and-drop friendly for ongoing use.", icon: Mail },
              { name: "Welcome & Onboarding Flows", desc: "Multi-email sequences that nurture new subscribers. Welcome series, product education, feature tours. Timed drips optimized for engagement.", icon: Users },
              { name: "Transactional Emails", desc: "Order confirmations, shipping updates, receipts, password resets. Functional yet branded. Upsell opportunities without being pushy.", icon: BarChart },
              { name: "Abandoned Cart Emails", desc: "Win back lost sales with strategic reminder emails. Product images, urgency triggers, discount codes. Timed sequences (1hr, 24hr, 3 days).", icon: TrendingUp },
              { name: "Email Template Systems", desc: "Modular template libraries for in-house teams. Drag-and-drop builders, reusable components, brand guidelines. Works with Mailchimp, Klaviyo, HubSpot, etc.", icon: Eye },
            ].map((service, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-service-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div className="relative h-[300px] md:h-[350px] bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100 overflow-hidden flex items-center justify-center">
                    <service.icon className="h-24 w-24 text-[hsl(25,85%,55%)]/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[hsl(25,85%,55%)] to-[hsl(45,85%,65%)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to boost email performance?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's design emails that get opened, clicked, and drive real revenue for your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(25,85%,55%)]" data-testid="button-cta-primary">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white" data-testid="button-cta-secondary">
              See Templates
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
