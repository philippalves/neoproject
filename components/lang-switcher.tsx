import { Globe2 } from "lucide-react";

export function LangSwitcher() {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 shadow-sm transition hover:border-blue-500 hover:text-blue-600"
      aria-label="Change language"
    >
      <Globe2 className="h-4 w-4" /> EN
    </button>
  );
}
