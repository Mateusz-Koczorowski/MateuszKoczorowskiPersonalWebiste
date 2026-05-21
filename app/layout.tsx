import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { absoluteUrl, siteConfig } from "@/lib/seo";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataBase = new URL(siteConfig.url || "http://localhost:3000");
const socialImages = siteConfig.url
  ? [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "Mateusz Koczorowski - Senior QA Engineer",
      },
    ]
  : undefined;

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.manifestName,
  authors: [{ name: siteConfig.name, url: siteConfig.url || undefined }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Professional portfolio",
  classification: "Senior QA Engineering portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-icon.svg",
  },
  alternates: siteConfig.url
    ? {
        canonical: "/",
      }
    : undefined,
  openGraph: {
    title: siteConfig.previewTitle,
    description: siteConfig.previewDescription,
    url: siteConfig.url || undefined,
    siteName: siteConfig.name,
    type: "website",
    locale: siteConfig.locale,
    images: socialImages,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.previewTitle,
    description: siteConfig.previewDescription,
    images: siteConfig.url ? [absoluteUrl("/twitter-image")] : undefined,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: siteConfig.themeColor,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language} className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
