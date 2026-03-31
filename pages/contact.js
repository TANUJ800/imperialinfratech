import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import { siteData } from "../lib/siteData";

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact | Imperial Infratech-Con" path="/contact" />
      <PageHeader
        overline="Contact"
        title="Share your project requirements with our technical team."
        subtitle="We respond within 1 business day with a detailed plan, site visit schedule, and system recommendation."
      />

      <section className="section">
        <div className="container-base grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card">
            <ContactForm />
          </div>
          <div className="space-y-6">
            <div className="card">
              <div className="text-sm uppercase tracking-[0.35em] text-slate-500">Contact Details</div>
              <div className="mt-4 text-sm text-slate-600">
                <div className="font-semibold text-slate-900">{siteData.name}</div>
                <div className="mt-2">{siteData.address}</div>
                <div className="mt-2">{siteData.phonePrimary}</div>
                <div className="mt-2">{siteData.phoneSecondary}</div>
                <div className="mt-2">{siteData.email}</div>
              </div>
            </div>
            <div className="card">
              <div className="text-sm uppercase tracking-[0.35em] text-slate-500">Direct Actions</div>
              <div className="mt-4 flex flex-col gap-3">
                <a className="btn-primary" href={`tel:${siteData.phonePrimary}`}>
                  Call Now
                </a>
                <a
                  className="btn-outline"
                  href={`https://wa.me/${siteData.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
