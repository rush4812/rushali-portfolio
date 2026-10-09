import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/ui/Navbar";
import Preloader from "@/components/ui/Preloader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Rushali Jivrajani - Full Stack Developer",
  description: "Portfolio of Rushali Jivrajani, a Full Stack Developer specializing in React.js, Next.js, and the MERN stack.",
  openGraph: {
    title: "Rushali Jivrajani - Full Stack Developer",
    description: "Portfolio of Rushali Jivrajani, a Full Stack Developer specializing in React.js, Next.js, and the MERN stack.",
    type: "website",
  }
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
