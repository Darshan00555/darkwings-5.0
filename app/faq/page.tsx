"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

const faqs = [
  {
    question: "What services does DARKWING's offer?",
    answer:
      "We specialize in frontend development, backend development, and full-stack web applications. Our team of 6 developers can handle everything from simple landing pages to complex web applications with custom APIs and databases.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity and requirements. A simple website might take 1-2 weeks, while a complex web application could take 2-3 months. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes! We provide ongoing maintenance, updates, and technical support for all our projects. We offer different support packages based on your needs, from basic maintenance to comprehensive ongoing development.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with modern web technologies including React, Next.js, Node.js, Python, TypeScript, Tailwind CSS, and various databases. We stay up-to-date with the latest technologies to deliver cutting-edge solutions.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We maintain regular communication through email, video calls, and project management tools. You'll receive regular updates on progress, and we're always available to answer questions or discuss changes.",
  },
  {
    question: "Can you work with existing codebases?",
    answer:
      "We can work with existing projects, whether you need bug fixes, new features, performance improvements, or complete refactoring. We're experienced in taking over and improving existing codebases.",
  },
  {
    question: "Do you provide hosting and deployment services?",
    answer:
      "Yes, we can help with hosting setup, deployment, and ongoing server management. We work with various hosting providers and can recommend the best solution for your specific needs and budget.",
  },
  {
    question: "What's your pricing structure?",
    answer:
      "We don't offer fixed packages because every project is unique. After understanding your requirements, we provide a custom quote that reflects the scope, complexity, and timeline of your specific project.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
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
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-electric-blue to-neon-magenta bg-clip-text text-transparent">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Find answers to common questions about our services, process, and approach.
              </p>
            </motion.div>

            {/* FAQ List */}
            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-4"
                >
                  <div className="bg-dark-surface/50 backdrop-blur-sm border border-electric-blue/20 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-electric-blue/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                      <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown className="w-5 h-5 text-electric-blue flex-shrink-0" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-0">
                            <div className="border-t border-electric-blue/10 pt-4">
                              <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-16"
            >
              <div className="bg-dark-surface/50 backdrop-blur-sm border border-electric-blue/20 rounded-xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
                <p className="text-gray-400 mb-6">
                  Can't find the answer you're looking for? Our team is here to help.
                </p>
                <a
                  href="mailto:team.darkwings011@gmail.com"
                  className="inline-flex items-center gap-2 text-electric-blue hover:text-neon-magenta transition-colors font-medium"
                >
                  Contact our support team
                </a>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  )
}
