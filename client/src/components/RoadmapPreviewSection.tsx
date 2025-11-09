import { Calendar } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function RoadmapPreviewSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="bg-card border rounded-2xl p-8 md:p-12 text-center hover-elevate transition-all duration-500">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Calendar className="h-8 w-8 text-primary" />
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" data-testid="heading-roadmap-2026">
              Our Roadmap for 2026
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-roadmap-description">
              Discover our exciting plans for the future. New AI capabilities, expanded services, and innovative solutions coming your way.
            </p>

            {/* CTA Button */}
            <Link href="/roadmap">
              <Button 
                variant="outline" 
                size="lg"
                className="text-base"
                data-testid="button-view-roadmap"
              >
                View Roadmap
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
