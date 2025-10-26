import { useEffect } from "react";
import { Link } from "wouter";
import { Mail, Search, UserPlus, Megaphone, Calendar, Users, CheckCircle2, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@assets/stock_images/sales_team_handshake_272ba86a.jpg";

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
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Lead generation strategy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Fill your pipeline with <span className="italic bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-transparent bg-clip-text">qualified leads</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Multi-channel B2B lead generation. Outbound prospecting, inbound campaigns, and ABM strategies that deliver sales-ready leads that actually close.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-white/90" data-testid="button-get-started">
              Start Generating Leads
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-case-studies">
              View Lead Gen Results
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Powering pipeline growth for leading companies
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['B2B SaaS', 'Agencies', 'Consulting Firms', 'Real Estate', 'Insurance', 'Financial Advisors'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-emerald-600 mb-3">PROVEN LEAD GENERATION RESULTS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              More leads, better quality, higher close rates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We don't just generate volume. We build systems that deliver qualified, sales-ready leads
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "12,000+", label: "Qualified leads monthly" },
              { value: "38%", label: "Lead-to-opportunity rate" },
              { value: "$850M+", label: "Pipeline value created" },
              { value: "$18", label: "Avg. cost per qualified lead" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-gradient-to-br from-emerald-50 to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 text-transparent bg-clip-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Spotlight */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-lg">
            <div className="p-8 md:p-12">
              <div className="text-sm uppercase tracking-wider text-emerald-600 mb-4">CASE STUDY</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                How we generated 1,200 qualified B2B leads in 90 days for a SaaS company
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-2xl font-bold text-emerald-600 mb-2">1,200 leads</div>
                  <div className="text-sm text-muted-foreground">Qualified prospects in 90 days</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600 mb-2">42% conversion</div>
                  <div className="text-sm text-muted-foreground">Lead-to-opportunity rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600 mb-2">$12/lead</div>
                  <div className="text-sm text-muted-foreground">Cost per qualified lead</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Through targeted LinkedIn outreach, cold email campaigns, and content-driven inbound strategies, we built a multi-channel lead generation engine. The company went from 50 leads/month to 400/month with higher qualification rates and lower cost per lead. Pipeline value increased by $2.8M in the first quarter.
              </p>
              <div className="flex flex-wrap gap-3">
                {['LinkedIn Outreach', 'Cold Email Sequences', 'Content Marketing', 'Lead Scoring', 'CRM Integration'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Gen Channels */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="text-sm uppercase tracking-wider text-emerald-600 mb-3">MULTI-CHANNEL APPROACH</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Every channel. <span className="italic text-teal-600">Every tactic.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We deploy proven lead generation tactics across paid, organic, and outbound channels
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { 
                name: "Outbound Prospecting", 
                desc: "Cold email sequences, LinkedIn outreach, phone prospecting. Multi-touch campaigns that book qualified meetings with decision-makers.",
                icon: Mail,
                features: ["Personalized sequences", "Multi-channel touch", "Meeting automation", "Reply tracking"]
              },
              { 
                name: "Inbound Lead Generation", 
                desc: "SEO content, gated downloads, organic traffic. Attract decision-makers actively searching for your solution with valuable content.",
                icon: Search,
                features: ["SEO optimization", "Lead magnets", "Landing pages", "Content upgrades"]
              },
              { 
                name: "Account-Based Marketing", 
                desc: "Personalized campaigns for high-value accounts. Multi-stakeholder outreach coordinated with sales teams for maximum impact.",
                icon: UserPlus,
                features: ["Account research", "Personalized content", "Multi-thread outreach", "Sales coordination"]
              },
              { 
                name: "Paid Lead Generation", 
                desc: "LinkedIn Lead Gen Forms, Google Ads, retargeting. Capture demand and convert paid traffic into SQL-ready prospects.",
                icon: Megaphone,
                features: ["Lead Gen Forms", "Search intent ads", "Retargeting pixels", "Conversion tracking"]
              },
              { 
                name: "Event & Webinar Leads", 
                desc: "Virtual events, trade shows, webinars. Pre-event promotion, live engagement, post-event nurture sequences that convert.",
                icon: Calendar,
                features: ["Event promotion", "Registration funnels", "Follow-up sequences", "Attendee scoring"]
              },
              { 
                name: "Referral & Partner Channels", 
                desc: "Customer referral programs, channel partnerships, affiliate networks. Turn relationships into predictable lead sources.",
                icon: Users,
                features: ["Referral programs", "Partner portals", "Co-marketing", "Revenue sharing"]
              },
            ].map((channel, i) => (
              <div key={i} className="flex-none w-[340px] md:w-[420px] snap-center group" data-testid={`card-channel-${i}`}>
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border h-full hover:-translate-y-2">
                  <div className="relative h-48 bg-gradient-to-br from-emerald-100/50 via-teal-100/50 to-cyan-100/50 overflow-hidden flex items-center justify-center">
                    <channel.icon className="h-16 w-16 text-emerald-600/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition-colors">{channel.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{channel.desc}</p>
                    <div className="space-y-2">
                      {channel.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Full-service lead generation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build a predictable pipeline—no hidden costs, no surprises
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "ICP & Targeting Research", desc: "Deep research into your ideal customer profile, buying committees, pain points, and decision criteria. Build targeting that actually converts." },
              { name: "Lead List Building", desc: "High-quality prospect lists built from premium data sources. Verified emails, phone numbers, and enriched firmographic data." },
              { name: "Multi-Channel Campaigns", desc: "Coordinated outreach across email, LinkedIn, phone, and ads. Consistent messaging that reinforces value at every touchpoint." },
              { name: "Lead Qualification & Scoring", desc: "Automated lead scoring based on engagement, fit, and intent signals. Only qualified leads reach your sales team." },
              { name: "CRM Integration & Management", desc: "Seamless integration with your CRM. Automated data sync, lead routing, and activity tracking for full visibility." },
              { name: "Performance Reporting", desc: "Weekly dashboards tracking lead volume, quality, conversion rates, and cost per lead. Full transparency into what's working." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-border hover:border-emerald-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`card-service-${i}`}>
                <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How we work: <span className="italic text-teal-600">Target, engage, convert</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven 4-step framework for predictable pipeline
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "ICP Research & List Building", desc: "We analyze your best customers, build detailed ICPs, and source high-quality prospect lists from premium databases. Most clients see first leads within 7-10 days." },
              { step: "02", title: "Campaign Setup & Launch", desc: "We build multi-channel campaigns, craft personalized messaging, set up automation workflows, and integrate with your CRM. Campaigns launch within 2 weeks." },
              { step: "03", title: "Engage & Qualify", desc: "We execute outreach, engage prospects across channels, qualify leads based on BANT criteria, and route hot leads to sales immediately." },
              { step: "04", title: "Optimize & Scale", desc: "Weekly testing of messaging, audiences, and channels. We kill underperforming tactics, double down on winners, and scale what works." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-6 md:p-8 bg-gradient-to-br from-emerald-50 to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-x-2" data-testid={`step-${i}`}>
                <div className="text-5xl font-bold text-emerald-600/20 flex-shrink-0">{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to fill your pipeline?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get a free lead generation plan. We'll show you exactly how to generate 100+ qualified leads per month.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-white/90" data-testid="button-cta-primary">
              Get Your Lead Gen Plan
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-cta-secondary">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
