// Force deployment update - Cloudflare Pages sync
'use client'

import { Button } from "@/components/ui/button"
import { MaintenancePage } from "@/components/maintenance"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { Alexandria, Lato, Work_Sans, Playfair_Display, Inter } from 'next/font/google'
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

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'], // Multiple weights for flexibility
  style: ['normal'],
})

// Define features array
const features = [
  {
    image: "/smart-nudge-demo.png",
    title: "Smart Nudges",
    description: "Lock-in tracks real work, spots tab hops or idle stalls,<br />then nudges you before 3 seconds become 30 minutes."
  },
  {
    image: "/break-coaching-demo.png",
    title: "Adaptive Break Suggestion",
    description: "When focus dips, Lock-in suggests quick science-backed resets like water break or sixty-second stretch to revive attention."
  },
  {
    image: "/report-demo.png",
    title: "Session Insights",
    description: "End each session with a clear report: focus score, distractions, recovery time, plus simple tips for next round."
  }
];

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Check for maintenance mode
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add .animate-in to all children that need it
          entry.target.querySelectorAll('.feature-title, .feature-description, .slide-in-right, .scroll-animation').forEach(el => {
            el.classList.add('animate-in');
          });
          // Stop observing the parent
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2, // Trigger when 20% of the element is visible
      rootMargin: '0px 0px -100px 0px' // Start detecting 100px above the bottom of the viewport
    });

    document.querySelectorAll('.feature-section').forEach(section => {
      observer.observe(section);
    });

    // Cleanup
    return () => observer.disconnect();
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

              .mock-window {
          -webkit-mask-image: linear-gradient(to bottom,
            black 85%, transparent 100%);
          mask-image: linear-gradient(to bottom,
            black 85%, transparent 100%);
        }

        @keyframes cloud-drift-1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(30px, -20px) scale(1.2);
            opacity: 0.6;
          }
          50% {
            transform: translate(-20px, 30px) scale(0.8);
            opacity: 0.4;
          }
          75% {
            transform: translate(40px, 10px) scale(1.1);
            opacity: 0.5;
          }
        }

        @keyframes cloud-drift-2 {
          0%, 100% {
            transform: translate(0, 0) scale(0.9);
            opacity: 0.4;
          }
          33% {
            transform: translate(-40px, 25px) scale(1.3);
            opacity: 0.7;
          }
          66% {
            transform: translate(20px, -30px) scale(0.7);
            opacity: 0.3;
          }
        }

        @keyframes cloud-drift-3 {
          0%, 100% {
            transform: translate(0, 0) scale(1.1);
            opacity: 0.5;
          }
          20% {
            transform: translate(25px, 40px) scale(0.6);
            opacity: 0.3;
          }
          60% {
            transform: translate(-30px, -15px) scale(1.4);
            opacity: 0.8;
          }
          80% {
            transform: translate(10px, 20px) scale(0.9);
            opacity: 0.4;
          }
        }

        @keyframes cloud-drift-4 {
          0%, 100% {
            transform: translate(0, 0) scale(0.8);
            opacity: 0.6;
          }
          40% {
            transform: translate(-25px, -35px) scale(1.2);
            opacity: 0.4;
          }
          80% {
            transform: translate(35px, 15px) scale(1.0);
            opacity: 0.7;
          }
        }

        @keyframes cloud-drift-5 {
          0%, 100% {
            transform: translate(0, 0) scale(1.0);
            opacity: 0.4;
          }
          30% {
            transform: translate(45px, -25px) scale(0.7);
            opacity: 0.6;
          }
          70% {
            transform: translate(-15px, 35px) scale(1.3);
            opacity: 0.3;
          }
        }

        .dynamic-cloud-1 {
          animation: cloud-drift-1 12s ease-in-out infinite;
        }

        .dynamic-cloud-2 {
          animation: cloud-drift-2 15s ease-in-out infinite;
        }

        .dynamic-cloud-3 {
          animation: cloud-drift-3 18s ease-in-out infinite;
        }

        .dynamic-cloud-4 {
          animation: cloud-drift-4 14s ease-in-out infinite;
        }

        .dynamic-cloud-5 {
          animation: cloud-drift-5 16s ease-in-out infinite;
      }
    `;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // If maintenance mode is enabled, show maintenance page
  if (isMaintenanceMode) {
    return <MaintenancePage />;
  }

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

        .feature-title {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .feature-title.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .feature-description {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .feature-description.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .slide-in-right {
          opacity: 0;
          transform: translateX(200px);
          transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .slide-in-right.animate-in {
          opacity: 1;
          transform: translateX(0);
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
      <header className="fixed top-0 left-0 right-0 z-50 py-2 sm:py-4 px-4 transition-all duration-300 backdrop-blur-md border-b border-border/20 fade-in delay-1">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-0 group">
            <div className="logo-container relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image 
                src="/lock-in-logo.png"
                alt="Lock-in"
                fill
                sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 48px"
                className="object-contain p-1 sm:p-1.5 relative z-10 rounded-xl"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className={`text-lg sm:text-xl font-bold text-black group-hover:animate-text-gradient group-hover:bg-gradient-to-r group-hover:from-violet-300 group-hover:via-slate-500 group-hover:to-violet-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${inter.className}`}>Lock-in</span>
          </Link>
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"></div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-32">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              background: `#ddd6f5`
            }}></div>
          </div>

          <div className="w-full max-w-7xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
            {/* Main headline */}
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 sm:mb-8 mx-auto fade-in delay-1 text-black ${playfairDisplay.className}`} style={{ lineHeight: '1.2' }}>
              Your personal focus assistant,<br />
              focus whenever, wherever.
            </h1>

            {/* Enhanced caption */}
            <div className="max-w-2xl mx-auto mb-8 sm:mb-12 fade-in delay-2">
              <p className={`text-lg sm:text-xl leading-relaxed ${lato.className}`} style={{ color: '#6B7280' }}>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-2 sm:mb-3 fade-in delay-3">
                    <a 
                      href="https://downloads.lock-in.ai/file/lock-in-download/releases/Lock-in-1.0.0-arm64.dmg"
                className="inline-block group"
              >
              <Button 
                variant="lockin" 
                size="lg" 
                className="group relative overflow-hidden bg-black hover:bg-gray-900 transition-all duration-300 py-4 sm:py-5 px-6 sm:px-8 text-sm sm:text-base"
              >
                  <span className="relative z-10 flex items-center gap-2 sm:gap-3 px-1 sm:px-2 text-white">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <svg width="10" height="10" className="sm:w-3 sm:h-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09z"/>
                        <path d="M15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z"/>
                      </svg>
                    </div>
                    <span className="font-semibold">Download for macOS</span>
                  </span>
              </Button>
                    </a>
              </div>

            {/* Enhanced Demo */}
            <div className="relative w-full max-w-4xl mx-auto">
              <Image
                src="/starter-demo.png"
                alt="Lock-in App Demo"
                width={800}
                height={480}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 70vw"
                className="w-full h-auto rounded-lg sm:rounded-xl lg:rounded-2xl"
                priority
              />
            </div>
          </div>
        </section>

        {/* Full-width divider between Hero and Features */}
        <div className="w-full">
          <hr className="border-t border-gray-200" />
        </div>

        {/* Features Section */}
        <section id="features" className="py-12 sm:py-16 lg:py-20 relative bg-background overflow-hidden">
          <div className="relative z-10">
            <div className="space-y-12 sm:space-y-16 lg:space-y-20">
              {features.map((feature, index) => (
                <div key={index} className="feature-section">
                  {/* Horizontal divider between features */}
                  {index > 0 && (
                    <div className="w-full px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16">
                      <div className="max-w-7xl mx-auto">
                        <hr className="border-t border-gray-200" />
                      </div>
                    </div>
                  )}
                  
                  <div className="scroll-animation">
                  {index === 0 ? (
                    // First feature: Original layout (title/description above, image below)
                    <>
                      {/* Text content with container */}
                      <div className="w-full px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 lg:mb-12">
                        <div className="max-w-7xl mx-auto">
                          {/* Left-aligned Headline */}
                          <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-black feature-title ${inter.className}`}>
                            {feature.title}
                          </h3>
                          
                          {/* Left-aligned Description */}
                          <p 
                            className={`text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl feature-description text-gray-600 ${lato.className}`}
                            style={{ color: '#6B7280' }}
                            dangerouslySetInnerHTML={{ __html: feature.description }}
                          ></p>
                        </div>
                      </div>
                      
                      {/* Feature Demo Image - Full width on mobile, contained on larger screens */}
                                            <div className="w-full overflow-hidden">
                        <div className="lg:pl-8 xl:pl-16 2xl:pl-24">
                          {feature.image ? (
                            <Image
                              src={feature.image}
                              alt={feature.title}
                              width={1600}
                              height={900}
                              sizes="(max-width: 1024px) 90vw, 80vw"
                              className="object-contain w-[90%] h-auto mock-window rounded-l-none sm:rounded-l-xl slide-in-right"
                            />
                    ) : (
                            <div className="aspect-video bg-card/80 backdrop-blur-sm border border-border overflow-hidden mock-window rounded-l-none sm:rounded-l-xl">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-[#4a447b] flex items-center justify-center mb-4 mx-auto">
                                  {/* Feature Icon */}
                                </div>
                                <p className={`text-muted-foreground text-sm ${workSans.className}`}>Feature Preview</p>
                              </div>
                            </div>
                          </div>
                        )}
                        </div>
                      </div>
                    </>
                  ) : index === 1 ? (
                    // Second feature: Text on left, image on right
                    <div className="w-full px-4 sm:px-6 lg:px-8">
                      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
                        {/* Text content on left */}
                        <div className="w-full lg:w-1/2">
                          <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-black feature-title ${inter.className}`}>
                            {feature.title}
                          </h3>
                          <p 
                            className={`text-base sm:text-lg lg:text-xl leading-relaxed feature-description text-gray-600 ${lato.className}`}
                            style={{ color: '#6B7280' }}
                            dangerouslySetInnerHTML={{ __html: feature.description }}
                          ></p>
                        </div>
                        
                        {/* Image on right */}
                        <div className="w-full lg:w-1/2 scroll-animation">
                          {feature.image ? (
                            <Image
                              src={feature.image}
                              alt={feature.title}
                              width={1920}
                              height={1080}
                              sizes="(max-width: 1024px) 95vw, 50vw"
                              className="object-contain w-full h-auto rounded-lg sm:rounded-xl"
                            />
                          ) : (
                            <div className="aspect-video bg-card/80 backdrop-blur-sm border border-border overflow-hidden rounded-lg sm:rounded-xl">
                              <div className="w-full h-full flex items-center justify-center">
                                <div className="text-center">
                                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-[#4a447b] flex items-center justify-center mb-4 mx-auto">
                                    {/* Feature Icon */}
                                  </div>
                                  <p className={`text-muted-foreground text-sm ${workSans.className}`}>Feature Preview</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Third feature: Image on left, text on right
                    <div className="w-full px-4 sm:px-6 lg:px-8">
                      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
                        {/* Image on left */}
                        <div className="w-full lg:w-3/5 lg:-ml-4 xl:-ml-8 2xl:-ml-12 scroll-animation order-2 lg:order-1">
                          {feature.image ? (
                            <Image
                              src={feature.image}
                              alt={feature.title}
                              width={1920}
                              height={1080}
                              sizes="(max-width: 1024px) 95vw, 60vw"
                              className="object-contain w-full h-auto rounded-lg sm:rounded-xl"
                            />
                          ) : (
                            <div className="aspect-video bg-card/80 backdrop-blur-sm border border-border overflow-hidden rounded-lg sm:rounded-xl">
                              <div className="w-full h-full flex items-center justify-center">
                                <div className="text-center">
                                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-[#4a447b] flex items-center justify-center mb-4 mx-auto">
                              {/* Feature Icon */}
                </div>
                          <p className={`text-muted-foreground text-sm ${workSans.className}`}>Feature Preview</p>
                        </div>
                      </div>
                    </div>
                    )}
                  </div>

                                                {/* Text content on right */}
                        <div className="w-full lg:w-2/5 order-1 lg:order-2">
                          <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-black feature-title ${inter.className}`}>
                            {feature.title}
                          </h3>
                          <p 
                            className={`text-base sm:text-lg lg:text-xl leading-relaxed feature-description text-gray-600 ${lato.className}`}
                            style={{ color: '#6B7280' }}
                            dangerouslySetInnerHTML={{ __html: feature.description }}
                          ></p>
                        </div>
                      </div>
                    </div>
                  )}
                  </div>
              </div>
              ))}
            </div>
          </div>
        </section>

        
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-border py-6 sm:py-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-end gap-8 md:gap-16">
            <div>
              <h3 className={`text-foreground font-medium mb-2 ${inter.className}`}>Contact</h3>
              <ul className="space-y-1">
                <li><a href="mailto:support@lock-in.ai" className={`text-muted-foreground hover:text-foreground transition-colors ${workSans.className}`}>support@lock-in.ai</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className={`text-foreground font-medium mb-2 ${inter.className}`}>Legal</h3>
              <ul className="space-y-1">
                <li><a href="/privacy-policy" className={`text-muted-foreground hover:text-foreground transition-colors ${workSans.className}`}>Privacy Policy</a></li>
                <li><a href="/terms-of-service" className={`text-muted-foreground hover:text-foreground transition-colors ${workSans.className}`}>Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
            <p className={`text-muted-foreground text-sm ${workSans.className}`}>
              © {new Date().getFullYear()} Lock-in. All rights reserved.
            </p>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a 
                href="https://www.youtube.com/@lock-in-focus-app" 
                target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="sm:w-18 sm:h-18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
                
              <a 
                href="https://x.com/lockin_focus" 
                target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                aria-label="X"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="sm:w-18 sm:h-18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
                
              <a 
                href="https://www.tiktok.com/@lockin_focus_app" 
                target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                aria-label="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="sm:w-18 sm:h-18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
                
              <a 
                href="https://www.instagram.com/lockin_focus_app" 
                target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="sm:w-18 sm:h-18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395c-.98.98-1.263 2.092-1.322 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.281.342 2.393 1.322 3.373.98.98 2.092 1.263 3.373 1.322C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.342 3.373-1.322.98-.98 1.263-2.092 1.322-3.373.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.281-.342-2.393-1.322-3.373-.98-.98-2.092-1.263-3.373-1.322C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}