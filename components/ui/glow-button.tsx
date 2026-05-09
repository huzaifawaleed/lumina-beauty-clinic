import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlowButtonProps {
  children: ReactNode
  className?: string
}

/**
 * Wraps any button/link with a layered conic-gradient border glow.
 * Uses named group `group/glow` so it never conflicts with parent groups.
 * `isolate` pins z-[-1] layers inside this stacking context.
 */
export function GlowButton({ children, className }: GlowButtonProps) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center isolate group/glow",
        className,
      )}
    >
      {/* Layer 1 — outer strong glow, extends 1 px beyond bounds */}
      <div
        className="
          pointer-events-none absolute inset-[-1px] rounded-full overflow-hidden blur-[3px] z-[-1]
          before:absolute before:content-[''] before:z-[-2]
          before:w-[600px] before:h-[600px] before:bg-no-repeat
          before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2
          before:rotate-[60deg]
          before:bg-[conic-gradient(#000,#402fb5_5%,#000_38%,#000_50%,#cf30aa_60%,#000_87%)]
          before:transition-all before:duration-[2000ms]
          group-hover/glow:before:rotate-[-120deg]
          group-focus-within/glow:before:rotate-[420deg] group-focus-within/glow:before:duration-[4000ms]
        "
      />

      {/* Layer 2 — mid purple/violet glow */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-full overflow-hidden blur-[2px] z-[-1]
          before:absolute before:content-[''] before:z-[-2]
          before:w-[600px] before:h-[600px] before:bg-no-repeat
          before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2
          before:rotate-[82deg]
          before:bg-[conic-gradient(rgba(0,0,0,0),#18116a,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,#6e1b60,rgba(0,0,0,0)_60%)]
          before:transition-all before:duration-[2000ms]
          group-hover/glow:before:rotate-[-98deg]
          group-focus-within/glow:before:rotate-[442deg] group-focus-within/glow:before:duration-[4000ms]
        "
      />

      {/* Layer 3 — lavender/pink highlight sheen */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-full overflow-hidden blur-[1px] z-[-1]
          before:absolute before:content-[''] before:z-[-2]
          before:w-[600px] before:h-[600px] before:bg-no-repeat
          before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2
          before:rotate-[83deg]
          before:bg-[conic-gradient(rgba(0,0,0,0)_0%,#a099d8,rgba(0,0,0,0)_8%,rgba(0,0,0,0)_50%,#dfa2da,rgba(0,0,0,0)_58%)]
          before:brightness-[1.4]
          before:transition-all before:duration-[2000ms]
          group-hover/glow:before:rotate-[-97deg]
          group-focus-within/glow:before:rotate-[443deg] group-focus-within/glow:before:duration-[4000ms]
        "
      />

      {children}
    </div>
  )
}
