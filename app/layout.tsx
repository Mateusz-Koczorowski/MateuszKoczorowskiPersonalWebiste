import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Senior QA Engineer | Quality Strategy and Test Automation",
    template: "%s | Senior QA Engineer",
  },
  description:
    "Personal technical brand website for a Senior QA Engineer focused on test automation, AI-assisted QA workflows, quality strategy, and engineering community work.",
  applicationName: "Senior QA Engineer Portfolio",
  authors: [{ name: "Mateusz Koczorowski" }],
  creator: "Mateusz Koczorowski",
  openGraph: {
    title: "Senior QA Engineer | Quality Strategy and Test Automation",
    description:
      "Technical brand website covering QA leadership, automation architecture, AI-assisted workflows, case studies, and public speaking.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071019",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
