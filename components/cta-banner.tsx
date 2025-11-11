import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_60%)]" aria-hidden />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center text-white">
        <h2 className="text-3xl font-semibold">Need rapid boarding or technical assistance?</h2>
        <p className="max-w-3xl text-base text-blue-100">
          Our operations center dispatches certified Seachios® supervisors, riding squads, and underwater teams across
          Brazilian ports with customs-compliant logistics.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg">Request boarding</Button>
          <Button size="lg" variant="outline">
            Get a quotation
          </Button>
        </div>
      </div>
    </section>
  );
}
