
# 📝 Day 11 – December 23, 2025

**Focus:** Blog Platform Glow-Up, Analytics, and SEO Wizardry

Today was a “level up the whole platform” kind of day. I went full feature-factory: homepage got a facelift, search is now smarter than me, and the blog is basically ready for the world (and Google’s robots).

---

## 🚀 What I Did
- **“Coming Soon” Series Section:**
    - Added a shiny new section above recent posts to tease upcoming series. The `SeriesTrailerCard` is so pretty, I almost want to binge my own blog.
- **Article Search/Browse Page:**
    - Built a `/browse` page where you can search, filter, sort, and page through articles. The `ArticleSearch` component is the real MVP here.
- **Full-Content Search:**
    - You can now search inside the entire article body, not just the titles. No more “I know I wrote that somewhere…” moments.
- **Sitemap & Google Search Console:**
    - Generated a dynamic sitemap at `/sitemap.xml` for SEO. Updated `robots.txt` so Googlebot knows where to look. Even did the Google Search Console dance to verify and submit.
- **Article View & Like Counters:**
    - Hooked up Supabase to track views and likes. Built API routes for stats, and made client components (`ViewCounter`, `LikeButton`, `ArticleStats`) to show off the numbers. Stats now show up on article cards, so I can finally see what’s hot (and what’s… not).
- **Build/Deployment & Code Quality:**
    - Wrestled with Next.js API route param issues (Next.js 15+ = params are Promises, who knew?).
    - Fixed build/deploy errors around env vars and API usage. Also, Tailwind CSS warnings in VS Code? Turns out they’re just “suggestions,” not the CSS police.

---

## 💡 What I Learned
- Next.js 15+ API route params are Promises—don’t forget to `await`.
- Tailwind CSS warnings about “canonical classes” are just that: warnings. Ignore or auto-fix, your call.
- Supabase makes analytics easy if you treat it like a RESTful API.
- SEO is not just a checkbox—sitemap, robots.txt, and GSC actually matter.

---

## 📌 Next Steps
- Maybe auto-fix those Tailwind warnings for a cleaner codebase.
- Keep an eye out for any weird bugs or deployment fails.
- All core features are live. This blog is officially production-ready. 🎉

---
