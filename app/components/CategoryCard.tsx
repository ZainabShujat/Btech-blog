import Link from "next/link";

type Props = {
  title: string;
  desc: string;
  href: string;
  color?: string;
  likes?: number; // <-- add this
  views?: number; // <-- add this
};

export default function CategoryCard({ color, title, desc, href }: Props) {
  return (
    <Link
      href={href}
      className={`block rounded-xl bg-white/90 dark:bg-slate-900/90 shadow-sm hover:shadow-md border ${color} border-t-4 p-5 transition dark:border-slate-700 dark:hover:shadow-lg`}
    >
      <div className="font-semibold text-slate-900 dark:text-white">{title}</div>
      <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{desc}</p>
      <div className="mt-2 text-xs text-purple-700 dark:text-purple-200">Explore →</div>
    </Link>
  );
}