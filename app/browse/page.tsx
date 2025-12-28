import { getAllPosts } from "../../lib/posts";
import ArticleSearch from "../components/ArticleSearch";

export const metadata = {
  title: "Browse Articles | Notes Brain",
  description: "Search and explore all articles",
};

export default async function BrowsePage() {
  const allPosts = await getAllPosts();

  return (
    <main className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          Browse All Articles
        </h1>
        <p className="text-slate-600">
          Search through {allPosts.length} articles by title, keywords, category, or full content
        </p>
      </div>

      <ArticleSearch posts={allPosts} />
    </main>
  );
}
