import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PageHeader({ overline, title, subtitle, actions }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section ref={ref} className="relative section border-b border-white/10 bg-[color:var(--secondary-green)] text-white overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-secondary-green to-primary-green opacity-90"
        style={{ y }}
      />
      <motion.div
        className="relative container-base"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {overline ? <div className="eyebrow text-white/70">{overline}</div> : null}
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">{title}</h1>
        {subtitle ? <p className="section-subtitle max-w-3xl text-white/80">{subtitle}</p> : null}
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </motion.div>
    </section>
  );
}
