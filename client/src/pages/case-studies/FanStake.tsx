import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { ArrowRight, Smartphone, CheckCircle2, TrendingUp, Users, Target } from 'lucide-react';
import { SiApple, SiGoogleplay } from 'react-icons/si';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';

import teamCollabImg from '@assets/stock_images/team_collaboration_b_c8b7e41b.jpg';
import eslImg from '@assets/stock_images/ai_artificial_intell_5f3c3d5c.jpg';
import lenovoImg from '@assets/stock_images/modern_digital_techn_529f85c8.jpg';
import gymGroupImg from '@assets/IMG_8206_1763165592775.jpeg';

export default function FanStakeCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { value: '340%', label: 'Session Growth', description: 'Increase in average sessions per user' },
    { value: '52%', label: 'Conversion Rate', description: 'Users completing first transaction' },
    { value: '78%', label: 'Retention', description: '30-day user retention rate' },
    { value: '4.6', label: 'App Rating', description: 'Average rating across app stores' }
  ];

  const relatedCases = [
    {
      id: 'gamingtech-elite',
      title: 'GamingTech Elite',
      subtitle: 'Community growth initiative driving engagement across gaming platforms.',
      image: lenovoImg,
      link: '/case-studies/gamingtech-elite'
    },
    {
      id: 'progamer-network',
      title: 'ProGamer Network',
      subtitle: 'Platform expansion strategy reaching new markets and demographics.',
      image: eslImg,
      link: '/case-studies/progamer-network'
    },
    {
      id: 'fitnesspro-network',
      title: 'FitnessPro Network',
      subtitle: 'Social engagement campaign redefining fitness accessibility.',
      image: gymGroupImg,
      link: '/case-studies/fitnesspro-network'
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="FanStake Case Study | Sports Engagement Platform | OARC Digital"
        description="How OARC Digital designed and developed a mobile sports engagement platform that connected fans with athletes through innovative analytics and community features."
        canonicalUrl="https://oarcdigital.com/case-studies/fanstake-sports-platform"
        ogType="article"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden" data-testid="section-hero">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#c4ff4d]/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c4ff4d]/10 rounded-full blur-3xl"></div>
        <img 
          src={teamCollabImg}
          alt="FanStake sports engagement platform case study - team collaboration on mobile app development for sports analytics"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          loading="eager"
        />
        <div className="relative z-10 text-center px-4 py-20 max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-wider font-bold text-[#c4ff4d] mb-4" data-testid="text-eyebrow">Case Study</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6" data-testid="heading-case-study-title">
            How we built a sports engagement platform that fans actually loved
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8" data-testid="text-hero-description">
            A mobile-first platform connecting sports enthusiasts with athlete performance analytics and community-driven engagement features.
          </p>
          
          {/* Platform badges */}
          <div className="flex items-center justify-center gap-4" data-testid="platform-badges">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full" data-testid="badge-ios">
              <SiApple className="w-5 h-5" aria-hidden="true" />
              <span className="text-sm font-medium">iOS</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full" data-testid="badge-android">
              <SiGoogleplay className="w-5 h-5" aria-hidden="true" />
              <span className="text-sm font-medium">Android</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-surface-lime relative">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold text-gray-600 uppercase mb-8 tracking-wider text-center">Performance Metrics</p>
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, i) => (
              <div key={i} className="bg-[#c4ff4d] p-6 text-center stat-glow rounded-2xl">
                <div className="text-3xl md:text-4xl font-black mb-1 text-white">{metric.value}</div>
                <div className="text-xs uppercase tracking-wider font-bold text-white mb-2">{metric.label}</div>
                <div className="text-xs text-white/80">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 bg-white" data-testid="section-overview">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider" data-testid="text-section-label">Overview</p>
          
          <h2 className="text-3xl md:text-4xl font-black text-black mb-8" data-testid="heading-overview">
            Reimagining how fans engage with sports
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed" data-testid="text-overview-1">
            Traditional sports apps focused on scores and news, but our client saw an opportunity to create deeper engagement. They wanted a platform where fans could track athlete performance over time, participate in community discussions, and feel more connected to the sports they loved.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed" data-testid="text-overview-2">
            We partnered with them over a 10-month engagement from concept through launch, delivering native mobile applications for iOS and Android along with supporting web interfaces. The platform launched in early 2022, attracted significant user adoption during its first season, and was acquired by a US-based sports media company in Q1 2023 as part of their digital expansion strategy.
          </p>

          {/* Platforms & Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-lg font-bold text-black mb-6">Platforms</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-6 h-6 text-black" />
                  <span className="text-gray-800 font-medium">iOS & Android Native Apps</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-black" />
                  <span className="text-gray-800 font-medium">Web Dashboard</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-black mb-6">Deliverables</h4>
              <ul className="space-y-3 text-gray-800">
                <li className="font-medium">Product Strategy</li>
                <li className="font-medium">UX/UI Design</li>
                <li className="font-medium">Mobile Development</li>
                <li className="font-medium">Marketing Assets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4 bg-gray-50 relative">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">The Challenge</p>
          
          <h2 className="text-3xl md:text-4xl font-black text-black mb-8">
            Creating engagement beyond the scoreboard
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The client had an existing product with a small but engaged user base. However, user research revealed several friction points that limited growth. They needed a complete redesign that would expand their audience while retaining what existing users loved.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="font-bold text-black flex items-center gap-2">
                <Target className="w-5 h-5 text-[#c4ff4d]" />
                Goals We Set
              </h4>
              {[
                'Expand the user base significantly',
                'Increase session duration and engagement',
                'Launch redesigned mobile experience',
                'Reduce support tickets through better UX'
              ].map((goal, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-sm">{goal}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-black flex items-center gap-2">
                <Users className="w-5 h-5 text-[#c4ff4d]" />
                User Insights
              </h4>
              {[
                'Users wanted better search and discovery',
                'Trust signals were critical for engagement',
                'Performance data needed clearer visualization',
                'Community features were highly requested'
              ].map((insight, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#c4ff4d] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-sm">{insight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">Our Process</p>
          
          <h2 className="text-3xl md:text-4xl font-black text-black mb-8">
            From research to launch in phases
          </h2>

          <div className="space-y-10">
            <div className="border-l-4 border-[#c4ff4d] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Phase 1: Discovery</h3>
              <p className="text-gray-700 leading-relaxed">
                We conducted unmoderated usability tests to understand how users navigated the existing platform. Through user segmentation and surveys, we identified our core demographic—sports fans who wanted deeper engagement than traditional apps offered. Competitive research across sports apps and financial platforms helped inform our design direction.
              </p>
            </div>

            <div className="border-l-4 border-[#c4ff4d] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Phase 2: Design</h3>
              <p className="text-gray-700 leading-relaxed">
                We created comprehensive site maps and user flows before moving to wireframes. Multiple rounds of low-fidelity designs let us test assumptions quickly. High-fidelity mockups focused on data visualization clarity and intuitive navigation patterns that felt natural to sports fans.
              </p>
            </div>

            <div className="border-l-4 border-[#c4ff4d] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Phase 3: Development</h3>
              <p className="text-gray-700 leading-relaxed">
                We built responsive native applications using React Native for mobile and React for web interfaces. Real-time data feeds, performance charts, and notification systems were core technical challenges we solved. Extensive testing ensured stability across devices and use cases.
              </p>
            </div>

            <div className="border-l-4 border-[#c4ff4d] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Phase 4: Launch & Optimization</h3>
              <p className="text-gray-700 leading-relaxed">
                The launch was timed strategically with the sports season. We supported the initial rollout with marketing assets and monitored user behavior closely, making iterative improvements based on real usage data. App store optimization helped drive organic discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 bg-surface-lime relative">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-600 uppercase mb-4 tracking-wider">Results</p>
          
          <h2 className="text-3xl md:text-4xl font-black text-black mb-8">
            Strong adoption and successful exit
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Launch week exceeded expectations with significant new user registrations. More importantly, engagement metrics showed users weren't just downloading—they were staying, exploring, and becoming active community members. Session times increased substantially compared to the previous version.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed" data-testid="text-results-2">
            App store reviews reflected the improved experience, with users praising the intuitive interface and valuable performance insights. In Q1 2023, following two successful seasons and demonstrated product-market fit, the platform was acquired by a US-based sports media company. The acquisition included the technology stack, user base, and our original design system. The founding team stayed through the transition period to ensure continuity.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6" data-testid="testimonial-block">
            <p className="text-gray-600 italic" data-testid="text-testimonial">
              "The redesigned platform completely changed how our users engaged with us. Session times more than tripled, and the quality of community discussions improved dramatically. The acquisition validated everything we built together."
            </p>
            <p className="text-sm font-bold text-gray-800 mt-4" data-testid="text-testimonial-author">— Product Lead</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Building a Platform? Let's Talk.</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're launching a new product or redesigning an existing one, we bring the same strategic approach and execution quality to every project.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="default" className="group btn-shimmer glow-lime" data-testid="button-contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 px-4 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-2 tracking-wider text-center">More Projects</p>
          <h2 className="text-2xl md:text-3xl font-black text-center mb-12 text-black">
            Related case studies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedCases.map((caseStudy) => (
              <Link key={caseStudy.id} href={caseStudy.link}>
                <Card className="overflow-hidden hover-lift cursor-pointer h-full border border-gray-200" data-testid={`card-case-study-${caseStudy.id}`}>
                  <div className="relative h-48 overflow-hidden image-reveal">
                    <img
                      src={caseStudy.image}
                      alt={`${caseStudy.title} case study thumbnail - OARC Digital portfolio`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      data-testid={`img-case-study-${caseStudy.id}`}
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-xs font-bold text-gray-500 uppercase mb-2 tracking-wider">Case Study</p>
                    <h3 className="text-lg font-black text-black mb-2">{caseStudy.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{caseStudy.subtitle}</p>
                    <div className="flex items-center text-[#4a7000] font-bold text-sm">
                      <span>View Project</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
