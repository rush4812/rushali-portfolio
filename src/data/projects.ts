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
    type: "Enterprise Portal", // TODO: confirm
    year: "2023", // TODO: confirm
    role: "Full Stack Developer", // TODO: confirm
    summary: "A fast and secure web platform for healthcare professionals to automatically process their data.",
    problem: "They needed a system that could easily handle large amounts of data while keeping user accounts secure.", // TODO: confirm
    built: "I created reliable APIs using Node.js and a clean, responsive frontend with Next.js.", // TODO: confirm
    result: "The new system sped up data loading by 45% and allowed for seamless, automatic updates without taking the site offline.", // TODO: confirm
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    accent: "#38bdf8", // neon-cyan
    media: { type: "image", src: "" }, // TODO: add screenshot
    liveUrl: "https://amanta.co.in", // TODO: confirm
  },
  {
    id: "calico",
    slug: "calico-museum",
    title: "Calico Museum Archives",
    type: "Digital Archive", // TODO: confirm
    year: "2023", // TODO: confirm
    role: "Frontend Developer", // TODO: confirm
    summary: "An interactive digital archive for one of India's premier textile museums.", // TODO: confirm
    tech: ["React", "TypeScript", "Tailwind CSS", "Figma / UI Design"], // TODO: confirm
    accent: "#818cf8", // neon-accent
    media: { type: "image", src: "" }, // TODO: add screenshot
    liveUrl: "https://calicomuseum.org", // TODO: confirm
  },
  {
    id: "madhubhan",
    slug: "madhubhan-resort",
    title: "Madhubhan Resort",
    type: "Booking Platform", // TODO: confirm
    year: "2022", // TODO: confirm
    role: "Frontend Engineer", // TODO: confirm
    summary: "A premium resort booking and showcase platform with immersive visuals and smooth booking flow.", // TODO: confirm
    tech: ["Next.js", "React", "Tailwind CSS"], // TODO: confirm
    accent: "#f472b6", // pink
    media: { type: "image", src: "" }, // TODO: add screenshot
  },
  {
    id: "cupdf",
    slug: "cupdf-enterprise",
    title: "CUPDF Enterprise",
    type: "Document Sharing Platform", // TODO: confirm
    year: "2022", // TODO: confirm
    role: "Full Stack Developer", // TODO: confirm
    summary: "A high-traffic document sharing and management platform serving enterprise clients.", // TODO: confirm
    tech: ["Node.js", "Express", "MongoDB", "React"],
    accent: "#fbbf24", // amber
    media: { type: "image", src: "" }, // TODO: add screenshot
  },
  {
    id: "mdi",
    slug: "mdi-gurgaon",
    title: "MDI Gurgaon Portal",
    type: "Educational Portal", // TODO: confirm
    year: "2021", // TODO: confirm
    role: "Web Developer", // TODO: confirm
    summary: "A comprehensive student and faculty portal for a top-tier management institute.", // TODO: confirm
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"], // TODO: confirm
    accent: "#34d399", // emerald
    media: { type: "image", src: "" }, // TODO: add screenshot
  }
];
