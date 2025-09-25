"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useAuth } from "@/components/auth-provider"
import AnimatedButton from "@/components/animated-button"
import PageTransition from "@/components/page-transition"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const success = await login(email, password)
      if (success) {
        router.push("/dashboard")
      }
    } catch (err) {
      setError("Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-dark-bg flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-dark-bg to-neon-magenta/10" />

        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-electric-blue/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Aurora effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-magenta/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-md"
        >
          <motion.div whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-electric-blue hover:text-neon-magenta transition-all duration-300 mb-8 group"
            >
              <motion.div whileHover={{ rotate: -180 }} transition={{ duration: 0.3 }}>
                <ArrowLeft size={20} />
              </motion.div>
              <span className="group-hover:underline">Back to Home</span>
            </Link>
          </motion.div>

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl font-bold bg-gradient-to-r from-electric-blue via-neon-magenta to-electric-blue bg-clip-text text-transparent mb-4 relative"
              style={{
                fontFamily: "Dancing Script, cursive",
                textShadow: "0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(255, 0, 255, 0.3)",
                filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.7))",
              }}
              animate={{
                textShadow: [
                  "0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(255, 0, 255, 0.3)",
                  "0 0 40px rgba(0, 255, 255, 0.8), 0 0 80px rgba(255, 0, 255, 0.5)",
                  "0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(255, 0, 255, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              DARKWING's
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1 }}
              />
            </motion.h1>
            <motion.p
              className="text-gray-300 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Sign in to your account
            </motion.p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="relative bg-dark-surface/30 backdrop-blur-xl border border-electric-blue/30 rounded-2xl p-8 shadow-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              background: "linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-electric-blue/20 via-neon-magenta/20 to-electric-blue/20 blur-sm -z-10" />

            <div className="space-y-6">
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
                <label className="block text-sm font-medium text-gray-300 mb-2">Username or Email</label>
                <motion.input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-bg/80 backdrop-blur-sm border border-electric-blue/30 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/50 transition-all duration-300"
                  placeholder="Enter your email"
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>

              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.7 }}>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <motion.input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-bg/80 backdrop-blur-sm border border-electric-blue/30 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/50 transition-all duration-300"
                  placeholder="Enter your password"
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg p-3"
                >
                  {error}
                </motion.p>
              )}

              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}>
                <AnimatedButton type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? "Signing In..." : "Login"}
                </AnimatedButton>
              </motion.div>

              <motion.p
                className="text-center text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="text-electric-blue hover:text-neon-magenta transition-colors font-medium hover:underline"
                >
                  Sign Up
                </Link>
              </motion.p>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </PageTransition>
  )
}
