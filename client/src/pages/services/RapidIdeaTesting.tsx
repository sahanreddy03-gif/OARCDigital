import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Zap, TrendingUp, Target, Users, BarChart, Sparkles } from "lucide-react";

export default function RapidIdeaTesting() {
  useEffect(() => {
    document.title = "Rapid Idea Testing - Validate Before You Scale | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Test marketing ideas in days, not months. MVP campaigns, prototype testing, A/B experiments. Validate what works before scaling.");
    }
  }, []);

  return (
    <Layout>
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Test fast. <span className="italic">Scale what works.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Validate marketing ideas in days, not months. Run rapid experiments, test messaging, iterate fast, and scale winners with confidence.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 h-12 px-8" data-testid="button-get-started">
            Start Testing
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-orange-600 mb-4">RAPID EXPERIMENTATION</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Fail fast. <span className="italic text-yellow-600">Win faster.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stop betting the farm on untested ideas. Run lean experiments, validate hypotheses, and only scale campaigns that prove they work.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { value: "2-7 days", label: "Average time to initial test results" },
              { value: "850+", label: "Marketing experiments run annually" },
              { value: "68%", label: "Of tests yield actionable insights" },
              { value: "4.1x", label: "Average ROI on winning ideas scaled" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-orange-50 rounded-xl" data-testid={`metric-${i}`}>
                <div className="text-5xl font-bold text-orange-600 mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-orange-600 mb-4">WHAT WE TEST</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Every channel. <span className="italic text-yellow-600">Every variable.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "Messaging & Positioning Tests", desc: "Test different value props, headlines, angles. Find the message that resonates before committing to full campaigns.", icon: Target },
              { name: "Creative Concept Testing", desc: "Test ad concepts, video ideas, visual styles. Validate creative direction with real audience feedback.", icon: Sparkles },
              { name: "Channel Viability Testing", desc: "Test new channels with small budgets. Validate if TikTok, LinkedIn, or podcasts work for you before scaling.", icon: TrendingUp },
              { name: "Audience Segmentation Tests", desc: "Test different audience segments, personas, targeting criteria. Find your highest-value customers.", icon: Users },
              { name: "Pricing & Offer Testing", desc: "Test different price points, discount structures, payment models. Optimize revenue and conversion.", icon: Zap },
              { name: "Landing Page & Funnel Tests", desc: "A/B test page layouts, CTAs, form fields. Optimize conversion at every funnel stage.", icon: BarChart },
            ].map((test, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-test-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div className="relative h-[300px] md:h-[350px] bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 overflow-hidden flex items-center justify-center">
                    <test.icon className="h-24 w-24 text-orange-600/20" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{test.name}</h3>
                    <p className="text-muted-foreground">{test.desc}</p>
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
              Validate before you <span className="italic text-yellow-600">scale</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "2-7 days", label: "Time to test results" },
              { value: "850+", label: "Experiments run annually" },
              { value: "4.1x", label: "ROI on scaled winners" },
            ].map((metric, i) => (
              <div key={i} className="text-center" data-testid={`final-metric-${i}`}>
                <div className="text-6xl md:text-7xl font-bold text-orange-600 mb-3">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-yellow-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to test your ideas?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Stop guessing. Start testing. Validate what works before you scale.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 h-12 px-8" data-testid="button-cta-primary">
            Run Your First Test
          </Button>
        </div>
      </section>
    </Layout>
  );
}
