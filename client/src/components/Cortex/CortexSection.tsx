import { motion } from "framer-motion";
import CortexContainer from "./CortexContainer";

export default function CortexSection() {
  return (
    <section className="py-10 md:py-14 bg-[#0a0a0c] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-white/10 overflow-hidden shadow-xl bg-zinc-900/30"
        >
          <CortexContainer />
        </motion.div>
      </div>
    </section>
  );
}
