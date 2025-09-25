"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Calendar, Users } from "lucide-react"
import PageTransition from "@/components/page-transition"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full-Stack",
    description:
      "A modern, scalable e-commerce platform with advanced features including real-time inventory, AI-powered recommendations, and seamless payment integration.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sd6dJki0R4dZ0qLxisbRjTaYZZ7B8p.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Redis"],
    features: ["Real-time inventory", "AI recommendations", "Multi-vendor support", "Advanced analytics"],
    duration: "6 months",
    team: "5 developers",
    slug: "ecommerce-platform",
  },
  {
    id: 2,
    title: "SaaS Analytics Dashboard",
    category: "Frontend",
    description:
      "A comprehensive analytics dashboard with real-time data visualization, custom reporting, and advanced filtering capabilities.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sd6dJki0R4dZ0qLxisbRjTaYZZ7B8p.png",
    technologies: ["React", "D3.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: ["Real-time charts", "Custom reports", "Data export", "Interactive visualizations"],
    duration: "4 months",
    team: "3 developers",
    slug: "saas-dashboard",
  },
  {
    id: 3,
    title: "API Gateway System",
    category: "Backend",
    description:
      "A high-performance API gateway with rate limiting, authentication, load balancing, and comprehensive monitoring.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sd6dJki0R4dZ0qLxisbRjTaYZZ7B8p.png",
    technologies: ["Node.js", "Express", "Redis", "PostgreSQL", "Docker"],
    features: ["Rate limiting", "Load balancing", "API versioning", "Real-time monitoring"],
    duration: "5 months",
    team: "4 developers",
    slug: "api-gateway",
  },
  {
    id: 4,
    title: "Mobile App Backend",
    category: "Backend",
    description:
      "Scalable backend infrastructure for mobile applications with real-time messaging, push notifications, and offline sync.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sd6dJki0R4dZ0qLxisbRjTaYZZ7B8p.png",
    technologies: ["Node.js", "Socket.io", "MongoDB", "AWS", "Firebase"],
    features: ["Real-time messaging", "Push notifications", "Offline sync", "Auto-scaling"],
    duration: "7 months",
    team: "6 developers",
    slug: "mobile-backend",
  },
]

const categories = ["All", "Frontend", "Backend", "Full-Stack"]

export default function CreationsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <PageTransition>
      <div className="min-h-screen bg-dark-bg relative overflow-hidden">
        {/* Enhanced background with animated elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-dark-bg to-neon-magenta/5" />

        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-electric-blue/20 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              }}
              animate={{
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Aurora effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/30 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-12">
          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <motion.div whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-electric-blue hover:text-neon-magenta transition-all duration-300 group"
              >
                <motion.div whileHover={{ rotate: -180 }} transition={{ duration: 0.3 }}>
                  <ArrowLeft size={20} />
                </motion.div>
                <span className="group-hover:underline">Back to Home</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-electric-blue via-neon-magenta to-electric-blue bg-clip-text text-transparent mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Our Creations
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Explore our portfolio of innovative projects that showcase our expertise across different technologies.
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center mb-16"
          >
            <div className="flex flex-wrap gap-4 p-2 bg-dark-surface/30 backdrop-blur-xl rounded-2xl border border-electric-blue/20">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-electric-blue to-neon-magenta text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-electric-blue/20"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group relative"
                >
                  <Link href={`/creations/${project.slug}`}>
                    <div className="relative bg-dark-surface/40 backdrop-blur-xl border border-electric-blue/20 rounded-2xl overflow-hidden hover:border-electric-blue/50 transition-all duration-500">
                      {/* Animated border glow */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-electric-blue/30 via-neon-magenta/30 to-electric-blue/30 blur-sm -z-10"
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          scale: hoveredProject === project.id ? 1.02 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Project Image */}
                      <div className="relative h-64 overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />

                        {/* Category Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-electric-blue/20 backdrop-blur-sm border border-electric-blue/30 rounded-full text-sm text-electric-blue font-medium">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-neon-magenta/20 text-neon-magenta text-xs rounded-md border border-neon-magenta/30"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs rounded-md">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* Project Stats */}
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{project.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users size={14} />
                            <span>{project.team}</span>
                          </div>
                        </div>

                        {/* Hover Effect - View Details */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-electric-blue/20 via-transparent to-transparent flex items-end justify-center pb-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex items-center gap-2 text-white font-medium">
                            <span>View Details</span>
                            <ExternalLink size={16} />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  )
}
