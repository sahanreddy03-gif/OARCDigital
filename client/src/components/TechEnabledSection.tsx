import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { 
  BarChart3, 
  Workflow, 
  Sparkles, 
  TrendingUp, 
  Headphones, 
  Server 
} from "lucide-react";

interface TechCard {
  title: string;
  description: string;
  icon: React.ElementType;
  gridClass: string;
  accent: string;
}

const TechEnabledSection = () => {
  const techCards: TechCard[] = [
    {
      title: "AI-Powered Analytics",
      description: "Real-time insights and intelligent reporting that drive informed decisions. Track performance metrics and uncover hidden opportunities.",
      icon: BarChart3,
      gridClass: "md:col-span-2 md:row-span-1",
      accent: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "Automation Workflows",
      description: "Seamless integrations with Make.com, Zapier, and 200+ platforms. Automate repetitive tasks and scale operations effortlessly.",
      icon: Workflow,
      gridClass: "md:col-span-1 md:row-span-2",
      accent: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "Creative AI Tools",
      description: "Midjourney, DALL-E, Runway, and cutting-edge generative AI at your fingertips.",
      icon: Sparkles,
      gridClass: "md:col-span-1 md:row-span-1",
      accent: "from-violet-500/20 to-purple-500/20"
    },
    {
      title: "Data-Driven Strategy",
      description: "Performance optimization powered by machine learning algorithms.",
      icon: TrendingUp,
      gridClass: "md:col-span-1 md:row-span-1",
      accent: "from-amber-500/20 to-orange-500/20"
    },
    {
      title: "24/7 AI Support",
      description: "Always-on customer assistance that never sleeps. Instant responses, intelligent routing, and seamless handoffs to human agents.",
      icon: Headphones,
      gridClass: "md:col-span-1 md:row-span-1",
      accent: "from-rose-500/20 to-pink-500/20"
    },
    {
      title: "Scalable Infrastructure",
      description: "Enterprise-grade reliability built for growth. Handle millions of requests with 99.99% uptime guarantee.",
      icon: Server,
      gridClass: "md:col-span-2 md:row-span-1",
      accent: "from-teal-500/20 to-emerald-500/20"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-[hsl(240,10%,8%)]">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal delay={0}>
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <p className="text-sm md:text-base text-emerald-400 mb-4 tracking-wide uppercase font-medium">
              Advanced Technology Stack
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight text-white">
              Tech enabled and made to{" "}
              <span className="italic bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                work for you
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Cutting-edge AI and automation infrastructure that powers your growth. 
              Every tool, integration, and system designed for maximum impact.
            </p>
            <Link href="/contact">
              <Button 
                size="default"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium border-emerald-400/50"
                data-testid="button-tech-learn-more"
              >
                Explore Our Tech
              </Button>
            </Link>
          </div>
        </ScrollReveal>

        {/* Masonry Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          {techCards.map((card, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <div 
                className={`group relative h-full rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 ${card.gridClass}`}
                data-testid={`card-tech-feature-${index}`}
              >
                {/* Glassmorphism background */}
                <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl" />
                
                {/* Gradient accent overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 blur-xl rounded-2xl" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full p-6 md:p-8 flex flex-col">
                  {/* Icon */}
                  <div className="mb-4 md:mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 group-hover:border-emerald-400/50 transition-colors duration-300">
                      <card.icon className="w-6 h-6 md:w-7 md:h-7 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
                    </div>
                  </div>
                  
                  {/* Text content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold font-heading mb-3 text-white group-hover:text-emerald-50 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {card.description}
                    </p>
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-emerald-500/50 rounded-br-2xl" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom stats row */}
        <ScrollReveal delay={0.6}>
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: "200+", label: "Integrations" },
              { value: "99.99%", label: "Uptime" },
              { value: "50ms", label: "Response Time" },
              { value: "24/7", label: "AI Support" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-4 md:p-6 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.05]"
                data-testid={`stat-tech-${index}`}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TechEnabledSection;
