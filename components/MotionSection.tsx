"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type Props = HTMLMotionProps<"section"> & {
  children: React.ReactNode;
  delay?: number;
};

export default function MotionSection({
  children,
  className,
  delay = 0,
  ...rest
}: Props) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0.15, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
