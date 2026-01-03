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
    id: "scifi-movie-breakdowns",
    title: "SciFi Movie Breakdowns",
    description: "Deep dives into classic and modern sci-fi movies, exploring themes, technology, and storytelling.",
    editionCount: "10-15 editions",
    launchTimeline: "March - April 2026",
    color: "border-purple-600",
    tagline: "Unpacking the future, one film at a time",
  },
];
