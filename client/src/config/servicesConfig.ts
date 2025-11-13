import { Palette, Video, Sparkles, Users, TrendingUp, Megaphone, Globe, Presentation, Image, Package, Film, Layers, Mail, Layout, Cpu, DollarSign, Target, Zap, Lightbulb, BarChart3, Smartphone } from 'lucide-react';

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
    aiEmployees: 7,
    revenue: 7
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
    title: 'Hire AI Employees',
    description: 'Scale your team instantly with AI-powered employees for every role',
    featured: {
      title: 'Hire AI Employees',
      slug: 'hire-ai-employees',
      badge: 'Popular',
      icon: Users
    },
    items: [
      { title: 'Hire AI Employees', slug: 'hire-ai-employees', badge: 'Popular', icon: Users },
      { title: 'Sales Development Rep (SDR)', slug: 'ai-sdr', icon: Target },
      { title: 'Customer Support Agent', slug: 'ai-support', icon: Users },
      { title: 'Marketing Coordinator', slug: 'ai-marketing', icon: Megaphone },
      { title: 'Content Writer', slug: 'ai-writer', icon: Palette },
      { title: 'Data Analyst', slug: 'ai-analyst', icon: BarChart3 },
      { title: 'Financial Analyst', slug: 'ai-financial-analyst', badge: 'New', icon: DollarSign },
      { title: 'Administrative Assistant', slug: 'ai-admin', icon: Layout },
    ]
  },
  
  revenue: {
    id: 'revenue',
    title: 'Revenue Automation',
    description: 'Automate your entire revenue stack from lead to cash',
    featured: {
      title: 'Revenue Automation & Growth',
      slug: 'revenue-automation',
      badge: 'Popular',
      icon: TrendingUp
    },
    items: [
      { title: 'Revenue Automation & Growth', slug: 'revenue-automation', badge: 'Popular', icon: TrendingUp },
      { title: 'Funnel Automation', slug: 'funnel-automation', icon: Zap },
      { title: 'Lead Generation', slug: 'lead-generation', icon: Target },
      { title: 'Customer Acquisition', slug: 'customer-acquisition', icon: Users },
      { title: 'Digital Marketing', slug: 'digital-marketing', icon: BarChart3 },
      { title: 'Rapid Idea Testing', slug: 'rapid-idea-testing', icon: Lightbulb },
      { title: 'Marketing Automation', slug: 'marketing-automation', route: 'revenue-automation', icon: Zap },
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
