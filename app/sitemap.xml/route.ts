import { getAllPosts } from '@/lib/posts';
import { NextResponse } from 'next/server';

import type { PostMeta } from '@/lib/posts';

export async function GET() {
  const baseUrl = 'https://btechbrain.vercel.app';
  let posts: PostMeta[] = [];
  try {
    posts = await getAllPosts();
  } catch (error) {
    posts = [];
  }

  // Static URLs
  const staticUrls = [
    '',
    'browse',
    'about',
    'start-here',
    'series-hub',
  ];

  // Category URLs
  const categories = [
    'friday-insights',
    'world-watch',
    'tech-pulse',
    'july-crisis',
    'tech-demystified',
    'financial-month',
    'milestone-stories-and-miscellaneous',
    'girlhood-and-stem-experiences',
    'behind-the-scenes',
    'curiosity-series',
  ];

  let urls = [
    ...staticUrls.map((path) => ({
      loc: `${baseUrl}/${path}`.replace(/\/$/, ''),
      changefreq: path === '' ? 'daily' : 'monthly',
      priority: path === '' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    })),
    ...categories.map((cat) => ({
      loc: `${baseUrl}/category/${cat}`,
      changefreq: 'weekly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    })),
    ...posts.map((post) => ({
      loc: `${baseUrl}/post/${post.slug}`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((url) => `  <url>\n    <loc>${url.loc}</loc>\n    <lastmod>${url.lastmod}</lastmod>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>\n  </url>`).join('\n') +
    '\n</urlset>';

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
