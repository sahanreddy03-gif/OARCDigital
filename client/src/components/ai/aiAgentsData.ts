import { Target, HeadphonesIcon, Calendar, LayoutGrid, Users, Megaphone, Search, TrendingUp, UserCheck, Briefcase, UserPlus, Wallet, BarChart3, FileText, Mail, LucideIcon } from 'lucide-react';

import salesAgentAvatar from '@assets/Sales_1768204442839.png';
import salesManagerAvatar from '@assets/sales_manager_1768204442838.png';
import supportAgentAvatar from '@assets/Untitled_1768204442839.png';
import bookingsAgentAvatar from '@assets/bookings_1768204442836.png';
import operationsAgentAvatar from '@assets/Man_Avatar_8_1768204442838.png';
import followupAgentAvatar from '@assets/Follow_up_1768204442837.png';
import customerSupportAvatar from '@assets/Customer_support_specalist_1768204442837.png';
import businessDevAvatar from '@assets/Business_development_manager_1768204442837.png';

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
    avatarAlt: 'Atlas AI Sales Agent - OARC Digital Malta AI agency automated lead qualification and demo booking'
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
    avatarAlt: 'Nova AI Support Agent - OARC Digital Malta AI agency automated customer query resolution'
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
    avatarAlt: 'Aria AI Bookings Agent - OARC Digital Malta AI agency automated appointment scheduling'
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
    avatarAlt: 'Orion AI Operations Agent - OARC Digital Malta AI agency workflow automation'
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
    avatarAlt: 'Echo AI Follow-up Agent - OARC Digital Malta AI agency lead re-engagement automation'
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
    avatarImage: null,
    avatarAlt: 'Luna AI Marketing Agent - OARC Digital Malta AI agency campaign optimization'
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
    avatarImage: null,
    avatarAlt: 'Pixel AI SEO Specialist - OARC Digital Malta AI agency search optimization'
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
    avatarAlt: 'Summit AI Sales Manager - OARC Digital Malta AI agency pipeline and deal optimization'
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
    avatarAlt: 'Harmony AI Customer Support Specialist - OARC Digital Malta AI agency customer service'
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
    avatarAlt: 'Maverick AI Business Development Agent - OARC Digital Malta AI agency growth strategies'
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
    avatarImage: null,
    avatarAlt: 'Sage AI HR Agent - OARC Digital Malta AI agency recruitment and onboarding'
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
    avatarImage: null,
    avatarAlt: 'Vault AI Finance Agent - OARC Digital Malta AI agency invoice and expense management'
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
    avatarImage: null,
    avatarAlt: 'Cipher AI Data Analytics Agent - OARC Digital Malta AI agency data insights'
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
    avatarImage: null,
    avatarAlt: 'Quill AI Content Agent - OARC Digital Malta AI agency blog and social media writing'
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
    avatarImage: null,
    avatarAlt: 'Pulse AI Email Agent - OARC Digital Malta AI agency email campaign automation'
  }
];

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
