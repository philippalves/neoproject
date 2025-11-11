import type { Metadata } from "next";

import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | Seachios Marine Services (Brazil)",
  description:
    "Explore Seachios Marine Services offerings including cargo hold cleaning, underwater hull maintenance, ship repair, and agency support across Brazilian ports.",
  openGraph: {
    title: "Services | Seachios Marine Services (Brazil)",
    description:
      "Explore Seachios Marine Services offerings including cargo hold cleaning, underwater hull maintenance, ship repair, and agency support across Brazilian ports.",
    url: "https://seachios-placeholder.com/services",
    type: "article",
    locale: "en_US",
  },
};

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">Capabilities</span>
        <h1 className="text-4xl font-semibold text-slate-900">Marine and offshore services portfolio</h1>
        <p className="max-w-3xl text-sm text-slate-600">
          Each operation is executed by Seachios® supervisors in coordination with certified local teams, ensuring ANTAQ
          licensing, customs compliance, and safety documentation.
        </p>
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
    </div>
  );
}
