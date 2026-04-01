// Centralized case studies metadata - Original OARC Digital content
export interface CaseStudyMetrics {
  value: string;
  label: string;
}

export interface ClientQuote {
  text: string;
  author: string;
  company: string;
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
  timeline?: string;
  clientQuote?: ClientQuote;
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
import strategicPlanningDashboard from '@assets/generated_images/strategic_planning_dashboard_ui.png';
import aiDataCleansingDashboard from '@assets/generated_images/ai_data_cleansing_dashboard.png';
import colorfulDataAnalyticsImg from '@assets/generated_images/colorful_data_analytics_dashboard.png';
import cricketBettingAppImg from '@assets/generated_images/cricket_betting_mobile_app_mockup.png';
import cricketStadiumImg from '@assets/generated_images/vibrant_ipl_cricket_stadium.png';
import aiAutomationDashboard from '@assets/generated_images/ai_automation_enterprise_dashboard.png';
import aiCallCenterImg from '@assets/generated_images/colorful_ai-powered_call_center.png';

// Colorful homepage case study thumbnails
import colorfulDashboardImg from '@assets/generated_images/colorful_analytics_dashboard_laptop.png';
import colorfulRealEstateImg from '@assets/generated_images/colorful_real_estate_property_showcase.png';
import colorfulSalesTeamImg from '@assets/generated_images/vibrant_sales_team_celebrating.png';
import colorfulGymImg from '@assets/generated_images/colorful_modern_gym_interior.png';
import colorfulPerfumeImg from '@assets/generated_images/colorful_luxury_perfume_product.png';
import colorfulBeautyImg from '@assets/generated_images/colorful_natural_beauty_products.png';

// User-provided case study thumbnails
import naturalCareBeautyThumb from '@assets/natural_care_beauty_1766244402579.jpeg';
import strategicPulseThumb from '@assets/strategic_pulse_1766244402580.png';
import aiDataEngineThumb from '@assets/pexels-googledeepmind-17485707_1766245298201.jpg';
import tefalInfluencerThumb from '@assets/TefalPictures-32-scaled_1761760754960-DVSuvcTH_1766245435310.jpg';

export const caseStudies: Record<string, CaseStudy> = {
  'nexgen-retail-ai-transformation': {
    slug: 'nexgen-retail-ai-transformation',
    brand: 'NexGen Retail Group',
    category: 'AI Employees',
    description: 'Complete AI Workforce Transformation',
    fullDescription: 'Deployed a fleet of AI employees to handle Support, Sales, and Admin—slashing operational costs by 65% in 90 days while improving customer satisfaction.',
    challenge: 'NexGen Retail Group was expanding fast across Europe. But their operational costs were growing even faster. Hiring human staff for every new region wasn\'t sustainable. Support lines were clogged, sales teams wasted time on bad leads, and admin staff were buried in paperwork.',
    strategy: 'We deployed three AI employees: AI Support Specialist (24/7 customer support), AI SDR Agent (lead qualification & nurturing), and AI Admin Agent (document processing automation). Combined with end-to-end workflow automation for orders, support tickets, and inventory. Example AI Support flow: Customer asks "My order #4829 hasn\'t arrived." AI checks system, sees shipping delay, responds: "Your order is delayed due to weather. New ETA: Thursday. Would you like 20% off your next purchase?" Issue resolved in 90 seconds. Support agent never involved.',
    results: 'Achieved 65% cost reduction, 4.8/5 CSAT score (up from 3.2), 3x pipeline velocity, and complete deployment in just 90 days.',
    metrics: {
      value: '65%',
      label: 'cost reduction'
    },
    secondaryMetrics: [
      { value: '4.8/5', label: 'CSAT score' },
      { value: '3x', label: 'pipeline velocity' },
      { value: '90 days', label: 'to deployment' }
    ],
    services: ['AI Employee Development', 'Workflow Automation', 'Process Optimization', 'CRM Integration'],
    platforms: ['Salesforce', 'Zendesk', 'Shopify', 'SAP'],
    thumbnailImage: aiAutomationDashboard,
    heroImage: aiAutomationDashboard,
    gridClass: 'col-span-2 row-span-2',
    timeline: '6 months',
    clientQuote: {
      text: "We were drowning. Support tickets 3 days behind, sales burning out. OARC didn't just fix it—they transformed how we operate.",
      author: 'Operations Director',
      company: 'NexGen Retail'
    }
  },
  'strategypulse-enterprise': {
    slug: 'strategypulse-enterprise',
    brand: 'StrategyPulse',
    category: 'AI Solutions',
    description: 'Enterprise Strategic Planning Platform',
    fullDescription: 'Built an AI-powered strategic planning platform that helps mid-market companies align their entire organization around strategic objectives.',
    challenge: 'Most business planning tools don\'t allow employees to see how their work contributes to company goals, leading to siloed planning and disconnected execution.',
    strategy: 'We developed StrategyPulse to make strategic planning collaborative, transparent, and adaptive—with AI surfacing insights and keeping everyone focused.',
    results: 'Q3 goals completed increased from 35% to 89%, planning cycles reduced from 6 weeks to 2 weeks, and team alignment surveys improved from 4.1/10 to 8.9/10.',
    metrics: {
      value: '89%',
      label: 'goals completed'
    },
    secondaryMetrics: [
      { value: '2 weeks', label: 'planning cycle' },
      { value: '8.9/10', label: 'team alignment' }
    ],
    services: ['Custom Software Development', 'AI Analytics', 'Enterprise Deployment'],
    platforms: ['React', 'Node.js', 'AWS'],
    thumbnailImage: strategicPulseThumb,
    heroImage: strategicPlanningDashboard,
    gridClass: 'col-span-1 row-span-1',
    timeline: '4 months'
  },
  'propflow-property-platform': {
    slug: 'propflow-property-platform',
    brand: 'PropFlow Properties',
    category: 'AI Employees',
    description: '24/7 Lead Qualification System',
    fullDescription: 'Deployed an AI real estate specialist that handled initial inquiries, qualified prospects, and scheduled viewings—reducing human workload by 70%.',
    challenge: 'A 12-agent real estate office in Sliema serving Malta\'s expat and investment property market was losing leads due to slow response times. Agents spent 60% of their day on initial inquiries that never converted.',
    strategy: 'We deployed an AI Real Estate Specialist that engaged leads via phone, SMS, and email within seconds. The AI qualified prospects based on budget, timeline, and preferences, then seamlessly handed off warm leads. Example: Lead texts "Looking for 2BR in Sliema under €1,200/month" at 11 PM. AI responds in 20 seconds with 3 matching properties, availability, and viewing link. Agent wakes up to qualified lead already in pipeline.',
    results: 'Response time dropped from 4 hours to 28 seconds. Viewing bookings increased from 12/week to 38/week. Close rate improved from 8% to 26%. Now processing 2,400+ leads monthly across Malta and Gozo.',
    metrics: {
      value: '28 sec',
      label: 'response time'
    },
    secondaryMetrics: [
      { value: '38/week', label: 'viewings booked' },
      { value: '26%', label: 'close rate' }
    ],
    services: ['AI Employee Development', 'Process Automation', 'CRM Integration'],
    platforms: ['Custom AI Platform'],
    thumbnailImage: colorfulRealEstateImg,
    heroImage: aiRealEstateDashboard,
    gridClass: 'col-span-1 row-span-1',
    timeline: '3 months',
    clientQuote: {
      text: "A lead texted at 11 PM asking for 2BR in Sliema. By morning, they had 3 viewings scheduled. We didn't lift a finger.",
      author: 'Agency Owner',
      company: 'PropFlow Properties'
    }
  },
  'fanstake-sports-platform': {
    slug: 'fanstake-sports-platform',
    brand: 'FanStake Sports',
    category: 'AI Revenue Automation',
    description: 'AI Lead Engine System',
    fullDescription: 'Built an AI-powered lead generation engine that qualified prospects automatically, increasing pipeline opportunities from 12/month to 47/month while reducing cost per SQL.',
    challenge: 'A B2B SaaS company was struggling with lead quality. Their SDR team was burning through hundreds of leads monthly with no clear way to prioritize high-intent prospects.',
    strategy: 'We built an AI revenue engine that captured leads from multiple channels, scored them using behavioral and firmographic data, and automatically nurtured them through personalized sequences.',
    results: 'Pipeline opportunities increased from 12/month to 47/month. Cost per SQL dropped from €340 to €115. Currently serving 18K+ leads monthly with 89% team satisfaction.',
    metrics: {
      value: '47/mo',
      label: 'pipeline opportunities'
    },
    secondaryMetrics: [
      { value: '€115', label: 'cost per SQL' },
      { value: '89%', label: 'team satisfaction' }
    ],
    services: ['AI Automation', 'Lead Generation', 'Revenue Optimization'],
    platforms: ['HubSpot', 'Salesforce'],
    thumbnailImage: colorfulSalesTeamImg,
    heroImage: aiLeadEngineDashboard,
    gridClass: 'col-span-1 row-span-1',
    timeline: '4 months'
  },
  'apex-fitness-collective': {
    slug: 'apex-fitness-collective',
    brand: 'Apex Fitness Collective',
    category: 'Fitness & Lifestyle',
    description: 'Social Media Growth Campaign',
    fullDescription: 'Transformed a premium fitness brand into a social media powerhouse through strategic TikTok content and micro-influencer partnerships.',
    challenge: 'Apex Fitness Collective faced intense competition during peak fitness season. Traditional marketing was getting drowned out by larger chains with bigger budgets.',
    strategy: 'We deployed 200+ micro-influencers creating authentic gym content, paired with AI-optimized posting schedules and trend-jacking strategies that positioned the brand at the center of fitness conversations.',
    results: 'The campaign generated 4.2M views across 23 videos, 340K+ profile visits, and 89K engagement actions—establishing Apex as the go-to fitness destination for Gen Z audiences.',
    metrics: {
      value: '4.2M',
      label: 'video views'
    },
    secondaryMetrics: [
      { value: '340K+', label: 'profile visits' },
      { value: '89K', label: 'engagements' }
    ],
    services: ['Influencer Marketing', 'Content Strategy', 'Paid Social'],
    platforms: ['TikTok', 'Instagram'],
    thumbnailImage: colorfulGymImg,
    heroImage: gymGroupImg,
    gridClass: 'col-span-2 row-span-2',
    timeline: '8 weeks',
    clientQuote: {
      text: "Members started filming their own progress stories. The viral loop we never planned for became our biggest growth driver.",
      author: 'Marketing Manager',
      company: 'Apex Fitness Collective'
    }
  },
  'maison-lumiere': {
    slug: 'maison-lumiere',
    brand: 'Maison Lumière',
    category: 'Luxury Fragrance',
    description: 'Product Launch Campaign',
    fullDescription: 'Launched a premium fragrance line to European markets through strategic influencer seeding and experiential digital activations.',
    challenge: 'Breaking into the competitive luxury fragrance market requires more than traditional advertising. Maison Lumière needed to build prestige and desirability from day one.',
    strategy: 'We crafted an exclusive launch strategy combining high-profile influencer unboxings, immersive AR experiences, and strategically timed content drops that created scarcity and demand.',
    results: 'The launch achieved 840K impressions across 3 markets, sold 500 bottles in 6 days, and delivered 280% ROI in 90 days—establishing the brand as a luxury contender.',
    metrics: {
      value: '840K',
      label: 'impressions'
    },
    secondaryMetrics: [
      { value: '500', label: 'bottles sold' },
      { value: '280%', label: 'ROI' }
    ],
    services: ['Brand Strategy', 'Influencer Marketing', 'Creative Production'],
    platforms: ['Instagram', 'YouTube'],
    thumbnailImage: colorfulPerfumeImg,
    heroImage: azzaroImg,
    gridClass: 'col-span-1 row-span-1',
    timeline: '90 days'
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
    thumbnailImage: naturalCareBeautyThumb,
    heroImage: bodyShopImg,
    gridClass: 'col-span-1 row-span-1'
  },
  'volta-home': {
    slug: 'volta-home',
    brand: 'Volta Home',
    category: 'Home & Kitchen',
    description: 'Influencer Product Launch',
    fullDescription: 'Launched Volta Home\'s new product line through authentic influencer partnerships and social commerce integration, achieving complete inventory sellout.',
    challenge: 'Volta Home needed to generate buzz around their new product launch and drive direct-to-consumer sales in a crowded home appliance market.',
    strategy: 'We deployed shoppable content across social platforms, partnered with lifestyle influencers for live demonstrations, and built AI-powered retargeting funnels that converted browsers into buyers.',
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
    thumbnailImage: tefalInfluencerThumb,
    heroImage: homecraftHeroImg,
    gridClass: 'col-span-1 row-span-1',
    timeline: '6 weeks'
  },
  'phantom-peripherals': {
    slug: 'phantom-peripherals',
    brand: 'Phantom Peripherals',
    category: 'Gaming Hardware',
    description: 'Community Growth Initiative',
    fullDescription: 'Built a thriving gaming community from scratch, turning hardware buyers into brand evangelists through strategic content and engagement.',
    challenge: 'Phantom Peripherals needed to amplify their community presence and own the conversation in competitive gaming spaces.',
    strategy: 'We infiltrated gaming communities authentically, sponsoring streamers, creating shareable meme content, and launching Discord servers that became hubs for gaming enthusiasts.',
    results: 'Discord grew from 800 to 6,200 members in 4 months. 50+ streamers featured the product. 2.1M Twitch impressions with organic advocacy driving sustained growth.',
    metrics: {
      value: '6,200',
      label: 'Discord members'
    },
    secondaryMetrics: [
      { value: '50+', label: 'streamers' },
      { value: '2.1M', label: 'Twitch impressions' }
    ],
    services: ['Community Building', 'Streamer Partnerships', 'Content Strategy'],
    platforms: ['Twitch', 'Discord', 'YouTube'],
    thumbnailImage: lenovoImg,
    heroImage: lenovoImg,
    gridClass: 'col-span-2 row-span-1',
    timeline: '4 months'
  },
  'riftleague': {
    slug: 'riftleague',
    brand: 'RiftLeague',
    category: 'Esports',
    description: 'Platform Expansion Strategy',
    fullDescription: 'Expanded an esports platform audience across new markets and demographics through strategic content localization.',
    challenge: 'RiftLeague was popular in core markets but struggled to break into emerging gaming regions.',
    strategy: 'We localized content for 6 new countries, partnered with regional gaming influencers, and created culturally-relevant campaigns that spoke to local gaming communities.',
    results: '6.2M tournament stream views. 84K registered players across 6 countries. 180K average concurrent viewers with sustainable growth.',
    metrics: {
      value: '6.2M',
      label: 'stream views'
    },
    secondaryMetrics: [
      { value: '84K', label: 'registered players' },
      { value: '180K', label: 'avg concurrent' }
    ],
    services: ['Localization', 'Influencer Marketing', 'Paid Media'],
    platforms: ['YouTube', 'Twitch', 'TikTok'],
    thumbnailImage: eslImg,
    heroImage: eslImg,
    gridClass: 'col-span-1 row-span-1',
    timeline: '5 months'
  },
  'healthpath-ai': {
    slug: 'healthpath-ai',
    brand: 'HealthPath AI',
    category: 'Healthcare Technology',
    description: 'AI-Powered Patient Intake',
    fullDescription: 'Revolutionized patient intake processes with custom AI employees that reduced wait times and improved care coordination.',
    challenge: 'A private GP clinic in Valletta with 4 doctors and 2,400 active patients was losing patients due to frustrating 45-minute intake processes and overwhelmed administrative staff.',
    strategy: 'We deployed AI intake assistants that could handle 90% of initial patient interactions, schedule appointments, answer insurance questions, and prepare documentation—all while maintaining GDPR-compliant patient data handling.',
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
    gridClass: 'col-span-1 row-span-1',
    timeline: '3 months'
  },
  'digital-finance-solutions': {
    slug: 'digital-finance-solutions',
    brand: 'Digital Finance Solutions',
    category: 'Banking & FinTech',
    description: 'Workflow Automation',
    fullDescription: 'Transformed a Malta-licensed payment processor with AI-powered automation that slashed processing times and eliminated errors.',
    challenge: 'A Malta-licensed payment processor handling 45K transactions monthly was losing money to manual document processing and causing compliance risks due to human error. Error rate was at 3.2%.',
    strategy: 'We implemented intelligent document processing AI that could extract, validate, and route financial documents with 99.7% accuracy, integrating seamlessly with existing banking systems.',
    results: '289% ROI achieved (€180K implementation cost → €520K first-year savings). Error rate dropped from 3.2% to 0.3%.',
    metrics: {
      value: '289%',
      label: 'ROI'
    },
    secondaryMetrics: [
      { value: '0.3%', label: 'error rate' },
      { value: '€520K', label: 'first-year savings' }
    ],
    services: ['AI Automation', 'Process Optimization', 'System Integration'],
    platforms: ['Custom AI Platform'],
    thumbnailImage: bankingImg,
    heroImage: bankingImg,
    gridClass: 'col-span-1 row-span-1',
    timeline: '4 months'
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
    fullDescription: 'Implemented AI-powered supply chain optimization that eliminated waste and reduced costs across 8 warehouses serving Malta, Sicily, and Gozo.',
    challenge: 'Global Supply Systems was losing thousands weekly to spoilage (€2,800/week), inefficient routing, and demand forecasting errors across 8 warehouses serving 400+ restaurants and hotels.',
    strategy: 'We deployed predictive AI that optimized inventory levels, routing decisions, and demand forecasting across all distribution centers in Malta, Sicily, and Gozo.',
    results: 'Spoilage reduced from €2,800/week to €680/week (€110K annual savings). Delivery efficiency hit all-time highs.',
    metrics: {
      value: '€110K',
      label: 'annual savings'
    },
    secondaryMetrics: [
      { value: '76%', label: 'spoilage reduction' },
      { value: '8', label: 'warehouses' }
    ],
    services: ['AI Automation', 'Predictive Analytics', 'Supply Chain Optimization'],
    platforms: ['Custom AI Platform', 'ERP Integration'],
    thumbnailImage: foodSupplyImg,
    heroImage: foodSupplyImg,
    gridClass: 'col-span-1 row-span-1',
    timeline: '5 months'
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
    challenge: 'A 60-year-old family-owned luxury boutique in Valletta selling €800-€15K designer pieces refused to compromise their legendary customer service for efficiency. They needed automation that enhanced, not replaced, the human touch.',
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
    gridClass: 'col-span-1 row-span-1',
    timeline: '6 months'
  },
  'national-distributor-nlp': {
    slug: 'national-distributor-nlp',
    brand: 'AI Data Engine',
    category: 'AI Data Engineering',
    description: 'NLP-Powered Data Transformation',
    fullDescription: 'Deployed custom AI-powered data cleansing framework that transformed 10,000+ chaotic stock cards into a clean, intelligent data foundation for a major UK food & beverage distributor.',
    challenge: 'A major F&B distributor operating across B2B and B2C channels was drowning in data chaos. With 10,000+ SKUs, their ERP, CRM, and legacy spreadsheets were riddled with inconsistencies—misaligned product IDs, duplicate records, non-standard formats across dates, addresses, and SKUs. This caused frequent order errors, delayed fulfillment, inaccurate inventory forecasting, and poor reporting visibility.',
    strategy: 'We deployed a custom AI-powered data cleansing framework combining NLP models for product name normalization, fuzzy matching algorithms for de-duplication, rule-based validation engines for anomaly detection, and real-time data quality dashboards. The system enriched records using external data sources while establishing ongoing governance protocols—all without interrupting daily operations.',
    results: 'In just weeks, we transformed a fractured data ecosystem into a structured, intelligent foundation. Order errors dropped dramatically, forecasting became precise, team velocity increased, and the clean dataset now enables scalable AI automation across supply chain, pricing, and customer experience.',
    metrics: {
      value: '10,000+',
      label: 'SKUs cleaned'
    },
    secondaryMetrics: [
      { value: '99.2%', label: 'data accuracy' },
      { value: '73%', label: 'error reduction' },
      { value: '4 weeks', label: 'to completion' }
    ],
    services: ['AI Data Engineering', 'NLP Processing', 'Data Quality Automation', 'Dashboard Development'],
    platforms: ['Custom AI Platform', 'ERP Integration', 'CRM Integration'],
    thumbnailImage: aiDataEngineThumb,
    heroImage: aiDataCleansingDashboard,
    gridClass: 'col-span-2 row-span-1',
    timeline: '4 weeks',
    clientQuote: {
      text: "Same product had 12 different SKUs. Same customer, 6 CRM entries. Now? 99.2% accuracy. Our ops team finally sleeps.",
      author: 'Head of Operations',
      company: 'National Distributor'
    }
  },
  'cricketpulse-india': {
    slug: 'cricketpulse-india',
    brand: 'CricketPulse India',
    category: 'iGaming & Sports Tech',
    description: 'Mobile-First Platform Redesign',
    fullDescription: 'Transformed a leading Indian cricket predictions platform with a mobile-first UX overhaul that boosted conversions by 340% and expanded reach across India, Bangladesh, UK, and Australia.',
    challenge: 'CricketPulse India faced declining engagement with an outdated website that failed mobile users—the primary audience. Cluttered affiliate placements hurt the core value proposition of expert cricket predictions, while poor information hierarchy made it difficult for users to find live IPL odds and match insights.',
    strategy: 'We designed a mobile-first web application with strategic conversion elements: redesigned match pods with optimal information hierarchy, strategically relocated affiliate links, filterable multi-regional predictions for IPL, PSL, and international matches, and integrated cricket experts into all predictions for credibility.',
    results: 'The redesign transformed CricketPulse into the go-to platform for cricket enthusiasts across South Asia. Conversion rates tripled, mobile engagement increased 280%, and the platform now serves millions of cricket fans during IPL season.',
    metrics: {
      value: '340%',
      label: 'conversion increase'
    },
    secondaryMetrics: [
      { value: '280%', label: 'mobile engagement' },
      { value: '4.2M', label: 'monthly users' },
      { value: '12 weeks', label: 'to launch' }
    ],
    services: ['UX/UI Design', 'Mobile Development', 'Conversion Optimization', 'iGaming Compliance'],
    platforms: ['React Native', 'Node.js', 'AWS'],
    thumbnailImage: cricketStadiumImg,
    heroImage: cricketBettingAppImg,
    gridClass: 'col-span-2 row-span-1',
    timeline: '12 weeks',
    clientQuote: {
      text: "During the IPL final, we hit 1.2M concurrent users. Old site would have crashed at 100K.",
      author: 'CTO',
      company: 'CricketPulse'
    }
  }
};

// Export as array for easy iteration
export const caseStudiesArray = Object.values(caseStudies);

// Featured case studies for homepage (6 most impressive)
export const featuredCaseStudies = [
  caseStudies['nexgen-retail-ai-transformation'],
  caseStudies['national-distributor-nlp'],
  caseStudies['cricketpulse-india'],
  caseStudies['apex-fitness-collective'],
  caseStudies['naturalcare-beauty'],
  caseStudies['maison-lumiere']
].filter(Boolean);

// Case studies by category for filtering
export const caseStudiesByCategory = {
  creative: ['apex-fitness-collective', 'maison-lumiere', 'naturalcare-beauty', 'authentic-stories'],
  aiEmployees: ['healthpath-ai', 'sportsai-interactive', 'talentscale-solutions', 'propflow-property-platform', 'nexgen-retail-ai-transformation'],
  automation: ['digital-finance-solutions', 'global-supply-systems', 'heritage-luxury-group', 'fanstake-sports-platform', 'nexgen-retail-ai-transformation'],
  dataEngineering: ['national-distributor-nlp'],
  ecommerce: ['volta-home'],
  gaming: ['phantom-peripherals', 'riftleague'],
  iGaming: ['cricketpulse-india'],
  transformation: ['cloudbase-technologies', 'nexgen-retail-ai-transformation']
};
