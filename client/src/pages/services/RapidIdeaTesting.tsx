import { useEffect } from "react";
import { Link } from "wouter";
import { Zap, TrendingUp, Target, Users, BarChart, Sparkles, CheckCircle2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { revenueServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import heroImage from "@assets/stock_images/innovation_startup_t_6fe40477.jpg";

export default function RapidIdeaTesting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={revenueServicesSEO.rapidIdeaTesting.title}
        description={revenueServicesSEO.rapidIdeaTesting.description}
        canonicalUrl={`https://oarcdigital.com${revenueServicesSEO.rapidIdeaTesting.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "Rapid Idea Testing Services",
          revenueServicesSEO.rapidIdeaTesting.description,
          "MVP Testing & Validation"
        )}
        schemaId="service-rapid-idea-testing"
      />
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Innovation and rapid testing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Test fast. <span className="italic bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-transparent bg-clip-text">Scale what works.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Validate marketing ideas in days, not months. Run rapid experiments, test messaging, iterate fast, and scale winners with confidence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90" data-testid="button-get-started">
              Start Testing Ideas
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-case-studies">
              View Testing Results
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Powering rapid experimentation for innovators
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['Startups', 'Product Teams', 'Innovation Labs', 'Venture Studios', 'Growth Teams', 'Founders'].map((type, i) => (
              <div key={i} className="text-lg md:text-xl font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-orange-600 mb-3">RAPID EXPERIMENTATION RESULTS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Fail fast, win faster
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop betting the farm on untested ideas. Run lean experiments, validate hypotheses, and only scale what proves it works
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "2-7 days", label: "Time to initial results" },
              { value: "850+", label: "Experiments run annually" },
              { value: "68%", label: "Tests yield actionable insights" },
              { value: "4.1x", label: "ROI on winning ideas scaled" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`metric-${i}`}>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text mb-3">{stat.value}</div>
                <div className="text-base text-muted-foreground font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Spotlight */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-lg">
            <div className="p-8 md:p-12">
              <div className="text-sm uppercase tracking-wider text-orange-600 mb-4">CASE STUDY</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                How we tested 47 campaign ideas in 90 days to find the $2M winner
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-2xl font-bold text-orange-600 mb-2">47 tests</div>
                  <div className="text-sm text-muted-foreground">Campaigns tested in 90 days</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600 mb-2">$2M ARR</div>
                  <div className="text-sm text-muted-foreground">Generated by winning campaign</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600 mb-2">7 days avg</div>
                  <div className="text-sm text-muted-foreground">Time to initial test results</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Through rapid-fire testing of messaging angles, creative concepts, audience segments, and channels, we discovered a winning combination that scaled to $2M ARR. We ran lean tests with $500-2K budgets, killed losers in 3-5 days, and doubled down on winners immediately. The winning campaign started as a $1K test that outperformed 46 other ideas.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Rapid Prototyping', 'A/B Testing', 'Lean Budgets', 'Fast Iteration', 'Data-Driven Decisions'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Test */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="text-sm uppercase tracking-wider text-orange-600 mb-3">WHAT WE TEST</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Every channel. <span className="italic text-yellow-600">Every variable.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Systematic testing across messaging, creative, audiences, pricing, and channels
          </p>
        </div>

        <div className="relative">
          <ScrollableCards>
            {[
              { 
                name: "Messaging & Positioning", 
                desc: "Test different value props, headlines, and angles. Find the message that resonates before committing to full campaigns and brand positioning.",
                icon: Target,
                features: ["Value prop testing", "Headline variations", "Angle testing", "Message-market fit"]
              },
              { 
                name: "Creative Concept Testing", 
                desc: "Test ad concepts, video ideas, visual styles. Validate creative direction with real audience feedback before production budgets.",
                icon: Sparkles,
                features: ["Ad concept tests", "Video prototype tests", "Visual style testing", "Creative iteration"]
              },
              { 
                name: "Channel Viability Testing", 
                desc: "Test new channels with small budgets. Validate if TikTok, LinkedIn, podcasts, or other channels work for you before scaling spend.",
                icon: TrendingUp,
                features: ["Channel testing", "Platform evaluation", "Audience validation", "Cost efficiency"]
              },
              { 
                name: "Audience Segmentation", 
                desc: "Test different audience segments, personas, and targeting criteria. Find your highest-value customers before scaling campaigns.",
                icon: Users,
                features: ["Segment testing", "Persona validation", "Targeting experiments", "ICP refinement"]
              },
              { 
                name: "Pricing & Offer Testing", 
                desc: "Test different price points, discount structures, and payment models. Optimize revenue and conversion through strategic pricing tests.",
                icon: Zap,
                features: ["Price point tests", "Discount testing", "Payment model tests", "Offer optimization"]
              },
              { 
                name: "Landing Page & Funnel", 
                desc: "A/B test page layouts, CTAs, form fields, and copy. Optimize conversion at every funnel stage through systematic testing.",
                icon: BarChart,
                features: ["Layout testing", "CTA optimization", "Form field tests", "Copy variations"]
              },
            ].map((test, i) => (
              <div key={i} className="flex-none w-[340px] md:w-[420px] group" data-testid={`card-test-${i}`}>
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border h-full hover:-translate-y-2">
                  <div className="relative h-48 bg-gradient-to-br from-yellow-100/50 via-orange-100/50 to-red-100/50 overflow-hidden flex items-center justify-center">
                    <test.icon className="h-16 w-16 text-orange-600/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">{test.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{test.desc}</p>
                    <div className="space-y-2">
                      {test.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-orange-600" />
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
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Full-service idea validation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From hypothesis to proven winner—we test, learn, and scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Hypothesis Development", desc: "Work with your team to identify testable hypotheses across messaging, creative, channels, and audiences. Prioritize ideas by potential impact." },
              { name: "Rapid Prototype Creation", desc: "Build lean test campaigns, landing pages, and creative assets. Speed over perfection—get to market in days, not weeks." },
              { name: "Test Execution & Monitoring", desc: "Launch tests with small budgets, monitor performance in real-time, and make rapid decisions to kill or continue based on early signals." },
              { name: "Data Analysis & Insights", desc: "Analyze test results, identify winning patterns, and extract learnings. Every test yields insights, even the failures." },
              { name: "Winning Idea Scale-Up", desc: "When we find a winner, we scale it immediately. Increase budgets, expand audience, and optimize for maximum performance." },
              { name: "Test Documentation & Learning", desc: "Document every test, build a knowledge base of what works, and compound learnings over time. Your testing becomes an asset." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-border hover:border-orange-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`card-service-${i}`}>
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
              How we work: <span className="italic text-yellow-600">Hypothesis, test, learn, scale</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven 4-step framework for rapid validation
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "Generate Hypotheses", desc: "Brainstorm testable ideas across messaging, creative, channels, audiences, and pricing. Prioritize by potential impact and ease of testing." },
              { step: "02", title: "Build Rapid Prototypes", desc: "Create lean test campaigns with minimal viable assets. Landing pages, ads, email sequences—built in days, not weeks. Speed is the goal." },
              { step: "03", title: "Run Experiments", desc: "Launch tests with $500-2K budgets, monitor performance daily, and make kill/continue decisions in 3-7 days based on leading indicators." },
              { step: "04", title: "Scale Winners", desc: "When a test shows promise, we scale immediately. Double budgets, expand audience, refine creative, and optimize until it hits maximum performance." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-6 md:p-8 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-x-2" data-testid={`step-${i}`}>
                <div className="text-5xl font-bold text-orange-600/20 flex-shrink-0">{item.step}</div>
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
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to test your ideas?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Stop guessing. Start testing. Validate what works before you scale. Get results in days, not months.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90" data-testid="button-cta-primary">
              Run Your First Test
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
