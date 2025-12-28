import React from "react";

interface ThemeSelectorProps {
  themeState: Record<string, boolean>;
  pendingThemeState: Record<string, boolean>;
  setPendingThemeState: (state: Record<string, boolean>) => void;
  themeLabels: Record<string, string>;
  onSave: () => void;
  saving: boolean;
}

export default function ThemeSelector({ themeState, pendingThemeState, setPendingThemeState, themeLabels, onSave, saving }: ThemeSelectorProps) {
  // Only allow one theme to be enabled at a time
  const handleThemeToggle = (theme: string) => {
    const newState: Record<string, boolean> = {};
    Object.keys(pendingThemeState).forEach((key) => {
      newState[key] = key === theme ? !pendingThemeState[key] : false;
    });
    setPendingThemeState(newState);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Theme Selection</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {Object.keys(themeLabels).map((theme) => (
          <label key={theme} className={`flex items-center gap-2 p-3 rounded border cursor-pointer transition ${pendingThemeState[theme] ? "border-amber-500 bg-amber-50" : "border-slate-200"}`}>
            <input
              type="radio"
              name="theme"
              checked={!!pendingThemeState[theme]}
              onChange={() => handleThemeToggle(theme)}
              className="accent-amber-600"
            />
            <span>{themeLabels[theme]}</span>
          </label>
        ))}
      </div>
      <button
        onClick={onSave}
        className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 disabled:opacity-60"
        disabled={saving}
      >
        {saving ? "Saving..." : "Save Theme"}
      </button>
    </div>
  );
}
