import type { Metadata } from "next";
import { Poppins, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://alanmikeo.github.io";
const siteTitle = "Alan Michael | Produto Digital, Sistemas e Automação";
const siteDescription =
  "Portfólio de Alan Michael: desenvolvimento full-stack, apps, landing pages, sistemas de gestão, integrações e IA aplicada a operações reais.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Alan Michael",
  },
  description: siteDescription,
  keywords: [
    "Alan Michael",
    "alanmikeo",
    "desenvolvedor full-stack",
    "portfólio desenvolvedor",
    "Next.js",
    "React Native",
    "Django",
    "Supabase",
    "automação",
    "IA aplicada",
    "chatbot",
    "OCR",
    "visão computacional",
  ],
  authors: [{ name: "Alan Michael", url: siteUrl }],
  creator: "Alan Michael",
  publisher: "Alan Michael",
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Alan Michael",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alan Michael - Produtos digitais, sistemas e IA aplicada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased min-h-screen selection:bg-electric-blue/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
