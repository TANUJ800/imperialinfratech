import { useState } from "react";
import Link from "next/link";
import { siteData } from "../lib/siteData";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/industrial-epoxy-flooring", label: "Industrial Epoxy Flooring" },
  { href: "/projects", label: "Projects Portfolio" },
  { href: "/certifications", label: "Certifications & Compliance" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header sticky top-0 z-50 border-b border-white/10 backdrop-blur">
      <div className="container-base flex items-center justify-between py-5">
        <Link className="flex items-center gap-3" href="/">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--accent-gold)] text-black font-semibold">
            IC
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold text-white">{siteData.name}</div>
            <div className="text-xs text-white/70">Industrial Epoxy Flooring</div>
          </div>
        </Link>

        <nav className="hidden flex-1 flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium leading-snug text-white/80 transition hover:text-[color:var(--accent-gold)] xl:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="btn-outline border-white/70 text-white hover:border-white hover:text-white" href={`tel:${siteData.phonePrimary}`}>
            Call
          </a>
          <a
            className="btn-primary"
            href={`https://wa.me/${siteData.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center rounded-lg border border-white/30 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1">
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
          </div>
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-base flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a className="btn-outline" href={`tel:${siteData.phonePrimary}`}>
                Call
              </a>
              <a
                className="btn-primary"
                href={`https://wa.me/${siteData.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
