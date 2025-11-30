import { getAllPosts } from "@/lib/posts";
import PostCard from "@/app/components/PostCard";

type Props = {
  params: { category: string };
};

export default async function CategoryPage({ params }) {
  const { category } = await params;   // ⭐ FIX: Await the params promise
  const posts = await getAllPosts();
  const filtered = posts.filter(
    (p) => p.category.toLowerCase() === category
  );

  return (
    <main className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8 py-10">
      <h1 className="text-3xl font-bold capitalize">
        {category.replace("-", " ")}
      </h1>

      {filtered.length === 0 && (
        <p className="mt-4 text-slate-600">
          No posts in this category yet.
        </p>
      )}

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">

        {filtered.map((p) => (
          <PostCard
            key={p.slug}
            title={p.title}
            slug={p.slug}
            excerpt={p.excerpt}
            date={p.date}
            category={p.category}
            banner={p.banner}
          />
        ))}
      </div>
    </main>
  );
}
