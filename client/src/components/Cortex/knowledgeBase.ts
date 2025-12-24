// OARC Cortex Knowledge Base - The "Encyclopedia"

export interface Tactic {
  id: string;
  name: string;
  description: string;
  impact: "HIGH" | "MEDIUM" | "LOW";
  keywords: string[];
}

export interface BlindSpotDefinition {
  id: string;
  title: string;
  description: string;
  riskLevel: "CRITICAL" | "HIGH" | "MEDIUM";
  affectedSectors: string[];
}

export interface SectorData {
  id: string;
  name: string;
  keywords: string[];
  benchmarks: {
    conversionRate: string;
    customerAcquisitionCost: string;
    retentionRate: string;
  };
  commonBlindSpots: string[];
  recommendedTactics: string[];
}

// --- BLIND SPOTS DATABASE ---
export const blindSpotDatabase: BlindSpotDefinition[] = [
  {
    id: "bs-cart-abandonment",
    title: "Silent Cart Abandonment Hemorrhage",
    description: "You are losing 60-80% of potential revenue at the final checkout step due to lack of automated recovery sequences.",
    riskLevel: "CRITICAL",
    affectedSectors: ["e-commerce", "retail", "saas"],
  },
  {
    id: "bs-lead-decay",
    title: "Lead Decay Syndrome",
    description: "Leads contacted after 5 minutes have an 80% lower conversion rate. Your response time is likely measured in hours, not seconds.",
    riskLevel: "CRITICAL",
    affectedSectors: ["professional-services", "real-estate", "healthcare"],
  },
  {
    id: "bs-content-stagnation",
    title: "Content Stagnation",
    description: "Your organic reach is declining because you are not producing enough fresh, SEO-optimized content at scale.",
    riskLevel: "HIGH",
    affectedSectors: ["e-commerce", "professional-services", "healthcare"],
  },
  {
    id: "bs-manual-support",
    title: "Manual Support Bottleneck",
    description: "Customer queries are handled manually, creating delays and inconsistent experiences that erode trust and increase churn.",
    riskLevel: "HIGH",
    affectedSectors: ["e-commerce", "saas", "healthcare"],
  },
  {
    id: "bs-data-blindness",
    title: "Data Blindness",
    description: "You are making strategic decisions based on gut feeling, not real-time data and predictive analytics.",
    riskLevel: "MEDIUM",
    affectedSectors: ["professional-services", "real-estate", "retail"],
  },
];

// --- TACTICS DATABASE ---
export const tacticsDatabase: Tactic[] = [
  {
    id: "tactic-ai-sdr",
    name: "AI SDR Agent Deployment",
    description: "Deploy an AI Sales Development Representative to engage leads within 30 seconds, 24/7, qualifying and booking meetings automatically.",
    impact: "HIGH",
    keywords: ["sales", "leads", "outreach", "booking", "sdr"],
  },
  {
    id: "tactic-cart-recovery",
    name: "Intelligent Cart Recovery Sequence",
    description: "Implement a multi-channel (email, SMS, retargeting) AI-driven sequence that recovers 15-25% of abandoned carts.",
    impact: "HIGH",
    keywords: ["cart", "abandonment", "e-commerce", "recovery", "checkout"],
  },
  {
    id: "tactic-content-engine",
    name: "AI Content Scaling Engine",
    description: "Automate the creation of SEO-optimized blog posts, social media content, and ad creatives at 10x the speed of human teams.",
    impact: "HIGH",
    keywords: ["content", "seo", "blog", "social media", "marketing"],
  },
  {
    id: "tactic-support-bot",
    name: "24/7 AI Support Specialist",
    description: "Deploy an AI agent that handles 80% of Tier-1 support queries instantly, escalating complex issues to humans.",
    impact: "MEDIUM",
    keywords: ["support", "customer service", "chatbot", "help desk"],
  },
  {
    id: "tactic-predictive-analytics",
    name: "Predictive Analytics Dashboard",
    description: "Build a real-time dashboard powered by machine learning to forecast revenue, identify churn risk, and optimize spend.",
    impact: "MEDIUM",
    keywords: ["data", "analytics", "forecasting", "dashboard", "insights"],
  },
];

// --- SECTOR ENCYCLOPEDIA ---
export const sectorEncyclopedia: SectorData[] = [
  {
    id: "e-commerce",
    name: "E-Commerce & Retail",
    keywords: ["shop", "store", "product", "cart", "checkout", "online store", "shopify", "woocommerce", "sales", "inventory", "dropshipping"],
    benchmarks: {
      conversionRate: "2.5% - 3.5%",
      customerAcquisitionCost: "€15 - €45",
      retentionRate: "25% - 40%",
    },
    commonBlindSpots: ["bs-cart-abandonment", "bs-content-stagnation", "bs-manual-support"],
    recommendedTactics: ["tactic-cart-recovery", "tactic-content-engine", "tactic-support-bot"],
  },
  {
    id: "professional-services",
    name: "Professional Services",
    keywords: ["consulting", "agency", "lawyer", "accountant", "advisor", "coach", "freelance", "b2b", "client", "proposal", "retainer"],
    benchmarks: {
      conversionRate: "5% - 15% (lead to client)",
      customerAcquisitionCost: "€100 - €500",
      retentionRate: "70% - 90%",
    },
    commonBlindSpots: ["bs-lead-decay", "bs-content-stagnation", "bs-data-blindness"],
    recommendedTactics: ["tactic-ai-sdr", "tactic-content-engine", "tactic-predictive-analytics"],
  },
  {
    id: "healthcare",
    name: "Healthcare & Wellness",
    keywords: ["clinic", "doctor", "patient", "appointment", "health", "medical", "therapy", "wellness", "hospital", "telehealth"],
    benchmarks: {
      conversionRate: "8% - 20% (inquiry to appointment)",
      customerAcquisitionCost: "€50 - €200",
      retentionRate: "60% - 80%",
    },
    commonBlindSpots: ["bs-lead-decay", "bs-manual-support", "bs-content-stagnation"],
    recommendedTactics: ["tactic-ai-sdr", "tactic-support-bot", "tactic-content-engine"],
  },
  {
    id: "real-estate",
    name: "Real Estate & Property",
    keywords: ["property", "listing", "agent", "buyer", "seller", "rental", "mortgage", "real estate", "home", "apartment", "commercial"],
    benchmarks: {
      conversionRate: "1% - 3% (lead to closed deal)",
      customerAcquisitionCost: "€200 - €1000",
      retentionRate: "N/A (transactional)",
    },
    commonBlindSpots: ["bs-lead-decay", "bs-data-blindness"],
    recommendedTactics: ["tactic-ai-sdr", "tactic-predictive-analytics"],
  },
];
