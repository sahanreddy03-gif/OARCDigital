import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  PenLine,
  MessageSquare,
  FolderOpen,
  Star,
  ArrowRight 
} from "lucide-react";

interface TechCard {
  title: string;
  description: string;
  icon: React.ElementType;
  variant: 'lime' | 'cream' | 'sage' | 'teal' | 'image';
  size: 'standard' | 'tall';
  imageUrl?: string;
}

const TechEnabledSection = () => {
  const techCards: TechCard[] = [
    {
      title: "From brief to review and sign off.",
      description: "Welcome to our platform. Quickly submit a brief, review in platform, keep track of usage and more in one easy place.",
      icon: PenLine,
      variant: 'lime',
      size: 'standard',
    },
    {
      title: "Integrate with your favorite platforms.",
      description: "Already using platforms like Asana/Jira/Slack? They integrate too.",
      icon: MessageSquare,
      variant: 'cream',
      size: 'standard',
    },
    {
      title: "Organize and share all your brand assets",
      description: "Stop searching—store and organize everything on our platform.",
      icon: FolderOpen,
      variant: 'teal',
      size: 'tall',
    },
    {
      title: "Learn from our customers' successful projects",
      description: "Reference work from the world's best brands on our platform.",
      icon: Star,
      variant: 'sage',
      size: 'tall',
    },
  ];

  const getCardStyles = (variant: TechCard['variant']) => {
    switch (variant) {
      case 'lime':
        return {
          bg: 'bg-[#d4ff47]',
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
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-[#f7f4ed]">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        {/* Section Header - Superside Style */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <h2 
            className="text-[#1a2e29] font-bold mb-5"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              letterSpacing: '-0.03em', 
              lineHeight: '1.1' 
            }}
          >
            Tech enabled and made to{" "}
            <span className="italic" style={{ color: '#c4ff4d' }}>
              work for you
            </span>.
          </h2>
          <p className="text-base md:text-lg text-[#1a2e29]/60 mb-8 max-w-xl leading-relaxed">
            No matter your creative need, submitting and managing a project is effortless.
          </p>
          <Link href="/contact">
            <Button 
              size="default"
              className="bg-[#1a2e29] hover:bg-[#0f1c18] text-white font-medium rounded-full px-6"
              data-testid="button-tech-learn-more"
            >
              Learn more
            </Button>
          </Link>
        </div>

        {/* Card Grid - Superside Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {techCards.map((card, index) => {
            const styles = getCardStyles(card.variant);
            return (
              <div 
                key={index}
                className={`
                  group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.01]
                  ${styles.bg}
                  ${card.size === 'tall' ? 'min-h-[320px] md:min-h-[380px]' : 'min-h-[200px] md:min-h-[220px]'}
                `}
                data-testid={`card-tech-feature-${index}`}
              >
                <div className="p-6 md:p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${styles.iconBg} flex items-center justify-center mb-5 md:mb-6`}>
                    <card.icon className={`w-5 h-5 md:w-6 md:h-6 ${styles.iconColor}`} strokeWidth={1.5} />
                  </div>
                  
                  {/* Title */}
                  <h3 
                    className={`font-semibold mb-3 ${styles.text}`}
                    style={{ 
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                      lineHeight: '1.2',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {card.title}
                  </h3>
                  
                  {/* Description */}
                  <p className={`text-sm md:text-base leading-relaxed ${styles.descText}`}>
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Image Cards Row - with phone mockups */}
        <div className="mt-4 md:mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {/* Brand Assets Card with Image */}
          <div 
            className="relative rounded-2xl overflow-hidden bg-[#3d5a54] min-h-[300px] md:min-h-[400px]"
            data-testid="card-tech-image-1"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#3d5a54]/90" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center mb-4">
                <FolderOpen className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-semibold text-xl md:text-2xl mb-2" style={{ lineHeight: '1.2' }}>
                Organize and share all your brand assets
              </h3>
              <p className="text-white/70 text-sm md:text-base">
                Stop searching—store and organize everything on our platform.
              </p>
            </div>
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 right-0 w-full h-2/3 bg-gradient-to-br from-[#4a6b64] to-[#3d5a54]" />
          </div>

          {/* Customer Projects Card with Image */}
          <div 
            className="relative rounded-2xl overflow-hidden bg-[#a8b892] min-h-[300px] md:min-h-[400px]"
            data-testid="card-tech-image-2"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#a8b892]/95" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="w-10 h-10 rounded-lg bg-[#1a2e29]/10 flex items-center justify-center mb-4">
                <Star className="w-5 h-5 text-[#1a2e29]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#1a2e29] font-semibold text-xl md:text-2xl mb-2" style={{ lineHeight: '1.2' }}>
                Learn from our customers' successful projects
              </h3>
              <p className="text-[#1a2e29]/70 text-sm md:text-base">
                Reference work from the world's best brands on our platform.
              </p>
            </div>
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 right-0 w-full h-2/3 bg-gradient-to-br from-[#bcc9a8] to-[#a8b892]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechEnabledSection;
