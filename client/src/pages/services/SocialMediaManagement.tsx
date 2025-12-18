import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { revenueServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import { Calendar, TrendingUp, Heart, MessageCircle, BarChart, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@assets/social-media-management-optimized.jpg";
import FAQSection, { FAQItem } from "@/components/FAQSection";

const socialMediaFAQs: FAQItem[] = [
  {
    question: "What platforms do you manage for social media?",
    answer: "We manage all major platforms including Instagram, Facebook, LinkedIn, TikTok, X (Twitter), Pinterest, and YouTube. We tailor our strategy to the platforms where your audience is most active."
  },
  {
    question: "How quickly can I expect to see results from social media management?",
    answer: "You'll see increased consistency and engagement within the first month. Significant follower growth and business results typically develop over 3-6 months of consistent community building."
  },
  {
    question: "What makes OARC Digital's social media management different?",
    answer: "We focus on building real communities, not vanity metrics. Our approach combines AI-powered analytics with human creativity to drive actual business results like leads and sales."
  },
  {
    question: "Do you create all the content or do we need to provide it?",
    answer: "We handle full content creation including graphics, copy, and scheduling. We'll work with you initially to understand your brand voice, then manage everything independently."
  },
  {
    question: "How do you measure success in social media management?",
    answer: "We track engagement rates, follower growth, reach, and most importantly—business metrics like website traffic, leads, and conversions. Weekly reports keep you informed on progress."
  },
  {
    question: "Can you handle crisis management and negative comments?",
    answer: "Yes, our community management includes real-time monitoring, rapid response protocols, and crisis management. We protect your brand reputation 24/7 across all platforms."
  },
  {
    question: "What is the typical investment for social media management?",
    answer: "Our packages start from €1,500/month for essential management. Full-service packages with content creation and community management range from €2,500-5,000/month based on scope."
  },
  {
    question: "Do you offer a trial period or guarantee?",
    answer: "We offer a 30-day satisfaction guarantee. If you're not seeing value within the first month, we'll refund your investment or continue working until you're satisfied."
  }
];

export default function SocialMediaManagement() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={revenueServicesSEO.socialMediaManagement.title}
        description={revenueServicesSEO.socialMediaManagement.description}
        canonicalUrl={`https://oarcdigital.com${revenueServicesSEO.socialMediaManagement.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "Social Media Management Services",
          revenueServicesSEO.socialMediaManagement.description,
          "Community Management"
        )}
        schemaId="service-social-media-management"
      />
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Social media management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Build communities, not just <span className="italic bg-gradient-to-r from-[#c4ff4d] to-[#23AACA] text-transparent bg-clip-text">follower counts</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Full-service social media management. From strategy to execution, we build engaged communities that drive real business results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-[#23AACA] hover:bg-white/90" data-testid="button-get-started">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-case-studies">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-[#f5f0e6] border-b border-[#1a2e29]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Powering growth for leading brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['Hospitality Brands', 'Real Estate Firms', 'Fitness Studios', 'Local Restaurant Groups', 'Professional Services', 'Wellness Brands'].map((type, i) => (
              <div key={i} className="text-base md:text-lg font-bold text-foreground">{type}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f0e6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">FULL-SERVICE MANAGEMENT</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Strategy to execution. <span className="italic text-[#c4ff4d]">Everything covered.</span>
          </h2>
        </div>

        <div className="px-4">
          <ScrollableCards>
            {[
              { name: "Strategy & Planning", desc: "Audience research, content pillars, editorial calendars, platform-specific strategies. Build the foundation for consistent growth.", icon: Calendar },
              { name: "Content Creation & Publishing", desc: "Original posts, curated content, Stories, Reels, carousels. Platform-optimized content published daily across all channels.", icon: TrendingUp },
              { name: "Community Management", desc: "Respond to comments, DMs, mentions. Moderate discussions, handle customer service inquiries, build relationships with followers.", icon: Users },
              { name: "Engagement & Growth Tactics", desc: "Strategic follows, hashtag research, collaboration outreach, giveaways. Organic tactics that build real, engaged audiences.", icon: Heart },
              { name: "Social Listening & Monitoring", desc: "Track brand mentions, competitor activity, industry trends, sentiment analysis. Stay ahead of conversations.", icon: MessageCircle },
              { name: "Analytics & Reporting", desc: "Track growth, engagement, reach, conversions. Weekly dashboards and monthly strategy reviews with actionable insights.", icon: BarChart },
            ].map((service, i) => (
              <div 
                key={i} 
                className="flex-none w-[320px] md:w-[400px] p-8 bg-white rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-testid={`service-${i}`}
              >
                <service.icon className="w-12 h-12 text-[#23AACA] mb-4" />
                <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </ScrollableCards>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-3">SUCCESS STORIES</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Community building that works
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Boutique Hotel Chain Drives 42% Increase in Direct Bookings",
                industry: "Hospitality",
                challenge: "Competing with OTAs, needed to drive direct bookings via social",
                solution: "Built Instagram-first content strategy showcasing property experiences, local attractions, and guest stories with strategic CTAs to booking page",
                results: [
                  "42% increase in direct booking conversions",
                  "68% growth in Instagram following in 6 months",
                  "8.7% average engagement rate (3x industry avg)",
                  "$850K in attributed social media revenue"
                ]
              },
              {
                title: "Real Estate Firm Generates 320 Qualified Leads per Month",
                industry: "Real Estate",
                challenge: "Needed consistent lead generation in competitive market",
                solution: "Daily property showcase content on Instagram and Facebook, neighborhood guides, agent profiles, and strategic lead magnets with nurture sequences",
                results: [
                  "320 qualified leads per month from social",
                  "28% conversion rate on social leads",
                  "450% ROI on social media management investment",
                  "Top 3 real estate brand in local market"
                ]
              },
              {
                title: "Fitness Studio Fills 95% of Classes via Community Engagement",
                industry: "Fitness & Wellness",
                challenge: "Low class attendance and member engagement",
                solution: "Hyper-local community building on Instagram, member spotlight features, workout tips, class previews, and engagement-driving challenges",
                results: [
                  "95% average class capacity (up from 62%)",
                  "73% of new members discovered via Instagram",
                  "2,400 local engaged followers in target demo",
                  "4.9/5 star rating from community engagement"
                ]
              },
              {
                title: "Multi-Location Restaurant Group Grows to 85K Followers",
                industry: "Restaurants / QSR",
                challenge: "Needed to build brand awareness and drive foot traffic across 12 locations",
                solution: "Food photography, behind-the-scenes content, location-specific Stories, user-generated content campaigns, and local influencer partnerships",
                results: [
                  "85K engaged followers across platforms",
                  "23% increase in foot traffic across locations",
                  "2.1M monthly impressions on Instagram",
                  "Top 5 restaurant social presence in region"
                ]
              },
            ].map((study, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border border-border hover:shadow-xl transition-all duration-300" data-testid={`case-study-${i}`}>
                <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-2">{study.industry}</div>
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold text-foreground mb-1">Challenge</div>
                  <p className="text-sm text-muted-foreground">{study.challenge}</p>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-semibold text-foreground mb-1">Solution</div>
                  <p className="text-sm text-muted-foreground">{study.solution}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold text-foreground mb-2">Results</div>
                  <ul className="space-y-2">
                    {study.results.map((result, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#23AACA] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-3">OUR PROCESS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              From strategy to daily management
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Strategy & Calendar Planning",
                description: "Build content strategy, define content pillars, create editorial calendar. Research your audience and competitors to identify opportunities."
              },
              {
                step: "02",
                title: "Content Creation & Publishing",
                description: "Create platform-optimized content daily. Publish at optimal times, engage with your community, and respond to comments and messages."
              },
              {
                step: "03",
                title: "Analytics & Optimization",
                description: "Track performance metrics, identify top-performing content, optimize strategy based on data. Monthly reporting with actionable insights."
              },
            ].map((item, i) => (
              <div key={i} className="text-center" data-testid={`step-${i}`}>
                <div className="inline-block text-5xl md:text-6xl font-bold text-[#23AACA] mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">WHO THIS IS FOR</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Perfect for <span className="italic text-orange-500">brands serious about community</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f5f0e6] rounded-xl p-8 border border-[#1a2e29]/10" data-testid="use-case-local">
              <h3 className="text-xl font-bold mb-4">Local Businesses</h3>
              <p className="text-[#1a2e29]/70 mb-4">
                Build local brand awareness and drive foot traffic. Restaurants, retail, service businesses—engage your community where they spend time.
              </p>
              <ul className="space-y-2 text-sm text-[#1a2e29]/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Local community building</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Event promotion & coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Customer testimonials & UGC</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f5f0e6] rounded-xl p-8 border border-[#1a2e29]/10" data-testid="use-case-ecommerce">
              <h3 className="text-xl font-bold mb-4">E-commerce Brands</h3>
              <p className="text-[#1a2e29]/70 mb-4">
                Turn social into a sales channel. Daily posting, community engagement, and customer service that drives conversions and loyalty.
              </p>
              <ul className="space-y-2 text-sm text-[#1a2e29]/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Product-focused content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Social commerce optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>DM customer service & sales</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f5f0e6] rounded-xl p-8 border border-[#1a2e29]/10" data-testid="use-case-hospitality">
              <h3 className="text-xl font-bold mb-4">Hospitality & Travel</h3>
              <p className="text-[#1a2e29]/70 mb-4">
                Showcase experiences and drive bookings. Hotels, resorts, tour operators—inspire travelers with stunning visual storytelling.
              </p>
              <ul className="space-y-2 text-sm text-[#1a2e29]/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Destination content & highlights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Guest testimonials & reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Seasonal offer promotion</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f5f0e6] rounded-xl p-8 border border-[#1a2e29]/10" data-testid="use-case-fitness">
              <h3 className="text-xl font-bold mb-4">Fitness & Wellness</h3>
              <p className="text-[#1a2e29]/70 mb-4">
                Build engaged communities that support your members. Studios, gyms, wellness brands—inspire and motivate through social.
              </p>
              <ul className="space-y-2 text-sm text-[#1a2e29]/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Member spotlights & transformations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Workout tips & motivation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Class & event promotion</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f5f0e6] rounded-xl p-8 border border-[#1a2e29]/10" data-testid="use-case-professional">
              <h3 className="text-xl font-bold mb-4">Professional Services</h3>
              <p className="text-[#1a2e29]/70 mb-4">
                Build thought leadership and trust. Law firms, consultants, agencies—position your expertise through consistent social presence.
              </p>
              <ul className="space-y-2 text-sm text-[#1a2e29]/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Thought leadership content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Industry insights & trends</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Client testimonials & case studies</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f5f0e6] rounded-xl p-8 border border-[#1a2e29]/10" data-testid="use-case-realestate">
              <h3 className="text-xl font-bold mb-4">Real Estate</h3>
              <p className="text-[#1a2e29]/70 mb-4">
                Showcase properties and build local authority. Agents, brokers, developers—turn social into a lead generation machine.
              </p>
              <ul className="space-y-2 text-sm text-[#1a2e29]/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Property showcase content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Market updates & insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23AACA] flex-shrink-0 mt-0.5" />
                  <span>Community & neighborhood features</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-4">AMPLIFY YOUR IMPACT</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Combine with <span className="italic text-[#c4ff4d]">these services</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Social management is most powerful when paired with creative production and paid amplification.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/social-media-creative">
              <div className="group p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-[#23AACA] transition-all duration-300 cursor-pointer" data-testid="related-service-creative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#c4ff4d] transition-colors">Social Creative Production</h3>
                  <ArrowRight className="h-5 w-5 text-[#c4ff4d] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-white/70 mb-4">
                  Professional content creation that elevates your social presence. High-quality visuals that stop the scroll.
                </p>
              </div>
            </Link>

            <Link href="/services/paid-advertising">
              <div className="group p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-[#23AACA] transition-all duration-300 cursor-pointer" data-testid="related-service-paid">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#c4ff4d] transition-colors">Paid Advertising</h3>
                  <ArrowRight className="h-5 w-5 text-[#c4ff4d] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-white/70 mb-4">
                  Amplify your best organic content with paid campaigns. Turn engaged followers into customers.
                </p>
              </div>
            </Link>

            <Link href="/services/influencer-marketing">
              <div className="group p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-[#23AACA] transition-all duration-300 cursor-pointer" data-testid="related-service-influencer">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#c4ff4d] transition-colors">Influencer Marketing</h3>
                  <ArrowRight className="h-5 w-5 text-[#c4ff4d] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-white/70 mb-4">
                  Expand reach through creator partnerships. Authentic content that builds trust and drives awareness.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={socialMediaFAQs}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our social media management services"
        schemaId="faq-social-media-management"
      />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#23AACA] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to build a real community?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Stop posting into the void. Start building engaged communities that drive business results.
          </p>
          <Button size="lg" className="bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90" data-testid="button-cta">
            Get a Free Audit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
}
