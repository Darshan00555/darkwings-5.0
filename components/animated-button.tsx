"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  variant?: "primary" | "secondary" | "ghost"
  onClick?: () => void
  type?: "button" | "submit"
  disabled?: boolean
}

export default function AnimatedButton({
  children,
  className,
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
}: AnimatedButtonProps) {
  const baseClasses = "relative px-6 py-3 rounded-xl font-medium transition-all duration-300 overflow-hidden group"

  const variantClasses = {
    primary: "bg-gradient-to-r from-electric-blue to-neon-magenta text-white shadow-lg shadow-electric-blue/25",
    secondary:
      "bg-dark-surface/40 backdrop-blur-xl border border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10",
    ghost: "text-electric-blue hover:bg-electric-blue/10",
  }

  return (
    <motion.button
      className={cn(baseClasses, variantClasses[variant], className)}
      onClick={onClick}
      type={type}
      disabled={disabled}
      whileHover={{
        scale: 1.05,
        boxShadow:
          variant === "primary"
            ? "0 0 30px rgba(0, 255, 255, 0.4), 0 0 60px rgba(255, 0, 255, 0.2)"
            : "0 0 20px rgba(0, 255, 255, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
    >
      {/* Animated background layers */}
      {variant === "primary" && (
        <>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-neon-magenta to-electric-blue opacity-0 group-hover:opacity-100"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-magenta/20"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(0,255,255,0.2), rgba(255,0,255,0.2))",
                "linear-gradient(90deg, rgba(255,0,255,0.2), rgba(0,255,255,0.2))",
                "linear-gradient(135deg, rgba(0,255,255,0.2), rgba(255,0,255,0.2))",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </>
      )}

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        whileTap={{
          background: [
            "radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)",
            "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
            "radial-gradient(circle at center, transparent 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 0.6 }}
      />

      {/* Content with enhanced animations */}
      <motion.div
        className="relative z-10 flex items-center justify-center gap-2"
        whileHover={{ y: -1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>

      {/* Glowing border effect */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-transparent"
        whileHover={{
          borderColor: variant === "primary" ? "rgba(0, 255, 255, 0.5)" : "rgba(0, 255, 255, 0.3)",
          boxShadow: "inset 0 0 20px rgba(0, 255, 255, 0.1)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Particle effects on hover */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-electric-blue rounded-full opacity-0 group-hover:opacity-100"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              y: [0, -20, -40],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.button>
  )
}
