import * as React from "react";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  children: React.ReactNode;
  speed?: number;
}

export function Marquee({ className, children, speed = 30 }: MarqueeProps) {
  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      <div
        className="flex min-w-full animate-marquee whitespace-nowrap py-2"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        className="flex min-w-full animate-marquee whitespace-nowrap py-2"
        aria-hidden
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  );
}
