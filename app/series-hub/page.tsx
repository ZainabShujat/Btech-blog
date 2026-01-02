import Link from "next/link";

const seriesList = [
  {
    title: "Friday Insights",
    description:
      "A reflective, empathetic series that explores the emotional undercurrents of everyday life–grief, resilience, growth, and the invisible battles we all carry. With a gentle, honest tone, these pieces invite readers to pause, feel, and find comfort in shared human experiences. Newcomers will discover wisdom in vulnerability and the reassurance that they’re not alone in their struggles.",
    category: "friday-insights",
    recommended: "September In a Nutshell",
  },
  {
    title: "World Watch",
    description:
      "A weekly digest of global events, World Watch distills complex international news–trade, politics, climate, sports–into clear, accessible stories. The tone is informative yet approachable, making world affairs feel relevant and understandable. Readers gain a broader perspective on current events and the interconnectedness of our world, all without jargon or overwhelm.",
    category: "world-watch",
    recommended: null,
  },
  {
    title: "Tech Pulse",
    description:
      "Tech Pulse captures the fast-moving world of technology, especially AI, with clarity and excitement. Each edition highlights key developments, explains why they matter, and connects them to everyday life. The writing is crisp and jargon-free, making even the most advanced topics feel approachable. Readers will stay updated and inspired, no matter their tech background.",
    category: "tech-pulse",
    recommended: null,
  },
  {
    title: "July Crisis",
    description:
      "This series dives into the challenges of self-discipline, motivation, and personal growth, especially for Gen Z. With a candid, motivational voice, it tackles the realities of building habits, facing setbacks, and growing through discomfort. Readers will find practical advice, relatable stories, and encouragement to persist even when motivation fades.",
    category: "july-crisis",
    recommended: null,
  },
  {
    title: "Tech Demystified",
    description:
      "Tech Demystified is a month-long journey through the buzzwords and mysteries of modern technology–AI, blockchain, automation, and more. The tone is curious, humble, and playful, breaking down intimidating concepts into relatable analogies and stories. New readers will gain confidence and clarity, learning alongside the author in a refreshingly honest way.",
    category: "tech-demystified",
    recommended: null,
  },
  {
    title: "Financial Month",
    description:
      "A candid look at the realities of money for students and young adults, this series blends humor, honesty, and practical lessons. From survival math in college to the emotional side of spending, it’s about learning finance through lived experience, not textbooks. Readers will find solidarity in the chaos and pick up real-world money wisdom.",
    category: "financial-month",
    recommended: null,
  },
  {
    title: "Milestone Stories and Miscellaneous",
    description:
      "This category celebrates growth, milestones, and the unpredictable journey of building something meaningful. With a mix of personal anecdotes, reflections, and behind-the-scenes glimpses, the tone is warm and encouraging. Readers will be inspired by stories of perseverance, creativity, and the small victories that make big dreams possible.",
    category: "milestone-stories-and-miscellaneous",
    recommended: null,
  },
  {
    title: "Girlhood and STEM Experiences",
    description:
      "A thoughtful exploration of what it means to be a girl in STEM, this series challenges stereotypes and celebrates genuine curiosity. The writing is honest and empowering, addressing the pressures, doubts, and triumphs unique to women in technical fields. New readers will find validation, encouragement, and a sense of community.",
    category: "girlhood-and-stem-experiences",
    recommended: "Girlhood in Defense Mode",
  },
  {
    title: "Behind the Scenes",
    description:
      "Go backstage with the creation of the blog and its projects–coding mishaps, design choices, and the messy reality of building from scratch. The tone is candid, humorous, and deeply relatable, showing that progress is rarely linear. Readers will appreciate the transparency and may find courage to start their own creative journeys.",
    category: "behind-the-scenes",
    recommended: null,
  },
  {
    title: "Curiosity Series",
    description:
      "A celebration of wonder, puzzles, and the joy of learning for its own sake. This series dives into mathematical quirks, scientific oddities, and the thrill of discovery. The tone is playful and infectious, inviting readers to rekindle their own curiosity and see the world through a lens of fascination and delight.",
    category: "curiosity-series",
    recommended: "The Puzzle That Broke My Brain (In the Best Way)",
  },
];

export default function SeriesHubPage() {
  return (
    <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 text-slate-900 dark:text-slate-100">
      <h1 className="text-5xl font-extrabold mb-10 text-black dark:text-slate-100">Series Hub</h1>
      <p className="mb-12 text-xl text-slate-800 dark:text-slate-200 max-w-3xl">
        Explore the different universes of this blog. Each series is a journey–find the one that speaks to you, or sample them all.
      </p>
      <div className="space-y-16">
        {seriesList.map((series) => (
          <section key={series.title} className="w-full">
            <h2 className="text-3xl font-extrabold text-black dark:text-slate-100 mb-3 w-full wrap-break-word">{series.title}</h2>
            <p className="text-lg text-slate-800 dark:text-slate-200 mb-4 w-full max-w-4xl">{series.description}</p>
            <Link
              href={`/category/${series.category}`}
              className="inline-block text-blue-700 underline font-semibold hover:text-blue-900 text-lg mb-2"
            >
              View all posts →
            </Link>
            {series.recommended && (
              <div className="mt-2">
                <span className="text-xs text-slate-500 mr-1">Recommended starting piece:</span>
                <Link
                  href={`/post/${series.recommended.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                  className="text-blue-700 underline hover:text-blue-900 text-base font-semibold"
                >
                  {series.recommended}
                </Link>
              </div>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
