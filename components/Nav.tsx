"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/critique", label: "Critique" },
  { href: "/shot-planning", label: "Shot Planning" },
  { href: "/lighting", label: "Lighting" },
  { href: "/presets", label: "Presets" },
  { href: "/pricing", label: "Pricing" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bone/85 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl tracking-tightest font-light">
            Plate
          </span>
          <span className="text-ember text-lg leading-none">&</span>
          <span className="font-display text-2xl tracking-tightest font-light">
            Frame
          </span>
          <span className="hidden sm:inline-block ml-3 text-[10px] uppercase tracking-widest text-ink/50 font-mono border-l border-ink/20 pl-3">
            Est. 2026
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link text-[13px] uppercase tracking-widest text-ink/80 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="ml-2 inline-flex items-center px-5 py-2.5 bg-ink text-bone text-[11px] uppercase tracking-widest hover:bg-ember transition-colors"
          >
            Sign in
          </Link>
        </nav>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/10 bg-bone">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[13px] uppercase tracking-widest text-ink/80"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 bg-ink text-bone text-[11px] uppercase tracking-widest"
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
