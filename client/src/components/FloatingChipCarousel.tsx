import { Sparkles, Video, Palette, TrendingUp, Users, Megaphone, Target, Zap } from "lucide-react";

const services = [
  { text: "Brand Image Library", icon: Palette },
  { text: "Key Art Composition", icon: Sparkles },
  { text: "Adding Motion To Static", icon: Video },
  { text: "Character Development", icon: Users },
  { text: "Voiceover Generation", icon: Megaphone },
  { text: "AI-Enhanced Motion", icon: Zap },
  { text: "Rapid Idea Testing", icon: Target },
  { text: "Copy and Concept", icon: TrendingUp },
];

export default function FloatingChipCarousel() {
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <div className="w-full overflow-hidden py-2">
      <div className="flex animate-scroll whitespace-nowrap">
        {duplicatedServices.map((service, index) => (
          <div 
            key={index} 
            className="inline-flex items-center mx-2"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border border-border/50 rounded-lg hover-elevate transition-all">
              <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                <service.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs md:text-sm font-medium text-foreground whitespace-nowrap">
                {service.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
