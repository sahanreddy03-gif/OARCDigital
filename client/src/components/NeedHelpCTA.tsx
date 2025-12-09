import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function NeedHelpCTA() {
  return (
    <section 
      className="py-8 md:py-10 relative overflow-hidden"
      style={{ backgroundColor: "#e8f5e9" }}
      data-testid="section-need-help-cta"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-10 max-w-6xl relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex w-12 h-12 rounded-full items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(34, 197, 94, 0.15)" }}>
              <MessageCircle className="w-6 h-6" style={{ color: "#16a34a" }} />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold" style={{ color: "#0a0a0a" }} data-testid="heading-need-help">
                Need help deciding? Let's chat.
              </h3>
              <p className="text-sm mt-1 hidden sm:block" style={{ color: "rgba(0, 0, 0, 0.6)" }}>
                Get personalized recommendations for your business
              </p>
            </div>
          </div>
          
          <Link href="/contact">
            <Button 
              size="lg"
              className="rounded-full font-semibold shadow-lg whitespace-nowrap"
              style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}
              data-testid="button-schedule-consultation"
            >
              Schedule a Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
