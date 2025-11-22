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
import Branding from "@/pages/services/Branding";
import AdCreative from "@/pages/services/AdCreative";
import WebDesign from "@/pages/services/WebDesign";
import VideoProduction from "@/pages/services/VideoProduction";
import HireAIEmployees from "@/pages/services/HireAIEmployees";
import AIEmployeeService from "@/pages/services/AIEmployeeService";
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
import MobileAppsDevelopment from "@/pages/services/MobileAppsDevelopment";
import OurWork from "@/pages/OurWork";
import WhyUs from "@/pages/WhyUs";
import Roadmap2026 from "@/pages/Roadmap2026";
import Resources from "@/pages/Resources";
import Pricing from "@/pages/Pricing";
import Enterprise from "@/pages/Enterprise";
import Contact from "@/pages/Contact";
import TefalCaseStudy from "@/pages/case-studies/Tefal";
import DontMakeAdsCaseStudy from "@/pages/case-studies/DontMakeAds";
import AzzaroCaseStudy from "@/pages/case-studies/Azzaro";
import BodyShopCaseStudy from "@/pages/case-studies/BodyShop";
import LenovoLegionCaseStudy from "@/pages/case-studies/LenovoLegion";
import EslGamingCaseStudy from "@/pages/case-studies/EslGaming";
import GymGroupCaseStudy from "@/pages/case-studies/GymGroup";
import AntlerCaseStudy from "@/pages/case-studies/Antler";
import SherwebAICaseStudy from "@/pages/case-studies/SherwebAI";
import PeopleReadyAICaseStudy from "@/pages/case-studies/PeopleReadyAI";
import CleverlyCaseStudy from "@/pages/case-studies/Cleverly";
import FanDuelChuckGPTCaseStudy from "@/pages/case-studies/FanDuelChuckGPT";
import TapestryAutomation from "@/pages/case-studies/TapestryAutomation";
import BancolombiaAutomation from "@/pages/case-studies/BancolombiaAutomation";
import JBSAutomation from "@/pages/case-studies/JBSAutomation";
import AcclaimAutism from "@/pages/case-studies/AcclaimAutism";
import PDFHub from "@/pages/PDFHub";
import PDFCompanyProfile from "@/pages/PDFCompanyProfile";
import PDFOnePager from "@/pages/PDFOnePager";
import PDFAICreativeProfile from "@/pages/PDFAICreativeProfile";
import PDFCapabilitiesDeck from "@/pages/PDFCapabilitiesDeck";
import LocationService from "@/pages/LocationService";
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
      <Route path="/services/branding" component={Branding} />
      <Route path="/services/branding-services" component={Branding} />
      <Route path="/services/ad-creative" component={AdCreative} />
      <Route path="/services/web-design" component={WebDesign} />
      <Route path="/services/video-production" component={VideoProduction} />
      <Route path="/services/hire-ai-employees" component={HireAIEmployees} />
      <Route path="/services/ai-sdr" component={AIEmployeeService} />
      <Route path="/services/ai-support" component={AIEmployeeService} />
      <Route path="/services/ai-marketing" component={AIEmployeeService} />
      <Route path="/services/ai-writer" component={AIEmployeeService} />
      <Route path="/services/ai-analyst" component={AIEmployeeService} />
      <Route path="/services/ai-financial-analyst" component={AIEmployeeService} />
      <Route path="/services/ai-admin" component={AIEmployeeService} />
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
      <Route path="/services/mobile-apps-development" component={MobileAppsDevelopment} />
      <Route path="/services/mobile-applications-development" component={MobileAppsDevelopment} />
      
      {/* Fallback for other services */}
      <Route path="/services/:service" component={ServiceDetail} />
      
      <Route path="/our-work" component={OurWork} />
      <Route path="/case-studies/tefal" component={TefalCaseStudy} />
      <Route path="/case-studies/dont-make-ads" component={DontMakeAdsCaseStudy} />
      <Route path="/case-studies/azzaro" component={AzzaroCaseStudy} />
      <Route path="/case-studies/body-shop" component={BodyShopCaseStudy} />
      <Route path="/case-studies/lenovo-legion" component={LenovoLegionCaseStudy} />
      <Route path="/case-studies/esl-gaming" component={EslGamingCaseStudy} />
      <Route path="/case-studies/gym-group" component={GymGroupCaseStudy} />
      <Route path="/case-studies/antler" component={AntlerCaseStudy} />
      <Route path="/case-studies/sherweb-ai-adoption" component={SherwebAICaseStudy} />
      <Route path="/case-studies/peopleready-ai-team" component={PeopleReadyAICaseStudy} />
      <Route path="/case-studies/cleverly-automation" component={CleverlyCaseStudy} />
      <Route path="/case-studies/fanduel-chuckgpt" component={FanDuelChuckGPTCaseStudy} />
      <Route path="/case-studies/tapestry-automation" component={TapestryAutomation} />
      <Route path="/case-study/tapestry-automation" component={TapestryAutomation} />
      <Route path="/case-studies/bancolombia-automation" component={BancolombiaAutomation} />
      <Route path="/case-study/bancolombia-automation" component={BancolombiaAutomation} />
      <Route path="/case-studies/jbs-automation" component={JBSAutomation} />
      <Route path="/case-study/jbs-automation" component={JBSAutomation} />
      <Route path="/case-studies/acclaim-autism" component={AcclaimAutism} />
      <Route path="/case-study/acclaim-autism" component={AcclaimAutism} />
      <Route path="/our-work/:slug" component={() => <div>Case Study Detail (Phase 3)</div>} />
      <Route path="/why-us" component={WhyUs} />
      <Route path="/roadmap" component={Roadmap2026} />
      <Route path="/roadmap-2026" component={Roadmap2026} />
      <Route path="/resources" component={Resources} />
      <Route path="/resources/:slug" component={() => <div>Resource Detail (Phase 3)</div>} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/enterprise" component={Enterprise} />
      <Route path="/contact" component={Contact} />
      
      {/* PDF Documents for Client Proposals */}
      <Route path="/pdf" component={PDFHub} />
      <Route path="/pdf/capabilities-deck" component={PDFCapabilitiesDeck} />
      <Route path="/pdf/company-profile" component={PDFCompanyProfile} />
      <Route path="/pdf/one-pager" component={PDFOnePager} />
      <Route path="/pdf/ai-creative-profile" component={PDFAICreativeProfile} />
      
      {/* Programmatic SEO - Location Pages */}
      <Route path="/malta/:location/:service" component={LocationService} />
      
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
