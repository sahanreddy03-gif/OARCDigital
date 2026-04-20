import Layout from '@/components/layout/Layout';
import Link from 'next/link';

const faqs = [
  {
    question: 'Do Facebook Ads still work in Malta in 2025?',
    answer: 'Yes — Facebook and Instagram ads (both managed through Meta\'s advertising platform) remain highly effective for Malta businesses in 2025. Despite the rise of TikTok, Facebook still reaches the majority of Maltese adults aged 25–65, and Instagram dominates the 18–35 demographic. The key change is that advertising on Meta requires more creative sophistication than in previous years — audiences are more ad-literate, and generic promotional content gets ignored. Malta businesses that invest in quality creative (video, lifestyle images, user-generated content-style ads) and precise audience targeting consistently achieve strong results across both platforms.',
  },
  {
    question: 'What is the best Meta Ads audience for Malta businesses?',
    answer: 'The most effective Meta Ads audiences for Malta businesses depend on your objective and business type. For local Malta businesses targeting existing demand, detailed targeting by location (Malta + specific towns like Sliema, St Julian\'s, Valletta) combined with interest targeting or job title targeting is effective. For eCommerce businesses, Custom Audiences built from website visitors and customer lists consistently outperform interest-based audiences — these are people who have already shown interest in your brand. Lookalike Audiences (1–3% similarity) created from your customer list or high-value website visitors typically generate the best balance of audience size and quality. Start by testing broad targeting against interest-based targeting — Meta\'s algorithm has become sophisticated enough that broad targeting often outperforms narrow targeting in many verticals.',
  },
  {
    question: 'How much should a Malta business spend on Facebook Ads?',
    answer: 'There is no single right answer — it depends entirely on your customer acquisition economics. However, there is a practical minimum below which you cannot gather enough data for the Meta algorithm to optimise effectively. For most Malta businesses, spending less than €10–15 per day does not provide enough conversion signal for the algorithm to work properly, and results will be inconsistent. A better framework is to calculate what you can afford to pay to acquire one new customer (your maximum customer acquisition cost), then back-calculate the budget needed to generate meaningful results. Most Malta SMBs running effective Meta Ads campaigns spend between €500–€3,000 per month, with results improving as the algorithm gathers more conversion data.',
  },
  {
    question: 'What ad formats work best for Malta businesses on Facebook and Instagram?',
    answer: 'Video ads consistently outperform static image ads across Meta platforms — they generate higher engagement, better algorithm favour, and more memorable brand impressions. For Malta businesses, the highest-performing video ad formats are: 15–30 second vertical videos for Instagram and Facebook Stories, short Reels-style content for Instagram Reels placements, and longer-form (60–90 second) video for Facebook feed placements targeting older Maltese demographics. For eCommerce, carousel ads showing multiple products consistently outperform single-image ads because they allow the algorithm to optimise which product image generates clicks for each user. User-generated content-style ads (filmed on phone, conversational tone) consistently outperform highly polished production in most Malta business categories.',
  },
  {
    question: 'How do I target tourists in Malta with Facebook Ads?',
    answer: 'Targeting tourists in Malta with Meta Ads is very achievable. The most precise option is to target people who are "currently in Malta" (a location targeting option that uses device GPS data) combined with excluding Maltese locals (target by language — exclude Maltese language). For forward planning, you can target people in key source markets (UK, Germany, Italy, France, Scandinavia) who have shown interest in travel to Malta or the Mediterranean. Tourism Malta and Visit Malta content engagement audiences can also be used as interest targets. For hotel and hospitality businesses, targeting people who have visited competitor hotels\' websites (via pixel-based custom audiences) or who engage with travel content is particularly effective.',
  },
];

export default function FacebookAdsMalta() {
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
    headline: 'Facebook Ads Malta: The Complete Guide to Meta Advertising in 2025',
    description: 'How Malta businesses use Facebook and Instagram ads to reach local customers, tourists, and B2B prospects — with targeting strategies, budget guidance, and creative formats that work.',
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
              Facebook Ads Malta: The Complete Guide to Meta Advertising in 2025
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Facebook and Instagram ads reach virtually every adult in Malta. Here is how to use Meta advertising to get customers — not just impressions.
            </p>
            <Link href="/contact">
              <button className="bg-[#ff914d] hover:bg-[#e8823e] text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                Get a Free Strategy Session
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-16">

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Meta Advertising in Malta: The Opportunity</h2>
          <p className="text-lg text-gray-700 mb-6">
            Meta's advertising platform (covering Facebook, Instagram, WhatsApp, and the Audience Network) gives Malta businesses access to highly granular targeting across one of the most-used sets of platforms in the country. Over 90% of Maltese internet users have a Facebook or Instagram account. The average Maltese user spends over 45 minutes per day on Meta platforms. For businesses trying to reach both local Maltese residents and the 2.9 million tourists who visit Malta annually, Meta Ads is one of the most precise tools available.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            The challenge is that Malta's consumer advertising market is increasingly competitive. Business owners in Valletta, Sliema, St Julian's, and beyond are all bidding for the same eyeballs. The businesses seeing the strongest results are those that combine sophisticated audience targeting with creative that actually stops the scroll.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Setting Up Meta Ads for Malta: The Foundation</h2>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">The Meta Pixel: Your Most Valuable Asset</h3>
          <p className="text-lg text-gray-700 mb-6">
            The Meta Pixel is a piece of code installed on your website that tracks visitor behaviour — page views, purchases, form submissions, add-to-cart events — and reports this data back to Meta. This data powers your most effective audience targeting (website custom audiences, lookalike audiences) and enables campaign optimisation based on actual business outcomes rather than just ad clicks.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Installing the Pixel before running any ads is non-negotiable. Every day you run ads without the Pixel installed is data you cannot recover. Malta businesses that install the Pixel and run even a small amount of traffic before launching major campaigns have significantly better results because the algorithm already has conversion data to work with.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Campaign Objectives That Drive Real Results</h3>
          <p className="text-lg text-gray-700 mb-6">
            The campaign objective you select determines what Meta's algorithm optimises for. The most common mistake Malta businesses make is selecting "Traffic" (optimises for clicks) instead of "Leads" or "Sales" (optimises for conversions). Traffic campaigns generate plenty of cheap clicks — but the people clicking are not necessarily the ones who will become customers. Always choose the objective that matches your actual business goal:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-6 space-y-2">
            <li><span className="font-semibold">Awareness:</span> For new Malta brand launches or reaching entirely new audiences</li>
            <li><span className="font-semibold">Traffic:</span> Only when you genuinely want website visits and have other conversion mechanisms in place</li>
            <li><span className="font-semibold">Engagement:</span> For building social proof on posts before promoting them</li>
            <li><span className="font-semibold">Leads:</span> For generating form completions, quote requests, or enquiries</li>
            <li><span className="font-semibold">Sales:</span> For eCommerce businesses with the Pixel tracking purchases</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Creative That Works on Malta Meta Ads</h2>
          <p className="text-lg text-gray-700 mb-6">
            In 2025, creative quality is the single biggest driver of Meta Ads performance. Two campaigns with identical targeting and budgets but different creative can generate results that differ by 300–500%. For Malta businesses, the creative formats that consistently outperform are:
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Video First</h3>
          <p className="text-lg text-gray-700 mb-6">
            Short-form vertical video (9:16 ratio, 15–30 seconds) performs best across Instagram and Facebook Stories and Reels placements — which receive premium algorithmic distribution. For Malta hospitality businesses, this means showing the food, the atmosphere, and the experience rather than telling people about it. For B2B companies, a 30-second explanation of the problem you solve and how you solve it, filmed simply on a phone, consistently outperforms expensive production.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Social Proof Ads</h3>
          <p className="text-lg text-gray-700 mb-6">
            Ads that feature real customer reviews, testimonials, or user-generated content consistently outperform branded promotional content. A video of a genuine customer talking about their experience at a Sliema restaurant outperforms any polished brand ad. For Malta businesses with strong review profiles on TripAdvisor or Google, incorporating specific quotes from reviews into ad creative builds immediate trust.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Our <Link href="/services"><span className="text-[#ff914d] font-semibold hover:underline">paid advertising services</span></Link> cover full Meta Ads management for Malta businesses, including campaign strategy, creative production, audience development, and monthly performance reporting. We work with restaurants in Valletta, retailers in Sliema, and B2B companies across Malta's CBD.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Meta Ads for Malta Tourism Businesses</h2>
          <p className="text-lg text-gray-700 mb-6">
            For Malta businesses that serve tourists — hotels, restaurants, experience providers, boat charters — Meta Ads offers unique capabilities for reaching visitors before and during their trip. Pre-arrival targeting in key source markets (UK, Germany, Italy, Scandinavia) allows Malta hospitality businesses to build awareness weeks before a tourist's visit, so that when they arrive and search for dining or experiences, your brand is already familiar.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            During peak season (May–October), in-Malta targeting (currently in Malta + English language) allows you to reach tourists on the island in real-time — promoting daily specials, last-minute availability, and experience bookings to people who are physically present and actively looking for things to do.
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
