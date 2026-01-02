export interface Solution {
  title: string;
  timeframe: string;
  impact: string;
}

export interface Problem {
  id: string;
  title: string;
  insight: string;
  monthlyImpact: number;
  psychology: string;
  solutions: Solution[];
}

export interface VerticalData {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  problems: Problem[];
}

export const verticals: VerticalData[] = [
  {
    id: "restaurant",
    name: "Restaurant",
    icon: "🍽️",
    tagline: "Turn empty tables into revenue",
    problems: [
      {
        id: "ghost-reservations",
        title: "Ghost Reservations",
        insight: "Your staff prepares for guests who never arrive. Tables sit empty while walk-ins are turned away. The kitchen preps food that gets wasted.",
        monthlyImpact: 4200,
        psychology: "Customers book as a 'backup option' because canceling feels awkward. No reminder means out of sight, out of mind.",
        solutions: [
          { title: "Smart confirmation system", timeframe: "48 hours", impact: "65% fewer no-shows" },
          { title: "Instant waitlist backfill", timeframe: "Same day", impact: "Recover 80% of cancellations" },
          { title: "Reputation-based booking", timeframe: "2 weeks", impact: "Identify repeat offenders" },
        ],
      },
      {
        id: "kitchen-chaos",
        title: "Kitchen Chaos",
        insight: "Orders pile up during rush. Staff stress skyrockets. Mistakes multiply. Customers wait longer than promised.",
        monthlyImpact: 2800,
        psychology: "When overwhelmed, cooks default to tunnel vision. Communication breaks down. Pride prevents asking for help.",
        solutions: [
          { title: "Intelligent order pacing", timeframe: "3 days", impact: "40% faster ticket times" },
          { title: "Prep prediction engine", timeframe: "1 week", impact: "Cut prep waste by 35%" },
          { title: "Real-time bottleneck alerts", timeframe: "48 hours", impact: "Catch problems before they cascade" },
        ],
      },
      {
        id: "invisible-regulars",
        title: "Invisible Regulars",
        insight: "Your best customers come 3x per month. You treat them like first-timers. They feel unrecognized, eventually drift to competitors.",
        monthlyImpact: 3600,
        psychology: "Recognition triggers loyalty. Humans remember how you made them feel. Anonymity feels like rejection.",
        solutions: [
          { title: "Guest recognition system", timeframe: "5 days", impact: "28% higher repeat rate" },
          { title: "Preference memory", timeframe: "1 week", impact: "Personalized service at scale" },
          { title: "Milestone celebrations", timeframe: "48 hours", impact: "Turn regulars into advocates" },
        ],
      },
      {
        id: "review-silence",
        title: "Review Silence",
        insight: "Happy customers leave quietly. Only angry ones post reviews. Your online rating slowly sinks while service stays consistent.",
        monthlyImpact: 2100,
        psychology: "Satisfaction is passive. Frustration demands action. Without prompting, the vocal minority shapes perception.",
        solutions: [
          { title: "Post-visit feedback capture", timeframe: "24 hours", impact: "5x more positive reviews" },
          { title: "Issue interception", timeframe: "48 hours", impact: "Catch problems before they go public" },
          { title: "Reputation monitoring", timeframe: "Same day", impact: "Real-time sentiment tracking" },
        ],
      },
      {
        id: "staff-turnover-spiral",
        title: "Staff Turnover Spiral",
        insight: "Good servers leave for competitors. Training new hires costs time and quality. Institutional knowledge walks out the door.",
        monthlyImpact: 3200,
        psychology: "Talented staff leave when they feel unvalued or see no growth. Schedule chaos signals disrespect for their time.",
        solutions: [
          { title: "Fair scheduling algorithm", timeframe: "3 days", impact: "40% better shift satisfaction" },
          { title: "Performance recognition", timeframe: "1 week", impact: "Surface hidden top performers" },
          { title: "Growth path visibility", timeframe: "2 weeks", impact: "Reduce turnover by 50%" },
        ],
      },
    ],
  },
  {
    id: "clinic",
    name: "Medical Clinic",
    icon: "🏥",
    tagline: "More patient time, less paperwork",
    problems: [
      {
        id: "appointment-chaos",
        title: "Appointment Chaos",
        insight: "Patients forget appointments. Your staff chases them by phone. Doctors sit idle while the waiting room overflows 30 minutes later.",
        monthlyImpact: 5100,
        psychology: "Medical appointments feel distant when booked. Life gets busy. A single SMS reminder at the right moment changes behavior.",
        solutions: [
          { title: "Multi-stage reminder sequence", timeframe: "48 hours", impact: "70% fewer no-shows" },
          { title: "Smart rescheduling", timeframe: "3 days", impact: "Fill 85% of cancelled slots" },
          { title: "Patient behavior scoring", timeframe: "1 week", impact: "Identify high-risk appointments" },
        ],
      },
      {
        id: "referral-black-hole",
        title: "Referral Black Hole",
        insight: "You refer patients to specialists. They never book. Their condition worsens. They return frustrated, wondering why you didn't follow up.",
        monthlyImpact: 3800,
        psychology: "Patients feel overwhelmed after appointments. Good intentions evaporate without immediate action. They assume you'll track it.",
        solutions: [
          { title: "Instant referral booking", timeframe: "5 days", impact: "3x referral completion" },
          { title: "Patient journey tracking", timeframe: "1 week", impact: "Close the feedback loop" },
          { title: "Specialist network sync", timeframe: "2 weeks", impact: "Real-time availability" },
        ],
      },
      {
        id: "phone-tag-marathon",
        title: "Phone Tag Marathon",
        insight: "Staff spend hours playing phone tag for routine updates. Patients can't reach you when they need to. Everyone's frustrated.",
        monthlyImpact: 2900,
        psychology: "Phone calls feel urgent but are inefficient. Both parties need to be available simultaneously. Async communication respects time.",
        solutions: [
          { title: "Secure patient messaging", timeframe: "3 days", impact: "60% fewer phone calls" },
          { title: "Automated result notifications", timeframe: "48 hours", impact: "Instant updates, no waiting" },
          { title: "Smart triage routing", timeframe: "1 week", impact: "Right message, right person" },
        ],
      },
      {
        id: "insurance-friction",
        title: "Insurance Friction",
        insight: "Claims rejected for data errors. Resubmissions take weeks. Cash flow suffers. Staff spend hours on preventable admin.",
        monthlyImpact: 4200,
        psychology: "Manual data entry under time pressure breeds errors. Staff learn to dread insurance work. Morale and accuracy both decline.",
        solutions: [
          { title: "Pre-submission validation", timeframe: "5 days", impact: "80% fewer rejections" },
          { title: "Auto-populated forms", timeframe: "1 week", impact: "90% less manual entry" },
          { title: "Claim status tracking", timeframe: "3 days", impact: "Proactive follow-up" },
        ],
      },
      {
        id: "patient-dropout",
        title: "Patient Dropout",
        insight: "Patients start treatment plans then disappear. Chronic conditions go unmanaged. They return only when problems escalate.",
        monthlyImpact: 3400,
        psychology: "Without accountability, patients optimize for short-term comfort. They need gentle nudges to maintain health habits.",
        solutions: [
          { title: "Treatment adherence tracking", timeframe: "1 week", impact: "45% better completion rates" },
          { title: "Personalized check-ins", timeframe: "48 hours", impact: "Patients feel cared for" },
          { title: "Early warning system", timeframe: "5 days", impact: "Catch dropouts before they disappear" },
        ],
      },
    ],
  },
  {
    id: "retail",
    name: "Retail",
    icon: "🛒",
    tagline: "Convert browsers into buyers",
    problems: [
      {
        id: "abandoned-treasure",
        title: "Abandoned Treasure",
        insight: "Customers fill carts with intent. Something interrupts them. They leave and forget. That cart represents real demand you're not capturing.",
        monthlyImpact: 6200,
        psychology: "Online shopping is impulsive. Interruptions reset mental state. A timely reminder reignites purchase intent before it fades.",
        solutions: [
          { title: "Smart recovery sequence", timeframe: "24 hours", impact: "Recover 15% of abandoned carts" },
          { title: "Exit intent capture", timeframe: "48 hours", impact: "Save customers before they leave" },
          { title: "Dynamic incentive engine", timeframe: "3 days", impact: "Personalized offers that convert" },
        ],
      },
      {
        id: "stock-blindspot",
        title: "Stock Blindspot",
        insight: "Your bestseller runs out. Customers see 'Out of Stock' and buy from competitors. By the time you restock, momentum is lost.",
        monthlyImpact: 4800,
        psychology: "Customers have low tolerance for unavailability. They won't wait. One stockout can permanently shift their habits.",
        solutions: [
          { title: "Predictive inventory alerts", timeframe: "3 days", impact: "Never miss a bestseller restock" },
          { title: "Demand forecasting", timeframe: "1 week", impact: "Order before you need it" },
          { title: "Back-in-stock automation", timeframe: "48 hours", impact: "Capture waiting demand" },
        ],
      },
      {
        id: "one-time-buyers",
        title: "One-Time Buyers",
        insight: "You spend to acquire customers. They buy once and vanish. You keep spending to replace them instead of nurturing existing ones.",
        monthlyImpact: 4100,
        psychology: "First purchases are experiments. Without follow-up, customers assume you only wanted your transaction, not your loyalty.",
        solutions: [
          { title: "Post-purchase nurture flow", timeframe: "48 hours", impact: "35% higher repeat rate" },
          { title: "Replenishment reminders", timeframe: "3 days", impact: "Perfectly timed reorders" },
          { title: "Loyalty program automation", timeframe: "1 week", impact: "Turn buyers into advocates" },
        ],
      },
      {
        id: "pricing-leaks",
        title: "Pricing Leaks",
        insight: "Manual promo codes stack incorrectly. Staff apply wrong discounts. You lose margin on sales that would've converted anyway.",
        monthlyImpact: 2900,
        psychology: "Customers test discount boundaries. Staff under pressure approve anything. Without guardrails, margin erodes invisibly.",
        solutions: [
          { title: "Intelligent promo rules", timeframe: "3 days", impact: "Zero invalid discount stacking" },
          { title: "Margin protection alerts", timeframe: "48 hours", impact: "Real-time profitability checks" },
          { title: "Dynamic pricing engine", timeframe: "2 weeks", impact: "Optimize for demand, not guesswork" },
        ],
      },
      {
        id: "support-overwhelm",
        title: "Support Overwhelm",
        insight: "Simple questions flood your inbox. Staff answer the same things repeatedly. Complex issues get buried. Response times balloon.",
        monthlyImpact: 2400,
        psychology: "Customers ask before searching. Each unanswered question feels personal. Delays trigger complaints that create more work.",
        solutions: [
          { title: "AI-powered instant answers", timeframe: "3 days", impact: "Resolve 60% without human touch" },
          { title: "Smart ticket routing", timeframe: "48 hours", impact: "Right question, right expert" },
          { title: "Proactive FAQ surfacing", timeframe: "1 week", impact: "Answer before they ask" },
        ],
      },
    ],
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: "🏠",
    tagline: "Close more deals, faster",
    problems: [
      {
        id: "lead-graveyard",
        title: "Lead Graveyard",
        insight: "Inquiries come in. You're showing a property. By the time you respond, they've moved on to faster agents.",
        monthlyImpact: 7200,
        psychology: "Property seekers contact multiple agents. First responder wins. Every hour of delay halves conversion probability.",
        solutions: [
          { title: "Instant lead response", timeframe: "24 hours", impact: "5x faster first contact" },
          { title: "AI qualification calls", timeframe: "3 days", impact: "Pre-screen while you work" },
          { title: "Smart lead scoring", timeframe: "1 week", impact: "Focus on buyers, not browsers" },
        ],
      },
      {
        id: "showing-chaos",
        title: "Showing Chaos",
        insight: "You drive across town. The viewer doesn't show. No call, no message. You've lost an hour and the chance to show to serious buyers.",
        monthlyImpact: 3600,
        psychology: "Property viewings feel non-committal to browsers. Without skin in the game, flaking is easy and guilt-free.",
        solutions: [
          { title: "Confirmation workflow", timeframe: "48 hours", impact: "70% fewer no-shows" },
          { title: "Smart scheduling", timeframe: "3 days", impact: "Cluster viewings by area" },
          { title: "Virtual pre-screening", timeframe: "1 week", impact: "Only meet serious prospects" },
        ],
      },
      {
        id: "follow-up-fog",
        title: "Follow-up Fog",
        insight: "You meet great prospects. Weeks pass. You meant to follow up but got busy. They bought elsewhere.",
        monthlyImpact: 5400,
        psychology: "Out of sight, out of mind works both ways. Without systematic follow-up, relationships fade. Whoever stays present wins.",
        solutions: [
          { title: "Automated nurture sequences", timeframe: "48 hours", impact: "Never forget a prospect" },
          { title: "Life event triggers", timeframe: "1 week", impact: "Reach out at perfect moments" },
          { title: "Relationship health scoring", timeframe: "5 days", impact: "See who needs attention" },
        ],
      },
      {
        id: "paperwork-purgatory",
        title: "Paperwork Purgatory",
        insight: "Deals die in paperwork. Documents get lost. Signatures delayed. By closing, everyone's exhausted and relationships strained.",
        monthlyImpact: 2800,
        psychology: "Admin work feels like punishment after the excitement of agreement. Energy drops. Momentum stalls. Buyers second-guess.",
        solutions: [
          { title: "Digital document flow", timeframe: "3 days", impact: "Sign anywhere, anytime" },
          { title: "Progress tracking", timeframe: "48 hours", impact: "Everyone sees deal status" },
          { title: "Deadline automation", timeframe: "5 days", impact: "Auto-nudge before things expire" },
        ],
      },
      {
        id: "market-blindness",
        title: "Market Blindness",
        insight: "You price properties by gut feel. Some sit too long. Others sell too fast (too cheap). You're leaving money on the table.",
        monthlyImpact: 4100,
        psychology: "Market intuition has limits. Cognitive biases skew estimates. Data reveals patterns invisible to even experienced agents.",
        solutions: [
          { title: "Comparable analysis engine", timeframe: "1 week", impact: "Price with precision" },
          { title: "Days-on-market predictor", timeframe: "5 days", impact: "Set realistic expectations" },
          { title: "Market pulse alerts", timeframe: "3 days", impact: "Know before competitors" },
        ],
      },
    ],
  },
  {
    id: "igaming",
    name: "iGaming",
    icon: "🎰",
    tagline: "Maximize player lifetime value",
    problems: [
      {
        id: "registration-dropoff",
        title: "Registration Dropoff",
        insight: "Players start registration excited. They see form fields. They leave. You lose 70% of signups before they finish.",
        monthlyImpact: 8900,
        psychology: "Every field multiplies friction. Players are impatient and suspicious. Long forms signal bureaucracy, not excitement.",
        solutions: [
          { title: "Progressive registration", timeframe: "2 days", impact: "55% higher completion rate" },
          { title: "Social auth integration", timeframe: "48 hours", impact: "One-click registration" },
          { title: "Gamified onboarding", timeframe: "1 week", impact: "Turn signup into first win" },
        ],
      },
      {
        id: "first-deposit-anxiety",
        title: "First Deposit Anxiety",
        insight: "Registered players don't deposit. They browse, then leave. Trust hasn't been established. First financial commitment feels risky.",
        monthlyImpact: 12400,
        psychology: "Money triggers loss aversion. New platforms feel unproven. Players need social proof and safety signals before committing.",
        solutions: [
          { title: "Risk-free first bet bonus", timeframe: "24 hours", impact: "3x deposit conversion" },
          { title: "Trust badge automation", timeframe: "3 days", impact: "Display licenses prominently" },
          { title: "Instant withdrawal proof", timeframe: "1 week", impact: "Show real payout examples" },
        ],
      },
      {
        id: "dormant-whales",
        title: "Dormant Whales",
        insight: "High-value players stop logging in. No warning. No intervention. By the time you notice, they're active on competitor sites.",
        monthlyImpact: 18700,
        psychology: "Whales expect VIP treatment. Generic emails feel insulting. Silence signals you don't value them. Competitors hunt actively.",
        solutions: [
          { title: "Behavioral anomaly detection", timeframe: "3 days", impact: "Catch churn signals early" },
          { title: "Personal account manager", timeframe: "48 hours", impact: "Human touch for top 5%" },
          { title: "Predictive offer engine", timeframe: "1 week", impact: "Custom incentives that convert" },
        ],
      },
      {
        id: "bonus-abuse-epidemic",
        title: "Bonus Abuse",
        insight: "Professional bonus hunters drain margins. They exploit loopholes. Real players subsidize their profits. Your bonus budget bleeds.",
        monthlyImpact: 9200,
        psychology: "Arbitrage communities share exploits. Sophisticated players optimize for bonuses, not gameplay. They have no loyalty.",
        solutions: [
          { title: "Behavior pattern analysis", timeframe: "5 days", impact: "Identify abusers in real-time" },
          { title: "Dynamic bonus qualification", timeframe: "1 week", impact: "Reward real players only" },
          { title: "Cross-platform fraud detection", timeframe: "2 weeks", impact: "Block multi-accounting" },
        ],
      },
      {
        id: "payment-failure-blackhole",
        title: "Payment Failures",
        insight: "Players try to deposit. Payment fails. They don't know why. No alternative offered. They leave frustrated, never return.",
        monthlyImpact: 6800,
        psychology: "Payment failures feel like rejection. Players blame you, not their bank. Without instant alternatives, momentum dies.",
        solutions: [
          { title: "Smart payment routing", timeframe: "3 days", impact: "Auto-try alternative methods" },
          { title: "Real-time failure recovery", timeframe: "48 hours", impact: "Instant alternative suggestions" },
          { title: "Regional payment optimization", timeframe: "1 week", impact: "Show methods that actually work" },
        ],
      },
    ],
  },
  {
    id: "legal",
    name: "Legal",
    icon: "⚖️",
    tagline: "Win more cases, bill more hours",
    problems: [
      {
        id: "inquiry-to-client-gap",
        title: "Inquiry-to-Client Gap",
        insight: "Potential clients inquire. You're in court. They call competitors while you're unavailable. By the time you respond, they've hired someone else.",
        monthlyImpact: 14200,
        psychology: "Legal problems feel urgent. Anxiety drives immediate action. First responder signals availability and care.",
        solutions: [
          { title: "AI intake qualification", timeframe: "48 hours", impact: "Capture leads 24/7" },
          { title: "Instant scheduling automation", timeframe: "3 days", impact: "Book consultations immediately" },
          { title: "Practice area routing", timeframe: "1 week", impact: "Right inquiry, right attorney" },
        ],
      },
      {
        id: "billable-hour-leakage",
        title: "Billable Hour Leakage",
        insight: "Attorneys do work but forget to log it. Switching between tasks makes time tracking impossible. You bill 70% of actual work.",
        monthlyImpact: 22500,
        psychology: "Time tracking feels like admin overhead. Memory is unreliable. Attorneys round down to seem reasonable, losing thousands monthly.",
        solutions: [
          { title: "Automatic time capture", timeframe: "5 days", impact: "AI logs work in background" },
          { title: "Smart time suggestions", timeframe: "1 week", impact: "Fill gaps with ML predictions" },
          { title: "Task-based billing templates", timeframe: "3 days", impact: "Never miss common activities" },
        ],
      },
      {
        id: "document-chaos",
        title: "Document Chaos",
        insight: "Critical documents buried in email. Versions conflicted. Deadlines missed because filings weren't found. Associates spend hours searching.",
        monthlyImpact: 8600,
        psychology: "Legal work is document-heavy. Email is terrible for retrieval. Stress makes search harder. Junior staff afraid to ask twice.",
        solutions: [
          { title: "Unified document repository", timeframe: "1 week", impact: "One source of truth" },
          { title: "Version control automation", timeframe: "5 days", impact: "Never lose track of edits" },
          { title: "Smart document search", timeframe: "3 days", impact: "Find anything in seconds" },
        ],
      },
      {
        id: "client-update-vacuum",
        title: "Client Update Vacuum",
        insight: "Clients feel ignored between meetings. They call repeatedly for status. Staff interruptions kill productivity. Clients perceive abandonment.",
        monthlyImpact: 5400,
        psychology: "Silence breeds anxiety in legal clients. They catastrophize. Proactive updates build trust and reduce calls exponentially.",
        solutions: [
          { title: "Automated case milestone updates", timeframe: "48 hours", impact: "Keep clients informed automatically" },
          { title: "Client portal with real-time status", timeframe: "1 week", impact: "Self-service transparency" },
          { title: "Proactive communication triggers", timeframe: "5 days", impact: "Update before they ask" },
        ],
      },
      {
        id: "deadline-russian-roulette",
        title: "Deadline Risks",
        insight: "Court deadlines tracked manually. Calendar conflicts overlooked. Missed filings lead to malpractice claims and disciplinary action.",
        monthlyImpact: 19800,
        psychology: "Human memory fails under complexity. Calendar apps don't understand legal rules. Stakes are career-ending.",
        solutions: [
          { title: "Court rule automation", timeframe: "1 week", impact: "Calculate deadlines perfectly" },
          { title: "Conflict detection", timeframe: "5 days", impact: "Flag overlapping obligations" },
          { title: "Multi-level deadline alerts", timeframe: "3 days", impact: "Escalating reminders that work" },
        ],
      },
    ],
  },
  {
    id: "finance",
    name: "Finance",
    icon: "💼",
    tagline: "Accelerate growth, reduce risk",
    problems: [
      {
        id: "lead-qualification-blindness",
        title: "Lead Qualification Blindness",
        insight: "Advisors waste time on tire-kickers. Real prospects slip through. No system distinguishes browsers from buyers.",
        monthlyImpact: 16700,
        psychology: "Everyone claims urgency. Advisors optimize for politeness, not profitability. Without data, instinct fails.",
        solutions: [
          { title: "Behavioral lead scoring", timeframe: "1 week", impact: "Identify serious prospects instantly" },
          { title: "Asset verification automation", timeframe: "5 days", impact: "Qualify AUM before meetings" },
          { title: "Engagement intensity tracking", timeframe: "3 days", impact: "Priority routing for hot leads" },
        ],
      },
      {
        id: "compliance-nightmare",
        title: "Compliance Nightmare",
        insight: "Regulations change constantly. Manual tracking fails. Audits reveal gaps. Fines and reputational damage follow.",
        monthlyImpact: 28400,
        psychology: "Compliance feels like punishment, not protection. Staff do minimum required. Small gaps compound into systemic violations.",
        solutions: [
          { title: "Real-time regulatory monitoring", timeframe: "2 weeks", impact: "Stay ahead of changes" },
          { title: "Automated audit trail generation", timeframe: "1 week", impact: "Always audit-ready" },
          { title: "Risk assessment dashboard", timeframe: "5 days", impact: "Spot vulnerabilities early" },
        ],
      },
      {
        id: "client-portfolio-blindness",
        title: "Client Portfolio Blindness",
        insight: "Clients don't understand their holdings. They panic during volatility. Emergency calls flood during market dips.",
        monthlyImpact: 9200,
        psychology: "Financial complexity breeds fear. Jargon alienates. Silence during downturns signals abandonment. Education prevents panic.",
        solutions: [
          { title: "Visual portfolio storytelling", timeframe: "1 week", impact: "Clients understand at a glance" },
          { title: "Proactive volatility communications", timeframe: "48 hours", impact: "Calm nerves before calls come" },
          { title: "Educational content automation", timeframe: "5 days", impact: "Right lesson, right moment" },
        ],
      },
      {
        id: "referral-wasteland",
        title: "Referral Wasteland",
        insight: "Happy clients would refer friends. You don't ask systematically. Referrals happen randomly. You're leaving growth on the table.",
        monthlyImpact: 13600,
        psychology: "People want to help but need prompting. Timing matters. Right after success, gratitude peaks. Wait too long, it fades.",
        solutions: [
          { title: "Milestone referral triggers", timeframe: "3 days", impact: "Ask when gratitude is highest" },
          { title: "Referral tracking system", timeframe: "1 week", impact: "Close the loop visibly" },
          { title: "Social proof automation", timeframe: "5 days", impact: "Make referring easy and rewarding" },
        ],
      },
      {
        id: "meeting-preparation-chaos",
        title: "Meeting Preparation Chaos",
        insight: "Advisors scramble before client meetings. Print reports. Review scattered notes. Arrive stressed. First 10 minutes wasted orienting.",
        monthlyImpact: 6400,
        psychology: "Preparation time compounds. Stress leaks into meetings. Clients sense disorganization. Confidence erodes invisibly.",
        solutions: [
          { title: "Auto-generated meeting briefs", timeframe: "3 days", impact: "All context, one document" },
          { title: "Talking points AI", timeframe: "1 week", impact: "Intelligent agenda suggestions" },
          { title: "One-click report generation", timeframe: "5 days", impact: "Professional materials instantly" },
        ],
      },
    ],
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: "📊",
    tagline: "Problems every business faces",
    problems: [
      {
        id: "invisible-online",
        title: "Invisible Online",
        insight: "Your business exists. Google doesn't know. Potential customers search for your services. Competitors appear. You don't.",
        monthlyImpact: 8900,
        psychology: "Customers trust Google's first page. Invisibility equals non-existence. Every day invisible is revenue given to competitors.",
        solutions: [
          { title: "Technical SEO foundation", timeframe: "1 week", impact: "Get indexed and ranked" },
          { title: "Local search optimization", timeframe: "5 days", impact: "Dominate your geography" },
          { title: "Content authority building", timeframe: "2 weeks", impact: "Answer what customers ask" },
        ],
      },
      {
        id: "social-media-silence",
        title: "Social Media Silence",
        insight: "You post occasionally. Crickets. Competitors have engaged communities. You're shouting into the void. Brand awareness stagnates.",
        monthlyImpact: 6200,
        psychology: "Consistency beats quality. Humans follow patterns. Sporadic posting signals unreliability. Algorithms punish inconsistency.",
        solutions: [
          { title: "Content calendar automation", timeframe: "48 hours", impact: "Never miss a post" },
          { title: "Engagement trigger system", timeframe: "3 days", impact: "Turn followers into community" },
          { title: "Performance analytics dashboard", timeframe: "1 week", impact: "Double down on what works" },
        ],
      },
      {
        id: "website-conversion-blackhole",
        title: "Website Conversion Gap",
        insight: "Traffic comes to your site. They browse. They leave without contacting you. Your website is a brochure, not a sales machine.",
        monthlyImpact: 11400,
        psychology: "Visitors need clear next steps. Friction kills conversion. Every extra click loses 20% of prospects. Anxiety prevents action.",
        solutions: [
          { title: "Conversion funnel optimization", timeframe: "1 week", impact: "Guide visitors to action" },
          { title: "Strategic CTA placement", timeframe: "3 days", impact: "Make contact irresistible" },
          { title: "Trust signal engineering", timeframe: "5 days", impact: "Overcome decision paralysis" },
        ],
      },
      {
        id: "ad-budget-bonfire",
        title: "Ad Budget Waste",
        insight: "You run ads. Clicks come in. Few convert. Budget evaporates. You can't tell what works. Keep spending, hoping for results.",
        monthlyImpact: 14700,
        psychology: "Hope is not a strategy. Without attribution, you're gambling. Marketers chase vanity metrics. ROI remains invisible.",
        solutions: [
          { title: "Attribution modeling", timeframe: "1 week", impact: "Know what drives revenue" },
          { title: "Campaign performance automation", timeframe: "5 days", impact: "Kill losers, scale winners" },
          { title: "Landing page optimization", timeframe: "3 days", impact: "Match message to audience" },
        ],
      },
      {
        id: "email-marketing-graveyard",
        title: "Email Marketing Decay",
        insight: "You collect emails but rarely send. When you do, open rates are dismal. Unsubscribes sting. Your list decays monthly.",
        monthlyImpact: 5600,
        psychology: "Infrequent senders are forgotten. Batch-and-blast feels spammy. Without segmentation, relevance dies.",
        solutions: [
          { title: "Behavior-based segmentation", timeframe: "1 week", impact: "Right message, right person" },
          { title: "Automated nurture sequences", timeframe: "5 days", impact: "Stay top of mind effortlessly" },
          { title: "Re-engagement campaigns", timeframe: "3 days", impact: "Revive dormant subscribers" },
        ],
      },
    ],
  },
];

export function getVertical(id: string): VerticalData | undefined {
  return verticals.find((v) => v.id === id);
}

export function calculateTotalImpact(problems: Problem[]): number {
  return problems.reduce((sum, p) => sum + p.monthlyImpact, 0);
}
