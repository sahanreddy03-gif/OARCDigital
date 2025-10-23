import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Calendar, Sparkles } from "lucide-react";

export default function CTASections() {
  const [formData, setFormData] = useState({
    businessName: "",
    contact: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Early access form submitted:", formData);
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 md:p-12 bg-background hover-elevate hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6 text-chart-2" />
            </div>
            <h3 className="text-3xl font-bold font-display mb-4">Our Roadmap for 2026</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Discover our exciting plans for the future. New AI capabilities, expanded services, and innovative solutions coming your way.
            </p>
            <Button variant="outline" className="w-full" data-testid="button-roadmap">
              View Roadmap
            </Button>
          </Card>

          <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
            <div className="w-12 h-12 rounded-lg bg-background/20 flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold font-display mb-4">Launching OARC AI Soon</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Be the first to experience our revolutionary AI platform. Register now for exclusive early access.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="businessName" className="text-primary-foreground/90">Business Name</Label>
                <Input
                  id="businessName"
                  type="text"
                  placeholder="Your company name"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="mt-1 bg-background/10 border-background/20 text-primary-foreground placeholder:text-primary-foreground/40"
                  data-testid="input-business-name"
                />
              </div>
              
              <div>
                <Label htmlFor="contact" className="text-primary-foreground/90">Email or Phone</Label>
                <Input
                  id="contact"
                  type="text"
                  placeholder="your@email.com or +1234567890"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="mt-1 bg-background/10 border-background/20 text-primary-foreground placeholder:text-primary-foreground/40"
                  data-testid="input-contact"
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                  className="mt-1 border-background/20 data-[state=checked]:bg-background data-[state=checked]:text-primary"
                  data-testid="checkbox-consent"
                />
                <Label htmlFor="consent" className="text-sm text-primary-foreground/80 leading-relaxed cursor-pointer">
                  I agree to be contacted about OARC AI early access and understand my data will be stored securely.
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-background text-primary hover:bg-background/90"
                data-testid="button-register"
              >
                Register for Early Access
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
