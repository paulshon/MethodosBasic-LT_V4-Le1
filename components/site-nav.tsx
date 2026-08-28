"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { BrandMark } from "./brand-mark";

const NAV = [
  { href: "/#why", label: "Why" },
  { href: "/#features", label: "Features" },
  { href: "/download", label: "Download" },
  { href: "/about", label: "About Methodos" },
] as const;

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 lg:px-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <BrandMark size="sm" />
        </Link>

        <nav className="ml-2 hidden flex-1 items-center gap-6 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[13px] font-medium tracking-wide text-ink-2 transition-colors hover:text-brand",
                pathname === item.href && "text-brand",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-3 md:flex">
          <Link href="/login" className="text-[13px] text-ink-2 hover:text-brand">
            Sign in
          </Link>
          <Link
            href="/download"
            className="rounded-full bg-brand px-4 py-2 text-[13px] font-semibold text-white shadow-sm hover:bg-brand-dark"
          >
            Download Desktop
          </Link>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex rounded-lg border border-line p-2 text-ink md:hidden"
          aria-label="메뉴"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2 text-sm text-ink-2 hover:bg-wash"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/login" className="px-2 py-2 text-sm text-ink-2" onClick={() => setOpen(false)}>
              Sign in
            </Link>
            <Link
              href="/download"
              className="mt-1 rounded-full bg-brand px-4 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Download Desktop
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
