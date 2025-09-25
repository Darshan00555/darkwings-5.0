"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Calendar, Users, Code, Zap, CheckCircle, Star } from "lucide-react"
import PageTransition from "@/components/page-transition"
import { useParams } from "next/navigation"

const projectsData = {
  "ecommerce-platform": {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full-Stack",
    description:
      "A modern, scalable e-commerce platform with advanced features including real-time inventory, AI-powered recommendations, and seamless payment integration.",
    longDescription:
      "This comprehensive e-commerce platform represents the pinnacle of modern web development, combining cutting-edge technologies with user-centric design. Built with scalability in mind, it handles thousands of concurrent users while maintaining lightning-fast performance. The platform features an intelligent recommendation engine powered by machine learning algorithms, real-time inventory management, and a sophisticated multi-vendor marketplace system.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sd6dJki0R4dZ0qLxisbRjTaYZZ7B8p.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Redis", "PostgreSQL", "AWS", "Docker"],
    features: [
      "Real-time inventory management",
      "AI-powered product recommendations",
      "Multi-vendor marketplace support",
      "Advanced analytics dashboard",
      "Secure payment processing",
      "Mobile-responsive design",
      "SEO optimization",
      "Performance monitoring",
    ],
    duration: "6 months",
    team: "5 developers",
    challenges: [
      "Implementing real-time inventory synchronization across multiple vendors",
      "Building a scalable recommendation engine that processes millions of user interactions",
      "Ensuring PCI compliance for secure payment processing",
      "Optimizing database queries for sub-second response times",
    ],
    results: [
      "40% increase in conversion rates",
      "60% improvement in page load times",
      "99.9% uptime achieved",
      "500K+ active users",
    ],
  },
  "saas-dashboard": {
    id: 2,
    title: "SaaS Analytics Dashboard",
    category: "Frontend",
    description:
      "A comprehensive analytics dashboard with real-time data visualization, custom reporting, and advanced filtering capabilities.",
    longDescription:
      "This sophisticated analytics dashboard transforms complex data into actionable insights through beautiful, interactive visualizations. Built with performance and user experience at its core, it processes millions of data points in real-time while maintaining smooth 60fps animations. The dashboard features customizable widgets, advanced filtering systems, and export capabilities that empower users to make data-driven decisions.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sd6dJki0R4dZ0qLxisbRjTaYZZ7B8p.png",
    technologies: ["React", "D3.js", "TypeScript", "Tailwind CSS", "Framer Motion", "WebSocket", "Chart.js", "Vite"],
    features: [
      "Real-time data visualization",
      "Customizable dashboard widgets",
      "Advanced filtering and search",
      "Data export in multiple formats",
      "Interactive charts and graphs",
      "Responsive design",
      "Dark/light theme support",
      "Collaborative features",
    ],
    duration: "4 months",
    team: "3 developers",
    challenges: [
      "Rendering thousands of data points without performance degradation",
      "Creating intuitive drag-and-drop dashboard customization",
      "Implementing real-time updates without overwhelming the UI",
      "Ensuring accessibility compliance for complex visualizations",
    ],
    results: [
      "50% reduction in data analysis time",
      "95% user satisfaction rate",
      "30% increase in user engagement",
      "Zero accessibility violations",
    ],
  },
  "api-gateway": {
    id: 3,
    title: "API Gateway System",
    category: "Backend",
    description:
      "A high-performance API gateway with rate limiting, authentication, load balancing, and comprehensive monitoring.",
    longDescription:
      "This enterprise-grade API gateway serves as the central nervous system for microservices architecture, handling millions of requests per day with sub-millisecond latency. Built with reliability and security as top priorities, it features advanced rate limiting, intelligent load balancing, and comprehensive monitoring capabilities. The system automatically scales based on traffic patterns and provides detailed analytics for performance optimization.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sd6dJki0R4dZ0qLxisbRjTaYZZ7B8p.png",
    technologies: ["Node.js", "Express", "Redis", "PostgreSQL", "Docker", "Kubernetes", "Prometheus", "Grafana"],
    features: [
      "Intelligent rate limiting",
      "Dynamic load balancing",
      "API versioning support",
      "Real-time monitoring",
      "Authentication & authorization",
      "Request/response transformation",
      "Caching mechanisms",
      "Auto-scaling capabilities",
    ],
    duration: "5 months",
    team: "4 developers",
    challenges: [
      "Achieving sub-millisecond response times under high load",
      "Implementing intelligent rate limiting without blocking legitimate traffic",
      "Building fault-tolerant systems with automatic failover",
      "Creating comprehensive monitoring without impacting performance",
    ],
    results: [
      "99.99% uptime achieved",
      "70% reduction in response times",
      "10M+ requests handled daily",
      "Zero security breaches",
    ],
  },
  "mobile-backend": {
    id: 4,
    title: "Mobile App Backend",
    category: "Backend",
    description:
      "Scalable backend infrastructure for mobile applications with real-time messaging, push notifications, and offline sync.",
    longDescription:
      "This robust backend infrastructure powers next-generation mobile applications with seamless real-time communication, intelligent push notifications, and sophisticated offline synchronization. Designed to handle millions of concurrent connections, it provides a rock-solid foundation for mobile apps that need to work flawlessly across different network conditions and device capabilities.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sd6dJki0R4dZ0qLxisbRjTaYZZ7B8p.png",
    technologies: ["Node.js", "Socket.io", "MongoDB", "AWS", "Firebase", "Redis", "GraphQL", "Elasticsearch"],
    features: [
      "Real-time messaging system",
      "Intelligent push notifications",
      "Offline data synchronization",
      "Auto-scaling infrastructure",
      "File upload/download",
      "User authentication",
      "Analytics integration",
      "Cross-platform support",
    ],
    duration: "7 months",
    team: "6 developers",
    challenges: [
      "Implementing conflict resolution for offline data synchronization",
      "Building a real-time messaging system that scales to millions of users",
      "Optimizing push notification delivery for maximum engagement",
      "Ensuring data consistency across distributed systems",
    ],
    results: [
      "1M+ concurrent connections",
      "99.5% message delivery rate",
      "80% reduction in sync conflicts",
      "45% increase in user retention",
    ],
  },
}

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = projectsData[slug as keyof typeof projectsData]

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-dark-bg flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
            <Link href="/creations" className="text-electric-blue hover:text-neon-magenta">
              Back to Creations
            </Link>
          </div>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-dark-bg relative overflow-hidden">
        {/* Enhanced background */}
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-dark-bg to-neon-magenta/5" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
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
                duration: Math.random() * 20 + 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 py-12">
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <motion.div whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link
                href="/creations"
                className="inline-flex items-center gap-2 text-electric-blue hover:text-neon-magenta transition-all duration-300 group"
              >
                <motion.div whileHover={{ rotate: -180 }} transition={{ duration: 0.3 }}>
                  <ArrowLeft size={20} />
                </motion.div>
                <span className="group-hover:underline">Back to Creations</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-electric-blue/20 backdrop-blur-sm border border-electric-blue/30 rounded-full text-electric-blue font-medium">
                {project.category}
              </span>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <span>{project.team}</span>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-electric-blue via-neon-magenta to-electric-blue bg-clip-text text-transparent mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">{project.longDescription}</p>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-16"
          >
            <div className="relative rounded-2xl overflow-hidden border border-electric-blue/20">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/20 to-transparent" />
            </div>
          </motion.div>

          {/* Project Details Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-dark-surface/40 backdrop-blur-xl border border-electric-blue/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Code className="text-electric-blue" />
                Technologies Used
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {project.technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-2 p-3 bg-neon-magenta/10 border border-neon-magenta/20 rounded-lg"
                  >
                    <Zap size={16} className="text-neon-magenta" />
                    <span className="text-white font-medium">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-dark-surface/40 backdrop-blur-xl border border-electric-blue/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Star className="text-electric-blue" />
                Key Features
              </h3>
              <div className="space-y-3">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={20} className="text-electric-blue flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Challenges & Results */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-dark-surface/40 backdrop-blur-xl border border-electric-blue/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Technical Challenges</h3>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="p-4 bg-electric-blue/5 border border-electric-blue/10 rounded-lg"
                  >
                    <p className="text-gray-300 leading-relaxed">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-dark-surface/40 backdrop-blur-xl border border-electric-blue/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Results & Impact</h3>
              <div className="space-y-4">
                {project.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-neon-magenta/5 border border-neon-magenta/10 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-neon-magenta rounded-full flex-shrink-0" />
                    <p className="text-gray-300 font-medium">{result}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
