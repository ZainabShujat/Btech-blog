"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import CategoryCard from "./CategoryCard";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);


export default function CategoryList() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategoriesWithStats() {
      // Fetch categories
      const { data: cats } = await supabase.from("categories").select("*");
      if (!cats || cats.length === 0) {
        setCategories([]);
        setLoading(false);
        return;
      }
      // Fetch stats for all categories (aggregate views/likes for posts in each category)
      // We'll assume article_stats has a 'category' field or we need to join with posts
      // For now, fetch all stats and aggregate in JS
      const { data: stats } = await supabase.from("article_stats").select("category, views, likes");
      const categoryStats: Record<string, { views: number; likes: number }> = {};
      if (stats) {
        for (const s of stats) {
          const cat = (s.category || "uncategorized").toLowerCase();
          if (!categoryStats[cat]) categoryStats[cat] = { views: 0, likes: 0 };
          categoryStats[cat].views += s.views || 0;
          categoryStats[cat].likes += s.likes || 0;
        }
      }
      // Merge stats into categories
      const merged = cats.map((cat: any) => {
        const key = (cat.name || cat.title || "").toLowerCase();
        const stats = categoryStats[key] || { views: 0, likes: 0 };
        return { ...cat, ...stats };
      });
      setCategories(merged);
      setLoading(false);
    }
    fetchCategoriesWithStats();
  }, []);

  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8 py-12">
      <h2 className="text-center text-lg font-semibold">
        ✨ Explore <span className="text-purple-600">Categories</span>
      </h2>
      <p className="text-center text-slate-600 mt-1 text-sm">
        Different angles: tech, world events, and personal growth.
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {loading ? (
          <div className="text-center col-span-3 text-slate-400">Loading...</div>
        ) : categories.length > 0 ? (
          categories.map((cat: any, i: number) => (
            <CategoryCard
              key={cat.id || cat.name}
              color={i % 2 === 0 ? "border-purple-500" : "border-pink-400"}
              title={cat.title || cat.name}
              desc={cat.description || "Explore articles in this category."}
              href={`/category/${cat.name?.toLowerCase().replace(/\s+/g, "-")}`}
              likes={cat.likes}
              views={cat.views}
            />
          ))
        ) : (
          <div className="text-center col-span-3 text-slate-400">No categories found.</div>
        )}
      </div>
    </section>
  );
}