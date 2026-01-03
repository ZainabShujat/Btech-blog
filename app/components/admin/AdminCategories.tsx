import React from "react";

interface Category {
  id?: string | number;
  name: string;
  title?: string;
}

interface AdminCategoriesProps {
  categories: Category[];
  newCategory: string;
  setNewCategory: (val: string) => void;
  handleAddCategory: (e: React.FormEvent) => void;
  handleDeleteCategory: (name: string) => void;
}

export default function AdminCategories({ categories, newCategory, setNewCategory, handleAddCategory, handleDeleteCategory }: AdminCategoriesProps) {
  // Helper functions for icon/color/subtitle can be imported or passed as props if needed
  function categoryIcon(name: string) {
    const icons: { [key: string]: string } = {
      "Friday Insights": "🧠",
      "World Watch": "🌍",
      "Tech Pulse": "⚡",
      "July Crisis": "📅",
      "Tech Demystified": "💡",
    };
    return icons[name] || "📁";
  }
  function iconColor(i: number) {
    const colors = [
      "bg-purple-100 text-purple-700",
      "bg-blue-100 text-blue-700",
      "bg-yellow-100 text-yellow-700",
      "bg-orange-100 text-orange-700",
      "bg-green-100 text-green-700",
      "bg-pink-100 text-pink-700",
      "bg-amber-100 text-amber-700",
    ];
    return colors[i % colors.length];
  }
  function categorySubtitle(name: string) {
    const subtitles: { [key: string]: string } = {
      "Friday Insights": "Personal episodes and reflections",
      "World Watch": "Weekly geopolitical summaries",
      "Tech Pulse": "Latest technology trends",
      "July Crisis": "4-week series on student struggles",
      "Tech Demystified": "Simplifying complex tech topics",
    };
    return subtitles[name] || "Category";
  }

  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-6 mt-2">
        <h2 className="text-3xl font-bold">Manage Categories</h2>
        <form className="flex gap-2" onSubmit={handleAddCategory}>
          <input
            type="text"
            placeholder="New category name"
            className="border px-3 py-2 rounded-lg w-48 focus:outline-none focus:ring-2 focus:ring-amber-400"
            value={newCategory}
            onChange={e => setNewCategory(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded-lg font-semibold hover:bg-amber-700 transition"
          >
            + New Category
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-5 max-w-3xl mx-auto">
          {categories.length === 0 && (
            <div className="text-center text-slate-400 py-12">No categories yet.</div>
          )}
          {/* Show all categories as received, no filtering */}
          {categories.map((cat, i) => (
            <div
              key={cat.id || cat.name}
              className="flex items-center justify-between bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-100 px-8 py-6 hover:shadow-amber-100 transition"
            >
              <div className="flex items-center gap-4">
                <span className={`w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold ${iconColor(i)}`}>{categoryIcon(cat.name)}</span>
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">{cat.title || cat.name}</span>
                  <span className="text-slate-500 text-sm">{categorySubtitle(cat.name)}</span>
                </div>
              </div>
              <button
                className="ml-2 text-red-500 hover:text-red-700 text-2xl p-2 rounded-full hover:bg-red-50 transition"
                onClick={() => handleDeleteCategory(cat.name)}
                type="button"
                title="Delete"
              >
                <span className="sr-only">Delete</span>🗑️
              </button>
            </div>
          ))}
      </div>
    </section>
  );
}
