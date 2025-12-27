"use client";

import { useEffect, useState } from "react";

type Props = {
  slug: string;
};

export default function LikeButton({ slug }: Props) {
  const [likes, setLikes] = useState<number>(0);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    // Fetch initial like status
    fetch(`/api/likes/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setLikes(data.likes);
        setHasLiked(data.hasLiked);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch likes:", err);
        setIsLoading(false);
      });
  }, [slug]);

  const toggleLike = async () => {
    if (isLoading) return;

    // Optimistic update
    setIsAnimating(true);
    setHasLiked(!hasLiked);
    setLikes((prev) => (hasLiked ? prev - 1 : prev + 1));

    try {
      const res = await fetch(`/api/likes/${slug}`, { method: "POST" });
      const data = await res.json();

      // Update with server response
      setLikes(data.likes);
      setHasLiked(data.hasLiked);
    } catch (err) {
      console.error("Failed to toggle like:", err);
      // Revert on error
      setHasLiked(hasLiked);
      setLikes((prev) => (hasLiked ? prev + 1 : prev - 1));
    } finally {
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  return (
    <button
      onClick={toggleLike}
      disabled={isLoading}
      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 hover:border-pink-400 hover:bg-pink-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <svg
        className={`w-5 h-5 transition-all ${
          isAnimating ? "scale-125" : "scale-100"
        } ${hasLiked ? "fill-pink-500 text-pink-500" : "fill-none text-slate-600"}`}
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
      <span className={`text-sm font-medium ${hasLiked ? "text-pink-600" : "text-slate-700"}`}>
        {isLoading ? "..." : (likes || 0).toLocaleString()}
      </span>
    </button>
  );
}
