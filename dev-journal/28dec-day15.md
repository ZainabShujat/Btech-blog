---
title: "Dev Journal – Day 15"
date: "2025-12-28"
summary: "Admin Panel Polish, Theme Controls, and Community Tab Logic"
---


# 📝 Day 15 – December 28, 2025

**Focus:** Admin Panel Polish, Theme Shenanigans, and Community Tab Drama

Today was all about making the admin side of the blog feel less like a construction zone and more like a real dashboard. Also, theme controls got a glow-up, and the Community tab finally found its place (even if it’s “under construction”).

---

## 🎨 Theme Controls
- Added a “None (Default)” button to the theme selector, so I can bail out of special themes without breaking a sweat.
- Only one theme can be active at a time now—no more accidental theme mashups.
- The UI actually shows which theme is picked, so I don’t have to guess.

---

## 🏛️ Community Tab Logic
- The Community tab is always in the navbar now, whether the feature is on or off. Consistency!
- If it’s toggled off, you get a friendly “under construction” message. If it’s on, the full community experience appears. (Spoiler: it’s still a work in progress.)

---

## 🛠️ Localhost Auth Bypass
- For local dev, I can now skip logging in to access the admin dashboard. Testing just got 10x faster (and lazier).

---

## 🧹 Code Cleanup
- Finally deleted the old Categories tab and all its code ghosts.
- Fixed a type error from a leftover “categories” type. Oops.
- Centered the dashboard cards so the whole thing looks less like a ransom note.

---

## 🤖 Copilot & Workflow
- Used Copilot to automate the boring refactors and catch edge cases I would’ve missed.
- Wrote everything down here so future me knows what happened.

---

Spent a good chunk of today bouncing ideas around and getting some real clarity on the site’s versioning and admin logic. Here’s what I tackled:

- Finally added the site version right next to "student POV" on the homepage. Now it’s clear at a glance what build you’re looking at.
- Wrote out a proper version timeline for the About page, so future visitors (and honestly, future me) can see how the site’s grown from a static outline to a feature-packed blog. Even added a little green dot for the next big version—because, why not?
- Talked through what version numbers actually mean for a project like this. Decided v0.8.0 makes sense for now, with v0.9.0 reserved for when the community section is truly live and buzzing.
- Got a reality check on Supabase and OAuth: turns out, I don’t need to pay for custom domains just to get admin login working online. All I have to do is add my deployed site’s URL to the allowed redirect URLs in Supabase (and Google, for OAuth). No more localhost-only admin!
- Also realized my login logic is solid for both local and production—just needed those redirect settings right.

Honestly, having a running chat log like this is a lifesaver for future me. If you’re reading this, Zainab, you did a lot more than you think today.

---
