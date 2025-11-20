import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Calendar, Building2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { caseStudiesSEO } from '@/data/seoMetadata';
import heroImg from '@assets/stock_images/ai_chatbot_customer__a2c79604.jpg';
import img1 from '@assets/stock_images/ai_chatbot_customer__070fc7ce.jpg';
import img2 from '@assets/stock_images/ai_chatbot_customer__fad0f638.jpg';
import img3 from '@assets/stock_images/ai_chatbot_customer__7c3539e1.jpg';
import img4 from '@assets/stock_images/ai_chatbot_customer__aab38c78.jpg';
import img5 from '@assets/stock_images/ai_software_developm_725be51d.jpg';
import img6 from '@assets/stock_images/ai_software_developm_2652993c.jpg';
import img7 from '@assets/stock_images/ai_software_developm_58a580cd.jpg';
import img8 from '@assets/stock_images/team_collaboration_b_c8b7e41b.jpg';
import img9 from '@assets/stock_images/business_strategy_co_75cf4bec.jpg';

export default function FanDuelChuckGPT() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={caseStudiesSEO.fanDuelChuckGPT.title}
        description={caseStudiesSEO.fanDuelChuckGPT.description}
        canonicalUrl={`https://oarcdigital.com${caseStudiesSEO.fanDuelChuckGPT.path}`}
        ogType={caseStudiesSEO.fanDuelChuckGPT.ogType}
      />
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="AI chatbot technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="heading-case-study-title">
              FanDuel's ChuckGPT: Zero to Tens of Thousands in Hours
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              Building a viral AI chatbot that extended a TV campaign into an interactive digital experience
            </p>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-5 w-5 text-[#5FD4C4]" />
                <h3 className="text-sm font-semibold text-gray-500 uppercase">Industry</h3>
              </div>
              <p className="text-lg font-bold text-black">Sports Betting & Entertainment</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-[#5FD4C4]" />
                <h3 className="text-sm font-semibold text-gray-500 uppercase">Timeline</h3>
              </div>
              <p className="text-lg font-bold text-black">6 Weeks</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-[#5FD4C4]" />
                <h3 className="text-sm font-semibold text-gray-500 uppercase">Service</h3>
              </div>
              <p className="text-lg font-bold text-black">AI Engineering</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
            The Challenge
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            FanDuel had a successful TV advertising campaign featuring NBA legend Charles Barkley. The campaign was generating buzz, but it was limited to traditional media. They wanted to extend the campaign into digital channels in a way that would create genuine user engagement and social sharing—not just another banner ad.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            The vision: create an AI-powered chatbot that mimicked Charles Barkley's personality so users could actually "talk" to Chuck. This would extend the campaign beyond passive viewing into active participation, driving engagement and brand affinity.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            But there was a catch: the chatbot needed to launch quickly to capitalize on the TV campaign momentum, it had to scale instantly to handle viral traffic, and most critically—it needed multi-layer content moderation to protect the brand while maintaining Chuck's authentic personality.
          </p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-8 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={img1} 
              alt="AI chatbot interface"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <img 
              src={img2} 
              alt="User engagement"
              className="w-full h-64 object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
            Our Approach
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            OARC Digital built ChuckGPT—a custom AI chatbot powered by OpenAI technology with sophisticated personality modeling, brand guardrails, and infrastructure designed to handle massive scale from day one.
          </p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Personality Modeling & AI Training</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We developed a custom AI model that captured Charles Barkley's unique voice, humor, and personality. Using OpenAI's technology combined with proprietary training on Chuck's speech patterns and style, we created an AI that felt authentically "Chuck" while maintaining brand safety.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Multi-Layer Content Moderation</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We implemented sophisticated content moderation with multiple layers of AI-powered filtering and brand guardrails. This ensured ChuckGPT maintained the authentic Barkley personality users loved while protecting FanDuel's brand from any inappropriate content—a critical balance for a public-facing AI.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Viral-Ready Infrastructure</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We built ChuckGPT on cloud infrastructure designed to scale instantly. When the chatbot went viral within hours of launch, it seamlessly handled the surge from zero to tens of thousands of concurrent users without any downtime or performance degradation.
              </p>
            </div>

            <div className="border-l-4 border-[#5FD4C4] pl-6">
              <h3 className="text-xl font-bold text-black mb-3">Physical & Digital Integration</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Beyond the digital chatbot, we powered a physical ChuckGPT device used during live TNT broadcasts and Reddit AMA events. This multi-platform approach extended the campaign's reach and created unique content opportunities across channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Large Image */}
      <section className="py-8 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <img 
            src={img3} 
            alt="AI technology platform"
            className="w-full h-[500px] object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-8">
            The Results
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-black rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-[#FF0080] mb-3">
                10,000+
              </div>
              <p className="text-sm text-white">
                Users Within Hours of Launch
              </p>
            </div>
            <div className="text-center p-8 bg-black rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-[#FF0080] mb-3">
                Viral
              </div>
              <p className="text-sm text-white">
                Social Media Sharing
              </p>
            </div>
            <div className="text-center p-8 bg-black rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-[#FF0080] mb-3">
                Zero
              </div>
              <p className="text-sm text-white">
                Downtime During Viral Surge
              </p>
            </div>
          </div>

          <div className="bg-zinc-50 border-l-4 border-[#5FD4C4] p-8 rounded-r-2xl">
            <p className="text-lg text-gray-700 italic mb-4 leading-relaxed">
              "OARC Digital took our TV campaign and transformed it into an interactive digital experience that fans absolutely loved. ChuckGPT went viral within hours and handled the surge flawlessly. The engagement and social sharing exceeded our wildest expectations."
            </p>
            <p className="text-base font-bold text-black">
              Marketing Director, FanDuel
            </p>
          </div>
        </div>
      </section>

      {/* Image Grid 2 */}
      <section className="py-8 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <img 
              src={img4} 
              alt="Customer engagement"
              className="w-full h-56 object-cover rounded-2xl"
            />
            <img 
              src={img5} 
              alt="AI development"
              className="w-full h-56 object-cover rounded-2xl"
            />
            <img 
              src={img6} 
              alt="Engineering team"
              className="w-full h-56 object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
            Campaign Impact
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            ChuckGPT wasn't just a technical success—it fundamentally transformed FanDuel's campaign ROI and brand engagement:
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Extended TV campaign reach:</strong> Transformed passive TV viewers into active digital participants who could "talk" to Chuck
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Massive social amplification:</strong> Users shared their conversations with ChuckGPT across social media, creating organic reach far beyond paid media
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Multi-platform activation:</strong> Physical ChuckGPT device powered live TNT broadcasts and Reddit AMAs, creating unique content moments
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Brand-safe innovation:</strong> Multi-layer moderation allowed authentic personality while protecting brand reputation
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#5FD4C4] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base text-gray-700">
                <strong>Instant viral scalability:</strong> Infrastructure handled tens of thousands of users within hours without performance issues
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Final Images */}
      <section className="py-8 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={img7} 
              alt="Digital innovation"
              className="w-full h-72 object-cover rounded-2xl"
            />
            <img 
              src={img8} 
              alt="Team collaboration"
              className="w-full h-72 object-cover rounded-2xl"
            />
          </div>
          <div className="mt-4">
            <img 
              src={img9} 
              alt="Campaign success"
              className="w-full h-96 object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Build Your AI-Powered Experience
          </h2>
          <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
            Like FanDuel, create viral AI experiences that engage users and extend your campaigns.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-[#5FD4C4] text-black rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-build-ai"
            >
              Build Your AI
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Get In Touch */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-black mb-4">
            Get In Touch
          </h2>
          <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
            Ready to build AI-powered customer experiences? Let's discuss your vision.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-contact-us"
            >
              Contact Us
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-black" />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
