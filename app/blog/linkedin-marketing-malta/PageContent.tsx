import Layout from '@/components/layout/Layout';
import Link from 'next/link';

const faqs = [
  {
    question: 'Is LinkedIn worth using for B2B marketing in Malta?',
    answer: 'Yes — LinkedIn is the most effective B2B lead generation platform for Malta businesses targeting professional decision-makers. Malta has a concentrated business ecosystem across iGaming, financial services, fintech, maritime, and professional services where LinkedIn activity is high. Senior decision-makers in Valletta\'s financial district and St Julian\'s iGaming companies check LinkedIn regularly. Unlike cold email, LinkedIn allows you to build warm relationships over time through content and engagement before ever sending a connection request. For B2B companies selling services above €2,000/month, LinkedIn is consistently the highest-quality lead source.',
  },
  {
    question: 'What type of content works on LinkedIn for Maltese companies?',
    answer: 'LinkedIn content that performs well for Malta companies falls into three categories. First, thought leadership: genuine insights about your industry that demonstrate expertise without selling. Second, case studies and results: specific outcomes you delivered for clients, ideally with numbers. Third, behind-the-scenes content: how your team works, what your process looks like, and what problems you solve. For Malta specifically, content that addresses the unique business environment — EU regulations, cross-border business, the Malta startup ecosystem, iGaming compliance — tends to resonate strongly because it is hyper-relevant to the local audience. Avoid posting generic motivational content or corporate announcements — these get almost no engagement.',
  },
  {
    question: 'Should I post as an individual or as my company page on LinkedIn?',
    answer: 'For most Malta B2B businesses, personal profiles significantly outperform company pages for organic reach and engagement. LinkedIn\'s algorithm heavily favours individual profiles over company pages — a post from your personal profile will typically receive 5–10x more reach than the same post from your company page. The most effective strategy is to have the founder or CEO post consistently from their personal profile (3–4 times per week), while the company page shares these posts and publishes company updates. If you have multiple senior people, get all of them active on LinkedIn. Each person\'s network is a separate audience you can reach for free.',
  },
  {
    question: 'How does LinkedIn Sales Navigator help Malta B2B companies?',
    answer: 'LinkedIn Sales Navigator is a paid tool (approximately €79–€135/month) that provides advanced search filters for identifying ideal prospects. For Malta B2B companies, it is particularly powerful because you can filter by company size, industry, seniority level, and location — allowing you to identify every Head of Marketing at iGaming companies in St Julian\'s, or every Operations Director at manufacturing companies in Qormi and Birkirkara. The key is using it to build targeted prospect lists and then engaging with those individuals through content before sending connection requests. Sales Navigator also alerts you when prospects change jobs or post on LinkedIn, creating natural conversation starters.',
  },
  {
    question: 'How long does it take to see results from LinkedIn marketing in Malta?',
    answer: 'LinkedIn is a slow burn compared to paid advertising, but the leads it generates are typically higher quality and further along the buying journey. Most Malta B2B companies that post consistently (3–5 times per week) and engage actively with their network begin seeing meaningful enquiries within 60–90 days. The compound effect is significant — after 6 months of consistent activity, your posts reach a much larger audience, your profile ranks higher in searches, and you have established enough credibility that inbound enquiries become regular. Consistency is the non-negotiable. Posting once a week produces almost no results. Posting daily for 90 days changes your business.',
  },
];

export default function LinkedInMarketingMalta() {
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
    headline: 'LinkedIn Marketing Malta: B2B Lead Generation for Maltese Companies',
    description: 'How Malta B2B companies use LinkedIn to generate high-quality leads, build authority, and close bigger deals — without paid advertising.',
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
              LinkedIn Marketing Malta: B2B Lead Generation for Maltese Companies
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Malta's B2B market is small, concentrated, and highly connected. LinkedIn is where deals are researched, relationships are built, and decisions are made — before anyone picks up the phone.
            </p>
            <Link href="/contact">
              <button className="bg-[#ff914d] hover:bg-[#e8823e] text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                Get a Free Strategy Session
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-16">

          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Malta B2B Opportunity on LinkedIn</h2>
          <p className="text-lg text-gray-700 mb-6">
            Malta has a uniquely concentrated B2B ecosystem. In sectors like iGaming, financial services, fintech, maritime, and professional services, decision-makers know each other, move between companies, and keep a close eye on what their peers are doing. This makes LinkedIn particularly powerful — in a small market, being consistently visible on LinkedIn means you are in the consideration set for every relevant deal, even when you are not actively pitching.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            The companies winning B2B deals in Malta right now are not necessarily the ones with the biggest budgets or the best cold email sequences. They are the ones whose founders and senior team members are visible on LinkedIn — posting useful content, engaging in relevant conversations, and building the kind of ambient credibility that means when a prospect finally has a need, your company is the first name that comes to mind.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Optimising Your LinkedIn Profile for Malta B2B</h2>
          <p className="text-lg text-gray-700 mb-6">
            Before posting a single piece of content, your LinkedIn profile must be optimised for the searches your ideal clients are making. Malta decision-makers searching for marketing agencies, technology providers, legal firms, or financial services consultants use LinkedIn's search function exactly as they would use Google.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Profile Optimisation Checklist</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-6 space-y-2">
            <li>Headline: your specific value proposition, not just your job title. "Helping Malta iGaming companies reduce compliance costs" outperforms "CEO at XYZ Ltd"</li>
            <li>About section: written for your ideal client, not as a CV. What problem do you solve? Who do you solve it for? What results have you delivered?</li>
            <li>Featured section: case studies, articles, or results that demonstrate your expertise immediately</li>
            <li>Experience section: written with outcomes, not responsibilities. "Grew client revenue by €2M in 18 months" vs "Managed client accounts"</li>
            <li>Skills and endorsements: include the specific technical and industry terms your Malta clients search for</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Content Strategy for LinkedIn in Malta</h2>
          <p className="text-lg text-gray-700 mb-6">
            The three content types that consistently generate B2B enquiries from Malta companies:
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Insight Posts</h3>
          <p className="text-lg text-gray-700 mb-6">
            Share a genuine observation about your industry that only someone with real expertise would notice. For a Malta iGaming marketing agency, this might be: "We analysed 50 Malta iGaming brands on Instagram last month. Only 12% were running retargeting campaigns. The other 88% are paying to acquire customers and then letting them leave without a second touchpoint." This kind of specific, data-backed insight immediately demonstrates expertise and generates comments from exactly the people you want to reach.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Case Studies and Results</h3>
          <p className="text-lg text-gray-700 mb-6">
            Nothing closes deals faster than documented results. A LinkedIn post that says "A financial services company in Valletta came to us with 12 leads per month from their website. After rebuilding their content strategy and running LinkedIn ads, they are generating 47 leads per month. Here is exactly what we changed:" — this type of post generates direct messages from companies with the same problem within 24 hours of posting.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Process and Behind-the-Scenes</h3>
          <p className="text-lg text-gray-700 mb-6">
            Malta's business community is relationship-driven. Showing how your team works, the decisions you make, and what your clients experience builds trust that generic marketing content never achieves. A post about a problem you solved for a client (without naming them), or a behind-the-scenes look at how you approach a specific challenge, humanises your company and makes decision-makers feel they already know how working with you would feel.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">LinkedIn Outreach Strategy for Malta</h2>
          <p className="text-lg text-gray-700 mb-6">
            Direct outreach on LinkedIn works — but only when done correctly. The Malta B2B community is small enough that bad outreach gets noticed and discussed. The cardinal rule: never pitch in a connection request or immediately after connecting. The sequence that works for Malta B2B is: connect with a personalised note referencing something specific (their recent post, shared connection, relevant event) → engage meaningfully on their content for 2–3 weeks → send a message referencing your engagement and opening a conversation, not pitching a service.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our <Link href="/services"><span className="text-[#ff914d] font-semibold hover:underline">digital marketing services</span></Link> include LinkedIn strategy, profile optimisation, and content creation for Malta B2B companies. We also offer <Link href="/ai-agents"><span className="text-[#ff914d] font-semibold hover:underline">AI-powered outreach systems</span></Link> that scale your LinkedIn prospecting without sacrificing the personal touch Malta's business community expects.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">LinkedIn Ads for Malta B2B</h2>
          <p className="text-lg text-gray-700 mb-6">
            LinkedIn advertising is more expensive than Facebook or Google on a cost-per-click basis, but for B2B companies targeting specific seniority levels and industries in Malta, it is often the most cost-effective option because you are paying only to reach people who fit your exact criteria. A campaign targeting CFOs at Malta financial services companies (100–500 employees) might have a small audience — but every click is from a genuinely relevant decision-maker.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            LinkedIn Lead Gen Forms are particularly effective for Malta B2B — they allow prospects to submit their contact information without leaving LinkedIn, which dramatically increases conversion rates compared to sending traffic to a landing page.
          </p>

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
