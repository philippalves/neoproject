import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Seachios Marine Services (Brazil)",
  description:
    "Learn about Seachios Marine Services, a Brazilian maritime partner delivering compliant cargo hold cleaning, underwater work, and ship repair across national ports.",
  openGraph: {
    title: "About | Seachios Marine Services (Brazil)",
    description:
      "Learn about Seachios Marine Services, a Brazilian maritime partner delivering compliant cargo hold cleaning, underwater work, and ship repair across national ports.",
    url: "https://seachios-placeholder.com/about",
    type: "article",
    locale: "en_US",
  },
};

export default function AboutPage() {
  return (
    <article className="space-y-12">
      <header className="space-y-4">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">Our company</span>
        <h1 className="text-4xl font-semibold text-slate-900">Brazilian specialists in maritime support services</h1>
        <p className="max-w-3xl text-base text-slate-600">
          Seachios® integrates operations, logistics, and compliance for vessels trading along the Brazilian coastline.
          From the Amazon delta to the southern cone, we deliver standardized service levels while respecting local
          regulations and community expectations.
        </p>
      </header>
      <section className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm lg:grid-cols-2">
        <div className="space-y-4 text-sm text-slate-700">
          <h2 className="text-2xl font-semibold text-slate-900">Integrated operations center</h2>
          <p>
            Our operations desk in Santos monitors vessel movements, weather, and customs clearances 24/7. Each boarding
            begins with a compliance briefing covering ANTAQ permits, Federal Police requirements, and terminal-specific
            safety inductions.
          </p>
          <p>
            We only deploy certified technicians and avoid subcontracting to unlicensed outfits. Documentation is issued
            in Portuguese and English to align with owners, charterers, and local authorities.
          </p>
        </div>
        <div className="space-y-4 text-sm text-slate-700">
          <h2 className="text-2xl font-semibold text-slate-900">Coverage across strategic ports</h2>
          <p>
            Seachios® maintains local cells in Santos, Itaqui, Vila do Conde, Cabedelo, Vitória, Rio Grande, and other
            industrial ports. Each hub carries critical spares, PPE, and chemicals cleared through customs for immediate
            dispatch.
          </p>
          <p>
            Certain customer and operation details have been intentionally omitted for confidentiality. Our governance
            framework is audited annually to maintain traceability of every intervention.
          </p>
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">Principles we operate by</h2>
        <dl className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <dt className="text-lg font-semibold text-slate-900">Compliance first</dt>
            <dd className="mt-2 text-sm text-slate-600">
              Licensing, permits, and documentation are verified before mobilization. We coordinate closely with Receita
              Federal, port captaincies, and terminal HSE.
            </dd>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <dt className="text-lg font-semibold text-slate-900">Operational excellence</dt>
            <dd className="mt-2 text-sm text-slate-600">
              Supervisors maintain detailed work logs, photographic evidence, and after-action reports for owners and
              charterers.
            </dd>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <dt className="text-lg font-semibold text-slate-900">Safety leadership</dt>
            <dd className="mt-2 text-sm text-slate-600">
              Toolbox talks, gas monitoring, and PPE compliance are mandatory for all boarding parties. We uphold ISM and
              ISPS protocols at every port call.
            </dd>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <dt className="text-lg font-semibold text-slate-900">Transparent reporting</dt>
            <dd className="mt-2 text-sm text-slate-600">
              Clients receive daily updates, incident logs, and compliance documentation in digital formats ready for
              audit.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
