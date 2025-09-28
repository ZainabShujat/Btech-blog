import Link from "next/link";

type Props = {
  color: string; // Tailwind border color
  title: string;
  desc: string;
  href: string;
};

export default function CategoryCard({ color, title, desc, href }: Props) {
  return (
    <Link
      href={href}
      className={`block rounded-xl bg-white/90 shadow-sm hover:shadow-md border ${color} border-t-4 p-5 transition`}
    >
      <div className="font-semibold">{title}</div>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
      <div className="mt-2 text-xs text-purple-600">Explore →</div>
    </Link>
  );
}
