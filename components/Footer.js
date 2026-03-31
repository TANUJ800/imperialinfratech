import Link from "next/link";
import { siteData } from "../lib/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-base py-12">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="text-lg font-semibold text-slate-900">{siteData.name}</div>
            <p className="mt-3 text-sm text-slate-600">
              Specialized industrial epoxy flooring and large-scale construction services with a
              focus on safety, durability, and on-time execution.
            </p>
            <div className="mt-4 text-sm text-slate-600">
              <div>{siteData.address}</div>
              <div>{siteData.phonePrimary}</div>
              <div>{siteData.phoneSecondary}</div>
              <div>{siteData.email}</div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">Quick Links</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
              <Link href="/services">Services</Link>
              <Link href="/projects">Projects Portfolio</Link>
              <Link href="/certifications">Certifications & Compliance</Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">Get In Touch</div>
            <div className="mt-3 flex flex-col gap-3">
              <a className="btn-primary" href="/contact">
                Request a Site Visit
              </a>
              <a className="btn-outline" href={siteData.profileUrl} download>
                Download Company Profile
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
          <span>Copyright {new Date().getFullYear()} {siteData.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
