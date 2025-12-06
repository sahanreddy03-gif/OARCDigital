import { 
  Palette, Video, Sparkles, Users, TrendingUp, Megaphone, Globe, 
  Presentation, Package, Film, Layers, Mail, Layout, Cpu, DollarSign, 
  Target, Zap, Lightbulb, BarChart3, Smartphone, HeadphonesIcon, Brain, 
  Calendar, FileCheck, Building2, Rocket, Filter, ShoppingCart, 
  PenTool, Code2, Server, Glasses, Link2, Bot, UserCheck, ClipboardList,
  LineChart, Settings, Workflow
} from 'lucide-react';

export interface ServiceItem {
  title: string;
  slug: string;
  route?: string;
  badge?: 'Popular' | 'New';
  icon?: any;
  description?: string;
}

export interface ServiceTier {
  id: string;
  title: string;
  description: string;
  items: ServiceItem[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  featured: ServiceItem;
  items: ServiceItem[];
  tiers?: ServiceTier[];
}

export const servicesConfig = {
  previewLimits: {
    creativeDesign: 10,
    aiAgents: 6,
    growthAutomation: 6,
    development: 4
  }
};

export const servicesCatalog: Record<string, ServiceCategory> = {
  creativeDesign: {
    id: 'creativeDesign',
    title: 'Creative & Design Services',
    description: 'Full-service creative production—from social content to brand identity',
    featured: {
      title: 'Social Media Management',
      slug: 'social-media-creative-management',
      badge: 'Popular',
      icon: Megaphone,
      description: 'Organic content + paid social + community management'
    },
    items: [
      { 
        title: 'Social Media Management', 
        slug: 'social-media-creative-management', 
        badge: 'Popular', 
        icon: Megaphone,
        description: 'Organic content + paid social + community management'
      },
      { 
        title: 'Video Production', 
        slug: 'video-production', 
        icon: Video,
        description: 'Ads, reels, explainers, testimonials, product demos'
      },
      { 
        title: 'Motion Graphics', 
        slug: 'motion-design', 
        icon: Film,
        description: 'Animated logos, kinetic typography, explainer animations'
      },
      { 
        title: 'Brand Identity', 
        slug: 'branding-services', 
        icon: Sparkles,
        description: 'Logos, brand guidelines, design systems, presentations'
      },
      { 
        title: 'Website Design', 
        slug: 'web-design', 
        icon: Globe,
        description: 'Landing pages, full websites, UX/UI, conversion-focused'
      },
      { 
        title: 'Email Marketing Design', 
        slug: 'email-creative', 
        icon: Mail,
        description: 'Email templates, campaign design, newsletter layouts'
      },
      { 
        title: 'Paid Ad Creative', 
        slug: 'ad-creative', 
        icon: Palette,
        description: 'Static ads, video ads, carousel ads, ad copy'
      },
      { 
        title: 'Paid Advertising Management', 
        slug: 'paid-advertising', 
        icon: Target,
        description: 'Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads - strategy, targeting, optimization'
      },
      { 
        title: 'AR/VR Experiences', 
        slug: 'immersive-3d-ar', 
        icon: Glasses,
        description: 'Augmented reality apps, virtual reality experiences, 3D product visualization'
      },
      { 
        title: 'Influencer Marketing', 
        slug: 'influencer-marketing', 
        icon: Users,
        description: 'Influencer sourcing, campaign coordination, content oversight, ROI tracking'
      },
    ]
  },
  
  aiAgents: {
    id: 'aiAgents',
    title: 'AI Workforce Agents',
    description: 'Autonomous AI agents that work 24/7—thinking, adapting, and executing while slashing costs',
    featured: {
      title: 'AI Sales Agent',
      slug: 'ai-sdr-agent',
      badge: 'Popular',
      icon: Target,
      description: 'Lead outreach, qualification, follow-up, meeting booking'
    },
    items: [
      { 
        title: 'AI Sales Agent', 
        slug: 'ai-sdr-agent', 
        badge: 'Popular',
        icon: Target,
        description: 'Lead outreach, qualification, follow-up, meeting booking'
      },
      { 
        title: 'AI Customer Support', 
        slug: 'ai-support-specialist', 
        icon: HeadphonesIcon,
        description: '24/7 chat support, ticket resolution, FAQs, escalation handling'
      },
      { 
        title: 'AI Marketing Assistant', 
        slug: 'ai-content-strategist', 
        icon: Megaphone,
        description: 'Content scheduling, social posting, campaign tracking, reporting'
      },
      { 
        title: 'AI Data Analyst', 
        slug: 'ai-data-analyst', 
        icon: Brain,
        description: 'Report generation, dashboard creation, trend analysis, insights'
      },
      { 
        title: 'AI Admin Assistant', 
        slug: 'ai-admin-agent', 
        icon: ClipboardList,
        description: 'Scheduling, data entry, document processing, workflow automation, appointment booking'
      },
      { 
        title: 'AI Real Estate Assistant', 
        slug: 'ai-real-estate-agent', 
        icon: Building2,
        description: 'Property matching, lead qualification, tour booking, client communication'
      },
    ]
  },
  
  growthAutomation: {
    id: 'growthAutomation',
    title: 'Growth Automation Systems',
    description: 'End-to-end automation engines that optimize pipelines, acquire customers, and scale growth',
    featured: {
      title: 'Marketing Automation',
      slug: 'marketing-automation-suite',
      badge: 'Popular',
      icon: Workflow,
      description: 'Email sequences, workflow automation, lead nurturing, drip campaigns'
    },
    items: [
      { 
        title: 'Marketing Automation', 
        slug: 'marketing-automation-suite', 
        badge: 'Popular',
        icon: Workflow,
        description: 'Email sequences, workflow automation, lead nurturing, drip campaigns'
      },
      { 
        title: 'Customer Acquisition System', 
        slug: 'customer-acquisition-accelerator', 
        icon: ShoppingCart,
        description: 'Multi-channel campaigns, paid + organic integration, funnel building'
      },
      { 
        title: 'Conversion Rate Optimization', 
        slug: 'funnel-optimization-agent', 
        badge: 'New',
        icon: Filter,
        description: 'A/B testing, funnel analysis, landing page optimization, UX improvements'
      },
      { 
        title: 'Growth Strategy & Consulting', 
        slug: 'growth-strategy', 
        icon: Lightbulb,
        description: 'Market validation, growth experiments, strategic planning, scaling roadmaps'
      },
      { 
        title: 'AI Consulting', 
        slug: 'ai-consulting', 
        icon: Cpu,
        description: 'AI readiness assessment, tool recommendations, implementation roadmap, training'
      },
      { 
        title: 'Performance Analytics & Reporting', 
        slug: 'performance-analytics', 
        icon: LineChart,
        description: 'Custom dashboards, ROI tracking, attribution modeling, performance insights'
      },
    ]
  },
  
  development: {
    id: 'development',
    title: 'Custom AI & Software Development',
    description: 'Build proprietary AI solutions and custom software that gives you a competitive edge',
    featured: {
      title: 'Custom AI Solutions',
      slug: 'custom-software-development',
      badge: 'Popular',
      icon: Bot,
      description: 'Proprietary AI agents, custom chatbots, predictive models, AI integrations'
    },
    items: [
      { 
        title: 'Custom AI Solutions', 
        slug: 'custom-software-development', 
        badge: 'Popular',
        icon: Bot,
        description: 'Proprietary AI agents, custom chatbots, predictive models, AI integrations'
      },
      { 
        title: 'Mobile App Development', 
        slug: 'mobile-apps-development', 
        badge: 'New',
        icon: Smartphone,
        description: 'iOS, Android, cross-platform apps, native development'
      },
      { 
        title: 'Web Application Development', 
        slug: 'web-application-development', 
        icon: Code2,
        description: 'SaaS platforms, customer portals, internal tools, progressive web apps'
      },
      { 
        title: 'API & Integration Services', 
        slug: 'api-integration-services', 
        icon: Link2,
        description: 'System connections, custom API development, third-party integrations, workflow automation'
      },
    ]
  }
};

export const getPreviewServices = (categoryId: 'creativeDesign' | 'aiAgents' | 'growthAutomation' | 'development') => {
  const category = servicesCatalog[categoryId];
  const limit = servicesConfig.previewLimits[categoryId];
  return category.items.slice(0, limit);
};

export const getAllCategories = () => {
  return Object.values(servicesCatalog);
};

export const getPillar1Services = () => servicesCatalog.creativeDesign;
export const getPillar2Tier1Services = () => servicesCatalog.aiAgents;
export const getPillar2Tier2Services = () => servicesCatalog.growthAutomation;
export const getPillar2Tier3Services = () => servicesCatalog.development;

export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  for (const category of Object.values(servicesCatalog)) {
    const service = category.items.find(item => item.slug === slug);
    if (service) return service;
  }
  return undefined;
};

export const getCategoryByServiceSlug = (slug: string): ServiceCategory | undefined => {
  for (const category of Object.values(servicesCatalog)) {
    const service = category.items.find(item => item.slug === slug);
    if (service) return category;
  }
  return undefined;
};
