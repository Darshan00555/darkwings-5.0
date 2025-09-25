"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// This helper function safely gets window dimensions
const getWindowDimensions = () => {
  if (typeof window !== "undefined") {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }
  return { width: 0, height: 0 } // Default values for the server
}

export default function ClientParticles({ count = 20 }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // This ensures the code only runs on the client (in the browser)
  useEffect(() => {
    setDimensions(getWindowDimensions())
  }, [])

  // Don't render anything on the server or before dimensions are set
  if (dimensions.width === 0) {
    return null
  }

  return (
    <div className="absolute inset-0">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-electric-blue/30 rounded-full"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}