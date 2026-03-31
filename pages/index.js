import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Link from "next/link";
import ProjectGallery from "../components/ProjectGallery";
import { siteData } from "../lib/siteData";

const services = [
  {
    title: "Industrial Epoxy Flooring",
    description:
      "Self-leveling, anti-skid, ESD, and chemical-resistant systems built for heavy-duty traffic.",
    href: "/industrial-epoxy-flooring"
  },
  {
    title: "Surface Preparation",
    description:
      "Shot blasting, diamond grinding, and moisture control to ensure durable adhesion.",
    href: "/services"
  },
  {
    title: "Repair and Recoating",
    description:
      "Rapid turnaround solutions to restore safety, appearance, and performance.",
    href: "/services"
  },
  {
    title: "Large-Scale Construction",
    description:
      "Civil, structural, and industrial build-outs with coordinated execution.",
    href: "/services"
  }
];

const industries = [
  "Manufacturing",
  "Warehousing",
  "Pharmaceuticals",
  "Food and Beverage",
  "Automotive",
  "Electronics"
];

const process = [
  {
    title: "Site Assessment",
    description: "On-site survey, substrate testing, and requirement mapping."
  },
  {
    title: "System Design",
    description: "Selection of flooring system, thickness, and compliance needs."
  },
  {
    title: "Surface Preparation",
    description: "Mechanical preparation and moisture mitigation as needed."
  },
  {
    title: "Application",
    description: "Controlled installation with documented QA checkpoints."
  },
  {
    title: "Handover",
    description: "Final inspection, documentation, and maintenance guidance."
  }
];

const projects = [
 

];

export default function Home() {
  return (
    <Layout>
      <SEO path="/" />

      <section className="relative overflow-hidden bg-[color:var(--secondary-green)] text-white">
        <div className="container-base relative grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="eyebrow text-slate-300">Industrial Flooring and Construction</div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Precision epoxy flooring and industrial build-outs that stand up to
              the toughest operations.
            </h1>
            <p className="mt-6 text-lg text-slate-200">
              {siteData.name} partners with plant managers, EPC contractors, and warehouse
              developers to deliver durable, compliant, and fast-track flooring systems.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link className="btn-primary" href="/contact">
                Request a Site Visit
              </Link>
              <a
                className="text-white btn-outline border-white/50 hover:border-white hover:text-white"
                href={siteData.profileUrl}
                download
              >
                Download Company Profile
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center justify-center">
              <img
                className="object-cover w-64 h-64"
                src="/image/logo.jpeg"
                alt="Imperial Infratech-Con Logo"
              />
            </div>
            <div className="max-w-md p-6 text-center border rounded-2xl border-white/10 bg-white/5">
              <div className="text-sm uppercase tracking-[0.35em] text-slate-300">Built for performance</div>
              <div className="mt-3 text-2xl font-semibold">
                Specialized systems for heavy loads, chemical exposure, and 24/7 operations.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-base">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="eyebrow">Industries Served</div>
              <h2 className="section-title">Trusted by industrial teams that demand zero downtime.</h2>
              <p className="section-subtitle">
                Our crews align with safety protocols, production schedules, and compliance
                requirements to keep operations moving.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {industries.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-white card bg-brand-blue">
              <div className="text-sm uppercase tracking-[0.35em] text-white/70">Why Imperial</div>
              <ul className="grid gap-4 mt-4 text-sm text-white/80">
                <li>Dedicated site supervision and daily QA checklists.</li>
                <li>Specialized machinery for surface preparation and leveling.</li>
                <li>Material selection aligned to chemical, abrasion, and thermal load.</li>
                <li>Handover documentation with maintenance guidance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section">
        <div className="container-base">
          <div className="eyebrow">Services</div>
          <h2 className="section-title">End-to-end delivery for flooring and industrial build-outs.</h2>
          <div className="grid gap-6 mt-10 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="card">
                <div className="text-lg font-semibold text-slate-900">{service.title}</div>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                <Link className="inline-flex mt-4 text-sm font-semibold text-brand-blue" href={service.href}>
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-base">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="eyebrow">Process</div>
              <h2 className="section-title">Structured execution with safety and uptime in mind.</h2>
              <p className="section-subtitle">
                From survey to handover, every phase is aligned with client compliance and operational
                continuity.
              </p>
            </div>
            <div className="grid gap-4">
              {process.map((step, index) => (
                <div key={step.title} className="flex gap-4 card">
                  <div className="flex items-center justify-center w-10 h-10 font-semibold text-white rounded-full bg-brand-blue">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{step.title}</div>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section">
        <div className="container-base">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="eyebrow">Projects Portfolio</div>
              <h2 className="section-title">Recent industrial flooring and construction delivery.</h2>
            </div>
            <Link className="btn-outline" href="/projects">
              View All Projects
            </Link>
          </div>
          <div className="mt-8">
            {/* Show first 3 project cards directly */}
            <div className="grid gap-6 mb-10 md:grid-cols-2 lg:grid-cols-3">
              {projects.slice(0, 3).map((item) => (
                <div key={item.title} className="overflow-hidden bg-white border group rounded-2xl border-slate-200">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-sm text-slate-500">{item.category}</div>
                    <div className="mt-2 text-lg font-semibold text-slate-900">{item.title}</div>
                    <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Keep the gallery for all projects below */}
            <ProjectGallery items={projects} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-base">
          <div className="p-10 text-white rounded-3xl bg-brand-blue md:p-14">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="eyebrow text-slate-300">Ready to Start</div>
                <h2 className="text-3xl font-semibold md:text-4xl">
                  Schedule a site visit and receive a technical proposal within 48 hours.
                </h2>
                <p className="mt-4 text-slate-200">
                  Share your project requirements, and our technical team will recommend the right
                  system, timeline, and execution plan.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link className="justify-center w-full btn-primary" href="/contact">
                  Request a Proposal
                </Link>
                <a
                  className="justify-center w-full text-white btn-outline border-white/60 hover:border-white hover:text-white"
                  href={`tel:${siteData.phonePrimary}`}
                >
                  Call {siteData.phonePrimary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
