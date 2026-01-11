import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { Search, Settings, Rocket, ArrowRight, Check } from 'lucide-react';

const steps = [
  {
    step: 1,
    icon: Search,
    title: 'Discovery & Audit',
    description: 'We map your processes and pick 1-3 high-impact workflows.',
    duration: '3-7 days',
    details: ['Workflow mapping', 'Integration review', 'KPI baseline'],
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    step: 2,
    icon: Settings,
    title: 'Configure & Train',
    description: 'We train your AI team on your data and integrate with tools.',
    duration: '7-14 days',
    details: ['Custom training', 'Tool integration', 'Pilot launch'],
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    step: 3,
    icon: Rocket,
    title: 'Run & Optimize',
    description: 'Agents operate daily, report KPIs, and improve automatically.',
    duration: 'Continuous',
    details: ['24/7 operation', 'Performance reports', 'Continuous improvement'],
    color: 'from-[#c4ff4d]/20 to-green-500/20'
  }
];

export function PersonalizationSteps() {
  return (
    <div className="relative">
      <div className="text-center mb-16">
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#c4ff4d]/10 border border-[#c4ff4d]/20 rounded-full mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Rocket className="w-4 h-4 text-[#c4ff4d]" />
          <span className="text-sm text-[#c4ff4d]">Your Journey</span>
        </motion.div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          From Signup to <span className="text-[#c4ff4d]">AI-Powered</span>
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          A clear 3-step path from first call to fully autonomous AI operations.
        </p>
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;
            
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 border-[#c4ff4d] flex items-center justify-center text-[#c4ff4d] font-bold text-sm z-10 hidden lg:flex">
                  {step.step}
                </div>
                
                {!isLast && (
                  <div className="absolute top-1/2 -right-6 lg:-right-8 transform -translate-y-1/2 hidden md:block">
                    <ArrowRight className="w-6 h-6 text-white/20" />
                  </div>
                )}
                
                <GlassCard className="p-6 h-full" liftOnHover={true} data-testid={`step-card-${step.step}`}>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 mx-auto md:mx-0`}>
                    <Icon className="w-7 h-7 text-[#c4ff4d]" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
                    <span className="text-xs text-[#c4ff4d]/60 uppercase tracking-wider">Step {step.step}</span>
                    <span className="text-xs text-white/40">•</span>
                    <span className="text-xs text-white/40">{step.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 text-center md:text-left">{step.title}</h3>
                  <p className="text-sm text-white/60 mb-5 text-center md:text-left">{step.description}</p>
                  
                  <div className="space-y-2 border-t border-white/10 pt-4">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#c4ff4d]" />
                        <span className="text-sm text-white/70">{detail}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-white/40 text-sm">
            Average time from first call to live AI agents: <span className="text-[#c4ff4d] font-semibold">14 days</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default PersonalizationSteps;
