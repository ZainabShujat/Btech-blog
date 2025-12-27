export type UpcomingSeries = {
  id: string;
  title: string;
  description: string;
  editionCount: string; // e.g., "20-30 editions"
  launchTimeline: string; // e.g., "January - February 2026"
  color: string; // Tailwind border color
  tagline?: string;
};

export const upcomingSeries: UpcomingSeries[] = [
  {
    id: "i-wonder-why",
    title: "I Wonder Why",
    description: "Exploring questions, ideas, and the joy of learning through curiosity-driven investigations.",
    editionCount: "20-30 editions",
    launchTimeline: "January - February 2026",
    color: "border-indigo-500",
    tagline: "A journey of curiosity and discovery",
  },
];
