// scripts/check-post-categories.js
const fs = require("fs");
const path = require("path");
const fm = require("gray-matter");

// update this to your real posts folder
const postsDir = path.join(__dirname, "..", "content", "posts"); // <- adjust if needed

if (!fs.existsSync(postsDir)) {
  console.error("postsDir does not exist:", postsDir);
  process.exit(1);
}

const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md") || f.endsWith(".mdx"));

const bad = [];
for (const file of files) {
  const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
  const { data } = fm(raw);
  const hasCategory =
    (typeof data.category === "string" && data.category.trim() !== "") ||
    (Array.isArray(data.categories) && data.categories.length > 0);
  if (!hasCategory) bad.push(file);
}

if (bad.length) {
  console.log("Files missing category/frontmatter (please fix):");
  bad.forEach(f => console.log(" - " + f));
  process.exit(1);
} else {
  console.log("All posts have category/categories set.");
  process.exit(0);
}
