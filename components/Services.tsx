"use client"

import { motion } from "framer-motion"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"

export default function Services() {
  return (
    <section id="services" className="py-24 bg-stone-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-rose-600 text-sm font-semibold uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-stone-900 dark:text-white tracking-tight">
            Treatments Made for You
          </h2>
          <p className="mt-4 text-lg text-stone-500 dark:text-white/55 max-w-xl mx-auto">
            Hear from clients who&apos;ve experienced our signature treatments first-hand.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <StaggerTestimonials />
        </motion.div>
      </div>
    </section>
  )
}
