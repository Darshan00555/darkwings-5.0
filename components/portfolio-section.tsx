"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full-Stack",
    image: "/modern-ecommerce-platform-dashboard-with-dark-them.jpg",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    category: "Frontend",
    image: "/saas-analytics-dashboard-with-charts-and-graphs.jpg",
  },
  {
    id: 3,
    title: "API Gateway",
    category: "Backend",
    image: "/api-gateway-architecture-diagram-with-microservice.jpg",
  },
  {
    id: 4,
    title: "Mobile App Backend",
    category: "Backend",
    image: "/mobile-app-backend-server-architecture-diagram.jpg",
  },
]

const categories = ["All", "Frontend", "Backend", "Full-Stack"]

export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("All")
  const sectionRef = useRef<HTMLElement>(null)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="work" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Our Creations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our portfolio of innovative projects that showcase our expertise across different technologies.
          </p>
        </div>

        <div
          className={`flex justify-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border-border text-foreground hover:border-primary hover:text-primary"
                } transition-all duration-300`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 tilt-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0 relative">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                      <span className="text-primary font-medium">{project.category}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
