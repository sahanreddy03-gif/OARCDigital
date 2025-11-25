// Centralized case studies metadata
export interface CaseStudyMetrics {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  brand: string;
  category: string;
  description: string;
  metrics: CaseStudyMetrics;
  thumbnailImage: string;
  heroImage: string;
  gridClass: string;
}

// Import thumbnails/hero images  
import gymGroupImg from '@assets/IMG_8206_1763165592775.jpeg';
import azzaroImg from '@assets/stock_images/luxury_fashion_retai_a6eca040.jpg';
import bodyShopImg from '@assets/IMG_8208_1763165901315.jpeg';
import tefalImg from '@assets/TefalPictures-32-scaled_1761760754960.jpg';
import lenovoImg from '@assets/stock_images/modern_digital_techn_529f85c8.jpg';
import eslImg from '@assets/stock_images/ai_artificial_intell_5f3c3d5c.jpg';
import healthcareImg from '@assets/stock_images/healthcare_patient_c_b0453f09.jpg';
import bankingImg from '@assets/stock_images/banking_financial_se_82fcc7e7.jpg';
import automationImg from '@assets/stock_images/business_automation__26134094.jpg';
import socialMediaImg from '@assets/generated_images/social_media_creators_marketing_image.png';
import aiChatbotImg from '@assets/stock_images/ai_chatbot_customer__a2c79604.jpg';
import foodSupplyImg from '@assets/stock_images/food_supply_chain_au_9bb3c110.jpg';
import aiEngineeringImg from '@assets/stock_images/ai_software_developm_725be51d.jpg';
import teamCollabImg from '@assets/stock_images/team_collaboration_b_c8b7e41b.jpg';
import luxuryFashionImg from '@assets/stock_images/luxury_fashion_retai_32a7703b.jpg';

export const caseStudies: Record<string, CaseStudy> = {
  'fitnesspro-network': {
    slug: 'fitnesspro-network',
    brand: 'FitnessPro Network',
    category: 'Fitness & Lifestyle',
    description: 'Social Engagement Strategy',
    metrics: {
      value: '15M',
      label: 'views'
    },
    thumbnailImage: gymGroupImg,
    heroImage: gymGroupImg,
    gridClass: 'col-span-2 row-span-2'
  },
  'luxe-essence': {
    slug: 'luxe-essence',
    brand: 'Luxe Essence',
    category: 'Luxury Fragrance',
    description: 'Creator Partnership Launch',
    metrics: {
      value: '59M',
      label: 'reach'
    },
    thumbnailImage: azzaroImg,
    heroImage: azzaroImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'naturalcare-beauty': {
    slug: 'naturalcare-beauty',
    brand: 'NaturalCare Beauty',
    category: 'Beauty & Wellness',
    description: 'Values-Driven Activation',
    metrics: {
      value: '+420%',
      label: 'engagement'
    },
    thumbnailImage: bodyShopImg,
    heroImage: bodyShopImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'homecraft-innovations': {
    slug: 'homecraft-innovations',
    brand: 'HomeCraft Innovations',
    category: 'Home & Kitchen',
    description: 'Inventory Acceleration',
    metrics: {
      value: '100%',
      label: 'sold out'
    },
    thumbnailImage: tefalImg,
    heroImage: tefalImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'gamingtech-elite': {
    slug: 'gamingtech-elite',
    brand: 'GamingTech Elite',
    category: 'Gaming Tech',
    description: 'Community Growth Initiative',
    metrics: {
      value: '+680%',
      label: 'engagement'
    },
    thumbnailImage: lenovoImg,
    heroImage: lenovoImg,
    gridClass: 'col-span-2 row-span-1'
  },
  'progamer-network': {
    slug: 'progamer-network',
    brand: 'ProGamer Network',
    category: 'Esports',
    description: 'Platform Expansion Strategy',
    metrics: {
      value: '25M',
      label: 'impressions'
    },
    thumbnailImage: eslImg,
    heroImage: eslImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'healthpath-ai': {
    slug: 'healthpath-ai',
    brand: 'HealthPath AI',
    category: 'Healthcare & Autism Services',
    description: 'AI-Powered Patient Intake',
    metrics: {
      value: '83%',
      label: 'faster intake'
    },
    thumbnailImage: healthcareImg,
    heroImage: healthcareImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'venturehub-co': {
    slug: 'venturehub-co',
    brand: 'VentureHub Co',
    category: 'Venture Capital',
    description: 'Brand Reimagination',
    metrics: {
      value: '100+',
      label: 'startups funded'
    },
    thumbnailImage: automationImg,
    heroImage: automationImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'digital-finance-solutions': {
    slug: 'digital-finance-solutions',
    brand: 'Digital Finance Solutions',
    category: 'Banking & Finance',
    description: 'Banking Automation',
    metrics: {
      value: '1300%',
      label: 'ROI'
    },
    thumbnailImage: bankingImg,
    heroImage: bankingImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'streamflow-automation': {
    slug: 'streamflow-automation',
    brand: 'StreamFlow Automation',
    category: 'Lead Generation',
    description: 'Workflow Optimization',
    metrics: {
      value: '10x',
      label: 'delivery speed'
    },
    thumbnailImage: automationImg,
    heroImage: automationImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'authentic-stories': {
    slug: 'authentic-stories',
    brand: 'Authentic Stories',
    category: 'TikTok Content',
    description: 'Viral Content Campaign',
    metrics: {
      value: '2M',
      label: 'likes'
    },
    thumbnailImage: socialMediaImg,
    heroImage: socialMediaImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'sportsai-interactive': {
    slug: 'sportsai-interactive',
    brand: 'SportsAI Interactive',
    category: 'Sports & Entertainment',
    description: 'AI Chatbot Launch',
    metrics: {
      value: '10K+',
      label: 'users in hours'
    },
    thumbnailImage: aiChatbotImg,
    heroImage: aiChatbotImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'global-supply-systems': {
    slug: 'global-supply-systems',
    brand: 'Global Supply Systems',
    category: 'Food & Agriculture',
    description: 'Supply Chain Automation',
    metrics: {
      value: '$1M+',
      label: 'annual savings'
    },
    thumbnailImage: foodSupplyImg,
    heroImage: foodSupplyImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'talentscale-solutions': {
    slug: 'talentscale-solutions',
    brand: 'TalentScale Solutions',
    category: 'On-Demand Staffing',
    description: 'AI Engineering Team',
    metrics: {
      value: '30+',
      label: 'AI engineers'
    },
    thumbnailImage: aiEngineeringImg,
    heroImage: aiEngineeringImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'cloudbase-technologies': {
    slug: 'cloudbase-technologies',
    brand: 'CloudBase Technologies',
    category: 'Software',
    description: 'AI Adoption Strategy',
    metrics: {
      value: '100%',
      label: 'team adoption'
    },
    thumbnailImage: teamCollabImg,
    heroImage: teamCollabImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'heritage-luxury-group': {
    slug: 'heritage-luxury-group',
    brand: 'Heritage Luxury Group',
    category: 'Luxury Fashion & Retail',
    description: 'SAP Automation',
    metrics: {
      value: 'Real-time',
      label: 'operations'
    },
    thumbnailImage: luxuryFashionImg,
    heroImage: luxuryFashionImg,
    gridClass: 'col-span-1 row-span-1'
  }
};

// Export as array for easy iteration
export const caseStudiesArray = Object.values(caseStudies);
