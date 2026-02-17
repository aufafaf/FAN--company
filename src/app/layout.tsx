/**
 * Root Layout
 * Main layout wrapper with metadata and providers
 */

import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import { SEO_DEFAULT } from "@/lib/constants";

// Font configurations
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: SEO_DEFAULT.title,
  description: SEO_DEFAULT.description,
  keywords: SEO_DEFAULT.keywords,
  authors: [{ name: "CV Mandiri Multi Usaha" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://mandirimultiusaha.com",
    siteName: "CV Mandiri Multi Usaha",
    title: SEO_DEFAULT.title,
    description: SEO_DEFAULT.description,
    images: [
      {
        url: SEO_DEFAULT.ogImage,
        width: 1200,
        height: 630,
        alt: "CV Mandiri Multi Usaha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_DEFAULT.title,
    description: SEO_DEFAULT.description,
    images: [SEO_DEFAULT.ogImage],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <ScrollProgress />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
