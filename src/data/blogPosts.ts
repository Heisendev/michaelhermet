export interface BlogPost {
  slug: string;
  title: string;
  titles: {
    en: string;
    fr: string;
  };
  excerpt: string;
  excerpts: {
    en: string;
    fr: string;
  };
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-accessible-forms",
    title: "Building Accessible Forms: A Practical Engineering Guide",
    titles: {
      en: "Building Accessible Forms: A Practical Engineering Guide",
      fr: "Construire des formulaires accessibles : un guide pratique pour les ingénieurs"
    }, 
    excerpt: "Forms are one of the most critical interaction points on the web. Here's how to make them work for everyone.",
    excerpts: {
      en: "Forms are one of the most critical interaction points on the web. Here's how to make them work for everyone.",
      fr: "Les formulaires sont l'un des points d'interaction les plus critiques sur le web. Voici comment les rendre accessibles à tous."
    },
    date: "2026-02-15",
    readTime: "5 min read",
    tags: ["Accessibility", "HTML", "Forms"],
    image: "/posts/posters/building-accessible-forms.png",
  },
  {
    slug: "common-react-aria-patterns",
    title: "Common ARIA Patterns in React Applications",
    titles: {
      en: "Common ARIA Patterns in React Applications",
      fr: "Patterns ARIA courants dans les applications React"
    },
    excerpt: "A deep dive into implementing ARIA roles, states, and properties correctly in modern React components.",
    excerpts: {
      en: "A deep dive into implementing ARIA roles, states, and properties correctly in modern React components.",
      fr: "Une plongée approfondie dans la mise en œuvre correcte des rôles, états et propriétés ARIA dans les composants React modernes."
    },
    date: "2026-01-28",
    readTime: "7 min read",
    tags: ["React", "ARIA", "Accessibility"],
    image: "/posts/posters/common-react-aria-patterns.jpg",
  },
  {
    slug: "web-performance-accessibility",
    title: "The Intersection of Performance and Accessibility",
    titles: {
      en: "The Intersection of Performance and Accessibility",
      fr: "L'intersection de la performance et de l'accessibilité"
    },
    excerpt: "Performance IS accessibility. Slow websites disproportionately affect users with disabilities and those on low-end devices.",
    excerpts: {
      en: "Performance IS accessibility. Slow websites disproportionately affect users with disabilities and those on low-end devices.",
      fr: "La performance EST accessibilité. Les sites web lents affectent de manière disproportionnée les utilisateurs en situation de handicap et ceux utilisant des appareils bas de gamme."
    },
    date: "2026-01-10",
    readTime: "6 min read",
    tags: ["Performance", "Accessibility", "Web Vitals"],
    image: "/posts/posters/web-performance-accessibility.jpg",
  },
];