// app/components/PostCard.tsx
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  slug: string;
  excerpt?: string;
  date?: string;
  category?: string;
  banner?: string;
};

export default function PostCard({ title, slug, excerpt, date, category, banner }: Props) {
  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100">
      {banner ? (
        // using a normal <img> is simplest — Next/Image is optional
        <div className="h-72 w-full overflow-hidden">
          <img
            src={banner}
            alt={title}
            
            className="w-auto h-full object-contain max-h-72 mx-auto"
            loading="lazy"
            style={{ display: "block" }}
          />
        </div>
      ) : null}

      <div className="p-5">
        <div className="flex items-center gap-3 text-sm text-slate-500 mb-2">
          {category && <span className="uppercase tracking-wide text-xs">{category}</span>}
          {date && <span className="text-xs">{date}</span>}
        </div>

        <h3 className="text-lg font-semibold leading-tight">
          <Link href={`/post/${slug}`}>{title}</Link>
        </h3>

        {excerpt && <p className="text-slate-600 mt-2">{excerpt}</p>}

        <div className="mt-4">
          <Link
            href={`/post/${slug}`}
            className="inline-block text-sm font-medium text-purple-600 underline"
          >
            Read article →
          </Link>
        </div>
      </div>
    </article>
  );
}
