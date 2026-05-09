"use client"

import { Sparkles } from "lucide-react"

const columns: Record<string, string[]> = {
  Treatments: ["Signature Facials", "Body Treatments", "Skin Rejuvenation", "LED Therapy"],
  Company: ["About Us", "Our Team", "Careers", "Blog"],
  Support: ["Book Appointment", "FAQ", "Contact Us", "Cancellation Policy"],
}

const socials = ["Instagram", "Facebook", "TikTok"]

export default function Footer() {
  return (
    <footer className="relative z-10 mt-8 w-full overflow-hidden bg-stone-950 pt-16 pb-8">
      {/* Rose glow blobs — same animation as the demo */}
      <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full -translate-x-1/2 select-none">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-rose-600/20 blur-3xl" />
        <div className="absolute right-1/4 -bottom-24 h-80 w-80 rounded-full bg-rose-600/20 blur-3xl" />
      </div>

      {/* Glass card */}
      <div
        className="relative z-10 mx-auto max-w-6xl rounded-2xl border border-white/[0.06] px-6 py-10 backdrop-blur-sm"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(30,0,0,0.08) 60%, rgba(28,14,14,0.5) 100%)",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <Sparkles className="w-5 h-5 text-rose-400" aria-hidden />
              Lumina
            </div>
            <p className="text-sm leading-relaxed text-stone-500 max-w-xs">
              Premium beauty clinic dedicated to enhancing your natural glow. Expert care,
              exceptional results.
            </p>
            <div className="flex gap-5 mt-6">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="text-xs text-stone-500 hover:text-rose-400 transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(columns).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-white mb-4">{heading}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-stone-500 hover:text-rose-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <p>© 2026 Lumina Beauty Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-rose-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-rose-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
