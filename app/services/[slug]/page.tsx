import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";

interface ServicePageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) {
    return {
      title: "Service not found | Seachios Marine Services (Brazil)",
    };
  }
  const title = `${service.title} | Seachios Marine Services (Brazil)`;
  const description = `${service.summary} Available across Brazilian ports with certified Seachios® supervision.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://seachios-placeholder.com/services/${service.slug}`,
      type: "article",
      locale: "en_US",
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  const currentService = service!;

  return (
    <article className="space-y-12">
      <header className="space-y-4 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">Service dossier</span>
        <h1 className="text-4xl font-semibold text-slate-900">{currentService.title}</h1>
        <p className="max-w-3xl text-base text-slate-600">{currentService.summary}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg">Request service</Button>
          <Button size="lg" variant="outline">
            Download technical PDF
          </Button>
        </div>
      </header>
      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">What we deliver</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              {currentService.includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Operational highlights</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              {currentService.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <aside className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Ports serviced</h3>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              {currentService.ports.map((port) => (
                <li key={port}>{port}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Technical data</h3>
            <dl className="mt-2 space-y-2 text-sm text-slate-700">
              <div>
                <dt className="font-semibold text-slate-600">Mobilization</dt>
                <dd>{currentService.technical.mobilization}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-600">Team composition</dt>
                <dd>{currentService.technical.team}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-600">Equipment</dt>
                <dd>{currentService.technical.equipment}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-600">HSE controls</dt>
                <dd>{currentService.technical.hse}</dd>
              </div>
            </dl>
          </div>
          <p className="text-xs text-slate-500">
            Note: All deployments are subject to weather, port authority clearances, and charterer requirements. Certain
            customer details have been intentionally omitted for confidentiality.
          </p>
        </aside>
      </div>
    </article>
  );
}
