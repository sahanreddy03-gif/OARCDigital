import { useParams } from 'wouter';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import CreativeNavigation from '@/components/CreativeNavigation';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { aiTeamMembers } from '@/components/ai/aiAgentsData';
import { createServiceSchema } from '@/utils/structuredData';
import { createBreadcrumbSchema } from '@/utils/advancedSchema';
import { ArrowLeft, Check, ChevronRight } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function AIAgentDetail() {
  const params = useParams<{ agentId: string }>();
  const agentId = params.agentId;
  const agent = aiTeamMembers.find(a => a.id === agentId);

  if (!agent) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <CreativeNavigation />
        <div className="text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Agent Not Found</h1>
          <p className="text-white/60 mb-8">We couldn't find an agent with that ID.</p>
          <Link href="/ai-agents">
            <Button className="bg-[#c4ff4d] text-black font-bold">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to AI Agents
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = agent.icon;
  const whatsappMsg = encodeURIComponent(`Hi OARC Digital, I'm interested in deploying ${agent.name} (${agent.role}) for my business.`);

  const serviceSchema = createServiceSchema(
    `${agent.name} — AI ${agent.role}`,
    `Deploy ${agent.name}, OARC Digital's AI ${agent.role} for Malta businesses. ${agent.description}`,
    `AI ${agent.role}`
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'AI Agents', url: '/ai-agents' },
    { name: `${agent.name} — ${agent.role}`, url: `/ai-agents/${agent.id}` }
  ]);

  return (
    <>
      <Helmet>
        <title>{agent.name} — {agent.role} | OARC Digital AI Agents Malta</title>
        <meta name="description" content={`Deploy ${agent.name}, OARC Digital's AI ${agent.role} for Malta businesses. ${agent.description}`} />
        <link rel="canonical" href={`https://oarcdigital.com/ai-agents/${agent.id}`} />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://oarcdigital.com/ai-agents/${agent.id}`} />
        <meta property="og:title" content={`${agent.name} — ${agent.role} | OARC Digital AI Agents Malta`} />
        <meta property="og:description" content={`Deploy ${agent.name}, OARC Digital's AI ${agent.role} for Malta businesses. ${agent.description}`} />
        <meta property="og:image" content={`https://oarcdigital.com/agents/${agent.id}.webp`} />
        <meta property="og:image:width" content="320" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content={agent.avatarAlt} />
        <meta property="og:site_name" content="OARC Digital" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${agent.name} — ${agent.role} | OARC Digital AI Agents Malta`} />
        <meta name="twitter:description" content={`Deploy ${agent.name}, OARC Digital's AI ${agent.role} for Malta businesses. ${agent.description}`} />
        <meta name="twitter:image" content={`https://oarcdigital.com/agents/${agent.id}.webp`} />
        <meta name="twitter:image:alt" content={agent.avatarAlt} />
        <script type="application/ld+json" id={`service-schema-${agent.id}`}>
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json" id={`breadcrumb-schema-${agent.id}`}>
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <CreativeNavigation />

      <main className="min-h-screen bg-black text-white">
        {/* Hero */}
        <section className="relative pt-28 pb-16 px-4 sm:px-6 bg-black overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c4ff4d]/5 blur-[120px]" />
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-10"
            >
              <Link href="/ai-agents">
                <span className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm cursor-pointer">
                  <ArrowLeft className="w-4 h-4" /> All AI Agents
                </span>
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Avatar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex justify-center"
              >
                <div className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10">
                  {agent.avatarImage ? (
                    <img
                      src={agent.avatarImage}
                      alt={agent.avatarAlt}
                      loading="eager"
                      decoding="async"
                      width={320}
                      height={400}
                      className="absolute inset-0 w-full h-full object-contain object-center"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-24 h-24 text-[#c4ff4d]/60" />
                    </div>
                  )}
                  {/* Lime accent border glow */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-[#c4ff4d]/20 pointer-events-none" />
                </div>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                {/* Role badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c4ff4d]/10 border border-[#c4ff4d]/20 text-[#c4ff4d] text-sm font-medium mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c4ff4d] animate-pulse" />
                  {agent.role}
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                  {agent.name}
                </h1>

                <p className="text-lg text-white/70 leading-relaxed mb-6">
                  {agent.description}
                </p>

                {/* Metric */}
                <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 mb-8">
                  <span className="text-2xl font-bold text-[#c4ff4d]">{agent.metric}</span>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/35699263179?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="bg-[#c4ff4d] text-black font-bold px-6 py-3 rounded-full text-base shadow-lg shadow-[#c4ff4d]/20 flex items-center gap-2"
                      data-testid={`button-deploy-${agent.id}`}
                    >
                      <SiWhatsapp className="w-4 h-4" />
                      Deploy {agent.name}
                    </Button>
                  </a>
                  <Link href="/ai-agents">
                    <Button
                      variant="outline"
                      className="border-white/20 text-white rounded-full text-base flex items-center gap-2"
                    >
                      View All Agents <ChevronRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16 px-4 sm:px-6 bg-zinc-950">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                What <span className="text-[#c4ff4d]">{agent.name}</span> Does
              </h2>
              <p className="text-white/50">Core capabilities built into this agent</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {agent.capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <GlassCard className="flex items-center gap-4 p-5">
                    <div className="w-8 h-8 rounded-full bg-[#c4ff4d]/10 border border-[#c4ff4d]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#c4ff4d]" />
                    </div>
                    <span className="text-white font-medium">{cap}</span>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          faqs={agent.faqs}
          title={`${agent.name} FAQ`}
          subtitle={`Common questions about deploying ${agent.name} as your AI ${agent.role.toLowerCase()} in Malta`}
          darkMode={true}
          schemaId={`faq-schema-${agent.id}`}
        />

        {/* Other agents */}
        <section className="py-16 px-4 sm:px-6 bg-black border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-8">
              More AI Agents
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {aiTeamMembers
                .filter(a => a.id !== agent.id)
                .slice(0, 8)
                .map((other, i) => {
                  const OtherIcon = other.icon;
                  return (
                    <motion.div
                      key={other.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link href={`/ai-agents/${other.id}`}>
                        <div
                          className="group cursor-pointer rounded-xl bg-zinc-900 border border-white/5 hover:border-[#c4ff4d]/30 transition-all duration-300 overflow-hidden"
                          data-testid={`link-agent-${other.id}`}
                        >
                          {/* Mini avatar */}
                          <div className="relative h-32 bg-gradient-to-br from-zinc-800 to-zinc-900">
                            {other.avatarImage ? (
                              <img
                                src={other.avatarImage}
                                alt={other.name}
                                loading="lazy"
                                decoding="async"
                                width={160}
                                height={128}
                                className="absolute inset-0 w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-300"
                              />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <OtherIcon className="w-10 h-10 text-white/30" />
                              </div>
                            )}
                          </div>
                          <div className="p-3">
                            <p className="font-semibold text-white text-sm">{other.name}</p>
                            <p className="text-white/40 text-xs">{other.role}</p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 bg-zinc-950 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Ready to deploy <span className="text-[#c4ff4d]">{agent.name}</span>?
              </h2>
              <p className="text-white/60 text-lg">
                Get your custom AI workforce live in 7–14 days.
              </p>
              <a
                href={`https://wa.me/35699263179?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="bg-[#c4ff4d] text-black font-bold px-8 py-4 rounded-full text-lg shadow-lg shadow-[#c4ff4d]/20 flex items-center gap-2 mx-auto"
                  data-testid={`button-cta-deploy-${agent.id}`}
                >
                  <SiWhatsapp className="w-5 h-5" />
                  Get Started on WhatsApp
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>

    </>
  );
}
