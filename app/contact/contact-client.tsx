"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Headphones,
  FileText,
  Users,
  Zap,
  Shield,
  Globe,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email and we'll respond within 24 hours",
    contact: "hello@darkwings.dev",
    action: "mailto:hello@darkwings.dev",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team during business hours",
    contact: "+1 (555) 123-4567",
    action: "tel:+15551234567",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    contact: "Available 24/7",
    action: "#",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come visit our office for in-person meetings",
    contact: "123 Tech Street, Silicon Valley, CA 94000",
    action: "#",
  },
]

const supportOptions = [
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Get help with technical issues and troubleshooting",
    availability: "24/7 Support",
    responseTime: "< 2 hours",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Access comprehensive guides and documentation",
    availability: "Always Available",
    responseTime: "Instant",
  },
  {
    icon: Users,
    title: "Consultation",
    description: "Schedule a consultation with our experts",
    availability: "Business Hours",
    responseTime: "< 24 hours",
  },
  {
    icon: Calendar,
    title: "Project Planning",
    description: "Discuss your project requirements and timeline",
    availability: "By Appointment",
    responseTime: "< 4 hours",
  },
]

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM PST" },
  { day: "Sunday", hours: "Closed" },
]

export default function ContactClientPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5 pt-24">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-start mb-6">
              <Link href="/">
                <Button variant="ghost" className="premium-button">
                  ← Back to Home
                </Button>
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Ready to start your project or have questions? We're here to help. Reach out to us through any of the
              channels below.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <method.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold mb-4">{method.contact}</p>
                    <Button asChild className="w-full">
                      <a href={method.action}>Contact Now</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="mobile-app">Mobile App</SelectItem>
                        <SelectItem value="ecommerce">E-Commerce</SelectItem>
                        <SelectItem value="custom-software">Custom Software</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="over-100k">Over $100,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your project..." rows={5} />
                  </div>

                  <Button className="w-full" size="lg">
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Office Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Support Options */}
                <Card>
                  <CardHeader>
                    <CardTitle>Support Options</CardTitle>
                    <CardDescription>Choose the best way to get the help you need</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {supportOptions.map((option, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                        <option.icon className="w-5 h-5 text-primary mt-0.5" />
                        <div className="flex-1">
                          <h4 className="font-semibold">{option.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                          <div className="flex gap-4 text-xs">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {option.availability}
                            </span>
                            <span className="flex items-center gap-1">
                              <Zap className="w-3 h-3" />
                              {option.responseTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card>
                  <CardHeader>
                    <CardTitle>Why Choose DarkWings?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-500" />
                      <span>Trusted by 500+ companies worldwide</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-blue-500" />
                      <span>Fast response times and delivery</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-purple-500" />
                      <span>Expert team with 10+ years experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-orange-500" />
                      <span>Global reach with local expertise</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">Quick answers to common questions about our services</p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does a typical project take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks,
                    while complex applications can take 3-6 months. We provide detailed timelines during our initial
                    consultation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you provide ongoing support and maintenance?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we offer comprehensive support and maintenance packages to keep your applications running
                    smoothly. This includes security updates, bug fixes, performance optimization, and feature
                    enhancements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What technologies do you specialize in?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We specialize in modern web technologies including React, Next.js, Node.js, Python, and cloud
                    platforms like AWS and Vercel. We also work with mobile technologies like React Native and Flutter.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can you work with our existing team?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We're experienced in collaborating with in-house teams and can integrate seamlessly into your
                    existing workflow. We can work as an extension of your team or lead the development process.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Schedule a Consultation</Button>
              <Button size="lg" variant="outline">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  )
}
