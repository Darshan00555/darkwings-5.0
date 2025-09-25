"use client"

import { Instagram, Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-dark-surface/30 border-t border-electric-blue/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-electric-blue mb-4">DARKWING's</h3>
            <p className="text-gray-400 text-pretty">Engineering the future of the web, one project at a time.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-gray-400 hover:text-electric-blue transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-gray-400 hover:text-electric-blue transition-colors duration-300"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="block text-gray-400 hover:text-electric-blue transition-colors duration-300"
              >
                Our Work
              </button>
              <Link
                href="/pricing"
                className="block text-gray-400 hover:text-electric-blue transition-colors duration-300"
              >
                Pricing
              </Link>
              <button
                onClick={() => scrollToSection("team")}
                className="block text-gray-400 hover:text-electric-blue transition-colors duration-300"
              >
                About Us
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <div className="space-y-2">
              <Link
                href="/support"
                className="block text-gray-400 hover:text-electric-blue transition-colors duration-300"
              >
                Support Center
              </Link>
              <Link href="/faq" className="block text-gray-400 hover:text-electric-blue transition-colors duration-300">
                FAQ
              </Link>
              <Link
                href="/feedback"
                className="block text-gray-400 hover:text-electric-blue transition-colors duration-300"
              >
                Feedback
              </Link>
              <a
                href="mailto:team.darkwings011@gmail.com"
                className="block text-gray-400 hover:text-electric-blue transition-colors duration-300 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Support
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://x.com/tm_darkwings011"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-electric-blue transition-colors duration-300"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/darkwing-s-wings-4a567a386/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-electric-blue transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/team_darkwings011/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-electric-blue transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">Support Email:</p>
              <a
                href="mailto:team.darkwings011@gmail.com"
                className="text-electric-blue hover:text-neon-magenta transition-colors text-sm"
              >
                team.darkwings011@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-electric-blue/20 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2025 DARKWING's. All rights reserved. Built with passion and cutting-edge technology.
          </p>
        </div>
      </div>
    </footer>
  )
}
