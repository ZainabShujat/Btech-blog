// app/post/[slug]/page.tsx
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";

type Props = { params: { slug: string } };

export default async function PostPage({ params }: Props) {
  const filePath = path.join(process.cwd(), "content", "posts", `${params.slug}.md`);
  if (!fs.existsSync(filePath)) return notFound();

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  // markdown -> HTML
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return (
    <main className="w-full px-4 sm:px-6 md:px-8 py-8">
      <h1 className="text-3xl font-bold">{String(data.title)}</h1>
      <p className="text-slate-500 mt-1">
        {new Date(String(data.date)).toLocaleDateString()} · {String(data.category)}
      </p>

      <article
        className="prose prose-slate md:prose-lg mt-6 max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      <a href="/" className="block mt-10 text-blue-600 underline">
        ← Back to home
      </a>
    </main>
  );
}
