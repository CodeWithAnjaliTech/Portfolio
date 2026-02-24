"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Eye } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  index: number
}

export function ProjectCard({ title, description, image, technologies, liveUrl, githubUrl, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{
        y: -10,
        rotateY: 5,
        rotateX: 5,
        scale: 1.02,
      }}
      className="group perspective-1000"
      style={{ transformStyle: "preserve-3d" }}
    >
      <Card className="overflow-hidden backdrop-blur-sm bg-white/80 border-primary/10 hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:shadow-primary/20">
        <div className="relative overflow-hidden">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative h-48 w-full">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-2">
                {liveUrl && (
                  <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2 }}>
                    <Button size="sm" className="gap-2" asChild>
                      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                        <Eye size={16} />
                        Live Demo
                      </a>
                    </Button>
                  </motion.div>
                )}
                {githubUrl && (
                  <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.3 }}>
                    <Button size="sm" variant="outline" className="gap-2 bg-white/90" asChild>
                      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
        <CardContent className="p-6">
          <motion.h3
            className="text-xl font-bold mb-2 group-hover:text-primary transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-gray-600 mb-4 line-clamp-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {description}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {technologies.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
