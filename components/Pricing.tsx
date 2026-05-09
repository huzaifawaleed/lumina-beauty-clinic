"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { GlowButton } from "@/components/ui/glow-button"
import { Carousel } from "@/components/ui/retro-testimonial"

interface Plan {
  name: string
  price: number
  description: string
  features: string[]
  cta: string
  featured: boolean
}

const plans: Plan[] = [
  {
    name: "Glow",
    price: 89,
    description: "Perfect for your first visit or occasional pampering.",
    features: [
      "Signature facial (60 min)",
      "Skin type analysis",
      "Basic skincare consultation",
      "Post-treatment care guide",
    ],
    cta: "Start with Glow",
    featured: false,
  },
  {
    name: "Radiance",
    price: 149,
    description: "Our most popular package for regular self-care.",
    features: [
      "Everything in Glow",
      "Full body treatment",
      "LED light therapy",
      "Monthly skin progress report",
      "Priority scheduling",
    ],
    cta: "Choose Radiance",
    featured: true,
  },
  {
    name: "Lumina Elite",
    price: 249,
    description: "The ultimate luxury beauty experience.",
    features: [
      "Everything in Radiance",
      "Exclusive premium treatments",
      "Personal beauty consultant",
      "VIP lounge access",
      "Complimentary products",
      "Same-day bookings",
    ],
    cta: "Go Elite",
    featured: false,
  },
]

function PricingSlide({ item }: { item: Plan }) {
  return (
    <div
      className={`relative flex flex-col p-10 md:p-14 rounded-3xl border max-w-md mx-auto ${
        item.featured
          ? "bg-rose-600 border-rose-600 shadow-2xl shadow-rose-200/40 dark:shadow-rose-900/40"
          : "bg-white dark:bg-zinc-800 border-stone-100 dark:border-zinc-700 shadow-sm"
      }`}
    >
      {item.featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
          Most Popular
        </span>
      )}

      <h3
        className={`font-tiemposHeadline text-3xl mb-1 ${
          item.featured ? "text-white" : "text-stone-900 dark:text-white"
        }`}
      >
        {item.name}
      </h3>
      <p className={`text-sm mb-8 ${item.featured ? "text-rose-200" : "text-stone-500 dark:text-white/55"}`}>
        {item.description}
      </p>

      <div className="flex items-end gap-1 mb-8">
        <span
          className={`text-6xl font-bold ${item.featured ? "text-white" : "text-stone-900 dark:text-white"}`}
        >
          ${item.price}
        </span>
        <span
          className={`text-sm mb-2 ${item.featured ? "text-rose-200" : "text-stone-500 dark:text-white/55"}`}
        >
          /session
        </span>
      </div>

      <ul className="space-y-3 mb-10 flex-1">
        {item.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Check
              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                item.featured ? "text-rose-200" : "text-rose-500"
              }`}
              aria-hidden
            />
            <span className={item.featured ? "text-rose-50" : "text-stone-600 dark:text-white/70"}>{f}</span>
          </li>
        ))}
      </ul>

      <GlowButton className="w-full">
        <motion.a
          href="#"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={`w-full py-3 rounded-full text-center text-sm font-semibold transition-colors ${
            item.featured
              ? "bg-white text-rose-600 hover:bg-rose-50"
              : "bg-rose-600 text-white hover:bg-rose-700"
          }`}
        >
          <AnimatedShinyText
            shimmerWidth={120}
            className={`inline mx-0 max-w-none ${
              item.featured ? "text-rose-600/80 via-rose-300" : "text-white/80 via-white"
            }`}
          >
            {item.cta}
          </AnimatedShinyText>
        </motion.a>
      </GlowButton>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-stone-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-rose-600 text-sm font-semibold uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-stone-900 dark:text-white tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-stone-500 dark:text-white/55 max-w-xl mx-auto">
            Choose the package that suits your lifestyle. No hidden fees, ever.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <Carousel
            items={plans}
            renderItem={(p) => <PricingSlide item={p} />}
            interval={7000}
          />
        </motion.div>
      </div>
    </section>
  )
}
