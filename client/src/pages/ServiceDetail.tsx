import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check } from "lucide-react";
import { Link, useParams } from "wouter";

const serviceData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
}> = {
  "ai-creative": {
    title: "AI Creative",
    subtitle: "AI-powered creative production at scale",
    description: "From video production to brand imagery, we deliver AI-powered creative that converts. Our team combines cutting-edge AI technology with human creativity to produce stunning visuals, engaging videos, and compelling content that drives results.",
    features: [
      "Character Design & Development",
      "Voice + Avatar Generation",
      "Social Media Content Creation",
      "Motion Graphics & Animation",
      "Product Visuals & Photography",
      "Reels & TikToks Production",
      "Professional Video Production",
      "Brand Image & Identity",
      "Website & Landing Page Design",
    ],
    benefits: [
      "60% more efficient than traditional creative production",
      "Maintain brand consistency across all channels",
      "Scale content production without scaling costs",
      "Faster turnaround times with AI assistance",
      "Professional quality with human oversight",
    ],
  },
  "ai-employees": {
    title: "Hire AI Employees",
    subtitle: "Scale your team with AI-powered employees",
    description: "Add specialized AI employees to your team for sales, support, and administration. Our AI employees are trained on your business processes and integrate seamlessly with your existing tools, providing 24/7 availability without the overhead.",
    features: [
      "Sales AI Employees - Lead qualification and outreach",
      "Support AI Employees - Customer service and troubleshooting",
      "Admin AI Employees - Data entry and scheduling",
      "Custom training on your business processes",
      "Integration with existing tools and systems",
      "Continuous learning and improvement",
      "24/7 availability and instant response",
    ],
    benefits: [
      "Reduce staffing costs by up to 70%",
      "Instant scalability during peak periods",
      "Consistent quality and brand voice",
      "Free up human employees for strategic work",
      "Multilingual support capabilities",
    ],
  },
  "revenue-automation": {
    title: "Revenue Automation",
    subtitle: "Automated funnels that convert leads into customers",
    description: "Build automated marketing and sales funnels that work 24/7 to convert leads into paying customers. Our revenue automation combines AI-powered follow-ups, personalized nurturing, and intelligent lead scoring to maximize conversion rates.",
    features: [
      "Automated lead capture and qualification",
      "Intelligent email and SMS follow-up sequences",
      "Personalized content delivery",
      "Multi-channel nurture campaigns",
      "Lead scoring and prioritization",
      "Sales funnel optimization",
      "ROI tracking and reporting",
    ],
    benefits: [
      "Never miss a lead with automated follow-ups",
      "Increase conversion rates by up to 180%",
      "Reduce sales cycle length",
      "Maximize lifetime customer value",
      "Full visibility into funnel performance",
    ],
  },
};

export default function ServiceDetail() {
  const params = useParams();
  const serviceKey = params.service || "ai-creative";
  const service = serviceData[serviceKey] || serviceData["ai-creative"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-chart-2/10 to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Link href="/">
            <Button variant="ghost" className="mb-8" data-testid="button-back">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold font-display tracking-tight mb-6">
            {service.title}
          </h1>
          <p className="text-2xl text-muted-foreground mb-8 max-w-3xl">
            {service.subtitle}
          </p>
          <Button size="lg" className="rounded-full" data-testid="button-get-started">
            Get Started
          </Button>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold font-display mb-6">About This Service</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold font-display mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-chart-4/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-chart-4" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold font-display mb-12 text-center">What's Included</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <Card key={index} className="p-6 hover-elevate hover:shadow-lg transition-all" data-testid={`card-feature-${index}`}>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="font-medium">{feature}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how {service.title.toLowerCase()} can transform your business and drive real revenue growth.
          </p>
          <Button 
            size="lg" 
            className="rounded-full bg-background text-primary hover:bg-background/90"
            data-testid="button-contact-sales"
          >
            Contact Sales
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
