"use client";

import { useEffect, useState } from "react";

type Props = {
  slug: string;
};

type Stats = {
  views: number;
  likes: number;
};

export default function ArticleStats({ slug }: Props) {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    Promise.all([
      fetch(`/api/views/${slug}`).then((r) => r.json()),
      fetch(`/api/likes/${slug}`).then((r) => r.json()),
    ])
      .then(([viewData, likeData]) => {
        setStats({
          views: viewData.views || 0,
          likes: likeData.likes || 0,
        });
      })
      .catch((err) => console.error("Failed to fetch stats:", err));
  }, [slug]);

  if (!stats) {
    return (
      <div className="flex items-center gap-4 text-xs text-slate-400">
        <span>...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 text-xs text-slate-500">
      {/* Views */}
      <div className="flex items-center gap-1">
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        <span>{stats.views.toLocaleString()}</span>
      </div>

      {/* Likes */}
      <div className="flex items-center gap-1">
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <span>{stats.likes.toLocaleString()}</span>
      </div>
    </div>
  );
}
