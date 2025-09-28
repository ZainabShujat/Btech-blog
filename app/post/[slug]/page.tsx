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

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return (
    <main className="mx-auto w-full max-w-[72ch] px-4 py-8">

      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="text-slate-500 mt-1">
        {new Date(data.date).toLocaleDateString()} · {data.category}
      </p>

      <article
  className="prose prose-slate md:prose-lg mt-6 max-w-none"
  dangerouslySetInnerHTML={{ __html: contentHtml }}
/>


      <a href="/" className="block mt-10 text-blue-600 underline">← Back to home</a>
    </main>
  );
}
