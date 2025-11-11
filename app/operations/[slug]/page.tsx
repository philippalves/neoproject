import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { operations } from "@/lib/data";

interface OperationPageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: OperationPageProps): Metadata {
  const operation = operations.find((item) => item.slug === params.slug);
  if (!operation) {
    return {
      title: "Operation not found | Seachios Marine Services (Brazil)",
    };
  }
  const title = `${operation.title} | Seachios Marine Services (Brazil)`;
  const description = `${operation.summary} Executed with Seachios® supervisors across Brazilian ports.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://seachios-placeholder.com/operations/${operation.slug}`,
      type: "article",
      locale: "en_US",
    },
  };
}

export default function OperationDetailPage({ params }: OperationPageProps) {
  const operation = operations.find((item) => item.slug === params.slug);

  if (!operation) {
    notFound();
  }

  const currentOperation = operation!;

  return (
    <article className="space-y-12">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">Operation report</p>
        <h1 className="text-4xl font-semibold text-slate-900">{currentOperation.title}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
          <span>Vessel: {currentOperation.vessel}</span>
          <span>Port: {currentOperation.port}</span>
          <span>Service: {currentOperation.service}</span>
          <span>Date: {currentOperation.date}</span>
        </div>
        <p className="max-w-3xl text-base text-slate-600">{currentOperation.summary}</p>
      </header>

      <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="space-y-4 text-slate-700">
          <h2 className="text-2xl font-semibold text-slate-900">Overview</h2>
          <p>{currentOperation.content.intro}</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">Scope of work</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {currentOperation.content.scope.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">Compliance & safety</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {currentOperation.content.compliance.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">Outcome / Result</h3>
          <p className="text-sm text-slate-700">{currentOperation.content.outcome}</p>
        </div>
        <div className="space-y-3 border-t border-slate-200 pt-6">
          <h3 className="text-lg font-semibold text-slate-900">Statement from Seachios®</h3>
          <p className="text-sm text-slate-700">{currentOperation.content.statement}</p>
        </div>
        <p className="text-xs text-slate-500">
          Certain client details have been redacted for privacy. All information complies with Brazilian port and
          customs regulations.
        </p>
      </section>
    </article>
  );
}
