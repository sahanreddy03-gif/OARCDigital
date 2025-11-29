import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Smartphone,
  Cog,
  Workflow,
  Rocket,
  ArrowRight 
} from "lucide-react";

interface TechCard {
  title: string;
  description: string;
  icon: React.ElementType;
  variant: 'lime' | 'cream' | 'sage' | 'teal';
}

const TechEnabledSection = () => {
  const techCards: TechCard[] = [
    {
      title: "Custom mobile apps built for your workflow.",
      description: "From iOS to Android, we develop native and cross-platform apps that put your business in your customers' pockets—24/7 accessibility, zero friction.",
      icon: Smartphone,
      variant: 'lime',
    },
    {
      title: "Software that removes bottlenecks.",
      description: "We identify what slows you down and build tailored solutions—whether it's inventory tracking, client portals, or internal dashboards.",
      icon: Cog,
      variant: 'cream',
    },
    {
      title: "Automation that runs while you sleep.",
      description: "Repetitive tasks drain your team. Our AI-powered workflows handle invoicing, follow-ups, and data sync so you focus on growth.",
      icon: Workflow,
      variant: 'teal',
    },
    {
      title: "Launch faster. Scale smarter.",
      description: "OARC builds MVPs in weeks, not months. We move at startup speed with enterprise-grade reliability—Malta-based support included.",
      icon: Rocket,
      variant: 'sage',
    },
  ];

  const getCardStyles = (variant: TechCard['variant']) => {
    switch (variant) {
      case 'lime':
        return {
          bg: 'bg-[#c4ff4d]',
          text: 'text-[#1a2e29]',
          descText: 'text-[#1a2e29]/70',
          iconBg: 'bg-[#1a2e29]/10',
          iconColor: 'text-[#1a2e29]'
        };
      case 'cream':
        return {
          bg: 'bg-[#f5f0e6]',
          text: 'text-[#1a2e29]',
          descText: 'text-[#1a2e29]/60',
          iconBg: 'bg-[#1a2e29]/10',
          iconColor: 'text-[#1a2e29]'
        };
      case 'sage':
        return {
          bg: 'bg-[#a8b892]',
          text: 'text-[#1a2e29]',
          descText: 'text-[#1a2e29]/70',
          iconBg: 'bg-[#1a2e29]/10',
          iconColor: 'text-[#1a2e29]'
        };
      case 'teal':
        return {
          bg: 'bg-[#3d5a54]',
          text: 'text-white',
          descText: 'text-white/80',
          iconBg: 'bg-white/15',
          iconColor: 'text-white'
        };
      default:
        return {
          bg: 'bg-[#f5f0e6]',
          text: 'text-[#1a2e29]',
          descText: 'text-[#1a2e29]/60',
          iconBg: 'bg-[#1a2e29]/10',
          iconColor: 'text-[#1a2e29]'
        };
    }
  };

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <h2 
              className="text-[#1a2e29] font-bold mb-4"
              style={{ 
                fontSize: 'clamp(2rem, 5vw, 3.25rem)', 
                letterSpacing: '-0.03em', 
                lineHeight: '1.1' 
              }}
            >
              Custom solutions that{" "}
              <span className="italic font-medium" style={{ color: '#c4ff4d' }}>
                simplify your business
              </span>.
            </h2>
            <p className="text-base md:text-lg text-[#1a2e29]/60 leading-relaxed max-w-lg">
              We build mobile apps, software platforms, and AI automations tailored to how you actually work—making business easier, faster, and more profitable.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link href="/contact">
              <Button 
                size="default"
                className="bg-[#1a2e29] hover:bg-[#0f1c18] text-white font-medium rounded-full px-6 group"
                data-testid="button-tech-learn-more"
              >
                Start a project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Desktop: Bento Grid Layout | Mobile: Stack */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* Card 1 - Lime - Large Left */}
          <div 
            className={`
              group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]
              ${getCardStyles('lime').bg}
              md:col-span-7 min-h-[220px] md:min-h-[280px]
            `}
            data-testid="card-tech-feature-0"
          >
            <div className="p-6 md:p-8 h-full flex flex-col">
              <div className={`w-11 h-11 md:w-12 md:h-12 rounded-xl ${getCardStyles('lime').iconBg} flex items-center justify-center mb-5`}>
                <Smartphone className={`w-5 h-5 md:w-6 md:h-6 ${getCardStyles('lime').iconColor}`} strokeWidth={1.5} />
              </div>
              <h3 
                className={`font-semibold mb-3 ${getCardStyles('lime').text}`}
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)', lineHeight: '1.2', letterSpacing: '-0.02em' }}
              >
                {techCards[0].title}
              </h3>
              <p className={`text-sm md:text-base leading-relaxed ${getCardStyles('lime').descText} max-w-md`}>
                {techCards[0].description}
              </p>
            </div>
          </div>

          {/* Card 2 - Cream - Small Right */}
          <div 
            className={`
              group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]
              ${getCardStyles('cream').bg}
              md:col-span-5 min-h-[200px] md:min-h-[280px]
            `}
            data-testid="card-tech-feature-1"
          >
            <div className="p-6 md:p-8 h-full flex flex-col">
              <div className={`w-11 h-11 md:w-12 md:h-12 rounded-xl ${getCardStyles('cream').iconBg} flex items-center justify-center mb-5`}>
                <Cog className={`w-5 h-5 md:w-6 md:h-6 ${getCardStyles('cream').iconColor}`} strokeWidth={1.5} />
              </div>
              <h3 
                className={`font-semibold mb-3 ${getCardStyles('cream').text}`}
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)', lineHeight: '1.2', letterSpacing: '-0.02em' }}
              >
                {techCards[1].title}
              </h3>
              <p className={`text-sm md:text-base leading-relaxed ${getCardStyles('cream').descText}`}>
                {techCards[1].description}
              </p>
            </div>
          </div>

          {/* Card 3 - Teal - Small Left */}
          <div 
            className={`
              group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]
              ${getCardStyles('teal').bg}
              md:col-span-5 min-h-[200px] md:min-h-[280px]
            `}
            data-testid="card-tech-feature-2"
          >
            <div className="p-6 md:p-8 h-full flex flex-col">
              <div className={`w-11 h-11 md:w-12 md:h-12 rounded-xl ${getCardStyles('teal').iconBg} flex items-center justify-center mb-5`}>
                <Workflow className={`w-5 h-5 md:w-6 md:h-6 ${getCardStyles('teal').iconColor}`} strokeWidth={1.5} />
              </div>
              <h3 
                className={`font-semibold mb-3 ${getCardStyles('teal').text}`}
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)', lineHeight: '1.2', letterSpacing: '-0.02em' }}
              >
                {techCards[2].title}
              </h3>
              <p className={`text-sm md:text-base leading-relaxed ${getCardStyles('teal').descText}`}>
                {techCards[2].description}
              </p>
            </div>
          </div>

          {/* Card 4 - Sage - Large Right */}
          <div 
            className={`
              group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]
              ${getCardStyles('sage').bg}
              md:col-span-7 min-h-[220px] md:min-h-[280px]
            `}
            data-testid="card-tech-feature-3"
          >
            <div className="p-6 md:p-8 h-full flex flex-col">
              <div className={`w-11 h-11 md:w-12 md:h-12 rounded-xl ${getCardStyles('sage').iconBg} flex items-center justify-center mb-5`}>
                <Rocket className={`w-5 h-5 md:w-6 md:h-6 ${getCardStyles('sage').iconColor}`} strokeWidth={1.5} />
              </div>
              <h3 
                className={`font-semibold mb-3 ${getCardStyles('sage').text}`}
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)', lineHeight: '1.2', letterSpacing: '-0.02em' }}
              >
                {techCards[3].title}
              </h3>
              <p className={`text-sm md:text-base leading-relaxed ${getCardStyles('sage').descText} max-w-md`}>
                {techCards[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechEnabledSection;
