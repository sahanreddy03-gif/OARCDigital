import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { SiInstagram, SiPinterest, SiSnapchat, SiTiktok, SiYoutube } from 'react-icons/si';
import Layout from '@/components/layout/Layout';

export default function BodyShopCaseStudy() {
  const relatedCases = [
    {
      id: 'tefal',
      title: 'Tefal',
      subtitle: 'Selling out product lines of household products for Tefal.',
      image: '/placeholder-tefal.jpg',
      link: '/case-studies/tefal'
    },
    {
      id: 'dont-make-ads',
      title: "Don't Make Ads",
      subtitle: "TikTok's authentic success stories garner 2 million likes and 400K NEW followers.",
      image: '/placeholder-tiktok.jpg',
      link: '/case-studies/dont-make-ads'
    },
    {
      id: 'azzaro',
      title: 'Azzaro',
      subtitle: 'Introducing a luxury fragrance Azzaro to the TikTok community.',
      image: '/placeholder-azzaro.jpg',
      link: '/case-studies/azzaro'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(https://sociallypowerful.com/wp-content/uploads/2023/07/The-Body-Shop-Social-Marketing-Agency.jpg)'
          }}
        />
        <div className="relative z-10 text-center px-4 py-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-4" data-testid="heading-case-study-title">
            Raising awareness of The Body Shop's brand activism in the Middle-East.
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">About</p>
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            Empowering Change and Elevating Sales: The Body Shop's 18-Month Influencer Journey.
          </h2>
          
          <p className="text-base text-black leading-relaxed mb-6">
            The Body Shop embarked on an innovative 18-month influencer program designed to redefine its image as a brand championing women's empowerment, community engagement, and fair trade values. This initiative not only challenged conventions in the Middle East but also drove sales both online and in-store.
          </p>

          <p className="text-base text-black leading-relaxed mb-12">
            The primary aim of the 18-month influencer program was twofold: first, to position The Body Shop as a brand committed to meaningful causes, particularly women's empowerment; and second, to strategically boost sales across its product range, leveraging both online and physical retail spaces.
          </p>

          {/* Campaign Overview Box */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-black text-black mb-6">
              Breaking boundaries, with powerful stories.
            </h3>
            
            <div className="space-y-6">
              {/* Platforms */}
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase mb-3 tracking-wider">Platforms</p>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <SiInstagram className="w-6 h-6 text-black" />
                    <span className="text-sm font-semibold text-black">Instagram</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiPinterest className="w-6 h-6 text-black" />
                    <span className="text-sm font-semibold text-black">Pinterest</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiSnapchat className="w-6 h-6 text-black" />
                    <span className="text-sm font-semibold text-black">Snapchat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiTiktok className="w-6 h-6 text-black" />
                    <span className="text-sm font-semibold text-black">TikTok</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiYoutube className="w-6 h-6 text-black" />
                    <span className="text-sm font-semibold text-black">YouTube</span>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase mb-3 tracking-wider">Services</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-base text-black">Influencer Marketing</span>
                  <span className="text-base text-black">Community Management</span>
                  <span className="text-base text-black">Paid Media</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats - Pink Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FF0080] rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">30M</div>
              <div className="text-sm font-semibold uppercase">Impressions</div>
            </div>
            <div className="bg-[#FF0080] rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">15%</div>
              <div className="text-sm font-semibold uppercase">Uplift in Sales</div>
            </div>
            <div className="bg-[#FF0080] rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">17M</div>
              <div className="text-sm font-semibold uppercase">Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-[#FF0080] mb-8 uppercase">
            Challenge
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-black text-white mb-6">
            Ethical Branding and Empowerment in the Middle East.
          </h3>
          
          <div className="space-y-4 text-white text-base leading-relaxed mb-8">
            <p>
              In the evolving landscape of the Middle East, Generations Y and Z have emerged as discerning consumers who place significant importance on the ethical and social impact of the brands they support. These demographics seek more than just products; they yearn for a deeper connection with brands that act as catalysts for positive change within their communities. The contemporary consumer mindset in the region has shifted towards a greater consciousness of the environment and society, with these younger generations expecting transparency, authenticity, and purpose-driven initiatives from the brands they choose to engage with.
            </p>
            
            <p>
              The Middle East, often characterized by its vibrant youth population, is an arena where the influence of key opinion leaders cannot be underestimated. Generations Y and Z have embraced digital platforms, allowing influencers and thought leaders to shape perceptions and steer preferences. The power of these figures as conduits of information and values presents an unparalleled opportunity for brands to leverage cause-driven campaigns. Engaging with these influencers enables brands to tap into the values and aspirations of these demographics, creating meaningful connections that extend beyond transactional relationships.
            </p>
          </div>

          {/* Challenge Images - Placeholder for Instagram embeds */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg aspect-square flex items-center justify-center">
              <span className="text-gray-400 text-sm">Instagram Post 1</span>
            </div>
            <div className="bg-gray-800 rounded-lg aspect-square flex items-center justify-center">
              <span className="text-gray-400 text-sm">Instagram Post 2</span>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-[#FF0080] mb-8 uppercase">
            Strategy
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-black text-black mb-6">
            Curating Authentic Voices for Impactful Change.
          </h3>
          
          <div className="space-y-4 text-black text-base leading-relaxed">
            <p>
              Our strategy revolved around harnessing the power of authentic voices to amplify The Body Shop's commitment to women's empowerment and social responsibility. We meticulously curated a diverse group of influencers across the Middle East who embodied the brand's values and resonated with the target audience.
            </p>
            
            <p>
              The campaign was structured around key moments throughout the year, aligning with cultural events, product launches, and cause-driven initiatives. Each influencer partnership was designed to tell a unique story that highlighted The Body Shop's dedication to fair trade, sustainability, and community empowerment, while also showcasing their product range in authentic, relatable contexts.
            </p>
            
            <p>
              By creating a consistent narrative across multiple platforms—Instagram, TikTok, Snapchat, Pinterest, and YouTube—we ensured maximum reach and engagement. The content ranged from educational posts about The Body Shop's ethical sourcing to personal stories of empowerment, all designed to inspire action and drive both brand affinity and sales.
            </p>
          </div>

          {/* Strategy Images - Placeholder */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
              <span className="text-gray-400 text-sm">Strategy Image 1</span>
            </div>
            <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
              <span className="text-gray-400 text-sm">Strategy Image 2</span>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-[#FF0080] mb-8 uppercase">
            Results
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-black text-white mb-6">
            Driving Meaningful Impact and Measurable Growth.
          </h3>
          
          <div className="space-y-4 text-white text-base leading-relaxed mb-12">
            <p>
              The 18-month influencer program delivered exceptional results that exceeded expectations. By partnering with authentic voices who genuinely believed in The Body Shop's mission, we created a ripple effect of awareness and engagement across the Middle East.
            </p>
            
            <p>
              The campaign successfully repositioned The Body Shop as a purpose-driven brand in the minds of Middle Eastern consumers, particularly among Gen Y and Z audiences. The authentic storytelling resonated deeply, resulting in increased brand loyalty, stronger community engagement, and a significant uplift in sales both online and in physical stores.
            </p>
          </div>

          {/* Results Stats - Pink Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FF0080] rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">30M</div>
              <div className="text-sm font-semibold uppercase">Total Impressions</div>
            </div>
            <div className="bg-[#FF0080] rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">15%</div>
              <div className="text-sm font-semibold uppercase">Sales Uplift</div>
            </div>
            <div className="bg-[#FF0080] rounded-2xl p-8 text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-2">17M</div>
              <div className="text-sm font-semibold uppercase">Total Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Project Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 uppercase" data-testid="heading-start-project">
            START PROJECT
          </h2>

          <p className="text-base text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
            Socially Powerful is a global leading social media and influencer marketing agency, with offices across Europe, USA, Asia and the Middle-East.
          </p>

          <p className="text-base text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
            If you'd like to speak to our team about how we can help you take your brand to another level and engage audiences globally, please complete our contact form.
          </p>

          <Link href="/contact">
            <button className="inline-flex items-center gap-3 bg-[#FF0080] text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2" data-testid="button-lets-talk">
              LET'S TALK.
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-[#FF0080]" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-12 uppercase text-center">
            Related Case Studies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedCases.map((caseStudy) => (
              <Link key={caseStudy.id} href={caseStudy.link}>
                <Card className="overflow-hidden hover-elevate cursor-pointer" data-testid={`card-case-study-${caseStudy.id}`}>
                  <div className="aspect-video bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      {caseStudy.title} Image
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-black text-black mb-2">{caseStudy.title}</h3>
                    <p className="text-sm text-gray-600">{caseStudy.subtitle}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 uppercase" data-testid="heading-get-in-touch">
            GET IN TOUCH
          </h2>

          <p className="text-base text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
            Socially Powerful is a global leading social media and influencer marketing agency, with offices across Europe, USA, Asia and the Middle-East.
          </p>

          <p className="text-base text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
            If you'd like to speak to our team about how we can help you take your brand to another level and engage audiences globally, please complete our contact form.
          </p>

          <Link href="/contact">
            <Button 
              className="bg-[#FF0080] hover:bg-[#FF0080] text-white rounded-full px-8 py-6 text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-contact"
            >
              CONTACT US
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
