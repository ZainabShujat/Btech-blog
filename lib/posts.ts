import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt?: string;
  banner?: string;   // ⭐ NEW
};


export async function getAllPosts(): Promise<PostMeta[]> {
  try {
    // if folder missing or empty, return []
    if (!fs.existsSync(postsDir)) return [];
    const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
    const posts = files.map((file) => {
      const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
      const { data } = matter(raw);
      return data as PostMeta;
    });
    return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
  } catch (e) {
    console.error("[getAllPosts] failed:", e);
    return [];
  }
}
export async function getLatestPerCategory(): Promise<PostMeta[]> {
  const posts = await getAllPosts(); // already sorted newest → oldest

  const seen = new Map<string, PostMeta>();

  for (const p of posts) {
    const cat = p.category.toLowerCase();
    if (!seen.has(cat)) {
      seen.set(cat, p); // first = latest
    }
  }

  return Array.from(seen.values());
}

