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
  return (
    <section className="mb-10">
      <div className="bg-white rounded-lg shadow p-6 mb-4">
        <h2 className="text-2xl font-semibold mb-6">Article Analytics</h2>
        {/* Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex flex-col items-center">
            <span className="text-2xl font-bold text-amber-700">{articleStats.reduce((sum, a) => sum + (a.views || 0), 0)}</span>
            <span className="text-xs text-slate-500 mt-1">Total Views</span>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex flex-col items-center">
            <span className="text-2xl font-bold text-amber-700">{articleStats.reduce((sum, a) => sum + (a.likes || 0), 0)}</span>
            <span className="text-xs text-slate-500 mt-1">Total Likes</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex flex-col items-center">
            <span className="text-2xl font-bold text-slate-700">{articleStats.length}</span>
            <span className="text-xs text-slate-500 mt-1">Articles Tracked</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex flex-col items-center">
            <span className="text-2xl font-bold text-slate-700">{articleStats.filter(a => (a.views || 0) > 1000).length}</span>
            <span className="text-xs text-slate-500 mt-1">Popular (&gt;1k views)</span>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-slate-100">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-100 sticky top-0 z-10">
              <tr>
                <th className="text-left py-2 px-3 font-semibold">Title</th>
                <th className="text-left py-2 px-3 font-semibold">Views</th>
                <th className="text-left py-2 px-3 font-semibold">Likes</th>
              </tr>
            </thead>
            <tbody>
              {articleStats.map((a, i) => (
                <tr key={a.slug} className={`border-b ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-amber-50 transition`}>
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
