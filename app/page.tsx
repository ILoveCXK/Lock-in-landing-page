// Force deployment update - Vercel sync fix
'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Playfair_Display, Inter } from 'next/font/google'
import Image from "next/image"

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
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
    // Custom CSS for tech grid and enhanced logo animations
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .tech-grid {
        background-image: linear-gradient(rgba(114,88,167,0.06) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(114,88,167,0.06) 1px, transparent 1px);
        background-size: 40px 40px;
      }
      
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
      
      .animate-text-gradient {
        background-size: 200% auto;
        animation: text-gradient 3s ease infinite;
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
    <div className={`min-h-screen flex flex-col bg-[#0F0C1F] ${inter.className}`}>
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
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 backdrop-blur-md bg-[#0F0C1F]/80 border-b border-indigo-500/20">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="logo-container relative w-10 h-10 rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image 
                src="/Lock-in.svg"
                alt="Lock-in"
                fill
                className="object-contain p-1.5 relative z-10 rounded-xl"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold text-white group-hover:animate-text-gradient group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:via-purple-300 group-hover:to-indigo-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Lock-in</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-indigo-200/80 hover:text-white transition-colors">Features</a>
            <a href="#demo" className="text-indigo-200/80 hover:text-white transition-colors">Demo</a>
            <a href="#download" className="text-indigo-200/80 hover:text-white transition-colors">Download</a>
            <a href="#pricing" className="text-indigo-200/80 hover:text-white transition-colors">Pricing</a>
            <Link href="#waitlist">
              <Button variant="lockin" size="sm">
                Join Waitlist
              </Button>
        </Link>
          </nav>
          
          <Button variant="ghost" size="sm" className="md:hidden text-indigo-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-28 px-6 relative overflow-hidden">
          {/* Modern background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-indigo-500/30 to-purple-500/20 rounded-full blur-[80px] opacity-70"></div>
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-indigo-400/10 rounded-full blur-[100px] opacity-60"></div>
            <div className="absolute top-40 right-1/3 w-64 h-64 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-[70px] opacity-50"></div>
            <div className="hero-glow"></div>
            
            {/* Tech-inspired grid background */}
            <div className="tech-grid absolute inset-0"></div>
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 15 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full particle"
                  style={{
                    width: `${Math.random() * 8 + 4}px`,
                    height: `${Math.random() * 8 + 4}px`,
                    background: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 50 + 50}, ${Math.random() * 200 + 55}, ${Math.random() * 0.5 + 0.2})`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 10 + 15}s linear infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="max-w-[1200px] mx-auto text-center relative z-10">
            {/* Enhanced Hero Logo */}
            <div className="mb-8 relative">
              <div className="logo-container relative w-40 h-40 md:w-48 md:h-48 mx-auto rounded-xl" style={{ filter: 'drop-shadow(0 0 30px rgba(99, 102, 241, 0.6)) drop-shadow(0 0 60px rgba(124, 58, 237, 0.4))' }}>
                {/* Main logo */}
                <Image 
                  src="/Lock-in.svg" 
                  alt="Lock-in Logo" 
                  fill
                  className="object-contain relative z-10"
                />
              </div>
              
              {/* Floating elements around logo */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-indigo-400/30 to-purple-500/30 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-400/20 to-indigo-500/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-br from-indigo-300/40 to-purple-400/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* macOS AI focus assistant badge - enhanced */}
            <div className="inline-flex items-center px-5 py-3 text-base font-medium mb-8 rounded-full fade-in bg-[#1E1940]/70 backdrop-blur-md border border-purple-500/30 shadow-lg shadow-purple-500/10">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                    <polyline points="13 13 13 16"></polyline>
                    <path d="M16.8 15.5c-.7.6-1.6 1-2.7 1a4 4 0 1 1 4-4c0 .6-.1 1.2-.4 1.7"></path>
                    <path d="M12 8v1"></path>
                  </svg>
                </div>
                <span className="text-xs uppercase tracking-wider font-bold animate-text-gradient bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-200 bg-clip-text text-transparent">macOS AI FOCUS ASSISTANT</span>
              </div>
            </div>

            {/* Tagline - revised for two lines instead of three */}
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto fade-in delay-1 leading-tight ${playfair.className}`}>
              <span className="animate-text-gradient bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                Your personal focus assistant.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-purple-100/80 max-w-[50ch] mx-auto mb-10 fade-in delay-2 relative">
              Lock-in helps you achieve deep focus with AI-powered coaching that adapts to your work patterns and gently guides you back when your mind wanders.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20 fade-in delay-3">
              <Button 
                variant="lockin" 
                size="lg" 
                className="relative group overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-600/20"
              >
                <span className="relative z-10 text-white">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button 
                variant="lockinOutline" 
                size="lg"
                className="relative group overflow-hidden border-2 border-indigo-400/50 hover:border-purple-400 bg-[#1E1940]/50 backdrop-blur-sm text-purple-100 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-600/10"
                onClick={() => {
                  document.getElementById('demo')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                  });
                }}
              >
                <span className="relative z-10">Watch Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>

            {/* Mockup Image with enhanced styling */}
            <div className="relative w-full max-w-[900px] mx-auto scroll-animation transform hover:scale-[1.02] transition-transform duration-700">
              <div className="absolute inset-0 bg-gradient-to-t from-[#121025] to-transparent z-10 h-[101%]"></div>
              <div className="relative rounded-xl border-8 border-[#1E1940] shadow-[0_10px_50px_rgba(92,71,255,0.25)] overflow-hidden">
                {/* App mockup content */}
                <div className="bg-[#1E1940] pt-6 pb-12 px-4">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
          </div>
                    <div className="flex items-center space-x-1.5">
                      <div className="w-4 h-4 rounded-full bg-indigo-500/20 flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 8V12L15 15" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round"/>
                          <circle cx="12" cy="12" r="9" stroke="#a5b4fc" strokeWidth="2"/>
                          </svg>
                      </div>
                      <span className="text-xs font-medium text-indigo-200/80">Focus Mode: Active</span>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">T</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30 animate-pulse-slow">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 16L12 12V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold animate-text-gradient bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-200 bg-clip-text text-transparent">52:14 Remaining</h3>
                    <p className="text-sm text-indigo-200/70">You&apos;re doing great! Keep focusing.</p>
                        </div>
                  
                  <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl p-5 mb-6 shadow-sm relative overflow-hidden">
                    <div className="absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-md"></div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold text-indigo-200">Current Session</h4>
                        <p className="text-xs text-indigo-300/70">Working on: UI Design Project</p>
                      </div>
                      <div className="px-2 py-1 rounded-md bg-indigo-800/50 backdrop-blur-sm text-xs font-medium text-indigo-200 shadow-sm">
                        Deep Focus
                        </div>
                        </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-sm text-indigo-200/80">Focus Score: 94%</span>
                        </div>
                      <div className="w-full bg-indigo-950/50 rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full" style={{ width: '94%' }}></div>
                      </div>
                        </div>
                      </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#252043] border border-indigo-500/20 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 group">
                      <div className="flex justify-between items-start mb-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-900/70 to-purple-900/70 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 8V12L15 15" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round"/>
                            <circle cx="12" cy="12" r="9" stroke="#a5b4fc" strokeWidth="2"/>
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-indigo-300/70 bg-indigo-800/30 px-2 py-0.5 rounded-full">Today</span>
                      </div>
                      <h4 className="font-medium text-indigo-200 text-sm">Total Focus Time</h4>
                      <p className="text-lg font-bold text-indigo-100 group-hover:animate-text-gradient group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:via-purple-300 group-hover:to-indigo-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">3h 42m</p>
                    </div>
                    
                    <div className="bg-[#252043] border border-indigo-500/20 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 group">
                      <div className="flex justify-between items-start mb-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-900/70 to-purple-900/70 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-indigo-300/70 bg-indigo-800/30 px-2 py-0.5 rounded-full">+12%</span>
                      </div>
                      <h4 className="font-medium text-indigo-200 text-sm">Productivity Score</h4>
                      <p className="text-lg font-bold text-indigo-100 group-hover:animate-text-gradient group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:via-purple-300 group-hover:to-indigo-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">92/100</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Add tech elements around the mockup */}
          <div className="absolute -right-12 top-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-indigo-400/10 rounded-full blur-xl"></div>
          <div className="absolute -left-12 bottom-1/4 w-24 h-24 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-xl"></div>
        </section>

        {/* Demo Video Section */}
        <section id="demo" className="py-20 relative overflow-hidden bg-[#0F0C1F]">
          <div className="tech-grid absolute inset-0"></div>
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 8 }).map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full particle"
                style={{
                  width: `${Math.random() * 6 + 3}px`,
                  height: `${Math.random() * 6 + 3}px`,
                  background: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 50 + 50}, ${Math.random() * 200 + 55}, ${Math.random() * 0.4 + 0.1})`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 12 + 18}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-text-gradient bg-gradient-to-r from-indigo-200 via-purple-300 to-indigo-100 bg-clip-text text-transparent">
                See Lock-in in Action
              </h2>
              <p className="text-indigo-200/80 max-w-2xl mx-auto text-lg">
                Watch how Lock-in transforms your focus sessions with AI coaching.
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto scroll-animation">
              <div className="aspect-video bg-gradient-to-br from-[#1E1940]/80 to-[#28204F]/80 backdrop-blur-sm border border-indigo-500/20 rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(92,71,255,0.25)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-xl shadow-purple-600/30 animate-pulse-slow">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3L19 12L5 21V3Z" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-bold text-white mb-1">Lock-in Demo</h3>
                  <p className="text-indigo-200/80">See the future of focus</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-indigo-200/60 text-sm max-w-xl mx-auto">
                The demo video will be available with our beta release. Join the waitlist to be notified!
              </p>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-20 relative overflow-hidden bg-[#0F0C1F]">
          <div className="tech-grid absolute inset-0"></div>
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 10 }).map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full particle"
                style={{
                  width: `${Math.random() * 7 + 4}px`,
                  height: `${Math.random() * 7 + 4}px`,
                  background: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 50 + 50}, ${Math.random() * 200 + 55}, ${Math.random() * 0.4 + 0.1})`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 15}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-text-gradient bg-gradient-to-r from-indigo-200 via-purple-300 to-indigo-100 bg-clip-text text-transparent">
                Download Lock-in
              </h2>
              <p className="text-indigo-200/80 max-w-2xl mx-auto text-lg">
                Get the latest version of Lock-in for macOS and start your journey to better focus.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Current Version - Featured */}
              <div className="bg-gradient-to-br from-[#1E1940]/80 to-[#28204F]/80 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-8 shadow-[0_8px_30px_rgba(92,71,255,0.15)] mb-8 scroll-animation relative overflow-hidden">
                <div className="absolute -right-24 -top-24 w-48 h-48 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-600/20">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="7,10 12,15 17,10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="12" y1="15" x2="12" y2="3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-full">
                        Latest Release
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Lock-in v1.1.0</h3>
                    <p className="text-indigo-200/80 mb-2">Released January 1, 2025</p>
                    <p className="text-indigo-200/60 text-sm">Enhanced AI coaching • Better performance • Bug fixes</p>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <a 
                      href="https://s3.us-east-005.backblazeb2.com/releases/Lock-in-1.1.0.dmg"
                      className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-600/20 flex items-center gap-3"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span>Download for macOS</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                    <p className="text-indigo-200/60 text-xs text-center">macOS 12.0+ • Apple Silicon & Intel</p>
                  </div>
                </div>
              </div>

              {/* Previous Versions */}
              <div className="bg-gradient-to-br from-[#1E1940]/60 to-[#28204F]/60 backdrop-blur-sm border border-indigo-500/10 rounded-xl p-6 scroll-animation">
                <h4 className="text-lg font-semibold text-indigo-200 mb-4 flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 1V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M1 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M21 12H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Previous Versions
                </h4>
                
                <div className="space-y-3">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-[#1A1730]/50 rounded-lg border border-indigo-500/10 hover:border-indigo-500/20 transition-colors group">
                    <div>
                      <h5 className="font-medium text-indigo-200 group-hover:text-white transition-colors">Lock-in v1.0.0</h5>
                      <p className="text-indigo-200/60 text-sm">Released December 1, 2024 • Initial release</p>
                    </div>
                    <a 
                      href="https://s3.us-east-005.backblazeb2.com/releases/Lock-in-1.0.0.dmg"
                      className="mt-3 md:mt-0 bg-indigo-900/50 hover:bg-indigo-800/70 text-indigo-200 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Download
                    </a>
                  </div>
                </div>
              </div>

              {/* System Requirements */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1E1940]/50 border border-indigo-500/20 rounded-full text-indigo-200/80 text-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  System Requirements: macOS 12.0 or later • 100MB free space
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 relative overflow-hidden bg-[#0F0C1F]">
          <div className="tech-grid absolute inset-0"></div>
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 10 }).map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full particle"
                style={{
                  width: `${Math.random() * 7 + 4}px`,
                  height: `${Math.random() * 7 + 4}px`,
                  background: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 50 + 50}, ${Math.random() * 200 + 55}, ${Math.random() * 0.4 + 0.1})`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 15}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-text-gradient bg-gradient-to-r from-indigo-200 via-purple-300 to-indigo-100 bg-clip-text text-transparent">
                Features that Make a Difference
              </h2>
              <p className="text-indigo-200/80 max-w-2xl mx-auto text-lg">
                Designed with modern productivity science in mind, Lock-in helps you achieve deep focus with intelligent AI coaching.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-[#1E1940]/80 to-[#28204F]/80 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6 shadow-[0_8px_30px_rgba(92,71,255,0.15)] group hover:shadow-[0_8px_30px_rgba(92,71,255,0.25)] transition-all duration-500 scroll-animation">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-600/20 group-hover:shadow-purple-600/30 group-hover:scale-110 transition-all duration-500">
                    {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:animate-text-gradient group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:via-purple-300 group-hover:to-indigo-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {feature.title}
                </h3>
                <p className="text-indigo-200/80 leading-relaxed">
                    {feature.description}
                </p>
              </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 relative overflow-hidden bg-[#0F0C1F]">
          <div className="tech-grid absolute inset-0"></div>
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 12 }).map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full particle"
                style={{
                  width: `${Math.random() * 8 + 4}px`,
                  height: `${Math.random() * 8 + 4}px`,
                  background: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 50 + 50}, ${Math.random() * 200 + 55}, ${Math.random() * 0.5 + 0.2})`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 15}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-text-gradient bg-gradient-to-r from-indigo-200 via-purple-300 to-indigo-100 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </h2>
              <p className="text-indigo-200/80 max-w-2xl mx-auto text-lg">
                Invest in your productivity with our straightforward pricing plan.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
              {/* Free Plan */}
              <div className="flex-1 bg-gradient-to-br from-[#1E1940]/80 to-[#28204F]/80 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-8 shadow-[0_8px_30px_rgba(92,71,255,0.15)] group hover:shadow-[0_8px_30px_rgba(92,71,255,0.25)] transition-all duration-500 scroll-animation relative overflow-hidden">
                <div className="absolute -right-24 -top-24 w-48 h-48 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
                
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-200 text-sm font-medium rounded-full mb-4">
                    Early Bird
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">Free During Beta</h3>
                  <p className="text-indigo-200/80">Early access to all premium features</p>
                </div>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">$0</span>
                  <span className="text-indigo-200/70 ml-1">/ month</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="text-green-400 mr-3 mt-0.5">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-indigo-200">Full access during beta period</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-400 mr-3 mt-0.5">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-indigo-200">AI coaching features</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-400 mr-3 mt-0.5">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-indigo-200">Basic analytics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-400 mr-3 mt-0.5">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-indigo-200">Early supporter benefits</span>
                  </li>
                </ul>
                
                <Link href="#waitlist">
                  <Button 
                    variant="outline" 
                    className="w-full bg-gradient-to-r from-indigo-900/50 to-purple-900/50 text-white hover:text-white hover:from-indigo-800/80 hover:to-purple-800/80 border-indigo-500/40"
                  >
                    Join Waitlist
                  </Button>
                </Link>
              </div>
              
              {/* Pro Plan */}
              <div className="flex-1 bg-gradient-to-br from-[#1E1940]/80 to-[#28204F]/80 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-8 shadow-[0_8px_30px_rgba(92,71,255,0.15)] group hover:shadow-[0_8px_30px_rgba(92,71,255,0.25)] transition-all duration-500 scroll-animation relative overflow-hidden">
                <div className="absolute -right-24 -top-24 w-48 h-48 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
                
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-full mb-4">
                    Pro
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">Launch Pricing</h3>
                  <p className="text-indigo-200/80">Full access to all features</p>
                </div>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold animate-text-gradient bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-200 bg-clip-text text-transparent">$5.99</span>
                  <span className="text-indigo-200/70 ml-1">/ month</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="text-green-400 mr-3 mt-0.5">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-indigo-200">Everything in Free</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-400 mr-3 mt-0.5">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-indigo-200">Advanced AI coaching</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-400 mr-3 mt-0.5">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-indigo-200">Comprehensive analytics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-400 mr-3 mt-0.5">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-indigo-200">Custom focus modes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-400 mr-3 mt-0.5">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-indigo-200">Premium support</span>
                  </li>
                </ul>
                
                <Link href="#waitlist">
                  <Button 
                    variant="lockin" 
                    className="w-full"
                  >
                    Join Waitlist
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-indigo-200/60 text-sm max-w-xl mx-auto">
                By joining our waitlist, you&apos;ll be among the first to experience Lock-in when we launch. 
                Early supporters will receive special benefits and pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="py-20 relative overflow-hidden bg-[#0F0C1F]">
          <div className="tech-grid absolute inset-0"></div>
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 9 }).map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full particle"
                style={{
                  width: `${Math.random() * 6 + 3}px`,
                  height: `${Math.random() * 6 + 3}px`,
                  background: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 50 + 50}, ${Math.random() * 200 + 55}, ${Math.random() * 0.4 + 0.1})`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 12 + 18}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-text-gradient bg-gradient-to-r from-indigo-200 via-purple-300 to-indigo-100 bg-clip-text text-transparent">
                Join the Waitlist
              </h2>
              <p className="text-indigo-200/80 max-w-2xl mx-auto text-lg">
                Be the first to experience Lock-in when we launch. Early access members receive special benefits.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto scroll-animation">
              <div className="bg-gradient-to-br from-[#1E1940]/80 to-[#28204F]/80 backdrop-blur-sm border border-indigo-500/20 rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(92,71,255,0.15)] p-6 md:p-8">
                {/* Google Form Embed */}
                <div className="relative overflow-hidden rounded-lg shadow-inner shadow-indigo-500/10 mb-6 bg-[#1A1730]/70">
              <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLScr9NoHVHQMdBoZDgrgRo-7qGqYOEfjGsmP3JJg6n6qmJhxjQ/viewform?embedded=true"
                    className="w-full h-[490px] border-0"
                    title="Lock-in Early Access Waitlist"
                    aria-label="Lock-in Early Access Google Form"
                  >
                    Loading…
                  </iframe>
                </div>
                
                {/* Direct link as backup */}
                <div className="text-center">
                  <p className="text-indigo-200/80 mb-4">
                    Having trouble with the embedded form? Use the direct link below:
                  </p>
                  <Link 
                    href="https://docs.google.com/forms/d/e/1FAIpQLScr9NoHVHQMdBoZDgrgRo-7qGqYOEfjGsmP3JJg6n6qmJhxjQ/viewform" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="outline" className="border-indigo-500/40 hover:border-indigo-400 text-indigo-200 hover:text-white">
                      Open Google Form
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-indigo-500/20 py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="logo-container relative w-10 h-10 rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image 
                    src="/Lock-in.svg"
                    alt="Lock-in"
                    fill
                    className="object-contain p-1.5 relative z-10 rounded-xl"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="text-xl font-bold text-white group-hover:animate-text-gradient group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:via-purple-300 group-hover:to-indigo-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Lock-in</span>
              </Link>
              <p className="text-indigo-200/60 mt-2 text-sm max-w-xs">
                Focus like a pro, coached by AI not timers.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h3 className="text-indigo-300 font-medium mb-3">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-indigo-200/80 hover:text-white transition-colors">Features</a></li>
                  <li><a href="#demo" className="text-indigo-200/80 hover:text-white transition-colors">Demo</a></li>
                  <li><a href="#download" className="text-indigo-200/80 hover:text-white transition-colors">Download</a></li>
                  <li><a href="#pricing" className="text-indigo-200/80 hover:text-white transition-colors">Pricing</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-indigo-300 font-medium mb-3">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-indigo-200/80 hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="text-indigo-200/80 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="text-indigo-200/80 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-indigo-300 font-medium mb-3">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-indigo-200/80 hover:text-white transition-colors">Privacy</a></li>
                  <li><a href="#" className="text-indigo-200/80 hover:text-white transition-colors">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-indigo-500/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-indigo-200/60 text-sm">
              © {new Date().getFullYear()} Lock-in. All rights reserved.
            </p>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-indigo-900/30 flex items-center justify-center text-indigo-200 hover:bg-indigo-800/50 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
              
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-indigo-900/30 flex items-center justify-center text-indigo-200 hover:bg-indigo-800/50 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
              
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-indigo-900/30 flex items-center justify-center text-indigo-200 hover:bg-indigo-800/50 hover:text-white transition-colors"
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