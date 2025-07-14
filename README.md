# Lock-in Landing Page

This is the official landing page for Lock-in, a macOS AI focus assistant. Built with [Next.js](https://nextjs.org/) and deployed on [Cloudflare Pages](https://pages.cloudflare.com/).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load custom Google Fonts (Playfair Display and Inter).

## Building for Production

To build the project for production deployment:

```bash
npm run build
```

This creates a static export in the `out` directory, optimized for Cloudflare Pages.

## Features

- **Modern Design**: Beautiful, responsive design with gradient animations
- **AI Focus Assistant**: Landing page for Lock-in macOS app
- **Maintenance Mode**: Toggle maintenance page via environment variables
- **Download Section**: Direct download links for macOS app releases
- **Social Media Integration**: Links to YouTube, X, TikTok, and Instagram
- **Optimized Performance**: Built for Cloudflare Pages with static export

## Maintenance Mode

Control maintenance mode using environment variables:

### Local Development
Create `.env.local`:
```bash
NEXT_PUBLIC_MAINTENANCE_MODE=true  # Enable maintenance mode
NEXT_PUBLIC_MAINTENANCE_MODE=false # Disable maintenance mode
```

### Production (Cloudflare Pages)
Set environment variable in Cloudflare Pages dashboard:
- **Name**: `NEXT_PUBLIC_MAINTENANCE_MODE`
- **Value**: `true` or `false`

## Tech Stack

- **Framework**: Next.js 14 with App Router (Static Export)
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives
- **Deployment**: Cloudflare Pages
- **Fonts**: Playfair Display, Inter (Google Fonts)

## Deploy on Cloudflare Pages

This project is configured for deployment on Cloudflare Pages using static export.

### Deployment Configuration

- **Build Command**: `npm run build`
- **Build Output Directory**: `out`
- **Node.js Version**: 18.x
- **Framework Preset**: None (Static)

### Cloudflare Pages Setup

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command to `npm run build`
3. Set build output directory to `out`
4. Configure environment variables as needed
5. Deploy!

The static export ensures compatibility with Cloudflare's edge network without requiring server-side rendering.
