import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  className?: string;
}

export function Badge({ label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-blue-500/40 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700",
        className
      )}
    >
      {label}
    </span>
  );
}
