import React from "react";

interface ArticleStat {
  title?: string;
  slug: string;
  views: number;
  likes: number;
}

interface AdminAnalyticsProps {
  articleStats: ArticleStat[];
}

export default function AdminAnalytics({ articleStats }: AdminAnalyticsProps) {
  const [sortByViews, setSortByViews] = React.useState(false);
  const sortedStats = sortByViews
    ? [...articleStats].sort((a, b) => b.views - a.views)
    : articleStats;

  return (
    <section className="mb-10">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow p-6 mb-4">
        <h2 className="text-2xl font-semibold mb-6">Article Analytics</h2>
        {/* Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-amber-50 dark:bg-slate-900 border border-amber-200 dark:border-slate-700 rounded-lg p-4 flex flex-col items-center">
            <span className="text-2xl font-bold text-amber-700">{articleStats.reduce((sum, a) => sum + (a.views || 0), 0)}</span>
            <span className="text-xs text-slate-500 mt-1">Total Views</span>
          </div>
          <div className="bg-amber-50 dark:bg-slate-900 border border-amber-200 dark:border-slate-700 rounded-lg p-4 flex flex-col items-center">
            <span className="text-2xl font-bold text-amber-700">{articleStats.reduce((sum, a) => sum + (a.likes || 0), 0)}</span>
            <span className="text-xs text-slate-500 mt-1">Total Likes</span>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-4 flex flex-col items-center">
            <span className="text-2xl font-bold text-slate-700">{articleStats.length}</span>
            <span className="text-xs text-slate-500 mt-1">Articles Tracked</span>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-4 flex flex-col items-center">
            <span className="text-2xl font-bold text-slate-700">{articleStats.filter(a => (a.views || 0) > 1000).length}</span>
            <span className="text-xs text-slate-500 mt-1">Popular (&gt;1k views)</span>
          </div>
        </div>
        {/* Sort Button */}
        <button
          className="mb-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          onClick={() => setSortByViews((v) => !v)}
        >
          {sortByViews ? "Show Default Order" : "Sort by Views"}
        </button>
        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-slate-100 dark:border-slate-700">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-100 dark:bg-slate-900 sticky top-0 z-10">
              <tr>
                <th className="text-left py-2 px-3 font-semibold">Title</th>
                <th className="text-left py-2 px-3 font-semibold">Views</th>
                <th className="text-left py-2 px-3 font-semibold">Likes</th>
              </tr>
            </thead>
            <tbody>
              {sortedStats.map((a, i) => (
                <tr key={a.slug} className={`border-b ${i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-800'} hover:bg-amber-50 dark:hover:bg-slate-800 transition`}>
                  <td className="py-2 px-3 font-mono text-xs max-w-xs truncate" title={a.title || a.slug}>{a.title || a.slug}</td>
                  <td className="py-2 px-3">{a.views}</td>
                  <td className="py-2 px-3">{a.likes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
