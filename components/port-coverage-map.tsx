import { ports } from "@/lib/data";

export function PortCoverageMap() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <header className="space-y-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">Port coverage</span>
          <h2 className="text-3xl font-semibold text-slate-900">Strategic presence across Brazil</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600">
            From the Amazon river mouth to the southern cone, we coordinate local partners and Seachios® supervisors to
            ensure safe, compliant interventions 24/7.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ports.map((port) => (
            <div
              key={port.slug}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-900">{port.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{port.region}</p>
              <ul className="mt-4 space-y-1 text-xs uppercase tracking-wide text-slate-500">
                {port.focus.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
