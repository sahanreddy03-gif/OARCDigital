import Layout from "@/components/layout/Layout";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Sparkles, Bot, TrendingUp, Zap, Layers } from "lucide-react";

export default function WhyUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Why OARC Digital | AI-Powered Creative & Automation Agency";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover why OARC Digital is the intelligent choice for digital transformation. Combining creative brilliance, AI-powered workforces, and revenue automation to build brands that think, act, and grow autonomously."
      );
    }
  }, []);

  const differentiators = [
    {
      icon: Sparkles,
      title: "Creative + AI Fusion",
      description: "We merge storytelling with technology to create content that performs",
      detail: "Not just beautiful design, but intelligent creative that adapts, learns, and optimizes in real-time. Every asset we produce is powered by data-driven insights and AI-enhanced creativity.",
      gradient: "from-primary/20 to-teal-500/20"
    },
    {
      icon: Bot,
      title: "AI Employees 24/7",
      description: "Your digital workforce — smarter, faster, always on",
      detail: "Scale your operations with AI agents that handle everything from customer service to content creation. No breaks, no burnout, just consistent excellence around the clock.",
      gradient: "from-orange-500/20 to-blue-500/20"
    },
    {
      icon: TrendingUp,
      title: "Revenue Automation",
      description: "We automate growth, not just workflows",
      detail: "Transform your revenue engine with intelligent automation that identifies opportunities, nurtures leads, and drives conversions while you sleep.",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: Layers,
      title: "End-to-End Transformation",
      description: "From concept to conversion, powered by intelligent systems",
      detail: "We don't just build campaigns — we architect entire digital ecosystems where creativity, automation, and intelligence work in perfect harmony.",
      gradient: "from-purple-500/20 to-primary/20"
    },
    {
      icon: Zap,
      title: "Scalable Innovation",
      description: "Custom AI solutions that grow as you do",
      detail: "Future-proof your brand with adaptive AI systems that evolve with your business, learning from every interaction to deliver exponentially better results over time.",
      gradient: "from-teal-500/20 to-orange-500/20"
    }
  ];

  const stats = [
    { value: "50%", label: "Faster creative output" },
    { value: "10K+", label: "Hours saved through automation" },
    { value: "40%", label: "Higher engagement rates" },
    { value: "3x", label: "ROI improvement average" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent leading-tight">
            Beyond Creative.
            <br />
            Beyond Automation.
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 text-foreground/90">
            One Partner for Intelligent Digital Growth
          </p>
          
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-12 text-muted-foreground">
            We fuse creative brilliance, AI-powered workforces, and automation to build brands that think, act, and grow — autonomously.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="group text-base"
                data-testid="button-lets-build"
              >
                Let's Build Intelligently
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/our-work">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base backdrop-blur-sm"
                data-testid="button-view-work"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What Makes Us Different
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not a typical creative agency. We're an AI-powered transformation partner that operates on another level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-lg border bg-card hover-elevate active-elevate-2 transition-all duration-500 overflow-hidden h-full"
                data-testid={`card-differentiator-${index}`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-base md:text-lg font-medium text-muted-foreground mb-4">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-orange-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Proven Performance
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from brands that chose to build intelligently
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg bg-card border hover-elevate transition-all duration-300"
                data-testid={`stat-${index}`}
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              The OARC Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="text-2xl md:text-3xl font-bold text-primary">Creative by Heart</div>
              <p className="text-muted-foreground">
                Storytelling that captivates, designed to perfection, crafted with passion
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-2xl md:text-3xl font-bold text-orange-500">Automated by Intelligence</div>
              <p className="text-muted-foreground">
                AI-powered systems that work 24/7 to scale your success
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-2xl md:text-3xl font-bold text-blue-500">Measured by Results</div>
              <p className="text-muted-foreground">
                Data-driven decisions that deliver exponential growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-orange-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Join forward-thinking brands that are already building with OARC Digital
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="group text-base"
              data-testid="button-start-journey"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
