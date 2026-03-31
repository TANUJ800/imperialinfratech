import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";

const services = [
  {
    title: "Industrial Epoxy Flooring",
    description:
      "Self-leveling, anti-slip, ESD, and chemical-resistant systems tailored to industrial demands."
  },
  {
    title: "Surface Preparation",
    description:
      "Shot blasting, diamond grinding, and scarifying to ensure long-term adhesion."
  },
  {
    title: "Repair and Recoating",
    description: "Rapid repairs and recoating for worn or damaged industrial floors."
  },
  {
    title: "Joint Sealing and Detailing",
    description: "Expansion joint sealing, coving, and line marking for safety compliance."
  },
  {
    title: "Civil and Structural Works",
    description: "Large-scale civil works, foundations, and industrial build-out support."
  },
  {
    title: "Warehouse Construction",
    description: "Turnkey build-outs for logistics and warehouse operations."
  }
];

const constructionWorks = [
  {
    title: "Domestic Service",
    items: [
      "Interior Designing",
      "Home Painting",
      "PU, Lamination and Duco Wood Polish",
      "Designer & Textured Paint",
      "POP Ceiling and Punning Work",
      "Wall Papers",
      "3D Flooring"
    ]
  },
  {
    title: "Industrial Services",
    items: [
      "PU & Epoxy Flooring",
      "Cementitious Flooring",
      "Structural Anti-Corrosive Protective Coatings",
      "Sand Blasting",
      "Automotive Coating",
      "Tank Lining"
    ]
  },
  {
    title: "Civil Services",
    items: [
      "Pest and All Bugs Control",
      "Civil Construction Work",
      "Terrace & Bathroom Waterproofing & Renovation",
      "Tiles Grouting",
      "Plumbing and Electrification"
    ]
  },
  {
    title: "Authorized Dealer",
    items: ["Lewis Berger Paints", "Indigo Paints"]
  },
  {
    title: "Authorized Applicator",
    items: ["Lewis Berger Home Painting and Waterproofing"]
  }
];

export default function Services() {
  return (
    <Layout>
      <SEO title="Services | Imperial Infratech-Con" path="/services" />
      <PageHeader
        overline="Services"
        title="Complete delivery across industrial flooring and construction."
        subtitle="We provide technical planning, execution, and handover support for industrial flooring systems and large-scale construction programs."
      />

      <section className="section">
        <div className="container-base grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="card">
              <div className="text-lg font-semibold text-slate-900">{service.title}</div>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-base">
          <div className="eyebrow">Construction Works</div>
          <h2 className="section-title">Allied services delivered by our in-house teams.</h2>
          <p className="section-subtitle">
            Comprehensive domestic, industrial, and civil works delivered with trained crews and
            certified applicators.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {constructionWorks.map((block) => (
              <div key={block.title} className="card">
                <div className="text-base font-semibold text-slate-900">{block.title}</div>
                <ul className="mt-4 grid gap-2 text-sm text-slate-600">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--primary-green)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
