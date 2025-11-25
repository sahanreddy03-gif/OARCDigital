// Intelligent Internal Linking System for SEO
// Automatically suggests and creates relevant internal links

export interface InternalLink {
  text: string;
  url: string;
  relevance: number;
}

// Service relationships for intelligent linking
const serviceRelationships: Record<string, string[]> = {
  'social-media-creative-management': [
    'ad-creative',
    'ai-copywriting',
    'video-production',
    'influencer-marketing'
  ],
  'digital-marketing': [
    'paid-advertising',
    'lead-generation',
    'revenue-automation',
    'funnel-automation'
  ],
  'branding-services': [
    'web-design',
    'design-systems',
    'presentation-pitch',
    'print-packaging'
  ],
  'hire-ai-employees': [
    'ai-sdr',
    'ai-support',
    'ai-marketing',
    'ai-writer'
  ],
  'revenue-automation': [
    'lead-generation',
    'customer-acquisition',
    'funnel-automation',
    'digital-marketing'
  ],
  'web-design': [
    'mobile-apps-development',
    'design-systems',
    'branding-services',
    'email-creative'
  ],
  'video-production': [
    'motion-design',
    'social-media-creative-management',
    'ad-creative',
    'presentation-pitch'
  ],
  'ai-copywriting': [
    'social-media-creative-management',
    'email-creative',
    'digital-marketing',
    'ad-creative'
  ]
};

// Location-based linking for programmatic SEO
const maltaLocations = [
  'valletta', 'sliema', 'st-julians', 'mosta', 'birkirkara',
  'qormi', 'hamrun', 'naxxar', 'zabbar', 'attard'
];

export function getRelatedServices(currentService: string, limit: number = 4): InternalLink[] {
  const related = serviceRelationships[currentService] || [];
  
  return related.slice(0, limit).map(slug => {
    const title = slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return {
      text: title,
      url: `/services/${slug}`,
      relevance: 0.9
    };
  });
}

export function getLocationServiceLinks(service: string, limit: number = 3): InternalLink[] {
  return maltaLocations.slice(0, limit).map(location => {
    const locationName = location
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return {
      text: `${locationName}, Malta`,
      url: `/malta/${location}/${service}`,
      relevance: 0.7
    };
  });
}

export function getCaseStudyLinks(category: 'creative' | 'ai' | 'revenue', limit: number = 2): InternalLink[] {
  const caseStudies = {
    creative: [
      { slug: 'homecraft-innovations', title: 'HomeCraft Innovations Campaign' },
      { slug: 'luxe-essence', title: 'Luxe Essence Brand Refresh' },
      { slug: 'naturalcare-beauty', title: 'NaturalCare Beauty Social Media' }
    ],
    ai: [
      { slug: 'cloudbase-technologies', title: 'CloudBase Technologies AI Implementation' },
      { slug: 'talentscale-solutions', title: 'TalentScale Solutions AI Team' },
      { slug: 'sportsai-interactive', title: 'SportsAI Interactive Chatbot' }
    ],
    revenue: [
      { slug: 'heritage-luxury-group', title: 'Heritage Luxury Group Automation' },
      { slug: 'digital-finance-solutions', title: 'Digital Finance Solutions Automation' },
      { slug: 'streamflow-automation', title: 'StreamFlow Automation Growth Story' }
    ]
  };
  
  return (caseStudies[category] || []).slice(0, limit).map(study => ({
    text: study.title,
    url: `/case-studies/${study.slug}`,
    relevance: 0.8
  }));
}

// Get contextual links based on page content
export function getContextualLinks(pageType: 'service' | 'case-study' | 'blog', currentPath: string): InternalLink[] {
  const links: InternalLink[] = [];
  
  if (pageType === 'service') {
    // Add related services
    const servicePath = currentPath.split('/').pop() || '';
    links.push(...getRelatedServices(servicePath, 3));
    
    // Add case studies
    links.push(...getCaseStudyLinks('creative', 1));
    
    // Add call-to-action link
    links.push({
      text: 'Contact Us',
      url: '/contact',
      relevance: 1.0
    });
  }
  
  if (pageType === 'case-study') {
    // Add related case studies
    links.push(...getCaseStudyLinks('creative', 2));
    
    // Add services link
    links.push({
      text: 'View All Services',
      url: '/services',
      relevance: 0.9
    });
  }
  
  return links;
}

// SEO anchor text variations for natural linking
export function generateAnchorText(linkType: 'service' | 'location' | 'case-study', target: string): string {
  const variations = {
    service: [
      `our ${target} services`,
      `${target} solutions`,
      `professional ${target}`,
      `${target} experts`
    ],
    location: [
      `${target} area`,
      `serving ${target}`,
      `${target} clients`,
      `in ${target}`
    ],
    'case-study': [
      `${target} case study`,
      `how we helped ${target}`,
      `${target} success story`,
      `${target} results`
    ]
  };
  
  const options = variations[linkType];
  return options[Math.floor(Math.random() * options.length)];
}
