"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Calendar, Sparkles } from "lucide-react";
import Link from "next/link";
import { registerGSAP, gsap, ScrollTrigger, EASE, DUR, STAG } from "@/lib/motion/gsap-system";

export default function CTASections() {
  const [formData, setFormData] = useState({
    businessName: "",
    contact: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const sectionRef = useRef<HTMLElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const icon1Ref = useRef<HTMLDivElement>(null);
  const icon2Ref = useRef<HTMLDivElement>(null);
  const formFieldsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();

    const ctx = gsap.context(() => {
      const trigger = sectionRef.current!;

      // Card 1 reveals from left
      gsap.fromTo(
        card1Ref.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: DUR.slow,
          ease: EASE.out,
          scrollTrigger: { trigger, start: "top 85%" },
        }
      );

      // Card 2 reveals from right
      gsap.fromTo(
        card2Ref.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: DUR.slow,
          ease: EASE.out,
          delay: 0.1,
          scrollTrigger: { trigger, start: "top 85%" },
        }
      );

      // Icon 1 scales in
      gsap.fromTo(
        icon1Ref.current,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: DUR.normal,
          ease: EASE.back,
          delay: 0.3,
          scrollTrigger: { trigger, start: "top 85%" },
        }
      );

      // Icon 2 scales in
      gsap.fromTo(
        icon2Ref.current,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: DUR.normal,
          ease: EASE.back,
          delay: 0.4,
          scrollTrigger: { trigger, start: "top 85%" },
        }
      );

      // Form fields cascade down
      if (formFieldsRef.current) {
        const fields = Array.from(formFieldsRef.current.children);
        gsap.fromTo(
          fields,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: DUR.normal,
            ease: EASE.soft,
            stagger: STAG.tight,
            delay: 0.5,
            scrollTrigger: { trigger, start: "top 85%" },
          }
        );
      }
    }, sectionRef.current!);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <Card
            ref={card1Ref}
            style={{ opacity: 0 }}
            className="relative p-8 md:p-10 bg-gradient-to-br from-background to-background/80 hover-elevate hover:shadow-2xl transition-all duration-500 overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-chart-2/10 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative">
              <div
                ref={icon1Ref}
                style={{ opacity: 0 }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-chart-2/20 to-chart-2/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
              >
                <Calendar className="w-7 h-7 text-chart-2" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-display mb-4" style={{ letterSpacing: '-0.02em' }}>Our Roadmap for 2026</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Discover our exciting plans for the future. New AI capabilities, expanded services, and innovative solutions coming your way.
              </p>
              <Link href="/roadmap-2026">
                <Button variant="outline" size="lg" className="w-full rounded-full" data-testid="button-roadmap">
                  View Roadmap
                </Button>
              </Link>
            </div>
          </Card>

          <Card
            ref={card2Ref}
            style={{ opacity: 0 }}
            className="relative p-8 md:p-10 bg-gradient-to-br from-primary to-chart-2 text-primary-foreground shadow-2xl overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-background/10 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <div
                ref={icon2Ref}
                style={{ opacity: 0 }}
                className="w-14 h-14 rounded-xl bg-background/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
              >
                <Sparkles className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-display mb-4" style={{ letterSpacing: '-0.02em' }}>Launching OARC AI Soon</h3>
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                Be the first to experience our revolutionary AI platform. Register now for exclusive early access.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div ref={formFieldsRef} className="space-y-4">
                  <div style={{ opacity: 0 }}>
                    <Label htmlFor="businessName" className="text-primary-foreground font-semibold">Business Name</Label>
                    <Input
                      id="businessName"
                      type="text"
                      placeholder="Your company name"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="mt-2 bg-background/20 backdrop-blur-sm border-background/30 text-primary-foreground placeholder:text-primary-foreground/50 focus:bg-background/30"
                      data-testid="input-business-name"
                    />
                  </div>
                  
                  <div style={{ opacity: 0 }}>
                    <Label htmlFor="contact" className="text-primary-foreground font-semibold">Email or Phone</Label>
                    <Input
                      id="contact"
                      type="text"
                      placeholder="your@email.com or +1234567890"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="mt-2 bg-background/20 backdrop-blur-sm border-background/30 text-primary-foreground placeholder:text-primary-foreground/50 focus:bg-background/30"
                      data-testid="input-contact"
                    />
                  </div>

                  <div style={{ opacity: 0 }} className="flex items-start space-x-2 pt-2">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                      className="mt-1 border-background/30 data-[state=checked]:bg-background data-[state=checked]:text-primary"
                      data-testid="checkbox-consent"
                      suppressHydrationWarning
                    />
                    <Label htmlFor="consent" className="text-sm text-primary-foreground/90 leading-relaxed cursor-pointer">
                      I agree to be contacted about OARC AI early access and understand my data will be stored securely.
                    </Label>
                  </div>

                  <div style={{ opacity: 0 }}>
                    <Button 
                      type="submit"
                      size="lg" 
                      className="w-full bg-background text-primary hover:bg-background/90 font-bold rounded-full shadow-lg"
                      data-testid="button-register"
                    >
                      Register for Early Access
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
