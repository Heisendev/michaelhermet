export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-accessible-forms",
    title: "Building Accessible Forms: A Practical Engineering Guide",
    excerpt: "Forms are one of the most critical interaction points on the web. Here's how to make them work for everyone.",
    date: "2026-02-15",
    readTime: "5 min read",
    tags: ["Accessibility", "HTML", "Forms"],
    image: "/placeholder.svg",
  },
  {
    slug: "common-react-aria-patterns",
    title: "Common ARIA Patterns in React Applications",
    excerpt: "A deep dive into implementing ARIA roles, states, and properties correctly in modern React components.",
    date: "2026-01-28",
    readTime: "7 min read",
    tags: ["React", "ARIA", "Accessibility"],
    image: "/placeholder.svg",
  },
  {
    slug: "web-performance-accessibility",
    title: "The Intersection of Performance and Accessibility",
    excerpt: "Performance IS accessibility. Slow websites disproportionately affect users with disabilities and those on low-end devices.",
    date: "2026-01-10",
    readTime: "6 min read",
    tags: ["Performance", "Accessibility", "Web Vitals"],
    image: "/placeholder.svg",
  },
];