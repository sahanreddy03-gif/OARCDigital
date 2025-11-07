import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  ArrowRight, Sparkles, Bot, TrendingUp, Zap, Layers, 
  Globe, Target, Rocket,
  MapPin, Code, Palette, Video, MessageSquare, BarChart3, ChevronDown
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// Import high-quality background images
import heroAI from '@assets/stock_images/futuristic_ai_techno_3740c941.jpg';
import aiTech1 from '@assets/stock_images/futuristic_ai_techno_dc34ca8b.jpg';
import aiTech2 from '@assets/stock_images/futuristic_ai_techno_5fed067c.jpg';
import creativeWorkspace1 from '@assets/stock_images/modern_creative_work_7e747c5f.jpg';
import creativeWorkspace2 from '@assets/stock_images/modern_creative_work_94f88f02.jpg';
import globalTeam1 from '@assets/stock_images/global_team_diversit_da94d0da.jpg';
import globalTeam2 from '@assets/stock_images/global_team_diversit_bcf9cae8.jpg';
import dataViz1 from '@assets/stock_images/abstract_data_visual_de98a4d9.jpg';
import dataViz2 from '@assets/stock_images/abstract_data_visual_8294da75.jpg';
import automation1 from '@assets/stock_images/automation_robotics__209598eb.jpg';
import automation2 from '@assets/stock_images/automation_robotics__65fcd6e4.jpg';

// Parallax scroll effect hook
function useParallax() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return offset;
}

// Scroll-triggered animation wrapper with enhanced effects
function ScrollReveal({ children, delay = 0, className = "", variant = "fade-up" }: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string;
  variant?: "fade-up" | "fade-in" | "scale" | "slide-right";
}) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const variants = {
    "fade-up": isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16',
    "fade-in": isVisible ? 'opacity-100' : 'opacity-0',
    "scale": isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
    "slide-right": isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
  };
  
  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-1000 ${variants[variant]} ${className}`}
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

export default function WhyUs() {
  const parallaxOffset = useParallax();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Why OARC Digital | AI-Powered Creative & Automation Agency";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Experience the future of creative automation. Global talent, AI-powered innovation, and revenue transformation at scale."
      );
    }
  }, []);

  const beliefs = [
    { text: "AI-Powered Creativity", icon: Sparkles },
    { text: "Borderless Talent", icon: Globe },
    { text: "Autonomous Growth", icon: TrendingUp }
  ];

  const differentiators = [
    {
      icon: Sparkles,
      title: "Creative AI",
      tagline: "Intelligence meets imagination",
      image: aiTech1,
      accent: "emerald"
    },
    {
      icon: Bot,
      title: "24/7 AI Team",
      tagline: "Always working, never sleeping",
      image: automation1,
      accent: "orange"
    },
    {
      icon: TrendingUp,
      title: "Revenue Automation",
      tagline: "Growth on autopilot",
      image: dataViz1,
      accent: "blue"
    },
    {
      icon: Layers,
      title: "Complete Ecosystems",
      tagline: "Everything in perfect harmony",
      image: creativeWorkspace1,
      accent: "purple"
    },
    {
      icon: Zap,
      title: "Scalable Innovation",
      tagline: "Systems that evolve",
      image: dataViz2,
      accent: "teal"
    },
    {
      icon: Globe,
      title: "Global & Fearless",
      tagline: "Young, diverse, unstoppable",
      image: globalTeam1,
      accent: "pink"
    }
  ];

  const stats = [
    { value: "50%", label: "Faster Output", icon: Rocket },
    { value: "10K+", label: "Hours Saved", icon: Bot },
    { value: "40%", label: "Higher Engagement", icon: TrendingUp },
    { value: "3x", label: "ROI Average", icon: Target }
  ];

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Creative AI Director",
      location: "Singapore",
      specialty: "AI-Enhanced Design",
      icon: Palette,
    },
    {
      name: "Sofia Rodriguez",
      role: "Automation Architect",
      location: "Barcelona",
      specialty: "Revenue Systems",
      icon: Code,
    },
    {
      name: "Yuki Tanaka",
      role: "Motion & Video Lead",
      location: "Tokyo",
      specialty: "AI Video Production",
      icon: Video,
    },
    {
      name: "Marcus Johnson",
      role: "Growth Strategist",
      location: "New York",
      specialty: "Data Analytics",
      icon: BarChart3,
    },
    {
      name: "Priya Sharma",
      role: "Content AI Specialist",
      location: "Mumbai",
      specialty: "AI Copywriting",
      icon: MessageSquare,
    },
    {
      name: "Lars Nielsen",
      role: "Innovation Lead",
      location: "Copenhagen",
      specialty: "Emerging Tech",
      icon: Sparkles,
    }
  ];

  const timeline = [
    { phase: "Strategy", title: "Discover & Design", number: "01" },
    { phase: "Activation", title: "Build & Launch", number: "02" },
    { phase: "Automation", title: "Scale & Optimize", number: "03" }
  ];

  return (
    <Layout>
      <div className="overflow-hidden">
        {/* Hero - Full-Screen Cinematic with Parallax */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Parallax Background */}
          <div 
            className="absolute inset-0 z-0"
            style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
          >
            <img 
              src={heroAI} 
              alt="AI Technology" 
              className="w-full h-[120%] object-cover"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal variant="scale">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Where Creativity Meets
                <br />
                Intelligent Automation
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={200} variant="fade-in">
              <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
                Global Talent. AI-Powered. Revenue-Driven.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-6 text-lg group"
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
                    className="px-8 py-6 text-lg backdrop-blur-sm bg-white/10 border-white/20"
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
            <ChevronDown className="h-8 w-8 text-emerald-400" />
          </div>
        </section>

        {/* Core Beliefs - Minimal Text, Maximum Impact */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
                What We Believe
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {beliefs.map((belief, index) => (
                <ScrollReveal key={index} delay={index * 100} variant="scale">
                  <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover-elevate">
                    <div className="inline-flex p-6 rounded-full bg-emerald-500/10 mb-6">
                      <belief.icon className="h-12 w-12 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold">{belief.text}</h3>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Differentiators - Image-First Cards */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  What Makes Us Unstoppable
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Six pillars of transformation
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((item, index) => (
                <ScrollReveal key={index} delay={index * 50} variant="fade-up">
                  <div
                    className="group relative h-96 rounded-2xl overflow-hidden hover-elevate active-elevate-2 transition-all duration-700"
                    data-testid={`card-differentiator-${index}`}
                  >
                    {/* Background Image */}
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-700" />
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-8">
                      <div className={`inline-flex p-4 rounded-xl mb-4 w-fit ${
                        item.accent === 'emerald' ? 'bg-emerald-500/20' :
                        item.accent === 'orange' ? 'bg-orange-500/20' :
                        item.accent === 'blue' ? 'bg-blue-500/20' :
                        item.accent === 'purple' ? 'bg-purple-500/20' :
                        item.accent === 'teal' ? 'bg-teal-500/20' :
                        'bg-pink-500/20'
                      }`}>
                        <item.icon className={`h-8 w-8 ${
                          item.accent === 'emerald' ? 'text-emerald-400' :
                          item.accent === 'orange' ? 'text-orange-400' :
                          item.accent === 'blue' ? 'text-blue-400' :
                          item.accent === 'purple' ? 'text-purple-400' :
                          item.accent === 'teal' ? 'text-teal-400' :
                          'text-pink-400'
                        }`} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-base md:text-lg text-slate-300">
                        {item.tagline}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Living Metrics - Animated Counters */}
        <section 
          className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
          style={{
            backgroundImage: `url(${aiTech2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/80" />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
                Results That Speak
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScrollReveal key={index} delay={index * 100} variant="scale">
                  <div 
                    className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover-elevate"
                    data-testid={`stat-${index}`}
                  >
                    <stat.icon className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <p className="text-sm md:text-base text-slate-300">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Global Talent Team - Image Background */}
        <section 
          className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
          style={{
            backgroundImage: `url(${globalTeam2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Global Talent, Unified Vision
                </h2>
                <p className="text-lg md:text-xl text-slate-300">
                  Young, fearless creatives from around the world
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <ScrollReveal key={index} delay={index * 75} variant="fade-up">
                  <div
                    className="group p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover-elevate transition-all duration-500"
                    data-testid={`card-team-${index}`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                        <member.icon className="h-6 w-6 text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-sm text-emerald-400 mb-2">{member.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{member.location}</span>
                    </div>
                    <p className="text-sm text-slate-300">{member.specialty}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline - Minimal & Visual */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-950">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
                How We Transform Brands
              </h2>
            </ScrollReveal>

            <div className="space-y-8">
              {timeline.map((phase, index) => (
                <ScrollReveal key={index} delay={index * 150} variant="slide-right">
                  <div className="flex items-center gap-6 p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 hover-elevate">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{phase.number}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{phase.phase}</h3>
                      <p className="text-lg text-slate-400">{phase.title}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Image Background */}
        <section 
          className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
          style={{
            backgroundImage: `url(${creativeWorkspace2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <ScrollReveal variant="scale">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Build the Future?
              </h2>
              <p className="text-lg md:text-xl text-slate-300 mb-12">
                Join the brands that chose transformation over tradition
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-6 text-lg group"
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
                    className="px-8 py-6 text-lg backdrop-blur-sm bg-white/10 border-white/20"
                    data-testid="button-view-all-services"
                  >
                    View All Services
                  </Button>
                </Link>
              </div>

              <div className="flex justify-center gap-12 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-emerald-400">15+</div>
                  <div className="text-sm text-slate-400">Countries</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-emerald-400">24/7</div>
                  <div className="text-sm text-slate-400">AI Support</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-emerald-400">100%</div>
                  <div className="text-sm text-slate-400">Dedicated</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </Layout>
  );
}
