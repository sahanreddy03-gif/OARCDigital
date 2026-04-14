import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { Link } from 'wouter';

const faqs = [
  {
    question: 'How much should a Malta business spend on Google Ads?',
    answer: 'The right Google Ads budget for a Malta business depends on your industry, competition level, and conversion economics. In less competitive Malta niches, a monthly budget can generate meaningful results. In highly competitive categories like insurance, legal services, or iGaming, cost-per-click is higher and budgets need to be larger to gather enough data for optimisation. The more important question is not how much to spend, but what your customer acquisition cost needs to be for the campaign to be profitable. If acquiring one new customer is worth €500 to your business, a campaign that acquires customers at €100 each is profitable at virtually any scale. Start with a clear understanding of your customer lifetime value before setting any budget.',
  },
  {
    question: 'What Google Ads campaign type works best for Malta businesses?',
    answer: 'For most Malta businesses, Search campaigns (text ads that appear when someone searches for your keywords) are the most effective starting point. They capture high-intent customers who are actively looking for what you offer — a person searching "accountant in Sliema" or "emergency plumber Malta" is ready to buy. Performance Max campaigns are worth considering once you have conversion data from Search campaigns, as they use Google AI to optimise across all Google channels simultaneously. Display and YouTube campaigns are better for brand awareness and remarketing to people who visited your website. The common mistake is running too many campaign types simultaneously before you have enough data to optimise any of them effectively.',
  },
  {
    question: 'Why are my Google Ads not converting in Malta?',
    answer: 'The most common reasons Malta Google Ads campaigns fail to convert are: targeting keywords with the wrong intent (people researching rather than buying), sending clicks to a generic homepage rather than a dedicated landing page matched to the ad\'s promise, not having strong enough trust signals on the landing page (reviews, credentials, local address), missing conversion tracking so you can\'t tell what\'s actually working, and bidding strategies that optimise for clicks rather than conversions. Most underperforming Google Ads campaigns in Malta can be fixed by auditing these five areas. Keyword match types are another frequent issue — broad match keywords can spend your entire budget on irrelevant searches if negative keywords aren\'t actively managed.',
  },
  {
    question: 'Should Malta businesses use Google Ads or Facebook Ads?',
    answer: 'Google Ads and Facebook Ads serve different purposes and work best in combination. Google Ads captures existing demand — people actively searching for your product or service. Facebook Ads create new demand — reaching people who aren\'t searching but would be interested if they knew about you. For Malta businesses where there is clear search demand (restaurants, legal services, tradespeople, hotels), Google Ads typically generates higher-converting leads because the intent is explicit. For businesses with a new concept, a product people don\'t know they need yet, or a strong visual product, Facebook and Instagram ads are more effective at generating awareness and interest. Many successful Malta businesses run both channels with separate budgets and objectives.',
  },
  {
    question: 'How do I know if my Google Ads agency in Malta is doing a good job?',
    answer: 'The key metrics to review with your Malta Google Ads agency are: click-through rate (above 5% for Search campaigns is good), conversion rate (how many clicks become leads or sales), cost per conversion (improving month-over-month as the campaign optimises), impression share (are you showing for enough of the relevant searches?), and quality score (a Google metric that affects how much you pay per click — higher is better). Red flags include an agency that only reports impressions and clicks without conversion data, campaigns running without negative keyword lists, ads sending traffic to your homepage instead of dedicated landing pages, and month-over-month costs increasing without corresponding improvement in leads or sales.',
  },
];

export default function GoogleAdsMalta() {
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
    headline: 'Google Ads Malta: Get More Customers Without Wasting Budget',
    description: 'The complete guide to Google Ads for Malta businesses. Learn how to set up campaigns that convert, avoid common budget mistakes, and measure what actually matters.',
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
      <SEOHead
        title="Google Ads Malta: Get More Customers Without Wasting Budget | OARC Digital"
        description="The complete guide to Google Ads for Malta businesses. Learn how to set up campaigns that convert, avoid common budget mistakes, and measure what actually matters."
        canonicalUrl="https://oarcdigital.com/blog/google-ads-malta"
        ogType="article"
        structuredData={[faqSchema, articleSchema]}
      />
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-[#ff914d] text-sm font-semibold mb-4 uppercase tracking-wider">OARC Digital — Malta</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Google Ads Malta: Get More Customers Without Wasting Budget
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Most Malta businesses running Google Ads are wasting 40–60% of their budget on the wrong keywords, wrong audiences, and wrong landing pages. Here is how to fix it.
            </p>
            <Link href="/contact">
              <button className="bg-[#ff914d] hover:bg-[#e8823e] text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                Get a Free Strategy Session
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-16">

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Google Ads Work for Malta Businesses</h2>
          <p className="text-lg text-gray-700 mb-6">
            Google processes over 8.5 billion searches per day. In Malta, the majority of consumers use Google when they need a local service — a plumber in Qormi, a restaurant in Valletta, a solicitor in Birkirkara, a hotel in Sliema. Google Ads places your business at the top of these search results, ahead of organic listings, at the exact moment someone is ready to buy.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Unlike social media advertising, where you are interrupting someone's feed with a message they didn't ask for, Google Ads respond to active search intent. A person who types "emergency electrician Malta" into Google is not browsing — they have a problem and need a solution immediately. If your ad appears and your landing page delivers the right message, that search becomes a phone call or enquiry within minutes.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Most Common Google Ads Mistakes Malta Businesses Make</h2>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Broad Match Keywords Without Negative Keywords</h3>
          <p className="text-lg text-gray-700 mb-6">
            Broad match keywords allow Google to show your ads for searches that are loosely related to your keyword. Without an extensive negative keyword list, your Malta restaurant ads might show for "Malta restaurant recipe" or "Malta restaurant review" — people researching, not booking. Building a negative keyword list from day one and adding to it based on actual search terms prevents budget waste.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Sending Traffic to Your Homepage</h3>
          <p className="text-lg text-gray-700 mb-6">
            A homepage is designed to introduce your entire business. A landing page is designed to convert a specific search intent into a specific action. Someone who searched "wedding photography Malta" and lands on a homepage that also shows corporate photography, product photography, and family portraits has to work to confirm you can meet their specific need. A dedicated landing page for wedding photography that immediately addresses their specific needs, shows relevant portfolio work, and has a clear booking CTA converts at 2–5x the rate of a homepage.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. No Conversion Tracking</h3>
          <p className="text-lg text-gray-700 mb-6">
            If you cannot measure what happened after someone clicked your ad — did they call? Submit a form? Make a purchase? — you cannot optimise your campaign. Many Malta businesses run Google Ads for months without proper conversion tracking, essentially flying blind. Google's Smart Bidding strategies (which optimise for conversions automatically) cannot work without conversion data. Setting up conversion tracking for calls, form submissions, and purchases is the single most important technical task before spending any meaningful budget.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Not Using Ad Extensions</h3>
          <p className="text-lg text-gray-700 mb-6">
            Ad extensions expand your ad to take up more space and provide additional information: your phone number (call extension), business address (location extension), specific service pages (sitelink extensions), and specific features (callout extensions). Extensions make your ad more prominent and clickable, and they are free — you only pay for clicks on the main ad, not the extensions. Malta businesses using all relevant extensions consistently achieve higher click-through rates and lower costs per click.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Campaign Structure for Malta Businesses</h2>
          <p className="text-lg text-gray-700 mb-6">
            A well-structured Google Ads account organises campaigns by product/service category, with separate ad groups for specific keyword themes within each category. For a Malta law firm, this might mean: one campaign for employment law (with ad groups for unfair dismissal, employment contracts, workplace disputes), one campaign for property law (conveyancing, disputes, commercial leases), and one campaign for company law. Each ad group has 3–5 closely related keywords, 3–5 ads, and sends traffic to a dedicated landing page.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our <Link href="/services"><span className="text-[#ff914d] font-semibold hover:underline">paid advertising services</span></Link> include full Google Ads management for Malta businesses — campaign strategy, keyword research, ad copywriting, landing page recommendations, and ongoing optimisation. We also provide transparent monthly reporting so you always know exactly what your budget is achieving.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Remarketing: Convert the 97% Who Didn't Buy</h2>
          <p className="text-lg text-gray-700 mb-6">
            The majority of people who click your Google Ad will not convert on their first visit. They are comparing options, doing research, or simply not ready yet. Google Remarketing allows you to show tailored ads specifically to these website visitors as they browse other websites, watch YouTube, or use Gmail — keeping your brand visible and bringing them back when they are ready to decide.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            For Malta businesses with longer sales cycles — B2B services, high-value purchases, property — remarketing is particularly valuable because it maintains brand presence through the research and consideration phase without paying for clicks from people who have already visited.
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
