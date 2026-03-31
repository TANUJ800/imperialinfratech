import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";

const compliance = [
  "Project-specific method statements and risk assessments",
  "Material data sheets and chemical handling documentation",
  "Quality inspection checklists with photo records",
  "Safety toolbox talks and on-site supervision logs",
  "Handover documentation and maintenance guidance"
];

export default function Certifications() {
  return (
    <Layout>
      <SEO title="Certifications & Compliance | Imperial Infratech-Con" path="/certifications" />
      <PageHeader
        overline="Certifications & Compliance"
        title="Compliance-ready execution aligned with industrial standards."
        subtitle="We maintain structured documentation and quality processes to meet client compliance expectations and safety requirements."
      />

      <section className="section">
        <div className="container-base grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="eyebrow">Compliance Framework</div>
            <h2 className="section-title">Structured processes to keep every site audit-ready.</h2>
            <ul className="grid gap-3 mt-6 text-sm text-slate-600">
              {compliance.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="w-2 h-2 mt-1 rounded-full bg-brand-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-white border rounded-3xl border-slate-200">
            <img className="rounded-2xl" src="/image/certificate.jpeg" alt="Compliance documentation" />
            <div className="mt-4 text-sm text-slate-600">
              Certificates and compliance documentation are shared during the proposal and
              onboarding process.
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
