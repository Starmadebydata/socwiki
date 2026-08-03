import type { Metadata } from "next";
import { Cinzel, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { JsonLd } from "@/components/JsonLd";
import {
  GOOGLE_SITE_VERIFICATION,
  SITE_DESCRIPTION,
  SITE_FULL_NAME,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

/** Fantasy display titles — close to in-game serif headers */
const fontDisplay = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

/** Clean readable body */
const fontBody = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_FULL_NAME} - Characters, Tier Lists & Builds`,
    template: `%s - ${SITE_FULL_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_FULL_NAME,
    title: `${SITE_FULL_NAME} - Characters, Tier Lists & Builds`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/home-bg.webp",
        width: 1200,
        height: 630,
        alt: `${SITE_FULL_NAME} battle art`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_FULL_NAME,
    description: SITE_DESCRIPTION,
    images: ["/home-bg.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
  ...(GOOGLE_SITE_VERIFICATION
    ? { verification: { google: GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_FULL_NAME,
    alternateName: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/characters?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  };

  return (
    <html lang="en">
      <body
        className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <JsonLd data={[websiteLd, orgLd]} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
