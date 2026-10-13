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
      summary: "Architected and launched Amanta Healthcare's new commercial web platform end-to-end, delivering dynamic features, API integrations, and a clean, responsive layout.",
      role: "Full Stack Developer",
      tech: [],
      liveDemo: "https://amanta.co.in",
      github: "#",
      coverImage: "/projects/logos/amanta-logo.svg",
      caseStudy: {
        problem: "Amanta required a modern, scalable web platform with seamless cross-device performance and fast API-driven content delivery.",
        approach: "Developed full-stack architecture, secure RESTful API integrations, and scalable database schemas.",
        techDecisions: "Optimized component rendering, clean RESTful routing, and flexible product data management.",
        result: "Delivered a reliable, production-ready web platform with high uptime and smooth data flows across all devices.",
        gallery: []
      }
    },
    {
      id: "calico",
      slug: "calico-museum",
      title: "Calico Museum Archives",
      summary: "Developed core web features and database integration for the museum's digital archive platform, enabling structured catalog exploration and fast search.",
      role: "Software Developer",
      tech: [],
      liveDemo: "https://calicomuseum.org",
      github: "#",
      coverImage: "/projects/logos/calico-logo.svg",
      caseStudy: {
        problem: "Digitizing extensive historical textile archives required an efficient database-backed platform with intuitive collection browsing.",
        approach: "Engineered catalog querying, relational data integration, and responsive digital collection interfaces.",
        techDecisions: "Relational artifact metadata indexing and smooth collection filtering.",
        result: "Delivered a performant archive portal for researchers and visitors to explore rare textile collections.",
        gallery: []
      }
    },
    {
      id: "madhubhan",
      slug: "madhubhan-resort",
      title: "Madhubhan Resort",
      summary: "Led the complete build and launch of the luxury resort's web platform from scratch, managing database modeling, backend workflows, booking integrations, and modern UI.",
      role: "Lead Full Stack Developer",
      tech: [],
      liveDemo: "https://madhubhanresortandspa.com/",
      github: "#",
      coverImage: "/projects/logos/madhubhan-logo.png",
      caseStudy: {
        problem: "The luxury resort needed a bespoke, high-performance web platform built from scratch to drive guest inquiries and direct reservations.",
        approach: "Engineered end-to-end web architecture with relational database modeling, backend API services, and responsive modern interfaces.",
        techDecisions: "Transactional booking records, backend endpoints, and bespoke luxury styling.",
        result: "Successfully built and deployed the production portal, streamlining guest bookings and client engagement.",
        gallery: []
      }
    },
    {
      id: "cupdf",
      slug: "cupdf",
      title: "CUPDF",
      summary: "Developed the official web platform for CEPT Urban Planning & Design Foundation, implementing dynamic content modules, publication indexes, and REST API integration.",
      role: "Web Developer",
      tech: [],
      liveDemo: "https://cupdf.org/",
      github: "#",
      coverImage: "/projects/logos/cupdf-logo.png",
      caseStudy: {
        problem: "CEPT Foundation needed a dedicated web portal to publish urban planning research papers, case studies, and training programs.",
        approach: "Built modular reactive components, dynamic publication search pipelines, and connected backend API endpoints.",
        techDecisions: "Reactive state handling and lightweight component architecture paired with backend APIs.",
        result: "Successfully launched the foundation's official web presence, accelerating access to urban research and programs.",
        gallery: []
      }
    },
    {
      id: "mdi-gurgaon",
      slug: "mdi-gurgaon",
      title: "MDI Gurgaon",
      summary: "Handled ongoing AMC maintenance, design updates, and client-requested UI changes to keep the institution's portal clean, updated, and responsive.",
      role: "Website Maintenance & AMC",
      tech: [],
      liveDemo: "https://mdi.ac.in",
      github: "#",
      coverImage: "/projects/logos/mdi-logo.png",
      caseStudy: {
        problem: "An established institutional portal required continuous maintenance, CMS schema tweaks, and quick turnarounds for administrative updates.",
        approach: "Provided ongoing AMC management, customized CMS templates, maintained database queries, and implemented UI refinements.",
        techDecisions: "Flexible content hierarchy and structured template management.",
        result: "Maintained high uptime and consistent portal stability across institutional admissions and announcements.",
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
