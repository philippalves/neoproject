import { Button } from "@/components/ui/button";
import { Badge } from "@/components/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-950 via-blue-950 to-blue-900 px-8 py-16 text-white shadow-xl">
      <div className="absolute inset-0 opacity-60" aria-hidden>
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <Badge label="FM: Seachios® Marine Services" className="bg-blue-500/20 text-blue-100" />
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Integrated marine support for vessels calling Brazilian ports
          </h1>
          <p className="text-lg text-blue-100">
            We mobilize certified teams for cargo hold cleaning, underwater hull care, and voyage repairs while
            maintaining full compliance with ANTAQ, customs, and port authority mandates.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg">Request boarding</Button>
            <Button size="lg" variant="outline">
              View compliance dossier
            </Button>
          </div>
          <p className="text-sm text-blue-200">
            Certain customer and operation details have been intentionally omitted for confidentiality.
          </p>
        </div>
        <div className="relative">
          <div className="rounded-3xl border border-blue-500/30 bg-white/10 p-8 backdrop-blur">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-wide text-blue-200">Active operations</span>
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-100">Live</span>
              </div>
              <ul className="space-y-4 text-sm text-blue-100">
                <li className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <p className="font-semibold">M/V Estrela Azul</p>
                    <p className="text-xs uppercase tracking-wide text-blue-200">Cargo hold wash | Port of Santos</p>
                  </div>
                  <span className="text-xs text-blue-200">ETA 04:00</span>
                </li>
                <li className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <p className="font-semibold">FPSO Aurora Reef</p>
                    <p className="text-xs uppercase tracking-wide text-blue-200">UWILD prep | Port of Vitória</p>
                  </div>
                  <span className="text-xs text-blue-200">ETA 11:30</span>
                </li>
                <li className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">M/T Cabedelo Star</p>
                    <p className="text-xs uppercase tracking-wide text-blue-200">Tank cleaning | Port of Cabedelo</p>
                  </div>
                  <span className="text-xs text-blue-200">ETA 19:45</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
