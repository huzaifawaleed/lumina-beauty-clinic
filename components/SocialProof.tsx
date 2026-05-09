"use client"

import { motion } from "framer-motion"
import { TestimonialCarousel } from "@/components/ui/testimonial"
import type { Testimonial } from "@/components/ui/testimonial"

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell · Regular Client",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    description:
      "The facials here are absolutely incredible. My skin has never looked better after just three sessions.",
  },
  {
    id: 2,
    name: "Emily Rodriguez · Member",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&q=80",
    description:
      "Professional staff, a luxurious environment, and treatments that actually work. Lumina transformed my confidence.",
  },
  {
    id: 3,
    name: "Jessica Tan · New Client",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&q=80",
    description:
      "I was skeptical at first, but after my first body treatment I was hooked. The results speak for themselves!",
  },
  {
    id: 4,
    name: "Olivia Chen · Elite Member",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
    description:
      "The LED light therapy has done wonders for my skin texture. I see the difference every single day.",
  },
  {
    id: 5,
    name: "Maya Patel · Radiance Client",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80",
    description:
      "Lumina's aftercare is unparalleled. They genuinely care about your results long after you leave.",
  },
]

export default function SocialProof() {
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="text-rose-600 text-sm font-semibold uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-stone-900 dark:text-white tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-stone-500 dark:text-white/55 text-base">
            Drag or swipe to explore more reviews.
          </p>
        </motion.div>

        {/* Draggable card carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TestimonialCarousel
            testimonials={testimonials}
            className="max-w-sm mx-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}
