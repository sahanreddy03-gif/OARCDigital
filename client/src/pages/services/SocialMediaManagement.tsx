import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { revenueServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import { ScrollableCards } from "@/components/ui/scrollable-cards";
import { Calendar, TrendingUp, Heart, MessageCircle, BarChart, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@assets/stock_images/social_media_manager_11df5838.jpg";

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
            Build communities, not just <span className="italic bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-transparent bg-clip-text">follower counts</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Full-service social media management. From strategy to execution, we build engaged communities that drive real business results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90" data-testid="button-get-started">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-case-studies">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white border-b border-border">
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

      <section className="py-20 bg-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="text-sm uppercase tracking-wider text-blue-600 mb-4">FULL-SERVICE MANAGEMENT</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Strategy to execution. <span className="italic bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Everything covered.</span>
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
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </ScrollableCards>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-blue-600 mb-3">SUCCESS STORIES</div>
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
              <div key={i} className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-border hover:shadow-xl transition-all duration-300" data-testid={`case-study-${i}`}>
                <div className="text-sm uppercase tracking-wider text-blue-600 mb-2">{study.industry}</div>
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
                        <CheckCircle2 className="w-4 h-4 text-[hsl(142,76%,36%)] mt-0.5 flex-shrink-0" />
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
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-blue-600 mb-3">OUR PROCESS</div>
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
                <div className="inline-block text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-4">
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-blue-600 mb-4">WHO THIS IS FOR</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Perfect for <span className="italic bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">brands serious about community</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100" data-testid="use-case-local">
              <h3 className="text-xl font-bold mb-4">Local Businesses</h3>
              <p className="text-gray-700 mb-4">
                Build local brand awareness and drive foot traffic. Restaurants, retail, service businesses—engage your community where they spend time.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Local community building</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Event promotion & coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Customer testimonials & UGC</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100" data-testid="use-case-ecommerce">
              <h3 className="text-xl font-bold mb-4">E-commerce Brands</h3>
              <p className="text-gray-700 mb-4">
                Turn social into a sales channel. Daily posting, community engagement, and customer service that drives conversions and loyalty.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Product-focused content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Social commerce optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>DM customer service & sales</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100" data-testid="use-case-hospitality">
              <h3 className="text-xl font-bold mb-4">Hospitality & Travel</h3>
              <p className="text-gray-700 mb-4">
                Showcase experiences and drive bookings. Hotels, resorts, tour operators—inspire travelers with stunning visual storytelling.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Destination content & highlights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Guest testimonials & reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Seasonal offer promotion</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100" data-testid="use-case-fitness">
              <h3 className="text-xl font-bold mb-4">Fitness & Wellness</h3>
              <p className="text-gray-700 mb-4">
                Build engaged communities that support your members. Studios, gyms, wellness brands—inspire and motivate through social.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Member spotlights & transformations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Workout tips & motivation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Class & event promotion</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100" data-testid="use-case-professional">
              <h3 className="text-xl font-bold mb-4">Professional Services</h3>
              <p className="text-gray-700 mb-4">
                Build thought leadership and trust. Law firms, consultants, agencies—position your expertise through consistent social presence.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Thought leadership content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Industry insights & trends</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Client testimonials & case studies</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100" data-testid="use-case-realestate">
              <h3 className="text-xl font-bold mb-4">Real Estate</h3>
              <p className="text-gray-700 mb-4">
                Showcase properties and build local authority. Agents, brokers, developers—turn social into a lead generation machine.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Property showcase content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Market updates & insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Community & neighborhood features</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-blue-600 mb-4">AMPLIFY YOUR IMPACT</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Combine with <span className="italic bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">these services</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Social management is most powerful when paired with creative production and paid amplification.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/social-media-creative">
              <div className="group p-8 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-creative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">Social Creative Production</h3>
                  <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-700 mb-4">
                  Professional content creation that elevates your social presence. High-quality visuals that stop the scroll.
                </p>
              </div>
            </Link>

            <Link href="/services/paid-advertising">
              <div className="group p-8 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-paid">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">Paid Advertising</h3>
                  <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-700 mb-4">
                  Amplify your best organic content with paid campaigns. Turn engaged followers into customers.
                </p>
              </div>
            </Link>

            <Link href="/services/influencer-marketing">
              <div className="group p-8 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer" data-testid="related-service-influencer">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">Influencer Marketing</h3>
                  <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-700 mb-4">
                  Expand reach through creator partnerships. Authentic content that builds trust and drives awareness.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to build a real community?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Stop posting into the void. Start building engaged communities that drive business results.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90" data-testid="button-cta">
            Get a Free Audit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
}
