import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Users, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import brandImage from '@assets/generated_images/Brand_Image_Library_Card_94571438.png';
import keyArt from '@assets/generated_images/Key_Art_Composition_Card_eb4acb99.png';
import motionGraphics from '@assets/generated_images/Motion_Graphics_Card_dcb90033.png';
import characterDev from '@assets/generated_images/Character_Development_Card_f5d07add.png';
import voiceover from '@assets/generated_images/Voiceover_Generation_Card_b5ecfb72.png';

const services = [
  {
    icon: Sparkles,
    title: "AI Creative",
    description: "From video production to brand imagery, we deliver AI-powered creative that converts.",
    path: "/services/ai-creative",
    hasFloatingImages: true,
  },
  {
    icon: Users,
    title: "Hire AI Employees",
    description: "Scale your team with AI-powered employees for sales, support, and administration.",
    path: "/services/ai-employees",
    hasFloatingImages: false,
  },
  {
    icon: DollarSign,
    title: "Revenue Automation",
    description: "Automated funnels and follow-ups that convert leads into paying customers.",
    path: "/services/revenue-automation",
    hasFloatingImages: false,
  },
];

const creativeImages = [
  { text: "Brand Image", image: brandImage },
  { text: "Key Art", image: keyArt },
  { text: "Motion Graphics", image: motionGraphics },
  { text: "Character Design", image: characterDev },
  { text: "Voiceover", image: voiceover },
];

export default function ServiceGrid() {
  const duplicatedImages = [...creativeImages, ...creativeImages];

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-br from-[#f8f3ff] to-[#fff5f7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-wider font-black text-primary mb-4">
            Let's Talk
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black font-display tracking-tight leading-[0.95]">
            Supertalented. Superfast. <span className="italic font-black">Super responsive.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.path}>
              <Card 
                className="relative p-8 min-h-[450px] flex flex-col hover-elevate hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in cursor-pointer overflow-hidden group bg-background border-2"
                data-testid={`card-service-${index}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-3xl md:text-4xl font-black font-display mb-4 leading-tight">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {service.hasFloatingImages && (
                  <div className="mb-6 overflow-hidden -mx-8">
                    <div className="flex animate-scroll-fast">
                      {duplicatedImages.map((item, i) => (
                        <div key={i} className="flex-shrink-0 px-2">
                          <div className="relative w-32 h-20 rounded-lg overflow-hidden shadow-md">
                            <img 
                              src={item.image} 
                              alt={item.text}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent"></div>
                            <div className="absolute bottom-1 left-2 right-2">
                              <span className="text-[10px] font-bold text-background line-clamp-1">
                                {item.text}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Button variant="ghost" className="w-full justify-between group/btn mt-auto px-0 font-bold">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </Button>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
