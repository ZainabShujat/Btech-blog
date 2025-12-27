import { MetadataRoute } from 'next';
import { getAllPosts, PostMeta } from '@/lib/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://btechbrain.vercel.app';
  
  let posts: PostMeta[] = [];
  try {
    posts = await getAllPosts();
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error);
    posts = [];
  }
  
  // Generate URLs for all posts
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/post/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/browse`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/start-here`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/series-hub`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  // Category pages
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

  const categoryUrls = categories.map((cat) => ({
    url: `${baseUrl}/category/${cat}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryUrls, ...postUrls];
}
