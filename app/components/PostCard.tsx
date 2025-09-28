type Post = {
  title: string;
  slug: string;
  excerpt?: string;
  date: string;
  category: string;
};

export default function PostCard({ title, slug, excerpt, date, category }: Post) {
  return (
    <a
      href={`/post/${slug}`}
      className="block w-full rounded-xl border border-slate-200 bg-white/90 p-5 shadow-sm hover:shadow-md transition"
    >
      <h3 className="text-lg md:text-xl font-medium">{title}</h3>
      {excerpt && <p className="text-slate-600 mt-1">{excerpt}</p>}
      <div className="text-xs text-slate-500 mt-2">
        {new Date(date).toLocaleDateString()} · {category}
      </div>
    </a>
  );
}
