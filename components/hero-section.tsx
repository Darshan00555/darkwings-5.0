"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, Zap, Code, Rocket } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 aurora-bg" />

      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(100, 255, 218, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 255, 218, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              rotate: 0,
            }}
            animate={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              rotate: 360,
            }}
            transition={{
              duration: 15 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div
              className={`w-3 h-3 ${i % 2 === 0 ? "bg-primary/20" : "bg-accent/20"} ${i % 3 === 0 ? "rounded-full" : "rotate-45"} blur-sm`}
            />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="flex justify-center gap-6 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {[
              { icon: Code, delay: 0 },
              { icon: Zap, delay: 0.1 },
              { icon: Sparkles, delay: 0.2 },
              { icon: Rocket, delay: 0.3 },
            ].map(({ icon: Icon, delay }, index) => (
              <motion.div
                key={index}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + delay, duration: 0.4 }}
                whileHover={{ scale: 1.1 }}
                className="p-3 glass-effect rounded-xl"
              >
                <Icon className="w-6 h-6 text-primary" />
              </motion.div>
            ))}
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-foreground neon-glow">We Build </span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Digital Universes
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            From stunning frontends to robust backends, DARKWING's brings your vision to life with cutting-edge
            technology and creative excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="premium-button bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold enhanced-glow"
            >
              <span className="flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Start Your Project
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            animate={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              boxShadow: `0 0 ${3 + Math.random() * 4}px rgba(100, 255, 218, 0.6)`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
