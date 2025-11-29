import { Palette, Video, Sparkles, Users, TrendingUp, Megaphone, Globe, Presentation, Image, Package, Film, Layers, Mail, Layout, Cpu, DollarSign, Target, Zap, Lightbulb, BarChart3, Smartphone, HeadphonesIcon, Brain, Calendar, FileCheck, Building2, Rocket, Filter, ShoppingCart } from 'lucide-react';

export interface ServiceItem {
  title: string;
  slug: string; // Unique identifier for keys
  route?: string; // Actual navigation route (defaults to /services/{slug} if not provided)
  badge?: 'Popular' | 'New';
  icon?: any;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  featured: ServiceItem;
  items: ServiceItem[];
}

export const servicesConfig = {
  previewLimits: {
    aiCreative: 9,
    aiEmployees: 9,
    revenue: 6
  }
};

export const servicesCatalog: Record<string, ServiceCategory> = {
  aiCreative: {
    id: 'aiCreative',
    title: 'AI Creative Services',
    description: 'Every type of creative work you\'ll ever need—powered by AI and human expertise',
    featured: {
      title: 'Social Media Creative & Management',
      slug: 'social-media-creative-management',
      badge: 'Popular',
      icon: Megaphone
    },
    items: [
      { title: 'Social Media Creative & Management', slug: 'social-media-creative-management', badge: 'Popular', icon: Megaphone },
      { title: 'Ad Creative', slug: 'ad-creative', icon: Palette },
      { title: 'Web Design & Landing Pages', slug: 'web-design', icon: Globe },
      { title: 'Mobile Applications Development', slug: 'mobile-apps-development', badge: 'New', icon: Smartphone },
      { title: 'Video Production', slug: 'video-production', icon: Video },
      { title: 'Motion Design', slug: 'motion-design', icon: Film },
      { title: 'Branding & Identity', slug: 'branding-services', icon: Sparkles },
      { title: 'Design Systems', slug: 'design-systems', icon: Layout },
      { title: 'Email Creative', slug: 'email-creative', icon: Mail },
      { title: 'Presentation & Pitch', slug: 'presentation-pitch', icon: Presentation },
      { title: 'Illustration', slug: 'illustration', icon: Palette },
      { title: 'Print & Packaging', slug: 'print-packaging', icon: Package },
      { title: 'Immersive 3D / AR', slug: 'immersive-3d-ar', icon: Layers },
      { title: 'AI Copywriting', slug: 'ai-copywriting', icon: Sparkles },
      { title: 'Paid Advertising', slug: 'paid-advertising', icon: Target },
      { title: 'Media Buying', slug: 'media-buying', icon: DollarSign },
      { title: 'Influencer Marketing', slug: 'influencer-marketing', icon: Users },
      { title: 'AI Consulting', slug: 'ai-consulting', icon: Cpu },
    ]
  },
  
  aiEmployees: {
    id: 'aiEmployees',
    title: 'AI Virtual Talent Hub',
    description: 'Hire autonomous AI agents as on-demand team members—thinking, adapting, and executing 24/7 while slashing your hiring costs',
    featured: {
      title: 'AI Virtual Talent Hub',
      slug: 'ai-virtual-talent-hub',
      badge: 'Popular',
      icon: Users
    },
    items: [
      { title: 'AI Virtual Talent Hub', slug: 'ai-virtual-talent-hub', badge: 'Popular', icon: Users },
      { title: 'Sales Development Rep Agent', slug: 'ai-sdr-agent', icon: Target },
      { title: 'Customer Support Specialist', slug: 'ai-support-specialist', icon: HeadphonesIcon },
      { title: 'Data Insights Analyst', slug: 'ai-data-analyst', icon: Brain },
      { title: 'Administrative Workflow Agent', slug: 'ai-admin-agent', icon: Layout },
      { title: 'Content Strategy Coordinator', slug: 'ai-content-strategist', icon: Megaphone },
      { title: 'Compliance & Legal Auditor', slug: 'ai-compliance-auditor', badge: 'New', icon: FileCheck },
      { title: 'Appointment Booker Agent', slug: 'ai-appointment-booker', icon: Calendar },
      { title: 'Real Estate Sales Specialist', slug: 'ai-real-estate-agent', icon: Building2 },
    ]
  },
  
  revenue: {
    id: 'revenue',
    title: 'AI Revenue Ignition Engine',
    description: 'Fuel your growth with automated systems—end-to-end engines that optimize pipelines, acquire customers, and validate ideas on autopilot',
    featured: {
      title: 'AI Revenue Ignition Engine',
      slug: 'ai-revenue-engine',
      badge: 'Popular',
      icon: Rocket
    },
    items: [
      { title: 'AI Revenue Ignition Engine', slug: 'ai-revenue-engine', badge: 'Popular', icon: Rocket },
      { title: 'Lead Generation & Qualification Engine', slug: 'lead-generation-engine', icon: Target },
      { title: 'Customer Acquisition Accelerator', slug: 'customer-acquisition-accelerator', icon: ShoppingCart },
      { title: 'Funnel Optimization Agent', slug: 'funnel-optimization-agent', badge: 'New', icon: Filter },
      { title: 'Marketing Automation Suite', slug: 'marketing-automation-suite', icon: Zap },
      { title: 'Idea Validation & Growth Hacker', slug: 'idea-validation-engine', icon: Lightbulb },
    ]
  }
};

// Helper to get preview items for header/footer
export const getPreviewServices = (categoryId: 'aiCreative' | 'aiEmployees' | 'revenue') => {
  const category = servicesCatalog[categoryId];
  const limit = servicesConfig.previewLimits[categoryId];
  return category.items.slice(0, limit);
};

// Get all categories as array
export const getAllCategories = () => {
  return Object.values(servicesCatalog);
};
