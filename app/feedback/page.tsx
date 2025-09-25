"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Star, Send, MessageSquare } from "lucide-react"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"
import AnimatedButton from "@/components/animated-button"

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    rating: 5,
    feedback: "",
    recommend: "yes",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to an API
    console.log("Feedback submitted:", formData)
    alert("Thank you for your feedback! We appreciate your input.")
    setFormData({ name: "", email: "", project: "", rating: 5, feedback: "", recommend: "yes" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === "number" ? Number.parseInt(e.target.value) : e.target.value
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: value,
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
              <div className="w-20 h-20 bg-gradient-to-r from-electric-blue to-neon-magenta rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-electric-blue to-neon-magenta bg-clip-text text-transparent">
                Share Your Feedback
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Your feedback helps us improve our services and deliver better experiences for all our clients.
              </p>
            </motion.div>

            {/* Feedback Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-dark-surface/50 backdrop-blur-sm border border-electric-blue/20 rounded-2xl p-8 md:p-12"
              >
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
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
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project/Service</label>
                    <input
                      type="text"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-electric-blue/30 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors"
                      placeholder="Which project or service are you providing feedback on?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">Overall Rating</label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                          className="transition-colors"
                        >
                          <Star
                            className={`w-8 h-8 ${
                              star <= formData.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
                            }`}
                          />
                        </button>
                      ))}
                      <span className="ml-4 text-gray-400">{formData.rating} out of 5 stars</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Would you recommend us?</label>
                    <select
                      name="recommend"
                      value={formData.recommend}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-electric-blue/30 rounded-lg text-white focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors"
                    >
                      <option value="yes">Yes, definitely</option>
                      <option value="maybe">Maybe</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Your Feedback</label>
                    <textarea
                      name="feedback"
                      value={formData.feedback}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-dark-bg border border-electric-blue/30 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors resize-none"
                      placeholder="Please share your experience working with us. What did we do well? What could we improve?"
                      required
                    />
                  </div>

                  <AnimatedButton type="submit" className="w-full text-lg py-4">
                    <Send className="w-5 h-5 mr-2" />
                    Submit Feedback
                  </AnimatedButton>
                </div>
              </form>
            </motion.div>

            {/* Thank You Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <p className="text-gray-500 max-w-2xl mx-auto">
                Your feedback is invaluable to us. We read every submission and use your insights to continuously
                improve our services and client experience.
              </p>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  )
}
