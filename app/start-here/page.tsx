"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const moodIcons: Record<string, string> = {
  "If you’re curious": "🧩",
  "If you’re curious (about tech and the future)": "🤖",
  "If you feel lost (or are questioning the system)": "🧭",
  "If you need to feel seen": "👀",
  "If you feel lost (or want a fresh start)": "🌱",
  "If you’re building (or rebuilding)": "🔨",
};

const articles = [
  {
    title: "The Puzzle That Broke My Brain (In the Best Way)",
    slug: "the-puzzle-that-broke-my-brain-in-the-best-way",
    mood: "If you’re curious",
    description:
      "Dive into a mathematically rare coincidence and follow a mind-bending puzzle that rekindles a love for math and tech. Perfect for anyone who enjoys playful, beautiful logic.",
  },
  {
    title: "Internship Illusions",
    slug: "internship-illusions",
    mood: "If you feel lost (or are questioning the system)",
    description:
      "A candid look at the realities of student internships, especially unpaid ones, and the lessons about self-worth, burnout, and financial awareness that come with them. Great for students navigating early career choices.",
  },
  {
    title: "Girlhood in Defense Mode",
    slug: "girlhood-in-defense-mode",
    mood: "If you need to feel seen",
    description:
      "An honest reflection on growing up as a girl, the invisible calculations for safety, and how caution becomes second nature. This piece resonates with anyone who’s ever felt the weight of unspoken rules.",
  },
  {
    title: "A Beginning Amidst the Chaos",
    slug: "a-beginning-amidst-the-chaos",
    mood: "If you feel lost (or want a fresh start)",
    description:
      "The author introduces their newsletter as a way to process life’s chaos, offering a space for reflection, tech updates, and honest college diaries. Ideal for readers seeking community and clarity.",
  },
  {
    title: "September In a Nutshell",
    slug: "september-in-a-nutshell",
    mood: "If you’re building (or rebuilding)",
    description:
      "A month-in-review that captures unexpected changes, small wins, and personal growth through setbacks. Encourages readers to find meaning in both progress and loss.",
  },
  {
    title: "💰Crypto and the Future of Digital Currency",
    slug: "crypto-and-the-future-of-digital-currency",
    mood: "If you’re curious (about tech and the future)",
    description:
      "A clear, approachable guide to what crypto is, why it matters, and how it’s changing the way we think about money. Great for anyone wanting to demystify digital currencies.",
  },
];


const grouped = articles.reduce((acc, article) => {
  if (!acc[article.mood]) acc[article.mood] = [];
  acc[article.mood].push(article);
  return acc;
}, {} as Record<string, typeof articles>);

export default function StartHerePage() {
  // Group mood sections into pairs for 2-in-1-line display
  const moodEntries = Object.entries(grouped);
  const moodPairs = [];
  for (let i = 0; i < moodEntries.length; i += 2) {
    moodPairs.push(moodEntries.slice(i, i + 2));
  }
  return (
    <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 text-slate-900 dark:text-slate-100">
      <motion.h1
        className="text-5xl font-extrabold mb-6 text-black dark:text-slate-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Start Here
      </motion.h1>
      <motion.p
        className="mb-12 text-xl text-slate-800 dark:text-slate-200 max-w-3xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Not sure where to begin? Here’s a handpicked guide to some of my favorite pieces, grouped by what you might be feeling or looking for.
      </motion.p>
      <div className="space-y-12">
        {moodPairs.map((pair, rowIdx) => (
          <div key={rowIdx} className="flex flex-col sm:flex-row gap-8 w-full">
            {pair.map(([mood, articles], i) => (
              <motion.section
                key={mood}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (rowIdx * 2 + i), duration: 0.6 }}
                className="flex-1 min-w-0"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-2xl">{moodIcons[mood] || "✨"}</div>
                  <div className="text-2xl font-extrabold text-black dark:text-slate-100 wrap-break-word">{mood}</div>
                </div>
                <ul className="grid gap-6">
                  {articles.map((article, j) => (
                    <motion.li
                      key={article.slug}
                      whileHover={{ scale: 1.04, boxShadow: "0 4px 24px 0 rgba(80, 70, 180, 0.10)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="rounded-xl border border-slate-200 bg-white/80 shadow-sm p-5 flex flex-col gap-2 transition-all duration-200 hover:border-blue-400 hover:bg-white"
                    >
                      <Link
                        href={`/post/${article.slug}`}
                        className="text-lg font-semibold text-black dark:text-slate-100 hover:text-blue-900 dark:hover:text-blue-300 underline underline-offset-2"
                      >
                        {article.title}
                      </Link>
                      <p className="text-slate-700 dark:text-slate-200 text-base mt-1 flex-1">{article.description}</p>
                      <span className="text-xs text-slate-400 mt-2">Read →</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.section>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
