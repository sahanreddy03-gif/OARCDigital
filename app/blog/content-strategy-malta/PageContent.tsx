import Layout from '@/components/layout/Layout';
import Link from 'next/link';

const faqs = [
  {
    question: 'What is a content strategy and why do Malta businesses need one?',
    answer: 'A content strategy is a documented plan that defines what content you create, for whom, on which platforms, and with what objectives. Most Malta businesses produce content reactively — a photo when they remember, a post when inspiration strikes, a blog article when someone suggests it. A content strategy replaces random activity with a system that builds audience, authority, and search rankings over time. The compound effect is significant: a Malta business that publishes two quality blog posts per week builds a catalogue of 100+ ranking articles within a year, each generating organic traffic. Without a strategy, most businesses publish sporadically and see almost no cumulative return on their content investment.',
  },
  {
    question: 'What content types work best for Malta businesses?',
    answer: 'The most effective content types vary by business category, but three consistently perform across Malta industries. First, educational content that answers questions your potential customers are actively searching: "how to choose a marketing agency in Malta", "best restaurants in Valletta with sea views", "what does company incorporation in Malta involve". This content ranks on Google and positions you as the authority in your space. Second, social proof content — case studies, client results, before-and-after comparisons — that reduces buying risk for prospective customers. Third, local and cultural content that connects with Maltese audiences specifically: content referencing local events, Malta-specific challenges, or Maltese cultural moments consistently outperforms generic content in the local market.',
  },
  {
    question: 'How often should a Malta business publish content?',
    answer: 'Consistency matters more than frequency. A Malta business that publishes one high-quality, well-researched blog post per week will outperform a business that publishes five rushed articles per week in terms of search rankings, audience trust, and lead generation. For social media, the optimal posting frequency for Malta businesses is 4–5 times per week on Instagram, 3–4 times per week on Facebook (particularly for the 30+ Maltese demographic that still uses Facebook heavily), and daily on LinkedIn for B2B companies. The key is building a content calendar that can be maintained sustainably — overcommitting and then going silent is more damaging than a lower but consistent output.',
  },
  {
    question: 'How does content strategy relate to SEO in Malta?',
    answer: 'Content strategy and SEO are inseparable. Every piece of content you create is an opportunity to rank on Google for a relevant search query. A well-executed content strategy systematically targets keywords that Malta customers are searching — both high-volume broad terms ("marketing agency Malta") and lower-volume but high-intent terms ("Google Ads management for restaurants Malta"). The SEO value of content is cumulative: each ranking article generates traffic indefinitely, unlike paid advertising which stops the moment you stop paying. Malta businesses that invest in content strategy with an SEO lens typically see a 3–5x increase in organic traffic within 12 months, building a channel that generates leads at near-zero marginal cost.',
  },
  {
    question: 'Should Malta businesses invest in video content?',
    answer: 'Yes — video is the highest-engagement content format across every platform Malta businesses use. On Instagram Reels, TikTok, and Facebook, video content consistently reaches 3–5x more people than static image posts. For restaurants and hospitality businesses in Valletta and Sliema, short-form video showing food preparation, atmosphere, and customer experiences directly drives bookings. For B2B companies, thought leadership video content on LinkedIn and YouTube builds trust faster than any written format. The barrier for Malta businesses is often production — but high-quality video for social media does not require a professional crew. A smartphone, good natural lighting, and a clear story idea are sufficient for content that performs on TikTok and Instagram Reels.',
  },
];

export default function ContentStrategyMalta() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Content Strategy Malta: Build Authority and Drive Traffic in 2025',
    description: 'How Malta businesses build content strategies that generate organic traffic, establish authority, and create compounding returns long after the initial investment.',
    author: { '@type': 'Organization', name: 'OARC Digital', url: 'https://oarcdigital.com' },
    publisher: {
      '@type': 'Organization',
      name: 'OARC Digital',
      logo: { '@type': 'ImageObject', url: 'https://oarcdigital.com/oarc-logo.png' },
    },
    datePublished: '2025-03-01',
    dateModified: '2026-04-01',
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-[#ff914d] text-sm font-semibold mb-4 uppercase tracking-wider">OARC Digital — Malta</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Content Strategy Malta: Build Authority and Drive Traffic in 2025
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Malta businesses don't need more content — they need content that compounds. A proper content strategy turns every article, video, and post into a long-term asset that generates traffic and leads without ongoing spend.
            </p>
            <Link href="/contact">
              <button className="bg-[#ff914d] hover:bg-[#e8823e] text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                Get a Free Strategy Session
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-16">

          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Problem With How Malta Businesses Create Content</h2>
          <p className="text-lg text-gray-700 mb-6">
            Walk through any business district in Valletta, Sliema, or St Julian's and ask business owners about their content marketing — most will tell you they "post on Instagram when they can" and "have a blog they haven't updated in six months." This is not a time problem or a resources problem. It is a strategy problem.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Content without strategy is noise. A post that gets 30 likes today and is forgotten tomorrow generates no compounding return. A well-researched article that ranks on page one of Google for a relevant Malta search term generates enquiries every single day without any additional effort or spend. The difference between these two outcomes is not talent or budget — it is whether you have a documented strategy that treats content as an investment rather than a chore.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Building Your Content Strategy: The OARC Framework</h2>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Step 1: Define Your Audience Precisely</h3>
          <p className="text-lg text-gray-700 mb-6">
            "Malta businesses" is not an audience. "Malta restaurant owners with 2–5 locations who are struggling to stand out on social media and need help with content creation" is an audience. The more precisely you define who your content is for, the more resonant and effective it becomes. For each audience segment, document: what problems keep them up at night, what questions they are actively searching, what objections they have to buying your services, and what outcome they are ultimately seeking.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Step 2: Build Your Topic Clusters</h3>
          <p className="text-lg text-gray-700 mb-6">
            Modern SEO-aligned content strategy uses topic clusters: a comprehensive "pillar page" covering a broad topic in depth, supported by multiple "cluster content" pieces covering specific subtopics in detail. For a Malta marketing agency, the pillar page might be "Digital Marketing Malta" (comprehensive guide), supported by cluster articles on email marketing, LinkedIn marketing, Google Ads, local SEO, and so on — all linking back to the pillar.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Topic clusters signal to Google that you are a comprehensive authority on your subject, not just a creator of isolated content pieces. This structure consistently outperforms scattered content creation in search rankings.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Step 3: Keyword Research for Malta</h3>
          <p className="text-lg text-gray-700 mb-6">
            Before creating any content, understand what your target audience is actually searching for in Malta. Use tools like Google Search Console (free), Ahrefs, or SEMrush to identify search terms with meaningful monthly volume and realistic ranking potential. For Malta, even "low-volume" terms (50–200 monthly searches) can drive significant business because each searcher is highly targeted — they are actively looking for what you offer.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Step 4: Content Calendar and Production</h3>
          <p className="text-lg text-gray-700 mb-6">
            A content calendar maps your content production to specific dates, platforms, and objectives. For a Malta business targeting both SEO and social media, a typical week might include: two blog articles (optimised for search), five Instagram posts, three LinkedIn posts, two TikTok/Reels, and one email newsletter to subscribers. Build your calendar at least two weeks in advance to allow for quality production rather than last-minute reactive content.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Distribution: Creating Content Once, Sharing It Everywhere</h2>
          <p className="text-lg text-gray-700 mb-6">
            The most efficient content strategy for Malta businesses follows a "create once, distribute everywhere" principle. A single well-researched blog article can become: five LinkedIn posts, ten Instagram carousel slides, three TikTok scripts, one email newsletter, and a GBP update. This content atomisation approach maximises the return on every piece of content created.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our <Link href="/services"><span className="text-[#ff914d] font-semibold hover:underline">content marketing services</span></Link> include full content strategy development, production, and distribution management for Malta businesses. We also offer <Link href="/ai-agents"><span className="text-[#ff914d] font-semibold hover:underline">AI-powered content systems</span></Link> that streamline content creation while maintaining quality and brand consistency.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Measuring Content Strategy Success</h2>
          <p className="text-lg text-gray-700 mb-4">The metrics that matter for Malta content strategy:</p>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-6 space-y-2">
            <li><span className="font-semibold">Organic traffic growth:</span> Is more organic search traffic reaching your website month-over-month?</li>
            <li><span className="font-semibold">Keyword rankings:</span> Are your articles ranking in top 10 for target search terms?</li>
            <li><span className="font-semibold">Content-generated leads:</span> How many enquiries mention finding you through a specific article or piece of content?</li>
            <li><span className="font-semibold">Social reach and engagement:</span> Is your audience growing? Are they engaging meaningfully?</li>
            <li><span className="font-semibold">Email list growth:</span> Is your content converting visitors into email subscribers for longer-term nurturing?</li>
          </ul>

          {/* FAQ Section */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-[#ff914d] rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business in Malta?</h2>
            <p className="text-lg mb-8 opacity-90">OARC Digital is Malta's first Creative + AI Systems Agency.</p>
            <Link href="/contact">
              <button className="bg-white text-[#ff914d] font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg">
                Book a Free Call
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
