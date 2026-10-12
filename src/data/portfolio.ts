import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiVercel, SiGit, SiJavascript, SiTypescript, SiRedux, SiMysql, SiVuedotjs, SiHtml5, SiLaravel, SiCodeigniter, SiGithub, SiPhp, SiBootstrap, SiProcesswire } from "react-icons/si";

export const portfolioData = {
  personal: {
    name: "Rushali Jivrajani",
    title: "Full Stack Developer",
    subtitle: "I build fast, responsive web applications - from polished React and Next.js interfaces to the REST APIs behind them.",
    openToWork: true,
    email: "rushjivrajani48@gmail.com",
    phone: "+91 90995 38086",
    links: {
      github: "https://github.com/rush4812",
      linkedin: "https://linkedin.com/in/rushali-jivrajani",
      resume: "/resume.pdf"
    }
  },
  about: {
    text: "Hi, I'm Rushali Jivrajani - a Full Stack Developer with 2+ years of experience and an MCA degree. At NetInc Digital Services LLP, I've worked on 6+ live client websites, taking features from UI to API integration and keeping them stable in production. My day-to-day stack is React.js, Vue.js and Next.js on the frontend, with Node.js, Express and REST APIs behind it, backed by MongoDB, MySQL or PostgreSQL. I care about clean, reusable code, responsive layouts and cross-browser consistency.",
    mindset: "Polished, responsive interfaces backed by reliable REST APIs.",
    currentlyLearning: "picking up new tools fast. Give me solid documentation and I'll have it running in no time.",
    photoUrl: "/placeholder-profile.jpg"
  },
  projects: [
    {
      id: "amanta",
      slug: "amanta-healthcare",
      title: "Amanta Healthcare",
      summary: "Developed and launched Amanta Healthcare's new website with a clean, responsive UI that works across devices.",
      role: "Developed & launched",
      tech: [],
      liveDemo: "https://amanta.co.in",
      github: "#",
      coverImage: "/projects/amanta.png",
      caseStudy: {
        problem: "",
        approach: "Developed and launched Amanta Healthcare's new website with a clean, responsive UI that works across devices.",
        techDecisions: "",
        result: "",
        gallery: []
      }
    },
    {
      id: "calico",
      slug: "calico-museum",
      title: "Calico Museum Archives",
      summary: "Contributed to the frontend development of the museum's new website.",
      role: "Frontend Developer",
      tech: [],
      liveDemo: "https://calicomuseum.org",
      github: "#",
      coverImage: "/projects/calico.png",
      caseStudy: {
        problem: "",
        approach: "Contributed to the frontend development of the museum's new website.",
        techDecisions: "",
        result: "",
        gallery: []
      }
    },
    {
      id: "madhubhan",
      slug: "madhubhan-resort",
      title: "Madhubhan Resort",
      summary: "Led the complete build and launch of the resort's new website from scratch, delivering a responsive experience across devices.",
      role: "Led build & launch",
      tech: [],
      liveDemo: "https://madhubhanresortandspa.com/",
      github: "#",
      coverImage: "/projects/madhubhan.png",
      caseStudy: {
        problem: "",
        approach: "Led the complete build and launch of the resort's new website from scratch, delivering a responsive experience across devices.",
        techDecisions: "",
        result: "",
        gallery: []
      }
    },
    {
      id: "cupdf",
      slug: "cupdf",
      title: "CUPDF",
      summary: "Built the user interface for the CUPDF website using Vue.js.",
      role: "Frontend Developer (Vue.js)",
      tech: [],
      liveDemo: "https://cupdf.org/",
      github: "#",
      coverImage: "/projects/cupdf.png",
      caseStudy: {
        problem: "",
        approach: "Built the user interface for the CUPDF website using Vue.js.",
        techDecisions: "",
        result: "",
        gallery: []
      }
    },
    {
      id: "mdi-gurgaon",
      slug: "mdi-gurgaon",
      title: "MDI Gurgaon",
      summary: "Handled website maintenance and layout fixes to keep pages clean and consistent.",
      role: "Website Maintenance",
      tech: [],
      liveDemo: "https://mdi.ac.in",
      github: "#",
      coverImage: "/projects/mdi.png",
      caseStudy: {
        problem: "",
        approach: "Handled website maintenance and layout fixes to keep pages clean and consistent.",
        techDecisions: "",
        result: "",
        gallery: []
      }
    },
    {
      id: "akwakare",
      slug: "akwakare",
      title: "Akwakare",
      summary: "A project currently under development.",
      role: "Full Stack Developer",
      tech: [],
      liveDemo: "",
      github: "#",
      coverImage: "/projects/akwakare.png",
      caseStudy: {
        problem: "",
        approach: "A project currently under development.",
        techDecisions: "",
        result: "",
        gallery: []
      }
    },
    {
      id: "elecon",
      slug: "elecon",
      title: "Elecon",
      summary: "Handled website maintenance and layout fixes to keep pages clean and consistent.",
      role: "Website Maintenance",
      tech: [],
      liveDemo: "{{ELECON_URL}}",
      github: "#",
      coverImage: "/projects/elecon.png",
      caseStudy: {
        problem: "",
        approach: "Handled website maintenance and layout fixes to keep pages clean and consistent.",
        techDecisions: "",
        result: "",
        gallery: []
      }
    }
  ],
  experience: [
    {
      role: "Associate Software Developer",
      company: "NetInc Digital Services LLP, Ahmedabad",
      period: "Feb 2025 - Present",
      achievements: [
        "Developed and maintained multiple production-level client web applications, keeping them fast, stable and responsive",
        "Built reusable, component-based UIs in React.js and Vue.js for clean, maintainable code",
        "Integrated frontends with backend services through REST APIs for smooth, reliable data flow",
        "Diagnosed and resolved critical bugs, improving application stability and performance",
        "Partnered with backend developers to deliver end-to-end features",
        "Delivered responsive, cross-browser compatible interfaces across devices",
        "Managed multiple client projects in parallel and delivered within deadlines"
      ]
    },
    {
      role: "React.JS Developer",
      company: "Sharva InfoTech, Rajkot",
      period: "Jul 2022 - Jul 2023",
      achievements: [
        "Built reusable UI components in React.js",
        "Worked on CRUD operations and API integration",
        "Contributed to frontend features in live, real-world projects",
        "Gained hands-on experience in team-based development and project workflows"
      ]
    }
  ],
  education: [
    {
      degree: "Master of Computer Applications",
      school: "LJ Institute of Computer Application",
      period: "2023 - 2025"
    },
    {
      degree: "Bachelor of Computer Applications",
      school: "Saurashtra University, Rajkot",
      period: "2020 - 2023"
    }
  ],
  stack: [
    {
      title: "FRONTEND",
      tools: [
        { name: "React", icon: SiReact, color: "#61DAFB", category: "frontend" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", category: "frontend" },
        { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D", category: "frontend" },
        { name: "HTML5 / CSS3", icon: SiHtml5, color: "#E34F26", category: "frontend" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", category: "frontend" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", category: "frontend" },
        { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC", category: "frontend" }
      ]
    },
    {
      title: "BACKEND",
      tools: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "backend" },
        { name: "Express", icon: SiExpress, color: "#FFFFFF", category: "backend" },
        { name: "ProcessWire CMS", icon: SiProcesswire, color: "#EF1940", category: "backend" },
        { name: "Laravel (Basic)", icon: SiLaravel, color: "#FF2D20", category: "backend" },
        { name: "CodeIgniter", icon: SiCodeigniter, color: "#EE4623", category: "backend" }
      ]
    },
    {
      title: "DATABASES",
      tools: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", category: "db" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "db" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "db" }
      ]
    },
    {
      title: "DEVOPS",
      tools: [
        { name: "GitHub", icon: SiGithub, color: "#F0F6FC", category: "devops" },
        { name: "Vercel", icon: SiVercel, color: "#FFFFFF", category: "devops" },
        { name: "Git", icon: SiGit, color: "#F05032", category: "devops" }
      ]
    },
    {
      title: "LANGUAGES",
      tools: [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "language" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "language" },
        { name: "PHP", icon: SiPhp, color: "#777BB4", category: "language" }
      ]
    }
  ],
  testimonials: [
    {
      name: "Rahul Desai", // TODO: replace with real name
      role: "Engineering Manager", // TODO: replace with real role
      content: "Rushali is a highly dedicated developer. She always makes sure to write clean code and delivers projects that work perfectly for our clients.", // TODO: replace with real testimonial
    },
    {
      name: "Priya Sharma", // TODO: replace with real name
      role: "Product Owner", // TODO: replace with real role
      content: "Working with Rushali was an absolute pleasure. She took full ownership of the frontend architecture and delivered outstanding results ahead of schedule.", // TODO: replace with real testimonial
    }
  ],
  certifications: [
    {
      title: "Introduction to Software Engineering",
      issuer: "Coursera",
      date: "2023"
    },
    {
      title: "Generative AI: Introduction and Applications",
      issuer: "Coursera",
      date: "2023"
    }
  ]
};
