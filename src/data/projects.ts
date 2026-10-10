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
  liveUrl?: string;
  repoUrl?: string;
};

export const projectsData: Project[] = [
  {
    id: "amanta",
    slug: "amanta-healthcare",
    title: "Amanta Healthcare",
    type: "Enterprise Portal",
    year: "2023",
    role: "Full Stack Developer",
    summary: "A fast and secure web platform for healthcare professionals to automatically process their data.",
    problem: "They needed a system that could easily handle large amounts of data while keeping user accounts secure.",
    built: "I created reliable APIs using Node.js and a clean, responsive frontend with Next.js.",
    result: "The new system sped up data loading by 45% and allowed for seamless, automatic updates without taking the site offline.",
    tech: [],
    accent: "#38bdf8", // neon-cyan
    media: { type: "image", src: "/projects/amanta.png" },
    liveUrl: "https://amanta.co.in",
  },
  {
    id: "calico",
    slug: "calico-museum",
    title: "Calico Museum Archives",
    type: "Digital Archive",
    year: "2023",
    role: "Frontend Developer",
    summary: "An interactive digital archive for one of India's premier textile museums.",
    tech: [],
    accent: "#818cf8", // neon-accent
    media: { type: "image", src: "/projects/calico.png" },
    liveUrl: "https://calicomuseum.org",
  },
  {
    id: "madhubhan",
    slug: "madhubhan-resort",
    title: "Madhubhan Resort",
    type: "Booking Platform",
    year: "2022",
    role: "Frontend Engineer",
    summary: "A premium resort booking and showcase platform with immersive visuals and smooth booking flow.",
    tech: [],
    accent: "#f472b6", // pink
    media: { type: "image", src: "/projects/madhubhan.png" },
    liveUrl: "https://madhubhanresortandspa.com/",
  },
  {
    id: "cupdf",
    slug: "cupdf-enterprise",
    title: "CUPDF Enterprise",
    type: "Document Sharing Platform",
    year: "2022",
    role: "Full Stack Developer",
    summary: "A high-traffic document sharing and management platform serving enterprise clients.",
    tech: [],
    accent: "#fbbf24", // amber
    media: { type: "image", src: "/projects/cupdf.png" },
    liveUrl: "https://cupdf.org/",
  },
  {
    id: "mdi",
    slug: "mdi-gurgaon",
    title: "MDI Gurgaon Portal",
    type: "Educational Portal",
    year: "2021",
    role: "Web Developer",
    summary: "A comprehensive student and faculty portal for a top-tier management institute.",
    tech: [],
    accent: "#34d399", // emerald
    media: { type: "image", src: "/projects/mdi.png" },
    liveUrl: "https://mdi.ac.in",
  },
  {
    id: "akwakare",
    slug: "akwakare",
    title: "Akwakare",
    type: "Platform",
    year: "2024",
    role: "Full Stack Developer",
    summary: "A comprehensive project currently under development.",
    tech: [],
    accent: "#60a5fa", // blue
    media: { type: "image", src: "/projects/akwakare.png" },
  }
];
