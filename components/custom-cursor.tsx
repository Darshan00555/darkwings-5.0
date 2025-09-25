"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const updateTrailPosition = () => {
      setTrailPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }))
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter)
        el.addEventListener("mouseleave", handleMouseLeave)
      })
    }

    window.addEventListener("mousemove", updateMousePosition)
    const trailInterval = setInterval(updateTrailPosition, 16)

    // Add hover listeners after a short delay to ensure DOM is ready
    setTimeout(addHoverListeners, 100)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      clearInterval(trailInterval)

      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [mousePosition])

  return (
    <>
      <div
        className={`cursor-dot ${isHovering ? "scale-150" : ""}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: `translate(-50%, -50%) ${isHovering ? "scale(1.5)" : "scale(1)"}`,
        }}
      />
      <div
        className={`cursor-trail ${isHovering ? "scale-125 border-4" : ""}`}
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
          transform: `translate(-50%, -50%) ${isHovering ? "scale(1.25)" : "scale(1)"}`,
        }}
      />
    </>
  )
}
