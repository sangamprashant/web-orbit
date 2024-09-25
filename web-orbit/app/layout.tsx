import { Footer } from "@/components";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import { Suspense } from "react";
import "./globals.css";

// Dynamically import NavBar and Footer components
const NavBar = dynamic(() => import("@/components/Navbar"), { ssr: false });

// Fonts setup
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Updated metadata for better SEO
export const metadata: Metadata = {
  title: "WebOrbit - Innovative Web Solutions",
  description: "WebOrbit offers innovative web development solutions to help you transform your ideas into reality. Specializing in beautiful and responsive websites that engage users and drive results.",
  keywords: "web development, innovative solutions, responsive design, user engagement, WebOrbit",
  authors: [{ name: "Your Name or Company" }],
  openGraph: {
    title: "WebOrbit - Innovative Web Solutions",
    description: "Transform your ideas into reality with WebOrbit's web development services. We specialize in crafting beautiful, responsive websites.",
    url: "https://www.yourwebsite.com",
    siteName: "WebOrbit",
    images: [
      {
        url: "/images/hero-image.jpg",
        width: 800,
        height: 600,
        alt: "WebOrbit Hero Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebOrbit - Innovative Web Solutions",
    description: "Transform your ideas into reality with WebOrbit's web development services.",
    images: [ // Changed `image` to `images`
      {
        url: "/images/twitter-card-image.jpg", // Ensure this URL is correct
        width: 800, // Optional
        height: 600, // Optional
        alt: "WebOrbit Twitter Card Image", // Optional
      },
    ],
  },
};

// Loading fallback component
const LoadingFallback = () => <div>Loading...</div>;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.yourwebsite.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />

        {/* Suspense for lazy loading the children */}
        <Suspense fallback={<LoadingFallback />}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
