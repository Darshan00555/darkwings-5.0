"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { User, LogOut } from "lucide-react"
import { useAuth } from "@/components/auth-provider"
import AnimatedButton from "@/components/animated-button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { user, logout } = useAuth()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleLogout = () => {
    logout()
    setShowUserMenu(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "glass-effect" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary neon-glow animate-float">
            DARKWING's
          </Link>

          <div className="hidden md:flex items-center space-x-6 flex-nowrap">
            {pathname === "/" ? (
              // Home page navigation with scroll-to-section
              <>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-primary transition-all duration-300 premium-button px-3 py-2 rounded-lg whitespace-nowrap"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-primary transition-all duration-300 premium-button px-3 py-2 rounded-lg whitespace-nowrap"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("work")}
                  className="text-gray-300 hover:text-primary transition-all duration-300 premium-button px-3 py-2 rounded-lg whitespace-nowrap"
                >
                  Our Work
                </button>
                <Link
                  href="/pricing"
                  className="text-gray-300 hover:text-primary transition-all duration-300 premium-button px-3 py-2 rounded-lg whitespace-nowrap"
                >
                  Pricing
                </Link>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-gray-300 hover:text-primary transition-all duration-300 premium-button px-3 py-2 rounded-lg whitespace-nowrap"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-primary transition-all duration-300 premium-button px-3 py-2 rounded-lg whitespace-nowrap"
                >
                  Contact
                </button>
              </>
            ) : (
              // Other pages navigation with links - removed blog links
              <>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-primary transition-all duration-300 premium-button px-3 py-2 rounded-lg whitespace-nowrap"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-primary transition-all duration-300 premium-button px-3 py-2 rounded-lg whitespace-nowrap"
                >
                  Services
                </Link>
                <Link
                  href="/work"
                  className="text-gray-300 hover:text-primary transition-all duration-300 premium-button px-3 py-2 rounded-lg whitespace-nowrap"
                >
                  Our Work
                </Link>
                <Link
                  href="/portfolio"
                  className="text-gray-300 hover:text-primary transition-all duration-300 premium-button px-3 py-2 rounded-lg whitespace-nowrap"
                >
                  Portfolio
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-300 hover:text-primary transition-all duration-300 premium-button px-3 py-2 rounded-lg whitespace-nowrap"
                >
                  Pricing
                </Link>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-primary transition-all duration-300 premium-button px-3 py-2 rounded-lg whitespace-nowrap"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-primary transition-all duration-300 premium-button px-3 py-2 rounded-lg whitespace-nowrap"
                >
                  Contact
                </Link>
              </>
            )}

            {/* Authentication State */}
            {user ? (
              // Post-login state
              <div className="flex items-center space-x-4">
                <Link
                  href="/dashboard"
                  className="text-gray-300 hover:text-primary transition-all duration-300 premium-button px-3 py-2 rounded-lg"
                >
                  Dashboard
                </Link>
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="w-10 h-10 rounded-full border-2 border-primary/30 hover:border-primary transition-all duration-300 flex items-center justify-center overflow-hidden enhanced-glow"
                    style={{
                      background: user.avatar || "linear-gradient(135deg, #30C6A8, #3A50F0)",
                    }}
                  >
                    {/* --- THIS IS THE FIX --- */}
                    {user.avatar && (user.avatar.startsWith("http") || user.avatar.startsWith("/")) ? (
                      <img
                        src={user.avatar}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User size={20} className="text-white" />
                    )}
                  </button>

                  {showUserMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute right-0 mt-2 w-48 glass-effect rounded-lg shadow-xl py-2"
                    >
                      <div className="px-4 py-2 border-b border-primary/20">
                        <p className="text-sm text-gray-300">{user.username}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 text-left text-gray-300 hover:bg-primary/10 hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <LogOut size={16} />
                        Logout
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            ) : (
              // Pre-login state
              <div className="flex items-center space-x-4">
                <Link href="/login">
                  <AnimatedButton variant="ghost">Sign In</AnimatedButton>
                </Link>
                <Link href="/signup">
                  <AnimatedButton variant="primary">Sign Up</AnimatedButton>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}