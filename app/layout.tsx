import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PortfolioDone - Immersive 3D Portfolio Builder",
  description: "Create stunning scroll-based 3D portfolio websites with ease. Built with Next.js, Three.js, and modern web technologies.",
  keywords: ["portfolio", "3D", "Three.js", "Next.js", "scroll animation", "web development"],
  authors: [{ name: "PortfolioDone" }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
