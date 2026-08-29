import Link from "next/link";
import { BrandMark } from "./brand-mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between lg:px-6">
        <BrandMark size="sm" />
        <nav className="flex flex-wrap gap-4 text-sm text-ink-2">
          <Link href="/#features" className="hover:text-brand">
            Features
          </Link>
          <Link href="/download" className="hover:text-brand">
            Download
          </Link>
          <Link href="/about" className="hover:text-brand">
            About Methodos
          </Link>
        </nav>
        <p className="text-xs text-ink-3">© {new Date().getFullYear()} Methodos Lab</p>
      </div>
    </footer>
  );
}
