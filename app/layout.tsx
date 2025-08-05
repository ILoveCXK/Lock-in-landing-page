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
  title: "Lock-in: your AI focus coach",
  description: "Lock-in keeps you in peak flow. It uses context-aware nudges and adaptive micro-breaks to optimize your attention, so you accomplish more without burning out.",
  keywords: ["AI focus coach", "productivity app", "focus assistant", "flow state", "burnout prevention", "macOS", "time management", "distraction blocking", "attention optimization", "peak performance", "work-life balance", "focus timer", "pomodoro", "deep work"],
  authors: [{ name: "Lock-in Team" }],
  creator: "Lock-in",
  publisher: "Lock-in",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lock-in.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Lock-in: your AI focus coach",
    description: "Lock-in keeps you in peak flow. It uses context-aware nudges and adaptive micro-breaks to optimize your attention, so you accomplish more without burning out.",
    url: "https://lock-in.ai",
    siteName: "Lock-in",
    images: [
      {
        url: "/Lock-in-metadata.png",
        width: 1200,
        height: 630,
        alt: "Lock-in - Your AI Focus Coach",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lock-in: your AI focus coach",
    description: "Lock-in keeps you in peak flow. It uses context-aware nudges and adaptive micro-breaks to optimize your attention, so you accomplish more without burning out.",
    images: ["/Lock-in-metadata.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/lock-in-logo.png", sizes: "16x16", type: "image/png" },
      { url: "/lock-in-logo.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
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
  maximumScale: 5,
  userScalable: true,
  themeColor: '#4a447b',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K25TKZXR');`
        }} />
        {/* End Google Tag Manager */}
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GR4PJK5RSH"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GR4PJK5RSH');
          `
        }} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="title" content="Lock-in: your AI focus coach" />
        <meta name="description" content="Lock-in keeps you in peak flow. It uses context-aware nudges and adaptive micro-breaks to optimize your attention, so you accomplish more without burning out." />
        <meta name="keywords" content="AI focus coach, productivity app, focus assistant, flow state, burnout prevention, macOS, time management, distraction blocking, attention optimization, peak performance, work-life balance, focus timer, pomodoro, deep work" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Lock-in Team" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/lock-in-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/lock-in-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/lock-in-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta property="og:image" content="https://lock-in.ai/Lock-in-metadata.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://lock-in.ai/Lock-in-metadata.png" />
      </head>
      <body className={`${inter.className}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K25TKZXR" height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
