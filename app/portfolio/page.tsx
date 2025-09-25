"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Calendar, Users, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

const portfolioProjects = [
  {
    id: 1,
    title: "E-Commerce Revolution Platform",
    description: "A comprehensive e-commerce solution with AI-powered recommendations and real-time analytics.",
    image: "/modern-ecommerce-dashboard.jpg",
    category: "E-Commerce",
    technologies: ["React", "Node.js", "MongoDB", "AI/ML", "Stripe"],
    client: "TechMart Solutions",
    duration: "6 months",
    team: "8 developers",
    results: {
      performance: "300% increase in sales",
      users: "50K+ active users",
      satisfaction: "98% customer satisfaction",
    },
    features: [
      "AI-powered product recommendations",
      "Real-time inventory management",
      "Advanced analytics dashboard",
      "Multi-payment gateway integration",
      "Mobile-responsive design",
    ],
    challenges: [
      "Scalability for high traffic volumes",
      "Complex inventory synchronization",
      "Real-time data processing",
    ],
    solutions: [
      "Implemented microservices architecture",
      "Used Redis for caching and session management",
      "Deployed on AWS with auto-scaling",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "Comprehensive healthcare platform connecting patients, doctors, and administrators.",
    image: "/healthcare-management-system-dashboard.jpg",
    category: "Healthcare",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker", "AWS"],
    client: "MediCare Plus",
    duration: "8 months",
    team: "12 developers",
    results: {
      performance: "200% faster patient processing",
      users: "25K+ registered users",
      satisfaction: "96% user satisfaction",
    },
    features: [
      "Patient appointment scheduling",
      "Electronic health records (EHR)",
      "Telemedicine integration",
      "Prescription management",
      "Insurance claim processing",
    ],
    challenges: ["HIPAA compliance requirements", "Integration with legacy systems", "Real-time communication needs"],
    solutions: [
      "Implemented end-to-end encryption",
      "Built custom API bridges",
      "Used WebSocket for real-time features",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Real Estate Investment Platform",
    description: "Modern platform for real estate investment with portfolio management and market analytics.",
    image: "/real-estate-app-interface.jpg",
    category: "FinTech",
    technologies: ["Next.js", "TypeScript", "Prisma", "Supabase", "Vercel"],
    client: "PropertyVest Inc.",
    duration: "4 months",
    team: "6 developers",
    results: {
      performance: "150% increase in investments",
      users: "15K+ investors",
      satisfaction: "94% platform rating",
    },
    features: [
      "Property investment tracking",
      "Market trend analysis",
      "Portfolio diversification tools",
      "Automated reporting",
      "Risk assessment algorithms",
    ],
    challenges: ["Complex financial calculations", "Real-time market data integration", "Regulatory compliance"],
    solutions: [
      "Built custom calculation engine",
      "Integrated multiple data APIs",
      "Implemented compliance monitoring",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Financial Analytics Dashboard",
    description: "Advanced analytics platform for financial institutions with AI-driven insights.",
    image: "/financial-analytics-dashboard.jpg",
    category: "Analytics",
    technologies: ["React", "D3.js", "Python", "TensorFlow", "GCP"],
    client: "FinanceFlow Corp",
    duration: "10 months",
    team: "15 developers",
    results: {
      performance: "400% faster data processing",
      users: "5K+ financial analysts",
      satisfaction: "99% accuracy rate",
    },
    features: [
      "Real-time market data visualization",
      "Predictive analytics models",
      "Risk assessment tools",
      "Automated report generation",
      "Custom dashboard builder",
    ],
    challenges: ["Processing massive datasets", "Complex visualization requirements", "High-frequency data updates"],
    solutions: ["Implemented data streaming pipeline", "Used WebGL for performance", "Built custom charting library"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Learning Management System",
    description: "Comprehensive LMS platform with interactive courses and progress tracking.",
    image: "/learning-management-system-platform.jpg",
    category: "Education",
    technologies: ["Angular", "NestJS", "MySQL", "Redis", "Docker"],
    client: "EduTech Solutions",
    duration: "7 months",
    team: "10 developers",
    results: {
      performance: "250% increase in course completion",
      users: "100K+ students",
      satisfaction: "97% student satisfaction",
    },
    features: [
      "Interactive course builder",
      "Progress tracking and analytics",
      "Video streaming platform",
      "Assessment and grading system",
      "Social learning features",
    ],
    challenges: ["Video streaming optimization", "Scalable assessment system", "Multi-language support"],
    solutions: ["Implemented CDN for video delivery", "Built modular assessment engine", "Used i18n for localization"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Restaurant POS System",
    description: "Modern point-of-sale system with inventory management and customer analytics.",
    image: "/restaurant-pos-system-interface.jpg",
    category: "Retail",
    technologies: ["React Native", "Express.js", "MongoDB", "Stripe", "Firebase"],
    client: "RestaurantTech Pro",
    duration: "5 months",
    team: "7 developers",
    results: {
      performance: "180% faster order processing",
      users: "500+ restaurants",
      satisfaction: "95% merchant satisfaction",
    },
    features: [
      "Touch-friendly POS interface",
      "Inventory management system",
      "Customer loyalty program",
      "Sales analytics dashboard",
      "Multi-location support",
    ],
    challenges: ["Offline functionality requirements", "Hardware integration needs", "Real-time synchronization"],
    solutions: [
      "Implemented offline-first architecture",
      "Built hardware abstraction layer",
      "Used WebSocket for sync",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
]

const categories = ["All", "E-Commerce", "Healthcare", "FinTech", "Analytics", "Education", "Retail"]

export default function PortfolioPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5 pt-24">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-start mb-6">
              <Link href="/">
                <Button variant="ghost" className="premium-button">
                  ← Back to Home
                </Button>
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Discover our successful projects and case studies that showcase innovative solutions and exceptional
              results for clients across various industries.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button key={category} variant={category === "All" ? "default" : "outline"} className="rounded-full">
                  {category}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {project.team}
                      </div>
                      <div className="flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {project.client}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button asChild size="sm" className="flex-1">
                        <Link href={`/portfolio/${project.id}`}>View Case Study</Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.liveUrl}>
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.githubUrl}>
                          <Github className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Let's discuss how we can bring your vision to life with our expertise and innovative solutions.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  )
}
