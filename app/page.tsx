"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Code,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  ChevronDown,
  Users,
  Coffee,
  Award,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { QuoteCarousel } from "@/components/quote-carousel"
import { ResumeDownload } from "@/components/resume-download"
import { ContactForm } from "@/components/contact-form"
import { TypingAnimation } from "@/components/typing-animation"
import { FloatingElement } from "@/components/floating-element"
import { ContactInfoItem } from "@/components/contact-info-item"
import { Toaster } from "@/components/ui/toaster"
import { ProjectCard } from "@/components/project-card"
import { SkillProgressBar } from "@/components/skill-progress-bar"
import { TestimonialsSection } from "@/components/testimonials-section"
import { MagneticButton } from "@/components/magnetic-button"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Toaster />

      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            className="font-semibold text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Anjali Dave
          </motion.div>
          <nav className="hidden md:flex gap-6">
            {["about", "experience", "skills", "projects", "education", "testimonials", "quotes", "contact"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className="text-sm font-medium hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              ),
            )}
          </nav>
          <div className="flex items-center gap-2">
            <MagneticButton>
              <ResumeDownload />
            </MagneticButton>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Anjali Dave
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Software Engineer |{" "}
              <TypingAnimation texts={["MERN Stack Developer", "Full Stack Developer", "React Specialist"]} />
            </motion.h2>

            <motion.p
              className="text-gray-700 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              A passionate and detail-oriented software engineer with over 4+ years of experience in full-stack web
              development, specializing in MongoDB, Express, React and Node.js. Adept at creating high-performance
              applications and implementing secure, scalable solutions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <MagneticButton>
                <Button className="gap-2" asChild>
                  <a href="mailto:anjaliwork0912@gmail.com">
                    <Mail size={18} />
                    Contact Me
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="outline" className="gap-2 bg-transparent" asChild>
                  <a href="https://www.linkedin.com/in/anjali-dave-67234421b" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="outline" className="gap-2 bg-transparent" asChild>
                  <a href="https://github.com/CodeWithAnjaliTechie" target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                    GitHub
                  </a>
                </Button>
              </MagneticButton>
            </motion.div>
          </motion.div>

          <FloatingElement duration={6} yOffset={20}>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-17%20at%2012.40.37%20AM-bLNekMxJm0cOVMpuXPOH6vKmPNqyYT.jpeg"
                  alt="Anjali Dave"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          </FloatingElement>
        </div>

        <motion.div
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-primary transition-colors">
            <span className="text-sm mb-1">Scroll Down</span>
            <ChevronDown size={20} />
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative">
        <div className="container">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <ScrollReveal direction="left" className="mb-6">
              <p className="text-gray-700">
                I'm a Software Engineer with a passion for creating efficient, user-friendly web applications. With over
                3 years of experience in full-stack development, I specialize in the MERN stack (MongoDB, Express,
                React, Node.js), building responsive and performant web solutions.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <p className="text-gray-700 mb-6">
                My expertise includes front-end development with React, Next.js, and Gatsby, as well as working with
                various CSS frameworks like Tailwind CSS and Material-UI. I'm experienced in integrating third-party
                APIs and optimizing application performance.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.6}>
              <p className="text-gray-700">
                I enjoy collaborating with teams, mentoring junior developers, and continuously learning new
                technologies to stay at the forefront of web development.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 relative">
        <div className="container">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="left">
              <Card className="mb-8 overflow-hidden backdrop-blur-sm bg-white/80 border-primary/10 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10 mt-2 mr-6"></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-4">
                        <span className="font-medium">Algoris Pvt., Ahmedabad</span>
                        <span>•</span>
                        <span>May 2022 - Present</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Algoris is a dynamic startup delivering cutting-edge software solutions for diverse industries,
                        catering primarily to US-based clients.
                      </p>
                      <h4 className="font-semibold text-lg mb-2">Key Contributions</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          • Built and maintained high-quality web solutions, including Gatsby-based applications,
                          WordPress websites, and custom front-end/back-end development.
                        </li>
                        <li>
                          • Resolved bugs, optimized JavaScript and React code, and improved front-end performance to
                          ensure user-friendly, scalable applications.
                        </li>
                        <li>
                          • Streamlined workflows by integrating third-party APIs, ensuring seamless data exchange and
                          improved application functionality.
                        </li>
                        <li>
                          • Mentored interns, sharing best practices and fostering a collaborative learning environment.
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <Card className="overflow-hidden backdrop-blur-sm bg-white/80 border-primary/10 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10 mt-2 mr-6"></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">React Developer Intern</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-4">
                        <span className="font-medium">Infolabz Pvt. Ltd., Ahmedabad</span>
                        <span>•</span>
                        <span>January 2022 - May 2022</span>
                      </div>
                      <p className="text-gray-700">
                        Infolabz is a web application development and IT consulting company, offering innovative
                        solutions across various industries. They specialize in React-based web apps, focusing on
                        security, data protection, and enhancing user experience through API integration and state
                        management.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white relative">
        <div className="container">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          </ScrollReveal>

          <Tabs defaultValue="technical" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="technical">Technical Skills</TabsTrigger>
              <TabsTrigger value="progress">Skill Levels</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>

            <TabsContent value="technical">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Programming Languages",
                    skills: ["JavaScript", "TypeScript", "PHP", "HTML"],
                  },
                  {
                    title: "Databases",
                    skills: ["MongoDB", "MySQL"],
                  },
                  {
                    title: "Frameworks & Libraries",
                    skills: [
                      "React",
                      "Next.js",
                      "Gatsby",
                      "WordPress",
                      "CSS",
                      "Tailwind CSS",
                      "LESS",
                      "Bootstrap",
                      "Material-UI",
                      "Ant Design",
                    ],
                  },
                  {
                    title: "Tools & Platforms",
                    skills: [
                      "Git",
                      "GitHub/GitLab",
                      "VS Code",
                      "IntelliJ IDEA",
                      "Sublime Text",
                      "Eclipse",
                      "Figma",
                      "Adobe XD",
                      "StoryBook",
                      "Jira",
                      "Slack",
                      "Microsoft Teams",
                    ],
                  },
                ].map((category, index) => (
                  <ScrollReveal key={category.title} direction="up" delay={index * 0.2}>
                    <Card className="overflow-hidden backdrop-blur-sm bg-white/80 border-primary/10 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Code size={18} className="text-primary" />
                          {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, i) => (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <Badge variant="secondary" className="transition-all duration-300">
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="progress">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ScrollReveal direction="left">
                  <div>
                    <h3 className="text-xl font-semibold mb-6">Frontend Technologies</h3>
                    <SkillProgressBar skill="React.js" percentage={95} index={0} />
                    <SkillProgressBar skill="JavaScript/TypeScript" percentage={90} index={1} />
                    <SkillProgressBar skill="Next.js" percentage={85} index={2} />
                    <SkillProgressBar skill="Tailwind CSS" percentage={90} index={3} />
                    <SkillProgressBar skill="HTML/CSS" percentage={95} index={4} />
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="right" delay={0.3}>
                  <div>
                    <h3 className="text-xl font-semibold mb-6">Backend & Tools</h3>
                    <SkillProgressBar skill="Node.js" percentage={80} index={5} color="bg-green-500" />
                    <SkillProgressBar skill="MongoDB" percentage={75} index={6} color="bg-green-500" />
                    <SkillProgressBar skill="Express.js" percentage={80} index={7} color="bg-green-500" />
                    <SkillProgressBar skill="Git/GitHub" percentage={90} index={8} color="bg-green-500" />
                    <SkillProgressBar skill="API Integration" percentage={85} index={9} color="bg-green-500" />
                  </div>
                </ScrollReveal>
              </div>
            </TabsContent>

            <TabsContent value="soft">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Team Collaboration",
                    description: "Effectively work with cross-functional teams to achieve project goals",
                    icon: <Users size={24} className="text-primary" />,
                  },
                  {
                    title: "Research",
                    description: "Thorough research skills to find optimal solutions for complex problems",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                      </svg>
                    ),
                  },
                  {
                    title: "Multitasking",
                    description: "Efficiently manage multiple tasks and priorities simultaneously",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <line x1="8" y1="6" x2="21" y2="6"></line>
                        <line x1="8" y1="12" x2="21" y2="12"></line>
                        <line x1="8" y1="18" x2="21" y2="18"></line>
                        <line x1="3" y1="6" x2="3.01" y2="6"></line>
                        <line x1="3" y1="12" x2="3.01" y2="12"></line>
                        <line x1="3" y1="18" x2="3.01" y2="18"></line>
                      </svg>
                    ),
                  },
                  {
                    title: "Creativity",
                    description: "Creative approach to problem-solving and design challenges",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ),
                  },
                  {
                    title: "Innovation",
                    description: "Innovative thinking to develop new solutions and approaches",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="m9 12 2 2 4-4"></path>
                        <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
                        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                      </svg>
                    ),
                  },
                ].map((skill, index) => (
                  <ScrollReveal key={skill.title} direction="up" delay={index * 0.15}>
                    <Card className="backdrop-blur-sm bg-white/80 border-primary/10 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <motion.div
                          className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          {skill.icon}
                        </motion.div>
                        <h3 className="font-semibold mb-2">{skill.title}</h3>
                        <p className="text-gray-600 text-sm">{skill.description}</p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 relative">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Here are some of the projects I've worked on that showcase my skills and experience in full-stack
                development.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description:
                  "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
                image: "/placeholder.svg?height=300&width=400",
                technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
                liveUrl: "https://example.com",
                githubUrl: "https://github.com/example",
              },
              {
                title: "Task Management App",
                description:
                  "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
                image: "/placeholder.svg?height=300&width=400",
                technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Socket.io"],
                liveUrl: "https://example.com",
                githubUrl: "https://github.com/example",
              },
              {
                title: "Weather Dashboard",
                description:
                  "A responsive weather application that provides real-time weather data, forecasts, and interactive maps using third-party APIs.",
                image: "/placeholder.svg?height=300&width=400",
                technologies: ["React", "API Integration", "Chart.js", "CSS3"],
                liveUrl: "https://example.com",
                githubUrl: "https://github.com/example",
              },
              {
                title: "Blog Platform",
                description:
                  "A modern blog platform with content management system, user authentication, and SEO optimization built with Gatsby and headless CMS.",
                image: "/placeholder.svg?height=300&width=400",
                technologies: ["Gatsby", "GraphQL", "Contentful", "SEO"],
                liveUrl: "https://example.com",
                githubUrl: "https://github.com/example",
              },
              {
                title: "Portfolio Website",
                description:
                  "A responsive portfolio website showcasing projects and skills with smooth animations and modern design principles.",
                image: "/placeholder.svg?height=300&width=400",
                technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
                liveUrl: "https://example.com",
                githubUrl: "https://github.com/example",
              },
              {
                title: "API Integration Tool",
                description:
                  "A comprehensive tool for integrating multiple third-party APIs with data transformation and webhook management capabilities.",
                image: "/placeholder.svg?height=300&width=400",
                technologies: ["Node.js", "Express", "API Integration", "Webhooks"],
                liveUrl: "https://example.com",
                githubUrl: "https://github.com/example",
              },
            ].map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="container relative">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">My Journey in Numbers</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Here are some key metrics that showcase my experience and dedication to delivering quality work.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code size={32} />,
                value: "50+",
                label: "Projects Completed",
                color: "text-blue-500",
              },
              {
                icon: <Users size={32} />,
                value: "25+",
                label: "Happy Clients",
                color: "text-green-500",
              },
              {
                icon: <Coffee size={32} />,
                value: "1000+",
                label: "Cups of Coffee",
                color: "text-amber-500",
              },
              {
                icon: <Award size={32} />,
                value: "3+",
                label: "Years Experience",
                color: "text-purple-500",
              },
            ].map((stat, index) => (
              <ScrollReveal key={index} direction="scale" delay={index * 0.1}>
                <div className="text-center p-6 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <motion.div
                    className={`${stat.color} mb-4 flex justify-center`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50 relative">
        <div className="container">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="left">
              <Card className="mb-8 overflow-hidden backdrop-blur-sm bg-white/80 border-primary/10 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10 mt-2 mr-6"></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">B.E. in Computer Engineering</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-1">
                        <span className="font-medium">SAL Institute of Technology & Engineering Research</span>
                        <span>•</span>
                        <span>2019 - 2022</span>
                      </div>
                      <p className="text-gray-700">Ahmedabad, Gujarat</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <Card className="overflow-hidden backdrop-blur-sm bg-white/80 border-primary/10 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10 mt-2 mr-6"></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Diploma in Computer Engineering</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-1">
                        <span className="font-medium">L.J. Polytechnic</span>
                        <span>•</span>
                        <span>2016 - 2019</span>
                      </div>
                      <p className="text-gray-700">Ahmedabad, Gujarat</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Quotes Section */}
      <section id="quotes" className="py-20 bg-white overflow-hidden relative">
        <div className="container">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-bold mb-12 text-center">Inspirational Tech Quotes</h2>
          </ScrollReveal>

          <QuoteCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 relative">
        <div className="container">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <ScrollReveal direction="left">
              <div className="backdrop-blur-sm bg-white/80 p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <ContactInfoItem
                    icon={<Phone size={18} className="text-primary" />}
                    title="Phone"
                    content="+91 8320259803"
                    noLink={true}
                    index={0}
                  />

                  <ContactInfoItem
                    icon={<Mail size={18} className="text-primary" />}
                    title="Email"
                    content="anjaliwork0912@gmail.com"
                    noLink={true}
                    index={1}
                  />

                  <ContactInfoItem
                    icon={<MapPin size={18} className="text-primary" />}
                    title="Location"
                    content="Ahmedabad, Gujarat, India"
                    index={2}
                  />

                  <ContactInfoItem
                    icon={<Linkedin size={18} className="text-primary" />}
                    title="LinkedIn"
                    content={
                      <a
                        href="https://www.linkedin.com/in/anjali-dave-67234421b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        View Profile <ExternalLink size={14} />
                      </a>
                    }
                    index={3}
                  />

                  <ContactInfoItem
                    icon={<Github size={18} className="text-primary" />}
                    title="GitHub"
                    content={
                      <a
                        href="https://github.com/CodeWithAnjaliTechie"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        View Profile <ExternalLink size={14} />
                      </a>
                    }
                    index={4}
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="backdrop-blur-sm bg-white/80 p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-20"></div>
        <div className="container relative">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <ScrollReveal direction="left">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold">Anjali Dave</h3>
                <p className="text-gray-400">Software Engineer | MERN Stack Developer</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex space-x-4">
                {[
                  {
                    icon: <Linkedin size={18} />,
                    link: "https://www.linkedin.com/in/anjali-dave-67234421b",
                    label: "LinkedIn",
                  },
                  {
                    icon: <Github size={18} />,
                    link: "https://github.com/CodeWithAnjaliTechie",
                    label: "GitHub",
                  },
                  {
                    icon: <Mail size={18} />,
                    link: "mailto:anjaliwork0912@gmail.com",
                    label: "Email",
                  },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </footer>
    </main>
  )
}
