"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Award, Users, Target, Lightbulb, Code, Zap, Shield } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to delivering exceptional digital solutions that drive real business results.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We work closely with our clients as partners, ensuring transparent communication throughout.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-First",
    description: "We stay ahead of technology trends to provide cutting-edge solutions for modern challenges.",
  },
  {
    icon: Award,
    title: "Quality-Focused",
    description: "Every line of code is crafted with precision, tested thoroughly, and optimized for performance.",
  },
  {
    icon: Code,
    title: "Full-Stack Expertise",
    description: "From frontend to backend, we handle every aspect of your digital project with expertise.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We deliver high-quality solutions quickly without compromising on code quality or performance.",
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    description: "All our solutions are built with security best practices and designed to scale with your business.",
  },
]

const stats = [
  { number: "100+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" },
]

export default function AboutPage() {
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
                About <span className="text-primary neon-glow">DARKWING's</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                We are a dedicated team of freelance developers passionate about creating exceptional digital
                experiences. From concept to deployment, we bring your vision to life with cutting-edge technology and
                innovative solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 neon-glow">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  DARKWING's was founded with a simple mission: to bridge the gap between innovative ideas and
                  exceptional digital solutions. We believe that every business deserves access to world-class
                  development services, regardless of size or budget.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our journey began as a small group of passionate developers who wanted to make a difference in the
                  digital landscape. Today, we've grown into a trusted partner for businesses looking to establish their
                  online presence and scale their operations.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We specialize in full-stack development, from beautiful frontend interfaces to robust backend systems,
                  ensuring your digital products are not just functional, but exceptional.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">What We Stand For</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do and every solution we create.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
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
              <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss your project and see how we can bring your vision to life with our expertise and
                dedication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="premium-button enhanced-glow">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="premium-button bg-transparent">
                    View Our Pricing
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
