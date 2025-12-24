import { getAllPosts, getLatestPerCategory } from "@/lib/posts";
import Hero from "./components/Hero";
import CategoryCard from "./components/CategoryCard";
import PostCard from "./components/PostCard";
import Link from "next/link";

export default async function Home() {
 
 const allPosts = await getAllPosts();
  const posts = allPosts.slice(0, 3); // Get latest 3 posts by date
  
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
  color="border-purple-500"
  title="Friday Insights"
  desc="Reflections and personal growth."
  href="/category/friday-insights"
/>

<CategoryCard
  color="border-pink-400"
  title="World Watch"
  desc="Weekly geopolitical summaries."
  href="/category/world-watch"
/>

<CategoryCard
  color="border-pink-300"
  title="Tech Pulse"
  desc="Latest technology trends."
  href="/category/tech-pulse"
/>

<CategoryCard
  color="border-amber-300"
  title="July Crisis"
  desc="A mini-series on student struggles."
  href="/category/july-crisis"
/>
 <CategoryCard
  color="border-amber-500"
  title="Tech Demystified"
  desc="Simplifying complex tech topics."
  href="/category/tech-demystified"
/>

<CategoryCard
  color="border-green-300"
  title="Financial Month"
  desc="Student stories on finance."
  href="/category/financial-month"
/>

<CategoryCard
  color="border-emerald-300"
  title="Milestone Stories and Miscellaneous"
  desc="Other notable posts and stories."
  href="/category/milestone-stories-and-miscellaneous"
/>

<CategoryCard
  color="border-emerald-500"
  title="Girlhood and STEM Experiences"
  desc="A documentation of the vivid experiences of a girl in STEM."
  href="/category/girlhood-and-stem-experiences"
/>

<CategoryCard
  color="border-blue-300"
  title="Behind the scenes"
  desc="A mini-series that shows behind the scenes of building projects."
  href="/category/behind-the-scenes"
/>

<CategoryCard
  color="border-blue-400"
  title="Curiosity Series"
  desc="Exploring questions, ideas, and the joy of learning."
  href="/category/curiosity-series"
/>

        </div>
      </section>

      {/* Recent Posts */}
      <section
        id="recent"
        className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8 py-12"
      >
        <h2 className="text-lg font-semibold">🗂️ Recent Posts</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">

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
              banner={p.banner}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
