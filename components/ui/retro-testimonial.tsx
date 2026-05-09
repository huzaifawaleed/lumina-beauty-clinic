"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export interface iTestimonial {
  quote: string
  name: string
  role: string
  image: string
  rating?: number
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "55%" : "-55%",
    opacity: 0,
  }),
  center: { x: "0%", opacity: 1 },
  exit: (direction: number) => ({
    x: direction < 0 ? "55%" : "-55%",
    opacity: 0,
  }),
}

export function TestimonialCard({ item }: { item: iTestimonial }) {
  return (
    <div className="bg-stone-50 dark:bg-zinc-800 rounded-3xl border border-stone-100 dark:border-zinc-700/80 shadow-sm px-8 py-10 md:px-14 md:py-12 max-w-2xl mx-auto flex flex-col items-center text-center gap-5">
      <span
        className="font-tiemposHeadline text-7xl leading-none text-rose-300 dark:text-rose-200 -mb-4 select-none"
        aria-hidden
      >
        &ldquo;
      </span>

      <p className="font-tiemposHeadline text-xl md:text-2xl text-stone-700 dark:text-white/80 italic leading-relaxed">
        {item.quote}
      </p>

      {item.rating && (
        <div className="flex gap-0.5">
          {Array.from({ length: item.rating }).map((_, i) => (
            <span key={i} className="text-amber-400 text-sm">
              ★
            </span>
          ))}
        </div>
      )}

      <div className="w-10 h-px bg-stone-200 dark:bg-white/20" />

      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden border-2 border-white shadow">
          <Image
            src={item.image}
            alt={item.name}
            fill
            style={{ objectFit: "cover" }}
            sizes="48px"
          />
        </div>
        <div className="text-left">
          <div className="text-sm font-semibold text-stone-900 dark:text-white">{item.name}</div>
          <div className="text-xs text-stone-500 dark:text-white/55 mt-0.5">{item.role}</div>
        </div>
      </div>
    </div>
  )
}

export function Carousel<T extends object>({
  items,
  renderItem,
  autoPlay = true,
  interval = 5000,
}: {
  items: T[]
  renderItem: (item: T) => ReactNode
  autoPlay?: boolean
  interval?: number
}) {
  const [[activeIndex, direction], setSlide] = useState([0, 0])

  const go = useCallback(
    (dir: number) => {
      setSlide(([cur]) => [(cur + dir + items.length) % items.length, dir])
    },
    [items.length]
  )

  useEffect(() => {
    if (!autoPlay || items.length < 2) return
    const t = setInterval(() => go(1), interval)
    return () => clearInterval(t)
  }, [autoPlay, go, interval, items.length])

  return (
    <div className="w-full">
      <div className="relative">
        <div className="overflow-hidden mx-10 md:mx-14">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {renderItem(items[activeIndex])}
            </motion.div>
          </AnimatePresence>
        </div>

        {items.length > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-stone-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center hover:bg-stone-50 dark:hover:bg-zinc-700 hover:border-rose-200 dark:hover:border-rose-500/50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-stone-500 dark:text-white/60" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-stone-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center hover:bg-stone-50 dark:hover:bg-zinc-700 hover:border-rose-200 dark:hover:border-rose-500/50 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-stone-500 dark:text-white/60" />
            </button>
          </>
        )}
      </div>

      {items.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide([i, i > activeIndex ? 1 : -1])}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === activeIndex
                  ? "w-6 bg-rose-500"
                  : "w-2 bg-stone-300 dark:bg-white/25 hover:bg-stone-400 dark:hover:bg-white/40"
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
