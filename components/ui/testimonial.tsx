"use client"

import * as React from "react"
import Image from "next/image"
import { motion, PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number | string
  name: string
  avatar: string
  description: string
}

interface TestimonialCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[]
  showArrows?: boolean
  showDots?: boolean
  autoPlayInterval?: number
}

const TestimonialCarousel = React.forwardRef<
  HTMLDivElement,
  TestimonialCarouselProps
>(
  (
    {
      className,
      testimonials,
      showArrows = true,
      showDots = true,
      autoPlayInterval = 3500,
      ...props
    },
    ref,
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [exitX, setExitX] = React.useState<number>(0)

    const advance = React.useCallback(() => {
      setExitX(-300)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setExitX(0)
      }, 200)
    }, [testimonials.length])

    React.useEffect(() => {
      const timer = setInterval(advance, autoPlayInterval)
      return () => clearInterval(timer)
    }, [advance, autoPlayInterval])

    const handleDragEnd = (
      event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo,
    ) => {
      if (Math.abs(info.offset.x) > 100) {
        setExitX(info.offset.x)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length)
          setExitX(0)
        }, 200)
      }
    }

    return (
      <div
        ref={ref}
        className={cn("h-72 w-full flex items-center justify-center", className)}
        {...props}
      >
        <div className="relative w-80 h-64">
          {testimonials.map((testimonial, index) => {
            const isCurrentCard = index === currentIndex
            const isPrevCard = index === (currentIndex + 1) % testimonials.length
            const isNextCard = index === (currentIndex + 2) % testimonials.length

            if (!isCurrentCard && !isPrevCard && !isNextCard) return null

            return (
              <motion.div
                key={testimonial.id}
                className={cn(
                  "absolute w-full h-full rounded-2xl cursor-grab active:cursor-grabbing",
                  "bg-white dark:bg-zinc-800 shadow-xl",
                )}
                style={{ zIndex: isCurrentCard ? 3 : isPrevCard ? 2 : 1 }}
                drag={isCurrentCard ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={isCurrentCard ? handleDragEnd : undefined}
                initial={{
                  scale: 0.95,
                  opacity: 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? 0 : isPrevCard ? -2 : -4,
                }}
                animate={{
                  scale: isCurrentCard ? 1 : 0.95,
                  opacity: isCurrentCard ? 1 : isPrevCard ? 0.6 : 0.3,
                  x: isCurrentCard ? exitX : 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? exitX / 20 : isPrevCard ? -2 : -4,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {showArrows && isCurrentCard && (
                  <div className="absolute inset-x-0 top-2 flex justify-between px-4">
                    <span className="text-2xl select-none text-stone-300 dark:text-white/25 hover:text-stone-400 dark:hover:text-white/50">
                      &larr;
                    </span>
                    <span className="text-2xl select-none text-stone-300 dark:text-white/25 hover:text-stone-400 dark:hover:text-white/50">
                      &rarr;
                    </span>
                  </div>
                )}

                <div className="p-6 flex flex-col items-center gap-3 pt-8">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                    loading="lazy"
                  />
                  <h3 className="text-base font-semibold text-stone-800 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-center text-sm text-stone-500 dark:text-white/60 leading-relaxed">
                    {testimonial.description}
                  </p>
                </div>
              </motion.div>
            )
          })}

          {showDots && (
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors duration-300",
                    index === currentIndex ? "bg-rose-500" : "bg-stone-300 dark:bg-white/25",
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  },
)
TestimonialCarousel.displayName = "TestimonialCarousel"

export { TestimonialCarousel, type Testimonial }
