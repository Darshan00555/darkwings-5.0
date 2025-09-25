"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, MessageCircle, Clock, Send } from "lucide-react"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"
import AnimatedButton from "@/components/animated-button"

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "medium",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to an API
    console.log("Support ticket submitted:", formData)
    alert("Support ticket submitted successfully! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "", priority: "medium" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
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
                Support Center
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Need help? We're here to assist you with any questions or issues you may have.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-dark-surface/50 backdrop-blur-sm border border-electric-blue/20 rounded-xl p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-electric-blue/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-electric-blue" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Email Support</h3>
                        <p className="text-gray-400">Get help via email</p>
                      </div>
                    </div>
                    <a
                      href="mailto:team.darkwings011@gmail.com"
                      className="text-electric-blue hover:text-neon-magenta transition-colors"
                    >
                      team.darkwings011@gmail.com
                    </a>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-dark-surface/50 backdrop-blur-sm border border-electric-blue/20 rounded-xl p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-neon-magenta/20 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-neon-magenta" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Response Time</h3>
                        <p className="text-gray-400">We typically respond within</p>
                      </div>
                    </div>
                    <p className="text-white">24-48 hours</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-dark-surface/50 backdrop-blur-sm border border-electric-blue/20 rounded-xl p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-electric-blue/20 rounded-lg flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-electric-blue" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Priority Support</h3>
                        <p className="text-gray-400">For urgent issues</p>
                      </div>
                    </div>
                    <p className="text-white">Mark your ticket as "High Priority"</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Support Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-white mb-8">Submit a Support Ticket</h2>

                <form
                  onSubmit={handleSubmit}
                  className="bg-dark-surface/50 backdrop-blur-sm border border-electric-blue/20 rounded-xl p-8"
                >
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-bg border border-electric-blue/30 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-bg border border-electric-blue/30 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Priority</label>
                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-bg border border-electric-blue/30 rounded-lg text-white focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors"
                      >
                        <option value="low">Low Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="high">High Priority</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-bg border border-electric-blue/30 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors"
                        placeholder="Brief description of your issue"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 bg-dark-bg border border-electric-blue/30 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors resize-none"
                        placeholder="Please describe your issue in detail..."
                        required
                      />
                    </div>

                    <AnimatedButton type="submit" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Submit Support Ticket
                    </AnimatedButton>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  )
}
