export default function Nav() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-slate-800 to-amber-600 text-white font-bold">N</span>
          <div className="leading-tight">
            <div className="font-semibold">Notes From a</div>
            <div className="text-xs text-amber-600 font-semibold -mt-0.5">B. Tech Brain</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-4 text-sm">
          <a href="/" className="hover:underline">Home</a>
          <a href="/category/friday-insights" className="hover:underline">Friday Insights</a>
          <a href="/category/tech-pulse" className="hover:underline">Tech Pulse</a>
          <a href="/category/world-news" className="hover:underline">World Watch</a>
          <a href="/admin" className="rounded border px-2 py-1">Admin</a>
        </div>
      </nav>
    </header>
  );
}
