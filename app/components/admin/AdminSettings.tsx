import React from "react";
import ThemeSelector from "./ThemeSelector";

interface AdminSettingsProps {
  themeState: Record<string, boolean>;
  pendingThemeState: Record<string, boolean>;
  setPendingThemeState: (state: Record<string, boolean>) => void;
  themeLabels: Record<string, string>;
  onSaveTheme: () => void;
  saving: boolean;
}

export default function AdminSettings({ themeState, pendingThemeState, setPendingThemeState, themeLabels, onSaveTheme, saving }: AdminSettingsProps) {
  return (
    <section className="mb-10">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow p-6 mb-4">
        <h2 className="text-2xl font-semibold mb-4">Settings</h2>
        <ThemeSelector
          themeState={themeState}
          pendingThemeState={pendingThemeState}
          setPendingThemeState={setPendingThemeState}
          themeLabels={themeLabels}
          onSave={onSaveTheme}
          saving={saving}
        />
      </div>
    </section>
  );
}
