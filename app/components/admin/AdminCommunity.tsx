import React from "react";

interface AdminCommunityProps {
  pendingCommunityEnabled: boolean;
  handleCommunityToggle: () => void;
  onSave: () => void;
  saving?: boolean;
}

export default function AdminCommunity({ pendingCommunityEnabled, handleCommunityToggle, onSave, saving }: AdminCommunityProps) {
  return (
    <section className="mb-10">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow p-6 mb-4">
        <h2 className="text-2xl font-semibold mb-4">Community Page</h2>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={pendingCommunityEnabled}
            onChange={handleCommunityToggle}
          /> Enable Community Page
        </label>
        <p className="text-gray-500 mt-2">When enabled, the community tab will appear in the navbar for all users.</p>
        <button
          className="mt-4 px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 disabled:opacity-50"
          onClick={onSave}
          disabled={saving}
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </section>
  );
}
