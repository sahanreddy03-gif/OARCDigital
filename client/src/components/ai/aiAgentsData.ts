import { Target, HeadphonesIcon, Calendar, LayoutGrid, Users, LucideIcon } from 'lucide-react';

export interface AITeamMember {
  id: string;
  name: string;
  role: string;
  pillar: string;
  icon: LucideIcon;
  description: string;
  metric: string;
  capabilities: string[];
  avatarPlaceholder: string;
}

export const aiTeamMembers: AITeamMember[] = [
  {
    id: 'sales',
    name: 'Atlas',
    role: 'Sales Agent',
    pillar: 'Sales',
    icon: Target,
    description: 'Capture & qualify leads, book demos, and nurture automatically.',
    metric: '3x conversion lift',
    capabilities: ['Lead qualification', 'Demo booking', 'Follow-up sequences', 'CRM updates'],
    avatarPlaceholder: '/placeholder-avatar-sales.png'
  },
  {
    id: 'support',
    name: 'Nova',
    role: 'Support Agent',
    pillar: 'Support',
    icon: HeadphonesIcon,
    description: 'Resolve 80-95% common queries instantly, escalate the rest.',
    metric: '90% auto-resolution',
    capabilities: ['Ticket resolution', 'Knowledge lookup', 'Smart escalation', 'Multi-channel'],
    avatarPlaceholder: '/placeholder-avatar-support.png'
  },
  {
    id: 'bookings',
    name: 'Aria',
    role: 'Bookings Agent',
    pillar: 'Scheduling',
    icon: Calendar,
    description: 'Book, reschedule, and remind customers across channels.',
    metric: '20% fewer no-shows',
    capabilities: ['Calendar sync', 'Reminders', 'Rescheduling', 'Time zone handling'],
    avatarPlaceholder: '/placeholder-avatar-bookings.png'
  },
  {
    id: 'operations',
    name: 'Orion',
    role: 'Operations Agent',
    pillar: 'Operations',
    icon: LayoutGrid,
    description: 'Route tasks, update systems, and close the loop automatically.',
    metric: '50% time reclaimed',
    capabilities: ['Task routing', 'System updates', 'Workflow automation', 'Status sync'],
    avatarPlaceholder: '/placeholder-avatar-operations.png'
  },
  {
    id: 'followup',
    name: 'Echo',
    role: 'Follow-up Agent',
    pillar: 'Engagement',
    icon: Users,
    description: 'Re-engage leads and customers until they convert.',
    metric: '10x outreach velocity',
    capabilities: ['Drip campaigns', 'Re-engagement', 'Personalization', 'Multi-touch'],
    avatarPlaceholder: '/placeholder-avatar-followup.png'
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
    prompt: '"Follow up with leads who haven\'t responded in 7 days"',
    agentId: 'followup',
    action: 'Querying CRM → Identifying 47 leads → Sending personalized emails',
    system: 'CRM + Email',
    impact: '47 leads re-engaged instantly'
  },
  {
    id: 'cmd3',
    prompt: '"What\'s the status of order #45892?"',
    agentId: 'support',
    action: 'Looking up order → Checking shipping → Preparing response',
    system: 'Order DB',
    impact: 'Answer delivered in 1.2s'
  },
  {
    id: 'cmd4',
    prompt: '"Route this ticket to the right team"',
    agentId: 'operations',
    action: 'Analyzing ticket → Categorizing → Assigning to engineering team',
    system: 'Helpdesk',
    impact: 'Ticket routed in 0.8s'
  },
  {
    id: 'cmd5',
    prompt: '"Qualify this inbound lead from the website"',
    agentId: 'sales',
    action: 'Scoring lead → Enriching data → Adding to pipeline',
    system: 'CRM',
    impact: 'Lead qualified and scored'
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
