import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  ArrowRight, Sparkles, Zap, Globe, TrendingUp, Database, 
  Brain, Target, Rocket, LineChart, CheckCircle2, Download
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// Scroll-triggered animation wrapper
function ScrollReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Animated counter component
function AnimatedCounter({ value, duration = 2000 }: { value: string; duration?: number }) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const [count, setCount] = useState(0);
  
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const extractedSuffix = value.replace(/[0-9]/g, '');
  
  useEffect(() => {
    if (isVisible && numericValue) {
      let start = 0;
      const increment = numericValue / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isVisible, numericValue, duration]);
  
  return (
    <span ref={elementRef as React.RefObject<HTMLSpanElement>}>
      {isVisible ? count + extractedSuffix : '0'}
    </span>
  );
}

// Timeline milestone component
function TimelineMilestone({ 
  quarter, 
  title, 
  description, 
  index,
  isLast = false 
}: { 
  quarter: string; 
  title: string; 
  description: string; 
  index: number;
  isLast?: boolean;
}) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 });
  
  return (
    <div ref={elementRef as React.RefObject<HTMLDivElement>} className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
      {/* Timeline Node */}
      <div className="flex-shrink-0 relative">
        <div 
          className={`w-20 h-20 rounded-full border-4 flex items-center justify-center font-bold text-sm transition-all duration-700 ${
            isVisible 
              ? 'border-[#FF6900] bg-[#FF6900] text-white shadow-[0_0_30px_rgba(255,105,0,0.6)] scale-110' 
              : 'border-slate-700 bg-slate-900 text-slate-500 scale-100'
          }`}
          data-testid={`timeline-node-${index}`}
        >
          {quarter}
        </div>
        {/* Connecting Line */}
        {!isLast && (
          <div 
            className={`absolute left-10 top-20 w-0.5 h-32 md:left-20 md:top-10 md:w-32 md:h-0.5 transition-all duration-700 ${
              isVisible ? 'bg-gradient-to-b md:bg-gradient-to-r from-[#FF6900] to-slate-700' : 'bg-slate-800'
            }`}
          />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 p-6 rounded-xl border transition-all duration-700 ${
        isVisible 
          ? 'border-[#FF6900]/30 bg-gradient-to-br from-[#FF6900]/5 to-transparent' 
          : 'border-slate-800 bg-slate-900/50'
      }`}>
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
          {title}
        </h3>
        <p className="text-slate-400 text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Roadmap2026() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Road Map 2026 | OARC Digital - The Future of Intelligent Creativity";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover OARC Digital's 2026 vision: Crystal System AI, local market intelligence, and creative automation at global scale. The next chapter of intelligent creativity awaits."
      );
    }
  }, []);

  const milestones = [
    {
      quarter: "Q1 2026",
      title: "Launch Crystal AI Module",
      description: "Activate our proprietary AI intelligence platform with initial market data integration and creative optimization engine."
    },
    {
      quarter: "Q2 2026",
      title: "Local Market Data Integration",
      description: "Deploy physical business data gathering across 50+ industries, creating unprecedented market-true creative relevance."
    },
    {
      quarter: "Q3 2026",
      title: "Creative Automation Platform v2.0",
      description: "Launch next-generation creative engine with human-AI collaboration tools, faster output, and higher quality standards."
    },
    {
      quarter: "Q4 2026",
      title: "Global Scale Activation",
      description: "Expand to 30 markets worldwide with localized intelligence, multilingual support, and industry-specific solutions."
    }
  ];

  const systems = [
    {
      icon: Brain,
      title: "Crystal System",
      subtitle: "AI + Physical Data",
      description: "We merge business-level physical data with generative creative for unmatched insight.",
      gradient: "from-[#FF6900]/10 to-[#FF6900]/5",
      accentColor: "#FF6900"
    },
    {
      icon: Globe,
      title: "Localised Intelligence Engine",
      subtitle: "Every Market, Every Industry",
      description: "Living in every market, speaking every industry, delivering relevance at scale.",
      gradient: "from-[#00FF88]/10 to-[#00FF88]/5",
      accentColor: "#00FF88"
    },
    {
      icon: Zap,
      title: "Creative Automation Platform",
      subtitle: "Human + Machine",
      description: "Human creativity empowered by machine precision for faster, higher-impact output.",
      gradient: "from-[#00C8D8]/10 to-[#00C8D8]/5",
      accentColor: "#00C8D8"
    }
  ];

  const metrics = [
    { value: "2x", label: "Creative Output", icon: Rocket },
    { value: "45%", label: "Faster Time-to-Market", icon: TrendingUp },
    { value: "100+", label: "Industries Covered", icon: Database },
    { value: "30+", label: "Global Markets", icon: Globe }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discover & Collate",
      description: "We gather physical market data, understand your business in context.",
      icon: Target
    },
    {
      number: "02",
      title: "Strategize & Build",
      description: "We architect your creative-intelligence system and content engine.",
      icon: Brain
    },
    {
      number: "03",
      title: "Activate & Scale",
      description: "We deploy globally, iterate fast, measure results in real-time.",
      icon: LineChart
    }
  ];

  return (
    <Layout>
      {/* Section 1 - Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[#0F0F0F]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,105,0,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(0,255,136,0.15),transparent_40%),radial-gradient(circle_at_50%_50%,rgba(0,200,216,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ScrollReveal>
            <div className="inline-block mb-6 px-4 py-2 bg-[#FF6900]/10 border border-[#FF6900]/20 rounded-full">
              <p className="text-sm font-semibold text-[#FF6900]">Vision 2026</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">
                Road Map 2026
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#FF6900] via-[#00FF88] to-[#00C8D8] bg-clip-text text-transparent">
                The Next Chapter of Intelligent Creativity
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 text-slate-300">
              Our vision. Your growth. A system built to scale everything.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="group text-base bg-[#FF6900] hover:bg-[#FF6900]/90 text-white border-0"
                data-testid="button-download-strategy"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Full Strategy PDF
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base bg-white/5 border-white/10 text-white hover:bg-white/10 backdrop-blur-sm"
                data-testid="button-explore-journey"
              >
                Explore the Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
            <div className="w-1.5 h-3 bg-[#FF6900] rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Section 2 - Why 2026 Matters */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-[#FF6900]/5 to-background">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white">
                Why 2026 Matters
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed mb-6">
                  2026 isn't just another year. It's the year we unlock the <span className="text-[#FF6900] font-bold">Crystal System</span> — our proprietary AI & local-market intelligence platform that gathers physical business data across industries and turns creativity into measurable output.
                </p>
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#FF6900]/20 to-[#00FF88]/20 border border-[#FF6900]/30 rounded-full">
                  <p className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#FF6900] to-[#00FF88] bg-clip-text text-transparent">
                    Built for industries. Designed for disruption.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative p-12 rounded-2xl border border-[#FF6900]/20 bg-gradient-to-br from-[#FF6900]/5 via-transparent to-[#00FF88]/5 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,105,0,0.1),transparent_70%)]" />
              <div className="relative z-10 text-center">
                <Sparkles className="h-16 w-16 text-[#FF6900] mx-auto mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  The Crystal System
                </h3>
                <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto">
                  A semi-transparent intelligence network that connects physical business data, AI-powered creativity, and market insights into one unified platform. Think of it as your creative nervous system—always sensing, always optimizing, always delivering results.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3 - The Journey Timeline */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Milestones That Matter
              </h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
                Our roadmap to building the future of intelligent creativity—one quarter at a time
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-1 md:gap-12">
            {milestones.map((milestone, index) => (
              <TimelineMilestone 
                key={index}
                quarter={milestone.quarter}
                title={milestone.title}
                description={milestone.description}
                index={index}
                isLast={index === milestones.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Key Initiatives */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-[#00FF88]/5 to-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Core Systems & Capabilities
              </h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
                Three pillars powering the future of creative intelligence
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {systems.map((system, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div
                  className="group relative p-8 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition-all duration-500 overflow-hidden h-full"
                  data-testid={`card-system-${index}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${system.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="mb-6">
                      <div 
                        className="inline-flex p-4 rounded-xl group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundColor: `${system.accentColor}15` }}
                      >
                        <system.icon 
                          className="h-8 w-8" 
                          style={{ color: system.accentColor }}
                        />
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
                      {system.title}
                    </h3>
                    <p 
                      className="text-base font-semibold mb-4"
                      style={{ color: system.accentColor }}
                    >
                      {system.subtitle}
                    </p>
                    <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                      {system.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Future Impact on Clients */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                What This Means For You
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-300 max-w-4xl mx-auto">
                Faster turn-around. Higher ROI. Market-true relevance. That's the promise of 2026 with OARC.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div 
                  className="text-center p-8 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-[#FF6900]/30 transition-all duration-500 group"
                  data-testid={`metric-${index}`}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-lg bg-[#FF6900]/10 group-hover:bg-[#FF6900]/20 transition-colors">
                      <metric.icon className="h-6 w-6 text-[#FF6900]" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#FF6900] to-[#00FF88] bg-clip-text text-transparent mb-3">
                    <AnimatedCounter value={metric.value} />
                  </div>
                  <div className="text-sm md:text-base text-slate-400 font-medium">
                    {metric.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - How We Get There */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-[#00C8D8]/5 to-background">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Our Process
              </h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
                Three strategic phases to transform your brand into an autonomous growth engine
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="relative">
                  <div className="p-8 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-[#00C8D8]/30 transition-all duration-500 h-full">
                    <div className="text-6xl font-bold text-[#00C8D8]/20 mb-4">
                      {step.number}
                    </div>
                    <div className="mb-4">
                      <step.icon className="h-10 w-10 text-[#00C8D8]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-8 w-8 text-[#00C8D8]/30" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 - Final CTA */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F0F] via-[#FF6900]/20 to-[#00FF88]/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,105,0,0.2),transparent_70%)]" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ScrollReveal>
            <CheckCircle2 className="h-16 w-16 text-[#00FF88] mx-auto mb-6" />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Ready to build the future?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-12 text-slate-300">
              2026 is here. Let's make it extraordinary.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="group text-base bg-gradient-to-r from-[#FF6900] to-[#00FF88] hover:from-[#FF6900]/90 hover:to-[#00FF88]/90 text-white border-0 px-8 py-6 text-lg"
                data-testid="button-lets-build-together"
              >
                Let's Build Together
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
