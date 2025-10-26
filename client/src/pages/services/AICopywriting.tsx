import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Sparkles, Zap, FileText, TrendingUp, Target, BarChart } from "lucide-react";

export default function AICopywriting() {
  useEffect(() => {
    document.title = "AI Copywriting Services - Content at Scale | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "AI-powered copywriting at scale. Blog posts, product descriptions, ad copy, emails. Human-quality content, delivered 10x faster.");
    }
  }, []);

  return (
    <Layout>
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Human-quality content. <span className="italic">AI-powered scale.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Generate blog posts, ad copy, product descriptions, and emails 10x faster. AI-powered, human-edited, brand-perfect.
          </p>
          <Button size="lg" className="bg-white text-violet-600 hover:bg-white/90 h-12 px-8" data-testid="button-get-started">
            Start Creating Content
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-violet-600 mb-4">AI COPYWRITING AT SCALE</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Write 10x faster. <span className="italic text-purple-600">Without sacrificing quality.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI-generated first drafts, human editing and optimization, brand voice training. Get human-quality content at machine speed.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { value: "10x", label: "Faster content production vs manual writing" },
              { value: "50,000+", label: "Pieces of content generated monthly" },
              { value: "92%", label: "Content approved without major revisions" },
              { value: "3 days", label: "Average turnaround for long-form content" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-violet-50 rounded-xl" data-testid={`metric-${i}`}>
                <div className="text-5xl font-bold text-violet-600 mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-violet-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-violet-600 mb-4">CONTENT TYPES WE GENERATE</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Every format. <span className="italic text-purple-600">Every channel.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "Blog Posts & Articles", desc: "Long-form SEO content, thought leadership, how-to guides. 1,500-3,000 words, fully researched and optimized.", icon: FileText },
              { name: "Ad Copy & Headlines", desc: "Google Ads, Meta Ads, LinkedIn Ads. Multiple variations tested and optimized for performance.", icon: Target },
              { name: "Product Descriptions", desc: "E-commerce product copy that converts. SEO-optimized, benefit-focused, brand-consistent.", icon: Sparkles },
              { name: "Email Campaigns", desc: "Welcome sequences, newsletters, promotional emails, abandoned cart. Personalized at scale.", icon: Zap },
              { name: "Social Media Captions", desc: "Platform-specific captions for Instagram, LinkedIn, Twitter, Facebook. On-brand, engaging, hashtag-optimized.", icon: TrendingUp },
              { name: "Landing Page Copy", desc: "Conversion-focused headlines, subheadlines, CTAs, body copy. Persuasive messaging that drives action.", icon: BarChart },
            ].map((type, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-content-type-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div className="relative h-[300px] md:h-[350px] bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 overflow-hidden flex items-center justify-center">
                    <type.icon className="h-24 w-24 text-violet-600/20" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{type.name}</h3>
                    <p className="text-muted-foreground">{type.desc}</p>
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
              Content at <span className="italic text-purple-600">unprecedented scale</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "50,000+", label: "Pieces generated monthly" },
              { value: "10x", label: "Faster than manual writing" },
              { value: "92%", label: "First-draft approval rate" },
            ].map((metric, i) => (
              <div key={i} className="text-center" data-testid={`final-metric-${i}`}>
                <div className="text-6xl md:text-7xl font-bold text-violet-600 mb-3">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to scale your content?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Generate human-quality content 10x faster. Let's build your content engine.
          </p>
          <Button size="lg" className="bg-white text-violet-600 hover:bg-white/90 h-12 px-8" data-testid="button-cta-primary">
            Start Generating Content
          </Button>
        </div>
      </section>
    </Layout>
  );
}
