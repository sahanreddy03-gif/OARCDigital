import { useEffect } from "react";
import { Link } from "wouter";
import { TrendingUp, Target, Users, Zap, BarChart, DollarSign, CheckCircle2, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { revenueServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import heroImage from "@assets/stock_images/business_growth_char_93cbee9e.jpg";

export default function CustomerAcquisition() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={revenueServicesSEO.customerAcquisition.title}
        description={revenueServicesSEO.customerAcquisition.description}
        canonicalUrl={`https://oarcdigital.com${revenueServicesSEO.customerAcquisition.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "Customer Acquisition Services",
          revenueServicesSEO.customerAcquisition.description,
          "Growth Strategy"
        )}
        schemaId="service-customer-acquisition"
      />
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Customer acquisition growth"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Acquire customers <span className="italic bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">profitably at scale</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Growth frameworks that work. Build repeatable, data-driven customer acquisition systems across paid, organic, and partner channels.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90" data-testid="button-get-started">
              Build Your Growth Engine
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-case-studies">
              View Growth Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Powering acquisition for high-growth companies
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['DTC Brands', 'Mobile Apps', 'Subscription Services', 'B2B Software', 'Marketplaces', 'EdTech'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-indigo-600 mb-3">CUSTOMER ACQUISITION RESULTS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Predictable growth, profitable unit economics
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We build acquisition systems that scale. Lower CAC, increase LTV, optimize every channel for maximum ROI
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "42%", label: "Avg. CAC reduction in 6 months" },
              { value: "3.1x", label: "Avg. LTV:CAC improvement" },
              { value: "250K+", label: "New customers acquired" },
              { value: "18", label: "Avg. channels tested per client" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-gradient-to-br from-indigo-50 to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text mb-3">{stat.value}</div>
                <div className="text-base text-muted-foreground font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Spotlight */}
      <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-lg">
            <div className="p-8 md:p-12">
              <div className="text-sm uppercase tracking-wider text-indigo-600 mb-4">CASE STUDY</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                How we reduced CAC by 58% and scaled a subscription app to 50K users
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">58% lower CAC</div>
                  <div className="text-sm text-muted-foreground">From $42 to $18 per customer</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">4.2x LTV:CAC</div>
                  <div className="text-sm text-muted-foreground">Up from 1.8x at baseline</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">50K users</div>
                  <div className="text-sm text-muted-foreground">Scaled from 8K in 12 months</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                By optimizing their channel mix, improving onboarding conversion rates, and building viral referral loops, we transformed their acquisition engine. We shifted budget from underperforming paid social to high-intent search, implemented a referral program that drove 35% of new sign-ups, and reduced churn by 23% through better user onboarding.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Channel Mix Optimization', 'Referral Program', 'Onboarding CRO', 'Retention Mechanics', 'Attribution Modeling'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Frameworks */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="text-sm uppercase tracking-wider text-indigo-600 mb-3">GROWTH FRAMEWORKS</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Every channel. <span className="italic text-purple-600">Every lever.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive acquisition strategies that optimize your entire growth engine
          </p>
        </div>

        <div className="relative">
          <ScrollableCards>
            {[
              { 
                name: "Channel Mix Optimization", 
                desc: "Test and scale across 20+ acquisition channels. Find your most efficient channel mix and double down on winners while cutting losers fast.",
                icon: BarChart,
                features: ["Multi-channel testing", "Budget allocation", "Performance tracking", "Winner identification"]
              },
              { 
                name: "Funnel Conversion Optimization", 
                desc: "Optimize every step from first touch to paying customer. Reduce drop-off, increase conversion rates, maximize customer lifetime value.",
                icon: TrendingUp,
                features: ["Landing page CRO", "Onboarding optimization", "Activation flows", "A/B testing"]
              },
              { 
                name: "CAC Payback & Unit Economics", 
                desc: "Model customer acquisition costs, payback periods, LTV:CAC ratios. Make data-driven budget allocation decisions that scale profitably.",
                icon: DollarSign,
                features: ["ROI modeling", "Payback analysis", "LTV prediction", "Cohort tracking"]
              },
              { 
                name: "Retention & Referral Loops", 
                desc: "Turn customers into acquisition engines. Build viral loops, referral programs, and retention strategies that compound growth over time.",
                icon: Repeat,
                features: ["Viral mechanics", "Referral incentives", "Retention campaigns", "Churn reduction"]
              },
              { 
                name: "Pricing & Packaging", 
                desc: "Test pricing models, packaging tiers, discount strategies. Maximize revenue per customer and conversion rates through strategic pricing.",
                icon: Target,
                features: ["Price testing", "Tier optimization", "Discount strategy", "Value metric design"]
              },
              { 
                name: "Attribution & Analytics", 
                desc: "Multi-touch attribution, cohort analysis, incrementality testing. Understand what's actually driving growth across all channels.",
                icon: Zap,
                features: ["Attribution modeling", "Cohort analysis", "Incrementality tests", "Custom dashboards"]
              },
            ].map((framework, i) => (
              <div key={i} className="flex-none w-[340px] md:w-[420px] group" data-testid={`card-framework-${i}`}>
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border h-full hover:-translate-y-2">
                  <div className="relative h-48 bg-gradient-to-br from-indigo-100/50 via-purple-100/50 to-pink-100/50 overflow-hidden flex items-center justify-center">
                    <framework.icon className="h-16 w-16 text-indigo-600/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">{framework.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{framework.desc}</p>
                    <div className="space-y-2">
                      {framework.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ScrollableCards>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Complete growth strategy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From acquisition to retention, we optimize your entire customer journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Growth Audit & Strategy", desc: "Comprehensive audit of current channels, funnel analysis, competitive research, and strategic growth roadmap with clear priorities." },
              { name: "Channel Testing & Optimization", desc: "Systematic testing across paid, organic, and referral channels. Rapid experimentation to identify your most efficient growth levers." },
              { name: "Conversion Rate Optimization", desc: "Landing page testing, onboarding optimization, pricing experiments. Improve conversion at every stage of the funnel." },
              { name: "Customer Lifecycle Management", desc: "Onboarding sequences, activation campaigns, retention programs, and win-back flows. Maximize LTV from every customer." },
              { name: "Analytics & Attribution", desc: "Multi-touch attribution setup, cohort dashboards, and performance tracking. Know exactly what's driving growth and ROI." },
              { name: "Growth Team Enablement", desc: "Train your team on growth frameworks, experimentation processes, and data-driven decision making. Build internal growth capabilities." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-border hover:border-indigo-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`card-service-${i}`}>
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
              How we work: <span className="italic text-purple-600">Audit, test, scale</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven 4-phase approach to sustainable growth
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "Growth Audit", desc: "We analyze your current channels, funnel metrics, unit economics, and competitive positioning. We identify quick wins and long-term opportunities with ROI projections." },
              { step: "02", title: "Testing Roadmap", desc: "Build a prioritized testing roadmap across channels, messaging, pricing, and product. Focus on high-impact experiments that move the needle." },
              { step: "03", title: "Execute & Learn", desc: "Run rapid experiments, measure results, kill losers fast, and double down on winners. Systematic learning that compounds week over week." },
              { step: "04", title: "Scale What Works", desc: "As channels prove out, we increase budgets strategically, expand to new segments, and optimize for efficiency. Sustainable growth that compounds." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-6 md:p-8 bg-gradient-to-br from-indigo-50 to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-x-2" data-testid={`step-${i}`}>
                <div className="text-5xl font-bold text-indigo-600/20 flex-shrink-0">{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-indigo-600 mb-3">WHO THIS IS FOR</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for growth-minded <span className="italic text-purple-600">businesses</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Customer acquisition strategies that work across industries and business models
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-indigo-50 border border-border hover-elevate" data-testid="use-case-b2b-saas">
              <h3 className="text-xl font-bold mb-3">B2B SaaS Companies</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Scale from $1M to $10M ARR with predictable, repeatable customer acquisition systems across paid, organic, and partnership channels.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Multi-channel acquisition testing</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Product-led growth strategies</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Trial-to-paid optimization</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-indigo-50 border border-border hover-elevate" data-testid="use-case-consumer-apps">
              <h3 className="text-xl font-bold mb-3">Consumer Apps & Mobile</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Acquire users profitably across app stores, paid social, and organic channels. Optimize onboarding and activation for maximum retention.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>App store optimization (ASO)</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Mobile attribution & analytics</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Viral loop engineering</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-indigo-50 border border-border hover-elevate" data-testid="use-case-ecommerce-dtc">
              <h3 className="text-xl font-bold mb-3">E-commerce & DTC Brands</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Build profitable customer acquisition engines for online stores. Lower CAC, increase LTV, and scale revenue through strategic channel optimization.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Paid social & search optimization</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Conversion rate optimization</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Customer retention programs</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-indigo-50 border border-border hover-elevate" data-testid="use-case-subscriptions">
              <h3 className="text-xl font-bold mb-3">Subscription Services</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Acquire subscribers profitably with strategies that maximize lifetime value. Reduce churn, increase retention, and build predictable MRR growth.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Free trial optimization</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Churn reduction strategies</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Win-back campaigns</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-indigo-50 border border-border hover-elevate" data-testid="use-case-marketplaces">
              <h3 className="text-xl font-bold mb-3">Marketplace Platforms</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Solve the chicken-and-egg problem with dual-sided acquisition strategies. Build network effects and scale supply and demand simultaneously.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Two-sided marketplace growth</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Network effects engineering</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Supply-demand balancing</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-indigo-50 border border-border hover-elevate" data-testid="use-case-funded-startups">
              <h3 className="text-xl font-bold mb-3">Funded Startups</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Deploy venture-backed capital efficiently with rapid experimentation frameworks. Find product-market fit faster and scale winners aggressively.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Rapid channel testing</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Capital-efficient scaling</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Growth metrics dashboards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-indigo-600 mb-3">COMPLETE YOUR GROWTH STACK</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Combine with these <span className="italic text-purple-600">complementary services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Build a complete growth engine with our integrated marketing services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/funnel-automation">
              <div className="group p-8 bg-white rounded-xl border border-border hover:border-indigo-600 hover:shadow-lg transition-all duration-300 cursor-pointer hover-elevate" data-testid="related-service-funnel-automation">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-indigo-600 transition-colors">Funnel Automation</h3>
                  <ArrowRight className="h-5 w-5 text-indigo-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Automate your acquisition funnel with behavioral triggers, lead scoring, and nurture campaigns that convert while you sleep.
                </p>
                <div className="text-sm text-indigo-600 font-semibold">Learn More →</div>
              </div>
            </Link>

            <Link href="/services/paid-advertising">
              <div className="group p-8 bg-white rounded-xl border border-border hover:border-indigo-600 hover:shadow-lg transition-all duration-300 cursor-pointer hover-elevate" data-testid="related-service-paid-ads">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-indigo-600 transition-colors">Paid Advertising</h3>
                  <ArrowRight className="h-5 w-5 text-indigo-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Scale acquisition with data-driven paid campaigns across Google, Facebook, LinkedIn, and more. Lower CAC, maximize ROAS.
                </p>
                <div className="text-sm text-indigo-600 font-semibold">Learn More →</div>
              </div>
            </Link>

            <Link href="/services/analytics-tracking">
              <div className="group p-8 bg-white rounded-xl border border-border hover:border-indigo-600 hover:shadow-lg transition-all duration-300 cursor-pointer hover-elevate" data-testid="related-service-analytics">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-indigo-600 transition-colors">Analytics & Tracking</h3>
                  <ArrowRight className="h-5 w-5 text-indigo-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Measure what matters with proper attribution, cohort analysis, and growth dashboards. Know exactly what's driving acquisition.
                </p>
                <div className="text-sm text-indigo-600 font-semibold">Learn More →</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to build a growth engine?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get a free growth audit. We'll identify your highest-impact growth opportunities and show you exactly how to scale profitably.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90" data-testid="button-cta-primary">
              Get Your Growth Plan
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
