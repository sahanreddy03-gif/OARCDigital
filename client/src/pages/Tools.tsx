import { useEffect, useState } from "react";
import { Link } from "wouter";
import { 
  Sparkles, Search, Filter, ArrowRight, ExternalLink, Star, 
  Zap, Users, Database, Bot, Linkedin, TrendingUp, Palette, Video,
  Code, Mail, BarChart, Globe, MessageSquare, Target, Brain
} from "lucide-react";
import { SiOpenai, SiMeta, SiGoogle, SiLinkedin, SiFigma, SiNotion, SiSlack, SiZapier, SiHubspot } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import FAQSection, { FAQItem } from "@/components/FAQSection";

type ToolCategory = 
  | "all"
  | "ai-sales-tools"
  | "sales-tools"
  | "data-sources"
  | "ai-agents"
  | "linkedin-tools"
  | "ai-marketing-tools"
  | "design-creative"
  | "video-motion"
  | "development";

interface Tool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory[];
  logo: string;
  url: string;
  oarcUse: string;
  featured?: boolean;
  ranking?: 1 | 2 | 3;
}

const categories: { id: ToolCategory; label: string; icon: typeof Sparkles }[] = [
  { id: "all", label: "All Tools", icon: Sparkles },
  { id: "ai-sales-tools", label: "AI Sales Tools", icon: Zap },
  { id: "sales-tools", label: "Sales Tools", icon: Target },
  { id: "data-sources", label: "Data Sources", icon: Database },
  { id: "ai-agents", label: "AI Agents", icon: Bot },
  { id: "linkedin-tools", label: "LinkedIn Tools", icon: Linkedin },
  { id: "ai-marketing-tools", label: "AI Marketing Tools", icon: TrendingUp },
  { id: "design-creative", label: "Design & Creative", icon: Palette },
  { id: "video-motion", label: "Video & Motion", icon: Video },
  { id: "development", label: "Development", icon: Code },
];

const tools: Tool[] = [
  // AI Sales Tools
  {
    id: "clay",
    name: "Clay",
    description: "Multi-enrichment platform with 100+ data sources and AI agents. Automates growth workflows and enriches customer data at scale.",
    category: ["ai-sales-tools", "data-sources"],
    logo: "https://assets.clay.com/logo-dark.svg",
    url: "https://clay.com",
    oarcUse: "We use Clay for lead enrichment, building custom prospecting workflows, and automating data collection for our clients' outbound campaigns.",
    featured: true,
    ranking: 1
  },
  {
    id: "instantly",
    name: "Instantly",
    description: "Cold email infrastructure with unlimited email accounts, deliverability optimization, and AI-powered personalization.",
    category: ["ai-sales-tools", "sales-tools"],
    logo: "https://instantly.ai/favicon.ico",
    url: "https://instantly.ai",
    oarcUse: "Our primary tool for cold email campaigns. We manage client email infrastructure, warmups, and campaign automation through Instantly.",
    featured: true,
    ranking: 2
  },
  {
    id: "lemlist",
    name: "Lemlist",
    description: "AI-powered sales engagement platform for building lead lists, personalizing outreach, and multi-channel campaigns.",
    category: ["ai-sales-tools", "linkedin-tools"],
    logo: "https://www.lemlist.com/favicon.ico",
    url: "https://lemlist.com",
    oarcUse: "Used for multi-channel outreach combining email and LinkedIn touchpoints in coordinated sequences.",
    featured: true,
    ranking: 3
  },
  {
    id: "apollo",
    name: "Apollo.io",
    description: "Data-first sales platform with intent data, sales triggers, and comprehensive B2B database for prospecting.",
    category: ["ai-sales-tools", "data-sources", "sales-tools"],
    logo: "https://www.apollo.io/favicon.ico",
    url: "https://apollo.io",
    oarcUse: "Primary prospecting database for building targeted lead lists based on firmographic and technographic data."
  },
  {
    id: "smartlead",
    name: "Smartlead",
    description: "Unlimited email warmups, AI reply categorization, and unified inbox for cold email at scale.",
    category: ["ai-sales-tools", "sales-tools"],
    logo: "https://smartlead.ai/favicon.ico",
    url: "https://smartlead.ai",
    oarcUse: "Email infrastructure and deliverability management for high-volume outbound campaigns."
  },
  // AI Agents
  {
    id: "relevance-ai",
    name: "Relevance AI",
    description: "No-code platform for building and managing AI agents. Customize workflows and automate tasks without technical skills.",
    category: ["ai-agents", "ai-sales-tools"],
    logo: "https://relevanceai.com/favicon.ico",
    url: "https://relevanceai.com",
    oarcUse: "We build custom AI agents for clients using Relevance AI's no-code platform for research and automation tasks.",
    featured: true
  },
  {
    id: "artisan",
    name: "Artisan",
    description: "AI BDR named Ava that automates prospecting, identifies intent signals, and personalizes outreach.",
    category: ["ai-agents", "ai-sales-tools"],
    logo: "https://www.artisan.co/favicon.ico",
    url: "https://artisan.co",
    oarcUse: "Exploring for autonomous BDR workflows that combine prospecting with personalized outreach."
  },
  {
    id: "11x",
    name: "11x",
    description: "Digital AI workers for sales development. Autonomous agents that handle prospecting and outreach.",
    category: ["ai-agents", "ai-sales-tools"],
    logo: "https://www.11x.ai/favicon.ico",
    url: "https://11x.ai",
    oarcUse: "Evaluating for enterprise clients needing AI-powered SDR capabilities."
  },
  // LinkedIn Tools
  {
    id: "expandi",
    name: "Expandi",
    description: "Safe LinkedIn automation tool for scraping leads, personalizing messages, and managing campaigns at scale.",
    category: ["linkedin-tools", "ai-sales-tools"],
    logo: "https://expandi.io/favicon.ico",
    url: "https://expandi.io",
    oarcUse: "LinkedIn outreach automation for clients, managing connection requests and follow-up sequences.",
    ranking: 1
  },
  {
    id: "heyreach",
    name: "HeyReach",
    description: "LinkedIn outreach at scale with team collaboration, unlimited accounts, and advanced analytics.",
    category: ["linkedin-tools", "sales-tools"],
    logo: "https://heyreach.io/favicon.ico",
    url: "https://heyreach.io",
    oarcUse: "Multi-account LinkedIn campaigns for agency clients requiring high-volume outreach."
  },
  {
    id: "phantombuster",
    name: "Phantombuster",
    description: "Social network data extraction and automation. Scrape profiles, automate actions, and enrich data.",
    category: ["linkedin-tools", "data-sources"],
    logo: "https://phantombuster.com/favicon.ico",
    url: "https://phantombuster.com",
    oarcUse: "Data extraction from LinkedIn and other social platforms for lead research and enrichment."
  },
  // Data Sources
  {
    id: "zoominfo",
    name: "ZoomInfo",
    description: "Enterprise B2B database with company contacts, intent data, and sales intelligence.",
    category: ["data-sources", "sales-tools"],
    logo: "https://www.zoominfo.com/favicon.ico",
    url: "https://zoominfo.com",
    oarcUse: "Enterprise-grade data enrichment for large-scale prospecting campaigns."
  },
  {
    id: "fullenrich",
    name: "FullEnrich",
    description: "Aggregates contact information from 15+ vendors. Finds emails and phone numbers with verification.",
    category: ["data-sources", "ai-sales-tools"],
    logo: "https://fullenrich.com/favicon.ico",
    url: "https://fullenrich.com",
    oarcUse: "Waterfall enrichment to maximize contact data coverage across multiple providers."
  },
  {
    id: "ocean-io",
    name: "Ocean.io",
    description: "Lookalike company finder based on ICP and keywords. AI-powered targeting for B2B sales.",
    category: ["data-sources", "ai-sales-tools"],
    logo: "https://ocean.io/favicon.ico",
    url: "https://ocean.io",
    oarcUse: "Finding lookalike companies based on best customers for targeted prospecting."
  },
  {
    id: "builtwith",
    name: "BuiltWith",
    description: "Technology stack detection. Identify what technologies websites are using for technographic targeting.",
    category: ["data-sources"],
    logo: "https://builtwith.com/favicon.ico",
    url: "https://builtwith.com",
    oarcUse: "Technographic prospecting to find companies using specific technologies relevant to our clients."
  },
  // AI Marketing Tools
  {
    id: "chatgpt",
    name: "ChatGPT / GPT-4",
    description: "OpenAI's flagship AI for content generation, analysis, coding assistance, and conversational AI.",
    category: ["ai-marketing-tools", "ai-agents"],
    logo: "https://chat.openai.com/favicon.ico",
    url: "https://chat.openai.com",
    oarcUse: "Core tool for content creation, email personalization, research, and building AI-powered workflows.",
    featured: true,
    ranking: 1
  },
  {
    id: "claude",
    name: "Claude",
    description: "Anthropic's AI assistant excelling at analysis, writing, and complex reasoning tasks.",
    category: ["ai-marketing-tools", "ai-agents"],
    logo: "https://claude.ai/favicon.ico",
    url: "https://claude.ai",
    oarcUse: "Long-form content creation, document analysis, and strategic planning assistance.",
    featured: true,
    ranking: 2
  },
  {
    id: "jasper",
    name: "Jasper",
    description: "AI marketing platform for brand-consistent content at scale. Templates, campaigns, and collaboration.",
    category: ["ai-marketing-tools"],
    logo: "https://www.jasper.ai/favicon.ico",
    url: "https://jasper.ai",
    oarcUse: "Brand voice training and scaled content production for marketing campaigns."
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    description: "AI writing assistant for marketing copy, sales outreach, and content generation workflows.",
    category: ["ai-marketing-tools"],
    logo: "https://www.copy.ai/favicon.ico",
    url: "https://copy.ai",
    oarcUse: "Quick copy generation for ads, emails, and social media content."
  },
  // Sales Tools
  {
    id: "hubspot",
    name: "HubSpot",
    description: "All-in-one CRM platform with marketing, sales, and service hubs for growing businesses.",
    category: ["sales-tools", "ai-marketing-tools"],
    logo: "https://www.hubspot.com/favicon.ico",
    url: "https://hubspot.com",
    oarcUse: "CRM setup, sales pipeline automation, and marketing automation for growth-stage clients.",
    featured: true
  },
  {
    id: "salesforce",
    name: "Salesforce",
    description: "Enterprise CRM platform with AI-powered insights, automation, and comprehensive sales management.",
    category: ["sales-tools"],
    logo: "https://www.salesforce.com/favicon.ico",
    url: "https://salesforce.com",
    oarcUse: "Enterprise CRM implementations and integrations for larger clients."
  },
  {
    id: "pipedrive",
    name: "Pipedrive",
    description: "Sales-focused CRM designed for small teams. Visual pipeline management and deal tracking.",
    category: ["sales-tools"],
    logo: "https://www.pipedrive.com/favicon.ico",
    url: "https://pipedrive.com",
    oarcUse: "Lightweight CRM for startups and SMBs needing simple pipeline management."
  },
  {
    id: "calendly",
    name: "Calendly",
    description: "Scheduling automation that eliminates back-and-forth. Meeting booking made simple.",
    category: ["sales-tools"],
    logo: "https://calendly.com/favicon.ico",
    url: "https://calendly.com",
    oarcUse: "Meeting scheduling automation integrated with outbound campaigns."
  },
  // Design & Creative
  {
    id: "midjourney",
    name: "Midjourney",
    description: "AI image generation creating stunning visuals from text prompts. Industry-leading quality.",
    category: ["design-creative", "ai-marketing-tools"],
    logo: "https://www.midjourney.com/favicon.ico",
    url: "https://midjourney.com",
    oarcUse: "Creating unique visual assets for campaigns, social media, and marketing materials.",
    featured: true,
    ranking: 1
  },
  {
    id: "figma",
    name: "Figma",
    description: "Collaborative design platform for UI/UX, prototyping, and design systems.",
    category: ["design-creative", "development"],
    logo: "https://www.figma.com/favicon.ico",
    url: "https://figma.com",
    oarcUse: "All design work including web design, app design, and brand identity systems.",
    featured: true,
    ranking: 2
  },
  {
    id: "canva",
    name: "Canva",
    description: "Design platform for non-designers. Templates, brand kits, and quick content creation.",
    category: ["design-creative"],
    logo: "https://www.canva.com/favicon.ico",
    url: "https://canva.com",
    oarcUse: "Quick social media graphics and marketing materials for rapid content needs."
  },
  {
    id: "adobe-creative",
    name: "Adobe Creative Suite",
    description: "Industry-standard creative tools including Photoshop, Illustrator, After Effects, and Premiere.",
    category: ["design-creative", "video-motion"],
    logo: "https://www.adobe.com/favicon.ico",
    url: "https://adobe.com/creativecloud",
    oarcUse: "Professional design, video editing, and motion graphics production."
  },
  {
    id: "dall-e",
    name: "DALL-E 3",
    description: "OpenAI's image generation AI with excellent text rendering and prompt understanding.",
    category: ["design-creative", "ai-marketing-tools"],
    logo: "https://chat.openai.com/favicon.ico",
    url: "https://openai.com/dall-e-3",
    oarcUse: "Quick concept visualization and social media image generation."
  },
  // Video & Motion
  {
    id: "runway",
    name: "Runway",
    description: "AI-powered video generation and editing. Gen-2 creates videos from text and images.",
    category: ["video-motion", "ai-marketing-tools"],
    logo: "https://runwayml.com/favicon.ico",
    url: "https://runwayml.com",
    oarcUse: "AI video generation for social content and motion graphics elements.",
    featured: true,
    ranking: 1
  },
  {
    id: "pika",
    name: "Pika",
    description: "Text-to-video AI platform creating cinematic videos from prompts.",
    category: ["video-motion", "ai-marketing-tools"],
    logo: "https://pika.art/favicon.ico",
    url: "https://pika.art",
    oarcUse: "Experimental video content and creative motion graphics."
  },
  {
    id: "heygen",
    name: "HeyGen",
    description: "AI video generation with realistic avatars. Create spokesperson videos without filming.",
    category: ["video-motion", "ai-marketing-tools"],
    logo: "https://www.heygen.com/favicon.ico",
    url: "https://heygen.com",
    oarcUse: "AI avatar videos for personalized outreach and explainer content."
  },
  {
    id: "descript",
    name: "Descript",
    description: "AI-powered video and audio editing. Edit media by editing text transcripts.",
    category: ["video-motion"],
    logo: "https://www.descript.com/favicon.ico",
    url: "https://descript.com",
    oarcUse: "Podcast editing, video content repurposing, and quick turnaround edits."
  },
  {
    id: "lottie",
    name: "LottieFiles",
    description: "Lightweight animations for web and mobile. JSON-based animations that scale perfectly.",
    category: ["video-motion", "design-creative"],
    logo: "https://lottiefiles.com/favicon.ico",
    url: "https://lottiefiles.com",
    oarcUse: "Web animations and micro-interactions for premium user experiences."
  },
  // Development
  {
    id: "react",
    name: "React",
    description: "JavaScript library for building user interfaces. Component-based architecture for scalable apps.",
    category: ["development"],
    logo: "https://react.dev/favicon.ico",
    url: "https://react.dev",
    oarcUse: "Primary frontend framework for all web application development.",
    featured: true,
    ranking: 1
  },
  {
    id: "typescript",
    name: "TypeScript",
    description: "JavaScript with type safety. Catches errors early and improves code quality.",
    category: ["development"],
    logo: "https://www.typescriptlang.org/favicon.ico",
    url: "https://typescriptlang.org",
    oarcUse: "Type-safe development across all our projects for better maintainability.",
    ranking: 2
  },
  {
    id: "nodejs",
    name: "Node.js",
    description: "JavaScript runtime for server-side development. Fast, scalable backend applications.",
    category: ["development"],
    logo: "https://nodejs.org/favicon.ico",
    url: "https://nodejs.org",
    oarcUse: "Backend API development and serverless function deployment."
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    description: "Advanced open-source relational database with powerful features and reliability.",
    category: ["development"],
    logo: "https://www.postgresql.org/favicon.ico",
    url: "https://postgresql.org",
    oarcUse: "Primary database for all applications requiring persistent data storage."
  },
  {
    id: "vercel",
    name: "Vercel",
    description: "Frontend cloud platform for instant deployments, edge functions, and global CDN.",
    category: ["development"],
    logo: "https://vercel.com/favicon.ico",
    url: "https://vercel.com",
    oarcUse: "Deployment platform for web applications and serverless functions."
  },
  // Automation & Integration
  {
    id: "zapier",
    name: "Zapier",
    description: "Connect 8,000+ apps with automated workflows. No-code automation for any process.",
    category: ["sales-tools", "ai-marketing-tools"],
    logo: "https://zapier.com/favicon.ico",
    url: "https://zapier.com",
    oarcUse: "Connecting disparate tools and automating workflows between platforms.",
    featured: true
  },
  {
    id: "make",
    name: "Make (Integromat)",
    description: "Visual automation platform for complex workflows. More powerful than basic automation tools.",
    category: ["sales-tools", "ai-marketing-tools"],
    logo: "https://www.make.com/favicon.ico",
    url: "https://make.com",
    oarcUse: "Complex multi-step automations requiring conditional logic and data transformation."
  },
  {
    id: "n8n",
    name: "n8n",
    description: "Open-source workflow automation. Self-hosted option for technical teams.",
    category: ["sales-tools", "development"],
    logo: "https://n8n.io/favicon.ico",
    url: "https://n8n.io",
    oarcUse: "Self-hosted automation for clients with data privacy requirements."
  },
  // Analytics
  {
    id: "mixpanel",
    name: "Mixpanel",
    description: "Product analytics for understanding user behavior. Event tracking and funnel analysis.",
    category: ["ai-marketing-tools", "development"],
    logo: "https://mixpanel.com/favicon.ico",
    url: "https://mixpanel.com",
    oarcUse: "Product analytics for MVPs and web applications we build."
  },
  {
    id: "hotjar",
    name: "Hotjar",
    description: "Website heatmaps, session recordings, and user feedback. See how users interact.",
    category: ["ai-marketing-tools"],
    logo: "https://www.hotjar.com/favicon.ico",
    url: "https://hotjar.com",
    oarcUse: "UX research and conversion optimization for client websites."
  },
  {
    id: "google-analytics",
    name: "Google Analytics 4",
    description: "Web analytics platform tracking website traffic, conversions, and user journeys.",
    category: ["ai-marketing-tools"],
    logo: "https://www.google.com/favicon.ico",
    url: "https://analytics.google.com",
    oarcUse: "Standard analytics setup for all websites we build or manage."
  },
];

const toolsFAQs: FAQItem[] = [
  { question: "What AI tools does OARC Digital use?", answer: "We use 50+ AI and marketing tools including Clay, Instantly, ChatGPT, Claude, Midjourney, Figma, HubSpot, and more. Our stack covers sales automation, content creation, design, video, and development." },
  { question: "How do you choose which tools to use?", answer: "We evaluate tools based on effectiveness, integration capabilities, cost-efficiency, and client needs. We continuously test new tools and replace underperformers." },
  { question: "Can you deploy these tools for my business?", answer: "Absolutely. We implement, configure, and manage these tools as part of our services. You get the benefit of our expertise without the learning curve." },
  { question: "Do I need to buy licenses for all these tools?", answer: "No—we often use our own licenses or recommend specific tools based on your needs. You only pay for what's essential to your campaigns." },
  { question: "How do you stay current with AI tools?", answer: "Our team constantly evaluates new tools. We're plugged into the AI and sales tech community, testing new solutions weekly." },
  { question: "Which tools are best for cold outreach?", answer: "Clay for enrichment, Instantly or Smartlead for email, Expandi for LinkedIn. Combined with Apollo or Ocean.io for prospecting data." },
  { question: "What's your design and creative stack?", answer: "Figma for design, Midjourney and DALL-E for AI images, Adobe Creative Suite for professional production, Runway for AI video." },
  { question: "Can you train our team on these tools?", answer: "Yes, we offer training and enablement. We can run workshops on any tool in our stack to help your team become proficient." }
];

export default function Tools() {
  const [activeCategory, setActiveCategory] = useState<ToolCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredTools = tools.filter(tool => {
    const matchesCategory = activeCategory === "all" || tool.category.includes(activeCategory);
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredTools = tools.filter(t => t.featured);
  const displayTools = searchQuery ? filteredTools : (activeCategory === "all" ? filteredTools : filteredTools);

  const getRankingEmoji = (ranking?: 1 | 2 | 3) => {
    switch(ranking) {
      case 1: return "🥇";
      case 2: return "🥈";
      case 3: return "🥉";
      default: return null;
    }
  };

  return (
    <Layout>
      <SEOHead
        title="AI Tools & Tech Stack | OARC Digital"
        description="Discover the 50+ AI sales tools, marketing automation, and creative software we use to deliver results. From Clay and Instantly to Midjourney and Figma."
        canonicalUrl="https://oarcdigital.com/tools"
        ogType="website"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,145,77,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59,130,246,0.1) 0%, transparent 50%)'
          }} />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30">
            <Sparkles className="w-3 h-3 mr-1" />
            50+ Tools Curated
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Our <span className="text-orange-500">AI-Powered</span> Tech Stack
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            The complete directory of AI sales tools, marketing automation, and creative software 
            we use to deliver exceptional results for our clients.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-lg rounded-full"
              data-testid="input-search-tools"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? "bg-orange-500 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                  data-testid={`button-category-${cat.id}`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      {activeCategory === "all" && !searchQuery && (
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Featured Tools We Love
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTools.slice(0, 6).map((tool) => (
                <a
                  key={tool.id}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all hover:-translate-y-1"
                  data-testid={`card-featured-tool-${tool.id}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
                      <img 
                        src={tool.logo} 
                        alt={tool.name}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ff914d"><rect width="24" height="24" rx="4"/></svg>';
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        {tool.ranking && (
                          <span className="text-lg">{getRankingEmoji(tool.ranking)}</span>
                        )}
                        <h3 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
                          {tool.name}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {tool.category.slice(0, 2).map((cat) => (
                          <Badge key={cat} variant="outline" className="text-xs text-gray-400 border-gray-600">
                            {categories.find(c => c.id === cat)?.label}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-orange-400 transition-colors" />
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {tool.description}
                  </p>
                  
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-orange-400/80">
                      <strong>How we use it:</strong> {tool.oarcUse}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Tools Grid */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {activeCategory === "all" ? "All Tools" : categories.find(c => c.id === activeCategory)?.label}
              <span className="ml-3 text-lg font-normal text-gray-400">
                ({displayTools.length} tools)
              </span>
            </h2>
          </div>
          
          {displayTools.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No tools found matching your search.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {displayTools.map((tool) => (
                <a
                  key={tool.id}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:border-orange-500/50 transition-all hover:bg-white/10"
                  data-testid={`card-tool-${tool.id}`}
                >
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img 
                      src={tool.logo} 
                      alt={tool.name}
                      className="w-7 h-7 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ff914d"><rect width="24" height="24" rx="4"/></svg>';
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {tool.ranking && (
                        <span className="text-sm">{getRankingEmoji(tool.ranking)}</span>
                      )}
                      <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors truncate">
                        {tool.name}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-xs line-clamp-1 mt-0.5">
                      {tool.description}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-orange-400 transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={toolsFAQs}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our tech stack"
        schemaId="faq-tools"
        darkMode={true}
      />

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want Us to Deploy These Tools for <span className="text-orange-500">Your Business</span>?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Skip the learning curve. We implement, configure, and manage these tools 
            to deliver results—not just software access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8" data-testid="button-cta-contact">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" data-testid="button-cta-services">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
