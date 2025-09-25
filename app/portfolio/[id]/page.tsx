import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Zap,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const portfolioProjects = [
  {
    id: 1,
    title: "E-Commerce Revolution Platform",
    description: "A comprehensive e-commerce solution with AI-powered recommendations and real-time analytics.",
    image: "/modern-ecommerce-dashboard.png",
    category: "E-Commerce",
    technologies: ["React", "Node.js", "MongoDB", "AI/ML", "Stripe"],
    client: "TechMart Solutions",
    duration: "6 months",
    team: "8 developers",
    results: {
      performance: "300% increase in sales",
      users: "50K+ active users",
      satisfaction: "98% customer satisfaction",
    },
    features: [
      "AI-powered product recommendations",
      "Real-time inventory management",
      "Advanced analytics dashboard",
      "Multi-payment gateway integration",
      "Mobile-responsive design",
    ],
    challenges: [
      "Scalability for high traffic volumes",
      "Complex inventory synchronization",
      "Real-time data processing",
    ],
    solutions: [
      "Implemented microservices architecture",
      "Used Redis for caching and session management",
      "Deployed on AWS with auto-scaling",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  // Add other projects here...
]

interface PageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = portfolioProjects.find((p) => p.id === Number.parseInt(params.id))

  if (!project) {
    return {
      title: "Project Not Found - DarkWings",
    }
  }

  return {
    title: `${project.title} - Portfolio - DarkWings`,
    description: project.description,
  }
}

export default function ProjectCaseStudy({ params }: PageProps) {
  const project = portfolioProjects.find((p) => p.id === Number.parseInt(params.id))

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Button variant="ghost" asChild>
            <Link href="/portfolio" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">{project.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">{project.description}</p>

              {/* Project Info */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Calendar className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">{project.duration}</div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">{project.team}</div>
                  <div className="text-sm text-muted-foreground">Team Size</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Zap className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">{project.client}</div>
                  <div className="text-sm text-muted-foreground">Client</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button asChild>
                  <Link href={project.liveUrl}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Site
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={project.githubUrl}>
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Project Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{project.results.performance}</CardTitle>
                <CardDescription>Performance Improvement</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{project.results.users}</CardTitle>
                <CardDescription>Active Users</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{project.results.satisfaction}</CardTitle>
                <CardDescription>Customer Satisfaction</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-lg py-2 px-4">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Details */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Challenges */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Solutions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-500" />
                  Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{solution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Similar Results?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Let's discuss how we can create a custom solution for your business needs.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
