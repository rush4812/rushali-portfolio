export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'language';
export type SkillLevel = 'daily' | 'comfortable' | 'learning';

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
  icon: string; // We will use react-icons string names or mapping
  color: string;
  level: SkillLevel;
  usedIn?: { project: string; note: string; href: string }[];
  relatedTo?: string[];
};

export const skillsData: Skill[] = [
  // Frontend
  {
    id: "react",
    name: "React",
    category: "frontend",
    icon: "SiReact",
    color: "#61DAFB",
    level: "daily", // TODO: confirm
    usedIn: [{ project: "Amanta Healthcare", note: "Core UI development", href: "#projects" }], // TODO: confirm
    relatedTo: ["nextjs", "redux", "tailwind", "framer"],
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    icon: "SiNextdotjs",
    color: "#FFFFFF",
    level: "daily", // TODO: confirm
    usedIn: [{ project: "Amanta Healthcare", note: "App router & SSR", href: "#projects" }], // TODO: confirm
    relatedTo: ["react", "nodejs", "vercel"],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    icon: "SiTailwindcss",
    color: "#06B6D4",
    level: "daily", // TODO: confirm
    usedIn: [{ project: "All Projects", note: "Primary styling solution", href: "#projects" }], // TODO: confirm
    relatedTo: ["react", "nextjs", "framer"],
  },
  {
    id: "framer",
    name: "Framer Motion",
    category: "frontend",
    icon: "SiFramer",
    color: "#0055FF",
    level: "comfortable", // TODO: confirm
    usedIn: [{ project: "Portfolio", note: "Complex page transitions", href: "#projects" }], // TODO: confirm
    relatedTo: ["react"],
  },
  {
    id: "redux",
    name: "Redux",
    category: "frontend",
    icon: "SiRedux",
    color: "#764ABC",
    level: "comfortable", // TODO: confirm
    usedIn: [{ project: "Amanta Healthcare", note: "Global state management", href: "#projects" }], // TODO: confirm
    relatedTo: ["react"],
  },
  
  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    icon: "SiNodedotjs",
    color: "#339933",
    level: "daily", // TODO: confirm
    usedIn: [{ project: "Amanta Healthcare", note: "API development", href: "#projects" }], // TODO: confirm
    relatedTo: ["express", "mongodb", "postgresql", "prisma"],
  },
  {
    id: "express",
    name: "Express",
    category: "backend",
    icon: "SiExpress",
    color: "#FFFFFF",
    level: "daily", // TODO: confirm
    usedIn: [{ project: "Amanta Healthcare", note: "RESTful routing", href: "#projects" }], // TODO: confirm
    relatedTo: ["nodejs"],
  },
  
  // Database
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    icon: "SiMongodb",
    color: "#47A248",
    level: "daily", // TODO: confirm
    usedIn: [{ project: "Amanta Healthcare", note: "NoSQL document storage", href: "#projects" }], // TODO: confirm
    relatedTo: ["nodejs", "express"],
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    icon: "SiPostgresql",
    color: "#4169E1",
    level: "comfortable", // TODO: confirm
    usedIn: [{ project: "Various", note: "Relational data modeling", href: "#projects" }], // TODO: confirm
    relatedTo: ["nodejs", "prisma"],
  },
  {
    id: "prisma",
    name: "Prisma",
    category: "database",
    icon: "SiPrisma",
    color: "#2D3748",
    level: "comfortable", // TODO: confirm
    usedIn: [{ project: "Various", note: "Type-safe ORM", href: "#projects" }], // TODO: confirm
    relatedTo: ["postgresql", "nodejs", "nextjs"],
  },
  
  // DevOps
  {
    id: "vercel",
    name: "Vercel",
    category: "devops",
    icon: "SiVercel",
    color: "#FFFFFF",
    level: "daily", // TODO: confirm
    usedIn: [{ project: "Portfolio", note: "CI/CD & Hosting", href: "#projects" }], // TODO: confirm
    relatedTo: ["nextjs", "git"],
  },
  {
    id: "git",
    name: "Git",
    category: "devops",
    icon: "SiGit",
    color: "#F05032",
    level: "daily", // TODO: confirm
    usedIn: [{ project: "All Projects", note: "Version control", href: "#projects" }], // TODO: confirm
    relatedTo: ["vercel"],
  },
  {
    id: "docker",
    name: "Docker",
    category: "devops",
    icon: "SiDocker",
    color: "#2496ED",
    level: "learning", // TODO: confirm
    relatedTo: ["nodejs", "postgresql"],
  },
  {
    id: "aws",
    name: "AWS",
    category: "devops",
    icon: "FaAws",
    color: "#FF9900",
    level: "learning", // TODO: confirm
    relatedTo: ["docker"],
  },
  
  // Languages
  {
    id: "javascript",
    name: "JavaScript",
    category: "language",
    icon: "SiJavascript",
    color: "#F7DF1E",
    level: "daily", // TODO: confirm
    usedIn: [{ project: "All Projects", note: "Core logic", href: "#projects" }], // TODO: confirm
    relatedTo: ["react", "nodejs"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "language",
    icon: "SiTypescript",
    color: "#3178C6",
    level: "daily", // TODO: confirm
    usedIn: [{ project: "Portfolio", note: "Type-safe components", href: "#projects" }], // TODO: confirm
    relatedTo: ["react", "nextjs", "nodejs"],
  }
];
