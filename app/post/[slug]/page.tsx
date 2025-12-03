// app/post/[slug]/page.tsx
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content", "posts", `${slug}.md`);
  if (!fs.existsSync(filePath)) return notFound();

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-10">
      <h1 className="text-3xl md:text-4xl font-bold">{data.title}</h1>
      <p className="text-slate-500 mt-1">
        {new Date(data.date).toLocaleDateString()} · {data.category}
      </p>

      {data?.banner && (
        <figure className="w-full rounded-lg mb-6">
          <img
            src={data.banner || ""}
            alt={data.title}
            className="w-full h-auto rounded-lg mx-auto"
            loading="lazy"
          />
        </figure>
      )}

      <article
        className="prose prose-slate mt-6 max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      <Link href="/" className="block mt-10 text-blue-600 underline">
        ← Back to home
      </Link>
    </main>
  );
}
