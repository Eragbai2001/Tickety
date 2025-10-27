import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";


const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });

export const metadata: Metadata = {
  title: "Tickety",
  description: "Created with v0",
  generator: "Tickety",

  // icon(s) used by browsers
  icons: {
    icon: "images/logo.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // Open Graph (Facebook, Slack, etc)
  openGraph: {
    title: "Tickety",
    description: "Created with v0",
    // can be a string or an object with url/alt/width/height
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Tickety — ticket management dashboard",
      },
    ],
    siteName: "Tickety",
    type: "website",
  },

  // Twitter card (Twitter will fall back to openGraph if omitted)
  twitter: {
    card: "summary_large_image",
    title: "Tickety",
    description: "Created with v0",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_archivo.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
