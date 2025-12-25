// OARC Cortex Knowledge Base - EXPANDED VERSION

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

// --- EXPANDED BLIND SPOTS DATABASE (15+ unique issues) ---
export const blindSpotDatabase: BlindSpotDefinition[] = [
  {
    id: "bs-cart-abandonment",
    title: "Silent Cart Abandonment Hemorrhage",
    description: "You're losing 60-80% of potential revenue at checkout. Without automated recovery sequences, these customers never return.",
    riskLevel: "CRITICAL",
    affectedSectors: ["e-commerce", "retail", "saas"],
  },
  {
    id: "bs-lead-decay",
    title: "Lead Response Time Decay",
    description: "Leads contacted after 5 minutes have 80% lower conversion. Your response time is measured in hours, costing you thousands.",
    riskLevel: "CRITICAL",
    affectedSectors: ["professional-services", "real-estate", "healthcare", "finance"],
  },
  {
    id: "bs-content-gap",
    title: "Content Velocity Gap",
    description: "Your competitors publish 10x more content. Search engines reward consistency - you're invisible to organic traffic.",
    riskLevel: "HIGH",
    affectedSectors: ["e-commerce", "professional-services", "saas", "agency"],
  },
  {
    id: "bs-manual-support",
    title: "Manual Support Bottleneck",
    description: "80% of customer queries are repetitive. Manual handling creates 4-24 hour delays that kill satisfaction and retention.",
    riskLevel: "HIGH",
    affectedSectors: ["e-commerce", "saas", "healthcare", "finance"],
  },
  {
    id: "bs-data-blindness",
    title: "Data-Driven Decision Deficit",
    description: "You're making million-dollar decisions on gut feeling. Without predictive analytics, you're gambling with your budget.",
    riskLevel: "MEDIUM",
    affectedSectors: ["professional-services", "real-estate", "retail", "agency"],
  },
  {
    id: "bs-ad-waste",
    title: "Ad Spend Leakage",
    description: "30-50% of your ad budget targets wrong audiences. Without AI optimization, you're burning cash on unqualified clicks.",
    riskLevel: "CRITICAL",
    affectedSectors: ["e-commerce", "saas", "real-estate", "agency"],
  },
  {
    id: "bs-churn-blindspot",
    title: "Invisible Churn Signals",
    description: "Customers show warning signs 2-3 months before leaving. Without predictive churn modeling, you only react after they're gone.",
    riskLevel: "HIGH",
    affectedSectors: ["saas", "professional-services", "finance"],
  },
  {
    id: "bs-social-inconsistency",
    title: "Social Media Presence Gaps",
    description: "Inconsistent posting kills algorithm reach. Your competitors post daily while you struggle with weekly content.",
    riskLevel: "MEDIUM",
    affectedSectors: ["e-commerce", "agency", "hospitality", "healthcare"],
  },
  {
    id: "bs-email-rot",
    title: "Email List Decay",
    description: "Your email list degrades 22% annually. Without re-engagement automation, you're messaging uninterested contacts.",
    riskLevel: "MEDIUM",
    affectedSectors: ["e-commerce", "saas", "professional-services"],
  },
  {
    id: "bs-pricing-static",
    title: "Static Pricing Syndrome",
    description: "Your prices don't adapt to demand, competition, or customer segments. You're leaving 15-30% revenue on the table.",
    riskLevel: "HIGH",
    affectedSectors: ["e-commerce", "hospitality", "saas"],
  },
  {
    id: "bs-review-neglect",
    title: "Review Response Neglect",
    description: "53% of customers expect responses within a week. Unanswered reviews signal you don't care about customers.",
    riskLevel: "MEDIUM",
    affectedSectors: ["hospitality", "healthcare", "retail", "professional-services"],
  },
  {
    id: "bs-booking-friction",
    title: "Booking Process Friction",
    description: "Every extra step in booking loses 10% of customers. Your manual scheduling creates unnecessary barriers.",
    riskLevel: "HIGH",
    affectedSectors: ["healthcare", "professional-services", "hospitality"],
  },
  {
    id: "bs-follow-up-void",
    title: "Follow-Up Black Hole",
    description: "80% of sales require 5+ follow-ups, but most sales teams stop after 1-2. Leads go cold while you move on.",
    riskLevel: "CRITICAL",
    affectedSectors: ["real-estate", "professional-services", "finance", "agency"],
  },
  {
    id: "bs-competitor-blind",
    title: "Competitive Intelligence Gap",
    description: "Your competitors adjust strategies weekly. Without monitoring, you're always reacting instead of leading.",
    riskLevel: "MEDIUM",
    affectedSectors: ["e-commerce", "saas", "agency"],
  },
  {
    id: "bs-localization-miss",
    title: "Local Market Neglect",
    description: "68% of consumers prefer local businesses. Your generic approach loses to competitors who speak to local needs.",
    riskLevel: "MEDIUM",
    affectedSectors: ["retail", "hospitality", "healthcare", "real-estate"],
  },
];

// --- EXPANDED TACTICS DATABASE (15+ solutions) ---
export const tacticsDatabase: Tactic[] = [
  {
    id: "tactic-ai-sdr",
    name: "AI Sales Development Representative",
    description: "Deploy an AI that engages leads within 30 seconds, qualifies them through conversation, and books meetings automatically 24/7.",
    impact: "HIGH",
    keywords: ["sales", "leads", "outreach", "booking", "sdr", "prospecting"],
  },
  {
    id: "tactic-cart-recovery",
    name: "Intelligent Cart Recovery System",
    description: "Multi-channel AI sequence (email, SMS, retargeting) that recovers 15-25% of abandoned carts with personalized incentives.",
    impact: "HIGH",
    keywords: ["cart", "abandonment", "e-commerce", "recovery", "checkout", "purchase"],
  },
  {
    id: "tactic-content-engine",
    name: "AI Content Scaling Engine",
    description: "Generate SEO-optimized blog posts, social content, and ad creatives at 10x speed while maintaining brand voice.",
    impact: "HIGH",
    keywords: ["content", "seo", "blog", "social", "marketing", "writing"],
  },
  {
    id: "tactic-support-bot",
    name: "24/7 AI Support Specialist",
    description: "Handle 80% of Tier-1 queries instantly with context-aware responses, seamlessly escalating complex issues to humans.",
    impact: "HIGH",
    keywords: ["support", "customer", "chatbot", "service", "help", "queries"],
  },
  {
    id: "tactic-predictive-analytics",
    name: "Predictive Analytics Dashboard",
    description: "Real-time ML-powered forecasting for revenue, churn risk, and spend optimization with actionable alerts.",
    impact: "MEDIUM",
    keywords: ["data", "analytics", "forecasting", "dashboard", "insights", "prediction"],
  },
  {
    id: "tactic-ad-optimizer",
    name: "AI Ad Budget Optimizer",
    description: "Continuously reallocate ad spend across channels based on real-time performance, reducing wasted spend by 30-50%.",
    impact: "HIGH",
    keywords: ["ads", "advertising", "budget", "spend", "optimization", "roi"],
  },
  {
    id: "tactic-churn-predictor",
    name: "Customer Churn Prevention System",
    description: "Identify at-risk customers 60+ days before they leave and trigger automated retention campaigns.",
    impact: "HIGH",
    keywords: ["churn", "retention", "customers", "loyalty", "prevention"],
  },
  {
    id: "tactic-social-autopilot",
    name: "Social Media Autopilot",
    description: "AI schedules, creates, and posts optimized content daily across all platforms with engagement monitoring.",
    impact: "MEDIUM",
    keywords: ["social", "instagram", "facebook", "linkedin", "posting", "engagement"],
  },
  {
    id: "tactic-email-revive",
    name: "Email List Revival System",
    description: "Automated re-engagement sequences that clean, segment, and reactivate dormant contacts.",
    impact: "MEDIUM",
    keywords: ["email", "list", "marketing", "newsletter", "subscribers"],
  },
  {
    id: "tactic-dynamic-pricing",
    name: "Dynamic Pricing Engine",
    description: "AI adjusts prices in real-time based on demand, competition, and customer segments to maximize margin.",
    impact: "HIGH",
    keywords: ["pricing", "revenue", "margin", "dynamic", "optimization"],
  },
  {
    id: "tactic-review-manager",
    name: "AI Review Response Manager",
    description: "Automatically monitor, respond to, and escalate reviews across all platforms within hours, not days.",
    impact: "MEDIUM",
    keywords: ["reviews", "reputation", "google", "yelp", "feedback"],
  },
  {
    id: "tactic-smart-booking",
    name: "Frictionless AI Booking System",
    description: "Conversational booking that handles scheduling, reminders, rescheduling, and no-show follow-ups automatically.",
    impact: "HIGH",
    keywords: ["booking", "appointment", "scheduling", "calendar", "availability"],
  },
  {
    id: "tactic-follow-up-automation",
    name: "Persistent Follow-Up Automation",
    description: "AI sequences that nurture leads across 10+ touchpoints over 90 days, adjusting messaging based on engagement.",
    impact: "HIGH",
    keywords: ["follow-up", "nurture", "sequence", "drip", "automation"],
  },
  {
    id: "tactic-competitor-monitor",
    name: "Competitive Intelligence Monitor",
    description: "Track competitor pricing, content, ads, and reviews in real-time with weekly strategic briefings.",
    impact: "MEDIUM",
    keywords: ["competitor", "intelligence", "monitoring", "strategy"],
  },
  {
    id: "tactic-local-seo",
    name: "Local SEO Domination System",
    description: "Optimize Google Business, local citations, and geo-targeted content to capture local search traffic.",
    impact: "MEDIUM",
    keywords: ["local", "seo", "google", "maps", "location", "nearby"],
  },
];

// --- EXPANDED SECTOR ENCYCLOPEDIA (8 industries) ---
export const sectorEncyclopedia: SectorData[] = [
  {
    id: "e-commerce",
    name: "E-Commerce & Online Retail",
    keywords: ["shop", "store", "product", "cart", "checkout", "online", "shopify", "woocommerce", "sales", "inventory", "dropshipping", "orders", "shipping", "customers", "buy", "purchase"],
    benchmarks: {
      conversionRate: "2.5% - 3.5%",
      customerAcquisitionCost: "€15 - €45",
      retentionRate: "25% - 40%",
    },
    commonBlindSpots: ["bs-cart-abandonment", "bs-ad-waste", "bs-content-gap", "bs-pricing-static"],
    recommendedTactics: ["tactic-cart-recovery", "tactic-ad-optimizer", "tactic-content-engine", "tactic-dynamic-pricing"],
  },
  {
    id: "professional-services",
    name: "Professional Services & Consulting",
    keywords: ["consulting", "agency", "lawyer", "accountant", "advisor", "coach", "freelance", "b2b", "client", "proposal", "retainer", "services", "firm", "expertise"],
    benchmarks: {
      conversionRate: "5% - 15%",
      customerAcquisitionCost: "€100 - €500",
      retentionRate: "70% - 90%",
    },
    commonBlindSpots: ["bs-lead-decay", "bs-follow-up-void", "bs-data-blindness", "bs-content-gap"],
    recommendedTactics: ["tactic-ai-sdr", "tactic-follow-up-automation", "tactic-predictive-analytics", "tactic-content-engine"],
  },
  {
    id: "healthcare",
    name: "Healthcare & Medical",
    keywords: ["clinic", "doctor", "patient", "appointment", "health", "medical", "therapy", "wellness", "hospital", "telehealth", "dentist", "practice", "care"],
    benchmarks: {
      conversionRate: "8% - 20%",
      customerAcquisitionCost: "€50 - €200",
      retentionRate: "60% - 80%",
    },
    commonBlindSpots: ["bs-lead-decay", "bs-booking-friction", "bs-manual-support", "bs-review-neglect"],
    recommendedTactics: ["tactic-smart-booking", "tactic-ai-sdr", "tactic-support-bot", "tactic-review-manager"],
  },
  {
    id: "real-estate",
    name: "Real Estate & Property",
    keywords: ["property", "listing", "agent", "buyer", "seller", "rental", "mortgage", "real estate", "home", "apartment", "commercial", "broker", "house"],
    benchmarks: {
      conversionRate: "1% - 3%",
      customerAcquisitionCost: "€200 - €1000",
      retentionRate: "N/A",
    },
    commonBlindSpots: ["bs-lead-decay", "bs-follow-up-void", "bs-localization-miss", "bs-data-blindness"],
    recommendedTactics: ["tactic-ai-sdr", "tactic-follow-up-automation", "tactic-local-seo", "tactic-predictive-analytics"],
  },
  {
    id: "saas",
    name: "SaaS & Software",
    keywords: ["software", "saas", "subscription", "app", "platform", "users", "trial", "onboarding", "churn", "mrr", "arr", "features", "tech", "startup"],
    benchmarks: {
      conversionRate: "3% - 8%",
      customerAcquisitionCost: "€50 - €300",
      retentionRate: "85% - 95%",
    },
    commonBlindSpots: ["bs-churn-blindspot", "bs-ad-waste", "bs-manual-support", "bs-content-gap"],
    recommendedTactics: ["tactic-churn-predictor", "tactic-ad-optimizer", "tactic-support-bot", "tactic-content-engine"],
  },
  {
    id: "hospitality",
    name: "Hospitality & Restaurants",
    keywords: ["hotel", "restaurant", "booking", "reservation", "guest", "dining", "travel", "accommodation", "hospitality", "food", "menu", "table"],
    benchmarks: {
      conversionRate: "4% - 10%",
      customerAcquisitionCost: "€10 - €50",
      retentionRate: "35% - 55%",
    },
    commonBlindSpots: ["bs-review-neglect", "bs-booking-friction", "bs-social-inconsistency", "bs-pricing-static"],
    recommendedTactics: ["tactic-review-manager", "tactic-smart-booking", "tactic-social-autopilot", "tactic-dynamic-pricing"],
  },
  {
    id: "finance",
    name: "Finance & Insurance",
    keywords: ["finance", "insurance", "bank", "loan", "investment", "wealth", "mortgage", "credit", "financial", "advisor", "policy", "claims"],
    benchmarks: {
      conversionRate: "2% - 6%",
      customerAcquisitionCost: "€150 - €600",
      retentionRate: "80% - 92%",
    },
    commonBlindSpots: ["bs-lead-decay", "bs-churn-blindspot", "bs-follow-up-void", "bs-manual-support"],
    recommendedTactics: ["tactic-ai-sdr", "tactic-churn-predictor", "tactic-follow-up-automation", "tactic-support-bot"],
  },
  {
    id: "agency",
    name: "Marketing & Creative Agency",
    keywords: ["agency", "marketing", "creative", "design", "branding", "campaign", "client", "project", "strategy", "digital", "advertising", "media"],
    benchmarks: {
      conversionRate: "8% - 18%",
      customerAcquisitionCost: "€200 - €800",
      retentionRate: "65% - 85%",
    },
    commonBlindSpots: ["bs-follow-up-void", "bs-content-gap", "bs-competitor-blind", "bs-ad-waste"],
    recommendedTactics: ["tactic-follow-up-automation", "tactic-content-engine", "tactic-competitor-monitor", "tactic-ad-optimizer"],
  },
];
