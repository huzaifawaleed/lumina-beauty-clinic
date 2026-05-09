// Pure-CSS sparkles — zero JS animation overhead.
// Positions computed from a deterministic hash so server and client agree.
import { cn } from "@/lib/utils"

const COUNT = 80

function hash(i: number, salt: number): number {
  const x = Math.sin(i * 157.3 + salt * 311.7) * 43758.5453
  return Math.abs(x - Math.floor(x))
}

const DOTS = Array.from({ length: COUNT }, (_, i) => ({
  left: `${(hash(i, 0) * 100).toFixed(2)}%`,
  top: `${(hash(i, 1) * 100).toFixed(2)}%`,
  size: `${(hash(i, 2) * 1.5 + 0.4).toFixed(2)}px`,
  delay: `${(hash(i, 3) * 5).toFixed(2)}s`,
  duration: `${(hash(i, 4) * 3 + 2).toFixed(2)}s`,
  minOp: (hash(i, 5) * 0.15 + 0.03).toFixed(3),
  maxOp: (hash(i, 6) * 0.55 + 0.35).toFixed(3),
}))

export function CSSSparkles({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("absolute inset-0 overflow-hidden pointer-events-none select-none", className)}
    >
      {DOTS.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={
            {
              left: d.left,
              top: d.top,
              width: d.size,
              height: d.size,
              "--min-opacity": d.minOp,
              "--max-opacity": d.maxOp,
              animation: `twinkle ${d.duration} ${d.delay} ease-in-out infinite`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
