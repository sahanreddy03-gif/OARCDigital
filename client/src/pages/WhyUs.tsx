import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  ArrowRight, Sparkles, Bot, TrendingUp, Zap, Layers, 
  Globe, Users, Award, Target, Lightbulb, Rocket,
  MapPin, Code, Palette, Video, MessageSquare, BarChart3
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
  
  // Parse the numeric value and extract suffix
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

export default function WhyUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Why OARC Digital | AI-Powered Creative & Automation Agency";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover why OARC Digital is the intelligent choice for digital transformation. Global talent, AI-powered creativity, and revenue automation that transforms brands into autonomous growth engines."
      );
    }
  }, []);

  const beliefs = [
    "Creativity without limits, powered by AI that thinks",
    "Teams without borders, united by a mission to transform",
    "Growth without guesswork, driven by intelligent automation"
  ];

  const differentiators = [
    {
      icon: Sparkles,
      title: "Creative + AI Synergy",
      description: "Where imagination meets intelligence",
      detail: "We don't just create beautiful work—we engineer creative systems that learn, adapt, and optimize. Every campaign is powered by AI-enhanced insights, ensuring your brand stands out while performing at peak efficiency.",
      gradient: "from-emerald-500/10 via-teal-500/10 to-cyan-500/10",
      accent: "emerald"
    },
    {
      icon: Bot,
      title: "AI Workforce 24/7",
      description: "Your always-on digital team",
      detail: "Scale infinitely with AI agents that handle customer service, content generation, data analysis, and more. Never sleep, never tire, always delivering excellence—freeing your human team to focus on strategic innovation.",
      gradient: "from-orange-500/10 via-amber-500/10 to-yellow-500/10",
      accent: "orange"
    },
    {
      icon: TrendingUp,
      title: "Revenue on Autopilot",
      description: "Growth engines that never stop",
      detail: "We build intelligent revenue systems that identify opportunities, nurture leads, and close deals autonomously. Your sales pipeline becomes a self-optimizing machine that compounds results month after month.",
      gradient: "from-blue-500/10 via-indigo-500/10 to-purple-500/10",
      accent: "blue"
    },
    {
      icon: Layers,
      title: "End-to-End Ecosystems",
      description: "Complete transformation, not patchwork",
      detail: "We architect holistic digital ecosystems where every element—creative, tech, automation—works in perfect harmony. No silos, no gaps, just seamless experiences that delight customers and drive growth.",
      gradient: "from-purple-500/10 via-fuchsia-500/10 to-pink-500/10",
      accent: "purple"
    },
    {
      icon: Zap,
      title: "Innovation That Scales",
      description: "Future-proof systems that evolve",
      detail: "Our AI solutions don't just solve today's problems—they learn and adapt to tomorrow's challenges. Build once, benefit forever as your systems become smarter and more valuable with every interaction.",
      gradient: "from-teal-500/10 via-green-500/10 to-emerald-500/10",
      accent: "teal"
    },
    {
      icon: Globe,
      title: "Global, Young, Fearless",
      description: "Fresh perspectives from everywhere",
      detail: "Our team spans continents and cultures, bringing diverse creative perspectives and cutting-edge AI expertise. We combine youthful energy with technical mastery to deliver work that breaks boundaries.",
      gradient: "from-pink-500/10 via-rose-500/10 to-red-500/10",
      accent: "pink"
    }
  ];

  const stats = [
    { value: "50%", label: "Faster creative output", icon: Rocket },
    { value: "10K+", label: "Hours saved through automation", icon: Bot },
    { value: "40%", label: "Higher engagement rates", icon: TrendingUp },
    { value: "3x", label: "ROI improvement average", icon: Target }
  ];

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Creative AI Director",
      location: "Singapore",
      specialty: "AI-Enhanced Design",
      icon: Palette,
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      name: "Sofia Rodriguez",
      role: "Automation Architect",
      location: "Barcelona",
      specialty: "Revenue Systems",
      icon: Code,
      gradient: "from-orange-500/20 to-amber-500/20"
    },
    {
      name: "Yuki Tanaka",
      role: "Motion & Video Lead",
      location: "Tokyo",
      specialty: "AI Video Production",
      icon: Video,
      gradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
      name: "Marcus Johnson",
      role: "Growth Strategist",
      location: "New York",
      specialty: "Data Analytics",
      icon: BarChart3,
      gradient: "from-purple-500/20 to-fuchsia-500/20"
    },
    {
      name: "Priya Sharma",
      role: "Content AI Specialist",
      location: "Mumbai",
      specialty: "AI Copywriting",
      icon: MessageSquare,
      gradient: "from-pink-500/20 to-rose-500/20"
    },
    {
      name: "Lars Nielsen",
      role: "Innovation Lead",
      location: "Copenhagen",
      specialty: "Emerging Tech",
      icon: Lightbulb,
      gradient: "from-teal-500/20 to-green-500/20"
    }
  ];

  const timeline = [
    {
      phase: "Strategy",
      title: "Discover & Design",
      description: "Deep-dive into your business to architect intelligent systems tailored to your goals"
    },
    {
      phase: "Activation",
      title: "Build & Launch",
      description: "Deploy creative campaigns and AI workforces that start delivering results immediately"
    },
    {
      phase: "Automation",
      title: "Optimize & Scale",
      description: "Continuous improvement as your systems learn, adapt, and compound growth over time"
    }
  ];

  const testimonials = [
    {
      quote: "OARC transformed our entire content pipeline. We're producing 3x more, with better quality, in half the time.",
      author: "Head of Marketing, SaaS Unicorn"
    },
    {
      quote: "Their AI employees freed our team to focus on strategy while automation handles the execution. Game-changing.",
      author: "CEO, E-Commerce Brand"
    }
  ];

  return (
    <Layout>
      {/* Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(249,115,22,0.15),transparent_40%),radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ScrollReveal>
            <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <p className="text-sm font-semibold text-emerald-400">The Future of Creative Agencies</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">
                Where Creativity Meets
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Intelligent Automation
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 text-slate-300">
              Global Talent. AI-Powered. Revenue-Driven.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-12 text-slate-400 leading-relaxed">
              We're a collective of young, fearless creatives from across the globe—united by AI, driven by results, obsessed with building brands that grow on autopilot.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="group text-base bg-emerald-500 hover:bg-emerald-600 text-white border-0"
                  data-testid="button-lets-build"
                >
                  Let's Build Together
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-base bg-white/5 border-white/10 text-white hover:bg-white/10 backdrop-blur-sm"
                  data-testid="button-explore-services"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
            <div className="w-1.5 h-3 bg-emerald-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Belief Stack / Manifesto */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-emerald-500/5 to-background">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                What We Believe
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Three principles that drive everything we do
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {beliefs.map((belief, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="p-8 rounded-xl border bg-card/50 backdrop-blur-sm hover-elevate transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <p className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground leading-relaxed">
                      {belief}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Bar - Testimonials */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="p-8 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                  <p className="text-lg md:text-xl text-slate-300 italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-sm font-semibold text-emerald-400">
                    — {testimonial.author}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Differentiators */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                What Makes Us Unstoppable
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Six pillars of transformation that set us apart from every other agency
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div
                  className="group relative p-8 rounded-xl border bg-card hover-elevate active-elevate-2 transition-all duration-700 overflow-hidden h-full"
                  data-testid={`card-differentiator-${index}`}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className={`inline-flex p-4 rounded-xl group-hover:scale-110 transition-transform duration-500 ${
                        item.accent === 'emerald' ? 'bg-emerald-500/10' :
                        item.accent === 'orange' ? 'bg-orange-500/10' :
                        item.accent === 'blue' ? 'bg-blue-500/10' :
                        item.accent === 'purple' ? 'bg-purple-500/10' :
                        item.accent === 'teal' ? 'bg-teal-500/10' :
                        'bg-pink-500/10'
                      }`}>
                        <item.icon className={`h-8 w-8 ${
                          item.accent === 'emerald' ? 'text-emerald-500' :
                          item.accent === 'orange' ? 'text-orange-500' :
                          item.accent === 'blue' ? 'text-blue-500' :
                          item.accent === 'purple' ? 'text-purple-500' :
                          item.accent === 'teal' ? 'text-teal-500' :
                          'text-pink-500'
                        }`} />
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-foreground transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg font-semibold text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Living Metrics with Animated Counters */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-500/5 via-background to-orange-500/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Results That Speak
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Real impact, measured in the metrics that matter
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div 
                  className="text-center p-8 rounded-xl bg-card border hover-elevate transition-all duration-500 group"
                  data-testid={`stat-${index}`}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                      <stat.icon className="h-6 w-6 text-emerald-500" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-3">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global Talent Team Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <Users className="h-4 w-4 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-400">Meet the Minds</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Global Talent, Unified Vision
              </h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
                Young, fearless creatives and AI specialists from around the world—working together to transform how brands grow
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={index} delay={index * 75}>
                <div
                  className="group relative p-8 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition-all duration-500 overflow-hidden"
                  data-testid={`card-team-${index}`}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="p-3 rounded-lg bg-emerald-500/10 group-hover:scale-110 transition-transform duration-300">
                        <member.icon className="h-6 w-6 text-emerald-400" />
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-slate-500">
                        <MapPin className="h-4 w-4" />
                        <span>{member.location}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-emerald-400 mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-slate-400">
                      Specializes in <span className="font-semibold text-slate-300">{member.specialty}</span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-16 text-center">
              <p className="text-lg text-slate-400 mb-6">
                Want to join our global collective?
              </p>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-base bg-white/5 border-white/10 text-white hover:bg-white/10"
                  data-testid="button-join-team"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Delivery Model Timeline */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-teal-500/5 to-background">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                How We Transform Brands
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                A proven three-phase approach that turns vision into autonomous growth
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-orange-500/20" />
            
            {timeline.map((phase, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="relative">
                  <div className="text-center mb-6">
                    <div className="inline-flex w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 items-center justify-center text-white font-bold text-2xl relative z-10 shadow-lg shadow-emerald-500/20">
                      {index + 1}
                    </div>
                  </div>
                  <div className="text-center p-6 rounded-xl border bg-card hover-elevate transition-all duration-500">
                    <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-semibold mb-4">
                      {phase.phase}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-base text-muted-foreground">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.1),transparent_50%)]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <Award className="h-16 w-16 mx-auto mb-6 text-emerald-400" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Build the Future?
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
              Join innovative brands already transforming with OARC Digital's global talent and AI-powered systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="group text-base bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 shadow-lg shadow-emerald-500/20"
                  data-testid="button-start-project"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-base bg-white/5 border-white/10 text-white hover:bg-white/10"
                  data-testid="button-view-all-services"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-16 grid grid-cols-3 gap-8 pt-12 border-t border-slate-800">
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">15+</div>
                <div className="text-sm text-slate-500">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">24/7</div>
                <div className="text-sm text-slate-500">AI Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
                <div className="text-sm text-slate-500">Focused on Growth</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
