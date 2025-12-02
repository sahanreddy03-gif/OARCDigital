// Centralized case studies metadata - Original OARC Digital content
export interface CaseStudyMetrics {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  brand: string;
  category: string;
  description: string;
  fullDescription?: string;
  challenge?: string;
  strategy?: string;
  results?: string;
  metrics: CaseStudyMetrics;
  secondaryMetrics?: CaseStudyMetrics[];
  services?: string[];
  platforms?: string[];
  thumbnailImage: string;
  heroImage: string;
  gridClass: string;
}

// Import thumbnails/hero images  
import gymGroupImg from '@assets/IMG_8206_1763165592775.jpeg';
import azzaroImg from '@assets/stock_images/luxury_fashion_retai_a6eca040.jpg';
import bodyShopImg from '@assets/IMG_8208_1763165901315.jpeg';
import tefalImg from '@assets/TefalPictures-32-scaled_1761760754960.jpg';
import homecraftHeroImg from '@assets/pexels-shvetsa-12673974_1764638693005.jpg';
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
import designWorkspaceImg from '@assets/stock_images/creative_team_workin_79883382.jpg';
import aiRealEstateDashboard from '@assets/generated_images/ai_real_estate_lead_dashboard.png';
import aiLeadEngineDashboard from '@assets/generated_images/ai_lead_engine_dashboard.png';

export const caseStudies: Record<string, CaseStudy> = {
  'propflow-property-platform': {
    slug: 'propflow-property-platform',
    brand: 'AI Real Estate Agent',
    category: 'AI Employees',
    description: '24/7 Lead Qualification System',
    fullDescription: 'Deployed an AI real estate specialist that handled initial inquiries, qualified prospects, and scheduled viewings—reducing human workload by 70%.',
    challenge: 'A mid-sized brokerage was losing leads due to slow response times. Agents spent 60% of their day on initial inquiries that never converted.',
    strategy: 'We deployed an AI Real Estate Specialist that engaged leads via phone, SMS, and email within seconds. The AI qualified prospects based on budget, timeline, and preferences, then seamlessly handed off warm leads.',
    results: 'Lead response time dropped from 4 hours to under 30 seconds. The technology was acquired by a proptech company in 2023.',
    metrics: {
      value: '94%',
      label: 'faster response'
    },
    secondaryMetrics: [
      { value: '3.2x', label: 'conversion rate' },
      { value: '70%', label: 'workload reduction' }
    ],
    services: ['AI Employee Development', 'Process Automation', 'CRM Integration'],
    platforms: ['Custom AI Platform'],
    thumbnailImage: aiRealEstateDashboard,
    heroImage: aiRealEstateDashboard,
    gridClass: 'col-span-1 row-span-1'
  },
  'fanstake-sports-platform': {
    slug: 'fanstake-sports-platform',
    brand: 'AI Lead Engine',
    category: 'AI Revenue Automation',
    description: '10x Pipeline Velocity System',
    fullDescription: 'Built an AI-powered lead generation engine that qualified prospects automatically, increasing pipeline velocity by 10x and reducing cost per acquisition.',
    challenge: 'A B2B SaaS company was struggling with lead quality. Their SDR team was burning through hundreds of leads monthly with no clear way to prioritize high-intent prospects.',
    strategy: 'We built an AI revenue engine that captured leads from multiple channels, scored them using behavioral and firmographic data, and automatically nurtured them through personalized sequences.',
    results: 'Pipeline velocity increased 10x while cost per acquisition dropped 67%. The system was acquired as part of a martech consolidation in 2023.',
    metrics: {
      value: '10x',
      label: 'pipeline velocity'
    },
    secondaryMetrics: [
      { value: '67%', label: 'lower CPA' },
      { value: '85%', label: 'qualification accuracy' }
    ],
    services: ['AI Automation', 'Lead Generation', 'Revenue Optimization'],
    platforms: ['HubSpot', 'Salesforce'],
    thumbnailImage: aiLeadEngineDashboard,
    heroImage: aiLeadEngineDashboard,
    gridClass: 'col-span-1 row-span-1'
  },
  'fitnesspro-network': {
    slug: 'fitnesspro-network',
    brand: 'FitnessPro Network',
    category: 'Fitness & Lifestyle',
    description: 'Social Media Growth Campaign',
    fullDescription: 'Transformed a regional gym chain into a social media powerhouse through strategic TikTok content and micro-influencer partnerships.',
    challenge: 'FitnessPro Network faced intense competition during peak fitness season. Traditional marketing was getting drowned out by larger chains with bigger budgets.',
    strategy: 'We deployed 200+ micro-influencers creating authentic gym content, paired with AI-optimized posting schedules and trend-jacking strategies that positioned the brand at the center of fitness conversations.',
    results: 'The campaign generated unprecedented engagement, establishing FitnessPro as the go-to fitness destination for Gen Z audiences.',
    metrics: {
      value: '15M',
      label: 'video views'
    },
    secondaryMetrics: [
      { value: '1M', label: 'profile visits' },
      { value: '500K', label: 'engagements' }
    ],
    services: ['Influencer Marketing', 'Content Strategy', 'Paid Social'],
    platforms: ['TikTok', 'Instagram'],
    thumbnailImage: gymGroupImg,
    heroImage: gymGroupImg,
    gridClass: 'col-span-2 row-span-2'
  },
  'luxe-essence': {
    slug: 'luxe-essence',
    brand: 'Luxe Essence',
    category: 'Luxury Fragrance',
    description: 'Product Launch Campaign',
    fullDescription: 'Launched a premium fragrance line to European markets through strategic influencer seeding and experiential digital activations.',
    challenge: 'Breaking into the competitive luxury fragrance market requires more than traditional advertising. Luxe Essence needed to build prestige and desirability from day one.',
    strategy: 'We crafted an exclusive launch strategy combining high-profile influencer unboxings, immersive AR experiences, and strategically timed content drops that created scarcity and demand.',
    results: 'The launch exceeded all targets, selling out initial inventory in 72 hours and establishing the brand as a luxury contender.',
    metrics: {
      value: '59M',
      label: 'reach'
    },
    secondaryMetrics: [
      { value: '72hr', label: 'sellout time' },
      { value: '340%', label: 'ROI' }
    ],
    services: ['Brand Strategy', 'Influencer Marketing', 'Creative Production'],
    platforms: ['Instagram', 'YouTube'],
    thumbnailImage: azzaroImg,
    heroImage: azzaroImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'naturalcare-beauty': {
    slug: 'naturalcare-beauty',
    brand: 'NaturalCare Beauty',
    category: 'Beauty & Wellness',
    description: 'Community-Driven Activation',
    fullDescription: 'Built an authentic community around natural beauty values, driving both brand loyalty and sales through user-generated content.',
    challenge: 'NaturalCare needed to differentiate in a saturated beauty market dominated by major players with endless marketing budgets.',
    strategy: 'We pivoted from polished campaigns to raw authenticity. Real customers became brand ambassadors, sharing unfiltered experiences that resonated with audiences tired of perfect beauty standards.',
    results: 'The authentic approach drove record engagement and converted skeptics into loyal advocates.',
    metrics: {
      value: '+420%',
      label: 'engagement rate'
    },
    secondaryMetrics: [
      { value: '85K', label: 'UGC posts' },
      { value: '45%', label: 'repeat purchase' }
    ],
    services: ['Community Management', 'UGC Strategy', 'Social Listening'],
    platforms: ['TikTok', 'Instagram'],
    thumbnailImage: bodyShopImg,
    heroImage: bodyShopImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'homecraft-innovations': {
    slug: 'homecraft-innovations',
    brand: 'HomeCraft Innovations',
    category: 'Home & Kitchen',
    description: 'E-commerce Acceleration',
    fullDescription: 'Turned slow-moving kitchen appliance inventory into sold-out success stories through strategic social commerce integration.',
    challenge: 'HomeCraft had quality products gathering dust in warehouses. Traditional retail channels were declining, and the brand needed a direct-to-consumer breakthrough.',
    strategy: 'We deployed shoppable content across social platforms, partnered with cooking influencers for live demonstrations, and built AI-powered retargeting funnels that converted browsers into buyers.',
    results: 'Complete inventory sellout within 6 weeks, with waiting lists forming for restocked items.',
    metrics: {
      value: '100%',
      label: 'inventory sold'
    },
    secondaryMetrics: [
      { value: '6wks', label: 'to sellout' },
      { value: '280%', label: 'revenue growth' }
    ],
    services: ['Social Commerce', 'Influencer Marketing', 'Performance Media'],
    platforms: ['Facebook', 'Instagram', 'TikTok'],
    thumbnailImage: homecraftHeroImg,
    heroImage: homecraftHeroImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'gamingtech-elite': {
    slug: 'gamingtech-elite',
    brand: 'GamingTech Elite',
    category: 'Gaming Hardware',
    description: 'Community Growth Initiative',
    fullDescription: 'Built a thriving gaming community from scratch, turning hardware buyers into brand evangelists through strategic content and engagement.',
    challenge: 'GamingTech Elite had great products but zero community presence. Competitors owned the conversation in gaming spaces.',
    strategy: 'We infiltrated gaming communities authentically, sponsoring streamers, creating shareable meme content, and launching Discord servers that became hubs for gaming enthusiasts.',
    results: 'The brand went from unknown to industry-recognized, with organic advocacy driving sustained growth.',
    metrics: {
      value: '+680%',
      label: 'community growth'
    },
    secondaryMetrics: [
      { value: '50K', label: 'Discord members' },
      { value: '2M', label: 'Twitch impressions' }
    ],
    services: ['Community Building', 'Streamer Partnerships', 'Content Strategy'],
    platforms: ['Twitch', 'Discord', 'YouTube'],
    thumbnailImage: lenovoImg,
    heroImage: lenovoImg,
    gridClass: 'col-span-2 row-span-1'
  },
  'progamer-network': {
    slug: 'progamer-network',
    brand: 'ProGamer Network',
    category: 'Esports',
    description: 'Platform Expansion Strategy',
    fullDescription: 'Expanded an esports platform audience across new markets and demographics through strategic content localization.',
    challenge: 'ProGamer Network was popular in core markets but struggled to break into emerging gaming regions.',
    strategy: 'We localized content for 12 new markets, partnered with regional gaming influencers, and created culturally-relevant campaigns that spoke to local gaming communities.',
    results: 'Massive expansion success with sustainable growth across all target markets.',
    metrics: {
      value: '25M',
      label: 'impressions'
    },
    secondaryMetrics: [
      { value: '12', label: 'new markets' },
      { value: '3x', label: 'subscriber growth' }
    ],
    services: ['Localization', 'Influencer Marketing', 'Paid Media'],
    platforms: ['YouTube', 'Twitch', 'TikTok'],
    thumbnailImage: eslImg,
    heroImage: eslImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'healthpath-ai': {
    slug: 'healthpath-ai',
    brand: 'HealthPath AI',
    category: 'Healthcare Technology',
    description: 'AI-Powered Patient Intake',
    fullDescription: 'Revolutionized patient intake processes with custom AI employees that reduced wait times and improved care coordination.',
    challenge: 'HealthPath clinics were losing patients due to frustrating 45-minute intake processes and overwhelmed administrative staff.',
    strategy: 'We deployed AI intake assistants that could handle 90% of initial patient interactions, schedule appointments, answer insurance questions, and prepare documentation—all while maintaining HIPAA compliance.',
    results: 'Dramatic reduction in intake time freed staff for patient care while improving the patient experience.',
    metrics: {
      value: '83%',
      label: 'faster intake'
    },
    secondaryMetrics: [
      { value: '4.9/5', label: 'patient rating' },
      { value: '60%', label: 'staff time saved' }
    ],
    services: ['AI Employee Development', 'Process Automation', 'Integration'],
    platforms: ['Custom AI Platform'],
    thumbnailImage: healthcareImg,
    heroImage: healthcareImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'digital-finance-solutions': {
    slug: 'digital-finance-solutions',
    brand: 'Digital Finance Solutions',
    category: 'Banking & FinTech',
    description: 'Workflow Automation',
    fullDescription: 'Transformed a traditional financial services firm with AI-powered automation that slashed processing times and eliminated errors.',
    challenge: 'Manual document processing was costing Digital Finance millions in labor and causing compliance risks due to human error.',
    strategy: 'We implemented intelligent document processing AI that could extract, validate, and route financial documents with 99.7% accuracy, integrating seamlessly with existing banking systems.',
    results: 'ROI exceeded expectations within the first quarter, with ongoing savings compounding annually.',
    metrics: {
      value: '1300%',
      label: 'ROI'
    },
    secondaryMetrics: [
      { value: '99.7%', label: 'accuracy' },
      { value: '$2.4M', label: 'annual savings' }
    ],
    services: ['AI Automation', 'Process Optimization', 'System Integration'],
    platforms: ['Custom AI Platform'],
    thumbnailImage: bankingImg,
    heroImage: bankingImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'streamflow-automation': {
    slug: 'streamflow-automation',
    brand: 'StreamFlow Automation',
    category: 'Lead Generation',
    description: 'Sales Pipeline Optimization',
    fullDescription: 'Built an AI-driven lead qualification and nurturing system that multiplied sales team effectiveness.',
    challenge: 'StreamFlow sales reps were wasting 70% of their time on leads that would never convert, while hot prospects slipped through the cracks.',
    strategy: 'We deployed AI sales assistants that scored, qualified, and nurtured leads 24/7, only passing sales-ready prospects to human reps with complete conversation context.',
    results: 'Sales velocity increased dramatically while reps focused only on high-intent prospects.',
    metrics: {
      value: '10x',
      label: 'lead velocity'
    },
    secondaryMetrics: [
      { value: '85%', label: 'qualification rate' },
      { value: '3.2x', label: 'conversion rate' }
    ],
    services: ['AI Employee Development', 'CRM Integration', 'Sales Automation'],
    platforms: ['Salesforce', 'HubSpot'],
    thumbnailImage: automationImg,
    heroImage: automationImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'authentic-stories': {
    slug: 'authentic-stories',
    brand: 'Authentic Stories',
    category: 'Content Agency',
    description: 'Viral Content Campaign',
    fullDescription: 'Proved that authentic, unpolished content outperforms high-production advertising through strategic TikTok experimentation.',
    challenge: 'Authentic Stories clients were skeptical about raw, unfiltered content. They wanted proof that imperfection could drive results.',
    strategy: 'We ran controlled experiments comparing polished ads against authentic, user-style content. The results were undeniable—real content won every time.',
    results: 'The case study became a viral hit itself, attracting new clients who wanted the authentic approach.',
    metrics: {
      value: '2M',
      label: 'likes'
    },
    secondaryMetrics: [
      { value: '400K', label: 'new followers' },
      { value: '15x', label: 'engagement vs ads' }
    ],
    services: ['Content Strategy', 'Creative Production', 'TikTok Management'],
    platforms: ['TikTok'],
    thumbnailImage: socialMediaImg,
    heroImage: socialMediaImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'sportsai-interactive': {
    slug: 'sportsai-interactive',
    brand: 'SportsAI Interactive',
    category: 'Sports Entertainment',
    description: 'AI Fan Engagement',
    fullDescription: 'Launched an AI-powered chatbot that became the most popular fan engagement tool in sports media.',
    challenge: 'SportsAI needed to engage millions of fans simultaneously during live events without overwhelming their support team.',
    strategy: 'We built a conversational AI that could discuss stats, predict outcomes, answer trivia, and engage fans in real-time banter during games—handling millions of concurrent conversations.',
    results: 'The chatbot became a fan favorite, driving unprecedented engagement and loyalty.',
    metrics: {
      value: '10K+',
      label: 'users in hours'
    },
    secondaryMetrics: [
      { value: '2M', label: 'conversations' },
      { value: '92%', label: 'satisfaction' }
    ],
    services: ['AI Chatbot Development', 'Conversational AI', 'Real-time Integration'],
    platforms: ['Web', 'Mobile App', 'Social Media'],
    thumbnailImage: aiChatbotImg,
    heroImage: aiChatbotImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'global-supply-systems': {
    slug: 'global-supply-systems',
    brand: 'Global Supply Systems',
    category: 'Food & Agriculture',
    description: 'Supply Chain AI',
    fullDescription: 'Implemented AI-powered supply chain optimization that eliminated waste and reduced costs across a multinational food distributor.',
    challenge: 'Global Supply Systems was losing millions annually to spoilage, inefficient routing, and demand forecasting errors.',
    strategy: 'We deployed predictive AI that optimized inventory levels, routing decisions, and demand forecasting across 50+ distribution centers.',
    results: 'Waste reduced dramatically while delivery efficiency hit all-time highs.',
    metrics: {
      value: '$1M+',
      label: 'annual savings'
    },
    secondaryMetrics: [
      { value: '40%', label: 'waste reduction' },
      { value: '25%', label: 'faster delivery' }
    ],
    services: ['AI Automation', 'Predictive Analytics', 'Supply Chain Optimization'],
    platforms: ['Custom AI Platform', 'ERP Integration'],
    thumbnailImage: foodSupplyImg,
    heroImage: foodSupplyImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'talentscale-solutions': {
    slug: 'talentscale-solutions',
    brand: 'TalentScale Solutions',
    category: 'Staffing & Recruitment',
    description: 'AI Recruitment Team',
    fullDescription: 'Built an AI-powered recruitment engine that sourced, screened, and scheduled candidates faster than any human team could.',
    challenge: 'TalentScale was losing candidates to competitors due to slow response times and inconsistent screening processes.',
    strategy: 'We deployed AI recruiters that could engage candidates within seconds of application, conduct initial screenings, and schedule interviews—all while maintaining a personal touch.',
    results: 'Time-to-hire dropped dramatically while candidate quality improved.',
    metrics: {
      value: '30+',
      label: 'AI recruiters'
    },
    secondaryMetrics: [
      { value: '75%', label: 'faster hiring' },
      { value: '2x', label: 'quality candidates' }
    ],
    services: ['AI Employee Development', 'HR Tech Integration', 'Process Automation'],
    platforms: ['LinkedIn', 'ATS Systems'],
    thumbnailImage: aiEngineeringImg,
    heroImage: aiEngineeringImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'cloudbase-technologies': {
    slug: 'cloudbase-technologies',
    brand: 'CloudBase Technologies',
    category: 'Software & Tech',
    description: 'AI Transformation',
    fullDescription: 'Guided a traditional software company through complete AI adoption, from strategy to implementation.',
    challenge: 'CloudBase knew AI was the future but had no idea where to start or how to implement it without disrupting existing operations.',
    strategy: 'We created a phased AI adoption roadmap, trained teams, implemented pilot projects, and scaled successful initiatives across the organization.',
    results: 'Complete organizational transformation with AI now core to every department.',
    metrics: {
      value: '100%',
      label: 'AI adoption'
    },
    secondaryMetrics: [
      { value: '45%', label: 'efficiency gain' },
      { value: '8', label: 'AI tools deployed' }
    ],
    services: ['AI Strategy', 'Team Training', 'Implementation'],
    platforms: ['Multiple AI Platforms'],
    thumbnailImage: teamCollabImg,
    heroImage: teamCollabImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'heritage-luxury-group': {
    slug: 'heritage-luxury-group',
    brand: 'Heritage Luxury Group',
    category: 'Luxury Retail',
    description: 'Operations Automation',
    fullDescription: 'Modernized a heritage luxury brand operations with intelligent automation while preserving the white-glove customer experience.',
    challenge: 'Heritage Luxury Group refused to compromise their legendary customer service for efficiency. They needed automation that enhanced, not replaced, the human touch.',
    strategy: 'We implemented AI that handled backend operations invisibly—inventory, logistics, vendor management—freeing staff to focus entirely on customer relationships.',
    results: 'Operational efficiency improved dramatically while customer satisfaction reached new highs.',
    metrics: {
      value: 'Real-time',
      label: 'operations'
    },
    secondaryMetrics: [
      { value: '50%', label: 'cost reduction' },
      { value: '98%', label: 'customer satisfaction' }
    ],
    services: ['AI Automation', 'ERP Integration', 'Process Optimization'],
    platforms: ['SAP', 'Custom AI Platform'],
    thumbnailImage: luxuryFashionImg,
    heroImage: luxuryFashionImg,
    gridClass: 'col-span-1 row-span-1'
  }
};

// Export as array for easy iteration
export const caseStudiesArray = Object.values(caseStudies);

// Featured case studies for homepage (6 most impressive)
export const featuredCaseStudies = [
  caseStudies['fitnesspro-network'],
  caseStudies['digital-finance-solutions'],
  caseStudies['healthpath-ai'],
  caseStudies['gamingtech-elite'],
  caseStudies['authentic-stories'],
  caseStudies['luxe-essence']
];

// Case studies by category for filtering
export const caseStudiesByCategory = {
  creative: ['fitnesspro-network', 'luxe-essence', 'naturalcare-beauty', 'authentic-stories'],
  aiEmployees: ['healthpath-ai', 'sportsai-interactive', 'talentscale-solutions', 'propflow-property-platform'],
  automation: ['digital-finance-solutions', 'streamflow-automation', 'global-supply-systems', 'heritage-luxury-group', 'fanstake-sports-platform'],
  ecommerce: ['homecraft-innovations'],
  gaming: ['gamingtech-elite', 'progamer-network'],
  transformation: ['cloudbase-technologies']
};
