import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-semibold">Notes From a BTech Brain</h1>
      <p className="text-slate-600 mt-2">latest posts</p>

      <section className="mt-6 space-y-4">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/post/${p.slug}`}
            className="block rounded-xl bg-white p-5 shadow hover:-translate-y-0.5 transition"
          >
            <h2 className="text-xl font-medium">{p.title}</h2>
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
