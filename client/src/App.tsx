import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { CookiePreferencesModal } from "@/components/CookiePreferencesModal";
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
import RevenueHub from "@/pages/services/RevenueHub";
import PaidAdvertising from "@/pages/services/PaidAdvertising";
import MediaBuying from "@/pages/services/MediaBuying";
import InfluencerMarketing from "@/pages/services/InfluencerMarketing";
import BrandingServices from "@/pages/services/BrandingServices";
import AICopywriting from "@/pages/services/AICopywriting";
import RevenueService from "@/pages/services/RevenueService";
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
import CustomSoftwareDevelopment from "@/pages/services/CustomSoftwareDevelopment";
import MVPDevelopment from "@/pages/services/MVPDevelopment";
import MVPSoftwareDevelopment from "@/pages/services/MVPSoftwareDevelopment";
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
import PropFlowCaseStudy from "@/pages/case-studies/PropFlow";
import FanStakeCaseStudy from "@/pages/case-studies/FanStake";
import StrategyPulseCaseStudy from "@/pages/case-studies/StrategyPulse";
import NationalDistributorNLPCaseStudy from "@/pages/case-studies/NationalDistributorNLP";
import CricketPulseIndiaCaseStudy from "@/pages/case-studies/CricketPulseIndia";
import NexGenRetailAICaseStudy from "@/pages/case-studies/NexGenRetailAI";
import PDFHub from "@/pages/PDFHub";
import PDFCompanyProfile from "@/pages/PDFCompanyProfile";
import PDFOnePager from "@/pages/PDFOnePager";
import PDFAICreativeProfile from "@/pages/PDFAICreativeProfile";
import PDFCapabilitiesDeck from "@/pages/PDFCapabilitiesDeck";
import LocationService from "@/pages/LocationService";
import Comparison from "@/pages/Comparison";
import Blog from "@/pages/Blog";
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";
import CookiePolicy from "@/pages/legal/CookiePolicy";
import TermsConditions from "@/pages/legal/TermsConditions";
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
      {/* AI Virtual Talent Hub Routes */}
      <Route path="/services/ai-virtual-talent-hub" component={HireAIEmployees} />
      <Route path="/services/hire-ai-employees" component={HireAIEmployees} />
      <Route path="/services/ai-sdr-agent" component={AIEmployeeService} />
      <Route path="/services/ai-support-specialist" component={AIEmployeeService} />
      <Route path="/services/ai-data-analyst" component={AIEmployeeService} />
      <Route path="/services/ai-admin-agent" component={AIEmployeeService} />
      <Route path="/services/ai-content-strategist" component={AIEmployeeService} />
      <Route path="/services/ai-compliance-auditor" component={AIEmployeeService} />
      <Route path="/services/ai-appointment-booker" component={AIEmployeeService} />
      <Route path="/services/ai-real-estate-agent" component={AIEmployeeService} />
      {/* AI Revenue Ignition Engine Routes */}
      <Route path="/services/ai-revenue-engine" component={RevenueHub} />
      <Route path="/services/revenue-automation" component={RevenueHub} />
      <Route path="/services/lead-generation-engine" component={RevenueService} />
      <Route path="/services/customer-acquisition-accelerator" component={RevenueService} />
      <Route path="/services/funnel-optimization-agent" component={RevenueService} />
      <Route path="/services/marketing-automation-suite" component={RevenueService} />
      <Route path="/services/idea-validation-engine" component={RevenueService} />
      {/* Legacy routes for backward compatibility */}
      <Route path="/services/paid-advertising" component={PaidAdvertising} />
      <Route path="/services/media-buying" component={MediaBuying} />
      <Route path="/services/influencer-marketing" component={InfluencerMarketing} />
      <Route path="/services/branding-services" component={BrandingServices} />
      <Route path="/services/ai-copywriting" component={AICopywriting} />
      <Route path="/services/lead-generation" component={RevenueService} />
      <Route path="/services/customer-acquisition" component={RevenueService} />
      <Route path="/services/funnel-automation" component={RevenueService} />
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
      <Route path="/services/custom-software-development" component={CustomSoftwareDevelopment} />
      <Route path="/services/mvp-development" component={MVPDevelopment} />
      <Route path="/services/mvp-development/for-software" component={MVPSoftwareDevelopment} />
      
      {/* Fallback for other services */}
      <Route path="/services/:service" component={ServiceDetail} />
      
      <Route path="/our-work" component={OurWork} />
      <Route path="/case-studies/homecraft-innovations" component={TefalCaseStudy} />
      <Route path="/case-studies/authentic-stories" component={DontMakeAdsCaseStudy} />
      <Route path="/case-studies/luxe-essence" component={AzzaroCaseStudy} />
      <Route path="/case-studies/naturalcare-beauty" component={BodyShopCaseStudy} />
      <Route path="/case-studies/gamingtech-elite" component={LenovoLegionCaseStudy} />
      <Route path="/case-studies/progamer-network" component={EslGamingCaseStudy} />
      <Route path="/case-studies/fitnesspro-network" component={GymGroupCaseStudy} />
      <Route path="/case-studies/venturehub-co" component={AntlerCaseStudy} />
      <Route path="/case-studies/cloudbase-technologies" component={SherwebAICaseStudy} />
      <Route path="/case-studies/talentscale-solutions" component={PeopleReadyAICaseStudy} />
      <Route path="/case-studies/streamflow-automation" component={CleverlyCaseStudy} />
      <Route path="/case-studies/sportsai-interactive" component={FanDuelChuckGPTCaseStudy} />
      <Route path="/case-studies/heritage-luxury-group" component={TapestryAutomation} />
      <Route path="/case-studies/digital-finance-solutions" component={BancolombiaAutomation} />
      <Route path="/case-studies/global-supply-systems" component={JBSAutomation} />
      <Route path="/case-studies/healthpath-ai" component={AcclaimAutism} />
      <Route path="/case-studies/propflow-property-platform" component={PropFlowCaseStudy} />
      <Route path="/case-studies/fanstake-sports-platform" component={FanStakeCaseStudy} />
      <Route path="/case-studies/strategypulse-enterprise" component={StrategyPulseCaseStudy} />
      <Route path="/case-studies/national-distributor-nlp" component={NationalDistributorNLPCaseStudy} />
      <Route path="/case-studies/cricketpulse-india" component={CricketPulseIndiaCaseStudy} />
      <Route path="/case-studies/nexgen-retail-ai-transformation" component={NexGenRetailAICaseStudy} />
      <Route path="/our-work/:slug" component={() => <div>Case Study Detail (Phase 3)</div>} />
      <Route path="/why-us" component={WhyUs} />
      <Route path="/roadmap" component={Roadmap2026} />
      <Route path="/roadmap-2026" component={Roadmap2026} />
      <Route path="/resources" component={Resources} />
      <Route path="/resources/:slug" component={() => <div>Resource Detail (Phase 3)</div>} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/enterprise" component={Enterprise} />
      <Route path="/contact" component={Contact} />
      <Route path="/comparison" component={Comparison} />
      <Route path="/why-oarc" component={Comparison} />
      <Route path="/blog" component={Blog} />
      
      {/* Legal Pages - GDPR Compliance */}
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route path="/terms-conditions" component={TermsConditions} />
      <Route path="/terms" component={TermsConditions} />
      
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
        <CookieConsentProvider>
          <Toaster />
          <Router />
          <CookieConsentBanner />
          <CookiePreferencesModal />
        </CookieConsentProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
