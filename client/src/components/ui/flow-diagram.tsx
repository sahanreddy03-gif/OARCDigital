import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface FlowStep {
  icon: React.ReactNode;
  label: string;
}

interface FlowDiagramProps {
  steps: FlowStep[];
  className?: string;
  compact?: boolean;
}

export function FlowDiagram({ steps, className, compact = false }: FlowDiagramProps) {
  return (
    <div className={cn('flex items-center gap-1', compact ? 'flex-wrap' : '', className)}>
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-1"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {/* Step Node */}
          <div className="flex flex-col items-center gap-1">
            <div className={cn(
              'flex items-center justify-center rounded-lg',
              'bg-white/[0.05] border border-white/10',
              'transition-all duration-300 group-hover:border-white/20',
              compact ? 'w-8 h-8' : 'w-10 h-10'
            )}>
              <div className={cn('text-white/60', compact ? 'w-3.5 h-3.5' : 'w-4 h-4')}>
                {step.icon}
              </div>
            </div>
            <span className={cn(
              'text-white/40 text-center max-w-[60px] leading-tight',
              compact ? 'text-[9px]' : 'text-[10px]'
            )}>
              {step.label}
            </span>
          </div>

          {/* Arrow (not after last step) */}
          {index < steps.length - 1 && (
            <motion.div
              className="mx-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
            >
              <ArrowRight className={cn(
                'text-white/20',
                compact ? 'w-3 h-3' : 'w-4 h-4'
              )} />
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

interface IntegrationHubProps {
  centerIcon: React.ReactNode;
  centerLabel: string;
  integrations: { icon: React.ReactNode; name: string }[];
  className?: string;
}

export function IntegrationHub({ centerIcon, centerLabel, integrations, className }: IntegrationHubProps) {
  const radius = 100;
  const angleStep = (2 * Math.PI) / integrations.length;

  return (
    <div className={cn('relative w-[280px] h-[280px] mx-auto', className)}>
      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 280">
        {integrations.map((_, index) => {
          const angle = angleStep * index - Math.PI / 2;
          const x = 140 + radius * Math.cos(angle);
          const y = 140 + radius * Math.sin(angle);
          return (
            <motion.line
              key={index}
              x1="140"
              y1="140"
              x2={x}
              y2={y}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            />
          );
        })}
      </svg>

      {/* Center Hub */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-20 h-20 rounded-full bg-white/[0.05] border border-white/10 flex flex-col items-center justify-center">
          <div className="w-8 h-8 text-white/70">
            {centerIcon}
          </div>
          <span className="text-[9px] text-white/50 mt-1">{centerLabel}</span>
        </div>
        {/* Pulse Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-white/10 motion-reduce:hidden"
          animate={{
            scale: [1, 1.3, 1.3],
            opacity: [0.5, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut'
          }}
        />
      </motion.div>

      {/* Integration Nodes */}
      {integrations.map((integration, index) => {
        const angle = angleStep * index - Math.PI / 2;
        const x = 140 + radius * Math.cos(angle);
        const y = 140 + radius * Math.sin(angle);
        
        return (
          <motion.div
            key={index}
            className="absolute flex flex-col items-center gap-1"
            style={{
              left: x,
              top: y,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
          >
            <div className="w-12 h-12 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center group hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 cursor-pointer">
              <div className="w-6 h-6 text-white/60 group-hover:text-white/80 transition-colors">
                {integration.icon}
              </div>
            </div>
            <span className="text-[9px] text-white/40">{integration.name}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

export default FlowDiagram;
