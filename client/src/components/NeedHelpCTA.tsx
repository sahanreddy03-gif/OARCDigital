import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function NeedHelpCTA() {
  return (
    <section 
      className="py-8 md:py-10 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 relative overflow-hidden"
      data-testid="section-need-help-cta"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      
      <div className="container mx-auto px-6 md:px-8 lg:px-10 max-w-6xl relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold text-white" data-testid="heading-need-help">
                Need help deciding? Let's chat.
              </h3>
              <p className="text-sm text-white/80 mt-1 hidden sm:block">
                Get personalized recommendations for your business
              </p>
            </div>
          </div>
          
          <Link href="/contact">
            <Button 
              size="lg"
              className="bg-white text-emerald-600 hover:bg-white/90 border-white/30 rounded-full font-semibold shadow-lg shadow-emerald-700/20 whitespace-nowrap"
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
