import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/badge";

interface ServiceCardProps {
  slug: string;
  title: string;
  summary: string;
  includes: string[];
  ports: string[];
}

export function ServiceCard({ slug, title, summary, includes, ports }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="space-y-4">
        <Badge label="Certified Service" className="bg-blue-100" />
        <div>
          <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
          <p className="mt-3 text-sm text-slate-600">{summary}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Includes</h4>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Available in</h4>
          <p className="mt-1 text-sm text-slate-600">{ports.join(", ")}</p>
        </div>
      </div>
      <Link
        href={`/services/${slug}`}
        className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 transition group-hover:text-blue-500"
      >
        Learn more
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </article>
  );
}
