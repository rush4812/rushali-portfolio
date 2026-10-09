export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    id: "amanta",
    title: "Amanta Healthcare",
    description: "Architected a high-performance web platform featuring automated CI/CD pipelines, state-driven rendering logic, and robust RESTful APIs to deliver highly secure and sub-second data hydration for medical stakeholders.",
    link: "#",
    tech: ["Next.js", "MongoDB", "Express", "TailwindCSS"]
  },
  {
    id: "calico",
    title: "Calico Museum Archives",
    description: "Engineered a sophisticated frontend interface for museum digital archives. Utilized complex reactivity models and state management to create seamless, component-driven user journeys through massive historical datasets.",
    link: "#",
    tech: ["React.js", "Redux", "Node.js", "PostgreSQL"]
  },
  {
    id: "madhubhan",
    title: "Madhubhan Resort",
    description: "Led end-to-end development of a luxury hospitality platform. Implemented server-side rendering (SSR) architecture coupled with intelligent caching layers to achieve a 98+ Lighthouse performance score.",
    link: "#",
    tech: ["Next.js", "TypeScript", "Prisma", "Framer Motion"]
  },
  {
    id: "cupdf",
    title: "CUPDF Enterprise",
    description: "Designed scalable, modular UI components utilizing advanced CSS architectures. Streamlined the entire state tree to minimize rendering bottlenecks, ensuring a fluid 60FPS experience across all complex data views.",
    link: "#",
    tech: ["Vue.js", "Vuex", "SCSS", "Webpack"]
  },
  {
    id: "mdi",
    title: "MDI Gurgaon Portal",
    description: "Spearheaded legacy migration and comprehensive layout restructuring. Integrated modern ES6+ paradigms and optimized asset delivery networks (CDNs) to reduce initial load times by over 45%.",
    link: "#",
    tech: ["JavaScript", "SASS", "HTML5", "Gulp"]
  }
];
