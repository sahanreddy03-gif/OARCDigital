import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const TechEnabledSection = () => {
  const features = [
    {
      title: "From brief to review and sign off",
      description: "Welcome to OARC Digital. Quickly submit a brief, review in platform, keep track of usage and more in one easy place.",
      image: "https://cdn.sanity.io/images/k0dlbavy/production/22cec7d799686d9aafd24b057a1bbd55dd88c070-1040x880.png?q=100&auto=format&fit=min"
    },
    {
      title: "Integrate with your favorite platforms",
      description: "Already using platforms like Asana/Jira/Slack? They integrate too.",
      image: "https://cdn.sanity.io/images/k0dlbavy/production/06c73269db2d7c929e816d2ffe0ac19439828293-1040x880.png?q=100&auto=format&fit=min"
    },
    {
      title: "Organize and share all your brand assets",
      description: "Stop searching—store and organize everything on our platform.",
      image: "https://cdn.sanity.io/images/k0dlbavy/production/9660de1da8865b4118020eb8c78d96205206ca43-492x546.png?q=100&auto=format&fit=min"
    },
    {
      title: "Learn from our customers' successful projects",
      description: "Reference work from the world's best brands on our platform.",
      image: "https://cdn.sanity.io/images/k0dlbavy/production/916c0e6bd31f6432b767f6986d93034e50299135-2128x880.png?q=100&auto=format&fit=min"
    }
  ];

  return (
    <section className="relative bg-background py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal delay={0}>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-sm md:text-base text-muted-foreground mb-4 tracking-wide uppercase">
              easy & hassle-free
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
              Tech enabled and made to{" "}
              <span className="italic">work for you.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              No matter your creative need, submitting and managing a project is effortless.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                data-testid="button-tech-learn-more"
              >
                Learn more
              </Button>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-16 md:mt-20">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div 
                className="group hover-elevate rounded-lg overflow-hidden bg-card"
                data-testid={`card-tech-feature-${index}`}
              >
                <div className="aspect-[13/11] overflow-hidden bg-muted">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold font-heading mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechEnabledSection;
