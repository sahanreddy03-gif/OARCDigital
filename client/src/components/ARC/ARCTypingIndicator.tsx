import { motion } from 'framer-motion';

export function ARCTypingIndicator() {
  return (
    <div className="flex items-start gap-3 mb-4">
      <div 
        className="flex flex-col gap-2 px-4 py-3 rounded-2xl rounded-bl-sm max-w-[80%]"
        style={{ 
          backgroundColor: '#1a1a24',
          color: '#e5e5e5'
        }}
      >
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-gray-400"
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        <span className="text-[11px] text-gray-500">ARC is typing...</span>
      </div>
    </div>
  );
}