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
  title: "Lock-in | AI focus assistant",
  description: "Transform your productivity with Lock-in, the AI-powered focus assistant that coaches you to peak performance. Smart insights, personalized guidance, and distraction-free focus sessions.",
  keywords: ["productivity", "focus", "AI assistant", "macOS", "time management", "distraction blocking"],
  authors: [{ name: "Lock-in Team" }],
  creator: "Lock-in",
  publisher: "Lock-in",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lock-in.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Lock-in | AI focus assistant",
    description: "Transform your productivity with Lock-in, the AI-powered focus assistant that coaches you to peak performance.",
    url: "/lock-in-metadata.png",
    siteName: "Lock-in",
    images: [
      {
        url: "/lock-in-metadata.png",
        width: 1200,
        height: 630,
        alt: "Lock-in - AI-Powered Focus Assistant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lock-in | AI focus assistant",
    description: "Transform your productivity with Lock-in, the AI-powered focus assistant that coaches you to peak performance.",
    images: ["/lock-in-metadata.png"],
  },
  icons: {
    icon: [
      { url: "/lock-in-logo.png" },
      { url: "/lock-in-logo.png", sizes: "16x16", type: "image/png" },
      { url: "/lock-in-logo.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: [{ url: "/lock-in-logo.png" }],
    apple: [
      { url: "/lock-in-logo.png" },
      { url: "/lock-in-logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
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
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/lock-in-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/lock-in-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/lock-in-logo.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
