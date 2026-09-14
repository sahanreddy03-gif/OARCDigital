/**
 * The public catalogue used by agent discovery, the pricing text surface and
 * the enquiry APIs. Keep this deliberately conservative: scope and fit are
 * confirmed with a person, so the catalogue does not promise a universal
 * price, delivery date or business result.
 */

export type CataloguePricing = {
  model: "tailored" | "pilot-then-scale" | "project-or-ongoing" | "results-based-where-fit";
  summary: string;
  affordableEntry: string;
  scopeNote: string;
};

export type CatalogueService = {
  id: string;
  title: string;
  shortTitle: string;
  path: string;
  description: string;
  audience: string[];
  capabilities: string[];
  pricing: CataloguePricing;
  enquiryThemes: string[];
  agentIds?: string[];
};

export type CatalogueWorker = {
  id: string;
  name: string;
  role: string;
  description: string;
  capabilities: string[];
  path: string;
};

export const serviceCatalogue: readonly CatalogueService[] = [
  {
    id: "creative",
    title: "Creative",
    shortTitle: "Creative",
    path: "/creative",
    description:
      "Creative direction, brand systems, content and campaign assets that make a business easier to notice, choose and remember.",
    audience: ["Growing businesses", "Hospitality and local operators", "Marketing teams", "Product and service brands"],
    capabilities: ["Creative direction", "Brand and campaign systems", "Social and short-form content", "Performance creative"],
    pricing: {
      model: "project-or-ongoing",
      summary: "Scoped around the creative problem, production volume and channels involved.",
      affordableEntry: "A focused creative sprint or starter scope is available where a full programme is not yet needed.",
      scopeNote: "OARC confirms deliverables, review rounds, production requirements and usage before quoting.",
    },
    enquiryThemes: ["Brand and positioning", "Content and social creative", "Campaign creative", "Website and landing-page creative"],
  },
  {
    id: "ai-workers",
    title: "AI Workers",
    shortTitle: "AI Workers",
    path: "/ai-agents",
    description:
      "Specialist AI workers for sales, support, bookings, follow-up and operations, designed around existing tools and human handoffs.",
    audience: ["Sales teams", "Customer support teams", "Service businesses", "Operations teams"],
    capabilities: ["Lead qualification", "Customer support", "Booking workflows", "Follow-up", "Operations automation"],
    pricing: {
      model: "pilot-then-scale",
      summary: "A focused pilot can validate one workflow before a wider worker deployment is scoped.",
      affordableEntry: "Start with one narrow, high-value workflow rather than buying an entire AI workforce.",
      scopeNote: "The commercial scope depends on channels, integrations, knowledge sources, volume, guardrails and human review.",
    },
    enquiryThemes: ["Sales and lead response", "Customer support", "Bookings and scheduling", "Follow-up", "Operations"],
    agentIds: ["sales", "support", "bookings", "operations", "followup", "marketing", "seo", "sales-manager", "customer-support", "business-dev", "hr", "finance", "analytics", "content", "email"],
  },
  {
    id: "business-systems",
    title: "Business Systems",
    shortTitle: "Business Systems",
    path: "/solutions",
    description:
      "Connected workflows, integrations and operating systems that reduce manual loops between demand, enquiries, service and retention.",
    audience: ["Owner-led businesses", "Operations teams", "Multi-location businesses", "Teams with disconnected tools"],
    capabilities: ["Workflow mapping", "CRM and API integration", "Process automation", "Custom software direction", "Reporting and handoffs"],
    pricing: {
      model: "tailored",
      summary: "A system is scoped after understanding the current tools, workflow and operational constraints.",
      affordableEntry: "An audit, workflow map or single integration can be a lower-commitment starting point.",
      scopeNote: "Build, migration, support and third-party costs are separated in the commercial proposal.",
    },
    enquiryThemes: ["Workflow automation", "CRM and integrations", "Custom software", "Customer journey", "Operations"],
  },
  {
    id: "voice-ai",
    title: "Voice AI",
    shortTitle: "Voice AI",
    path: "/voice-ai-worker",
    description:
      "A phone-based AI worker that answers, qualifies, routes and can act in connected systems, with clear human handoffs for decisions that need a person.",
    audience: ["Hospitality", "Clinics and professional services", "Sales teams", "Home and field services", "Logistics"],
    capabilities: ["Inbound call answering", "Qualification and routing", "Appointment workflows", "Call summaries", "Human escalation"],
    pricing: {
      model: "pilot-then-scale",
      summary: "Voice scope is shaped around call intent, hours, languages, integrations and the agreed handoff rules.",
      affordableEntry: "A small call-flow pilot or one defined call type provides a practical starting point.",
      scopeNote: "Telephony, usage, integrations and ongoing optimisation are assessed separately; no universal fixed price applies.",
    },
    enquiryThemes: ["Missed calls", "Reception and routing", "Bookings", "Sales calls", "Customer care"],
  },
  {
    id: "h360",
    title: "H360",
    shortTitle: "H360",
    path: "/h360",
    description:
      "A connected hospitality operating system for guest discovery, bookings, service, reviews and repeat visits.",
    audience: ["Restaurants", "Hospitality groups", "Venues", "Guest-facing operators"],
    capabilities: ["Guest discovery", "Booking workflows", "Review and retention loops", "Service operations", "Connected venue data"],
    pricing: {
      model: "tailored",
      summary: "H360 is configured around the venue, existing systems and the operating areas that need connecting first.",
      affordableEntry: "A single guest journey or venue workflow can be scoped before expanding across the operation.",
      scopeNote: "Any software, setup, integrations and ongoing service are explained separately before work begins.",
    },
    enquiryThemes: ["Bookings", "Reviews and local discovery", "Guest care", "Venue operations", "Repeat visits"],
  },
];

export const workerCatalogue: readonly CatalogueWorker[] = [
  { id: "sales", name: "Atlas", role: "Sales Agent", description: "Captures and qualifies inbound leads, supports demo requests and keeps the sales workflow moving.", capabilities: ["Lead qualification", "Demo requests", "CRM updates"], path: "/ai-agents/sales" },
  { id: "support", name: "Nova", role: "Support Agent", description: "Handles defined customer questions and escalates issues with useful context for a person.", capabilities: ["Knowledge lookup", "Ticket triage", "Human escalation"], path: "/ai-agents/support" },
  { id: "bookings", name: "Aria", role: "Bookings Agent", description: "Supports booking, rescheduling and reminders where the relevant calendar or booking system is connected.", capabilities: ["Calendar workflows", "Reminders", "Rescheduling"], path: "/ai-agents/bookings" },
  { id: "operations", name: "Orion", role: "Operations Agent", description: "Routes defined tasks and keeps agreed system updates in sync across a workflow.", capabilities: ["Task routing", "Status updates", "Workflow automation"], path: "/ai-agents/operations" },
  { id: "followup", name: "Echo", role: "Follow-up Agent", description: "Runs approved follow-up sequences and hands responsive contacts back to the team.", capabilities: ["Follow-up sequences", "Re-engagement", "Multi-touch workflows"], path: "/ai-agents/followup" },
  { id: "marketing", name: "Luna", role: "Marketing Agent", description: "Supports campaign analysis, audience work and optimisation tasks within agreed approval rules.", capabilities: ["Campaign analysis", "Audience segments", "Experiment support"], path: "/ai-agents/marketing" },
  { id: "seo", name: "Pixel", role: "SEO Specialist", description: "Supports search research, content optimisation and visibility monitoring.", capabilities: ["Keyword research", "Content optimisation", "Rank monitoring"], path: "/ai-agents/seo" },
  { id: "sales-manager", name: "Summit", role: "Sales Manager", description: "Supports pipeline review, sales enablement and next-action planning.", capabilities: ["Pipeline review", "Sales scripts", "Deal support"], path: "/ai-agents/sales-manager" },
  { id: "customer-support", name: "Harmony", role: "Customer Support Specialist", description: "Drafts or handles defined customer responses in an agreed brand voice and escalation path.", capabilities: ["Response drafting", "Brand voice", "Issue escalation"], path: "/ai-agents/customer-support" },
  { id: "business-dev", name: "Maverick", role: "Business Development", description: "Supports market research, opportunity discovery and partnership outreach preparation.", capabilities: ["Market research", "Opportunity discovery", "Outreach preparation"], path: "/ai-agents/business-dev" },
  { id: "hr", name: "Sage", role: "HR Agent", description: "Supports defined recruitment coordination, interview scheduling and onboarding administration.", capabilities: ["Application triage", "Interview scheduling", "Onboarding tasks"], path: "/ai-agents/hr" },
  { id: "finance", name: "Vault", role: "Finance Agent", description: "Supports document and expense workflows with approval controls and human oversight.", capabilities: ["Invoice workflows", "Expense categorisation", "Reporting support"], path: "/ai-agents/finance" },
  { id: "analytics", name: "Vector", role: "Analytics Agent", description: "Turns connected business data into agreed reporting views and decision support.", capabilities: ["Data summaries", "Reporting", "Trend review"], path: "/ai-agents/analytics" },
  { id: "content", name: "Quill", role: "Content Agent", description: "Supports content planning and drafting within an approved editorial and review process.", capabilities: ["Content planning", "Drafting", "Editorial workflows"], path: "/ai-agents/content" },
  { id: "email", name: "Pulse", role: "Email Agent", description: "Supports segmented email workflows, drafting and campaign operations with approval gates.", capabilities: ["Email workflows", "Segmentation", "Campaign operations"], path: "/ai-agents/email" },
];

export function getCatalogueService(id: string): CatalogueService | undefined {
  const aliases: Record<string, string> = {
    creative: "creative",
    "creative services": "creative",
    "ai-agents": "ai-workers",
    "ai-workers": "ai-workers",
    "ai workers": "ai-workers",
    automation: "business-systems",
    solutions: "business-systems",
    "business-systems": "business-systems",
    "business systems": "business-systems",
    voice: "voice-ai",
    "voice-ai": "voice-ai",
    "voice-ai-worker": "voice-ai",
    "voice ai": "voice-ai",
    h360: "h360",
  };
  const canonicalId = aliases[id.trim().toLowerCase()];
  return serviceCatalogue.find((service) => service.id === canonicalId);
}
