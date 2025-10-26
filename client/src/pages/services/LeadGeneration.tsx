import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Mail, Search, UserPlus, Megaphone, Calendar, Users } from "lucide-react";

export default function LeadGeneration() {
  useEffect(() => {
    document.title = "Lead Generation Services - Fill Your Pipeline | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "B2B lead generation that fills your pipeline with qualified prospects. Outbound, inbound, and account-based strategies that deliver results.");
    }
    // Open Graph tags - always update content
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Lead Generation Services - Fill Your Pipeline | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'B2B lead generation that fills your pipeline with qualified prospects. Outbound, inbound, and account-based strategies that deliver results.');
  }, []);

  return (
    <Layout>
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Fill your pipeline with <span className="italic">qualified leads</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Multi-channel B2B lead generation. Outbound prospecting, inbound campaigns, and ABM strategies that deliver sales-ready leads.
          </p>
          <Button size="lg" className="bg-white text-emerald-600" data-testid="button-get-started">
            Start Generating Leads
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-emerald-600 mb-4">LEAD GENERATION EXCELLENCE</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              More leads. <span className="italic text-teal-600">Better quality.</span> Higher close rates.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just generate volume. We build systems that deliver qualified, sales-ready leads that actually close.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { value: "12,000+", label: "Qualified leads generated monthly" },
              { value: "38%", label: "Average lead-to-opportunity conversion" },
              { value: "$850M+", label: "Pipeline value created for clients" },
              { value: "7 days", label: "Average time to first qualified lead" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-emerald-50 rounded-xl" data-testid={`metric-${i}`}>
                <div className="text-5xl font-bold text-emerald-600 mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-emerald-600 mb-4">MULTI-CHANNEL APPROACH</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Every channel. <span className="italic text-teal-600">Every tactic.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "Outbound Prospecting", desc: "Cold email sequences, LinkedIn outreach, phone prospecting. Multi-touch campaigns that book qualified meetings.", icon: Mail },
              { name: "Inbound Lead Generation", desc: "SEO content, gated downloads, organic traffic. Attract decision-makers actively searching for your solution.", icon: Search },
              { name: "Account-Based Marketing (ABM)", desc: "Personalized campaigns for high-value accounts. Multi-stakeholder outreach coordinated with sales teams.", icon: UserPlus },
              { name: "Paid Lead Generation", desc: "LinkedIn Lead Gen Forms, Google Ads, retargeting. Capture demand and convert paid traffic into SQLs.", icon: Megaphone },
              { name: "Event & Webinar Lead Gen", desc: "Virtual events, trade shows, webinars. Pre-event promotion, live engagement, post-event nurture sequences.", icon: Calendar },
              { name: "Referral & Partner Channels", desc: "Customer referral programs, channel partnerships, affiliate networks. Turn relationships into lead sources.", icon: Users },
            ].map((strategy, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-strategy-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div className="relative h-[300px] md:h-[350px] bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden flex items-center justify-center">
                    <strategy.icon className="h-24 w-24 text-emerald-600/20" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{strategy.name}</h3>
                    <p className="text-muted-foreground">{strategy.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold">
              Pipeline that <span className="italic text-teal-600">actually closes</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "12,000+", label: "Qualified leads monthly" },
              { value: "$850M+", label: "Pipeline value created" },
              { value: "38%", label: "Lead-to-opportunity rate" },
            ].map((metric, i) => (
              <div key={i} className="text-center" data-testid={`final-metric-${i}`}>
                <div className="text-6xl md:text-7xl font-bold text-emerald-600 mb-3">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to fill your pipeline?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's build a lead generation engine that delivers qualified prospects every month.
          </p>
          <Button size="lg" className="bg-white text-emerald-600" data-testid="button-cta-primary">
            Get Your Lead Gen Plan
          </Button>
        </div>
      </section>
    </Layout>
  );
}
