"use client"

import { useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Server, Cog, Zap, Sparkles, Rocket } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Crafting beautiful, responsive user interfaces with modern frameworks and cutting-edge design principles.",
    features: ["React/Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "electric-blue",
    gradient: "from-electric-blue/20 to-electric-blue/5",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Building robust, scalable server-side solutions with secure APIs and optimized database architectures.",
    features: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    color: "neon-magenta",
    gradient: "from-neon-magenta/20 to-neon-magenta/5",
  },
  {
    icon: Cog,
    title: "Full-Stack Solutions",
    description: "Complete end-to-end development services, seamlessly integrating frontend and backend technologies.",
    features: ["System Design", "DevOps", "Cloud Deploy", "Performance"],
    color: "green-400",
    gradient: "from-green-400/20 to-green-400/5",
  },
]

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="services" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Enhanced background with parallax */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-dark-surface/30 via-dark-bg to-dark-surface/30"
        style={{ y }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-electric-blue/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            animate={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            transition={{
              duration: 25 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex justify-center gap-4 mb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {[Zap, Sparkles, Rocket].map((Icon, index) => (
              <motion.div
                key={index}
                className="p-2 bg-electric-blue/10 border border-electric-blue/20 rounded-lg"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Icon className="w-5 h-5 text-electric-blue" />
              </motion.div>
            ))}
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-electric-blue via-neon-magenta to-electric-blue bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            What We Do
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            We specialize in creating digital experiences that push the boundaries of what's possible on the web.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              <Card
                className={`relative bg-gradient-to-br ${service.gradient} backdrop-blur-xl border border-electric-blue/20 hover:border-electric-blue/50 transition-all duration-500 overflow-hidden h-full`}
              >
                {/* Animated border glow */}
                <motion.div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r from-${service.color}/30 via-transparent to-${service.color}/30 blur-sm -z-10`}
                  animate={{
                    opacity: hoveredCard === index ? 1 : 0,
                    scale: hoveredCard === index ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-${service.color}/40 rounded-full opacity-0 group-hover:opacity-100`}
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                      }}
                      animate={{
                        y: [0, -20, -40],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                <CardHeader className="text-center relative z-10">
                  <motion.div
                    className={`mx-auto mb-4 p-4 bg-${service.color}/20 rounded-full w-fit border border-${service.color}/30`}
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      boxShadow: `0 0 20px rgba(${service.color === "electric-blue" ? "0, 255, 255" : service.color === "neon-magenta" ? "255, 0, 255" : "34, 197, 94"}, 0.5)`,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className={`w-8 h-8 text-${service.color}`} />
                  </motion.div>
                  <CardTitle className="text-xl font-semibold text-white mb-2">{service.title}</CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-300 text-center mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>

                  {/* Feature tags */}
                  <motion.div
                    className="flex flex-wrap gap-2 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={hoveredCard === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.features.map((feature, featureIndex) => (
                      <motion.span
                        key={feature}
                        className={`px-2 py-1 bg-${service.color}/10 text-${service.color} text-xs rounded-md border border-${service.color}/20`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={hoveredCard === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: featureIndex * 0.1, duration: 0.3 }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </motion.div>
                </CardContent>

                {/* Hover overlay effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-t from-${service.color}/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.p className="text-gray-300 mb-6" whileHover={{ scale: 1.05 }}>
            Ready to bring your vision to life?
          </motion.p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-electric-blue to-neon-magenta text-white rounded-xl font-medium hover:from-neon-magenta hover:to-electric-blue transition-all duration-300 shadow-lg shadow-electric-blue/25"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
