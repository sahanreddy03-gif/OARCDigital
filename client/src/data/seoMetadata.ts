export interface PageSEO {
  title: string;
  description: string;
  path: string;
  ogType?: string;
}

export const supportingPagesSEO: Record<string, PageSEO> = {
  whyUs: {
    title: 'Why OARC Digital | Elite AI-Powered Agency in Malta & Beyond',
    description: 'Discover why tier-1 brands choose OARC Digital for AI-powered creative services, AI employees, and revenue automation. Premium marketing solutions across Malta, Europe, Middle East, and Asia with a dedicated team approach.',
    path: '/why-us',
    ogType: 'website'
  },
  services: {
    title: 'Our Services | AI Creative, AI Employees & Revenue Automation',
    description: 'Explore OARC Digital\'s comprehensive suite of AI-powered services: creative production, AI employees for hire, and revenue automation solutions. Elite marketing services designed for ambitious brands in Malta and globally.',
    path: '/services',
    ogType: 'website'
  },
  ourWork: {
    title: 'Our Work | Case Studies & Success Stories | OARC Digital',
    description: 'Explore OARC Digital\'s portfolio of successful AI-powered marketing campaigns and creative projects for global brands. Real results, authentic metrics, and proven expertise in AI creative and revenue automation.',
    path: '/our-work',
    ogType: 'website'
  },
  roadmap: {
    title: 'Road Map 2026 | OARC Digital\'s AI Innovation Journey',
    description: 'Discover OARC Digital\'s vision for the future of AI-powered marketing. Interactive timeline showcasing our commitment to AI innovation, creative excellence, and revenue automation leadership from Malta to the world.',
    path: '/roadmap',
    ogType: 'website'
  },
  contact: {
    title: 'Contact OARC Digital | Get in Touch with Our Team',
    description: 'Connect with OARC Digital\'s team across Malta, Chennai, and Dubai. Discuss your AI creative, AI employee, or revenue automation needs with our elite marketing experts. Premium service, dedicated support.',
    path: '/contact',
    ogType: 'website'
  },
  enterprise: {
    title: 'Enterprise Solutions | OARC Digital for Large Organizations',
    description: 'Enterprise-grade AI marketing solutions from OARC Digital. Scalable AI employees, custom creative production, and revenue automation systems designed for ambitious organizations across Europe, Middle East, and Asia.',
    path: '/enterprise',
    ogType: 'website'
  },
  pricing: {
    title: 'Pricing | OARC Digital Services & Packages',
    description: 'Transparent pricing for OARC Digital\'s AI-powered creative services, AI employees, and revenue automation solutions. Premium quality, flexible packages, dedicated support across Malta and global markets.',
    path: '/pricing',
    ogType: 'website'
  },
  resources: {
    title: 'Resources | Marketing Insights & AI Expertise | OARC Digital',
    description: 'Access OARC Digital\'s collection of marketing resources, AI insights, and industry expertise. Learn from our experience delivering elite creative and revenue automation solutions across three continents.',
    path: '/resources',
    ogType: 'website'
  }
};

export const aiEmployeeServicesSEO: Record<string, PageSEO> = {
  aiSdr: {
    title: 'AI SDR | Sales Development Representative | OARC Digital Malta',
    description: 'Hire an AI-powered Sales Development Representative (SDR) from OARC Digital. Automate lead qualification, outreach, and pipeline management with elite AI employee solutions based in Malta.',
    path: '/services/ai-sdr',
    ogType: 'article'
  },
  aiCustomerSupport: {
    title: 'AI Customer Support | 24/7 Support Agent | OARC Digital',
    description: 'Deploy AI-powered customer support agents that deliver premium service around the clock. OARC Digital\'s AI employees provide instant, accurate responses to customer inquiries at scale.',
    path: '/services/ai-customer-support',
    ogType: 'article'
  },
  aiMarketingCoordinator: {
    title: 'AI Marketing Coordinator | Campaign Management | OARC Digital',
    description: 'Hire an AI Marketing Coordinator from OARC Digital to streamline campaign planning, execution, and reporting. Elite AI employee solutions for ambitious marketing teams.',
    path: '/services/ai-marketing-coordinator',
    ogType: 'article'
  },
  aiContentWriter: {
    title: 'AI Content Writer | SEO & Creative Writing | OARC Digital Malta',
    description: 'Get an AI-powered content writer that produces SEO-optimized articles, blog posts, and creative copy. OARC Digital\'s AI employees deliver premium content at scale.',
    path: '/services/ai-content-writer',
    ogType: 'article'
  },
  aiDataAnalyst: {
    title: 'AI Data Analyst | Business Intelligence | OARC Digital',
    description: 'Leverage AI-powered data analysis with OARC Digital\'s AI Data Analyst. Transform raw data into actionable insights with elite machine learning and analytics capabilities.',
    path: '/services/ai-data-analyst',
    ogType: 'article'
  },
  aiFinancialAnalyst: {
    title: 'AI Financial Analyst | Financial Modeling | OARC Digital',
    description: 'Hire an AI Financial Analyst from OARC Digital for advanced financial modeling, forecasting, and reporting. Premium AI employee solutions for finance teams.',
    path: '/services/ai-financial-analyst',
    ogType: 'article'
  },
  aiAdmin: {
    title: 'AI Administrative Assistant | Virtual Assistant | OARC Digital',
    description: 'Deploy an AI-powered administrative assistant that handles scheduling, email management, and routine tasks. OARC Digital\'s AI employees deliver elite productivity solutions.',
    path: '/services/ai-administrative-assistant',
    ogType: 'article'
  }
};

export const creativeServicesSEO: Record<string, PageSEO> = {
  webDesign: {
    title: 'Web Design | Premium UX/UI Design | OARC Digital Malta',
    description: 'Elite web design services from OARC Digital. AI-enhanced UX/UI design, responsive development, and conversion-focused experiences for ambitious brands in Malta and beyond.',
    path: '/services/web-design',
    ogType: 'article'
  },
  videoProduction: {
    title: 'Video Production | Cinematic Content Creation | OARC Digital',
    description: 'Premium video production services combining creative excellence with AI efficiency. From concept to delivery, OARC Digital produces compelling video content that drives results.',
    path: '/services/video-production',
    ogType: 'article'
  },
  branding: {
    title: 'Branding Services | Brand Identity & Strategy | OARC Digital',
    description: 'Comprehensive branding services from OARC Digital. Build powerful brand identities with elite strategy, design, and AI-powered creative solutions for global markets.',
    path: '/services/branding',
    ogType: 'article'
  },
  motionDesign: {
    title: 'Motion Design | Animation & Motion Graphics | OARC Digital',
    description: 'Elite motion design and animation services. OARC Digital creates stunning motion graphics, explainer videos, and animated content that captivates audiences.',
    path: '/services/motion-design',
    ogType: 'article'
  },
  illustration: {
    title: 'Illustration Services | Custom Digital Art | OARC Digital Malta',
    description: 'Premium custom illustration and digital art from OARC Digital. Unique visual storytelling combining traditional artistry with AI-enhanced creative workflows.',
    path: '/services/illustration',
    ogType: 'article'
  },
  aiCopywriting: {
    title: 'AI Copywriting | Conversion-Focused Copy | OARC Digital',
    description: 'Elite AI-powered copywriting services from OARC Digital. Create compelling, conversion-focused copy at scale with human creativity and AI efficiency.',
    path: '/services/ai-copywriting',
    ogType: 'article'
  },
  printPackaging: {
    title: 'Print & Packaging Design | Physical Product Design | OARC Digital',
    description: 'Premium print and packaging design services. OARC Digital creates stunning physical brand experiences from product packaging to marketing collateral.',
    path: '/services/print-packaging',
    ogType: 'article'
  },
  presentationPitch: {
    title: 'Presentation Design | Pitch Decks | OARC Digital Malta',
    description: 'Elite presentation and pitch deck design from OARC Digital. Create compelling visual narratives that win deals and inspire action.',
    path: '/services/presentation-pitch',
    ogType: 'article'
  },
  emailCreative: {
    title: 'Email Creative Design | Email Marketing Design | OARC Digital',
    description: 'Premium email design services that drive engagement and conversions. OARC Digital creates stunning email campaigns combining creative excellence with marketing strategy.',
    path: '/services/email-creative',
    ogType: 'article'
  },
  designSystems: {
    title: 'Design Systems | Scalable UI Frameworks | OARC Digital',
    description: 'Build comprehensive design systems with OARC Digital. Create consistent, scalable brand experiences across all digital touchpoints with elite design system architecture.',
    path: '/services/design-systems',
    ogType: 'article'
  },
  adCreative: {
    title: 'Ad Creative Design | Performance Marketing Creative | OARC Digital',
    description: 'High-converting ad creative from OARC Digital. Design performance marketing assets that drive results across paid social, display, and video advertising.',
    path: '/services/ad-creative',
    ogType: 'article'
  },
  immersive3DAR: {
    title: '3D & AR Experiences | Immersive Design | OARC Digital Malta',
    description: 'Cutting-edge 3D and augmented reality experiences from OARC Digital. Create immersive brand experiences that engage audiences in innovative ways.',
    path: '/services/immersive-3d-ar',
    ogType: 'article'
  },
  socialMediaCreative: {
    title: 'Social Media Creative | Social Content Design | OARC Digital',
    description: 'Elite social media creative services from OARC Digital. Design thumb-stopping social content that drives engagement across all platforms.',
    path: '/services/social-media-creative',
    ogType: 'article'
  }
};

export const revenueServicesSEO: Record<string, PageSEO> = {
  revenueAutomation: {
    title: 'Revenue Automation | Sales & Marketing Automation | OARC Digital',
    description: 'End-to-end revenue automation solutions from OARC Digital. Streamline your sales and marketing operations with AI-powered automation systems designed for growth.',
    path: '/services/revenue-automation',
    ogType: 'article'
  },
  funnelAutomation: {
    title: 'Funnel Automation | Conversion Optimization | OARC Digital Malta',
    description: 'Automate your marketing funnels with OARC Digital. Build, test, and optimize conversion funnels using AI-powered automation for predictable revenue growth.',
    path: '/services/funnel-automation',
    ogType: 'article'
  },
  customerAcquisition: {
    title: 'Customer Acquisition | Growth Marketing | OARC Digital',
    description: 'Scalable customer acquisition strategies from OARC Digital. Combine AI automation, creative excellence, and data-driven marketing to accelerate growth.',
    path: '/services/customer-acquisition',
    ogType: 'article'
  },
  leadGeneration: {
    title: 'Lead Generation | B2B & B2C Lead Gen | OARC Digital Malta',
    description: 'Premium lead generation services combining AI automation with creative strategy. OARC Digital delivers qualified leads at scale for ambitious brands.',
    path: '/services/lead-generation',
    ogType: 'article'
  },
  paidAdvertising: {
    title: 'Paid Advertising | Performance Marketing | OARC Digital',
    description: 'Elite paid advertising management from OARC Digital. Drive ROI with data-driven campaigns across Google, Meta, LinkedIn, and programmatic platforms.',
    path: '/services/paid-advertising',
    ogType: 'article'
  },
  mediaBuying: {
    title: 'Media Buying | Programmatic Advertising | OARC Digital Malta',
    description: 'Strategic media buying and programmatic advertising from OARC Digital. Optimize ad spend and maximize reach with elite media planning and execution.',
    path: '/services/media-buying',
    ogType: 'article'
  },
  influencerMarketing: {
    title: 'Influencer Marketing | Creator Partnerships | OARC Digital',
    description: 'Premium influencer marketing campaigns from OARC Digital. Connect with authentic creators and drive results through strategic influencer partnerships.',
    path: '/services/influencer-marketing',
    ogType: 'article'
  },
  digitalMarketing: {
    title: 'Digital Marketing | Full-Service Marketing | OARC Digital Malta',
    description: 'Comprehensive digital marketing services from OARC Digital. Integrate strategy, creative, and technology for ambitious brands across Europe, Middle East, and Asia.',
    path: '/services/digital-marketing',
    ogType: 'article'
  },
  socialMediaManagement: {
    title: 'Social Media Management | Community Management | OARC Digital',
    description: 'Elite social media management from OARC Digital. Build engaged communities, manage brand reputation, and drive results across all social platforms.',
    path: '/services/social-media-management',
    ogType: 'article'
  },
  rapidIdeaTesting: {
    title: 'Rapid Idea Testing | Marketing Experimentation | OARC Digital',
    description: 'Validate marketing ideas fast with OARC Digital\'s rapid testing framework. Reduce risk and accelerate innovation with AI-powered experimentation.',
    path: '/services/rapid-idea-testing',
    ogType: 'article'
  },
  aiConsulting: {
    title: 'AI Consulting | AI Strategy & Implementation | OARC Digital Malta',
    description: 'Strategic AI consulting from OARC Digital. Transform your marketing and operations with expert AI strategy, implementation, and optimization services.',
    path: '/services/ai-consulting',
    ogType: 'article'
  },
  mobileAppsDevelopment: {
    title: 'Mobile App Development | iOS & Android Apps | OARC Digital',
    description: 'Premium mobile app development from OARC Digital. Build beautiful, high-performance iOS and Android applications that drive business results.',
    path: '/services/mobile-apps-development',
    ogType: 'article'
  },
  hireAIEmployees: {
    title: 'Hire AI Employees | AI Workforce Solutions | OARC Digital Malta',
    description: 'Scale your team with AI employees from OARC Digital. Deploy specialized AI workers for sales, support, marketing, content, and administrative tasks.',
    path: '/services/hire-ai-employees',
    ogType: 'article'
  }
};

export const caseStudiesSEO: Record<string, PageSEO> = {
  healthpathAI: {
    title: 'HealthPath AI Healthcare Automation Case Study | OARC Digital',
    description: 'How OARC Digital reduced patient intake time by 83% for HealthPath AI using AI-powered document processing, enabling faster access to critical healthcare services.',
    path: '/case-studies/healthpath-ai',
    ogType: 'article'
  },
  ventureHubCo: {
    title: 'VentureHub Co Brand Reimagination Case Study | OARC Digital',
    description: 'How OARC Digital reimagined the VentureHub Co brand, connecting new positioning and messaging platform to exceptional visual execution for investor-backed founders.',
    path: '/case-studies/venturehub-co',
    ogType: 'article'
  },
  luxeEssence: {
    title: 'Luxe Essence TikTok Luxury Fragrance Campaign | OARC Digital',
    description: 'How OARC Digital successfully introduced luxury fragrance brand Luxe Essence to the TikTok community, reaching millions through authentic influencer partnerships.',
    path: '/case-studies/luxe-essence',
    ogType: 'article'
  },
  digitalFinanceSolutions: {
    title: 'Digital Finance Solutions Banking Automation Case Study | OARC Digital',
    description: 'How OARC Digital delivered 1,300% ROI for Digital Finance Solutions, saving 127,000+ hours in branches and generating $7M in new revenue streams through intelligent automation for 14M+ clients.',
    path: '/case-studies/digital-finance-solutions',
    ogType: 'article'
  },
  naturalCareBeauty: {
    title: 'NaturalCare Beauty Middle East Awareness Campaign | OARC Digital',
    description: 'How OARC Digital raised awareness of NaturalCare Beauty\'s brand activism across Middle Eastern markets through targeted social media campaigns.',
    path: '/case-studies/naturalcare-beauty',
    ogType: 'article'
  },
  streamFlowAutomation: {
    title: 'StreamFlow Automation Revenue Automation Case Study | OARC Digital',
    description: 'How OARC Digital helped StreamFlow Automation achieve 10x delivery speed increase and tens of thousands in cost savings through automated workflows.',
    path: '/case-studies/streamflow-automation',
    ogType: 'article'
  },
  authenticStories: {
    title: 'Authentic Stories TikTok Success Case Study | OARC Digital',
    description: 'How OARC Digital\'s authentic content approach garnered 2 million likes and 400K NEW TikTok followers through genuine storytelling.',
    path: '/case-studies/authentic-stories',
    ogType: 'article'
  },
  proGamerNetwork: {
    title: 'ProGamer Network Social Media Campaign | OARC Digital',
    description: 'How OARC Digital created engaging social media campaigns for ProGamer Network, connecting with gaming communities across multiple platforms.',
    path: '/case-studies/progamer-network',
    ogType: 'article'
  },
  sportsAIInteractive: {
    title: 'SportsAI Interactive AI Chatbot Case Study | OARC Digital',
    description: 'How OARC Digital built an AI chatbot for SportsAI Interactive that scaled from zero to tens of thousands of users within hours.',
    path: '/case-studies/sportsai-interactive',
    ogType: 'article'
  },
  fitnessProNetwork: {
    title: 'FitnessPro Network Social Media Campaign | OARC Digital',
    description: 'How OARC Digital created impactful social media campaigns for FitnessPro Network, driving engagement and membership growth.',
    path: '/case-studies/fitnesspro-network',
    ogType: 'article'
  },
  globalSupplySystems: {
    title: 'Global Supply Systems Food Supply Chain Automation Case Study | OARC Digital',
    description: 'How OARC Digital saved Global Supply Systems $1M+ annually, automated 125,000 hours of work, and deployed 210 intelligent automations across global food supply chain operations.',
    path: '/case-studies/global-supply-systems',
    ogType: 'article'
  },
  gamingTechElite: {
    title: 'GamingTech Elite Gaming Marketing Campaign | OARC Digital',
    description: 'How OARC Digital created compelling gaming-focused marketing campaigns for GamingTech Elite, reaching gaming enthusiasts worldwide.',
    path: '/case-studies/gamingtech-elite',
    ogType: 'article'
  },
  talentScaleSolutions: {
    title: 'TalentScale Solutions AI Team Case Study | OARC Digital',
    description: 'How OARC Digital helped TalentScale Solutions scale their digital transformation with 30+ seamlessly integrated nearshore AI engineers.',
    path: '/case-studies/talentscale-solutions',
    ogType: 'article'
  },
  cloudBaseTechnologies: {
    title: 'CloudBase Technologies AI Adoption Case Study | OARC Digital',
    description: 'How OARC Digital helped CloudBase Technologies scale AI adoption with a solid foundation for responsible AI use in creative teams.',
    path: '/case-studies/cloudbase-technologies',
    ogType: 'article'
  },
  heritageLuxuryGroup: {
    title: 'Heritage Luxury Group Fashion Automation Case Study | OARC Digital',
    description: 'How OARC Digital automated SAP S/4HANA processes for Heritage Luxury Group, transforming financial planning, sales, and operations with near real-time data.',
    path: '/case-studies/heritage-luxury-group',
    ogType: 'article'
  },
  homeCraftInnovations: {
    title: 'HomeCraft Innovations Product Launch Campaign Case Study | OARC Digital',
    description: 'How OARC Digital sold out product lines for HomeCraft Innovations through innovative social media campaigns and influencer partnerships across multiple platforms.',
    path: '/case-studies/homecraft-innovations',
    ogType: 'article'
  }
};

export const pdfPagesSEO: Record<string, PageSEO> = {
  pdfHub: {
    title: 'Client Proposal Documents | OARC Digital Malta',
    description: 'Professional PDF presentations and capability decks for client proposals. Comprehensive marketing, automation, and AI services documentation.',
    path: '/pdf',
    ogType: 'website'
  },
  capabilitiesDeck: {
    title: 'Capabilities Deck | OARC Digital Malta',
    description: 'Comprehensive capabilities deck showcasing OARC Digital services, global brand success stories, technology stack, pricing, and proven results.',
    path: '/pdf/capabilities-deck',
    ogType: 'website'
  },
  companyProfile: {
    title: 'Company Profile | OARC Digital Malta',
    description: 'Complete company profile featuring OARC Digital services, technology stack, case studies, and AI-powered marketing solutions.',
    path: '/pdf/company-profile',
    ogType: 'website'
  },
  onePager: {
    title: 'One Page Overview | OARC Digital Malta',
    description: 'Quick overview of OARC Digital AI-powered creative services, digital employees, and revenue automation solutions.',
    path: '/pdf/one-pager',
    ogType: 'website'
  },
  aiCreativeProfile: {
    title: 'AI Creative Services Profile | OARC Digital Malta',
    description: 'Detailed profile of OARC Digital AI-powered creative services including design, content creation, and marketing automation.',
    path: '/pdf/ai-creative-profile',
    ogType: 'website'
  }
};
