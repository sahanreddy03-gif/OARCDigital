import { useEffect, useState } from "react";
import { Link } from "wouter";
import { 
  Sparkles, Search, ArrowRight, ExternalLink,
  Zap, Target, Database, Bot, Linkedin, TrendingUp, Palette, Video,
  Code, Layers, Shield, BarChart3, Cpu, Workflow, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import toolsHeroBg from "@assets/pexels-ahmetyuksek-31444049_1766033593561.jpg";

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
  color: string;
  url: string;
  domain: string;
  oarcUse: string;
  featured?: boolean;
  ranking?: 1 | 2 | 3;
}

const categories: { id: ToolCategory; label: string; icon: typeof Sparkles }[] = [
  { id: "all", label: "All Tools", icon: Sparkles },
  { id: "ai-sales-tools", label: "AI Sales", icon: Zap },
  { id: "sales-tools", label: "Sales & CRM", icon: Target },
  { id: "data-sources", label: "Data Sources", icon: Database },
  { id: "ai-agents", label: "AI Agents", icon: Bot },
  { id: "linkedin-tools", label: "LinkedIn", icon: Linkedin },
  { id: "ai-marketing-tools", label: "AI Marketing", icon: TrendingUp },
  { id: "design-creative", label: "Design", icon: Palette },
  { id: "video-motion", label: "Video", icon: Video },
  { id: "development", label: "Development", icon: Code },
];

const tools: Tool[] = [
  // AI Sales Tools - Featured
  {
    id: "clay",
    name: "Clay",
    description: "Multi-enrichment platform with 100+ data sources and AI agents. Automates growth workflows and enriches customer data at scale.",
    category: ["ai-sales-tools", "data-sources"],
    color: "#6366f1",
    url: "https://clay.com",
    domain: "clay.com",
    oarcUse: "Lead enrichment, custom prospecting workflows, and data collection automation for outbound campaigns.",
    featured: true,
    ranking: 1
  },
  {
    id: "instantly",
    name: "Instantly",
    description: "Cold email infrastructure with unlimited email accounts, deliverability optimization, and AI-powered personalization.",
    category: ["ai-sales-tools", "sales-tools"],
    color: "#3b82f6",
    url: "https://instantly.ai",
    domain: "instantly.ai",
    oarcUse: "Primary cold email platform for client campaigns, email warmups, and deliverability management.",
    featured: true,
    ranking: 2
  },
  {
    id: "lemlist",
    name: "Lemlist",
    description: "AI-powered sales engagement platform for building lead lists, personalizing outreach, and multi-channel campaigns.",
    category: ["ai-sales-tools", "linkedin-tools"],
    color: "#8b5cf6",
    url: "https://lemlist.com",
    domain: "lemlist.com",
    oarcUse: "Multi-channel outreach combining email and LinkedIn touchpoints in coordinated sequences.",
    featured: true,
    ranking: 3
  },
  {
    id: "apollo",
    name: "Apollo.io",
    description: "Data-first sales platform with intent data, sales triggers, and comprehensive B2B database for prospecting.",
    category: ["ai-sales-tools", "data-sources", "sales-tools"],
    color: "#6366f1",
    url: "https://apollo.io",
    domain: "apollo.io",
    oarcUse: "Primary prospecting database for building targeted lead lists based on firmographic and technographic data."
  },
  {
    id: "smartlead",
    name: "Smartlead",
    description: "Unlimited email warmups, AI reply categorization, and unified inbox for cold email at scale.",
    category: ["ai-sales-tools", "sales-tools"],
    color: "#10b981",
    url: "https://smartlead.ai",
    domain: "smartlead.ai",
    oarcUse: "Email infrastructure and deliverability management for high-volume outbound campaigns."
  },
  {
    id: "attio",
    name: "Attio",
    description: "AI-native CRM that connects data, automates workflows, deploys AI for prospecting, and adapts to your business.",
    category: ["ai-sales-tools", "sales-tools"],
    color: "#000000",
    url: "https://attio.com",
    domain: "attio.com",
    oarcUse: "Modern CRM for startups and scale-ups needing flexible, AI-powered relationship management."
  },
  {
    id: "woodpecker",
    name: "Woodpecker",
    description: "Cold email tool with email verification, automated warm-up, and adaptive sending for deliverability.",
    category: ["ai-sales-tools", "sales-tools"],
    color: "#22c55e",
    url: "https://woodpecker.co",
    domain: "woodpecker.co",
    oarcUse: "Personalized cold email campaigns with excellent deliverability features."
  },
  {
    id: "prospeo",
    name: "Prospeo",
    description: "Find verified email addresses and mobile numbers with domain search, Sales Navigator export, and Chrome extension.",
    category: ["ai-sales-tools", "data-sources"],
    color: "#f59e0b",
    url: "https://prospeo.io",
    domain: "prospeo.io",
    oarcUse: "Email finder and verification for accurate contact data collection."
  },
  {
    id: "unify",
    name: "Unify",
    description: "Unified workflow for prospecting, personalization, and engagement with intent data and AI automation.",
    category: ["ai-sales-tools"],
    color: "#8b5cf6",
    url: "https://unify.com",
    domain: "unify.com",
    oarcUse: "Warm outbound workflows combining intent signals with personalized multi-touch sequences."
  },
  {
    id: "common-room",
    name: "Common Room",
    description: "Customer intelligence platform capturing buying signals from numerous channels, unified with AI.",
    category: ["ai-sales-tools", "data-sources"],
    color: "#6366f1",
    url: "https://commonroom.io",
    domain: "commonroom.io",
    oarcUse: "Signal-based selling identifying ready-to-buy prospects across community and product signals."
  },
  {
    id: "momentum",
    name: "Momentum",
    description: "Transforms customer conversations into actionable insights using AI to extract data from calls and emails.",
    category: ["ai-sales-tools"],
    color: "#3b82f6",
    url: "https://momentum.io",
    domain: "momentum.io",
    oarcUse: "Conversation intelligence for automating CRM updates and extracting deal insights."
  },
  {
    id: "attention",
    name: "Attention",
    description: "AI-driven sales call analysis with automated follow-up emails, CRM updates, coaching scorecards, and performance tracking.",
    category: ["ai-sales-tools"],
    color: "#ec4899",
    url: "https://attention.com",
    domain: "attention.com",
    oarcUse: "Call analytics and AI coaching for improving sales team performance."
  },
  {
    id: "valley",
    name: "Valley",
    description: "Identifies website visitors, researches them, and creates personalized LinkedIn outreach to book sales calls.",
    category: ["ai-sales-tools", "linkedin-tools"],
    color: "#14b8a6",
    url: "https://valley.so",
    domain: "valley.so",
    oarcUse: "Website visitor intelligence combined with automated LinkedIn outreach."
  },
  {
    id: "lavender",
    name: "Lavender",
    description: "AI email coaching that analyzes and improves cold emails in real-time to boost reply rates.",
    category: ["ai-sales-tools"],
    color: "#a855f7",
    url: "https://lavender.ai",
    domain: "lavender.ai",
    oarcUse: "Email coaching to optimize subject lines, copy, and timing for better response rates."
  },
  {
    id: "rilla",
    name: "Rilla",
    description: "Conversation intelligence for field sales - records and analyzes in-person customer meetings.",
    category: ["ai-sales-tools"],
    color: "#ef4444",
    url: "https://rilla.com",
    domain: "rilla.com",
    oarcUse: "Virtual ride-alongs for analyzing field sales conversations and objection handling."
  },
  {
    id: "coworker-ai",
    name: "Coworker.ai",
    description: "AI teammate with organizational memory tracking 120+ business signals, drafts emails and resolves blockers.",
    category: ["ai-sales-tools", "ai-agents"],
    color: "#0ea5e9",
    url: "https://coworker.ai",
    domain: "coworker.ai",
    oarcUse: "AI-powered sales assistance with deep company data integration."
  },
  {
    id: "reply",
    name: "Reply.io",
    description: "Multi-channel sequences with verified LinkedIn/Gmail emails for meeting booking and prospect engagement.",
    category: ["ai-sales-tools", "sales-tools"],
    color: "#6366f1",
    url: "https://reply.io",
    domain: "reply.io",
    oarcUse: "Automated multi-channel outreach sequences across email and LinkedIn."
  },
  {
    id: "amplemarket",
    name: "Amplemarket",
    description: "Next generation sales intelligence platform combining data, automation, and AI-powered prospecting.",
    category: ["ai-sales-tools"],
    color: "#8b5cf6",
    url: "https://amplemarket.com",
    domain: "amplemarket.com",
    oarcUse: "All-in-one prospecting with AI-driven personalization and deliverability."
  },
  // AI Agents
  {
    id: "relevance-ai",
    name: "Relevance AI",
    description: "No-code platform for building and managing AI agents. Customize workflows and automate tasks without technical skills.",
    category: ["ai-agents", "ai-sales-tools"],
    color: "#6366f1",
    url: "https://relevanceai.com",
    domain: "relevanceai.com",
    oarcUse: "Building custom AI agents for research, automation, and workflow tasks.",
    featured: true
  },
  {
    id: "artisan",
    name: "Artisan",
    description: "AI BDR named Ava that automates prospecting, identifies intent signals, and personalizes outreach via email and LinkedIn.",
    category: ["ai-agents", "ai-sales-tools"],
    color: "#000000",
    url: "https://artisan.co",
    domain: "artisan.co",
    oarcUse: "Autonomous BDR workflows combining prospecting with personalized outreach."
  },
  {
    id: "11x",
    name: "11x",
    description: "Digital AI workers for sales development. Autonomous agents that handle prospecting and outreach.",
    category: ["ai-agents", "ai-sales-tools"],
    color: "#1e293b",
    url: "https://11x.ai",
    domain: "11x.ai",
    oarcUse: "Enterprise AI-powered SDR capabilities for autonomous prospecting."
  },
  {
    id: "antigravity",
    name: "Google Antigravity",
    description: "AI-first IDE where autonomous agents handle planning, coding, testing, and documentation powered by Gemini 3.",
    category: ["ai-agents", "development"],
    color: "#4285f4",
    url: "https://antigravity.google",
    domain: "google.com",
    oarcUse: "Agent-first development with multi-agent orchestration for complex coding tasks.",
    featured: true
  },
  {
    id: "glif",
    name: "Glif",
    description: "Low-code platform for building AI-powered workflows - combine text, image, video, and audio AI models like Lego blocks.",
    category: ["ai-agents", "ai-marketing-tools", "design-creative"],
    color: "#f472b6",
    url: "https://glif.app",
    domain: "glif.app",
    oarcUse: "No-code AI workflow builder for creative automation and multi-modal content generation.",
    featured: true
  },
  {
    id: "jason-ai",
    name: "Jason AI SDR",
    description: "AI assistant for Reply.io that automates prospecting, personalization, and follow-up sequences.",
    category: ["ai-agents", "ai-sales-tools"],
    color: "#3b82f6",
    url: "https://reply.io/jason-ai",
    domain: "reply.io",
    oarcUse: "Automated SDR assistant for prospecting and outreach automation."
  },
  {
    id: "aisdr",
    name: "AiSDR",
    description: "AI SDR that grows your pipeline and optimizes costs with autonomous prospecting and outreach.",
    category: ["ai-agents", "ai-sales-tools"],
    color: "#10b981",
    url: "https://aisdr.com",
    domain: "aisdr.com",
    oarcUse: "Autonomous AI SDR for pipeline generation at lower cost."
  },
  // LinkedIn Tools
  {
    id: "expandi",
    name: "Expandi",
    description: "Safe LinkedIn automation tool for scraping leads, personalizing messages, and managing campaigns at scale.",
    category: ["linkedin-tools", "ai-sales-tools"],
    color: "#0077b5",
    url: "https://expandi.io",
    domain: "expandi.io",
    oarcUse: "LinkedIn outreach automation for connection requests and follow-up sequences.",
    ranking: 1
  },
  {
    id: "heyreach",
    name: "HeyReach",
    description: "LinkedIn outreach at scale with team collaboration, unlimited accounts, and advanced analytics.",
    category: ["linkedin-tools", "sales-tools"],
    color: "#6366f1",
    url: "https://heyreach.io",
    domain: "heyreach.io",
    oarcUse: "Multi-account LinkedIn campaigns for high-volume agency outreach."
  },
  {
    id: "phantombuster",
    name: "Phantombuster",
    description: "Social network data extraction and automation. Scrape profiles, automate actions, and enrich data.",
    category: ["linkedin-tools", "data-sources"],
    color: "#8b5cf6",
    url: "https://phantombuster.com",
    domain: "phantombuster.com",
    oarcUse: "Data extraction from LinkedIn and social platforms for lead research."
  },
  {
    id: "taplio",
    name: "Taplio",
    description: "AI-powered LinkedIn personal branding with content creation, scheduling, engagement, and lead generation.",
    category: ["linkedin-tools", "ai-marketing-tools"],
    color: "#3b82f6",
    url: "https://taplio.com",
    domain: "taplio.com",
    oarcUse: "LinkedIn content strategy, scheduling, and audience growth automation."
  },
  {
    id: "dripify",
    name: "Dripify",
    description: "LinkedIn automation and prospecting tool for automated sequences and team collaboration.",
    category: ["linkedin-tools", "ai-sales-tools"],
    color: "#0ea5e9",
    url: "https://dripify.io",
    domain: "dripify.io",
    oarcUse: "LinkedIn drip campaigns with smart sequencing and analytics."
  },
  {
    id: "dux-soup",
    name: "Dux-Soup",
    description: "Automated LinkedIn lead generation with profile visits, connection requests, and messaging.",
    category: ["linkedin-tools"],
    color: "#22c55e",
    url: "https://dux-soup.com",
    domain: "dux-soup.com",
    oarcUse: "LinkedIn automation for systematic outreach and lead generation."
  },
  {
    id: "linked-helper",
    name: "Linked Helper",
    description: "LinkedIn automation tool for lead generation with CRM-like features and campaign management.",
    category: ["linkedin-tools"],
    color: "#3b82f6",
    url: "https://linkedhelper.com",
    domain: "linkedhelper.com",
    oarcUse: "Comprehensive LinkedIn automation with advanced targeting."
  },
  {
    id: "meet-alfred",
    name: "Meet Alfred",
    description: "LinkedIn automation for lead generation with multi-channel campaigns and team features.",
    category: ["linkedin-tools", "sales-tools"],
    color: "#8b5cf6",
    url: "https://meetalfred.com",
    domain: "meetalfred.com",
    oarcUse: "Multi-channel LinkedIn campaigns with email integration."
  },
  {
    id: "zopto",
    name: "Zopto",
    description: "LinkedIn automation and omni-channel sales platform for automated prospecting at scale.",
    category: ["linkedin-tools", "ai-sales-tools"],
    color: "#f59e0b",
    url: "https://zopto.com",
    domain: "zopto.com",
    oarcUse: "Cloud-based LinkedIn automation with advanced filtering."
  },
  {
    id: "scripe",
    name: "Scripe",
    description: "Turn your voice and text into personalized, viral LinkedIn posts with AI-driven strategy and analytics.",
    category: ["linkedin-tools", "ai-marketing-tools"],
    color: "#ec4899",
    url: "https://scripe.io",
    domain: "scripe.io",
    oarcUse: "AI-powered LinkedIn content creation from voice notes."
  },
  {
    id: "breakcold",
    name: "Breakcold",
    description: "Social selling CRM for agencies, consultants, and startups with unified inbox and social listening.",
    category: ["linkedin-tools", "sales-tools"],
    color: "#6366f1",
    url: "https://breakcold.com",
    domain: "breakcold.com",
    oarcUse: "Social CRM combining LinkedIn and email outreach in one inbox."
  },
  // Data Sources
  {
    id: "zoominfo",
    name: "ZoomInfo",
    description: "Enterprise B2B database with company contacts, intent data, and sales intelligence.",
    category: ["data-sources", "sales-tools"],
    color: "#22c55e",
    url: "https://zoominfo.com",
    domain: "zoominfo.com",
    oarcUse: "Enterprise-grade data enrichment for large-scale prospecting campaigns."
  },
  {
    id: "fullenrich",
    name: "FullEnrich",
    description: "Aggregates contact information from 15+ vendors. Finds emails and phone numbers with verification.",
    category: ["data-sources", "ai-sales-tools"],
    color: "#6366f1",
    url: "https://fullenrich.com",
    domain: "fullenrich.com",
    oarcUse: "Waterfall enrichment to maximize contact data coverage across multiple providers."
  },
  {
    id: "ocean-io",
    name: "Ocean.io",
    description: "Lookalike company finder based on ICP and keywords. AI-powered targeting for B2B sales.",
    category: ["data-sources", "ai-sales-tools"],
    color: "#0ea5e9",
    url: "https://ocean.io",
    domain: "ocean.io",
    oarcUse: "Finding lookalike companies based on best customers for targeted prospecting."
  },
  {
    id: "builtwith",
    name: "BuiltWith",
    description: "Technology stack detection. Identify what technologies websites are using for technographic targeting.",
    category: ["data-sources"],
    color: "#ef4444",
    url: "https://builtwith.com",
    domain: "builtwith.com",
    oarcUse: "Technographic prospecting to find companies using specific technologies."
  },
  {
    id: "wiza",
    name: "Wiza",
    description: "B2B contact database with real-time email verification and LinkedIn data extraction.",
    category: ["data-sources", "linkedin-tools"],
    color: "#8b5cf6",
    url: "https://wiza.co",
    domain: "wiza.co",
    oarcUse: "LinkedIn data extraction with verified email addresses."
  },
  {
    id: "leadmagic",
    name: "LeadMagic",
    description: "Lead generation with accurate, low-cost email validation and contact enrichment.",
    category: ["data-sources"],
    color: "#6366f1",
    url: "https://leadmagic.io",
    domain: "leadmagic.io",
    oarcUse: "Cost-effective contact validation and enrichment."
  },
  {
    id: "bettercontact",
    name: "BetterContact",
    description: "AI waterfall enrichment combining multiple data providers for maximum coverage.",
    category: ["data-sources"],
    color: "#10b981",
    url: "https://bettercontact.rocks",
    domain: "bettercontact.rocks",
    oarcUse: "Cascade enrichment across multiple vendors for better data quality."
  },
  {
    id: "findymail",
    name: "Findymail",
    description: "Email finder with high accuracy rates and Sales Navigator integration.",
    category: ["data-sources"],
    color: "#f59e0b",
    url: "https://findymail.com",
    domain: "findymail.com",
    oarcUse: "Accurate email finding with LinkedIn integration."
  },
  {
    id: "enrow",
    name: "Enrow",
    description: "Find anyone's email address with high deliverability verification.",
    category: ["data-sources"],
    color: "#3b82f6",
    url: "https://enrow.io",
    domain: "enrow.io",
    oarcUse: "Email discovery with built-in verification."
  },
  // AI Marketing Tools
  {
    id: "chatgpt",
    name: "ChatGPT / GPT-4",
    description: "OpenAI's flagship AI for content generation, analysis, coding assistance, and conversational AI.",
    category: ["ai-marketing-tools", "ai-agents"],
    color: "#10b981",
    url: "https://chat.openai.com",
    domain: "openai.com",
    oarcUse: "Core tool for content creation, email personalization, research, and AI-powered workflows.",
    featured: true,
    ranking: 1
  },
  {
    id: "claude",
    name: "Claude",
    description: "Anthropic's AI assistant excelling at analysis, writing, and complex reasoning tasks.",
    category: ["ai-marketing-tools", "ai-agents"],
    color: "#d97706",
    url: "https://claude.ai",
    domain: "anthropic.com",
    oarcUse: "Long-form content creation, document analysis, and strategic planning assistance.",
    featured: true,
    ranking: 2
  },
  {
    id: "jasper",
    name: "Jasper",
    description: "AI marketing platform for brand-consistent content at scale. Templates, campaigns, and collaboration.",
    category: ["ai-marketing-tools"],
    color: "#ef4444",
    url: "https://jasper.ai",
    domain: "jasper.ai",
    oarcUse: "Brand voice training and scaled content production for marketing campaigns."
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    description: "AI writing assistant for marketing copy, sales outreach, and content generation workflows.",
    category: ["ai-marketing-tools"],
    color: "#8b5cf6",
    url: "https://copy.ai",
    domain: "copy.ai",
    oarcUse: "Quick copy generation for ads, emails, and social media content."
  },
  {
    id: "writer",
    name: "Writer",
    description: "Enterprise AI platform for brand-consistent content with governance and security.",
    category: ["ai-marketing-tools"],
    color: "#1e293b",
    url: "https://writer.com",
    domain: "writer.com",
    oarcUse: "Enterprise content generation with brand voice and compliance."
  },
  {
    id: "perplexity",
    name: "Perplexity",
    description: "AI-powered search engine providing instant, sourced answers with real-time information.",
    category: ["ai-marketing-tools", "ai-agents"],
    color: "#6366f1",
    url: "https://perplexity.ai",
    domain: "perplexity.ai",
    oarcUse: "Research and fact-checking with cited sources for content creation."
  },
  {
    id: "crayon",
    name: "Crayon",
    description: "Competitive intelligence platform tracking competitors and generating battlecards with live insights.",
    category: ["ai-marketing-tools", "sales-tools"],
    color: "#3b82f6",
    url: "https://crayon.co",
    domain: "crayon.co",
    oarcUse: "Real-time competitive positioning and sales battlecard generation."
  },
  // Sales Tools & CRM
  {
    id: "hubspot",
    name: "HubSpot",
    description: "All-in-one CRM platform with marketing, sales, and service hubs for growing businesses.",
    category: ["sales-tools", "ai-marketing-tools"],
    color: "#ff7a59",
    url: "https://hubspot.com",
    domain: "hubspot.com",
    oarcUse: "CRM setup, sales pipeline automation, and marketing automation for growth-stage clients.",
    featured: true
  },
  {
    id: "salesforce",
    name: "Salesforce",
    description: "Enterprise CRM platform with AI-powered insights, automation, and comprehensive sales management.",
    category: ["sales-tools"],
    color: "#00a1e0",
    url: "https://salesforce.com",
    domain: "salesforce.com",
    oarcUse: "Enterprise CRM implementations and integrations for larger clients."
  },
  {
    id: "pipedrive",
    name: "Pipedrive",
    description: "Sales-focused CRM designed for small teams. Visual pipeline management and deal tracking.",
    category: ["sales-tools"],
    color: "#22c55e",
    url: "https://pipedrive.com",
    domain: "pipedrive.com",
    oarcUse: "Lightweight CRM for startups and SMBs needing simple pipeline management."
  },
  {
    id: "calendly",
    name: "Calendly",
    description: "Scheduling automation that eliminates back-and-forth. Meeting booking made simple.",
    category: ["sales-tools"],
    color: "#006bff",
    url: "https://calendly.com",
    domain: "calendly.com",
    oarcUse: "Meeting scheduling automation integrated with outbound campaigns."
  },
  {
    id: "gong",
    name: "Gong",
    description: "Revenue intelligence platform analyzing customer conversations for deal insights and forecasting.",
    category: ["sales-tools", "ai-sales-tools"],
    color: "#8b5cf6",
    url: "https://gong.io",
    domain: "gong.io",
    oarcUse: "Conversation analytics for understanding what happens in sales calls."
  },
  {
    id: "seismic",
    name: "Seismic",
    description: "AI-powered sales enablement helping reps find, personalize, and share the right content.",
    category: ["sales-tools", "ai-marketing-tools"],
    color: "#00a4bd",
    url: "https://seismic.com",
    domain: "seismic.com",
    oarcUse: "Sales content management and personalization at scale."
  },
  // Design & Creative
  {
    id: "midjourney",
    name: "Midjourney",
    description: "AI image generation creating stunning visuals from text prompts. Industry-leading quality.",
    category: ["design-creative", "ai-marketing-tools"],
    color: "#000000",
    url: "https://midjourney.com",
    domain: "midjourney.com",
    oarcUse: "Creating unique visual assets for campaigns, social media, and marketing materials.",
    featured: true,
    ranking: 1
  },
  {
    id: "figma",
    name: "Figma",
    description: "Collaborative design platform for UI/UX, prototyping, and design systems.",
    category: ["design-creative", "development"],
    color: "#f24e1e",
    url: "https://figma.com",
    domain: "figma.com",
    oarcUse: "All design work including web design, app design, and brand identity systems.",
    featured: true,
    ranking: 2
  },
  {
    id: "canva",
    name: "Canva",
    description: "Design platform for non-designers. Templates, brand kits, and quick content creation.",
    category: ["design-creative"],
    color: "#00c4cc",
    url: "https://canva.com",
    domain: "canva.com",
    oarcUse: "Quick social media graphics and marketing materials for rapid content needs."
  },
  {
    id: "adobe-creative",
    name: "Adobe Creative Suite",
    description: "Industry-standard creative tools including Photoshop, Illustrator, After Effects, and Premiere.",
    category: ["design-creative", "video-motion"],
    color: "#ff0000",
    url: "https://adobe.com/creativecloud",
    domain: "adobe.com",
    oarcUse: "Professional design, video editing, and motion graphics production."
  },
  {
    id: "dall-e",
    name: "DALL-E 3",
    description: "OpenAI's image generation AI with excellent text rendering and prompt understanding.",
    category: ["design-creative", "ai-marketing-tools"],
    color: "#10b981",
    url: "https://openai.com/dall-e-3",
    domain: "openai.com",
    oarcUse: "Quick concept visualization and social media image generation."
  },
  {
    id: "leonardo",
    name: "Leonardo.ai",
    description: "AI image generation platform with fine-tuned models for game assets, characters, and product design.",
    category: ["design-creative", "ai-marketing-tools"],
    color: "#6366f1",
    url: "https://leonardo.ai",
    domain: "leonardo.ai",
    oarcUse: "Consistent AI image generation with custom model training."
  },
  {
    id: "ideogram",
    name: "Ideogram",
    description: "AI image generator excelling at text-in-image generation and typography.",
    category: ["design-creative", "ai-marketing-tools"],
    color: "#8b5cf6",
    url: "https://ideogram.ai",
    domain: "ideogram.ai",
    oarcUse: "Marketing visuals with embedded text and logos."
  },
  // Video & Motion
  {
    id: "runway",
    name: "Runway",
    description: "AI-powered video generation and editing. Gen-3 creates videos from text and images.",
    category: ["video-motion", "ai-marketing-tools"],
    color: "#6366f1",
    url: "https://runwayml.com",
    domain: "runwayml.com",
    oarcUse: "AI video generation for social content and motion graphics elements.",
    featured: true,
    ranking: 1
  },
  {
    id: "pika",
    name: "Pika",
    description: "Text-to-video AI platform creating cinematic videos from prompts with advanced controls.",
    category: ["video-motion", "ai-marketing-tools"],
    color: "#ec4899",
    url: "https://pika.art",
    domain: "pika.art",
    oarcUse: "Experimental video content and creative motion graphics."
  },
  {
    id: "heygen",
    name: "HeyGen",
    description: "AI video generation with realistic avatars. Create spokesperson videos without filming.",
    category: ["video-motion", "ai-marketing-tools"],
    color: "#3b82f6",
    url: "https://heygen.com",
    domain: "heygen.com",
    oarcUse: "AI avatar videos for personalized outreach and explainer content."
  },
  {
    id: "descript",
    name: "Descript",
    description: "AI-powered video and audio editing. Edit media by editing text transcripts.",
    category: ["video-motion"],
    color: "#22c55e",
    url: "https://descript.com",
    domain: "descript.com",
    oarcUse: "Podcast editing, video content repurposing, and quick turnaround edits."
  },
  {
    id: "lottie",
    name: "LottieFiles",
    description: "Lightweight animations for web and mobile. JSON-based animations that scale perfectly.",
    category: ["video-motion", "design-creative"],
    color: "#00ddb3",
    url: "https://lottiefiles.com",
    domain: "lottiefiles.com",
    oarcUse: "Web animations and micro-interactions for premium user experiences."
  },
  {
    id: "synthesia",
    name: "Synthesia",
    description: "AI video generator with photorealistic avatars in 140+ languages for training and marketing.",
    category: ["video-motion", "ai-marketing-tools"],
    color: "#5046e5",
    url: "https://synthesia.io",
    domain: "synthesia.io",
    oarcUse: "Scalable video production for training, onboarding, and marketing."
  },
  {
    id: "potion",
    name: "Potion",
    description: "AI video generation for sales prospecting. Personalized video outreach at scale.",
    category: ["video-motion", "ai-sales-tools"],
    color: "#8b5cf6",
    url: "https://sendpotion.com",
    domain: "sendpotion.com",
    oarcUse: "Personalized video messages for high-touch sales outreach."
  },
  // Development
  {
    id: "react",
    name: "React",
    description: "JavaScript library for building user interfaces. Component-based architecture for scalable apps.",
    category: ["development"],
    color: "#61dafb",
    url: "https://react.dev",
    domain: "react.dev",
    oarcUse: "Primary frontend framework for all web application development.",
    featured: true,
    ranking: 1
  },
  {
    id: "typescript",
    name: "TypeScript",
    description: "JavaScript with type safety. Catches errors early and improves code quality.",
    category: ["development"],
    color: "#3178c6",
    url: "https://typescriptlang.org",
    domain: "typescriptlang.org",
    oarcUse: "Type-safe development across all our projects for better maintainability.",
    ranking: 2
  },
  {
    id: "nodejs",
    name: "Node.js",
    description: "JavaScript runtime for server-side development. Fast, scalable backend applications.",
    category: ["development"],
    color: "#339933",
    url: "https://nodejs.org",
    domain: "nodejs.org",
    oarcUse: "Backend API development and serverless function deployment."
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    description: "Advanced open-source relational database with powerful features and reliability.",
    category: ["development"],
    color: "#336791",
    url: "https://postgresql.org",
    domain: "postgresql.org",
    oarcUse: "Primary database for all applications requiring persistent data storage."
  },
  {
    id: "vercel",
    name: "Vercel",
    description: "Frontend cloud platform for instant deployments, edge functions, and global CDN.",
    category: ["development"],
    color: "#000000",
    url: "https://vercel.com",
    domain: "vercel.com",
    oarcUse: "Deployment platform for web applications and serverless functions."
  },
  {
    id: "cursor",
    name: "Cursor",
    description: "AI-first code editor with chat, autocomplete, and codebase understanding built on VS Code.",
    category: ["development", "ai-agents"],
    color: "#000000",
    url: "https://cursor.com",
    domain: "cursor.com",
    oarcUse: "AI-assisted development with intelligent code completion and refactoring."
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer that suggests code completions, functions, and tests in real-time.",
    category: ["development", "ai-agents"],
    color: "#000000",
    url: "https://github.com/features/copilot",
    domain: "github.com",
    oarcUse: "AI code suggestions and generation for faster development."
  },
  // Automation & Workflow
  {
    id: "zapier",
    name: "Zapier",
    description: "Connect 6,000+ apps with automated workflows. No-code automation for any process.",
    category: ["sales-tools", "ai-marketing-tools"],
    color: "#ff4a00",
    url: "https://zapier.com",
    domain: "zapier.com",
    oarcUse: "Connecting disparate tools and automating workflows between platforms.",
    featured: true
  },
  {
    id: "make",
    name: "Make (Integromat)",
    description: "Visual automation platform for complex workflows. More powerful than basic automation tools.",
    category: ["sales-tools", "ai-marketing-tools"],
    color: "#9146ff",
    url: "https://make.com",
    domain: "make.com",
    oarcUse: "Complex multi-step automations requiring conditional logic and data transformation."
  },
  {
    id: "n8n",
    name: "n8n",
    description: "Open-source workflow automation. Self-hosted option for technical teams with data privacy needs.",
    category: ["sales-tools", "development"],
    color: "#ff6d5a",
    url: "https://n8n.io",
    domain: "n8n.io",
    oarcUse: "Self-hosted automation for clients with data privacy requirements."
  },
  // Analytics
  {
    id: "mixpanel",
    name: "Mixpanel",
    description: "Product analytics for understanding user behavior. Event tracking and funnel analysis.",
    category: ["ai-marketing-tools", "development"],
    color: "#7856ff",
    url: "https://mixpanel.com",
    domain: "mixpanel.com",
    oarcUse: "Product analytics for MVPs and web applications we build."
  },
  {
    id: "hotjar",
    name: "Hotjar",
    description: "Website heatmaps, session recordings, and user feedback. See how users interact.",
    category: ["ai-marketing-tools"],
    color: "#ff3c00",
    url: "https://hotjar.com",
    domain: "hotjar.com",
    oarcUse: "UX research and conversion optimization for client websites."
  },
  {
    id: "google-analytics",
    name: "Google Analytics 4",
    description: "Web analytics platform tracking website traffic, conversions, and user journeys.",
    category: ["ai-marketing-tools"],
    color: "#e37400",
    url: "https://analytics.google.com",
    domain: "google.com",
    oarcUse: "Standard analytics setup for all websites we build or manage."
  },
  {
    id: "amplitude",
    name: "Amplitude",
    description: "Product analytics and experimentation platform for data-driven product decisions.",
    category: ["ai-marketing-tools", "development"],
    color: "#0061f2",
    url: "https://amplitude.com",
    domain: "amplitude.com",
    oarcUse: "Advanced product analytics for SaaS and app development."
  },
  // Communication
  {
    id: "notion",
    name: "Notion",
    description: "All-in-one workspace for notes, docs, wikis, and project management with AI assistance.",
    category: ["sales-tools"],
    color: "#000000",
    url: "https://notion.so",
    domain: "notion.so",
    oarcUse: "Project documentation, knowledge bases, and client collaboration."
  },
  {
    id: "slack",
    name: "Slack",
    description: "Business communication platform with channels, integrations, and workflow automation.",
    category: ["sales-tools"],
    color: "#4a154b",
    url: "https://slack.com",
    domain: "slack.com",
    oarcUse: "Team communication and client collaboration channels."
  },
  {
    id: "loom",
    name: "Loom",
    description: "Async video messaging for work. Record screen and camera for quick explanations.",
    category: ["sales-tools", "video-motion"],
    color: "#625df5",
    url: "https://loom.com",
    domain: "loom.com",
    oarcUse: "Quick video explainers for client updates and internal communication."
  },
];

interface EnterpriseWorkflow {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Layers;
  iconColor: string;
  complexityLevel: number;
  toolsIntegrated: number;
  proprietaryComponents: number;
  setupTime: string;
  monthlyInvestment: string;
  tiers: {
    name: string;
    tools: string[];
    description?: string;
  }[];
  results: { label: string; value: string }[];
  barriers: string[];
}

const enterpriseWorkflows: EnterpriseWorkflow[] = [
  {
    id: "igaming-intelligence",
    title: "iGaming Content Intelligence System",
    subtitle: "MGA-Compliant AI Marketing Automation",
    icon: Cpu,
    iconColor: "#8b5cf6",
    complexityLevel: 8,
    toolsIntegrated: 23,
    proprietaryComponents: 4,
    setupTime: "6-8 weeks",
    monthlyInvestment: "€8,500",
    tiers: [
      { name: "AI Intelligence", tools: ["Claude Opus API", "GPT-4 Turbo", "Custom ML Model"], description: "MGA Compliance Engine" },
      { name: "Data Orchestration", tools: ["Segment CDP", "mParticle", "Snowflake"], description: "Real-time player behavior" },
      { name: "Activation Layer", tools: ["HubSpot Enterprise", "Salesforce MC", "Braze"], description: "Multi-channel orchestration" },
      { name: "Proprietary (OARC IP)", tools: ["Custom API", "ML Engine", "Compliance Check"], description: "Malta-specific automation" },
      { name: "Analytics", tools: ["GA360", "Mixpanel", "Tableau", "Looker"], description: "Executive dashboards" },
    ],
    results: [
      { label: "Qualified Signups", value: "+340%" },
      { label: "FTDs (8 weeks)", value: "€487K" },
      { label: "CAC Reduction", value: "67%" },
      { label: "Response Time", value: "23 min" },
    ],
    barriers: ["12 months ML training", "Malta market data", "MGA compliance expertise", "€47K/month tool costs"],
  },
  {
    id: "fintech-revenue",
    title: "Fintech Revenue Intelligence Engine",
    subtitle: "Predictive Lead Scoring & Attribution",
    icon: BarChart3,
    iconColor: "#3b82f6",
    complexityLevel: 9,
    toolsIntegrated: 27,
    proprietaryComponents: 5,
    setupTime: "8-10 weeks",
    monthlyInvestment: "€12,500",
    tiers: [
      { name: "Intent Data", tools: ["6sense Revenue AI", "Bombora", "Clearbit Reveal"], description: "Predictive lead scoring" },
      { name: "Outreach", tools: ["Salesloft", "Outreach.io", "Drift", "Gong.io"], description: "AI-powered engagement" },
      { name: "Conversion", tools: ["Mutiny", "Unbounce Enterprise", "VWO", "FullStory"], description: "Dynamic personalization" },
      { name: "Attribution", tools: ["Salesforce Revenue Cloud", "Bizible", "ChartMogul"], description: "Multi-touch tracking" },
      { name: "Proprietary (OARC IP)", tools: ["TensorFlow Model", "Attribution AI", "ROI Engine"], description: "47-channel tracking" },
    ],
    results: [
      { label: "Pipeline (6mo)", value: "€2.3M" },
      { label: "Close Rate", value: "47%" },
      { label: "CAC", value: "€187" },
      { label: "Sales Cycle", value: "14 days" },
    ],
    barriers: ["Custom TensorFlow models", "Enterprise tool licenses", "3-person technical team", "€120K setup costs"],
  },
  {
    id: "ecommerce-hypergrowth",
    title: "E-commerce Hypergrowth Stack",
    subtitle: "Omnichannel Revenue Optimization",
    icon: TrendingUp,
    iconColor: "#10b981",
    complexityLevel: 8,
    toolsIntegrated: 21,
    proprietaryComponents: 4,
    setupTime: "6-8 weeks",
    monthlyInvestment: "€15,000",
    tiers: [
      { name: "Predictive Analytics", tools: ["Shopify Plus", "Recharge", "Yotpo", "Northbeam"], description: "LTV & churn prediction" },
      { name: "Omnichannel Ads", tools: ["Meta Ads API", "Google 360", "TikTok", "Pinterest"], description: "5-network optimization" },
      { name: "Retention", tools: ["Klaviyo Enterprise", "Attentive", "Postscript"], description: "243 automated journeys" },
      { name: "CRO", tools: ["Optimizely", "Dynamic Yield", "Nosto"], description: "47 live A/B tests" },
      { name: "BI & Attribution", tools: ["Triple Whale", "Tableau", "Snowflake"], description: "Real-time revenue" },
    ],
    results: [
      { label: "MRR Growth", value: "€50K→€500K" },
      { label: "Blended ROAS", value: "4.2x" },
      { label: "Repeat Rate", value: "32%" },
      { label: "LTV", value: "€187" },
    ],
    barriers: ["ML churn models", "5-network orchestration", "€120K+/mo ad spend management", "Data warehouse setup"],
  },
];

const toolsFAQs: FAQItem[] = [
  { question: "What AI tools does OARC Digital use?", answer: "We use 80+ AI and marketing tools including Clay, Instantly, ChatGPT, Claude, Midjourney, Figma, HubSpot, and more. Our stack covers sales automation, content creation, design, video, and development." },
  { question: "How do you choose which tools to use?", answer: "We evaluate tools based on effectiveness, integration capabilities, cost-efficiency, and client needs. We continuously test new tools and replace underperformers." },
  { question: "Can you deploy these tools for my business?", answer: "Absolutely. We implement, configure, and manage these tools as part of our services. You get the benefit of our expertise without the learning curve." },
  { question: "Do I need to buy licenses for all these tools?", answer: "No—we often use our own licenses or recommend specific tools based on your needs. You only pay for what's essential to your campaigns." },
  { question: "How do you stay current with AI tools?", answer: "Our team constantly evaluates new tools. We're plugged into the AI and sales tech community, testing new solutions weekly." },
  { question: "Which tools are best for cold outreach?", answer: "Clay for enrichment, Instantly or Smartlead for email, Expandi for LinkedIn. Combined with Apollo or Ocean.io for prospecting data." },
  { question: "What's your design and creative stack?", answer: "Figma for design, Midjourney and DALL-E for AI images, Adobe Creative Suite for professional production, Runway for AI video." },
  { question: "Can you train our team on these tools?", answer: "Yes, we offer training and enablement. We can run workshops on any tool in our stack to help your team become proficient." }
];

const ToolLogo = ({ name, color, domain }: { name: string; color: string; domain: string }) => {
  const [imgError, setImgError] = useState(false);
  const [useFallback, setUseFallback] = useState(false);
  const initial = name.charAt(0).toUpperCase();
  
  const logoUrl = `https://logo.clearbit.com/${domain}`;
  const fallbackUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  
  if (imgError) {
    return (
      <div 
        className="w-full h-full rounded-lg flex items-center justify-center text-white font-bold text-lg"
        style={{ backgroundColor: color }}
      >
        {initial}
      </div>
    );
  }
  
  return (
    <img 
      src={useFallback ? fallbackUrl : logoUrl}
      alt={`${name} logo`}
      className="w-full h-full rounded-lg object-contain bg-white p-1.5"
      onError={() => {
        if (!useFallback) {
          setUseFallback(true);
        } else {
          setImgError(true);
        }
      }}
    />
  );
};

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
        description="Discover the 80+ AI sales tools, marketing automation, and creative software we use to deliver results. From Clay and Instantly to Midjourney and Figma."
        canonicalUrl="https://oarcdigital.com/tools"
        ogType="website"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        {/* Background Image */}
        <img 
          src={toolsHeroBg} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="eager"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" />
        {/* Subtle color accent overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(99,102,241,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(139,92,246,0.1) 0%, transparent 50%)'
          }} />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <Badge className="mb-6 bg-white/10 text-gray-300 border-white/20">
            <Sparkles className="w-3 h-3 mr-1" />
            80+ Tools Curated
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">AI-Powered</span> Tech Stack
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            The complete directory of AI sales tools, marketing automation, and creative software 
            we use to deliver exceptional results for our clients.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <Input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 bg-white/5 border-white/10 text-white placeholder:text-gray-500 text-lg rounded-full focus:border-indigo-500/50"
              data-testid="input-search-tools"
            />
          </div>
        </div>
      </section>

      {/* Enterprise Workflow Systems Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] via-[#0c0c14] to-[#0a0a0a] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-500/30">
              <Workflow className="w-3 h-3 mr-1" />
              Enterprise Systems
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Workflow Systems</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Multi-tier enterprise automation that can't be replicated with basic tools. 
              These systems combine 20+ tools with custom AI and proprietary integrations.
            </p>
          </div>

          {/* Workflow Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {enterpriseWorkflows.map((workflow) => {
              const Icon = workflow.icon;
              return (
                <div 
                  key={workflow.id}
                  className="group relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
                  data-testid={`card-workflow-${workflow.id}`}
                >
                  {/* Glow Effect */}
                  <div 
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"
                    style={{ backgroundColor: workflow.iconColor }}
                  />
                  
                  {/* Header */}
                  <div className="p-6 pb-4 border-b border-white/5">
                    <div className="flex items-start gap-4 mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${workflow.iconColor}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: workflow.iconColor }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1">{workflow.title}</h3>
                        <p className="text-sm text-gray-500">{workflow.subtitle}</p>
                      </div>
                    </div>
                    
                    {/* Complexity Bar */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Complexity</span>
                      <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-500"
                          style={{ 
                            width: `${workflow.complexityLevel * 10}%`,
                            background: `linear-gradient(90deg, ${workflow.iconColor}60, ${workflow.iconColor})`
                          }}
                        />
                      </div>
                      <span className="text-xs font-mono text-gray-400">{workflow.complexityLevel}/10</span>
                    </div>
                    
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                        <div className="text-lg font-bold text-white">{workflow.toolsIntegrated}</div>
                        <div className="text-[10px] text-gray-500 uppercase">Tools</div>
                      </div>
                      <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                        <div className="text-lg font-bold text-white">{workflow.proprietaryComponents}</div>
                        <div className="text-[10px] text-gray-500 uppercase">Custom</div>
                      </div>
                      <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                        <div className="text-lg font-bold text-white">{workflow.setupTime.split('-')[0]}</div>
                        <div className="text-[10px] text-gray-500 uppercase">Weeks</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tier Visualization */}
                  <div className="p-4 space-y-2">
                    {workflow.tiers.map((tier, tierIndex) => (
                      <div key={tier.name} className="relative">
                        {/* Connector Line */}
                        {tierIndex < workflow.tiers.length - 1 && (
                          <div className="absolute left-4 top-full w-[2px] h-2 bg-gradient-to-b from-white/20 to-transparent" />
                        )}
                        
                        <div className="flex items-start gap-3">
                          {/* Tier Number */}
                          <div 
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                            style={{ 
                              backgroundColor: tier.name.includes("Proprietary") ? `${workflow.iconColor}30` : 'rgba(255,255,255,0.05)',
                              color: tier.name.includes("Proprietary") ? workflow.iconColor : 'rgba(255,255,255,0.5)'
                            }}
                          >
                            {tierIndex + 1}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-medium text-white">{tier.name}</span>
                              {tier.name.includes("Proprietary") && (
                                <Badge className="text-[9px] px-1.5 py-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30">
                                  OARC IP
                                </Badge>
                              )}
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {tier.tools.slice(0, 3).map((tool) => (
                                <span 
                                  key={tool} 
                                  className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5"
                                >
                                  {tool}
                                </span>
                              ))}
                              {tier.tools.length > 3 && (
                                <span className="text-[10px] px-2 py-0.5 text-gray-500">
                                  +{tier.tools.length - 3}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Results */}
                  <div className="px-4 pb-4">
                    <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-4 border border-emerald-500/20">
                      <div className="flex items-center gap-2 mb-3">
                        <BarChart3 className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">Results</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {workflow.results.map((result) => (
                          <div key={result.label}>
                            <div className="text-lg font-bold text-white">{result.value}</div>
                            <div className="text-[10px] text-gray-500">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Barriers */}
                  <div className="px-4 pb-4">
                    <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4 text-gray-500" />
                        <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Why It Can't Be Replicated</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {workflow.barriers.map((barrier) => (
                          <span 
                            key={barrier} 
                            className="text-[10px] px-2 py-1 rounded-full bg-red-500/10 text-red-400/80 border border-red-500/20"
                          >
                            {barrier}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Footer */}
                  <div className="p-4 pt-2 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500">Monthly Investment</div>
                      <div className="text-xl font-bold text-white">{workflow.monthlyInvestment}</div>
                    </div>
                    <Link href="/contact">
                      <Button 
                        size="sm" 
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/10"
                        data-testid={`button-request-${workflow.id}`}
                      >
                        Request Demo
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">
              These enterprise systems require specialized expertise. <span className="text-white">We build them, you benefit.</span>
            </p>
            <Link href="/contact">
              <Button 
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8"
                data-testid="button-request-custom-workflow"
              >
                Request Custom Workflow
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap transition-all text-sm font-medium ${
                    activeCategory === cat.id
                      ? "bg-white text-black shadow-lg"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200"
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
        <section className="py-16 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Featured Tools
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTools.slice(0, 6).map((tool) => (
                <a
                  key={tool.id}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white/[0.03] rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5"
                  data-testid={`card-featured-tool-${tool.id}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                      <ToolLogo name={tool.name} color={tool.color} domain={tool.domain} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        {tool.ranking && (
                          <span className="text-lg">{getRankingEmoji(tool.ranking)}</span>
                        )}
                        <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors">
                          {tool.name}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {tool.category.slice(0, 2).map((cat) => (
                          <Badge key={cat} variant="outline" className="text-xs text-gray-500 border-gray-700/50 bg-transparent">
                            {categories.find(c => c.id === cat)?.label}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-indigo-400 transition-colors" />
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {tool.description}
                  </p>
                  
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-xs text-gray-500">
                      <strong className="text-gray-400">How we use it:</strong> {tool.oarcUse}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Tools Grid */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {activeCategory === "all" ? "All Tools" : categories.find(c => c.id === activeCategory)?.label}
              <span className="ml-3 text-lg font-normal text-gray-500">
                ({displayTools.length} tools)
              </span>
            </h2>
          </div>
          
          {displayTools.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No tools found matching your search.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {displayTools.map((tool) => (
                <a
                  key={tool.id}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-white/[0.02] rounded-xl p-4 border border-white/5 hover:border-white/20 transition-all duration-200 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-black/20"
                  data-testid={`card-tool-${tool.id}`}
                >
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                    <ToolLogo name={tool.name} color={tool.color} domain={tool.domain} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {tool.ranking && (
                        <span className="text-sm">{getRankingEmoji(tool.ranking)}</span>
                      )}
                      <h3 className="font-semibold text-white group-hover:text-indigo-300 transition-colors truncate">
                        {tool.name}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-xs line-clamp-1 mt-0.5">
                      {tool.description}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-indigo-400 transition-colors flex-shrink-0" />
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
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want Us to Deploy These Tools for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Your Business</span>?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Skip the learning curve. We implement, configure, and manage these tools 
            to deliver results—not just software access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8" data-testid="button-cta-contact">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" data-testid="button-cta-services">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
