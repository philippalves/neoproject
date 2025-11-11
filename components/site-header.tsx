"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlignRight } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { LangSwitcher } from "@/components/lang-switcher";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Operations", href: "/operations" },
  { name: "Ports", href: "#ports" },
  { name: "Compliance", href: "#compliance" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-blue-900">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-white">S</span>
          Seachios Marine Services
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 lg:flex">
          {navItems.map((item) => {
            const isActive = item.href !== "#ports" && item.href !== "#compliance" && pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`transition hover:text-blue-600 ${isActive ? "text-blue-600" : ""}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LangSwitcher />
          <Button size="sm">Request boarding</Button>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 p-2 text-slate-600 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <AlignRight className="h-5 w-5" />
        </button>
      </div>
      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-3 text-sm font-semibold text-slate-700">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <LangSwitcher />
            <Button size="sm" className="w-full">
              Request boarding
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
