"use client"

import { useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github, Star, Award, Coffee } from "lucide-react"

const teamMembers = [
  {
    name: "Darshan Singh",
    initials: "DS",
    role: "Lead Full-Stack Developer",
    email: "darshan.wkhra1@gmail.com",
    gradient: "linear-gradient(135deg, #00bfff, #1e90ff)",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    experience: "5+ years",
    projects: "50+",
  },
  {
    name: "Mayank Arora",
    initials: "MA",
    role: "Frontend Specialist",
    email: "ma5297780@gmail.com",
    gradient: "linear-gradient(135deg, #ff1493, #ff69b4)",
    skills: ["React", "Vue.js", "CSS", "Design"],
    experience: "4+ years",
    projects: "40+",
  },
  {
    name: "Yasir Akhtar",
    initials: "YA",
    role: "Backend Engineer",
    email: "yasircpr@gmail.com",
    gradient: "linear-gradient(135deg, #32cd32, #00ff7f)",
    skills: ["Python", "Django", "PostgreSQL", "Redis"],
    experience: "4+ years",
    projects: "35+",
  },
  {
    name: "Bharat Kumar",
    initials: "BK",
    role: "DevOps Engineer",
    email: "bharatkumarrathore2006@gmail.com",
    gradient: "linear-gradient(135deg, #ffa500, #ff8c00)",
    skills: ["Docker", "Kubernetes", "CI/CD", "Monitoring"],
    experience: "3+ years",
    projects: "30+",
  },
  {
    name: "Saima",
    initials: "S",
    role: "UI/UX Developer",
    email: "saimaalauddin79@gmail.com",
    gradient: "linear-gradient(135deg, #9370db, #ba55d3)",
    skills: ["Figma", "React", "Animation", "Prototyping"],
    experience: "3+ years",
    projects: "25+",
  },
  {
    name: "Dev",
    initials: "D",
    role: "Mobile Developer",
    email: "Devrajput45222@gmail.com",
    gradient: "linear-gradient(135deg, #20b2aa, #48d1cc)",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    experience: "3+ years",
    projects: "20+",
  },
]

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id="team" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Enhanced background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-dark-surface/20 via-dark-bg to-neon-magenta/5"
        style={{ y }}
      />

      {/* Animated constellation background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-magenta/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            animate={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            transition={{
              duration: 20 + Math.random() * 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              boxShadow: "0 0 4px rgba(255, 0, 255, 0.6)",
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
            {[Star, Award, Coffee].map((Icon, index) => (
              <motion.div
                key={index}
                className="p-2 bg-neon-magenta/10 border border-neon-magenta/20 rounded-lg"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Icon className="w-5 h-5 text-neon-magenta" />
              </motion.div>
            ))}
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-magenta via-electric-blue to-neon-magenta bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            The Minds Behind the Magic
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Meet our talented team of 6 developers who bring creativity and technical expertise to every project.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -15 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              onHoverStart={() => setHoveredMember(index)}
              onHoverEnd={() => setHoveredMember(null)}
              className="relative group perspective-1000"
            >
              <Card className="relative bg-dark-surface/40 backdrop-blur-xl border border-electric-blue/20 hover:border-neon-magenta/50 transition-all duration-500 overflow-hidden h-full transform-gpu">
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-magenta/30 via-electric-blue/30 to-neon-magenta/30 blur-sm -z-10"
                  animate={{
                    opacity: hoveredMember === index ? 1 : 0,
                    scale: hoveredMember === index ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating skill particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {member.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="absolute text-xs text-neon-magenta/60 font-medium opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${20 + ((skillIndex * 15) % 60)}%`,
                        top: `${30 + ((skillIndex * 20) % 40)}%`,
                      }}
                      animate={{
                        y: [0, -10, -20],
                        opacity: [0, 0.6, 0],
                        scale: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: skillIndex * 0.5,
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>

                <CardContent className="p-6 text-center relative z-10">
                  <motion.div className="relative mb-6" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <motion.div
                      className="w-32 h-32 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold border-4 border-electric-blue/20 group-hover:border-neon-magenta/50 transition-colors duration-300 relative overflow-hidden"
                      style={{ background: member.gradient }}
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.span
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ rotateY: 0 }}
                        whileHover={{ rotateY: 180 }}
                        transition={{ duration: 0.6 }}
                      >
                        {member.initials}
                      </motion.span>

                      {/* Back side with stats */}
                      <motion.div
                        className="absolute inset-0 flex flex-col items-center justify-center text-xs backface-hidden"
                        initial={{ rotateY: 180 }}
                        whileHover={{ rotateY: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ transform: "rotateY(180deg)" }}
                      >
                        <div className="text-white/90">{member.experience}</div>
                        <div className="text-white/70">{member.projects}</div>
                      </motion.div>
                    </motion.div>

                    {/* Pulsing ring effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-neon-magenta/30"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.3,
                      }}
                    />
                  </motion.div>

                  <motion.h3 className="text-xl font-semibold text-white mb-2" whileHover={{ scale: 1.05 }}>
                    {member.name}
                  </motion.h3>

                  <motion.p
                    className="text-gray-300 mb-4 font-medium"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {member.role}
                  </motion.p>

                  {/* Skills showcase */}
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={hoveredMember === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          className="px-2 py-1 bg-neon-magenta/10 text-neon-magenta text-xs rounded-md border border-neon-magenta/20"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={hoveredMember === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ delay: skillIndex * 0.1, duration: 0.3 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Social links with enhanced animations */}
                  <motion.div
                    className="flex justify-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={hoveredMember === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {[
                      { icon: Mail, href: `mailto:${member.email}`, color: "electric-blue" },
                      { icon: Linkedin, href: "#", color: "neon-magenta" },
                      { icon: Github, href: "#", color: "green-400" },
                    ].map(({ icon: Icon, href, color }, iconIndex) => (
                      <motion.a
                        key={iconIndex}
                        href={href}
                        className={`text-gray-400 hover:text-${color} transition-colors duration-300 p-2 rounded-lg hover:bg-${color}/10`}
                        title={`${Icon.name} ${member.name}`}
                        whileHover={{
                          scale: 1.2,
                          rotate: 360,
                          boxShadow: `0 0 15px rgba(${color === "electric-blue" ? "0, 255, 255" : color === "neon-magenta" ? "255, 0, 255" : "34, 197, 94"}, 0.5)`,
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </motion.div>
                </CardContent>

                {/* Hover overlay with gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-neon-magenta/10 via-transparent to-electric-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {[
            { label: "Team Members", value: "6", color: "electric-blue" },
            { label: "Years Experience", value: "20+", color: "neon-magenta" },
            { label: "Projects Completed", value: "200+", color: "green-400" },
            { label: "Happy Clients", value: "150+", color: "yellow-400" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="p-4 bg-dark-surface/20 backdrop-blur-sm rounded-xl border border-electric-blue/10"
              whileHover={{
                scale: 1.05,
                borderColor: `rgba(${stat.color === "electric-blue" ? "0, 255, 255" : stat.color === "neon-magenta" ? "255, 0, 255" : stat.color === "green-400" ? "34, 197, 94" : "234, 179, 8"}, 0.3)`,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={`text-3xl font-bold text-${stat.color} mb-2`}
                animate={{
                  textShadow: [
                    `0 0 10px rgba(${stat.color === "electric-blue" ? "0, 255, 255" : stat.color === "neon-magenta" ? "255, 0, 255" : stat.color === "green-400" ? "34, 197, 94" : "234, 179, 8"}, 0.5)`,
                    `0 0 20px rgba(${stat.color === "electric-blue" ? "0, 255, 255" : stat.color === "neon-magenta" ? "255, 0, 255" : stat.color === "green-400" ? "34, 197, 94" : "234, 179, 8"}, 0.8)`,
                    `0 0 10px rgba(${stat.color === "electric-blue" ? "0, 255, 255" : stat.color === "neon-magenta" ? "255, 0, 255" : stat.color === "green-400" ? "34, 197, 94" : "234, 179, 8"}, 0.5)`,
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
