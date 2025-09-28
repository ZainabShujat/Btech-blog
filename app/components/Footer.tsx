import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8 py-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-600 to-amber-500 text-white font-bold">N</span>
          <div>
            <h3 className="text-lg font-semibold">Notes From a B Tech Brain</h3>
            <p className="text-slate-400 text-sm">Engineering insights and discoveries</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-slate-300 text-sm">
            Reach me out on linkedIn : <a className="underline" href="https://www.linkedin.com/in/zainab-shujat-56b14928b/" target="_blank" rel="noreferrer">Zainab Shujat</a>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li><Link className="hover:text-white" href="/">Home</Link></li>
              <li><Link className="hover:text-white" href="/about">About</Link></li>
              <li><Link className="hover:text-white" href="/category/friday-insights">Friday Insights</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Categories</h4>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li><Link className="hover:text-white" href="/category/tech-pulse">Tech Pulse</Link></li>
              <li><Link className="hover:text-white" href="/category/world-news">World Watch</Link></li>
              <li><Link className="hover:text-white" href="/category/friday-insights">Friday Insights</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-slate-400 text-xs flex flex-col md:flex-row gap-2 md:justify-between">
          <span>© {new Date().getFullYear()} Notes From a B Tech Brain. All rights reserved.</span>
          {/* External links can stay <a> */}
          <span>
            Built with{" "}
            <a className="underline" href="https://nextjs.org" target="_blank" rel="noreferrer">Next.js</a> &{" "}
            <a className="underline" href="https://tailwindcss.com" target="_blank" rel="noreferrer">Tailwind</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
