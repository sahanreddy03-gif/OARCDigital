import { useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { ArrowLeft, Cookie, Settings, BarChart3, Megaphone, Shield, Clock } from "lucide-react";

export default function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = "December 2, 2025";

  const cookieCategories = [
    {
      icon: Shield,
      title: "Strictly Necessary Cookies",
      description: "Essential for the website to function. Cannot be disabled.",
      consent: false,
      cookies: [
        { name: "cookie_consent", purpose: "Stores your cookie preferences", duration: "1 year", party: "First-party" },
        { name: "session_id", purpose: "Maintains your session state", duration: "Session", party: "First-party" }
      ]
    },
    {
      icon: BarChart3,
      title: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website.",
      consent: true,
      cookies: [
        { name: "_ga", purpose: "Google Analytics - distinguishes users", duration: "2 years", party: "Third-party (Google)" },
        { name: "_ga_*", purpose: "Google Analytics - maintains session state", duration: "2 years", party: "Third-party (Google)" },
        { name: "_gid", purpose: "Google Analytics - distinguishes users", duration: "24 hours", party: "Third-party (Google)" }
      ]
    },
    {
      icon: Megaphone,
      title: "Marketing Cookies",
      description: "Used to deliver relevant advertisements and track ad performance.",
      consent: true,
      cookies: [
        { name: "_fbp", purpose: "Meta Pixel - identifies browsers for ad targeting", duration: "3 months", party: "Third-party (Meta)" },
        { name: "_gcl_au", purpose: "Google Ads - conversion tracking", duration: "3 months", party: "Third-party (Google)" }
      ]
    },
    {
      icon: Settings,
      title: "Functional Cookies",
      description: "Enable enhanced functionality and personalization.",
      consent: true,
      cookies: [
        { name: "theme", purpose: "Stores your light/dark mode preference", duration: "1 year", party: "First-party" },
        { name: "language", purpose: "Stores your language preference", duration: "1 year", party: "First-party" }
      ]
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="Cookie Policy | OARC Digital - Cookie Usage & Management"
        description="Learn about the cookies used on OARC Digital's website, their purposes, and how to manage your cookie preferences in compliance with GDPR and ePrivacy regulations."
        canonicalUrl="https://oarcdigital.com/cookie-policy"
        ogType="website"
      />

      <div className="bg-black min-h-screen">
        {/* Header */}
        <section className="relative py-16 md:py-24 border-b border-white/10">
          <div className="max-w-4xl mx-auto px-6">
            <Link href="/">
              <button className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors" data-testid="button-back">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to Home</span>
              </button>
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#23AACA]/20 rounded-xl flex items-center justify-center">
                <Cookie className="w-6 h-6 text-[#23AACA]" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-white">Cookie Policy</h1>
                <p className="text-white/60 text-sm">Last updated: {lastUpdated}</p>
              </div>
            </div>
            
            <p className="text-lg text-white/80 max-w-2xl">
              This Cookie Policy explains how OARC Digital uses cookies and similar technologies 
              on our website, in compliance with the EU ePrivacy Directive and GDPR.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-invert prose-lg max-w-none">
              
              {/* What Are Cookies */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#23AACA]/20 rounded-lg flex items-center justify-center text-[#23AACA] text-sm font-bold">1</span>
                  What Are Cookies?
                </h2>
                <p className="text-white/80">
                  Cookies are small text files that are placed on your device when you visit a website. 
                  They are widely used to make websites work more efficiently, provide a better user 
                  experience, and give website owners information about how their site is being used.
                </p>
              </div>

              {/* How We Use Cookies */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#23AACA]/20 rounded-lg flex items-center justify-center text-[#23AACA] text-sm font-bold">2</span>
                  How We Use Cookies
                </h2>
                <p className="text-white/80 mb-4">
                  We use cookies to:
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#23AACA] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Ensure our website functions correctly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#23AACA] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Remember your preferences and settings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#23AACA] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Understand how visitors use our website (analytics)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#23AACA] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Deliver relevant advertisements (with your consent)</span>
                  </li>
                </ul>
              </div>

              {/* Cookie Categories */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#23AACA]/20 rounded-lg flex items-center justify-center text-[#23AACA] text-sm font-bold">3</span>
                  Types of Cookies We Use
                </h2>
                
                <div className="space-y-6">
                  {cookieCategories.map((category, idx) => {
                    const Icon = category.icon;
                    return (
                      <div key={idx} className="p-6 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-10 h-10 bg-[#23AACA]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-[#23AACA]" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <h3 className="text-lg font-bold text-white">{category.title}</h3>
                              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                                category.consent 
                                  ? 'bg-yellow-500/20 text-yellow-400' 
                                  : 'bg-green-500/20 text-green-400'
                              }`}>
                                {category.consent ? 'Requires Consent' : 'Always Active'}
                              </span>
                            </div>
                            <p className="text-white/60 text-sm">{category.description}</p>
                          </div>
                        </div>
                        
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="text-left border-b border-white/10">
                                <th className="pb-2 text-white/60 font-medium">Cookie Name</th>
                                <th className="pb-2 text-white/60 font-medium">Purpose</th>
                                <th className="pb-2 text-white/60 font-medium">Duration</th>
                                <th className="pb-2 text-white/60 font-medium">Type</th>
                              </tr>
                            </thead>
                            <tbody>
                              {category.cookies.map((cookie, cIdx) => (
                                <tr key={cIdx} className="border-b border-white/5">
                                  <td className="py-2 text-white font-mono text-xs">{cookie.name}</td>
                                  <td className="py-2 text-white/70">{cookie.purpose}</td>
                                  <td className="py-2 text-white/70">{cookie.duration}</td>
                                  <td className="py-2 text-white/70">{cookie.party}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Your Consent */}
              <div className="mb-12 p-6 bg-[#23AACA]/10 rounded-xl border border-[#23AACA]/20">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#23AACA]/20 rounded-lg flex items-center justify-center text-[#23AACA] text-sm font-bold">4</span>
                  Your Consent
                </h2>
                <p className="text-white/80 mb-4">
                  When you first visit our website, you will be shown a cookie consent banner. You can:
                </p>
                <ul className="space-y-3 text-white/80 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#23AACA] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Accept All:</strong> Enable all cookies including analytics and marketing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#23AACA] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Reject All:</strong> Only essential cookies will be used</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#23AACA] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Manage Preferences:</strong> Choose which categories of cookies to enable</span>
                  </li>
                </ul>
                <p className="text-white/70 text-sm">
                  We store your consent preferences for 12 months. You can change your preferences at any time 
                  by clicking the "Cookie Settings" link in the footer of our website.
                </p>
              </div>

              {/* Managing Cookies */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#23AACA]/20 rounded-lg flex items-center justify-center text-[#23AACA] text-sm font-bold">5</span>
                  Managing Cookies in Your Browser
                </h2>
                <p className="text-white/80 mb-4">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#23AACA] rounded-full mt-2 flex-shrink-0"></span>
                    <span>View cookies stored on your device</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#23AACA] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Delete individual or all cookies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#23AACA] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Block cookies from specific websites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#23AACA] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Block all third-party cookies</span>
                  </li>
                </ul>
                <p className="text-white/70 text-sm mt-4">
                  Note: Blocking certain cookies may affect website functionality.
                </p>
              </div>

              {/* Third-Party Cookies */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#23AACA]/20 rounded-lg flex items-center justify-center text-[#23AACA] text-sm font-bold">6</span>
                  Third-Party Cookies
                </h2>
                <p className="text-white/80 mb-4">
                  We use services from the following third parties that may set cookies:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-white font-bold mb-1">Google Analytics</h4>
                    <p className="text-white/60 text-sm mb-2">Website analytics and performance measurement</p>
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#23AACA] text-sm hover:underline">Privacy Policy →</a>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-white font-bold mb-1">Meta (Facebook)</h4>
                    <p className="text-white/60 text-sm mb-2">Advertising and conversion tracking</p>
                    <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-[#23AACA] text-sm hover:underline">Privacy Policy →</a>
                  </div>
                </div>
              </div>

              {/* Updates */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#23AACA]/20 rounded-lg flex items-center justify-center text-[#23AACA] text-sm font-bold">7</span>
                  Policy Updates
                </h2>
                <p className="text-white/80">
                  We may update this Cookie Policy from time to time. Any changes will be posted on 
                  this page with an updated "Last Updated" date. Please check back periodically to 
                  stay informed about our use of cookies.
                </p>
              </div>

              {/* Contact */}
              <div className="p-6 bg-gradient-to-r from-[#23AACA]/10 to-[#4ade80]/10 rounded-xl border border-white/10">
                <h2 className="text-xl font-bold text-white mb-4">Questions About Cookies?</h2>
                <p className="text-white/80 mb-4">
                  If you have any questions about our use of cookies, please contact us or see our{' '}
                  <Link href="/privacy-policy" className="text-[#23AACA] hover:underline">Privacy Policy</Link>.
                </p>
                <Link href="/contact">
                  <button className="inline-flex items-center gap-2 bg-[#23AACA] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#3dc0d8] transition-colors" data-testid="button-contact">
                    Contact Us
                  </button>
                </Link>
              </div>

            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
