import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Users, DollarSign, ArrowRight, Palette, Video, Megaphone, Zap } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: Sparkles,
    title: "AI Creative",
    description: "From video production to brand imagery, we deliver AI-powered creative that converts.",
    path: "/services/ai-creative",
    gradient: "from-primary/10 to-chart-2/10",
    hasFloatingIcons: true,
  },
  {
    icon: Users,
    title: "Hire AI Employees",
    description: "Scale your team with AI-powered employees for sales, support, and administration.",
    path: "/services/ai-employees",
    gradient: "from-chart-2/10 to-chart-4/10",
    hasFloatingIcons: false,
  },
  {
    icon: DollarSign,
    title: "Revenue Automation",
    description: "Automated funnels and follow-ups that convert leads into paying customers.",
    path: "/services/revenue-automation",
    gradient: "from-chart-4/10 to-primary/10",
    hasFloatingIcons: false,
  },
];

const creativeServices = [
  { text: "Brand Image", icon: Palette },
  { text: "Video Production", icon: Video },
  { text: "Voiceover", icon: Megaphone },
  { text: "Motion Graphics", icon: Zap },
  { text: "Character Design", icon: Users },
  { text: "Social Content", icon: Sparkles },
];

export default function ServiceGrid() {
  return (
    <section id="services" className="py-20 md:py-28 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-wider font-bold text-primary mb-4">
            Let's Talk
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight">
            Supertalented. Superfast. <span className="italic font-black">Super responsive.</span>
          </h2>
        </div>

        <div className="md:hidden overflow-x-auto pb-4 -mx-6">
          <div className="flex gap-4 px-6 min-w-max">
            {services.map((service, index) => (
              <Link key={index} href={service.path}>
                <Card 
                  className={`relative p-6 w-80 min-h-80 flex flex-col hover-elevate hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gradient-to-br ${service.gradient} overflow-hidden group`}
                  data-testid={`card-service-${index}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-background/80 backdrop-blur flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-2xl font-black font-display mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>

                  {service.hasFloatingIcons && (
                    <div className="mb-4 overflow-hidden">
                      <div className="flex flex-wrap gap-2">
                        {creativeServices.map((item, i) => (
                          <div key={i} className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-background/60 backdrop-blur rounded-md">
                            <item.icon className="w-3 h-3 text-primary" />
                            <span>{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button variant="ghost" className="w-full justify-between group/btn mt-auto" size="sm">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.path}>
              <Card 
                className={`relative p-8 md:p-10 min-h-96 flex flex-col hover-elevate hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gradient-to-br ${service.gradient} overflow-hidden group`}
                data-testid={`card-service-${index}`}
              >
                <div className="w-14 h-14 rounded-xl bg-background/80 backdrop-blur flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-3xl font-black font-display mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {service.hasFloatingIcons && (
                  <div className="mb-6 overflow-hidden">
                    <div className="flex flex-wrap gap-2">
                      {creativeServices.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-background/60 backdrop-blur rounded-lg">
                          <item.icon className="w-3.5 h-3.5 text-primary" />
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Button variant="ghost" className="w-full justify-between group/btn mt-auto">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
