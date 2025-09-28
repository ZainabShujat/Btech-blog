import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default async function PostPage({ params }: Props) {
  const filePath = path.join(process.cwd(), "content", "posts", `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="text-slate-500 mt-1">
        {new Date(data.date).toLocaleDateString()} · {data.category}
      </p>
      <article className="prose prose-slate mt-6">
        {content}
      </article>

      <a href="/" className="block mt-10 text-blue-600 underline">
        ← Back to home
      </a>
    </main>
  );
}
