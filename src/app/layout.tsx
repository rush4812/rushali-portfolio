import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/ui/Navbar";
import Preloader from "@/components/ui/Preloader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Rushali Jivrajani | Full Stack Developer",
  description: "Portfolio of Rushali Jivrajani, a Full Stack Developer specializing in React.js, Next.js, and the MERN stack. Building scalable and high-performance web applications.",
  keywords: ["Rushali Jivrajani", "Full Stack Developer", "MERN Stack", "Next.js", "React.js", "Web Developer", "Software Engineer", "India"],
  authors: [{ name: "Rushali Jivrajani" }],
  creator: "Rushali Jivrajani",
  openGraph: {
    title: "Rushali Jivrajani | Full Stack Developer",
    description: "Portfolio of Rushali Jivrajani, a Full Stack Developer specializing in React.js, Next.js, and the MERN stack.",
    url: "https://rushali-jivrajani.vercel.app",
    siteName: "Rushali Jivrajani Portfolio",
    images: [
      {
        url: "/og-image.jpg", // TODO: Add an actual OG image to the public folder
        width: 1200,
        height: 630,
        alt: "Rushali Jivrajani - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rushali Jivrajani | Full Stack Developer",
    description: "Portfolio of Rushali Jivrajani, a Full Stack Developer specializing in React.js, Next.js, and the MERN stack.",
    images: ["/og-image.jpg"],
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
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="antialiased font-sans bg-background text-foreground relative selection:bg-neon-accent selection:text-foreground">
        <Preloader />
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
