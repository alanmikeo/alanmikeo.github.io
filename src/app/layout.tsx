import type { Metadata } from "next";
import { DM_Sans, Geist, Space_Grotesk } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });
const geistLogo = Geist({ variable: "--font-geist-logo", subsets: ["latin"] });

const siteUrl = "https://alanmikeo.github.io";
const siteTitle = "Alan Michael | Desenvolvedor full-stack de apps e sistemas";
const siteDescription =
  "Portfólio de Alan Michael (alanmikeo). Desenvolvimento de aplicativos, sistemas web, sites e automações com IA. Conheça projetos publicados e entre em contato.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "alanmikeo",
  title: siteTitle,
  description: siteDescription,
  authors: [{ name: "Alan Michael", url: siteUrl }],
  creator: "Alan Michael",
  publisher: "Alan Michael",
  alternates: { canonical: "/" },
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
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Alan Michael, desenvolvedor de apps e sistemas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={dmSans.variable + " " + spaceGrotesk.variable + " " + geistLogo.variable}>{children}</body>
    </html>
  );
}
