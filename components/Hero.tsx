"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import { SpiralAnimation } from "@/components/ui/spiral-animation"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { GlowButton } from "@/components/ui/glow-button"

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const, delay },
  },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16">
      {/* Spiral animation fills the entire hero */}
      <div className="absolute inset-0">
        <SpiralAnimation />
      </div>

      {/* Bottom gradient fades into Services section bg */}
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-stone-50 dark:from-zinc-950 to-transparent pointer-events-none"
      />

      {/* Content — sits above the canvas */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-24 text-center">
        {/* Rating badge */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-8"
        >
          <span className="flex" aria-label="5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
            ))}
          </span>
          Trusted by 2,000+ happy clients
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="show"
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
        >
          Rediscover Your{" "}
          <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
            Natural Glow
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp(0.3)}
          initial="hidden"
          animate="show"
          className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Premium beauty treatments tailored to your unique skin and body.
          Expert practitioners, luxurious environment, exceptional results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <GlowButton>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-rose-600 text-white text-base font-semibold rounded-full shadow-lg shadow-rose-900/40 hover:bg-rose-500 transition-colors"
            >
              <AnimatedShinyText shimmerWidth={180} className="inline-flex items-center gap-2 mx-0 max-w-none text-white/80 via-white">
                Book Your Appointment
                <ArrowRight className="w-4 h-4" />
              </AnimatedShinyText>
            </motion.a>
          </GlowButton>
          <GlowButton>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 border border-white/25 backdrop-blur-sm text-white text-base font-semibold rounded-full hover:bg-white/20 transition-colors"
            >
              <AnimatedShinyText shimmerWidth={150} className="inline mx-0 max-w-none text-white/80 via-white">
                Explore Treatments
              </AnimatedShinyText>
            </motion.a>
          </GlowButton>
        </motion.div>

        {/* Trust row */}
        <motion.div
          variants={fadeUp(0.55)}
          initial="hidden"
          animate="show"
          className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {["No Hidden Fees", "Expert Practitioners", "Luxury Experience", "100% Safe Ingredients"].map((t) => (
            <span key={t} className="flex items-center gap-2 text-sm text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0" aria-hidden />
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
