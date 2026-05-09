"use client"

import { motion } from "framer-motion"
import { CSSSparkles } from "@/components/ui/css-sparkles"

const stats = [
  { value: "2,000+", label: "Happy Clients" },
  { value: "4.9★", label: "Average Rating" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Treatments" },
]

export default function StatsSparkles() {
  return (
    <div className="relative w-full overflow-hidden bg-zinc-950">
      {/* Purple radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(131,80,232,0.35) 0%, transparent 70%)",
        }}
      />

      {/* CSS sparkles — zero JS overhead */}
      <CSSSparkles className="[mask-image:radial-gradient(50%_50%,white,transparent_88%)]" />

      {/* Content */}
      <div className="relative z-10 py-20 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="text-center text-rose-400 text-sm font-semibold uppercase tracking-widest mb-12"
        >
          Lumina By The Numbers
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">
                {s.value}
              </div>
              <div className="text-sm text-white/55 uppercase tracking-wider">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom fade — colour switches with theme via CSS class */}
      <div
        aria-hidden
        className="stats-fade-bottom absolute bottom-0 inset-x-0 h-16 pointer-events-none"
      />
    </div>
  )
}
