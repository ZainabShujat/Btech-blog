import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500" />
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8 py-20 text-center text-white">
        <p className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs tracking-wide">
          Weekly Newsletter
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold">
          Notes From a <span className="text-yellow-300">B Tech Brain</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-white/90">
          Insights on technology, geopolitics, and growth — from a student’s perspective.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="#recent"
            className="rounded-md bg-white text-purple-700 px-4 py-2 font-medium"
          >
            Browse Articles
          </Link>
          <Link
            href="/admin"
            className="rounded-md border border-white/70 px-4 py-2 font-medium"
          >
            Subscribe / Admin
          </Link>
        </div>

        <div className="mt-6 text-xs text-white/80 flex items-center justify-center gap-4">
          <span>5+ categories</span>
          <span>•</span>
          <span>27 editions</span>
          <span>•</span>
          <span>student POV</span>
        </div>
      </div>
    </section>
  );
}
