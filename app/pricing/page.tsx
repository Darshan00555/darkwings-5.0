"use client"

import { motion } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"
import AnimatedButton from "@/components/animated-button"

export default function PricingPage() {
  const handleContactClick = () => {
    window.location.href = "mailto:team.darkwings011@gmail.com?subject=Custom Quote Request"
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-dark-bg">
        <Navbar />

        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-electric-blue to-neon-magenta bg-clip-text text-transparent">
                Custom Solutions for Unique Visions
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Every project is unique, and so is our approach. We don't believe in one-size-fits-all packages.
              </p>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-dark-surface/50 backdrop-blur-sm border border-electric-blue/20 rounded-2xl p-8 md:p-12 text-center">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-electric-blue to-neon-magenta rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-10 h-10 text-white" />
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-4">Tailored Pricing for Your Vision</h2>

                  <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                    We understand that every business has different needs, goals, and budgets. That's why we create
                    custom proposals that align perfectly with your specific requirements and deliver maximum value.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-dark-bg/50 border border-electric-blue/10 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-semibold text-electric-blue mb-3">Discovery Call</h3>
                    <p className="text-gray-400 text-sm">
                      We start with understanding your vision, goals, and technical requirements
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-dark-bg/50 border border-electric-blue/10 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-semibold text-electric-blue mb-3">Custom Proposal</h3>
                    <p className="text-gray-400 text-sm">
                      Receive a detailed proposal with timeline, features, and transparent pricing
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-dark-bg/50 border border-electric-blue/10 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-semibold text-electric-blue mb-3">Project Kickoff</h3>
                    <p className="text-gray-400 text-sm">
                      Once approved, we begin crafting your digital universe with regular updates
                    </p>
                  </motion.div>
                </div>

                <AnimatedButton onClick={handleContactClick} className="text-lg px-8 py-4">
                  Request a Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </AnimatedButton>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 text-center"
            >
              <p className="text-gray-500 max-w-2xl mx-auto">
                Have questions about our process or want to discuss your project?
                <br />
                <a
                  href="mailto:team.darkwings011@gmail.com"
                  className="text-electric-blue hover:text-neon-magenta transition-colors"
                >
                  Get in touch with our team
                </a>
              </p>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  )
}
