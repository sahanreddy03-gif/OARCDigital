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
import bodyShopImg from '@assets/stock_images/influencer_marketing_3b6f7762.jpg';
import tefalImg from '@assets/TefalPictures-32-scaled_1761760754960.jpg';
import lenovoImg from '@assets/stock_images/modern_digital_techn_529f85c8.jpg';
import eslImg from '@assets/stock_images/ai_artificial_intell_5f3c3d5c.jpg';

export const caseStudies: Record<string, CaseStudy> = {
  'gym-group': {
    slug: 'gym-group',
    brand: 'The Gym Group',
    category: 'Fitness & Lifestyle',
    description: 'TikTok Campaign',
    metrics: {
      value: '15M',
      label: 'views'
    },
    thumbnailImage: gymGroupImg,
    heroImage: 'https://sociallypowerful.com/wp-content/uploads/2023/08/The-Gym-Group-Socially-Powerful.png',
    gridClass: 'col-span-2 row-span-2'
  },
  'azzaro': {
    slug: 'azzaro',
    brand: 'Azzaro',
    category: 'Luxury Fragrance',
    description: 'Influencer Marketing',
    metrics: {
      value: '59M',
      label: 'reach'
    },
    thumbnailImage: azzaroImg,
    heroImage: 'https://sociallypowerful.com/wp-content/uploads/2023/08/LOreal-influencer-marketing-agency.png',
    gridClass: 'col-span-1 row-span-1'
  },
  'body-shop': {
    slug: 'body-shop',
    brand: 'The Body Shop',
    category: 'Beauty & Wellness',
    description: 'Authentic Content',
    metrics: {
      value: '+420%',
      label: 'engagement'
    },
    thumbnailImage: bodyShopImg,
    heroImage: bodyShopImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'tefal': {
    slug: 'tefal',
    brand: 'Tefal',
    category: 'Home & Kitchen',
    description: 'Product Sellout',
    metrics: {
      value: '100%',
      label: 'sold out'
    },
    thumbnailImage: tefalImg,
    heroImage: tefalImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'lenovo-legion': {
    slug: 'lenovo-legion',
    brand: 'Lenovo Legion',
    category: 'Gaming Tech',
    description: 'Launch Campaign',
    metrics: {
      value: '+680%',
      label: 'engagement'
    },
    thumbnailImage: lenovoImg,
    heroImage: lenovoImg,
    gridClass: 'col-span-2 row-span-1'
  },
  'esl-gaming': {
    slug: 'esl-gaming',
    brand: 'ESL Gaming',
    category: 'Esports',
    description: 'Tournament Promotion',
    metrics: {
      value: '25M',
      label: 'impressions'
    },
    thumbnailImage: eslImg,
    heroImage: eslImg,
    gridClass: 'col-span-1 row-span-1'
  }
};

// Export as array for easy iteration
export const caseStudiesArray = Object.values(caseStudies);
