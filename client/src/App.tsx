import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import SocialMediaCreative from "@/pages/services/SocialMediaCreative";
import OurWork from "@/pages/OurWork";
import WhyUs from "@/pages/WhyUs";
import Resources from "@/pages/Resources";
import Pricing from "@/pages/Pricing";
import Enterprise from "@/pages/Enterprise";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/social-media-creative" component={SocialMediaCreative} />
      <Route path="/services/:service" component={ServiceDetail} />
      <Route path="/our-work" component={OurWork} />
      <Route path="/our-work/:slug" component={() => <div>Case Study Detail (Phase 3)</div>} />
      <Route path="/why-us" component={WhyUs} />
      <Route path="/resources" component={Resources} />
      <Route path="/resources/:slug" component={() => <div>Resource Detail (Phase 3)</div>} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/enterprise" component={Enterprise} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
