import { useEffect, useState, useRef } from "react";
import { Link } from "wouter";
import { 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Clock, 
  Globe, 
  Shield, 
  Bot, 
  Users, 
  TrendingUp,
  Headphones,
  Mail,
  MessageSquare,
  Phone,
  ChevronRight,
  Send
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { createServiceSchema } from "@/utils/structuredData";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection, { FAQItem } from "@/components/FAQSection";

import supportHeroImg from "@assets/stock_images/customer_support_spe_789ecb6b.jpg";
import aiChatbotImg1 from "@assets/stock_images/ai_chatbot_customer__070fc7ce.jpg";
import aiChatbotImg2 from "@assets/stock_images/ai_chatbot_customer__7c3539e1.jpg";
import aiAssistantImg from "@assets/stock_images/ai_assistant_virtual_e8654e3e.jpg";

interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
  typing?: boolean;
}

export default function AICustomerSupport() {
  const [demoMessages, setDemoMessages] = useState<ChatMessage[]>([
    { role: 'user', content: "Hi, I need help with my order #45892" },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const demoConversation = [
    { role: 'ai' as const, content: "Hi! I found order #45892 - a Blue Widget Pro shipped yesterday. It's arriving Thursday by 5pm. Would you like tracking details?" },
    { role: 'user' as const, content: "Yes please, and can I change the delivery address?" },
    { role: 'ai' as const, content: "Of course! I've sent tracking to your email. For address changes, I can update it now since it hasn't reached the local depot yet. What's the new address?" },
    { role: 'user' as const, content: "123 New Street, Apt 4B, New York, NY 10001" },
    { role: 'ai' as const, content: "Done! Delivery address updated to 123 New Street, Apt 4B, New York, NY 10001. You'll get a confirmation email shortly. Anything else I can help with?" },
  ];

  useEffect(() => {
    if (demoStep < demoConversation.length) {
      const timer = setTimeout(() => {
        const nextMessage = demoConversation[demoStep];
        if (nextMessage.role === 'ai') {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setDemoMessages(prev => [...prev, nextMessage]);
            setDemoStep(prev => prev + 1);
          }, 1500);
        } else {
          setDemoMessages(prev => [...prev, nextMessage]);
          setDemoStep(prev => prev + 1);
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [demoStep]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [demoMessages, isTyping]);

  const capabilities = [
    { 
      icon: MessageCircle, 
      title: "Live Chat Support",
      desc: "Instant responses 24/7 across web, mobile, and social channels",
      metric: "< 2s response"
    },
    { 
      icon: Mail, 
      title: "Email Management",
      desc: "Automated ticket routing, prioritization, and resolution",
      metric: "90% auto-resolved"
    },
    { 
      icon: Phone, 
      title: "Voice Integration",
      desc: "Natural voice conversations for phone support systems",
      metric: "24/7 availability"
    },
    { 
      icon: Globe, 
      title: "Multilingual",
      desc: "Support in 100+ languages with native fluency",
      metric: "100+ languages"
    },
    { 
      icon: Shield, 
      title: "Escalation Logic",
      desc: "Smart handoff to human agents for complex issues",
      metric: "Seamless handoff"
    },
    { 
      icon: TrendingUp, 
      title: "Analytics & Learning",
      desc: "Continuous improvement from every interaction",
      metric: "+15% monthly"
    },
  ];

  const integrations = [
    { name: "Zendesk", category: "Helpdesk" },
    { name: "Intercom", category: "Chat" },
    { name: "Freshdesk", category: "Helpdesk" },
    { name: "Salesforce", category: "CRM" },
    { name: "HubSpot", category: "CRM" },
    { name: "Shopify", category: "E-commerce" },
    { name: "Slack", category: "Communication" },
    { name: "WhatsApp", category: "Messaging" },
  ];

  const aiSupportFAQs: FAQItem[] = [
    { question: "How does AI customer support work?", answer: "Our AI agents understand customer queries, access relevant data, and provide accurate responses instantly. They handle routine inquiries while escalating complex issues to humans." },
    { question: "Can AI support handle complex customer issues?", answer: "AI handles 90% of routine queries autonomously. Complex issues are intelligently escalated to human agents with full context, reducing resolution time." },
    { question: "What channels can AI support operate on?", answer: "Email, live chat, social media, WhatsApp, and phone. Our AI works across all customer touchpoints for consistent omnichannel support." },
    { question: "How do you train AI on our specific products?", answer: "We train agents on your knowledge base, FAQs, and past tickets. Continuous learning improves accuracy over time with your unique data." },
    { question: "What languages does AI customer support handle?", answer: "Our AI supports 50+ languages with native fluency. Seamlessly switch languages mid-conversation based on customer preference." },
    { question: "How quickly can AI support be implemented?", answer: "Basic implementation takes 2-3 weeks. Full integration with your helpdesk and knowledge base typically requires 4-6 weeks." },
    { question: "What is the cost of AI customer support?", answer: "AI support starts from €1,500/month for basic deployment. Enterprise solutions with full integration range from €3,000-8,000/month." },
    { question: "Can we measure AI support performance?", answer: "Yes, we provide detailed analytics on resolution rates, response times, customer satisfaction, and cost savings. Real-time dashboards included." }
  ];

  return (
    <Layout>
      <SEOHead
        title="AI Customer Support Agent | 24/7 Automated Support | OARC Digital"
        description="Deploy an AI support agent that handles customer inquiries 24/7. Instant responses, ticket resolution, and seamless escalation to human agents when needed."
        canonicalUrl="https://oarcdigital.com/services/ai-support-specialist"
        ogType="article"
        structuredData={createServiceSchema(
          "AI Customer Support Agent",
          "24/7 AI-powered customer support with instant responses, automated ticket resolution, and smart escalation.",
          "AI Customer Support"
        )}
        schemaId="service-ai-customer-support"
      />

      {/* HERO: Live Chat Demo */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#23AACA]/20 border border-[#23AACA]/40 text-[#23AACA] text-sm font-medium mb-6">
                <Bot className="w-4 h-4" />
                AI Workforce Agent
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="heading-ai-support">
                Your 24/7 <span className="text-[#23AACA]">Support Team</span>
              </h1>
              
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Deploy an AI agent that resolves customer issues instantly. No wait times, no off-hours, no language barriers.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact">
                  <button
                    className="btn-shimmer inline-flex items-center gap-3 bg-[#23AACA] text-white rounded-full pl-8 pr-4 py-4 text-lg font-bold hover:bg-[#1d9ab8] transition-colors"
                    data-testid="button-deploy-ai"
                  >
                    Deploy Your AI Agent
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </button>
                </Link>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "< 2s", label: "Response Time" },
                  { value: "90%", label: "Auto-Resolution" },
                  { value: "24/7", label: "Availability" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-black text-[#23AACA]">{stat.value}</div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Live Chat Demo */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[#23AACA]/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden" data-testid="chat-demo">
                {/* Chat header */}
                <div className="bg-zinc-900 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#23AACA] rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Support AI</div>
                      <div className="text-green-400 text-xs flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        Online
                      </div>
                    </div>
                  </div>
                  <div className="text-white/50 text-xs">Live Demo</div>
                </div>

                {/* Chat messages */}
                <div 
                  ref={chatRef}
                  className="h-[320px] overflow-y-auto p-4 space-y-4 bg-zinc-50"
                >
                  {demoMessages.map((msg, i) => (
                    <div 
                      key={i} 
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                          msg.role === 'user' 
                            ? 'bg-[#23AACA] text-white rounded-br-sm' 
                            : 'bg-white text-zinc-800 shadow-sm rounded-bl-sm border border-zinc-200'
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white text-zinc-800 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm border border-zinc-200">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat input */}
                <div className="px-4 py-3 bg-white border-t border-zinc-200">
                  <div className="flex items-center gap-3 bg-zinc-100 rounded-full px-4 py-2">
                    <input 
                      type="text" 
                      placeholder="Type a message..."
                      className="flex-1 bg-transparent text-sm outline-none"
                      disabled
                    />
                    <button className="w-8 h-8 bg-[#23AACA] rounded-full flex items-center justify-center">
                      <Send className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Capabilities Grid */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-[#f5f0e6]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
                Everything Your Support Team Does
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                But faster, cheaper, and available around the clock
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, i) => (
                <div 
                  key={i}
                  className="group p-6 rounded-2xl bg-zinc-50 hover:bg-zinc-900 hover:text-white transition-all duration-300 cursor-pointer border border-transparent hover:border-[#23AACA]"
                  data-testid={`capability-${i}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#23AACA]/10 group-hover:bg-[#23AACA] flex items-center justify-center mb-4 transition-colors">
                    <cap.icon className="w-6 h-6 text-[#23AACA] group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-white/70 mb-3">
                    {cap.desc}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 text-[#23AACA] text-sm font-semibold">
                    <Zap className="w-4 h-4" />
                    {cap.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 3: Integration Hub Visual */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Connects to Your Stack
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Seamless integration with your existing tools in minutes
              </p>
            </div>

            {/* Visual Integration Hub */}
            <div className="relative max-w-4xl mx-auto">
              {/* Center hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#23AACA] blur-xl opacity-50 rounded-full"></div>
                  <div className="relative w-24 h-24 bg-[#23AACA] rounded-full flex items-center justify-center">
                    <Bot className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              {/* Integration nodes */}
              <div className="grid grid-cols-4 gap-6 py-12">
                {integrations.map((integration, i) => (
                  <div 
                    key={i}
                    className="relative group"
                    data-testid={`integration-${i}`}
                  >
                    {/* Connection line (visual only) */}
                    <div 
                      className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-[#23AACA]/50 to-transparent origin-left transform -translate-y-1/2"
                      style={{ 
                        transform: `rotate(${(i % 8) * 45}deg) translateY(-50%)`,
                        opacity: 0.3
                      }}
                    ></div>
                    
                    <div className="relative bg-zinc-800 rounded-xl p-4 border border-zinc-700 hover:border-[#23AACA] transition-colors text-center">
                      <div className="text-white font-semibold mb-1">{integration.name}</div>
                      <div className="text-xs text-white/40">{integration.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-white/50 text-sm">Plus 50+ more integrations via API</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 4: Before/After Comparison */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-[#f5f0e6]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
                The Transformation
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <div className="p-8 rounded-2xl bg-red-50 border border-red-200">
                <div className="text-red-600 font-bold text-sm uppercase tracking-wider mb-4">Before AI Support</div>
                <ul className="space-y-4">
                  {[
                    "8-hour response times during off-hours",
                    "High support costs per ticket",
                    "Inconsistent answers across agents",
                    "Limited to business hours only",
                    "Can't scale during peak times",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-700">
                      <div className="w-5 h-5 rounded-full bg-red-200 flex-shrink-0 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="p-8 rounded-2xl bg-[#23AACA]/10 border border-[#23AACA]/30">
                <div className="text-[#23AACA] font-bold text-sm uppercase tracking-wider mb-4">With AI Support</div>
                <ul className="space-y-4">
                  {[
                    "< 2 second response times, always",
                    "80% reduction in cost per ticket",
                    "Consistent, accurate answers every time",
                    "24/7/365 availability in 100+ languages",
                    "Infinite scalability on demand",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-700">
                      <CheckCircle2 className="w-5 h-5 text-[#23AACA] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 5: Use Cases */}
      <ScrollReveal>
        <section className="py-20 px-4 bg-zinc-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
                Built For Your Industry
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: "E-commerce",
                  tasks: ["Order tracking", "Returns & refunds", "Product questions"],
                  img: aiChatbotImg1
                },
                { 
                  title: "SaaS",
                  tasks: ["Onboarding help", "Feature questions", "Billing support"],
                  img: aiChatbotImg2
                },
                { 
                  title: "Healthcare",
                  tasks: ["Appointment booking", "Insurance queries", "Prescription info"],
                  img: aiAssistantImg
                },
                { 
                  title: "Finance",
                  tasks: ["Account questions", "Transaction help", "Security alerts"],
                  img: supportHeroImg
                },
              ].map((useCase, i) => (
                <div 
                  key={i}
                  className="group relative overflow-hidden rounded-2xl"
                  data-testid={`use-case-${i}`}
                >
                  <div className="h-64 relative">
                    <img 
                      src={useCase.img}
                      alt={useCase.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                      <ul className="space-y-1">
                        {useCase.tasks.map((task, j) => (
                          <li key={j} className="text-white/70 text-sm flex items-center gap-2">
                            <ChevronRight className="w-3 h-3" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ Section */}
      <FAQSection 
        faqs={aiSupportFAQs} 
        title="Frequently Asked Questions" 
        subtitle="Everything you need to know about AI customer support" 
        schemaId="faq-ai-support" 
      />

      {/* FINAL CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#23AACA] to-[#1d8fa8] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready to Transform Your Support?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Deploy your AI support agent in days, not months
          </p>
          <Link href="/contact">
            <button
              className="btn-shimmer inline-flex items-center gap-3 bg-white text-[#23AACA] rounded-full pl-10 pr-4 py-5 text-lg font-bold hover:bg-white/90 transition-colors"
              data-testid="button-deploy-cta"
            >
              Deploy AI Support
              <div className="w-12 h-12 bg-[#23AACA] rounded-full flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
