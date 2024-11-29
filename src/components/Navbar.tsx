'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { RiDashboardLine, RiLoginBoxLine, RiMenu3Line, RiLogoutBoxLine } from 'react-icons/ri'
import { createClient } from '@/utils/supabase/client'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isSignedIn, setIsSignedIn] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 20)
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 400) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
      
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser()
      setIsSignedIn(!!user && !error)
    }
    
    checkUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsSignedIn(!!session)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (!error) {
      router.push('/')
    }
  }

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <div className={`fixed w-full z-50 px-6 pt-6 transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <nav className={`mx-auto max-w-7xl rounded-2xl border border-[var(--background-500)]/20 backdrop-blur-md transition-all duration-500 ${
        isScrolled 
          ? 'bg-[var(--primary-200)]/90 shadow-lg shadow-[var(--primary-500)]/20' 
          : 'bg-[var(--primary-200)]/60'
      }`}>
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-2xl font-bold text-[var(--background-500)] hover:text-[var(--background-400)] transition-all duration-300 hover:scale-105"
            >
                hit.<span className='text-[var(--neutral-600)]'>rails</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-all duration-300 hover:scale-105 group ${
                    pathname === link.href
                      ? 'text-[var(--background-500)]'
                      : 'text-[var(--background-700)] hover:text-[var(--background-500)]'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--background-500)] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Auth Button */}
            <div className="flex items-center gap-4">
              {isSignedIn ? (
                <div className="flex items-center gap-4">
                  <Link
                    href="/dashboard"
                    className="px-6 py-3 rounded-xl bg-[var(--background-500)] text-[var(--primary-200)] font-medium hover:bg-[var(--background-400)] transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-[var(--background-500)]/50"
                  >
                    Dashboard
                    <RiDashboardLine className="h-5 w-5" />
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="px-6 py-3 rounded-xl border-2 border-[var(--background-500)] text-[var(--background-500)] font-medium hover:bg-[var(--background-500)] hover:text-[var(--primary-200)] transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-[var(--background-500)]/50"
                  >
                    Sign Out
                    <RiLogoutBoxLine className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="px-6 py-3 rounded-xl border-2 border-[var(--background-500)] text-[var(--background-500)] font-medium hover:bg-[var(--background-500)] hover:text-[var(--primary-200)] transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-[var(--background-500)]/50"
                >
                  Sign In
                  <RiLoginBoxLine className="h-5 w-5" />
                </Link>
              )}

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 rounded-xl border border-[var(--background-500)]/20 hover:bg-[var(--background-500)]/10 transition-colors">
                <RiMenu3Line className="h-6 w-6 text-[var(--background-500)]" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
