"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, Users, Zap } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with advanced inventory management and real-time analytics.",
    image: "/modern-ecommerce-dashboard.jpg",
    category: "Full-Stack",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    features: ["Payment Processing", "Inventory Management", "Real-time Analytics", "Admin Dashboard"],
    timeline: "8 weeks",
    teamSize: "4 developers",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description:
      "Comprehensive healthcare management system for clinics with patient records and appointment scheduling.",
    image: "/healthcare-management-system-dashboard.jpg",
    category: "Full-Stack",
    technologies: ["React", "Python", "Django", "PostgreSQL", "AWS"],
    features: ["Patient Records", "Appointment Scheduling", "Medical History", "Billing System"],
    timeline: "12 weeks",
    teamSize: "5 developers",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Real Estate Mobile App",
    description: "Cross-platform mobile app for real estate listings with advanced search and virtual tours.",
    image: "/real-estate-app-interface.jpg",
    category: "Mobile",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Google Maps"],
    features: ["Property Search", "Virtual Tours", "Mortgage Calculator", "Agent Chat"],
    timeline: "10 weeks",
    teamSize: "3 developers",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Financial Dashboard",
    description: "Advanced financial analytics dashboard with real-time data visualization and reporting.",
    image: "/financial-analytics-dashboard.jpg",
    category: "Frontend",
    technologies: ["Vue.js", "D3.js", "Chart.js", "TypeScript", "Tailwind CSS"],
    features: ["Real-time Charts", "Custom Reports", "Data Export", "Multi-currency Support"],
    timeline: "6 weeks",
    teamSize: "2 developers",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Learning Management System",
    description: "Complete LMS platform with course creation, student tracking, and interactive assessments.",
    image: "/learning-management-system-platform.jpg",
    category: "Full-Stack",
    technologies: ["Next.js", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
    features: ["Course Creation", "Video Streaming", "Interactive Quizzes", "Progress Tracking"],
    timeline: "14 weeks",
    teamSize: "6 developers",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Restaurant POS System",
    description: "Modern point-of-sale system for restaurants with order management and kitchen display.",
    image: "/restaurant-pos-system-interface.jpg",
    category: "Full-Stack",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "Stripe"],
    features: ["Order Management", "Kitchen Display", "Inventory Tracking", "Sales Analytics"],
    timeline: "8 weeks",
    teamSize: "4 developers",
    liveUrl: "#",
    githubUrl: "#",
  },
]

const categories = ["All", "Full-Stack", "Frontend", "Backend", "Mobile"]

export default function WorkPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 aurora-bg opacity-50" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex justify-start mb-6">
                <Link href="/">
                  <Button variant="ghost" className="premium-button">
                    ← Back to Home
                  </Button>
                </Link>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
                Our <span className="text-primary neon-glow">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Explore our recent projects and see how we've helped businesses transform their digital presence with
                innovative solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden tilt-card">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/90 text-primary-foreground">{item.category}</Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{item.description}</p>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {item.timeline}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          {item.teamSize}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {item.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {item.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 premium-button">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button size="sm" variant="outline" className="premium-button bg-transparent">
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss your project and see how we can help you achieve your goals with a custom solution
                tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="premium-button enhanced-glow">
                    <Zap className="w-5 h-5 mr-2" />
                    Start Your Project
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="premium-button bg-transparent">
                    View Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  )
}
