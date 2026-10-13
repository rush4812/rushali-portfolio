export type Project = {
  id: string;
  slug: string;
  title: string;
  type: string;
  year: string;
  role: string;
  summary: string;
  problem?: string;
  built?: string;
  result?: string;
  tech: string[];
  accent: string;
  media: { type: 'image' | 'video'; src: string; poster?: string };
  logoSrc?: string;
  clientDomain?: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projectsData: Project[] = [
  {
    id: "amanta",
    slug: "amanta-healthcare",
    title: "Amanta Healthcare",
    type: "Healthcare Web Application",
    year: "2025-26",
    role: "Full Stack Developer",
    summary: "Architected and launched Amanta Healthcare's new commercial web platform end-to-end, delivering dynamic features, API integrations, and a clean, responsive layout.",
    problem: "Amanta required a modern, scalable web platform with seamless cross-device performance and fast API-driven content delivery.",
    built: "Developed full-stack architecture, secure RESTful API integrations, and scalable database schemas.",
    result: "Delivered a reliable, production-ready web platform with high uptime and smooth data flows across all devices.",
    tech: [],
    accent: "#38bdf8", // neon-cyan
    media: { type: "image", src: "/projects/logos/amanta-logo.svg" },
    logoSrc: "/projects/logos/amanta-logo.svg",
    clientDomain: "amanta.co.in",
    liveUrl: "https://amanta.co.in",
  },
  {
    id: "calico",
    slug: "calico-museum",
    title: "Calico Museum Archives",
    type: "Digital Archive Platform",
    year: "2025-26",
    role: "Software Developer",
    summary: "Developed core web features and database integration for the museum's digital archive platform, enabling structured catalog exploration and fast search.",
    problem: "Digitizing extensive historical textile archives required an efficient database-backed platform with intuitive collection browsing.",
    built: "Engineered catalog querying, relational data integration, and responsive digital collection interfaces.",
    result: "Delivered a performant archive portal for researchers and visitors to explore rare textile collections.",
    tech: [],
    accent: "#818cf8", // neon-accent
    media: { type: "image", src: "/projects/logos/calico-logo.svg" },
    logoSrc: "/projects/logos/calico-logo.svg",
    clientDomain: "calicomuseum.org",
    liveUrl: "https://calicomuseum.org",
  },
  {
    id: "madhubhan",
    slug: "madhubhan-resort",
    title: "Madhubhan Resort",
    type: "Hospitality Web Platform",
    year: "2025-26",
    role: "Lead Full Stack Developer",
    summary: "Led the complete build and launch of the luxury resort's web platform from scratch, managing database modeling, backend workflows, booking integrations, and modern UI.",
    problem: "The luxury resort needed a bespoke, high-performance web platform built from scratch to drive guest inquiries and direct reservations.",
    built: "Engineered end-to-end web architecture with relational database modeling, backend API services, and responsive modern interfaces.",
    result: "Successfully built and deployed the production portal, streamlining guest bookings and client engagement.",
    tech: [],
    accent: "#f472b6", // pink
    media: { type: "image", src: "/projects/logos/madhubhan-logo.png" },
    logoSrc: "/projects/logos/madhubhan-logo.png",
    clientDomain: "madhubhanresortandspa.com",
    liveUrl: "https://madhubhanresortandspa.com/",
  },
  {
    id: "cupdf",
    slug: "cupdf",
    title: "CUPDF",
    type: "Institutional Web Platform",
    year: "2025-26",
    role: "Web Developer",
    summary: "Developed the official web platform for CEPT Urban Planning & Design Foundation, implementing dynamic content modules, publication indexes, and REST API integration.",
    problem: "CEPT Foundation needed a dedicated web portal to publish urban planning research papers, case studies, and training programs.",
    built: "Built modular reactive components, dynamic publication search pipelines, and connected backend API endpoints.",
    result: "Successfully launched the foundation's official web presence, accelerating access to urban research and programs.",
    tech: [],
    accent: "#fbbf24", // amber
    media: { type: "image", src: "/projects/logos/cupdf-logo.png" },
    logoSrc: "/projects/logos/cupdf-logo.png",
    clientDomain: "cupdf.org",
    liveUrl: "https://cupdf.org/",
  },
  {
    id: "mdi",
    slug: "mdi-gurgaon",
    title: "MDI Gurgaon",
    type: "Educational Institution Portal",
    year: "2025-26",
    role: "Website Maintenance & AMC",
    summary: "Handled ongoing AMC maintenance, design updates, and client-requested UI changes to keep the institution's portal clean, updated, and responsive.",
    problem: "An established institutional portal required continuous maintenance, CMS schema tweaks, and quick turnarounds for administrative updates.",
    built: "Provided ongoing AMC management, customized CMS templates, maintained database queries, and implemented UI refinements.",
    result: "Maintained high uptime and consistent portal stability across institutional admissions and announcements.",
    tech: [],
    accent: "#34d399", // emerald
    media: { type: "image", src: "/projects/logos/mdi-logo.png" },
    logoSrc: "/projects/logos/mdi-logo.png",
    clientDomain: "mdi.ac.in",
    liveUrl: "https://mdi.ac.in",
  },
  {
    id: "akwakare",
    slug: "akwakare",
    title: "Akwakare",
    type: "Industrial Web Platform",
    year: "2025-26",
    role: "Full Stack Developer",
    summary: "Developing end-to-end web modules, relational data pipelines, and responsive dashboards for an industrial water treatment solutions management platform.",
    problem: "Industrial operations needed a centralized web application to streamline water treatment chemical data, testing logs, and client inquiries.",
    built: "Engineering full-stack architecture, database models, and dynamic administrative workflows (in active development).",
    result: "Active development in beta environment, validating full-stack workflows.",
    tech: [],
    accent: "#60a5fa", // blue
    media: { type: "image", src: "/projects/logos/akwakare-logo.png" },
    logoSrc: "/projects/logos/akwakare-logo.png",
    clientDomain: "beta.netlink.co.in",
  }
];
