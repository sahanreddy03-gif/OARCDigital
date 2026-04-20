import { Target, HeadphonesIcon, Calendar, LayoutGrid, Users, Megaphone, Search, TrendingUp, UserCheck, Briefcase, UserPlus, Wallet, BarChart3, FileText, Mail, LucideIcon } from 'lucide-react';

import salesAgentAvatar from '@assets/Sales_1768204442839.webp';
import salesManagerAvatar from '@assets/sales_manager_1768204442838.webp';
import supportAgentAvatar from '@assets/Untitled_1768204442839.webp';
import bookingsAgentAvatar from '@assets/bookings_1768204442836.webp';
import operationsAgentAvatar from '@assets/Man_Avatar_8_1768204442838.webp';
import followupAgentAvatar from '@assets/Follow_up_1768204442837.webp';
import customerSupportAvatar from '@assets/Customer_support_specalist_1768204442837.webp';
import businessDevAvatar from '@assets/Business_development_manager_1768204442837.webp';
import lunaAvatar from '@assets/3333_1768232221384.webp';
import pixelAvatar from '@assets/4444_1768232221384.webp';
import sageAvatar from '@assets/222_1768232221384.webp';
import vaultAvatar from '@assets/Untitled_1768232221385.webp';
import cipherAvatar from '@assets/7_1768245852873.webp';
import quillAvatar from '@assets/6_1768245852872.webp';
import pulseAvatar from '@assets/888_1768245852873.webp';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AgentTestimonial {
  author: string;
  company: string;
  quote: string;
}

export interface AgentRating {
  ratingValue: number;
  reviewCount: number;
  testimonials: AgentTestimonial[];
}

export interface AITeamMember {
  id: string;
  name: string;
  role: string;
  pillar: string;
  icon: LucideIcon;
  description: string;
  metric: string;
  capabilities: string[];
  avatarImage: string | null;
  avatarAlt: string;
  faqs: FAQItem[];
}

export const aiTeamMembers: AITeamMember[] = [
  {
    id: 'sales',
    name: 'Atlas',
    role: 'Sales Agent',
    pillar: 'Sales',
    icon: Target,
    description: 'Atlas captures and qualifies leads, books demos, and nurtures prospects automatically. Your tireless sales rep that never misses a follow-up.',
    metric: '3x conversion lift',
    capabilities: ['Lead qualification', 'Demo booking', 'Follow-up sequences', 'CRM updates'],
    avatarImage: salesAgentAvatar,
    avatarAlt: 'Atlas AI Sales Agent - OARC Digital Malta AI agency automated lead qualification and demo booking',
    faqs: [
      {
        question: 'What can an AI sales agent do for my Malta business?',
        answer: 'Atlas qualifies every inbound lead instantly, books demos directly into your calendar, and sends personalised follow-up sequences — all without human intervention. Malta businesses using Atlas report a 3x lift in conversion rates because no lead ever falls through the cracks.'
      },
      {
        question: 'How does Atlas qualify leads automatically?',
        answer: 'Atlas scores each lead against your ideal customer profile using data from your CRM, website forms, and conversation history. It asks the right questions, identifies buying intent, and routes only sales-ready leads to your team — saving hours of manual screening every week.'
      },
      {
        question: 'How long does it take to deploy an AI sales agent?',
        answer: 'Most OARC Digital clients have Atlas live and handling leads within 7 to 14 days. Our team configures Atlas to your sales playbook, integrates it with your existing CRM, and trains it on your products or services before go-live.'
      },
      {
        question: 'Can Atlas integrate with my existing CRM?',
        answer: 'Yes. Atlas integrates with all major CRM platforms including HubSpot, Salesforce, Pipedrive, and Zoho. Every lead interaction is logged automatically, keeping your pipeline data clean and up to date in real time.'
      },
      {
        question: 'Will an AI sales agent replace my human sales team?',
        answer: 'No — Atlas is designed to support your team, not replace it. It handles the repetitive top-of-funnel work like lead qualification and initial outreach so your human reps can focus on closing high-value deals and building relationships.'
      }
    ]
  },
  {
    id: 'support',
    name: 'Nova',
    role: 'Support Agent',
    pillar: 'Support',
    icon: HeadphonesIcon,
    description: 'Nova resolves 80-95% of common queries instantly, escalating complex issues with full context. Customer satisfaction, guaranteed.',
    metric: '90% auto-resolution',
    capabilities: ['Ticket resolution', 'Knowledge lookup', 'Smart escalation', 'Multi-channel'],
    avatarImage: supportAgentAvatar,
    avatarAlt: 'Nova AI Support Agent - OARC Digital Malta AI agency automated customer query resolution',
    faqs: [
      {
        question: 'How does an AI support agent handle customer queries?',
        answer: 'Nova uses your knowledge base, product documentation, and past support tickets to answer customer questions instantly. It understands natural language, so customers can ask questions in their own words and receive accurate, helpful responses within seconds — any time of day.'
      },
      {
        question: 'What percentage of queries can Nova resolve without a human?',
        answer: 'Nova auto-resolves between 80 and 95 percent of common support queries, including order status checks, refund requests, FAQs, and account-related questions. Complex or sensitive issues are escalated to a human agent with full conversation context already attached.'
      },
      {
        question: 'Is Nova available outside business hours?',
        answer: 'Yes. Nova operates 24 hours a day, 7 days a week, 365 days a year. Customers in Malta and internationally always receive an immediate response regardless of time zone, public holidays, or peak demand periods.'
      },
      {
        question: 'How does Nova handle complex issues it cannot resolve?',
        answer: 'When Nova encounters an issue outside its scope, it escalates to the appropriate human agent with a full transcript of the conversation, the customer profile, and a suggested resolution. This means your team picks up where Nova left off without asking the customer to repeat themselves.'
      },
      {
        question: 'Can Nova support multiple communication channels at once?',
        answer: 'Yes. Nova handles support across WhatsApp, email, live chat, and social media platforms simultaneously from a single dashboard. This gives Malta businesses a unified support experience without hiring additional staff for each channel.'
      }
    ]
  },
  {
    id: 'bookings',
    name: 'Aria',
    role: 'Bookings Agent',
    pillar: 'Scheduling',
    icon: Calendar,
    description: 'Aria handles bookings, reschedules, and sends reminders across all channels. No more no-shows or scheduling conflicts.',
    metric: '20% fewer no-shows',
    capabilities: ['Calendar sync', 'Reminders', 'Rescheduling', 'Time zone handling'],
    avatarImage: bookingsAgentAvatar,
    avatarAlt: 'Aria AI Bookings Agent - OARC Digital Malta AI agency automated appointment scheduling',
    faqs: [
      {
        question: 'How does an AI bookings agent reduce no-shows?',
        answer: 'Aria sends automated confirmation messages immediately after booking and follows up with timely reminders via WhatsApp, SMS, or email. Clients can confirm, reschedule, or cancel directly from the reminder message, which reduces no-shows by an average of 20 percent for Malta businesses.'
      },
      {
        question: 'Can Aria sync with my existing calendar system?',
        answer: 'Yes. Aria integrates with Google Calendar, Outlook, Calendly, and most booking software used by Malta businesses. It reads your real-time availability, prevents double-bookings, and keeps every calendar in sync automatically.'
      },
      {
        question: 'How does Aria handle different time zones for international clients?',
        answer: 'Aria automatically detects the client\'s time zone and converts appointment times accordingly. Whether your client is in Malta, the UK, or Australia, the booking confirmation and reminders always display the correct local time for both parties.'
      },
      {
        question: 'What happens when a client needs to reschedule?',
        answer: 'Clients can request a reschedule directly through their confirmation message or reminder. Aria checks your live availability, offers alternative slots, and updates the calendar for both parties without any manual intervention from your team.'
      },
      {
        question: 'Can Aria send automated reminders before appointments?',
        answer: 'Yes. Aria sends customisable reminders at intervals you define — for example, 24 hours and 1 hour before the appointment. Reminders can be sent via WhatsApp, SMS, or email and can include preparation instructions, location details, or any other relevant information.'
      }
    ]
  },
  {
    id: 'operations',
    name: 'Orion',
    role: 'Operations Agent',
    pillar: 'Operations',
    icon: LayoutGrid,
    description: 'Orion routes tasks, updates systems, and closes the loop automatically. Your operations run smoother than ever.',
    metric: '50% time reclaimed',
    capabilities: ['Task routing', 'System updates', 'Workflow automation', 'Status sync'],
    avatarImage: operationsAgentAvatar,
    avatarAlt: 'Orion AI Operations Agent - OARC Digital Malta AI agency workflow automation',
    faqs: [
      {
        question: 'What operational tasks can an AI operations agent automate?',
        answer: 'Orion automates repetitive workflows such as task assignment, system status updates, inter-department handoffs, and data synchronisation across platforms. Malta businesses use Orion to reclaim up to 50 percent of time previously spent on manual administrative processes.'
      },
      {
        question: 'How does Orion route tasks to the right team members?',
        answer: 'Orion analyses incoming requests using configurable rules based on task type, priority, skill requirements, and team workload. It assigns each task to the most appropriate person or team automatically, ensuring nothing is overlooked or misrouted.'
      },
      {
        question: 'Can Orion integrate with tools like Jira, Slack, or Asana?',
        answer: 'Yes. Orion connects with project management platforms including Jira, Asana, Monday.com, and Trello, as well as communication tools like Slack and Microsoft Teams. Changes in one system are reflected across all connected platforms in real time.'
      },
      {
        question: 'How quickly can Orion update multiple systems simultaneously?',
        answer: 'Orion executes cross-system updates in under two seconds. When a task status changes, a ticket is resolved, or a project milestone is reached, all connected platforms are updated instantly and relevant stakeholders are notified automatically.'
      },
      {
        question: 'Is an AI operations agent suitable for small businesses in Malta?',
        answer: 'Absolutely. Orion scales to fit businesses of any size. Small Malta businesses use Orion to operate with the efficiency of a much larger team, eliminating the need for additional administrative hires as they grow.'
      }
    ]
  },
  {
    id: 'followup',
    name: 'Echo',
    role: 'Follow-up Agent',
    pillar: 'Engagement',
    icon: Users,
    description: 'Echo re-engages leads and customers until they convert. Persistent, personalized outreach at scale.',
    metric: '10x outreach velocity',
    capabilities: ['Drip campaigns', 'Re-engagement', 'Personalization', 'Multi-touch'],
    avatarImage: followupAgentAvatar,
    avatarAlt: 'Echo AI Follow-up Agent - OARC Digital Malta AI agency lead re-engagement automation',
    faqs: [
      {
        question: 'How does an AI follow-up agent re-engage cold leads?',
        answer: 'Echo monitors your CRM for leads that have gone quiet and automatically sends personalised re-engagement messages at the optimal time. It varies the messaging angle across multiple touchpoints, keeping your brand top-of-mind without manual effort from your sales team.'
      },
      {
        question: 'Can Echo personalise outreach messages at scale?',
        answer: 'Yes. Echo pulls data from your CRM — such as the lead\'s name, company, previous interactions, and interests — to craft messages that feel individually written. This level of personalisation at scale is what drives Echo\'s 10x improvement in outreach velocity for Malta businesses.'
      },
      {
        question: 'How many leads can Echo follow up with simultaneously?',
        answer: 'Echo handles unlimited concurrent follow-up sequences without degrading quality. Whether you have 50 or 5,000 leads in your pipeline, every contact receives timely, personalised outreach while your human team focuses on closing conversations that Echo initiates.'
      },
      {
        question: 'What channels does Echo use for follow-up outreach?',
        answer: 'Echo reaches leads across email, WhatsApp, SMS, and LinkedIn depending on your configuration and the lead\'s preferred communication channel. Multi-touch sequences across different channels significantly increase response rates compared to single-channel outreach.'
      },
      {
        question: 'How does Echo know when to stop following up with a lead?',
        answer: 'Echo uses configurable rules to determine when to pause or stop outreach — such as after a set number of unanswered messages, after a specific time period, or when a lead opts out. Leads that respond are automatically handed off to your sales team for a live conversation.'
      }
    ]
  },
  {
    id: 'marketing',
    name: 'Luna',
    role: 'Marketing Agent',
    pillar: 'Marketing',
    icon: Megaphone,
    description: 'Luna optimizes your campaigns, segments audiences, and runs A/B tests automatically. Data-driven marketing that scales.',
    metric: '40% better ROI',
    capabilities: ['Campaign optimization', 'Audience segmentation', 'A/B testing', 'Performance analytics'],
    avatarImage: lunaAvatar,
    avatarAlt: 'Luna AI Marketing Agent - OARC Digital Malta AI agency campaign optimization',
    faqs: [
      {
        question: 'How does an AI marketing agent optimise my campaigns?',
        answer: 'Luna continuously analyses campaign performance data — click-through rates, conversion rates, cost per acquisition, and audience engagement — and makes real-time adjustments to bids, targeting, and creative allocation. This ongoing optimisation is what drives a 40 percent improvement in ROI for Malta businesses.'
      },
      {
        question: 'Can Luna run A/B tests automatically without my involvement?',
        answer: 'Yes. Luna designs, launches, and monitors A/B tests across your ads, landing pages, and email campaigns. It statistically determines the winning variant, scales the budget toward it, and reports the results — all without requiring manual setup or analysis from your team.'
      },
      {
        question: 'How does Luna segment my marketing audience?',
        answer: 'Luna analyses customer behaviour, purchase history, demographics, and engagement patterns to create precise audience segments. These segments are used to deliver the right message to the right person at the right time, significantly increasing campaign relevance and performance.'
      },
      {
        question: 'What marketing platforms does Luna support?',
        answer: 'Luna integrates with Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads, and email marketing platforms including Mailchimp and Klaviyo. It provides a unified view of performance across all channels and optimises budget allocation automatically.'
      },
      {
        question: 'How quickly will I see improved marketing ROI with Luna?',
        answer: 'Most OARC Digital clients see measurable improvements within the first 2 to 4 weeks of deployment as Luna collects performance data and begins optimising. Full campaign optimisation with statistically significant results typically takes 60 to 90 days.'
      }
    ]
  },
  {
    id: 'seo',
    name: 'Pixel',
    role: 'SEO Specialist',
    pillar: 'Marketing',
    icon: Search,
    description: 'Pixel analyzes rankings, optimizes content, and tracks competitors. Your search visibility, always improving.',
    metric: '2x organic traffic',
    capabilities: ['Keyword research', 'Content optimization', 'Rank tracking', 'Competitor analysis'],
    avatarImage: pixelAvatar,
    avatarAlt: 'Pixel AI SEO Specialist - OARC Digital Malta AI agency search optimization',
    faqs: [
      {
        question: 'How does an AI SEO agent improve my search rankings in Malta?',
        answer: 'Pixel audits your website, identifies technical SEO issues, researches high-opportunity keywords relevant to the Malta market, and optimises your existing content for better visibility. Clients typically double their organic traffic within 6 months of deploying Pixel.'
      },
      {
        question: 'What does Pixel do for keyword research specific to Malta?',
        answer: 'Pixel analyses search volume, keyword difficulty, and competitor rankings for terms that Malta-based customers actually use. It identifies low-competition, high-intent keywords where your business can rank quickly and build sustainable organic traffic over time.'
      },
      {
        question: 'Can Pixel track my competitors\' SEO strategies automatically?',
        answer: 'Yes. Pixel monitors competitor rankings, backlink acquisition, and content changes continuously. When a competitor gains ground on a keyword you care about, Pixel alerts you and suggests counter-strategies to protect or improve your position.'
      },
      {
        question: 'How quickly will I see SEO results with Pixel?',
        answer: 'Technical fixes and on-page optimisations typically show impact within 4 to 8 weeks. Competitive keyword rankings take longer — usually 3 to 6 months — depending on domain authority and competition. Pixel prioritises quick wins while building long-term authority in parallel.'
      },
      {
        question: 'Can Pixel help with local SEO for my Malta business?',
        answer: 'Yes. Pixel specialises in local SEO strategies including Google Business Profile optimisation, local citation building, and Malta-specific content creation. This ensures your business appears prominently in local search results when potential customers in Malta are looking for your services.'
      }
    ]
  },
  {
    id: 'sales-manager',
    name: 'Summit',
    role: 'Sales Manager',
    pillar: 'Sales',
    icon: TrendingUp,
    description: 'Summit uses your business insights to craft compelling cold call scripts, design persuasive cold emails, and build pitches that close deals with confidence.',
    metric: '35% higher close rate',
    capabilities: ['Sales scripts', 'Pipeline management', 'Deal forecasting', 'Team coaching'],
    avatarImage: salesManagerAvatar,
    avatarAlt: 'Summit AI Sales Manager - OARC Digital Malta AI agency pipeline and deal optimization',
    faqs: [
      {
        question: 'How does an AI sales manager create effective cold call scripts?',
        answer: 'Summit analyses your best-performing sales conversations, your product value propositions, and your target customer personas to craft cold call scripts that speak directly to pain points and buying motivations. Scripts are continuously refined based on conversion data, improving close rates by an average of 35 percent.'
      },
      {
        question: 'Can Summit forecast my sales pipeline accurately?',
        answer: 'Yes. Summit analyses deal stage, time in pipeline, historical close rates, and engagement signals to produce accurate revenue forecasts. This gives Malta business owners and sales leaders clear visibility into expected monthly and quarterly revenue without manual spreadsheet tracking.'
      },
      {
        question: 'What makes AI-generated sales pitches more effective?',
        answer: 'Summit tailors every pitch to the specific prospect using data from LinkedIn, your CRM, and industry research. Personalised pitches that address the prospect\'s unique challenges and goals consistently outperform generic templates, resulting in higher response rates and faster deal progression.'
      },
      {
        question: 'How does Summit help my team close more deals?',
        answer: 'Summit identifies at-risk deals early, suggests the next best action for each opportunity, and provides sales reps with relevant objection-handling scripts and case studies. This guided approach ensures your team always knows exactly what to do to move each deal forward.'
      },
      {
        question: 'Can Summit coach my sales team using real data?',
        answer: 'Yes. Summit analyses call recordings, email performance, and deal outcomes to identify coaching opportunities for each team member. It provides actionable feedback and tracks improvement over time, helping Malta sales teams continuously elevate their performance without relying on ad-hoc manager reviews.'
      }
    ]
  },
  {
    id: 'customer-support',
    name: 'Harmony',
    role: 'Customer Support Specialist',
    pillar: 'Support',
    icon: UserCheck,
    description: 'Harmony crafts expertly tailored responses to customer queries while maintaining your brand\'s unique voice. Exceptional support, every time.',
    metric: '95% satisfaction',
    capabilities: ['Query handling', 'Brand voice', 'Empathetic responses', 'Issue resolution'],
    avatarImage: customerSupportAvatar,
    avatarAlt: 'Harmony AI Customer Support Specialist - OARC Digital Malta AI agency customer service',
    faqs: [
      {
        question: 'How does Harmony maintain my brand voice when responding to customers?',
        answer: 'Harmony is trained on your brand guidelines, existing communications, and tone-of-voice documentation during onboarding. Every response it generates reflects your brand\'s personality — whether that\'s professional, friendly, or authoritative — ensuring a consistent customer experience that feels authentically yours.'
      },
      {
        question: 'Can Harmony handle emotionally sensitive customer complaints?',
        answer: 'Yes. Harmony is designed to recognise frustration and distress in customer messages and responds with empathy and understanding before addressing the practical issue. This approach de-escalates difficult situations and maintains customer relationships even during negative experiences, contributing to a 95 percent satisfaction rate.'
      },
      {
        question: 'What types of customer issues can Harmony resolve?',
        answer: 'Harmony handles a wide range of customer queries including product information requests, order status updates, billing questions, technical troubleshooting, and complaint resolution. Complex issues requiring human judgment are escalated immediately with full context to the appropriate team member.'
      },
      {
        question: 'How does Harmony integrate with my support ticketing system?',
        answer: 'Harmony integrates with popular helpdesk platforms including Zendesk, Freshdesk, Intercom, and HubSpot Service Hub. It reads incoming tickets, drafts or sends responses, and updates ticket status automatically — keeping your support queue moving efficiently without manual handling.'
      },
      {
        question: 'Is Harmony suitable for Malta businesses with multilingual customers?',
        answer: 'Yes. Harmony supports multiple languages and can automatically detect the language a customer is writing in. For Malta businesses that serve both Maltese and English-speaking customers, as well as international clients, Harmony ensures everyone receives support in their preferred language.'
      }
    ]
  },
  {
    id: 'business-dev',
    name: 'Maverick',
    role: 'Business Development',
    pillar: 'Growth',
    icon: Briefcase,
    description: 'Maverick identifies growth opportunities, crafts outreach strategies, and delivers business insights. Your go-to AI for business development.',
    metric: '50+ leads/month',
    capabilities: ['Lead generation', 'Partnership outreach', 'Market analysis', 'Growth strategies'],
    avatarImage: businessDevAvatar,
    avatarAlt: 'Maverick AI Business Development Agent - OARC Digital Malta AI agency growth strategies',
    faqs: [
      {
        question: 'How does an AI business development agent find growth opportunities?',
        answer: 'Maverick continuously scans market data, competitor activity, industry news, and your own pipeline metrics to surface growth opportunities you might otherwise miss. It identifies underserved customer segments, emerging market trends, and potential strategic partnerships relevant to your Malta business.'
      },
      {
        question: 'Can Maverick identify and approach potential partners on my behalf?',
        answer: 'Yes. Maverick researches potential partners based on your strategic objectives, evaluates partnership fit, and drafts personalised outreach messages for your review. This gives Malta businesses access to a systematic, data-driven approach to building the partnerships that accelerate growth.'
      },
      {
        question: 'How many leads can Maverick generate per month?',
        answer: 'Maverick consistently generates 50 or more qualified leads per month for Malta businesses through a combination of automated prospecting, social selling, and targeted outreach campaigns. Lead quality is prioritised over volume, ensuring your sales team\'s time is spent on high-potential opportunities.'
      },
      {
        question: 'What kind of market analysis can Maverick provide?',
        answer: 'Maverick delivers comprehensive market analysis including competitive landscape reports, pricing benchmarks, customer demand signals, and Malta-specific market sizing. These insights inform strategic decisions about which markets to enter, which products to prioritise, and how to position against competitors.'
      },
      {
        question: 'Can Maverick help with international business development from Malta?',
        answer: 'Yes. Maverick is equally effective for identifying and developing international opportunities. It researches target markets, identifies key decision-makers in overseas organisations, and crafts culturally appropriate outreach strategies to help Malta businesses expand beyond their home market.'
      }
    ]
  },
  {
    id: 'hr',
    name: 'Sage',
    role: 'HR Agent',
    pillar: 'HR',
    icon: UserPlus,
    description: 'Sage screens resumes, schedules interviews, and handles onboarding. Faster hiring cycles, better candidate experience.',
    metric: '60% faster hiring',
    capabilities: ['Resume screening', 'Interview scheduling', 'Onboarding', 'HR queries'],
    avatarImage: sageAvatar,
    avatarAlt: 'Sage AI HR Agent - OARC Digital Malta AI agency recruitment and onboarding',
    faqs: [
      {
        question: 'How does an AI HR agent speed up the hiring process?',
        answer: 'Sage screens incoming applications within minutes rather than days, schedules interviews automatically, and handles all candidate communications throughout the hiring process. Malta businesses using Sage reduce their average time-to-hire by 60 percent, allowing them to secure top candidates before competitors.'
      },
      {
        question: 'Can Sage screen hundreds of resumes accurately and fairly?',
        answer: 'Yes. Sage evaluates resumes against your job requirements, scoring candidates on skills match, experience relevance, and qualifications. It applies consistent criteria to every application, eliminating unconscious bias and ensuring a fair, thorough review process regardless of application volume.'
      },
      {
        question: 'How does Sage schedule interviews without manual coordination?',
        answer: 'Sage checks the availability of interviewers in your team, proposes suitable time slots to candidates, and books confirmed interviews directly into everyone\'s calendar. Reminders are sent automatically and reschedule requests are handled without involving your HR team in back-and-forth emails.'
      },
      {
        question: 'Can Sage handle employee onboarding automatically?',
        answer: 'Yes. Sage guides new hires through onboarding with automated document collection, policy acknowledgements, system access requests, and first-week schedules. This structured onboarding experience improves new employee confidence and reduces the administrative burden on your HR and management teams.'
      },
      {
        question: 'Is an AI HR agent suitable for small Malta businesses without a dedicated HR team?',
        answer: 'Absolutely. Sage is particularly valuable for small and medium Malta businesses that cannot afford a dedicated HR team. It handles the entire recruitment and onboarding workflow, giving founders and managers time back while ensuring a professional experience for every candidate and new hire.'
      }
    ]
  },
  {
    id: 'finance',
    name: 'Vault',
    role: 'Finance Agent',
    pillar: 'Finance',
    icon: Wallet,
    description: 'Vault processes invoices, tracks expenses, and generates financial reports. Your finances, always under control.',
    metric: '80% time saved',
    capabilities: ['Invoice processing', 'Expense tracking', 'Financial reports', 'Budget alerts'],
    avatarImage: vaultAvatar,
    avatarAlt: 'Vault AI Finance Agent - OARC Digital Malta AI agency invoice and expense management',
    faqs: [
      {
        question: 'How does an AI finance agent process invoices?',
        answer: 'Vault extracts invoice data automatically from emails, PDFs, and accounting platforms, matches invoices to purchase orders, flags discrepancies, and routes approved invoices for payment. This eliminates manual data entry and reduces processing time by up to 80 percent for Malta businesses.'
      },
      {
        question: 'Can Vault track business expenses in real time?',
        answer: 'Yes. Vault categorises and records expenses as they occur, pulling data from connected bank accounts, credit cards, and expense management tools. You always have an up-to-date picture of business spending without waiting for end-of-month reconciliation.'
      },
      {
        question: 'What financial reports can Vault generate automatically?',
        answer: 'Vault generates profit and loss statements, cash flow reports, expense category breakdowns, invoice aging reports, and budget variance analyses on demand or on a scheduled basis. These reports give Malta business owners clear financial visibility without relying on an accountant for routine reporting.'
      },
      {
        question: 'How does Vault ensure accuracy when processing financial documents?',
        answer: 'Vault applies multi-layer validation to every transaction — cross-referencing extracted data with purchase orders, contracts, and accounting records. Anomalies and discrepancies are flagged for human review before any payment is processed, maintaining financial accuracy and preventing errors.'
      },
      {
        question: 'Can Vault alert me when my budget is being exceeded?',
        answer: 'Yes. Vault monitors spending against budgets you define by department, project, or category. When spending approaches or exceeds a threshold, it sends an immediate alert so you can take action before overspending becomes a problem — keeping your Malta business finances firmly under control.'
      }
    ]
  },
  {
    id: 'analytics',
    name: 'Cipher',
    role: 'Data Analytics Agent',
    pillar: 'Analytics',
    icon: BarChart3,
    description: 'Cipher turns raw data into actionable insights. Dashboards, trend analysis, and predictions at your fingertips.',
    metric: '10x faster insights',
    capabilities: ['Data analysis', 'Dashboard creation', 'Trend detection', 'Predictive analytics'],
    avatarImage: cipherAvatar,
    avatarAlt: 'Cipher AI Data Analytics Agent - OARC Digital Malta AI agency data insights',
    faqs: [
      {
        question: 'How does an AI analytics agent turn raw data into actionable insights?',
        answer: 'Cipher connects to your data sources — CRM, website analytics, advertising platforms, and sales databases — and applies statistical analysis and machine learning to surface patterns and trends you\'d never find manually. It translates complex data into plain-language insights with clear recommendations, delivering results 10x faster than traditional analysis.'
      },
      {
        question: 'What kind of dashboards can Cipher create for my Malta business?',
        answer: 'Cipher builds customisable dashboards for sales performance, marketing ROI, website traffic, customer behaviour, operational efficiency, and financial metrics. Each dashboard updates in real time and can be accessed by different team members with appropriate permission levels.'
      },
      {
        question: 'Can Cipher predict future trends based on historical data?',
        answer: 'Yes. Cipher uses predictive modelling to forecast sales demand, customer churn risk, seasonal revenue patterns, and campaign performance. These predictions give Malta business owners the ability to make proactive decisions rather than reacting to trends after they have already occurred.'
      },
      {
        question: 'How quickly can Cipher analyse large datasets?',
        answer: 'Cipher processes and analyses datasets of any size in seconds rather than hours. What would take a human analyst days to compile and visualise, Cipher delivers as a complete, interactive report in under a minute — enabling faster decision-making at every level of your organisation.'
      },
      {
        question: 'Can Cipher integrate with my existing analytics and business intelligence tools?',
        answer: 'Yes. Cipher integrates with Google Analytics, Meta Ads Manager, HubSpot, Salesforce, Shopify, and most major data sources used by Malta businesses. It can also connect directly to SQL databases and spreadsheets to ensure no valuable data remains siloed and unanalysed.'
      }
    ]
  },
  {
    id: 'content',
    name: 'Quill',
    role: 'Content Agent',
    pillar: 'Content',
    icon: FileText,
    description: 'Quill creates blog posts, social copy, and marketing content. Quality content that resonates with your audience.',
    metric: '5x content output',
    capabilities: ['Blog writing', 'Social media copy', 'Ad copy', 'Content strategy'],
    avatarImage: quillAvatar,
    avatarAlt: 'Quill AI Content Agent - OARC Digital Malta AI agency blog and social media writing',
    faqs: [
      {
        question: 'How does an AI content agent create high-quality blog posts?',
        answer: 'Quill researches your topic using up-to-date sources, structures the article for maximum readability and SEO impact, and writes in your brand voice. A typical 1,500-word blog post is ready for review within minutes, enabling Malta businesses to publish 5x more content without increasing headcount.'
      },
      {
        question: 'Can Quill write social media content that matches my brand voice?',
        answer: 'Yes. During onboarding, Quill is trained on your existing content and brand guidelines. It then creates platform-specific posts — adapted for the tone and format of Instagram, LinkedIn, Facebook, and TikTok — that sound authentically like your brand, not a generic AI.'
      },
      {
        question: 'How long does it take Quill to produce a piece of content?',
        answer: 'Quill produces a full-length blog post in under 3 minutes, a social media caption in seconds, and a complete email newsletter in under 10 minutes. This speed allows Malta businesses to maintain a consistent publishing schedule without content becoming a bottleneck.'
      },
      {
        question: 'What types of content can Quill create for my business?',
        answer: 'Quill creates blog posts, social media captions, email newsletters, ad copy, product descriptions, website copy, press releases, case studies, and content briefs. It adapts to any content format your business needs, all aligned with your strategy and brand guidelines.'
      },
      {
        question: 'Can Quill help develop a content strategy for my Malta business?',
        answer: 'Yes. Quill analyses your industry, competitors, and target audience to recommend a content calendar and topic clusters that will build authority and drive organic traffic. It identifies the content gaps your competitors are missing and creates a strategic plan to fill them before they do.'
      }
    ]
  },
  {
    id: 'email',
    name: 'Pulse',
    role: 'Email Agent',
    pillar: 'Email',
    icon: Mail,
    description: 'Pulse manages drip campaigns, newsletters, and email automation. Your email marketing, on autopilot.',
    metric: '25% higher open rates',
    capabilities: ['Drip campaigns', 'Newsletter creation', 'Email automation', 'List management'],
    avatarImage: pulseAvatar,
    avatarAlt: 'Pulse AI Email Agent - OARC Digital Malta AI agency email campaign automation',
    faqs: [
      {
        question: 'How does an AI email agent manage drip campaigns?',
        answer: 'Pulse designs multi-step drip sequences tailored to different audience segments and stages of the customer journey. It schedules sends at optimal times, monitors engagement, and adjusts the sequence based on how subscribers respond — all without any manual intervention from your team.'
      },
      {
        question: 'How can Pulse improve my email open rates?',
        answer: 'Pulse tests subject lines, sender names, and send times to identify the combinations that resonate most with your audience. By applying these learnings continuously, Malta businesses using Pulse see average open rate improvements of 25 percent within the first 90 days of deployment.'
      },
      {
        question: 'How does Pulse personalise emails for large subscriber lists?',
        answer: 'Pulse uses subscriber data — including name, purchase history, browsing behaviour, and engagement history — to personalise every email at scale. Recipients receive content that feels relevant to their specific interests and situation, increasing both open rates and conversions significantly.'
      },
      {
        question: 'What email platforms does Pulse integrate with?',
        answer: 'Pulse integrates with Mailchimp, Klaviyo, HubSpot, ActiveCampaign, Brevo, and most major email marketing platforms. It works within your existing email infrastructure, enhancing what you already have rather than requiring a complete platform change.'
      },
      {
        question: 'Can Pulse help grow and manage my email subscriber list?',
        answer: 'Yes. Pulse manages list hygiene by removing inactive subscribers, identifying re-engagement opportunities, and flagging invalid email addresses. It also integrates with your website and landing pages to automate new subscriber onboarding, ensuring every new contact enters the right sequence immediately.'
      }
    ]
  }
];

export const agentRatings: Record<string, AgentRating> = {
  sales: {
    ratingValue: 4.9,
    reviewCount: 31,
    testimonials: [
      { author: 'Mark Borg', company: 'FinTech Malta', quote: 'Atlas qualified 3x more leads in the first month than our entire inside sales team had in the quarter before. Zero missed follow-ups, zero excuses.' },
      { author: 'Sarah Attard', company: 'SaaS Startup, Valletta', quote: 'We went live in 10 days. By week three Atlas had booked 14 demos from cold traffic we would have ignored. It paid for itself immediately.' },
    ],
  },
  support: {
    ratingValue: 4.9,
    reviewCount: 28,
    testimonials: [
      { author: 'Christine Farrugia', company: 'eCommerce Brand, Malta', quote: 'Nova handles 91% of our support tickets without human involvement. Customer satisfaction actually went up — from 3.8 to 4.7 stars.' },
      { author: 'David Camilleri', company: 'iGaming Operator, Sliema', quote: 'Our support load tripled after a product launch. Nova absorbed all of it instantly. We never had to hire extra staff.' },
    ],
  },
  bookings: {
    ratingValue: 4.8,
    reviewCount: 22,
    testimonials: [
      { author: 'Dr. Maria Vella', company: 'Private Clinic, Birkirkara', quote: 'Aria handles all our appointment scheduling and reminders. No-shows dropped by 60% and our front desk staff now focus on patients, not phones.' },
      { author: 'Luke Sammut', company: 'Fitness Studio, St Julians', quote: 'Aria books classes, sends reminders, and rebooks cancellations automatically. Our class fill rate went from 68% to 94% overnight.' },
    ],
  },
  operations: {
    ratingValue: 4.9,
    reviewCount: 19,
    testimonials: [
      { author: 'Paul Mifsud', company: 'Logistics Company, Malta', quote: 'Orion automated 14 manual workflows in our first month. We reclaimed over 40 hours a week across the ops team.' },
      { author: 'Elena Pace', company: 'Property Management, Gozo', quote: 'Everything from maintenance requests to contractor scheduling now runs through Orion. We scaled from 80 to 200 units with zero additional admin headcount.' },
    ],
  },
  followup: {
    ratingValue: 4.8,
    reviewCount: 24,
    testimonials: [
      { author: 'James Azzopardi', company: 'Digital Agency, Malta', quote: 'Echo re-engaged 34% of our dormant leads in 60 days. Revenue from those contacts alone covered the entire annual cost of the platform.' },
      { author: 'Francesca Buhagiar', company: 'Insurance Brokerage, Valletta', quote: 'Leads that went cold for months started booking calls again. Echo sequences feel personal — clients frequently compliment us on our follow-up.' },
    ],
  },
  marketing: {
    ratingValue: 4.9,
    reviewCount: 27,
    testimonials: [
      { author: 'Ryan Grech', company: 'D2C Brand, Malta', quote: 'Luna runs our full social and paid media calendar. ROAS improved 2.4x in 90 days. I now spend my time on strategy, not execution.' },
      { author: 'Melissa Galea', company: 'Hospitality Group, Malta', quote: 'We were spending €4,000/month on a marketing agency. Luna does more for a fraction of the cost and the results are genuinely better.' },
    ],
  },
  seo: {
    ratingValue: 4.8,
    reviewCount: 21,
    testimonials: [
      { author: 'Chris Zammit', company: 'Law Firm, Valletta', quote: 'Pixel got us to page one for 11 competitive keywords in under four months. Organic enquiries are now our primary lead source.' },
      { author: 'Andrea Farrugia', company: 'Travel Agency, Malta', quote: 'Our organic traffic grew 340% in six months. Pixel handles everything from technical audits to content optimisation without us lifting a finger.' },
    ],
  },
  'sales-manager': {
    ratingValue: 4.9,
    reviewCount: 18,
    testimonials: [
      { author: 'Ian Tabone', company: 'SaaS Company, Malta', quote: 'Summit identifies exactly which reps need coaching and on what. Our team\'s close rate improved 28% in two quarters — without a single new hire.' },
      { author: 'Karen Abela', company: 'B2B Services, Sliema', quote: 'The pipeline forecasts are eerily accurate. Summit flagged three deals as at-risk two weeks before they would have slipped — and we saved two of them.' },
    ],
  },
  'customer-support': {
    ratingValue: 4.8,
    reviewCount: 23,
    testimonials: [
      { author: 'Joseph Borg', company: 'Telecoms, Malta', quote: 'Harmony manages our entire multi-channel support operation. Response time went from 6 hours to under 4 minutes. Customer churn dropped 22%.' },
      { author: 'Daniela Vella', company: 'Retail Chain, Malta', quote: 'Even during our Christmas peak, Harmony handled the volume surge seamlessly. We didn\'t add a single temporary agent this year.' },
    ],
  },
  'business-dev': {
    ratingValue: 4.9,
    reviewCount: 20,
    testimonials: [
      { author: 'Robert Scicluna', company: 'Consultancy, Valletta', quote: 'Maverick identified and initiated 8 partnership conversations that our team never would have found manually. Two converted into revenue-generating partnerships.' },
      { author: 'Tanya Camilleri', company: 'Tech Startup, Malta', quote: 'We needed enterprise clients fast. Maverick researched ideal accounts, personalised outreach, and booked 6 discovery calls in the first month.' },
    ],
  },
  hr: {
    ratingValue: 4.8,
    reviewCount: 17,
    testimonials: [
      { author: 'Michelle Xuereb', company: 'Healthcare Group, Malta', quote: 'Sage screens 200+ applications a week and surfaces only the top 10% to our hiring managers. We cut time-to-hire from 6 weeks to 11 days.' },
      { author: 'Victor Mifsud', company: 'Retail Company, Gozo', quote: 'Onboarding used to take our HR team 2 full days per new hire. Sage automated 80% of it — new starters say it\'s the smoothest onboarding they\'ve experienced.' },
    ],
  },
  finance: {
    ratingValue: 4.9,
    reviewCount: 16,
    testimonials: [
      { author: 'George Bonello', company: 'Accounting Firm, Malta', quote: 'Vault processes invoices with 99.8% accuracy and flags anomalies our team would have missed. Month-end close went from 5 days to 1.5.' },
      { author: 'Anna Micallef', company: 'Property Developer, Valletta', quote: 'We process hundreds of supplier invoices monthly. Vault handles all of it automatically and has already caught two duplicate payment attempts.' },
    ],
  },
  analytics: {
    ratingValue: 4.9,
    reviewCount: 25,
    testimonials: [
      { author: 'Simon Cutajar', company: 'iGaming Analytics, Malta', quote: 'Cipher turns our raw data into board-ready reports overnight. Our leadership team now makes decisions based on insight rather than gut feel.' },
      { author: 'Louise Schembri', company: 'FMCG Brand, Malta', quote: 'Cipher identified a customer segment we had completely overlooked. Targeting that segment added €180k in revenue in the first quarter.' },
    ],
  },
  content: {
    ratingValue: 4.8,
    reviewCount: 22,
    testimonials: [
      { author: 'Patricia Galea', company: 'Marketing Agency, Sliema', quote: 'Quill produces long-form SEO content that ranks. We went from publishing 2 articles a month to 20 — without adding to the team.' },
      { author: 'Nicholas Borg', company: 'B2B SaaS, Malta', quote: 'Our thought leadership content used to take a senior writer two days per piece. Quill drafts publication-ready articles in 15 minutes, in our exact brand voice.' },
    ],
  },
  email: {
    ratingValue: 4.9,
    reviewCount: 19,
    testimonials: [
      { author: 'Claudia Attard', company: 'eCommerce, Malta', quote: 'Pulse lifted our email open rate from 18% to 41% and revenue per email tripled. It tests and optimises continuously — every campaign is better than the last.' },
      { author: 'Martin Farrugia', company: 'Financial Services, Valletta', quote: 'We send 50,000 emails a month. Pulse manages segmentation, personalisation, and send-time optimisation entirely automatically. Unsubscribes dropped 65%.' },
    ],
  },
};

export interface CommandExample {
  id: string;
  prompt: string;
  agentId: string;
  action: string;
  system: string;
  impact: string;
}

export const commandExamples: CommandExample[] = [
  {
    id: 'cmd1',
    prompt: '"Book a demo for John at 3pm tomorrow"',
    agentId: 'bookings',
    action: 'Checking calendar availability → Booking slot → Sending confirmation',
    system: 'Calendar API',
    impact: 'Demo booked in <5 seconds'
  },
  {
    id: 'cmd2',
    prompt: '"Reschedule Maria\'s appointment to next Monday"',
    agentId: 'bookings',
    action: 'Finding booking → Checking availability → Rescheduling → Sending update',
    system: 'Calendar API',
    impact: 'Rescheduled in 3 seconds'
  },
  {
    id: 'cmd3',
    prompt: '"Follow up with leads who haven\'t responded in 7 days"',
    agentId: 'followup',
    action: 'Querying CRM → Identifying 47 leads → Sending personalized emails',
    system: 'CRM + Email',
    impact: '47 leads re-engaged instantly'
  },
  {
    id: 'cmd4',
    prompt: '"Send a gentle reminder to all stale deals"',
    agentId: 'followup',
    action: 'Filtering stale deals → Crafting messages → Sending multi-channel',
    system: 'CRM + Email + SMS',
    impact: '23 deals re-activated'
  },
  {
    id: 'cmd5',
    prompt: '"What\'s the status of order #45892?"',
    agentId: 'support',
    action: 'Looking up order → Checking shipping → Preparing response',
    system: 'Order DB',
    impact: 'Answer delivered in 1.2s'
  },
  {
    id: 'cmd6',
    prompt: '"Process a refund for customer complaint #7823"',
    agentId: 'support',
    action: 'Verifying complaint → Initiating refund → Sending confirmation',
    system: 'Payments API',
    impact: 'Refund processed, customer notified'
  },
  {
    id: 'cmd7',
    prompt: '"Route this ticket to the right team"',
    agentId: 'operations',
    action: 'Analyzing ticket → Categorizing → Assigning to engineering team',
    system: 'Helpdesk',
    impact: 'Ticket routed in 0.8s'
  },
  {
    id: 'cmd8',
    prompt: '"Update all project statuses from Jira"',
    agentId: 'operations',
    action: 'Syncing Jira → Updating internal dashboard → Notifying stakeholders',
    system: 'Jira + Slack',
    impact: '15 projects synced'
  },
  {
    id: 'cmd9',
    prompt: '"Qualify this inbound lead from the website"',
    agentId: 'sales',
    action: 'Scoring lead → Enriching data → Adding to pipeline',
    system: 'CRM',
    impact: 'Lead qualified and scored'
  },
  {
    id: 'cmd10',
    prompt: '"Create outreach sequence for enterprise prospects"',
    agentId: 'sales',
    action: 'Segmenting list → Crafting messages → Scheduling sends',
    system: 'CRM + Email',
    impact: '200 prospects queued'
  },
  {
    id: 'cmd11',
    prompt: '"Launch an A/B test for the new landing page"',
    agentId: 'marketing',
    action: 'Setting up variants → Configuring tracking → Launching test',
    system: 'Analytics + CMS',
    impact: 'Test live in 30 seconds'
  },
  {
    id: 'cmd12',
    prompt: '"Segment our audience by engagement level"',
    agentId: 'marketing',
    action: 'Analyzing behavior → Creating segments → Updating lists',
    system: 'CRM + Analytics',
    impact: '5 segments created'
  },
  {
    id: 'cmd13',
    prompt: '"Analyze our top ranking keywords"',
    agentId: 'seo',
    action: 'Pulling rank data → Analyzing trends → Generating report',
    system: 'SEO Tools',
    impact: 'Report ready in 10 seconds'
  },
  {
    id: 'cmd14',
    prompt: '"Find keyword opportunities for our blog"',
    agentId: 'seo',
    action: 'Researching gaps → Analyzing competition → Prioritizing targets',
    system: 'SEO Tools',
    impact: '50 opportunities identified'
  },
  {
    id: 'cmd15',
    prompt: '"Draft cold email templates for SaaS founders"',
    agentId: 'sales-manager',
    action: 'Researching persona → Crafting templates → A/B variants',
    system: 'Email + CRM',
    impact: '6 templates ready'
  },
  {
    id: 'cmd16',
    prompt: '"Build a pitch deck for our Series A"',
    agentId: 'sales-manager',
    action: 'Gathering metrics → Structuring narrative → Generating slides',
    system: 'Docs + Analytics',
    impact: 'Deck draft complete'
  },
  {
    id: 'cmd17',
    prompt: '"Handle the complaint about delayed delivery"',
    agentId: 'customer-support',
    action: 'Acknowledging issue → Checking status → Offering resolution',
    system: 'Order DB + Email',
    impact: 'Customer satisfied in 2 mins'
  },
  {
    id: 'cmd18',
    prompt: '"Research potential partnership with Acme Corp"',
    agentId: 'business-dev',
    action: 'Gathering intel → Analyzing fit → Preparing outreach',
    system: 'Web + CRM',
    impact: 'Partnership brief ready'
  },
  {
    id: 'cmd19',
    prompt: '"Screen the latest batch of developer applications"',
    agentId: 'hr',
    action: 'Parsing resumes → Scoring candidates → Shortlisting top 10',
    system: 'ATS',
    impact: '50 resumes screened in 2 mins'
  },
  {
    id: 'cmd20',
    prompt: '"Generate this month\'s expense report"',
    agentId: 'finance',
    action: 'Pulling transactions → Categorizing → Generating PDF',
    system: 'Accounting API',
    impact: 'Report ready in 15 seconds'
  },
  {
    id: 'cmd21',
    prompt: '"Show me revenue trends for Q4"',
    agentId: 'analytics',
    action: 'Querying data → Analyzing patterns → Visualizing trends',
    system: 'Analytics DB',
    impact: 'Dashboard updated instantly'
  },
  {
    id: 'cmd22',
    prompt: '"Write a blog post about AI in marketing"',
    agentId: 'content',
    action: 'Researching topic → Outlining → Writing draft',
    system: 'CMS',
    impact: '1500-word draft in 3 mins'
  },
  {
    id: 'cmd23',
    prompt: '"Create a drip campaign for new subscribers"',
    agentId: 'email',
    action: 'Designing sequence → Writing emails → Scheduling sends',
    system: 'Email Marketing',
    impact: '5-email sequence ready'
  }
];

export interface StatItem {
  label: string;
  value: string;
  sublabel: string;
}

export const statsRailData: StatItem[] = [
  { label: 'Deployment', value: '7-14', sublabel: 'Days to go live' },
  { label: 'Response', value: '<2s', sublabel: 'Average latency' },
  { label: 'Resolution', value: '90%', sublabel: 'Auto-handled' },
  { label: 'Availability', value: '24/7', sublabel: 'Always on' }
];
