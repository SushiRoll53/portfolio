import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "./lib/content";
import { siteUrl } from "./lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Full-stack engineer specializing in AI agent and LLM-orchestration systems — LangGraph, LittleHorse, MCP, and the auth, infra, and eval suites that ship them to production.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Bryan R. Figueroa",
    "AI Agent Engineer",
    "LLM Orchestration",
    "LangGraph",
    "LittleHorse",
    "MCP",
    "Full-Stack Engineer",
    "FastAPI",
    "Next.js",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — ${profile.title}`,
    description,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description,
  },
  robots: { index: true, follow: true },
};

// Person structured data — helps search engines build a rich/knowledge result.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  image: `${siteUrl}${profile.photo}`,
  jobTitle: profile.title,
  description,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "El Paso",
    addressRegion: "TX",
    addressCountry: "US",
  },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: [
    "AI Agents",
    "LLM Orchestration",
    "LangGraph",
    "LittleHorse",
    "Model Context Protocol",
    "Retrieval-Augmented Generation",
    "Full-Stack Engineering",
    "FastAPI",
    "Next.js",
    "Docker",
    "Terraform",
    "CI/CD",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
