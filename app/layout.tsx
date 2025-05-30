import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal'],
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Lock-in",
  description: "Lock-in helps you stay focused and productive. Transform your workflow with smart focus tools and personalized productivity insights.",
  icons: {
    icon: [
      {
        url: "/logo_transparent_v2.svg",
        type: "image/svg+xml",
        sizes: "32x32"
      },
      {
        url: "/logo_transparent_v2.svg",
        type: "image/svg+xml",
        sizes: "16x16"
      }
    ],
    apple: [
      {
        url: "/logo_transparent_v2.svg",
        type: "image/svg+xml",
        sizes: "180x180"
      }
    ],
    shortcut: [{ url: "/logo_transparent_v2.svg" }],
    other: [
      {
        rel: "icon",
        url: "/logo_transparent_v2.svg",
      },
    ],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" type="image/svg+xml" sizes="32x32" href="/logo_transparent_v2.svg" />
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/logo_transparent_v2.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo_transparent_v2.svg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} bg-black`}>{children}</body>
    </html>
  );
}
