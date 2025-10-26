import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Zap, TrendingUp, Target, Users, BarChart, Sparkles } from "lucide-react";

export default function FunnelAutomation() {
  useEffect(() => {
    document.title = "Funnel Automation Services - Convert More, Work Less | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Automated marketing and sales funnels that convert 24/7. Email sequences, lead scoring, retargeting, nurture campaigns.");
    }
    // Open Graph tags - always update content
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', 'Funnel Automation Services - Convert More, Work Less | OARC Digital');
    
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', 'Automated marketing and sales funnels that convert 24/7. Email sequences, lead scoring, retargeting, nurture campaigns.');
  }, []);

  return (
    <Layout>
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Funnels that convert <span className="italic">while you sleep</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Automated email sequences, lead scoring, retargeting, and nurture campaigns. Build funnels that work 24/7 to turn prospects into customers.
          </p>
          <Button size="lg" className="bg-white text-cyan-600" data-testid="button-get-started">
            Automate Your Funnel
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-cyan-600 mb-4">FUNNEL AUTOMATION</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Convert more leads. <span className="italic text-blue-600">Work less.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Automated workflows that nurture leads, score prospects, trigger retargeting, and close deals—without manual intervention.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { value: "47%", label: "Average conversion rate improvement" },
              { value: "12hr", label: "Average implementation time saved weekly" },
              { value: "8,500+", label: "Automated funnels built and optimized" },
              { value: "4.2x", label: "Average ROI on automation investment" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-cyan-50 rounded-xl" data-testid={`metric-${i}`}>
                <div className="text-5xl font-bold text-cyan-600 mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyan-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-cyan-600 mb-4">AUTOMATION WORKFLOWS</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Every stage. <span className="italic text-blue-600">Every touchpoint.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "Lead Nurture Sequences", desc: "Multi-touch email sequences that educate, build trust, and move prospects through the funnel automatically.", icon: Zap },
              { name: "Lead Scoring & Qualification", desc: "Automatically score leads based on behavior, demographics, engagement. Route hot leads to sales instantly.", icon: Target },
              { name: "Retargeting & Remarketing", desc: "Pixel-based retargeting, email retargeting, abandoned cart sequences. Bring back prospects who didn't convert.", icon: TrendingUp },
              { name: "Sales Enablement Automation", desc: "Auto-assign leads, trigger follow-up tasks, send personalized outreach. Arm your sales team with automation.", icon: Users },
              { name: "Customer Onboarding Flows", desc: "Welcome sequences, product tutorials, activation campaigns. Automate the first 90 days of the customer journey.", icon: Sparkles },
              { name: "Analytics & Optimization", desc: "Track funnel performance, A/B test sequences, identify drop-off points. Continuously optimize for better conversion.", icon: BarChart },
            ].map((workflow, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-workflow-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div className="relative h-[300px] md:h-[350px] bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 overflow-hidden flex items-center justify-center">
                    <workflow.icon className="h-24 w-24 text-cyan-600/20" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{workflow.name}</h3>
                    <p className="text-muted-foreground">{workflow.desc}</p>
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
              Automation that <span className="italic text-blue-600">drives results</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "47%", label: "Conversion rate improvement" },
              { value: "8,500+", label: "Funnels built and optimized" },
              { value: "4.2x", label: "ROI on automation" },
            ].map((metric, i) => (
              <div key={i} className="text-center" data-testid={`final-metric-${i}`}>
                <div className="text-6xl md:text-7xl font-bold text-cyan-600 mb-3">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-cyan-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to automate your funnel?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Build automated workflows that convert leads into customers 24/7.
          </p>
          <Button size="lg" className="bg-white text-cyan-600" data-testid="button-cta-primary">
            Get Your Automation Plan
          </Button>
        </div>
      </section>
    </Layout>
  );
}
