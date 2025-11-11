import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="text-lg font-semibold text-white">
            Seachios Marine Services
          </Link>
          <p className="text-sm text-slate-400">
            Brazilian maritime partner for compliant cargo hold cleaning, underwater maintenance, ship repair, and
            agency support.
          </p>
          <div className="space-y-2 text-sm text-slate-400">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> ops@seachiosplaceholder.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +55 (13) 0000-0000
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="h-4 w-4" /> Avenida das Docas, 1000 — Santos, SP — Brazil
            </p>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Services</h3>
          <ul className="space-y-2 text-slate-400">
            <li>
              <Link href="/services/cargo-hold-cleaning" className="hover:text-white">
                Cargo hold cleaning
              </Link>
            </li>
            <li>
              <Link href="/services/underwater-hull-cleaning" className="hover:text-white">
                Underwater hull cleaning
              </Link>
            </li>
            <li>
              <Link href="/services/ship-repair-riding-squads" className="hover:text-white">
                Ship repair & riding squads
              </Link>
            </li>
            <li>
              <Link href="/services/shipping-agency-support" className="hover:text-white">
                Shipping agency support
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Compliance</h3>
          <ul className="space-y-2 text-slate-400">
            <li>
              <Link href="#compliance" className="hover:text-white">
                IMO alignment
              </Link>
            </li>
            <li>
              <Link href="#compliance" className="hover:text-white">
                SOLAS procedures
              </Link>
            </li>
            <li>
              <Link href="#compliance" className="hover:text-white">
                MARPOL waste management
              </Link>
            </li>
            <li>
              <Link href="#compliance" className="hover:text-white">
                ANTAQ licensing
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Connect</h3>
          <div className="flex items-center gap-3">
            <Link href="https://linkedin.com" className="rounded-full border border-slate-700 p-2 text-slate-400 hover:border-blue-500 hover:text-blue-400">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="https://instagram.com" className="rounded-full border border-slate-700 p-2 text-slate-400 hover:border-blue-500 hover:text-blue-400">
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 bg-slate-950 py-6">
        <p className="mx-auto max-w-6xl px-6 text-xs text-slate-500">
          Seachios Crane Naval e Serviços Marítimos Ltda. — CNPJ 00.000.000/0001-00 (placeholder)
        </p>
      </div>
    </footer>
  );
}
