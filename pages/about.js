import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";
import { siteData } from "../lib/siteData";

const values = [
  {
    title: "Safety-First Execution",
    description: "Site protocols, PPE compliance, and controlled work zones on every project."
  },
  {
    title: "Engineering-Led Decisions",
    description: "Material selection based on traffic load, chemical exposure, and lifecycle cost."
  },
  {
    title: "Transparent Delivery",
    description: "Clear timelines, daily progress reporting, and documented QA checks."
  }
];

export default function About() {
  return (
    <Layout>
      <SEO title={`About | ${siteData.name}`} path="/about" />
      <PageHeader
        overline="About Us"
        title="Built to deliver industrial flooring with discipline and scale."
        subtitle="Imperial Infratech-Con India Pvt Ltd is a specialized partner for industrial epoxy flooring and large-scale construction, supporting critical facilities across manufacturing and logistics."
        actions={
          <>
            <a className="btn-primary" href="/contact">
              Meet the Team
            </a>
            <a className="btn-outline" href={siteData.profileUrl} download>
              Download Company Profile
            </a>
          </>
        }
      />

      <section className="section">
        <motion.div
          className="container-base grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div>
            <div className="eyebrow">Our Story</div>
            <h2 className="section-title">A focus on durability, compliance, and operational uptime.</h2>
            <p className="section-subtitle">
              We support industrial teams with flooring systems engineered for heavy loads, chemical
              exposure, and continuous operations. Our execution blends technical planning with on-site
              coordination to minimize disruption and protect productivity.
            </p>
            <p className="mt-6 text-sm text-slate-600">
              From surface preparation to final handover, every project is managed with structured
              documentation, trained crews, and the machinery needed to maintain consistent quality.
            </p>
          </div>
          <div className="p-6 bg-white border rounded-3xl border-slate-200">
            <img
              className="rounded-2xl"
              src="/image/logo.jpeg"
              alt="Industrial construction team"
            />
            <div className="mt-6 text-sm text-slate-600">
              We align with client safety standards, provide progress visibility, and deliver
              flooring systems that perform over time.
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-white section">
        <motion.div
          className="container-base"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="eyebrow">Core Values</div>
          <div className="grid gap-6 mt-8 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                viewport={{ once: true }}
              >
                <div className="text-lg font-semibold text-slate-900">{value.title}</div>
                <p className="mt-2 text-sm text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
