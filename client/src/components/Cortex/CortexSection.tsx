import { motion } from "framer-motion";
import CortexContainer from "./CortexContainer";

export default function CortexSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0c] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-zinc-900/30"
        >
          <CortexContainer />
        </motion.div>
      </div>
    </section>
  );
}
