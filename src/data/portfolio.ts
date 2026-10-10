import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiVercel, SiGit, SiFramer, SiJavascript, SiTypescript, SiRedux, SiPrisma } from "react-icons/si";

export const portfolioData = {
  personal: {
    name: "Rushali Jivrajani",
    title: "Full Stack Developer",
    subtitle: "Building strong MERN-stack backends and smooth Next.js interfaces.",
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
    text: "Hi, I am a Full Stack Developer with a strong focus on the MERN stack and Next.js. I love turning complex business requirements into simple, scalable web applications. My core strength lies in bridging the gap between solid backends and smooth user interfaces to build complete digital solutions.",
    currentlyLearning: "Advanced Cloud Architecture & WebGL",
    // TODO: Add your real photo to the public folder and update this path
    photoUrl: "/placeholder-profile.jpg"
  },
  projects: [
    {
      id: "amanta",
      slug: "amanta-healthcare",
      title: "Amanta Healthcare",
      summary: "A fast and secure web platform built for healthcare professionals with automated data processing.",
      role: "Lead Full Stack Developer",
      tech: ["Next.js", "MongoDB", "Express", "TailwindCSS"],
      liveDemo: "#", // TODO: Add real Live Demo URL
      github: "#", // TODO: Add real GitHub URL
      coverImage: "/projects/amanta-cover.jpg", // TODO: Add real image
      caseStudy: {
        problem: "The client needed a highly secure and fast-loading platform for doctors and patients, where they could view data without any lag.",
        approach: "I built a responsive web app using server-side rendering so the pages load instantly. I also designed a clean API layer to handle the data securely.",
        techDecisions: "I chose Next.js because it helps with SEO and fast initial loading. For the database, MongoDB was perfect for storing flexible medical records.",
        result: "Delivered a smooth application with almost zero delay in loading data, and fully automated deployment pipelines.",
        gallery: [] // TODO: Add gallery image paths
      }
    },
    {
      id: "calico",
      slug: "calico-museum",
      title: "Calico Museum Archives",
      summary: "A clean, interactive frontend for a digital museum archive to explore thousands of historical records.",
      role: "Frontend Engineer",
      tech: ["React.js", "Redux", "Node.js", "PostgreSQL"],
      liveDemo: "#", // TODO: Add real Live Demo URL
      github: "#", // TODO: Add real GitHub URL
      coverImage: "/projects/calico-cover.jpg", // TODO: Add real image
      caseStudy: {
        problem: "Users were finding it very difficult to search and navigate through a massive, unorganized historical dataset.",
        approach: "I created a simple and component-based user interface that makes filtering and finding historical items very easy.",
        techDecisions: "I used Redux to manage the complex state of all the different search filters across the application.",
        result: "Transformed the confusing archive into a user-friendly digital experience with very fast search results.",
        gallery: []
      }
    },
    {
      id: "madhubhan",
      slug: "madhubhan-resort",
      title: "Madhubhan Resort",
      summary: "A premium hotel booking platform with fast page loads and smooth luxury animations.",
      role: "Full Stack Developer",
      tech: ["Next.js", "TypeScript", "Prisma", "Framer Motion"],
      liveDemo: "#", // TODO: Add real Live Demo URL
      github: "#", // TODO: Add real GitHub URL
      coverImage: "/projects/madhubhan-cover.jpg", // TODO: Add real image
      caseStudy: {
        problem: "The resort wanted their website to feel as premium and luxurious as their physical property, but without becoming slow to load.",
        approach: "I developed the entire website focusing on smooth, cinematic scroll animations while keeping a strict check on performance and image sizes.",
        techDecisions: "I used Framer Motion for the smooth animations and Prisma to safely talk to our database using TypeScript.",
        result: "Achieved a 98+ Lighthouse performance score even with heavy, high-quality images and videos.",
        gallery: []
      }
    },
    {
      id: "cupdf",
      slug: "cupdf",
      title: "CUPDF",
      summary: "A robust UI implementation using Vue.js for seamless document handling.",
      role: "Frontend Developer",
      tech: ["Vue.js", "JavaScript", "TailwindCSS"],
      liveDemo: "#",
      github: "#",
      coverImage: "/placeholder.jpg",
      caseStudy: {
        problem: "The client needed a responsive, modern interface to view and manage PDF documents.",
        approach: "Implemented a dynamic Vue.js frontend with highly reusable components.",
        techDecisions: "Vue.js was selected for its reactivity and ease of integrating complex UI features.",
        result: "Delivered a highly performant interface allowing users to flawlessly read documents.",
        gallery: []
      }
    },
    {
      id: "mdi-gurgaon",
      slug: "mdi-gurgaon",
      title: "MDI Gurgaon",
      summary: "Comprehensive website maintenance and layout optimization.",
      role: "Software Developer",
      tech: ["React.js", "CSS3", "JavaScript"],
      liveDemo: "#",
      github: "#",
      coverImage: "/placeholder.jpg",
      caseStudy: {
        problem: "The website had layout inconsistencies across modern devices and required structural fixes.",
        approach: "Conducted a complete layout audit and pushed responsive fixes across all major viewports.",
        techDecisions: "Used raw CSS and React optimizations to ensure existing architecture wasn't broken.",
        result: "Restored a perfect cross-browser experience and improved mobile usability metrics.",
        gallery: []
      }
    },
    {
      id: "elecon",
      slug: "elecon",
      title: "Elecon",
      summary: "Website maintenance and layout fixes for an industrial enterprise.",
      role: "Software Developer",
      tech: ["React.js", "Node.js"],
      liveDemo: "#",
      github: "#",
      coverImage: "/placeholder.jpg",
      caseStudy: {
        problem: "The enterprise needed ongoing maintenance and immediate layout fixes for their digital portal.",
        approach: "Systematically resolved layout bugs and optimized component loading.",
        techDecisions: "Refactored legacy React components for better state management.",
        result: "Increased overall site stability and delivered layout fixes ahead of schedule.",
        gallery: []
      }
    }
  ],
  experience: [
    {
      role: "Full Stack Developer",
      company: "NetInc Digital Services",
      period: "Jul 2024 - Present",
      achievements: [
        "Developed responsive frontend designs and scalable backend APIs using the MERN stack and Next.js.",
        "Built robust RESTful APIs with Node.js and Express to handle heavy data requests efficiently.",
        "Designed complex MongoDB database schemas and improved query speed by 45% using proper indexing. // TODO: confirm metric",
        "Set up CI/CD pipelines using GitHub Actions for smooth and automated deployments without downtime."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Sharva InfoTech",
      period: "Feb 2024 - Jun 2024",
      achievements: [
        "Built fast and interactive admin dashboards for enterprise clients using React.js.",
        "Managed application state effectively and integrated the UI with secure Node.js backend services.",
        "Followed strict testing practices to make sure the application runs smoothly without any crashes. // TODO: confirm metric",
        "Worked closely with the team in an agile environment to deliver features on time."
      ]
    }
  ],
  education: [
    {
      degree: "Master of Computer Application",
      school: "Gujarat Technological University",
      period: "2022 - 2024"
    },
    {
      degree: "Bachelor of Computer Application",
      school: "Saurashtra University",
      period: "2019 - 2022"
    }
  ],
  stack: [
    {
      title: "FRONTEND",
      tools: [
        { name: "React", icon: SiReact, color: "#61DAFB", category: "frontend" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", category: "frontend" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", category: "frontend" },
        { name: "Framer", icon: SiFramer, color: "#0055FF", category: "frontend" },
        { name: "Redux", icon: SiRedux, color: "#764ABC", category: "frontend" }
      ]
    },
    {
      title: "BACKEND",
      tools: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "backend" },
        { name: "Express", icon: SiExpress, color: "#FFFFFF", category: "backend" }
      ]
    },
    {
      title: "DATABASES",
      tools: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "db" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", category: "db" },
        { name: "Prisma", icon: SiPrisma, color: "#2D3748", category: "db" }
      ]
    },
    {
      title: "DEVOPS",
      tools: [
        { name: "Vercel", icon: SiVercel, color: "#FFFFFF", category: "devops" },
        { name: "Git", icon: SiGit, color: "#F05032", category: "devops" }
      ]
    },
    {
      title: "LANGUAGES",
      tools: [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "language" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "language" }
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
