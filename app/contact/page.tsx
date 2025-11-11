import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

export const metadata: Metadata = {
  title: "Contact | Seachios Marine Services (Brazil)",
  description:
    "Contact Seachios Marine Services operations desk for cargo hold cleaning, underwater services, ship repair, and agency support across Brazilian ports.",
  openGraph: {
    title: "Contact | Seachios Marine Services (Brazil)",
    description:
      "Contact Seachios Marine Services operations desk for cargo hold cleaning, underwater services, ship repair, and agency support across Brazilian ports.",
    url: "https://seachios-placeholder.com/contact",
    type: "article",
    locale: "en_US",
  },
};

export default function ContactPage() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
      <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">Operations desk</span>
          <h1 className="text-4xl font-semibold text-slate-900">Request boarding or technical assistance</h1>
          <p className="text-sm text-slate-600">
            Provide vessel and service details so our 24/7 desk can coordinate a compliant response. Certain client
            details may be omitted for confidentiality until NDAs are executed.
          </p>
        </div>
        <form className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Your name</Label>
            <Input id="name" name="name" placeholder="Full name" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" placeholder="Company or vessel operator" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@company.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="vessel">Vessel name</Label>
            <Input id="vessel" name="vessel" placeholder="e.g., M/V Placeholder" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="port">Port</Label>
            <Input id="port" name="port" placeholder="Port in Brazil" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="eta">ETA</Label>
            <Input id="eta" name="eta" type="datetime-local" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="service">Service required</Label>
            <Select id="service" name="service" defaultValue="cargo-hold-cleaning">
              <option value="cargo-hold-cleaning">Cargo hold cleaning</option>
              <option value="underwater">Underwater services</option>
              <option value="repair">Ship repair / riding squads</option>
              <option value="agency">Shipping agency support</option>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Additional details</Label>
            <Textarea id="message" name="message" placeholder="Scope, timelines, compliance requirements" />
          </div>
          <Button type="submit" size="lg">
            Submit request
          </Button>
        </form>
      </section>
      <aside className="space-y-6 rounded-3xl border border-blue-200 bg-blue-50 p-10 text-blue-900">
        <div>
          <h2 className="text-lg font-semibold">Head office — Santos</h2>
          <p className="mt-2 text-sm text-blue-900/80">
            Avenida das Docas, 1000<br />Santos, São Paulo — Brazil
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-900/70">24/7 contacts</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>ops@seachiosplaceholder.com</li>
            <li>+55 (13) 0000-0000</li>
            <li>VHF 16 — "Seachios Operations"</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-900/70">Service hubs</h3>
          <p className="mt-2 text-sm text-blue-900/80">
            Santos · Vitória · Itaqui · Vila do Conde · Cabedelo · Rio Grande
          </p>
        </div>
        <p className="text-xs text-blue-900/60">
          Data submitted here is used solely for operational coordination and compliance with Brazilian port and customs
          requirements.
        </p>
      </aside>
    </div>
  );
}
