import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/ui/Navbar";
import Preloader from "@/components/ui/Preloader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  metadataBase: new URL("https://rushali-jivrajani.vercel.app"),
  title: {
    default: "Rushali Jivrajani | Full Stack Developer",
    template: "%s | Rushali Jivrajani",
  },
  description: "Portfolio of Rushali Jivrajani — Full Stack Developer specializing in Next.js, React.js, Node.js, and databases (PostgreSQL, MongoDB, MySQL). Building scalable, high-performance web applications.",
  keywords: [
    "Rushali Jivrajani",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "MERN Stack",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Web Developer Portfolio",
    "Figma",
    "UI/UX Design",
    "AI Tools",
    "Software Engineer",
    "India"
  ],
  authors: [{ name: "Rushali Jivrajani", url: "https://rushali-jivrajani.vercel.app" }],
  creator: "Rushali Jivrajani",
  publisher: "Rushali Jivrajani",
  alternates: {
    canonical: "https://rushali-jivrajani.vercel.app",
  },
  openGraph: {
    title: "Rushali Jivrajani | Full Stack Developer",
    description: "Explore the portfolio of Rushali Jivrajani, featuring modern web projects, case studies, and engineering expertise in Next.js, React, Node.js, and databases.",
    url: "https://rushali-jivrajani.vercel.app",
    siteName: "Rushali Jivrajani Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://rushali-jivrajani.vercel.app/og-image.jpg",
        secureUrl: "https://rushali-jivrajani.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rushali Jivrajani - Full Stack Developer",
        type: "image/jpeg",
      },
      {
        url: "https://rushali-jivrajani.vercel.app/og-image.png",
        secureUrl: "https://rushali-jivrajani.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rushali Jivrajani - Full Stack Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rushali Jivrajani | Full Stack Developer",
    description: "Portfolio of Rushali Jivrajani — Full Stack Developer specializing in Next.js, React.js, Node.js, and databases.",
    images: ["https://rushali-jivrajani.vercel.app/og-image.jpg"],
    creator: "@rush4812",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rushali Jivrajani",
    jobTitle: "Full Stack Developer",
    url: "https://rushali-jivrajani.vercel.app",
    image: "https://rushali-jivrajani.vercel.app/og-image.jpg",
    sameAs: [
      "https://github.com/rush4812",
      "https://linkedin.com/in/rushali-jivrajani"
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Tailwind CSS",
      "Figma",
      "UI/UX Design",
      "AI Tools",
      "Full Stack Development"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <meta property="og:image" content="https://rushali-jivrajani.vercel.app/og-image.jpg" />
        <meta property="og:image:secure_url" content="https://rushali-jivrajani.vercel.app/og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Rushali Jivrajani - Full Stack Developer" />
        <link rel="image_src" href="https://rushali-jivrajani.vercel.app/og-image.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-sans bg-background text-foreground relative selection:bg-neon-accent selection:text-foreground">
        <Preloader />
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
