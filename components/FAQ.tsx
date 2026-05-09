"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Click the 'Book Now' button and select your preferred treatment, date, and time. We'll confirm via email within a few hours.",
  },
  {
    q: "What should I expect during my first visit?",
    a: "Your first visit includes a complimentary skin consultation with one of our expert practitioners. We'll assess your skin, discuss your goals, and recommend the best treatments for you.",
  },
  {
    q: "Are your treatments safe for sensitive skin?",
    a: "Absolutely. All our products are dermatologist-tested and hypoallergenic. We tailor every treatment to your skin type and any sensitivities you have.",
  },
  {
    q: "How many sessions will I need to see results?",
    a: "Most clients notice visible improvements after their first session. For lasting results, we typically recommend a course of 4–6 sessions depending on your treatment and goals.",
  },
  {
    q: "Do you offer package deals or memberships?",
    a: "Yes! Our Radiance and Lumina Elite packages offer excellent value for regular clients. We also run seasonal promotions — sign up to our newsletter to stay updated.",
  },
]

function Item({
  q,
  a,
  open,
  onToggle,
}: {
  q: string
  a: string
  open: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-stone-100 dark:border-white/[0.08] last:border-0">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="text-base font-medium text-stone-800 dark:text-white/90 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
          {q}
        </span>
        <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-rose-50 dark:bg-rose-900/40 text-rose-500 dark:text-rose-400 group-hover:bg-rose-100 dark:group-hover:bg-rose-900/60 transition-colors">
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-stone-500 dark:text-white/55 leading-relaxed pr-10">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i)

  return (
    <section id="faq" className="py-24 bg-stone-50 dark:bg-zinc-950">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-rose-600 text-sm font-semibold uppercase tracking-widest">FAQ</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-stone-900 dark:text-white tracking-tight">
            Common Questions
          </h2>
          <p className="mt-4 text-lg text-stone-500 dark:text-white/55">
            Everything you need to know before your first visit.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white dark:bg-zinc-900 rounded-2xl px-6 py-2 shadow-sm dark:shadow-none"
        >
          {faqs.map((faq, i) => (
            <Item
              key={i}
              q={faq.q}
              a={faq.a}
              open={openIdx === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
