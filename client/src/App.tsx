import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import SocialMediaCreativeManagement from "@/pages/services/SocialMediaCreativeManagement";
import Social from "@/pages/services/Social";
import Paid from "@/pages/services/Paid";
import Creative from "@/pages/services/Creative";
import Influencer from "@/pages/services/Influencer";
import AdCreative from "@/pages/services/AdCreative";
import WebDesign from "@/pages/services/WebDesign";
import VideoProduction from "@/pages/services/VideoProduction";
import HireAIEmployees from "@/pages/services/HireAIEmployees";
import RevenueAutomation from "@/pages/services/RevenueAutomation";
import PaidAdvertising from "@/pages/services/PaidAdvertising";
import MediaBuying from "@/pages/services/MediaBuying";
import InfluencerMarketing from "@/pages/services/InfluencerMarketing";
import BrandingServices from "@/pages/services/BrandingServices";
import AICopywriting from "@/pages/services/AICopywriting";
import LeadGeneration from "@/pages/services/LeadGeneration";
import CustomerAcquisition from "@/pages/services/CustomerAcquisition";
import FunnelAutomation from "@/pages/services/FunnelAutomation";
import DigitalMarketing from "@/pages/services/DigitalMarketing";
import RapidIdeaTesting from "@/pages/services/RapidIdeaTesting";
import PresentationPitch from "@/pages/services/PresentationPitch";
import Illustration from "@/pages/services/Illustration";
import PrintPackaging from "@/pages/services/PrintPackaging";
import MotionDesign from "@/pages/services/MotionDesign";
import Immersive3DAR from "@/pages/services/Immersive3DAR";
import EmailCreative from "@/pages/services/EmailCreative";
import DesignSystems from "@/pages/services/DesignSystems";
import AIConsulting from "@/pages/services/AIConsulting";
import OurWork from "@/pages/OurWork";
import WhyUs from "@/pages/WhyUs";
import Resources from "@/pages/Resources";
import Pricing from "@/pages/Pricing";
import Enterprise from "@/pages/Enterprise";
import Contact from "@/pages/Contact";
import TefalCaseStudy from "@/pages/case-studies/Tefal";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      
      {/* Priority Service Pages - Unique Designs */}
      <Route path="/services/social-media-creative-management" component={SocialMediaCreativeManagement} />
      <Route path="/services/social-media-creative" component={SocialMediaCreativeManagement} />
      <Route path="/services/social-media-management" component={SocialMediaCreativeManagement} />
      <Route path="/services/social" component={Social} />
      <Route path="/services/paid" component={Paid} />
      <Route path="/services/creative" component={Creative} />
      <Route path="/services/influencer" component={Influencer} />
      <Route path="/services/ad-creative" component={AdCreative} />
      <Route path="/services/web-design" component={WebDesign} />
      <Route path="/services/video-production" component={VideoProduction} />
      <Route path="/services/hire-ai-employees" component={HireAIEmployees} />
      <Route path="/services/revenue-automation" component={RevenueAutomation} />
      <Route path="/services/paid-advertising" component={PaidAdvertising} />
      <Route path="/services/media-buying" component={MediaBuying} />
      <Route path="/services/influencer-marketing" component={InfluencerMarketing} />
      <Route path="/services/branding-services" component={BrandingServices} />
      <Route path="/services/ai-copywriting" component={AICopywriting} />
      <Route path="/services/lead-generation" component={LeadGeneration} />
      <Route path="/services/customer-acquisition" component={CustomerAcquisition} />
      <Route path="/services/funnel-automation" component={FunnelAutomation} />
      <Route path="/services/digital-marketing" component={DigitalMarketing} />
      <Route path="/services/rapid-idea-testing" component={RapidIdeaTesting} />
      <Route path="/services/presentation-pitch" component={PresentationPitch} />
      <Route path="/services/illustration" component={Illustration} />
      <Route path="/services/print-packaging" component={PrintPackaging} />
      <Route path="/services/motion-design" component={MotionDesign} />
      <Route path="/services/immersive-3d-ar" component={Immersive3DAR} />
      <Route path="/services/email-creative" component={EmailCreative} />
      <Route path="/services/design-systems" component={DesignSystems} />
      <Route path="/services/ai-consulting" component={AIConsulting} />
      
      {/* Fallback for other services */}
      <Route path="/services/:service" component={ServiceDetail} />
      
      <Route path="/our-work" component={OurWork} />
      <Route path="/case-studies/tefal" component={TefalCaseStudy} />
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
