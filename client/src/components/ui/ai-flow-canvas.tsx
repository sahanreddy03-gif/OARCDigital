import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FlowNode {
  id: string;
  label: string;
  type: 'input' | 'process' | 'decision' | 'output' | 'branch';
  icon?: React.ReactNode;
  highlight?: boolean;
  percentage?: string;
}

interface FlowConnection {
  from: string;
  to: string;
  label?: string;
  animated?: boolean;
}

interface AIFlowCanvasProps {
  nodes: FlowNode[];
  connections: FlowConnection[];
  className?: string;
  title?: string;
  variant?: 'horizontal' | 'vertical' | 'tree';
}

export function AIFlowCanvas({ 
  nodes, 
  connections, 
  className,
  title,
  variant = 'horizontal'
}: AIFlowCanvasProps) {
  const renderNode = (node: FlowNode, index: number) => {
    const baseClasses = cn(
      'relative flex flex-col items-center justify-center text-center',
      'transition-all duration-300'
    );

    const nodeStyles = {
      input: 'w-24 h-24 rounded-full border-2 border-white/30 bg-white/[0.03]',
      process: 'w-28 h-20 rounded-lg border-2 border-white/40 bg-white/[0.05]',
      decision: 'w-24 h-24 rotate-45 border-2 border-white/50 bg-white/[0.06]',
      output: 'w-24 h-24 rounded-full border-2 border-white/50 bg-white/[0.08]',
      branch: 'w-20 h-14 rounded-md border border-white/25 bg-white/[0.02]'
    };

    return (
      <motion.div
        key={node.id}
        className={cn(baseClasses, nodeStyles[node.type])}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.6)' }}
      >
        {/* Glow effect for highlighted nodes */}
        {node.highlight && (
          <div className="absolute inset-0 rounded-full blur-xl bg-white/10 -z-10" />
        )}
        
        {/* Content wrapper for diamond shape */}
        <div className={node.type === 'decision' ? '-rotate-45' : ''}>
          {node.icon && (
            <div className="mb-1 opacity-80">
              {node.icon}
            </div>
          )}
          <span className={cn(
            'text-white font-medium',
            node.type === 'branch' ? 'text-[10px]' : 'text-xs'
          )}>
            {node.label}
          </span>
          {node.percentage && (
            <span className="block text-white/60 text-[10px] mt-0.5">
              {node.percentage}
            </span>
          )}
        </div>

        {/* Pulse animation for process nodes */}
        {node.type === 'process' && (
          <motion.div
            className="absolute inset-0 rounded-lg border border-white/20"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </motion.div>
    );
  };

  const renderArrow = (index: number) => (
    <motion.div
      key={`arrow-${index}`}
      className="flex items-center justify-center mx-2"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.15 + 0.1 }}
    >
      <div className="relative">
        {/* Arrow line with animation */}
        <motion.div 
          className="w-12 h-[2px] bg-gradient-to-r from-white/40 to-white/60"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
        />
        {/* Arrow head */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[8px] border-l-white/60 border-y-[4px] border-y-transparent" />
        {/* Animated pulse along the line */}
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/80 blur-sm motion-reduce:hidden"
          animate={{ x: [0, 48, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );

  if (variant === 'horizontal') {
    return (
      <div className={cn('w-full', className)}>
        {title && (
          <motion.h4 
            className="text-white/60 text-sm uppercase tracking-wider mb-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h4>
        )}
        <div className="flex items-center justify-center flex-wrap gap-y-4">
          {nodes.map((node, index) => (
            <>
              {renderNode(node, index)}
              {index < nodes.length - 1 && renderArrow(index)}
            </>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn('w-full', className)}>
      {title && (
        <motion.h4 
          className="text-white/60 text-sm uppercase tracking-wider mb-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h4>
      )}
      <div className="flex flex-col items-center gap-4">
        {nodes.map((node, index) => (
          <div key={node.id} className="flex flex-col items-center">
            {renderNode(node, index)}
            {index < nodes.length - 1 && (
              <motion.div
                className="w-[2px] h-8 bg-gradient-to-b from-white/40 to-white/20 my-2"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

interface DecisionTreeProps {
  question: string;
  yesPath: { label: string; percentage: string; description?: string };
  noPath: { label: string; percentage: string; description?: string };
  className?: string;
}

export function DecisionTree({ question, yesPath, noPath, className }: DecisionTreeProps) {
  return (
    <div className={cn('w-full max-w-lg mx-auto', className)}>
      {/* Input node */}
      <motion.div
        className="flex justify-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="px-6 py-3 bg-white/[0.05] border border-white/20 rounded-lg text-white text-sm text-center">
          {question}
        </div>
      </motion.div>

      {/* Decision node (diamond) */}
      <motion.div
        className="flex justify-center mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative">
          <div className="w-16 h-16 rotate-45 border-2 border-white/50 bg-white/[0.08] flex items-center justify-center">
            <span className="-rotate-45 text-white text-xs font-medium">AI</span>
          </div>
          {/* Glow */}
          <div className="absolute inset-0 w-16 h-16 rotate-45 bg-white/10 blur-lg -z-10" />
        </div>
      </motion.div>

      {/* Connecting lines */}
      <div className="relative h-8">
        <motion.div 
          className="absolute left-1/4 top-0 w-[2px] h-full bg-white/30"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        />
        <motion.div 
          className="absolute right-1/4 top-0 w-[2px] h-full bg-white/30"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        />
        {/* Horizontal connector */}
        <motion.div 
          className="absolute left-1/4 right-1/4 top-0 h-[2px] bg-white/30"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        />
      </div>

      {/* Branch outputs */}
      <div className="flex justify-between gap-4">
        <motion.div
          className="flex-1 p-4 bg-white/[0.04] border border-white/15 rounded-lg text-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ borderColor: 'rgba(255,255,255,0.3)', y: -2 }}
        >
          <div className="text-2xl font-bold text-white mb-1">{yesPath.percentage}</div>
          <div className="text-white text-sm font-medium">{yesPath.label}</div>
          {yesPath.description && (
            <div className="text-white/50 text-xs mt-1">{yesPath.description}</div>
          )}
        </motion.div>

        <motion.div
          className="flex-1 p-4 bg-white/[0.04] border border-white/15 rounded-lg text-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ borderColor: 'rgba(255,255,255,0.3)', y: -2 }}
        >
          <div className="text-2xl font-bold text-white mb-1">{noPath.percentage}</div>
          <div className="text-white text-sm font-medium">{noPath.label}</div>
          {noPath.description && (
            <div className="text-white/50 text-xs mt-1">{noPath.description}</div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

interface ProcessFlowProps {
  steps: Array<{
    icon: React.ReactNode;
    label: string;
    sublabel?: string;
  }>;
  className?: string;
}

export function ProcessFlow({ steps, className }: ProcessFlowProps) {
  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-center justify-between relative">
        {/* Connecting line */}
        <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-gradient-to-r from-white/10 via-white/30 to-white/10 -z-10" />
        
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            {/* Step circle */}
            <motion.div
              className="w-16 h-16 rounded-full bg-zinc-900 border-2 border-white/30 flex items-center justify-center mb-2"
              whileHover={{ scale: 1.1, borderColor: 'rgba(255,255,255,0.5)' }}
            >
              <div className="text-white/80">
                {step.icon}
              </div>
            </motion.div>
            
            {/* Label */}
            <span className="text-white text-xs font-medium text-center max-w-[80px]">
              {step.label}
            </span>
            {step.sublabel && (
              <span className="text-white/50 text-[10px] text-center">
                {step.sublabel}
              </span>
            )}

            {/* Pulse animation */}
            <motion.div
              className="absolute top-0 w-16 h-16 rounded-full border border-white/20 motion-reduce:hidden"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AIFlowCanvas;
