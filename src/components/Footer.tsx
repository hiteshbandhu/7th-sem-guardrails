'use client'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[var(--background-800)] text-[var(--primary-300)] py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary-300)]/10 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[var(--primary-400)]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[var(--primary-300)]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[var(--primary-200)]">hit.rails</h3>
            <p className="text-sm leading-relaxed">
              Guardrails for LLMs: Protecting AI Systems, One Query at a Time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[var(--primary-200)]">Quick Links</h4>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'How It Works', 'Blog', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-[var(--primary-200)] transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[var(--primary-200)]">Connect with Me</h4>
            <div className="flex flex-wrap gap-4">
              <Link href="https://x.com/_hiteshbandhu" className="hover:text-[var(--primary-200)] transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link href="https://linkedin.com/in/hitesh-bandhu" className="hover:text-[var(--primary-200)] transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link href="https://youtube.com/@hiteshbandhucodes" className="hover:text-[var(--primary-200)] transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
              <Link href="https://open.spotify.com/artist/2Qi4pAXkBuctxtpX5TUYmP" className="hover:text-[var(--primary-200)] transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[var(--primary-200)]">Legal</h4>
            <div className="space-y-2 text-sm">
              <p>© 2024 Guardrails by Hitesh.</p>
              <p>All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-[var(--primary-200)] transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-[var(--primary-200)] transition-colors duration-300">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
