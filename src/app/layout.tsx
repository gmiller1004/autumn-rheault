import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://autumnrheault.com",
  ),
  title: "Autumn Rheault | Triple Threat Performer",
  description:
    "Official website of Autumn Rheault — youth triple-threat performer in acting, voice, and dance.",
  openGraph: {
    title: "Autumn Rheault | Triple Threat Performer",
    description:
      "Official website of Autumn Rheault — youth triple-threat performer in acting, voice, and dance.",
    url: "/",
    siteName: "Autumn Rheault",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Autumn Rheault — Triple Threat Performer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autumn Rheault | Triple Threat Performer",
    description:
      "Official website of Autumn Rheault — youth triple-threat performer in acting, voice, and dance.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
