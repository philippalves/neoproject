import type { Metadata } from "next";

import { OperationCard } from "@/components/operation-card";
import { operations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Operations | Seachios Marine Services (Brazil)",
  description:
    "Review Seachios Marine Services recent maritime operations across Brazilian ports, including cargo hold cleaning, underwater support, and voyage repairs.",
  openGraph: {
    title: "Operations | Seachios Marine Services (Brazil)",
    description:
      "Review Seachios Marine Services recent maritime operations across Brazilian ports, including cargo hold cleaning, underwater support, and voyage repairs.",
    url: "https://seachios-placeholder.com/operations",
    type: "article",
    locale: "en_US",
  },
};

export default function OperationsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">Operational intelligence</span>
        <h1 className="text-4xl font-semibold text-slate-900">Operation dossiers & case studies</h1>
        <p className="max-w-3xl text-sm text-slate-600">
          These reports highlight how Seachios® mobilizes technical teams under Brazilian regulations, delivering
          compliant solutions for shipowners, charterers, and offshore operators.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
    </div>
  );
}
