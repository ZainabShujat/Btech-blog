// app/components/Nav.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-slate-800 to-amber-600 text-white font-bold">N</span>
          <div className="leading-tight">
            <div className="font-semibold">Notes From a</div>
            <div className="text-xs text-amber-600 font-semibold -mt-0.5">B Tech Brain</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/category/friday-insights" className="hover:underline">Friday Insights</Link>
          <Link href="/category/milestone-stories-and-miscellaneous" className="hover:underline">Milestone Stories and Miscellaneous</Link>
          <Link href="/about" className="hover:underline">About</Link>

        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md inline-flex items-center justify-center text-slate-700 hover:bg-slate-100"
          >
            {/* simple animated bars */}
            <span className="sr-only">Toggle menu</span>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                className={`transition-all duration-200 ${open ? "opacity-0" : "opacity-100"}`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
              <path
                className={`transition-all duration-200 ${open ? "opacity-100 rotate-90" : "opacity-0"}`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown panel */}
      <div
        className={`md:hidden bg-white border-b border-slate-100 shadow-sm transition-[max-height,opacity] duration-200 overflow-hidden ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-3 pb-4 space-y-2">
          <Link href="/" className="block py-2 px-2 rounded hover:bg-slate-50">Home</Link>
          <Link href="/about" className="block py-2 px-2 rounded hover:bg-slate-50">About</Link>

          <Link href="/category/friday-insights" className="block py-2 px-2 rounded hover:bg-slate-50">Friday Insights</Link>
          <Link href="/category/tech-pulse" className="block py-2 px-2 rounded hover:bg-slate-50">Tech Pulse</Link>
          <Link href="/category/world-news" className="block py-2 px-2 rounded hover:bg-slate-50">World Watch</Link>
        </div>
      </div>
    </header>
  );
}
