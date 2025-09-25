"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Smartphone, Zap, Globe, Server, Cloud, CheckCircle, ArrowRight, Layers, Monitor } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

const services = [
  {
    id: "frontend",
    icon: Monitor,
    title: "Frontend Development",
    description: "Beautiful, responsive user interfaces built with modern frameworks",
    features: ["React & Next.js", "Vue.js & Nuxt.js", "TypeScript", "Responsive Design", "Performance Optimization"],
    technologies: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    startingPrice: "$2,500",
    timeline: "2-4 weeks",
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend Development",
    description: "Scalable server-side solutions and robust API development",
    features: ["RESTful APIs", "GraphQL", "Database Design", "Authentication", "Real-time Features"],
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
    startingPrice: "$3,000",
    timeline: "3-5 weeks",
  },
  {
    id: "fullstack",
    icon: Layers,
    title: "Full-Stack Development",
    description: "Complete web applications from frontend to backend",
    features: [
      "End-to-end Development",
      "Database Integration",
      "User Authentication",
      "Payment Processing",
      "Admin Dashboards",
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe"],
    startingPrice: "$5,000",
    timeline: "4-8 weeks",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile apps for iOS and Android",
    features: ["React Native", "Flutter", "Native Performance", "App Store Deployment", "Push Notifications"],
    technologies: ["React Native", "Flutter", "Expo", "Firebase", "App Store Connect"],
    startingPrice: "$4,000",
    timeline: "5-8 weeks",
  },
  {
    id: "ecommerce",
    icon: Globe,
    title: "E-commerce Solutions",
    description: "Complete online stores with payment processing and inventory management",
    features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Order Tracking", "Admin Panel"],
    technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Next.js"],
    startingPrice: "$3,500",
    timeline: "4-6 weeks",
  },
  {
    id: "devops",
    icon: Cloud,
    title: "DevOps & Deployment",
    description: "Cloud infrastructure, CI/CD pipelines, and deployment automation",
    features: ["AWS/Azure Setup", "Docker Containers", "CI/CD Pipelines", "Monitoring", "Security"],
    technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
    startingPrice: "$2,000",
    timeline: "1-3 weeks",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements and create a detailed project roadmap.",
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "Our team designs the user experience and technical architecture.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build your solution with regular updates and thorough testing.",
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "We deploy your project and provide ongoing support and maintenance.",
  },
]

export default function ServicesPage() {
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
                Our <span className="text-primary neon-glow">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                From concept to deployment, we provide comprehensive development services to bring your digital vision
                to life with cutting-edge technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 h-full tilt-card">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs">
                              From {service.startingPrice}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {service.timeline}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                          <div className="flex flex-wrap gap-1">
                            {service.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button className="w-full premium-button mt-4" size="sm">
                          <span className="flex items-center gap-2">
                            Get Started
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Development Process</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that ensures quality results and transparent communication.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-primary/10 border-2 border-primary/30 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{step.step}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/20 transform translate-x-8" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss your requirements and create a custom solution that fits your needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="premium-button enhanced-glow">
                    <Zap className="w-5 h-5 mr-2" />
                    Get Free Consultation
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="premium-button bg-transparent">
                    View Pricing Plans
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
