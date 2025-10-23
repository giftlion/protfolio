export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function getProjects() {
  return [
    {
      id: "Typed-storage",
      title: "Typed Storage",
      description:
        "A type-safe LocalStorage library for TypeScript with type-safe api (trpc/drizzle inspired) and react hooks.",
      githubUrl: "https://github.com/giftlion/type-storage",
      liveUrl: null,
    },
  ];
}
