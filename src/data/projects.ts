import { IProjectItem, ProjectType, RepoType } from "@/interfaces";

const projects: IProjectItem[] = [
  {
    id: "Meridian Real Estate",
    title: "Meridian — Luxury Real Estate & Architectural Living",
    description:
      "An ultra-luxury architectural portfolio and interactive residential atelier featuring cinematic scroll timelapses, real-time 3D massing viewports with Three.js, blueprint wireframe modes, and curated luxury residence showcases.",
    icon: "/skills/react.svg",
    screenshots: ["/projects/meridian-real-estate.jpg"],
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/darshilthummar09/meridian-real-estate",
    url: "https://darshilthummar09.github.io/meridian-real-estate/",
    tags: ["React", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
  },
  {
    id: "Spring E-commerce Marketplace",
    title: "Spring - E-commerce Marketplace",
    description:
      "A full-stack, multi-seller e-commerce marketplace where sellers can list products across categories while customers browse, wishlist, place orders, and track them in real time. Built with dynamic stock management and data-rich dashboards for both sellers and customers.",
    icon: "/skills/react.svg",
    screenshots: ["/projects/spring-ecommerce.png"],
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/darshilthummar09/supabase-e-commerce",
    tags: ["React", "Vite", "Supabase", "Clerk", "Tailwind CSS"],
  },
  {
    id: "Donet Task Manager",
    title: "Donet - Task Management App",
    description:
      "A full-stack task management application for creating, organizing, and tracking tasks, with data stored securely in the cloud via Supabase. Inspired by tools like Trello and Asana, built from scratch to explore modern full-stack patterns.",
    icon: "/skills/supabase.svg",
    screenshots: ["/projects/donet-task-manager.png"],
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/darshilthummar09/donet-supabase",
    tags: ["React", "TypeScript", "Supabase"],
  },
  {
    id: "TDAgames",
    title: "TDAgames - Free Online Games",
    description:
      "A free online games portal hosting a curated library of browser-based games behind a shared site shell (navigation, ad integration, and per-game pages), deployed as a static site on GitHub Pages.",
    icon: "/skills/javascript.svg",
    screenshots: ["/projects/tdagames.jpg"],
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/darshilthummar09/tdagames.github.io",
    url: "https://tdagames.github.io/",
    tags: ["JavaScript", "HTML", "CSS"],
  },
];

export default projects;
