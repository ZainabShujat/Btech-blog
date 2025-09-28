import { getAllPosts } from "@/lib/posts";
import Hero from "./components/Hero";
import CategoryCard from "./components/CategoryCard";
import PostCard from "./components/PostCard";
import Link from "next/link";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main>
      <Hero />

      {/* Categories */}
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8 py-12">
        <h2 className="text-center text-lg font-semibold">
          ✨ Explore <span className="text-purple-600">Categories</span>
        </h2>
        <p className="text-center text-slate-600 mt-1 text-sm">
          Different angles: tech, world events, and personal growth.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <CategoryCard
            color="border-orange-400"
            title="Tech Demystified"
            desc="Simplifying complex tech topics."
            href="/category/tech-demy"
          />
          <CategoryCard
            color="border-sky-400"
            title="World Watch"
            desc="Weekly geopolitical summaries."
            href="/category/world-news"
          />
          <CategoryCard
            color="border-fuchsia-400"
            title="Tech Pulse"
            desc="Latest technology trends."
            href="/category/tech-pulse"
          />
          <CategoryCard
            color="border-amber-500"
            title="July Crisis"
            desc="A mini-series on student struggles."
            href="/category/july-crisis"
          />
          <CategoryCard
            color="border-emerald-500"
            title="Friday Insights"
            desc="Reflections and personal growth."
            href="/category/friday-insights"
          />
        </div>
      </section>

      {/* Recent Posts */}
      <section
        id="recent"
        className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8 py-12"
      >
        <h2 className="text-lg font-semibold">🗂️ Recent Posts</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.length === 0 && (
            <p className="text-slate-600">
              No posts yet. Create one in{" "}
              <Link href="/admin" className="underline text-purple-600">
                /admin
              </Link>
              .
            </p>
          )}
          {posts.map((p) => (
            <PostCard
              key={p.slug}
              title={p.title}
              slug={p.slug}
              excerpt={p.excerpt}
              date={p.date}
              category={p.category}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
