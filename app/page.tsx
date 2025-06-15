// Force deployment update - Cloudflare Pages sync
'use client'

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Alexandria, Lato, Work_Sans, Playfair_Display } from 'next/font/google'
import Image from "next/image"

const alexandria = Alexandria({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['600'], // SemiBold for headings
  style: ['normal'],
})

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'], // Regular for body text
  style: ['normal'],
})

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500'], // Medium for captions
  style: ['normal'],
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700'], // Bold for main headline
  style: ['normal'],
})

// Define features array
const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 12l2 2 4-4"/>
        <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
        <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
        <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
        <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
      </svg>
    ),
    title: "Smart Nudges",
    description: "Detect drift and gently pull users back on task."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: "Adaptive Break Coaching",
    description: "Suggests micro‑stretches & breathing when productivity dips."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 3v5h5"/>
        <path d="M3 8a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 4"/>
        <path d="M21 21v-5h-5"/>
        <path d="M21 16a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 20"/>
      </svg>
    ),
    title: "Session Insights",
    description: "End‑of‑focus reports + AI recommendations for the next round."
  }
];

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const loadTally = () => {
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        script.onload = () => {
          // @ts-ignore
          if (window.Tally) {
            // @ts-ignore
            window.Tally.loadEmbeds();
          }
        };
        document.body.appendChild(script);
      }
    };

    loadTally();
  }, []);

  useEffect(() => {
    // Custom CSS for enhanced logo animations
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes text-gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      
      @keyframes gradient-shift {
        0% {
          background-position: 0% 0%;
        }
        50% {
          background-position: 100% 100%;
        }
        100% {
          background-position: 0% 0%;
        }
      }
      
      .animate-text-gradient {
        background-size: 200% auto;
        animation: text-gradient 3s ease infinite;
      }
      
      .animate-gradient-shift {
        background-size: 400% 400%;
        animation: gradient-shift 15s ease infinite;
      }
      
      .animate-pulse-slow {
        animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      
      .scroll-animation {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      
      .scroll-animation.animate-in {
        opacity: 1;
        transform: translateY(0);
      }

      /* Enhanced logo animations */
      @keyframes logo-glow {
        0%, 100% {
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.3), 0 0 40px rgba(124, 58, 237, 0.2);
        }
        50% {
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.5), 0 0 60px rgba(124, 58, 237, 0.3);
        }
      }

      @keyframes logo-float {
        0%, 100% {
          transform: translateY(0px) rotate(0deg);
        }
        25% {
          transform: translateY(-8px) rotate(1deg);
        }
        50% {
          transform: translateY(-12px) rotate(0deg);
        }
        75% {
          transform: translateY(-4px) rotate(-1deg);
        }
      }

      @keyframes logo-spin-subtle {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes logo-scale-breath {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
      }

      .logo-glow {
        animation: logo-glow 4s ease-in-out infinite;
      }

      .logo-float {
        animation: logo-float 6s ease-in-out infinite;
      }

      .logo-spin-subtle {
        animation: logo-spin-subtle 20s linear infinite;
      }

      .logo-scale-breath {
        animation: logo-scale-breath 3s ease-in-out infinite;
      }

      .logo-container {
        position: relative;
        overflow: visible;
      }

      .logo-container::before {
        content: '';
        position: absolute;
        inset: -4px;
        background: linear-gradient(45deg, 
          rgba(99, 102, 241, 0.1), 
          rgba(124, 58, 237, 0.1), 
          rgba(168, 85, 247, 0.1), 
          rgba(99, 102, 241, 0.1)
        );
        background-size: 300% 300%;
        border-radius: inherit;
        animation: text-gradient 4s ease infinite;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .logo-container:hover::before {
        opacity: 1;
      }
    `;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className={`min-h-screen flex flex-col bg-background ${lato.className}`}>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes textGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-text-gradient {
          background-size: 300% 300%;
          animation: textGradient 6s ease infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(10px); }
          50% { transform: translateY(-15px) translateX(-5px); }
          75% { transform: translateY(-5px) translateX(-10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        
        .glimmer-card {
          position: relative;
          background: rgba(30, 25, 50, 0.7);
          border-radius: 12px;
          overflow: hidden;
        }
        
        .glimmer-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(114, 88, 167, 0.1),
            rgba(114, 88, 167, 0.15),
            rgba(114, 88, 167, 0.1),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .glimmer-pill {
          position: relative;
          background: rgba(30, 25, 50, 0.5);
          border-radius: 9999px;
          overflow: hidden;
        }
        
        .glimmer-pill::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(114, 88, 167, 0.1),
            rgba(114, 88, 167, 0.15),
            rgba(114, 88, 167, 0.1),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .hero-glow {
          position: absolute;
          top: 85%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 140%;
          height: 600px;
          background: radial-gradient(
            circle at center,
            rgba(99, 102, 241, 0.25) 0%,
            rgba(124, 58, 237, 0.15) 35%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(50px);
        }

        .scroll-animation {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-animation.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-delay-1 { transition-delay: 0.1s; }
        .scroll-delay-2 { transition-delay: 0.2s; }
        .scroll-delay-3 { transition-delay: 0.3s; }
        
        .bg-dotted-grid {
          background-image: radial-gradient(rgba(114, 88, 167, 0.15) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 transition-all duration-300 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-none mx-2 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="logo-container relative w-12 h-12 rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image 
                src="/Lock-in.svg"
                alt="Lock-in"
                fill
                className="object-contain p-1.5 relative z-10 rounded-xl"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className={`text-xl font-bold text-foreground group-hover:animate-text-gradient group-hover:bg-gradient-to-r group-hover:from-violet-300 group-hover:via-slate-500 group-hover:to-violet-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${alexandria.className}`}>Lock-in</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
          <Button 
            variant="ghost" 
            size="sm" 
              className="text-muted-foreground hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </Button>
          </div>
        </div>

        {/* Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full right-2 w-64 bg-background/95 backdrop-blur-md border border-border rounded-bl-lg rounded-br-lg shadow-xl">
            <div className="px-6 py-6">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#features" 
                  className={`text-muted-foreground hover:text-foreground transition-colors py-2 ${workSans.className}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#pricing" 
                  className={`text-muted-foreground hover:text-foreground transition-colors py-2 ${workSans.className}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a 
                  href="#contact" 
                  className={`text-muted-foreground hover:text-foreground transition-colors py-2 ${workSans.className}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <a 
                  href="https://f005.backblazeb2.com/file/lock-in-download/releases/lock-in.dmg"
                  className="inline-block mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button variant="lockin" size="sm" className="w-full">
                    Download
                  </Button>
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-dotted-grid dark:bg-dotted-grid opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#f6f5fa] via-purple-50 to-purple-100 dark:from-purple-900/20 dark:via-slate-900/15 dark:to-purple-800/10 animate-gradient-shift"></div>
            
            {/* Moving background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f6f5fa]/50 via-transparent to-purple-100/50 dark:from-purple-900/10 dark:via-transparent dark:to-slate-900/10 pointer-events-none"></div>
          </div>

          <div className="max-w-[1200px] mx-auto text-center relative z-10 px-4">
            {/* AI-Powered badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-card/80 border border-border/50 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
              <span className={`text-sm text-muted-foreground font-medium ${workSans.className}`}>AI-Powered Focus Coaching</span>
                        </div>
            
            {/* Tagline - one liner */}
            <h1 className={`text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 mx-auto fade-in delay-1 leading-tight whitespace-nowrap ${alexandria.className}`}>
              <span className="animate-text-gradient bg-gradient-to-r from-foreground via-purple-400 to-[#4a447b] bg-clip-text text-transparent">
                Your personal focus coach.
                      </span>
            </h1>

            {/* Enhanced caption */}
            <div className="max-w-2xl mx-auto mb-8 fade-in delay-2">
              <p className={`text-xl text-muted-foreground leading-relaxed ${lato.className}`}>
                Focus like a pro, coached by productivity not timer
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 fade-in delay-3">
                    <a 
                      href="https://f005.backblazeb2.com/file/lock-in-download/releases/lock-in.dmg"
                className="inline-block group"
              >
              <Button 
                variant="lockin" 
                size="lg" 
                  className="relative overflow-hidden bg-gradient-to-r from-purple-500 via-[#4a447b] to-purple-500 hover:from-purple-400 hover:via-purple-500 hover:to-purple-400 transition-all duration-500 transform hover:scale-105 shadow-2xl shadow-purple-500/30 border border-purple-400/20 py-5 px-8"
              >
                  <span className="relative z-10 text-white flex items-center gap-3 px-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="font-semibold">Download for macOS</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-[#f6f5fa] to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
                    </a>
              </div>

            {/* Enhanced Demo Video */}
            <div id="hero-demo" className="relative w-full max-w-[1000px] mx-auto scroll-animation transform hover:scale-[1.02] transition-all duration-700 group">
              <div className="relative">
                {/* Glow effect behind the demo */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-200/20 via-[#4a447b]/30 to-purple-200/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative aspect-video bg-card/90 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(74,68,123,0.35)]">
                  {/* Top bar with dots */}
                  <div className="flex items-center gap-2 px-6 py-4 border-b border-border bg-muted/50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className={`text-sm text-muted-foreground ${workSans.className}`}>Lock-in Demo</span>
                    </div>
                  </div>
                  
                  {/* Main content area */}
                  <div className="relative h-full flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-[#4a447b] flex items-center justify-center shadow-2xl shadow-purple-500/50 animate-pulse-slow mb-6 mx-auto border border-purple-400/30">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3L19 12L5 21V3Z" fill="white" />
                  </svg>
                    </div>
                      <h3 className={`text-2xl font-bold text-foreground mb-2 ${alexandria.className}`}>Interactive Demo</h3>
                      <p className={`text-muted-foreground ${lato.className}`}>Experience the future of productivity</p>
                  </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-6 right-6 w-20 h-20 border border-border rounded-full opacity-30"></div>
                    <div className="absolute bottom-6 left-6 w-16 h-16 border border-border rounded-lg opacity-20"></div>
                </div>
                  
                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-muted/60 to-transparent"></div>
              </div>
                </div>
              </div>
            </div>
          
          {/* Add tech elements around the mockup */}
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 relative overflow-hidden bg-background">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 animate-text-gradient bg-gradient-to-r from-foreground via-purple-400 to-[#4a447b] bg-clip-text text-transparent ${alexandria.className}`}>
                Features that Make a Difference
              </h2>
              <p className={`text-muted-foreground max-w-2xl mx-auto text-lg ${lato.className}`}>
                Designed with modern productivity science in mind, Lock-in helps you achieve deep focus with intelligent AI coaching.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-16">
              {features.map((feature, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 scroll-animation`}>
                  {/* Image Placeholder */}
                  <div className="w-full md:w-1/2">
                    <div className="aspect-video bg-card/80 backdrop-blur-sm border border-border rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(139,92,246,0.15)] group hover:shadow-[0_8px_30px_rgba(139,92,246,0.25)] transition-all duration-500">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-[#4a447b] flex items-center justify-center mb-4 mx-auto shadow-lg shadow-purple-500/20">
                    {feature.icon}
                </div>
                          <p className={`text-muted-foreground text-sm ${workSans.className}`}>Feature Preview</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 text-foreground ${alexandria.className}`}>
                    {feature.title}
                </h3>
                    <p className={`text-muted-foreground text-lg leading-relaxed ${lato.className}`}>
                    {feature.description}
                </p>
                  </div>
              </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 animate-text-gradient bg-gradient-to-r from-foreground via-purple-400 to-[#4a447b] bg-clip-text text-transparent ${alexandria.className}`}>
                Simple, Transparent Pricing
              </h2>
              <p className={`text-muted-foreground max-w-2xl mx-auto text-lg ${lato.className}`}>
                Start free during beta, then choose the plan that works for you.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Monthly Plan */}
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-8 shadow-[0_8px_30px_rgba(139,92,246,0.15)] scroll-animation flex flex-col">
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold text-foreground mb-2 ${alexandria.className}`}>Monthly</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className={`text-4xl font-bold text-foreground ${alexandria.className}`}>$8.99</span>
                    <span className={`text-muted-foreground ml-2 ${workSans.className}`}>/month</span>
                </div>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className={`flex items-center text-muted-foreground ${lato.className}`}>
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    Advanced AI coaching
                  </li>
                  <li className={`flex items-center text-muted-foreground ${lato.className}`}>
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    Adaptive break coaching
                  </li>
                  <li className={`flex items-center text-muted-foreground ${lato.className}`}>
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    Detailed session insights
                  </li>
                  <li className={`flex items-center text-muted-foreground ${lato.className}`}>
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Priority support
                  </li>
                </ul>
                <Button variant="lockinOutline" className="w-full mt-auto">
                  Start 24h Free Trial
                  </Button>
              </div>
              
              {/* Yearly Plan */}
              <div className="bg-card/80 backdrop-blur-sm border-2 border-purple-500/50 rounded-xl p-8 shadow-[0_8px_30px_rgba(74,68,123,0.25)] scroll-animation relative flex flex-col">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className={`bg-gradient-to-r from-purple-400 to-[#4a447b] text-white px-4 py-1 rounded-full text-sm font-medium ${workSans.className}`}>
                    Best Value
                  </span>
                </div>
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold text-foreground mb-2 ${alexandria.className}`}>Yearly</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className={`text-4xl font-bold text-foreground ${alexandria.className}`}>$59.88</span>
                    <span className={`text-muted-foreground ml-2 ${workSans.className}`}>/year</span>
                </div>
                  <div className={`text-sm text-green-400 mb-2 ${workSans.className}`}>
                    Save 44% vs monthly
                </div>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className={`flex items-center text-muted-foreground ${lato.className}`}>
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    Advanced AI coaching
                  </li>
                  <li className={`flex items-center text-muted-foreground ${lato.className}`}>
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    Adaptive break coaching
                  </li>
                  <li className={`flex items-center text-muted-foreground ${lato.className}`}>
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    Detailed session insights
                  </li>
                  <li className={`flex items-center text-muted-foreground ${lato.className}`}>
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    Priority support
                  </li>
                </ul>
                <Button variant="lockin" className="w-full mt-auto">
                  Start 24h Free Trial
                  </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-border py-8 relative overflow-hidden">
        <div className="max-w-none mx-4 px-0 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-6 md:mb-0 md:w-1/2">
              <Link href="/" className="flex items-center gap-2 group mb-3">
                <div className="logo-container relative w-12 h-12 rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image 
                    src="/Lock-in.svg"
                    alt="Lock-in"
                    fill
                    className="object-contain p-1.5 relative z-10 rounded-xl"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className={`text-xl font-bold text-foreground group-hover:animate-text-gradient group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-[#4a447b] group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${alexandria.className}`}>Lock-in</span>
              </Link>
              <p className={`text-muted-foreground mt-2 text-sm max-w-xs ${workSans.className}`}>
                Focus like a pro, coached by AI not timers.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div>
                <h3 className={`text-foreground font-medium mb-2 ${alexandria.className}`}>Contact</h3>
                <ul className="space-y-1">
                  <li><a href="#" className={`text-muted-foreground hover:text-foreground transition-colors ${workSans.className}`}>Support</a></li>
                  <li><a href="#" className={`text-muted-foreground hover:text-foreground transition-colors ${workSans.className}`}>Feedback</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className={`text-foreground font-medium mb-2 ${alexandria.className}`}>Legal</h3>
                <ul className="space-y-1">
                  <li><a href="#" className={`text-muted-foreground hover:text-foreground transition-colors ${workSans.className}`}>Privacy Policy</a></li>
                  <li><a href="#" className={`text-muted-foreground hover:text-foreground transition-colors ${workSans.className}`}>Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
            <p className={`text-muted-foreground text-sm ${workSans.className}`}>
              © {new Date().getFullYear()} Lock-in. All rights reserved.
            </p>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
              
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
              
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}