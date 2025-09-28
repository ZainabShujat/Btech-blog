import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    // centered, full-width container with a readable max width
    <main className="w-full px-4 sm:px-6 md:px-8 py-8">


      <h1 className="text-3xl font-semibold">Notes From a BTech Brain</h1>
      <p className="text-slate-600 mt-2">latest posts</p>

      <section className="mt-6 space-y-4">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/post/${p.slug}`}
            className="block w-full rounded-xl border border-slate-200 bg-white/80 p-5 md:p-6 shadow-sm hover:shadow transition"
          >
            <h2 className="text-xl md:text-2xl font-medium">{p.title}</h2>
            <p className="text-slate-600 mt-1">{p.excerpt}</p>
            <div className="text-sm text-slate-500 mt-2">
              {new Date(p.date).toLocaleDateString()} · {p.category}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
