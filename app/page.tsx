import Link from "next/link";
import { ShieldCheck, FileCheck, Anchor, Scale } from "lucide-react";

import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { OperationCard } from "@/components/operation-card";
import { PortCoverageMap } from "@/components/port-coverage-map";
import { CtaBanner } from "@/components/cta-banner";
import { Badge } from "@/components/badge";
import { services, operations } from "@/lib/data";

const complianceBadges = [
  {
    icon: ShieldCheck,
    title: "IMO-aligned procedures",
    description: "Adhering to international safety management and ISM code protocols.",
  },
  {
    icon: FileCheck,
    title: "SOLAS documentation",
    description: "Permits, risk assessments, and toolbox talks filed for every operation.",
  },
  {
    icon: Anchor,
    title: "MARPOL waste control",
    description: "Licensed contractors handle sludge, residues, and bilge water disposal.",
  },
  {
    icon: Scale,
    title: "ANTAQ licensing",
    description: "Brazilian maritime authority registration for diving and riding squads.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />

      <section className="space-y-10" aria-labelledby="key-services">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">Core offerings</span>
            <h2 id="key-services" className="mt-3 text-3xl font-semibold text-slate-900">
              Key services for marine assets in Brazil
            </h2>
          </div>
          <Link href="/services" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
            View all services →
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ slug, title, summary, includes, ports }) => (
            <ServiceCard
              key={slug}
              slug={slug}
              title={title}
              summary={summary}
              includes={includes}
              ports={ports}
            />
          ))}
        </div>
      </section>

      <section className="space-y-10" aria-labelledby="operations">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">Recent deployments</span>
            <h2 id="operations" className="mt-3 text-3xl font-semibold text-slate-900">
              Operations & case studies
            </h2>
          </div>
          <Link href="/operations" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
            Explore operations →
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {operations.map(({ slug, title, vessel, port, service, date, summary, tags }) => (
            <OperationCard
              key={slug}
              slug={slug}
              title={title}
              vessel={vessel}
              port={port}
              service={service}
              date={date}
              summary={summary}
              tags={tags}
            />
          ))}
        </div>
      </section>

      <div id="ports">
        <PortCoverageMap />
      </div>

      <section id="compliance" className="space-y-10">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">Compliance & assurance</span>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">Regulatory-grade execution every time</h2>
          <p className="mt-3 text-sm text-slate-600">
            We align with charterers, P&I clubs, and Brazilian maritime authorities to deliver reliable outcomes without
            compromising HSE or documentation standards.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {complianceBadges.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <item.icon className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {["IMO", "SOLAS", "MARPOL", "ANTAQ"].map((label) => (
            <Badge key={label} label={`${label} Ready`} className="bg-blue-100" />
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
