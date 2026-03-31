import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import { siteData } from "../lib/siteData";

const systems = [
  {
    title: "Self-Leveling Epoxy",
    description: "Seamless, glossy finish for clean and controlled environments."
  },
  {
    title: "Heavy-Duty Mortar",
    description: "Built for impact resistance and heavy-load industrial traffic."
  },
  {
    title: "Quartz and Anti-Skid",
    description: "Slip-resistant systems for wet or high-movement zones."
  },
  {
    title: "ESD and Anti-Static",
    description: "Electrostatic control for electronics and sensitive production lines."
  },
  {
    title: "Chemical Resistant",
    description: "Protection against acids, oils, and aggressive chemicals."
  }
];

const benefits = [
  "High abrasion resistance and long service life",
  "Easy-to-clean surfaces with reduced dusting",
  "Improved safety with anti-slip textures and line marking",
  "Custom colors and zoning for operational clarity",
  "Faster maintenance cycles with low downtime"
];

const process = [
  "Substrate inspection and moisture testing",
  "Mechanical surface preparation",
  "Primer and crack treatment",
  "Epoxy application with thickness control",
  "Top coat, curing, and final QA checks"
];

export default function IndustrialEpoxyFlooring() {
  return (
    <Layout>
      <SEO title="Industrial Epoxy Flooring | Imperial Infratech-Con" path="/industrial-epoxy-flooring" />
      <PageHeader
        overline="Industrial Epoxy Flooring"
        title="High-performance flooring systems engineered for heavy-duty operations."
        subtitle="We design and install epoxy flooring systems that resist abrasion, chemicals, and thermal shock, while maintaining compliance and productivity."
        actions={
          <>
            <a className="btn-primary" href="/contact">
              Request a Site Visit
            </a>
            <a className="btn-outline" href={`tel:${siteData.phonePrimary}`}>
              Call {siteData.phonePrimary}
            </a>
          </>
        }
      />

      <section className="section">
        <div className="container-base">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {systems.map((system) => (
              <div key={system.title} className="card">
                <div className="text-lg font-semibold text-slate-900">{system.title}</div>
                <p className="mt-2 text-sm text-slate-600">{system.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section">
        <div className="container-base grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="eyebrow">Performance Benefits</div>
            <h2 className="section-title">Built for safety, hygiene, and high-traffic durability.</h2>
            <ul className="grid gap-3 mt-6 text-sm text-slate-600">
              {benefits.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="w-2 h-2 mt-1 rounded-full bg-brand-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-white border rounded-3xl border-slate-200">
            <img className="rounded-2xl" src="/image/epoxy2.jpeg" alt="Epoxy flooring" />
            <div className="mt-4 text-sm text-slate-600">
              We align system selection with your operational requirements, ensuring the right
              balance of performance and lifecycle cost.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-base">
          <div className="eyebrow">Execution Workflow</div>
          <div className="grid gap-4 mt-6 md:grid-cols-2">
            {process.map((item) => (
              <div key={item} className="card">
                <div className="text-sm font-semibold text-slate-900">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
