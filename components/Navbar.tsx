"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sparkles, Sun, Moon } from "lucide-react"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { GlowButton } from "@/components/ui/glow-button"
import { useTheme } from "@/components/ThemeProvider"

const links = [
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isDark = theme === "dark"

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-zinc-900/90 backdrop-blur-md border-b border-white/[0.08]"
            : "bg-white/90 backdrop-blur-md border-b border-stone-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`flex items-center gap-2 font-bold text-xl transition-colors duration-300 ${
            !scrolled || isDark ? "text-white" : "text-stone-900"
          }`}
        >
          <Sparkles className="w-5 h-5 text-rose-400" />
          Lumina
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors duration-200 ${
                !scrolled || isDark
                  ? "text-white/70 hover:text-white"
                  : "text-stone-600 hover:text-rose-600"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={`p-2 rounded-full transition-colors ${
              !scrolled || isDark
                ? "text-white/70 hover:text-white hover:bg-white/10"
                : "text-stone-500 hover:text-stone-900 hover:bg-stone-100"
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Desktop CTA */}
          <GlowButton>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center px-5 py-2 bg-rose-600 text-white text-sm font-semibold rounded-full hover:bg-rose-500 transition-colors"
            >
              <AnimatedShinyText shimmerWidth={90} className="inline mx-0 max-w-none text-white/80 via-white">
                Book Now
              </AnimatedShinyText>
            </motion.a>
          </GlowButton>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-1">
          <button
            onClick={toggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={`p-2 transition-colors ${
              !scrolled || isDark ? "text-white/70 hover:text-white" : "text-stone-500 hover:text-stone-900"
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            className={`p-2 transition-colors ${
              !scrolled || isDark ? "text-white hover:text-rose-300" : "text-stone-700 hover:text-rose-600"
            }`}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 400 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`md:hidden overflow-hidden border-b ${
              isDark ? "bg-zinc-900 border-white/[0.08]" : "bg-white border-stone-100"
            }`}
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`py-2.5 text-sm font-medium transition-colors ${
                    isDark ? "text-white/70 hover:text-rose-400" : "text-stone-700 hover:text-rose-600"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <GlowButton className="mt-2 w-full">
                <a
                  href="#pricing"
                  onClick={() => setOpen(false)}
                  className="w-full py-3 bg-rose-600 text-white text-sm font-semibold rounded-full text-center hover:bg-rose-700 transition-colors"
                >
                  <AnimatedShinyText shimmerWidth={90} className="inline mx-0 max-w-none text-white/80 via-white">
                    Book Now
                  </AnimatedShinyText>
                </a>
              </GlowButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
