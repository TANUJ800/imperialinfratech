import Link from "next/link";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { siteData } from "../lib/siteData";

const services = [
  {
    title: "Custom Home Construction",
    description:
      "End-to-end residential construction tailored to your space planning, budget, and lifestyle needs."
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Thoughtful upgrades for kitchens, living spaces, bedrooms, and structural renovations with minimal disruption."
  },
  {
    title: "Interior Finishing",
    description:
      "Premium finishes, flooring, false ceilings, painting, and detailing that bring warmth and polish to every room."
  },
  {
    title: "Structural Work",
    description:
      "Reliable foundations, columns, slabs, and load-bearing solutions executed with safety and accuracy."
  },
  {
    title: "Plumbing & Electrical",
    description:
      "Integrated utility planning and installation for efficient water flow, wiring safety, and long-term performance."
  },
  {
    title: "Waterproofing Solutions",
    description:
      "Targeted protection for terraces, bathrooms, walls, and critical areas to prevent leakage and moisture damage."
  }
];

const benefits = [
  "High-quality materials and modern techniques",
  "Cost-effective pricing",
  "Timely project completion",
  "Skilled workforce",
  "Custom design options",
  "Long-lasting durability"
];

const workflow = [
  "Site inspection and planning",
  "Design and material selection",
  "Construction work",
  "Interior finishing",
  "Final handover"
];

export default function DomesticConstruction() {
  return (
    <Layout>
      <SEO
        title={`Domestic Construction | ${siteData.name}`}
        description="Reliable residential construction services for modern homes, renovations, interiors, utilities, and waterproofing."
        path="/domestic-construction"
      />

      <section className="relative overflow-hidden bg-[color:var(--primary-green)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)]" />
        <div className="container-base relative grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center md:py-24">
          <div>
            <div className="eyebrow text-slate-300">DOMESTIC CONSTRUCTION</div>
            <h1 className="max-w-3xl mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Reliable and Modern Home Construction Solutions.
            </h1>
            <p className="max-w-2xl mt-6 text-lg text-slate-200">
              We design and build high-quality residential spaces tailored for comfort,
              durability, and modern living standards.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link className="btn-primary" href="/contact">
                Request a Site Visit
              </Link>
              <a
                className="text-white btn-outline border-white/60 hover:border-white hover:text-white"
                href={`tel:${siteData.phonePrimary}`}
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-5 border rounded-3xl border-white/10 bg-white/10">
                <div className="text-sm uppercase tracking-[0.28em] text-slate-300">Residential Focus</div>
                <div className="mt-3 text-2xl font-semibold">Comfort-led spaces with dependable execution.</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[color:var(--accent-gold)]/95 p-5 text-black">
                <div className="text-sm uppercase tracking-[0.28em] text-black/70">Planning First</div>
                <div className="mt-3 text-2xl font-semibold">Design, materials, and timelines aligned from day one.</div>
              </div>
            </div>
            <div className="p-6 mt-4 border rounded-3xl border-white/10 bg-gradient-to-br from-white/10 to-white/5">
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <div className="text-3xl font-semibold">6+</div>
                  <div className="mt-2 text-sm text-slate-300">Core home construction services</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold">End-to-End</div>
                  <div className="mt-2 text-sm text-slate-300">Support from planning to handover</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold">Quality-Led</div>
                  <div className="mt-2 text-sm text-slate-300">Built for durability and everyday living</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[color:var(--background-light)]">
        <div className="container-base">
          <div className="max-w-2xl mx-auto text-center">
            <div className="eyebrow">Services</div>
            <h2 className="section-title">Residential construction services designed for modern homes.</h2>
            <p className="section-subtitle">
              From structural execution to refined interiors, we handle every stage with care,
              coordination, and quality control.
            </p>
          </div>

          <div className="grid gap-6 mt-12 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 transition duration-300 bg-white border shadow-sm group rounded-3xl border-slate-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--primary-green)]/10 text-lg font-semibold text-[color:var(--primary-green)]">
                  {service.title
                    .split(" ")
                    .map((word) => word[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div className="mt-5 text-xl font-semibold text-slate-900">{service.title}</div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section">
        <div className="container-base grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="eyebrow">Benefits</div>
            <h2 className="section-title">Built for comfort, safety, and long-term durability.</h2>
            <p className="section-subtitle">
              Every project is planned to balance daily livability, structural strength, and clean
              finishing that lasts over time.
            </p>
            <div className="grid gap-4 mt-8 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 border rounded-2xl border-slate-200 bg-slate-50">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[color:var(--accent-gold)]" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-[color:var(--secondary-green)] to-[color:var(--primary-green)] p-8 text-white shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.18),transparent_30%)]" />
            <div className="relative flex min-h-[420px] flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/5 p-8">
              <div>
<div className="mb-4 overflow-hidden rounded-2xl">
  <img
    src="/image/domestic.jpeg"
    alt="Domestic Construction"
    className="object-cover w-full h-64 rounded-xl"
  />
</div>                <h3 className="max-w-sm mt-4 text-3xl font-semibold leading-tight">
                  A visual space for your domestic construction showcase.
                </h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="p-4 border rounded-2xl border-white/10 bg-white/10">
                  <div className="text-sm text-slate-300">Design-Led</div>
                  <div className="mt-2 text-lg font-semibold">Modern layouts and finish quality</div>
                </div>
                <div className="p-4 border rounded-2xl border-white/10 bg-white/10">
                  <div className="text-sm text-slate-300">Execution-Led</div>
                  <div className="mt-2 text-lg font-semibold">Safe, timely, and durable delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[color:var(--background-light)]">
        <div className="container-base">
          <div className="max-w-2xl mx-auto text-center">
            <div className="eyebrow">Workflow</div>
            <h2 className="section-title">A clear and dependable process from concept to completion.</h2>
          </div>

          <div className="grid gap-6 mt-12 md:grid-cols-2 xl:grid-cols-5">
            {workflow.map((step, index) => (
              <div key={step} className="p-6 bg-white border shadow-sm rounded-3xl border-slate-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--primary-green)] text-lg font-semibold text-white">
                  {index + 1}
                </div>
                <div className="mt-5 text-lg font-semibold text-slate-900">{step}</div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  We manage this stage with focused coordination, quality checks, and practical site execution.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section">
        <div className="container-base">
          <div className="rounded-[2rem] bg-[color:var(--primary-green)] px-8 py-12 text-center text-white shadow-xl md:px-12 md:py-16">
            <div className="eyebrow text-slate-300">Start Your Project</div>
            <h2 className="max-w-3xl mx-auto mt-4 text-3xl font-semibold md:text-4xl">
              Start building your dream home today.
            </h2>
            <div className="mt-8">
              <Link className="btn-primary" href="/contact">
                Request a Site Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
