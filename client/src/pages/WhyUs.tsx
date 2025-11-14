import Layout from "@/components/layout/Layout";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import astronautBg from '@assets/IMG_8175_1763140846598.jpeg';

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
      title: "Creative + AI Synergy",
      description: "Where imagination meets intelligence",
      detail: "We don't just create beautiful work—we engineer creative systems that learn, adapt, and optimize. Every campaign is powered by AI-enhanced insights, ensuring your brand stands out while performing at peak efficiency."
    },
    {
      title: "AI Workforce 24/7",
      description: "Your always-on digital team",
      detail: "Scale infinitely with AI agents that handle customer service, content generation, data analysis, and more. Never sleep, never tire, always delivering excellence—freeing your human team to focus on strategic innovation."
    },
    {
      title: "Revenue on Autopilot",
      description: "Growth engines that never stop",
      detail: "We build intelligent revenue systems that identify opportunities, nurture leads, and close deals autonomously. Your sales pipeline becomes a self-optimizing machine that compounds results month after month."
    },
    {
      title: "End-to-End Ecosystems",
      description: "Complete transformation, not patchwork",
      detail: "We architect holistic digital ecosystems where every element—creative, tech, automation—works in perfect harmony. No silos, no gaps, just seamless experiences that delight customers and drive growth."
    },
    {
      title: "Innovation That Scales",
      description: "Future-proof systems that evolve",
      detail: "Our AI solutions don't just solve today's problems—they learn and adapt to tomorrow's challenges. Build once, benefit forever as your systems become smarter and more valuable with every interaction."
    },
    {
      title: "Global, Young, Fearless",
      description: "Fresh perspectives from everywhere",
      detail: "Our team spans continents and cultures, bringing diverse creative perspectives and cutting-edge AI expertise. We combine youthful energy with technical mastery to deliver work that breaks boundaries."
    }
  ];

  const stats = [
    { value: "50%", label: "Faster creative output" },
    { value: "10K+", label: "Hours saved through automation" },
    { value: "40%", label: "Higher engagement rates" },
    { value: "3x", label: "ROI improvement average" }
  ];

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Creative AI Director",
      location: "Singapore",
      specialty: "AI-Enhanced Design"
    },
    {
      name: "Sofia Rodriguez",
      role: "Automation Architect",
      location: "Barcelona",
      specialty: "Revenue Systems"
    },
    {
      name: "Yuki Tanaka",
      role: "Motion & Video Lead",
      location: "Tokyo",
      specialty: "AI Video Production"
    },
    {
      name: "Marcus Johnson",
      role: "Growth Strategist",
      location: "New York",
      specialty: "Data Analytics"
    },
    {
      name: "Priya Sharma",
      role: "Content AI Specialist",
      location: "Mumbai",
      specialty: "AI Copywriting"
    },
    {
      name: "Lars Nielsen",
      role: "Innovation Lead",
      location: "Copenhagen",
      specialty: "Emerging Tech"
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
      {/* Hero Section - Cinematic Astronaut with Film Grain & Color Grading */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Cinematic Background Image - Centered on Astronaut */}
        <div className="absolute inset-0">
          <img 
            src={astronautBg}
            alt="Astronaut working in creative office"
            className="w-full h-full object-cover object-center scale-105 transform"
            style={{ objectPosition: '50% 35%' }}
          />
          
          {/* Cinematic Color Grading: Warm Amber + Deep Teal Shadows */}
          <div 
            aria-hidden="true" 
            className="absolute inset-0 bg-gradient-to-b from-[rgba(20,8,6,0.5)] via-[rgba(20,8,6,0.4)] to-[rgba(10,25,30,0.65)] mix-blend-normal"
          ></div>
          
          {/* Vignette Effect - Darker edges, bright center */}
          <div 
            aria-hidden="true" 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 35%, rgba(0,0,0,0.6) 100%)'
            }}
          ></div>
          
          {/* Film Grain Overlay */}
          <div 
            aria-hidden="true" 
            className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
              backgroundRepeat: 'repeat',
              backgroundSize: '100px 100px'
            }}
          ></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 py-32 text-center">
          {/* Large Typography Hero */}
          <div className="mb-16">
            <h1 
              className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-none tracking-tight mb-8 drop-shadow-2xl" 
              data-testid="heading-hero"
            >
              <span className="text-white">WHY</span>
              <br />
              <span 
                className="text-[#00FF88]"
                style={{ 
                  textShadow: '0 6px 32px rgba(0,255,136,0.3), 0 0 60px rgba(0,255,136,0.2)' 
                }}
              >
                OARC
              </span>
            </h1>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/95 leading-relaxed drop-shadow-lg" data-testid="text-hero-tagline">
              Where Creativity Meets Intelligent Automation
            </p>
            <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto drop-shadow-md" data-testid="text-hero-description">
              Global Talent. AI-Powered. Revenue-Driven. We're a collective of young, fearless creatives from across the globe—united by AI, driven by results, obsessed with building brands that grow on autopilot.
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto Section - Bold Statement */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground uppercase mb-12" data-testid="heading-manifesto">
              Founded to pursue.
              <br />
              Created with rigor.
              <br />
              <span className="text-primary">Form, function, and feel.</span>
            </h2>
            <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-manifesto-description">
              We create — digital experiences designed to be lived in
            </p>
          </div>

          {/* Three Core Beliefs */}
          <div className="space-y-16">
            {beliefs.map((belief, index) => (
              <div key={index} className="border-l-4 border-primary pl-8 py-4" data-testid={`belief-${index}`}>
                <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-foreground">
                  {belief}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Poetry of Process - Stats Grid */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-6" data-testid="heading-poetry-of-process">
              The Poetry of Process
            </h2>
            <p className="text-xl text-white/60" data-testid="text-poetry-description">Results that speak louder than words</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 border border-white/10" data-testid={`stat-${index}`}>
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#00FF88] mb-4">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-white/60 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 border border-white/10" data-testid={`testimonial-${index}`}>
                <p className="text-lg md:text-xl text-white/90 italic leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm font-semibold text-[#00FF88] uppercase tracking-wide">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different - Editorial Grid */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-foreground mb-6" data-testid="heading-elevated">
              Elevated
              <br />
              Shaped Through
              <br />
              <span className="text-primary">Core Pieces</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl" data-testid="text-elevated-description">
              Six pillars of transformation that set us apart from every other agency
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {differentiators.map((item, index) => (
              <div key={index} className="space-y-6" data-testid={`differentiator-${index}`}>
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-lg md:text-xl font-medium text-primary">
                    {item.description}
                  </p>
                </div>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Team - Minimal Grid */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight mb-8" data-testid="heading-global-talent">
              Global Talent,
              <br />
              Unified Vision
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto" data-testid="text-global-talent-description">
              Young, fearless creatives and AI specialists from around the world—working together to transform how brands grow
            </p>
          </div>

          {/* Team Grid - Minimal Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="p-8 border border-white/10 hover:border-[#00FF88]/50 transition-colors duration-500"
                data-testid={`team-member-${index}`}
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm md:text-base text-[#00FF88] font-medium mb-2">
                      {member.role}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-white/40 uppercase tracking-wide mb-2">
                      {member.location}
                    </p>
                    <p className="text-base text-white/60">
                      {member.specialty}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Join CTA */}
          <div className="text-center">
            <p className="text-lg text-white/60 mb-6" data-testid="text-join-prompt">
              Want to join our global collective?
            </p>
            <Link href="/contact">
              <Button 
                variant="outline"
                size="lg"
                className="text-base bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40"
                data-testid="button-join-team"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final Statement - Quiet, Material, Clarity */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight mb-16" data-testid="heading-quiet-material-clarity">
            <span className="text-foreground">Quiet</span>
            <span className="text-muted-foreground mx-4 md:mx-8">·</span>
            <span className="text-foreground">Material</span>
            <span className="text-muted-foreground mx-4 md:mx-8">·</span>
            <span className="text-primary">Clarity</span>
          </h2>
          
          <div className="space-y-8 max-w-3xl mx-auto mb-16">
            <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed" data-testid="text-final-narrative">
              Every element feels carefully measured—creating space for the message to breathe, resonate, and live in quiet confidence.
            </p>
          </div>

          <Link href="/contact">
            <Button 
              size="lg"
              className="text-base px-8"
              data-testid="button-lets-build"
            >
              Let's Build Together
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
