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

## Building for Cloudflare Pages

To build the project for Cloudflare Pages deployment:

```bash
npm run build:cf
```

This uses `@cloudflare/next-on-pages` to create a Cloudflare Pages compatible build.

## Features

- **Modern Design**: Beautiful, responsive design with gradient animations
- **AI Focus Assistant**: Landing page for Lock-in macOS app
- **Waitlist Integration**: Google Forms integration for early access
- **Download Section**: Direct download links for macOS app releases
- **Optimized Performance**: Built for Cloudflare Pages with edge optimization

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives
- **Deployment**: Cloudflare Pages
- **Fonts**: Playfair Display, Inter (Google Fonts)

## Deploy on Cloudflare Pages

This project is optimized for deployment on Cloudflare Pages. The build process uses `@cloudflare/next-on-pages` to ensure compatibility with Cloudflare's edge runtime.

### Deployment Configuration

- **Build Command**: `npx @cloudflare/next-on-pages@1`
- **Build Output Directory**: `.vercel/output/static`
- **Node.js Version**: 18.x (specified in `.nvmrc`)
- **Compatibility Flags**: `nodejs_compat` (configured in `wrangler.toml`)

For more details about deploying Next.js to Cloudflare Pages, check out the [official documentation](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/).
