import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Calendar, TrendingUp, Heart, MessageCircle, BarChart, Users } from "lucide-react";

export default function SocialMediaManagement() {
  useEffect(() => {
    document.title = "Social Media Management Services - Community Building & Engagement | OARC Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Full-service social media management. Content strategy, community management, engagement tactics, and analytics. Build loyal audiences across all platforms.");
    }
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Build communities, not just <span className="italic">follower counts</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Full-service social media management. From strategy to execution, we build engaged communities that drive real business results.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 h-12 px-8" data-testid="button-get-started">
            Get Started
          </Button>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-blue-600 mb-4">SOCIAL MEDIA EXCELLENCE</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Daily management. <span className="italic text-indigo-600">Measurable growth.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just post content. We build strategies, engage communities, respond to customers, and drive business outcomes across every platform.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { value: "850+", label: "Social accounts managed successfully" },
              { value: "3.8x", label: "Average engagement rate improvement" },
              { value: "2hr", label: "Average response time to comments/DMs" },
              { value: "95%", label: "Client retention rate" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-blue-50 rounded-xl" data-testid={`metric-${i}`}>
                <div className="text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-blue-600 mb-4">FULL-SERVICE MANAGEMENT</div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Strategy to execution. <span className="italic text-indigo-600">Everything covered.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "Strategy & Planning", desc: "Audience research, content pillars, editorial calendars, platform-specific strategies. Build the foundation for consistent growth.", icon: Calendar },
              { name: "Content Creation & Publishing", desc: "Original posts, curated content, Stories, Reels, carousels. Platform-optimized content published daily across all channels.", icon: TrendingUp },
              { name: "Community Management", desc: "Respond to comments, DMs, mentions. Moderate discussions, handle customer service inquiries, build relationships with followers.", icon: Users },
              { name: "Engagement & Growth Tactics", desc: "Strategic follows, hashtag research, collaboration outreach, giveaways. Organic tactics that build real, engaged audiences.", icon: Heart },
              { name: "Social Listening & Monitoring", desc: "Track brand mentions, competitor activity, industry trends, sentiment analysis. Stay ahead of conversations.", icon: MessageCircle },
              { name: "Analytics & Reporting", desc: "Track growth, engagement, reach, conversions. Weekly dashboards and monthly strategy reviews with actionable insights.", icon: BarChart },
            ].map((service, i) => (
              <div key={i} className="flex-none w-[360px] md:w-[480px] snap-center group" data-testid={`card-service-${i}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div className="relative h-[300px] md:h-[350px] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden flex items-center justify-center">
                    <service.icon className="h-24 w-24 text-blue-600/20" />
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

      {/* Platforms */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold">
              Every platform. <span className="italic text-indigo-600">Every audience.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { platform: "Instagram", desc: "Feed, Stories, Reels, IGTV. Visual storytelling for lifestyle, fashion, beauty, food, travel brands." },
              { platform: "TikTok", desc: "Short-form video that captures Gen Z. Trending sounds, effects, hashtags. Viral potential." },
              { platform: "LinkedIn", desc: "B2B thought leadership, company updates, employee advocacy. Professional networking at scale." },
              { platform: "Twitter/X", desc: "Real-time engagement, news commentary, brand personality. Fast-moving conversations." },
              { platform: "Facebook", desc: "Community building, events, groups, customer service. Reach older demographics effectively." },
              { platform: "Pinterest", desc: "Visual discovery for e-commerce, home decor, recipes, DIY. Long-tail traffic driver." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-xl border border-border hover:border-blue-600 hover:shadow-lg transition-all" data-testid={`card-platform-${i}`}>
                <h3 className="text-2xl font-bold mb-3">{item.platform}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold">
              Trusted by brands that <span className="italic text-indigo-600">value community</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "850+", label: "Social accounts managed successfully" },
              { value: "12M+", label: "Engaged followers across all clients" },
              { value: "3.8x", label: "Average engagement rate lift" },
            ].map((metric, i) => (
              <div key={i} className="text-center" data-testid={`final-metric-${i}`}>
                <div className="text-6xl md:text-7xl font-bold text-blue-600 mb-3">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to build a real community?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Stop posting into the void. Start building engaged communities that drive business results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 h-12 px-8" data-testid="button-cta-primary">
              Get a Free Audit
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8" data-testid="button-cta-secondary">
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
