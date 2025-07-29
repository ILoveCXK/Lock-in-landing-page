import Link from "next/link"
import { Inter, Lato, Work_Sans } from 'next/font/google'
import Image from "next/image"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
})

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  style: ['normal'],
})

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500'],
  style: ['normal'],
})

export default function TermsOfService() {
  return (
    <div className={`min-h-screen flex flex-col bg-background ${lato.className}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-2 sm:py-4 px-4 transition-all duration-300 backdrop-blur-md border-b border-border/20">
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

      <main className="flex-grow pt-20 sm:pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-black ${inter.className}`}>Terms of Service</h1>
          
          <div className={`prose prose-lg max-w-none ${lato.className}`}>
            <p className="mb-6 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className={`text-2xl font-semibold mb-4 mt-8 ${inter.className}`}>Acceptance of Terms</h2>
            <p className="mb-6 text-gray-700">By downloading and using Lock-in, you agree to these terms of service.</p>
            
            <h2 className={`text-2xl font-semibold mb-4 mt-8 ${inter.className}`}>Service Description</h2>
            <p className="mb-6 text-gray-700">Lock-in is an AI-powered focus assistant that helps users improve their productivity through smart nudges, break suggestions, and session insights.</p>
            
            <h2 className={`text-2xl font-semibold mb-4 mt-8 ${inter.className}`}>User Responsibilities</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Use the app responsibly and in accordance with applicable laws</li>
              <li>Maintain the security of your account</li>
              <li>Not attempt to reverse engineer or modify the app</li>
            </ul>
            
            <h2 className={`text-2xl font-semibold mb-4 mt-8 ${inter.className}`}>Limitation of Liability</h2>
            <p className="mb-6 text-gray-700">Lock-in is provided "as is" without warranties. We are not liable for any damages arising from the use of our service.</p>
            
            <h2 className={`text-2xl font-semibold mb-4 mt-8 ${inter.className}`}>Changes to Terms</h2>
            <p className="mb-6 text-gray-700">We may update these terms from time to time. Continued use of the app constitutes acceptance of new terms.</p>
            
            <h2 className={`text-2xl font-semibold mb-4 mt-8 ${inter.className}`}>Contact</h2>
            <p className="text-gray-700">For questions about these terms, contact us at <a href="mailto:support@lock-in.ai" className="text-blue-600 hover:underline">support@lock-in.ai</a></p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 sm:py-8 relative overflow-hidden">
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
          </div>
        </div>
      </footer>
    </div>
  )
} 