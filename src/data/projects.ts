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
    type: "Healthcare Website",
    year: "2025-26",
    role: "Developed & launched",
    summary: "Developed and launched Amanta Healthcare's new website with a clean, responsive UI that works across devices.",
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
    type: "Digital Archive",
    year: "2025-26",
    role: "Frontend Developer",
    summary: "Contributed to the frontend development of the museum's new website.",
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
    type: "Resort Website",
    year: "2025-26",
    role: "Led build & launch",
    summary: "Led the complete build and launch of the resort's new website from scratch, delivering a responsive experience across devices.",
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
    type: "Website",
    year: "2025-26",
    role: "Frontend Developer (Vue.js)",
    summary: "Built the user interface for the CUPDF website using Vue.js.",
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
    type: "Educational Website",
    year: "2025-26",
    role: "Website Maintenance & AMC",
    summary: "Handled ongoing AMC maintenance, design updates, and client-requested UI changes to keep the institution's portal clean, updated, and responsive.",
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
    type: "Platform",
    year: "2025-26",
    role: "Full Stack Developer",
    summary: "A project currently under development.",
    tech: [],
    accent: "#60a5fa", // blue
    media: { type: "image", src: "/projects/logos/akwakare-logo.png" },
    logoSrc: "/projects/logos/akwakare-logo.png",
    clientDomain: "beta.netlink.co.in",
  }
];
