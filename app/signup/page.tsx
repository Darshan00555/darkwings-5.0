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

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const { signup } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setIsLoading(true)

    try {
      const success = await signup(email, username, password)
      if (success) {
        router.push("/dashboard")
      }
    } catch (err) {
      setError("Signup failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-dark-bg flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-neon-magenta/5" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full max-w-md"
        >
          {/* Back to Home */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-electric-blue hover:text-neon-magenta transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-electric-blue to-neon-magenta bg-clip-text text-transparent">
              DARKWING's
            </h1>
            <p className="text-gray-400 mt-2">Create your account</p>
          </div>

          {/* Signup Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-dark-surface/50 backdrop-blur-sm border border-electric-blue/20 rounded-xl p-8 shadow-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-bg border border-electric-blue/30 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-bg border border-electric-blue/30 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors"
                  placeholder="Choose a username"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-bg border border-electric-blue/30 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors"
                  placeholder="Create a password"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-bg border border-electric-blue/30 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              {error && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm">
                  {error}
                </motion.p>
              )}

              <AnimatedButton type="submit" disabled={isLoading} className="w-full">
                {isLoading ? "Creating Account..." : "Sign Up"}
              </AnimatedButton>

              <p className="text-center text-gray-400">
                Already have an account?{" "}
                <Link href="/login" className="text-electric-blue hover:text-neon-magenta transition-colors">
                  Sign In
                </Link>
              </p>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </PageTransition>
  )
}
