"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "TechCorp Inc.",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "Anjali delivered exceptional work on our React project. Her attention to detail and problem-solving skills are outstanding. She consistently met deadlines and provided innovative solutions.",
  },
  {
    name: "Michael Chen",
    role: "Senior Developer",
    company: "StartupXYZ",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "Working with Anjali was a pleasure. Her expertise in the MERN stack helped us build a robust application. She's reliable, communicative, and produces high-quality code.",
  },
  {
    name: "Emily Rodriguez",
    role: "CTO",
    company: "InnovateLab",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "Anjali's full-stack development skills are impressive. She successfully integrated complex APIs and delivered a scalable solution that exceeded our expectations. Highly recommended!",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-1" />
      <div className="container relative">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take my word for it. Here's what some of my clients have to say about working with me.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full backdrop-blur-sm bg-white/80 border-primary/20 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <motion.div
                        className="text-primary mr-2"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                      >
                        <Quote size={24} />
                      </motion.div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + index * 0.1 + i * 0.05 }}
                          >
                            <Star size={16} className="text-yellow-400 fill-current" />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <motion.p
                      className="text-gray-700 mb-6 italic"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      "{testimonial.text}"
                    </motion.p>

                    <motion.div
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
