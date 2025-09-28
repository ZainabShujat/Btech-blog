# Dev Journal — 28th September 2025

## What I Did
- Kicked off the **Notes From a BTech Brain** project with Next.js + Tailwind v4 (after fumbling around a *lot* with npm and Git).
- Added Markdown support so posts can live as `.md` files — no copy-pasting walls of text into JSX 🙌
- Built the blog structure:  
  - Homepage with latest posts + cards  
  - Single post page (`[slug]`) that actually renders Markdown  
  - Nav + footer so it doesn’t look like a floating page in the void
- Debugged way more than I thought I would:  
  - Wrong command names (`mpm run deb` lmao 💀)  
  - Git yelling about CRLF  
  - Tailwind v4 throwing config tantrums  
  - Netlify build errors because I used `<a>` instead of `<Link>` (bruh)  
  - Type mismatches in `[slug]/page.tsx` that almost made me cry
- Finally pushed everything to GitHub and **deployed** to [btechbrain.netlify.app](https://btechbrain.netlify.app/) 🎉

## Reflections
I restarted this thing like… 3 times? Maybe 4? Lost count honestly. Every time I thought “okay, we’re rolling,” some new error popped up. Felt like playing whack-a-mole with bugs.  

But hey, by the end of today, I had a working blog **live** on the internet. The frontend still looks kinda bland (we’ll polish later), but the fact that I can type a post in Markdown and see it on my site is insane.  

Honestly proud of myself for pushing through the chaos. This is officially **Day 0** of the blog’s journey. From “uh what is npm” in the morning → to “my site is live” by night. Messy, but real. Exactly my vibe.
