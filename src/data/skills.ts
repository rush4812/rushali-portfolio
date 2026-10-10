export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'language';
export type SkillLevel = 'daily' | 'weekly' | 'comfortable' | 'learning';

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
  icon: string;
  color: string;
  level: SkillLevel;
  usedIn?: { project: string; note: string; href: string }[];
  relatedTo?: string[];
};

export const skillsData: Skill[] = [
  // ==========================================
  // FRONTEND
  // ==========================================
  {
    id: "react",
    name: "React",
    category: "frontend",
    icon: "SiReact",
    color: "#61DAFB",
    level: "daily",
    usedIn: [{ project: "Amanta", note: "Reusable UI components and client state rendering", href: "#projects" }],
    relatedTo: ["nextjs", "redux", "tailwind"],
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    icon: "SiNextdotjs",
    color: "#FFFFFF",
    level: "daily",
    usedIn: [{ project: "Amanta", note: "App Router, Server Components & server-side rendering", href: "#projects" }],
    relatedTo: ["react", "nodejs", "vercel"],
  },
  {
    id: "vue",
    name: "Vue.js",
    category: "frontend",
    icon: "SiVuedotjs",
    color: "#4FC08D",
    level: "daily",
    usedIn: [{ project: "CUPDF", note: "Dynamic document rendering and reactive frontend components", href: "#projects" }],
    relatedTo: ["javascript", "html-css"],
  },
  {
    id: "html-css",
    name: "HTML5 / CSS3",
    category: "frontend",
    icon: "SiHtml5",
    color: "#E34F26",
    level: "daily",
    usedIn: [{ project: "MDI Gurgaon", note: "Semantic structure, responsive mobile layouts & CSS styling", href: "#projects" }],
    relatedTo: ["javascript", "tailwind"],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    icon: "SiTailwindcss",
    color: "#06B6D4",
    level: "daily",
    usedIn: [{ project: "MDI Gurgaon", note: "Utility-first modern styling and responsive design systems", href: "#projects" }],
    relatedTo: ["react", "nextjs", "html-css"],
  },
  {
    id: "redux",
    name: "Redux Toolkit",
    category: "frontend",
    icon: "SiRedux",
    color: "#764ABC",
    level: "weekly",
    usedIn: [{ project: "Calico Museum", note: "Global state management and complex filter state handling", href: "#projects" }],
    relatedTo: ["react"],
  },

  // ==========================================
  // BACKEND
  // ==========================================
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    icon: "SiNodedotjs",
    color: "#339933",
    level: "daily",
    usedIn: [{ project: "Amanta", note: "Server runtime, asynchronous data handling and microservices", href: "#projects" }],
    relatedTo: ["express", "rest-apis", "mongodb", "postgresql"],
  },
  {
    id: "express",
    name: "Express",
    category: "backend",
    icon: "SiExpress",
    color: "#FFFFFF",
    level: "daily",
    usedIn: [{ project: "Amanta", note: "RESTful server routing, middleware and request validation", href: "#projects" }],
    relatedTo: ["nodejs", "rest-apis"],
  },
  {
    id: "laravel",
    name: "Laravel",
    category: "backend",
    icon: "SiLaravel",
    color: "#FF2D20",
    level: "daily",
    usedIn: [{ project: "Elecon", note: "MVC architecture, Eloquent ORM and database management", href: "#projects" }],
    relatedTo: ["php", "mysql", "rest-apis"],
  },
  {
    id: "codeigniter",
    name: "CodeIgniter",
    category: "backend",
    icon: "SiCodeigniter",
    color: "#EE4623",
    level: "weekly",
    usedIn: [{ project: "TODO: project name", note: "Lightweight MVC controllers and database query routing", href: "#projects" }],
    relatedTo: ["php", "mysql"],
  },
  {
    id: "rest-apis",
    name: "REST APIs",
    category: "backend",
    icon: "TbApi",
    color: "#00B4D8",
    level: "daily",
    usedIn: [{ project: "Amanta", note: "Structured endpoints, JSON serialization and client-server integration", href: "#projects" }],
    relatedTo: ["nodejs", "express", "laravel"],
  },
  {
    id: "jwt",
    name: "JWT Authentication",
    category: "backend",
    icon: "SiJsonwebtokens",
    color: "#D63AFF",
    level: "daily",
    usedIn: [{ project: "Amanta", note: "Secure token-based auth, session verification & protected routes", href: "#projects" }],
    relatedTo: ["nodejs", "rest-apis"],
  },

  // ==========================================
  // DATABASES
  // ==========================================
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    icon: "SiPostgresql",
    color: "#4169E1",
    level: "daily",
    usedIn: [{ project: "Calico Museum", note: "Relational data modeling and complex query optimization", href: "#projects" }],
    relatedTo: ["nodejs", "mysql"],
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "database",
    icon: "SiMysql",
    color: "#4479A1",
    level: "daily",
    usedIn: [{ project: "Madhubhan Resort", note: "Relational schema design and transactional data storage", href: "#projects" }],
    relatedTo: ["php", "laravel", "nodejs"],
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    icon: "SiMongodb",
    color: "#47A248",
    level: "daily",
    usedIn: [{ project: "Amanta", note: "NoSQL document collections, schemas and aggregation pipelines", href: "#projects" }],
    relatedTo: ["nodejs", "express"],
  },

  // ==========================================
  // DEVOPS
  // ==========================================
  {
    id: "github-actions",
    name: "GitHub Actions CI/CD",
    category: "devops",
    icon: "SiGithubactions",
    color: "#2088FF",
    level: "weekly",
    usedIn: [{ project: "Amanta", note: "Automated test workflows, build checking & deployment triggers", href: "#projects" }],
    relatedTo: ["github", "git"],
  },
  {
    id: "github",
    name: "GitHub",
    category: "devops",
    icon: "SiGithub",
    color: "#F0F6FC",
    level: "daily",
    usedIn: [{ project: "Elecon", note: "Source code repository hosting, branch workflows & code reviews", href: "#projects" }],
    relatedTo: ["git", "github-actions"],
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "devops",
    icon: "SiVercel",
    color: "#FFFFFF",
    level: "daily",
    usedIn: [{ project: "Amanta", note: "Production edge hosting, previews & CI/CD deployment", href: "#projects" }],
    relatedTo: ["nextjs", "git"],
  },
  {
    id: "git",
    name: "Git",
    category: "devops",
    icon: "SiGit",
    color: "#F05032",
    level: "daily",
    usedIn: [{ project: "Elecon", note: "Distributed version control, branching and commits", href: "#projects" }],
    relatedTo: ["github", "vercel"],
  },

  // ==========================================
  // LANGUAGES
  // ==========================================
  {
    id: "javascript",
    name: "JavaScript",
    category: "language",
    icon: "SiJavascript",
    color: "#F7DF1E",
    level: "daily",
    usedIn: [{ project: "MDI Gurgaon", note: "Core application logic, DOM interactions & ES6+ scripting", href: "#projects" }],
    relatedTo: ["react", "nodejs", "typescript"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "language",
    icon: "SiTypescript",
    color: "#3178C6",
    level: "daily",
    usedIn: [{ project: "Madhubhan Resort", note: "Type-safe interfaces, API schemas & component props", href: "#projects" }],
    relatedTo: ["react", "nextjs", "nodejs"],
  },
  {
    id: "php",
    name: "PHP",
    category: "language",
    icon: "SiPhp",
    color: "#777BB4",
    level: "daily",
    usedIn: [{ project: "Elecon", note: "Server-side web scripting and legacy enterprise maintenance", href: "#projects" }],
    relatedTo: ["laravel", "codeigniter", "mysql"],
  },
];
