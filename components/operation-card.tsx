import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/badge";

interface OperationCardProps {
  slug: string;
  title: string;
  vessel: string;
  port: string;
  service: string;
  date: string;
  summary: string;
  tags: string[];
}

export function OperationCard({
  slug,
  title,
  vessel,
  port,
  service,
  date,
  summary,
  tags,
}: OperationCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <Badge key={tag} label={tag} />
          ))}
        </div>
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <dl className="grid grid-cols-2 gap-2 text-xs uppercase tracking-wide text-slate-500">
          <div>
            <dt className="font-medium text-slate-600">Vessel</dt>
            <dd className="text-slate-700">{vessel}</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-600">Port</dt>
            <dd className="text-slate-700">{port}</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-600">Service</dt>
            <dd className="text-slate-700">{service}</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-600">Date</dt>
            <dd className="text-slate-700">{date}</dd>
          </div>
        </dl>
        <p className="text-sm text-slate-600">{summary}</p>
      </div>
      <Link
        href={`/operations/${slug}`}
        className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-500"
      >
        Read operation report
        <ArrowUpRight className="ml-2 h-4 w-4" />
      </Link>
    </article>
  );
}
